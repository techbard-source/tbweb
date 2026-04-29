
## Img2Html - HTML Gallery Generator

Turns an image folder into an HTML gallery you can browse directly in a web browser.
No installation required - just select a folder.

---

## What You Get

Run `img2html-gui.exe`, select your image folder, and an `index.html` file is created inside that folder.
Open it in any web browser and a thumbnail gallery appears.

- Click an image to view it full size.
- Navigate through pages.
- Search by filename.

No heavy software to install - any browser such as Chrome or Edge is all you need.

---

## CLI Version

Run from command line and it automatically generates an HTML file in the current directory.

- Automatically generates HTML where you run the command
- Web pages include file search functionality
- Slideshow available (press Space to start/stop)

---

## Get Started in 5 Minutes

1. Run `img2html-gui.exe`.
2. Click the [Browse] button next to **Source Directory** and select the folder containing your images.
3. The default settings work as-is. Change only what you need.
4. Click the **[Generate]** button.
   - When complete, the **[Open HTML]** button becomes active.
5. Click **[Open HTML]** to view the gallery in your browser.

---

## Settings Reference

| Setting | Default | Description |
|---------|---------|-------------|
| **Source Directory** | - | Select the folder that contains the images you want to include. |
| **Output Filename** | `index` | Name of the HTML file to generate. `.html` is appended automatically. |
| **Image Extensions** | - | File extensions to include, separated by commas. Example: `png, jpg, jpeg` |
| **Thumbnail Size** | `100` px | Size of the preview thumbnails shown in the gallery. Larger values show bigger previews. |
| **Images per Page** | `10` | Number of images shown per page. Useful for browsing large collections quickly. |
| **Page Title** | `Image Gallery` | Title displayed in the browser tab. |
| **Theme** | - | Background style. `light` = light background, `dark` = dark background, `none` = no theme preset; uses the color entered in the BG Code field instead |
| **BG Code** | - | Custom background color when not using a theme preset. Format: `#RRGGBB` (e.g. `#FFFFFF`) |
| **Language** | `auto` | Interface language. `auto` = detect system language, `ko` = Korean, `en` = English |

---

## Common Mistakes

- **Do not include a dot (.) when entering extensions.**
  - Correct: `jpg, png`
  - Incorrect: `.jpg, .png`
- **Do not add `.html` to the output filename.** It is added automatically.
- **If images do not appear in the gallery**, check that their extension is listed in the Image Extensions field.
- **Settings are saved automatically.** Your configuration is restored the next time you run the program.

---

## Why does Windows show a security warning when I run the program?

`img2html-gui.exe` is not code-signed, which means Windows may display
an "Unknown app" warning the first time you run it.

**Option 1 - Unblock the file before running (recommended)**
1. Right-click `img2html-gui.exe` and select Properties.
2. At the bottom, check "Unblock" under the Security section.
3. Click OK, then run the program normally.

**Option 2 - Proceed from the warning screen**
1. On the "Windows protected your PC" screen, click "More info".
2. Click the "Run anyway" button that appears.

`img2html.exe` (the console program) runs without this warning.

---

## Contact

Created by JAEMUN, SHIN  
Contact: techbard@naver.com

For questions, bug reports, or improvement suggestions, please reach out to the email above.
All rights reserved. Unauthorized copying or redistribution is prohibited.
This program includes open-source components licensed under the MIT License. See the LICENSE file for details.
