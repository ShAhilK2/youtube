<!-- Youtube Clone -->
<!-- Popular Videos -->
<!-- By Video Id Watch Page -->

<!-- Debouncing -->

typing slow = 200ms
typing fast = 30ms

performance :

- iphome pro max = 14 letter \* 1000 =14000
- with debouncing = 3 Api Calls \* 1000 =30000

Debouncing with 200ms

- if difference between keystroke is < 200ms : declined Api Call
- > 200ms : Make Api Call
