# @angel-gp/dsh-client-ui-gitpeek

[English](README.md) | [中文](README.zh.md)

A read-only GitHub data panel for DeepSeek Harness (DSH): registers a third
session tab (right after **Trajectory**) that shows Actions runs, Commits, and
Releases side by side, fetched straight from the GitHub REST API in the
browser.

## Features

- Three columns side by side, each scrolling independently
- Remembers multiple repositories plus one PAT token (kept in browser `localStorage`)
- Stale cache by design: opening a session shows the cached data immediately;
  data is re-fetched only when you click **Refresh**
- Localized UI (zh / en) following the DSH language preference
- The three columns are fetched in parallel; a failure in one column is
  reported individually and does not hide the other two

## Installation

### 1. Install the plugin

**Have an Agent install it (recommended)**

Send the following block to an Agent that can run terminal commands:

> Please install the gitpeek plugin for DeepSeek Harness's web profile.
>
> Run only these two commands; do not touch any other profile:
> ```
> dsh plugin --profile web add github:Angel-GP/dsh-gitpeek#main
> dsh --profile web --dump-config
> ```
> Confirm that `@angel-gp/dsh-client-ui-gitpeek` appears in the output, then
> tell me the result.
> Do not shut down or restart the running DSH for me; remind me to restart the
> DSH Web Host manually once the install is done.

**Install manually**

Or run the same two commands yourself in PowerShell:

```
dsh plugin --profile web add github:Angel-GP/dsh-gitpeek#main
dsh --profile web --dump-config
```

### 2. Verify

`@angel-gp/dsh-client-ui-gitpeek` appearing in the `--dump-config` output
means the plugin entered the composed layer.

### 3. Restart

Restart the DSH Web Host manually. The GitHub tab then shows up next to
**Trajectory**.

## Getting a PAT token

The plugin uses a PAT to raise the GitHub API rate limit (60 requests/hour
anonymous, 5000/hour with a token). It only issues read queries, so keep the
permissions minimal:

1. Open https://github.com/settings/personal-access-tokens/new
2. Choose **Fine-grained token**
3. Under **Repository access**, pick **Only select repositories** and check the
   repositories you want to view
4. Under **Permissions** grant:
   - **Actions → Read-only** (workflow runs)
   - **Contents → Read-only** (releases, commits)
   - **Metadata → Read-only** (usually included automatically)
5. Generate the token and paste it into the plugin's **PAT** field

### Security note

The PAT is stored in plain text in `localStorage`; anything that can read that
browser (extensions, devtools, same-origin scripts, another user of the same
profile) can read it. Please:

- grant only the minimal **read-only + selected repositories** permissions (above);
- never reuse this token for other services or account operations;
- revoke or rotate it from GitHub whenever it is no longer needed.

## Development

```bash
# Install dependencies (type-checking / local development)
pnpm install

# Syntax checks
node --check lib/index.js
node --check lib/client.js
```

`lib/client.js` is the browser-side plugin entry (the
`window.__ModuleLoader__.load` artifact format — no JSX / TypeScript, hand
written to the DSH client-plugin constraints); `lib/index.js` is the empty
host-side entry. `cordis.patch.yml` declares how the package mounts as a
profile bundle patch. UI strings live in the `zh` / `en` dictionaries at the
top of `lib/client.js`; keep both dictionaries in sync when adding copy.

## Model experience

None. The panel renders GitHub data in the browser; nothing from this package
enters a model request.

#### KV Cache impact

None; the package neither assembles nor sends provider requests.

## Known limitations and deferred items

- **PAT stored in plain text in `localStorage`**: a conscious trade-off for a
  local read-only panel; no `dsh-credentials` integration yet (see the
  security note above).
- **Fixed window per column**: at most 30 runs, 30 releases, and 100 commits,
  with no pagination / "load more".
- **Cache never expires**: cached data is shown until **Refresh** is clicked,
  so the panel can briefly lag behind the live repository.

## License

MIT
