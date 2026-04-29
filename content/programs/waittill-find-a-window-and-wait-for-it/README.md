# WaitTill

Console-based window wait / search / activate utility.

## Usage

```
WaitTill.exe [target] [seconds] [--waitidle sec] [options]
```

### Command Examples

1. `WT.exe 3.5` - Simple wait for 3.5s (int/float)
2. `WT.exe "Notepad" ` - 30s search & activate
3. `WT.exe mspaint.exe 10` - 10s process search
4. `WT.exe "App" --waitidle` - Response stability monitoring
5. `WT.exe "App" -q` - Quiet mode (no console output)

### Options

- `--waitidle [sec]` - Precise hang detection after discovery
- `--waitclose [sec]` - Wait for target to close/disappear
- `-e, --exact` - Exact match for window title
- `-q, --quiet` - Quiet mode (exit code only)
- `--info` - Show detailed developer info
- `--lang ko|en` - Manual language override

### Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Found (search complete) |
| 1 | Ready (stabilization or recovery confirmed) |
| 10 | Not found |
| 11 | Idle failed (stabilization timeout) |
| 12 | Close failed (target did not exist at start) |
| 20 | User cancelled (ESC) |
| 22 | Argument error |
| 23 | --waitidle error (invalid idle timeout) |
| 24 | Timeout error (invalid search time) |
| 25 | Out of resources |

## Build

Run `build.bat` to open the interactive build menu, or use command line options:

```
build.bat --dev     # Build Dev version
build.bat --test    # Run tests
build.bat --dist    # Build release package
```

## Changelog

See source file header for full changelog.
