shweta@kitto:~/Documents/react.js$ node -v
bash: /usr/bin/node: No such file or directory
shweta@kitto:~/Documents/react.js$ sudo apt install curl 
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following packages were automatically installed and are no longer required:
  libc-ares2 libhttp-parser2.7.1 libuv1 nodejs-doc
Use 'sudo apt autoremove' to remove them.
The following additional packages will be installed:
  libcurl4
The following NEW packages will be installed:
  curl libcurl4
0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.
Need to get 373 kB of archives.
After this operation, 1,036 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 libcurl4 amd64 7.58.0-2ubuntu3 [214 kB]
Get:2 http://in.archive.ubuntu.com/ubuntu bionic/main amd64 curl amd64 7.58.0-2ubuntu3 [159 kB]
Fetched 373 kB in 2s (206 kB/s)
Selecting previously unselected package libcurl4:amd64.
(Reading database ... 129616 files and directories currently installed.)
Preparing to unpack .../libcurl4_7.58.0-2ubuntu3_amd64.deb ...
Unpacking libcurl4:amd64 (7.58.0-2ubuntu3) ...
Selecting previously unselected package curl.
Preparing to unpack .../curl_7.58.0-2ubuntu3_amd64.deb ...
Unpacking curl (7.58.0-2ubuntu3) ...
Setting up libcurl4:amd64 (7.58.0-2ubuntu3) ...
Setting up curl (7.58.0-2ubuntu3) ...
Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
Processing triggers for libc-bin (2.27-3ubuntu1.4) ...
shweta@kitto:~/Documents/react.js$ curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 15916  100 15916    0     0  40191      0 --:--:-- --:--:-- --:--:-- 40090
=> Downloading nvm as script to '/home/shweta/.nvm'

=> Appending nvm source string to /home/shweta/.bashrc
=> Appending bash_completion source string to /home/shweta/.bashrc
=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
shweta@kitto:~/Documents/react.js$ source ~/.bashrc   
shweta@kitto:~/Documents/react.js$ nvm -v
0.39.2
shweta@kitto:~/Documents/react.js$ nvm

Node Version Manager (v0.39.2)

Note: <version> refers to any version-like string nvm understands. This includes:
  - full or partial version numbers, starting with an optional "v" (0.10, v0.1.2, v1)
  - default (built-in) aliases: node, stable, unstable, iojs, system
  - custom aliases you define with `nvm alias foo`

 Any options that produce colorized output should respect the `--no-colors` option.

