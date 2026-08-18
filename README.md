# @angel-gp/dsh-client-ui-gitpeek

只读的 GitHub 数据查看面板，作为 DSH 会话的第三个标签页（紧跟「轨迹」之后），展示 Actions 运行、Commits、Releases 三列数据。

## 功能

- 三列并排，各自独立滚动
- 记忆多个仓库地址 + 单个 PAT token（存浏览器 localStorage）
- 缓存不过期：打开直接显示缓存，点「刷新」才重新拉取

## 第一次使用：三步完成

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

也可以自己打开 PowerShell 执行：

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

## License

MIT
