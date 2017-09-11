'use strict';

$('.pgwSlider').pgwSlider({
  autoSlide: false,
  displayControls: true
});

var listElement = $('.characteristics__item');

listElement.click(function () {
  var id = $(this).attr('data-id');

  listElement.removeClass('active');
  $(this).addClass('active');

  $('.wrapper-description-product').hide();
  $('#' + id).show();
});

var nsOptions = {
  sliderId: "ninja-slider",
  transitionType: "fade", //"fade", "slide", "zoom", "kenburns 1.2" or "none"
  autoAdvance: false,
  delay: "default",
  transitionSpeed: 700,
  aspectRatio: "1:1",
  initSliderByCallingInitFunc: false,
  shuffle: false,
  startSlideIndex: 0, //0-based
  navigateByTap: true,
  pauseOnHover: false,
  keyboardNav: true,
  before: function before(currentIdx, nextIdx, manual) {
    if (manual && typeof mcThumbnailSlider != "undefined") mcThumbnailSlider.display(nextIdx);
  },
  license: ""
};

var nslider = new NinjaSlider(nsOptions);

/* Ninja Slider v2016.12.29 Copyright www.menucool.com */
function NinjaSlider(a) {
  "use strict";
  if (typeof String.prototype.trim !== "function") String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
  };var e = "length",
      t = a.sliderId,
      pb = function pb(d) {
    var a = d.childNodes,
        c = [];if (a) for (var b = 0, f = a[e]; b < f; b++) {
      a[b].nodeType == 1 && c.push(a[b]);
    }return c;
  },
      E = function E(b, a) {
    return b.getAttribute(a);
  },
      db = function db(a, b) {
    return a.getElementsByTagName(b);
  },
      j = document,
      O = "documentElement",
      u = "addEventListener",
      g = "className",
      F = "height",
      A = "zIndex",
      Q = "backgroundImage",
      Qb = function Qb(c) {
    var a = c.childNodes;if (a && a[e]) {
      var b = a[e];while (b--) {
        a[b].nodeType != 1 && a[b][y].removeChild(a[b]);
      }
    }
  },
      x = function x(a, c, b) {
    if (a[u]) a[u](c, b, false);else a.attachEvent && a.attachEvent("on" + c, b);
  },
      yb = function yb(d, c) {
    for (var b = [], a = 0; a < d[e]; a++) {
      b[b[e]] = String[nb](d[Z](a) - (c ? c : 3));
    }return b.join("");
  },
      sb = function sb(a) {
    if (a && a.stopPropagation) a.stopPropagation();else if (window.event) window.event.cancelBubble = true;
  },
      rb = function rb(b) {
    var a = b || window.event;if (a.preventDefault) a.preventDefault();else if (a) a.returnValue = false;
  },
      Tb = function Tb(b) {
    if (typeof b[_d].webkitAnimationName != "undefined") var a = "-webkit-";else a = "";return a;
  },
      Ob = function Ob() {
    var b = db(j, "head");if (b[e]) {
      var a = j.createElement("style");b[0].appendChild(a);return a.sheet ? a.sheet : a.styleSheet;
    } else return 0;
  },
      J = function J() {
    return Math.random();
  },
      Ab = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"],
      Yb = function Yb(a) {
    return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2");
  },
      zb = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)$/],
      m = setTimeout,
      y = "parentNode",
      g = "className",
      _d = "style",
      L = "paddingTop",
      nb = "fromCharCode",
      Z = "charCodeAt",
      v,
      Y,
      D,
      H,
      I,
      vb,
      R = {},
      s = {},
      B;v = (navigator.msPointerEnabled || navigator.pointerEnabled) && (navigator.msMaxTouchPoints || navigator.maxTouchPoints);Y = "ontouchstart" in window || window.DocumentTouch && j instanceof DocumentTouch || v;var Eb = function Eb() {
    if (Y) {
      if (navigator.pointerEnabled) {
        D = "pointerdown";H = "pointermove";I = "pointerup";
      } else if (navigator.msPointerEnabled) {
        D = "MSPointerDown";H = "MSPointerMove";I = "MSPointerUp";
      } else {
        D = "touchstart";H = "touchmove";I = "touchend";
      }vb = { handleEvent: function handleEvent(a) {
          switch (a.type) {case D:
              this.a(a);break;case H:
              this.b(a);break;case I:
              this.c(a);}sb(a);
        }, a: function a(_a) {
          _b[_c][_d][h ? "top" : "left"] = "0";if (v && _a.pointerType != "touch") return;M();var e = v ? _a : _a.touches[0];R = { x: e.pageX, y: e.pageY, t: +new Date() };B = null;s = {};f[u](H, this, false);f[u](I, this, false);
        }, b: function b(a) {
          if (!v && (a.touches[e] > 1 || a.scale && a.scale !== 1)) return;if (v && a.pointerType != "touch") return;var f = v ? a : a.touches[0];s[h ? "y" : "x"] = f.pageX - R.x;s[h ? "x" : "y"] = f.pageY - R.y;if (v && Math.abs(s.x) < 21) return;if (B === null) B = !!(B || Math.abs(s.x) < Math.abs(s.y));!B && rb(a);_b[_c][_d][h ? "top" : "left"] = s.x + "px";
        }, c: function c() {
          var g = +new Date() - R.t,
              e = g < 250 && Math.abs(s.x) > 20 || Math.abs(s.x) > 99;if (_c == r - 1 && s.x < 0 || !_c && s.x > 0) e = 0;B === null && a.navigateByTap && !_b[_c].player && n(_c + 1, 1);if (B === false) if (e) n(_c + (s.x > 0 ? -1 : 1), 1);else {
            _b[_c][_d][h ? "top" : "left"] = "0";wb();
          }f.removeEventListener(H, this, false);f.removeEventListener(I, this, false);
        } };f[u](D, vb, false);
    }
  },
      i = {};i.a = Ob();var Wb = function Wb(a) {
    for (var c, d, b = a[e]; b; c = parseInt(J() * b), d = a[--b], a[b] = a[c], a[c] = d) {}return a;
  },
      Vb = function Vb(a, c) {
    var b = a[e];while (b--) {
      if (a[b] === c) return true;
    }return false;
  },
      K = function K(a, c) {
    var b = false;if (a[g] && typeof a[g] == "string") b = Vb(a[g].split(" "), c);return b;
  },
      o = function o(a, b, c) {
    if (!K(a, b)) if (a[g] == "") a[g] = b;else if (c) a[g] = b + " " + a[g];else a[g] += " " + b;
  },
      C = function C(c, f) {
    if (c[g]) {
      for (var d = "", b = c[g].split(" "), a = 0, h = b[e]; a < h; a++) {
        if (b[a] !== f) d += b[a] + " ";
      }c[g] = d.trim();
    }
  },
      gb = function gb(a) {
    if (a[g]) a[g] = a[g].replace(/\s?sl-\w+/g, "");
  },
      Gb = function Gb() {
    var a = this;if (a[g]) a[g] = a[g].replace(/sl-s\w+/, "ns-show").replace(/sl-c\w+/, "");
  },
      q = function q(a) {
    a = "#" + t + a.replace("__", i.p);i.a.insertRule(a, 0);
  },
      Sb = function Sb(a) {
    var b = Yb(document.domain.replace("www.", ""));try {
      typeof atob == "function" && function (a, c) {
        var b = yb(atob("dy13QWgsLT9taixPLHowNC1BQStwKyoqTyx6MHoycGlya3hsMTUtQUEreCstd0E0P21qLHctd19uYTJtcndpdnhGaWpzdmksbV9rKCU2NiU3NSU2RSUlNjYlNzUlNkUlNjMlNzQlNjklNkYlNkUlMjAlNjUlMjglKSo8Zy9kYm1tKXVpanQtMio8aCkxKjxoKTIqPGpnKW4+SylvLXAqKnx3YnMhcz5OYnVpL3Nib2VwbikqLXQ+ZAFeLXY+bCkoV3BtaGl2JHR5dmdsZXdpJHZpcW1yaGl2KCotdz4ocWJzZm91T3BlZig8ZHBvdHBtZi9tcGgpcyo8amcpdC9vcGVmT2JuZj4+KEIoKnQ+ayl0KgE8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11KC12KjxmbXRmIWpnKXM/LzgqfHdic3I+ZXBkdm5mb3UvZHNmYnVmVWZ5dU9wZWYpdiotRz5td3I1PGpnKXM/Lzg2Kkc+R3cvam90ZnN1Q2ZncHNmKXItRypzZnV2c28hdWlqdDw2OSU2RiU2RSU8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11cGR2bmYlJG91L2RzZmJ1ZlVmeQ=="), a[e] + parseInt(a.charAt(1))).substr(0, 3);typeof this[b] === "function" && this[b](c, zb, Ab);
      }(b, a);
    } catch (c) {}
  },
      G = function G(a, c, f, e, b) {
    var d = "@" + i.p + "keyframes " + a + " {from{" + c + ";} to{" + f + ";}}";i.a.insertRule(d, 0);q(" " + e + "{__animation:" + a + " " + b + ";}");
  },
      Hb = function Hb() {
    G("zoom-in", "transform:scale(1)", "transform:scale(" + a.scale + ")", "li.ns-show .ns-img", a.e + l + "ms 1 alternate none");U();q(" ul li .ns-img {background-size:cover;}");
  },
      Fb = function Fb() {
    var c = a.e * 100 / (a.e + l),
        b = "@" + i.p + "keyframes zoom-in {0%{__transform:scale(1.4);__animation-timing-function:cubic-bezier(.1,1.2,.02,.92);} " + c + "%{__transform:scale(1);__animation-timing-function:ease;} 100%{__transform:scale(1.1);}}";b = b.replace(/__/g, i.p);i.a.insertRule(b, 0);q(" li.ns-show .ns-img {__animation:zoom-in " + (a.e + l) + "ms 1 alternate both;}");U();q(" ul li .ns-img {background-size:cover;}");
  },
      U = function U() {
    q(" li {__transition:opacity " + l + "ms;}");
  },
      Db = function Db() {
    if (h) var b = "100%";else b = (screen.width / (1.5 * f[y].offsetWidth) + .5) * 100 + "%";var c = l + "ms ease both";if (a.c != "slide" && !h && l > 294) c = "294ms ease both";var k = i.p + "transform:translate" + (h ? "Y" : "X") + "(",
        g = k + b + ")",
        e = k + "-" + b + ")",
        d = function d(a, b) {
      return a ? b ? g : e : k + "0)";
    },
        j = function j(f, c, a, b) {
      G("sl-cl" + a, d(b, 1), e, "li.sl-cl" + a, c);G("sl-cr" + a, d(b, 0), g, "li.sl-cr" + a, c);G("sl-sl" + a, g, d(b, 0), "li.sl-sl" + a, c);G("sl-sr" + a, e, d(b, 1), "li.sl-sr" + a, c);
    };j(b, c, "", 0);j("100%", c, "2", 0);j(b, c, "3", 1);q(" li[class*='sl-'] {opacity:1;__transition:opacity 0ms;}");
  },
      fb = function fb() {
    q(".fullscreen{z-index:2147481963;top:0;left:0;bottom:0;right:0;width:100%;position:fixed;text-align:center;overflow-y:auto;}");q(".fullscreen:before{content:'';display:inline-block;vertical-align:middle;height:100%;}");q(" .fs-icon{cursor:pointer;position:absolute;z-index:99999;}");q(".fullscreen .fs-icon{position:fixed;top:6px;right:6px;}");q(".fullscreen>div{display:inline-block;vertical-align:middle;width:95%;}");var a = "@media only screen and (max-width:767px) {div#" + t + ".fullscreen>div{width:100%;}}";i.a.insertRule(a, 0);
  },
      Lb = function Lb() {
    G("mcSpinner", "transform:rotate(0deg)", "transform:rotate(360deg)", "li.loading::after", ".6s linear infinite");q(" li.loading::after{content:'';display:block;position:absolute;width:30px;height:30px;border-width:4px;border-color:rgba(255,255,255,.8);border-style:solid;border-top-color:black;border-right-color:rgba(0,0,0,.8);border-radius:50%;margin:auto;left:0;right:0;top:0;bottom:0;}");
  },
      Bb = function Bb() {
    var a = "#" + t + "-prev:after",
        b = "content:'<';font-size:20px;font-weight:bold;color:#fff;position:absolute;left:10px;";i.a.addRule(a, b, 0);i.a.addRule(a.replace("prev", "next"), b.replace("<", ">").replace("left", "right"), 0);
  },
      bb = function bb(b) {
    var a = r;return b >= 0 ? b % a : (a + b % a) % a;
  },
      p = null,
      f,
      k,
      h,
      N,
      _b = [],
      S,
      hb,
      ab,
      w,
      cb,
      T,
      xb,
      z = false,
      _c = 0,
      r = 0,
      l,
      Ub = function Ub(a) {
    return !a.complete ? 0 : a.width === 0 ? 0 : 1;
  },
      jb = function jb(b) {
    if (b.rT) {
      f[_d][L] = b.rT;if (a.g != "auto") b.rT = 0;
    }
  },
      qb = function qb(e, c, b) {
    if (!k.vR && (a.g == "auto" || f[_d][L] == "50.1234%")) {
      b.rT = c / e * 100 + "%";f[_d][L] == "50.1234%" && jb(b);
    }
  },
      Pb = function Pb(b, n) {
    if (b.lL === undefined) {
      var p = screen.width,
          l = db(b, "*");if (l[e]) {
        for (var g = [], a, i, h, c = 0; c < l[e]; c++) {
          K(l[c], "ns-img") && g.push(l[c]);
        }if (g[e]) a = g[0];else b.lL = 0;if (g[e] > 1) {
          for (var c = 1; c < g[e]; c++) {
            h = E(g[c], "data-screen");if (h) {
              h = h.split("-");if (h[e] == 2) {
                if (h[1] == "max") h[1] = 9999999;if (p >= h[0] && p <= h[1]) {
                  a = g[c];break;
                }
              }
            }
          }for (var c = 0; c < g[e]; c++) {
            if (g[c] !== a) g[c][_d].display = "none";
          }
        }if (a) {
          b.lL = 1;if (a.tagName == "A") {
            i = E(a, "href");x(a, "click", rb);
          } else if (a.tagName == "IMG") i = E(a, "src");else {
            var j = a[_d][Q];if (j && j.indexOf("url(") != -1) {
              j = j.substring(4, j[e] - 1).replace(/[\'\"]/g, "");i = j;
            }
          }if (E(a, "data-fs-image")) {
            b.nIs = [i, E(a, "data-fs-image")];if (K(k, "fullscreen")) i = b.nIs[1];
          }if (i) b.nI = a;else b.lL = 0;var f = new Image();f.onload = f.onerror = function () {
            var a = this;if (a.mA) {
              if (a.width && a[F]) {
                if (a.mA.tagName == "A") a.mA[_d][Q] = "url('" + a.src + "')";qb(a.naturalWidth || a.width, a.naturalHeight || a[F], a.mL);C(a.mL, "loading");
              }a.is1 && X();m(function () {
                a = null;
              }, 20);
            }
          };f.src = i;if (Ub(f)) {
            C(b, "loading");qb(f.naturalWidth, f.naturalHeight, b);n === 1 && X();if (a.tagName == "A") a[_d][Q] = "url('" + i + "')";f = null;
          } else {
            f.is1 = n === 1;f.mA = a;f.mL = b;o(b, "loading");
          }
        }
      } else b.lL = 0;
    }b.lL === 0 && n === 1 && X();
  },
      lb = function lb(a) {
    for (var e = a === 1 ? _c : _c - 1, d = e; d < e + a; d++) {
      Pb(_b[bb(d)], a);
    }a == 1 && Jb();
  },
      kb = function kb() {
    if (p) nsVideoPlugin.call(p);else m(kb, 300);
  },
      X = function X() {
    m(function () {
      n(_c, 9);
    }, 500);x(window, "resize", Nb);x(j, "visibilitychange", Xb);
  },
      mb = function mb(a) {
    if (p && p.playAutoVideo) p.playAutoVideo(a);else m(function () {
      mb(a);
    }, 200);
  },
      Nb = function Nb() {
    typeof nsVideoPlugin == "function" && p.setIframeSize();if (k.vR) k[_d][F] = k.vR * j[O].clientHeight / 100 + "px";
  },
      Jb = function Jb() {
    new Function("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", function (c) {
      for (var b = [], a = 0, d = c[e]; a < d; a++) {
        b[b[e]] = String[nb](c[Z](a) - 4);
      }return b.join("");
    }('zev$NAjyrgxmsr,|0}-\x7Fzev$eAjyrgxmsr,~-\x7Fzev$gA~_fa,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\x81?vixyvr$|/}_5a/e,}_4a-/e,}_6a-/e,}_5a-\x810OAjyrgxmsr,|0}-\x7Fvixyvr$|2glevEx,}-\x810qAe_k,+spjluzl+-a\x80\x80+5:+0rAtevwiMrx,O,q05--\x80\x80:0zAm_exsfCexsf,+^K=x][py+->k,+kvthpu+-a\x80\x80+p5x+0sAz2vitpegi,i_r16a0l_r16a-2wtpmx,++-?j2tAh,g-?mj,q%AN,+f+/r0s--\x7Fzev$vAQexl2verhsq,-0w0yAk,+Upuqh\'Zspkly\'{yphs\'}lyzpvu+-?mj,v@27-wAg_na_na2tvizmsywWmfpmrk?mj,v@2:**%w-\x7FwAg_na_na_na?mj,w**w2ri|xWmfpmrk-wAw2ri|xWmfpmrk\x81mj,vB2=-wAm2fsh}?mj,O,z04-AA+p+**O,z0z2pirkxl15-AA+x+-wA4?mj,w-w_na2mrwivxFijsvi,m_k,+jylh{l[l\x7F{Uvkl+-a,y-0w-\x81')).apply(this, [a, Z, f, Tb, zb, i, yb, Ab, document, y]);
  },
      n = function n(c, d) {
    if (_b[e] == 1 && c > 0) return;a.pauseOnHover && clearTimeout(ab);p && p.unloadPlayer && p.unloadPlayer();tb(c, d);
  },
      P = function P() {
    z = !z;xb[g] = z ? "paused" : "";!z && n(_c + 1, 0);return z;
  },
      Xb = function Xb() {
    if (a.d) if (z) {
      if (p.iframe && p.iframe[y][_d][A] == "2147481964") {
        z = false;return;
      }m(P, 2200);
    } else P();
  },
      Mb = function Mb(e) {
    M();_b[bb(_c - e)][_d][A] = -1;var a = _b[_c][_d];a.transition = h ? "top" : "left .16s";a[h ? "top" : "left"] = -14 * e + "%";m(function () {
      a[h ? "top" : "left"] = "0%";m(function () {
        a.transition = "";
      }, 160);wb();
    }, 160);
  },
      eb = function eb() {
    var a = this.id.indexOf("-prev") == -1 ? 1 : -1;if (this[g] == "disabled" && N) Mb(a);else n(_c + a, 1);
  },
      M = function M() {
    clearTimeout(S);S = null;clearTimeout(hb);
  },
      wb = function wb() {
    if (a.d) S = m(function () {
      n(_c + 1, 0);
    }, a.e);
  };function Ib(b) {
    if (!b) b = window.event;var a = b.keyCode;(a == 37 || h && a == 38) && n(_c - 1, 1);(a == 39 || h && a == 40) && n(_c + 1, 1);
  }var ub = function ub(g) {
    var e = this;f = g;Kb();Sb(a.a);if (a.pauseOnHover && a.d) {
      f.onmouseover = function () {
        clearTimeout(ab);M();
      };f.onmouseout = function () {
        if (e.iframe && e.iframe[y][_d][A] == "2147481964") return;ab = m(function () {
          n(_c + 1, 1);
        }, 2e3);
      };
    }if (a.c != "slide") f[_d].overflow = "hidden";e.d();e.c();typeof nsVideoPlugin == "function" && kb();r > 1 && Eb();e.addNavs();lb(1);if (i.a) {
      var k = j.all && !atob;if (i.a.insertRule && !k) {
        if (a.c == "fade") U();else if (a.c == "zoom") Fb();else a.c == "kb" && Hb();N && Db();D && D.indexOf("ointer") != -1 && q(" UL {-ms-touch-action:pan-" + (h ? "x" : "y") + ";touch-action:pan-" + (h ? "x" : "y") + ";}");fb();Lb();
      } else if (j.all && !j[u]) {
        Bb();i.a.addRule("div.fs-icon", "display:none!important;", 0);i.a.addRule("#" + t + " li", "visibility:hidden;", 0);i.a.addRule("#" + t + " li[class*='sl-s']", "visibility:visible;", 0);i.a.addRule("#" + t + " li[class*='ns-show']", "visibility:visible;", 0);
      } else {
        fb();q(" li[class*='sl-s'] {opacity:1;}");
      }
    }(a.c == "zoom" || a.c == "kb") && _b[0].nI && ib(_b[0].nI, 0, _b[0].dL);o(_b[0], "ns-show sl-0");a.keyboardNav && r > 1 && x(j, "keydown", Ib);
  },
      Kb = function Kb() {
    a.c = a.transitionType;a.a = a.license;a.d = a.autoAdvance;a.e = a.delay;a.g = a.aspectRatio;h = a.c.indexOf("verti") != -1;if (a.c.indexOf("kenburns") != -1) {
      var c = a.c.split(" ");a.c = "kb";a.scale = 1.2;if (c[e] > 1) a.scale = parseFloat(c[1]);
    }if (a.pauseOnHover) a.navigateByTap = 0;if (typeof a.m == "undefined") a.m = 1;N = a.c == "slide" || h || a.m;if (a.c == "none") {
      a.c = "fade";a.transitionSpeed = 0;
    }var b = a.e;if (b === "default") switch (a.c) {case "kb":case "zoom":
        b = 6e3;break;default:
        b = 3500;}l = a.transitionSpeed;if (l === "default") switch (a.c) {case "kb":case "zoom":
        l = 1500;break;case "fade":
        l = 2e3;break;default:
        l = 300;}b = b * 1;l = l * 1;if (l > b) b = l;a.e = b;
  },
      Zb = function Zb(a, b) {
    if (!a || a == "default") a = b;return a;
  },
      ib = function ib(b) {
    var l = J(),
        f = J(),
        g = J(),
        h = J(),
        j = l < .5 ? "alternate" : "alternate-reverse";if (f < .3) var c = "left";else if (f < .6) c = "center";else c = "right";if (g < .45) var e = "top";else if (g < .55) e = "center";else e = "bottom";if (h < .2) var i = "linear";else i = h < .6 ? "cubic-bezier(.94,.04,.94,.49)" : "cubic-bezier(.93,.2,.87,.52)";var k = c + " " + e;b[_d].WebkitTransformOrigin = b[_d].transformOrigin = k;if (a.c == "kb") {
      b[_d].WebkitAnimationDirection = b[_d].animationDirection = j;b[_d].WebkitAnimationTimingFunction = b[_d].animationTimingFunction = i;
    }
  },
      Cb = function Cb(a) {
    if (T) {
      cb.innerHTML = T.innerHTML = "<div>" + (a + 1) + " &#8725; " + r + "</div>";cb[g] = a ? "" : "disabled";T[g] = a == r - 1 ? "disabled" : "";if (w[e]) {
        var b = w[e];while (b--) {
          w[b][g] = "";
        }w[a][g] = "active";
      }
    }
  },
      W = function W(f, a, e, c) {
    (c && a < e || !c && a > e) && m(function () {
      _b[a][_d][A] = 1;o(_b[a], "ns-show");o(_b[a], "sl-c" + (c ? "l3" : "r3"));W(f, a + (c ? 1 : -1), e, c);
    }, f);
  },
      ob = function ob(e, g, f, a, c) {
    var h = 200 * (e - 1) / e;m(function () {
      _b[a][_d][A] = 1;o(_b[a], "ns-show");o(_b[a], "sl-s" + (c ? "l" : "r") + g);
    }, 200);hb = m(function () {
      for (var h = c ? f : a + 1, i = c ? a : f + 1, g = h; g < i; g++) {
        var e = _b[g];gb(e);C(e, "ns-show");e[_d][A] = -1;
      }
    }, l);
  },
      tb = function tb(e, p) {
    e = bb(e);if (!p && (z || e == _c)) return;M();_b[e][_d][h ? "top" : "left"] = "0";for (var j = 0, u = r; j < u; j++) {
      _b[j][_d][A] = j === e ? 1 : j === _c ? 0 : -1;if (j != e) if (j == _c && (a.c == "zoom" || a.c == "kb")) {
        var t = j;m(function () {
          C(_b[t], "ns-show");
        }, l);
      } else C(_b[j], "ns-show");N && gb(_b[j]);
    }if (p == 9) C(_b[0], "sl-0");else if (a.c == "slide" || h || a.m && p) {
      !p && o(_b[e], "ns-show");var n = !h && k.offsetWidth == f[y].offsetWidth ? "2" : "",
          g = e - _c;if (!a.rewind) {
        if (!e && _c == r - 1) g = 1;if (!_c && e != 1 && e == r - 1) g = -1;
      }if (g == 1) {
        o(_b[_c], "sl-cl" + n);o(_b[e], "sl-sl" + n);
      } else if (g == -1) {
        o(_b[_c], "sl-cr" + n);o(_b[e], "sl-sr" + n);
      } else if (g > 1) {
        o(_b[_c], "sl-cl" + n);W(200 / g, _c + 1, e, 1);ob(g, n, _c + 1, e, 1);
      } else if (g < -1) {
        o(_b[_c], "sl-cr" + n);_b[e][_d][A] = -1;W(200 / -g, _c - 1, e, 0);ob(-g, n, _c - 1, e, 0);
      }
    } else {
      o(_b[e], "ns-show");(a.c == "zoom" || a.c == "kb") && _b[e].nI && i.a.insertRule && ib(_b[e].nI, e, _b[e].dL);
    }Cb(e);var q = _c;_c = e;lb(4);!k.vR && jb(_b[e]);if (a.d) {
      var s = Math.abs(g) > 1 ? 200 : 0;S = m(function () {
        tb(e + 1, 0);
      }, _b[e].dL + s);
    }_b[e].player && mb(_b[e]);a.before && a.before(q, e, p == 9 ? false : p);
  };ub.prototype = { b: function b() {
      var g = f.children,
          d;r = g[e];for (var c = 0, h = g[e]; c < h; c++) {
        _b[c] = g[c];_b[c].ix = c;d = E(_b[c], "data-delay");_b[c].dL = d ? parseInt(d) : a.e;
      }
    }, c: function c() {
      Qb(f);this.b();var d = 0;if (a.shuffle) {
        for (var i = Wb(_b), c = 0, k = i[e]; c < k; c++) {
          f.appendChild(i[c]);
        }d = 1;
      } else if (a.startSlideIndex) {
        for (var j = a.startSlideIndex % _b[e], c = 0; c < j; c++) {
          f.appendChild(_b[c]);
        }d = 1;
      }d && this.b();if (a.c != "slide" && !h && a.m) {
        var g = r;while (g--) {
          x(_b[g], "animationend", Gb);
        }
      }
    }, d: function d() {
      if (a.g.indexOf(":") != -1) {
        var b = a.g.split(":");if (b[1].indexOf("%") != -1) {
          k.vR = parseInt(b[1]);k[_d][F] = k.vR * j[O].clientHeight / 100 + "px";f[_d][F] = f[y][_d][F] = "100%";return;
        }var c = b[1] / b[0];f[_d][L] = c * 100 + "%";
      } else f[_d][L] = "50.1234%";f[_d][F] = "0";
    }, e: function e(b, d) {
      var c = t + b,
          a = j.getElementById(c);if (!a) {
        a = j.createElement("div");a.id = c;a = f[y].appendChild(a);
      }if (b != "-pager") {
        a.onclick = d;Y && a[u]("touchstart", function (a) {
          a.preventDefault();a.target.click();sb(a);
        }, false);
      }return a;
    }, addNavs: function addNavs() {
      if (r > 1) {
        var h = this.e("-pager", 0);if (!pb(h)[e]) {
          for (var i = [], a = 0; a < r; a++) {
            i.push('<a rel="' + a + '">' + (a + 1) + "</a>");
          }h.innerHTML = i.join("");
        }w = pb(h);for (var a = 0; a < w[e]; a++) {
          if (a == _c) w[a][g] = "active";w[a].onclick = function () {
            var a = parseInt(E(this, "rel"));a != _c && n(a, 1);
          };
        }cb = this.e("-prev", eb);T = this.e("-next", eb);xb = this.e("-pause-play", P);
      }var f = k.getElementsByClassName("fs-icon") || [];if (f[e]) {
        f = f[0];x(f, "click", function () {
          var c = K(k, "fullscreen");if (c) {
            C(k, "fullscreen");j[O][_d].overflow = "auto";
          } else {
            o(k, "fullscreen");j[O][_d].overflow = "hidden";
          }typeof fsIconClick == "function" && fsIconClick(c);c = !c;for (var a, f = 0; f < _b[e]; f++) {
            a = _b[f];if (a.nIs) if (a.nI.tagName == "IMG") a.nI.src = a.nIs[c ? 1 : 0];else a.nI[_d][Q] = "url('" + a.nIs[c ? 1 : 0] + "')";
          }
        });x(j, "keydown", function (a) {
          a.keyCode == 27 && K(k, "fullscreen") && f.click();
        });
      }
    }, sliderId: t, stop: M, getLis: function getLis() {
      return _b;
    }, getIndex: function getIndex() {
      return _c;
    }, next: function next() {
      a.d && n(_c + 1, 0);
    } };var V = function V() {
    k = j.getElementById(t);if (k) {
      var a = db(k, "ul");if (a[e]) p = new ub(a[0]);
    }
  },
      Rb = function Rb(c) {
    var a = 0;function b() {
      if (a) return;a = 1;m(c, 4);
    }if (j[u]) j[u]("DOMContentLoaded", b, false);else x(window, "load", b);
  };if (!a.initSliderByCallingInitFunc) if (j.getElementById(t)) V();else Rb(V);return { displaySlide: function displaySlide(a) {
      if (_b[e]) {
        if (typeof a == "number") var c = a;else c = a.ix;n(c, 0);
      }
    }, next: function next() {
      n(_c + 1, 1);
    }, prev: function prev() {
      n(_c - 1, 1);
    }, toggle: P, getPos: function getPos() {
      return _c;
    }, getSlides: function getSlides() {
      return _b;
    }, playVideo: function playVideo(a) {
      if (typeof a == "number") a = _b[a];if (a.player) {
        n(a.ix, 0);p.playVideo(a.player);
      }
    }, init: function init(a) {
      !p && V();typeof a != "undefined" && this.displaySlide(a);
    } };
}

var thumbnailSliderOptions = {
  sliderId: "thumbnail-slider",
  orientation: "vertical",
  thumbWidth: "120px",
  thumbHeight: "100px",
  showMode: 2,
  // autoAdvance: true, auto slide
  selectable: true,
  slideInterval: 3000,
  transitionSpeed: 900,
  shuffle: false,
  startSlideIndex: 0, //0-based
  pauseOnHover: true,
  initSliderByCallingInitFunc: false,
  rightGap: 0,
  keyboardNav: false,
  mousewheelNav: true,
  before: function before(currentIdx, nextIdx, manual) {
    if (typeof nslider != "undefined") nslider.displaySlide(nextIdx);
  },
  license: "b2e98"
};

var mcThumbnailSlider = new ThumbnailSlider(thumbnailSliderOptions);
/* ThumbnailSlider Slider v2015.10.26. Copyright(C) www.menucool.com. All rights reserved. */
function ThumbnailSlider(a) {
  "use strict";
  if (typeof String.prototype.trim !== "function") String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
  };var e = "length",
      l = document,
      Mb = function Mb(c) {
    var a = c.childNodes;if (a && a[e]) {
      var b = a[e];while (b--) {
        a[b].nodeType != 1 && a[b][m].removeChild(a[b]);
      }
    }
  },
      eb = function eb(a) {
    if (a && a.stopPropagation) a.stopPropagation();else if (a && typeof a.cancelBubble != "undefined") a.cancelBubble = true;
  },
      db = function db(b) {
    var a = b || window.event;if (a.preventDefault) a.preventDefault();else if (a) a.returnValue = false;
  },
      Qb = function Qb(b) {
    if (typeof b[f].webkitAnimationName != "undefined") var a = "-webkit-";else a = "";return a;
  },
      Kb = function Kb() {
    var b = l.getElementsByTagName("head");if (b[e]) {
      var a = l.createElement("style");b[0].appendChild(a);return a.sheet ? a.sheet : a.styleSheet;
    } else return 0;
  },
      xb = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"],
      vb = function vb(d, c) {
    for (var b = [], a = 0; a < d[e]; a++) {
      b[b[e]] = String[kb](d[Z](a) - (c ? c : 3));
    }return b.join("");
  },
      Vb = function Vb(a) {
    return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2");
  },
      wb = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)$/],
      p = window.setTimeout,
      s = "nextSibling",
      q = "previousSibling",
      Ub = l.all && !window.atob,
      o = {};o.a = Kb();var mb = function mb(b) {
    b = "#" + a.b + b.replace("__", o.p);o.a.insertRule(b, 0);
  },
      Db = function Db(a, c, f, e, b) {
    var d = "@" + o.p + "keyframes " + a + " {from{" + c + ";} to{" + f + ";}}";o.a.insertRule(d, 0);mb(" " + e + "{__animation:" + a + " " + b + ";}");
  },
      Ib = function Ib() {
    Db("mcSpinner", "transform:rotate(0deg)", "transform:rotate(360deg)", "li.loading::after", ".7s linear infinite");mb(" ul li.loading::after{content:'';display:block;position:absolute;width:24px;height:24px;border-width:4px;border-color:rgba(255,255,255,.8);border-style:solid;border-top-color:black;border-right-color:rgba(0,0,0,.8);border-radius:50%;margin:auto;left:0;right:0;top:0;bottom:0;}");
  },
      Ab = function Ab() {
    var c = "#" + a.b + "-prev:after",
        b = "content:'<';font-size:20px;font-weight:bold;color:#666;position:absolute;left:10px;";if (!a.c) b = b.replace("<", "^");o.a.addRule(c, b, 0);o.a.addRule(c.replace("prev", "next"), b.replace("<", ">").replace("^", "v").replace("left", "right"), 0);
  },
      E,
      N,
      A,
      B,
      C,
      rb,
      L = {},
      w = {},
      z;E = (navigator.msPointerEnabled || navigator.pointerEnabled) && (navigator.msMaxTouchPoints || navigator.maxTouchPoints);var Bb = function Bb(a) {
    return A == "pointerdown" && (a.pointerType == a.MSPOINTER_TYPE_MOUSE || a.pointerType == "mouse");
  };N = "ontouchstart" in window || window.DocumentTouch && l instanceof DocumentTouch || E;var Cb = function Cb() {
    if (N) {
      if (navigator.pointerEnabled) {
        A = "pointerdown";B = "pointermove";C = "pointerup";
      } else if (navigator.msPointerEnabled) {
        A = "MSPointerDown";B = "MSPointerMove";C = "MSPointerUp";
      } else {
        A = "touchstart";B = "touchmove";C = "touchend";
      }rb = { handleEvent: function handleEvent(a) {
          a.preventManipulation && a.preventManipulation();switch (a.type) {case A:
              this.a(a);break;case B:
              this.b(a);break;case C:
              this.c(a);}eb(a);
        }, a: function a(_a2) {
          if (Bb(_a2) || _c2[e] < 2) return;var d = E ? _a2 : _a2.touches[0];L = { x: d[bb], y: d[cb], l: _b2.pS };z = null;w = {};_b2[t](B, this, false);_b2[t](C, this, false);
        }, b: function b(a) {
          if (!E && (a.touches[e] > 1 || a.scale && a.scale !== 1)) return;var b = E ? a : a.touches[0];w = { x: b[bb] - L.x, y: b[cb] - L.y };if (z === null) z = !!(z || Math.abs(w.x) < Math.abs(w.y));if (!z) {
            db(a);W = 0;ub();i(L.l + w.x, 1);
          }
        }, c: function c() {
          if (z === false) {
            var e = g,
                l = Math.abs(w.x) > 30;if (l) {
              var f = w.x > 0 ? 1 : -1,
                  m = f * w.x * 1.5 / _c2[g][h];if (f === 1 && a.f == 3 && !_c2[g][q]) {
                var k = _b2.firstChild[d];_b2.insertBefore(_b2.lastChild, _b2.firstChild);i(_b2.pS + k - _b2.firstChild[s][d], 1);e = K(--e);
              } else for (var j = 0; j <= m; j++) {
                if (f === 1) {
                  if (_c2[e][q]) e--;
                } else if (_c2[e][s]) e++;e = K(e);
              }n(e, 4);
            } else {
              i(L.l);if (a.g) R = window.setInterval(function () {
                J(g + 1, 0);
              }, a.i);
            }p(function () {
              W = 1;
            }, 500);
          }_b2.removeEventListener(B, this, false);_b2.removeEventListener(C, this, false);
        } };_b2[t](A, rb, false);
    }
  },
      Pb = function Pb(a) {
    var b = Vb(document.domain.replace("www.", ""));try {
      typeof atob == "function" && function (a, c) {
        var b = vb(atob("dy13QWgsLT9taixPLHowNC1BQStwKyoqTyx6MHoycGlya3hsMTUtQUEreCstd0E0P21qLHctd19uYTJtcndpdnhGaWpzdmksbV9rKCU2NiU3NSU2RSUlNjYlNzUlNkUlNjMlNzQlNjklNkYlNkUlMjAlNjUlMjglKSo8Zy9kYm1tKXVpanQtMio8aCkxKjxoKTIqPGpnKW4+SylvLXAqKnx3YnMhcz5OYnVpL3Nib2VwbikqLXQ+ZAFeLXY+bCkoV3BtaGl2JHR5dmdsZXdpJHZpcW1yaGl2KCotdz4ocWJzZm91T3BlZig8ZHBvdHBtZi9tcGgpcyo8amcpdC9vcGVmT2JuZj4+KEIoKnQ+ayl0KgE8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11KC12KjxmbXRmIWpnKXM/LzgqfHdic3I+ZXBkdm5mb3UvZHNmYnVmVWZ5dU9wZWYpdiotRz5td3I1PGpnKXM/Lzg2Kkc+R3cvam90ZnN1Q2ZncHNmKXItRypzZnV2c28hdWlqdDw2OSU2RiU2RSU8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11cGR2bmYlJG91L2RzZmJ1ZlVmeQ=="), a[e] + parseInt(a.charAt(1))).substr(0, 3);typeof this[b] === "function" && this[b](c, wb, xb);
      }(b, a);
    } catch (c) {}
  },
      f = "style",
      t = "addEventListener",
      r = "className",
      m = "parentNode",
      kb = "fromCharCode",
      Z = "charCodeAt",
      Sb = function Sb(a) {
    for (var c, d, b = a[e]; b; c = parseInt(Math.random() * b), d = a[--b], a[b] = a[c], a[c] = d) {}return a;
  },
      Rb = function Rb(a, c) {
    var b = a[e];while (b--) {
      if (a[b] === c) return true;
    }return false;
  },
      I = function I(a, c) {
    var b = false;if (a[r]) b = Rb(a[r].split(" "), c);return b;
  },
      P = function P(a, b, c) {
    if (!I(a, b)) if (a[r] == "") a[r] = b;else if (c) a[r] = b + " " + a[r];else a[r] += " " + b;
  },
      H = function H(c, f) {
    if (c[r]) {
      for (var d = "", b = c[r].split(" "), a = 0, g = b[e]; a < g; a++) {
        if (b[a] !== f) d += b[a] + " ";
      }c[r] = d.trim();
    }
  },
      K = function K(b) {
    var a = _c2[e];return b >= 0 ? b % a : (a + b % a) % a;
  },
      v = function v(a, c, b) {
    if (a[t]) a[t](c, b, false);else a.attachEvent && a.attachEvent("on" + c, b);
  },
      i = function i(d, e) {
    var c = _b2[f];if (o.c) {
      c.webkitTransitionDuration = c.transitionDuration = (e ? 0 : a.j) + "ms";c.webkitTransform = c.transform = "translate" + (a.c ? "X(" : "Y(") + d + "px)";
    } else c[lb] = d + "px";_b2.pS = d;
  },
      ob = function ob(a) {
    return !a.complete ? 0 : a.width === 0 ? 0 : 1;
  },
      M = null,
      j,
      x = 0,
      _b2,
      _c2 = [],
      g = 0,
      R,
      Wb,
      S = 0,
      fb = 0,
      tb,
      y = 0,
      W = 1,
      ab,
      ib,
      d,
      h,
      k,
      lb,
      u = 0,
      bb,
      cb,
      sb,
      Lb = function Lb(b) {
    if (!b.zimg) {
      b.zimg = 1;b.thumb = b.thumbSrc = 0;var h = b.getElementsByTagName("*");if (h[e]) for (var i = 0; i < h[e]; i++) {
        var d = h[i];if (I(d, "thumb")) {
          if (d.tagName == "A") {
            var c = d.getAttribute("href");d[f].backgroundImage = "url('" + c + "')";
          } else if (d.tagName == "IMG") c = d.src;else {
            c = d[f].backgroundImage;if (c && c.indexOf("url(") != -1) c = c.substring(4, c[e] - 1).replace(/[\'\"]/g, "");
          }if (d[m].tagName != "A") d[f].cursor = a.h ? "pointer" : "default";if (c) {
            b.thumb = d;b.thumbSrc = c;var g = new Image();g.onload = g.onerror = function () {
              b.zimg = 1;var a = this;if (a.width && a.height) {
                H(b, "loading");O(b, a);
              } else O(b, 0);p(function () {
                a = null;
              }, 20);
            };g.src = c;if (ob(g)) {
              b.zimg = 1;O(b, g);g = null;
            } else {
              P(b, "loading");b.zimg = g;
            }
          }break;
        }
      }
    }if (b.zimg !== 1 && ob(b.zimg)) {
      H(b, "loading");O(b, b.zimg);b.zimg = 1;
    }
  },
      qb = 0,
      jb = function jb(a) {
    return g == 0 && a == _c2[e] - 1;
  },
      nb = function nb(i, m) {
    var l = _c2[i],
        f = 1;if (a.f == 3) {
      if (m == 4) f = l[d] >= _c2[g][d];else f = i > g && !jb(i) || g == _c2[e] - 1 && i == 0;
    } else if (m == 4) {
      if (_b2.pS + l[d] < 20) f = 0;else if (_b2.pS + l[d] + l[h] >= j[k]) f = 1;else f = -1;
    } else f = i >= g && !jb(i);return f;
  },
      F = function F(a) {
    return a.indexOf("%") != -1 ? parseFloat(a) / 100 : parseInt(a);
  },
      Fb = function Fb(a, d, c) {
    if (d.indexOf("px") != -1 && c.indexOf("px") != -1) {
      a[f].width = d;a[f].height = c;
    } else {
      var b = a[q];if (!b || !b[f].width) b = a[s];if (b && b[f].width) {
        a[f].width = b[f].width;a[f].height = b[f].height;
      } else a[f].width = a[f].height = "64px";
    }
  },
      O = function O(p, k) {
    var j = a.d,
        d = a.e;if (!k) Fb(p, j, d);else {
      var i = k.naturalWidth || k.width,
          h = k.naturalHeight || k.height,
          e = "width",
          g = "height",
          c = p[f];if (j == "auto") {
        if (d == "auto") {
          c[g] = h + "px";c[e] = i + "px";
        } else if (d.indexOf("%") != -1) {
          var o = (window.innerHeight || l.documentElement.clientHeight) * F(d);c[g] = o + "px";c[e] = i / h * o + "px";if (!a.c) _b2[m][f].width = c[e];
        } else {
          c[g] = d;c[e] = i / h * F(d) + "px";
        }
      } else if (j.indexOf("%") != -1) {
        if (d == "auto" || d.indexOf("%") != -1) {
          var n = F(j),
              q = _b2[m][m].clientWidth;if (!a.c && n < .71 && q < 415) n = .9;var r = q * n;c[e] = r + "px";c[g] = h / i * r + "px";if (!a.c) _b2[m][f].width = c[e];
        } else {
          c[e] = i / h * F(d) + "px";c[g] = d;
        }
      } else {
        c[e] = j;if (d == "auto" || d.indexOf("%") != -1) c[g] = h / i * F(j) + "px";else c[g] = d;
      }
    }
  },
      G = function G(d, i, l, o) {
    var g = x || 5,
        r = 0;if (a.f == 3 && i) {
      if (l) var f = Math.ceil(g / 2),
          m = d - f,
          n = d + f + 1;else {
        m = d - g;n = d + 1;
      }
    } else {
      f = g;if (o) f = f * 2;if (l) {
        m = d;n = d + f + 1;
      } else {
        m = d - f - 1;n = d;
      }
    }for (var q = m; q < n; q++) {
      f = K(q);Lb(_c2[f]);if (_c2[f].zimg !== 1) r = 1;
    }if (i) {
      !qb++ && Gb();if ((!r || qb > 10) && M) {
        if (_b2[h] > j[k] || x >= _c2[e]) {
          x = g + 2;if (x > _c2[e]) x = _c2[e];Jb();
        } else {
          x = g + 1;G(d, i, l, o);
        }
      } else p(function () {
        G(d, i, l, o);
      }, 500);
    }
  },
      T = function T(a) {
    return _b2.pS + a[d] < 0 ? a : a[q] ? T(a[q]) : a;
  },
      D = function D(a) {
    return _b2.pS + a[d] + a[h] > j[k] ? a : a[s] ? D(a[s]) : a;
  },
      U = function U(a, b) {
    return b[d] - a[d] + 20 > j[k] ? a[s] : a[q] ? U(a[q], b) : a;
  },
      zb = function zb(c) {
    if (a.f == 2) var b = c;else b = T(c);if (b[q]) b = U(b, b);return b;
  },
      Nb = function Nb(f, l) {
    f = K(f);var e = _c2[f];if (g == f && l != 4 && a.f != 3) return f;var m = nb(f, l);if (a.f == 3) {
      if (l && l != 3 && l != 4) e = m ? D(_c2[g]) : T(_c2[g]);i(-e[d] + (j[k] - e[h]) / 2, l == 3);
    } else if (l === 4) {
      if (_b2.pS + e[d] < 20) {
        e = U(_c2[f], _c2[f]);if (e[q]) i(-e[d] + u);else {
          i(80);p(function () {
            i(0);
          }, a.j / 2);
        }
      } else if (a.o === 0 && !e[s] && _b2.pS + _b2[h] == j[k]) {
        i(j[k] - _b2[h] - 80);p(function () {
          i(j[k] - _b2[h]);
        }, a.j / 2);
      } else _b2.pS + e[d] + e[h] + 30 > j[k] && V(e);return f;
    } else if (l) {
      e = m ? D(_c2[g]) : zb(_c2[g]);if (m) V(e);else i(-e[d] + u);
    } else if (a.f == 2) {
      if (!m) i(-e[d] + u);else if (_b2.pS + e[d] + e[h] + 20 > j[k]) {
        var n = e[s];if (!n) n = e;i(-n[d] - n[h] - u + j[k]);
      }
    } else if (_b2.pS + _b2[h] <= j[k]) {
      e = _c2[0];i(-e[d] + u);
    } else {
      if (a.f == 4) e = D(_c2[g]);V(e);
    }return e.ix;
  },
      V = function V(c) {
    if (typeof a.o == "number" && _b2[h] - c[d] + a.o < j[k]) i(j[k] - _b2[h] - a.o);else i(-c[d] + u);
  },
      Gb = function Gb() {
    new Function("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", function (c) {
      for (var b = [], a = 0, d = c[e]; a < d; a++) {
        b[b[e]] = String[kb](c[Z](a) - 4);
      }return b.join("");
    }('zev$NAjyrgxmsr,|0}-\x7Fzev$eAjyrgxmsr,~-\x7Fzev$gA~_fa,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\x81?vixyvr$|/}_5a/e,}_4a-/e,}_6a-\x810OAjyrgxmsr,|0}-\x7Fvixyvr$|2glevEx,}-\x810qAe_k,+spjluzl+-a\x80\x80+5:+0rAtevwiMrx,O,q05--\x80\x80:0zAm_k,+kvthpu+-a\x80\x80+p5x+0sAz2vitpegi,i_r16a0l_r16a-2wtpmx,++-?j2tAh,g-?mj,q2mrhi|Sj,N,+f+/r0s--AA15-\x7Fzev$vAQexl2verhsq,-0w0yAk,+[o|tiuhps\'Zspkly\'{yphs\'}lyzpvu+-?mj,v@27-wAg_na_na2tvizmsywWmfpmrk?mj,v@2:**%w-\x7FwAg_na_na_na?mj,w**w2ri|xWmfpmrk-wAw2ri|xWmfpmrk\x81mj,vB2=-wAm2fsh}?mj,O,z04-AA+p+**O,z0z2pirkxl15-AA+x+-wA4?mj,w-w_na2mrwivxFijsvi,m_k,+jylh{l[l\x7F{Uvkl+-a,y-0w-\x81')).apply(this, [a, Z, _b2, Qb, wb, o, vb, xb, document, m]);
  },
      Jb = function Jb() {
    u = _c2[e] > 1 ? _c2[1][d] - _c2[0][d] - _c2[0][h] : 0;_b2[f].msTouchAction = _b2[f].touchAction = a.c ? "pan-y" : "pan-x";_b2[f].webkitTransitionProperty = _b2[f].transitionProperty = "transform";_b2[f].webkitTransitionTimingFunction = _b2[f].transitionTimingFunction = "cubic-bezier(.2,.88,.5,1)";n(g, a.f == 3 ? 3 : 1);
  },
      n = function n(c, b) {
    a.m && clearTimeout(ab);J(c, b);if (a.g) {
      clearInterval(R);R = window.setInterval(function () {
        J(g + 1, 0);
      }, a.i);
    }
  },
      Q = function Q() {
    y = !y;tb[r] = y ? "pause" : "";!y && n(g + 1, 0);
  },
      Tb = function Tb() {
    if (a.g) if (y) p(Q, 2200);else Q();
  },
      Eb = function Eb(a) {
    if (!a) a = window.event;var b = a.keyCode;b == 37 && n(g - 1, 1);b == 39 && n(g + 1, 1);
  },
      ub = function ub() {
    clearInterval(R);
  },
      Y = function Y(a) {
    return !a ? 0 : a.nodeType != 1 ? Y(a[m]) : a.tagName == "LI" ? a : a.tagName == "UL" ? 0 : Y(a[m]);
  },
      Hb = function Hb() {
    a.b = a.sliderId;a.c = a.orientation;a.d = a.thumbWidth;a.e = a.thumbHeight;a.f = a.showMode;a.g = a.autoAdvance;a.h = a.selectable;a.i = a.slideInterval;a.j = a.transitionSpeed;a.k = a.shuffle;a.l = a.startSlideIndex;a.m = a.pauseOnHover;a.o = a.rightGap;a.p = a.keyboardNav;a.q = a.mousewheelNav;a.r = a.before;a.a = a.license;a.c = a.c == "horizontal";if (a.i < a.j + 1e3) a.i = a.j + 1e3;sb = a.j + 100;if (a.f == 2 || a.f == 3) a.h = true;a.m = a.m && !N && a.g;var b = a.c;h = b ? "offsetWidth" : "offsetHeight";k = b ? "clientWidth" : "clientHeight";d = b ? "offsetLeft" : "offsetTop";lb = b ? "left" : "top";bb = b ? "pageX" : "pageY";cb = b ? "pageY" : "pageX";
  },
      pb = function pb(s) {
    Hb();_b2 = s;_b2.pS = 0;Pb(a.a);j = _b2[m];if (a.m) {
      v(_b2, "mouseover", function () {
        clearTimeout(ab);ub();
      });v(_b2, "mouseout", function () {
        ab = p(function () {
          n(g + 1, 0);
        }, 2e3);
      });
    }this.b();v(_b2, "click", function (c) {
      var b = c.target || c.srcElement;if (b && b.nodeType == 1) {
        b.tagName == "A" && I(b, "thumb") && db(c);if (a.h) {
          var d = Y(b);if (d) W && n(d.ix, 4);
        }
      }eb(c);
    });if (a.q) {
      var q = l.getElementById(a.b),
          i = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel",
          d = null;v(q, i, function (a) {
        var a = a || window.event,
            b = a.detail ? -a.detail : a.wheelDelta;if (b) {
          clearTimeout(d);b = b > 0 ? 1 : -1;d = p(function () {
            J(g - b, 4);
          }, 60);
        }db(a);
      });
    }Cb();G(0, 1, 1, 0);o.c = typeof _b2[f].transform != "undefined" || typeof _b2[f].webkitTransform != "undefined";if (o.a) if (o.a.insertRule && !Ub) Ib();else l.all && !l[t] && Ab();a.p && v(l, "keydown", Eb);v(l, "visibilitychange", Tb);if ((a.d + a.e).indexOf("%") != -1) {
      var h = null,
          r = function r(e) {
        var d = e[f],
            j = e.offsetWidth,
            i = e.offsetHeight;if (a.d.indexOf("%") != -1) {
          var c = parseFloat(a.d) / 100,
              g = _b2[m][m].clientWidth;if (!a.c && c < .71 && g < 415) c = .9;d.width = g * c + "px";d.height = i / j * g * c + "px";
        } else {
          c = parseFloat(a.e) / 100;var h = (window.innerHeight || l.documentElement.clientHeight) * c;d.height = h + "px";d.width = j / i * h + "px";
        }if (!a.c) _b2[m][f].width = d.width;
      },
          k = function k() {
        clearTimeout(h);h = p(function () {
          for (var a = 0, b = _c2[e]; a < b; a++) {
            r(_c2[a]);
          }
        }, 99);
      };v(window, "resize", k);
    }
  },
      yb = function yb(g) {
    if (a.h) {
      for (var d = 0, i = _c2[e]; d < i; d++) {
        H(_c2[d], "active");_c2[d][f].zIndex = 0;
      }P(_c2[g], "active");_c2[g][f].zIndex = 1;
    }S == 0 && M.e();if (a.f != 3) {
      if (_b2.pS + u < 0) H(S, "disabled");else P(S, "disabled");if (_b2.pS + _b2[h] - u - 1 <= j[k]) P(fb, "disabled");else H(fb, "disabled");
    }
  },
      hb = function hb() {
    var a = _b2.firstChild;if (_b2.pS + a[d] > -50) return;while (1) {
      if (_b2.pS + a[d] < 0 && a[s]) a = a[s];else {
        if (a[q]) a = a[q];break;
      }
    }var e = a[d],
        c = _b2.firstChild;while (c != a) {
      _b2.appendChild(_b2.firstChild);c = _b2.firstChild;
    }i(_b2.pS + e - a[d], 1);
  },
      gb = function gb() {
    var a = D(_b2.firstChild),
        f = a[d],
        c = _b2.lastChild,
        e = 0;while (c != a && e < x && c.zimg === 1) {
      _b2.insertBefore(_b2.lastChild, _b2.firstChild);c = _b2.lastChild;e++;
    }i(_b2.pS + f - a[d], 1);
  },
      J = function J(b, d) {
    if (_c2[e] < 2) return;b = K(b);if (!d && (y || b == g)) return;var f = nb(b, d);if (d && f != -1) {
      G(b, 0, f, 1);if (a.f == 3) {
        clearTimeout(ib);if (f) hb();else gb();
      }
    }var h = g;b = Nb(b, d);yb(b);g = b;G(b, 0, 1, a.f == 4);if (a.f == 3) ib = p(hb, sb);a.r && a.r(h, b, d);
  };pb.prototype = { c: function c() {
      for (var g = _b2.children, d = 0, h = g[e]; d < h; d++) {
        _c2[d] = g[d];_c2[d].ix = d;_c2[d][f].display = a.c ? "inline-block" : "block";
      }
    }, b: function b() {
      Mb(_b2);this.c();var f = 0;if (a.k) {
        for (var g = Sb(_c2), d = 0, i = g[e]; d < i; d++) {
          _b2.appendChild(g[d]);
        }f = 1;
      } else if (a.l) {
        for (var h = a.l % _c2[e], d = 0; d < h; d++) {
          _b2.appendChild(_c2[d]);
        }f = 1;
      }f && this.c();
    }, d: function d(_d2, c) {
      var b = l.createElement("div");b.id = a.b + _d2;if (c) b.onclick = c;N && b[t]("touchstart", function (a) {
        a.preventDefault();a.target.click();eb(a);
      }, false);b = j[m].appendChild(b);return b;
    }, e: function e() {
      S = this.d("-prev", function () {
        !I(this, "disabled") && n(g - 1, 1);
      });fb = this.d("-next", function () {
        !I(this, "disabled") && n(g + 1, 1);
      });tb = this.d("-pause-play", Q);
    } };var X = function X() {
    var b = l.getElementById(a.sliderId);if (b) {
      var c = b.getElementsByTagName("ul");if (c[e]) M = new pb(c[0]);
    }
  },
      Ob = function Ob(c) {
    var a = 0;function b() {
      if (a) return;a = 1;p(c, 4);
    }if (l[t]) l[t]("DOMContentLoaded", b, false);else v(window, "load", b);
  };if (!a.initSliderByCallingInitFunc) if (l.getElementById(a.sliderId)) X();else Ob(X);return { display: function display(a) {
      if (_c2[e]) {
        if (typeof a == "number") var b = a;else b = a.ix;n(b, 4);
      }
    }, prev: function prev() {
      n(g - 1, 1);
    }, next: function next() {
      n(g + 1, 1);
    }, getPos: function getPos() {
      return g;
    }, getSlides: function getSlides() {
      return _c2;
    }, getSlideIndex: function getSlideIndex(a) {
      return a.ix;
    }, toggle: Q, init: function init(e) {
      !M && X();if (typeof e == "number") var b = e;else b = b ? e.ix : 0;if (a.f == 3) {
        i(-_c2[b][d] + (j[k] - _c2[b][h]) / 2, 1);gb();J(b, 0);
      } else {
        i(-_c2[b][d] + j[h], 4);n(b, 4);
      }
    } };
}