Usage:
  nvm --help                                  Show this message
    --no-colors                               Suppress colored output
  nvm --version                               Print out the installed version of nvm
  nvm install [<version>]                     Download and install a <version>. Uses .nvmrc if available and version is omitted.
   The following optional arguments, if provided, must appear directly after `nvm install`:
    -s                                        Skip binary download, install from source only.
    -b                                        Skip source download, install from binary only.
    --reinstall-packages-from=<version>       When installing, reinstall packages installed in <node|iojs|node version number>
    --lts                                     When installing, only select from LTS (long-term support) versions
    --lts=<LTS name>                          When installing, only select from versions for a specific LTS line
    --skip-default-packages                   When installing, skip the default-packages file if it exists
    --latest-npm                              After installing, attempt to upgrade to the latest working npm on the given node version
    --no-progress                             Disable the progress bar on any downloads
    --alias=<name>                            After installing, set the alias specified to the version specified. (same as: nvm alias <name> <version>)
    --default                                 After installing, set default alias to the version specified. (same as: nvm alias default <version>)
  nvm uninstall <version>                     Uninstall a version
  nvm uninstall --lts                         Uninstall using automatic LTS (long-term support) alias `lts/*`, if available.
  nvm uninstall --lts=<LTS name>              Uninstall using automatic alias for provided LTS line, if available.
  nvm use [<version>]                         Modify PATH to use <version>. Uses .nvmrc if available and version is omitted.
   The following optional arguments, if provided, must appear directly after `nvm use`:
    --silent                                  Silences stdout/stderr output
    --lts                                     Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                          Uses automatic alias for provided LTS line, if available.
  nvm exec [<version>] [<command>]            Run <command> on <version>. Uses .nvmrc if available and version is omitted.
   The following optional arguments, if provided, must appear directly after `nvm exec`:
    --silent                                  Silences stdout/stderr output
    --lts                                     Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                          Uses automatic alias for provided LTS line, if available.
  nvm run [<version>] [<args>]                Run `node` on <version> with <args> as arguments. Uses .nvmrc if available and version is omitted.
   The following optional arguments, if provided, must appear directly after `nvm run`:
    --silent                                  Silences stdout/stderr output
    --lts                                     Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                          Uses automatic alias for provided LTS line, if available.
  nvm current                                 Display currently activated version of Node
  nvm ls [<version>]                          List installed versions, matching a given <version> if provided
    --no-colors                               Suppress colored output
    --no-alias                                Suppress `nvm alias` output
  nvm ls-remote [<version>]                   List remote versions available for install, matching a given <version> if provided
    --lts                                     When listing, only show LTS (long-term support) versions
    --lts=<LTS name>                          When listing, only show versions for a specific LTS line
    --no-colors                               Suppress colored output
  nvm version <version>                       Resolve the given description to a single local version
  nvm version-remote <version>                Resolve the given description to a single remote version
    --lts                                     When listing, only select from LTS (long-term support) versions
    --lts=<LTS name>                          When listing, only select from versions for a specific LTS line
  nvm deactivate                              Undo effects of `nvm` on current shell
    --silent                                  Silences stdout/stderr output
  nvm alias [<pattern>]                       Show all aliases beginning with <pattern>
    --no-colors                               Suppress colored output
  nvm alias <name> <version>                  Set an alias named <name> pointing to <version>
  nvm unalias <name>                          Deletes the alias named <name>
  nvm install-latest-npm                      Attempt to upgrade to the latest working `npm` on the current node version
  nvm reinstall-packages <version>            Reinstall global `npm` packages contained in <version> to current version
  nvm unload                                  Unload `nvm` from shell
  nvm which [current | <version>]             Display path to installed node version. Uses .nvmrc if available and version is omitted.
    --silent                                  Silences stdout/stderr output when a version is omitted
  nvm cache dir                               Display path to the cache directory for nvm
  nvm cache clear                             Empty cache directory for nvm
  nvm set-colors [<color codes>]              Set five text colors using format "yMeBg". Available when supported.
                                               Initial colors are:
                                                   b  y  g  r  e
                                               Color codes:
                                                 r/R = red / bold red
                                                 g/G = green / bold green
                                                 b/B = blue / bold blue
                                                 c/C = cyan / bold cyan
                                                 m/M = magenta / bold magenta
                                                 y/Y = yellow / bold yellow
                                                 k/K = black / bold black
                                                 e/W = light grey / white

Example:
  nvm install 8.0.0                     Install a specific version number
  nvm use 8.0                           Use the latest available 8.0.x release
  nvm run 6.10.3 app.js                 Run app.js using node 6.10.3
  nvm exec 4.8.3 node app.js            Run `node app.js` with the PATH pointing to node 4.8.3
  nvm alias default 8.1.0               Set default node version on a shell
  nvm alias default node                Always default to the latest available node version on a shell

  nvm install node                      Install the latest available version
  nvm use node                          Use the latest version
  nvm install --lts                     Install the latest LTS version
  nvm use --lts                         Use the latest LTS version

  nvm set-colors cgYmW                  Set text colors to cyan, green, bold yellow, magenta, and white

Note:
  to remove, delete, or uninstall nvm - just remove the `$NVM_DIR` folder (usually `~/.nvm`)

