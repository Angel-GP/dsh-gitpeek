window.__ModuleLoader__.load({
  id: "@angel-gp/dsh-client-ui-gitpeek",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

    var React = require("react");

    // ── locale ──────────────────────────────────────────────────────────────
    var NS = "gitpeek";
    var zh = {
      "view.gitpeek": "GitHub",
      "common.refresh": "刷新",
      "common.saveToken": "保存 Token",
      "common.saved": "已保存",
      "common.deleted": "已删除",
      "common.open": "打开",
      "common.hint": "输入仓库后查看",
      "common.loadMore": "加载更多",
      "saved.empty": "暂无保存的仓库",
      "repo.placeholder": "owner/repo 或仓库地址",
      "token.placeholder": "PAT (可选, 提升读取额度)",
      "error.badSlug": "无法确定仓库 owner/repo",
      "error.fetchRuns": "Actions 拉取失败",
      "error.fetchReleases": "Releases 拉取失败",
      "error.fetchCommits": "Commits 拉取失败",
      "runs.title": "Actions 运行",
      "runs.empty": "暂无运行记录",
      "commits.title": "Commits",
      "commits.empty": "暂无提交",
      "releases.title": "Releases",
      "releases.empty": "暂无 Release",
      "releases.prerelease": "预发布",
      "releases.draft": "草稿",
      "status.success": "成功",
      "status.failure": "失败",
      "status.cancelled": "已取消",
      "status.skipped": "跳过",
      "status.neutral": "中性",
      "status.timed_out": "超时",
      "status.action_required": "需处理",
      "status.stale": "过期",
      "status.completed": "完成",
      "status.queued": "排队中",
      "status.in_progress": "进行中",
      "status.waiting": "等待中",
      "status.requested": "已请求",
      "status.pending": "等待中"
    };
    var en = {
      "view.gitpeek": "GitHub",
      "common.refresh": "Refresh",
      "common.saveToken": "Save token",
      "common.saved": "Saved",
      "common.deleted": "Deleted",
      "common.open": "Open",
      "common.hint": "Enter a repo to view",
      "common.loadMore": "Load more",
      "saved.empty": "No saved repositories",
      "repo.placeholder": "owner/repo or repo URL",
      "token.placeholder": "PAT (optional, raises rate limit)",
      "error.badSlug": "Cannot determine owner/repo",
      "error.fetchRuns": "Failed to fetch Actions",
      "error.fetchReleases": "Failed to fetch Releases",
      "error.fetchCommits": "Failed to fetch Commits",
      "runs.title": "Actions runs",
      "runs.empty": "No runs yet",
      "commits.title": "Commits",
      "commits.empty": "No commits",
      "releases.title": "Releases",
      "releases.empty": "No releases",
      "releases.prerelease": "Pre-release",
      "releases.draft": "Draft",
      "status.success": "Success",
      "status.failure": "Failed",
      "status.cancelled": "Cancelled",
      "status.skipped": "Skipped",
      "status.neutral": "Neutral",
      "status.timed_out": "Timed out",
      "status.action_required": "Action required",
      "status.stale": "Stale",
      "status.completed": "Completed",
      "status.queued": "Queued",
      "status.in_progress": "In progress",
      "status.waiting": "Waiting",
      "status.requested": "Requested",
      "status.pending": "Pending"
    };
    // Bound by apply() once the locale service is available; falls back to zh.
    var t = function (key) { return zh[key] || key; };

    // ── CSS ────────────────────────────────────────────────────────────────
    var css = [
      ".ghwf-view {",
      "  box-sizing: border-box;",
      "  display: flex;",
      "  flex-direction: column;",
      "  height: 100%;",
      "  min-height: 0;",
      "  padding: 12px 16px calc(var(--dsh-composer-height, 152px) + 16px);",
      "  overflow: hidden;",
      "  font-size: 12px;",
      "  color: var(--dsw-alias-label-primary);",
      "}",
      ".ghwf-top { flex: none; }",
      ".ghwf-row { display: flex; gap: 6px; margin-bottom: 8px; }",
      ".ghwf-input-wrap { position: relative; flex: 1; display: flex; min-width: 0; }",
      ".ghwf-input {",
      "  flex: 1;",
      "  background: var(--dsw-alias-bg-layer-1);",
      "  border: 1px solid var(--dsw-alias-border-l1);",
      "  border-radius: 6px;",
      "  color: var(--dsw-alias-label-primary);",
      "  padding: 5px 26px 5px 8px;",
      "  font-size: 12px;",
      "  min-width: 0;",
      "}",
      ".ghwf-caret-btn {",
      "  position: absolute; right: 6px; top: 50%; transform: translateY(-50%);",
      "  border: none; background: transparent; cursor: pointer;",
      "  color: var(--dsw-alias-label-secondary); font-size: 10px; padding: 0; line-height: 1;",
      "}",
      ".ghwf-caret-btn:hover { color: var(--dsw-alias-label-primary); }",
      ".ghwf-caret-btn .ghwf-caret { display: inline-block; transition: transform 0.15s; }",
      ".ghwf-caret-btn .ghwf-caret.open { transform: rotate(90deg); }",
      ".ghwf-btn {",
      "  background: var(--dsw-alias-bg-layer-2);",
      "  border: 1px solid var(--dsw-alias-border-l1);",
      "  border-radius: 6px;",
      "  color: var(--dsw-alias-label-primary);",
      "  padding: 5px 9px; font-size: 12px; cursor: pointer; white-space: nowrap;",
      "}",
      ".ghwf-btn:hover { border-color: var(--dsw-alias-border-l2); }",
      ".ghwf-btn:disabled { opacity: 0.5; cursor: default; }",
      ".ghwf-btn.primary { background: var(--dsw-alias-brand-primary); color: #fff; border-color: transparent; }",
      ".ghwf-err {",
      "  color: var(--dsw-alias-state-error-primary);",
      "  background: var(--dsw-alias-bg-layer-1);",
      "  border: 1px solid var(--dsw-alias-state-error-primary);",
      "  border-radius: 6px; padding: 6px 8px; margin-bottom: 8px;",
      "  white-space: pre-wrap; word-break: break-word;",
      "}",
      ".ghwf-ok {",
      "  color: var(--dsw-alias-state-success-primary);",
      "  background: var(--dsw-alias-bg-layer-1);",
      "  border: 1px solid var(--dsw-alias-state-success-primary);",
      "  border-radius: 6px; padding: 6px 8px; margin-bottom: 8px;",
      "}",
      ".ghwf-columns { display: flex; flex: 1; min-height: 0; gap: 10px; }",
      ".ghwf-col { flex: 1; min-width: 0; min-height: 0; display: flex; flex-direction: column; overflow: hidden; }",
      ".ghwf-col-title { flex: none; font-weight: 600; padding: 4px 0 8px; border-bottom: 1px solid var(--dsw-alias-border-l1); margin-bottom: 8px; }",
      ".ghwf-col-body { flex: 1; min-height: 0; overflow-y: auto; }",
      ".ghwf-more { flex: none; text-align: center; padding: 6px 0 2px; }",
      ".ghwf-run { border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px; padding: 8px; margin-bottom: 8px; background: var(--dsw-alias-bg-layer-1); }",
      ".ghwf-run-top { display: flex; align-items: center; gap: 6px; }",
      ".ghwf-run-name { flex: 1; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }",
      ".ghwf-badge { display: inline-block; padding: 1px 7px; border-radius: 999px; font-size: 11px; color: #fff; white-space: nowrap; }",
      ".ghwf-meta { color: var(--dsw-alias-label-secondary); margin-top: 4px; }",
      ".ghwf-empty { color: var(--dsw-alias-label-secondary); padding: 12px 0; text-align: center; }",
      ".ghwf-repo-chip {",
      "  display: inline-block; padding: 2px 8px; margin: 0 4px 4px 0;",
      "  border: 1px solid var(--dsw-alias-border-l1); border-radius: 999px;",
      "  background: var(--dsw-alias-bg-layer-1); cursor: pointer; font-size: 11px;",
      "}",
      ".ghwf-repo-chip:hover { border-color: var(--dsw-alias-border-l2); }",
      ".ghwf-repo-chip.del { color: var(--dsw-alias-state-error-primary); }",
      ".ghwf-commit-msg { font-weight: 500; word-break: break-word; }",
      ".ghwf-commit-sha { font-family: monospace; color: var(--dsw-alias-label-secondary); font-size: 11px; }"
    ].join("\n");

    var tagId = "@angel-gp/dsh-client-ui-gitpeek/ghwf.css";
    if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
      var tag = document.createElement("style");
      tag.dataset.plugin = "@angel-gp/dsh-client-ui-gitpeek";
      tag.dataset.pluginCss = tagId;
      tag.textContent = css;
      document.head.appendChild(tag);
    }

    // ── helpers ─────────────────────────────────────────────────────────────
    function isSlug(s) {
      return /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(s);
    }
    function slugFromUrl(s) {
      var m = s.match(/^git@github\.com:([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+?)(\.git)?$/);
      if (m) return m[1];
      m = s.match(/^https?:\/\/github\.com\/([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+?)(\.git)?$/);
      if (m) return m[1];
      return "";
    }
    function resolveSlug(repo) {
      var s = String(repo || "").trim();
      if (isSlug(s)) return s.replace(/\.git$/, "");
      var slug = slugFromUrl(s);
      if (slug) return slug;
      return "";
    }

    function statusInfo(run) {
      if (run.status === "completed") {
        var c = run.conclusion;
        var map = {
          success: { label: "status.success", color: "var(--dsw-alias-state-success-primary)" },
          failure: { label: "status.failure", color: "var(--dsw-alias-state-error-primary)" },
          cancelled: { label: "status.cancelled", color: "var(--dsw-alias-label-secondary)" },
          skipped: { label: "status.skipped", color: "var(--dsw-alias-label-secondary)" },
          neutral: { label: "status.neutral", color: "var(--dsw-alias-label-secondary)" },
          timed_out: { label: "status.timed_out", color: "var(--dsw-alias-state-error-primary)" },
          action_required: { label: "status.action_required", color: "var(--dsw-alias-state-warn-primary)" },
          stale: { label: "status.stale", color: "var(--dsw-alias-label-secondary)" }
        };
        var hit = map[c] || { label: "status.completed", color: "var(--dsw-alias-label-secondary)" };
        return { label: t(hit.label), color: hit.color };
      }
      var map2 = {
        queued: { label: "status.queued", color: "var(--dsw-alias-state-warn-primary)" },
        in_progress: { label: "status.in_progress", color: "var(--dsw-alias-state-warn-primary)" },
        waiting: { label: "status.waiting", color: "var(--dsw-alias-state-warn-primary)" },
        requested: { label: "status.requested", color: "var(--dsw-alias-state-warn-primary)" },
        pending: { label: "status.pending", color: "var(--dsw-alias-state-warn-primary)" }
      };
      var hit2 = map2[run.status] || { label: run.status, color: "var(--dsw-alias-label-secondary)" };
      return { label: t(hit2.label), color: hit2.color };
    }

    function fmtTime(iso) {
      if (!iso) return "";
      var d = new Date(iso);
      if (isNaN(d.getTime())) return "";
      return d.toLocaleString();
    }

    // ── config + cache (localStorage) ───────────────────────────────────────
    var CFG_KEY = "dsh.ghwf.config";
    var CACHE_KEY = "dsh.ghwf.cache";
    var KEY_STORAGE = "dsh.ghwf.key";

    function loadJSON(key, fallback) {
      try { return JSON.parse(localStorage.getItem(key) || "null") || fallback; }
      catch (e) { return fallback; }
    }
    function saveJSON(key, data) {
      try { localStorage.setItem(key, JSON.stringify(data)); }
      catch (e) {}
    }
    function loadConfig() {
      return loadJSON(CFG_KEY, {});
    }
    function saveConfig(data) {
      saveJSON(CFG_KEY, data);
    }
    function loadCache() {
      return loadJSON(CACHE_KEY, {});
    }
    function saveCache(data) {
      saveJSON(CACHE_KEY, data);
    }

    // ── token encryption (AES-256-GCM, Web Crypto) ─────────────────────────
    function bytesToBase64(bytes) {
      var bin = "";
      for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
      return btoa(bin);
    }
    function base64ToBytes(b64) {
      var bin = atob(b64);
      var bytes = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      return bytes;
    }
    /** Random 256-bit key, generated once and kept in localStorage. */
    async function loadOrCreateKey() {
      var raw = localStorage.getItem(KEY_STORAGE);
      if (raw) return base64ToBytes(raw);
      var key = crypto.getRandomValues(new Uint8Array(32));
      try { localStorage.setItem(KEY_STORAGE, bytesToBase64(key)); }
      catch (e) {}
      return key;
    }
    /** Encrypt a plain token into { iv, data } (base64). Returns null for empty input. */
    async function encryptToken(plain) {
      if (!plain) return null;
      if (typeof crypto === "undefined" || !crypto.subtle) {
        throw new Error("Web Crypto unavailable: the panel needs a secure context (http://127.0.0.1)");
      }
      var keyBytes = await loadOrCreateKey();
      var key = await crypto.subtle.importKey("raw", keyBytes, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
      var iv = crypto.getRandomValues(new Uint8Array(12));
      var ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, key, new TextEncoder().encode(plain));
      return { iv: bytesToBase64(iv), data: bytesToBase64(new Uint8Array(ct)) };
    }
    /** Decrypt a stored { iv, data } back to plain text. Returns "" on any failure. */
    async function decryptToken(enc) {
      if (!enc || !enc.iv || !enc.data) return "";
      try {
        var raw = localStorage.getItem(KEY_STORAGE);
        if (!raw) return "";
        var key = await crypto.subtle.importKey("raw", base64ToBytes(raw), { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
        var pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: base64ToBytes(enc.iv) }, key, base64ToBytes(enc.data));
        return new TextDecoder().decode(pt);
      } catch (e) { return ""; }
    }

    // ── GitHub fetch ────────────────────────────────────────────────────────
    var REQUEST_TIMEOUT_MS = 20000;
    var PAGE_SIZE = { listRuns: 30, listReleases: 30, listCommits: 100 };
    /** Fetch one page. Resolves { data, hasNext } where hasNext follows the Link header. */
    async function ghFetchPage(slug, action, token, page) {
      var url;
      if (action === "listRuns") url = "https://api.github.com/repos/" + slug + "/actions/runs?per_page=" + PAGE_SIZE[action];
      else if (action === "listReleases") url = "https://api.github.com/repos/" + slug + "/releases?per_page=" + PAGE_SIZE[action];
      else if (action === "listCommits") url = "https://api.github.com/repos/" + slug + "/commits?per_page=" + PAGE_SIZE[action];
      else throw new Error("unknown action " + action);
      if (page > 1) url += "&page=" + page;
      var headers = { "Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
      if (token) headers["Authorization"] = "Bearer " + token;
      var res = await fetch(url, { headers: headers, signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
      var text = await res.text();
      var json = null;
      try { json = JSON.parse(text); } catch (e) {}
      if (!res.ok) {
        var msg = json && json.message ? json.message : ("HTTP " + res.status);
        throw new Error(msg);
      }
      var link = res.headers.get("link") || "";
      var hasNext = /rel="?next"?/.test(link);
      return { data: json, hasNext: hasNext };
    }

    // ── component ───────────────────────────────────────────────────────────
    function GhView() {
      var cfg = loadConfig();
      var cache = loadCache();

      var initialRepo = cfg.lastRepo || "";
      var initialRuns = (cache.repo === initialRepo && cache.runs) ? cache.runs : [];
      var initialReleases = (cache.repo === initialRepo && cache.releases) ? cache.releases : [];
      var initialCommits = (cache.repo === initialRepo && cache.commits) ? cache.commits : [];

      var repoState = React.useState(initialRepo);
      var repo = repoState[0], setRepo = repoState[1];
      var tokenState = React.useState("");
      var token = tokenState[0], setToken = tokenState[1];
      var reposState = React.useState(cfg.repos || []);
      var repos = reposState[0], setRepos = reposState[1];
      var runsState = React.useState(initialRuns);
      var runs = runsState[0], setRuns = runsState[1];
      var releasesState = React.useState(initialReleases);
      var releases = releasesState[0], setReleases = releasesState[1];
      var commitsState = React.useState(initialCommits);
      var commits = commitsState[0], setCommits = commitsState[1];
      var runsHasMoreState = React.useState(false);
      var runsHasMore = runsHasMoreState[0], setRunsHasMore = runsHasMoreState[1];
      var releasesHasMoreState = React.useState(false);
      var releasesHasMore = releasesHasMoreState[0], setReleasesHasMore = releasesHasMoreState[1];
      var commitsHasMoreState = React.useState(false);
      var commitsHasMore = commitsHasMoreState[0], setCommitsHasMore = commitsHasMoreState[1];
      var errorState = React.useState("");
      var error = errorState[0], setError = errorState[1];
      var okState = React.useState("");
      var ok = okState[0], setOk = okState[1];
      var savedCollapsedState = React.useState(true);
      var savedCollapsed = savedCollapsedState[0], setSavedCollapsed = savedCollapsedState[1];

      var reposRef = React.useRef(repos);
      var tokenRef = React.useRef(token);
      var runsPageRef = React.useRef(1);
      var releasesPageRef = React.useRef(1);
      var commitsPageRef = React.useRef(1);
      React.useEffect(function () { reposRef.current = repos; }, [repos]);
      React.useEffect(function () { tokenRef.current = token; }, [token]);

      // 挂载时异步解密已保存的 token；解密完成后标记 ready。
      var tokenLoadedState = React.useState(false);
      var tokenLoaded = tokenLoadedState[0], setTokenLoaded = tokenLoadedState[1];
      React.useEffect(function () {
        var cfg = loadConfig();
        if (cfg.token) {
          decryptToken(cfg.token).then(function (plain) {
            setToken(plain || "");
            setTokenLoaded(true);
          });
        } else {
          setTokenLoaded(true);
        }
      }, []);

      var doRefresh = React.useCallback(async function (currentRepo, currentToken) {
        if (!currentRepo) return;
        var slug = resolveSlug(currentRepo);
        if (!slug) { setError(t("error.badSlug")); return; }
        var errors = [];
        var runsData = [];
        var relData = [];
        var cmData = [];
        try {
          var results = await Promise.allSettled([
            ghFetchPage(slug, "listRuns", currentToken, 1),
            ghFetchPage(slug, "listReleases", currentToken, 1),
            ghFetchPage(slug, "listCommits", currentToken, 1)
          ]);
          if (results[0].status === "fulfilled") {
            runsData = results[0].value.data.workflow_runs || [];
            setRunsHasMore(results[0].value.hasNext);
            runsPageRef.current = 1;
          } else {
            errors.push(t("error.fetchRuns") + ": " + String((results[0].reason && results[0].reason.message) || results[0].reason));
          }
          if (results[1].status === "fulfilled") {
            relData = results[1].value.data || [];
            setReleasesHasMore(results[1].value.hasNext);
            releasesPageRef.current = 1;
          } else {
            errors.push(t("error.fetchReleases") + ": " + String((results[1].reason && results[1].reason.message) || results[1].reason));
          }
          if (results[2].status === "fulfilled") {
            cmData = results[2].value.data || [];
            setCommitsHasMore(results[2].value.hasNext);
            commitsPageRef.current = 1;
          } else {
            errors.push(t("error.fetchCommits") + ": " + String((results[2].reason && results[2].reason.message) || results[2].reason));
          }
        } catch (e) {
          errors.push(String((e && e.message) || e));
        }
        setRuns(runsData);
        setReleases(relData);
        setCommits(cmData);
        setError(errors.join("\n"));
        saveCache({ repo: currentRepo, runs: runsData, releases: relData, commits: cmData });
      }, []);

      // 进入页面：先显示缓存，等 token 解密完成后后台自动刷新一次（仅当有仓库时）。
      var didAutoLoad = React.useRef(false);
      React.useEffect(function () {
        if (didAutoLoad.current) return;
        if (!tokenLoaded) return; // 等待 token 解密完成后再决定是否刷新
        if (!repo) { didAutoLoad.current = true; return; } // 无仓库，标记完成
        didAutoLoad.current = true;
        doRefresh(repo, token);
      }, [repo, token, tokenLoaded, doRefresh]);

      /** Persist repos + token (encrypted) + lastRepo in one config write. */
      var persistConfig = async function (next) {
        var enc = null;
        try {
          enc = await encryptToken(next.token || "");
        } catch (e) {
          // 加密不可用时只持久化非机密配置，token 留空；调用方另行提示。
          enc = null;
        }
        saveConfig({ repos: next.repos, token: enc, lastRepo: next.lastRepo });
      };

      var handleRefresh = async function () {
        if (!repo) return;
        setError("");
        setOk("");
        var next = reposRef.current.slice();
        if (next.indexOf(repo) < 0) next.push(repo);
        reposRef.current = next;
        setRepos(next);
        await persistConfig({ repos: next, token: tokenRef.current, lastRepo: repo });
        await doRefresh(repo, token);
      };

      var saveToken = async function () {
        setError("");
        setOk("");
        try {
          await persistConfig({ repos: reposRef.current, token: token, lastRepo: repo });
          setOk(t("common.saved"));
        } catch (e) {
          setError(String((e && e.message) || e));
        }
      };

      var removeRepo = async function (name) {
        var next = reposRef.current.filter(function (x) { return x !== name; });
        reposRef.current = next;
        setRepos(next);
        await persistConfig({ repos: next, token: tokenRef.current, lastRepo: repo });
        setOk(t("common.deleted") + " " + name);
      };

      var loadMoreRuns = async function () {
        var slug = resolveSlug(repo);
        if (!slug) return;
        try {
          var r = await ghFetchPage(slug, "listRuns", token, runsPageRef.current + 1);
          setRuns(function (prev) { return prev.concat(r.data.workflow_runs || []); });
          setRunsHasMore(r.hasNext);
          runsPageRef.current += 1;
          setError("");
        } catch (e) {
          setError(t("error.fetchRuns") + ": " + String((e && e.message) || e));
        }
      };
      var loadMoreReleases = async function () {
        var slug = resolveSlug(repo);
        if (!slug) return;
        try {
          var r = await ghFetchPage(slug, "listReleases", token, releasesPageRef.current + 1);
          setReleases(function (prev) { return prev.concat(r.data || []); });
          setReleasesHasMore(r.hasNext);
          releasesPageRef.current += 1;
          setError("");
        } catch (e) {
          setError(t("error.fetchReleases") + ": " + String((e && e.message) || e));
        }
      };
      var loadMoreCommits = async function () {
        var slug = resolveSlug(repo);
        if (!slug) return;
        try {
          var r = await ghFetchPage(slug, "listCommits", token, commitsPageRef.current + 1);
          setCommits(function (prev) { return prev.concat(r.data || []); });
          setCommitsHasMore(r.hasNext);
          commitsPageRef.current += 1;
          setError("");
        } catch (e) {
          setError(t("error.fetchCommits") + ": " + String((e && e.message) || e));
        }
      };

      var topChildren = [];

      topChildren.push(React.createElement("div", { className: "ghwf-row", key: "reprow" },
        React.createElement("div", { className: "ghwf-input-wrap" },
          React.createElement("input", {
            className: "ghwf-input",
            placeholder: t("repo.placeholder"),
            value: repo,
            onChange: function (e) { setRepo(e.target.value); }
          }),
          React.createElement("button", {
            className: "ghwf-caret-btn",
            onClick: function () { setSavedCollapsed(!savedCollapsed); }
          },
            React.createElement("span", { className: "ghwf-caret" + (savedCollapsed ? "" : " open") }, "▶")
          )
        ),
        React.createElement("button", {
          className: "ghwf-btn primary",
          disabled: !repo,
          onClick: handleRefresh
        }, t("common.refresh"))
      ));

      if (!savedCollapsed) {
        if (repos.length === 0) {
          topChildren.push(React.createElement("div", { className: "ghwf-empty", key: "savedempty" }, t("saved.empty")));
        } else {
          topChildren.push(React.createElement("div", { key: "chips", style: { marginBottom: 8 } },
            repos.map(function (r) {
              return React.createElement("span", { key: r },
                React.createElement("span", { className: "ghwf-repo-chip", onClick: function () { setRepo(r); } }, r),
                React.createElement("span", { className: "ghwf-repo-chip del", onClick: function () { removeRepo(r); } }, "×")
              );
            })
          ));
        }
      }

      topChildren.push(React.createElement("div", { className: "ghwf-row", key: "tokrow" },
        React.createElement("input", {
          className: "ghwf-input",
          type: "password",
          placeholder: t("token.placeholder"),
          value: token,
          onChange: function (e) { setToken(e.target.value); }
        }),
        React.createElement("button", { className: "ghwf-btn", onClick: saveToken }, t("common.saveToken"))
      ));

      if (error) topChildren.push(React.createElement("div", { className: "ghwf-err", key: "err" }, error));
      if (ok) topChildren.push(React.createElement("div", { className: "ghwf-ok", key: "ok" }, ok));

      var actionsCol = React.createElement("div", { className: "ghwf-col", key: "actions" },
        React.createElement("div", { className: "ghwf-col-title" }, t("runs.title") + " (" + runs.length + ")"),
        React.createElement("div", { className: "ghwf-col-body" },
          runs.length === 0
            ? React.createElement("div", { className: "ghwf-empty" }, repo ? t("runs.empty") : t("common.hint"))
            : runs.map(function (run) {
                var st = statusInfo(run);
                return React.createElement("div", { className: "ghwf-run", key: run.id },
                  React.createElement("div", { className: "ghwf-run-top" },
                    React.createElement("span", { className: "ghwf-run-name", title: run.display_title || run.name }, run.display_title || run.name),
                    React.createElement("span", { className: "ghwf-badge", style: { background: st.color } }, st.label)
                  ),
                  React.createElement("div", { className: "ghwf-meta" },
                    (run.workflow_name || "") + " · " + (run.head_branch || "") + " · " + fmtTime(run.updated_at || run.created_at)),
                  React.createElement("a", {
                    className: "ghwf-btn",
                    href: run.html_url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: { textDecoration: "none", display: "inline-block", marginTop: 6 }
                  }, t("common.open"))
                );
              })
        ),
        runsHasMore && repo
          ? React.createElement("div", { className: "ghwf-more" },
              React.createElement("button", { className: "ghwf-btn", onClick: loadMoreRuns }, t("common.loadMore"))
            )
          : null
      );

      var commitsCol = React.createElement("div", { className: "ghwf-col", key: "commits" },
        React.createElement("div", { className: "ghwf-col-title" }, t("commits.title") + " (" + commits.length + ")"),
        React.createElement("div", { className: "ghwf-col-body" },
          commits.length === 0
            ? React.createElement("div", { className: "ghwf-empty" }, repo ? t("commits.empty") : t("common.hint"))
            : commits.map(function (c) {
                var msg = c.commit && c.commit.message ? c.commit.message.split("\n")[0] : "";
                var author = c.commit && c.commit.author ? c.commit.author.name : "";
                var date = c.commit && c.commit.author ? c.commit.author.date : "";
                return React.createElement("div", { className: "ghwf-run", key: c.sha },
                  React.createElement("div", { className: "ghwf-commit-msg" }, msg),
                  React.createElement("div", { className: "ghwf-meta" }, author + " · " + fmtTime(date)),
                  React.createElement("div", { className: "ghwf-commit-sha" }, (c.sha || "").slice(0, 7)),
                  React.createElement("a", {
                    className: "ghwf-btn",
                    href: c.html_url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: { textDecoration: "none", display: "inline-block", marginTop: 6 }
                  }, t("common.open"))
                );
              })
        ),
        commitsHasMore && repo
          ? React.createElement("div", { className: "ghwf-more" },
              React.createElement("button", { className: "ghwf-btn", onClick: loadMoreCommits }, t("common.loadMore"))
            )
          : null
      );

      var releasesCol = React.createElement("div", { className: "ghwf-col", key: "releases" },
        React.createElement("div", { className: "ghwf-col-title" }, t("releases.title") + " (" + releases.length + ")"),
        React.createElement("div", { className: "ghwf-col-body" },
          releases.length === 0
            ? React.createElement("div", { className: "ghwf-empty" }, repo ? t("releases.empty") : t("common.hint"))
            : releases.map(function (rel) {
                return React.createElement("div", { className: "ghwf-run", key: rel.id },
                  React.createElement("div", { className: "ghwf-run-top" },
                    React.createElement("span", { className: "ghwf-run-name", title: rel.name || rel.tag_name }, rel.name || rel.tag_name),
                    rel.prerelease ? React.createElement("span", { className: "ghwf-badge", style: { background: "var(--dsw-alias-state-warn-primary)" } }, t("releases.prerelease")) : null,
                    rel.draft ? React.createElement("span", { className: "ghwf-badge", style: { background: "var(--dsw-alias-label-secondary)" } }, t("releases.draft")) : null
                  ),
                  React.createElement("div", { className: "ghwf-meta" },
                    (rel.tag_name || "") + " · " + fmtTime(rel.published_at || rel.created_at)),
                  React.createElement("a", {
                    className: "ghwf-btn",
                    href: rel.html_url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: { textDecoration: "none", display: "inline-block", marginTop: 6 }
                  }, t("common.open"))
                );
              })
        ),
        releasesHasMore && repo
          ? React.createElement("div", { className: "ghwf-more" },
              React.createElement("button", { className: "ghwf-btn", onClick: loadMoreReleases }, t("common.loadMore"))
            )
          : null
      );

      return React.createElement("div", { className: "ghwf-view", "data-conversation-composer-overlay": "" },
        React.createElement("div", { className: "ghwf-top" }, topChildren),
        React.createElement("div", { className: "ghwf-columns" }, actionsCol, commitsCol, releasesCol)
      );
    }

    // ── plugin ──────────────────────────────────────────────────────────────
    var inject = ["slots", "locale"];
    function apply(ctx) {
      ctx.effect(() => ctx.locale.register(NS, { zh: zh, en: en }), "gitpeek: dictionaries");
      t = ctx.locale.bind(NS);
      ctx.slots.inject("conversation.view", () => ctx.slots.register({
        name: "conversation.view",
        id: "github",
        order: 20,
        locale: NS,
        label: () => t("view.gitpeek")
      }, GhView));
    }

    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  }
});
