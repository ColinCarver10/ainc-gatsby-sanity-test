// zoho-cookie.js
var w = window;
var p = w.location.protocol;

if (p.indexOf("http") < 0) {
  p = "http" + ":";
}

var d = document;
var f = d.getElementsByTagName('script')[0];
var s = d.createElement('script');

s.type = 'text/javascript';
s.async = false;

if (s.readyState) {
  s.onreadystatechange = function () {
    if (s.readyState == "loaded" || s.readyState == "complete") {
      s.onreadystatechange = null;
      try {
        loadwaprops(
          "3zd83d93948c4585430c826d9b3e39aacd",
          "3zb0786d32793933ea7f9c33de0c64ca26",
          "3z5008dc911164a9f9a92a33fc0e7315e78b721f83f4caf3fd9848a94b7488323d",
          "3z17545f03c854f7daca045bdf2c4ba61e",
          0.0
        );
      } catch (e) {}
    }
  };
} else {
  s.onload = function () {
    try {
      loadwaprops(
        "3zd83d93948c4585430c826d9b3e39aacd",
        "3zb0786d32793933ea7f9c33de0c64ca26",
        "3z5008dc911164a9f9a92a33fc0e7315e78b721f83f4caf3fd9848a94b7488323d",
        "3z17545f03c854f7daca045bdf2c4ba61e",
        0.0
      );
    } catch (e) {}
  };
}

s.src = p + "//ma.zoho.com/hub/js/WebsiteAutomation.js";
f.parentNode.insertBefore(s, f);