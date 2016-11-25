@echo off

set user=mike
set pass=mike0901E
set host=210.65.89.161
set remote=/artshow.ndm.tw
set local=app

set protocol=ftp
set key=ssh-rsa 2048 79:4a:85:24:db:85:69:01:72:91:b5:81:35:71:6c:86

if %protocol%==sftp (set key= -hostkey=""%key%"") else (set key=)
start "" "C:\Program Files (x86)\WinSCP\WinSCP.exe" /console /command^
 "open %protocol%://%user%:%pass%@%host%/%key%"^
 "synchronize remote %local% %remote%"^
 "close"^
 "exit"


