# @angel-gp/dsh-client-ui-gitpeek

[English](README.md) | [中文](README.zh.md)

A read-only GitHub data panel for DeepSeek Harness (DSH): registers a third
session tab (right after **Trajectory**) that shows Actions runs, Commits, and
Releases side by side, fetched straight from the GitHub REST API in the
browser.

## Features

- Three columns side by side, each scrolling independently
- Remembers multiple repositories plus one PAT token, encrypted with
  **AES-256-GCM** (Web Crypto) before it touches `localStorage` — the key
  stays in the browser, so the stored value is never plain text
- Load more: each column paginates through GitHub's `Link` header with a
  **Load more** button (30 runs / 30 releases / 100 commits per page)
- Auto-refresh on entry: cached data shows immediately, then a background
  refresh runs once per session open — no stale page after a restart
- Stale cache by design: opening a session shows the cached data immediately;
  data is re-fetched only when you click **Refresh** or on session entry
- Localized UI (zh / en) following the DSH language preference
- The three columns are fetched in parallel; a failure in one column is
  reported individually and does not hide the other two

## Installation

### 0. Prerequisites

- `dsh` and `pnpm` on `PATH` (both ship with a DSH Desktop install; open a new
  PowerShell so they resolve).
- `git` on `PATH` that can reach github.com. `dsh plugin` forwards to pnpm,
  which clones the repo from the `github:` specifier — over HTTPS, or over SSH
  if you configure an `insteadOf` rewrite or proxy.
- Know which profile your running DSH uses. The plugin is installed into the
  profile you name on the command line, and it only appears in GUIs running
  that same profile. **DSH Desktop defaults to the `desktop` profile**, which
  is a different composition from `web` — install into the profile you
  actually run, or switch your GUI to the profile you install into.

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

Replace `web` with the profile your GUI actually runs (for DSH Desktop that
is usually `desktop`).

**Install manually**

Or run the same two commands yourself in PowerShell:

```
dsh plugin --profile web add github:Angel-GP/dsh-gitpeek#main
dsh --profile web --dump-config
```

> **Note for DSH Desktop users**: the packaged `dsh` command may refuse to
> initialize a profile it does not know yet (`ENOENT: lstat .../profiles/<name>`).
> If so, create the profile first with
> `dsh plugin --profile <name> add <any-package>`, then run the add again, or
> ask the Agent to run the equivalent `dsh` bin directly.

> **Note about the peer-dependency warning**: pnpm prints
> `[WARN] Issues with peer dependencies found` because `react` and the
> `@deepseek-ai/*` packages are provided by DSH's symlinked dependency tree
> (`$DSH_HOME/profiles/node_modules`) rather than listed in the profile's own
> `dependencies`. This warning is expected and harmless — verify with
> `--dump-config` below.

### 2. Verify

`@angel-gp/dsh-client-ui-gitpeek` appearing in the `--dump-config` output
means the plugin entered the composed layer:

```
# == @angel-gp/dsh-client-ui-gitpeek
- id: gitpeek
  name: '@angel-gp/dsh-client-ui-gitpeek'
```

### 3. Restart

Restart the DSH Web Host manually. The GitHub tab then shows up next to
**Trajectory**.

### 4. Final check

Open a session in the running GUI: the **GitHub** tab should appear next to
**Trajectory**, and entering a repository (e.g. `owner/repo`) followed by
**Refresh** should load the three columns. If the tab is missing, make sure
the GUI is running the profile you installed into (see step 0).

## Uninstallation

A full uninstall removes the plugin from the profile, drops it from the
running GUI, and clears the data it left in the browser.

### 1. Remove the dependency

```
dsh plugin --profile web remove @angel-gp/dsh-client-ui-gitpeek
```

Replace `web` with the profile you installed into. `dsh plugin` forwards to
pnpm; on success it also removes the package from the profile's
`dsh.profile.bundles` list automatically.

> **Note for DSH Desktop users**: as with installation, the packaged `dsh`
> command may fail with `ENOENT: lstat .../profiles/<name>`; run the
> equivalent `dsh` bin directly in that case.

Verify the plugin left the composed layer:

```
dsh --profile web --dump-config
```

`@angel-gp/dsh-client-ui-gitpeek` should no longer appear anywhere in the
output.

### 2. Restart DSH Web Host

Restart the DSH Web Host manually. The GitHub tab disappears once the
composition reloads — this is what actually removes it from the running GUI.

### 3. Clear browser data (manual)

The plugin stores its config and cache in the browser's `localStorage` and
does **not** clean them up on uninstall:

- `dsh.ghwf.config` — holds the encrypted PAT token plus the encryption key
  `dsh.ghwf.key` (remove both!)
- `dsh.ghwf.cache` — cached Actions / Commits / Releases data

Open DevTools (F12) in the DSH page and run:

```js
localStorage.removeItem("dsh.ghwf.config");
localStorage.removeItem("dsh.ghwf.key");
localStorage.removeItem("dsh.ghwf.cache");
```

### 4. (Optional) Prune the pnpm store

```
pnpm store prune
```

Drops packages no longer referenced by any profile from pnpm's
content-addressable store (including gitpeek and its download cache). Other
profiles are unaffected. Skip this if you may reinstall the plugin later.

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

The PAT is encrypted with AES-256-GCM before storage. The encryption key is
kept in the same browser (as a random 32-byte value in `localStorage`), so the
stored token is not readable as plain text — but anything that can run
JavaScript in that browser (extensions, devtools, same-origin scripts) can
still decrypt it. Please:

- grant only the minimal **read-only + selected repositories** permissions (above);
- never reuse this token for other services or account operations;
- revoke or rotate it from GitHub whenever it is no longer needed.

## License

MIT
