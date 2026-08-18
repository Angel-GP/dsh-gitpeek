# @angel-gp/dsh-client-ui-gitpeek

一个只读的 GitHub 数据查看面板，作为 DSH 会话的第三个标签页（紧跟「轨迹」之后），展示 Actions 运行、Commits、Releases 三列数据。

## 这是什么

这是一个 **DSH（DeepSeek Harness）静态客户端 UI 插件**。它只能在 DSH 里运行——依赖 DSH 的模块加载器（`window.__ModuleLoader__`）、`slots` 服务和 `conversation.view` 插槽，不能独立作为普通网页插件使用。

## 功能

- 只读展示：Actions 运行、Commits、Releases（无任何写操作）
- 三列并排，各自独立滚动
- 记忆多个仓库地址 + 单个 PAT token（存浏览器 localStorage）
- 输入框自动记忆上次地址；刷新按钮 = 保存 + 刷新
- 缓存不过期：仓库不变时打开直接显示缓存，不重新加载；点「刷新」才强制重新拉取

## 安装

前提：已安装 DSH，且使用 `web` profile。

### 方式一：git 仓库安装（推荐）

```bash
dsh plugin --profile web add git+https://github.com/Angel-GP/dsh-gitpeek.git
```

本插件声明了 `dsh.bundle`，`dsh plugin add` 会自动把它加入 profile 的组合层，**无需手动加 insert 行**。重启 DSH 进程即可。

### 方式二：手动复制

1. 把本文件夹整个复制到 profile 依赖目录：

   ```
   <DSH_HOME>/profiles/web/node_modules/@angel-gp/dsh-client-ui-gitpeek/
   ```

   （`<DSH_HOME>` 默认是 `~/.dsh`，Windows 上是 `C:\Users\<用户>\.dsh`）

2. 编辑 `<DSH_HOME>/profiles/web/cordis.patch.yml`，加入：

   ```yaml
   - insert:
       - id: gitpeek
         name: '@angel-gp/dsh-client-ui-gitpeek'
   ```

3. 重启 DSH 进程。

## 为什么声明 dsh.bundle

DSH 的组合（composition）由 `cordis.patch.yml` 决定哪些插件被加载。`dsh plugin add` 只负责把包装进 `node_modules`；只有包名出现在组合里，loader 才会加载它。

声明 `dsh.bundle`（`package.json` 的 `dsh.bundle.patch` 指向自带的 `cordis.patch.yml`）后，`dsh plugin` 的 reconcile 逻辑会检测到该声明并自动把包加入 profile 的组合层，用户无需手动加 insert 行。

## 配置

配置存浏览器 `localStorage`（键 `dsh.ghwf.config` / `dsh.ghwf.cache`），不落盘到工作区，token 不写明文文件。

## License

MIT
