# @angel-gp/dsh-client-ui-gitpeek

只读的 GitHub 数据查看面板，作为 DSH 会话的第三个标签页（紧跟「轨迹」之后），展示 Actions 运行、Commits、Releases 三列数据。

## 功能

- 三列并排，各自独立滚动
- 记忆多个仓库地址 + 单个 PAT token（存浏览器 localStorage）
- 缓存不过期：打开直接显示缓存，点「刷新」才重新拉取

## 安装

```bash
dsh plugin --profile web add git+https://github.com/Angel-GP/dsh-gitpeek.git
```

重启 DSH 进程即可。

## License

MIT
