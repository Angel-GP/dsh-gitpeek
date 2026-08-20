# @angel-gp/dsh-client-ui-gitpeek

[English](README.md) | [中文](README.zh.md)

只读的 GitHub 数据查看面板，作为 DeepSeek Harness（DSH）会话的第三个标签页（紧跟「轨迹」之后），在浏览器中直接调用 GitHub REST API，并排展示 Actions 运行、Commits、Releases 三列数据。
<img width="2141" height="1375" alt="image" src="https://github.com/user-attachments/assets/3951a391-5986-4d09-ae20-4d07d6c06d09" />

## 功能

- 三列并排，各自独立滚动
- 记忆多个仓库地址 + 单个 PAT token：存入前先用 **AES-256-GCM**（Web Crypto）加密，`localStorage` 里不再有明文；密钥留在同一浏览器中
- 加载更多：每列通过 GitHub `Link` 响应头分页，带「加载更多」按钮（每页 30 条 runs / 30 条 releases / 100 条 commits）
- 进入自动刷新：打开会话先秒显缓存，再后台自动拉取一次——重启后不会停留在旧数据
- 切换仓库自动刷新：点击已保存的仓库 chip 立即切换并拉取该仓库数据
- 缓存不过期：打开会话直接显示缓存，点「刷新」或进入会话时才重新拉取
- 国际化：界面文案随 DSH 语言偏好（zh / en）切换
- 三列数据并行拉取，任一接口失败单独提示，互不影响

## 安装

### 0. 前置条件

- `dsh` 和 `pnpm` 在 PATH 中（DSH Desktop 自带，重新开一个 PowerShell 即可生效）。
- `git` 在 PATH 中且能访问 github.com。`dsh plugin` 内部转发给 pnpm，pnpm 会从 `github:` specifier 克隆仓库——走 HTTPS，或配置好 SSH（`insteadOf` 重写 / 代理）后走 SSH。
- 弄清楚你正在运行的 DSH 用的是哪个 profile。插件装进命令里指定的那个 profile，只有运行**同一个 profile** 的 GUI 才会显示它。**DSH Desktop 默认是 `desktop` profile**，和 `web` 是不同的组合——要么装进你实际运行的 profile，要么把 GUI 切换到你要安装的 profile。

### 1. 安装插件

**让 Agent 安装（推荐）**

如果当前 Agent 可以执行终端命令，把下面这段话完整发送给它：

> 请为 DeepSeek Harness 的 web Profile 安装 gitpeek 插件。
>
> 只执行下面两条命令，不要修改其他 Profile：
> ```
> dsh plugin --profile web add github:Angel-GP/dsh-gitpeek#main
> dsh --profile web --dump-config
> ```
> 确认输出中出现 `@angel-gp/dsh-client-ui-gitpeek` 后告诉我安装结果。
> 不要替我关闭或重启正在运行的 DSH；安装完成后提醒我手动重启 DSH Web Host。

把其中的 `web` 换成你的 GUI 实际运行的 profile（DSH Desktop 通常是 `desktop`）。

**手动安装**

也可以自己在 PowerShell 里执行同样的两条命令：

```
dsh plugin --profile web add github:Angel-GP/dsh-gitpeek#main
dsh --profile web --dump-config
```

> **DSH Desktop 用户注意**：打包的 `dsh` 命令可能拒绝初始化它还不认识的 profile（报 `ENOENT: lstat .../profiles/<name>`）。遇到时先执行一次 `dsh plugin --profile <name> add <任意包>` 创建 profile，再重复上面的 add；或者让 Agent 直接调用等价的 `dsh` bin。

> **关于 peer 依赖警告**：pnpm 会打印 `[WARN] Issues with peer dependencies found`，因为 `react` 和 `@deepseek-ai/*` 包由 DSH 的符号链接依赖树（`$DSH_HOME/profiles/node_modules`）提供，而不是列在 profile 自己的 `dependencies` 里。这个警告是预期的、无害的——用下面的 `--dump-config` 验证即可。

### 2. 验证

确认 `--dump-config` 的输出中出现 `@angel-gp/dsh-client-ui-gitpeek`，说明插件已进入组合层：

```
# == @angel-gp/dsh-client-ui-gitpeek
- id: gitpeek
  name: '@angel-gp/dsh-client-ui-gitpeek'
```

### 3. 重启

手动重启 DSH Web Host。重启后 GitHub 标签页会出现在「轨迹」旁边。

### 4. 最终验证

