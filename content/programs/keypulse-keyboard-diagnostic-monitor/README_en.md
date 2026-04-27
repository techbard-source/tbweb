## HiddenSyncRun - Scheduled Task Runner

Runs scheduled tasks (scripts, programs, backups) from the system tray. No installation required – just run the executable.

---

## What You Get

- Real‑time tray icon showing the next scheduled task.
- Left‑click to pause/resume the scheduler.
- Right‑click menu lists today’s tasks, lets you run any task manually, open Settings, view the log, or exit.
- Settings editor for creating, editing, and reordering tasks.
- Daily log file with timestamps for each execution.

---

## Quick Start

1. Run `HiddenSyncRun.exe`.
2. The tray icon appears; hover to see the next task.
3. Right‑click → **Settings** to add a task:
   - Choose a name, type (HOURLY/DAILY/WEEKLY/MONTHLY/MANUAL).
   - Set `ExePath` (executable) and optional parameters.
   - Configure schedule fields (`At`, `Every`, `On`).
4. Save – the INI file (`%LOCALAPPDATA%\HiddenSyncRun\HiddenSyncRun.ini`) is updated automatically.
5. Use the tray menu to run tasks manually or pause the scheduler.

---

## Using HiddenSyncRun for Remote Backups

### Backup Scenario Example
Suppose you want to back up your local **Documents** folder to a remote server every night at 02:00.

1. Open the **Settings** editor from the tray menu.
2. Click **Add** to create a new task and name it `NightlyBackup`.
3. Set **Type** to **DAILY**.
4. Set **At** to `02:00`.
5. In **ExePath** browse to your backup script, e.g. `C:\Scripts\rsync_backup.bat`.
6. In **ExeParam** enter the source and destination, for example:
   ```
   "C:\Users\%USERNAME%\Documents" "\\backup-server\share\Documents"
   ```
7. Optionally fill **Desc** with `Backup Documents to remote server` – this appears in the tooltip.
8. Click **Save**.

The task will now run automatically each night. The log file records each successful run and any errors, so you can verify that your backups are happening.

You can create additional tasks for other folders or different schedules (e.g., weekly full system backup) using the same steps.


---

## Tray UI
- **Icon** – Green when running, gray when paused.
- **Hover tooltip** shows version, time, and the next task name (or `[Paused]`).
- **Left‑click** – Toggle pause / resume.
- **Right‑click menu**:
  - *Today’s tasks* – lists upcoming tasks; failed tasks are prefixed with `(!)`. Manual tasks appear after a separator.
  - *Settings* – opens the Settings editor.
  
  - *Exit* – quits the application.

---

## Settings Editor
- **Add** – creates a new task named `New Task` (auto‑numbered).
- **Delete** – removes the selected task.
- **Rename** – inline rename, duplicates are prevented.
- **Schedule UI** – fields appear/disappear based on the selected `Type`.
- **Dirty detection** – an asterisk `*` appears in the window title when unsaved changes exist; closing prompts a confirmation dialog.
- **Save** – writes the INI with UTF‑8 BOM, preserving unknown sections and comments.

---



## Common Commands
1. **Pause/Resume** – left‑click the tray icon.
2. **Run task manually** – right‑click menu → task name.

4. **Open Settings** – right‑click → *Settings*.

---

## Troubleshooting
- **Task does not run** – check the log for `NextRun` calculation errors or missing `ExePath`.
- **Auto‑start fails** – ensure `AutoStart=1` and the registry key `HKCU\Software\Microsoft\Windows\CurrentVersion\Run` points to `HiddenSyncRun.exe`.
- **Missing UTF‑8 BOM** – the program adds it automatically, but you can also re‑save the INI with UTF‑8 BOM using a text editor.

---

## Contact
Created by JAEMUN, SHIN
Contact: techbard@naver.com

For questions, bug reports, or improvement suggestions, please reach out to the email above.