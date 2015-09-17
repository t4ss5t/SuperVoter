beforeEach(function() {
  return browser.ignoreSynchronization = false;
});

beforeEach(function() {
  isAngularSite(false);
});

function setAttributes() {

  function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  console.log("set attributes");

  var resolutions = new Array(
    "640x480x16",
    "1280x720x16",
    "1920x1200x16",
    "2048x1152x16",
    "800x600x16",
    "1280x800x16",
    "1280x768x16",
    "1280x1024x16",
    "1152x768x16",
    "1920x1080x16",
    "1152x1080x16",
    "1152x1024x16",
    "1024x768x16",
    "640x480x24",
    "1280x720x24",
    "1920x1200x24",
    "2048x1152x24",
    "800x600x24",
    "1280x800x24",
    "1280x768x24",
    "1280x1024x24",
    "1152x768x24",
    "1920x1080x24",
    "1152x1080x24",
    "1152x1024x24",
    "1024x768x24",
    "640x480x32",
    "1280x720x32",
    "1920x1200x32",
    "2048x1152x32",
    "800x600x32",
    "1280x800x32",
    "1280x768x32",
    "1280x1024x32",
    "1152x768x32",
    "1920x1080x32",
    "1152x1080x32",
    "1152x1024x32",
    "1024x768x32"
  );

  var windows = new Array(
    "580x372"
  );

  var pluginsCount = 4;
  var plugins = new Array(
    "Google Update",
    "Microsoft Download Manager Plugin",
    "NVIDIA 3D VISION",
    "NVIDIA 3D Vision",
    "Shockwave Flash",
    "Silverlight Plug-In",
    "VLC Web Plugin",
    "Realtime",
    "Apple Quicktime",
    "SuperCanvas",
    "WebSocket Debugger",
    "Java",
    "JRE",
    "JavaDevKit",
    "ActiveX"
  );
  plugins = shuffle(plugins);

  var fontsCount = 5;
  var fonts = new Array(
    "Arial",
    "Balloon",
    "Bodoni",
    "Chicago",
    "Corbel",
    "Courier",
    "Georgia",
    "Helvetica",
    "Liberation Serif",
    "Linux Libertine",
    "Trebuchet MS",
    "Verdana",
    "Vera Sans",
    "Albany",
    "Candara",
    "DejaVu Sans",
    "Frutiger",
    "Impact",
    "Kievit",
    "Minion",
    "Rockwell",
    "TheSans",
    "Vectora",
    "Potsdam",
    "FF Meta",
    "Lucida Console",
    "Haettenschweiler"
  );
  fonts = shuffle(fonts);

  elementResolution = document.getElementById("fingerprint_resolution");
  elementResolution.setAttribute("value", resolutions[Math.floor(Math.random()*resolutions.length)]);

  elementWindow = document.getElementById("fingerprint_window");
  elementWindow.setAttribute("value", windows[Math.floor(Math.random()*windows.length)]);

  elementPlugins = document.getElementById("fingerprint_plugins");
  elementPlugins.setAttribute("value", plugins.splice(0, pluginsCount).join(','));

  elementFonts = document.getElementById("fingerprint_fonts");
  elementFonts.setAttribute("value", fonts.splice(0, fontsCount).join(','));

  console.log("attributes set");

  return 1;
}

describe('super voter', function() {
  it('call form', function() {

	  browser.get(browser.params.url);

    element(by.id('btn_vote_active')).element(by.css('a.thickbox')).click().then(function() {
  
      browser.sleep(12000);
  
      browser.switchTo().frame(browser.driver.findElement(protractor.By.id('TB_iframeContent')));

      browser.sleep(1000);
  
      browser.executeScript(setAttributes).then(function (result) {
        if( result )
        {
          if( browser.params.autoSubmit )
          {
            console.log("attributes set");
          }
          else
          {
            console.log("####################################");
            console.log("ATTRIBUTES SET");
            console.log("####################################");
            console.log("SUBMIT FORM NOW !!!");
            console.log("####################################");
          }

          var currentDate = new Date(); 
          var dateTime = "Last executed: " + currentDate.getDate() + "/"
                + (currentDate.getMonth()+1)  + "/" 
                + currentDate.getFullYear() + " @ "  
                + currentDate.getHours() + ":"  
                + currentDate.getMinutes() + ":" 
                + currentDate.getSeconds();

          console.log(dateTime);

          if ( browser.params.autoSubmit )
          {
            element(by.id('submit')).click();
          }
        }
      });
  
      browser.sleep(80000);
    });

 	  browser.sleep(100000);
  })
});