# SuperVoter

## Notices

### How to open a terminal

1. Use "WINDOWS + R" to open execute prompt

2. Run "cmd" command to open a new terminal

### How to change to a directory in the console

1. Open a terminal

1. Change to folder

```
cd C:\Folder
```

## Prerequisites

### Firefox

You need firefox to use this script.

### Download the SuperVoter repository

Download [SuperVoter](https://github.com/t4ss5t/supervoter/archive/master.zip) and unzip.

### Node.js

Download from [Node.js](https://nodejs.org/en/) and install.

### NPM

1. Open a new terminal

1. Change to folder that contains the SuperVoter repository

```
cd C:\SuperVoter
```

2. Execute npm install routine:

```
npm install
```

### Protractor

Open terminal (or use the previous one) and execute:

```
npm install -g protractor
```

```
webdriver-manager update
```

### Configure target url

1. Open config.js (located in the SuperVoter repository) with a text editor

2. Set url parameter (line 22)

From ...
```
params: {
  url: '',
  autoSubmit: false
}
```

... to:

```
params: {
  url: 'http://www.url.com',
  autoSubmit: false
}
```

### Configure auto submit

The auto submit option is deactivated by default. To activate this option, you have to set the autoSubmit parameter to "true".

1. Open config.js (located in the SuperVoter repository) with a text editor

2. Set autoSubmit parameter (line 23)

auto submit deactivated (default):
```
params: {
  url: '...',
  autoSubmit: false
}
```

auto submit activated:
```
params: {
  url: '...',
  autoSubmit: true
}
```

## Run

### Create two terminals

You'll need two terminals, you can create them as described in the notices.

### First terminal

1. Run webdriver manager

```
webdriver-manager start
```

### Second terminal

1. Change to folder that contains the SuperVoter repository

```
cd C:\SuperVoter
```

2. Run script

```
protractor config.js
```

To be reminded if you can run the script again add the reminder:

```
protractor config.js & node reminder.js
```

3. Wait for captcha code popup

4. Insert captcha code to text input field immediately

5. [autoSubmit==false] Wait until "attributes set" / "submit form now" is written in the terminal console and submit the form manually

5. [autoSubmit==true] Do nothing and relax ;-)

Notices:
- You can repeat step 2 to 6 every ~5-8 minutes
- You can use the arrow up/down keys to get the last called command (so you don't have to type the call of the script every time)
