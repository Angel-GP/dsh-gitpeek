# @angel-gp/dsh-client-ui-gitpeek

[English](README.md) | [中文](README.zh.md)

只读的 GitHub 数据查看面板，作为 DeepSeek Harness（DSH）会话的第三个标签页（紧跟「轨迹」之后），在浏览器中直接调用 GitHub REST API，并排展示 Actions 运行、Commits、Releases 三列数据。

## 功能

- 三列并排，各自独立滚动
- 记忆多个仓库地址 + 单个 PAT token（存浏览器 `localStorage`）
- 缓存不过期：打开会话直接显示缓存，点「刷新」才重新拉取
- 国际化：界面文案随 DSH 语言偏好（zh / en）切换
- 三列数据并行拉取，任一接口失败单独提示，互不影响

## 安装

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

Agent 应当返回安装结果，并明确告诉你配置中是否已经出现 `@angel-gp/dsh-client-ui-gitpeek`。

**手动安装**

也可以自己在 PowerShell 里执行同样的两条命令：

```
dsh plugin --profile web add github:Angel-GP/dsh-gitpeek#main
dsh --profile web --dump-config
```

### 2. 验证

确认 `--dump-config` 的输出中出现 `@angel-gp/dsh-client-ui-gitpeek`，说明插件已进入组合层。

### 3. 重启

手动重启 DSH Web Host。重启后 GitHub 标签页会出现在「轨迹」旁边。

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

PAT 以明文保存在浏览器 `localStorage`，任何能访问该浏览器（扩展、开发者工具、同源脚本、同一 Profile 的其他使用者）的人都能读到它。请：

- 只授予「只读 + 选定仓库」的最小权限（见上文）；
- 不要把这个 token 用于其他服务或账号操作；
- 不再需要时，随时在 GitHub 上撤销或轮换它。

## 开发

```bash
# 安装依赖（类型检查 / 本地开发）
pnpm install

# 语法检查
node --check lib/index.js
node --check lib/client.js
```

`lib/client.js` 是浏览器端插件入口（`window.__ModuleLoader__.load` 产物格式，不含 JSX / TypeScript，按 DSH client 插件约束手写）；`lib/index.js` 是 Host 侧空入口。`cordis.patch.yml` 声明本包作为 profile bundle patch 的挂载方式。界面文案集中在 `lib/client.js` 顶部的 `zh` / `en` 词典中，新增文案请同步维护两个词典。

## 模型体验

无。该面板在浏览器中渲染 GitHub 数据；本包没有任何内容进入模型请求。

#### KV Cache 影响

无；该包既不组装也不发送提供方请求。

## 已知限制与暂缓事项

- **PAT 明文存 localStorage**：本地只读面板的刻意取舍，尚未接入 `dsh-credentials`（见上文安全提示）。
- **每列固定窗口**：最多 30 条 runs、30 条 releases、100 条 commits，无分页 /「加载更多」。
- **缓存永不过期**：点「刷新」前一直显示缓存数据，面板可能短暂落后于仓库实时状态。

## License

MIT
