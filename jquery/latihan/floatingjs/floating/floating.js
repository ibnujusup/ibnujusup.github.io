! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.floating = t() }(this, function() { "use strict";

    function e() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.content,
            n = void 0 === t ? "👌" : t,
            o = e.number,
            i = void 0 === o ? 1 : o,
            a = e.duration,
            d = void 0 === a ? 10 : a,
            m = e.repeat,
            r = void 0 === m ? "infinite" : m,
            l = e.direction,
            f = void 0 === l ? "normal" : l,
            s = e.size,
            c = void 0 === s ? 2 : s,
            v = document.createElement("style");
        v.id = "floating-style", document.getElementById("floating-style") || document.head.appendChild(v), document.getElementById("floating-style").innerHTML = ".float-container {width:100vw;height:100vh;overflow:hidden;position:absolute;top:0;left:0;pointer-events:none;}.float-container div * {width:1em;height:1em;}@keyframes float{0%{bottom:-100%;}100%{bottom:100%;}}@keyframes move{0%,100%{left:-3em;}50%{left:3em;}}";
        var u = document.createElement("div");
        u.className = "float-container";
        for (var h = function(e) {
                var t = document.createElement("div");
                t.innerHTML = n;
                var o = c;
                c instanceof Array && (o = Math.floor(Math.random() * (c[1] - c[0] + 1)) + c[0]), t.style.cssText = "position:absolute;font-size:" + o + "em;left:0;bottom:-100%;animation:float " + d + "s ease-in " + e * Math.random() + "s " + r + " " + f + ",move 3s ease-in-out " + e * Math.random() + "s infinite;transform:translateX(" + 100 * Math.random() + "vw);", t.addEventListener("animationend", function(e) { "float" === e.animationName && u.removeChild(t) }), u.appendChild(t) }, p = 0; p < i; p++) h(p);
        document.body.appendChild(u) }
    return e });
