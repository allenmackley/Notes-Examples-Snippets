## General notes and snippets

### Unix
Checks ports used by programs in Linux. Is useful to see if there are conflicts.  
`netstat -antp`

To check avail space on all drives:  
`df`

To check folder sizes of directories  
`sudo du -h / | grep '[0-9\.]\+G'`

### MySQL
Start MySQL from command line on OS X (From Homebrew Install)  
`mysql.server start`

With MAMP, normally start from the GUI.
Start MySQL CLI on OS X (From MAMP Install)
`/Applications/MAMP/Library/bin/mysql --host=localhost -uroot -proot`

Force Mysql Homebrew install to quit  
`launchctl unload -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist`

To set Mysql new password (if not set yet)  
`mysqladmin -u root password`

### NodeJS
NPM comes installed with node.

To install an NPM package  
`npm install nameofpackage`

Save dependencies specific to dev with  
`npm install nameofpackage --save-dev`

Node packages I use often
* forever
* emailjs
* crypto
* extend
* gm (graphicsmagick)
* jquery
* moment
* mongoose
* mysql
* showdown
* ws (websockets)

### MongoDB
Start MongoDB on localhost  
`sudo mongod --fork --logpath ~/Sites/sitename/log/mongo.log`

To install mongodb on OSX
```sh
brew install mongodb
sudo mkdir -p /data/db
```

### AWS
To use s3cmd to sync videos to an Amazon S3 bucket...
```sh
ssh user@location.com
cd /path/to/videos
s3cmd sync —recursive folder_with_videos s3://mybucketname/mydestination/
```

### Apache
apache2 to enable sites and mods:
sites:  
`sudo a2ensite mysite`
mods:  
`sudo a2enmod modname`

### NGINX
Nginx Conf on OS X can be found at:  
`/usr/local/etc/nginx/nginx.conf`

check NGINX config file for accuracy  
`nginx -t`

System Admin Gotchas in Dev Environment...
* Make sure Apache isn’t running at the same time as NGINX - if it is, this will prevent NGINX from working correctly if it tries to use the same port.
* Make sure PHP5-FPM is being used with correct port
    * make sure /etc/php5/fpm/pool.d/www.conf has "listen = 127.0.0.1:9000"
    * make sure that /etc/nginx/sites-enabled/default.conf also has "127.0.0.1:9000” as the port set for FAST CGI in the server block
* PHP5-FPM loads modules based on the files that are in the mods-available folder.  If the file is missing, but the module is installed, you can enable it by simply adding a new file and typing something like "extension=extensionname.so"

### PHP
Shows a list of compiled PHP modules
```sh
php -m  
php5-fpm -m
```

PHP packages I use often
* curl
* mysqli
* PDO
* pdo_mysql
* zlib
* openssl
* json
* … (and many others that usually come with PHP)

### Ruby
To start Rails server
```sh
cd ~/sites/myappdir
rails s
```
(starts rails WEBrick server on port 3000)
specify port with `rails s -p 3001 (port number)`

### MPEG-DASH
To create MPD file for MPEG-DASH support
https://bitmovin.com/mp4box-dash-content-generation-x264/

Prerequisites
* Make sure x264 is installed
    * https://gist.github.com/xdamman/e4f713c8cd1a389a5917

* Preparing Video File
    * If the source video is already in the correct format, this step can be skipped. However, the odds are long for this being the case. The following command (re-) encodes the video in H.264/AVC with the properties we will need. All the command line parameters are explained after the code.
        * x264 --output intermediate_2400k.264 --fps 24 --preset slow --bitrate 2400 --vbv-maxrate 4800 --vbv-bufsize 9600 --min-keyint 48 --keyint 48 --scenecut 0 --no-scenecut --pass 1 --video-filter “resize:width=1600,height=900” Demo_uhd_.mp4
        * x264 --output intermediate_2400k.264 --fps 24 --preset slow --bitrate 2400 --vbv-maxrate 4800 --vbv-bufsize 9600 --min-keyint 48 --keyint 48 --scenecut 0 --no-scenecut --pass 1 Demo_uhd_.mp4
* Segmenting
    * Now we add the previously created h264 raw video to an mp4 container as this is our container format of choice.
        * MP4Box -add intermediate.264 -fps 24 output_2400k.mp4
    * What follows is the step to actual create the segments and the corresponding MPD.
        * MP4Box -dash 4000 -frag 4000 -rap -segment-name segment_ demo_uhd_2400k.mp4
