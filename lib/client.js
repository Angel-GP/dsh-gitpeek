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

    function loadConfig() {
      try { return JSON.parse(localStorage.getItem(CFG_KEY) || "{}"); }
      catch (e) { return {}; }
    }
    function saveConfig(data) {
      try { localStorage.setItem(CFG_KEY, JSON.stringify(data)); }
      catch (e) {}
    }
    function loadCache() {
      try { return JSON.parse(localStorage.getItem(CACHE_KEY) || "{}"); }
      catch (e) { return {}; }
    }
    function saveCache(data) {
      try { localStorage.setItem(CACHE_KEY, JSON.stringify(data)); }
      catch (e) {}
    }

    // ── GitHub fetch ────────────────────────────────────────────────────────
    var REQUEST_TIMEOUT_MS = 20000;
    async function ghFetch(slug, action, token) {
      var url;
      if (action === "listRuns") url = "https://api.github.com/repos/" + slug + "/actions/runs?per_page=30";
      else if (action === "listReleases") url = "https://api.github.com/repos/" + slug + "/releases?per_page=30";
      else if (action === "listCommits") url = "https://api.github.com/repos/" + slug + "/commits?per_page=100";
      else throw new Error("unknown action " + action);
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
      return json;
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
      var tokenState = React.useState(cfg.token || "");
      var token = tokenState[0], setToken = tokenState[1];
      var reposState = React.useState(cfg.repos || []);
      var repos = reposState[0], setRepos = reposState[1];
      var runsState = React.useState(initialRuns);
      var runs = runsState[0], setRuns = runsState[1];
      var releasesState = React.useState(initialReleases);
      var releases = releasesState[0], setReleases = releasesState[1];
      var commitsState = React.useState(initialCommits);
      var commits = commitsState[0], setCommits = commitsState[1];
      var errorState = React.useState("");
      var error = errorState[0], setError = errorState[1];
      var okState = React.useState("");
      var ok = okState[0], setOk = okState[1];
      var savedCollapsedState = React.useState(true);
      var savedCollapsed = savedCollapsedState[0], setSavedCollapsed = savedCollapsedState[1];

      var reposRef = React.useRef(repos);
      var tokenRef = React.useRef(token);
      React.useEffect(function () { reposRef.current = repos; }, [repos]);
      React.useEffect(function () { tokenRef.current = token; }, [token]);

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
            ghFetch(slug, "listRuns", currentToken),
            ghFetch(slug, "listReleases", currentToken),
            ghFetch(slug, "listCommits", currentToken)
          ]);
          if (results[0].status === "fulfilled") {
            runsData = results[0].value.workflow_runs || [];
          } else {
            errors.push(t("error.fetchRuns") + ": " + String((results[0].reason && results[0].reason.message) || results[0].reason));
          }
          if (results[1].status === "fulfilled") {
            relData = results[1].value || [];
          } else {
            errors.push(t("error.fetchReleases") + ": " + String((results[1].reason && results[1].reason.message) || results[1].reason));
          }
          if (results[2].status === "fulfilled") {
            cmData = results[2].value || [];
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

      // 首次挂载：有缓存直接显示；无缓存则自动拉取一次。
      var didAutoLoad = React.useRef(false);
      React.useEffect(function () {
        if (didAutoLoad.current) return;
        didAutoLoad.current = true;
        if (repo && !(cache.repo === repo && cache.runs)) {
          doRefresh(repo, token);
        }
      }, [repo, token, doRefresh]);

      var handleRefresh = async function () {
        if (!repo) return;
        setError("");
        setOk("");
        var next = reposRef.current.slice();
        if (next.indexOf(repo) < 0) next.push(repo);
        reposRef.current = next;
        setRepos(next);
        saveConfig({ repos: next, token: tokenRef.current, lastRepo: repo });
        await doRefresh(repo, token);
      };

      var saveToken = function () {
        setError("");
        setOk("");
        saveConfig({ repos: reposRef.current, token: token, lastRepo: repo });
        setOk(t("common.saved"));
      };

      var removeRepo = function (name) {
        var next = reposRef.current.filter(function (x) { return x !== name; });
        reposRef.current = next;
        setRepos(next);
        saveConfig({ repos: next, token: tokenRef.current, lastRepo: repo });
        setOk(t("common.deleted") + " " + name);
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
        )
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
        )
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
        )
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