在运行中的 GUI 里打开一个会话：会话标签页中应出现 **GitHub** 标签（在「轨迹」旁边），输入仓库（如 `owner/repo`）并点「刷新」后三列数据应正常加载。如果标签页没出现，请确认 GUI 运行的是你安装时的那个 profile（见第 0 步）。

## 卸载

完全卸载 = 从 profile 移除插件 + 重启使 GUI 生效 + 清除浏览器残留数据。

### 1. 移除插件依赖

```
dsh plugin --profile web remove @angel-gp/dsh-client-ui-gitpeek
```

把 `web` 换成你安装时的 profile。`dsh plugin` 转发给 pnpm；成功后会自动把该包从 profile 的 `dsh.profile.bundles` 列表移除。

> **DSH Desktop 用户注意**：和安装时一样，打包的 `dsh` 命令可能报 `ENOENT: lstat .../profiles/<name>`，遇到时直接调用等价的 `dsh` bin。

验证插件已退出组合层：

```
dsh --profile web --dump-config
```

输出中应不再出现 `@angel-gp/dsh-client-ui-gitpeek`。

### 2. 重启 DSH Web Host

手动重启 DSH Web Host。组合层重新解析后 GitHub 标签页消失——这一步才是真正从运行中的 GUI 卸载。

### 3. 清除浏览器残留数据（手动）

插件把配置和缓存存在浏览器 `localStorage`，卸载后**不会**自动清理：

- `dsh.ghwf.config` —— **加密后的 PAT token**
- `dsh.ghwf.key` —— 解密所需的 AES-GCM 密钥（务必与 config 一起清除）
- `dsh.ghwf.cache` —— 缓存的 Actions / Commits / Releases 数据

在 DSH 网页里打开 DevTools（F12）→ Console 执行：

```js
localStorage.removeItem("dsh.ghwf.config");
localStorage.removeItem("dsh.ghwf.key");
localStorage.removeItem("dsh.ghwf.cache");
```

### 4.（可选）清理 pnpm store

```
pnpm store prune
```

删除 pnpm 内容寻址存储里不再被任何 profile 引用的包（包括 gitpeek 及其下载缓存），不影响其他 profile。如果之后还可能重装，可以跳过。

## 获取 PAT token

插件用 PAT 提升 GitHub API 读取额度（匿名 60 次/小时，带 token 5000 次/小时）。只读查询，权限最小化即可：

1. 打开 https://github.com/settings/personal-access-tokens/new
2. 选 **Fine-grained token**
3. **Repository access** 选 **Only select repositories**，勾选你要查看的仓库
4. **Permissions** 里给：
   - **Actions → Read-only**（读 workflow runs）
   - **Contents → Read-only**（读 releases、commits）
   - **Metadata → Read-only**（通常自动包含）
5. 生成后把 token 粘贴到插件的「PAT」输入框

### 安全提示

PAT 先经 AES-256-GCM 加密再存储。加密密钥保留在同一个浏览器（`localStorage` 里的随机 32 字节），因此存储值不是明文——但任何能在这台浏览器里运行脚本的东西（扩展、开发者工具、同源脚本）仍能解密它。请：

- 只授予「只读 + 选定仓库」的最小权限（见上文）；
- 不要把这个 token 用于其他服务或账号操作；
- 不再需要时，随时在 GitHub 上撤销或轮换它。

## 持久化（为什么保存的数据会"消失"）

gitpeek 把已保存的仓库和加密 PAT 存在浏览器 `localStorage`，它按 **origin（协议 + 主机 + 端口）** 隔离。如果 DSH 每次启动监听**不同的端口**，每次启动都会看到空的 `localStorage`，已保存的数据就像"消失"了。

- **`dsh --profile web`（纯 Web 端）**：默认稳定——监听固定端口（未传 `--port` 时为 `3080`），重启后数据仍在。只要每次都使用同一个端口即可。
- **DSH Desktop**：**默认随机端口**（未设置 `dsh-desktop.port` 时每次启动由系统挑选空闲端口），因此每次重启数据都会丢失。

### DSH Desktop 的修复方法

在 `$DSH_HOME/settings.yaml` 里固定一个端口（若 `3080` 与其他程序冲突可改成别的）：

```yaml
dsh-desktop:
  mode: advanced
  port: 3080
```

然后**完全退出并重启 DSH Desktop**。首次重启后 origin 稳定，已保存的仓库 / PAT 就能持久。注意：之前随机端口下保存的数据无法迁移到新端口（浏览器安全限制）——切换后需要重新输入一次仓库和 token。

经验法则：**始终用同一个端口启动 DSH**，数据就会一直在。

## License

MIT
