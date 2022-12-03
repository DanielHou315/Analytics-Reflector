let useragent = navigator.userAgent;
let lang = navigator.language;

console.log(useragent);

// Operating System Detection
if(useragent.includes("Mac OS")){ document.getElementById('os').innerHTML = "Apple MacOS"; }
else if(useragent.includes("Windows")){ document.getElementById('os').innerHTML = "Microsoft Windows"; }
else if(useragent.includes("Linux")){ document.getElementById('os').innerHTML = "Linux"; }
else{ document.getElementById('os').innerHTML = "Other"; }

// Browser Detection
if(useragent.includes("Firefox")){ document.getElementById('browser').innerHTML = "Mozilla Firefox"; }
else if(useragent.includes("Chrome")){ document.getElementById('browser').innerHTML = "Google Chrome or Chromium"; }
else if(useragent.includes("Safari")){ document.getElementById('browser').innerHTML = "Apple Safari"; }
else if(useragent.includes("Edg")){ document.getElementById('browser').innerHTML = "Microsoft Edge (Chromium)"; }
else if(useragent.includes("Edge")){ document.getElementById('browser').innerHTML = "Microsoft Edge (Legacy)"; }
else if(useragent.includes("Trident")){ document.getElementById('browser').innerHTML = "Microsoft Internet Explorer"; }
else if(useragent.includes("Opera") || useragent.includes("OPR")){ document.getElementById('browser').innerHTML = "Opera"; }
else if(useragent.includes("SamsungBrowser")){ document.getElementById('browser').innerHTML = "Samsung Internet"; }
else{ document.getElementById('browser').innerHTML = "Other"; }

// Language Detection
document.getElementById('lang').innerHTML = lang;