shweta@kitto:~/Documents/react.js$ nvm install node 
Downloading and installing node v19.2.0...
Downloading https://nodejs.org/dist/v19.2.0/node-v19.2.0-linux-x64.tar.xz...
################################################################################################################ 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v19.2.0 (npm v)
Creating default alias: default -> node (-> v19.2.0)
shweta@kitto:~/Documents/react.js$ npm -v
node: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.28' not found (required by node)
shweta@kitto:~/Documents/react.js$ npm
node: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.28' not found (required by node)
shweta@kitto:~/Documents/react.js$ nvm install 14
Downloading and installing node v14.21.1...
Downloading https://nodejs.org/dist/v14.21.1/node-v14.21.1-linux-x64.tar.xz...
################################################################################################################ 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v14.21.1 (npm v6.14.17)
shweta@kitto:~/Documents/react.js$ npm -v
6.14.17
shweta@kitto:~/Documents/react.js$ nvm install 18
Downloading and installing node v18.12.1...
Downloading https://nodejs.org/dist/v18.12.1/node-v18.12.1-linux-x64.tar.xz...
################################################################################################################ 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v18.12.1 (npm v)
shweta@kitto:~/Documents/react.js$ npm -v
node: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.28' not found (required by node)
shweta@kitto:~/Documents/react.js$ nvm install 16
Downloading and installing node v16.18.1...
Downloading https://nodejs.org/dist/v16.18.1/node-v16.18.1-linux-x64.tar.xz...
################################################################################################################ 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v16.18.1 (npm v8.19.2)
shweta@kitto:~/Documents/react.js$ npm -v
8.19.2
shweta@kitto:~/Documents/react.js$ nvm list
awk: line 15: illegal reference to array lines
awk: line 19: illegal reference to array fields
default -> node (-> v19.2.0)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v19.2.0) (default)
stable -> 19.2 (-> v19.2.0) (default)
lts/* -> lts/hydrogen (-> v18.12.1)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12 (-> N/A)
lts/fermium -> v14.21.1
lts/gallium -> v16.18.1
lts/hydrogen -> v18.12.1
shweta@kitto:~/Documents/react.js$ nvm use 18
Now using node v18.12.1 (npm v)
shweta@kitto:~/Documents/react.js$ nvm list
awk: line 15: illegal reference to array lines
awk: line 19: illegal reference to array fields
default -> node (-> v19.2.0)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v19.2.0) (default)
stable -> 19.2 (-> v19.2.0) (default)
lts/* -> lts/hydrogen (-> v18.12.1)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12 (-> N/A)
lts/fermium -> v14.21.1
lts/gallium -> v16.18.1
lts/hydrogen -> v18.12.1
shweta@kitto:~/Documents/react.js$ nvm use 14
Now using node v14.21.1 (npm v6.14.17)
shweta@kitto:~/Documents/react.js$ nvm list
awk: line 15: illegal reference to array lines
awk: line 19: illegal reference to array fields
default -> node (-> v19.2.0)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v19.2.0) (default)
stable -> 19.2 (-> v19.2.0) (default)
lts/* -> lts/hydrogen (-> v18.12.1)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12 (-> N/A)
lts/fermium -> v14.21.1
lts/gallium -> v16.18.1
lts/hydrogen -> v18.12.1
shweta@kitto:~/Documents/react.js$ history
    1  npm
    2  npx create-react-app hello-world
    3  node -v
    4  sudo apt install nodejs
    5  npm -v
    6  sudo apt install npm
    7  node --version
    8  npm -v
    9  sudo apt install npm
   10  nvm -v
   11  sudo apt remove nodejs
   12  node -v
   13  sudo apt install curl 
   14  curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
   15  source ~/.bashrc   
   16  nvm -v
   17  nvm
   18  nvm install node 
   19  npm -v
   20  npm
   21  nvm install 14
   22  npm -v
   23  nvm install 18
   24  npm -v
   25  nvm install 16
   26  npm -v
   27  nvm list
   28  nvm use 18
   29  nvm list
   30  nvm use 14
   31  nvm list
   32  history
shweta@kitto:~/Documents/react.js$ 
  
================================================================  
 npm
    2  npx create-react-app hello-world
    3  node -v
    4  sudo apt install nodejs
    5  npm -v
    6  sudo apt install npm
    7  node --version
    8  npm -v
    9  sudo apt install npm
   10  nvm -v
   11  sudo apt remove nodejs
   12  node -v
   13  sudo apt install curl 
   14  curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
   15  source ~/.bashrc   
   16  nvm -v
   17  nvm
   18  nvm install node 
   19  npm -v
   20  npm
   21  nvm install 14
   22  npm -v
   23  nvm install 18
   24  npm -v
   25  nvm install 16
   26  npm -v
   27  nvm list
   28  nvm use 18
   29  nvm list
   30  nvm use 14
   31  nvm list
   32  history
   33  npx -v
   34  npx create-react-app my_app
   35  cd my_app
   36  npm start
   37  npm xmas
   38  npm visnup
   39  npm start
   40  history
shweta@kitto:~/Documents/react.js/my_app$ 
