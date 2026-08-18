window.__ModuleLoader__.load({
  id: "dsh-gitpeek",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

    var React = require("react");

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

    var tagId = "dsh-gitpeek/ghwf.css";
    if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
      var tag = document.createElement("style");
      tag.dataset.plugin = "dsh-gitpeek";
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
          success: { label: "成功", color: "var(--dsw-alias-state-success-primary)" },
          failure: { label: "失败", color: "var(--dsw-alias-state-error-primary)" },
          cancelled: { label: "已取消", color: "var(--dsw-alias-label-secondary)" },
          skipped: { label: "跳过", color: "var(--dsw-alias-label-secondary)" },
          neutral: { label: "中性", color: "var(--dsw-alias-label-secondary)" },
          timed_out: { label: "超时", color: "var(--dsw-alias-state-error-primary)" },
          action_required: { label: "需处理", color: "var(--dsw-alias-state-warn-primary)" },
          stale: { label: "过期", color: "var(--dsw-alias-label-secondary)" }
        };
        return map[c] || { label: c || "完成", color: "var(--dsw-alias-label-secondary)" };
      }
      var map2 = {
        queued: { label: "排队中", color: "var(--dsw-alias-state-warn-primary)" },
        in_progress: { label: "进行中", color: "var(--dsw-alias-state-warn-primary)" },
        waiting: { label: "等待中", color: "var(--dsw-alias-state-warn-primary)" },
        requested: { label: "已请求", color: "var(--dsw-alias-state-warn-primary)" },
        pending: { label: "等待中", color: "var(--dsw-alias-state-warn-primary)" }
      };
      return map2[run.status] || { label: run.status, color: "var(--dsw-alias-label-secondary)" };
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
    async function ghFetch(slug, action, token) {
      var url;
      if (action === "listRuns") url = "https://api.github.com/repos/" + slug + "/actions/runs?per_page=30";
      else if (action === "listReleases") url = "https://api.github.com/repos/" + slug + "/releases?per_page=30";
      else if (action === "listCommits") url = "https://api.github.com/repos/" + slug + "/commits?per_page=100";
      else throw new Error("unknown action " + action);
      var headers = { "Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
      if (token) headers["Authorization"] = "Bearer " + token;
      var res = await fetch(url, { headers: headers });
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
        if (!slug) { setError("无法确定仓库 owner/repo"); return; }
        var runsData = [];
        var relData = [];
        var cmData = [];
        try {
          var r = await ghFetch(slug, "listRuns", currentToken);
          runsData = r.workflow_runs || [];
          setRuns(runsData);
          setError("");
        } catch (e) {
          setError(String((e && e.message) || e));
        }
        try {
          var rel = await ghFetch(slug, "listReleases", currentToken);
          relData = rel || [];
          setReleases(relData);
        } catch (e) {}
        try {
          var cm = await ghFetch(slug, "listCommits", currentToken);
          cmData = cm || [];
          setCommits(cmData);
        } catch (e) {}
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
        setOk("已保存");
      };

      var removeRepo = function (name) {
        var next = reposRef.current.filter(function (x) { return x !== name; });
        reposRef.current = next;
        setRepos(next);
        saveConfig({ repos: next, token: tokenRef.current, lastRepo: repo });
        setOk("已删除 " + name);
      };

      var topChildren = [];

      topChildren.push(React.createElement("div", { className: "ghwf-row", key: "reprow" },
        React.createElement("div", { className: "ghwf-input-wrap" },
          React.createElement("input", {
            className: "ghwf-input",
            placeholder: "owner/repo 或仓库地址",
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
        }, "刷新")
      ));

      if (!savedCollapsed) {
        if (repos.length === 0) {
          topChildren.push(React.createElement("div", { className: "ghwf-empty", key: "savedempty" }, "暂无保存的仓库"));
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
          placeholder: "PAT (可选, 提升读取额度)",
          value: token,
          onChange: function (e) { setToken(e.target.value); }
        }),
        React.createElement("button", { className: "ghwf-btn", onClick: saveToken }, "保存token")
      ));

      if (error) topChildren.push(React.createElement("div", { className: "ghwf-err", key: "err" }, error));
      if (ok) topChildren.push(React.createElement("div", { className: "ghwf-ok", key: "ok" }, ok));

      var actionsCol = React.createElement("div", { className: "ghwf-col", key: "actions" },
        React.createElement("div", { className: "ghwf-col-title" }, "Actions 运行 (" + runs.length + ")"),
        React.createElement("div", { className: "ghwf-col-body" },
          runs.length === 0
            ? React.createElement("div", { className: "ghwf-empty" }, repo ? "暂无运行记录" : "输入仓库后查看")
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
                  }, "打开")
                );
              })
        )
      );

      var commitsCol = React.createElement("div", { className: "ghwf-col", key: "commits" },
        React.createElement("div", { className: "ghwf-col-title" }, "Commits (" + commits.length + ")"),
        React.createElement("div", { className: "ghwf-col-body" },
          commits.length === 0
            ? React.createElement("div", { className: "ghwf-empty" }, repo ? "暂无提交" : "输入仓库后查看")
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
                  }, "打开")
                );
              })
        )
      );

      var releasesCol = React.createElement("div", { className: "ghwf-col", key: "releases" },
        React.createElement("div", { className: "ghwf-col-title" }, "Releases (" + releases.length + ")"),
        React.createElement("div", { className: "ghwf-col-body" },
          releases.length === 0
            ? React.createElement("div", { className: "ghwf-empty" }, repo ? "暂无 Release" : "输入仓库后查看")
            : releases.map(function (rel) {
                return React.createElement("div", { className: "ghwf-run", key: rel.id },
                  React.createElement("div", { className: "ghwf-run-top" },
                    React.createElement("span", { className: "ghwf-run-name", title: rel.name || rel.tag_name }, rel.name || rel.tag_name),
                    rel.prerelease ? React.createElement("span", { className: "ghwf-badge", style: { background: "var(--dsw-alias-state-warn-primary)" } }, "预发布") : null,
                    rel.draft ? React.createElement("span", { className: "ghwf-badge", style: { background: "var(--dsw-alias-label-secondary)" } }, "草稿") : null
                  ),
                  React.createElement("div", { className: "ghwf-meta" },
                    (rel.tag_name || "") + " · " + fmtTime(rel.published_at || rel.created_at)),
                  React.createElement("a", {
                    className: "ghwf-btn",
                    href: rel.html_url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: { textDecoration: "none", display: "inline-block", marginTop: 6 }
                  }, "打开")
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
    var inject = ["slots"];
    function apply(ctx) {
      ctx.slots.inject("conversation.view", () => ctx.slots.register({
        name: "conversation.view",
        id: "github",
        order: 20,
        label: "GitHub"
      }, GhView));
    }

    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  }
});
