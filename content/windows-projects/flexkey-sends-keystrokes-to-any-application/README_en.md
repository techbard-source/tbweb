FlexKey User Manual
====================

Introduction
------------
FlexKey is a simple tool that sends keystrokes to any application. It helps you automate repetitive typing tasks.

Basic Usage
----------
FK.exe "your text here"

This sends the text to the currently active window.

Examples
--------
1. Type simple text:
   FK.exe "Hello World"

2. Use keyboard shortcuts:
   FK.exe "^c"        (Ctrl+C)
   FK.exe "^v"        (Ctrl+V)
   FK.exe "^s"        (Ctrl+S)

3. Combine keys:
   FK.exe "+{ENTER}"  (Shift+Enter)
   FK.exe "^+a"       (Ctrl+A)

4. Wait between keystrokes:
   FK.exe "A{WAIT 500}B"
   (Type A, wait 0.5 seconds, then type B)

5. Repeat keys:
   FK.exe "{ENTER 5}" (Press Enter 5 times)
   FK.exe "A{WAIT 100}" (Hold A key briefly)

7. Toggle keyboard locks:
   FK.exe "{CAPSLOCK_ON}"   (Turn Caps Lock on)
   FK.exe "{NUMLOCK_OFF}"  (Turn Num Lock off)
   FK.exe "{SCROLLLOCK_ON}" (Turn Scroll Lock on)

8. Type current time:
   FK.exe "{TIME}" --env

Options
-------
-p, --paste     Use clipboard (faster for long text)
-r, --random    Type with slight delays (more natural)
-e, --env       Expand variables like %USERNAME% and {DATE}
-t "Title"     Focus a specific window first
-h, --help      Show help message

Modifiers
---------
`+`  Shift (hold while typing next key)
`^`  Ctrl  (hold while typing next key)
`%`  Alt   (hold while typing next key)

To type literal +, ^, or % characters:
   FK.exe "{+}"  (types the + symbol)
   FK.exe "{^}"  (types the ^ symbol)

Tips
----
- Send text starting with dash: FK.exe -t "Window Title" -- "-hello-"
- Enclose your text in quotes if it contains spaces
- FK.exe without arguments shows help
- Exit code 22 means invalid arguments

Contact
-------
Created by: JAEMUN, SHIN
Contact: techbard@naver.com

For questions, bug reports, or improvement suggestions, please contact the email above.