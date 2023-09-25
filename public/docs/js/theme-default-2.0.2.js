!(function () {
  if ('ontouchstart' in window) {
    let e;
    let t;
    let n;
    let r;
    let i;
    let o;
    const s = {};
    (e = function (e, t) {
      return Math.abs(e[0] - t[0]) > 5 || Math.abs(e[1] - t[1]) > 5;
    }),
      (t = function (e) {
        (this.startXY = [e.touches[0].clientX, e.touches[0].clientY]),
          (this.threshold = !1);
      }),
      (n = function (t) {
        return this.threshold
          ? !1
          : void (this.threshold = e(this.startXY, [
              t.touches[0].clientX,
              t.touches[0].clientY,
            ]));
      }),
      (r = function (t) {
        if (
          !this.threshold &&
          !e(this.startXY, [
            t.changedTouches[0].clientX,
            t.changedTouches[0].clientY,
          ])
        ) {
          const n = t.changedTouches[0];
          const r = document.createEvent('MouseEvents');
          r.initMouseEvent(
            'click',
            !0,
            !0,
            window,
            0,
            n.screenX,
            n.screenY,
            n.clientX,
            n.clientY,
            !1,
            !1,
            !1,
            !1,
            0,
            null,
          ),
            (r.simulated = !0),
            t.target.dispatchEvent(r);
        }
      }),
      (i = function (e) {
        const t = Date.now();
        const n = t - s.time;
        const r = e.clientX;
        const i = e.clientY;
        const a = [Math.abs(s.x - r), Math.abs(s.y - i)];
        const c = o(e.target, 'A') || e.target;
        const l = c.nodeName;
        const u = l === 'A';
        const d =
          window.navigator.standalone && u && e.target.getAttribute('href');
        return (
          (s.time = t),
          (s.x = r),
          (s.y = i),
          ((!e.simulated &&
            (n < 500 || (n < 1500 && a[0] < 50 && a[1] < 50))) ||
            d) &&
          (e.preventDefault(), e.stopPropagation(), !d)
            ? !1
            : (d && (window.location = c.getAttribute('href')),
              void (
                c &&
                c.classList &&
                (c.classList.add('energize-focus'),
                window.setTimeout(() => {
                  c.classList.remove('energize-focus');
                }, 150))
              ))
        );
      }),
      (o = function (e, t) {
        for (let n = e; n !== document.body; ) {
          if (!n || n.nodeName === t) return n;
          n = n.parentNode;
        }
        return null;
      }),
      document.addEventListener('touchstart', t, !1),
      document.addEventListener('touchmove', n, !1),
      document.addEventListener('touchend', r, !1),
      document.addEventListener('click', i, !0);
  }
})(),
  !(function (e, t) {
    typeof module === 'object' && typeof module.exports === 'object'
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error('jQuery requires a window with a document');
              return t(e);
            })
      : t(e);
  })(typeof window !== 'undefined' ? window : this, (e, t) => {
    function n(e) {
      const t = e.length;
      const n = G.type(e);
      return n === 'function' || G.isWindow(e)
        ? !1
        : e.nodeType === 1 && t
        ? !0
        : n === 'array' ||
          t === 0 ||
          (typeof t === 'number' && t > 0 && t - 1 in e);
    }
    function r(e, t, n) {
      if (G.isFunction(t)) return G.grep(e, (e, r) => !!t.call(e, r, e) !== n);
      if (t.nodeType) return G.grep(e, (e) => (e === t) !== n);
      if (typeof t === 'string') {
        if (ae.test(t)) return G.filter(t, e, n);
        t = G.filter(t, e);
      }
      return G.grep(e, (e) => Q.call(t, e) >= 0 !== n);
    }
    function i(e, t) {
      for (; (e = e[t]) && e.nodeType !== 1; );
      return e;
    }
    function o(e) {
      const t = (he[e] = {});
      return (
        G.each(e.match(pe) || [], (e, n) => {
          t[n] = !0;
        }),
        t
      );
    }
    function s() {
      Y.removeEventListener('DOMContentLoaded', s, !1),
        e.removeEventListener('load', s, !1),
        G.ready();
    }
    function a() {
      Object.defineProperty((this.cache = {}), 0, {
        get: function () {
          return {};
        },
      }),
        (this.expando = G.expando + a.uid++);
    }
    function c(e, t, n) {
      let r;
      if (void 0 === n && e.nodeType === 1)
        if (
          ((r = `data-${t.replace(we, '-$1').toLowerCase()}`),
          (n = e.getAttribute(r)),
          typeof n === 'string')
        ) {
          try {
            n =
              n === 'true'
                ? !0
                : n === 'false'
                ? !1
                : n === 'null'
                ? null
                : `${+n}` === n
                ? +n
                : be.test(n)
                ? G.parseJSON(n)
                : n;
          } catch (i) {}
          ye.set(e, t, n);
        } else n = void 0;
      return n;
    }
    function l() {
      return !0;
    }
    function u() {
      return !1;
    }
    function d() {
      try {
        return Y.activeElement;
      } catch (e) {}
    }
    function f(e, t) {
      return G.nodeName(e, 'table') &&
        G.nodeName(t.nodeType !== 11 ? t : t.firstChild, 'tr')
        ? e.getElementsByTagName('tbody')[0] ||
            e.appendChild(e.ownerDocument.createElement('tbody'))
        : e;
    }
    function p(e) {
      return (e.type = `${e.getAttribute('type') !== null}/${e.type}`), e;
    }
    function h(e) {
      const t = Re.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute('type'), e;
    }
    function g(e, t) {
      for (let n = 0, r = e.length; r > n; n++)
        ve.set(e[n], 'globalEval', !t || ve.get(t[n], 'globalEval'));
    }
    function m(e, t) {
      let n;
      let r;
      let i;
      let o;
      let s;
      let a;
      let c;
      let l;
      if (t.nodeType === 1) {
        if (
          ve.hasData(e) &&
          ((o = ve.access(e)), (s = ve.set(t, o)), (l = o.events))
        ) {
          delete s.handle, (s.events = {});
          for (i in l)
            for (n = 0, r = l[i].length; r > n; n++) G.event.add(t, i, l[i][n]);
        }
        ye.hasData(e) &&
          ((a = ye.access(e)), (c = G.extend({}, a)), ye.set(t, c));
      }
    }
    function v(e, t) {
      const n = e.getElementsByTagName
        ? e.getElementsByTagName(t || '*')
        : e.querySelectorAll
        ? e.querySelectorAll(t || '*')
        : [];
      return void 0 === t || (t && G.nodeName(e, t)) ? G.merge([e], n) : n;
    }
    function y(e, t) {
      const n = t.nodeName.toLowerCase();
      n === 'input' && Ce.test(e.type)
        ? (t.checked = e.checked)
        : (n === 'input' || n === 'textarea') &&
          (t.defaultValue = e.defaultValue);
    }
    function b(t, n) {
      let r;
      const i = G(n.createElement(t)).appendTo(n.body);
      const o =
        e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0]))
          ? r.display
          : G.css(i[0], 'display');
      return i.detach(), o;
    }
    function w(e) {
      let t = Y;
      let n = He[e];
      return (
        n ||
          ((n = b(e, t)),
          (n !== 'none' && n) ||
            ((Ie = (
              Ie || G("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement)),
            (t = Ie[0].contentDocument),
            t.write(),
            t.close(),
            (n = b(e, t)),
            Ie.detach()),
          (He[e] = n)),
        n
      );
    }
    function x(e, t, n) {
      let r;
      let i;
      let o;
      let s;
      const a = e.style;
      return (
        (n = n || ze(e)),
        n && (s = n.getPropertyValue(t) || n[t]),
        n &&
          (s !== '' || G.contains(e.ownerDocument, e) || (s = G.style(e, t)),
          Pe.test(s) &&
            Fe.test(t) &&
            ((r = a.width),
            (i = a.minWidth),
            (o = a.maxWidth),
            (a.minWidth = a.maxWidth = a.width = s),
            (s = n.width),
            (a.width = r),
            (a.minWidth = i),
            (a.maxWidth = o))),
        void 0 !== s ? `${s}` : s
      );
    }
    function _(e, t) {
      return {
        get: function () {
          return e()
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
        },
      };
    }
    function k(e, t) {
      if (t in e) return t;
      for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ke.length; i--; )
        if (((t = Ke[i] + n), t in e)) return t;
      return r;
    }
    function C(e, t, n) {
      const r = Ue.exec(t);
      return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t;
    }
    function N(e, t, n, r, i) {
      for (
        var o = n === (r ? 'border' : 'content') ? 4 : t === 'width' ? 1 : 0,
          s = 0;
        o < 4;
        o += 2
      )
        n === 'margin' && (s += G.css(e, n + _e[o], !0, i)),
          r
            ? (n === 'content' && (s -= G.css(e, `padding${_e[o]}`, !0, i)),
              n !== 'margin' && (s -= G.css(e, `border${_e[o]}Width`, !0, i)))
            : ((s += G.css(e, `padding${_e[o]}`, !0, i)),
              n !== 'padding' && (s += G.css(e, `border${_e[o]}Width`, !0, i)));
      return s;
    }
    function E(e, t, n) {
      let r = !0;
      let i = t === 'width' ? e.offsetWidth : e.offsetHeight;
      const o = ze(e);
      const s = G.css(e, 'boxSizing', !1, o) === 'border-box';
      if (i <= 0 || i == null) {
        if (
          ((i = x(e, t, o)),
          (i < 0 || i == null) && (i = e.style[t]),
          Pe.test(i))
        )
          return i;
        (r = s && (Z.boxSizingReliable() || i === e.style[t])),
          (i = parseFloat(i) || 0);
      }
      return `${i + N(e, t, n || (s ? 'border' : 'content'), r, o)}px`;
    }
    function S(e, t) {
      for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)
        (r = e[s]),
          r.style &&
            ((o[s] = ve.get(r, 'olddisplay')),
            (n = r.style.display),
            t
              ? (o[s] || n !== 'none' || (r.style.display = ''),
                r.style.display === '' &&
                  ke(r) &&
                  (o[s] = ve.access(r, 'olddisplay', w(r.nodeName))))
              : ((i = ke(r)),
                (n === 'none' && i) ||
                  ve.set(r, 'olddisplay', i ? n : G.css(r, 'display'))));
      for (s = 0; a > s; s++)
        (r = e[s]),
          r.style &&
            ((t && r.style.display !== 'none' && r.style.display !== '') ||
              (r.style.display = t ? o[s] || '' : 'none'));
      return e;
    }
    function T(e, t, n, r, i) {
      return new T.prototype.init(e, t, n, r, i);
    }
    function A() {
      return (
        setTimeout(() => {
          Ze = void 0;
        }),
        (Ze = G.now())
      );
    }
    function L(e, t) {
      let n;
      let r = 0;
      const i = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        (n = _e[r]), (i[`margin${n}`] = i[`padding${n}`] = e);
      return t && (i.opacity = i.width = e), i;
    }
    function j(e, t, n) {
      for (
        var r, i = (nt[t] || []).concat(nt['*']), o = 0, s = i.length;
        s > o;
        o++
      )
        if ((r = i[o].call(n, t, e))) return r;
    }
    function M(e, t, n) {
      let r;
      let i;
      let o;
      let s;
      let a;
      let c;
      let l;
      let u;
      const d = this;
      const f = {};
      const p = e.style;
      let h = e.nodeType && ke(e);
      let g = ve.get(e, 'fxshow');
      n.queue ||
        ((a = G._queueHooks(e, 'fx')),
        a.unqueued == null &&
          ((a.unqueued = 0),
          (c = a.empty.fire),
          (a.empty.fire = function () {
            a.unqueued || c();
          })),
        a.unqueued++,
        d.always(() => {
          d.always(() => {
            a.unqueued--, G.queue(e, 'fx').length || a.empty.fire();
          });
        })),
        e.nodeType === 1 &&
          ('height' in t || 'width' in t) &&
          ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
          (l = G.css(e, 'display')),
          (u = l === 'none' ? ve.get(e, 'olddisplay') || w(e.nodeName) : l),
          u === 'inline' &&
            G.css(e, 'float') === 'none' &&
            (p.display = 'inline-block')),
        n.overflow &&
          ((p.overflow = 'hidden'),
          d.always(() => {
            (p.overflow = n.overflow[0]),
              (p.overflowX = n.overflow[1]),
              (p.overflowY = n.overflow[2]);
          }));
      for (r in t)
        if (((i = t[r]), Je.exec(i))) {
          if (
            (delete t[r],
            (o = o || i === 'toggle'),
            i === (h ? 'hide' : 'show'))
          ) {
            if (i !== 'show' || !g || void 0 === g[r]) continue;
            h = !0;
          }
          f[r] = (g && g[r]) || G.style(e, r);
        } else l = void 0;
      if (G.isEmptyObject(f))
        (l === 'none' ? w(e.nodeName) : l) === 'inline' && (p.display = l);
      else {
        g ? 'hidden' in g && (h = g.hidden) : (g = ve.access(e, 'fxshow', {})),
          o && (g.hidden = !h),
          h
            ? G(e).show()
            : d.done(() => {
                G(e).hide();
              }),
          d.done(() => {
            let t;
            ve.remove(e, 'fxshow');
            for (t in f) G.style(e, t, f[t]);
          });
        for (r in f)
          (s = j(h ? g[r] : 0, r, d)),
            r in g ||
              ((g[r] = s.start),
              h &&
                ((s.end = s.start),
                (s.start = r === 'width' || r === 'height' ? 1 : 0)));
      }
    }
    function q(e, t) {
      let n;
      let r;
      let i;
      let o;
      let s;
      for (n in e)
        if (
          ((r = G.camelCase(n)),
          (i = t[r]),
          (o = e[n]),
          G.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
          n !== r && ((e[r] = o), delete e[n]),
          (s = G.cssHooks[r]),
          s && 'expand' in s)
        ) {
          (o = s.expand(o)), delete e[r];
          for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
        } else t[r] = i;
    }
    function $(e, t, n) {
      let r;
      let i;
      let o = 0;
      const s = tt.length;
      const a = G.Deferred().always(() => {
        delete c.elem;
      });
      var c = function () {
        if (i) return !1;
        for (
          var t = Ze || A(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = n / l.duration || 0,
            o = 1 - r,
            s = 0,
            c = l.tweens.length;
          c > s;
          s++
        )
          l.tweens[s].run(o);
        return (
          a.notifyWith(e, [l, o, n]),
          o < 1 && c ? n : (a.resolveWith(e, [l]), !1)
        );
      };
      var l = a.promise({
        elem: e,
        props: G.extend({}, t),
        opts: G.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Ze || A(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          const r = G.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing,
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          let n = 0;
          const r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) l.tweens[n].run(1);
          return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this;
        },
      });
      const u = l.props;
      for (q(u, l.opts.specialEasing); s > o; o++)
        if ((r = tt[o].call(l, e, u, l.opts))) return r;
      return (
        G.map(u, j, l),
        G.isFunction(l.opts.start) && l.opts.start.call(e, l),
        G.fx.timer(G.extend(c, { elem: e, anim: l, queue: l.opts.queue })),
        l
          .progress(l.opts.progress)
          .done(l.opts.done, l.opts.complete)
          .fail(l.opts.fail)
          .always(l.opts.always)
      );
    }
    function O(e) {
      return function (t, n) {
        typeof t !== 'string' && ((n = t), (t = '*'));
        let r;
        let i = 0;
        const o = t.toLowerCase().match(pe) || [];
        if (G.isFunction(n))
          for (; (r = o[i++]); )
            r[0] === '+'
              ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
              : (e[r] = e[r] || []).push(n);
      };
    }
    function R(e, t, n, r) {
      function i(a) {
        let c;
        return (
          (o[a] = !0),
          G.each(e[a] || [], (e, a) => {
            const l = a(t, n, r);
            return typeof l !== 'string' || s || o[l]
              ? s
                ? !(c = l)
                : void 0
              : (t.dataTypes.unshift(l), i(l), !1);
          }),
          c
        );
      }
      var o = {};
      var s = e === bt;
      return i(t.dataTypes[0]) || (!o['*'] && i('*'));
    }
    function D(e, t) {
      let n;
      let r;
      const i = G.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && G.extend(!0, e, r), e;
    }
    function B(e, t, n) {
      for (var r, i, o, s, a = e.contents, c = e.dataTypes; c[0] === '*'; )
        c.shift(),
          void 0 === r &&
            (r = e.mimeType || t.getResponseHeader('Content-Type'));
      if (r)
        for (i in a)
          if (a[i] && a[i].test(r)) {
            c.unshift(i);
            break;
          }
      if (c[0] in n) o = c[0];
      else {
        for (i in n) {
          if (!c[0] || e.converters[`${i} ${c[0]}`]) {
            o = i;
            break;
          }
          s || (s = i);
        }
        o = o || s;
      }
      return o ? (o !== c[0] && c.unshift(o), n[o]) : void 0;
    }
    function I(e, t, n, r) {
      let i;
      let o;
      let s;
      let a;
      let c;
      const l = {};
      const u = e.dataTypes.slice();
      if (u[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
      for (o = u.shift(); o; )
        if (
          (e.responseFields[o] && (n[e.responseFields[o]] = t),
          !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (c = o),
          (o = u.shift()))
        )
          if (o === '*') o = c;
          else if (c !== '*' && c !== o) {
            if (((s = l[`${c} ${o}`] || l[`* ${o}`]), !s))
              for (i in l)
                if (
                  ((a = i.split(' ')),
                  a[1] === o && (s = l[`${c} ${a[0]}`] || l[`* ${a[0]}`]))
                ) {
                  s === !0
                    ? (s = l[i])
                    : l[i] !== !0 && ((o = a[0]), u.unshift(a[1]));
                  break;
                }
            if (s !== !0)
              if (s && e.throws) t = s(t);
              else
                try {
                  t = s(t);
                } catch (d) {
                  return {
                    state: 'parsererror',
                    error: s ? d : `No conversion from ${c} to ${o}`,
                  };
                }
          }
      return { state: 'success', data: t };
    }
    function H(e, t, n, r) {
      let i;
      if (G.isArray(t))
        G.each(t, (t, i) => {
          n || Ct.test(e)
            ? r(e, i)
            : H(`${e}[${typeof i === 'object' ? t : ''}]`, i, n, r);
        });
      else if (n || G.type(t) !== 'object') r(e, t);
      else for (i in t) H(`${e}[${i}]`, t[i], n, r);
    }
    function F(e) {
      return G.isWindow(e) ? e : e.nodeType === 9 && e.defaultView;
    }
    const P = [];
    const z = P.slice;
    const W = P.concat;
    const U = P.push;
    var Q = P.indexOf;
    const V = {};
    const X = V.toString;
    const K = V.hasOwnProperty;
    var Z = {};
    var Y = e.document;
    const J = '2.1.3';
    var G = function (e, t) {
      return new G.fn.init(e, t);
    };
    const ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    const te = /^-ms-/;
    const ne = /-([\da-z])/gi;
    const re = function (e, t) {
      return t.toUpperCase();
    };
    (G.fn = G.prototype =
      {
        jquery: J,
        constructor: G,
        selector: '',
        length: 0,
        toArray: function () {
          return z.call(this);
        },
        get: function (e) {
          return e != null
            ? e < 0
              ? this[e + this.length]
              : this[e]
            : z.call(this);
        },
        pushStack: function (e) {
          const t = G.merge(this.constructor(), e);
          return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function (e, t) {
          return G.each(this, e, t);
        },
        map: function (e) {
          return this.pushStack(G.map(this, (t, n) => e.call(t, n, t)));
        },
        slice: function () {
          return this.pushStack(z.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          const t = this.length;
          const n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor(null);
        },
        push: U,
        sort: P.sort,
        splice: P.splice,
      }),
      (G.extend = G.fn.extend =
        function () {
          let e;
          let t;
          let n;
          let r;
          let i;
          let o;
          let s = arguments[0] || {};
          let a = 1;
          const c = arguments.length;
          let l = !1;
          for (
            typeof s === 'boolean' && ((l = s), (s = arguments[a] || {}), a++),
              typeof s === 'object' || G.isFunction(s) || (s = {}),
              a === c && ((s = this), a--);
            c > a;
            a++
          )
            if ((e = arguments[a]) != null)
              for (t in e)
                (n = s[t]),
                  (r = e[t]),
                  s !== r &&
                    (l && r && (G.isPlainObject(r) || (i = G.isArray(r)))
                      ? (i
                          ? ((i = !1), (o = n && G.isArray(n) ? n : []))
                          : (o = n && G.isPlainObject(n) ? n : {}),
                        (s[t] = G.extend(l, o, r)))
                      : void 0 !== r && (s[t] = r));
          return s;
        }),
      G.extend({
        expando: `jQuery${(J + Math.random()).replace(/\D/g, '')}`,
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return G.type(e) === 'function';
        },
        isArray: Array.isArray,
        isWindow: function (e) {
          return e != null && e === e.window;
        },
        isNumeric: function (e) {
          return !G.isArray(e) && e - parseFloat(e) + 1 >= 0;
        },
        isPlainObject: function (e) {
          return G.type(e) !== 'object' || e.nodeType || G.isWindow(e)
            ? !1
            : !e.constructor ||
                K.call(e.constructor.prototype, 'isPrototypeOf');
        },
        isEmptyObject: function (e) {
          let t;
          for (t in e) return !1;
          return !0;
        },
        type: function (e) {
          return e == null
            ? `${e}`
            : typeof e === 'object' || typeof e === 'function'
            ? V[X.call(e)] || 'object'
            : typeof e;
        },
        globalEval: function (e) {
          let t;
          const n = eval;
          (e = G.trim(e)),
            e &&
              (e.indexOf('use strict') === 1
                ? ((t = Y.createElement('script')),
                  (t.text = e),
                  Y.head.appendChild(t).parentNode.removeChild(t))
                : n(e));
        },
        camelCase: function (e) {
          return e.replace(te, 'ms-').replace(ne, re);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t, r) {
          let i;
          let o = 0;
          const s = e.length;
          const a = n(e);
          if (r) {
            if (a) for (; s > o && ((i = t.apply(e[o], r)), i !== !1); o++);
            else for (o in e) if (((i = t.apply(e[o], r)), i === !1)) break;
          } else if (a)
            for (; s > o && ((i = t.call(e[o], o, e[o])), i !== !1); o++);
          else for (o in e) if (((i = t.call(e[o], o, e[o])), i === !1)) break;
          return e;
        },
        trim: function (e) {
          return e == null ? '' : `${e}`.replace(ee, '');
        },
        makeArray: function (e, t) {
          const r = t || [];
          return (
            e != null &&
              (n(Object(e))
                ? G.merge(r, typeof e === 'string' ? [e] : e)
                : U.call(r, e)),
            r
          );
        },
        inArray: function (e, t, n) {
          return t == null ? -1 : Q.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, i = e.length; n > r; r++)
            e[i++] = t[r];
          return (e.length = i), e;
        },
        grep: function (e, t, n) {
          for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++)
            (r = !t(e[o], o)), r !== a && i.push(e[o]);
          return i;
        },
        map: function (e, t, r) {
          let i;
          let o = 0;
          const s = e.length;
          const a = n(e);
          const c = [];
          if (a) for (; s > o; o++) (i = t(e[o], o, r)), i != null && c.push(i);
          else for (o in e) (i = t(e[o], o, r)), i != null && c.push(i);
          return W.apply([], c);
        },
        guid: 1,
        proxy: function (e, t) {
          let n;
          let r;
          let i;
          return (
            typeof t === 'string' && ((n = e[t]), (t = e), (e = n)),
            G.isFunction(e)
              ? ((r = z.call(arguments, 2)),
                (i = function () {
                  return e.apply(t || this, r.concat(z.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || G.guid++),
                i)
              : void 0
          );
        },
        now: Date.now,
        support: Z,
      }),
      G.each(
        'Boolean Number String Function Array Date RegExp Object Error'.split(
          ' ',
        ),
        (e, t) => {
          V[`[object ${t}]`] = t.toLowerCase();
        },
      );
    const ie = (function (e) {
      function t(e, t, n, r) {
        let i;
        let o;
        let s;
        let a;
        let c;
        let l;
        let d;
        let p;
        let h;
        let g;
        if (
          ((t ? t.ownerDocument || t : H) !== M && j(t),
          (t = t || M),
          (n = n || []),
          (a = t.nodeType),
          typeof e !== 'string' || !e || (a !== 1 && a !== 9 && a !== 11))
        )
          return n;
        if (!r && $) {
          if (a !== 11 && (i = ye.exec(e)))
            if ((s = i[1])) {
              if (a === 9) {
                if (((o = t.getElementById(s)), !o || !o.parentNode)) return n;
                if (o.id === s) return n.push(o), n;
              } else if (
                t.ownerDocument &&
                (o = t.ownerDocument.getElementById(s)) &&
                B(t, o) &&
                o.id === s
              )
                return n.push(o), n;
            } else {
              if (i[2]) return J.apply(n, t.getElementsByTagName(e)), n;
              if ((s = i[3]) && x.getElementsByClassName)
                return J.apply(n, t.getElementsByClassName(s)), n;
            }
          if (x.qsa && (!O || !O.test(e))) {
            if (
              ((p = d = I),
              (h = t),
              (g = a !== 1 && e),
              a === 1 && t.nodeName.toLowerCase() !== 'object')
            ) {
              for (
                l = N(e),
                  (d = t.getAttribute('id'))
                    ? (p = d.replace(we, '\\$&'))
                    : t.setAttribute('id', p),
                  p = `[id='${p}'] `,
                  c = l.length;
                c--;

              )
                l[c] = p + f(l[c]);
              (h = (be.test(e) && u(t.parentNode)) || t), (g = l.join(','));
            }
            if (g)
              try {
                return J.apply(n, h.querySelectorAll(g)), n;
              } catch (m) {
              } finally {
                d || t.removeAttribute('id');
              }
          }
        }
        return S(e.replace(ce, '$1'), t, n, r);
      }
      function n() {
        function e(n, r) {
          return (
            t.push(`${n} `) > _.cacheLength && delete e[t.shift()],
            (e[`${n} `] = r)
          );
        }
        var t = [];
        return e;
      }
      function r(e) {
        return (e[I] = !0), e;
      }
      function i(e) {
        let t = M.createElement('div');
        try {
          return !!e(t);
        } catch (n) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function o(e, t) {
        for (let n = e.split('|'), r = e.length; r--; ) _.attrHandle[n[r]] = t;
      }
      function s(e, t) {
        let n = t && e;
        const r =
          n &&
          e.nodeType === 1 &&
          t.nodeType === 1 &&
          (~t.sourceIndex || V) - (~e.sourceIndex || V);
        if (r) return r;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function a(e) {
        return function (t) {
          const n = t.nodeName.toLowerCase();
          return n === 'input' && t.type === e;
        };
      }
      function c(e) {
        return function (t) {
          const n = t.nodeName.toLowerCase();
          return (n === 'input' || n === 'button') && t.type === e;
        };
      }
      function l(e) {
        return r(
          (t) => (
            (t = +t),
            r((n, r) => {
              for (var i, o = e([], n.length, t), s = o.length; s--; )
                n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
            })
          ),
        );
      }
      function u(e) {
        return e && typeof e.getElementsByTagName !== 'undefined' && e;
      }
      function d() {}
      function f(e) {
        for (var t = 0, n = e.length, r = ''; n > t; t++) r += e[t].value;
        return r;
      }
      function p(e, t, n) {
        const r = t.dir;
        const i = n && r === 'parentNode';
        const o = P++;
        return t.first
          ? function (t, n, o) {
              for (; (t = t[r]); ) if (t.nodeType === 1 || i) return e(t, n, o);
            }
          : function (t, n, s) {
              let a;
              let c;
              const l = [F, o];
              if (s) {
                for (; (t = t[r]); )
                  if ((t.nodeType === 1 || i) && e(t, n, s)) return !0;
              } else
                for (; (t = t[r]); )
                  if (t.nodeType === 1 || i) {
                    if (
                      ((c = t[I] || (t[I] = {})),
                      (a = c[r]) && a[0] === F && a[1] === o)
                    )
                      return (l[2] = a[2]);
                    if (((c[r] = l), (l[2] = e(t, n, s)))) return !0;
                  }
            };
      }
      function h(e) {
        return e.length > 1
          ? function (t, n, r) {
              for (let i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
              return !0;
            }
          : e[0];
      }
      function g(e, n, r) {
        for (let i = 0, o = n.length; o > i; i++) t(e, n[i], r);
        return r;
      }
      function m(e, t, n, r, i) {
        for (var o, s = [], a = 0, c = e.length, l = t != null; c > a; a++)
          (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
        return s;
      }
      function v(e, t, n, i, o, s) {
        return (
          i && !i[I] && (i = v(i)),
          o && !o[I] && (o = v(o, s)),
          r((r, s, a, c) => {
            let l;
            let u;
            let d;
            const f = [];
            const p = [];
            const h = s.length;
            const v = r || g(t || '*', a.nodeType ? [a] : a, []);
            const y = !e || (!r && t) ? v : m(v, f, e, a, c);
            let b = n ? (o || (r ? e : h || i) ? [] : s) : y;
            if ((n && n(y, b, a, c), i))
              for (l = m(b, p), i(l, [], a, c), u = l.length; u--; )
                (d = l[u]) && (b[p[u]] = !(y[p[u]] = d));
            if (r) {
              if (o || e) {
                if (o) {
                  for (l = [], u = b.length; u--; )
                    (d = b[u]) && l.push((y[u] = d));
                  o(null, (b = []), l, c);
                }
                for (u = b.length; u--; )
                  (d = b[u]) &&
                    (l = o ? ee(r, d) : f[u]) > -1 &&
                    (r[l] = !(s[l] = d));
              }
            } else
              (b = m(b === s ? b.splice(h, b.length) : b)),
                o ? o(null, s, b, c) : J.apply(s, b);
          })
        );
      }
      function y(e) {
        for (
          var t,
            n,
            r,
            i = e.length,
            o = _.relative[e[0].type],
            s = o || _.relative[' '],
            a = o ? 1 : 0,
            c = p((e) => e === t, s, !0),
            l = p((e) => ee(t, e) > -1, s, !0),
            u = [
              function (e, n, r) {
                const i =
                  (!o && (r || n !== T)) ||
                  ((t = n).nodeType ? c(e, n, r) : l(e, n, r));
                return (t = null), i;
              },
            ];
          i > a;
          a++
        )
          if ((n = _.relative[e[a].type])) u = [p(h(u), n)];
          else {
            if (((n = _.filter[e[a].type].apply(null, e[a].matches)), n[I])) {
              for (r = ++a; i > r && !_.relative[e[r].type]; r++);
              return v(
                a > 1 && h(u),
                a > 1 &&
                  f(
                    e
                      .slice(0, a - 1)
                      .concat({ value: e[a - 2].type === ' ' ? '*' : '' }),
                  ).replace(ce, '$1'),
                n,
                r > a && y(e.slice(a, r)),
                i > r && y((e = e.slice(r))),
                i > r && f(e),
              );
            }
            u.push(n);
          }
        return h(u);
      }
      function b(e, n) {
        const i = n.length > 0;
        const o = e.length > 0;
        const s = function (r, s, a, c, l) {
          let u;
          let d;
          let f;
          let p = 0;
          let h = '0';
          const g = r && [];
          let v = [];
          const y = T;
          const b = r || (o && _.find.TAG('*', l));
          const w = (F += y == null ? 1 : Math.random() || 0.1);
          const x = b.length;
          for (l && (T = s !== M && s); h !== x && (u = b[h]) != null; h++) {
            if (o && u) {
              for (d = 0; (f = e[d++]); )
                if (f(u, s, a)) {
                  c.push(u);
                  break;
                }
              l && (F = w);
            }
            i && ((u = !f && u) && p--, r && g.push(u));
          }
          if (((p += h), i && h !== p)) {
            for (d = 0; (f = n[d++]); ) f(g, v, s, a);
            if (r) {
              if (p > 0) for (; h--; ) g[h] || v[h] || (v[h] = Z.call(c));
              v = m(v);
            }
            J.apply(c, v),
              l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(c);
          }
          return l && ((F = w), (T = y)), g;
        };
        return i ? r(s) : s;
      }
      let w;
      let x;
      let _;
      let k;
      let C;
      let N;
      let E;
      let S;
      let T;
      let A;
      let L;
      let j;
      let M;
      let q;
      let $;
      let O;
      let R;
      let D;
      let B;
      var I = `sizzle${1 * new Date()}`;
      var H = e.document;
      var F = 0;
      var P = 0;
      const z = n();
      const W = n();
      const U = n();
      let Q = function (e, t) {
        return e === t && (L = !0), 0;
      };
      var V = 1 << 31;
      const X = {}.hasOwnProperty;
      let K = [];
      var Z = K.pop;
      const Y = K.push;
      var J = K.push;
      const G = K.slice;
      var ee = function (e, t) {
        for (let n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
        return -1;
      };
      const te =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped';
      const ne = '[\\x20\\t\\r\\n\\f]';
      const re = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+';
      const ie = re.replace('w', 'w#');
      const oe = `\\[${ne}*(${re})(?:${ne}*([*^$|!~]?=)${ne}*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(${ie}))|)${ne}*\\]`;
      const se = `:(${re})(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|${oe})*)|.*)\\)|)`;
      const ae = new RegExp(`${ne}+`, 'g');
      var ce = new RegExp(`^${ne}+|((?:^|[^\\\\])(?:\\\\.)*)${ne}+$`, 'g');
      const le = new RegExp(`^${ne}*,${ne}*`);
      const ue = new RegExp(`^${ne}*([>+~]|${ne})${ne}*`);
      const de = new RegExp(`=${ne}*([^\\]'"]*?)${ne}*\\]`, 'g');
      const fe = new RegExp(se);
      const pe = new RegExp(`^${ie}$`);
      const he = {
        ID: new RegExp(`^#(${re})`),
        CLASS: new RegExp(`^\\.(${re})`),
        TAG: new RegExp(`^(${re.replace('w', 'w*')})`),
        ATTR: new RegExp(`^${oe}`),
        PSEUDO: new RegExp(`^${se}`),
        CHILD: new RegExp(
          `^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(${ne}*(even|odd|(([+-]|)(\\d*)n|)${ne}*(?:([+-]|)${ne}*(\\d+)|))${ne}*\\)|)`,
          'i',
        ),
        bool: new RegExp(`^(?:${te})$`, 'i'),
        needsContext: new RegExp(
          `^${ne}*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(${ne}*((?:-\\d)?\\d*)${ne}*\\)|)(?=[^-]|$)`,
          'i',
        ),
      };
      const ge = /^(?:input|select|textarea|button)$/i;
      const me = /^h\d$/i;
      const ve = /^[^{]+\{\s*\[native \w/;
      var ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
      var be = /[+~]/;
      var we = /'|\\/g;
      const xe = new RegExp(`\\\\([\\da-f]{1,6}${ne}?|(${ne})|.)`, 'ig');
      const _e = function (e, t, n) {
        const r = `0x${t}` - 65536;
        return r !== r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      };
      const ke = function () {
        j();
      };
      try {
        J.apply((K = G.call(H.childNodes)), H.childNodes),
          K[H.childNodes.length].nodeType;
      } catch (Ce) {
        J = {
          apply: K.length
            ? function (e, t) {
                Y.apply(e, G.call(t));
              }
            : function (e, t) {
                for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                e.length = n - 1;
              },
        };
      }
      (x = t.support = {}),
        (C = t.isXML =
          function (e) {
            const t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== 'HTML' : !1;
          }),
        (j = t.setDocument =
          function (e) {
            let t;
            let n;
            const r = e ? e.ownerDocument || e : H;
            return r !== M && r.nodeType === 9 && r.documentElement
              ? ((M = r),
                (q = r.documentElement),
                (n = r.defaultView),
                n &&
                  n !== n.top &&
                  (n.addEventListener
                    ? n.addEventListener('unload', ke, !1)
                    : n.attachEvent && n.attachEvent('onunload', ke)),
                ($ = !C(r)),
                (x.attributes = i(
                  (e) => ((e.className = 'i'), !e.getAttribute('className')),
                )),
                (x.getElementsByTagName = i(
                  (e) => (
                    e.appendChild(r.createComment('')),
                    !e.getElementsByTagName('*').length
                  ),
                )),
                (x.getElementsByClassName = ve.test(r.getElementsByClassName)),
                (x.getById = i(
                  (e) => (
                    (q.appendChild(e).id = I),
                    !r.getElementsByName || !r.getElementsByName(I).length
                  ),
                )),
                x.getById
                  ? ((_.find.ID = function (e, t) {
                      if (typeof t.getElementById !== 'undefined' && $) {
                        const n = t.getElementById(e);
                        return n && n.parentNode ? [n] : [];
                      }
                    }),
                    (_.filter.ID = function (e) {
                      const t = e.replace(xe, _e);
                      return function (e) {
                        return e.getAttribute('id') === t;
                      };
                    }))
                  : (delete _.find.ID,
                    (_.filter.ID = function (e) {
                      const t = e.replace(xe, _e);
                      return function (e) {
                        const n =
                          typeof e.getAttributeNode !== 'undefined' &&
                          e.getAttributeNode('id');
                        return n && n.value === t;
                      };
                    })),
                (_.find.TAG = x.getElementsByTagName
                  ? function (e, t) {
                      return typeof t.getElementsByTagName !== 'undefined'
                        ? t.getElementsByTagName(e)
                        : x.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      let n;
                      const r = [];
                      let i = 0;
                      const o = t.getElementsByTagName(e);
                      if (e === '*') {
                        for (; (n = o[i++]); ) n.nodeType === 1 && r.push(n);
                        return r;
                      }
                      return o;
                    }),
                (_.find.CLASS =
                  x.getElementsByClassName &&
                  function (e, t) {
                    return $ ? t.getElementsByClassName(e) : void 0;
                  }),
                (R = []),
                (O = []),
                (x.qsa = ve.test(r.querySelectorAll)) &&
                  (i((e) => {
                    (q.appendChild(
                      e,
                    ).innerHTML = `<a id='${I}'></a><select id='${I}-\f]' msallowcapture=''><option selected=''></option></select>`),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        O.push(`[*^$]=${ne}*(?:''|"")`),
                      e.querySelectorAll('[selected]').length ||
                        O.push(`\\[${ne}*(?:value|${te})`),
                      e.querySelectorAll(`[id~=${I}-]`).length || O.push('~='),
                      e.querySelectorAll(':checked').length ||
                        O.push(':checked'),
                      e.querySelectorAll(`a#${I}+*`).length ||
                        O.push('.#.+[+~]');
                  }),
                  i((e) => {
                    const t = r.createElement('input');
                    t.setAttribute('type', 'hidden'),
                      e.appendChild(t).setAttribute('name', 'D'),
                      e.querySelectorAll('[name=d]').length &&
                        O.push(`name${ne}*[*^$|!~]?=`),
                      e.querySelectorAll(':enabled').length ||
                        O.push(':enabled', ':disabled'),
                      e.querySelectorAll('*,:x'),
                      O.push(',.*:');
                  })),
                (x.matchesSelector = ve.test(
                  (D =
                    q.matches ||
                    q.webkitMatchesSelector ||
                    q.mozMatchesSelector ||
                    q.oMatchesSelector ||
                    q.msMatchesSelector),
                )) &&
                  i((e) => {
                    (x.disconnectedMatch = D.call(e, 'div')),
                      D.call(e, "[s!='']:x"),
                      R.push('!=', se);
                  }),
                (O = O.length && new RegExp(O.join('|'))),
                (R = R.length && new RegExp(R.join('|'))),
                (t = ve.test(q.compareDocumentPosition)),
                (B =
                  t || ve.test(q.contains)
                    ? function (e, t) {
                        const n = e.nodeType === 9 ? e.documentElement : e;
                        const r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            r.nodeType !== 1 ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (Q = t
                  ? function (e, t) {
                      if (e === t) return (L = !0), 0;
                      let n =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        n ||
                        ((n =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & n ||
                        (!x.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e === r || (e.ownerDocument === H && B(H, e))
                            ? -1
                            : t === r || (t.ownerDocument === H && B(H, t))
                            ? 1
                            : A
                            ? ee(A, e) - ee(A, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (L = !0), 0;
                      let n;
                      let i = 0;
                      const o = e.parentNode;
                      const a = t.parentNode;
                      const c = [e];
                      const l = [t];
                      if (!o || !a)
                        return e === r
                          ? -1
                          : t === r
                          ? 1
                          : o
                          ? -1
                          : a
                          ? 1
                          : A
                          ? ee(A, e) - ee(A, t)
                          : 0;
                      if (o === a) return s(e, t);
                      for (n = e; (n = n.parentNode); ) c.unshift(n);
                      for (n = t; (n = n.parentNode); ) l.unshift(n);
                      for (; c[i] === l[i]; ) i++;
                      return i
                        ? s(c[i], l[i])
                        : c[i] === H
                        ? -1
                        : l[i] === H
                        ? 1
                        : 0;
                    }),
                r)
              : M;
          }),
        (t.matches = function (e, n) {
          return t(e, null, null, n);
        }),
        (t.matchesSelector = function (e, n) {
          if (
            ((e.ownerDocument || e) !== M && j(e),
            (n = n.replace(de, "='$1']")),
            !(!x.matchesSelector || !$ || (R && R.test(n)) || (O && O.test(n))))
          )
            try {
              const r = D.call(e, n);
              if (
                r ||
                x.disconnectedMatch ||
                (e.document && e.document.nodeType !== 11)
              )
                return r;
            } catch (i) {}
          return t(n, M, null, [e]).length > 0;
        }),
        (t.contains = function (e, t) {
          return (e.ownerDocument || e) !== M && j(e), B(e, t);
        }),
        (t.attr = function (e, t) {
          (e.ownerDocument || e) !== M && j(e);
          const n = _.attrHandle[t.toLowerCase()];
          let r =
            n && X.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
          return void 0 !== r
            ? r
            : x.attributes || !$
            ? e.getAttribute(t)
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
        }),
        (t.error = function (e) {
          throw new Error(`Syntax error, unrecognized expression: ${e}`);
        }),
        (t.uniqueSort = function (e) {
          let t;
          const n = [];
          let r = 0;
          let i = 0;
          if (
            ((L = !x.detectDuplicates),
            (A = !x.sortStable && e.slice(0)),
            e.sort(Q),
            L)
          ) {
            for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
            for (; r--; ) e.splice(n[r], 1);
          }
          return (A = null), e;
        }),
        (k = t.getText =
          function (e) {
            let t;
            let n = '';
            let r = 0;
            const i = e.nodeType;
            if (i) {
              if (i === 1 || i === 9 || i === 11) {
                if (typeof e.textContent === 'string') return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += k(e);
              } else if (i === 3 || i === 4) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += k(t);
            return n;
          }),
        (_ = t.selectors =
          {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
              '>': { dir: 'parentNode', first: !0 },
              ' ': { dir: 'parentNode' },
              '+': { dir: 'previousSibling', first: !0 },
              '~': { dir: 'previousSibling' },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(xe, _e)),
                  (e[3] = (e[3] || e[4] || e[5] || '').replace(xe, _e)),
                  e[2] === '~=' && (e[3] = ` ${e[3]} `),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  e[1].slice(0, 3) === 'nth'
                    ? (e[3] || t.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * (e[3] === 'even' || e[3] === 'odd'))),
                      (e[5] = +(e[7] + e[8] || e[3] === 'odd')))
                    : e[3] && t.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                let t;
                const n = !e[6] && e[2];
                return he.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || '')
                      : n &&
                        fe.test(n) &&
                        (t = N(n, !0)) &&
                        (t = n.indexOf(')', n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                const t = e.replace(xe, _e).toLowerCase();
                return e === '*'
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                let t = z[`${e} `];
                return (
                  t ||
                  ((t = new RegExp(`(^|${ne})${e}(${ne}|$)`)) &&
                    z(e, (e) =>
                      t.test(
                        (typeof e.className === 'string' && e.className) ||
                          (typeof e.getAttribute !== 'undefined' &&
                            e.getAttribute('class')) ||
                          '',
                      ),
                    ))
                );
              },
              ATTR: function (e, n, r) {
                return function (i) {
                  let o = t.attr(i, e);
                  return o == null
                    ? n === '!='
                    : n
                    ? ((o += ''),
                      n === '='
                        ? o === r
                        : n === '!='
                        ? o !== r
                        : n === '^='
                        ? r && o.indexOf(r) === 0
                        : n === '*='
                        ? r && o.indexOf(r) > -1
                        : n === '$='
                        ? r && o.slice(-r.length) === r
                        : n === '~='
                        ? ` ${o.replace(ae, ' ')} `.indexOf(r) > -1
                        : n === '|='
                        ? o === r || o.slice(0, r.length + 1) === `${r}-`
                        : !1)
                    : !0;
                };
              },
              CHILD: function (e, t, n, r, i) {
                const o = e.slice(0, 3) !== 'nth';
                const s = e.slice(-4) !== 'last';
                const a = t === 'of-type';
                return r === 1 && i === 0
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, c) {
                      let l;
                      let u;
                      let d;
                      let f;
                      let p;
                      let h;
                      let g = o !== s ? 'nextSibling' : 'previousSibling';
                      const m = t.parentNode;
                      const v = a && t.nodeName.toLowerCase();
                      const y = !c && !a;
                      if (m) {
                        if (o) {
                          for (; g; ) {
                            for (d = t; (d = d[g]); )
                              if (
                                a
                                  ? d.nodeName.toLowerCase() === v
                                  : d.nodeType === 1
                              )
                                return !1;
                            h = g = e === 'only' && !h && 'nextSibling';
                          }
                          return !0;
                        }
                        if (((h = [s ? m.firstChild : m.lastChild]), s && y)) {
                          for (
                            u = m[I] || (m[I] = {}),
                              l = u[e] || [],
                              p = l[0] === F && l[1],
                              f = l[0] === F && l[2],
                              d = p && m.childNodes[p];
                            (d = (++p && d && d[g]) || (f = p = 0) || h.pop());

                          )
                            if (d.nodeType === 1 && ++f && d === t) {
                              u[e] = [F, p, f];
                              break;
                            }
                        } else if (
                          y &&
                          (l = (t[I] || (t[I] = {}))[e]) &&
                          l[0] === F
                        )
                          f = l[1];
                        else
                          for (
                            ;
                            (d =
                              (++p && d && d[g]) || (f = p = 0) || h.pop()) &&
                            ((a
                              ? d.nodeName.toLowerCase() !== v
                              : d.nodeType !== 1) ||
                              !++f ||
                              (y && ((d[I] || (d[I] = {}))[e] = [F, f]),
                              d !== t));

                          );
                        return (f -= i), f === r || (f % r === 0 && f / r >= 0);
                      }
                    };
              },
              PSEUDO: function (e, n) {
                let i;
                const o =
                  _.pseudos[e] ||
                  _.setFilters[e.toLowerCase()] ||
                  t.error(`unsupported pseudo: ${e}`);
                return o[I]
                  ? o(n)
                  : o.length > 1
                  ? ((i = [e, e, '', n]),
                    _.setFilters.hasOwnProperty(e.toLowerCase())
                      ? r((e, t) => {
                          for (var r, i = o(e, n), s = i.length; s--; )
                            (r = ee(e, i[s])), (e[r] = !(t[r] = i[s]));
                        })
                      : function (e) {
                          return o(e, 0, i);
                        })
                  : o;
              },
            },
            pseudos: {
              not: r((e) => {
                const t = [];
                const n = [];
                const i = E(e.replace(ce, '$1'));
                return i[I]
                  ? r((e, t, n, r) => {
                      for (var o, s = i(e, null, r, []), a = e.length; a--; )
                        (o = s[a]) && (e[a] = !(t[a] = o));
                    })
                  : function (e, r, o) {
                      return (
                        (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: r(
                (e) =>
                  function (n) {
                    return t(e, n).length > 0;
                  },
              ),
              contains: r(
                (e) => (
                  (e = e.replace(xe, _e)),
                  function (t) {
                    return (
                      (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    );
                  }
                ),
              ),
              lang: r(
                (e) => (
                  pe.test(e || '') || t.error(`unsupported lang: ${e}`),
                  (e = e.replace(xe, _e).toLowerCase()),
                  function (t) {
                    let n;
                    do
                      if (
                        (n = $
                          ? t.lang
                          : t.getAttribute('xml:lang') ||
                            t.getAttribute('lang'))
                      )
                        return (
                          (n = n.toLowerCase()),
                          n === e || n.indexOf(`${e}-`) === 0
                        );
                    while ((t = t.parentNode) && t.nodeType === 1);
                    return !1;
                  }
                ),
              ),
              target: function (t) {
                const n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === q;
              },
              focus: function (e) {
                return (
                  e === M.activeElement &&
                  (!M.hasFocus || M.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: function (e) {
                return e.disabled === !1;
              },
              disabled: function (e) {
                return e.disabled === !0;
              },
              checked: function (e) {
                const t = e.nodeName.toLowerCase();
                return (
                  (t === 'input' && !!e.checked) ||
                  (t === 'option' && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !_.pseudos.empty(e);
              },
              header: function (e) {
                return me.test(e.nodeName);
              },
              input: function (e) {
                return ge.test(e.nodeName);
              },
              button: function (e) {
                const t = e.nodeName.toLowerCase();
                return (t === 'input' && e.type === 'button') || t === 'button';
              },
              text: function (e) {
                let t;
                return (
                  e.nodeName.toLowerCase() === 'input' &&
                  e.type === 'text' &&
                  ((t = e.getAttribute('type')) == null ||
                    t.toLowerCase() === 'text')
                );
              },
              first: l(() => [0]),
              last: l((e, t) => [t - 1]),
              eq: l((e, t, n) => [n < 0 ? n + t : n]),
              even: l((e, t) => {
                for (let n = 0; t > n; n += 2) e.push(n);
                return e;
              }),
              odd: l((e, t) => {
                for (let n = 1; t > n; n += 2) e.push(n);
                return e;
              }),
              lt: l((e, t, n) => {
                for (let r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                return e;
              }),
              gt: l((e, t, n) => {
                for (let r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              }),
            },
          }),
        (_.pseudos.nth = _.pseudos.eq);
      for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        _.pseudos[w] = a(w);
      for (w in { submit: !0, reset: !0 }) _.pseudos[w] = c(w);
      return (
        (d.prototype = _.filters = _.pseudos),
        (_.setFilters = new d()),
        (N = t.tokenize =
          function (e, n) {
            let r;
            let i;
            let o;
            let s;
            let a;
            let c;
            let l;
            const u = W[`${e} `];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, c = [], l = _.preFilter; a; ) {
              (!r || (i = le.exec(a))) &&
                (i && (a = a.slice(i[0].length) || a), c.push((o = []))),
                (r = !1),
                (i = ue.exec(a)) &&
                  ((r = i.shift()),
                  o.push({ value: r, type: i[0].replace(ce, ' ') }),
                  (a = a.slice(r.length)));
              for (s in _.filter)
                !(i = he[s].exec(a)) ||
                  (l[s] && !(i = l[s](i))) ||
                  ((r = i.shift()),
                  o.push({ value: r, type: s, matches: i }),
                  (a = a.slice(r.length)));
              if (!r) break;
            }
            return n ? a.length : a ? t.error(e) : W(e, c).slice(0);
          }),
        (E = t.compile =
          function (e, t) {
            let n;
            const r = [];
            const i = [];
            let o = U[`${e} `];
            if (!o) {
              for (t || (t = N(e)), n = t.length; n--; )
                (o = y(t[n])), o[I] ? r.push(o) : i.push(o);
              (o = U(e, b(i, r))), (o.selector = e);
            }
            return o;
          }),
        (S = t.select =
          function (e, t, n, r) {
            let i;
            let o;
            let s;
            let a;
            let c;
            const l = typeof e === 'function' && e;
            const d = !r && N((e = l.selector || e));
            if (((n = n || []), d.length === 1)) {
              if (
                ((o = d[0] = d[0].slice(0)),
                o.length > 2 &&
                  (s = o[0]).type === 'ID' &&
                  x.getById &&
                  t.nodeType === 9 &&
                  $ &&
                  _.relative[o[1].type])
              ) {
                if (
                  ((t = (_.find.ID(s.matches[0].replace(xe, _e), t) || [])[0]),
                  !t)
                )
                  return n;
                l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
              }
              for (
                i = he.needsContext.test(e) ? 0 : o.length;
                i-- && ((s = o[i]), !_.relative[(a = s.type)]);

              )
                if (
                  (c = _.find[a]) &&
                  (r = c(
                    s.matches[0].replace(xe, _e),
                    (be.test(o[0].type) && u(t.parentNode)) || t,
                  ))
                ) {
                  if ((o.splice(i, 1), (e = r.length && f(o)), !e))
                    return J.apply(n, r), n;
                  break;
                }
            }
            return (
              (l || E(e, d))(r, t, !$, n, (be.test(e) && u(t.parentNode)) || t),
              n
            );
          }),
        (x.sortStable = I.split('').sort(Q).join('') === I),
        (x.detectDuplicates = !!L),
        j(),
        (x.sortDetached = i(
          (e) => 1 & e.compareDocumentPosition(M.createElement('div')),
        )),
        i(
          (e) => (
            (e.innerHTML = "<a href='#'></a>"),
            e.firstChild.getAttribute('href') === '#'
          ),
        ) ||
          o('type|href|height|width', (e, t, n) =>
            n ? void 0 : e.getAttribute(t, t.toLowerCase() === 'type' ? 1 : 2),
          ),
        (x.attributes &&
          i(
            (e) => (
              (e.innerHTML = '<input/>'),
              e.firstChild.setAttribute('value', ''),
              e.firstChild.getAttribute('value') === ''
            ),
          )) ||
          o('value', (e, t, n) =>
            n || e.nodeName.toLowerCase() !== 'input' ? void 0 : e.defaultValue,
          ),
        i((e) => e.getAttribute('disabled') == null) ||
          o(te, (e, t, n) => {
            let r;
            return n
              ? void 0
              : e[t] === !0
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
          }),
        t
      );
    })(e);
    (G.find = ie),
      (G.expr = ie.selectors),
      (G.expr[':'] = G.expr.pseudos),
      (G.unique = ie.uniqueSort),
      (G.text = ie.getText),
      (G.isXMLDoc = ie.isXML),
      (G.contains = ie.contains);
    const oe = G.expr.match.needsContext;
    const se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
    var ae = /^.[^:#\[\.,]*$/;
    (G.filter = function (e, t, n) {
      const r = t[0];
      return (
        n && (e = `:not(${e})`),
        t.length === 1 && r.nodeType === 1
          ? G.find.matchesSelector(r, e)
            ? [r]
            : []
          : G.find.matches(
              e,
              G.grep(t, (e) => e.nodeType === 1),
            )
      );
    }),
      G.fn.extend({
        find: function (e) {
          let t;
          const n = this.length;
          let r = [];
          const i = this;
          if (typeof e !== 'string')
            return this.pushStack(
              G(e).filter(function () {
                for (t = 0; n > t; t++) if (G.contains(i[t], this)) return !0;
              }),
            );
          for (t = 0; n > t; t++) G.find(e, i[t], r);
          return (
            (r = this.pushStack(n > 1 ? G.unique(r) : r)),
            (r.selector = this.selector ? `${this.selector} ${e}` : e),
            r
          );
        },
        filter: function (e) {
          return this.pushStack(r(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(r(this, e || [], !0));
        },
        is: function (e) {
          return !!r(
            this,
            typeof e === 'string' && oe.test(e) ? G(e) : e || [],
            !1,
          ).length;
        },
      });
    let ce;
    const le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    const ue = (G.fn.init = function (e, t) {
      let n;
      let r;
      if (!e) return this;
      if (typeof e === 'string') {
        if (
          ((n =
            e[0] === '<' && e[e.length - 1] === '>' && e.length >= 3
              ? [null, e, null]
              : le.exec(e)),
          !n || (!n[1] && t))
        )
          return !t || t.jquery
            ? (t || ce).find(e)
            : this.constructor(t).find(e);
        if (n[1]) {
          if (
            ((t = t instanceof G ? t[0] : t),
            G.merge(
              this,
              G.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Y, !0),
            ),
            se.test(n[1]) && G.isPlainObject(t))
          )
            for (n in t)
              G.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this;
        }
        return (
          (r = Y.getElementById(n[2])),
          r && r.parentNode && ((this.length = 1), (this[0] = r)),
          (this.context = Y),
          (this.selector = e),
          this
        );
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : G.isFunction(e)
        ? typeof ce.ready !== 'undefined'
          ? ce.ready(e)
          : e(G)
        : (void 0 !== e.selector &&
            ((this.selector = e.selector), (this.context = e.context)),
          G.makeArray(e, this));
    });
    (ue.prototype = G.fn), (ce = G(Y));
    const de = /^(?:parents|prev(?:Until|All))/;
    const fe = { children: !0, contents: !0, next: !0, prev: !0 };
    G.extend({
      dir: function (e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && e.nodeType !== 9; )
          if (e.nodeType === 1) {
            if (i && G(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          e.nodeType === 1 && e !== t && n.push(e);
        return n;
      },
    }),
      G.fn.extend({
        has: function (e) {
          const t = G(e, this);
          const n = t.length;
          return this.filter(function () {
            for (let e = 0; n > e; e++) if (G.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          for (
            var n,
              r = 0,
              i = this.length,
              o = [],
              s =
                oe.test(e) || typeof e !== 'string'
                  ? G(e, t || this.context)
                  : 0;
            i > r;
            r++
          )
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (s
                  ? s.index(n) > -1
                  : n.nodeType === 1 && G.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
          return this.pushStack(o.length > 1 ? G.unique(o) : o);
        },
        index: function (e) {
          return e
            ? typeof e === 'string'
              ? Q.call(G(e), this[0])
              : Q.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(G.unique(G.merge(this.get(), G(e, t))));
        },
        addBack: function (e) {
          return this.add(
            e == null ? this.prevObject : this.prevObject.filter(e),
          );
        },
      }),
      G.each(
        {
          parent: function (e) {
            const t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null;
          },
          parents: function (e) {
            return G.dir(e, 'parentNode');
          },
          parentsUntil: function (e, t, n) {
            return G.dir(e, 'parentNode', n);
          },
          next: function (e) {
            return i(e, 'nextSibling');
          },
          prev: function (e) {
            return i(e, 'previousSibling');
          },
          nextAll: function (e) {
            return G.dir(e, 'nextSibling');
          },
          prevAll: function (e) {
            return G.dir(e, 'previousSibling');
          },
          nextUntil: function (e, t, n) {
            return G.dir(e, 'nextSibling', n);
          },
          prevUntil: function (e, t, n) {
            return G.dir(e, 'previousSibling', n);
          },
          siblings: function (e) {
            return G.sibling((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return G.sibling(e.firstChild);
          },
          contents: function (e) {
            return e.contentDocument || G.merge([], e.childNodes);
          },
        },
        (e, t) => {
          G.fn[e] = function (n, r) {
            let i = G.map(this, t, n);
            return (
              e.slice(-5) !== 'Until' && (r = n),
              r && typeof r === 'string' && (i = G.filter(r, i)),
              this.length > 1 &&
                (fe[e] || G.unique(i), de.test(e) && i.reverse()),
              this.pushStack(i)
            );
          };
        },
      );
    var pe = /\S+/g;
    var he = {};
    (G.Callbacks = function (e) {
      e = typeof e === 'string' ? he[e] || o(e) : G.extend({}, e);
      let t;
      let n;
      let r;
      let i;
      let s;
      let a;
      let c = [];
      let l = !e.once && [];
      const u = function (o) {
        for (
          t = e.memory && o, n = !0, a = i || 0, i = 0, s = c.length, r = !0;
          c && s > a;
          a++
        )
          if (c[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
            t = !1;
            break;
          }
        (r = !1),
          c && (l ? l.length && u(l.shift()) : t ? (c = []) : d.disable());
      };
      var d = {
        add: function () {
          if (c) {
            const n = c.length;
            !(function o(t) {
              G.each(t, (t, n) => {
                const r = G.type(n);
                r === 'function'
                  ? (e.unique && d.has(n)) || c.push(n)
                  : n && n.length && r !== 'string' && o(n);
              });
            })(arguments),
              r ? (s = c.length) : t && ((i = n), u(t));
          }
          return this;
        },
        remove: function () {
          return (
            c &&
              G.each(arguments, (e, t) => {
                for (var n; (n = G.inArray(t, c, n)) > -1; )
                  c.splice(n, 1), r && (s >= n && s--, a >= n && a--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? G.inArray(e, c) > -1 : !(!c || !c.length);
        },
        empty: function () {
          return (c = []), (s = 0), this;
        },
        disable: function () {
          return (c = l = t = void 0), this;
        },
        disabled: function () {
          return !c;
        },
        lock: function () {
          return (l = void 0), t || d.disable(), this;
        },
        locked: function () {
          return !l;
        },
        fireWith: function (e, t) {
          return (
            !c ||
              (n && !l) ||
              ((t = t || []),
              (t = [e, t.slice ? t.slice() : t]),
              r ? l.push(t) : u(t)),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
      return d;
    }),
      G.extend({
        Deferred: function (e) {
          const t = [
            ['resolve', 'done', G.Callbacks('once memory'), 'resolved'],
            ['reject', 'fail', G.Callbacks('once memory'), 'rejected'],
            ['notify', 'progress', G.Callbacks('memory')],
          ];
          let n = 'pending';
          var r = {
            state: function () {
              return n;
            },
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },
            then: function () {
              let e = arguments;
              return G.Deferred((n) => {
                G.each(t, (t, o) => {
                  const s = G.isFunction(e[t]) && e[t];
                  i[o[1]](function () {
                    const e = s && s.apply(this, arguments);
                    e && G.isFunction(e.promise)
                      ? e
                          .promise()
                          .done(n.resolve)
                          .fail(n.reject)
                          .progress(n.notify)
                      : n[`${o[0]}With`](
                          this === r ? n.promise() : this,
                          s ? [e] : arguments,
                        );
                  });
                }),
                  (e = null);
              }).promise();
            },
            promise: function (e) {
              return e != null ? G.extend(e, r) : r;
            },
          };
          var i = {};
          return (
            (r.pipe = r.then),
            G.each(t, (e, o) => {
              const s = o[2];
              const a = o[3];
              (r[o[1]] = s.add),
                a &&
                  s.add(
                    () => {
                      n = a;
                    },
                    t[1 ^ e][2].disable,
                    t[2][2].lock,
                  ),
                (i[o[0]] = function () {
                  return (
                    i[`${o[0]}With`](this === i ? r : this, arguments), this
                  );
                }),
                (i[`${o[0]}With`] = s.fireWith);
            }),
            r.promise(i),
            e && e.call(i, i),
            i
          );
        },
        when: function (e) {
          let t;
          let n;
          let r;
          let i = 0;
          const o = z.call(arguments);
          const s = o.length;
          let a = s !== 1 || (e && G.isFunction(e.promise)) ? s : 0;
          const c = a === 1 ? e : G.Deferred();
          const l = function (e, n, r) {
            return function (i) {
              (n[e] = this),
                (r[e] = arguments.length > 1 ? z.call(arguments) : i),
                r === t ? c.notifyWith(n, r) : --a || c.resolveWith(n, r);
            };
          };
          if (s > 1)
            for (
              t = new Array(s), n = new Array(s), r = new Array(s);
              s > i;
              i++
            )
              o[i] && G.isFunction(o[i].promise)
                ? o[i]
                    .promise()
                    .done(l(i, r, o))
                    .fail(c.reject)
                    .progress(l(i, n, t))
                : --a;
          return a || c.resolveWith(r, o), c.promise();
        },
      });
    let ge;
    (G.fn.ready = function (e) {
      return G.ready.promise().done(e), this;
    }),
      G.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? G.readyWait++ : G.ready(!0);
        },
        ready: function (e) {
          (e === !0 ? --G.readyWait : G.isReady) ||
            ((G.isReady = !0),
            (e !== !0 && --G.readyWait > 0) ||
              (ge.resolveWith(Y, [G]),
              G.fn.triggerHandler &&
                (G(Y).triggerHandler('ready'), G(Y).off('ready'))));
        },
      }),
      (G.ready.promise = function (t) {
        return (
          ge ||
            ((ge = G.Deferred()),
            Y.readyState === 'complete'
              ? setTimeout(G.ready)
              : (Y.addEventListener('DOMContentLoaded', s, !1),
                e.addEventListener('load', s, !1))),
          ge.promise(t)
        );
      }),
      G.ready.promise();
    const me = (G.access = function (e, t, n, r, i, o, s) {
      let a = 0;
      const c = e.length;
      let l = n == null;
      if (G.type(n) === 'object') {
        i = !0;
        for (a in n) G.access(e, t, a, n[a], !0, o, s);
      } else if (
        void 0 !== r &&
        ((i = !0),
        G.isFunction(r) || (s = !0),
        l &&
          (s
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(G(e), n);
              }))),
        t)
      )
        for (; c > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      return i ? e : l ? t.call(e) : c ? t(e[0], n) : o;
    });
    (G.acceptData = function (e) {
      return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
    }),
      (a.uid = 1),
      (a.accepts = G.acceptData),
      (a.prototype = {
        key: function (e) {
          if (!a.accepts(e)) return 0;
          const t = {};
          let n = e[this.expando];
          if (!n) {
            n = a.uid++;
            try {
              (t[this.expando] = { value: n }), Object.defineProperties(e, t);
            } catch (r) {
              (t[this.expando] = n), G.extend(e, t);
            }
          }
          return this.cache[n] || (this.cache[n] = {}), n;
        },
        set: function (e, t, n) {
          let r;
          const i = this.key(e);
          const o = this.cache[i];
          if (typeof t === 'string') o[t] = n;
          else if (G.isEmptyObject(o)) G.extend(this.cache[i], t);
          else for (r in t) o[r] = t[r];
          return o;
        },
        get: function (e, t) {
          const n = this.cache[this.key(e)];
          return void 0 === t ? n : n[t];
        },
        access: function (e, t, n) {
          let r;
          return void 0 === t || (t && typeof t === 'string' && void 0 === n)
            ? ((r = this.get(e, t)),
              void 0 !== r ? r : this.get(e, G.camelCase(t)))
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          let n;
          let r;
          let i;
          const o = this.key(e);
          const s = this.cache[o];
          if (void 0 === t) this.cache[o] = {};
          else {
            G.isArray(t)
              ? (r = t.concat(t.map(G.camelCase)))
              : ((i = G.camelCase(t)),
                t in s
                  ? (r = [t, i])
                  : ((r = i), (r = r in s ? [r] : r.match(pe) || []))),
              (n = r.length);
            for (; n--; ) delete s[r[n]];
          }
        },
        hasData: function (e) {
          return !G.isEmptyObject(this.cache[e[this.expando]] || {});
        },
        discard: function (e) {
          e[this.expando] && delete this.cache[e[this.expando]];
        },
      });
    var ve = new a();
    var ye = new a();
    var be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    var we = /([A-Z])/g;
    G.extend({
      hasData: function (e) {
        return ye.hasData(e) || ve.hasData(e);
      },
      data: function (e, t, n) {
        return ye.access(e, t, n);
      },
      removeData: function (e, t) {
        ye.remove(e, t);
      },
      _data: function (e, t, n) {
        return ve.access(e, t, n);
      },
      _removeData: function (e, t) {
        ve.remove(e, t);
      },
    }),
      G.fn.extend({
        data: function (e, t) {
          let n;
          let r;
          let i;
          const o = this[0];
          const s = o && o.attributes;
          if (void 0 === e) {
            if (
              this.length &&
              ((i = ye.get(o)), o.nodeType === 1 && !ve.get(o, 'hasDataAttrs'))
            ) {
              for (n = s.length; n--; )
                s[n] &&
                  ((r = s[n].name),
                  r.indexOf('data-') === 0 &&
                    ((r = G.camelCase(r.slice(5))), c(o, r, i[r])));
              ve.set(o, 'hasDataAttrs', !0);
            }
            return i;
          }
          return typeof e === 'object'
            ? this.each(function () {
                ye.set(this, e);
              })
            : me(
                this,
                function (t) {
                  let n;
                  const r = G.camelCase(e);
                  if (o && void 0 === t) {
                    if (((n = ye.get(o, e)), void 0 !== n)) return n;
                    if (((n = ye.get(o, r)), void 0 !== n)) return n;
                    if (((n = c(o, r, void 0)), void 0 !== n)) return n;
                  } else
                    this.each(function () {
                      const n = ye.get(this, r);
                      ye.set(this, r, t),
                        e.indexOf('-') !== -1 &&
                          void 0 !== n &&
                          ye.set(this, e, t);
                    });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0,
              );
        },
        removeData: function (e) {
          return this.each(function () {
            ye.remove(this, e);
          });
        },
      }),
      G.extend({
        queue: function (e, t, n) {
          let r;
          return e
            ? ((t = `${t || 'fx'}queue`),
              (r = ve.get(e, t)),
              n &&
                (!r || G.isArray(n)
                  ? (r = ve.access(e, t, G.makeArray(n)))
                  : r.push(n)),
              r || [])
            : void 0;
        },
        dequeue: function (e, t) {
          t = t || 'fx';
          const n = G.queue(e, t);
          let r = n.length;
          let i = n.shift();
          const o = G._queueHooks(e, t);
          const s = function () {
            G.dequeue(e, t);
          };
          i === 'inprogress' && ((i = n.shift()), r--),
            i &&
              (t === 'fx' && n.unshift('inprogress'),
              delete o.stop,
              i.call(e, s, o)),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          const n = `${t}queueHooks`;
          return (
            ve.get(e, n) ||
            ve.access(e, n, {
              empty: G.Callbacks('once memory').add(() => {
                ve.remove(e, [`${t}queue`, n]);
              }),
            })
          );
        },
      }),
      G.fn.extend({
        queue: function (e, t) {
          let n = 2;
          return (
            typeof e !== 'string' && ((t = e), (e = 'fx'), n--),
            arguments.length < n
              ? G.queue(this[0], e)
              : void 0 === t
              ? this
              : this.each(function () {
                  const n = G.queue(this, e, t);
                  G._queueHooks(this, e),
                    e === 'fx' && n[0] !== 'inprogress' && G.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            G.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || 'fx', []);
        },
        promise: function (e, t) {
          let n;
          let r = 1;
          const i = G.Deferred();
          const o = this;
          let s = this.length;
          const a = function () {
            --r || i.resolveWith(o, [o]);
          };
          for (
            typeof e !== 'string' && ((t = e), (e = void 0)), e = e || 'fx';
            s--;

          )
            (n = ve.get(o[s], `${e}queueHooks`)),
              n && n.empty && (r++, n.empty.add(a));
          return a(), i.promise(t);
        },
      });
    const xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var _e = ['Top', 'Right', 'Bottom', 'Left'];
    var ke = function (e, t) {
      return (
        (e = t || e),
        G.css(e, 'display') === 'none' || !G.contains(e.ownerDocument, e)
      );
    };
    var Ce = /^(?:checkbox|radio)$/i;
    !(function () {
      const e = Y.createDocumentFragment();
      const t = e.appendChild(Y.createElement('div'));
      const n = Y.createElement('input');
      n.setAttribute('type', 'radio'),
        n.setAttribute('checked', 'checked'),
        n.setAttribute('name', 't'),
        t.appendChild(n),
        (Z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (t.innerHTML = '<textarea>x</textarea>'),
        (Z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
    })();
    const Ne = 'undefined';
    Z.focusinBubbles = 'onfocusin' in e;
    const Ee = /^key/;
    const Se = /^(?:mouse|pointer|contextmenu)|click/;
    const Te = /^(?:focusinfocus|focusoutblur)$/;
    const Ae = /^([^.]*)(?:\.(.+)|)$/;
    (G.event = {
      global: {},
      add: function (e, t, n, r, i) {
        let o;
        let s;
        let a;
        let c;
        let l;
        let u;
        let d;
        let f;
        let p;
        let h;
        let g;
        const m = ve.get(e);
        if (m)
          for (
            n.handler && ((o = n), (n = o.handler), (i = o.selector)),
              n.guid || (n.guid = G.guid++),
              (c = m.events) || (c = m.events = {}),
              (s = m.handle) ||
                (s = m.handle =
                  function (t) {
                    return typeof G !== Ne && G.event.triggered !== t.type
                      ? G.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              t = (t || '').match(pe) || [''],
              l = t.length;
            l--;

          )
            (a = Ae.exec(t[l]) || []),
              (p = g = a[1]),
              (h = (a[2] || '').split('.').sort()),
              p &&
                ((d = G.event.special[p] || {}),
                (p = (i ? d.delegateType : d.bindType) || p),
                (d = G.event.special[p] || {}),
                (u = G.extend(
                  {
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && G.expr.match.needsContext.test(i),
                    namespace: h.join('.'),
                  },
                  o,
                )),
                (f = c[p]) ||
                  ((f = c[p] = []),
                  (f.delegateCount = 0),
                  (d.setup && d.setup.call(e, r, h, s) !== !1) ||
                    (e.addEventListener && e.addEventListener(p, s, !1))),
                d.add &&
                  (d.add.call(e, u),
                  u.handler.guid || (u.handler.guid = n.guid)),
                i ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                (G.event.global[p] = !0));
      },
      remove: function (e, t, n, r, i) {
        let o;
        let s;
        let a;
        let c;
        let l;
        let u;
        let d;
        let f;
        let p;
        let h;
        let g;
        const m = ve.hasData(e) && ve.get(e);
        if (m && (c = m.events)) {
          for (t = (t || '').match(pe) || [''], l = t.length; l--; )
            if (
              ((a = Ae.exec(t[l]) || []),
              (p = g = a[1]),
              (h = (a[2] || '').split('.').sort()),
              p)
            ) {
              for (
                d = G.event.special[p] || {},
                  p = (r ? d.delegateType : d.bindType) || p,
                  f = c[p] || [],
                  a =
                    a[2] &&
                    new RegExp(`(^|\\.)${h.join('\\.(?:.*\\.|)')}(\\.|$)`),
                  s = o = f.length;
                o--;

              )
                (u = f[o]),
                  (!i && g !== u.origType) ||
                    (n && n.guid !== u.guid) ||
                    (a && !a.test(u.namespace)) ||
                    (r && r !== u.selector && (r !== '**' || !u.selector)) ||
                    (f.splice(o, 1),
                    u.selector && f.delegateCount--,
                    d.remove && d.remove.call(e, u));
              s &&
                !f.length &&
                ((d.teardown && d.teardown.call(e, h, m.handle) !== !1) ||
                  G.removeEvent(e, p, m.handle),
                delete c[p]);
            } else for (p in c) G.event.remove(e, p + t[l], n, r, !0);
          G.isEmptyObject(c) && (delete m.handle, ve.remove(e, 'events'));
        }
      },
      trigger: function (t, n, r, i) {
        let o;
        let s;
        let a;
        let c;
        let l;
        let u;
        let d;
        const f = [r || Y];
        let p = K.call(t, 'type') ? t.type : t;
        let h = K.call(t, 'namespace') ? t.namespace.split('.') : [];
        if (
          ((s = a = r = r || Y),
          r.nodeType !== 3 &&
            r.nodeType !== 8 &&
            !Te.test(p + G.event.triggered) &&
            (p.indexOf('.') >= 0 &&
              ((h = p.split('.')), (p = h.shift()), h.sort()),
            (l = p.indexOf(':') < 0 && `on${p}`),
            (t = t[G.expando] ? t : new G.Event(p, typeof t === 'object' && t)),
            (t.isTrigger = i ? 2 : 3),
            (t.namespace = h.join('.')),
            (t.namespace_re = t.namespace
              ? new RegExp(`(^|\\.)${h.join('\\.(?:.*\\.|)')}(\\.|$)`)
              : null),
            (t.result = void 0),
            t.target || (t.target = r),
            (n = n == null ? [t] : G.makeArray(n, [t])),
            (d = G.event.special[p] || {}),
            i || !d.trigger || d.trigger.apply(r, n) !== !1))
        ) {
          if (!i && !d.noBubble && !G.isWindow(r)) {
            for (
              c = d.delegateType || p, Te.test(c + p) || (s = s.parentNode);
              s;
              s = s.parentNode
            )
              f.push(s), (a = s);
            a === (r.ownerDocument || Y) &&
              f.push(a.defaultView || a.parentWindow || e);
          }
          for (o = 0; (s = f[o++]) && !t.isPropagationStopped(); )
            (t.type = o > 1 ? c : d.bindType || p),
              (u = (ve.get(s, 'events') || {})[t.type] && ve.get(s, 'handle')),
              u && u.apply(s, n),
              (u = l && s[l]),
              u &&
                u.apply &&
                G.acceptData(s) &&
                ((t.result = u.apply(s, n)),
                t.result === !1 && t.preventDefault());
          return (
            (t.type = p),
            i ||
              t.isDefaultPrevented() ||
              (d._default && d._default.apply(f.pop(), n) !== !1) ||
              !G.acceptData(r) ||
              (l &&
                G.isFunction(r[p]) &&
                !G.isWindow(r) &&
                ((a = r[l]),
                a && (r[l] = null),
                (G.event.triggered = p),
                r[p](),
                (G.event.triggered = void 0),
                a && (r[l] = a))),
            t.result
          );
        }
      },
      dispatch: function (e) {
        e = G.event.fix(e);
        let t;
        let n;
        let r;
        let i;
        let o;
        let s = [];
        const a = z.call(arguments);
        const c = (ve.get(this, 'events') || {})[e.type] || [];
        const l = G.event.special[e.type] || {};
        if (
          ((a[0] = e),
          (e.delegateTarget = this),
          !l.preDispatch || l.preDispatch.call(this, e) !== !1)
        ) {
          for (
            s = G.event.handlers.call(this, e, c), t = 0;
            (i = s[t++]) && !e.isPropagationStopped();

          )
            for (
              e.currentTarget = i.elem, n = 0;
              (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();

            )
              (!e.namespace_re || e.namespace_re.test(o.namespace)) &&
                ((e.handleObj = o),
                (e.data = o.data),
                (r = (
                  (G.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, a)),
                void 0 !== r &&
                  (e.result = r) === !1 &&
                  (e.preventDefault(), e.stopPropagation()));
          return l.postDispatch && l.postDispatch.call(this, e), e.result;
        }
      },
      handlers: function (e, t) {
        let n;
        let r;
        let i;
        let o;
        const s = [];
        const a = t.delegateCount;
        let c = e.target;
        if (a && c.nodeType && (!e.button || e.type !== 'click'))
          for (; c !== this; c = c.parentNode || this)
            if (c.disabled !== !0 || e.type !== 'click') {
              for (r = [], n = 0; a > n; n++)
                (o = t[n]),
                  (i = `${o.selector} `),
                  void 0 === r[i] &&
                    (r[i] = o.needsContext
                      ? G(i, this).index(c) >= 0
                      : G.find(i, this, null, [c]).length),
                  r[i] && r.push(o);
              r.length && s.push({ elem: c, handlers: r });
            }
        return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
      },
      props:
        'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
          ' ',
        ),
      fixHooks: {},
      keyHooks: {
        props: 'char charCode key keyCode'.split(' '),
        filter: function (e, t) {
          return (
            e.which == null &&
              (e.which = t.charCode != null ? t.charCode : t.keyCode),
            e
          );
        },
      },
      mouseHooks: {
        props:
          'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(
            ' ',
          ),
        filter: function (e, t) {
          let n;
          let r;
          let i;
          const o = t.button;
          return (
            e.pageX == null &&
              t.clientX != null &&
              ((n = e.target.ownerDocument || Y),
              (r = n.documentElement),
              (i = n.body),
              (e.pageX =
                t.clientX +
                ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
                ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
              (e.pageY =
                t.clientY +
                ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
                ((r && r.clientTop) || (i && i.clientTop) || 0))),
            e.which ||
              void 0 === o ||
              (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
            e
          );
        },
      },
      fix: function (e) {
        if (e[G.expando]) return e;
        let t;
        let n;
        let r;
        const i = e.type;
        const o = e;
        let s = this.fixHooks[i];
        for (
          s ||
            (this.fixHooks[i] = s =
              Se.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            e = new G.Event(o),
            t = r.length;
          t--;

        )
          (n = r[t]), (e[n] = o[n]);
        return (
          e.target || (e.target = Y),
          e.target.nodeType === 3 && (e.target = e.target.parentNode),
          s.filter ? s.filter(e, o) : e
        );
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            return this !== d() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: 'focusin',
        },
        blur: {
          trigger: function () {
            return this === d() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: 'focusout',
        },
        click: {
          trigger: function () {
            return this.type === 'checkbox' &&
              this.click &&
              G.nodeName(this, 'input')
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (e) {
            return G.nodeName(e.target, 'a');
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
      simulate: function (e, t, n, r) {
        const i = G.extend(new G.Event(), n, {
          type: e,
          isSimulated: !0,
          originalEvent: {},
        });
        r ? G.event.trigger(i, null, t) : G.event.dispatch.call(t, i),
          i.isDefaultPrevented() && n.preventDefault();
      },
    }),
      (G.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
      }),
      (G.Event = function (e, t) {
        return this instanceof G.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && e.returnValue === !1)
                    ? l
                    : u))
              : (this.type = e),
            t && G.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || G.now()),
            void (this[G.expando] = !0))
          : new G.Event(e, t);
      }),
      (G.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
          const e = this.originalEvent;
          (this.isDefaultPrevented = l),
            e && e.preventDefault && e.preventDefault();
        },
        stopPropagation: function () {
          const e = this.originalEvent;
          (this.isPropagationStopped = l),
            e && e.stopPropagation && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          const e = this.originalEvent;
          (this.isImmediatePropagationStopped = l),
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      G.each(
        {
          mouseenter: 'mouseover',
          mouseleave: 'mouseout',
          pointerenter: 'pointerover',
          pointerleave: 'pointerout',
        },
        (e, t) => {
          G.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              let n;
              const r = this;
              const i = e.relatedTarget;
              const o = e.handleObj;
              return (
                (!i || (i !== r && !G.contains(r, i))) &&
                  ((e.type = o.origType),
                  (n = o.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        },
      ),
      Z.focusinBubbles ||
        G.each({ focus: 'focusin', blur: 'focusout' }, (e, t) => {
          const n = function (e) {
            G.event.simulate(t, e.target, G.event.fix(e), !0);
          };
          G.event.special[t] = {
            setup: function () {
              const r = this.ownerDocument || this;
              const i = ve.access(r, t);
              i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1);
            },
            teardown: function () {
              const r = this.ownerDocument || this;
              const i = ve.access(r, t) - 1;
              i
                ? ve.access(r, t, i)
                : (r.removeEventListener(e, n, !0), ve.remove(r, t));
            },
          };
        }),
      G.fn.extend({
        on: function (e, t, n, r, i) {
          let o;
          let s;
          if (typeof e === 'object') {
            typeof t !== 'string' && ((n = n || t), (t = void 0));
            for (s in e) this.on(s, t, n, e[s], i);
            return this;
          }
          if (
            (n == null && r == null
              ? ((r = t), (n = t = void 0))
              : r == null &&
                (typeof t === 'string'
                  ? ((r = n), (n = void 0))
                  : ((r = n), (n = t), (t = void 0))),
            r === !1)
          )
            r = u;
          else if (!r) return this;
          return (
            i === 1 &&
              ((o = r),
              (r = function (e) {
                return G().off(e), o.apply(this, arguments);
              }),
              (r.guid = o.guid || (o.guid = G.guid++))),
            this.each(function () {
              G.event.add(this, e, r, n, t);
            })
          );
        },
        one: function (e, t, n, r) {
          return this.on(e, t, n, r, 1);
        },
        off: function (e, t, n) {
          let r;
          let i;
          if (e && e.preventDefault && e.handleObj)
            return (
              (r = e.handleObj),
              G(e.delegateTarget).off(
                r.namespace ? `${r.origType}.${r.namespace}` : r.origType,
                r.selector,
                r.handler,
              ),
              this
            );
          if (typeof e === 'object') {
            for (i in e) this.off(i, t, e[i]);
            return this;
          }
          return (
            (t === !1 || typeof t === 'function') && ((n = t), (t = void 0)),
            n === !1 && (n = u),
            this.each(function () {
              G.event.remove(this, e, n, t);
            })
          );
        },
        trigger: function (e, t) {
          return this.each(function () {
            G.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          const n = this[0];
          return n ? G.event.trigger(e, t, n, !0) : void 0;
        },
      });
    const Le =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
    const je = /<([\w:]+)/;
    const Me = /<|&#?\w+;/;
    const qe = /<(?:script|style|link)/i;
    const $e = /checked\s*(?:[^=]|=\s*.checked.)/i;
    const Oe = /^$|\/(?:java|ecma)script/i;
    var Re = /^true\/(.*)/;
    const De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    const Be = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    };
    (Be.optgroup = Be.option),
      (Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead),
      (Be.th = Be.td),
      G.extend({
        clone: function (e, t, n) {
          let r;
          let i;
          let o;
          let s;
          const a = e.cloneNode(!0);
          const c = G.contains(e.ownerDocument, e);
          if (
            !(
              Z.noCloneChecked ||
              (e.nodeType !== 1 && e.nodeType !== 11) ||
              G.isXMLDoc(e)
            )
          )
            for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++)
              y(o[r], s[r]);
          if (t)
            if (n)
              for (
                o = o || v(e), s = s || v(a), r = 0, i = o.length;
                i > r;
                r++
              )
                m(o[r], s[r]);
            else m(e, a);
          return (
            (s = v(a, 'script')), s.length > 0 && g(s, !c && v(e, 'script')), a
          );
        },
        buildFragment: function (e, t, n, r) {
          for (
            var i,
              o,
              s,
              a,
              c,
              l,
              u = t.createDocumentFragment(),
              d = [],
              f = 0,
              p = e.length;
            p > f;
            f++
          )
            if (((i = e[f]), i || i === 0))
              if (G.type(i) === 'object') G.merge(d, i.nodeType ? [i] : i);
              else if (Me.test(i)) {
                for (
                  o = o || u.appendChild(t.createElement('div')),
                    s = (je.exec(i) || ['', ''])[1].toLowerCase(),
                    a = Be[s] || Be._default,
                    o.innerHTML = a[1] + i.replace(Le, '<$1></$2>') + a[2],
                    l = a[0];
                  l--;

                )
                  o = o.lastChild;
                G.merge(d, o.childNodes),
                  (o = u.firstChild),
                  (o.textContent = '');
              } else d.push(t.createTextNode(i));
          for (u.textContent = '', f = 0; (i = d[f++]); )
            if (
              (!r || G.inArray(i, r) === -1) &&
              ((c = G.contains(i.ownerDocument, i)),
              (o = v(u.appendChild(i), 'script')),
              c && g(o),
              n)
            )
              for (l = 0; (i = o[l++]); ) Oe.test(i.type || '') && n.push(i);
          return u;
        },
        cleanData: function (e) {
          for (
            var t, n, r, i, o = G.event.special, s = 0;
            void 0 !== (n = e[s]);
            s++
          ) {
            if (
              G.acceptData(n) &&
              ((i = n[ve.expando]), i && (t = ve.cache[i]))
            ) {
              if (t.events)
                for (r in t.events)
                  o[r] ? G.event.remove(n, r) : G.removeEvent(n, r, t.handle);
              ve.cache[i] && delete ve.cache[i];
            }
            delete ye.cache[n[ye.expando]];
          }
        },
      }),
      G.fn.extend({
        text: function (e) {
          return me(
            this,
            function (e) {
              return void 0 === e
                ? G.text(this)
                : this.empty().each(function () {
                    (this.nodeType === 1 ||
                      this.nodeType === 11 ||
                      this.nodeType === 9) &&
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length,
          );
        },
        append: function () {
          return this.domManip(arguments, function (e) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              const t = f(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (e) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              const t = f(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        remove: function (e, t) {
          for (
            var n, r = e ? G.filter(e, this) : this, i = 0;
            (n = r[i]) != null;
            i++
          )
            t || n.nodeType !== 1 || G.cleanData(v(n)),
              n.parentNode &&
                (t && G.contains(n.ownerDocument, n) && g(v(n, 'script')),
                n.parentNode.removeChild(n));
          return this;
        },
        empty: function () {
          for (var e, t = 0; (e = this[t]) != null; t++)
            e.nodeType === 1 && (G.cleanData(v(e, !1)), (e.textContent = ''));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = e == null ? !1 : e),
            (t = t == null ? e : t),
            this.map(function () {
              return G.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return me(
            this,
            function (e) {
              let t = this[0] || {};
              let n = 0;
              const r = this.length;
              if (void 0 === e && t.nodeType === 1) return t.innerHTML;
              if (
                typeof e === 'string' &&
                !qe.test(e) &&
                !Be[(je.exec(e) || ['', ''])[1].toLowerCase()]
              ) {
                e = e.replace(Le, '<$1></$2>');
                try {
                  for (; r > n; n++)
                    (t = this[n] || {}),
                      t.nodeType === 1 &&
                        (G.cleanData(v(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (i) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length,
          );
        },
        replaceWith: function () {
          let e = arguments[0];
          return (
            this.domManip(arguments, function (t) {
              (e = this.parentNode),
                G.cleanData(v(this)),
                e && e.replaceChild(t, this);
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
          );
        },
        detach: function (e) {
          return this.remove(e, !0);
        },
        domManip: function (e, t) {
          e = W.apply([], e);
          let n;
          let r;
          let i;
          let o;
          let s;
          let a;
          let c = 0;
          const l = this.length;
          const u = this;
          const d = l - 1;
          const f = e[0];
          const g = G.isFunction(f);
          if (
            g ||
            (l > 1 && typeof f === 'string' && !Z.checkClone && $e.test(f))
          )
            return this.each(function (n) {
              const r = u.eq(n);
              g && (e[0] = f.call(this, n, r.html())), r.domManip(e, t);
            });
          if (
            l &&
            ((n = G.buildFragment(e, this[0].ownerDocument, !1, this)),
            (r = n.firstChild),
            n.childNodes.length === 1 && (n = r),
            r)
          ) {
            for (i = G.map(v(n, 'script'), p), o = i.length; l > c; c++)
              (s = n),
                c !== d &&
                  ((s = G.clone(s, !0, !0)), o && G.merge(i, v(s, 'script'))),
                t.call(this[c], s, c);
            if (o)
              for (
                a = i[i.length - 1].ownerDocument, G.map(i, h), c = 0;
                o > c;
                c++
              )
                (s = i[c]),
                  Oe.test(s.type || '') &&
                    !ve.access(s, 'globalEval') &&
                    G.contains(a, s) &&
                    (s.src
                      ? G._evalUrl && G._evalUrl(s.src)
                      : G.globalEval(s.textContent.replace(De, '')));
          }
          return this;
        },
      }),
      G.each(
        {
          appendTo: 'append',
          prependTo: 'prepend',
          insertBefore: 'before',
          insertAfter: 'after',
          replaceAll: 'replaceWith',
        },
        (e, t) => {
          G.fn[e] = function (e) {
            for (var n, r = [], i = G(e), o = i.length - 1, s = 0; o >= s; s++)
              (n = s === o ? this : this.clone(!0)),
                G(i[s])[t](n),
                U.apply(r, n.get());
            return this.pushStack(r);
          };
        },
      );
    let Ie;
    var He = {};
    var Fe = /^margin/;
    var Pe = new RegExp(`^(${xe})(?!px)[a-z%]+$`, 'i');
    var ze = function (t) {
      return t.ownerDocument.defaultView.opener
        ? t.ownerDocument.defaultView.getComputedStyle(t, null)
        : e.getComputedStyle(t, null);
    };
    !(function () {
      function t() {
        (s.style.cssText =
          '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute'),
          (s.innerHTML = ''),
          i.appendChild(o);
        const t = e.getComputedStyle(s, null);
        (n = t.top !== '1%'), (r = t.width === '4px'), i.removeChild(o);
      }
      let n;
      let r;
      var i = Y.documentElement;
      var o = Y.createElement('div');
      var s = Y.createElement('div');
      s.style &&
        ((s.style.backgroundClip = 'content-box'),
        (s.cloneNode(!0).style.backgroundClip = ''),
        (Z.clearCloneStyle = s.style.backgroundClip === 'content-box'),
        (o.style.cssText =
          'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute'),
        o.appendChild(s),
        e.getComputedStyle &&
          G.extend(Z, {
            pixelPosition: function () {
              return t(), n;
            },
            boxSizingReliable: function () {
              return r == null && t(), r;
            },
            reliableMarginRight: function () {
              let t;
              const n = s.appendChild(Y.createElement('div'));
              return (
                (n.style.cssText = s.style.cssText =
                  '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
                (n.style.marginRight = n.style.width = '0'),
                (s.style.width = '1px'),
                i.appendChild(o),
                (t = !parseFloat(e.getComputedStyle(n, null).marginRight)),
                i.removeChild(o),
                s.removeChild(n),
                t
              );
            },
          }));
    })(),
      (G.swap = function (e, t, n, r) {
        let i;
        let o;
        const s = {};
        for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i;
      });
    const We = /^(none|table(?!-c[ea]).+)/;
    var Ue = new RegExp(`^(${xe})(.*)$`, 'i');
    const Qe = new RegExp(`^([+-])=(${xe})`, 'i');
    const Ve = { position: 'absolute', visibility: 'hidden', display: 'block' };
    const Xe = { letterSpacing: '0', fontWeight: '400' };
    var Ke = ['Webkit', 'O', 'Moz', 'ms'];
    G.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              const n = x(e, 'opacity');
              return n === '' ? '1' : n;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: 'cssFloat' },
      style: function (e, t, n, r) {
        if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
          let i;
          let o;
          let s;
          const a = G.camelCase(t);
          const c = e.style;
          return (
            (t = G.cssProps[a] || (G.cssProps[a] = k(c, a))),
            (s = G.cssHooks[t] || G.cssHooks[a]),
            void 0 === n
              ? s && 'get' in s && void 0 !== (i = s.get(e, !1, r))
                ? i
                : c[t]
              : ((o = typeof n),
                o === 'string' &&
                  (i = Qe.exec(n)) &&
                  ((n = (i[1] + 1) * i[2] + parseFloat(G.css(e, t))),
                  (o = 'number')),
                void (
                  n != null &&
                  n === n &&
                  (o !== 'number' || G.cssNumber[a] || (n += 'px'),
                  Z.clearCloneStyle ||
                    n !== '' ||
                    t.indexOf('background') !== 0 ||
                    (c[t] = 'inherit'),
                  (s && 'set' in s && void 0 === (n = s.set(e, n, r))) ||
                    (c[t] = n))
                ))
          );
        }
      },
      css: function (e, t, n, r) {
        let i;
        let o;
        let s;
        const a = G.camelCase(t);
        return (
          (t = G.cssProps[a] || (G.cssProps[a] = k(e.style, a))),
          (s = G.cssHooks[t] || G.cssHooks[a]),
          s && 'get' in s && (i = s.get(e, !0, n)),
          void 0 === i && (i = x(e, t, r)),
          i === 'normal' && t in Xe && (i = Xe[t]),
          n === '' || n
            ? ((o = parseFloat(i)), n === !0 || G.isNumeric(o) ? o || 0 : i)
            : i
        );
      },
    }),
      G.each(['height', 'width'], (e, t) => {
        G.cssHooks[t] = {
          get: function (e, n, r) {
            return n
              ? We.test(G.css(e, 'display')) && e.offsetWidth === 0
                ? G.swap(e, Ve, () => E(e, t, r))
                : E(e, t, r)
              : void 0;
          },
          set: function (e, n, r) {
            const i = r && ze(e);
            return C(
              e,
              n,
              r
                ? N(e, t, r, G.css(e, 'boxSizing', !1, i) === 'border-box', i)
                : 0,
            );
          },
        };
      }),
      (G.cssHooks.marginRight = _(Z.reliableMarginRight, (e, t) =>
        t
          ? G.swap(e, { display: 'inline-block' }, x, [e, 'marginRight'])
          : void 0,
      )),
      G.each({ margin: '', padding: '', border: 'Width' }, (e, t) => {
        (G.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var r = 0, i = {}, o = typeof n === 'string' ? n.split(' ') : [n];
              r < 4;
              r++
            )
              i[e + _e[r] + t] = o[r] || o[r - 2] || o[0];
            return i;
          },
        }),
          Fe.test(e) || (G.cssHooks[e + t].set = C);
      }),
      G.fn.extend({
        css: function (e, t) {
          return me(
            this,
            (e, t, n) => {
              let r;
              let i;
              const o = {};
              let s = 0;
              if (G.isArray(t)) {
                for (r = ze(e), i = t.length; i > s; s++)
                  o[t[s]] = G.css(e, t[s], !1, r);
                return o;
              }
              return void 0 !== n ? G.style(e, t, n) : G.css(e, t);
            },
            e,
            t,
            arguments.length > 1,
          );
        },
        show: function () {
          return S(this, !0);
        },
        hide: function () {
          return S(this);
        },
        toggle: function (e) {
          return typeof e === 'boolean'
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ke(this) ? G(this).show() : G(this).hide();
              });
        },
      }),
      (G.Tween = T),
      (T.prototype = {
        constructor: T,
        init: function (e, t, n, r, i, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = i || 'swing'),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (G.cssNumber[n] ? '' : 'px'));
        },
        cur: function () {
          const e = T.propHooks[this.prop];
          return e && e.get ? e.get(this) : T.propHooks._default.get(this);
        },
        run: function (e) {
          let t;
          const n = T.propHooks[this.prop];
          return (
            (this.pos = t =
              this.options.duration
                ? G.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration,
                  )
                : e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : T.propHooks._default.set(this),
            this
          );
        },
      }),
      (T.prototype.init.prototype = T.prototype),
      (T.propHooks = {
        _default: {
          get: function (e) {
            let t;
            return e.elem[e.prop] == null ||
              (e.elem.style && e.elem.style[e.prop] != null)
              ? ((t = G.css(e.elem, e.prop, '')), t && t !== 'auto' ? t : 0)
              : e.elem[e.prop];
          },
          set: function (e) {
            G.fx.step[e.prop]
              ? G.fx.step[e.prop](e)
              : e.elem.style &&
                (e.elem.style[G.cssProps[e.prop]] != null || G.cssHooks[e.prop])
              ? G.style(e.elem, e.prop, e.now + e.unit)
              : (e.elem[e.prop] = e.now);
          },
        },
      }),
      (T.propHooks.scrollTop = T.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (G.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
      }),
      (G.fx = T.prototype.init),
      (G.fx.step = {});
    let Ze;
    let Ye;
    var Je = /^(?:toggle|show|hide)$/;
    const Ge = new RegExp(`^(?:([+-])=|)(${xe})([a-z%]*)$`, 'i');
    const et = /queueHooks$/;
    var tt = [M];
    var nt = {
      '*': [
        function (e, t) {
          const n = this.createTween(e, t);
          const r = n.cur();
          let i = Ge.exec(t);
          let o = (i && i[3]) || (G.cssNumber[e] ? '' : 'px');
          let s =
            (G.cssNumber[e] || (o !== 'px' && +r)) && Ge.exec(G.css(n.elem, e));
          let a = 1;
          let c = 20;
          if (s && s[3] !== o) {
            (o = o || s[3]), (i = i || []), (s = +r || 1);
            do (a = a || '.5'), (s /= a), G.style(n.elem, e, s + o);
            while (a !== (a = n.cur() / r) && a !== 1 && --c);
          }
          return (
            i &&
              ((s = n.start = +s || +r || 0),
              (n.unit = o),
              (n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2])),
            n
          );
        },
      ],
    };
    (G.Animation = G.extend($, {
      tweener: function (e, t) {
        G.isFunction(e) ? ((t = e), (e = ['*'])) : (e = e.split(' '));
        for (var n, r = 0, i = e.length; i > r; r++)
          (n = e[r]), (nt[n] = nt[n] || []), nt[n].unshift(t);
      },
      prefilter: function (e, t) {
        t ? tt.unshift(e) : tt.push(e);
      },
    })),
      (G.speed = function (e, t, n) {
        const r =
          e && typeof e === 'object'
            ? G.extend({}, e)
            : {
                complete: n || (!n && t) || (G.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !G.isFunction(t) && t),
              };
        return (
          (r.duration = G.fx.off
            ? 0
            : typeof r.duration === 'number'
            ? r.duration
            : r.duration in G.fx.speeds
            ? G.fx.speeds[r.duration]
            : G.fx.speeds._default),
          (r.queue == null || r.queue === !0) && (r.queue = 'fx'),
          (r.old = r.complete),
          (r.complete = function () {
            G.isFunction(r.old) && r.old.call(this),
              r.queue && G.dequeue(this, r.queue);
          }),
          r
        );
      }),
      G.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(ke)
            .css('opacity', 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
          const i = G.isEmptyObject(e);
          const o = G.speed(t, n, r);
          const s = function () {
            const t = $(this, G.extend({}, e), o);
            (i || ve.get(this, 'finish')) && t.stop(!0);
          };
          return (
            (s.finish = s),
            i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
          );
        },
        stop: function (e, t, n) {
          const r = function (e) {
            const t = e.stop;
            delete e.stop, t(n);
          };
          return (
            typeof e !== 'string' && ((n = t), (t = e), (e = void 0)),
            t && e !== !1 && this.queue(e || 'fx', []),
            this.each(function () {
              let t = !0;
              let i = e != null && `${e}queueHooks`;
              const o = G.timers;
              const s = ve.get(this);
              if (i) s[i] && s[i].stop && r(s[i]);
              else for (i in s) s[i] && s[i].stop && et.test(i) && r(s[i]);
              for (i = o.length; i--; )
                o[i].elem !== this ||
                  (e != null && o[i].queue !== e) ||
                  (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
              (t || !n) && G.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            e !== !1 && (e = e || 'fx'),
            this.each(function () {
              let t;
              const n = ve.get(this);
              const r = n[`${e}queue`];
              const i = n[`${e}queueHooks`];
              const o = G.timers;
              const s = r ? r.length : 0;
              for (
                n.finish = !0,
                  G.queue(this, e, []),
                  i && i.stop && i.stop.call(this, !0),
                  t = o.length;
                t--;

              )
                o[t].elem === this &&
                  o[t].queue === e &&
                  (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; s > t; t++)
                r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      G.each(['toggle', 'show', 'hide'], (e, t) => {
        const n = G.fn[t];
        G.fn[t] = function (e, r, i) {
          return e == null || typeof e === 'boolean'
            ? n.apply(this, arguments)
            : this.animate(L(t, !0), e, r, i);
        };
      }),
      G.each(
        {
          slideDown: L('show'),
          slideUp: L('hide'),
          slideToggle: L('toggle'),
          fadeIn: { opacity: 'show' },
          fadeOut: { opacity: 'hide' },
          fadeToggle: { opacity: 'toggle' },
        },
        (e, t) => {
          G.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r);
          };
        },
      ),
      (G.timers = []),
      (G.fx.tick = function () {
        let e;
        let t = 0;
        const n = G.timers;
        for (Ze = G.now(); t < n.length; t++)
          (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
        n.length || G.fx.stop(), (Ze = void 0);
      }),
      (G.fx.timer = function (e) {
        G.timers.push(e), e() ? G.fx.start() : G.timers.pop();
      }),
      (G.fx.interval = 13),
      (G.fx.start = function () {
        Ye || (Ye = setInterval(G.fx.tick, G.fx.interval));
      }),
      (G.fx.stop = function () {
        clearInterval(Ye), (Ye = null);
      }),
      (G.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (G.fn.delay = function (e, t) {
        return (
          (e = G.fx ? G.fx.speeds[e] || e : e),
          (t = t || 'fx'),
          this.queue(t, (t, n) => {
            const r = setTimeout(t, e);
            n.stop = function () {
              clearTimeout(r);
            };
          })
        );
      }),
      (function () {
        let e = Y.createElement('input');
        const t = Y.createElement('select');
        const n = t.appendChild(Y.createElement('option'));
        (e.type = 'checkbox'),
          (Z.checkOn = e.value !== ''),
          (Z.optSelected = n.selected),
          (t.disabled = !0),
          (Z.optDisabled = !n.disabled),
          (e = Y.createElement('input')),
          (e.value = 't'),
          (e.type = 'radio'),
          (Z.radioValue = e.value === 't');
      })();
    let rt;
    let it;
    const ot = G.expr.attrHandle;
    G.fn.extend({
      attr: function (e, t) {
        return me(this, G.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          G.removeAttr(this, e);
        });
      },
    }),
      G.extend({
        attr: function (e, t, n) {
          let r;
          let i;
          const o = e.nodeType;
          return e && o !== 3 && o !== 8 && o !== 2
            ? typeof e.getAttribute === Ne
              ? G.prop(e, t, n)
              : ((o === 1 && G.isXMLDoc(e)) ||
                  ((t = t.toLowerCase()),
                  (r =
                    G.attrHooks[t] || (G.expr.match.bool.test(t) ? it : rt))),
                void 0 === n
                  ? r && 'get' in r && (i = r.get(e, t)) !== null
                    ? i
                    : ((i = G.find.attr(e, t)), i == null ? void 0 : i)
                  : n !== null
                  ? r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, `${n}`), n)
                  : void G.removeAttr(e, t))
            : void 0;
        },
        removeAttr: function (e, t) {
          let n;
          let r;
          let i = 0;
          const o = t && t.match(pe);
          if (o && e.nodeType === 1)
            for (; (n = o[i++]); )
              (r = G.propFix[n] || n),
                G.expr.match.bool.test(n) && (e[r] = !1),
                e.removeAttribute(n);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!Z.radioValue && t === 'radio' && G.nodeName(e, 'input')) {
                const n = e.value;
                return e.setAttribute('type', t), n && (e.value = n), t;
              }
            },
          },
        },
      }),
      (it = {
        set: function (e, t, n) {
          return t === !1 ? G.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      G.each(G.expr.match.bool.source.match(/\w+/g), (e, t) => {
        const n = ot[t] || G.find.attr;
        ot[t] = function (e, t, r) {
          let i;
          let o;
          return (
            r ||
              ((o = ot[t]),
              (ot[t] = i),
              (i = n(e, t, r) != null ? t.toLowerCase() : null),
              (ot[t] = o)),
            i
          );
        };
      });
    const st = /^(?:input|select|textarea|button)$/i;
    G.fn.extend({
      prop: function (e, t) {
        return me(this, G.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[G.propFix[e] || e];
        });
      },
    }),
      G.extend({
        propFix: { for: 'htmlFor', class: 'className' },
        prop: function (e, t, n) {
          let r;
          let i;
          let o;
          const s = e.nodeType;
          return e && s !== 3 && s !== 8 && s !== 2
            ? ((o = s !== 1 || !G.isXMLDoc(e)),
              o && ((t = G.propFix[t] || t), (i = G.propHooks[t])),
              void 0 !== n
                ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e[t] = n)
                : i && 'get' in i && (r = i.get(e, t)) !== null
                ? r
                : e[t])
            : void 0;
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              return e.hasAttribute('tabindex') || st.test(e.nodeName) || e.href
                ? e.tabIndex
                : -1;
            },
          },
        },
      }),
      Z.optSelected ||
        (G.propHooks.selected = {
          get: function (e) {
            const t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
        }),
      G.each(
        [
          'tabIndex',
          'readOnly',
          'maxLength',
          'cellSpacing',
          'cellPadding',
          'rowSpan',
          'colSpan',
          'useMap',
          'frameBorder',
          'contentEditable',
        ],
        function () {
          G.propFix[this.toLowerCase()] = this;
        },
      );
    const at = /[\t\r\n\f]/g;
    G.fn.extend({
      addClass: function (e) {
        let t;
        let n;
        let r;
        let i;
        let o;
        let s;
        const a = typeof e === 'string' && e;
        let c = 0;
        const l = this.length;
        if (G.isFunction(e))
          return this.each(function (t) {
            G(this).addClass(e.call(this, t, this.className));
          });
        if (a)
          for (t = (e || '').match(pe) || []; l > c; c++)
            if (
              ((n = this[c]),
              (r =
                n.nodeType === 1 &&
                (n.className ? ` ${n.className} `.replace(at, ' ') : ' ')))
            ) {
              for (o = 0; (i = t[o++]); )
                r.indexOf(` ${i} `) < 0 && (r += `${i} `);
              (s = G.trim(r)), n.className !== s && (n.className = s);
            }
        return this;
      },
      removeClass: function (e) {
        let t;
        let n;
        let r;
        let i;
        let o;
        let s;
        const a = arguments.length === 0 || (typeof e === 'string' && e);
        let c = 0;
        const l = this.length;
        if (G.isFunction(e))
          return this.each(function (t) {
            G(this).removeClass(e.call(this, t, this.className));
          });
        if (a)
          for (t = (e || '').match(pe) || []; l > c; c++)
            if (
              ((n = this[c]),
              (r =
                n.nodeType === 1 &&
                (n.className ? ` ${n.className} `.replace(at, ' ') : '')))
            ) {
              for (o = 0; (i = t[o++]); )
                for (; r.indexOf(` ${i} `) >= 0; ) r = r.replace(` ${i} `, ' ');
              (s = e ? G.trim(r) : ''), n.className !== s && (n.className = s);
            }
        return this;
      },
      toggleClass: function (e, t) {
        const n = typeof e;
        return typeof t === 'boolean' && n === 'string'
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : this.each(
              G.isFunction(e)
                ? function (n) {
                    G(this).toggleClass(e.call(this, n, this.className, t), t);
                  }
                : function () {
                    if (n === 'string')
                      for (
                        var t, r = 0, i = G(this), o = e.match(pe) || [];
                        (t = o[r++]);

                      )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else
                      (n === Ne || n === 'boolean') &&
                        (this.className &&
                          ve.set(this, '__className__', this.className),
                        (this.className =
                          this.className || e === !1
                            ? ''
                            : ve.get(this, '__className__') || ''));
                  },
            );
      },
      hasClass: function (e) {
        for (let t = ` ${e} `, n = 0, r = this.length; r > n; n++)
          if (
            this[n].nodeType === 1 &&
            ` ${this[n].className} `.replace(at, ' ').indexOf(t) >= 0
          )
            return !0;
        return !1;
      },
    });
    const ct = /\r/g;
    G.fn.extend({
      val: function (e) {
        let t;
        let n;
        let r;
        const i = this[0];
        return arguments.length
          ? ((r = G.isFunction(e)),
            this.each(function (n) {
              let i;
              this.nodeType === 1 &&
                ((i = r ? e.call(this, n, G(this).val()) : e),
                i == null
                  ? (i = '')
                  : typeof i === 'number'
                  ? (i += '')
                  : G.isArray(i) &&
                    (i = G.map(i, (e) => (e == null ? '' : `${e}`))),
                (t =
                  G.valHooks[this.type] ||
                  G.valHooks[this.nodeName.toLowerCase()]),
                (t && 'set' in t && void 0 !== t.set(this, i, 'value')) ||
                  (this.value = i));
            }))
          : i
          ? ((t = G.valHooks[i.type] || G.valHooks[i.nodeName.toLowerCase()]),
            t && 'get' in t && void 0 !== (n = t.get(i, 'value'))
              ? n
              : ((n = i.value),
                typeof n === 'string' ? n.replace(ct, '') : n == null ? '' : n))
          : void 0;
      },
    }),
      G.extend({
        valHooks: {
          option: {
            get: function (e) {
              const t = G.find.attr(e, 'value');
              return t != null ? t : G.trim(G.text(e));
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  n,
                  r = e.options,
                  i = e.selectedIndex,
                  o = e.type === 'select-one' || i < 0,
                  s = o ? null : [],
                  a = o ? i + 1 : r.length,
                  c = i < 0 ? a : o ? i : 0;
                a > c;
                c++
              )
                if (
                  ((n = r[c]),
                  !(
                    (!n.selected && c !== i) ||
                    (Z.optDisabled
                      ? n.disabled
                      : n.getAttribute('disabled') !== null) ||
                    (n.parentNode.disabled &&
                      G.nodeName(n.parentNode, 'optgroup'))
                  ))
                ) {
                  if (((t = G(n).val()), o)) return t;
                  s.push(t);
                }
              return s;
            },
            set: function (e, t) {
              for (
                var n, r, i = e.options, o = G.makeArray(t), s = i.length;
                s--;

              )
                (r = i[s]),
                  (r.selected = G.inArray(r.value, o) >= 0) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      G.each(['radio', 'checkbox'], function () {
        (G.valHooks[this] = {
          set: function (e, t) {
            return G.isArray(t)
              ? (e.checked = G.inArray(G(e).val(), t) >= 0)
              : void 0;
          },
        }),
          Z.checkOn ||
            (G.valHooks[this].get = function (e) {
              return e.getAttribute('value') === null ? 'on' : e.value;
            });
      }),
      G.each(
        'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
          ' ',
        ),
        (e, t) => {
          G.fn[t] = function (e, n) {
            return arguments.length > 0
              ? this.on(t, null, e, n)
              : this.trigger(t);
          };
        },
      ),
      G.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return arguments.length === 1
            ? this.off(e, '**')
            : this.off(t, e || '**', n);
        },
      });
    let lt = G.now();
    const ut = /\?/;
    (G.parseJSON = function (e) {
      return JSON.parse(`${e}`);
    }),
      (G.parseXML = function (e) {
        let t;
        let n;
        if (!e || typeof e !== 'string') return null;
        try {
          (n = new DOMParser()), (t = n.parseFromString(e, 'text/xml'));
        } catch (r) {
          t = void 0;
        }
        return (
          (!t || t.getElementsByTagName('parsererror').length) &&
            G.error(`Invalid XML: ${e}`),
          t
        );
      });
    const dt = /#.*$/;
    const ft = /([?&])_=[^&]*/;
    const pt = /^(.*?):[ \t]*([^\r\n]*)$/gm;
    const ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
    const gt = /^(?:GET|HEAD)$/;
    const mt = /^\/\//;
    const vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/;
    const yt = {};
    var bt = {};
    const wt = '*/'.concat('*');
    const xt = e.location.href;
    const _t = vt.exec(xt.toLowerCase()) || [];
    G.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: xt,
        type: 'GET',
        isLocal: ht.test(_t[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': wt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': G.parseJSON,
          'text xml': G.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? D(D(e, G.ajaxSettings), t) : D(G.ajaxSettings, e);
      },
      ajaxPrefilter: O(yt),
      ajaxTransport: O(bt),
      ajax: function (e, t) {
        function n(e, t, n, s) {
          let c;
          let u;
          let v;
          let y;
          let w;
          let _ = t;
          b !== 2 &&
            ((b = 2),
            a && clearTimeout(a),
            (r = void 0),
            (o = s || ''),
            (x.readyState = e > 0 ? 4 : 0),
            (c = (e >= 200 && e < 300) || e === 304),
            n && (y = B(d, x, n)),
            (y = I(d, y, x, c)),
            c
              ? (d.ifModified &&
                  ((w = x.getResponseHeader('Last-Modified')),
                  w && (G.lastModified[i] = w),
                  (w = x.getResponseHeader('etag')),
                  w && (G.etag[i] = w)),
                e === 204 || d.type === 'HEAD'
                  ? (_ = 'nocontent')
                  : e === 304
                  ? (_ = 'notmodified')
                  : ((_ = y.state), (u = y.data), (v = y.error), (c = !v)))
              : ((v = _), (e || !_) && ((_ = 'error'), e < 0 && (e = 0))),
            (x.status = e),
            (x.statusText = `${t || _}`),
            c ? h.resolveWith(f, [u, _, x]) : h.rejectWith(f, [x, _, v]),
            x.statusCode(m),
            (m = void 0),
            l && p.trigger(c ? 'ajaxSuccess' : 'ajaxError', [x, d, c ? u : v]),
            g.fireWith(f, [x, _]),
            l &&
              (p.trigger('ajaxComplete', [x, d]),
              --G.active || G.event.trigger('ajaxStop')));
        }
        typeof e === 'object' && ((t = e), (e = void 0)), (t = t || {});
        let r;
        let i;
        let o;
        let s;
        let a;
        let c;
        let l;
        let u;
        var d = G.ajaxSetup({}, t);
        var f = d.context || d;
        var p = d.context && (f.nodeType || f.jquery) ? G(f) : G.event;
        var h = G.Deferred();
        var g = G.Callbacks('once memory');
        var m = d.statusCode || {};
        const v = {};
        const y = {};
        var b = 0;
        let w = 'canceled';
        var x = {
          readyState: 0,
          getResponseHeader: function (e) {
            let t;
            if (b === 2) {
              if (!s)
                for (s = {}; (t = pt.exec(o)); ) s[t[1].toLowerCase()] = t[2];
              t = s[e.toLowerCase()];
            }
            return t == null ? null : t;
          },
          getAllResponseHeaders: function () {
            return b === 2 ? o : null;
          },
          setRequestHeader: function (e, t) {
            const n = e.toLowerCase();
            return b || ((e = y[n] = y[n] || e), (v[e] = t)), this;
          },
          overrideMimeType: function (e) {
            return b || (d.mimeType = e), this;
          },
          statusCode: function (e) {
            let t;
            if (e)
              if (b < 2) for (t in e) m[t] = [m[t], e[t]];
              else x.always(e[x.status]);
            return this;
          },
          abort: function (e) {
            const t = e || w;
            return r && r.abort(t), n(0, t), this;
          },
        };
        if (
          ((h.promise(x).complete = g.add),
          (x.success = x.done),
          (x.error = x.fail),
          (d.url = `${e || d.url || xt}`
            .replace(dt, '')
            .replace(mt, `${_t[1]}//`)),
          (d.type = t.method || t.type || d.method || d.type),
          (d.dataTypes = G.trim(d.dataType || '*')
            .toLowerCase()
            .match(pe) || ['']),
          d.crossDomain == null &&
            ((c = vt.exec(d.url.toLowerCase())),
            (d.crossDomain = !(
              !c ||
              (c[1] === _t[1] &&
                c[2] === _t[2] &&
                (c[3] || (c[1] === 'http:' ? '80' : '443')) ===
                  (_t[3] || (_t[1] === 'http:' ? '80' : '443')))
            ))),
          d.data &&
            d.processData &&
            typeof d.data !== 'string' &&
            (d.data = G.param(d.data, d.traditional)),
          R(yt, d, t, x),
          b === 2)
        )
          return x;
        (l = G.event && d.global),
          l && G.active++ === 0 && G.event.trigger('ajaxStart'),
          (d.type = d.type.toUpperCase()),
          (d.hasContent = !gt.test(d.type)),
          (i = d.url),
          d.hasContent ||
            (d.data &&
              ((i = d.url += (ut.test(i) ? '&' : '?') + d.data), delete d.data),
            d.cache === !1 &&
              (d.url = ft.test(i)
                ? i.replace(ft, `$1_=${lt++}`)
                : `${i + (ut.test(i) ? '&' : '?')}_=${lt++}`)),
          d.ifModified &&
            (G.lastModified[i] &&
              x.setRequestHeader('If-Modified-Since', G.lastModified[i]),
            G.etag[i] && x.setRequestHeader('If-None-Match', G.etag[i])),
          ((d.data && d.hasContent && d.contentType !== !1) || t.contentType) &&
            x.setRequestHeader('Content-Type', d.contentType),
          x.setRequestHeader(
            'Accept',
            d.dataTypes[0] && d.accepts[d.dataTypes[0]]
              ? d.accepts[d.dataTypes[0]] +
                  (d.dataTypes[0] !== '*' ? `, ${wt}; q=0.01` : '')
              : d.accepts['*'],
          );
        for (u in d.headers) x.setRequestHeader(u, d.headers[u]);
        if (d.beforeSend && (d.beforeSend.call(f, x, d) === !1 || b === 2))
          return x.abort();
        w = 'abort';
        for (u in { success: 1, error: 1, complete: 1 }) x[u](d[u]);
        if ((r = R(bt, d, t, x))) {
          (x.readyState = 1),
            l && p.trigger('ajaxSend', [x, d]),
            d.async &&
              d.timeout > 0 &&
              (a = setTimeout(() => {
                x.abort('timeout');
              }, d.timeout));
          try {
            (b = 1), r.send(v, n);
          } catch (_) {
            if (!(b < 2)) throw _;
            n(-1, _);
          }
        } else n(-1, 'No Transport');
        return x;
      },
      getJSON: function (e, t, n) {
        return G.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return G.get(e, void 0, t, 'script');
      },
    }),
      G.each(['get', 'post'], (e, t) => {
        G[t] = function (e, n, r, i) {
          return (
            G.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
            G.ajax({ url: e, type: t, dataType: i, data: n, success: r })
          );
        };
      }),
      (G._evalUrl = function (e) {
        return G.ajax({
          url: e,
          type: 'GET',
          dataType: 'script',
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      G.fn.extend({
        wrapAll: function (e) {
          let t;
          return G.isFunction(e)
            ? this.each(function (t) {
                G(this).wrapAll(e.call(this, t));
              })
            : (this[0] &&
                ((t = G(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (e) {
          return this.each(
            G.isFunction(e)
              ? function (t) {
                  G(this).wrapInner(e.call(this, t));
                }
              : function () {
                  const t = G(this);
                  const n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                },
          );
        },
        wrap: function (e) {
          const t = G.isFunction(e);
          return this.each(function (n) {
            G(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              G.nodeName(this, 'body') || G(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (G.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0;
      }),
      (G.expr.filters.visible = function (e) {
        return !G.expr.filters.hidden(e);
      });
    const kt = /%20/g;
    var Ct = /\[\]$/;
    const Nt = /\r?\n/g;
    const Et = /^(?:submit|button|image|reset|file)$/i;
    const St = /^(?:input|select|textarea|keygen)/i;
    (G.param = function (e, t) {
      let n;
      const r = [];
      const i = function (e, t) {
        (t = G.isFunction(t) ? t() : t == null ? '' : t),
          (r[r.length] = `${encodeURIComponent(e)}=${encodeURIComponent(t)}`);
      };
      if (
        (void 0 === t && (t = G.ajaxSettings && G.ajaxSettings.traditional),
        G.isArray(e) || (e.jquery && !G.isPlainObject(e)))
      )
        G.each(e, function () {
          i(this.name, this.value);
        });
      else for (n in e) H(n, e[n], t, i);
      return r.join('&').replace(kt, '+');
    }),
      G.fn.extend({
        serialize: function () {
          return G.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            const e = G.prop(this, 'elements');
            return e ? G.makeArray(e) : this;
          })
            .filter(function () {
              const e = this.type;
              return (
                this.name &&
                !G(this).is(':disabled') &&
                St.test(this.nodeName) &&
                !Et.test(e) &&
                (this.checked || !Ce.test(e))
              );
            })
            .map(function (e, t) {
              const n = G(this).val();
              return n == null
                ? null
                : G.isArray(n)
                ? G.map(n, (e) => ({
                    name: t.name,
                    value: e.replace(Nt, '\r\n'),
                  }))
                : { name: t.name, value: n.replace(Nt, '\r\n') };
            })
            .get();
        },
      }),
      (G.ajaxSettings.xhr = function () {
        try {
          return new XMLHttpRequest();
        } catch (e) {}
      });
    let Tt = 0;
    const At = {};
    const Lt = { 0: 200, 1223: 204 };
    let jt = G.ajaxSettings.xhr();
    e.attachEvent &&
      e.attachEvent('onunload', () => {
        for (const e in At) At[e]();
      }),
      (Z.cors = !!jt && 'withCredentials' in jt),
      (Z.ajax = jt = !!jt),
      G.ajaxTransport((e) => {
        let t;
        return Z.cors || (jt && !e.crossDomain)
          ? {
              send: function (n, r) {
                let i;
                const o = e.xhr();
                const s = ++Tt;
                if (
                  (o.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType &&
                  o.overrideMimeType &&
                  o.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    n['X-Requested-With'] ||
                    (n['X-Requested-With'] = 'XMLHttpRequest');
                for (i in n) o.setRequestHeader(i, n[i]);
                (t = function (e) {
                  return function () {
                    t &&
                      (delete At[s],
                      (t = o.onload = o.onerror = null),
                      e === 'abort'
                        ? o.abort()
                        : e === 'error'
                        ? r(o.status, o.statusText)
                        : r(
                            Lt[o.status] || o.status,
                            o.statusText,
                            typeof o.responseText === 'string'
                              ? { text: o.responseText }
                              : void 0,
                            o.getAllResponseHeaders(),
                          ));
                  };
                }),
                  (o.onload = t()),
                  (o.onerror = t('error')),
                  (t = At[s] = t('abort'));
                try {
                  o.send((e.hasContent && e.data) || null);
                } catch (a) {
                  if (t) throw a;
                }
              },
              abort: function () {
                t && t();
              },
            }
          : void 0;
      }),
      G.ajaxSetup({
        accepts: {
          script:
            'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          'text script': function (e) {
            return G.globalEval(e), e;
          },
        },
      }),
      G.ajaxPrefilter('script', (e) => {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
      }),
      G.ajaxTransport('script', (e) => {
        if (e.crossDomain) {
          let t;
          let n;
          return {
            send: function (r, i) {
              (t = G('<script>')
                .prop({ async: !0, charset: e.scriptCharset, src: e.url })
                .on(
                  'load error',
                  (n = function (e) {
                    t.remove(),
                      (n = null),
                      e && i(e.type === 'error' ? 404 : 200, e.type);
                  }),
                )),
                Y.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    const Mt = [];
    const qt = /(=)\?(?=&|$)|\?\?/;
    G.ajaxSetup({
      jsonp: 'callback',
      jsonpCallback: function () {
        const e = Mt.pop() || `${G.expando}_${lt++}`;
        return (this[e] = !0), e;
      },
    }),
      G.ajaxPrefilter('json jsonp', (t, n, r) => {
        let i;
        let o;
        let s;
        const a =
          t.jsonp !== !1 &&
          (qt.test(t.url)
            ? 'url'
            : typeof t.data === 'string' &&
              !(t.contentType || '').indexOf(
                'application/x-www-form-urlencoded',
              ) &&
              qt.test(t.data) &&
              'data');
        return a || t.dataTypes[0] === 'jsonp'
          ? ((i = t.jsonpCallback =
              G.isFunction(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
            a
              ? (t[a] = t[a].replace(qt, `$1${i}`))
              : t.jsonp !== !1 &&
                (t.url += `${(ut.test(t.url) ? '&' : '?') + t.jsonp}=${i}`),
            (t.converters['script json'] = function () {
              return s || G.error(`${i} was not called`), s[0];
            }),
            (t.dataTypes[0] = 'json'),
            (o = e[i]),
            (e[i] = function () {
              s = arguments;
            }),
            r.always(() => {
              (e[i] = o),
                t[i] && ((t.jsonpCallback = n.jsonpCallback), Mt.push(i)),
                s && G.isFunction(o) && o(s[0]),
                (s = o = void 0);
            }),
            'script')
          : void 0;
      }),
      (G.parseHTML = function (e, t, n) {
        if (!e || typeof e !== 'string') return null;
        typeof t === 'boolean' && ((n = t), (t = !1)), (t = t || Y);
        let r = se.exec(e);
        const i = !n && [];
        return r
          ? [t.createElement(r[1])]
          : ((r = G.buildFragment([e], t, i)),
            i && i.length && G(i).remove(),
            G.merge([], r.childNodes));
      });
    const $t = G.fn.load;
    (G.fn.load = function (e, t, n) {
      if (typeof e !== 'string' && $t) return $t.apply(this, arguments);
      let r;
      let i;
      let o;
      const s = this;
      const a = e.indexOf(' ');
      return (
        a >= 0 && ((r = G.trim(e.slice(a))), (e = e.slice(0, a))),
        G.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && typeof t === 'object' && (i = 'POST'),
        s.length > 0 &&
          G.ajax({ url: e, type: i, dataType: 'html', data: t })
            .done(function (e) {
              (o = arguments),
                s.html(r ? G('<div>').append(G.parseHTML(e)).find(r) : e);
            })
            .complete(
              n &&
                ((e, t) => {
                  s.each(n, o || [e.responseText, t, e]);
                }),
            ),
        this
      );
    }),
      G.each(
        [
          'ajaxStart',
          'ajaxStop',
          'ajaxComplete',
          'ajaxError',
          'ajaxSuccess',
          'ajaxSend',
        ],
        (e, t) => {
          G.fn[t] = function (e) {
            return this.on(t, e);
          };
        },
      ),
      (G.expr.filters.animated = function (e) {
        return G.grep(G.timers, (t) => e === t.elem).length;
      });
    const Ot = e.document.documentElement;
    (G.offset = {
      setOffset: function (e, t, n) {
        let r;
        let i;
        let o;
        let s;
        let a;
        let c;
        let l;
        const u = G.css(e, 'position');
        const d = G(e);
        const f = {};
        u === 'static' && (e.style.position = 'relative'),
          (a = d.offset()),
          (o = G.css(e, 'top')),
          (c = G.css(e, 'left')),
          (l =
            (u === 'absolute' || u === 'fixed') &&
            (o + c).indexOf('auto') > -1),
          l
            ? ((r = d.position()), (s = r.top), (i = r.left))
            : ((s = parseFloat(o) || 0), (i = parseFloat(c) || 0)),
          G.isFunction(t) && (t = t.call(e, n, a)),
          t.top != null && (f.top = t.top - a.top + s),
          t.left != null && (f.left = t.left - a.left + i),
          'using' in t ? t.using.call(e, f) : d.css(f);
      },
    }),
      G.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  G.offset.setOffset(this, e, t);
                });
          let t;
          let n;
          const r = this[0];
          let i = { top: 0, left: 0 };
          const o = r && r.ownerDocument;
          return o
            ? ((t = o.documentElement),
              G.contains(t, r)
                ? (typeof r.getBoundingClientRect !== Ne &&
                    (i = r.getBoundingClientRect()),
                  (n = F(o)),
                  {
                    top: i.top + n.pageYOffset - t.clientTop,
                    left: i.left + n.pageXOffset - t.clientLeft,
                  })
                : i)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            let e;
            let t;
            const n = this[0];
            let r = { top: 0, left: 0 };
            return (
              G.css(n, 'position') === 'fixed'
                ? (t = n.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  G.nodeName(e[0], 'html') || (r = e.offset()),
                  (r.top += G.css(e[0], 'borderTopWidth', !0)),
                  (r.left += G.css(e[0], 'borderLeftWidth', !0))),
              {
                top: t.top - r.top - G.css(n, 'marginTop', !0),
                left: t.left - r.left - G.css(n, 'marginLeft', !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent || Ot;
              e && !G.nodeName(e, 'html') && G.css(e, 'position') === 'static';

            )
              e = e.offsetParent;
            return e || Ot;
          });
        },
      }),
      G.each(
        { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
        (t, n) => {
          const r = n === 'pageYOffset';
          G.fn[t] = function (i) {
            return me(
              this,
              (t, i, o) => {
                const s = F(t);
                return void 0 === o
                  ? s
                    ? s[n]
                    : t[i]
                  : void (s
                      ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset)
                      : (t[i] = o));
              },
              t,
              i,
              arguments.length,
              null,
            );
          };
        },
      ),
      G.each(['top', 'left'], (e, t) => {
        G.cssHooks[t] = _(Z.pixelPosition, (e, n) =>
          n
            ? ((n = x(e, t)), Pe.test(n) ? `${G(e).position()[t]}px` : n)
            : void 0,
        );
      }),
      G.each({ Height: 'height', Width: 'width' }, (e, t) => {
        G.each(
          { padding: `inner${e}`, content: t, '': `outer${e}` },
          (n, r) => {
            G.fn[r] = function (r, i) {
              const o = arguments.length && (n || typeof r !== 'boolean');
              const s = n || (r === !0 || i === !0 ? 'margin' : 'border');
              return me(
                this,
                (t, n, r) => {
                  let i;
                  return G.isWindow(t)
                    ? t.document.documentElement[`client${e}`]
                    : t.nodeType === 9
                    ? ((i = t.documentElement),
                      Math.max(
                        t.body[`scroll${e}`],
                        i[`scroll${e}`],
                        t.body[`offset${e}`],
                        i[`offset${e}`],
                        i[`client${e}`],
                      ))
                    : void 0 === r
                    ? G.css(t, n, s)
                    : G.style(t, n, r, s);
                },
                t,
                o ? r : void 0,
                o,
                null,
              );
            };
          },
        );
      }),
      (G.fn.size = function () {
        return this.length;
      }),
      (G.fn.andSelf = G.fn.addBack),
      typeof define === 'function' &&
        define.amd &&
        define('jquery', [], () => G);
    const Rt = e.jQuery;
    const Dt = e.$;
    return (
      (G.noConflict = function (t) {
        return (
          e.$ === G && (e.$ = Dt), t && e.jQuery === G && (e.jQuery = Rt), G
        );
      }),
      typeof t === Ne && (e.jQuery = e.$ = G),
      G
    );
  }),
  function () {
    function e() {}
    function t(e, t) {
      for (let n = e.length; n--; ) if (e[n].listener === t) return n;
      return -1;
    }
    function n(e) {
      return function () {
        return this[e].apply(this, arguments);
      };
    }
    const r = e.prototype;
    const i = this;
    const o = i.EventEmitter;
    (r.getListeners = function (e) {
      let t;
      let n;
      const r = this._getEvents();
      if (typeof e === 'object') {
        t = {};
        for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
      } else t = r[e] || (r[e] = []);
      return t;
    }),
      (r.flattenListeners = function (e) {
        let t;
        const n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n;
      }),
      (r.getListenersAsObject = function (e) {
        let t;
        const n = this.getListeners(e);
        return n instanceof Array && ((t = {}), (t[e] = n)), t || n;
      }),
      (r.addListener = function (e, n) {
        let r;
        const i = this.getListenersAsObject(e);
        const o = typeof n === 'object';
        for (r in i)
          i.hasOwnProperty(r) &&
            t(i[r], n) === -1 &&
            i[r].push(o ? n : { listener: n, once: !1 });
        return this;
      }),
      (r.on = n('addListener')),
      (r.addOnceListener = function (e, t) {
        return this.addListener(e, { listener: t, once: !0 });
      }),
      (r.once = n('addOnceListener')),
      (r.defineEvent = function (e) {
        return this.getListeners(e), this;
      }),
      (r.defineEvents = function (e) {
        for (let t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this;
      }),
      (r.removeListener = function (e, n) {
        let r;
        let i;
        const o = this.getListenersAsObject(e);
        for (i in o)
          o.hasOwnProperty(i) &&
            ((r = t(o[i], n)), r !== -1 && o[i].splice(r, 1));
        return this;
      }),
      (r.off = n('removeListener')),
      (r.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t);
      }),
      (r.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t);
      }),
      (r.manipulateListeners = function (e, t, n) {
        let r;
        let i;
        const o = e ? this.removeListener : this.addListener;
        const s = e ? this.removeListeners : this.addListeners;
        if (typeof t !== 'object' || t instanceof RegExp)
          for (r = n.length; r--; ) o.call(this, t, n[r]);
        else
          for (r in t)
            t.hasOwnProperty(r) &&
              (i = t[r]) &&
              (typeof i === 'function'
                ? o.call(this, r, i)
                : s.call(this, r, i));
        return this;
      }),
      (r.removeEvent = function (e) {
        let t;
        const n = typeof e;
        const r = this._getEvents();
        if (n === 'string') delete r[e];
        else if (n === 'object')
          for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
        else delete this._events;
        return this;
      }),
      (r.removeAllListeners = n('removeEvent')),
      (r.emitEvent = function (e, t) {
        let n;
        let r;
        let i;
        let o;
        const s = this.getListenersAsObject(e);
        for (i in s)
          if (s.hasOwnProperty(i))
            for (r = s[i].length; r--; )
              (n = s[i][r]),
                n.once === !0 && this.removeListener(e, n.listener),
                (o = n.listener.apply(this, t || [])),
                o === this._getOnceReturnValue() &&
                  this.removeListener(e, n.listener);
        return this;
      }),
      (r.trigger = n('emitEvent')),
      (r.emit = function (e) {
        const t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t);
      }),
      (r.setOnceReturnValue = function (e) {
        return (this._onceReturnValue = e), this;
      }),
      (r._getOnceReturnValue = function () {
        return this.hasOwnProperty('_onceReturnValue')
          ? this._onceReturnValue
          : !0;
      }),
      (r._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (e.noConflict = function () {
        return (i.EventEmitter = o), e;
      }),
      typeof define === 'function' && define.amd
        ? define('eventEmitter/EventEmitter', [], () => e)
        : typeof module === 'object' && module.exports
        ? (module.exports = e)
        : (this.EventEmitter = e);
  }.call(this),
  (function (e) {
    function t(t) {
      const n = e.event;
      return (n.target = n.target || n.srcElement || t), n;
    }
    const n = document.documentElement;
    let r = function () {};
    n.addEventListener
      ? (r = function (e, t, n) {
          e.addEventListener(t, n, !1);
        })
      : n.attachEvent &&
        (r = function (e, n, r) {
          (e[n + r] = r.handleEvent
            ? function () {
                const n = t(e);
                r.handleEvent.call(r, n);
              }
            : function () {
                const n = t(e);
                r.call(e, n);
              }),
            e.attachEvent(`on${n}`, e[n + r]);
        });
    let i = function () {};
    n.removeEventListener
      ? (i = function (e, t, n) {
          e.removeEventListener(t, n, !1);
        })
      : n.detachEvent &&
        (i = function (e, t, n) {
          e.detachEvent(`on${t}`, e[t + n]);
          try {
            delete e[t + n];
          } catch (r) {
            e[t + n] = void 0;
          }
        });
    const o = { bind: r, unbind: i };
    typeof define === 'function' && define.amd
      ? define('eventie/eventie', o)
      : (e.eventie = o);
  })(this),
  (function (e, t) {
    typeof define === 'function' && define.amd
      ? define(['eventEmitter/EventEmitter', 'eventie/eventie'], (n, r) =>
          t(e, n, r),
        )
      : typeof exports === 'object'
      ? (module.exports = t(
          e,
          require('wolfy87-eventemitter'),
          require('eventie'),
        ))
      : (e.imagesLoaded = t(e, e.EventEmitter, e.eventie));
  })(window, (e, t, n) => {
    function r(e, t) {
      for (const n in t) e[n] = t[n];
      return e;
    }
    function i(e) {
      return f.call(e) === '[object Array]';
    }
    function o(e) {
      let t = [];
      if (i(e)) t = e;
      else if (typeof e.length === 'number')
        for (let n = 0, r = e.length; r > n; n++) t.push(e[n]);
      else t.push(e);
      return t;
    }
    function s(e, t, n) {
      if (!(this instanceof s)) return new s(e, t);
      typeof e === 'string' && (e = document.querySelectorAll(e)),
        (this.elements = o(e)),
        (this.options = r({}, this.options)),
        typeof t === 'function' ? (n = t) : r(this.options, t),
        n && this.on('always', n),
        this.getImages(),
        l && (this.jqDeferred = new l.Deferred());
      const i = this;
      setTimeout(() => {
        i.check();
      });
    }
    function a(e) {
      this.img = e;
    }
    function c(e) {
      (this.src = e), (p[e] = this);
    }
    var l = e.jQuery;
    const u = e.console;
    const d = void 0 !== u;
    var f = Object.prototype.toString;
    (s.prototype = new t()),
      (s.prototype.options = {}),
      (s.prototype.getImages = function () {
        this.images = [];
        for (let e = 0, t = this.elements.length; t > e; e++) {
          const n = this.elements[e];
          n.nodeName === 'IMG' && this.addImage(n);
          const r = n.nodeType;
          if (r && (r === 1 || r === 9 || r === 11))
            for (
              let i = n.querySelectorAll('img'), o = 0, s = i.length;
              s > o;
              o++
            ) {
              const a = i[o];
              this.addImage(a);
            }
        }
      }),
      (s.prototype.addImage = function (e) {
        const t = new a(e);
        this.images.push(t);
      }),
      (s.prototype.check = function () {
        function e(e, i) {
          return (
            t.options.debug && d && u.log('confirm', e, i),
            t.progress(e),
            n++,
            n === r && t.complete(),
            !0
          );
        }
        var t = this;
        var n = 0;
        var r = this.images.length;
        if (((this.hasAnyBroken = !1), !r)) return void this.complete();
        for (let i = 0; r > i; i++) {
          const o = this.images[i];
          o.on('confirm', e), o.check();
        }
      }),
      (s.prototype.progress = function (e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        const t = this;
        setTimeout(() => {
          t.emit('progress', t, e),
            t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e);
        });
      }),
      (s.prototype.complete = function () {
        const e = this.hasAnyBroken ? 'fail' : 'done';
        this.isComplete = !0;
        const t = this;
        setTimeout(() => {
          if ((t.emit(e, t), t.emit('always', t), t.jqDeferred)) {
            const n = t.hasAnyBroken ? 'reject' : 'resolve';
            t.jqDeferred[n](t);
          }
        });
      }),
      l &&
        (l.fn.imagesLoaded = function (e, t) {
          const n = new s(this, e, t);
          return n.jqDeferred.promise(l(this));
        }),
      (a.prototype = new t()),
      (a.prototype.check = function () {
        const e = p[this.img.src] || new c(this.img.src);
        if (e.isConfirmed)
          return void this.confirm(e.isLoaded, 'cached was confirmed');
        if (this.img.complete && void 0 !== this.img.naturalWidth)
          return void this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
        const t = this;
        e.on('confirm', (e, n) => (t.confirm(e.isLoaded, n), !0)), e.check();
      }),
      (a.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emit('confirm', this, t);
      });
    var p = {};
    return (
      (c.prototype = new t()),
      (c.prototype.check = function () {
        if (!this.isChecked) {
          const e = new Image();
          n.bind(e, 'load', this),
            n.bind(e, 'error', this),
            (e.src = this.src),
            (this.isChecked = !0);
        }
      }),
      (c.prototype.handleEvent = function (e) {
        const t = `on${e.type}`;
        this[t] && this[t](e);
      }),
      (c.prototype.onload = function (e) {
        this.confirm(!0, 'onload'), this.unbindProxyEvents(e);
      }),
      (c.prototype.onerror = function (e) {
        this.confirm(!1, 'onerror'), this.unbindProxyEvents(e);
      }),
      (c.prototype.confirm = function (e, t) {
        (this.isConfirmed = !0),
          (this.isLoaded = e),
          this.emit('confirm', this, t);
      }),
      (c.prototype.unbindProxyEvents = function (e) {
        n.unbind(e.target, 'load', this), n.unbind(e.target, 'error', this);
      }),
      s
    );
  }),
  !(function (e) {
    typeof exports !== 'undefined'
      ? e(exports)
      : ((self.hljs = e({})),
        typeof define === 'function' &&
          define.amd &&
          define('hljs', [], () => self.hljs));
  })((e) => {
    function t(e) {
      return e
        .replace(/&/gm, '&amp;')
        .replace(/</gm, '&lt;')
        .replace(/>/gm, '&gt;');
    }
    function n(e) {
      return e.nodeName.toLowerCase();
    }
    function r(e, t) {
      const n = e && e.exec(t);
      return n && n.index == 0;
    }
    function i(e) {
      return /^(no-?highlight|plain|text)$/i.test(e);
    }
    function o(e) {
      let t;
      let n;
      let r;
      let o = `${e.className} `;
      if (
        ((o += e.parentNode ? e.parentNode.className : ''),
        (n = /\blang(?:uage)?-([\w-]+)\b/i.exec(o)))
      )
        return w(n[1]) ? n[1] : 'no-highlight';
      for (o = o.split(/\s+/), t = 0, r = o.length; r > t; t++)
        if (w(o[t]) || i(o[t])) return o[t];
    }
    function s(e, t) {
      let n;
      const r = {};
      for (n in e) r[n] = e[n];
      if (t) for (n in t) r[n] = t[n];
      return r;
    }
    function a(e) {
      const t = [];
      return (
        (function r(e, i) {
          for (let o = e.firstChild; o; o = o.nextSibling)
            o.nodeType == 3
              ? (i += o.nodeValue.length)
              : o.nodeType == 1 &&
                (t.push({ event: 'start', offset: i, node: o }),
                (i = r(o, i)),
                n(o).match(/br|hr|img|input/) ||
                  t.push({ event: 'stop', offset: i, node: o }));
          return i;
        })(e, 0),
        t
      );
    }
    function c(e, r, i) {
      function o() {
        return e.length && r.length
          ? e[0].offset != r[0].offset
            ? e[0].offset < r[0].offset
              ? e
              : r
            : r[0].event == 'start'
            ? e
            : r
          : e.length
          ? e
          : r;
      }
      function s(e) {
        function r(e) {
          return ` ${e.nodeName}="${t(e.value)}"`;
        }
        u += `<${n(e)}${Array.prototype.map.call(e.attributes, r).join('')}>`;
      }
      function a(e) {
        u += `</${n(e)}>`;
      }
      function c(e) {
        (e.event == 'start' ? s : a)(e.node);
      }
      for (var l = 0, u = '', d = []; e.length || r.length; ) {
        let f = o();
        if (
          ((u += t(i.substr(l, f[0].offset - l))), (l = f[0].offset), f == e)
        ) {
          d.reverse().forEach(a);
          do c(f.splice(0, 1)[0]), (f = o());
          while (f == e && f.length && f[0].offset == l);
          d.reverse().forEach(s);
        } else
          f[0].event == 'start' ? d.push(f[0].node) : d.pop(),
            c(f.splice(0, 1)[0]);
      }
      return u + t(i.substr(l));
    }
    function l(e) {
      function t(e) {
        return (e && e.source) || e;
      }
      function n(n, r) {
        return new RegExp(t(n), `m${e.cI ? 'i' : ''}${r ? 'g' : ''}`);
      }
      function r(i, o) {
        if (!i.compiled) {
          if (((i.compiled = !0), (i.k = i.k || i.bK), i.k)) {
            const a = {};
            const c = function (t, n) {
              e.cI && (n = n.toLowerCase()),
                n.split(' ').forEach((e) => {
                  const n = e.split('|');
                  a[n[0]] = [t, n[1] ? Number(n[1]) : 1];
                });
            };
            typeof i.k === 'string'
              ? c('keyword', i.k)
              : Object.keys(i.k).forEach((e) => {
                  c(e, i.k[e]);
                }),
              (i.k = a);
          }
          (i.lR = n(i.l || /\b\w+\b/, !0)),
            o &&
              (i.bK && (i.b = `\\b(${i.bK.split(' ').join('|')})\\b`),
              i.b || (i.b = /\B|\b/),
              (i.bR = n(i.b)),
              i.e || i.eW || (i.e = /\B|\b/),
              i.e && (i.eR = n(i.e)),
              (i.tE = t(i.e) || ''),
              i.eW && o.tE && (i.tE += (i.e ? '|' : '') + o.tE)),
            i.i && (i.iR = n(i.i)),
            void 0 === i.r && (i.r = 1),
            i.c || (i.c = []);
          const l = [];
          i.c.forEach((e) => {
            e.v
              ? e.v.forEach((t) => {
                  l.push(s(e, t));
                })
              : l.push(e == 'self' ? i : e);
          }),
            (i.c = l),
            i.c.forEach((e) => {
              r(e, i);
            }),
            i.starts && r(i.starts, o);
          const u = i.c
            .map((e) => (e.bK ? `\\.?(${e.b})\\.?` : e.b))
            .concat([i.tE, i.i])
            .map(t)
            .filter(Boolean);
          i.t = u.length
            ? n(u.join('|'), !0)
            : {
                exec: function () {
                  return null;
                },
              };
        }
      }
      r(e);
    }
    function u(e, n, i, o) {
      function s(e, t) {
        for (let n = 0; n < t.c.length; n++) if (r(t.c[n].bR, e)) return t.c[n];
      }
      function a(e, t) {
        if (r(e.eR, t)) {
          for (; e.endsParent && e.parent; ) e = e.parent;
          return e;
        }
        return e.eW ? a(e.parent, t) : void 0;
      }
      function c(e, t) {
        return !i && r(t.iR, e);
      }
      function f(e, t) {
        const n = b.cI ? t[0].toLowerCase() : t[0];
        return e.k.hasOwnProperty(n) && e.k[n];
      }
      function p(e, t, n, r) {
        const i = r ? '' : x.classPrefix;
        let o = `<span class="${i}`;
        const s = n ? '' : '</span>';
        return (o += `${e}">`), o + t + s;
      }
      function h() {
        if (!C.k) return t(S);
        let e = '';
        let n = 0;
        C.lR.lastIndex = 0;
        for (let r = C.lR.exec(S); r; ) {
          e += t(S.substr(n, r.index - n));
          const i = f(C, r);
          i ? ((T += i[1]), (e += p(i[0], t(r[0])))) : (e += t(r[0])),
            (n = C.lR.lastIndex),
            (r = C.lR.exec(S));
        }
        return e + t(S.substr(n));
      }
      function g() {
        const e = typeof C.sL === 'string';
        if (e && !_[C.sL]) return t(S);
        const n = e
          ? u(C.sL, S, !0, N[C.sL])
          : d(S, C.sL.length ? C.sL : void 0);
        return (
          C.r > 0 && (T += n.r),
          e && (N[C.sL] = n.top),
          p(n.language, n.value, !1, !0)
        );
      }
      function m() {
        return void 0 !== C.sL ? g() : h();
      }
      function v(e, n) {
        const r = e.cN ? p(e.cN, '', !0) : '';
        e.rB
          ? ((E += r), (S = ''))
          : e.eB
          ? ((E += t(n) + r), (S = ''))
          : ((E += r), (S = n)),
          (C = Object.create(e, { parent: { value: C } }));
      }
      function y(e, n) {
        if (((S += e), void 0 === n)) return (E += m()), 0;
        const r = s(n, C);
        if (r) return (E += m()), v(r, n), r.rB ? 0 : n.length;
        const i = a(C, n);
        if (i) {
          const o = C;
          o.rE || o.eE || (S += n), (E += m());
          do C.cN && (E += '</span>'), (T += C.r), (C = C.parent);
          while (C != i.parent);
          return (
            o.eE && (E += t(n)),
            (S = ''),
            i.starts && v(i.starts, ''),
            o.rE ? 0 : n.length
          );
        }
        if (c(n, C))
          throw new Error(
            `Illegal lexeme "${n}" for mode "${C.cN || '<unnamed>'}"`,
          );
        return (S += n), n.length || 1;
      }
      var b = w(e);
      if (!b) throw new Error(`Unknown language: "${e}"`);
      l(b);
      let k;
      var C = o || b;
      var N = {};
      var E = '';
      for (k = C; k != b; k = k.parent) k.cN && (E = p(k.cN, '', !0) + E);
      var S = '';
      var T = 0;
      try {
        for (var A, L, j = 0; (C.t.lastIndex = j), (A = C.t.exec(n)), A; )
          (L = y(n.substr(j, A.index - j), A[0])), (j = A.index + L);
        for (y(n.substr(j)), k = C; k.parent; k = k.parent)
          k.cN && (E += '</span>');
        return { r: T, value: E, language: e, top: C };
      } catch (M) {
        if (M.message.indexOf('Illegal') != -1) return { r: 0, value: t(n) };
        throw M;
      }
    }
    function d(e, n) {
      n = n || x.languages || Object.keys(_);
      let r = { r: 0, value: t(e) };
      let i = r;
      return (
        n.forEach((t) => {
          if (w(t)) {
            const n = u(t, e, !1);
            (n.language = t),
              n.r > i.r && (i = n),
              n.r > r.r && ((i = r), (r = n));
          }
        }),
        i.language && (r.second_best = i),
        r
      );
    }
    function f(e) {
      return (
        x.tabReplace &&
          (e = e.replace(/^((<[^>]+>|\t)+)/gm, (e, t) =>
            t.replace(/\t/g, x.tabReplace),
          )),
        x.useBR && (e = e.replace(/\n/g, '<br>')),
        e
      );
    }
    function p(e, t, n) {
      const r = t ? k[t] : n;
      const i = [e.trim()];
      return (
        e.match(/\bhljs\b/) || i.push('hljs'),
        e.indexOf(r) === -1 && i.push(r),
        i.join(' ').trim()
      );
    }
    function h(e) {
      const t = o(e);
      if (!i(t)) {
        let n;
        x.useBR
          ? ((n = document.createElementNS(
              'http://www.w3.org/1999/xhtml',
              'div',
            )),
            (n.innerHTML = e.innerHTML
              .replace(/\n/g, '')
              .replace(/<br[ \/]*>/g, '\n')))
          : (n = e);
        const r = n.textContent;
        const s = t ? u(t, r, !0) : d(r);
        const l = a(n);
        if (l.length) {
          const h = document.createElementNS(
            'http://www.w3.org/1999/xhtml',
            'div',
          );
          (h.innerHTML = s.value), (s.value = c(l, a(h), r));
        }
        (s.value = f(s.value)),
          (e.innerHTML = s.value),
          (e.className = p(e.className, t, s.language)),
          (e.result = { language: s.language, re: s.r }),
          s.second_best &&
            (e.second_best = {
              language: s.second_best.language,
              re: s.second_best.r,
            });
      }
    }
    function g(e) {
      x = s(x, e);
    }
    function m() {
      if (!m.called) {
        m.called = !0;
        const e = document.querySelectorAll('pre code');
        Array.prototype.forEach.call(e, h);
      }
    }
    function v() {
      addEventListener('DOMContentLoaded', m, !1),
        addEventListener('load', m, !1);
    }
    function y(t, n) {
      const r = (_[t] = n(e));
      r.aliases &&
        r.aliases.forEach((e) => {
          k[e] = t;
        });
    }
    function b() {
      return Object.keys(_);
    }
    function w(e) {
      return (e = (e || '').toLowerCase()), _[e] || _[k[e]];
    }
    var x = {
      classPrefix: 'hljs-',
      tabReplace: null,
      useBR: !1,
      languages: void 0,
    };
    var _ = {};
    var k = {};
    return (
      (e.highlight = u),
      (e.highlightAuto = d),
      (e.fixMarkup = f),
      (e.highlightBlock = h),
      (e.configure = g),
      (e.initHighlighting = m),
      (e.initHighlightingOnLoad = v),
      (e.registerLanguage = y),
      (e.listLanguages = b),
      (e.getLanguage = w),
      (e.inherit = s),
      (e.IR = '[a-zA-Z]\\w*'),
      (e.UIR = '[a-zA-Z_]\\w*'),
      (e.NR = '\\b\\d+(\\.\\d+)?'),
      (e.CNR =
        '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'),
      (e.BNR = '\\b(0b[01]+)'),
      (e.RSR =
        '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~'),
      (e.BE = { b: '\\\\[\\s\\S]', r: 0 }),
      (e.ASM = { cN: 'string', b: "'", e: "'", i: '\\n', c: [e.BE] }),
      (e.QSM = { cN: 'string', b: '"', e: '"', i: '\\n', c: [e.BE] }),
      (e.PWM = {
        b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/,
      }),
      (e.C = function (t, n, r) {
        const i = e.inherit({ cN: 'comment', b: t, e: n, c: [] }, r || {});
        return (
          i.c.push(e.PWM),
          i.c.push({ cN: 'doctag', b: '(?:TODO|FIXME|NOTE|BUG|XXX):', r: 0 }),
          i
        );
      }),
      (e.CLCM = e.C('//', '$')),
      (e.CBCM = e.C('/\\*', '\\*/')),
      (e.HCM = e.C('#', '$')),
      (e.NM = { cN: 'number', b: e.NR, r: 0 }),
      (e.CNM = { cN: 'number', b: e.CNR, r: 0 }),
      (e.BNM = { cN: 'number', b: e.BNR, r: 0 }),
      (e.CSSNM = {
        cN: 'number',
        b: `${e.NR}(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?`,
        r: 0,
      }),
      (e.RM = {
        cN: 'regexp',
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [e.BE, { b: /\[/, e: /\]/, r: 0, c: [e.BE] }],
      }),
      (e.TM = { cN: 'title', b: e.IR, r: 0 }),
      (e.UTM = { cN: 'title', b: e.UIR, r: 0 }),
      e.registerLanguage('apache', (e) => {
        const t = { cN: 'number', b: '[\\$%]\\d+' };
        return {
          aliases: ['apacheconf'],
          cI: !0,
          c: [
            e.HCM,
            { cN: 'section', b: '</?', e: '>' },
            {
              cN: 'attribute',
              b: /\w+/,
              r: 0,
              k: {
                nomarkup:
                  'order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername',
              },
              starts: {
                e: /$/,
                r: 0,
                k: { literal: 'on off all' },
                c: [
                  { cN: 'meta', b: '\\s\\[', e: '\\]$' },
                  { cN: 'variable', b: '[\\$%]\\{', e: '\\}', c: ['self', t] },
                  t,
                  e.QSM,
                ],
              },
            },
          ],
          i: /\S/,
        };
      }),
      e.registerLanguage('bash', (e) => {
        const t = {
          cN: 'variable',
          v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }],
        };
        const n = {
          cN: 'string',
          b: /"/,
          e: /"/,
          c: [e.BE, t, { cN: 'variable', b: /\$\(/, e: /\)/, c: [e.BE] }],
        };
        const r = { cN: 'string', b: /'/, e: /'/ };
        return {
          aliases: ['sh', 'zsh'],
          l: /-?[a-z\.]+/,
          k: {
            keyword:
              'if then else elif fi for while in do done case esac function',
            literal: 'true false',
            built_in:
              'break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp',
            _: '-ne -eq -lt -gt -f -d -e -s -l -a',
          },
          c: [
            { cN: 'meta', b: /^#![^\n]+sh\s*$/, r: 10 },
            {
              cN: 'function',
              b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
              rB: !0,
              c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })],
              r: 0,
            },
            e.HCM,
            n,
            r,
            t,
          ],
        };
      }),
      e.registerLanguage('coffeescript', (e) => {
        const t = {
          keyword:
            'in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not',
          literal: 'true false null undefined yes no on off',
          built_in: 'npm require console print module global window document',
        };
        const n = '[A-Za-z$_][0-9A-Za-z$_]*';
        const r = { cN: 'subst', b: /#\{/, e: /}/, k: t };
        const i = [
          e.BNM,
          e.inherit(e.CNM, { starts: { e: '(\\s*/)?', r: 0 } }),
          {
            cN: 'string',
            v: [
              { b: /'''/, e: /'''/, c: [e.BE] },
              { b: /'/, e: /'/, c: [e.BE] },
              { b: /"""/, e: /"""/, c: [e.BE, r] },
              { b: /"/, e: /"/, c: [e.BE, r] },
            ],
          },
          {
            cN: 'regexp',
            v: [
              { b: '///', e: '///', c: [r, e.HCM] },
              { b: '//[gim]*', r: 0 },
              { b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/ },
            ],
          },
          { b: `@${n}` },
          { b: '`', e: '`', eB: !0, eE: !0, sL: 'javascript' },
        ];
        r.c = i;
        const o = e.inherit(e.TM, { b: n });
        const s = '(\\(.*\\))?\\s*\\B[-=]>';
        const a = {
          cN: 'params',
          b: '\\([^\\(]',
          rB: !0,
          c: [{ b: /\(/, e: /\)/, k: t, c: ['self'].concat(i) }],
        };
        return {
          aliases: ['coffee', 'cson', 'iced'],
          k: t,
          i: /\/\*/,
          c: i.concat([
            e.C('###', '###'),
            e.HCM,
            {
              cN: 'function',
              b: `^\\s*${n}\\s*=\\s*${s}`,
              e: '[-=]>',
              rB: !0,
              c: [o, a],
            },
            {
              b: /[:\(,=]\s*/,
              r: 0,
              c: [{ cN: 'function', b: s, e: '[-=]>', rB: !0, c: [a] }],
            },
            {
              cN: 'class',
              bK: 'class',
              e: '$',
              i: /[:="\[\]]/,
              c: [{ bK: 'extends', eW: !0, i: /[:="\[\]]/, c: [o] }, o],
            },
            { b: `${n}:`, e: ':', rB: !0, rE: !0, r: 0 },
          ]),
        };
      }),
      e.registerLanguage('cpp', (e) => {
        const t = { cN: 'keyword', b: '\\b[a-z\\d_]*_t\\b' };
        const n = {
          cN: 'string',
          v: [
            e.inherit(e.QSM, { b: '((u8?|U)|L)?"' }),
            { b: '(u8?|U)?R"', e: '"', c: [e.BE] },
            { b: "'\\\\?.", e: "'", i: '.' },
          ],
        };
        const r = {
          cN: 'number',
          v: [
            { b: '\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)' },
            { b: e.CNR },
          ],
          r: 0,
        };
        const i = {
          cN: 'meta',
          b: '#',
          e: '$',
          k: {
            'meta-keyword':
              'if else elif endif define undef warning error line pragma ifdef ifndef',
          },
          c: [
            { b: /\\\n/, r: 0 },
            {
              bK: 'include',
              e: '$',
              k: { 'meta-keyword': 'include' },
              c: [
                e.inherit(n, { cN: 'meta-string' }),
                { cN: 'meta-string', b: '<', e: '>', i: '\\n' },
              ],
            },
            n,
            e.CLCM,
            e.CBCM,
          ],
        };
        const o = `${e.IR}\\s*\\(`;
        const s = {
          keyword:
            'int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong',
          built_in:
            'std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr',
          literal: 'true false nullptr NULL',
        };
        return {
          aliases: ['c', 'cc', 'h', 'c++', 'h++', 'hpp'],
          k: s,
          i: '</',
          c: [
            t,
            e.CLCM,
            e.CBCM,
            r,
            n,
            i,
            {
              b: '\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<',
              e: '>',
              k: s,
              c: ['self', t],
            },
            { b: `${e.IR}::`, k: s },
            { bK: 'new throw return else', r: 0 },
            {
              cN: 'function',
              b: `(${e.IR}[\\*&\\s]+)+${o}`,
              rB: !0,
              e: /[{;=]/,
              eE: !0,
              k: s,
              i: /[^\w\s\*&]/,
              c: [
                { b: o, rB: !0, c: [e.TM], r: 0 },
                {
                  cN: 'params',
                  b: /\(/,
                  e: /\)/,
                  k: s,
                  r: 0,
                  c: [e.CLCM, e.CBCM, n, r],
                },
                e.CLCM,
                e.CBCM,
                i,
              ],
            },
          ],
        };
      }),
      e.registerLanguage('cs', (e) => {
        const t =
          'abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield';
        const n = `${e.IR}(<${e.IR}>)?`;
        return {
          aliases: ['csharp'],
          k: t,
          i: /::/,
          c: [
            e.C('///', '$', {
              rB: !0,
              c: [
                {
                  cN: 'doctag',
                  v: [
                    { b: '///', r: 0 },
                    { b: '<!--|-->' },
                    { b: '</?', e: '>' },
                  ],
                },
              ],
            }),
            e.CLCM,
            e.CBCM,
            {
              cN: 'meta',
              b: '#',
              e: '$',
              k: {
                'meta-keyword':
                  'if else elif endif define undef warning error line region endregion pragma checksum',
              },
            },
            { cN: 'string', b: '@"', e: '"', c: [{ b: '""' }] },
            e.ASM,
            e.QSM,
            e.CNM,
            {
              bK: 'class interface',
              e: /[{;=]/,
              i: /[^\s:]/,
              c: [e.TM, e.CLCM, e.CBCM],
            },
            {
              bK: 'namespace',
              e: /[{;=]/,
              i: /[^\s:]/,
              c: [e.inherit(e.TM, { b: '[a-zA-Z](\\.?\\w)*' }), e.CLCM, e.CBCM],
            },
            { bK: 'new return throw await', r: 0 },
            {
              cN: 'function',
              b: `(${n}\\s+)+${e.IR}\\s*\\(`,
              rB: !0,
              e: /[{;=]/,
              eE: !0,
              k: t,
              c: [
                { b: `${e.IR}\\s*\\(`, rB: !0, c: [e.TM], r: 0 },
                {
                  cN: 'params',
                  b: /\(/,
                  e: /\)/,
                  eB: !0,
                  eE: !0,
                  k: t,
                  r: 0,
                  c: [e.ASM, e.QSM, e.CNM, e.CBCM],
                },
                e.CLCM,
                e.CBCM,
              ],
            },
          ],
        };
      }),
      e.registerLanguage('css', (e) => {
        const t = '[a-zA-Z-][a-zA-Z0-9_-]*';
        const n = {
          b: /[A-Z\_\.\-]+\s*:/,
          rB: !0,
          e: ';',
          eW: !0,
          c: [
            {
              cN: 'attribute',
              b: /\S/,
              e: ':',
              eE: !0,
              starts: {
                eW: !0,
                eE: !0,
                c: [
                  {
                    b: /[\w-]+\s*\(/,
                    rB: !0,
                    c: [{ cN: 'built_in', b: /[\w-]+/ }],
                  },
                  e.CSSNM,
                  e.QSM,
                  e.ASM,
                  e.CBCM,
                  { cN: 'number', b: '#[0-9A-Fa-f]+' },
                  { cN: 'meta', b: '!important' },
                ],
              },
            },
          ],
        };
        return {
          cI: !0,
          i: /[=\/|'\$]/,
          c: [
            e.CBCM,
            { cN: 'selector-id', b: /#[A-Za-z0-9_-]+/ },
            { cN: 'selector-class', b: /\.[A-Za-z0-9_-]+/ },
            { cN: 'selector-attr', b: /\[/, e: /\]/, i: '$' },
            { cN: 'selector-pseudo', b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ },
            { b: '@(font-face|page)', l: '[a-z-]+', k: 'font-face page' },
            {
              b: '@',
              e: '[{;]',
              c: [
                { cN: 'keyword', b: /\S+/ },
                { b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM] },
              ],
            },
            { cN: 'selector-tag', b: t, r: 0 },
            { b: '{', e: '}', i: /\S/, c: [e.CBCM, n] },
          ],
        };
      }),
      e.registerLanguage('diff', (e) => ({
        aliases: ['patch'],
        c: [
          {
            cN: 'meta',
            r: 10,
            v: [
              { b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ },
              { b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ },
              { b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ },
            ],
          },
          {
            cN: 'comment',
            v: [
              { b: /Index: /, e: /$/ },
              { b: /=====/, e: /=====$/ },
              { b: /^\-\-\-/, e: /$/ },
              { b: /^\*{3} /, e: /$/ },
              { b: /^\+\+\+/, e: /$/ },
              { b: /\*{5}/, e: /\*{5}$/ },
            ],
          },
          { cN: 'addition', b: '^\\+', e: '$' },
          { cN: 'deletion', b: '^\\-', e: '$' },
          { cN: 'addition', b: '^\\!', e: '$' },
        ],
      })),
      e.registerLanguage('http', (e) => {
        const t = 'HTTP/[0-9\\.]+';
        return {
          aliases: ['https'],
          i: '\\S',
          c: [
            { b: `^${t}`, e: '$', c: [{ cN: 'number', b: '\\b\\d{3}\\b' }] },
            {
              b: `^[A-Z]+ (.*?) ${t}$`,
              rB: !0,
              e: '$',
              c: [
                { cN: 'string', b: ' ', e: ' ', eB: !0, eE: !0 },
                { b: t },
                { cN: 'keyword', b: '[A-Z]+' },
              ],
            },
            {
              cN: 'attribute',
              b: '^\\w',
              e: ': ',
              eE: !0,
              i: '\\n|\\s|=',
              starts: { e: '$', r: 0 },
            },
            { b: '\\n\\n', starts: { sL: [], eW: !0 } },
          ],
        };
      }),
      e.registerLanguage('ini', (e) => {
        const t = {
          cN: 'string',
          c: [e.BE],
          v: [
            { b: "'''", e: "'''", r: 10 },
            { b: '"""', e: '"""', r: 10 },
            { b: '"', e: '"' },
            { b: "'", e: "'" },
          ],
        };
        return {
          aliases: ['toml'],
          cI: !0,
          i: /\S/,
          c: [
            e.C(';', '$'),
            e.HCM,
            { cN: 'section', b: /^\s*\[+/, e: /\]+/ },
            {
              b: /^[a-z0-9\[\]_-]+\s*=\s*/,
              e: '$',
              rB: !0,
              c: [
                { cN: 'attr', b: /[a-z0-9\[\]_-]+/ },
                {
                  b: /=/,
                  eW: !0,
                  r: 0,
                  c: [
                    { cN: 'literal', b: /\bon|off|true|false|yes|no\b/ },
                    {
                      cN: 'variable',
                      v: [{ b: /\$[\w\d"][\w\d_]*/ }, { b: /\$\{(.*?)}/ }],
                    },
                    t,
                    { cN: 'number', b: /([\+\-]+)?[\d]+_[\d_]+/ },
                    e.NM,
                  ],
                },
              ],
            },
          ],
        };
      }),
      e.registerLanguage('java', (e) => {
        const t = `${e.UIR}(<${e.UIR}(\\s*,\\s*${e.UIR})*>)?`;
        const n =
          'false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private';
        const r =
          '\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?';
        const i = { cN: 'number', b: r, r: 0 };
        return {
          aliases: ['jsp'],
          k: n,
          i: /<\/|#/,
          c: [
            e.C('/\\*\\*', '\\*/', {
              r: 0,
              c: [
                { b: /\w+@/, r: 0 },
                { cN: 'doctag', b: '@[A-Za-z]+' },
              ],
            }),
            e.CLCM,
            e.CBCM,
            e.ASM,
            e.QSM,
            {
              cN: 'class',
              bK: 'class interface',
              e: /[{;=]/,
              eE: !0,
              k: 'class interface',
              i: /[:"\[\]]/,
              c: [{ bK: 'extends implements' }, e.UTM],
            },
            { bK: 'new throw return else', r: 0 },
            {
              cN: 'function',
              b: `(${t}\\s+)+${e.UIR}\\s*\\(`,
              rB: !0,
              e: /[{;=]/,
              eE: !0,
              k: n,
              c: [
                { b: `${e.UIR}\\s*\\(`, rB: !0, r: 0, c: [e.UTM] },
                {
                  cN: 'params',
                  b: /\(/,
                  e: /\)/,
                  k: n,
                  r: 0,
                  c: [e.ASM, e.QSM, e.CNM, e.CBCM],
                },
                e.CLCM,
                e.CBCM,
              ],
            },
            i,
            { cN: 'meta', b: '@[A-Za-z]+' },
          ],
        };
      }),
      e.registerLanguage('javascript', (e) => ({
        aliases: ['js'],
        k: {
          keyword:
            'in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import from as',
          literal: 'true false null undefined NaN Infinity',
          built_in:
            'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise',
        },
        c: [
          { cN: 'meta', r: 10, b: /^\s*['"]use (strict|asm)['"]/ },
          { cN: 'meta', b: /^#!/, e: /$/ },
          e.ASM,
          e.QSM,
          {
            cN: 'string',
            b: '`',
            e: '`',
            c: [e.BE, { cN: 'subst', b: '\\$\\{', e: '\\}' }],
          },
          e.CLCM,
          e.CBCM,
          {
            cN: 'number',
            v: [
              { b: '\\b(0[bB][01]+)' },
              { b: '\\b(0[oO][0-7]+)' },
              { b: e.CNR },
            ],
            r: 0,
          },
          {
            b: `(${e.RSR}|\\b(case|return|throw)\\b)\\s*`,
            k: 'return throw case',
            c: [
              e.CLCM,
              e.CBCM,
              e.RM,
              { b: /</, e: />\s*[);\]]/, r: 0, sL: 'xml' },
            ],
            r: 0,
          },
          {
            cN: 'function',
            bK: 'function',
            e: /\{/,
            eE: !0,
            c: [
              e.inherit(e.TM, { b: /[A-Za-z$_][0-9A-Za-z$_]*/ }),
              {
                cN: 'params',
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                c: [e.CLCM, e.CBCM],
              },
            ],
            i: /\[|%/,
          },
          { b: /\$[(.]/ },
          { b: `\\.${e.IR}`, r: 0 },
          {
            cN: 'class',
            bK: 'class',
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{ bK: 'extends' }, e.UTM],
          },
          { bK: 'constructor', e: /\{/, eE: !0 },
        ],
        i: /#(?!!)/,
      })),
      e.registerLanguage('json', (e) => {
        const t = { literal: 'true false null' };
        const n = [e.QSM, e.CNM];
        const r = { e: ',', eW: !0, eE: !0, c: n, k: t };
        const i = {
          b: '{',
          e: '}',
          c: [
            {
              cN: 'attr',
              b: '\\s*"',
              e: '"\\s*:\\s*',
              eB: !0,
              eE: !0,
              c: [e.BE],
              i: '\\n',
              starts: r,
            },
          ],
          i: '\\S',
        };
        const o = { b: '\\[', e: '\\]', c: [e.inherit(r)], i: '\\S' };
        return n.splice(n.length, 0, i, o), { c: n, k: t, i: '\\S' };
      }),
      e.registerLanguage('makefile', (e) => {
        const t = { cN: 'variable', b: /\$\(/, e: /\)/, c: [e.BE] };
        return {
          aliases: ['mk', 'mak'],
          c: [
            e.HCM,
            {
              b: /^\w+\s*\W*=/,
              rB: !0,
              r: 0,
              starts: {
                e: /\s*\W*=/,
                eE: !0,
                starts: { e: /$/, r: 0, c: [t] },
              },
            },
            { cN: 'section', b: /^[\w]+:\s*$/ },
            {
              cN: 'meta',
              b: /^\.PHONY:/,
              e: /$/,
              k: { 'meta-keyword': '.PHONY' },
              l: /[\.\w]+/,
            },
            { b: /^\t+/, e: /$/, r: 0, c: [e.QSM, t] },
          ],
        };
      }),
      e.registerLanguage('xml', (e) => {
        const t = '[A-Za-z0-9\\._:-]+';
        const n = { b: /<\?(php)?(?!\w)/, e: /\?>/, sL: 'php' };
        const r = {
          eW: !0,
          i: /</,
          r: 0,
          c: [
            n,
            { cN: 'attr', b: t, r: 0 },
            {
              b: '=',
              r: 0,
              c: [
                {
                  cN: 'string',
                  c: [n],
                  v: [
                    { b: /"/, e: /"/ },
                    { b: /'/, e: /'/ },
                    { b: /[^\s\/>]+/ },
                  ],
                },
              ],
            },
          ],
        };
        return {
          aliases: ['html', 'xhtml', 'rss', 'atom', 'xsl', 'plist'],
          cI: !0,
          c: [
            {
              cN: 'meta',
              b: '<!DOCTYPE',
              e: '>',
              r: 10,
              c: [{ b: '\\[', e: '\\]' }],
            },
            e.C('<!--', '-->', { r: 10 }),
            { b: '<\\!\\[CDATA\\[', e: '\\]\\]>', r: 10 },
            {
              cN: 'tag',
              b: '<style(?=\\s|>|$)',
              e: '>',
              k: { name: 'style' },
              c: [r],
              starts: { e: '</style>', rE: !0, sL: ['css', 'xml'] },
            },
            {
              cN: 'tag',
              b: '<script(?=\\s|>|$)',
              e: '>',
              k: { name: 'script' },
              c: [r],
              starts: {
                e: '</script>',
                rE: !0,
                sL: ['actionscript', 'javascript', 'handlebars', 'xml'],
              },
            },
            n,
            { cN: 'meta', b: /<\?\w+/, e: /\?>/, r: 10 },
            {
              cN: 'tag',
              b: '</?',
              e: '/?>',
              c: [{ cN: 'name', b: /[^\/><\s]+/, r: 0 }, r],
            },
          ],
        };
      }),
      e.registerLanguage('markdown', (e) => ({
        aliases: ['md', 'mkdown', 'mkd'],
        c: [
          {
            cN: 'section',
            v: [{ b: '^#{1,6}', e: '$' }, { b: '^.+?\\n[=-]{2,}$' }],
          },
          { b: '<', e: '>', sL: 'xml', r: 0 },
          { cN: 'bullet', b: '^([*+-]|(\\d+\\.))\\s+' },
          { cN: 'strong', b: '[*_]{2}.+?[*_]{2}' },
          { cN: 'emphasis', v: [{ b: '\\*.+?\\*' }, { b: '_.+?_', r: 0 }] },
          { cN: 'quote', b: '^>\\s+', e: '$' },
          {
            cN: 'code',
            v: [{ b: '`.+?`' }, { b: '^( {4}|	)', e: '$', r: 0 }],
          },
          { b: '^[-\\*]{3,}', e: '$' },
          {
            b: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
            rB: !0,
            c: [
              { cN: 'string', b: '\\[', e: '\\]', eB: !0, rE: !0, r: 0 },
              { cN: 'link', b: '\\]\\(', e: '\\)', eB: !0, eE: !0 },
              { cN: 'symbol', b: '\\]\\[', e: '\\]', eB: !0, eE: !0 },
            ],
            r: 10,
          },
          {
            b: '^\\[.+\\]:',
            rB: !0,
            c: [
              {
                cN: 'symbol',
                b: '\\[',
                e: '\\]:',
                eB: !0,
                eE: !0,
                starts: { cN: 'link', e: '$' },
              },
            ],
          },
        ],
      })),
      e.registerLanguage('nginx', (e) => {
        const t = {
          cN: 'variable',
          v: [{ b: /\$\d+/ }, { b: /\$\{/, e: /}/ }, { b: `[\\$\\@]${e.UIR}` }],
        };
        const n = {
          eW: !0,
          l: '[a-z/_]+',
          k: {
            literal:
              'on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll',
          },
          r: 0,
          i: '=>',
          c: [
            e.HCM,
            {
              cN: 'string',
              c: [e.BE, t],
              v: [
                { b: /"/, e: /"/ },
                { b: /'/, e: /'/ },
              ],
            },
            { b: '([a-z]+):/', e: '\\s', eW: !0, eE: !0, c: [t] },
            {
              cN: 'regexp',
              c: [e.BE, t],
              v: [
                { b: '\\s\\^', e: '\\s|{|;', rE: !0 },
                { b: '~\\*?\\s+', e: '\\s|{|;', rE: !0 },
                { b: '\\*(\\.[a-z\\-]+)+' },
                { b: '([a-z\\-]+\\.)+\\*' },
              ],
            },
            {
              cN: 'number',
              b: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b',
            },
            { cN: 'number', b: '\\b\\d+[kKmMgGdshdwy]*\\b', r: 0 },
            t,
          ],
        };
        return {
          aliases: ['nginxconf'],
          c: [
            e.HCM,
            {
              b: `${e.UIR}\\s+{`,
              rB: !0,
              e: '{',
              c: [{ cN: 'section', b: e.UIR }],
              r: 0,
            },
            {
              b: `${e.UIR}\\s`,
              e: ';|{',
              rB: !0,
              c: [{ cN: 'attribute', b: e.UIR, starts: n }],
              r: 0,
            },
          ],
          i: '[^\\s\\}]',
        };
      }),
      e.registerLanguage('objectivec', (e) => {
        const t = { cN: 'built_in', b: '(AV|CA|CF|CG|CI|MK|MP|NS|UI|XC)\\w+' };
        const n = {
          keyword:
            'int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required',
          literal: 'false true FALSE TRUE nil YES NO NULL',
          built_in:
            'BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once',
        };
        const r = /[a-zA-Z@][a-zA-Z0-9_]*/;
        const i = '@interface @class @protocol @implementation';
        return {
          aliases: ['mm', 'objc', 'obj-c'],
          k: n,
          l: r,
          i: '</',
          c: [
            t,
            e.CLCM,
            e.CBCM,
            e.CNM,
            e.QSM,
            {
              cN: 'string',
              v: [
                { b: '@"', e: '"', i: '\\n', c: [e.BE] },
                { b: "'", e: "[^\\\\]'", i: "[^\\\\][^']" },
              ],
            },
            {
              cN: 'meta',
              b: '#',
              e: '$',
              c: [
                {
                  cN: 'meta-string',
                  v: [
                    { b: '"', e: '"' },
                    { b: '<', e: '>' },
                  ],
                },
              ],
            },
            {
              cN: 'class',
              b: `(${i.split(' ').join('|')})\\b`,
              e: '({|$)',
              eE: !0,
              k: i,
              l: r,
              c: [e.UTM],
            },
            { b: `\\.${e.UIR}`, r: 0 },
          ],
        };
      }),
      e.registerLanguage('perl', (e) => {
        const t =
          'getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when';
        const n = { cN: 'subst', b: '[$@]\\{', e: '\\}', k: t };
        const r = { b: '->{', e: '}' };
        const i = {
          v: [
            { b: /\$\d/ },
            { b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/ },
            { b: /[\$%@][^\s\w{]/, r: 0 },
          ],
        };
        const o = [e.BE, n, i];
        const s = [
          i,
          e.HCM,
          e.C('^\\=\\w', '\\=cut', { eW: !0 }),
          r,
          {
            cN: 'string',
            c: o,
            v: [
              { b: 'q[qwxr]?\\s*\\(', e: '\\)', r: 5 },
              { b: 'q[qwxr]?\\s*\\[', e: '\\]', r: 5 },
              { b: 'q[qwxr]?\\s*\\{', e: '\\}', r: 5 },
              { b: 'q[qwxr]?\\s*\\|', e: '\\|', r: 5 },
              { b: 'q[qwxr]?\\s*\\<', e: '\\>', r: 5 },
              { b: 'qw\\s+q', e: 'q', r: 5 },
              { b: "'", e: "'", c: [e.BE] },
              { b: '"', e: '"' },
              { b: '`', e: '`', c: [e.BE] },
              { b: '{\\w+}', c: [], r: 0 },
              { b: '-?\\w+\\s*\\=\\>', c: [], r: 0 },
            ],
          },
          {
            cN: 'number',
            b: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
            r: 0,
          },
          {
            b: `(\\/\\/|${e.RSR}|\\b(split|return|print|reverse|grep)\\b)\\s*`,
            k: 'split return print reverse grep',
            r: 0,
            c: [
              e.HCM,
              {
                cN: 'regexp',
                b: '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*',
                r: 10,
              },
              { cN: 'regexp', b: '(m|qr)?/', e: '/[a-z]*', c: [e.BE], r: 0 },
            ],
          },
          {
            cN: 'function',
            bK: 'sub',
            e: '(\\s*\\(.*?\\))?[;{]',
            eE: !0,
            r: 5,
            c: [e.TM],
          },
          { b: '-\\w\\b', r: 0 },
          {
            b: '^__DATA__$',
            e: '^__END__$',
            sL: 'mojolicious',
            c: [{ b: '^@@.*', e: '$', cN: 'comment' }],
          },
        ];
        return (n.c = s), (r.c = s), { aliases: ['pl'], k: t, c: s };
      }),
      e.registerLanguage('php', (e) => {
        const t = { b: '\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*' };
        const n = { cN: 'meta', b: /<\?(php)?|\?>/ };
        const r = {
          cN: 'string',
          c: [e.BE, n],
          v: [
            { b: 'b"', e: '"' },
            { b: "b'", e: "'" },
            e.inherit(e.ASM, { i: null }),
            e.inherit(e.QSM, { i: null }),
          ],
        };
        const i = { v: [e.BNM, e.CNM] };
        return {
          aliases: ['php3', 'php4', 'php5', 'php6'],
          cI: !0,
          k: 'and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally',
          c: [
            e.CLCM,
            e.HCM,
            e.C('/\\*', '\\*/', { c: [{ cN: 'doctag', b: '@[A-Za-z]+' }, n] }),
            e.C('__halt_compiler.+?;', !1, {
              eW: !0,
              k: '__halt_compiler',
              l: e.UIR,
            }),
            {
              cN: 'string',
              b: /<<<['"]?\w+['"]?$/,
              e: /^\w+;?$/,
              c: [
                e.BE,
                { cN: 'subst', v: [{ b: /\$\w+/ }, { b: /\{\$/, e: /\}/ }] },
              ],
            },
            n,
            t,
            { b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
            {
              cN: 'function',
              bK: 'function',
              e: /[;{]/,
              eE: !0,
              i: '\\$|\\[|%',
              c: [
                e.UTM,
                {
                  cN: 'params',
                  b: '\\(',
                  e: '\\)',
                  c: ['self', t, e.CBCM, r, i],
                },
              ],
            },
            {
              cN: 'class',
              bK: 'class interface',
              e: '{',
              eE: !0,
              i: /[:\(\$"]/,
              c: [{ bK: 'extends implements' }, e.UTM],
            },
            { bK: 'namespace', e: ';', i: /[\.']/, c: [e.UTM] },
            { bK: 'use', e: ';', c: [e.UTM] },
            { b: '=>' },
            r,
            i,
          ],
        };
      }),
      e.registerLanguage('python', (e) => {
        const t = { cN: 'meta', b: /^(>>>|\.\.\.) / };
        const n = {
          cN: 'string',
          c: [e.BE],
          v: [
            { b: /(u|b)?r?'''/, e: /'''/, c: [t], r: 10 },
            { b: /(u|b)?r?"""/, e: /"""/, c: [t], r: 10 },
            { b: /(u|r|ur)'/, e: /'/, r: 10 },
            { b: /(u|r|ur)"/, e: /"/, r: 10 },
            { b: /(b|br)'/, e: /'/ },
            { b: /(b|br)"/, e: /"/ },
            e.ASM,
            e.QSM,
          ],
        };
        const r = {
          cN: 'number',
          r: 0,
          v: [
            { b: `${e.BNR}[lLjJ]?` },
            { b: '\\b(0o[0-7]+)[lLjJ]?' },
            { b: `${e.CNR}[lLjJ]?` },
          ],
        };
        const i = { cN: 'params', b: /\(/, e: /\)/, c: ['self', t, r, n] };
        return {
          aliases: ['py', 'gyp'],
          k: {
            keyword:
              'and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False',
            built_in: 'Ellipsis NotImplemented',
          },
          i: /(<\/|->|\?)/,
          c: [
            t,
            r,
            n,
            e.HCM,
            {
              v: [
                { cN: 'function', bK: 'def', r: 10 },
                { cN: 'class', bK: 'class' },
              ],
              e: /:/,
              i: /[${=;\n,]/,
              c: [e.UTM, i, { b: /->/, eW: !0, k: 'None' }],
            },
            { cN: 'meta', b: /^[\t ]*@/, e: /$/ },
            { b: /\b(print|exec)\(/ },
          ],
        };
      }),
      e.registerLanguage('ruby', (e) => {
        const t =
          '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
        const n =
          'and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor';
        const r = { cN: 'doctag', b: '@[A-Za-z]+' };
        const i = { b: '#<', e: '>' };
        const o = [
          e.C('#', '$', { c: [r] }),
          e.C('^\\=begin', '^\\=end', { c: [r], r: 10 }),
          e.C('^__END__', '\\n$'),
        ];
        const s = { cN: 'subst', b: '#\\{', e: '}', k: n };
        const a = {
          cN: 'string',
          c: [e.BE, s],
          v: [
            { b: /'/, e: /'/ },
            { b: /"/, e: /"/ },
            { b: /`/, e: /`/ },
            { b: '%[qQwWx]?\\(', e: '\\)' },
            { b: '%[qQwWx]?\\[', e: '\\]' },
            { b: '%[qQwWx]?{', e: '}' },
            { b: '%[qQwWx]?<', e: '>' },
            { b: '%[qQwWx]?/', e: '/' },
            { b: '%[qQwWx]?%', e: '%' },
            { b: '%[qQwWx]?-', e: '-' },
            { b: '%[qQwWx]?\\|', e: '\\|' },
            {
              b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/,
            },
          ],
        };
        const c = { cN: 'params', b: '\\(', e: '\\)', endsParent: !0, k: n };
        const l = [
          a,
          i,
          {
            cN: 'class',
            bK: 'class module',
            e: '$|;',
            i: /=/,
            c: [
              e.inherit(e.TM, { b: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?' }),
              { b: '<\\s*', c: [{ b: `(${e.IR}::)?${e.IR}` }] },
            ].concat(o),
          },
          {
            cN: 'function',
            bK: 'def',
            e: '$|;',
            c: [e.inherit(e.TM, { b: t }), c].concat(o),
          },
          { cN: 'symbol', b: `${e.UIR}(\\!|\\?)?:`, r: 0 },
          { cN: 'symbol', b: ':', c: [a, { b: t }], r: 0 },
          {
            cN: 'number',
            b: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
            r: 0,
          },
          { b: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))' },
          {
            b: `(${e.RSR})\\s*`,
            c: [
              i,
              {
                cN: 'regexp',
                c: [e.BE, s],
                i: /\n/,
                v: [
                  { b: '/', e: '/[a-z]*' },
                  { b: '%r{', e: '}[a-z]*' },
                  { b: '%r\\(', e: '\\)[a-z]*' },
                  { b: '%r!', e: '![a-z]*' },
                  { b: '%r\\[', e: '\\][a-z]*' },
                ],
              },
            ].concat(o),
            r: 0,
          },
        ].concat(o);
        (s.c = l), (c.c = l);
        const u = '[>?]>';
        const d = '[\\w#]+\\(\\w+\\):\\d+:\\d+>';
        const f = '(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>';
        const p = [
          { b: /^\s*=>/, starts: { e: '$', c: l } },
          {
            cN: 'meta',
            b: `^(${u}|${d}|${f})`,
            starts: { e: '$', c: l },
          },
        ];
        return {
          aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
          k: n,
          i: /\/\*/,
          c: o.concat(p).concat(l),
        };
      }),
      e.registerLanguage('sql', (e) => {
        const t = e.C('--', '$');
        return {
          cI: !0,
          i: /[<>{}*]/,
          c: [
            {
              bK: 'begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke',
              e: /;/,
              eW: !0,
              k: {
                keyword:
                  'abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes c cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle d data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration e each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract f failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function g general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http i id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists k keep keep_duplicates key keys kill l language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim m main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex n name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding p package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime t table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek',
                literal: 'true false null',
                built_in:
                  'array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void',
              },
              c: [
                { cN: 'string', b: "'", e: "'", c: [e.BE, { b: "''" }] },
                { cN: 'string', b: '"', e: '"', c: [e.BE, { b: '""' }] },
                { cN: 'string', b: '`', e: '`', c: [e.BE] },
                e.CNM,
                e.CBCM,
                t,
              ],
            },
            e.CBCM,
            t,
          ],
        };
      }),
      e
    );
  }),
  jQuery.extend({
    highlight: function (e, t, n, r) {
      if (e.nodeType === 3) {
        const i = e.data.match(t);
        if (i) {
          const o = document.createElement(n || 'span');
          o.className = r || 'highlight';
          const s = e.splitText(i.index);
          s.splitText(i[0].length);
          const a = s.cloneNode(!0);
          return o.appendChild(a), s.parentNode.replaceChild(o, s), 1;
        }
      } else if (
        e.nodeType === 1 &&
        e.childNodes &&
        !/(script|style)/i.test(e.tagName) &&
        (e.tagName !== n.toUpperCase() || e.className !== r)
      )
        for (let c = 0; c < e.childNodes.length; c++)
          c += jQuery.highlight(e.childNodes[c], t, n, r);
      return 0;
    },
  }),
  (jQuery.fn.unhighlight = function (e) {
    const t = { className: 'highlight', element: 'span' };
    return (
      jQuery.extend(t, e),
      this.find(`${t.element}.${t.className}`)
        .each(function () {
          const e = this.parentNode;
          e.replaceChild(this.firstChild, this), e.normalize();
        })
        .end()
    );
  }),
  (jQuery.fn.highlight = function (e, t) {
    const n = {
      className: 'highlight',
      element: 'span',
      caseSensitive: !1,
      wordsOnly: !1,
    };
    if (
      (jQuery.extend(n, t),
      e.constructor === String && (e = [e]),
      (e = jQuery.grep(e, (e, t) => e != '')),
      (e = jQuery.map(e, (e, t) =>
        e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'),
      )),
      e.length == 0)
    )
      return this;
    const r = n.caseSensitive ? '' : 'i';
    let i = `(${e.join('|')})`;
    n.wordsOnly && (i = `\\b${i}\\b`);
    const o = new RegExp(i, r);
    return this.each(function () {
      jQuery.highlight(this, o, n.element, n.className);
    });
  }),
  (function (e) {
    typeof define === 'function' && define.amd
      ? define(['jquery'], e)
      : e(jQuery);
  })((e) => {
    let t = 0;
    const n = Array.prototype.slice;
    (e.cleanData = (function (t) {
      return function (n) {
        let r;
        let i;
        let o;
        for (o = 0; (i = n[o]) != null; o++)
          try {
            (r = e._data(i, 'events')),
              r && r.remove && e(i).triggerHandler('remove');
          } catch (s) {}
        t(n);
      };
    })(e.cleanData)),
      (e.widget = function (t, n, r) {
        let i;
        let o;
        let s;
        let a;
        const c = {};
        const l = t.split('.')[0];
        return (
          (t = t.split('.')[1]),
          (i = `${l}-${t}`),
          r || ((r = n), (n = e.Widget)),
          (e.expr[':'][i.toLowerCase()] = function (t) {
            return !!e.data(t, i);
          }),
          (e[l] = e[l] || {}),
          (o = e[l][t]),
          (s = e[l][t] =
            function (e, t) {
              return this._createWidget
                ? void (arguments.length && this._createWidget(e, t))
                : new s(e, t);
            }),
          e.extend(s, o, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: [],
          }),
          (a = new n()),
          (a.options = e.widget.extend({}, a.options)),
          e.each(r, (t, r) =>
            e.isFunction(r)
              ? void (c[t] = (function () {
                  const e = function () {
                    return n.prototype[t].apply(this, arguments);
                  };
                  const i = function (e) {
                    return n.prototype[t].apply(this, e);
                  };
                  return function () {
                    let t;
                    const n = this._super;
                    const o = this._superApply;
                    return (
                      (this._super = e),
                      (this._superApply = i),
                      (t = r.apply(this, arguments)),
                      (this._super = n),
                      (this._superApply = o),
                      t
                    );
                  };
                })())
              : void (c[t] = r),
          ),
          (s.prototype = e.widget.extend(
            a,
            { widgetEventPrefix: o ? a.widgetEventPrefix || t : t },
            c,
            { constructor: s, namespace: l, widgetName: t, widgetFullName: i },
          )),
          o
            ? (e.each(o._childConstructors, (t, n) => {
                const r = n.prototype;
                e.widget(`${r.namespace}.${r.widgetName}`, s, n._proto);
              }),
              delete o._childConstructors)
            : n._childConstructors.push(s),
          e.widget.bridge(t, s),
          s
        );
      }),
      (e.widget.extend = function (t) {
        for (
          var r, i, o = n.call(arguments, 1), s = 0, a = o.length;
          a > s;
          s++
        )
          for (r in o[s])
            (i = o[s][r]),
              o[s].hasOwnProperty(r) &&
                void 0 !== i &&
                (e.isPlainObject(i)
                  ? (t[r] = e.isPlainObject(t[r])
                      ? e.widget.extend({}, t[r], i)
                      : e.widget.extend({}, i))
                  : (t[r] = i));
        return t;
      }),
      (e.widget.bridge = function (t, r) {
        const i = r.prototype.widgetFullName || t;
        e.fn[t] = function (o) {
          const s = typeof o === 'string';
          const a = n.call(arguments, 1);
          let c = this;
          return (
            s
              ? this.each(function () {
                  let n;
                  const r = e.data(this, i);
                  return o === 'instance'
                    ? ((c = r), !1)
                    : r
                    ? e.isFunction(r[o]) && o.charAt(0) !== '_'
                      ? ((n = r[o].apply(r, a)),
                        n !== r && void 0 !== n
                          ? ((c = n && n.jquery ? c.pushStack(n.get()) : n), !1)
                          : void 0)
                      : e.error(
                          `no such method '${o}' for ${t} widget instance`,
                        )
                    : e.error(
                        `cannot call methods on ${t} prior to initialization; attempted to call method '${o}'`,
                      );
                })
              : (a.length && (o = e.widget.extend.apply(null, [o].concat(a))),
                this.each(function () {
                  const t = e.data(this, i);
                  t
                    ? (t.option(o || {}), t._init && t._init())
                    : e.data(this, i, new r(o, this));
                })),
            c
          );
        };
      }),
      (e.Widget = function () {}),
      (e.Widget._childConstructors = []),
      (e.Widget.prototype = {
        widgetName: 'widget',
        widgetEventPrefix: '',
        defaultElement: '<div>',
        options: { disabled: !1, create: null },
        _createWidget: function (n, r) {
          (r = e(r || this.defaultElement || this)[0]),
            (this.element = e(r)),
            (this.uuid = t++),
            (this.eventNamespace = `.${this.widgetName}${this.uuid}`),
            (this.bindings = e()),
            (this.hoverable = e()),
            (this.focusable = e()),
            r !== this &&
              (e.data(r, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (e) {
                  e.target === r && this.destroy();
                },
              }),
              (this.document = e(r.style ? r.ownerDocument : r.document || r)),
              (this.window = e(
                this.document[0].defaultView || this.document[0].parentWindow,
              ))),
            (this.options = e.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              n,
            )),
            this._create(),
            this._trigger('create', null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
          this._destroy(),
            this.element
              .unbind(this.eventNamespace)
              .removeData(this.widgetFullName)
              .removeData(e.camelCase(this.widgetFullName)),
            this.widget()
              .unbind(this.eventNamespace)
              .removeAttr('aria-disabled')
              .removeClass(`${this.widgetFullName}-disabled ui-state-disabled`),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass('ui-state-hover'),
            this.focusable.removeClass('ui-state-focus');
        },
        _destroy: e.noop,
        widget: function () {
          return this.element;
        },
        option: function (t, n) {
          let r;
          let i;
          let o;
          let s = t;
          if (arguments.length === 0) return e.widget.extend({}, this.options);
          if (typeof t === 'string')
            if (((s = {}), (r = t.split('.')), (t = r.shift()), r.length)) {
              for (
                i = s[t] = e.widget.extend({}, this.options[t]), o = 0;
                o < r.length - 1;
                o++
              )
                (i[r[o]] = i[r[o]] || {}), (i = i[r[o]]);
              if (((t = r.pop()), arguments.length === 1))
                return void 0 === i[t] ? null : i[t];
              i[t] = n;
            } else {
              if (arguments.length === 1)
                return void 0 === this.options[t] ? null : this.options[t];
              s[t] = n;
            }
          return this._setOptions(s), this;
        },
        _setOptions: function (e) {
          let t;
          for (t in e) this._setOption(t, e[t]);
          return this;
        },
        _setOption: function (e, t) {
          return (
            (this.options[e] = t),
            e === 'disabled' &&
              (this.widget().toggleClass(
                `${this.widgetFullName}-disabled`,
                !!t,
              ),
              t &&
                (this.hoverable.removeClass('ui-state-hover'),
                this.focusable.removeClass('ui-state-focus'))),
            this
          );
        },
        enable: function () {
          return this._setOptions({ disabled: !1 });
        },
        disable: function () {
          return this._setOptions({ disabled: !0 });
        },
        _on: function (t, n, r) {
          let i;
          const o = this;
          typeof t !== 'boolean' && ((r = n), (n = t), (t = !1)),
            r
              ? ((n = i = e(n)), (this.bindings = this.bindings.add(n)))
              : ((r = n), (n = this.element), (i = this.widget())),
            e.each(r, (r, s) => {
              function a() {
                return t ||
                  (o.options.disabled !== !0 &&
                    !e(this).hasClass('ui-state-disabled'))
                  ? (typeof s === 'string' ? o[s] : s).apply(o, arguments)
                  : void 0;
              }
              typeof s !== 'string' &&
                (a.guid = s.guid = s.guid || a.guid || e.guid++);
              const c = r.match(/^([\w:-]*)\s*(.*)$/);
              const l = c[1] + o.eventNamespace;
              const u = c[2];
              u ? i.delegate(u, l, a) : n.bind(l, a);
            });
        },
        _off: function (t, n) {
          (n =
            (n || '').split(' ').join(`${this.eventNamespace} `) +
            this.eventNamespace),
            t.unbind(n).undelegate(n),
            (this.bindings = e(this.bindings.not(t).get())),
            (this.focusable = e(this.focusable.not(t).get())),
            (this.hoverable = e(this.hoverable.not(t).get()));
        },
        _delay: function (e, t) {
          function n() {
            return (typeof e === 'string' ? r[e] : e).apply(r, arguments);
          }
          var r = this;
          return setTimeout(n, t || 0);
        },
        _hoverable: function (t) {
          (this.hoverable = this.hoverable.add(t)),
            this._on(t, {
              mouseenter: function (t) {
                e(t.currentTarget).addClass('ui-state-hover');
              },
              mouseleave: function (t) {
                e(t.currentTarget).removeClass('ui-state-hover');
              },
            });
        },
        _focusable: function (t) {
          (this.focusable = this.focusable.add(t)),
            this._on(t, {
              focusin: function (t) {
                e(t.currentTarget).addClass('ui-state-focus');
              },
              focusout: function (t) {
                e(t.currentTarget).removeClass('ui-state-focus');
              },
            });
        },
        _trigger: function (t, n, r) {
          let i;
          let o;
          const s = this.options[t];
          if (
            ((r = r || {}),
            (n = e.Event(n)),
            (n.type = (
              t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
            ).toLowerCase()),
            (n.target = this.element[0]),
            (o = n.originalEvent))
          )
            for (i in o) i in n || (n[i] = o[i]);
          return (
            this.element.trigger(n, r),
            !(
              (e.isFunction(s) &&
                s.apply(this.element[0], [n].concat(r)) === !1) ||
              n.isDefaultPrevented()
            )
          );
        },
      }),
      e.each({ show: 'fadeIn', hide: 'fadeOut' }, (t, n) => {
        e.Widget.prototype[`_${t}`] = function (r, i, o) {
          typeof i === 'string' && (i = { effect: i });
          let s;
          const a = i
            ? i === !0 || typeof i === 'number'
              ? n
              : i.effect || n
            : t;
          (i = i || {}),
            typeof i === 'number' && (i = { duration: i }),
            (s = !e.isEmptyObject(i)),
            (i.complete = o),
            i.delay && r.delay(i.delay),
            s && e.effects && e.effects.effect[a]
              ? r[t](i)
              : a !== t && r[a]
              ? r[a](i.duration, i.easing, o)
              : r.queue(function (n) {
                  e(this)[t](), o && o.call(r[0]), n();
                });
        };
      });
    e.widget;
  }),
  (function (e) {
    'use strict';

    e(window.jQuery, window, document);
  })((e, t, n, r) => {
    'use strict';

    const i = 'tocify';
    const o = 'tocify-focus';
    const s = 'tocify-hover';
    const a = 'tocify-hide';
    const c = 'tocify-header';
    const l = `.${c}`;
    const u = 'tocify-subheader';
    const d = `.${u}`;
    const f = 'tocify-item';
    const p = `.${f}`;
    const h = 'tocify-extend-page';
    const g = `.${h}`;
    e.widget('toc.tocify', {
      version: '1.8.0',
      options: {
        context: 'body',
        ignoreSelector: null,
        selectors: 'h1, h2, h3',
        showAndHide: !0,
        showEffect: 'slideDown',
        showEffectSpeed: 'medium',
        hideEffect: 'slideUp',
        hideEffectSpeed: 'medium',
        smoothScroll: !0,
        smoothScrollSpeed: 'medium',
        scrollTo: 0,
        showAndHideOnScroll: !0,
        highlightOnScroll: !0,
        highlightOffset: 40,
        theme: 'bootstrap',
        extendPage: !0,
        extendPageOffset: 100,
        history: !0,
        scrollHistory: !1,
        hashGenerator: 'compact',
        highlightDefault: !0,
      },
      _create: function () {
        const n = this;
        (n.tocifyWrapper = e('.tocify-wrapper')),
          (n.extendPageScroll = !0),
          (n.items = []),
          n._generateToc(),
          (n.cachedHeights = []),
          (n.cachedAnchors = []),
          n._addCSSClasses(),
          (n.webkit = (function () {
            for (const e in t)
              if (e && e.toLowerCase().indexOf('webkit') !== -1) return !0;
            return !1;
          })()),
          n._setEventHandlers(),
          e(t).load(() => {
            n._setActiveElement(!0),
              e('html, body')
                .promise()
                .done(() => {
                  setTimeout(() => {
                    n.extendPageScroll = !1;
                  }, 0);
                });
          });
      },
      _generateToc: function () {
        let t;
        let n;
        const r = this;
        const o = r.options.ignoreSelector;
        return (
          (t =
            this.options.selectors.indexOf(',') !== -1
              ? e(this.options.context).find(
                  this.options.selectors
                    .replace(/ /g, '')
                    .substr(0, this.options.selectors.indexOf(',')),
                )
              : e(this.options.context).find(
                  this.options.selectors.replace(/ /g, ''),
                )),
          t.length
            ? (r.element.addClass(i),
              void t.each(function (t) {
                e(this).is(o) ||
                  ((n = e('<ul/>', { id: c + t, class: c }).append(
                    r._nestElements(e(this), t),
                  )),
                  r.element.append(n),
                  e(this)
                    .nextUntil(this.nodeName.toLowerCase())
                    .each(function () {
                      e(this).find(r.options.selectors).length === 0
                        ? e(this)
                            .filter(r.options.selectors)
                            .each(function () {
                              e(this).is(o) ||
                                r._appendSubheaders.call(this, r, n);
                            })
                        : e(this)
                            .find(r.options.selectors)
                            .each(function () {
                              e(this).is(o) ||
                                r._appendSubheaders.call(this, r, n);
                            });
                    }));
              }))
            : void r.element.addClass(a)
        );
      },
      _setActiveElement: function (e) {
        const n = this;
        const r = t.location.hash.substring(1);
        const i = n.element.find(`li[data-unique='${r}']`);
        return (
          r.length
            ? (n.element.find(`.${n.focusClass}`).removeClass(n.focusClass),
              i.addClass(n.focusClass),
              n.options.showAndHide && i.click())
            : (n.element.find(`.${n.focusClass}`).removeClass(n.focusClass),
              !r.length &&
                e &&
                n.options.highlightDefault &&
                n.element.find(p).first().addClass(n.focusClass)),
          n
        );
      },
      _nestElements: function (t, n) {
        let r;
        let i;
        let o;
        return (
          (r = e.grep(this.items, (e) => e === t.text())),
          r.length ? this.items.push(t.text() + n) : this.items.push(t.text()),
          (o = this._generateHashValue(r, t, n)),
          (i = e('<li/>', { class: f, 'data-unique': o }).append(
            e('<a/>', { text: t.text() }),
          )),
          t.before(e('<div/>', { name: o, 'data-unique': o })),
          i
        );
      },
      _generateHashValue: function (e, t, n) {
        let r = '';
        const i = this.options.hashGenerator;
        if (i === 'pretty') {
          for (
            r = t.text().toLowerCase().replace(/\s/g, '-'),
              r = r.replace(/[^\x00-\x7F]/g, '');
            r.indexOf('--') > -1;

          )
            r = r.replace(/--/g, '-');
          for (; r.indexOf(':-') > -1; ) r = r.replace(/:-/g, '-');
        } else
          r =
            typeof i === 'function'
              ? i(t.text(), t)
              : t.text().replace(/\s/g, '');
        return e.length && (r += `${n}`), r;
      },
      _appendSubheaders: function (t, n) {
        const r = e(this).index(t.options.selectors);
        const i = e(t.options.selectors).eq(r - 1);
        const o = +e(this).prop('tagName').charAt(1);
        const s = +i.prop('tagName').charAt(1);
        s > o
          ? t.element
              .find(`${d}[data-tag=${o}]`)
              .last()
              .append(t._nestElements(e(this), r))
          : o === s
          ? n
              .find(p)
              .last()
              .after(t._nestElements(e(this), r))
          : n
              .find(p)
              .last()
              .after(e('<ul/>', { class: u, 'data-tag': o }))
              .next(d)
              .append(t._nestElements(e(this), r));
      },
      _setEventHandlers: function () {
        const i = this;
        this.element.on('click.tocify', 'li', function (n) {
          if (
            (i.options.history &&
              (t.location.hash = e(this).attr('data-unique')),
            i.element.find(`.${i.focusClass}`).removeClass(i.focusClass),
            e(this).addClass(i.focusClass),
            i.options.showAndHide)
          ) {
            const r = e(`li[data-unique="${e(this).attr('data-unique')}"]`);
            i._triggerShow(r);
          }
          i._scrollTo(e(this));
        }),
          this.element.find('li').on({
            'mouseenter.tocify': function () {
              e(this).addClass(i.hoverClass), e(this).css('cursor', 'pointer');
            },
            'mouseleave.tocify': function () {
              i.options.theme !== 'bootstrap' &&
                e(this).removeClass(i.hoverClass);
            },
          }),
          e(t).on('resize', () => {
            i.calculateHeights();
          }),
          e(t).on('scroll.tocify', () => {
            e('html, body')
              .promise()
              .done(() => {
                let o;
                let s;
                let a;
                let c;
                const l = e(t).scrollTop();
                const u = e(t).height();
                const d = e(n).height();
                const f = e('body')[0].scrollHeight;
                if (
                  i.options.extendPage &&
                  ((i.webkit && l >= f - u - i.options.extendPageOffset) ||
                    (!i.webkit && u + l > d - i.options.extendPageOffset)) &&
                  !e(g).length
                ) {
                  if (
                    ((s = e(
                      `div[data-unique="${e(p).last().attr('data-unique')}"]`,
                    )),
                    !s.length)
                  )
                    return;
                  (a = s.offset().top),
                    e(i.options.context).append(
                      e('<div />', {
                        class: h,
                        height: `${Math.abs(a - l)}px`,
                        'data-unique': h,
                      }),
                    ),
                    i.extendPageScroll &&
                      ((c = i.element.find('li.active')),
                      i._scrollTo(
                        e(`div[data-unique=${c.attr('data-unique')}]`),
                      ));
                }
                setTimeout(() => {
                  let s;
                  let a = null;
                  i.cachedHeights.length == 0 && i.calculateHeights();
                  const c = e(t).scrollTop();
                  if (
                    (i.cachedAnchors.each((e) =>
                      i.cachedHeights[e] - c < 0 ? void (a = e) : !1,
                    ),
                    (s = e(i.cachedAnchors[a]).attr('data-unique')),
                    (o = e(`li[data-unique="${s}"]`)),
                    i.options.highlightOnScroll &&
                      o.length &&
                      !o.hasClass(i.focusClass))
                  ) {
                    i.element
                      .find(`.${i.focusClass}`)
                      .removeClass(i.focusClass),
                      o.addClass(i.focusClass);
                    const l = i.tocifyWrapper;
                    const u = e(o).closest('.tocify-header');
                    const d = u.offset().top;
                    const f = l.offset().top;
                    const p = d - f;
                    if (p >= e(t).height()) {
                      const h = p + l.scrollTop();
                      l.scrollTop(h);
                    } else p < 0 && l.scrollTop(0);
                  }
                  i.options.scrollHistory &&
                    t.location.hash !== `#${s}` &&
                    s !== r &&
                    (history.replaceState
                      ? history.replaceState({}, '', `#${s}`)
                      : ((scrollV = n.body.scrollTop),
                        (scrollH = n.body.scrollLeft),
                        (location.hash = `#${s}`),
                        (n.body.scrollTop = scrollV),
                        (n.body.scrollLeft = scrollH))),
                    i.options.showAndHideOnScroll &&
                      i.options.showAndHide &&
                      i._triggerShow(o, !0);
                }, 0);
              });
          });
      },
      calculateHeights: function () {
        const t = this;
        (t.cachedHeights = []), (t.cachedAnchors = []);
        const n = e(t.options.context).find('div[data-unique]');
        n.each(function (n) {
          const r =
            (e(this).next().length ? e(this).next() : e(this)).offset().top -
            t.options.highlightOffset;
          t.cachedHeights[n] = r;
        }),
          (t.cachedAnchors = n);
      },
      show: function (t, n) {
        const r = this;
        if (!t.is(':visible'))
          switch (
            (t.find(d).length || t.parent().is(l) || t.parent().is(':visible')
              ? t.children(d).length || t.parent().is(l) || (t = t.closest(d))
              : (t = t.parents(d).add(t)),
            r.options.showEffect)
          ) {
            case 'none':
              t.show();
              break;
            case 'show':
              t.show(r.options.showEffectSpeed);
              break;
            case 'slideDown':
              t.slideDown(r.options.showEffectSpeed);
              break;
            case 'fadeIn':
              t.fadeIn(r.options.showEffectSpeed);
              break;
            default:
              t.show();
          }
        return (
          t.parent().is(l)
            ? r.hide(e(d).not(t))
            : r.hide(e(d).not(t.closest(l).find(d).not(t.siblings()))),
          r
        );
      },
      hide: function (e) {
        const t = this;
        switch (t.options.hideEffect) {
          case 'none':
            e.hide();
            break;
          case 'hide':
            e.hide(t.options.hideEffectSpeed);
            break;
          case 'slideUp':
            e.slideUp(t.options.hideEffectSpeed);
            break;
          case 'fadeOut':
            e.fadeOut(t.options.hideEffectSpeed);
            break;
          default:
            e.hide();
        }
        return t;
      },
      _triggerShow: function (e, t) {
        const n = this;
        return (
          e.parent().is(l) || e.next().is(d)
            ? n.show(e.next(d), t)
            : e.parent().is(d) && n.show(e.parent(), t),
          n
        );
      },
      _addCSSClasses: function () {
        return (
          this.options.theme === 'jqueryui'
            ? ((this.focusClass = 'ui-state-default'),
              (this.hoverClass = 'ui-state-hover'),
              this.element
                .addClass('ui-widget')
                .find('.toc-title')
                .addClass('ui-widget-header')
                .end()
                .find('li')
                .addClass('ui-widget-content'))
            : this.options.theme === 'bootstrap'
            ? (this.element.find(`${l},${d}`).addClass('nav nav-list'),
              (this.focusClass = 'active'))
            : ((this.focusClass = o), (this.hoverClass = s)),
          this
        );
      },
      setOption: function () {
        e.Widget.prototype._setOption.apply(this, arguments);
      },
      setOptions: function () {
        e.Widget.prototype._setOptions.apply(this, arguments);
      },
      _scrollTo: function (t) {
        const n = this;
        const r = n.options.smoothScroll || 0;
        const i = n.options.scrollTo;
        return (
          e('html, body')
            .promise()
            .done(() => {
              e('html, body').animate(
                {
                  scrollTop: `${
                    e(`div[data-unique="${t.attr('data-unique')}"]`)
                      .next()
                      .offset().top - (e.isFunction(i) ? i.call() : i)
                  }px`,
                },
                { duration: r },
              );
            }),
          n
        );
      },
    });
  }),
  (function () {
    const e = function (t) {
      const n = new e.Index();
      return (
        n.pipeline.add(e.trimmer, e.stopWordFilter, e.stemmer),
        t && t.call(n, n),
        n
      );
    };
    (e.version = '0.5.7'),
      (e.utils = {}),
      (e.utils.warn = (function (e) {
        return function (t) {
          e.console && console.warn;
        };
      })(this)),
      (e.EventEmitter = function () {
        this.events = {};
      }),
      (e.EventEmitter.prototype.addListener = function () {
        const e = Array.prototype.slice.call(arguments);
        const t = e.pop();
        const n = e;
        if (typeof t !== 'function')
          throw new TypeError('last argument must be a function');
        n.forEach(function (e) {
          this.hasHandler(e) || (this.events[e] = []), this.events[e].push(t);
        }, this);
      }),
      (e.EventEmitter.prototype.removeListener = function (e, t) {
        if (this.hasHandler(e)) {
          const n = this.events[e].indexOf(t);
          this.events[e].splice(n, 1),
            this.events[e].length || delete this.events[e];
        }
      }),
      (e.EventEmitter.prototype.emit = function (e) {
        if (this.hasHandler(e)) {
          const t = Array.prototype.slice.call(arguments, 1);
          this.events[e].forEach((e) => {
            e.apply(void 0, t);
          });
        }
      }),
      (e.EventEmitter.prototype.hasHandler = function (e) {
        return e in this.events;
      }),
      (e.tokenizer = function (e) {
        if (!arguments.length || e == null || void 0 == e) return [];
        if (Array.isArray(e)) return e.map((e) => e.toLowerCase());
        for (
          var t = e.toString().replace(/^\s+/, ''), n = t.length - 1;
          n >= 0;
          n--
        )
          if (/\S/.test(t.charAt(n))) {
            t = t.substring(0, n + 1);
            break;
          }
        return t
          .split(/(?:\s+|\-)/)
          .filter((e) => !!e)
          .map((e) => e.toLowerCase());
      }),
      (e.Pipeline = function () {
        this._stack = [];
      }),
      (e.Pipeline.registeredFunctions = {}),
      (e.Pipeline.registerFunction = function (t, n) {
        n in this.registeredFunctions &&
          e.utils.warn(`Overwriting existing registered function: ${n}`),
          (t.label = n),
          (e.Pipeline.registeredFunctions[t.label] = t);
      }),
      (e.Pipeline.warnIfFunctionNotRegistered = function (t) {
        const n = t.label && t.label in this.registeredFunctions;
        n ||
          e.utils.warn(
            'Function is not registered with pipeline. This may cause problems when serialising the index.\n',
            t,
          );
      }),
      (e.Pipeline.load = function (t) {
        const n = new e.Pipeline();
        return (
          t.forEach((t) => {
            const r = e.Pipeline.registeredFunctions[t];
            if (!r) throw new Error(`Cannot load un-registered function: ${t}`);
            n.add(r);
          }),
          n
        );
      }),
      (e.Pipeline.prototype.add = function () {
        const t = Array.prototype.slice.call(arguments);
        t.forEach(function (t) {
          e.Pipeline.warnIfFunctionNotRegistered(t), this._stack.push(t);
        }, this);
      }),
      (e.Pipeline.prototype.after = function (t, n) {
        e.Pipeline.warnIfFunctionNotRegistered(n);
        const r = this._stack.indexOf(t) + 1;
        this._stack.splice(r, 0, n);
      }),
      (e.Pipeline.prototype.before = function (t, n) {
        e.Pipeline.warnIfFunctionNotRegistered(n);
        const r = this._stack.indexOf(t);
        this._stack.splice(r, 0, n);
      }),
      (e.Pipeline.prototype.remove = function (e) {
        const t = this._stack.indexOf(e);
        this._stack.splice(t, 1);
      }),
      (e.Pipeline.prototype.run = function (e) {
        for (
          var t = [], n = e.length, r = this._stack.length, i = 0;
          n > i;
          i++
        ) {
          for (
            var o = e[i], s = 0;
            r > s && ((o = this._stack[s](o, i, e)), void 0 !== o);
            s++
          );
          void 0 !== o && t.push(o);
        }
        return t;
      }),
      (e.Pipeline.prototype.reset = function () {
        this._stack = [];
      }),
      (e.Pipeline.prototype.toJSON = function () {
        return this._stack.map(
          (t) => (e.Pipeline.warnIfFunctionNotRegistered(t), t.label),
        );
      }),
      (e.Vector = function () {
        (this._magnitude = null), (this.list = void 0), (this.length = 0);
      }),
      (e.Vector.Node = function (e, t, n) {
        (this.idx = e), (this.val = t), (this.next = n);
      }),
      (e.Vector.prototype.insert = function (t, n) {
        const r = this.list;
        if (!r) return (this.list = new e.Vector.Node(t, n, r)), this.length++;
        for (var i = r, o = r.next; void 0 != o; ) {
          if (t < o.idx)
            return (i.next = new e.Vector.Node(t, n, o)), this.length++;
          (i = o), (o = o.next);
        }
        return (i.next = new e.Vector.Node(t, n, o)), this.length++;
      }),
      (e.Vector.prototype.magnitude = function () {
        if (this._magniture) return this._magnitude;
        for (var e, t = this.list, n = 0; t; )
          (e = t.val), (n += e * e), (t = t.next);
        return (this._magnitude = Math.sqrt(n));
      }),
      (e.Vector.prototype.dot = function (e) {
        for (var t = this.list, n = e.list, r = 0; t && n; )
          t.idx < n.idx
            ? (t = t.next)
            : t.idx > n.idx
            ? (n = n.next)
            : ((r += t.val * n.val), (t = t.next), (n = n.next));
        return r;
      }),
      (e.Vector.prototype.similarity = function (e) {
        return this.dot(e) / (this.magnitude() * e.magnitude());
      }),
      (e.SortedSet = function () {
        (this.length = 0), (this.elements = []);
      }),
      (e.SortedSet.load = function (e) {
        const t = new this();
        return (t.elements = e), (t.length = e.length), t;
      }),
      (e.SortedSet.prototype.add = function () {
        Array.prototype.slice.call(arguments).forEach(function (e) {
          ~this.indexOf(e) || this.elements.splice(this.locationFor(e), 0, e);
        }, this),
          (this.length = this.elements.length);
      }),
      (e.SortedSet.prototype.toArray = function () {
        return this.elements.slice();
      }),
      (e.SortedSet.prototype.map = function (e, t) {
        return this.elements.map(e, t);
      }),
      (e.SortedSet.prototype.forEach = function (e, t) {
        return this.elements.forEach(e, t);
      }),
      (e.SortedSet.prototype.indexOf = function (e, t, n) {
        var t = t || 0;
        var n = n || this.elements.length;
        const r = n - t;
        const i = t + Math.floor(r / 2);
        const o = this.elements[i];
        return r <= 1
          ? o === e
            ? i
            : -1
          : e > o
          ? this.indexOf(e, i, n)
          : o > e
          ? this.indexOf(e, t, i)
          : o === e
          ? i
          : void 0;
      }),
      (e.SortedSet.prototype.locationFor = function (e, t, n) {
        var t = t || 0;
        var n = n || this.elements.length;
        const r = n - t;
        const i = t + Math.floor(r / 2);
        const o = this.elements[i];
        if (r <= 1) {
          if (o > e) return i;
          if (e > o) return i + 1;
        }
        return e > o
          ? this.locationFor(e, i, n)
          : o > e
          ? this.locationFor(e, t, i)
          : void 0;
      }),
      (e.SortedSet.prototype.intersect = function (t) {
        for (
          var n = new e.SortedSet(),
            r = 0,
            i = 0,
            o = this.length,
            s = t.length,
            a = this.elements,
            c = t.elements;
          ;

        ) {
          if (r > o - 1 || i > s - 1) break;
          a[r] !== c[i]
            ? a[r] < c[i]
              ? r++
              : a[r] > c[i] && i++
            : (n.add(a[r]), r++, i++);
        }
        return n;
      }),
      (e.SortedSet.prototype.clone = function () {
        const t = new e.SortedSet();
        return (t.elements = this.toArray()), (t.length = t.elements.length), t;
      }),
      (e.SortedSet.prototype.union = function (e) {
        let t;
        let n;
        let r;
        return (
          this.length >= e.length
            ? ((t = this), (n = e))
            : ((t = e), (n = this)),
          (r = t.clone()),
          r.add.apply(r, n.toArray()),
          r
        );
      }),
      (e.SortedSet.prototype.toJSON = function () {
        return this.toArray();
      }),
      (e.Index = function () {
        (this._fields = []),
          (this._ref = 'id'),
          (this.pipeline = new e.Pipeline()),
          (this.documentStore = new e.Store()),
          (this.tokenStore = new e.TokenStore()),
          (this.corpusTokens = new e.SortedSet()),
          (this.eventEmitter = new e.EventEmitter()),
          (this._idfCache = {}),
          this.on('add', 'remove', 'update', () => {
            this._idfCache = {};
          });
      }),
      (e.Index.prototype.on = function () {
        const e = Array.prototype.slice.call(arguments);
        return this.eventEmitter.addListener.apply(this.eventEmitter, e);
      }),
      (e.Index.prototype.off = function (e, t) {
        return this.eventEmitter.removeListener(e, t);
      }),
      (e.Index.load = function (t) {
        t.version !== e.version &&
          e.utils.warn(
            `version mismatch: current ${e.version} importing ${t.version}`,
          );
        const n = new this();
        return (
          (n._fields = t.fields),
          (n._ref = t.ref),
          (n.documentStore = e.Store.load(t.documentStore)),
          (n.tokenStore = e.TokenStore.load(t.tokenStore)),
          (n.corpusTokens = e.SortedSet.load(t.corpusTokens)),
          (n.pipeline = e.Pipeline.load(t.pipeline)),
          n
        );
      }),
      (e.Index.prototype.field = function (e, t) {
        var t = t || {};
        const n = { name: e, boost: t.boost || 1 };
        return this._fields.push(n), this;
      }),
      (e.Index.prototype.ref = function (e) {
        return (this._ref = e), this;
      }),
      (e.Index.prototype.add = function (t, n) {
        const r = {};
        const i = new e.SortedSet();
        const o = t[this._ref];
        var n = void 0 === n ? !0 : n;
        this._fields.forEach(function (n) {
          const o = this.pipeline.run(e.tokenizer(t[n.name]));
          (r[n.name] = o), e.SortedSet.prototype.add.apply(i, o);
        }, this),
          this.documentStore.set(o, i),
          e.SortedSet.prototype.add.apply(this.corpusTokens, i.toArray());
        for (let s = 0; s < i.length; s++) {
          var a = i.elements[s];
          const c = this._fields.reduce((e, t) => {
            const n = r[t.name].length;
            if (!n) return e;
            const i = r[t.name].filter((e) => e === a).length;
            return e + (i / n) * t.boost;
          }, 0);
          this.tokenStore.add(a, { ref: o, tf: c });
        }
        n && this.eventEmitter.emit('add', t, this);
      }),
      (e.Index.prototype.remove = function (e, t) {
        const n = e[this._ref];
        var t = void 0 === t ? !0 : t;
        if (this.documentStore.has(n)) {
          const r = this.documentStore.get(n);
          this.documentStore.remove(n),
            r.forEach(function (e) {
              this.tokenStore.remove(e, n);
            }, this),
            t && this.eventEmitter.emit('remove', e, this);
        }
      }),
      (e.Index.prototype.update = function (e, t) {
        var t = void 0 === t ? !0 : t;
        this.remove(e, !1),
          this.add(e, !1),
          t && this.eventEmitter.emit('update', e, this);
      }),
      (e.Index.prototype.idf = function (e) {
        const t = `@${e}`;
        if (Object.prototype.hasOwnProperty.call(this._idfCache, t))
          return this._idfCache[t];
        const n = this.tokenStore.count(e);
        let r = 1;
        return (
          n > 0 && (r = 1 + Math.log(this.tokenStore.length / n)),
          (this._idfCache[t] = r)
        );
      }),
      (e.Index.prototype.search = function (t) {
        const n = this.pipeline.run(e.tokenizer(t));
        const r = new e.Vector();
        const i = [];
        const o = this._fields.reduce((e, t) => e + t.boost, 0);
        const s = n.some(function (e) {
          return this.tokenStore.has(e);
        }, this);
        if (!s) return [];
        n.forEach(function (t, n, s) {
          const a = (1 / s.length) * this._fields.length * o;
          const c = this;
          const l = this.tokenStore.expand(t).reduce((n, i) => {
            const o = c.corpusTokens.indexOf(i);
            const s = c.idf(i);
            let l = 1;
            const u = new e.SortedSet();
            if (i !== t) {
              const d = Math.max(3, i.length - t.length);
              l = 1 / Math.log(d);
            }
            return (
              o > -1 && r.insert(o, a * s * l),
              Object.keys(c.tokenStore.get(i)).forEach((e) => {
                u.add(e);
              }),
              n.union(u)
            );
          }, new e.SortedSet());
          i.push(l);
        }, this);
        const a = i.reduce((e, t) => e.intersect(t));
        return a
          .map(function (e) {
            return { ref: e, score: r.similarity(this.documentVector(e)) };
          }, this)
          .sort((e, t) => t.score - e.score);
      }),
      (e.Index.prototype.documentVector = function (t) {
        for (
          var n = this.documentStore.get(t),
            r = n.length,
            i = new e.Vector(),
            o = 0;
          r > o;
          o++
        ) {
          const s = n.elements[o];
          const a = this.tokenStore.get(s)[t].tf;
          const c = this.idf(s);
          i.insert(this.corpusTokens.indexOf(s), a * c);
        }
        return i;
      }),
      (e.Index.prototype.toJSON = function () {
        return {
          version: e.version,
          fields: this._fields,
          ref: this._ref,
          documentStore: this.documentStore.toJSON(),
          tokenStore: this.tokenStore.toJSON(),
          corpusTokens: this.corpusTokens.toJSON(),
          pipeline: this.pipeline.toJSON(),
        };
      }),
      (e.Index.prototype.use = function (e) {
        const t = Array.prototype.slice.call(arguments, 1);
        t.unshift(this), e.apply(this, t);
      }),
      (e.Store = function () {
        (this.store = {}), (this.length = 0);
      }),
      (e.Store.load = function (t) {
        const n = new this();
        return (
          (n.length = t.length),
          (n.store = Object.keys(t.store).reduce(
            (n, r) => ((n[r] = e.SortedSet.load(t.store[r])), n),
            {},
          )),
          n
        );
      }),
      (e.Store.prototype.set = function (e, t) {
        this.has(e) || this.length++, (this.store[e] = t);
      }),
      (e.Store.prototype.get = function (e) {
        return this.store[e];
      }),
      (e.Store.prototype.has = function (e) {
        return e in this.store;
      }),
      (e.Store.prototype.remove = function (e) {
        this.has(e) && (delete this.store[e], this.length--);
      }),
      (e.Store.prototype.toJSON = function () {
        return { store: this.store, length: this.length };
      }),
      (e.stemmer = (function () {
        const e = {
          ational: 'ate',
          tional: 'tion',
          enci: 'ence',
          anci: 'ance',
          izer: 'ize',
          bli: 'ble',
          alli: 'al',
          entli: 'ent',
          eli: 'e',
          ousli: 'ous',
          ization: 'ize',
          ation: 'ate',
          ator: 'ate',
          alism: 'al',
          iveness: 'ive',
          fulness: 'ful',
          ousness: 'ous',
          aliti: 'al',
          iviti: 'ive',
          biliti: 'ble',
          logi: 'log',
        };
        const t = {
          icate: 'ic',
          ative: '',
          alize: 'al',
          iciti: 'ic',
          ical: 'ic',
          ful: '',
          ness: '',
        };
        const n = '[^aeiou]';
        const r = '[aeiouy]';
        const i = `${n}[^aeiouy]*`;
        const o = `${r}[aeiou]*`;
        const s = `^(${i})?${o}${i}`;
        const a = `^(${i})?${o}${i}(${o})?$`;
        const c = `^(${i})?${o}${i}${o}${i}`;
        const l = `^(${i})?${r}`;
        const u = new RegExp(s);
        const d = new RegExp(c);
        const f = new RegExp(a);
        const p = new RegExp(l);
        const h = /^(.+?)(ss|i)es$/;
        const g = /^(.+?)([^s])s$/;
        const m = /^(.+?)eed$/;
        const v = /^(.+?)(ed|ing)$/;
        const y = /.$/;
        const b = /(at|bl|iz)$/;
        const w = new RegExp('([^aeiouylsz])\\1$');
        const x = new RegExp(`^${i}${r}[^aeiouwxy]$`);
        const _ = /^(.+?[^aeiou])y$/;
        const k =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
        const C = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
        const N =
          /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
        const E = /^(.+?)(s|t)(ion)$/;
        const S = /^(.+?)e$/;
        const T = /ll$/;
        const A = new RegExp(`^${i}${r}[^aeiouwxy]$`);
        const L = function (n) {
          let r;
          let i;
          let o;
          let s;
          let a;
          let c;
          let l;
          if (n.length < 3) return n;
          if (
            ((o = n.substr(0, 1)),
            o == 'y' && (n = o.toUpperCase() + n.substr(1)),
            (s = h),
            (a = g),
            s.test(n)
              ? (n = n.replace(s, '$1$2'))
              : a.test(n) && (n = n.replace(a, '$1$2')),
            (s = m),
            (a = v),
            s.test(n))
          ) {
            var L = s.exec(n);
            (s = u), s.test(L[1]) && ((s = y), (n = n.replace(s, '')));
          } else if (a.test(n)) {
            var L = a.exec(n);
            (r = L[1]),
              (a = p),
              a.test(r) &&
                ((n = r),
                (a = b),
                (c = w),
                (l = x),
                a.test(n)
                  ? (n += 'e')
                  : c.test(n)
                  ? ((s = y), (n = n.replace(s, '')))
                  : l.test(n) && (n += 'e'));
          }
          if (((s = _), s.test(n))) {
            var L = s.exec(n);
            (r = L[1]), (n = `${r}i`);
          }
          if (((s = k), s.test(n))) {
            var L = s.exec(n);
            (r = L[1]), (i = L[2]), (s = u), s.test(r) && (n = r + e[i]);
          }
          if (((s = C), s.test(n))) {
            var L = s.exec(n);
            (r = L[1]), (i = L[2]), (s = u), s.test(r) && (n = r + t[i]);
          }
          if (((s = N), (a = E), s.test(n))) {
            var L = s.exec(n);
            (r = L[1]), (s = d), s.test(r) && (n = r);
          } else if (a.test(n)) {
            var L = a.exec(n);
            (r = L[1] + L[2]), (a = d), a.test(r) && (n = r);
          }
          if (((s = S), s.test(n))) {
            var L = s.exec(n);
            (r = L[1]),
              (s = d),
              (a = f),
              (c = A),
              (s.test(r) || (a.test(r) && !c.test(r))) && (n = r);
          }
          return (
            (s = T),
            (a = d),
            s.test(n) && a.test(n) && ((s = y), (n = n.replace(s, ''))),
            o == 'y' && (n = o.toLowerCase() + n.substr(1)),
            n
          );
        };
        return L;
      })()),
      e.Pipeline.registerFunction(e.stemmer, 'stemmer'),
      (e.stopWordFilter = function (t) {
        return e.stopWordFilter.stopWords.indexOf(t) === -1 ? t : void 0;
      }),
      (e.stopWordFilter.stopWords = new e.SortedSet()),
      (e.stopWordFilter.stopWords.length = 119),
      (e.stopWordFilter.stopWords.elements = [
        '',
        'a',
        'able',
        'about',
        'across',
        'after',
        'all',
        'almost',
        'also',
        'am',
        'among',
        'an',
        'and',
        'any',
        'are',
        'as',
        'at',
        'be',
        'because',
        'been',
        'but',
        'by',
        'can',
        'cannot',
        'could',
        'dear',
        'did',
        'do',
        'does',
        'either',
        'else',
        'ever',
        'every',
        'for',
        'from',
        'get',
        'got',
        'had',
        'has',
        'have',
        'he',
        'her',
        'hers',
        'him',
        'his',
        'how',
        'however',
        'i',
        'if',
        'in',
        'into',
        'is',
        'it',
        'its',
        'just',
        'least',
        'let',
        'like',
        'likely',
        'may',
        'me',
        'might',
        'most',
        'must',
        'my',
        'neither',
        'no',
        'nor',
        'not',
        'of',
        'off',
        'often',
        'on',
        'only',
        'or',
        'other',
        'our',
        'own',
        'rather',
        'said',
        'say',
        'says',
        'she',
        'should',
        'since',
        'so',
        'some',
        'than',
        'that',
        'the',
        'their',
        'them',
        'then',
        'there',
        'these',
        'they',
        'this',
        'tis',
        'to',
        'too',
        'twas',
        'us',
        'wants',
        'was',
        'we',
        'were',
        'what',
        'when',
        'where',
        'which',
        'while',
        'who',
        'whom',
        'why',
        'will',
        'with',
        'would',
        'yet',
        'you',
        'your',
      ]),
      e.Pipeline.registerFunction(e.stopWordFilter, 'stopWordFilter'),
      (e.trimmer = function (e) {
        return e.replace(/^\W+/, '').replace(/\W+$/, '');
      }),
      e.Pipeline.registerFunction(e.trimmer, 'trimmer'),
      (e.TokenStore = function () {
        (this.root = { docs: {} }), (this.length = 0);
      }),
      (e.TokenStore.load = function (e) {
        const t = new this();
        return (t.root = e.root), (t.length = e.length), t;
      }),
      (e.TokenStore.prototype.add = function (e, t, n) {
        var n = n || this.root;
        const r = e[0];
        const i = e.slice(1);
        return (
          r in n || (n[r] = { docs: {} }),
          i.length === 0
            ? ((n[r].docs[t.ref] = t), void (this.length += 1))
            : this.add(i, t, n[r])
        );
      }),
      (e.TokenStore.prototype.has = function (e) {
        if (!e) return !1;
        for (let t = this.root, n = 0; n < e.length; n++) {
          if (!t[e[n]]) return !1;
          t = t[e[n]];
        }
        return !0;
      }),
      (e.TokenStore.prototype.getNode = function (e) {
        if (!e) return {};
        for (var t = this.root, n = 0; n < e.length; n++) {
          if (!t[e[n]]) return {};
          t = t[e[n]];
        }
        return t;
      }),
      (e.TokenStore.prototype.get = function (e, t) {
        return this.getNode(e, t).docs || {};
      }),
      (e.TokenStore.prototype.count = function (e, t) {
        return Object.keys(this.get(e, t)).length;
      }),
      (e.TokenStore.prototype.remove = function (e, t) {
        if (e) {
          for (var n = this.root, r = 0; r < e.length; r++) {
            if (!(e[r] in n)) return;
            n = n[e[r]];
          }
          delete n.docs[t];
        }
      }),
      (e.TokenStore.prototype.expand = function (e, t) {
        const n = this.getNode(e);
        const r = n.docs || {};
        var t = t || [];
        return (
          Object.keys(r).length && t.push(e),
          Object.keys(n).forEach(function (n) {
            n !== 'docs' && t.concat(this.expand(e + n, t));
          }, this),
          t
        );
      }),
      (e.TokenStore.prototype.toJSON = function () {
        return { root: this.root, length: this.length };
      }),
      (function (e, t) {
        typeof define === 'function' && define.amd
          ? define(t)
          : typeof exports === 'object'
          ? (module.exports = t())
          : (e.lunr = t());
      })(this, () => e);
  })(),
  (function (e) {
    'use strict';

    function t(t) {
      if (t && t !== '') {
        $('.lang-selector a').removeClass('active'),
          $(`.lang-selector a[data-language-name='${t}']`).addClass('active');
        for (let n = 0; n < u.length; n++)
          $(`code.language-${u[n]}`).parent().hide();
        $(`code.language-${t}`).parent().show(),
          e.toc.calculateHeights(),
          $(window.location.hash).get(0) &&
            $(window.location.hash).get(0).scrollIntoView(!0);
      }
    }
    function n(e) {
      return typeof e !== 'string'
        ? {}
        : ((e = e.trim().replace(/^(\?|#|&)/, '')),
          e
            ? e.split('&').reduce((e, t) => {
                const n = t.replace(/\+/g, ' ').split('=');
                let r = n[0];
                let i = n[1];
                return (
                  (r = decodeURIComponent(r)),
                  (i = void 0 === i ? null : decodeURIComponent(i)),
                  e.hasOwnProperty(r)
                    ? Array.isArray(e[r])
                      ? e[r].push(i)
                      : (e[r] = [e[r], i])
                    : (e[r] = i),
                  e
                );
              }, {})
            : {});
    }
    function r(e) {
      return e
        ? Object.keys(e)
            .sort()
            .map((t) => {
              const n = e[t];
              return Array.isArray(n)
                ? n
                    .sort()
                    .map(
                      (e) =>
                        `${encodeURIComponent(t)}=${encodeURIComponent(e)}`,
                    )
                    .join('&')
                : `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
            })
            .join('&')
        : '';
    }
    function i() {
      if (location.search.length >= 1) {
        const e = n(location.search).language;
        if (e) return e;
        if (jQuery.inArray(location.search.substr(1), u) != -1)
          return location.search.substr(1);
      }
      return !1;
    }
    function o(e) {
      const t = n(location.search);
      return t.language ? ((t.language = e), r(t)) : e;
    }
    function s(e) {
      if (history) {
        let t = window.location.hash;
        t && (t = t.replace(/^#+/, '')),
          history.pushState({}, '', `?${o(e)}#${t}`),
          localStorage.setItem('language', e);
      }
    }
    function a(e) {
      const n = localStorage.getItem('language');
      u = e;
      const r = i();
      r
        ? (t(r), localStorage.setItem('language', r))
        : t(n !== null && jQuery.inArray(n, u) != -1 ? n : u[0]);
    }
    function c(e) {
      return e
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    }
    function l() {
      setTimeout(() => {
        toc.setOption('showEffectSpeed', 180);
      }, 50);
    }
    hljs.initHighlightingOnLoad();
    var u = [];
    (e.setupLanguages = a),
      (e.activateLanguage = t),
      $(() => {
        $('h1, h2').each(function () {
          $(this).prop('id', c($(this).text()));
        }),
          $('.lang-selector a').on('click', function () {
            const e = $(this).data('language-name');
            return s(e), t(e), !1;
          }),
          (window.onpopstate = function () {
            t(i());
          });
      });
    const d = function () {
      $('.tocify-wrapper').removeClass('open'),
        $('#nav-button').removeClass('open');
    };
    const f = function () {
      (e.toc = $('#toc')
        .tocify({
          selectors: 'h1, h2',
          extendPage: !1,
          theme: 'none',
          smoothScroll: !1,
          showEffectSpeed: 0,
          hideEffectSpeed: 180,
          ignoreSelector: '.toc-ignore',
          highlightOffset: 60,
          scrollTo: -1,
          scrollHistory: !0,
          hashGenerator: function (e, t) {
            return t.prop('id');
          },
        })
        .data('toc-tocify')),
        $('#nav-button').click(
          () => (
            $('.tocify-wrapper').toggleClass('open'),
            $('#nav-button').toggleClass('open'),
            !1
          ),
        ),
        $('.page-wrapper').click(d),
        $('.tocify-item').click(d);
    };
    $(() => {
      f(),
        l(),
        $('.content').imagesLoaded(() => {
          e.toc.calculateHeights();
        });
    });
  })(window),
  (function () {
    'use strict';

    function e() {
      $('h1, h2').each(function () {
        const e = $(this);
        const t = e.nextUntil('h1, h2');
        c.add({ id: e.prop('id'), title: e.text(), body: t.text() });
      });
    }
    function t() {
      (o = $('.content')),
        (s = $('.search-results')),
        $('#input-search').on('keyup', n);
    }
    function n(e) {
      if (
        (i(),
        s.addClass('visible'),
        e.keyCode === 27 && (this.value = ''),
        this.value)
      ) {
        const t = c.search(this.value).filter((e) => e.score > 1e-4);
        t.length
          ? (s.empty(),
            $.each(t, (e, t) => {
              const n = document.getElementById(t.ref);
              s.append(`<li><a href='#${t.ref}'>${$(n).text()}</a></li>`);
            }),
            r.call(this))
          : (s.html('<li></li>'),
            $('.search-results li').text(
              `No Results Found for "${this.value}"`,
            ));
      } else i(), s.removeClass('visible');
    }
    function r() {
      this.value && o.highlight(this.value, a);
    }
    function i() {
      o.unhighlight(a);
    }
    let o;
    let s;
    var a = { element: 'span', className: 'search-highlight' };
    var c = new lunr.Index();
    c.ref('id'),
      c.field('title', { boost: 10 }),
      c.field('body'),
      c.pipeline.add(lunr.trimmer, lunr.stopWordFilter),
      $(e),
      $(t);
  })();
