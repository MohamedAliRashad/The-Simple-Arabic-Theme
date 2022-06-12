// Fix DOM matches function
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) { }
      return i > -1;
    };
}

// Get Scroll position
function getScrollPos() {
  var supportPageOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

  var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
  var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

  return { x: x, y: y };
}

var _scrollTimer = [];

// Smooth scroll
function smoothScrollTo(y, time) {
  time = time == undefined ? 500 : time;

  var scrollPos = getScrollPos();
  var count = 60;
  var length = (y - scrollPos.y);

  function easeInOut(k) {
    return .5 * (Math.sin((k - .5) * Math.PI) + 1);
  }

  for (var i = _scrollTimer.length - 1; i >= 0; i--) {
    clearTimeout(_scrollTimer[i]);
  }

  for (var i = 0; i <= count; i++) {
    (function () {
      var cur = i;
      _scrollTimer[cur] = setTimeout(function () {
        window.scrollTo(
          scrollPos.x,
          scrollPos.y + length * easeInOut(cur / count)
        );
      }, (time / count) * cur);
    })();
  }
}

function getArabicNumbers(str) {
  var map = ["&\#1632;", "&\#1633;", "&\#1634;", "&\#1635;", "&\#1636;", "&\#1637;", "&\#1638;", "&\#1639;", "&\#1640;", "&\#1641;"];
  // var map = ["&\#1776;", "&\#1777;", "&\#1778;", "&\#1779;", "&\#1780;", "&\#1781;", "&\#1782;", "&\#1783;", "&\#1784;", "&\#1785;"];
  var newStr = "";

  str = String(str);
  
  for (i = 0; i < str.length; i++) {
    newStr += map[parseInt(str.charAt(i))];
  }
  
  return newStr;
}

function replaceDate(element) {
  var map = ["&\#1632;", "&\#1633;", "&\#1634;", "&\#1635;", "&\#1636;", "&\#1637;", "&\#1638;", "&\#1639;", "&\#1640;", "&\#1641;"];
  var arab_months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  var full_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var abb_months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  

  for (i = 0; i < full_months.length; i++) {
    element.innerHTML = element.innerHTML.replace(full_months[i], arab_months[i])
    element.innerHTML = element.innerHTML.replace(abb_months[i], arab_months[i])
  }
  
  // var map = ["&\#1776;", "&\#1777;", "&\#1778;", "&\#1779;", "&\#1780;", "&\#1781;", "&\#1782;", "&\#1783;", "&\#1784;", "&\#1785;"]
  element.innerHTML = element.innerHTML.replace(/\d(?=[^<>]*(<|$))/g, function ($0) { return map[$0] });
}

function replaceDigits (element) {
  var map = ["&\#1632;", "&\#1633;", "&\#1634;", "&\#1635;", "&\#1636;", "&\#1637;", "&\#1638;", "&\#1639;", "&\#1640;", "&\#1641;"];
  // var map = ["&\#1776;", "&\#1777;", "&\#1778;", "&\#1779;", "&\#1780;", "&\#1781;", "&\#1782;", "&\#1783;", "&\#1784;", "&\#1785;"]
  element.innerHTML = element.innerHTML.replace(/\d(?=[^<>]*(<|$))/g, function ($0) { return map[$0] });
}

document.addEventListener("DOMContentLoaded", function(){
  var elements = document.querySelectorAll(".post-meta,.segment-name,.date_span,.items, .post-date");;
  // var elements = document.getElementsByClassName('post-meta');
  for (var i = 0; i < elements.length; i++) {
    replaceDate(elements[i]);
  }
});
