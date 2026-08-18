# @angel-gp/dsh-client-ui-gitpeek

只读的 GitHub 数据查看面板，作为 DSH 会话的第三个标签页（紧跟「轨迹」之后），展示 Actions 运行、Commits、Releases 三列数据。

## 功能

- 三列并排，各自独立滚动
- 记忆多个仓库地址 + 单个 PAT token（存浏览器 localStorage）
- 缓存不过期：打开直接显示缓存，点「刷新」才重新拉取

## 安装

### 方式一：命令行

```bash
dsh plugin --profile web add git+https://github.com/Angel-GP/dsh-gitpeek.git
```

重启 DSH 进程即可。

### 方式二：让 DSH 的 agent 安装

在 DSH 里对 agent 说：

> 帮我安装 GitHub 面板插件：执行 `dsh plugin --profile web add git+https://github.com/Angel-GP/dsh-gitpeek.git`，然后重启 DSH。

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
