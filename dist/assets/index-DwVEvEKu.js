(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) f(h);
  new MutationObserver((h) => {
    for (const y of h)
      if (y.type === "childList")
        for (const E of y.addedNodes)
          E.tagName === "LINK" && E.rel === "modulepreload" && f(E);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(h) {
    const y = {};
    return (
      h.integrity && (y.integrity = h.integrity),
      h.referrerPolicy && (y.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === "use-credentials"
        ? (y.credentials = "include")
        : h.crossOrigin === "anonymous"
          ? (y.credentials = "omit")
          : (y.credentials = "same-origin"),
      y
    );
  }
  function f(h) {
    if (h.ep) return;
    h.ep = !0;
    const y = d(h);
    fetch(h.href, y);
  }
})();
var _f = { exports: {} },
  Mn = {};
var kd;
function lv() {
  if (kd) return Mn;
  kd = 1;
  var c = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function d(f, h, y) {
    var E = null;
    if (
      (y !== void 0 && (E = "" + y),
      h.key !== void 0 && (E = "" + h.key),
      "key" in h)
    ) {
      y = {};
      for (var M in h) M !== "key" && (y[M] = h[M]);
    } else y = h;
    return (
      (h = y.ref),
      { $$typeof: c, type: f, key: E, ref: h !== void 0 ? h : null, props: y }
    );
  }
  return ((Mn.Fragment = r), (Mn.jsx = d), (Mn.jsxs = d), Mn);
}
var Wd;
function av() {
  return (Wd || ((Wd = 1), (_f.exports = lv())), _f.exports);
}
var o = av(),
  Of = { exports: {} },
  F = {};
var Fd;
function nv() {
  if (Fd) return F;
  Fd = 1;
  var c = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    d = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    h = Symbol.for("react.profiler"),
    y = Symbol.for("react.consumer"),
    E = Symbol.for("react.context"),
    M = Symbol.for("react.forward_ref"),
    N = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    z = Symbol.for("react.activity"),
    q = Symbol.iterator;
  function K(p) {
    return p === null || typeof p != "object"
      ? null
      : ((p = (q && p[q]) || p["@@iterator"]),
        typeof p == "function" ? p : null);
  }
  var V = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    G = Object.assign,
    H = {};
  function J(p, U, Y) {
    ((this.props = p),
      (this.context = U),
      (this.refs = H),
      (this.updater = Y || V));
  }
  ((J.prototype.isReactComponent = {}),
    (J.prototype.setState = function (p, U) {
      if (typeof p != "object" && typeof p != "function" && p != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, p, U, "setState");
    }),
    (J.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, "forceUpdate");
    }));
  function tt() {}
  tt.prototype = J.prototype;
  function $(p, U, Y) {
    ((this.props = p),
      (this.context = U),
      (this.refs = H),
      (this.updater = Y || V));
  }
  var gt = ($.prototype = new tt());
  ((gt.constructor = $), G(gt, J.prototype), (gt.isPureReactComponent = !0));
  var xt = Array.isArray;
  function zt() {}
  var W = { H: null, A: null, T: null, S: null },
    _t = Object.prototype.hasOwnProperty;
  function Kt(p, U, Y) {
    var X = Y.ref;
    return {
      $$typeof: c,
      type: p,
      key: U,
      ref: X !== void 0 ? X : null,
      props: Y,
    };
  }
  function Me(p, U) {
    return Kt(p.type, U, p.props);
  }
  function he(p) {
    return typeof p == "object" && p !== null && p.$$typeof === c;
  }
  function Jt(p) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      p.replace(/[=:]/g, function (Y) {
        return U[Y];
      })
    );
  }
  var De = /\/+/g;
  function ve(p, U) {
    return typeof p == "object" && p !== null && p.key != null
      ? Jt("" + p.key)
      : U.toString(36);
  }
  function Ct(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (
          (typeof p.status == "string"
            ? p.then(zt, zt)
            : ((p.status = "pending"),
              p.then(
                function (U) {
                  p.status === "pending" &&
                    ((p.status = "fulfilled"), (p.value = U));
                },
                function (U) {
                  p.status === "pending" &&
                    ((p.status = "rejected"), (p.reason = U));
                },
              )),
          p.status)
        ) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function R(p, U, Y, X, I) {
    var lt = typeof p;
    (lt === "undefined" || lt === "boolean") && (p = null);
    var ot = !1;
    if (p === null) ot = !0;
    else
      switch (lt) {
        case "bigint":
        case "string":
        case "number":
          ot = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case c:
            case r:
              ot = !0;
              break;
            case C:
              return ((ot = p._init), R(ot(p._payload), U, Y, X, I));
          }
      }
    if (ot)
      return (
        (I = I(p)),
        (ot = X === "" ? "." + ve(p, 0) : X),
        xt(I)
          ? ((Y = ""),
            ot != null && (Y = ot.replace(De, "$&/") + "/"),
            R(I, U, Y, "", function (qa) {
              return qa;
            }))
          : I != null &&
            (he(I) &&
              (I = Me(
                I,
                Y +
                  (I.key == null || (p && p.key === I.key)
                    ? ""
                    : ("" + I.key).replace(De, "$&/") + "/") +
                  ot,
              )),
            U.push(I)),
        1
      );
    ot = 0;
    var kt = X === "" ? "." : X + ":";
    if (xt(p))
      for (var Ot = 0; Ot < p.length; Ot++)
        ((X = p[Ot]), (lt = kt + ve(X, Ot)), (ot += R(X, U, Y, lt, I)));
    else if (((Ot = K(p)), typeof Ot == "function"))
      for (p = Ot.call(p), Ot = 0; !(X = p.next()).done; )
        ((X = X.value), (lt = kt + ve(X, Ot++)), (ot += R(X, U, Y, lt, I)));
    else if (lt === "object") {
      if (typeof p.then == "function") return R(Ct(p), U, Y, X, I);
      throw (
        (U = String(p)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(p).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ot;
  }
  function B(p, U, Y) {
    if (p == null) return p;
    var X = [],
      I = 0;
    return (
      R(p, X, "", "", function (lt) {
        return U.call(Y, lt, I++);
      }),
      X
    );
  }
  function k(p) {
    if (p._status === -1) {
      var U = p._result;
      ((U = U()),
        U.then(
          function (Y) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 1), (p._result = Y));
          },
          function (Y) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 2), (p._result = Y));
          },
        ),
        p._status === -1 && ((p._status = 0), (p._result = U)));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var ht =
      typeof reportError == "function"
        ? reportError
        : function (p) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var U = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof p == "object" &&
                  p !== null &&
                  typeof p.message == "string"
                    ? String(p.message)
                    : String(p),
                error: p,
              });
              if (!window.dispatchEvent(U)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", p);
              return;
            }
            console.error(p);
          },
    bt = {
      map: B,
      forEach: function (p, U, Y) {
        B(
          p,
          function () {
            U.apply(this, arguments);
          },
          Y,
        );
      },
      count: function (p) {
        var U = 0;
        return (
          B(p, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (p) {
        return (
          B(p, function (U) {
            return U;
          }) || []
        );
      },
      only: function (p) {
        if (!he(p))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return p;
      },
    };
  return (
    (F.Activity = z),
    (F.Children = bt),
    (F.Component = J),
    (F.Fragment = d),
    (F.Profiler = h),
    (F.PureComponent = $),
    (F.StrictMode = f),
    (F.Suspense = N),
    (F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
    (F.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (p) {
        return W.H.useMemoCache(p);
      },
    }),
    (F.cache = function (p) {
      return function () {
        return p.apply(null, arguments);
      };
    }),
    (F.cacheSignal = function () {
      return null;
    }),
    (F.cloneElement = function (p, U, Y) {
      if (p == null)
        throw Error(
          "The argument must be a React element, but you passed " + p + ".",
        );
      var X = G({}, p.props),
        I = p.key;
      if (U != null)
        for (lt in (U.key !== void 0 && (I = "" + U.key), U))
          !_t.call(U, lt) ||
            lt === "key" ||
            lt === "__self" ||
            lt === "__source" ||
            (lt === "ref" && U.ref === void 0) ||
            (X[lt] = U[lt]);
      var lt = arguments.length - 2;
      if (lt === 1) X.children = Y;
      else if (1 < lt) {
        for (var ot = Array(lt), kt = 0; kt < lt; kt++)
          ot[kt] = arguments[kt + 2];
        X.children = ot;
      }
      return Kt(p.type, I, X);
    }),
    (F.createContext = function (p) {
      return (
        (p = {
          $$typeof: E,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (p.Provider = p),
        (p.Consumer = { $$typeof: y, _context: p }),
        p
      );
    }),
    (F.createElement = function (p, U, Y) {
      var X,
        I = {},
        lt = null;
      if (U != null)
        for (X in (U.key !== void 0 && (lt = "" + U.key), U))
          _t.call(U, X) &&
            X !== "key" &&
            X !== "__self" &&
            X !== "__source" &&
            (I[X] = U[X]);
      var ot = arguments.length - 2;
      if (ot === 1) I.children = Y;
      else if (1 < ot) {
        for (var kt = Array(ot), Ot = 0; Ot < ot; Ot++)
          kt[Ot] = arguments[Ot + 2];
        I.children = kt;
      }
      if (p && p.defaultProps)
        for (X in ((ot = p.defaultProps), ot))
          I[X] === void 0 && (I[X] = ot[X]);
      return Kt(p, lt, I);
    }),
    (F.createRef = function () {
      return { current: null };
    }),
    (F.forwardRef = function (p) {
      return { $$typeof: M, render: p };
    }),
    (F.isValidElement = he),
    (F.lazy = function (p) {
      return { $$typeof: C, _payload: { _status: -1, _result: p }, _init: k };
    }),
    (F.memo = function (p, U) {
      return { $$typeof: g, type: p, compare: U === void 0 ? null : U };
    }),
    (F.startTransition = function (p) {
      var U = W.T,
        Y = {};
      W.T = Y;
      try {
        var X = p(),
          I = W.S;
        (I !== null && I(Y, X),
          typeof X == "object" &&
            X !== null &&
            typeof X.then == "function" &&
            X.then(zt, ht));
      } catch (lt) {
        ht(lt);
      } finally {
        (U !== null && Y.types !== null && (U.types = Y.types), (W.T = U));
      }
    }),
    (F.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    (F.use = function (p) {
      return W.H.use(p);
    }),
    (F.useActionState = function (p, U, Y) {
      return W.H.useActionState(p, U, Y);
    }),
    (F.useCallback = function (p, U) {
      return W.H.useCallback(p, U);
    }),
    (F.useContext = function (p) {
      return W.H.useContext(p);
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (p, U) {
      return W.H.useDeferredValue(p, U);
    }),
    (F.useEffect = function (p, U) {
      return W.H.useEffect(p, U);
    }),
    (F.useEffectEvent = function (p) {
      return W.H.useEffectEvent(p);
    }),
    (F.useId = function () {
      return W.H.useId();
    }),
    (F.useImperativeHandle = function (p, U, Y) {
      return W.H.useImperativeHandle(p, U, Y);
    }),
    (F.useInsertionEffect = function (p, U) {
      return W.H.useInsertionEffect(p, U);
    }),
    (F.useLayoutEffect = function (p, U) {
      return W.H.useLayoutEffect(p, U);
    }),
    (F.useMemo = function (p, U) {
      return W.H.useMemo(p, U);
    }),
    (F.useOptimistic = function (p, U) {
      return W.H.useOptimistic(p, U);
    }),
    (F.useReducer = function (p, U, Y) {
      return W.H.useReducer(p, U, Y);
    }),
    (F.useRef = function (p) {
      return W.H.useRef(p);
    }),
    (F.useState = function (p) {
      return W.H.useState(p);
    }),
    (F.useSyncExternalStore = function (p, U, Y) {
      return W.H.useSyncExternalStore(p, U, Y);
    }),
    (F.useTransition = function () {
      return W.H.useTransition();
    }),
    (F.version = "19.2.4"),
    F
  );
}
var Id;
function Gf() {
  return (Id || ((Id = 1), (Of.exports = nv())), Of.exports);
}
var O = Gf(),
  Mf = { exports: {} },
  Dn = {},
  Df = { exports: {} },
  Cf = {};
var Pd;
function uv() {
  return (
    Pd ||
      ((Pd = 1),
      (function (c) {
        function r(R, B) {
          var k = R.length;
          R.push(B);
          t: for (; 0 < k; ) {
            var ht = (k - 1) >>> 1,
              bt = R[ht];
            if (0 < h(bt, B)) ((R[ht] = B), (R[k] = bt), (k = ht));
            else break t;
          }
        }
        function d(R) {
          return R.length === 0 ? null : R[0];
        }
        function f(R) {
          if (R.length === 0) return null;
          var B = R[0],
            k = R.pop();
          if (k !== B) {
            R[0] = k;
            t: for (var ht = 0, bt = R.length, p = bt >>> 1; ht < p; ) {
              var U = 2 * (ht + 1) - 1,
                Y = R[U],
                X = U + 1,
                I = R[X];
              if (0 > h(Y, k))
                X < bt && 0 > h(I, Y)
                  ? ((R[ht] = I), (R[X] = k), (ht = X))
                  : ((R[ht] = Y), (R[U] = k), (ht = U));
              else if (X < bt && 0 > h(I, k))
                ((R[ht] = I), (R[X] = k), (ht = X));
              else break t;
            }
          }
          return B;
        }
        function h(R, B) {
          var k = R.sortIndex - B.sortIndex;
          return k !== 0 ? k : R.id - B.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var y = performance;
          c.unstable_now = function () {
            return y.now();
          };
        } else {
          var E = Date,
            M = E.now();
          c.unstable_now = function () {
            return E.now() - M;
          };
        }
        var N = [],
          g = [],
          C = 1,
          z = null,
          q = 3,
          K = !1,
          V = !1,
          G = !1,
          H = !1,
          J = typeof setTimeout == "function" ? setTimeout : null,
          tt = typeof clearTimeout == "function" ? clearTimeout : null,
          $ = typeof setImmediate < "u" ? setImmediate : null;
        function gt(R) {
          for (var B = d(g); B !== null; ) {
            if (B.callback === null) f(g);
            else if (B.startTime <= R)
              (f(g), (B.sortIndex = B.expirationTime), r(N, B));
            else break;
            B = d(g);
          }
        }
        function xt(R) {
          if (((G = !1), gt(R), !V))
            if (d(N) !== null) ((V = !0), zt || ((zt = !0), Jt()));
            else {
              var B = d(g);
              B !== null && Ct(xt, B.startTime - R);
            }
        }
        var zt = !1,
          W = -1,
          _t = 5,
          Kt = -1;
        function Me() {
          return H ? !0 : !(c.unstable_now() - Kt < _t);
        }
        function he() {
          if (((H = !1), zt)) {
            var R = c.unstable_now();
            Kt = R;
            var B = !0;
            try {
              t: {
                ((V = !1), G && ((G = !1), tt(W), (W = -1)), (K = !0));
                var k = q;
                try {
                  e: {
                    for (
                      gt(R), z = d(N);
                      z !== null && !(z.expirationTime > R && Me());
                    ) {
                      var ht = z.callback;
                      if (typeof ht == "function") {
                        ((z.callback = null), (q = z.priorityLevel));
                        var bt = ht(z.expirationTime <= R);
                        if (((R = c.unstable_now()), typeof bt == "function")) {
                          ((z.callback = bt), gt(R), (B = !0));
                          break e;
                        }
                        (z === d(N) && f(N), gt(R));
                      } else f(N);
                      z = d(N);
                    }
                    if (z !== null) B = !0;
                    else {
                      var p = d(g);
                      (p !== null && Ct(xt, p.startTime - R), (B = !1));
                    }
                  }
                  break t;
                } finally {
                  ((z = null), (q = k), (K = !1));
                }
                B = void 0;
              }
            } finally {
              B ? Jt() : (zt = !1);
            }
          }
        }
        var Jt;
        if (typeof $ == "function")
          Jt = function () {
            $(he);
          };
        else if (typeof MessageChannel < "u") {
          var De = new MessageChannel(),
            ve = De.port2;
          ((De.port1.onmessage = he),
            (Jt = function () {
              ve.postMessage(null);
            }));
        } else
          Jt = function () {
            J(he, 0);
          };
        function Ct(R, B) {
          W = J(function () {
            R(c.unstable_now());
          }, B);
        }
        ((c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (c.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (_t = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (c.unstable_next = function (R) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var B = 3;
                break;
              default:
                B = q;
            }
            var k = q;
            q = B;
            try {
              return R();
            } finally {
              q = k;
            }
          }),
          (c.unstable_requestPaint = function () {
            H = !0;
          }),
          (c.unstable_runWithPriority = function (R, B) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var k = q;
            q = R;
            try {
              return B();
            } finally {
              q = k;
            }
          }),
          (c.unstable_scheduleCallback = function (R, B, k) {
            var ht = c.unstable_now();
            switch (
              (typeof k == "object" && k !== null
                ? ((k = k.delay),
                  (k = typeof k == "number" && 0 < k ? ht + k : ht))
                : (k = ht),
              R)
            ) {
              case 1:
                var bt = -1;
                break;
              case 2:
                bt = 250;
                break;
              case 5:
                bt = 1073741823;
                break;
              case 4:
                bt = 1e4;
                break;
              default:
                bt = 5e3;
            }
            return (
              (bt = k + bt),
              (R = {
                id: C++,
                callback: B,
                priorityLevel: R,
                startTime: k,
                expirationTime: bt,
                sortIndex: -1,
              }),
              k > ht
                ? ((R.sortIndex = k),
                  r(g, R),
                  d(N) === null &&
                    R === d(g) &&
                    (G ? (tt(W), (W = -1)) : (G = !0), Ct(xt, k - ht)))
                : ((R.sortIndex = bt),
                  r(N, R),
                  V || K || ((V = !0), zt || ((zt = !0), Jt()))),
              R
            );
          }),
          (c.unstable_shouldYield = Me),
          (c.unstable_wrapCallback = function (R) {
            var B = q;
            return function () {
              var k = q;
              q = B;
              try {
                return R.apply(this, arguments);
              } finally {
                q = k;
              }
            };
          }));
      })(Cf)),
    Cf
  );
}
var tm;
function iv() {
  return (tm || ((tm = 1), (Df.exports = uv())), Df.exports);
}
var Uf = { exports: {} },
  $t = {};
var em;
function cv() {
  if (em) return $t;
  em = 1;
  var c = Gf();
  function r(N) {
    var g = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        g += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return (
      "Minified React error #" +
      N +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d() {}
  var f = {
      d: {
        f: d,
        r: function () {
          throw Error(r(522));
        },
        D: d,
        C: d,
        L: d,
        m: d,
        X: d,
        S: d,
        M: d,
      },
      p: 0,
      findDOMNode: null,
    },
    h = Symbol.for("react.portal");
  function y(N, g, C) {
    var z =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: z == null ? null : "" + z,
      children: N,
      containerInfo: g,
      implementation: C,
    };
  }
  var E = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function M(N, g) {
    if (N === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    ($t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    ($t.createPortal = function (N, g) {
      var C =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(r(299));
      return y(N, g, null, C);
    }),
    ($t.flushSync = function (N) {
      var g = E.T,
        C = f.p;
      try {
        if (((E.T = null), (f.p = 2), N)) return N();
      } finally {
        ((E.T = g), (f.p = C), f.d.f());
      }
    }),
    ($t.preconnect = function (N, g) {
      typeof N == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        f.d.C(N, g));
    }),
    ($t.prefetchDNS = function (N) {
      typeof N == "string" && f.d.D(N);
    }),
    ($t.preinit = function (N, g) {
      if (typeof N == "string" && g && typeof g.as == "string") {
        var C = g.as,
          z = M(C, g.crossOrigin),
          q = typeof g.integrity == "string" ? g.integrity : void 0,
          K = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        C === "style"
          ? f.d.S(N, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: z,
              integrity: q,
              fetchPriority: K,
            })
          : C === "script" &&
            f.d.X(N, {
              crossOrigin: z,
              integrity: q,
              fetchPriority: K,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    ($t.preinitModule = function (N, g) {
      if (typeof N == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var C = M(g.as, g.crossOrigin);
            f.d.M(N, {
              crossOrigin: C,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && f.d.M(N);
    }),
    ($t.preload = function (N, g) {
      if (
        typeof N == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var C = g.as,
          z = M(C, g.crossOrigin);
        f.d.L(N, C, {
          crossOrigin: z,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    ($t.preloadModule = function (N, g) {
      if (typeof N == "string")
        if (g) {
          var C = M(g.as, g.crossOrigin);
          f.d.m(N, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: C,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else f.d.m(N);
    }),
    ($t.requestFormReset = function (N) {
      f.d.r(N);
    }),
    ($t.unstable_batchedUpdates = function (N, g) {
      return N(g);
    }),
    ($t.useFormState = function (N, g, C) {
      return E.H.useFormState(N, g, C);
    }),
    ($t.useFormStatus = function () {
      return E.H.useHostTransitionStatus();
    }),
    ($t.version = "19.2.4"),
    $t
  );
}
var lm;
function fv() {
  if (lm) return Uf.exports;
  lm = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return (c(), (Uf.exports = cv()), Uf.exports);
}
var am;
function sv() {
  if (am) return Dn;
  am = 1;
  var c = iv(),
    r = Gf(),
    d = fv();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function h(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function y(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function E(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function M(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function N(t) {
    if (y(t) !== t) throw Error(f(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = y(t)), e === null)) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return (N(n), t);
          if (u === a) return (N(n), e);
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) ((l = n), (a = u));
      else {
        for (var i = !1, s = n.child; s; ) {
          if (s === l) {
            ((i = !0), (l = n), (a = u));
            break;
          }
          if (s === a) {
            ((i = !0), (a = n), (l = u));
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = u.child; s; ) {
            if (s === l) {
              ((i = !0), (l = u), (a = n));
              break;
            }
            if (s === a) {
              ((i = !0), (a = u), (l = n));
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function C(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = C(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var z = Object.assign,
    q = Symbol.for("react.element"),
    K = Symbol.for("react.transitional.element"),
    V = Symbol.for("react.portal"),
    G = Symbol.for("react.fragment"),
    H = Symbol.for("react.strict_mode"),
    J = Symbol.for("react.profiler"),
    tt = Symbol.for("react.consumer"),
    $ = Symbol.for("react.context"),
    gt = Symbol.for("react.forward_ref"),
    xt = Symbol.for("react.suspense"),
    zt = Symbol.for("react.suspense_list"),
    W = Symbol.for("react.memo"),
    _t = Symbol.for("react.lazy"),
    Kt = Symbol.for("react.activity"),
    Me = Symbol.for("react.memo_cache_sentinel"),
    he = Symbol.iterator;
  function Jt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (he && t[he]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var De = Symbol.for("react.client.reference");
  function ve(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === De ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case G:
        return "Fragment";
      case J:
        return "Profiler";
      case H:
        return "StrictMode";
      case xt:
        return "Suspense";
      case zt:
        return "SuspenseList";
      case Kt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case V:
          return "Portal";
        case $:
          return t.displayName || "Context";
        case tt:
          return (t._context.displayName || "Context") + ".Consumer";
        case gt:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case W:
          return (
            (e = t.displayName || null),
            e !== null ? e : ve(t.type) || "Memo"
          );
        case _t:
          ((e = t._payload), (t = t._init));
          try {
            return ve(t(e));
          } catch {}
      }
    return null;
  }
  var Ct = Array.isArray,
    R = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    ht = [],
    bt = -1;
  function p(t) {
    return { current: t };
  }
  function U(t) {
    0 > bt || ((t.current = ht[bt]), (ht[bt] = null), bt--);
  }
  function Y(t, e) {
    (bt++, (ht[bt] = t.current), (t.current = e));
  }
  var X = p(null),
    I = p(null),
    lt = p(null),
    ot = p(null);
  function kt(t, e) {
    switch ((Y(lt, e), Y(I, t), Y(X, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? gd(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = gd(e)), (t = xd(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (U(X), Y(X, t));
  }
  function Ot() {
    (U(X), U(I), U(lt));
  }
  function qa(t) {
    t.memoizedState !== null && Y(ot, t);
    var e = X.current,
      l = xd(e, t.type);
    e !== l && (Y(I, t), Y(X, l));
  }
  function Ln(t) {
    (I.current === t && (U(X), U(I)),
      ot.current === t && (U(ot), (jn._currentValue = k)));
  }
  var ri, Jf;
  function Ml(t) {
    if (ri === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((ri = (e && e[1]) || ""),
          (Jf =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      ri +
      t +
      Jf
    );
  }
  var oi = !1;
  function di(t, e) {
    if (!t || oi) return "";
    oi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var D = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(D.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(D, []);
                } catch (A) {
                  var T = A;
                }
                Reflect.construct(t, [], D);
              } else {
                try {
                  D.call();
                } catch (A) {
                  T = A;
                }
                t.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                T = A;
              }
              (D = t()) &&
                typeof D.catch == "function" &&
                D.catch(function () {});
            }
          } catch (A) {
            if (A && T && typeof A.stack == "string") return [A.stack, T.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        s = u[1];
      if (i && s) {
        var m = i.split(`
`),
          S = s.split(`
`);
        for (
          n = a = 0;
          a < m.length && !m[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < S.length && !S[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === m.length || n === S.length)
          for (
            a = m.length - 1, n = S.length - 1;
            1 <= a && 0 <= n && m[a] !== S[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== S[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || m[a] !== S[n])) {
                  var j =
                    `
` + m[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      j.includes("<anonymous>") &&
                      (j = j.replace("<anonymous>", t.displayName)),
                    j
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((oi = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : "") ? Ml(l) : "";
  }
  function Cm(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ml(t.type);
      case 16:
        return Ml("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Ml("Suspense Fallback")
          : Ml("Suspense");
      case 19:
        return Ml("SuspenseList");
      case 0:
      case 15:
        return di(t.type, !1);
      case 11:
        return di(t.type.render, !1);
      case 1:
        return di(t.type, !0);
      case 31:
        return Ml("Activity");
      default:
        return "";
    }
  }
  function $f(t) {
    try {
      var e = "",
        l = null;
      do ((e += Cm(t, l)), (l = t), (t = t.return));
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var mi = Object.prototype.hasOwnProperty,
    hi = c.unstable_scheduleCallback,
    vi = c.unstable_cancelCallback,
    Um = c.unstable_shouldYield,
    Hm = c.unstable_requestPaint,
    ne = c.unstable_now,
    Bm = c.unstable_getCurrentPriorityLevel,
    kf = c.unstable_ImmediatePriority,
    Wf = c.unstable_UserBlockingPriority,
    Gn = c.unstable_NormalPriority,
    qm = c.unstable_LowPriority,
    Ff = c.unstable_IdlePriority,
    Ym = c.log,
    Lm = c.unstable_setDisableYieldValue,
    Ya = null,
    ue = null;
  function ul(t) {
    if (
      (typeof Ym == "function" && Lm(t),
      ue && typeof ue.setStrictMode == "function")
    )
      try {
        ue.setStrictMode(Ya, t);
      } catch {}
  }
  var ie = Math.clz32 ? Math.clz32 : Qm,
    Gm = Math.log,
    Xm = Math.LN2;
  function Qm(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Gm(t) / Xm) | 0)) | 0);
  }
  var Xn = 256,
    Qn = 262144,
    Zn = 4194304;
  function Dl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Vn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0
        ? ((a = s & ~u),
          a !== 0
            ? (n = Dl(a))
            : ((i &= s),
              i !== 0
                ? (n = Dl(i))
                : l || ((l = s & ~t), l !== 0 && (n = Dl(l)))))
        : ((s = a & ~u),
          s !== 0
            ? (n = Dl(s))
            : i !== 0
              ? (n = Dl(i))
              : l || ((l = a & ~t), l !== 0 && (n = Dl(l)))),
      n === 0
        ? 0
        : e !== 0 &&
            e !== n &&
            (e & u) === 0 &&
            ((u = n & -n),
            (l = e & -e),
            u >= l || (u === 32 && (l & 4194048) !== 0))
          ? e
          : n
    );
  }
  function La(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Zm(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function If() {
    var t = Zn;
    return ((Zn <<= 1), (Zn & 62914560) === 0 && (Zn = 4194304), t);
  }
  function yi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ga(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Vm(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    ((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0));
    var s = t.entanglements,
      m = t.expirationTimes,
      S = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var j = 31 - ie(l),
        D = 1 << j;
      ((s[j] = 0), (m[j] = -1));
      var T = S[j];
      if (T !== null)
        for (S[j] = null, j = 0; j < T.length; j++) {
          var A = T[j];
          A !== null && (A.lane &= -536870913);
        }
      l &= ~D;
    }
    (a !== 0 && Pf(t, a, 0),
      u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e)));
  }
  function Pf(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - ie(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function ts(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - ie(l),
        n = 1 << a;
      ((n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n));
    }
  }
  function es(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : pi(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function pi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function gi(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ls() {
    var t = B.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Qd(t.type));
  }
  function as(t, e) {
    var l = B.p;
    try {
      return ((B.p = t), e());
    } finally {
      B.p = l;
    }
  }
  var il = Math.random().toString(36).slice(2),
    Xt = "__reactFiber$" + il,
    Ft = "__reactProps$" + il,
    Wl = "__reactContainer$" + il,
    xi = "__reactEvents$" + il,
    wm = "__reactListeners$" + il,
    Km = "__reactHandles$" + il,
    ns = "__reactResources$" + il,
    Xa = "__reactMarker$" + il;
  function bi(t) {
    (delete t[Xt], delete t[Ft], delete t[xi], delete t[wm], delete t[Km]);
  }
  function Fl(t) {
    var e = t[Xt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[Wl] || l[Xt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Ad(t); t !== null; ) {
            if ((l = t[Xt])) return l;
            t = Ad(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function Il(t) {
    if ((t = t[Xt] || t[Wl])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Qa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function Pl(t) {
    var e = t[ns];
    return (
      e ||
        (e = t[ns] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Lt(t) {
    t[Xa] = !0;
  }
  var us = new Set(),
    is = {};
  function Cl(t, e) {
    (ta(t, e), ta(t + "Capture", e));
  }
  function ta(t, e) {
    for (is[t] = e, t = 0; t < e.length; t++) us.add(e[t]);
  }
  var Jm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    cs = {},
    fs = {};
  function $m(t) {
    return mi.call(fs, t)
      ? !0
      : mi.call(cs, t)
        ? !1
        : Jm.test(t)
          ? (fs[t] = !0)
          : ((cs[t] = !0), !1);
  }
  function wn(t, e, l) {
    if ($m(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Kn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Le(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function ye(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ss(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function km(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            ((l = "" + i), u.call(this, i));
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (i) {
            l = "" + i;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Si(t) {
    if (!t._valueTracker) {
      var e = ss(t) ? "checked" : "value";
      t._valueTracker = km(t, e, "" + t[e]);
    }
  }
  function rs(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = ss(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Jn(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Wm = /[\n"\\]/g;
  function pe(t) {
    return t.replace(Wm, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ei(t, e, l, a, n, u, i, s) {
    ((t.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (t.type = i)
        : t.removeAttribute("type"),
      e != null
        ? i === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + ye(e))
          : t.value !== "" + ye(e) && (t.value = "" + ye(e))
        : (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
      e != null
        ? Ni(t, i, ye(e))
        : l != null
          ? Ni(t, i, ye(l))
          : a != null && t.removeAttribute("value"),
      n == null && u != null && (t.defaultChecked = !!u),
      n != null &&
        (t.checked = n && typeof n != "function" && typeof n != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (t.name = "" + ye(s))
        : t.removeAttribute("name"));
  }
  function os(t, e, l, a, n, u, i, s) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) {
        Si(t);
        return;
      }
      ((l = l != null ? "" + ye(l) : ""),
        (e = e != null ? "" + ye(e) : l),
        s || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = s ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.name = i),
      Si(t));
  }
  function Ni(t, e, l) {
    (e === "number" && Jn(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function ea(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        ((n = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0));
    } else {
      for (l = "" + ye(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          ((t[n].selected = !0), a && (t[n].defaultSelected = !0));
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ds(t, e, l) {
    if (
      e != null &&
      ((e = "" + ye(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + ye(l) : "";
  }
  function ms(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Ct(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ""), (e = l));
    }
    ((l = ye(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a),
      Si(t));
  }
  function la(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Fm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function hs(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, l)
        : typeof l != "number" || l === 0 || Fm.has(e)
          ? e === "float"
            ? (t.cssFloat = l)
            : (t[e] = ("" + l).trim())
          : (t[e] = l + "px");
  }
  function vs(t, e, l) {
    if (e != null && typeof e != "object") throw Error(f(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var n in e)
        ((a = e[n]), e.hasOwnProperty(n) && l[n] !== a && hs(t, n, a));
    } else for (var u in e) e.hasOwnProperty(u) && hs(t, u, e[u]);
  }
  function Ti(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Im = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Pm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $n(t) {
    return Pm.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Ge() {}
  var zi = null;
  function Ai(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var aa = null,
    na = null;
  function ys(t) {
    var e = Il(t);
    if (e && (t = e.stateNode)) {
      var l = t[Ft] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Ei(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + pe("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[Ft] || null;
                if (!n) throw Error(f(90));
                Ei(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (e = 0; e < l.length; e++)
              ((a = l[e]), a.form === t.form && rs(a));
          }
          break t;
        case "textarea":
          ds(t, l.value, l.defaultValue);
          break t;
        case "select":
          ((e = l.value), e != null && ea(t, !!l.multiple, e, !1));
      }
    }
  }
  var ji = !1;
  function ps(t, e, l) {
    if (ji) return t(e, l);
    ji = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((ji = !1),
        (aa !== null || na !== null) &&
          (Hu(), aa && ((e = aa), (t = na), (na = aa = null), ys(e), t)))
      )
        for (e = 0; e < t.length; e++) ys(t[e]);
    }
  }
  function Za(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Ft] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(f(231, e, typeof l));
    return l;
  }
  var Xe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ri = !1;
  if (Xe)
    try {
      var Va = {};
      (Object.defineProperty(Va, "passive", {
        get: function () {
          Ri = !0;
        },
      }),
        window.addEventListener("test", Va, Va),
        window.removeEventListener("test", Va, Va));
    } catch {
      Ri = !1;
    }
  var cl = null,
    _i = null,
    kn = null;
  function gs() {
    if (kn) return kn;
    var t,
      e = _i,
      l = e.length,
      a,
      n = "value" in cl ? cl.value : cl.textContent,
      u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++);
    return (kn = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Wn(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Fn() {
    return !0;
  }
  function xs() {
    return !1;
  }
  function It(t) {
    function e(l, a, n, u, i) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var s in t)
        t.hasOwnProperty(s) && ((l = t[s]), (this[s] = l ? l(u) : u[s]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Fn
          : xs),
        (this.isPropagationStopped = xs),
        this
      );
    }
    return (
      z(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Fn));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Fn));
        },
        persist: function () {},
        isPersistent: Fn,
      }),
      e
    );
  }
  var Ul = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    In = It(Ul),
    wa = z({}, Ul, { view: 0, detail: 0 }),
    th = It(wa),
    Oi,
    Mi,
    Ka,
    Pn = z({}, wa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ci,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ka &&
              (Ka && t.type === "mousemove"
                ? ((Oi = t.screenX - Ka.screenX), (Mi = t.screenY - Ka.screenY))
                : (Mi = Oi = 0),
              (Ka = t)),
            Oi);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Mi;
      },
    }),
    bs = It(Pn),
    eh = z({}, Pn, { dataTransfer: 0 }),
    lh = It(eh),
    ah = z({}, wa, { relatedTarget: 0 }),
    Di = It(ah),
    nh = z({}, Ul, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    uh = It(nh),
    ih = z({}, Ul, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    ch = It(ih),
    fh = z({}, Ul, { data: 0 }),
    Ss = It(fh),
    sh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    rh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    oh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function dh(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = oh[t])
        ? !!e[t]
        : !1;
  }
  function Ci() {
    return dh;
  }
  var mh = z({}, wa, {
      key: function (t) {
        if (t.key) {
          var e = sh[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Wn(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? rh[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ci,
      charCode: function (t) {
        return t.type === "keypress" ? Wn(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Wn(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    hh = It(mh),
    vh = z({}, Pn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Es = It(vh),
    yh = z({}, wa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ci,
    }),
    ph = It(yh),
    gh = z({}, Ul, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xh = It(gh),
    bh = z({}, Pn, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Sh = It(bh),
    Eh = z({}, Ul, { newState: 0, oldState: 0 }),
    Nh = It(Eh),
    Th = [9, 13, 27, 32],
    Ui = Xe && "CompositionEvent" in window,
    Ja = null;
  Xe && "documentMode" in document && (Ja = document.documentMode);
  var zh = Xe && "TextEvent" in window && !Ja,
    Ns = Xe && (!Ui || (Ja && 8 < Ja && 11 >= Ja)),
    Ts = " ",
    zs = !1;
  function As(t, e) {
    switch (t) {
      case "keyup":
        return Th.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function js(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var ua = !1;
  function Ah(t, e) {
    switch (t) {
      case "compositionend":
        return js(e);
      case "keypress":
        return e.which !== 32 ? null : ((zs = !0), Ts);
      case "textInput":
        return ((t = e.data), t === Ts && zs ? null : t);
      default:
        return null;
    }
  }
  function jh(t, e) {
    if (ua)
      return t === "compositionend" || (!Ui && As(t, e))
        ? ((t = gs()), (kn = _i = cl = null), (ua = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Ns && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Rh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Rs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Rh[t.type] : e === "textarea";
  }
  function _s(t, e, l, a) {
    (aa ? (na ? na.push(a) : (na = [a])) : (aa = a),
      (e = Qu(e, "onChange")),
      0 < e.length &&
        ((l = new In("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e })));
  }
  var $a = null,
    ka = null;
  function _h(t) {
    dd(t, 0);
  }
  function tu(t) {
    var e = Qa(t);
    if (rs(e)) return t;
  }
  function Os(t, e) {
    if (t === "change") return e;
  }
  var Ms = !1;
  if (Xe) {
    var Hi;
    if (Xe) {
      var Bi = "oninput" in document;
      if (!Bi) {
        var Ds = document.createElement("div");
        (Ds.setAttribute("oninput", "return;"),
          (Bi = typeof Ds.oninput == "function"));
      }
      Hi = Bi;
    } else Hi = !1;
    Ms = Hi && (!document.documentMode || 9 < document.documentMode);
  }
  function Cs() {
    $a && ($a.detachEvent("onpropertychange", Us), (ka = $a = null));
  }
  function Us(t) {
    if (t.propertyName === "value" && tu(ka)) {
      var e = [];
      (_s(e, ka, t, Ai(t)), ps(_h, e));
    }
  }
  function Oh(t, e, l) {
    t === "focusin"
      ? (Cs(), ($a = e), (ka = l), $a.attachEvent("onpropertychange", Us))
      : t === "focusout" && Cs();
  }
  function Mh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return tu(ka);
  }
  function Dh(t, e) {
    if (t === "click") return tu(e);
  }
  function Ch(t, e) {
    if (t === "input" || t === "change") return tu(e);
  }
  function Uh(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ce = typeof Object.is == "function" ? Object.is : Uh;
  function Wa(t, e) {
    if (ce(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!mi.call(e, n) || !ce(t[n], e[n])) return !1;
    }
    return !0;
  }
  function Hs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Bs(t, e) {
    var l = Hs(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Hs(l);
    }
  }
  function qs(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? qs(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Ys(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Jn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Jn(t.document);
    }
    return e;
  }
  function qi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Hh = Xe && "documentMode" in document && 11 >= document.documentMode,
    ia = null,
    Yi = null,
    Fa = null,
    Li = !1;
  function Ls(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Li ||
      ia == null ||
      ia !== Jn(a) ||
      ((a = ia),
      "selectionStart" in a && qi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Fa && Wa(Fa, a)) ||
        ((Fa = a),
        (a = Qu(Yi, "onSelect")),
        0 < a.length &&
          ((e = new In("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = ia))));
  }
  function Hl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var ca = {
      animationend: Hl("Animation", "AnimationEnd"),
      animationiteration: Hl("Animation", "AnimationIteration"),
      animationstart: Hl("Animation", "AnimationStart"),
      transitionrun: Hl("Transition", "TransitionRun"),
      transitionstart: Hl("Transition", "TransitionStart"),
      transitioncancel: Hl("Transition", "TransitionCancel"),
      transitionend: Hl("Transition", "TransitionEnd"),
    },
    Gi = {},
    Gs = {};
  Xe &&
    ((Gs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ca.animationend.animation,
      delete ca.animationiteration.animation,
      delete ca.animationstart.animation),
    "TransitionEvent" in window || delete ca.transitionend.transition);
  function Bl(t) {
    if (Gi[t]) return Gi[t];
    if (!ca[t]) return t;
    var e = ca[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Gs) return (Gi[t] = e[l]);
    return t;
  }
  var Xs = Bl("animationend"),
    Qs = Bl("animationiteration"),
    Zs = Bl("animationstart"),
    Bh = Bl("transitionrun"),
    qh = Bl("transitionstart"),
    Yh = Bl("transitioncancel"),
    Vs = Bl("transitionend"),
    ws = new Map(),
    Xi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Xi.push("scrollEnd");
  function Re(t, e) {
    (ws.set(t, e), Cl(e, [t]));
  }
  var eu =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    ge = [],
    fa = 0,
    Qi = 0;
  function lu() {
    for (var t = fa, e = (Qi = fa = 0); e < t; ) {
      var l = ge[e];
      ge[e++] = null;
      var a = ge[e];
      ge[e++] = null;
      var n = ge[e];
      ge[e++] = null;
      var u = ge[e];
      if (((ge[e++] = null), a !== null && n !== null)) {
        var i = a.pending;
        (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n));
      }
      u !== 0 && Ks(l, n, u);
    }
  }
  function au(t, e, l, a) {
    ((ge[fa++] = t),
      (ge[fa++] = e),
      (ge[fa++] = l),
      (ge[fa++] = a),
      (Qi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function Zi(t, e, l, a) {
    return (au(t, e, l, a), nu(t));
  }
  function ql(t, e) {
    return (au(t, null, null, e), nu(t));
  }
  function Ks(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      ((u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = u),
        (u = u.return));
    return t.tag === 3
      ? ((u = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - ie(l)),
          (t = u.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        u)
      : null;
  }
  function nu(t) {
    if (50 < bn) throw ((bn = 0), (Ic = null), Error(f(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var sa = {};
  function Lh(t, e, l, a) {
    ((this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function fe(t, e, l, a) {
    return new Lh(t, e, l, a);
  }
  function Vi(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Qe(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = fe(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Js(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function uu(t, e, l, a, n, u) {
    var i = 0;
    if (((a = t), typeof t == "function")) Vi(t) && (i = 1);
    else if (typeof t == "string")
      i = V0(t, l, X.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case Kt:
          return (
            (t = fe(31, l, e, n)),
            (t.elementType = Kt),
            (t.lanes = u),
            t
          );
        case G:
          return Yl(l.children, n, u, e);
        case H:
          ((i = 8), (n |= 24));
          break;
        case J:
          return (
            (t = fe(12, l, e, n | 2)),
            (t.elementType = J),
            (t.lanes = u),
            t
          );
        case xt:
          return (
            (t = fe(13, l, e, n)),
            (t.elementType = xt),
            (t.lanes = u),
            t
          );
        case zt:
          return (
            (t = fe(19, l, e, n)),
            (t.elementType = zt),
            (t.lanes = u),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case $:
                i = 10;
                break t;
              case tt:
                i = 9;
                break t;
              case gt:
                i = 11;
                break t;
              case W:
                i = 14;
                break t;
              case _t:
                ((i = 16), (a = null));
                break t;
            }
          ((i = 29),
            (l = Error(f(130, t === null ? "null" : typeof t, ""))),
            (a = null));
      }
    return (
      (e = fe(i, l, e, n)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = u),
      e
    );
  }
  function Yl(t, e, l, a) {
    return ((t = fe(7, t, a, e)), (t.lanes = l), t);
  }
  function wi(t, e, l) {
    return ((t = fe(6, t, null, e)), (t.lanes = l), t);
  }
  function $s(t) {
    var e = fe(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Ki(t, e, l) {
    return (
      (e = fe(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var ks = new WeakMap();
  function xe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = ks.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: $f(e) }), ks.set(t, e), e);
    }
    return { value: t, source: e, stack: $f(e) };
  }
  var ra = [],
    oa = 0,
    iu = null,
    Ia = 0,
    be = [],
    Se = 0,
    fl = null,
    Ce = 1,
    Ue = "";
  function Ze(t, e) {
    ((ra[oa++] = Ia), (ra[oa++] = iu), (iu = t), (Ia = e));
  }
  function Ws(t, e, l) {
    ((be[Se++] = Ce), (be[Se++] = Ue), (be[Se++] = fl), (fl = t));
    var a = Ce;
    t = Ue;
    var n = 32 - ie(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - ie(e) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (Ce = (1 << (32 - ie(e) + n)) | (l << n) | a),
        (Ue = u + t));
    } else ((Ce = (1 << u) | (l << n) | a), (Ue = t));
  }
  function Ji(t) {
    t.return !== null && (Ze(t, 1), Ws(t, 1, 0));
  }
  function $i(t) {
    for (; t === iu; )
      ((iu = ra[--oa]), (ra[oa] = null), (Ia = ra[--oa]), (ra[oa] = null));
    for (; t === fl; )
      ((fl = be[--Se]),
        (be[Se] = null),
        (Ue = be[--Se]),
        (be[Se] = null),
        (Ce = be[--Se]),
        (be[Se] = null));
  }
  function Fs(t, e) {
    ((be[Se++] = Ce),
      (be[Se++] = Ue),
      (be[Se++] = fl),
      (Ce = e.id),
      (Ue = e.overflow),
      (fl = t));
  }
  var Qt = null,
    Et = null,
    ct = !1,
    sl = null,
    Ee = !1,
    ki = Error(f(519));
  function rl(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Pa(xe(e, t)), ki);
  }
  function Is(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Xt] = t), (e[Ft] = a), l)) {
      case "dialog":
        (nt("cancel", e), nt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        nt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < En.length; l++) nt(En[l], e);
        break;
      case "source":
        nt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (nt("error", e), nt("load", e));
        break;
      case "details":
        nt("toggle", e);
        break;
      case "input":
        (nt("invalid", e),
          os(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        nt("invalid", e);
        break;
      case "textarea":
        (nt("invalid", e), ms(e, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      yd(e.textContent, l)
        ? (a.popover != null && (nt("beforetoggle", e), nt("toggle", e)),
          a.onScroll != null && nt("scroll", e),
          a.onScrollEnd != null && nt("scrollend", e),
          a.onClick != null && (e.onclick = Ge),
          (e = !0))
        : (e = !1),
      e || rl(t, !0));
  }
  function Ps(t) {
    for (Qt = t.return; Qt; )
      switch (Qt.tag) {
        case 5:
        case 31:
        case 13:
          Ee = !1;
          return;
        case 27:
        case 3:
          Ee = !0;
          return;
        default:
          Qt = Qt.return;
      }
  }
  function da(t) {
    if (t !== Qt) return !1;
    if (!ct) return (Ps(t), (ct = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || hf(t.type, t.memoizedProps))),
        (l = !l)),
      l && Et && rl(t),
      Ps(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      Et = zd(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      Et = zd(t);
    } else
      e === 27
        ? ((e = Et), Tl(t.type) ? ((t = xf), (xf = null), (Et = t)) : (Et = e))
        : (Et = Qt ? Te(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ll() {
    ((Et = Qt = null), (ct = !1));
  }
  function Wi() {
    var t = sl;
    return (
      t !== null &&
        (le === null ? (le = t) : le.push.apply(le, t), (sl = null)),
      t
    );
  }
  function Pa(t) {
    sl === null ? (sl = [t]) : sl.push(t);
  }
  var Fi = p(null),
    Gl = null,
    Ve = null;
  function ol(t, e, l) {
    (Y(Fi, e._currentValue), (e._currentValue = l));
  }
  function we(t) {
    ((t._currentValue = Fi.current), U(Fi));
  }
  function Ii(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Pi(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var m = 0; m < e.length; m++)
            if (s.context === e[m]) {
              ((u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                Ii(u.return, l, t),
                a || (i = null));
              break t;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(f(341));
        ((i.lanes |= l),
          (u = i.alternate),
          u !== null && (u.lanes |= l),
          Ii(i, l, t),
          (i = null));
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (i = n));
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function ma(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(f(387));
        if (((i = i.memoizedProps), i !== null)) {
          var s = n.type;
          ce(n.pendingProps.value, i.value) ||
            (t !== null ? t.push(s) : (t = [s]));
        }
      } else if (n === ot.current) {
        if (((i = n.alternate), i === null)) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(jn) : (t = [jn]));
      }
      n = n.return;
    }
    (t !== null && Pi(e, t, l, a), (e.flags |= 262144));
  }
  function cu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ce(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Xl(t) {
    ((Gl = t),
      (Ve = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function Zt(t) {
    return tr(Gl, t);
  }
  function fu(t, e) {
    return (Gl === null && Xl(t), tr(t, e));
  }
  function tr(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Ve === null)) {
      if (t === null) throw Error(f(308));
      ((Ve = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else Ve = Ve.next = e;
    return l;
  }
  var Gh =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                }));
            };
          },
    Xh = c.unstable_scheduleCallback,
    Qh = c.unstable_NormalPriority,
    Ut = {
      $$typeof: $,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function tc() {
    return { controller: new Gh(), data: new Map(), refCount: 0 };
  }
  function tn(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Xh(Qh, function () {
          t.controller.abort();
        }));
  }
  var en = null,
    ec = 0,
    ha = 0,
    va = null;
  function Zh(t, e) {
    if (en === null) {
      var l = (en = []);
      ((ec = 0),
        (ha = nf()),
        (va = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (ec++, e.then(er, er), e);
  }
  function er() {
    if (--ec === 0 && en !== null) {
      va !== null && (va.status = "fulfilled");
      var t = en;
      ((en = null), (ha = 0), (va = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Vh(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      t.then(
        function () {
          ((a.status = "fulfilled"), (a.value = e));
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var lr = R.S;
  R.S = function (t, e) {
    ((Go = ne()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        Zh(t, e),
      lr !== null && lr(t, e));
  };
  var Ql = p(null);
  function lc() {
    var t = Ql.current;
    return t !== null ? t : St.pooledCache;
  }
  function su(t, e) {
    e === null ? Y(Ql, Ql.current) : Y(Ql, e.pool);
  }
  function ar() {
    var t = lc();
    return t === null ? null : { parent: Ut._currentValue, pool: t };
  }
  var ya = Error(f(460)),
    ac = Error(f(474)),
    ru = Error(f(542)),
    ou = { then: function () {} };
  function nr(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function ur(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Ge, Ge), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), cr(t), t);
      default:
        if (typeof e.status == "string") e.then(Ge, Ge);
        else {
          if (((t = St), t !== null && 100 < t.shellSuspendCounter))
            throw Error(f(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), cr(t), t);
        }
        throw ((Vl = e), ya);
    }
  }
  function Zl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((Vl = l), ya)
        : l;
    }
  }
  var Vl = null;
  function ir() {
    if (Vl === null) throw Error(f(459));
    var t = Vl;
    return ((Vl = null), t);
  }
  function cr(t) {
    if (t === ya || t === ru) throw Error(f(483));
  }
  var pa = null,
    ln = 0;
  function du(t) {
    var e = ln;
    return ((ln += 1), pa === null && (pa = []), ur(pa, t, e));
  }
  function an(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function mu(t, e) {
    throw e.$$typeof === q
      ? Error(f(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          f(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function fr(t) {
    function e(x, v) {
      if (t) {
        var b = x.deletions;
        b === null ? ((x.deletions = [v]), (x.flags |= 16)) : b.push(v);
      }
    }
    function l(x, v) {
      if (!t) return null;
      for (; v !== null; ) (e(x, v), (v = v.sibling));
      return null;
    }
    function a(x) {
      for (var v = new Map(); x !== null; )
        (x.key !== null ? v.set(x.key, x) : v.set(x.index, x), (x = x.sibling));
      return v;
    }
    function n(x, v) {
      return ((x = Qe(x, v)), (x.index = 0), (x.sibling = null), x);
    }
    function u(x, v, b) {
      return (
        (x.index = b),
        t
          ? ((b = x.alternate),
            b !== null
              ? ((b = b.index), b < v ? ((x.flags |= 67108866), v) : b)
              : ((x.flags |= 67108866), v))
          : ((x.flags |= 1048576), v)
      );
    }
    function i(x) {
      return (t && x.alternate === null && (x.flags |= 67108866), x);
    }
    function s(x, v, b, _) {
      return v === null || v.tag !== 6
        ? ((v = wi(b, x.mode, _)), (v.return = x), v)
        : ((v = n(v, b)), (v.return = x), v);
    }
    function m(x, v, b, _) {
      var Z = b.type;
      return Z === G
        ? j(x, v, b.props.children, _, b.key)
        : v !== null &&
            (v.elementType === Z ||
              (typeof Z == "object" &&
                Z !== null &&
                Z.$$typeof === _t &&
                Zl(Z) === v.type))
          ? ((v = n(v, b.props)), an(v, b), (v.return = x), v)
          : ((v = uu(b.type, b.key, b.props, null, x.mode, _)),
            an(v, b),
            (v.return = x),
            v);
    }
    function S(x, v, b, _) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== b.containerInfo ||
        v.stateNode.implementation !== b.implementation
        ? ((v = Ki(b, x.mode, _)), (v.return = x), v)
        : ((v = n(v, b.children || [])), (v.return = x), v);
    }
    function j(x, v, b, _, Z) {
      return v === null || v.tag !== 7
        ? ((v = Yl(b, x.mode, _, Z)), (v.return = x), v)
        : ((v = n(v, b)), (v.return = x), v);
    }
    function D(x, v, b) {
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return ((v = wi("" + v, x.mode, b)), (v.return = x), v);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case K:
            return (
              (b = uu(v.type, v.key, v.props, null, x.mode, b)),
              an(b, v),
              (b.return = x),
              b
            );
          case V:
            return ((v = Ki(v, x.mode, b)), (v.return = x), v);
          case _t:
            return ((v = Zl(v)), D(x, v, b));
        }
        if (Ct(v) || Jt(v))
          return ((v = Yl(v, x.mode, b, null)), (v.return = x), v);
        if (typeof v.then == "function") return D(x, du(v), b);
        if (v.$$typeof === $) return D(x, fu(x, v), b);
        mu(x, v);
      }
      return null;
    }
    function T(x, v, b, _) {
      var Z = v !== null ? v.key : null;
      if (
        (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
      )
        return Z !== null ? null : s(x, v, "" + b, _);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case K:
            return b.key === Z ? m(x, v, b, _) : null;
          case V:
            return b.key === Z ? S(x, v, b, _) : null;
          case _t:
            return ((b = Zl(b)), T(x, v, b, _));
        }
        if (Ct(b) || Jt(b)) return Z !== null ? null : j(x, v, b, _, null);
        if (typeof b.then == "function") return T(x, v, du(b), _);
        if (b.$$typeof === $) return T(x, v, fu(x, b), _);
        mu(x, b);
      }
      return null;
    }
    function A(x, v, b, _, Z) {
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return ((x = x.get(b) || null), s(v, x, "" + _, Z));
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case K:
            return (
              (x = x.get(_.key === null ? b : _.key) || null),
              m(v, x, _, Z)
            );
          case V:
            return (
              (x = x.get(_.key === null ? b : _.key) || null),
              S(v, x, _, Z)
            );
          case _t:
            return ((_ = Zl(_)), A(x, v, b, _, Z));
        }
        if (Ct(_) || Jt(_))
          return ((x = x.get(b) || null), j(v, x, _, Z, null));
        if (typeof _.then == "function") return A(x, v, b, du(_), Z);
        if (_.$$typeof === $) return A(x, v, b, fu(v, _), Z);
        mu(v, _);
      }
      return null;
    }
    function L(x, v, b, _) {
      for (
        var Z = null, ft = null, Q = v, et = (v = 0), it = null;
        Q !== null && et < b.length;
        et++
      ) {
        Q.index > et ? ((it = Q), (Q = null)) : (it = Q.sibling);
        var st = T(x, Q, b[et], _);
        if (st === null) {
          Q === null && (Q = it);
          break;
        }
        (t && Q && st.alternate === null && e(x, Q),
          (v = u(st, v, et)),
          ft === null ? (Z = st) : (ft.sibling = st),
          (ft = st),
          (Q = it));
      }
      if (et === b.length) return (l(x, Q), ct && Ze(x, et), Z);
      if (Q === null) {
        for (; et < b.length; et++)
          ((Q = D(x, b[et], _)),
            Q !== null &&
              ((v = u(Q, v, et)),
              ft === null ? (Z = Q) : (ft.sibling = Q),
              (ft = Q)));
        return (ct && Ze(x, et), Z);
      }
      for (Q = a(Q); et < b.length; et++)
        ((it = A(Q, x, et, b[et], _)),
          it !== null &&
            (t &&
              it.alternate !== null &&
              Q.delete(it.key === null ? et : it.key),
            (v = u(it, v, et)),
            ft === null ? (Z = it) : (ft.sibling = it),
            (ft = it)));
      return (
        t &&
          Q.forEach(function (_l) {
            return e(x, _l);
          }),
        ct && Ze(x, et),
        Z
      );
    }
    function w(x, v, b, _) {
      if (b == null) throw Error(f(151));
      for (
        var Z = null, ft = null, Q = v, et = (v = 0), it = null, st = b.next();
        Q !== null && !st.done;
        et++, st = b.next()
      ) {
        Q.index > et ? ((it = Q), (Q = null)) : (it = Q.sibling);
        var _l = T(x, Q, st.value, _);
        if (_l === null) {
          Q === null && (Q = it);
          break;
        }
        (t && Q && _l.alternate === null && e(x, Q),
          (v = u(_l, v, et)),
          ft === null ? (Z = _l) : (ft.sibling = _l),
          (ft = _l),
          (Q = it));
      }
      if (st.done) return (l(x, Q), ct && Ze(x, et), Z);
      if (Q === null) {
        for (; !st.done; et++, st = b.next())
          ((st = D(x, st.value, _)),
            st !== null &&
              ((v = u(st, v, et)),
              ft === null ? (Z = st) : (ft.sibling = st),
              (ft = st)));
        return (ct && Ze(x, et), Z);
      }
      for (Q = a(Q); !st.done; et++, st = b.next())
        ((st = A(Q, x, et, st.value, _)),
          st !== null &&
            (t &&
              st.alternate !== null &&
              Q.delete(st.key === null ? et : st.key),
            (v = u(st, v, et)),
            ft === null ? (Z = st) : (ft.sibling = st),
            (ft = st)));
      return (
        t &&
          Q.forEach(function (ev) {
            return e(x, ev);
          }),
        ct && Ze(x, et),
        Z
      );
    }
    function pt(x, v, b, _) {
      if (
        (typeof b == "object" &&
          b !== null &&
          b.type === G &&
          b.key === null &&
          (b = b.props.children),
        typeof b == "object" && b !== null)
      ) {
        switch (b.$$typeof) {
          case K:
            t: {
              for (var Z = b.key; v !== null; ) {
                if (v.key === Z) {
                  if (((Z = b.type), Z === G)) {
                    if (v.tag === 7) {
                      (l(x, v.sibling),
                        (_ = n(v, b.props.children)),
                        (_.return = x),
                        (x = _));
                      break t;
                    }
                  } else if (
                    v.elementType === Z ||
                    (typeof Z == "object" &&
                      Z !== null &&
                      Z.$$typeof === _t &&
                      Zl(Z) === v.type)
                  ) {
                    (l(x, v.sibling),
                      (_ = n(v, b.props)),
                      an(_, b),
                      (_.return = x),
                      (x = _));
                    break t;
                  }
                  l(x, v);
                  break;
                } else e(x, v);
                v = v.sibling;
              }
              b.type === G
                ? ((_ = Yl(b.props.children, x.mode, _, b.key)),
                  (_.return = x),
                  (x = _))
                : ((_ = uu(b.type, b.key, b.props, null, x.mode, _)),
                  an(_, b),
                  (_.return = x),
                  (x = _));
            }
            return i(x);
          case V:
            t: {
              for (Z = b.key; v !== null; ) {
                if (v.key === Z)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === b.containerInfo &&
                    v.stateNode.implementation === b.implementation
                  ) {
                    (l(x, v.sibling),
                      (_ = n(v, b.children || [])),
                      (_.return = x),
                      (x = _));
                    break t;
                  } else {
                    l(x, v);
                    break;
                  }
                else e(x, v);
                v = v.sibling;
              }
              ((_ = Ki(b, x.mode, _)), (_.return = x), (x = _));
            }
            return i(x);
          case _t:
            return ((b = Zl(b)), pt(x, v, b, _));
        }
        if (Ct(b)) return L(x, v, b, _);
        if (Jt(b)) {
          if (((Z = Jt(b)), typeof Z != "function")) throw Error(f(150));
          return ((b = Z.call(b)), w(x, v, b, _));
        }
        if (typeof b.then == "function") return pt(x, v, du(b), _);
        if (b.$$typeof === $) return pt(x, v, fu(x, b), _);
        mu(x, b);
      }
      return (typeof b == "string" && b !== "") ||
        typeof b == "number" ||
        typeof b == "bigint"
        ? ((b = "" + b),
          v !== null && v.tag === 6
            ? (l(x, v.sibling), (_ = n(v, b)), (_.return = x), (x = _))
            : (l(x, v), (_ = wi(b, x.mode, _)), (_.return = x), (x = _)),
          i(x))
        : l(x, v);
    }
    return function (x, v, b, _) {
      try {
        ln = 0;
        var Z = pt(x, v, b, _);
        return ((pa = null), Z);
      } catch (Q) {
        if (Q === ya || Q === ru) throw Q;
        var ft = fe(29, Q, null, x.mode);
        return ((ft.lanes = _), (ft.return = x), ft);
      }
    };
  }
  var wl = fr(!0),
    sr = fr(!1),
    dl = !1;
  function nc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function uc(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function ml(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function hl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (rt & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = nu(t)),
        Ks(t, null, l),
        e
      );
    }
    return (au(t, a, e, l), nu(t));
  }
  function nn(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), ts(t, l));
    }
  }
  function ic(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = i) : (u = u.next = i), (l = l.next));
        } while (l !== null);
        u === null ? (n = u = e) : (u = u.next = e);
      } else n = u = e;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l));
      return;
    }
    ((t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e));
  }
  var cc = !1;
  function un() {
    if (cc) {
      var t = va;
      if (t !== null) throw t;
    }
  }
  function cn(t, e, l, a) {
    cc = !1;
    var n = t.updateQueue;
    dl = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var m = s,
        S = m.next;
      ((m.next = null), i === null ? (u = S) : (i.next = S), (i = m));
      var j = t.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (s = j.lastBaseUpdate),
        s !== i &&
          (s === null ? (j.firstBaseUpdate = S) : (s.next = S),
          (j.lastBaseUpdate = m)));
    }
    if (u !== null) {
      var D = n.baseState;
      ((i = 0), (j = S = m = null), (s = u));
      do {
        var T = s.lane & -536870913,
          A = T !== s.lane;
        if (A ? (ut & T) === T : (a & T) === T) {
          (T !== 0 && T === ha && (cc = !0),
            j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var L = t,
              w = s;
            T = e;
            var pt = l;
            switch (w.tag) {
              case 1:
                if (((L = w.payload), typeof L == "function")) {
                  D = L.call(pt, D, T);
                  break t;
                }
                D = L;
                break t;
              case 3:
                L.flags = (L.flags & -65537) | 128;
              case 0:
                if (
                  ((L = w.payload),
                  (T = typeof L == "function" ? L.call(pt, D, T) : L),
                  T == null)
                )
                  break t;
                D = z({}, D, T);
                break t;
              case 2:
                dl = !0;
            }
          }
          ((T = s.callback),
            T !== null &&
              ((t.flags |= 64),
              A && (t.flags |= 8192),
              (A = n.callbacks),
              A === null ? (n.callbacks = [T]) : A.push(T)));
        } else
          ((A = {
            lane: T,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            j === null ? ((S = j = A), (m = D)) : (j = j.next = A),
            (i |= T));
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          ((A = s),
            (s = A.next),
            (A.next = null),
            (n.lastBaseUpdate = A),
            (n.shared.pending = null));
        }
      } while (!0);
      (j === null && (m = D),
        (n.baseState = m),
        (n.firstBaseUpdate = S),
        (n.lastBaseUpdate = j),
        u === null && (n.shared.lanes = 0),
        (xl |= i),
        (t.lanes = i),
        (t.memoizedState = D));
    }
  }
  function rr(t, e) {
    if (typeof t != "function") throw Error(f(191, t));
    t.call(e);
  }
  function or(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) rr(l[t], e);
  }
  var ga = p(null),
    hu = p(0);
  function dr(t, e) {
    ((t = tl), Y(hu, t), Y(ga, e), (tl = t | e.baseLanes));
  }
  function fc() {
    (Y(hu, tl), Y(ga, ga.current));
  }
  function sc() {
    ((tl = hu.current), U(ga), U(hu));
  }
  var se = p(null),
    Ne = null;
  function vl(t) {
    var e = t.alternate;
    (Y(Mt, Mt.current & 1),
      Y(se, t),
      Ne === null &&
        (e === null || ga.current !== null || e.memoizedState !== null) &&
        (Ne = t));
  }
  function rc(t) {
    (Y(Mt, Mt.current), Y(se, t), Ne === null && (Ne = t));
  }
  function mr(t) {
    t.tag === 22
      ? (Y(Mt, Mt.current), Y(se, t), Ne === null && (Ne = t))
      : yl();
  }
  function yl() {
    (Y(Mt, Mt.current), Y(se, se.current));
  }
  function re(t) {
    (U(se), Ne === t && (Ne = null), U(Mt));
  }
  var Mt = p(0);
  function vu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || pf(l) || gf(l)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var Ke = 0,
    P = null,
    vt = null,
    Ht = null,
    yu = !1,
    xa = !1,
    Kl = !1,
    pu = 0,
    fn = 0,
    ba = null,
    wh = 0;
  function jt() {
    throw Error(f(321));
  }
  function oc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ce(t[l], e[l])) return !1;
    return !0;
  }
  function dc(t, e, l, a, n, u) {
    return (
      (Ke = u),
      (P = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (R.H = t === null || t.memoizedState === null ? Wr : jc),
      (Kl = !1),
      (u = l(a, n)),
      (Kl = !1),
      xa && (u = vr(e, l, a, n)),
      hr(t),
      u
    );
  }
  function hr(t) {
    R.H = on;
    var e = vt !== null && vt.next !== null;
    if (((Ke = 0), (Ht = vt = P = null), (yu = !1), (fn = 0), (ba = null), e))
      throw Error(f(300));
    t === null ||
      Bt ||
      ((t = t.dependencies), t !== null && cu(t) && (Bt = !0));
  }
  function vr(t, e, l, a) {
    P = t;
    var n = 0;
    do {
      if ((xa && (ba = null), (fn = 0), (xa = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (Ht = vt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((R.H = Fr), (u = e(l, a)));
    } while (xa);
    return u;
  }
  function Kh() {
    var t = R.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? sn(e) : e),
      (t = t.useState()[0]),
      (vt !== null ? vt.memoizedState : null) !== t && (P.flags |= 1024),
      e
    );
  }
  function mc() {
    var t = pu !== 0;
    return ((pu = 0), t);
  }
  function hc(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function vc(t) {
    if (yu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      yu = !1;
    }
    ((Ke = 0), (Ht = vt = P = null), (xa = !1), (fn = pu = 0), (ba = null));
  }
  function Wt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ht === null ? (P.memoizedState = Ht = t) : (Ht = Ht.next = t), Ht);
  }
  function Dt() {
    if (vt === null) {
      var t = P.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = vt.next;
    var e = Ht === null ? P.memoizedState : Ht.next;
    if (e !== null) ((Ht = e), (vt = t));
    else {
      if (t === null)
        throw P.alternate === null ? Error(f(467)) : Error(f(310));
      ((vt = t),
        (t = {
          memoizedState: vt.memoizedState,
          baseState: vt.baseState,
          baseQueue: vt.baseQueue,
          queue: vt.queue,
          next: null,
        }),
        Ht === null ? (P.memoizedState = Ht = t) : (Ht = Ht.next = t));
    }
    return Ht;
  }
  function gu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function sn(t) {
    var e = fn;
    return (
      (fn += 1),
      ba === null && (ba = []),
      (t = ur(ba, t, e)),
      (e = P),
      (Ht === null ? e.memoizedState : Ht.next) === null &&
        ((e = e.alternate),
        (R.H = e === null || e.memoizedState === null ? Wr : jc)),
      t
    );
  }
  function xu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return sn(t);
      if (t.$$typeof === $) return Zt(t);
    }
    throw Error(f(438, String(t)));
  }
  function yc(t) {
    var e = null,
      l = P.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = P.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = gu()), (P.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Me;
    return (e.index++, l);
  }
  function Je(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function bu(t) {
    var e = Dt();
    return pc(e, vt, t);
  }
  function pc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        ((n.next = u.next), (u.next = i));
      }
      ((e.baseQueue = n = u), (a.pending = null));
    }
    if (((u = t.baseState), n === null)) t.memoizedState = u;
    else {
      e = n.next;
      var s = (i = null),
        m = null,
        S = e,
        j = !1;
      do {
        var D = S.lane & -536870913;
        if (D !== S.lane ? (ut & D) === D : (Ke & D) === D) {
          var T = S.revertLane;
          if (T === 0)
            (m !== null &&
              (m = m.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: S.action,
                  hasEagerState: S.hasEagerState,
                  eagerState: S.eagerState,
                  next: null,
                }),
              D === ha && (j = !0));
          else if ((Ke & T) === T) {
            ((S = S.next), T === ha && (j = !0));
            continue;
          } else
            ((D = {
              lane: 0,
              revertLane: S.revertLane,
              gesture: null,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null,
            }),
              m === null ? ((s = m = D), (i = u)) : (m = m.next = D),
              (P.lanes |= T),
              (xl |= T));
          ((D = S.action),
            Kl && l(u, D),
            (u = S.hasEagerState ? S.eagerState : l(u, D)));
        } else
          ((T = {
            lane: D,
            revertLane: S.revertLane,
            gesture: S.gesture,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null,
          }),
            m === null ? ((s = m = T), (i = u)) : (m = m.next = T),
            (P.lanes |= D),
            (xl |= D));
        S = S.next;
      } while (S !== null && S !== e);
      if (
        (m === null ? (i = u) : (m.next = s),
        !ce(u, t.memoizedState) && ((Bt = !0), j && ((l = va), l !== null)))
      )
        throw l;
      ((t.memoizedState = u),
        (t.baseState = i),
        (t.baseQueue = m),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function gc(t) {
    var e = Dt(),
      l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = (n = n.next);
      do ((u = t(u, i.action)), (i = i.next));
      while (i !== n);
      (ce(u, e.memoizedState) || (Bt = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function yr(t, e, l) {
    var a = P,
      n = Dt(),
      u = ct;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var i = !ce((vt || n).memoizedState, l);
    if (
      (i && ((n.memoizedState = l), (Bt = !0)),
      (n = n.queue),
      Sc(xr.bind(null, a, n, t), [t]),
      n.getSnapshot !== e || i || (Ht !== null && Ht.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Sa(9, { destroy: void 0 }, gr.bind(null, a, n, l, e), null),
        St === null)
      )
        throw Error(f(349));
      u || (Ke & 127) !== 0 || pr(a, e, l);
    }
    return l;
  }
  function pr(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = P.updateQueue),
      e === null
        ? ((e = gu()), (P.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function gr(t, e, l, a) {
    ((e.value = l), (e.getSnapshot = a), br(e) && Sr(t));
  }
  function xr(t, e, l) {
    return l(function () {
      br(e) && Sr(t);
    });
  }
  function br(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ce(t, l);
    } catch {
      return !0;
    }
  }
  function Sr(t) {
    var e = ql(t, 2);
    e !== null && ae(e, t, 2);
  }
  function xc(t) {
    var e = Wt();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Kl)) {
        ul(!0);
        try {
          l();
        } finally {
          ul(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Je,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Er(t, e, l, a) {
    return ((t.baseState = l), pc(t, vt, typeof a == "function" ? a : Je));
  }
  function Jh(t, e, l, a, n) {
    if (Nu(t)) throw Error(f(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (R.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = e.pending),
        l === null
          ? ((u.next = e.pending = u), Nr(e, u))
          : ((u.next = l.next), (e.pending = l.next = u)));
    }
  }
  function Nr(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var u = R.T,
        i = {};
      R.T = i;
      try {
        var s = l(n, a),
          m = R.S;
        (m !== null && m(i, s), Tr(t, e, s));
      } catch (S) {
        bc(t, e, S);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (R.T = u));
      }
    } else
      try {
        ((u = l(n, a)), Tr(t, e, u));
      } catch (S) {
        bc(t, e, S);
      }
  }
  function Tr(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            zr(t, e, a);
          },
          function (a) {
            return bc(t, e, a);
          },
        )
      : zr(t, e, l);
  }
  function zr(t, e, l) {
    ((e.status = "fulfilled"),
      (e.value = l),
      Ar(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Nr(t, l))));
  }
  function bc(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = "rejected"), (e.reason = l), Ar(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function Ar(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function jr(t, e) {
    return e;
  }
  function Rr(t, e) {
    if (ct) {
      var l = St.formState;
      if (l !== null) {
        t: {
          var a = P;
          if (ct) {
            if (Et) {
              e: {
                for (var n = Et, u = Ee; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (((n = Te(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                ((u = n.data), (n = u === "F!" || u === "F" ? n : null));
              }
              if (n) {
                ((Et = Te(n.nextSibling)), (a = n.data === "F!"));
                break t;
              }
            }
            rl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = Wt()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jr,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Jr.bind(null, P, a)),
      (a.dispatch = l),
      (a = xc(!1)),
      (u = Ac.bind(null, P, !1, a.queue)),
      (a = Wt()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = Jh.bind(null, P, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function _r(t) {
    var e = Dt();
    return Or(e, vt, t);
  }
  function Or(t, e, l) {
    if (
      ((e = pc(t, e, jr)[0]),
      (t = bu(Je)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = sn(e);
      } catch (i) {
        throw i === ya ? ru : i;
      }
    else a = e;
    e = Dt();
    var n = e.queue,
      u = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((P.flags |= 2048),
        Sa(9, { destroy: void 0 }, $h.bind(null, n, l), null)),
      [a, u, t]
    );
  }
  function $h(t, e) {
    t.action = e;
  }
  function Mr(t) {
    var e = Dt(),
      l = vt;
    if (l !== null) return Or(e, l, t);
    (Dt(), (e = e.memoizedState), (l = Dt()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = t), [e, a, !1]);
  }
  function Sa(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = P.updateQueue),
      e === null && ((e = gu()), (P.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Dr() {
    return Dt().memoizedState;
  }
  function Su(t, e, l, a) {
    var n = Wt();
    ((P.flags |= t),
      (n.memoizedState = Sa(
        1 | e,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function Eu(t, e, l, a) {
    var n = Dt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    vt !== null && a !== null && oc(a, vt.memoizedState.deps)
      ? (n.memoizedState = Sa(e, u, l, a))
      : ((P.flags |= t), (n.memoizedState = Sa(1 | e, u, l, a)));
  }
  function Cr(t, e) {
    Su(8390656, 8, t, e);
  }
  function Sc(t, e) {
    Eu(2048, 8, t, e);
  }
  function kh(t) {
    P.flags |= 4;
    var e = P.updateQueue;
    if (e === null) ((e = gu()), (P.updateQueue = e), (e.events = [t]));
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function Ur(t) {
    var e = Dt().memoizedState;
    return (
      kh({ ref: e, nextImpl: t }),
      function () {
        if ((rt & 2) !== 0) throw Error(f(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Hr(t, e) {
    return Eu(4, 2, t, e);
  }
  function Br(t, e) {
    return Eu(4, 4, t, e);
  }
  function qr(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Yr(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), Eu(4, 4, qr.bind(null, e, t), l));
  }
  function Ec() {}
  function Lr(t, e) {
    var l = Dt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && oc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Gr(t, e) {
    var l = Dt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && oc(e, a[1])) return a[0];
    if (((a = t()), Kl)) {
      ul(!0);
      try {
        t();
      } finally {
        ul(!1);
      }
    }
    return ((l.memoizedState = [a, e]), a);
  }
  function Nc(t, e, l) {
    return l === void 0 || ((Ke & 1073741824) !== 0 && (ut & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Qo()), (P.lanes |= t), (xl |= t), l);
  }
  function Xr(t, e, l, a) {
    return ce(l, e)
      ? l
      : ga.current !== null
        ? ((t = Nc(t, l, a)), ce(t, e) || (Bt = !0), t)
        : (Ke & 42) === 0 || ((Ke & 1073741824) !== 0 && (ut & 261930) === 0)
          ? ((Bt = !0), (t.memoizedState = l))
          : ((t = Qo()), (P.lanes |= t), (xl |= t), e);
  }
  function Qr(t, e, l, a, n) {
    var u = B.p;
    B.p = u !== 0 && 8 > u ? u : 8;
    var i = R.T,
      s = {};
    ((R.T = s), Ac(t, !1, e, l));
    try {
      var m = n(),
        S = R.S;
      if (
        (S !== null && S(s, m),
        m !== null && typeof m == "object" && typeof m.then == "function")
      ) {
        var j = Vh(m, a);
        rn(t, e, j, me(t));
      } else rn(t, e, a, me(t));
    } catch (D) {
      rn(t, e, { then: function () {}, status: "rejected", reason: D }, me());
    } finally {
      ((B.p = u),
        i !== null && s.types !== null && (i.types = s.types),
        (R.T = i));
    }
  }
  function Wh() {}
  function Tc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = Zr(t).queue;
    Qr(
      t,
      n,
      e,
      k,
      l === null
        ? Wh
        : function () {
            return (Vr(t), l(a));
          },
    );
  }
  function Zr(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Je,
        lastRenderedState: k,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Je,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Vr(t) {
    var e = Zr(t);
    (e.next === null && (e = t.alternate.memoizedState),
      rn(t, e.next.queue, {}, me()));
  }
  function zc() {
    return Zt(jn);
  }
  function wr() {
    return Dt().memoizedState;
  }
  function Kr() {
    return Dt().memoizedState;
  }
  function Fh(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = me();
          t = ml(l);
          var a = hl(e, t, l);
          (a !== null && (ae(a, e, l), nn(a, e, l)),
            (e = { cache: tc() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Ih(t, e, l) {
    var a = me();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Nu(t)
        ? $r(e, l)
        : ((l = Zi(t, e, l, a)), l !== null && (ae(l, t, a), kr(l, e, a))));
  }
  function Jr(t, e, l) {
    var a = me();
    rn(t, e, l, a);
  }
  function rn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Nu(t)) $r(e, n);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var i = e.lastRenderedState,
            s = u(i, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), ce(s, i)))
            return (au(t, e, n, 0), St === null && lu(), !1);
        } catch {}
      if (((l = Zi(t, e, n, a)), l !== null))
        return (ae(l, t, a), kr(l, e, a), !0);
    }
    return !1;
  }
  function Ac(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: nf(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Nu(t))
    ) {
      if (e) throw Error(f(479));
    } else ((e = Zi(t, l, a, 2)), e !== null && ae(e, t, 2));
  }
  function Nu(t) {
    var e = t.alternate;
    return t === P || (e !== null && e === P);
  }
  function $r(t, e) {
    xa = yu = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e));
  }
  function kr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), ts(t, l));
    }
  }
  var on = {
    readContext: Zt,
    use: xu,
    useCallback: jt,
    useContext: jt,
    useEffect: jt,
    useImperativeHandle: jt,
    useLayoutEffect: jt,
    useInsertionEffect: jt,
    useMemo: jt,
    useReducer: jt,
    useRef: jt,
    useState: jt,
    useDebugValue: jt,
    useDeferredValue: jt,
    useTransition: jt,
    useSyncExternalStore: jt,
    useId: jt,
    useHostTransitionStatus: jt,
    useFormState: jt,
    useActionState: jt,
    useOptimistic: jt,
    useMemoCache: jt,
    useCacheRefresh: jt,
  };
  on.useEffectEvent = jt;
  var Wr = {
      readContext: Zt,
      use: xu,
      useCallback: function (t, e) {
        return ((Wt().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: Zt,
      useEffect: Cr,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null),
          Su(4194308, 4, qr.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return Su(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Su(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = Wt();
        e = e === void 0 ? null : e;
        var a = t();
        if (Kl) {
          ul(!0);
          try {
            t();
          } finally {
            ul(!1);
          }
        }
        return ((l.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, l) {
        var a = Wt();
        if (l !== void 0) {
          var n = l(e);
          if (Kl) {
            ul(!0);
            try {
              l(e);
            } finally {
              ul(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = Ih.bind(null, P, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Wt();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = xc(t);
        var e = t.queue,
          l = Jr.bind(null, P, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: Ec,
      useDeferredValue: function (t, e) {
        var l = Wt();
        return Nc(l, t, e);
      },
      useTransition: function () {
        var t = xc(!1);
        return (
          (t = Qr.bind(null, P, t.queue, !0, !1)),
          (Wt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = P,
          n = Wt();
        if (ct) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = e()), St === null)) throw Error(f(349));
          (ut & 127) !== 0 || pr(a, e, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: e };
        return (
          (n.queue = u),
          Cr(xr.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          Sa(9, { destroy: void 0 }, gr.bind(null, a, u, l, e), null),
          l
        );
      },
      useId: function () {
        var t = Wt(),
          e = St.identifierPrefix;
        if (ct) {
          var l = Ue,
            a = Ce;
          ((l = (a & ~(1 << (32 - ie(a) - 1))).toString(32) + l),
            (e = "_" + e + "R_" + l),
            (l = pu++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "_"));
        } else ((l = wh++), (e = "_" + e + "r_" + l.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: zc,
      useFormState: Rr,
      useActionState: Rr,
      useOptimistic: function (t) {
        var e = Wt();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = Ac.bind(null, P, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: yc,
      useCacheRefresh: function () {
        return (Wt().memoizedState = Fh.bind(null, P));
      },
      useEffectEvent: function (t) {
        var e = Wt(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((rt & 2) !== 0) throw Error(f(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    jc = {
      readContext: Zt,
      use: xu,
      useCallback: Lr,
      useContext: Zt,
      useEffect: Sc,
      useImperativeHandle: Yr,
      useInsertionEffect: Hr,
      useLayoutEffect: Br,
      useMemo: Gr,
      useReducer: bu,
      useRef: Dr,
      useState: function () {
        return bu(Je);
      },
      useDebugValue: Ec,
      useDeferredValue: function (t, e) {
        var l = Dt();
        return Xr(l, vt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = bu(Je)[0],
          e = Dt().memoizedState;
        return [typeof t == "boolean" ? t : sn(t), e];
      },
      useSyncExternalStore: yr,
      useId: wr,
      useHostTransitionStatus: zc,
      useFormState: _r,
      useActionState: _r,
      useOptimistic: function (t, e) {
        var l = Dt();
        return Er(l, vt, t, e);
      },
      useMemoCache: yc,
      useCacheRefresh: Kr,
    };
  jc.useEffectEvent = Ur;
  var Fr = {
    readContext: Zt,
    use: xu,
    useCallback: Lr,
    useContext: Zt,
    useEffect: Sc,
    useImperativeHandle: Yr,
    useInsertionEffect: Hr,
    useLayoutEffect: Br,
    useMemo: Gr,
    useReducer: gc,
    useRef: Dr,
    useState: function () {
      return gc(Je);
    },
    useDebugValue: Ec,
    useDeferredValue: function (t, e) {
      var l = Dt();
      return vt === null ? Nc(l, t, e) : Xr(l, vt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = gc(Je)[0],
        e = Dt().memoizedState;
      return [typeof t == "boolean" ? t : sn(t), e];
    },
    useSyncExternalStore: yr,
    useId: wr,
    useHostTransitionStatus: zc,
    useFormState: Mr,
    useActionState: Mr,
    useOptimistic: function (t, e) {
      var l = Dt();
      return vt !== null
        ? Er(l, vt, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: yc,
    useCacheRefresh: Kr,
  };
  Fr.useEffectEvent = Ur;
  function Rc(t, e, l, a) {
    ((e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : z({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var _c = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = me(),
        n = ml(a);
      ((n.payload = e),
        l != null && (n.callback = l),
        (e = hl(t, n, a)),
        e !== null && (ae(e, t, a), nn(e, t, a)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = me(),
        n = ml(a);
      ((n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = hl(t, n, a)),
        e !== null && (ae(e, t, a), nn(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = me(),
        a = ml(l);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = hl(t, a, l)),
        e !== null && (ae(e, t, l), nn(e, t, l)));
    },
  };
  function Ir(t, e, l, a, n, u, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, u, i)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Wa(l, a) || !Wa(n, u)
          : !0
    );
  }
  function Pr(t, e, l, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && _c.enqueueReplaceState(e, e.state, null));
  }
  function Jl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = z({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function to(t) {
    eu(t);
  }
  function eo(t) {
    console.error(t);
  }
  function lo(t) {
    eu(t);
  }
  function Tu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function ao(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Oc(t, e, l) {
    return (
      (l = ml(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Tu(t, e);
      }),
      l
    );
  }
  function no(t) {
    return ((t = ml(t)), (t.tag = 3), t);
  }
  function uo(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      ((t.payload = function () {
        return n(u);
      }),
        (t.callback = function () {
          ao(e, l, a);
        }));
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        (ao(e, l, a),
          typeof n != "function" &&
            (bl === null ? (bl = new Set([this])) : bl.add(this)));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function Ph(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && ma(e, l, n, !0),
        (l = se.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Ne === null ? Bu() : l.alternate === null && Rt === 0 && (Rt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === ou
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  ef(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === ou
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  ef(t, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return (ef(t, a, n), Bu(), !1);
    }
    if (ct)
      return (
        (e = se.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== ki && ((t = Error(f(422), { cause: a })), Pa(xe(t, l))))
          : (a !== ki && ((e = Error(f(423), { cause: a })), Pa(xe(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = xe(a, l)),
            (n = Oc(t.stateNode, a, n)),
            ic(t, n),
            Rt !== 4 && (Rt = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = xe(u, l)),
      xn === null ? (xn = [u]) : xn.push(u),
      Rt !== 4 && (Rt = 2),
      e === null)
    )
      return !0;
    ((a = xe(a, l)), (l = e));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = Oc(l.stateNode, a, t)),
            ic(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (bl === null || !bl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = no(n)),
              uo(n, t, l, a),
              ic(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Mc = Error(f(461)),
    Bt = !1;
  function Vt(t, e, l, a) {
    e.child = t === null ? sr(e, null, l, a) : wl(e, t.child, l, a);
  }
  function io(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var s in a) s !== "ref" && (i[s] = a[s]);
    } else i = a;
    return (
      Xl(e),
      (a = dc(t, e, l, i, u, n)),
      (s = mc()),
      t !== null && !Bt
        ? (hc(t, e, n), $e(t, e, n))
        : (ct && s && Ji(e), (e.flags |= 1), Vt(t, e, a, n), e.child)
    );
  }
  function co(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" &&
        !Vi(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = u), fo(t, e, u, a, n))
        : ((t = uu(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !Lc(t, n))) {
      var i = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Wa), l(i, a) && t.ref === e.ref)
      )
        return $e(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = Qe(u, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function fo(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Wa(u, a) && t.ref === e.ref)
        if (((Bt = !1), (e.pendingProps = a = u), Lc(t, n)))
          (t.flags & 131072) !== 0 && (Bt = !0);
        else return ((e.lanes = t.lanes), $e(t, e, n));
    }
    return Dc(t, e, l, a, n);
  }
  function so(t, e, l, a) {
    var n = a.children,
      u = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), t !== null)) {
          for (a = e.child = t.child, n = 0; a !== null; )
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (e.child = null));
        return ro(t, e, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && su(e, u !== null ? u.cachePool : null),
          u !== null ? dr(e, u) : fc(),
          mr(e));
      else
        return (
          (a = e.lanes = 536870912),
          ro(t, e, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null
        ? (su(e, u.cachePool), dr(e, u), yl(), (e.memoizedState = null))
        : (t !== null && su(e, null), fc(), yl());
    return (Vt(t, e, n, l), e.child);
  }
  function dn(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function ro(t, e, l, a, n) {
    var u = lc();
    return (
      (u = u === null ? null : { parent: Ut._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && su(e, null),
      fc(),
      mr(e),
      t !== null && ma(t, e, a, !0),
      (e.childLanes = n),
      null
    );
  }
  function zu(t, e) {
    return (
      (e = ju({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function oo(t, e, l) {
    return (
      wl(e, t.child, null, l),
      (t = zu(e, e.pendingProps)),
      (t.flags |= 2),
      re(e),
      (e.memoizedState = null),
      t
    );
  }
  function t0(t, e, l) {
    var a = e.pendingProps,
      n = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (ct) {
        if (a.mode === "hidden")
          return ((t = zu(e, a)), (e.lanes = 536870912), dn(null, t));
        if (
          (rc(e),
          (t = Et)
            ? ((t = Td(t, Ee)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: fl !== null ? { id: Ce, overflow: Ue } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = $s(t)),
                (l.return = e),
                (e.child = l),
                (Qt = e),
                (Et = null)))
            : (t = null),
          t === null)
        )
          throw rl(e);
        return ((e.lanes = 536870912), null);
      }
      return zu(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((rc(e), n))
        if (e.flags & 256) ((e.flags &= -257), (e = oo(t, e, l)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(f(558));
      else if (
        (Bt || ma(t, e, l, !1), (n = (l & t.childLanes) !== 0), Bt || n)
      ) {
        if (
          ((a = St),
          a !== null && ((i = es(a, l)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), ql(t, i), ae(a, t, i), Mc);
        (Bu(), (e = oo(t, e, l)));
      } else
        ((t = u.treeContext),
          (Et = Te(i.nextSibling)),
          (Qt = e),
          (ct = !0),
          (sl = null),
          (Ee = !1),
          t !== null && Fs(e, t),
          (e = zu(e, a)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = Qe(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Au(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Dc(t, e, l, a, n) {
    return (
      Xl(e),
      (l = dc(t, e, l, a, void 0, n)),
      (a = mc()),
      t !== null && !Bt
        ? (hc(t, e, n), $e(t, e, n))
        : (ct && a && Ji(e), (e.flags |= 1), Vt(t, e, l, n), e.child)
    );
  }
  function mo(t, e, l, a, n, u) {
    return (
      Xl(e),
      (e.updateQueue = null),
      (l = vr(e, a, l, n)),
      hr(t),
      (a = mc()),
      t !== null && !Bt
        ? (hc(t, e, u), $e(t, e, u))
        : (ct && a && Ji(e), (e.flags |= 1), Vt(t, e, l, u), e.child)
    );
  }
  function ho(t, e, l, a, n) {
    if ((Xl(e), e.stateNode === null)) {
      var u = sa,
        i = l.contextType;
      (typeof i == "object" && i !== null && (u = Zt(i)),
        (u = new l(a, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = _c),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        nc(e),
        (i = l.contextType),
        (u.context = typeof i == "object" && i !== null ? Zt(i) : sa),
        (u.state = e.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == "function" && (Rc(e, l, i, a), (u.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && _c.enqueueReplaceState(u, u.state, null),
          cn(e, a, u, n),
          un(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      u = e.stateNode;
      var s = e.memoizedProps,
        m = Jl(l, s);
      u.props = m;
      var S = u.context,
        j = l.contextType;
      ((i = sa), typeof j == "object" && j !== null && (i = Zt(j)));
      var D = l.getDerivedStateFromProps;
      ((j =
        typeof D == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (s = e.pendingProps !== s),
        j ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((s || S !== i) && Pr(e, u, a, i)),
        (dl = !1));
      var T = e.memoizedState;
      ((u.state = T),
        cn(e, a, u, n),
        un(),
        (S = e.memoizedState),
        s || T !== S || dl
          ? (typeof D == "function" && (Rc(e, l, D, a), (S = e.memoizedState)),
            (m = dl || Ir(e, l, m, a, T, S, i))
              ? (j ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = S)),
            (u.props = a),
            (u.state = S),
            (u.context = i),
            (a = m))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1)));
    } else {
      ((u = e.stateNode),
        uc(t, e),
        (i = e.memoizedProps),
        (j = Jl(l, i)),
        (u.props = j),
        (D = e.pendingProps),
        (T = u.context),
        (S = l.contextType),
        (m = sa),
        typeof S == "object" && S !== null && (m = Zt(S)),
        (s = l.getDerivedStateFromProps),
        (S =
          typeof s == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== D || T !== m) && Pr(e, u, a, m)),
        (dl = !1),
        (T = e.memoizedState),
        (u.state = T),
        cn(e, a, u, n),
        un());
      var A = e.memoizedState;
      i !== D ||
      T !== A ||
      dl ||
      (t !== null && t.dependencies !== null && cu(t.dependencies))
        ? (typeof s == "function" && (Rc(e, l, s, a), (A = e.memoizedState)),
          (j =
            dl ||
            Ir(e, l, j, a, T, A, m) ||
            (t !== null && t.dependencies !== null && cu(t.dependencies)))
            ? (S ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, A, m),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, A, m)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === t.memoizedProps && T === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === t.memoizedProps && T === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = A)),
          (u.props = a),
          (u.state = A),
          (u.context = m),
          (a = j))
        : (typeof u.componentDidUpdate != "function" ||
            (i === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Au(t, e),
      (a = (e.flags & 128) !== 0),
      u || a
        ? ((u = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = wl(e, t.child, null, n)),
              (e.child = wl(e, null, l, n)))
            : Vt(t, e, l, n),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = $e(t, e, n)),
      t
    );
  }
  function vo(t, e, l, a) {
    return (Ll(), (e.flags |= 256), Vt(t, e, l, a), e.child);
  }
  var Cc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Uc(t) {
    return { baseLanes: t, cachePool: ar() };
  }
  function Hc(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= de), t);
  }
  function yo(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      u = (e.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (Mt.current & 2) !== 0),
      i && ((n = !0), (e.flags &= -129)),
      (i = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ct) {
        if (
          (n ? vl(e) : yl(),
          (t = Et)
            ? ((t = Td(t, Ee)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: fl !== null ? { id: Ce, overflow: Ue } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = $s(t)),
                (l.return = e),
                (e.child = l),
                (Qt = e),
                (Et = null)))
            : (t = null),
          t === null)
        )
          throw rl(e);
        return (gf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var s = a.children;
      return (
        (a = a.fallback),
        n
          ? (yl(),
            (n = e.mode),
            (s = ju({ mode: "hidden", children: s }, n)),
            (a = Yl(a, n, l, null)),
            (s.return = e),
            (a.return = e),
            (s.sibling = a),
            (e.child = s),
            (a = e.child),
            (a.memoizedState = Uc(l)),
            (a.childLanes = Hc(t, i, l)),
            (e.memoizedState = Cc),
            dn(null, a))
          : (vl(e), Bc(e, s))
      );
    }
    var m = t.memoizedState;
    if (m !== null && ((s = m.dehydrated), s !== null)) {
      if (u)
        e.flags & 256
          ? (vl(e), (e.flags &= -257), (e = qc(t, e, l)))
          : e.memoizedState !== null
            ? (yl(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (yl(),
              (s = a.fallback),
              (n = e.mode),
              (a = ju({ mode: "visible", children: a.children }, n)),
              (s = Yl(s, n, l, null)),
              (s.flags |= 2),
              (a.return = e),
              (s.return = e),
              (a.sibling = s),
              (e.child = a),
              wl(e, t.child, null, l),
              (a = e.child),
              (a.memoizedState = Uc(l)),
              (a.childLanes = Hc(t, i, l)),
              (e.memoizedState = Cc),
              (e = dn(null, a)));
      else if ((vl(e), gf(s))) {
        if (((i = s.nextSibling && s.nextSibling.dataset), i)) var S = i.dgst;
        ((i = S),
          (a = Error(f(419))),
          (a.stack = ""),
          (a.digest = i),
          Pa({ value: a, source: null, stack: null }),
          (e = qc(t, e, l)));
      } else if (
        (Bt || ma(t, e, l, !1), (i = (l & t.childLanes) !== 0), Bt || i)
      ) {
        if (
          ((i = St),
          i !== null && ((a = es(i, l)), a !== 0 && a !== m.retryLane))
        )
          throw ((m.retryLane = a), ql(t, a), ae(i, t, a), Mc);
        (pf(s) || Bu(), (e = qc(t, e, l)));
      } else
        pf(s)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = m.treeContext),
            (Et = Te(s.nextSibling)),
            (Qt = e),
            (ct = !0),
            (sl = null),
            (Ee = !1),
            t !== null && Fs(e, t),
            (e = Bc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return n
      ? (yl(),
        (s = a.fallback),
        (n = e.mode),
        (m = t.child),
        (S = m.sibling),
        (a = Qe(m, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = m.subtreeFlags & 65011712),
        S !== null ? (s = Qe(S, s)) : ((s = Yl(s, n, l, null)), (s.flags |= 2)),
        (s.return = e),
        (a.return = e),
        (a.sibling = s),
        (e.child = a),
        dn(null, a),
        (a = e.child),
        (s = t.child.memoizedState),
        s === null
          ? (s = Uc(l))
          : ((n = s.cachePool),
            n !== null
              ? ((m = Ut._currentValue),
                (n = n.parent !== m ? { parent: m, pool: m } : n))
              : (n = ar()),
            (s = { baseLanes: s.baseLanes | l, cachePool: n })),
        (a.memoizedState = s),
        (a.childLanes = Hc(t, i, l)),
        (e.memoizedState = Cc),
        dn(t.child, a))
      : (vl(e),
        (l = t.child),
        (t = l.sibling),
        (l = Qe(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((i = e.deletions),
          i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Bc(t, e) {
    return (
      (e = ju({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function ju(t, e) {
    return ((t = fe(22, t, null, e)), (t.lanes = 0), t);
  }
  function qc(t, e, l) {
    return (
      wl(e, t.child, null, l),
      (t = Bc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function po(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), Ii(t.return, e, l));
  }
  function Yc(t, e, l, a, n, u) {
    var i = t.memoizedState;
    i === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = e),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function go(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = Mt.current,
      s = (i & 2) !== 0;
    if (
      (s ? ((i = (i & 1) | 2), (e.flags |= 128)) : (i &= 1),
      Y(Mt, i),
      Vt(t, e, a, l),
      (a = ct ? Ia : 0),
      !s && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && po(t, l, e);
        else if (t.tag === 19) po(t, l, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          ((t = l.alternate),
            t !== null && vu(t) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null
            ? ((n = e.child), (e.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          Yc(e, !1, n, l, u, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && vu(t) === null)) {
            e.child = n;
            break;
          }
          ((t = n.sibling), (n.sibling = l), (l = n), (n = t));
        }
        Yc(e, !0, l, null, u, a);
        break;
      case "together":
        Yc(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function $e(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (xl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((ma(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (
        t = e.child, l = Qe(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (l = l.sibling = Qe(t, t.pendingProps)),
          (l.return = e));
      l.sibling = null;
    }
    return e.child;
  }
  function Lc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && cu(t)));
  }
  function e0(t, e, l) {
    switch (e.tag) {
      case 3:
        (kt(e, e.stateNode.containerInfo),
          ol(e, Ut, t.memoizedState.cache),
          Ll());
        break;
      case 27:
      case 5:
        qa(e);
        break;
      case 4:
        kt(e, e.stateNode.containerInfo);
        break;
      case 10:
        ol(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), rc(e), null);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (vl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
              ? yo(t, e, l)
              : (vl(e), (t = $e(t, e, l)), t !== null ? t.sibling : null);
        vl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (ma(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return go(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          Y(Mt, Mt.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), so(t, e, l, e.pendingProps));
      case 24:
        ol(e, Ut, t.memoizedState.cache);
    }
    return $e(t, e, l);
  }
  function xo(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Bt = !0;
      else {
        if (!Lc(t, l) && (e.flags & 128) === 0) return ((Bt = !1), e0(t, e, l));
        Bt = (t.flags & 131072) !== 0;
      }
    else ((Bt = !1), ct && (e.flags & 1048576) !== 0 && Ws(e, Ia, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = Zl(e.elementType)), (e.type = t), typeof t == "function"))
            Vi(t)
              ? ((a = Jl(t, a)), (e.tag = 1), (e = ho(null, e, t, a, l)))
              : ((e.tag = 0), (e = Dc(null, e, t, a, l)));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === gt) {
                ((e.tag = 11), (e = io(null, e, t, a, l)));
                break t;
              } else if (n === W) {
                ((e.tag = 14), (e = co(null, e, t, a, l)));
                break t;
              }
            }
            throw ((e = ve(t) || t), Error(f(306, e, "")));
          }
        }
        return e;
      case 0:
        return Dc(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((a = e.type), (n = Jl(a, e.pendingProps)), ho(t, e, a, n, l));
      case 3:
        t: {
          if ((kt(e, e.stateNode.containerInfo), t === null))
            throw Error(f(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          ((n = u.element), uc(t, e), cn(e, a, null, l));
          var i = e.memoizedState;
          if (
            ((a = i.cache),
            ol(e, Ut, a),
            a !== u.cache && Pi(e, [Ut], l, !0),
            un(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = vo(t, e, a, l);
              break t;
            } else if (a !== n) {
              ((n = xe(Error(f(424)), e)), Pa(n), (e = vo(t, e, a, l)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  Et = Te(t.firstChild),
                  Qt = e,
                  ct = !0,
                  sl = null,
                  Ee = !0,
                  l = sr(e, null, a, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((Ll(), a === n)) {
              e = $e(t, e, l);
              break t;
            }
            Vt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Au(t, e),
          t === null
            ? (l = Od(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : ct ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Zu(lt.current).createElement(l)),
                (a[Xt] = e),
                (a[Ft] = t),
                wt(a, l, t),
                Lt(a),
                (e.stateNode = a))
            : (e.memoizedState = Od(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          qa(e),
          t === null &&
            ct &&
            ((a = e.stateNode = jd(e.type, e.pendingProps, lt.current)),
            (Qt = e),
            (Ee = !0),
            (n = Et),
            Tl(e.type) ? ((xf = n), (Et = Te(a.firstChild))) : (Et = n)),
          Vt(t, e, e.pendingProps.children, l),
          Au(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            ct &&
            ((n = a = Et) &&
              ((a = M0(a, e.type, e.pendingProps, Ee)),
              a !== null
                ? ((e.stateNode = a),
                  (Qt = e),
                  (Et = Te(a.firstChild)),
                  (Ee = !1),
                  (n = !0))
                : (n = !1)),
            n || rl(e)),
          qa(e),
          (n = e.type),
          (u = e.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = u.children),
          hf(n, u) ? (a = null) : i !== null && hf(n, i) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = dc(t, e, Kh, null, null, l)), (jn._currentValue = n)),
          Au(t, e),
          Vt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            ct &&
            ((t = l = Et) &&
              ((l = D0(l, e.pendingProps, Ee)),
              l !== null
                ? ((e.stateNode = l), (Qt = e), (Et = null), (t = !0))
                : (t = !1)),
            t || rl(e)),
          null
        );
      case 13:
        return yo(t, e, l);
      case 4:
        return (
          kt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = wl(e, null, a, l)) : Vt(t, e, a, l),
          e.child
        );
      case 11:
        return io(t, e, e.type, e.pendingProps, l);
      case 7:
        return (Vt(t, e, e.pendingProps, l), e.child);
      case 8:
        return (Vt(t, e, e.pendingProps.children, l), e.child);
      case 12:
        return (Vt(t, e, e.pendingProps.children, l), e.child);
      case 10:
        return (
          (a = e.pendingProps),
          ol(e, e.type, a.value),
          Vt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Xl(e),
          (n = Zt(n)),
          (a = a(n)),
          (e.flags |= 1),
          Vt(t, e, a, l),
          e.child
        );
      case 14:
        return co(t, e, e.type, e.pendingProps, l);
      case 15:
        return fo(t, e, e.type, e.pendingProps, l);
      case 19:
        return go(t, e, l);
      case 31:
        return t0(t, e, l);
      case 22:
        return so(t, e, l, e.pendingProps);
      case 24:
        return (
          Xl(e),
          (a = Zt(Ut)),
          t === null
            ? ((n = lc()),
              n === null &&
                ((n = St),
                (u = tc()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (e.memoizedState = { parent: a, cache: n }),
              nc(e),
              ol(e, Ut, n))
            : ((t.lanes & l) !== 0 && (uc(t, e), cn(e, null, null, l), un()),
              (n = t.memoizedState),
              (u = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = n),
                  ol(e, Ut, a))
                : ((a = u.cache),
                  ol(e, Ut, a),
                  a !== n.cache && Pi(e, [Ut], l, !0))),
          Vt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function ke(t) {
    t.flags |= 4;
  }
  function Gc(t, e, l, a, n) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (n & 335544128) === n))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Ko()) t.flags |= 8192;
        else throw ((Vl = ou), ac);
    } else t.flags &= -16777217;
  }
  function bo(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Hd(e)))
      if (Ko()) t.flags |= 8192;
      else throw ((Vl = ou), ac);
  }
  function Ru(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? If() : 536870912), (t.lanes |= e), (za |= e)));
  }
  function mn(t, e) {
    if (!ct)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            (e.alternate !== null && (l = e), (e = e.sibling));
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Nt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling));
    else
      for (n = t.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = l), e);
  }
  function l0(t, e, l) {
    var a = e.pendingProps;
    switch (($i(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Nt(e), null);
      case 1:
        return (Nt(e), null);
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          we(Ut),
          Ot(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (da(e)
              ? ke(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Wi())),
          Nt(e),
          null
        );
      case 26:
        var n = e.type,
          u = e.memoizedState;
        return (
          t === null
            ? (ke(e),
              u !== null ? (Nt(e), bo(e, u)) : (Nt(e), Gc(e, n, null, a, l)))
            : u
              ? u !== t.memoizedState
                ? (ke(e), Nt(e), bo(e, u))
                : (Nt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== a && ke(e),
                Nt(e),
                Gc(e, n, t, a, l)),
          null
        );
      case 27:
        if (
          (Ln(e),
          (l = lt.current),
          (n = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && ke(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return (Nt(e), null);
          }
          ((t = X.current),
            da(e) ? Is(e) : ((t = jd(n, a, l)), (e.stateNode = t), ke(e)));
        }
        return (Nt(e), null);
      case 5:
        if ((Ln(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && ke(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return (Nt(e), null);
          }
          if (((u = X.current), da(e))) Is(e);
          else {
            var i = Zu(lt.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((u = i.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            ((u[Xt] = e), (u[Ft] = a));
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) break t;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            e.stateNode = u;
            t: switch ((wt(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && ke(e);
          }
        }
        return (
          Nt(e),
          Gc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && ke(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(f(166));
          if (((t = lt.current), da(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (n = Qt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((t[Xt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                yd(t.nodeValue, l)
              )),
              t || rl(e, !0));
          } else
            ((t = Zu(t).createTextNode(a)), (t[Xt] = e), (e.stateNode = t));
        }
        return (Nt(e), null);
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = da(e)), l !== null)) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(f(557));
              t[Xt] = e;
            } else
              (Ll(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Nt(e), (t = !1));
          } else
            ((l = Wi()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0));
          if (!t) return e.flags & 256 ? (re(e), e) : (re(e), null);
          if ((e.flags & 128) !== 0) throw Error(f(558));
        }
        return (Nt(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = da(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[Xt] = e;
            } else
              (Ll(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Nt(e), (n = !1));
          } else
            ((n = Wi()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return e.flags & 256 ? (re(e), e) : (re(e), null);
        }
        return (
          re(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = l), e)
            : ((l = a !== null),
              (t = t !== null && t.memoizedState !== null),
              l &&
                ((a = e.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              l !== t && l && (e.child.flags |= 8192),
              Ru(e, e.updateQueue),
              Nt(e),
              null)
        );
      case 4:
        return (Ot(), t === null && sf(e.stateNode.containerInfo), Nt(e), null);
      case 10:
        return (we(e.type), Nt(e), null);
      case 19:
        if ((U(Mt), (a = e.memoizedState), a === null)) return (Nt(e), null);
        if (((n = (e.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) mn(a, !1);
          else {
            if (Rt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = vu(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      mn(a, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Ru(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    (Js(l, t), (l = l.sibling));
                  return (
                    Y(Mt, (Mt.current & 1) | 2),
                    ct && Ze(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ne() > Cu &&
              ((e.flags |= 128), (n = !0), mn(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!n)
            if (((t = vu(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (n = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Ru(e, t),
                mn(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !u.alternate &&
                  !ct)
              )
                return (Nt(e), null);
            } else
              2 * ne() - a.renderingStartTime > Cu &&
                l !== 536870912 &&
                ((e.flags |= 128), (n = !0), mn(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = a.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ne()),
            (t.sibling = null),
            (l = Mt.current),
            Y(Mt, n ? (l & 1) | 2 : l & 1),
            ct && Ze(e, a.treeForkCount),
            t)
          : (Nt(e), null);
      case 22:
      case 23:
        return (
          re(e),
          sc(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Nt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Nt(e),
          (l = e.updateQueue),
          l !== null && Ru(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && U(Ql),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          we(Ut),
          Nt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function a0(t, e) {
    switch (($i(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          we(Ut),
          Ot(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Ln(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((re(e), e.alternate === null)) throw Error(f(340));
          Ll();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (re(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(f(340));
          Ll();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (U(Mt), null);
      case 4:
        return (Ot(), null);
      case 10:
        return (we(e.type), null);
      case 22:
      case 23:
        return (
          re(e),
          sc(),
          t !== null && U(Ql),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (we(Ut), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function So(t, e) {
    switch (($i(e), e.tag)) {
      case 3:
        (we(Ut), Ot());
        break;
      case 26:
      case 27:
      case 5:
        Ln(e);
        break;
      case 4:
        Ot();
        break;
      case 31:
        e.memoizedState !== null && re(e);
        break;
      case 13:
        re(e);
        break;
      case 19:
        U(Mt);
        break;
      case 10:
        we(e.type);
        break;
      case 22:
      case 23:
        (re(e), sc(), t !== null && U(Ql));
        break;
      case 24:
        we(Ut);
    }
  }
  function hn(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create,
              i = l.inst;
            ((a = u()), (i.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      mt(e, e.return, s);
    }
  }
  function pl(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              s = i.destroy;
            if (s !== void 0) {
              ((i.destroy = void 0), (n = e));
              var m = l,
                S = s;
              try {
                S();
              } catch (j) {
                mt(n, m, j);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (j) {
      mt(e, e.return, j);
    }
  }
  function Eo(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        or(e, l);
      } catch (a) {
        mt(t, t.return, a);
      }
    }
  }
  function No(t, e, l) {
    ((l.props = Jl(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      mt(t, e, a);
    }
  }
  function vn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      mt(t, e, n);
    }
  }
  function He(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          mt(t, e, n);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          mt(t, e, n);
        }
      else l.current = null;
  }
  function To(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      mt(t, t.return, n);
    }
  }
  function Xc(t, e, l) {
    try {
      var a = t.stateNode;
      (z0(a, t.type, l, e), (a[Ft] = e));
    } catch (n) {
      mt(t, t.return, n);
    }
  }
  function zo(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Tl(t.type)) ||
      t.tag === 4
    );
  }
  function Qc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || zo(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Tl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Zc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Ge)));
    else if (
      a !== 4 &&
      (a === 27 && Tl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Zc(t, e, l), t = t.sibling; t !== null; )
        (Zc(t, e, l), (t = t.sibling));
  }
  function _u(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
    else if (
      a !== 4 &&
      (a === 27 && Tl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (_u(t, e, l), t = t.sibling; t !== null; )
        (_u(t, e, l), (t = t.sibling));
  }
  function Ao(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      (wt(e, a, l), (e[Xt] = t), (e[Ft] = l));
    } catch (u) {
      mt(t, t.return, u);
    }
  }
  var We = !1,
    qt = !1,
    Vc = !1,
    jo = typeof WeakSet == "function" ? WeakSet : Set,
    Gt = null;
  function n0(t, e) {
    if (((t = t.containerInfo), (df = Wu), (t = Ys(t)), qi(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, u.nodeType);
            } catch {
              l = null;
              break t;
            }
            var i = 0,
              s = -1,
              m = -1,
              S = 0,
              j = 0,
              D = t,
              T = null;
            e: for (;;) {
              for (
                var A;
                D !== l || (n !== 0 && D.nodeType !== 3) || (s = i + n),
                  D !== u || (a !== 0 && D.nodeType !== 3) || (m = i + a),
                  D.nodeType === 3 && (i += D.nodeValue.length),
                  (A = D.firstChild) !== null;
              )
                ((T = D), (D = A));
              for (;;) {
                if (D === t) break e;
                if (
                  (T === l && ++S === n && (s = i),
                  T === u && ++j === a && (m = i),
                  (A = D.nextSibling) !== null)
                )
                  break;
                ((D = T), (T = D.parentNode));
              }
              D = A;
            }
            l = s === -1 || m === -1 ? null : { start: s, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      mf = { focusedElem: t, selectionRange: l }, Wu = !1, Gt = e;
      Gt !== null;
    )
      if (
        ((e = Gt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (Gt = t));
      else
        for (; Gt !== null; ) {
          switch (((e = Gt), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (l = 0; l < t.length; l++)
                  ((n = t[l]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                ((t = void 0),
                  (l = e),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode));
                try {
                  var L = Jl(l.type, n);
                  ((t = a.getSnapshotBeforeUpdate(L, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = t));
                } catch (w) {
                  mt(l, l.return, w);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  yf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      yf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Gt = t));
            break;
          }
          Gt = e.return;
        }
  }
  function Ro(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Ie(t, l), a & 4 && hn(5, l));
        break;
      case 1:
        if ((Ie(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (i) {
              mt(l, l.return, i);
            }
          else {
            var n = Jl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              mt(l, l.return, i);
            }
          }
        (a & 64 && Eo(l), a & 512 && vn(l, l.return));
        break;
      case 3:
        if ((Ie(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            or(t, e);
          } catch (i) {
            mt(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Ao(l);
      case 26:
      case 5:
        (Ie(t, l), e === null && a & 4 && To(l), a & 512 && vn(l, l.return));
        break;
      case 12:
        Ie(t, l);
        break;
      case 31:
        (Ie(t, l), a & 4 && Mo(t, l));
        break;
      case 13:
        (Ie(t, l),
          a & 4 && Do(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = m0.bind(null, l)), C0(t, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || We), !a)) {
          ((e = (e !== null && e.memoizedState !== null) || qt), (n = We));
          var u = qt;
          ((We = a),
            (qt = e) && !u ? Pe(t, l, (l.subtreeFlags & 8772) !== 0) : Ie(t, l),
            (We = n),
            (qt = u));
        }
        break;
      case 30:
        break;
      default:
        Ie(t, l);
    }
  }
  function _o(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), _o(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && bi(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Tt = null,
    Pt = !1;
  function Fe(t, e, l) {
    for (l = l.child; l !== null; ) (Oo(t, e, l), (l = l.sibling));
  }
  function Oo(t, e, l) {
    if (ue && typeof ue.onCommitFiberUnmount == "function")
      try {
        ue.onCommitFiberUnmount(Ya, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (qt || He(l, e),
          Fe(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        qt || He(l, e);
        var a = Tt,
          n = Pt;
        (Tl(l.type) && ((Tt = l.stateNode), (Pt = !1)),
          Fe(t, e, l),
          Tn(l.stateNode),
          (Tt = a),
          (Pt = n));
        break;
      case 5:
        qt || He(l, e);
      case 6:
        if (
          ((a = Tt),
          (n = Pt),
          (Tt = null),
          Fe(t, e, l),
          (Tt = a),
          (Pt = n),
          Tt !== null)
        )
          if (Pt)
            try {
              (Tt.nodeType === 9
                ? Tt.body
                : Tt.nodeName === "HTML"
                  ? Tt.ownerDocument.body
                  : Tt
              ).removeChild(l.stateNode);
            } catch (u) {
              mt(l, e, u);
            }
          else
            try {
              Tt.removeChild(l.stateNode);
            } catch (u) {
              mt(l, e, u);
            }
        break;
      case 18:
        Tt !== null &&
          (Pt
            ? ((t = Tt),
              Ed(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                l.stateNode,
              ),
              Ca(t))
            : Ed(Tt, l.stateNode));
        break;
      case 4:
        ((a = Tt),
          (n = Pt),
          (Tt = l.stateNode.containerInfo),
          (Pt = !0),
          Fe(t, e, l),
          (Tt = a),
          (Pt = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (pl(2, l, e), qt || pl(4, l, e), Fe(t, e, l));
        break;
      case 1:
        (qt ||
          (He(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && No(l, e, a)),
          Fe(t, e, l));
        break;
      case 21:
        Fe(t, e, l);
        break;
      case 22:
        ((qt = (a = qt) || l.memoizedState !== null), Fe(t, e, l), (qt = a));
        break;
      default:
        Fe(t, e, l);
    }
  }
  function Mo(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Ca(t);
      } catch (l) {
        mt(e, e.return, l);
      }
    }
  }
  function Do(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ca(t);
      } catch (l) {
        mt(e, e.return, l);
      }
  }
  function u0(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new jo()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new jo()),
          e
        );
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Ou(t, e) {
    var l = u0(t);
    e.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = h0.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function te(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = t,
          i = e,
          s = i;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (Tl(s.type)) {
                ((Tt = s.stateNode), (Pt = !1));
                break t;
              }
              break;
            case 5:
              ((Tt = s.stateNode), (Pt = !1));
              break t;
            case 3:
            case 4:
              ((Tt = s.stateNode.containerInfo), (Pt = !0));
              break t;
          }
          s = s.return;
        }
        if (Tt === null) throw Error(f(160));
        (Oo(u, i, n),
          (Tt = null),
          (Pt = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (Co(e, t), (e = e.sibling));
  }
  var _e = null;
  function Co(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (te(e, t),
          ee(t),
          a & 4 && (pl(3, t, t.return), hn(3, t), pl(5, t, t.return)));
        break;
      case 1:
        (te(e, t),
          ee(t),
          a & 512 && (qt || l === null || He(l, l.return)),
          a & 64 &&
            We &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = _e;
        if (
          (te(e, t),
          ee(t),
          a & 512 && (qt || l === null || He(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ((a = t.type),
                    (l = t.memoizedProps),
                    (n = n.ownerDocument || n));
                  e: switch (a) {
                    case "title":
                      ((u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Xa] ||
                          u[Xt] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title"),
                          )),
                        wt(u, a, l),
                        (u[Xt] = t),
                        Lt(u),
                        (a = u));
                      break t;
                    case "link":
                      var i = Cd("link", "href", n).get(a + (l.href || ""));
                      if (i) {
                        for (var s = 0; s < i.length; s++)
                          if (
                            ((u = i[s]),
                            u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      ((u = n.createElement(a)),
                        wt(u, a, l),
                        n.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (i = Cd("meta", "content", n).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (s = 0; s < i.length; s++)
                          if (
                            ((u = i[s]),
                            u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      ((u = n.createElement(a)),
                        wt(u, a, l),
                        n.head.appendChild(u));
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  ((u[Xt] = t), Lt(u), (a = u));
                }
                t.stateNode = a;
              } else Ud(n, t.type, t.stateNode);
            else t.stateNode = Dd(n, a, t.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? Ud(n, t.type, t.stateNode)
                  : Dd(n, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Xc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (te(e, t),
          ee(t),
          a & 512 && (qt || l === null || He(l, l.return)),
          l !== null && a & 4 && Xc(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (te(e, t),
          ee(t),
          a & 512 && (qt || l === null || He(l, l.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            la(n, "");
          } catch (L) {
            mt(t, t.return, L);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), Xc(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Vc = !0));
        break;
      case 6:
        if ((te(e, t), ee(t), a & 4)) {
          if (t.stateNode === null) throw Error(f(162));
          ((a = t.memoizedProps), (l = t.stateNode));
          try {
            l.nodeValue = a;
          } catch (L) {
            mt(t, t.return, L);
          }
        }
        break;
      case 3:
        if (
          ((Ku = null),
          (n = _e),
          (_e = Vu(e.containerInfo)),
          te(e, t),
          (_e = n),
          ee(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ca(e.containerInfo);
          } catch (L) {
            mt(t, t.return, L);
          }
        Vc && ((Vc = !1), Uo(t));
        break;
      case 4:
        ((a = _e),
          (_e = Vu(t.stateNode.containerInfo)),
          te(e, t),
          ee(t),
          (_e = a));
        break;
      case 12:
        (te(e, t), ee(t));
        break;
      case 31:
        (te(e, t),
          ee(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Ou(t, a))));
        break;
      case 13:
        (te(e, t),
          ee(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Du = ne()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Ou(t, a))));
        break;
      case 22:
        n = t.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null,
          S = We,
          j = qt;
        if (
          ((We = S || n),
          (qt = j || m),
          te(e, t),
          (qt = j),
          (We = S),
          ee(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || m || We || qt || $l(t)),
              l = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e;
                try {
                  if (((u = m.stateNode), n))
                    ((i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    s = m.stateNode;
                    var D = m.memoizedProps.style,
                      T =
                        D != null && D.hasOwnProperty("display")
                          ? D.display
                          : null;
                    s.style.display =
                      T == null || typeof T == "boolean" ? "" : ("" + T).trim();
                  }
                } catch (L) {
                  mt(m, m.return, L);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (L) {
                  mt(m, m.return, L);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                m = e;
                try {
                  var A = m.stateNode;
                  n ? Nd(A, !0) : Nd(m.stateNode, !1);
                } catch (L) {
                  mt(m, m.return, L);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (l === e && (l = null), (e = e.return));
            }
            (l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Ou(t, l))));
        break;
      case 19:
        (te(e, t),
          ee(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Ou(t, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (te(e, t), ee(t));
    }
  }
  function ee(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (zo(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Qc(t);
            _u(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (la(i, ""), (l.flags &= -33));
            var s = Qc(t);
            _u(t, s, i);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo,
              S = Qc(t);
            Zc(t, S, m);
            break;
          default:
            throw Error(f(161));
        }
      } catch (j) {
        mt(t, t.return, j);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Uo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Uo(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function Ie(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Ro(t, e.alternate, e), (e = e.sibling));
  }
  function $l(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (pl(4, e, e.return), $l(e));
          break;
        case 1:
          He(e, e.return);
          var l = e.stateNode;
          (typeof l.componentWillUnmount == "function" && No(e, e.return, l),
            $l(e));
          break;
        case 27:
          Tn(e.stateNode);
        case 26:
        case 5:
          (He(e, e.return), $l(e));
          break;
        case 22:
          e.memoizedState === null && $l(e);
          break;
        case 30:
          $l(e);
          break;
        default:
          $l(e);
      }
      t = t.sibling;
    }
  }
  function Pe(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        u = e,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Pe(n, u, l), hn(4, u));
          break;
        case 1:
          if (
            (Pe(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (S) {
              mt(a, a.return, S);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  rr(m[n], s);
            } catch (S) {
              mt(a, a.return, S);
            }
          }
          (l && i & 64 && Eo(u), vn(u, u.return));
          break;
        case 27:
          Ao(u);
        case 26:
        case 5:
          (Pe(n, u, l), l && a === null && i & 4 && To(u), vn(u, u.return));
          break;
        case 12:
          Pe(n, u, l);
          break;
        case 31:
          (Pe(n, u, l), l && i & 4 && Mo(n, u));
          break;
        case 13:
          (Pe(n, u, l), l && i & 4 && Do(n, u));
          break;
        case 22:
          (u.memoizedState === null && Pe(n, u, l), vn(u, u.return));
          break;
        case 30:
          break;
        default:
          Pe(n, u, l);
      }
      e = e.sibling;
    }
  }
  function wc(t, e) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && tn(l)));
  }
  function Kc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && tn(t)));
  }
  function Oe(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Ho(t, e, l, a), (e = e.sibling));
  }
  function Ho(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Oe(t, e, l, a), n & 2048 && hn(9, e));
        break;
      case 1:
        Oe(t, e, l, a);
        break;
      case 3:
        (Oe(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && tn(t))));
        break;
      case 12:
        if (n & 2048) {
          (Oe(t, e, l, a), (t = e.stateNode));
          try {
            var u = e.memoizedProps,
              i = u.id,
              s = u.onPostCommit;
            typeof s == "function" &&
              s(
                i,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (m) {
            mt(e, e.return, m);
          }
        } else Oe(t, e, l, a);
        break;
      case 31:
        Oe(t, e, l, a);
        break;
      case 13:
        Oe(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        ((u = e.stateNode),
          (i = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? Oe(t, e, l, a)
              : yn(t, e)
            : u._visibility & 2
              ? Oe(t, e, l, a)
              : ((u._visibility |= 2),
                Ea(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && wc(i, e));
        break;
      case 24:
        (Oe(t, e, l, a), n & 2048 && Kc(e.alternate, e));
        break;
      default:
        Oe(t, e, l, a);
    }
  }
  function Ea(t, e, l, a, n) {
    for (
      n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var u = t,
        i = e,
        s = l,
        m = a,
        S = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Ea(u, i, s, m, n), hn(8, i));
          break;
        case 23:
          break;
        case 22:
          var j = i.stateNode;
          (i.memoizedState !== null
            ? j._visibility & 2
              ? Ea(u, i, s, m, n)
              : yn(u, i)
            : ((j._visibility |= 2), Ea(u, i, s, m, n)),
            n && S & 2048 && wc(i.alternate, i));
          break;
        case 24:
          (Ea(u, i, s, m, n), n && S & 2048 && Kc(i.alternate, i));
          break;
        default:
          Ea(u, i, s, m, n);
      }
      e = e.sibling;
    }
  }
  function yn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (yn(l, a), n & 2048 && wc(a.alternate, a));
            break;
          case 24:
            (yn(l, a), n & 2048 && Kc(a.alternate, a));
            break;
          default:
            yn(l, a);
        }
        e = e.sibling;
      }
  }
  var pn = 8192;
  function Na(t, e, l) {
    if (t.subtreeFlags & pn)
      for (t = t.child; t !== null; ) (Bo(t, e, l), (t = t.sibling));
  }
  function Bo(t, e, l) {
    switch (t.tag) {
      case 26:
        (Na(t, e, l),
          t.flags & pn &&
            t.memoizedState !== null &&
            w0(l, _e, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Na(t, e, l);
        break;
      case 3:
      case 4:
        var a = _e;
        ((_e = Vu(t.stateNode.containerInfo)), Na(t, e, l), (_e = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = pn), (pn = 16777216), Na(t, e, l), (pn = a))
            : Na(t, e, l));
        break;
      default:
        Na(t, e, l);
    }
  }
  function qo(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function gn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((Gt = a), Lo(a, t));
        }
      qo(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Yo(t), (t = t.sibling));
  }
  function Yo(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (gn(t), t.flags & 2048 && pl(9, t, t.return));
        break;
      case 3:
        gn(t);
        break;
      case 12:
        gn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Mu(t))
          : gn(t);
        break;
      default:
        gn(t);
    }
  }
  function Mu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((Gt = a), Lo(a, t));
        }
      qo(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (pl(8, e, e.return), Mu(e));
          break;
        case 22:
          ((l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Mu(e)));
          break;
        default:
          Mu(e);
      }
      t = t.sibling;
    }
  }
  function Lo(t, e) {
    for (; Gt !== null; ) {
      var l = Gt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          pl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          tn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Gt = a));
      else
        t: for (l = t; Gt !== null; ) {
          a = Gt;
          var n = a.sibling,
            u = a.return;
          if ((_o(a), a === l)) {
            Gt = null;
            break t;
          }
          if (n !== null) {
            ((n.return = u), (Gt = n));
            break t;
          }
          Gt = u;
        }
    }
  }
  var i0 = {
      getCacheForType: function (t) {
        var e = Zt(Ut),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
      cacheSignal: function () {
        return Zt(Ut).controller.signal;
      },
    },
    c0 = typeof WeakMap == "function" ? WeakMap : Map,
    rt = 0,
    St = null,
    at = null,
    ut = 0,
    dt = 0,
    oe = null,
    gl = !1,
    Ta = !1,
    Jc = !1,
    tl = 0,
    Rt = 0,
    xl = 0,
    kl = 0,
    $c = 0,
    de = 0,
    za = 0,
    xn = null,
    le = null,
    kc = !1,
    Du = 0,
    Go = 0,
    Cu = 1 / 0,
    Uu = null,
    bl = null,
    Yt = 0,
    Sl = null,
    Aa = null,
    el = 0,
    Wc = 0,
    Fc = null,
    Xo = null,
    bn = 0,
    Ic = null;
  function me() {
    return (rt & 2) !== 0 && ut !== 0 ? ut & -ut : R.T !== null ? nf() : ls();
  }
  function Qo() {
    if (de === 0)
      if ((ut & 536870912) === 0 || ct) {
        var t = Qn;
        ((Qn <<= 1), (Qn & 3932160) === 0 && (Qn = 262144), (de = t));
      } else de = 536870912;
    return ((t = se.current), t !== null && (t.flags |= 32), de);
  }
  function ae(t, e, l) {
    (((t === St && (dt === 2 || dt === 9)) || t.cancelPendingCommit !== null) &&
      (ja(t, 0), El(t, ut, de, !1)),
      Ga(t, l),
      ((rt & 2) === 0 || t !== St) &&
        (t === St &&
          ((rt & 2) === 0 && (kl |= l), Rt === 4 && El(t, ut, de, !1)),
        Be(t)));
  }
  function Zo(t, e, l) {
    if ((rt & 6) !== 0) throw Error(f(327));
    var a = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || La(t, e),
      n = a ? r0(t, e) : tf(t, e, !0),
      u = a;
    do {
      if (n === 0) {
        Ta && !a && El(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), u && !f0(l))) {
          ((n = tf(t, e, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            ((i = t.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            e = i;
            t: {
              var s = t;
              n = xn;
              var m = s.current.memoizedState.isDehydrated;
              if ((m && (ja(s, i).flags |= 256), (i = tf(s, i, !1)), i !== 2)) {
                if (Jc && !m) {
                  ((s.errorRecoveryDisabledLanes |= u), (kl |= u), (n = 4));
                  break t;
                }
                ((u = le),
                  (le = n),
                  u !== null &&
                    (le === null ? (le = u) : le.push.apply(le, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (ja(t, 0), El(t, e, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (u = n), u)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              El(a, e, de, !gl);
              break t;
            case 2:
              le = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && ((n = Du + 300 - ne()), 10 < n)) {
            if ((El(a, e, de, !gl), Vn(a, 0, !0) !== 0)) break t;
            ((el = e),
              (a.timeoutHandle = bd(
                Vo.bind(
                  null,
                  a,
                  l,
                  le,
                  Uu,
                  kc,
                  e,
                  de,
                  kl,
                  za,
                  gl,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              )));
            break t;
          }
          Vo(a, l, le, Uu, kc, e, de, kl, za, gl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Be(t);
  }
  function Vo(t, e, l, a, n, u, i, s, m, S, j, D, T, A) {
    if (
      ((t.timeoutHandle = -1),
      (D = e.subtreeFlags),
      D & 8192 || (D & 16785408) === 16785408)
    ) {
      ((D = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ge,
      }),
        Bo(e, u, D));
      var L =
        (u & 62914560) === u ? Du - ne() : (u & 4194048) === u ? Go - ne() : 0;
      if (((L = K0(D, L)), L !== null)) {
        ((el = u),
          (t.cancelPendingCommit = L(
            Io.bind(null, t, e, u, l, a, n, i, s, m, j, D, null, T, A),
          )),
          El(t, u, i, !S));
        return;
      }
    }
    Io(t, e, u, l, a, n, i, s, m);
  }
  function f0(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!ce(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        ((l.return = e), (e = l));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function El(t, e, l, a) {
    ((e &= ~$c),
      (e &= ~kl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var n = e; 0 < n; ) {
      var u = 31 - ie(n),
        i = 1 << u;
      ((a[u] = -1), (n &= ~i));
    }
    l !== 0 && Pf(t, l, e);
  }
  function Hu() {
    return (rt & 6) === 0 ? (Sn(0), !1) : !0;
  }
  function Pc() {
    if (at !== null) {
      if (dt === 0) var t = at.return;
      else ((t = at), (Ve = Gl = null), vc(t), (pa = null), (ln = 0), (t = at));
      for (; t !== null; ) (So(t.alternate, t), (t = t.return));
      at = null;
    }
  }
  function ja(t, e) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), R0(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (el = 0),
      Pc(),
      (St = t),
      (at = l = Qe(t.current, null)),
      (ut = e),
      (dt = 0),
      (oe = null),
      (gl = !1),
      (Ta = La(t, e)),
      (Jc = !1),
      (za = de = $c = kl = xl = Rt = 0),
      (le = xn = null),
      (kc = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ie(a),
          u = 1 << n;
        ((e |= t[n]), (a &= ~u));
      }
    return ((tl = e), lu(), l);
  }
  function wo(t, e) {
    ((P = null),
      (R.H = on),
      e === ya || e === ru
        ? ((e = ir()), (dt = 3))
        : e === ac
          ? ((e = ir()), (dt = 4))
          : (dt =
              e === Mc
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (oe = e),
      at === null && ((Rt = 1), Tu(t, xe(e, t.current))));
  }
  function Ko() {
    var t = se.current;
    return t === null
      ? !0
      : (ut & 4194048) === ut
        ? Ne === null
        : (ut & 62914560) === ut || (ut & 536870912) !== 0
          ? t === Ne
          : !1;
  }
  function Jo() {
    var t = R.H;
    return ((R.H = on), t === null ? on : t);
  }
  function $o() {
    var t = R.A;
    return ((R.A = i0), t);
  }
  function Bu() {
    ((Rt = 4),
      gl || ((ut & 4194048) !== ut && se.current !== null) || (Ta = !0),
      ((xl & 134217727) === 0 && (kl & 134217727) === 0) ||
        St === null ||
        El(St, ut, de, !1));
  }
  function tf(t, e, l) {
    var a = rt;
    rt |= 2;
    var n = Jo(),
      u = $o();
    ((St !== t || ut !== e) && ((Uu = null), ja(t, e)), (e = !1));
    var i = Rt;
    t: do
      try {
        if (dt !== 0 && at !== null) {
          var s = at,
            m = oe;
          switch (dt) {
            case 8:
              (Pc(), (i = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              se.current === null && (e = !0);
              var S = dt;
              if (((dt = 0), (oe = null), Ra(t, s, m, S), l && Ta)) {
                i = 0;
                break t;
              }
              break;
            default:
              ((S = dt), (dt = 0), (oe = null), Ra(t, s, m, S));
          }
        }
        (s0(), (i = Rt));
        break;
      } catch (j) {
        wo(t, j);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Ve = Gl = null),
      (rt = a),
      (R.H = n),
      (R.A = u),
      at === null && ((St = null), (ut = 0), lu()),
      i
    );
  }
  function s0() {
    for (; at !== null; ) ko(at);
  }
  function r0(t, e) {
    var l = rt;
    rt |= 2;
    var a = Jo(),
      n = $o();
    St !== t || ut !== e
      ? ((Uu = null), (Cu = ne() + 500), ja(t, e))
      : (Ta = La(t, e));
    t: do
      try {
        if (dt !== 0 && at !== null) {
          e = at;
          var u = oe;
          e: switch (dt) {
            case 1:
              ((dt = 0), (oe = null), Ra(t, e, u, 1));
              break;
            case 2:
            case 9:
              if (nr(u)) {
                ((dt = 0), (oe = null), Wo(e));
                break;
              }
              ((e = function () {
                ((dt !== 2 && dt !== 9) || St !== t || (dt = 7), Be(t));
              }),
                u.then(e, e));
              break t;
            case 3:
              dt = 7;
              break t;
            case 4:
              dt = 5;
              break t;
            case 7:
              nr(u)
                ? ((dt = 0), (oe = null), Wo(e))
                : ((dt = 0), (oe = null), Ra(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (at.tag) {
                case 26:
                  i = at.memoizedState;
                case 5:
                case 27:
                  var s = at;
                  if (i ? Hd(i) : s.stateNode.complete) {
                    ((dt = 0), (oe = null));
                    var m = s.sibling;
                    if (m !== null) at = m;
                    else {
                      var S = s.return;
                      S !== null ? ((at = S), qu(S)) : (at = null);
                    }
                    break e;
                  }
              }
              ((dt = 0), (oe = null), Ra(t, e, u, 5));
              break;
            case 6:
              ((dt = 0), (oe = null), Ra(t, e, u, 6));
              break;
            case 8:
              (Pc(), (Rt = 6));
              break t;
            default:
              throw Error(f(462));
          }
        }
        o0();
        break;
      } catch (j) {
        wo(t, j);
      }
    while (!0);
    return (
      (Ve = Gl = null),
      (R.H = a),
      (R.A = n),
      (rt = l),
      at !== null ? 0 : ((St = null), (ut = 0), lu(), Rt)
    );
  }
  function o0() {
    for (; at !== null && !Um(); ) ko(at);
  }
  function ko(t) {
    var e = xo(t.alternate, t, tl);
    ((t.memoizedProps = t.pendingProps), e === null ? qu(t) : (at = e));
  }
  function Wo(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = mo(l, e, e.pendingProps, e.type, void 0, ut);
        break;
      case 11:
        e = mo(l, e, e.pendingProps, e.type.render, e.ref, ut);
        break;
      case 5:
        vc(e);
      default:
        (So(l, e), (e = at = Js(e, tl)), (e = xo(l, e, tl)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? qu(t) : (at = e));
  }
  function Ra(t, e, l, a) {
    ((Ve = Gl = null), vc(e), (pa = null), (ln = 0));
    var n = e.return;
    try {
      if (Ph(t, n, e, l, ut)) {
        ((Rt = 1), Tu(t, xe(l, t.current)), (at = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((at = n), u);
      ((Rt = 1), Tu(t, xe(l, t.current)), (at = null));
      return;
    }
    e.flags & 32768
      ? (ct || a === 1
          ? (t = !0)
          : Ta || (ut & 536870912) !== 0
            ? (t = !1)
            : ((gl = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = se.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Fo(e, t))
      : qu(e);
  }
  function qu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Fo(e, gl);
        return;
      }
      t = e.return;
      var l = l0(e.alternate, e, tl);
      if (l !== null) {
        at = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        at = e;
        return;
      }
      at = e = t;
    } while (e !== null);
    Rt === 0 && (Rt = 5);
  }
  function Fo(t, e) {
    do {
      var l = a0(t.alternate, t);
      if (l !== null) {
        ((l.flags &= 32767), (at = l));
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        at = t;
        return;
      }
      at = t = l;
    } while (t !== null);
    ((Rt = 6), (at = null));
  }
  function Io(t, e, l, a, n, u, i, s, m) {
    t.cancelPendingCommit = null;
    do Yu();
    while (Yt !== 0);
    if ((rt & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= Qi),
        Vm(t, l, u, i, s, m),
        t === St && ((at = St = null), (ut = 0)),
        (Aa = e),
        (Sl = t),
        (el = l),
        (Wc = u),
        (Fc = n),
        (Xo = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            v0(Gn, function () {
              return (ad(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = R.T), (R.T = null), (n = B.p), (B.p = 2), (i = rt), (rt |= 4));
        try {
          n0(t, e, l);
        } finally {
          ((rt = i), (B.p = n), (R.T = a));
        }
      }
      ((Yt = 1), Po(), td(), ed());
    }
  }
  function Po() {
    if (Yt === 1) {
      Yt = 0;
      var t = Sl,
        e = Aa,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        ((l = R.T), (R.T = null));
        var a = B.p;
        B.p = 2;
        var n = rt;
        rt |= 4;
        try {
          Co(e, t);
          var u = mf,
            i = Ys(t.containerInfo),
            s = u.focusedElem,
            m = u.selectionRange;
          if (
            i !== s &&
            s &&
            s.ownerDocument &&
            qs(s.ownerDocument.documentElement, s)
          ) {
            if (m !== null && qi(s)) {
              var S = m.start,
                j = m.end;
              if ((j === void 0 && (j = S), "selectionStart" in s))
                ((s.selectionStart = S),
                  (s.selectionEnd = Math.min(j, s.value.length)));
              else {
                var D = s.ownerDocument || document,
                  T = (D && D.defaultView) || window;
                if (T.getSelection) {
                  var A = T.getSelection(),
                    L = s.textContent.length,
                    w = Math.min(m.start, L),
                    pt = m.end === void 0 ? w : Math.min(m.end, L);
                  !A.extend && w > pt && ((i = pt), (pt = w), (w = i));
                  var x = Bs(s, w),
                    v = Bs(s, pt);
                  if (
                    x &&
                    v &&
                    (A.rangeCount !== 1 ||
                      A.anchorNode !== x.node ||
                      A.anchorOffset !== x.offset ||
                      A.focusNode !== v.node ||
                      A.focusOffset !== v.offset)
                  ) {
                    var b = D.createRange();
                    (b.setStart(x.node, x.offset),
                      A.removeAllRanges(),
                      w > pt
                        ? (A.addRange(b), A.extend(v.node, v.offset))
                        : (b.setEnd(v.node, v.offset), A.addRange(b)));
                  }
                }
              }
            }
            for (D = [], A = s; (A = A.parentNode); )
              A.nodeType === 1 &&
                D.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < D.length;
              s++
            ) {
              var _ = D[s];
              ((_.element.scrollLeft = _.left), (_.element.scrollTop = _.top));
            }
          }
          ((Wu = !!df), (mf = df = null));
        } finally {
          ((rt = n), (B.p = a), (R.T = l));
        }
      }
      ((t.current = e), (Yt = 2));
    }
  }
  function td() {
    if (Yt === 2) {
      Yt = 0;
      var t = Sl,
        e = Aa,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ((l = R.T), (R.T = null));
        var a = B.p;
        B.p = 2;
        var n = rt;
        rt |= 4;
        try {
          Ro(t, e.alternate, e);
        } finally {
          ((rt = n), (B.p = a), (R.T = l));
        }
      }
      Yt = 3;
    }
  }
  function ed() {
    if (Yt === 4 || Yt === 3) {
      ((Yt = 0), Hm());
      var t = Sl,
        e = Aa,
        l = el,
        a = Xo;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Yt = 5)
        : ((Yt = 0), (Aa = Sl = null), ld(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (bl = null),
        gi(l),
        (e = e.stateNode),
        ue && typeof ue.onCommitFiberRoot == "function")
      )
        try {
          ue.onCommitFiberRoot(Ya, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((e = R.T), (n = B.p), (B.p = 2), (R.T = null));
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var s = a[i];
            u(s.value, { componentStack: s.stack });
          }
        } finally {
          ((R.T = e), (B.p = n));
        }
      }
      ((el & 3) !== 0 && Yu(),
        Be(t),
        (n = t.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0
          ? t === Ic
            ? bn++
            : ((bn = 0), (Ic = t))
          : (bn = 0),
        Sn(0));
    }
  }
  function ld(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), tn(e)));
  }
  function Yu() {
    return (Po(), td(), ed(), ad());
  }
  function ad() {
    if (Yt !== 5) return !1;
    var t = Sl,
      e = Wc;
    Wc = 0;
    var l = gi(el),
      a = R.T,
      n = B.p;
    try {
      ((B.p = 32 > l ? 32 : l), (R.T = null), (l = Fc), (Fc = null));
      var u = Sl,
        i = el;
      if (((Yt = 0), (Aa = Sl = null), (el = 0), (rt & 6) !== 0))
        throw Error(f(331));
      var s = rt;
      if (
        ((rt |= 4),
        Yo(u.current),
        Ho(u, u.current, i, l),
        (rt = s),
        Sn(0, !1),
        ue && typeof ue.onPostCommitFiberRoot == "function")
      )
        try {
          ue.onPostCommitFiberRoot(Ya, u);
        } catch {}
      return !0;
    } finally {
      ((B.p = n), (R.T = a), ld(t, e));
    }
  }
  function nd(t, e, l) {
    ((e = xe(l, e)),
      (e = Oc(t.stateNode, e, 2)),
      (t = hl(t, e, 2)),
      t !== null && (Ga(t, 2), Be(t)));
  }
  function mt(t, e, l) {
    if (t.tag === 3) nd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          nd(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (bl === null || !bl.has(a)))
          ) {
            ((t = xe(l, t)),
              (l = no(2)),
              (a = hl(e, l, 2)),
              a !== null && (uo(l, a, e, t), Ga(a, 2), Be(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function ef(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new c0();
      var n = new Set();
      a.set(e, n);
    } else ((n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n)));
    n.has(l) ||
      ((Jc = !0), n.add(l), (t = d0.bind(null, t, e, l)), e.then(t, t));
  }
  function d0(t, e, l) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      St === t &&
        (ut & l) === l &&
        (Rt === 4 || (Rt === 3 && (ut & 62914560) === ut && 300 > ne() - Du)
          ? (rt & 2) === 0 && ja(t, 0)
          : ($c |= l),
        za === ut && (za = 0)),
      Be(t));
  }
  function ud(t, e) {
    (e === 0 && (e = If()), (t = ql(t, e)), t !== null && (Ga(t, e), Be(t)));
  }
  function m0(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), ud(t, l));
  }
  function h0(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    (a !== null && a.delete(e), ud(t, l));
  }
  function v0(t, e) {
    return hi(t, e);
  }
  var Lu = null,
    _a = null,
    lf = !1,
    Gu = !1,
    af = !1,
    Nl = 0;
  function Be(t) {
    (t !== _a &&
      t.next === null &&
      (_a === null ? (Lu = _a = t) : (_a = _a.next = t)),
      (Gu = !0),
      lf || ((lf = !0), p0()));
  }
  function Sn(t, e) {
    if (!af && Gu) {
      af = !0;
      do
        for (var l = !1, a = Lu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                s = a.pingedLanes;
              ((u = (1 << (31 - ie(42 | t) + 1)) - 1),
                (u &= n & ~(i & ~s)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((l = !0), sd(a, u));
          } else
            ((u = ut),
              (u = Vn(
                a,
                a === St ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || La(a, u) || ((l = !0), sd(a, u)));
          a = a.next;
        }
      while (l);
      af = !1;
    }
  }
  function y0() {
    id();
  }
  function id() {
    Gu = lf = !1;
    var t = 0;
    Nl !== 0 && j0() && (t = Nl);
    for (var e = ne(), l = null, a = Lu; a !== null; ) {
      var n = a.next,
        u = cd(a, e);
      (u === 0
        ? ((a.next = null),
          l === null ? (Lu = n) : (l.next = n),
          n === null && (_a = l))
        : ((l = a), (t !== 0 || (u & 3) !== 0) && (Gu = !0)),
        (a = n));
    }
    ((Yt !== 0 && Yt !== 5) || Sn(t), Nl !== 0 && (Nl = 0));
  }
  function cd(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - ie(u),
        s = 1 << i,
        m = n[i];
      (m === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[i] = Zm(s, e))
        : m <= e && (t.expiredLanes |= s),
        (u &= ~s));
    }
    if (
      ((e = St),
      (l = ut),
      (l = Vn(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (dt === 2 || dt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && vi(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || La(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && vi(a), gi(l))) {
        case 2:
        case 8:
          l = Wf;
          break;
        case 32:
          l = Gn;
          break;
        case 268435456:
          l = Ff;
          break;
        default:
          l = Gn;
      }
      return (
        (a = fd.bind(null, t)),
        (l = hi(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && vi(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function fd(t, e) {
    if (Yt !== 0 && Yt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if (Yu() && t.callbackNode !== l) return null;
    var a = ut;
    return (
      (a = Vn(
        t,
        t === St ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Zo(t, a, e),
          cd(t, ne()),
          t.callbackNode != null && t.callbackNode === l
            ? fd.bind(null, t)
            : null)
    );
  }
  function sd(t, e) {
    if (Yu()) return null;
    Zo(t, e, !0);
  }
  function p0() {
    _0(function () {
      (rt & 6) !== 0 ? hi(kf, y0) : id();
    });
  }
  function nf() {
    if (Nl === 0) {
      var t = ha;
      (t === 0 && ((t = Xn), (Xn <<= 1), (Xn & 261888) === 0 && (Xn = 256)),
        (Nl = t));
    }
    return Nl;
  }
  function rd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : $n("" + t);
  }
  function od(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function g0(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = rd((n[Ft] || null).action),
        i = a.submitter;
      i &&
        ((e = (e = i[Ft] || null)
          ? rd(e.formAction)
          : i.getAttribute("formAction")),
        e !== null && ((u = e), (i = null)));
      var s = new In("action", "action", null, a, n);
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Nl !== 0) {
                  var m = i ? od(n, i) : new FormData(n);
                  Tc(
                    l,
                    { pending: !0, data: m, method: n.method, action: u },
                    null,
                    m,
                  );
                }
              } else
                typeof u == "function" &&
                  (s.preventDefault(),
                  (m = i ? od(n, i) : new FormData(n)),
                  Tc(
                    l,
                    { pending: !0, data: m, method: n.method, action: u },
                    u,
                    m,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var uf = 0; uf < Xi.length; uf++) {
    var cf = Xi[uf],
      x0 = cf.toLowerCase(),
      b0 = cf[0].toUpperCase() + cf.slice(1);
    Re(x0, "on" + b0);
  }
  (Re(Xs, "onAnimationEnd"),
    Re(Qs, "onAnimationIteration"),
    Re(Zs, "onAnimationStart"),
    Re("dblclick", "onDoubleClick"),
    Re("focusin", "onFocus"),
    Re("focusout", "onBlur"),
    Re(Bh, "onTransitionRun"),
    Re(qh, "onTransitionStart"),
    Re(Yh, "onTransitionCancel"),
    Re(Vs, "onTransitionEnd"),
    ta("onMouseEnter", ["mouseout", "mouseover"]),
    ta("onMouseLeave", ["mouseout", "mouseover"]),
    ta("onPointerEnter", ["pointerout", "pointerover"]),
    ta("onPointerLeave", ["pointerout", "pointerover"]),
    Cl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Cl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Cl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Cl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Cl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Cl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var En =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    S0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(En),
    );
  function dd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var s = a[i],
              m = s.instance,
              S = s.currentTarget;
            if (((s = s.listener), m !== u && n.isPropagationStopped()))
              break t;
            ((u = s), (n.currentTarget = S));
            try {
              u(n);
            } catch (j) {
              eu(j);
            }
            ((n.currentTarget = null), (u = m));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((s = a[i]),
              (m = s.instance),
              (S = s.currentTarget),
              (s = s.listener),
              m !== u && n.isPropagationStopped())
            )
              break t;
            ((u = s), (n.currentTarget = S));
            try {
              u(n);
            } catch (j) {
              eu(j);
            }
            ((n.currentTarget = null), (u = m));
          }
      }
    }
  }
  function nt(t, e) {
    var l = e[xi];
    l === void 0 && (l = e[xi] = new Set());
    var a = t + "__bubble";
    l.has(a) || (md(e, t, 2, !1), l.add(a));
  }
  function ff(t, e, l) {
    var a = 0;
    (e && (a |= 4), md(l, t, a, e));
  }
  var Xu = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(t) {
    if (!t[Xu]) {
      ((t[Xu] = !0),
        us.forEach(function (l) {
          l !== "selectionchange" && (S0.has(l) || ff(l, !1, t), ff(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Xu] || ((e[Xu] = !0), ff("selectionchange", !1, e));
    }
  }
  function md(t, e, l, a) {
    switch (Qd(e)) {
      case 2:
        var n = k0;
        break;
      case 8:
        n = W0;
        break;
      default:
        n = Tf;
    }
    ((l = n.bind(null, e, l, t)),
      (n = void 0),
      !Ri ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
          ? t.addEventListener(e, l, { passive: n })
          : t.addEventListener(e, l, !1));
  }
  function rf(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var m = i.tag;
              if ((m === 3 || m === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (((i = Fl(s)), i === null)) return;
            if (((m = i.tag), m === 5 || m === 6 || m === 26 || m === 27)) {
              a = u = i;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    ps(function () {
      var S = u,
        j = Ai(l),
        D = [];
      t: {
        var T = ws.get(t);
        if (T !== void 0) {
          var A = In,
            L = t;
          switch (t) {
            case "keypress":
              if (Wn(l) === 0) break t;
            case "keydown":
            case "keyup":
              A = hh;
              break;
            case "focusin":
              ((L = "focus"), (A = Di));
              break;
            case "focusout":
              ((L = "blur"), (A = Di));
              break;
            case "beforeblur":
            case "afterblur":
              A = Di;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = bs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = lh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = ph;
              break;
            case Xs:
            case Qs:
            case Zs:
              A = uh;
              break;
            case Vs:
              A = xh;
              break;
            case "scroll":
            case "scrollend":
              A = th;
              break;
            case "wheel":
              A = Sh;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = ch;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = Es;
              break;
            case "toggle":
            case "beforetoggle":
              A = Nh;
          }
          var w = (e & 4) !== 0,
            pt = !w && (t === "scroll" || t === "scrollend"),
            x = w ? (T !== null ? T + "Capture" : null) : T;
          w = [];
          for (var v = S, b; v !== null; ) {
            var _ = v;
            if (
              ((b = _.stateNode),
              (_ = _.tag),
              (_ !== 5 && _ !== 26 && _ !== 27) ||
                b === null ||
                x === null ||
                ((_ = Za(v, x)), _ != null && w.push(Nn(v, _, b))),
              pt)
            )
              break;
            v = v.return;
          }
          0 < w.length &&
            ((T = new A(T, L, null, l, j)), D.push({ event: T, listeners: w }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((T = t === "mouseover" || t === "pointerover"),
            (A = t === "mouseout" || t === "pointerout"),
            T &&
              l !== zi &&
              (L = l.relatedTarget || l.fromElement) &&
              (Fl(L) || L[Wl]))
          )
            break t;
          if (
            (A || T) &&
            ((T =
              j.window === j
                ? j
                : (T = j.ownerDocument)
                  ? T.defaultView || T.parentWindow
                  : window),
            A
              ? ((L = l.relatedTarget || l.toElement),
                (A = S),
                (L = L ? Fl(L) : null),
                L !== null &&
                  ((pt = y(L)),
                  (w = L.tag),
                  L !== pt || (w !== 5 && w !== 27 && w !== 6)) &&
                  (L = null))
              : ((A = null), (L = S)),
            A !== L)
          ) {
            if (
              ((w = bs),
              (_ = "onMouseLeave"),
              (x = "onMouseEnter"),
              (v = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((w = Es),
                (_ = "onPointerLeave"),
                (x = "onPointerEnter"),
                (v = "pointer")),
              (pt = A == null ? T : Qa(A)),
              (b = L == null ? T : Qa(L)),
              (T = new w(_, v + "leave", A, l, j)),
              (T.target = pt),
              (T.relatedTarget = b),
              (_ = null),
              Fl(j) === S &&
                ((w = new w(x, v + "enter", L, l, j)),
                (w.target = b),
                (w.relatedTarget = pt),
                (_ = w)),
              (pt = _),
              A && L)
            )
              e: {
                for (w = E0, x = A, v = L, b = 0, _ = x; _; _ = w(_)) b++;
                _ = 0;
                for (var Z = v; Z; Z = w(Z)) _++;
                for (; 0 < b - _; ) ((x = w(x)), b--);
                for (; 0 < _ - b; ) ((v = w(v)), _--);
                for (; b--; ) {
                  if (x === v || (v !== null && x === v.alternate)) {
                    w = x;
                    break e;
                  }
                  ((x = w(x)), (v = w(v)));
                }
                w = null;
              }
            else w = null;
            (A !== null && hd(D, T, A, w, !1),
              L !== null && pt !== null && hd(D, pt, L, w, !0));
          }
        }
        t: {
          if (
            ((T = S ? Qa(S) : window),
            (A = T.nodeName && T.nodeName.toLowerCase()),
            A === "select" || (A === "input" && T.type === "file"))
          )
            var ft = Os;
          else if (Rs(T))
            if (Ms) ft = Ch;
            else {
              ft = Mh;
              var Q = Oh;
            }
          else
            ((A = T.nodeName),
              !A ||
              A.toLowerCase() !== "input" ||
              (T.type !== "checkbox" && T.type !== "radio")
                ? S && Ti(S.elementType) && (ft = Os)
                : (ft = Dh));
          if (ft && (ft = ft(t, S))) {
            _s(D, ft, l, j);
            break t;
          }
          (Q && Q(t, T, S),
            t === "focusout" &&
              S &&
              T.type === "number" &&
              S.memoizedProps.value != null &&
              Ni(T, "number", T.value));
        }
        switch (((Q = S ? Qa(S) : window), t)) {
          case "focusin":
            (Rs(Q) || Q.contentEditable === "true") &&
              ((ia = Q), (Yi = S), (Fa = null));
            break;
          case "focusout":
            Fa = Yi = ia = null;
            break;
          case "mousedown":
            Li = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Li = !1), Ls(D, l, j));
            break;
          case "selectionchange":
            if (Hh) break;
          case "keydown":
          case "keyup":
            Ls(D, l, j);
        }
        var et;
        if (Ui)
          t: {
            switch (t) {
              case "compositionstart":
                var it = "onCompositionStart";
                break t;
              case "compositionend":
                it = "onCompositionEnd";
                break t;
              case "compositionupdate":
                it = "onCompositionUpdate";
                break t;
            }
            it = void 0;
          }
        else
          ua
            ? As(t, l) && (it = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (it = "onCompositionStart");
        (it &&
          (Ns &&
            l.locale !== "ko" &&
            (ua || it !== "onCompositionStart"
              ? it === "onCompositionEnd" && ua && (et = gs())
              : ((cl = j),
                (_i = "value" in cl ? cl.value : cl.textContent),
                (ua = !0))),
          (Q = Qu(S, it)),
          0 < Q.length &&
            ((it = new Ss(it, t, null, l, j)),
            D.push({ event: it, listeners: Q }),
            et
              ? (it.data = et)
              : ((et = js(l)), et !== null && (it.data = et)))),
          (et = zh ? Ah(t, l) : jh(t, l)) &&
            ((it = Qu(S, "onBeforeInput")),
            0 < it.length &&
              ((Q = new Ss("onBeforeInput", "beforeinput", null, l, j)),
              D.push({ event: Q, listeners: it }),
              (Q.data = et))),
          g0(D, t, S, l, j));
      }
      dd(D, e);
    });
  }
  function Nn(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function Qu(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Za(t, l)),
          n != null && a.unshift(Nn(t, n, u)),
          (n = Za(t, e)),
          n != null && a.push(Nn(t, n, u))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function E0(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function hd(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a; ) {
      var s = l,
        m = s.alternate,
        S = s.stateNode;
      if (((s = s.tag), m !== null && m === a)) break;
      ((s !== 5 && s !== 26 && s !== 27) ||
        S === null ||
        ((m = S),
        n
          ? ((S = Za(l, u)), S != null && i.unshift(Nn(l, S, m)))
          : n || ((S = Za(l, u)), S != null && i.push(Nn(l, S, m)))),
        (l = l.return));
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var N0 = /\r\n?/g,
    T0 = /\u0000|\uFFFD/g;
  function vd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        N0,
        `
`,
      )
      .replace(T0, "");
  }
  function yd(t, e) {
    return ((e = vd(e)), vd(t) === e);
  }
  function yt(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || la(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            la(t, "" + a);
        break;
      case "className":
        Kn(t, "class", a);
        break;
      case "tabIndex":
        Kn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Kn(t, l, a);
        break;
      case "style":
        vs(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Kn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        ((a = $n("" + a)), t.setAttribute(l, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (e !== "input" && yt(t, e, "name", n.name, n, null),
                yt(t, e, "formEncType", n.formEncType, n, null),
                yt(t, e, "formMethod", n.formMethod, n, null),
                yt(t, e, "formTarget", n.formTarget, n, null))
              : (yt(t, e, "encType", n.encType, n, null),
                yt(t, e, "method", n.method, n, null),
                yt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        ((a = $n("" + a)), t.setAttribute(l, a));
        break;
      case "onClick":
        a != null && (t.onclick = Ge);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((l = $n("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(l, a)
            : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        (nt("beforetoggle", t), nt("toggle", t), wn(t, "popover", a));
        break;
      case "xlinkActuate":
        Le(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Le(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Le(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Le(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Le(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Le(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Le(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Le(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Le(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        wn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Im.get(l) || l), wn(t, l, a));
    }
  }
  function of(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        vs(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? la(t, a)
          : (typeof a == "number" || typeof a == "bigint") && la(t, "" + a);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Ge);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!is.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (u = t[Ft] || null),
              (u = u != null ? u[l] : null),
              typeof u == "function" && t.removeEventListener(e, u, n),
              typeof a == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n));
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
                ? t.setAttribute(l, "")
                : wn(t, l, a);
          }
    }
  }
  function wt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (nt("error", t), nt("load", t));
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  yt(t, e, u, i, l, null);
              }
          }
        (n && yt(t, e, "srcSet", l.srcSet, l, null),
          a && yt(t, e, "src", l.src, l, null));
        return;
      case "input":
        nt("invalid", t);
        var s = (u = i = n = null),
          m = null,
          S = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var j = l[a];
            if (j != null)
              switch (a) {
                case "name":
                  n = j;
                  break;
                case "type":
                  i = j;
                  break;
                case "checked":
                  m = j;
                  break;
                case "defaultChecked":
                  S = j;
                  break;
                case "value":
                  u = j;
                  break;
                case "defaultValue":
                  s = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null) throw Error(f(137, e));
                  break;
                default:
                  yt(t, e, a, j, l, null);
              }
          }
        os(t, u, s, m, S, i, n, !1);
        return;
      case "select":
        (nt("invalid", t), (a = i = u = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                i = s;
                break;
              case "multiple":
                a = s;
              default:
                yt(t, e, n, s, l, null);
            }
        ((e = u),
          (l = i),
          (t.multiple = !!a),
          e != null ? ea(t, !!a, e, !1) : l != null && ea(t, !!a, l, !0));
        return;
      case "textarea":
        (nt("invalid", t), (u = n = a = null));
        for (i in l)
          if (l.hasOwnProperty(i) && ((s = l[i]), s != null))
            switch (i) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(f(91));
                break;
              default:
                yt(t, e, i, s, l, null);
            }
        ms(t, a, n, u);
        return;
      case "option":
        for (m in l)
          l.hasOwnProperty(m) &&
            ((a = l[m]), a != null) &&
            (m === "selected"
              ? (t.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : yt(t, e, m, a, l, null));
        return;
      case "dialog":
        (nt("beforetoggle", t),
          nt("toggle", t),
          nt("cancel", t),
          nt("close", t));
        break;
      case "iframe":
      case "object":
        nt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < En.length; a++) nt(En[a], t);
        break;
      case "image":
        (nt("error", t), nt("load", t));
        break;
      case "details":
        nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (nt("error", t), nt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (S in l)
          if (l.hasOwnProperty(S) && ((a = l[S]), a != null))
            switch (S) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                yt(t, e, S, a, l, null);
            }
        return;
      default:
        if (Ti(e)) {
          for (j in l)
            l.hasOwnProperty(j) &&
              ((a = l[j]), a !== void 0 && of(t, e, j, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && yt(t, e, s, a, l, null));
  }
  function z0(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          s = null,
          m = null,
          S = null,
          j = null;
        for (A in l) {
          var D = l[A];
          if (l.hasOwnProperty(A) && D != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = D;
              default:
                a.hasOwnProperty(A) || yt(t, e, A, null, a, D);
            }
        }
        for (var T in a) {
          var A = a[T];
          if (((D = l[T]), a.hasOwnProperty(T) && (A != null || D != null)))
            switch (T) {
              case "type":
                u = A;
                break;
              case "name":
                n = A;
                break;
              case "checked":
                S = A;
                break;
              case "defaultChecked":
                j = A;
                break;
              case "value":
                i = A;
                break;
              case "defaultValue":
                s = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(f(137, e));
                break;
              default:
                A !== D && yt(t, e, T, A, a, D);
            }
        }
        Ei(t, i, s, m, S, j, u, n);
        return;
      case "select":
        A = i = s = T = null;
        for (u in l)
          if (((m = l[u]), l.hasOwnProperty(u) && m != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                A = m;
              default:
                a.hasOwnProperty(u) || yt(t, e, u, null, a, m);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (m = l[n]),
            a.hasOwnProperty(n) && (u != null || m != null))
          )
            switch (n) {
              case "value":
                T = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== m && yt(t, e, n, u, a, m);
            }
        ((e = s),
          (l = i),
          (a = A),
          T != null
            ? ea(t, !!l, T, !1)
            : !!a != !!l &&
              (e != null ? ea(t, !!l, e, !0) : ea(t, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        A = T = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                yt(t, e, s, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = l[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                T = n;
                break;
              case "defaultValue":
                A = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && yt(t, e, i, n, a, u);
            }
        ds(t, T, A);
        return;
      case "option":
        for (var L in l)
          ((T = l[L]),
            l.hasOwnProperty(L) &&
              T != null &&
              !a.hasOwnProperty(L) &&
              (L === "selected" ? (t.selected = !1) : yt(t, e, L, null, a, T)));
        for (m in a)
          ((T = a[m]),
            (A = l[m]),
            a.hasOwnProperty(m) &&
              T !== A &&
              (T != null || A != null) &&
              (m === "selected"
                ? (t.selected =
                    T && typeof T != "function" && typeof T != "symbol")
                : yt(t, e, m, T, a, A)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var w in l)
          ((T = l[w]),
            l.hasOwnProperty(w) &&
              T != null &&
              !a.hasOwnProperty(w) &&
              yt(t, e, w, null, a, T));
        for (S in a)
          if (
            ((T = a[S]),
            (A = l[S]),
            a.hasOwnProperty(S) && T !== A && (T != null || A != null))
          )
            switch (S) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(f(137, e));
                break;
              default:
                yt(t, e, S, T, a, A);
            }
        return;
      default:
        if (Ti(e)) {
          for (var pt in l)
            ((T = l[pt]),
              l.hasOwnProperty(pt) &&
                T !== void 0 &&
                !a.hasOwnProperty(pt) &&
                of(t, e, pt, void 0, a, T));
          for (j in a)
            ((T = a[j]),
              (A = l[j]),
              !a.hasOwnProperty(j) ||
                T === A ||
                (T === void 0 && A === void 0) ||
                of(t, e, j, T, a, A));
          return;
        }
    }
    for (var x in l)
      ((T = l[x]),
        l.hasOwnProperty(x) &&
          T != null &&
          !a.hasOwnProperty(x) &&
          yt(t, e, x, null, a, T));
    for (D in a)
      ((T = a[D]),
        (A = l[D]),
        !a.hasOwnProperty(D) ||
          T === A ||
          (T == null && A == null) ||
          yt(t, e, D, T, a, A));
  }
  function pd(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function A0() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          i = n.initiatorType,
          s = n.duration;
        if (u && s && pd(i)) {
          for (i = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var m = l[a],
              S = m.startTime;
            if (S > s) break;
            var j = m.transferSize,
              D = m.initiatorType;
            j &&
              pd(D) &&
              ((m = m.responseEnd), (i += j * (m < s ? 1 : (s - S) / (m - S))));
          }
          if ((--a, (e += (8 * (u + i)) / (n.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var df = null,
    mf = null;
  function Zu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function gd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function hf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var vf = null;
  function j0() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === vf
        ? !1
        : ((vf = t), !0)
      : ((vf = null), !1);
  }
  var bd = typeof setTimeout == "function" ? setTimeout : void 0,
    R0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Sd = typeof Promise == "function" ? Promise : void 0,
    _0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Sd < "u"
          ? function (t) {
              return Sd.resolve(null).then(t).catch(O0);
            }
          : bd;
  function O0(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Tl(t) {
    return t === "head";
  }
  function Ed(t, e) {
    var l = e,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((t.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            (t.removeChild(n), Ca(e));
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") Tn(t.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = t.ownerDocument.head), Tn(l));
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling,
              s = u.nodeName;
            (u[Xa] ||
              s === "SCRIPT" ||
              s === "STYLE" ||
              (s === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(u),
              (u = i));
          }
        } else l === "body" && Tn(t.ownerDocument.body);
      l = n;
    } while (l);
    Ca(e);
  }
  function Nd(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? e
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (e
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (t === 0) break;
          t--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || t++;
      l = a;
    } while (l);
  }
  function yf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (yf(l), bi(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function M0(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Xa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                t.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                t.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  t.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  t.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = Te(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function D0(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Te(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Td(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Te(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function pf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function gf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function C0(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading") e();
    else {
      var a = function () {
        (e(), l.removeEventListener("DOMContentLoaded", a));
      };
      (l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
    }
  }
  function Te(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var xf = null;
  function zd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return Te(t.nextSibling);
          e--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Ad(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else (l !== "/$" && l !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function jd(t, e, l) {
    switch (((e = Zu(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(f(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(f(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function Tn(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    bi(t);
  }
  var ze = new Map(),
    Rd = new Set();
  function Vu(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var ll = B.d;
  B.d = { f: U0, r: H0, D: B0, C: q0, L: Y0, m: L0, X: X0, S: G0, M: Q0 };
  function U0() {
    var t = ll.f(),
      e = Hu();
    return t || e;
  }
  function H0(t) {
    var e = Il(t);
    e !== null && e.tag === 5 && e.type === "form" ? Vr(e) : ll.r(t);
  }
  var Oa = typeof document > "u" ? null : document;
  function _d(t, e, l) {
    var a = Oa;
    if (a && typeof e == "string" && e) {
      var n = pe(e);
      ((n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        Rd.has(n) ||
          (Rd.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement("link")),
            wt(e, "link", t),
            Lt(e),
            a.head.appendChild(e))));
    }
  }
  function B0(t) {
    (ll.D(t), _d("dns-prefetch", t, null));
  }
  function q0(t, e) {
    (ll.C(t, e), _d("preconnect", t, e));
  }
  function Y0(t, e, l) {
    ll.L(t, e, l);
    var a = Oa;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + pe(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + pe(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + pe(l.imageSizes) + '"]'))
        : (n += '[href="' + pe(t) + '"]');
      var u = n;
      switch (e) {
        case "style":
          u = Ma(t);
          break;
        case "script":
          u = Da(t);
      }
      ze.has(u) ||
        ((t = z(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        ze.set(u, t),
        a.querySelector(n) !== null ||
          (e === "style" && a.querySelector(zn(u))) ||
          (e === "script" && a.querySelector(An(u))) ||
          ((e = a.createElement("link")),
          wt(e, "link", t),
          Lt(e),
          a.head.appendChild(e)));
    }
  }
  function L0(t, e) {
    ll.m(t, e);
    var l = Oa;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        n =
          'link[rel="modulepreload"][as="' + pe(a) + '"][href="' + pe(t) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Da(t);
      }
      if (
        !ze.has(u) &&
        ((t = z({ rel: "modulepreload", href: t }, e)),
        ze.set(u, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(An(u))) return;
        }
        ((a = l.createElement("link")),
          wt(a, "link", t),
          Lt(a),
          l.head.appendChild(a));
      }
    }
  }
  function G0(t, e, l) {
    ll.S(t, e, l);
    var a = Oa;
    if (a && t) {
      var n = Pl(a).hoistableStyles,
        u = Ma(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var s = { loading: 0, preload: null };
        if ((i = a.querySelector(zn(u)))) s.loading = 5;
        else {
          ((t = z({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = ze.get(u)) && bf(t, l));
          var m = (i = a.createElement("link"));
          (Lt(m),
            wt(m, "link", t),
            (m._p = new Promise(function (S, j) {
              ((m.onload = S), (m.onerror = j));
            })),
            m.addEventListener("load", function () {
              s.loading |= 1;
            }),
            m.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            wu(i, e, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: s }),
          n.set(u, i));
      }
    }
  }
  function X0(t, e) {
    ll.X(t, e);
    var l = Oa;
    if (l && t) {
      var a = Pl(l).hoistableScripts,
        n = Da(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(An(n))),
        u ||
          ((t = z({ src: t, async: !0 }, e)),
          (e = ze.get(n)) && Sf(t, e),
          (u = l.createElement("script")),
          Lt(u),
          wt(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Q0(t, e) {
    ll.M(t, e);
    var l = Oa;
    if (l && t) {
      var a = Pl(l).hoistableScripts,
        n = Da(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(An(n))),
        u ||
          ((t = z({ src: t, async: !0, type: "module" }, e)),
          (e = ze.get(n)) && Sf(t, e),
          (u = l.createElement("script")),
          Lt(u),
          wt(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Od(t, e, l, a) {
    var n = (n = lt.current) ? Vu(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Ma(l.href)),
            (l = Pl(n).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Ma(l.href);
          var u = Pl(n).hoistableStyles,
            i = u.get(t);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, i),
              (u = n.querySelector(zn(t))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              ze.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                ze.set(t, l),
                u || Z0(n, t, l, i.state))),
            e && a === null)
          )
            throw Error(f(528, ""));
          return i;
        }
        if (e && a !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Da(l)),
              (l = Pl(n).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, t));
    }
  }
  function Ma(t) {
    return 'href="' + pe(t) + '"';
  }
  function zn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Md(t) {
    return z({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Z0(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        wt(e, "link", l),
        Lt(e),
        t.head.appendChild(e));
  }
  function Da(t) {
    return '[src="' + pe(t) + '"]';
  }
  function An(t) {
    return "script[async]" + t;
  }
  function Dd(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + pe(l.href) + '"]');
          if (a) return ((e.instance = a), Lt(a), a);
          var n = z({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Lt(a),
            wt(a, "style", n),
            wu(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          n = Ma(l.href);
          var u = t.querySelector(zn(n));
          if (u) return ((e.state.loading |= 4), (e.instance = u), Lt(u), u);
          ((a = Md(l)),
            (n = ze.get(n)) && bf(a, n),
            (u = (t.ownerDocument || t).createElement("link")),
            Lt(u));
          var i = u;
          return (
            (i._p = new Promise(function (s, m) {
              ((i.onload = s), (i.onerror = m));
            })),
            wt(u, "link", a),
            (e.state.loading |= 4),
            wu(u, l.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = Da(l.src)),
            (n = t.querySelector(An(u)))
              ? ((e.instance = n), Lt(n), n)
              : ((a = l),
                (n = ze.get(u)) && ((a = z({}, l)), Sf(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement("script")),
                Lt(n),
                wt(n, "link", a),
                t.head.appendChild(n),
                (e.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), wu(a, l.precedence, t));
    return e.instance;
  }
  function wu(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var s = a[i];
      if (s.dataset.precedence === e) u = s;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function bf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Sf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Ku = null;
  function Cd(t, e, l) {
    if (Ku === null) {
      var a = new Map(),
        n = (Ku = new Map());
      n.set(l, a);
    } else ((n = Ku), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[Xa] ||
          u[Xt] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var s = a.get(i);
        s ? s.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function Ud(t, e, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function V0(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Hd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function w0(t, e, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Ma(a.href),
          u = e.querySelector(zn(n));
        if (u) {
          ((e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Ju.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = u),
            Lt(u));
          return;
        }
        ((u = e.ownerDocument || e),
          (a = Md(a)),
          (n = ze.get(n)) && bf(a, n),
          (u = u.createElement("link")),
          Lt(u));
        var i = u;
        ((i._p = new Promise(function (s, m) {
          ((i.onload = s), (i.onerror = m));
        })),
          wt(u, "link", a),
          (l.instance = u));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = Ju.bind(t)),
          e.addEventListener("load", l),
          e.addEventListener("error", l)));
    }
  }
  var Ef = 0;
  function K0(t, e) {
    return (
      t.stylesheets && t.count === 0 && ku(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((t.stylesheets && ku(t, t.stylesheets), t.unsuspend)) {
                var u = t.unsuspend;
                ((t.unsuspend = null), u());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Ef === 0 && (Ef = 62500 * A0());
            var n = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && ku(t, t.stylesheets), t.unsuspend))
                ) {
                  var u = t.unsuspend;
                  ((t.unsuspend = null), u());
                }
              },
              (t.imgBytes > Ef ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = l),
              function () {
                ((t.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function Ju() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ku(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var $u = null;
  function ku(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        ($u = new Map()),
        e.forEach(J0, t),
        ($u = null),
        Ju.call(t)));
  }
  function J0(t, e) {
    if (!(e.state.loading & 4)) {
      var l = $u.get(t);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), $u.set(t, l));
        for (
          var n = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      ((n = e.instance),
        (i = n.getAttribute("data-precedence")),
        (u = l.get(i) || a),
        u === a && l.set(null, n),
        l.set(i, n),
        this.count++,
        (a = Ju.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var jn = {
    $$typeof: $,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0,
  };
  function $0(t, e, l, a, n, u, i, s, m) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = yi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = yi(0)),
      (this.hiddenUpdates = yi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = m),
      (this.incompleteTransitions = new Map()));
  }
  function Bd(t, e, l, a, n, u, i, s, m, S, j, D) {
    return (
      (t = new $0(t, e, l, i, m, S, j, D, s)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = fe(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = tc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: e }),
      nc(u),
      t
    );
  }
  function qd(t) {
    return t ? ((t = sa), t) : sa;
  }
  function Yd(t, e, l, a, n, u) {
    ((n = qd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = ml(e)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = hl(t, a, e)),
      l !== null && (ae(l, t, e), nn(l, t, e)));
  }
  function Ld(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Nf(t, e) {
    (Ld(t, e), (t = t.alternate) && Ld(t, e));
  }
  function Gd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ql(t, 67108864);
      (e !== null && ae(e, t, 67108864), Nf(t, 67108864));
    }
  }
  function Xd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = me();
      e = pi(e);
      var l = ql(t, e);
      (l !== null && ae(l, t, e), Nf(t, e));
    }
  }
  var Wu = !0;
  function k0(t, e, l, a) {
    var n = R.T;
    R.T = null;
    var u = B.p;
    try {
      ((B.p = 2), Tf(t, e, l, a));
    } finally {
      ((B.p = u), (R.T = n));
    }
  }
  function W0(t, e, l, a) {
    var n = R.T;
    R.T = null;
    var u = B.p;
    try {
      ((B.p = 8), Tf(t, e, l, a));
    } finally {
      ((B.p = u), (R.T = n));
    }
  }
  function Tf(t, e, l, a) {
    if (Wu) {
      var n = zf(a);
      if (n === null) (rf(t, e, a, Fu, l), Zd(t, a));
      else if (I0(n, t, e, l, a)) a.stopPropagation();
      else if ((Zd(t, a), e & 4 && -1 < F0.indexOf(t))) {
        for (; n !== null; ) {
          var u = Il(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Dl(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var m = 1 << (31 - ie(i));
                      ((s.entanglements[1] |= m), (i &= ~m));
                    }
                    (Be(u), (rt & 6) === 0 && ((Cu = ne() + 500), Sn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((s = ql(u, 2)), s !== null && ae(s, u, 2), Hu(), Nf(u, 2));
            }
          if (((u = zf(a)), u === null && rf(t, e, a, Fu, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else rf(t, e, a, null, l);
    }
  }
  function zf(t) {
    return ((t = Ai(t)), Af(t));
  }
  var Fu = null;
  function Af(t) {
    if (((Fu = null), (t = Fl(t)), t !== null)) {
      var e = y(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = E(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = M(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Fu = t), null);
  }
  function Qd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Bm()) {
          case kf:
            return 2;
          case Wf:
            return 8;
          case Gn:
          case qm:
            return 32;
          case Ff:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var jf = !1,
    zl = null,
    Al = null,
    jl = null,
    Rn = new Map(),
    _n = new Map(),
    Rl = [],
    F0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Zd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        zl = null;
        break;
      case "dragenter":
      case "dragleave":
        Al = null;
        break;
      case "mouseover":
      case "mouseout":
        jl = null;
        break;
      case "pointerover":
      case "pointerout":
        Rn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _n.delete(e.pointerId);
    }
  }
  function On(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        e !== null && ((e = Il(e)), e !== null && Gd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function I0(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return ((zl = On(zl, t, e, l, a, n)), !0);
      case "dragenter":
        return ((Al = On(Al, t, e, l, a, n)), !0);
      case "mouseover":
        return ((jl = On(jl, t, e, l, a, n)), !0);
      case "pointerover":
        var u = n.pointerId;
        return (Rn.set(u, On(Rn.get(u) || null, t, e, l, a, n)), !0);
      case "gotpointercapture":
        return (
          (u = n.pointerId),
          _n.set(u, On(_n.get(u) || null, t, e, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function Vd(t) {
    var e = Fl(t.target);
    if (e !== null) {
      var l = y(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = E(l)), e !== null)) {
            ((t.blockedOn = e),
              as(t.priority, function () {
                Xd(l);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = M(l)), e !== null)) {
            ((t.blockedOn = e),
              as(t.priority, function () {
                Xd(l);
              }));
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Iu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = zf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((zi = a), l.target.dispatchEvent(a), (zi = null));
      } else return ((e = Il(l)), e !== null && Gd(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function wd(t, e, l) {
    Iu(t) && l.delete(e);
  }
  function P0() {
    ((jf = !1),
      zl !== null && Iu(zl) && (zl = null),
      Al !== null && Iu(Al) && (Al = null),
      jl !== null && Iu(jl) && (jl = null),
      Rn.forEach(wd),
      _n.forEach(wd));
  }
  function Pu(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      jf ||
        ((jf = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, P0)));
  }
  var ti = null;
  function Kd(t) {
    ti !== t &&
      ((ti = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        ti === t && (ti = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != "function") {
            if (Af(a || l) === null) continue;
            break;
          }
          var u = Il(l);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Tc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Ca(t) {
    function e(m) {
      return Pu(m, t);
    }
    (zl !== null && Pu(zl, t),
      Al !== null && Pu(Al, t),
      jl !== null && Pu(jl, t),
      Rn.forEach(e),
      _n.forEach(e));
    for (var l = 0; l < Rl.length; l++) {
      var a = Rl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Rl.length && ((l = Rl[0]), l.blockedOn === null); )
      (Vd(l), l.blockedOn === null && Rl.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[Ft] || null;
        if (typeof u == "function") i || Kd(l);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[Ft] || null))) s = i.formAction;
            else if (Af(n) !== null) continue;
          } else s = i.action;
          (typeof s == "function" ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            Kd(l));
        }
      }
  }
  function Jd() {
    function t(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (n !== null && (n(), (n = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function Rf(t) {
    this._internalRoot = t;
  }
  ((ei.prototype.render = Rf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(f(409));
      var l = e.current,
        a = me();
      Yd(l, a, t, e, null, null);
    }),
    (ei.prototype.unmount = Rf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Yd(t.current, 2, null, t, null, null), Hu(), (e[Wl] = null));
        }
      }));
  function ei(t) {
    this._internalRoot = t;
  }
  ei.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = ls();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Rl.length && e !== 0 && e < Rl[l].priority; l++);
      (Rl.splice(l, 0, t), l === 0 && Vd(t));
    }
  };
  var $d = r.version;
  if ($d !== "19.2.4") throw Error(f(527, $d, "19.2.4"));
  B.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(f(188))
        : ((t = Object.keys(t).join(",")), Error(f(268, t)));
    return (
      (t = g(e)),
      (t = t !== null ? C(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var tv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!li.isDisabled && li.supportsFiber)
      try {
        ((Ya = li.inject(tv)), (ue = li));
      } catch {}
  }
  return (
    (Dn.createRoot = function (t, e) {
      if (!h(t)) throw Error(f(299));
      var l = !1,
        a = "",
        n = to,
        u = eo,
        i = lo;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
        (e = Bd(t, 1, !1, null, null, l, a, null, n, u, i, Jd)),
        (t[Wl] = e.current),
        sf(t),
        new Rf(e)
      );
    }),
    (Dn.hydrateRoot = function (t, e, l) {
      if (!h(t)) throw Error(f(299));
      var a = !1,
        n = "",
        u = to,
        i = eo,
        s = lo,
        m = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.formState !== void 0 && (m = l.formState)),
        (e = Bd(t, 1, !0, e, l ?? null, a, n, m, u, i, s, Jd)),
        (e.context = qd(null)),
        (l = e.current),
        (a = me()),
        (a = pi(a)),
        (n = ml(a)),
        (n.callback = null),
        hl(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Ga(e, l),
        Be(e),
        (t[Wl] = e.current),
        sf(t),
        new ei(e)
      );
    }),
    (Dn.version = "19.2.4"),
    Dn
  );
}
var nm;
function rv() {
  if (nm) return Mf.exports;
  nm = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return (c(), (Mf.exports = sv()), Mf.exports);
}
var ov = rv();
var um = "popstate";
function im(c) {
  return (
    typeof c == "object" &&
    c != null &&
    "pathname" in c &&
    "search" in c &&
    "hash" in c &&
    "state" in c &&
    "key" in c
  );
}
function dv(c = {}) {
  function r(f, h) {
    let y = h.state?.masked,
      { pathname: E, search: M, hash: N } = y || f.location;
    return Yf(
      "",
      { pathname: E, search: M, hash: N },
      (h.state && h.state.usr) || null,
      (h.state && h.state.key) || "default",
      y
        ? {
            pathname: f.location.pathname,
            search: f.location.search,
            hash: f.location.hash,
          }
        : void 0,
    );
  }
  function d(f, h) {
    return typeof h == "string" ? h : Hn(h);
  }
  return hv(r, d, null, c);
}
function At(c, r) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(r);
}
function Ye(c, r) {
  if (!c) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function mv() {
  return Math.random().toString(36).substring(2, 10);
}
function cm(c, r) {
  return {
    usr: c.state,
    key: c.key,
    idx: r,
    masked: c.unstable_mask
      ? { pathname: c.pathname, search: c.search, hash: c.hash }
      : void 0,
  };
}
function Yf(c, r, d = null, f, h) {
  return {
    pathname: typeof c == "string" ? c : c.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? Ha(r) : r),
    state: d,
    key: (r && r.key) || f || mv(),
    unstable_mask: h,
  };
}
function Hn({ pathname: c = "/", search: r = "", hash: d = "" }) {
  return (
    r && r !== "?" && (c += r.charAt(0) === "?" ? r : "?" + r),
    d && d !== "#" && (c += d.charAt(0) === "#" ? d : "#" + d),
    c
  );
}
function Ha(c) {
  let r = {};
  if (c) {
    let d = c.indexOf("#");
    d >= 0 && ((r.hash = c.substring(d)), (c = c.substring(0, d)));
    let f = c.indexOf("?");
    (f >= 0 && ((r.search = c.substring(f)), (c = c.substring(0, f))),
      c && (r.pathname = c));
  }
  return r;
}
function hv(c, r, d, f = {}) {
  let { window: h = document.defaultView, v5Compat: y = !1 } = f,
    E = h.history,
    M = "POP",
    N = null,
    g = C();
  g == null && ((g = 0), E.replaceState({ ...E.state, idx: g }, ""));
  function C() {
    return (E.state || { idx: null }).idx;
  }
  function z() {
    M = "POP";
    let H = C(),
      J = H == null ? null : H - g;
    ((g = H), N && N({ action: M, location: G.location, delta: J }));
  }
  function q(H, J) {
    M = "PUSH";
    let tt = im(H) ? H : Yf(G.location, H, J);
    g = C() + 1;
    let $ = cm(tt, g),
      gt = G.createHref(tt.unstable_mask || tt);
    try {
      E.pushState($, "", gt);
    } catch (xt) {
      if (xt instanceof DOMException && xt.name === "DataCloneError") throw xt;
      h.location.assign(gt);
    }
    y && N && N({ action: M, location: G.location, delta: 1 });
  }
  function K(H, J) {
    M = "REPLACE";
    let tt = im(H) ? H : Yf(G.location, H, J);
    g = C();
    let $ = cm(tt, g),
      gt = G.createHref(tt.unstable_mask || tt);
    (E.replaceState($, "", gt),
      y && N && N({ action: M, location: G.location, delta: 0 }));
  }
  function V(H) {
    return vv(H);
  }
  let G = {
    get action() {
      return M;
    },
    get location() {
      return c(h, E);
    },
    listen(H) {
      if (N) throw new Error("A history only accepts one active listener");
      return (
        h.addEventListener(um, z),
        (N = H),
        () => {
          (h.removeEventListener(um, z), (N = null));
        }
      );
    },
    createHref(H) {
      return r(h, H);
    },
    createURL: V,
    encodeLocation(H) {
      let J = V(H);
      return { pathname: J.pathname, search: J.search, hash: J.hash };
    },
    push: q,
    replace: K,
    go(H) {
      return E.go(H);
    },
  };
  return G;
}
function vv(c, r = !1) {
  let d = "http://localhost";
  (typeof window < "u" &&
    (d =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    At(d, "No window.location.(origin|href) available to create URL"));
  let f = typeof c == "string" ? c : Hn(c);
  return (
    (f = f.replace(/ $/, "%20")),
    !r && f.startsWith("//") && (f = d + f),
    new URL(f, d)
  );
}
function vm(c, r, d = "/") {
  return yv(c, r, d, !1);
}
function yv(c, r, d, f) {
  let h = typeof r == "string" ? Ha(r) : r,
    y = al(h.pathname || "/", d);
  if (y == null) return null;
  let E = ym(c);
  pv(E);
  let M = null;
  for (let N = 0; M == null && N < E.length; ++N) {
    let g = Rv(y);
    M = Av(E[N], g, f);
  }
  return M;
}
function ym(c, r = [], d = [], f = "", h = !1) {
  let y = (E, M, N = h, g) => {
    let C = {
      relativePath: g === void 0 ? E.path || "" : g,
      caseSensitive: E.caseSensitive === !0,
      childrenIndex: M,
      route: E,
    };
    if (C.relativePath.startsWith("/")) {
      if (!C.relativePath.startsWith(f) && N) return;
      (At(
        C.relativePath.startsWith(f),
        `Absolute route path "${C.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (C.relativePath = C.relativePath.slice(f.length)));
    }
    let z = qe([f, C.relativePath]),
      q = d.concat(C);
    (E.children &&
      E.children.length > 0 &&
      (At(
        E.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${z}".`,
      ),
      ym(E.children, r, q, z, N)),
      !(E.path == null && !E.index) &&
        r.push({ path: z, score: Tv(z, E.index), routesMeta: q }));
  };
  return (
    c.forEach((E, M) => {
      if (E.path === "" || !E.path?.includes("?")) y(E, M);
      else for (let N of pm(E.path)) y(E, M, !0, N);
    }),
    r
  );
}
function pm(c) {
  let r = c.split("/");
  if (r.length === 0) return [];
  let [d, ...f] = r,
    h = d.endsWith("?"),
    y = d.replace(/\?$/, "");
  if (f.length === 0) return h ? [y, ""] : [y];
  let E = pm(f.join("/")),
    M = [];
  return (
    M.push(...E.map((N) => (N === "" ? y : [y, N].join("/")))),
    h && M.push(...E),
    M.map((N) => (c.startsWith("/") && N === "" ? "/" : N))
  );
}
function pv(c) {
  c.sort((r, d) =>
    r.score !== d.score
      ? d.score - r.score
      : zv(
          r.routesMeta.map((f) => f.childrenIndex),
          d.routesMeta.map((f) => f.childrenIndex),
        ),
  );
}
var gv = /^:[\w-]+$/,
  xv = 3,
  bv = 2,
  Sv = 1,
  Ev = 10,
  Nv = -2,
  fm = (c) => c === "*";
function Tv(c, r) {
  let d = c.split("/"),
    f = d.length;
  return (
    d.some(fm) && (f += Nv),
    r && (f += bv),
    d
      .filter((h) => !fm(h))
      .reduce((h, y) => h + (gv.test(y) ? xv : y === "" ? Sv : Ev), f)
  );
}
function zv(c, r) {
  return c.length === r.length && c.slice(0, -1).every((f, h) => f === r[h])
    ? c[c.length - 1] - r[r.length - 1]
    : 0;
}
function Av(c, r, d = !1) {
  let { routesMeta: f } = c,
    h = {},
    y = "/",
    E = [];
  for (let M = 0; M < f.length; ++M) {
    let N = f[M],
      g = M === f.length - 1,
      C = y === "/" ? r : r.slice(y.length) || "/",
      z = ii(
        { path: N.relativePath, caseSensitive: N.caseSensitive, end: g },
        C,
      ),
      q = N.route;
    if (
      (!z &&
        g &&
        d &&
        !f[f.length - 1].route.index &&
        (z = ii(
          { path: N.relativePath, caseSensitive: N.caseSensitive, end: !1 },
          C,
        )),
      !z)
    )
      return null;
    (Object.assign(h, z.params),
      E.push({
        params: h,
        pathname: qe([y, z.pathname]),
        pathnameBase: Dv(qe([y, z.pathnameBase])),
        route: q,
      }),
      z.pathnameBase !== "/" && (y = qe([y, z.pathnameBase])));
  }
  return E;
}
function ii(c, r) {
  typeof c == "string" && (c = { path: c, caseSensitive: !1, end: !0 });
  let [d, f] = jv(c.path, c.caseSensitive, c.end),
    h = r.match(d);
  if (!h) return null;
  let y = h[0],
    E = y.replace(/(.)\/+$/, "$1"),
    M = h.slice(1);
  return {
    params: f.reduce((g, { paramName: C, isOptional: z }, q) => {
      if (C === "*") {
        let V = M[q] || "";
        E = y.slice(0, y.length - V.length).replace(/(.)\/+$/, "$1");
      }
      const K = M[q];
      return (
        z && !K ? (g[C] = void 0) : (g[C] = (K || "").replace(/%2F/g, "/")),
        g
      );
    }, {}),
    pathname: y,
    pathnameBase: E,
    pattern: c,
  };
}
function jv(c, r = !1, d = !0) {
  Ye(
    c === "*" || !c.endsWith("*") || c.endsWith("/*"),
    `Route path "${c}" will be treated as if it were "${c.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/, "/*")}".`,
  );
  let f = [],
    h =
      "^" +
      c
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (E, M, N, g, C) => {
          if ((f.push({ paramName: M, isOptional: N != null }), N)) {
            let z = C.charAt(g + E.length);
            return z && z !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
          }
          return "/([^\\/]+)";
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    c.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (h += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : d
        ? (h += "\\/*$")
        : c !== "" && c !== "/" && (h += "(?:(?=\\/|$))"),
    [new RegExp(h, r ? void 0 : "i"), f]
  );
}
function Rv(c) {
  try {
    return c
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      Ye(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      c
    );
  }
}
function al(c, r) {
  if (r === "/") return c;
  if (!c.toLowerCase().startsWith(r.toLowerCase())) return null;
  let d = r.endsWith("/") ? r.length - 1 : r.length,
    f = c.charAt(d);
  return f && f !== "/" ? null : c.slice(d) || "/";
}
var _v = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Ov(c, r = "/") {
  let {
      pathname: d,
      search: f = "",
      hash: h = "",
    } = typeof c == "string" ? Ha(c) : c,
    y;
  return (
    d
      ? ((d = d.replace(/\/\/+/g, "/")),
        d.startsWith("/") ? (y = sm(d.substring(1), "/")) : (y = sm(d, r)))
      : (y = r),
    { pathname: y, search: Cv(f), hash: Uv(h) }
  );
}
function sm(c, r) {
  let d = r.replace(/\/+$/, "").split("/");
  return (
    c.split("/").forEach((h) => {
      h === ".." ? d.length > 1 && d.pop() : h !== "." && d.push(h);
    }),
    d.length > 1 ? d.join("/") : "/"
  );
}
function Hf(c, r, d, f) {
  return `Cannot include a '${c}' character in a manually specified \`to.${r}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Mv(c) {
  return c.filter(
    (r, d) => d === 0 || (r.route.path && r.route.path.length > 0),
  );
}
function gm(c) {
  let r = Mv(c);
  return r.map((d, f) => (f === r.length - 1 ? d.pathname : d.pathnameBase));
}
function Xf(c, r, d, f = !1) {
  let h;
  typeof c == "string"
    ? (h = Ha(c))
    : ((h = { ...c }),
      At(
        !h.pathname || !h.pathname.includes("?"),
        Hf("?", "pathname", "search", h),
      ),
      At(
        !h.pathname || !h.pathname.includes("#"),
        Hf("#", "pathname", "hash", h),
      ),
      At(!h.search || !h.search.includes("#"), Hf("#", "search", "hash", h)));
  let y = c === "" || h.pathname === "",
    E = y ? "/" : h.pathname,
    M;
  if (E == null) M = d;
  else {
    let z = r.length - 1;
    if (!f && E.startsWith("..")) {
      let q = E.split("/");
      for (; q[0] === ".."; ) (q.shift(), (z -= 1));
      h.pathname = q.join("/");
    }
    M = z >= 0 ? r[z] : "/";
  }
  let N = Ov(h, M),
    g = E && E !== "/" && E.endsWith("/"),
    C = (y || E === ".") && d.endsWith("/");
  return (!N.pathname.endsWith("/") && (g || C) && (N.pathname += "/"), N);
}
var qe = (c) => c.join("/").replace(/\/\/+/g, "/"),
  Dv = (c) => c.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Cv = (c) => (!c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c),
  Uv = (c) => (!c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c),
  Hv = class {
    constructor(c, r, d, f = !1) {
      ((this.status = c),
        (this.statusText = r || ""),
        (this.internal = f),
        d instanceof Error
          ? ((this.data = d.toString()), (this.error = d))
          : (this.data = d));
    }
  };
function Bv(c) {
  return (
    c != null &&
    typeof c.status == "number" &&
    typeof c.statusText == "string" &&
    typeof c.internal == "boolean" &&
    "data" in c
  );
}
function qv(c) {
  return (
    c
      .map((r) => r.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var xm =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function bm(c, r) {
  let d = c;
  if (typeof d != "string" || !_v.test(d))
    return { absoluteURL: void 0, isExternal: !1, to: d };
  let f = d,
    h = !1;
  if (xm)
    try {
      let y = new URL(window.location.href),
        E = d.startsWith("//") ? new URL(y.protocol + d) : new URL(d),
        M = al(E.pathname, r);
      E.origin === y.origin && M != null
        ? (d = M + E.search + E.hash)
        : (h = !0);
    } catch {
      Ye(
        !1,
        `<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: f, isExternal: h, to: d };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Sm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Sm);
var Yv = ["GET", ...Sm];
new Set(Yv);
var Ba = O.createContext(null);
Ba.displayName = "DataRouter";
var fi = O.createContext(null);
fi.displayName = "DataRouterState";
var Lv = O.createContext(!1),
  Em = O.createContext({ isTransitioning: !1 });
Em.displayName = "ViewTransition";
var Gv = O.createContext(new Map());
Gv.displayName = "Fetchers";
var Xv = O.createContext(null);
Xv.displayName = "Await";
var je = O.createContext(null);
je.displayName = "Navigation";
var Bn = O.createContext(null);
Bn.displayName = "Location";
var nl = O.createContext({ outlet: null, matches: [], isDataRoute: !1 });
nl.displayName = "Route";
var Qf = O.createContext(null);
Qf.displayName = "RouteError";
var Nm = "REACT_ROUTER_ERROR",
  Qv = "REDIRECT",
  Zv = "ROUTE_ERROR_RESPONSE";
function Vv(c) {
  if (c.startsWith(`${Nm}:${Qv}:{`))
    try {
      let r = JSON.parse(c.slice(28));
      if (
        typeof r == "object" &&
        r &&
        typeof r.status == "number" &&
        typeof r.statusText == "string" &&
        typeof r.location == "string" &&
        typeof r.reloadDocument == "boolean" &&
        typeof r.replace == "boolean"
      )
        return r;
    } catch {}
}
function wv(c) {
  if (c.startsWith(`${Nm}:${Zv}:{`))
    try {
      let r = JSON.parse(c.slice(40));
      if (
        typeof r == "object" &&
        r &&
        typeof r.status == "number" &&
        typeof r.statusText == "string"
      )
        return new Hv(r.status, r.statusText, r.data);
    } catch {}
}
function Kv(c, { relative: r } = {}) {
  At(
    qn(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: d, navigator: f } = O.useContext(je),
    { hash: h, pathname: y, search: E } = Yn(c, { relative: r }),
    M = y;
  return (
    d !== "/" && (M = y === "/" ? d : qe([d, y])),
    f.createHref({ pathname: M, search: E, hash: h })
  );
}
function qn() {
  return O.useContext(Bn) != null;
}
function Ol() {
  return (
    At(
      qn(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    O.useContext(Bn).location
  );
}
var Tm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function zm(c) {
  O.useContext(je).static || O.useLayoutEffect(c);
}
function Jv() {
  let { isDataRoute: c } = O.useContext(nl);
  return c ? iy() : $v();
}
function $v() {
  At(
    qn(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let c = O.useContext(Ba),
    { basename: r, navigator: d } = O.useContext(je),
    { matches: f } = O.useContext(nl),
    { pathname: h } = Ol(),
    y = JSON.stringify(gm(f)),
    E = O.useRef(!1);
  return (
    zm(() => {
      E.current = !0;
    }),
    O.useCallback(
      (N, g = {}) => {
        if ((Ye(E.current, Tm), !E.current)) return;
        if (typeof N == "number") {
          d.go(N);
          return;
        }
        let C = Xf(N, JSON.parse(y), h, g.relative === "path");
        (c == null &&
          r !== "/" &&
          (C.pathname = C.pathname === "/" ? r : qe([r, C.pathname])),
          (g.replace ? d.replace : d.push)(C, g.state, g));
      },
      [r, d, y, h, c],
    )
  );
}
O.createContext(null);
function Yn(c, { relative: r } = {}) {
  let { matches: d } = O.useContext(nl),
    { pathname: f } = Ol(),
    h = JSON.stringify(gm(d));
  return O.useMemo(() => Xf(c, JSON.parse(h), f, r === "path"), [c, h, f, r]);
}
function kv(c, r) {
  return Am(c, r);
}
function Am(c, r, d) {
  At(
    qn(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: f } = O.useContext(je),
    { matches: h } = O.useContext(nl),
    y = h[h.length - 1],
    E = y ? y.params : {},
    M = y ? y.pathname : "/",
    N = y ? y.pathnameBase : "/",
    g = y && y.route;
  {
    let H = (g && g.path) || "";
    Rm(
      M,
      !g || H.endsWith("*") || H.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${M}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H === "/" ? "*" : `${H}/*`}">.`,
    );
  }
  let C = Ol(),
    z;
  if (r) {
    let H = typeof r == "string" ? Ha(r) : r;
    (At(
      N === "/" || H.pathname?.startsWith(N),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${N}" but pathname "${H.pathname}" was given in the \`location\` prop.`,
    ),
      (z = H));
  } else z = C;
  let q = z.pathname || "/",
    K = q;
  if (N !== "/") {
    let H = N.replace(/^\//, "").split("/");
    K = "/" + q.replace(/^\//, "").split("/").slice(H.length).join("/");
  }
  let V = vm(c, { pathname: K });
  (Ye(
    g || V != null,
    `No routes matched location "${z.pathname}${z.search}${z.hash}" `,
  ),
    Ye(
      V == null ||
        V[V.length - 1].route.element !== void 0 ||
        V[V.length - 1].route.Component !== void 0 ||
        V[V.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let G = ty(
    V &&
      V.map((H) =>
        Object.assign({}, H, {
          params: Object.assign({}, E, H.params),
          pathname: qe([
            N,
            f.encodeLocation
              ? f.encodeLocation(
                  H.pathname
                    .replace(/%/g, "%25")
                    .replace(/\?/g, "%3F")
                    .replace(/#/g, "%23"),
                ).pathname
              : H.pathname,
          ]),
          pathnameBase:
            H.pathnameBase === "/"
              ? N
              : qe([
                  N,
                  f.encodeLocation
                    ? f.encodeLocation(
                        H.pathnameBase
                          .replace(/%/g, "%25")
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : H.pathnameBase,
                ]),
        }),
      ),
    h,
    d,
  );
  return r && G
    ? O.createElement(
        Bn.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              unstable_mask: void 0,
              ...z,
            },
            navigationType: "POP",
          },
        },
        G,
      )
    : G;
}
function Wv() {
  let c = uy(),
    r = Bv(c)
      ? `${c.status} ${c.statusText}`
      : c instanceof Error
        ? c.message
        : JSON.stringify(c),
    d = c instanceof Error ? c.stack : null,
    f = "rgba(200,200,200, 0.5)",
    h = { padding: "0.5rem", backgroundColor: f },
    y = { padding: "2px 4px", backgroundColor: f },
    E = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", c),
    (E = O.createElement(
      O.Fragment,
      null,
      O.createElement("p", null, "💿 Hey developer 👋"),
      O.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        O.createElement("code", { style: y }, "ErrorBoundary"),
        " or",
        " ",
        O.createElement("code", { style: y }, "errorElement"),
        " prop on your route.",
      ),
    )),
    O.createElement(
      O.Fragment,
      null,
      O.createElement("h2", null, "Unexpected Application Error!"),
      O.createElement("h3", { style: { fontStyle: "italic" } }, r),
      d ? O.createElement("pre", { style: h }, d) : null,
      E,
    )
  );
}
var Fv = O.createElement(Wv, null),
  jm = class extends O.Component {
    constructor(c) {
      (super(c),
        (this.state = {
          location: c.location,
          revalidation: c.revalidation,
          error: c.error,
        }));
    }
    static getDerivedStateFromError(c) {
      return { error: c };
    }
    static getDerivedStateFromProps(c, r) {
      return r.location !== c.location ||
        (r.revalidation !== "idle" && c.revalidation === "idle")
        ? { error: c.error, location: c.location, revalidation: c.revalidation }
        : {
            error: c.error !== void 0 ? c.error : r.error,
            location: r.location,
            revalidation: c.revalidation || r.revalidation,
          };
    }
    componentDidCatch(c, r) {
      this.props.onError
        ? this.props.onError(c, r)
        : console.error(
            "React Router caught the following error during render",
            c,
          );
    }
    render() {
      let c = this.state.error;
      if (
        this.context &&
        typeof c == "object" &&
        c &&
        "digest" in c &&
        typeof c.digest == "string"
      ) {
        const d = wv(c.digest);
        d && (c = d);
      }
      let r =
        c !== void 0
          ? O.createElement(
              nl.Provider,
              { value: this.props.routeContext },
              O.createElement(Qf.Provider, {
                value: c,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? O.createElement(Iv, { error: c }, r) : r;
    }
  };
jm.contextType = Lv;
var Bf = new WeakMap();
function Iv({ children: c, error: r }) {
  let { basename: d } = O.useContext(je);
  if (
    typeof r == "object" &&
    r &&
    "digest" in r &&
    typeof r.digest == "string"
  ) {
    let f = Vv(r.digest);
    if (f) {
      let h = Bf.get(r);
      if (h) throw h;
      let y = bm(f.location, d);
      if (xm && !Bf.get(r))
        if (y.isExternal || f.reloadDocument)
          window.location.href = y.absoluteURL || y.to;
        else {
          const E = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(y.to, {
              replace: f.replace,
            }),
          );
          throw (Bf.set(r, E), E);
        }
      return O.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${y.absoluteURL || y.to}`,
      });
    }
  }
  return c;
}
function Pv({ routeContext: c, match: r, children: d }) {
  let f = O.useContext(Ba);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = r.route.id),
    O.createElement(nl.Provider, { value: c }, d)
  );
}
function ty(c, r = [], d) {
  let f = d?.state;
  if (c == null) {
    if (!f) return null;
    if (f.errors) c = f.matches;
    else if (r.length === 0 && !f.initialized && f.matches.length > 0)
      c = f.matches;
    else return null;
  }
  let h = c,
    y = f?.errors;
  if (y != null) {
    let C = h.findIndex((z) => z.route.id && y?.[z.route.id] !== void 0);
    (At(
      C >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`,
    ),
      (h = h.slice(0, Math.min(h.length, C + 1))));
  }
  let E = !1,
    M = -1;
  if (d && f) {
    E = f.renderFallback;
    for (let C = 0; C < h.length; C++) {
      let z = h[C];
      if (
        ((z.route.HydrateFallback || z.route.hydrateFallbackElement) && (M = C),
        z.route.id)
      ) {
        let { loaderData: q, errors: K } = f,
          V =
            z.route.loader &&
            !q.hasOwnProperty(z.route.id) &&
            (!K || K[z.route.id] === void 0);
        if (z.route.lazy || V) {
          (d.isStatic && (E = !0),
            M >= 0 ? (h = h.slice(0, M + 1)) : (h = [h[0]]));
          break;
        }
      }
    }
  }
  let N = d?.onError,
    g =
      f && N
        ? (C, z) => {
            N(C, {
              location: f.location,
              params: f.matches?.[0]?.params ?? {},
              unstable_pattern: qv(f.matches),
              errorInfo: z,
            });
          }
        : void 0;
  return h.reduceRight((C, z, q) => {
    let K,
      V = !1,
      G = null,
      H = null;
    f &&
      ((K = y && z.route.id ? y[z.route.id] : void 0),
      (G = z.route.errorElement || Fv),
      E &&
        (M < 0 && q === 0
          ? (Rm(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (V = !0),
            (H = null))
          : M === q &&
            ((V = !0), (H = z.route.hydrateFallbackElement || null))));
    let J = r.concat(h.slice(0, q + 1)),
      tt = () => {
        let $;
        return (
          K
            ? ($ = G)
            : V
              ? ($ = H)
              : z.route.Component
                ? ($ = O.createElement(z.route.Component, null))
                : z.route.element
                  ? ($ = z.route.element)
                  : ($ = C),
          O.createElement(Pv, {
            match: z,
            routeContext: { outlet: C, matches: J, isDataRoute: f != null },
            children: $,
          })
        );
      };
    return f && (z.route.ErrorBoundary || z.route.errorElement || q === 0)
      ? O.createElement(jm, {
          location: f.location,
          revalidation: f.revalidation,
          component: G,
          error: K,
          children: tt(),
          routeContext: { outlet: null, matches: J, isDataRoute: !0 },
          onError: g,
        })
      : tt();
  }, null);
}
function Zf(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ey(c) {
  let r = O.useContext(Ba);
  return (At(r, Zf(c)), r);
}
function ly(c) {
  let r = O.useContext(fi);
  return (At(r, Zf(c)), r);
}
function ay(c) {
  let r = O.useContext(nl);
  return (At(r, Zf(c)), r);
}
function Vf(c) {
  let r = ay(c),
    d = r.matches[r.matches.length - 1];
  return (
    At(
      d.route.id,
      `${c} can only be used on routes that contain a unique "id"`,
    ),
    d.route.id
  );
}
function ny() {
  return Vf("useRouteId");
}
function uy() {
  let c = O.useContext(Qf),
    r = ly("useRouteError"),
    d = Vf("useRouteError");
  return c !== void 0 ? c : r.errors?.[d];
}
function iy() {
  let { router: c } = ey("useNavigate"),
    r = Vf("useNavigate"),
    d = O.useRef(!1);
  return (
    zm(() => {
      d.current = !0;
    }),
    O.useCallback(
      async (h, y = {}) => {
        (Ye(d.current, Tm),
          d.current &&
            (typeof h == "number"
              ? await c.navigate(h)
              : await c.navigate(h, { fromRouteId: r, ...y })));
      },
      [c, r],
    )
  );
}
var rm = {};
function Rm(c, r, d) {
  !r && !rm[c] && ((rm[c] = !0), Ye(!1, d));
}
O.memo(cy);
function cy({ routes: c, future: r, state: d, isStatic: f, onError: h }) {
  return Am(c, void 0, { state: d, isStatic: f, onError: h });
}
function Ua(c) {
  At(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function fy({
  basename: c = "/",
  children: r = null,
  location: d,
  navigationType: f = "POP",
  navigator: h,
  static: y = !1,
  unstable_useTransitions: E,
}) {
  At(
    !qn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let M = c.replace(/^\/*/, "/"),
    N = O.useMemo(
      () => ({
        basename: M,
        navigator: h,
        static: y,
        unstable_useTransitions: E,
        future: {},
      }),
      [M, h, y, E],
    );
  typeof d == "string" && (d = Ha(d));
  let {
      pathname: g = "/",
      search: C = "",
      hash: z = "",
      state: q = null,
      key: K = "default",
      unstable_mask: V,
    } = d,
    G = O.useMemo(() => {
      let H = al(g, M);
      return H == null
        ? null
        : {
            location: {
              pathname: H,
              search: C,
              hash: z,
              state: q,
              key: K,
              unstable_mask: V,
            },
            navigationType: f,
          };
    }, [M, g, C, z, q, K, f, V]);
  return (
    Ye(
      G != null,
      `<Router basename="${M}"> is not able to match the URL "${g}${C}${z}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    G == null
      ? null
      : O.createElement(
          je.Provider,
          { value: N },
          O.createElement(Bn.Provider, { children: r, value: G }),
        )
  );
}
function sy({ children: c, location: r }) {
  return kv(Lf(c), r);
}
function Lf(c, r = []) {
  let d = [];
  return (
    O.Children.forEach(c, (f, h) => {
      if (!O.isValidElement(f)) return;
      let y = [...r, h];
      if (f.type === O.Fragment) {
        d.push.apply(d, Lf(f.props.children, y));
        return;
      }
      (At(
        f.type === Ua,
        `[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        At(
          !f.props.index || !f.props.children,
          "An index route cannot have child routes.",
        ));
      let E = {
        id: f.props.id || y.join("-"),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        middleware: f.props.middleware,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      (f.props.children && (E.children = Lf(f.props.children, y)), d.push(E));
    }),
    d
  );
}
var ni = "get",
  ui = "application/x-www-form-urlencoded";
function si(c) {
  return typeof HTMLElement < "u" && c instanceof HTMLElement;
}
function ry(c) {
  return si(c) && c.tagName.toLowerCase() === "button";
}
function oy(c) {
  return si(c) && c.tagName.toLowerCase() === "form";
}
function dy(c) {
  return si(c) && c.tagName.toLowerCase() === "input";
}
function my(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function hy(c, r) {
  return c.button === 0 && (!r || r === "_self") && !my(c);
}
var ai = null;
function vy() {
  if (ai === null)
    try {
      (new FormData(document.createElement("form"), 0), (ai = !1));
    } catch {
      ai = !0;
    }
  return ai;
}
var yy = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function qf(c) {
  return c != null && !yy.has(c)
    ? (Ye(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ui}"`,
      ),
      null)
    : c;
}
function py(c, r) {
  let d, f, h, y, E;
  if (oy(c)) {
    let M = c.getAttribute("action");
    ((f = M ? al(M, r) : null),
      (d = c.getAttribute("method") || ni),
      (h = qf(c.getAttribute("enctype")) || ui),
      (y = new FormData(c)));
  } else if (ry(c) || (dy(c) && (c.type === "submit" || c.type === "image"))) {
    let M = c.form;
    if (M == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let N = c.getAttribute("formaction") || M.getAttribute("action");
    if (
      ((f = N ? al(N, r) : null),
      (d = c.getAttribute("formmethod") || M.getAttribute("method") || ni),
      (h =
        qf(c.getAttribute("formenctype")) ||
        qf(M.getAttribute("enctype")) ||
        ui),
      (y = new FormData(M, c)),
      !vy())
    ) {
      let { name: g, type: C, value: z } = c;
      if (C === "image") {
        let q = g ? `${g}.` : "";
        (y.append(`${q}x`, "0"), y.append(`${q}y`, "0"));
      } else g && y.append(g, z);
    }
  } else {
    if (si(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((d = ni), (f = null), (h = ui), (E = c));
  }
  return (
    y && h === "text/plain" && ((E = y), (y = void 0)),
    { action: f, method: d.toLowerCase(), encType: h, formData: y, body: E }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function wf(c, r) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(r);
}
function gy(c, r, d, f) {
  let h =
    typeof c == "string"
      ? new URL(
          c,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : c;
  return (
    d
      ? h.pathname.endsWith("/")
        ? (h.pathname = `${h.pathname}_.${f}`)
        : (h.pathname = `${h.pathname}.${f}`)
      : h.pathname === "/"
        ? (h.pathname = `_root.${f}`)
        : r && al(h.pathname, r) === "/"
          ? (h.pathname = `${r.replace(/\/$/, "")}/_root.${f}`)
          : (h.pathname = `${h.pathname.replace(/\/$/, "")}.${f}`),
    h
  );
}
async function xy(c, r) {
  if (c.id in r) return r[c.id];
  try {
    let d = await import(c.module);
    return ((r[c.id] = d), d);
  } catch (d) {
    return (
      console.error(
        `Error loading route module \`${c.module}\`, reloading page...`,
      ),
      console.error(d),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function by(c) {
  return c == null
    ? !1
    : c.href == null
      ? c.rel === "preload" &&
        typeof c.imageSrcSet == "string" &&
        typeof c.imageSizes == "string"
      : typeof c.rel == "string" && typeof c.href == "string";
}
async function Sy(c, r, d) {
  let f = await Promise.all(
    c.map(async (h) => {
      let y = r.routes[h.route.id];
      if (y) {
        let E = await xy(y, d);
        return E.links ? E.links() : [];
      }
      return [];
    }),
  );
  return zy(
    f
      .flat(1)
      .filter(by)
      .filter((h) => h.rel === "stylesheet" || h.rel === "preload")
      .map((h) =>
        h.rel === "stylesheet"
          ? { ...h, rel: "prefetch", as: "style" }
          : { ...h, rel: "prefetch" },
      ),
  );
}
function om(c, r, d, f, h, y) {
  let E = (N, g) => (d[g] ? N.route.id !== d[g].route.id : !0),
    M = (N, g) =>
      d[g].pathname !== N.pathname ||
      (d[g].route.path?.endsWith("*") && d[g].params["*"] !== N.params["*"]);
  return y === "assets"
    ? r.filter((N, g) => E(N, g) || M(N, g))
    : y === "data"
      ? r.filter((N, g) => {
          let C = f.routes[N.route.id];
          if (!C || !C.hasLoader) return !1;
          if (E(N, g) || M(N, g)) return !0;
          if (N.route.shouldRevalidate) {
            let z = N.route.shouldRevalidate({
              currentUrl: new URL(
                h.pathname + h.search + h.hash,
                window.origin,
              ),
              currentParams: d[0]?.params || {},
              nextUrl: new URL(c, window.origin),
              nextParams: N.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof z == "boolean") return z;
          }
          return !0;
        })
      : [];
}
function Ey(c, r, { includeHydrateFallback: d } = {}) {
  return Ny(
    c
      .map((f) => {
        let h = r.routes[f.route.id];
        if (!h) return [];
        let y = [h.module];
        return (
          h.clientActionModule && (y = y.concat(h.clientActionModule)),
          h.clientLoaderModule && (y = y.concat(h.clientLoaderModule)),
          d &&
            h.hydrateFallbackModule &&
            (y = y.concat(h.hydrateFallbackModule)),
          h.imports && (y = y.concat(h.imports)),
          y
        );
      })
      .flat(1),
  );
}
function Ny(c) {
  return [...new Set(c)];
}
function Ty(c) {
  let r = {},
    d = Object.keys(c).sort();
  for (let f of d) r[f] = c[f];
  return r;
}
function zy(c, r) {
  let d = new Set();
  return (
    new Set(r),
    c.reduce((f, h) => {
      let y = JSON.stringify(Ty(h));
      return (d.has(y) || (d.add(y), f.push({ key: y, link: h })), f);
    }, [])
  );
}
function _m() {
  let c = O.useContext(Ba);
  return (
    wf(
      c,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    c
  );
}
function Ay() {
  let c = O.useContext(fi);
  return (
    wf(
      c,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    c
  );
}
var Kf = O.createContext(void 0);
Kf.displayName = "FrameworkContext";
function Om() {
  let c = O.useContext(Kf);
  return (
    wf(c, "You must render this element inside a <HydratedRouter> element"),
    c
  );
}
function jy(c, r) {
  let d = O.useContext(Kf),
    [f, h] = O.useState(!1),
    [y, E] = O.useState(!1),
    {
      onFocus: M,
      onBlur: N,
      onMouseEnter: g,
      onMouseLeave: C,
      onTouchStart: z,
    } = r,
    q = O.useRef(null);
  (O.useEffect(() => {
    if ((c === "render" && E(!0), c === "viewport")) {
      let G = (J) => {
          J.forEach((tt) => {
            E(tt.isIntersecting);
          });
        },
        H = new IntersectionObserver(G, { threshold: 0.5 });
      return (
        q.current && H.observe(q.current),
        () => {
          H.disconnect();
        }
      );
    }
  }, [c]),
    O.useEffect(() => {
      if (f) {
        let G = setTimeout(() => {
          E(!0);
        }, 100);
        return () => {
          clearTimeout(G);
        };
      }
    }, [f]));
  let K = () => {
      h(!0);
    },
    V = () => {
      (h(!1), E(!1));
    };
  return d
    ? c !== "intent"
      ? [y, q, {}]
      : [
          y,
          q,
          {
            onFocus: Cn(M, K),
            onBlur: Cn(N, V),
            onMouseEnter: Cn(g, K),
            onMouseLeave: Cn(C, V),
            onTouchStart: Cn(z, K),
          },
        ]
    : [!1, q, {}];
}
function Cn(c, r) {
  return (d) => {
    (c && c(d), d.defaultPrevented || r(d));
  };
}
function Ry({ page: c, ...r }) {
  let { router: d } = _m(),
    f = O.useMemo(() => vm(d.routes, c, d.basename), [d.routes, c, d.basename]);
  return f ? O.createElement(Oy, { page: c, matches: f, ...r }) : null;
}
function _y(c) {
  let { manifest: r, routeModules: d } = Om(),
    [f, h] = O.useState([]);
  return (
    O.useEffect(() => {
      let y = !1;
      return (
        Sy(c, r, d).then((E) => {
          y || h(E);
        }),
        () => {
          y = !0;
        }
      );
    }, [c, r, d]),
    f
  );
}
function Oy({ page: c, matches: r, ...d }) {
  let f = Ol(),
    { future: h, manifest: y, routeModules: E } = Om(),
    { basename: M } = _m(),
    { loaderData: N, matches: g } = Ay(),
    C = O.useMemo(() => om(c, r, g, y, f, "data"), [c, r, g, y, f]),
    z = O.useMemo(() => om(c, r, g, y, f, "assets"), [c, r, g, y, f]),
    q = O.useMemo(() => {
      if (c === f.pathname + f.search + f.hash) return [];
      let G = new Set(),
        H = !1;
      if (
        (r.forEach((tt) => {
          let $ = y.routes[tt.route.id];
          !$ ||
            !$.hasLoader ||
            ((!C.some((gt) => gt.route.id === tt.route.id) &&
              tt.route.id in N &&
              E[tt.route.id]?.shouldRevalidate) ||
            $.hasClientLoader
              ? (H = !0)
              : G.add(tt.route.id));
        }),
        G.size === 0)
      )
        return [];
      let J = gy(c, M, h.unstable_trailingSlashAwareDataRequests, "data");
      return (
        H &&
          G.size > 0 &&
          J.searchParams.set(
            "_routes",
            r
              .filter((tt) => G.has(tt.route.id))
              .map((tt) => tt.route.id)
              .join(","),
          ),
        [J.pathname + J.search]
      );
    }, [M, h.unstable_trailingSlashAwareDataRequests, N, f, y, C, r, c, E]),
    K = O.useMemo(() => Ey(z, y), [z, y]),
    V = _y(z);
  return O.createElement(
    O.Fragment,
    null,
    q.map((G) =>
      O.createElement("link", {
        key: G,
        rel: "prefetch",
        as: "fetch",
        href: G,
        ...d,
      }),
    ),
    K.map((G) =>
      O.createElement("link", { key: G, rel: "modulepreload", href: G, ...d }),
    ),
    V.map(({ key: G, link: H }) =>
      O.createElement("link", {
        key: G,
        nonce: d.nonce,
        ...H,
        crossOrigin: H.crossOrigin ?? d.crossOrigin,
      }),
    ),
  );
}
function My(...c) {
  return (r) => {
    c.forEach((d) => {
      typeof d == "function" ? d(r) : d != null && (d.current = r);
    });
  };
}
var Dy =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Dy && (window.__reactRouterVersion = "7.13.2");
} catch {}
function Cy({
  basename: c,
  children: r,
  unstable_useTransitions: d,
  window: f,
}) {
  let h = O.useRef();
  h.current == null && (h.current = dv({ window: f, v5Compat: !0 }));
  let y = h.current,
    [E, M] = O.useState({ action: y.action, location: y.location }),
    N = O.useCallback(
      (g) => {
        d === !1 ? M(g) : O.startTransition(() => M(g));
      },
      [d],
    );
  return (
    O.useLayoutEffect(() => y.listen(N), [y, N]),
    O.createElement(fy, {
      basename: c,
      children: r,
      location: E.location,
      navigationType: E.action,
      navigator: y,
      unstable_useTransitions: d,
    })
  );
}
var Mm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ci = O.forwardRef(function (
    {
      onClick: r,
      discover: d = "render",
      prefetch: f = "none",
      relative: h,
      reloadDocument: y,
      replace: E,
      unstable_mask: M,
      state: N,
      target: g,
      to: C,
      preventScrollReset: z,
      viewTransition: q,
      unstable_defaultShouldRevalidate: K,
      ...V
    },
    G,
  ) {
    let {
        basename: H,
        navigator: J,
        unstable_useTransitions: tt,
      } = O.useContext(je),
      $ = typeof C == "string" && Mm.test(C),
      gt = bm(C, H);
    C = gt.to;
    let xt = Kv(C, { relative: h }),
      zt = Ol(),
      W = null;
    if (M) {
      let Ct = Xf(
        M,
        [],
        zt.unstable_mask ? zt.unstable_mask.pathname : "/",
        !0,
      );
      (H !== "/" &&
        (Ct.pathname = Ct.pathname === "/" ? H : qe([H, Ct.pathname])),
        (W = J.createHref(Ct)));
    }
    let [_t, Kt, Me] = jy(f, V),
      he = By(C, {
        replace: E,
        unstable_mask: M,
        state: N,
        target: g,
        preventScrollReset: z,
        relative: h,
        viewTransition: q,
        unstable_defaultShouldRevalidate: K,
        unstable_useTransitions: tt,
      });
    function Jt(Ct) {
      (r && r(Ct), Ct.defaultPrevented || he(Ct));
    }
    let De = !(gt.isExternal || y),
      ve = O.createElement("a", {
        ...V,
        ...Me,
        href: (De ? W : void 0) || gt.absoluteURL || xt,
        onClick: De ? Jt : r,
        ref: My(G, Kt),
        target: g,
        "data-discover": !$ && d === "render" ? "true" : void 0,
      });
    return _t && !$
      ? O.createElement(O.Fragment, null, ve, O.createElement(Ry, { page: xt }))
      : ve;
  });
ci.displayName = "Link";
var Un = O.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: d = !1,
    className: f = "",
    end: h = !1,
    style: y,
    to: E,
    viewTransition: M,
    children: N,
    ...g
  },
  C,
) {
  let z = Yn(E, { relative: g.relative }),
    q = Ol(),
    K = O.useContext(fi),
    { navigator: V, basename: G } = O.useContext(je),
    H = K != null && Xy(z) && M === !0,
    J = V.encodeLocation ? V.encodeLocation(z).pathname : z.pathname,
    tt = q.pathname,
    $ =
      K && K.navigation && K.navigation.location
        ? K.navigation.location.pathname
        : null;
  (d ||
    ((tt = tt.toLowerCase()),
    ($ = $ ? $.toLowerCase() : null),
    (J = J.toLowerCase())),
    $ && G && ($ = al($, G) || $));
  const gt = J !== "/" && J.endsWith("/") ? J.length - 1 : J.length;
  let xt = tt === J || (!h && tt.startsWith(J) && tt.charAt(gt) === "/"),
    zt =
      $ != null &&
      ($ === J || (!h && $.startsWith(J) && $.charAt(J.length) === "/")),
    W = { isActive: xt, isPending: zt, isTransitioning: H },
    _t = xt ? r : void 0,
    Kt;
  typeof f == "function"
    ? (Kt = f(W))
    : (Kt = [
        f,
        xt ? "active" : null,
        zt ? "pending" : null,
        H ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Me = typeof y == "function" ? y(W) : y;
  return O.createElement(
    ci,
    {
      ...g,
      "aria-current": _t,
      className: Kt,
      ref: C,
      style: Me,
      to: E,
      viewTransition: M,
    },
    typeof N == "function" ? N(W) : N,
  );
});
Un.displayName = "NavLink";
var Uy = O.forwardRef(
  (
    {
      discover: c = "render",
      fetcherKey: r,
      navigate: d,
      reloadDocument: f,
      replace: h,
      state: y,
      method: E = ni,
      action: M,
      onSubmit: N,
      relative: g,
      preventScrollReset: C,
      viewTransition: z,
      unstable_defaultShouldRevalidate: q,
      ...K
    },
    V,
  ) => {
    let { unstable_useTransitions: G } = O.useContext(je),
      H = Ly(),
      J = Gy(M, { relative: g }),
      tt = E.toLowerCase() === "get" ? "get" : "post",
      $ = typeof M == "string" && Mm.test(M),
      gt = (xt) => {
        if ((N && N(xt), xt.defaultPrevented)) return;
        xt.preventDefault();
        let zt = xt.nativeEvent.submitter,
          W = zt?.getAttribute("formmethod") || E,
          _t = () =>
            H(zt || xt.currentTarget, {
              fetcherKey: r,
              method: W,
              navigate: d,
              replace: h,
              state: y,
              relative: g,
              preventScrollReset: C,
              viewTransition: z,
              unstable_defaultShouldRevalidate: q,
            });
        G && d !== !1 ? O.startTransition(() => _t()) : _t();
      };
    return O.createElement("form", {
      ref: V,
      method: tt,
      action: J,
      onSubmit: f ? N : gt,
      ...K,
      "data-discover": !$ && c === "render" ? "true" : void 0,
    });
  },
);
Uy.displayName = "Form";
function Hy(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dm(c) {
  let r = O.useContext(Ba);
  return (At(r, Hy(c)), r);
}
function By(
  c,
  {
    target: r,
    replace: d,
    unstable_mask: f,
    state: h,
    preventScrollReset: y,
    relative: E,
    viewTransition: M,
    unstable_defaultShouldRevalidate: N,
    unstable_useTransitions: g,
  } = {},
) {
  let C = Jv(),
    z = Ol(),
    q = Yn(c, { relative: E });
  return O.useCallback(
    (K) => {
      if (hy(K, r)) {
        K.preventDefault();
        let V = d !== void 0 ? d : Hn(z) === Hn(q),
          G = () =>
            C(c, {
              replace: V,
              unstable_mask: f,
              state: h,
              preventScrollReset: y,
              relative: E,
              viewTransition: M,
              unstable_defaultShouldRevalidate: N,
            });
        g ? O.startTransition(() => G()) : G();
      }
    },
    [z, C, q, d, f, h, r, c, y, E, M, N, g],
  );
}
var qy = 0,
  Yy = () => `__${String(++qy)}__`;
function Ly() {
  let { router: c } = Dm("useSubmit"),
    { basename: r } = O.useContext(je),
    d = ny(),
    f = c.fetch,
    h = c.navigate;
  return O.useCallback(
    async (y, E = {}) => {
      let { action: M, method: N, encType: g, formData: C, body: z } = py(y, r);
      if (E.navigate === !1) {
        let q = E.fetcherKey || Yy();
        await f(q, d, E.action || M, {
          unstable_defaultShouldRevalidate: E.unstable_defaultShouldRevalidate,
          preventScrollReset: E.preventScrollReset,
          formData: C,
          body: z,
          formMethod: E.method || N,
          formEncType: E.encType || g,
          flushSync: E.flushSync,
        });
      } else
        await h(E.action || M, {
          unstable_defaultShouldRevalidate: E.unstable_defaultShouldRevalidate,
          preventScrollReset: E.preventScrollReset,
          formData: C,
          body: z,
          formMethod: E.method || N,
          formEncType: E.encType || g,
          replace: E.replace,
          state: E.state,
          fromRouteId: d,
          flushSync: E.flushSync,
          viewTransition: E.viewTransition,
        });
    },
    [f, h, r, d],
  );
}
function Gy(c, { relative: r } = {}) {
  let { basename: d } = O.useContext(je),
    f = O.useContext(nl);
  At(f, "useFormAction must be used inside a RouteContext");
  let [h] = f.matches.slice(-1),
    y = { ...Yn(c || ".", { relative: r }) },
    E = Ol();
  if (c == null) {
    y.search = E.search;
    let M = new URLSearchParams(y.search),
      N = M.getAll("index");
    if (N.some((C) => C === "")) {
      (M.delete("index"),
        N.filter((z) => z).forEach((z) => M.append("index", z)));
      let C = M.toString();
      y.search = C ? `?${C}` : "";
    }
  }
  return (
    (!c || c === ".") &&
      h.route.index &&
      (y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index"),
    d !== "/" && (y.pathname = y.pathname === "/" ? d : qe([d, y.pathname])),
    Hn(y)
  );
}
function Xy(c, { relative: r } = {}) {
  let d = O.useContext(Em);
  At(
    d != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: f } = Dm("useViewTransitionState"),
    h = Yn(c, { relative: r });
  if (!d.isTransitioning) return !1;
  let y = al(d.currentLocation.pathname, f) || d.currentLocation.pathname,
    E = al(d.nextLocation.pathname, f) || d.nextLocation.pathname;
  return ii(h.pathname, E) != null || ii(h.pathname, y) != null;
}
const dm = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];
function Qy() {
  const [c, r] = O.useState(!1);
  return o.jsxs("header", {
    className: "border-b border-neutral-800 relative",
    children: [
      o.jsxs("nav", {
        className:
          "max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between",
        children: [
          o.jsxs(Un, {
            to: "/",
            className: "font-mono text-xl font-semibold tracking-tight",
            children: [
              o.jsx("span", { className: "text-purple-400", children: "<" }),
              o.jsx("span", { className: "text-neutral-100", children: "AS" }),
              o.jsx("span", { className: "text-purple-400", children: "/>" }),
            ],
          }),
          o.jsx("button", {
            onClick: () => r(!c),
            className: "md:hidden p-2 text-neutral-300",
            "aria-label": "Toggle menu",
            type: "button",
            children: o.jsx("svg", {
              className: "w-6 h-6",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: c
                ? o.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M6 18L18 6M6 6l12 12",
                  })
                : o.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M4 6h16M4 12h16M4 18h16",
                  }),
            }),
          }),
          o.jsx("ul", {
            className: "hidden md:flex gap-8 font-mono text-sm",
            children: dm.map((d) =>
              o.jsx(
                "li",
                {
                  children: o.jsx(Un, {
                    to: d.to,
                    className: ({ isActive: f }) =>
                      `tracking-wide transition-colors duration-200 ${f ? "text-neutral-100" : "text-neutral-500 hover:text-neutral-300"}`,
                    children:
                      d.to === "/"
                        ? o.jsxs("span", {
                            children: [
                              o.jsx("span", {
                                className: "text-purple-400",
                                children: "./",
                              }),
                              "home",
                            ],
                          })
                        : o.jsx("span", { children: d.label.toLowerCase() }),
                  }),
                },
                d.to,
              ),
            ),
          }),
        ],
      }),
      c &&
        o.jsxs("div", {
          className:
            "fixed inset-0 z-50 md:hidden bg-neutral-950 border-b border-neutral-800 flex flex-col",
          children: [
            o.jsxs("div", {
              className:
                "max-w-6xl mx-auto px-4 py-4 flex items-center justify-between w-full",
              children: [
                o.jsxs(Un, {
                  to: "/",
                  onClick: () => r(!1),
                  className: "font-mono text-xl font-semibold tracking-tight",
                  children: [
                    o.jsx("span", {
                      className: "text-purple-400",
                      children: "<",
                    }),
                    o.jsx("span", {
                      className: "text-neutral-100",
                      children: "AS",
                    }),
                    o.jsx("span", {
                      className: "text-purple-400",
                      children: "/>",
                    }),
                  ],
                }),
                o.jsx("button", {
                  onClick: () => r(!1),
                  className: "p-2 text-neutral-300",
                  "aria-label": "Close menu",
                  type: "button",
                  children: o.jsx("svg", {
                    className: "w-6 h-6",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: o.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M6 18L18 6M6 6l12 12",
                    }),
                  }),
                }),
              ],
            }),
            o.jsx("ul", {
              className:
                "flex-1 flex flex-col items-center justify-center space-y-8 font-mono text-xl",
              children: dm.map((d) =>
                o.jsx(
                  "li",
                  {
                    children: o.jsx(Un, {
                      to: d.to,
                      onClick: () => r(!1),
                      className: ({ isActive: f }) =>
                        `tracking-wide transition-colors duration-200 ${f ? "text-neutral-100" : "text-neutral-500 hover:text-neutral-300"}`,
                      children:
                        d.to === "/"
                          ? o.jsxs("span", {
                              children: [
                                o.jsx("span", {
                                  className: "text-purple-400",
                                  children: "./",
                                }),
                                "home",
                              ],
                            })
                          : o.jsx("span", { children: d.label.toLowerCase() }),
                    }),
                  },
                  d.to,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
const Ae = {
    name: "Anit Shrestha",
    title: "Frontend Developer",
    tagline: "Building digital experiences with precision",
    email: "anit.shrestha@email.com",
    github: "https://github.com/anitshrestha",
    linkedin: "https://linkedin.com/in/anitshrestha",
    location: "Kathmandu, Nepal",
  },
  Zy = [
    "React",
    "JavaScript",
    "TypeScript",
    "CSS/SCSS",
    "Tailwind CSS",
    "Next.js",
    "Git",
    "Figma",
  ],
  Vy = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution with cart functionality and payment integration.",
      tech: ["React", "TypeScript", "Tailwind", "Node.js"],
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates.",
      tech: ["React", "Firebase", "Tailwind"],
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Portfolio Generator",
      description: "Tool to generate customizable portfolio websites.",
      tech: ["Next.js", "TypeScript", "CSS Modules"],
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "Interactive weather application with forecast and location search.",
      tech: ["React", "OpenWeather API", "Chart.js"],
      github: "#",
      live: "#",
    },
  ],
  mm = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description: "Building responsive web applications and UI components.",
    },
    {
      id: 2,
      role: "Junior Developer",
      company: "Digital Agency",
      period: "2021 - 2023",
      description:
        "Developed client websites and maintained existing projects.",
    },
  ];
function wy() {
  return o.jsx("footer", {
    className: "border-t border-neutral-800 py-6",
    children: o.jsxs("div", {
      className:
        "max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs",
      children: [
        o.jsxs("p", {
          className: "text-neutral-600",
          children: [
            o.jsx("span", { className: "text-purple-400", children: "//" }),
            " ",
            o.jsx("span", {
              className: "text-neutral-500",
              children: "built by",
            }),
            " ",
            o.jsx("span", { className: "text-neutral-400", children: Ae.name }),
          ],
        }),
        o.jsxs("div", {
          className: "flex gap-4 sm:gap-6",
          children: [
            o.jsxs("a", {
              href: Ae.github,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "text-neutral-600 hover:text-neutral-400 transition-colors",
              children: [
                o.jsx("span", { className: "text-purple-400", children: "<" }),
                "GitHub",
                o.jsx("span", { className: "text-purple-400", children: "/>" }),
              ],
            }),
            o.jsxs("a", {
              href: Ae.linkedin,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "text-neutral-600 hover:text-neutral-400 transition-colors",
              children: [
                o.jsx("span", { className: "text-purple-400", children: "<" }),
                "LinkedIn",
                o.jsx("span", { className: "text-purple-400", children: "/>" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Ky({ children: c }) {
  return o.jsxs("div", {
    className: "min-h-screen flex flex-col bg-neutral-950 text-neutral-100",
    children: [
      o.jsx(Qy, {}),
      o.jsx("main", { className: "flex-1", children: c }),
      o.jsx(wy, {}),
    ],
  });
}
function Jy() {
  return o.jsxs("div", {
    className: "max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20",
    children: [
      o.jsxs("div", {
        className: "max-w-2xl",
        children: [
          o.jsxs("div", {
            className: "mb-6 font-mono text-sm",
            children: [
              o.jsx("span", {
                className: "text-neutral-500",
                children: "const",
              }),
              " ",
              o.jsx("span", {
                className: "text-purple-400",
                children: "developer",
              }),
              " ",
              o.jsx("span", { className: "text-neutral-400", children: "=" }),
              " ",
              o.jsx("span", { className: "text-yellow-300", children: "{" }),
            ],
          }),
          o.jsxs("h1", {
            className:
              "text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6 font-mono",
            children: [
              o.jsx("span", { className: "text-neutral-500", children: "//" }),
              " building interfaces",
              o.jsx("br", {}),
              o.jsx("span", { className: "text-neutral-500", children: "//" }),
              " that feel right.",
            ],
          }),
          o.jsxs("div", {
            className:
              "text-lg sm:text-xl text-neutral-300 mb-4 sm:mb-6 font-mono",
            children: [
              o.jsx("span", { className: "text-blue-400", children: "const" }),
              " ",
              o.jsx("span", { className: "text-purple-400", children: "role" }),
              " ",
              o.jsx("span", { className: "text-neutral-400", children: "=" }),
              " ",
              o.jsx("span", { className: "text-yellow-300", children: '"' }),
              o.jsx("span", {
                className: "text-green-300",
                children: Ae.title,
              }),
              o.jsx("span", { className: "text-yellow-300", children: '"' }),
            ],
          }),
          o.jsxs("p", {
            className:
              "text-neutral-400 mb-6 sm:mb-8 leading-relaxed max-w-xl font-mono text-sm",
            children: [
              o.jsx("span", { className: "text-yellow-300", children: "}" }),
              " ",
              Ae.tagline,
              ".",
              o.jsx("br", {}),
              o.jsx("span", { className: "text-neutral-500", children: "//" }),
              " I craft clean, performant, and accessible web experiences.",
            ],
          }),
          o.jsxs("div", {
            className:
              "flex flex-col sm:flex-row gap-3 sm:gap-4 font-mono text-sm",
            children: [
              o.jsxs(ci, {
                to: "/projects",
                className:
                  "group px-6 py-3 bg-neutral-100 text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2",
                children: [
                  o.jsx("span", {
                    className: "text-green-600 group-hover:text-green-700",
                    children: "$",
                  }),
                  o.jsx("span", { children: "./view-work" }),
                ],
              }),
              o.jsxs(ci, {
                to: "/contact",
                className:
                  "group px-6 py-3 border border-neutral-700 text-sm font-medium hover:border-neutral-500 transition-colors flex items-center gap-2",
                children: [
                  o.jsx("span", {
                    className: "text-purple-400",
                    children: "<",
                  }),
                  o.jsx("span", { children: "contact-me" }),
                  o.jsx("span", {
                    className: "text-purple-400",
                    children: "/>",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "mt-16 sm:mt-24 font-mono text-xs text-neutral-600",
        children: [
          o.jsxs("div", {
            className: "flex gap-2 mb-2",
            children: [
              o.jsx("span", {
                className: "w-3 h-3 rounded-full bg-red-500/20",
              }),
              o.jsx("span", {
                className: "w-3 h-3 rounded-full bg-yellow-500/20",
              }),
              o.jsx("span", {
                className: "w-3 h-3 rounded-full bg-green-500/20",
              }),
            ],
          }),
          o.jsxs("p", {
            children: [
              "~/portfolio $ ",
              o.jsx("span", {
                className: "text-green-400",
                children: "echo $STATUS",
              }),
            ],
          }),
          o.jsx("p", {
            className: "text-green-400 ml-4",
            children: "ready for work",
          }),
        ],
      }),
    ],
  });
}
function $y() {
  return o.jsxs("div", {
    className: "max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20",
    children: [
      o.jsxs("div", {
        className: "mb-8 sm:mb-12 font-mono text-sm",
        children: [
          o.jsx("span", { className: "text-neutral-500", children: "//" }),
          " ",
          o.jsx("span", {
            className: "text-yellow-300",
            children: "about.tsx",
          }),
        ],
      }),
      o.jsxs("h1", {
        className:
          "text-2xl sm:text-3xl font-semibold tracking-tight mb-8 sm:mb-12 font-mono",
        children: [
          o.jsx("span", {
            className: "text-purple-400",
            children: "export const",
          }),
          " ",
          o.jsx("span", { className: "text-blue-400", children: "about" }),
          o.jsxs("span", {
            className: "text-neutral-400",
            children: [" = () =", ">", " ", "{"],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "grid md:grid-cols-2 gap-8 sm:gap-12 font-mono text-sm",
        children: [
          o.jsxs("div", {
            className: "pl-4 border-l-2 border-neutral-800",
            children: [
              o.jsxs("p", {
                className: "text-neutral-400 leading-relaxed mb-4",
                children: [
                  o.jsx("span", {
                    className: "text-neutral-500",
                    children: "//",
                  }),
                  " Frontend developer based in ",
                  Ae.location,
                ],
              }),
              o.jsxs("p", {
                className: "text-neutral-400 leading-relaxed mb-4",
                children: [
                  o.jsx("span", {
                    className: "text-neutral-500",
                    children: "//",
                  }),
                  " Specializing in React & modern JS",
                ],
              }),
              o.jsxs("p", {
                className: "text-neutral-400 leading-relaxed mb-4",
                children: [
                  o.jsx("span", {
                    className: "text-neutral-500",
                    children: "//",
                  }),
                  " Focus: semantic code, performance, UX",
                ],
              }),
              o.jsxs("p", {
                className: "text-neutral-400 leading-relaxed",
                children: [
                  o.jsx("span", {
                    className: "text-neutral-500",
                    children: "//",
                  }),
                  " Continuous learner",
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            children: [
              o.jsxs("h2", {
                className: "text-lg font-medium mb-6 font-mono",
                children: [
                  o.jsx("span", {
                    className: "text-blue-400",
                    children: "const",
                  }),
                  " experience = ",
                  "[",
                ],
              }),
              o.jsx("div", {
                className: "space-y-6 sm:space-y-8 pl-4",
                children: mm.map((c, r) =>
                  o.jsxs(
                    "div",
                    {
                      className: "pl-4 border-l border-neutral-800",
                      children: [
                        o.jsx("span", {
                          className: "text-purple-400",
                          children: "{",
                        }),
                        o.jsxs("p", {
                          className: "text-neutral-500 text-xs mt-2 ml-2",
                          children: [
                            o.jsx("span", {
                              className: "text-blue-400",
                              children: "role",
                            }),
                            ": ",
                            o.jsxs("span", {
                              className: "text-yellow-300",
                              children: ['"', c.role, '"'],
                            }),
                            ",",
                          ],
                        }),
                        o.jsxs("p", {
                          className: "text-neutral-500 text-xs ml-2",
                          children: [
                            o.jsx("span", {
                              className: "text-blue-400",
                              children: "company",
                            }),
                            ": ",
                            o.jsxs("span", {
                              className: "text-yellow-300",
                              children: ['"', c.company, '"'],
                            }),
                            ",",
                          ],
                        }),
                        o.jsxs("p", {
                          className: "text-neutral-500 text-xs ml-2",
                          children: [
                            o.jsx("span", {
                              className: "text-blue-400",
                              children: "period",
                            }),
                            ": ",
                            o.jsxs("span", {
                              className: "text-yellow-300",
                              children: ['"', c.period, '"'],
                            }),
                          ],
                        }),
                        o.jsx("span", {
                          className: "text-purple-400",
                          children: "}",
                        }),
                        r < mm.length - 1 &&
                          o.jsx("span", {
                            className: "text-neutral-500",
                            children: ",",
                          }),
                      ],
                    },
                    c.id,
                  ),
                ),
              }),
              o.jsx("p", {
                className: "font-mono text-sm mt-4",
                children: o.jsx("span", {
                  className: "text-neutral-400",
                  children: " ]",
                }),
              }),
            ],
          }),
        ],
      }),
      o.jsx("div", {
        className: "mt-8 sm:mt-12 font-mono text-sm text-neutral-400",
        children: o.jsx("span", {
          className: "text-neutral-400",
          children: "}",
        }),
      }),
    ],
  });
}
function ky() {
  return o.jsxs("div", {
    className: "max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20",
    children: [
      o.jsxs("div", {
        className: "mb-8 sm:mb-12 font-mono text-sm",
        children: [
          o.jsx("span", { className: "text-neutral-500", children: "//" }),
          " ",
          o.jsx("span", {
            className: "text-yellow-300",
            children: "projects.tsx",
          }),
        ],
      }),
      o.jsxs("h1", {
        className:
          "text-2xl sm:text-3xl font-semibold tracking-tight mb-8 sm:mb-12 font-mono",
        children: [
          o.jsx("span", { className: "text-purple-400", children: "const" }),
          " ",
          o.jsx("span", { className: "text-blue-400", children: "projects" }),
          o.jsxs("span", {
            className: "text-neutral-400",
            children: [" = ", "["],
          }),
        ],
      }),
      o.jsx("div", {
        className: "grid sm:grid-cols-2 gap-4 sm:gap-8 font-mono text-sm",
        children: Vy.map((c, r) =>
          o.jsxs(
            "article",
            {
              className:
                "border border-neutral-800 p-4 sm:p-6 hover:border-neutral-700 transition-colors",
              children: [
                o.jsxs("div", {
                  className: "flex items-start justify-between mb-3",
                  children: [
                    o.jsxs("h2", {
                      className: "text-lg sm:text-xl font-medium",
                      children: [
                        o.jsx("span", {
                          className: "text-purple-400",
                          children: "{",
                        }),
                        " ",
                        c.title,
                      ],
                    }),
                    o.jsxs("span", {
                      className: "text-neutral-600 text-xs",
                      children: ["#", r + 1],
                    }),
                  ],
                }),
                o.jsxs("p", {
                  className:
                    "text-neutral-400 mb-4 leading-relaxed text-xs sm:text-sm ml-4",
                  children: [
                    o.jsx("span", {
                      className: "text-neutral-500",
                      children: "//",
                    }),
                    " ",
                    c.description,
                  ],
                }),
                o.jsxs("div", {
                  className: "flex flex-wrap gap-2 mb-4 ml-4",
                  children: [
                    o.jsx("span", {
                      className: "text-neutral-500 text-xs",
                      children: "tech:",
                    }),
                    c.tech.map((d, f) =>
                      o.jsxs(
                        "span",
                        {
                          className:
                            "px-2 py-1 bg-neutral-900 text-neutral-400 text-xs",
                          children: [
                            d,
                            f < c.tech.length - 1 &&
                              o.jsx("span", {
                                className: "text-neutral-600",
                                children: ",",
                              }),
                          ],
                        },
                        d,
                      ),
                    ),
                  ],
                }),
                o.jsxs("div", {
                  className: "flex gap-4 ml-4 text-xs",
                  children: [
                    o.jsxs("a", {
                      href: c.github,
                      className:
                        "text-green-400 hover:text-green-300 transition-colors",
                      children: [
                        o.jsx("span", {
                          className: "text-neutral-500",
                          children: "<",
                        }),
                        "code",
                        o.jsx("span", {
                          className: "text-neutral-500",
                          children: "/>",
                        }),
                      ],
                    }),
                    o.jsxs("a", {
                      href: c.live,
                      className:
                        "text-blue-400 hover:text-blue-300 transition-colors",
                      children: [
                        o.jsx("span", {
                          className: "text-neutral-500",
                          children: "~/",
                        }),
                        "demo",
                      ],
                    }),
                  ],
                }),
              ],
            },
            c.id,
          ),
        ),
      }),
      o.jsx("div", {
        className: "mt-8 sm:mt-12 font-mono text-sm text-neutral-400",
        children: o.jsx("span", {
          className: "text-neutral-400",
          children: " ]",
        }),
      }),
    ],
  });
}
const hm = [
  "VS Code",
  "Git",
  "Chrome DevTools",
  "Figma",
  "Webpack",
  "npm",
  "Yarn",
  "Docker",
  "AWS",
  "Linux",
];
function Wy() {
  return o.jsxs("div", {
    className: "max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20",
    children: [
      o.jsxs("div", {
        className: "mb-8 sm:mb-12 font-mono text-sm",
        children: [
          o.jsx("span", { className: "text-neutral-500", children: "//" }),
          " ",
          o.jsx("span", {
            className: "text-yellow-300",
            children: "skills.tsx",
          }),
        ],
      }),
      o.jsxs("h1", {
        className:
          "text-2xl sm:text-3xl font-semibold tracking-tight mb-8 sm:mb-12 font-mono",
        children: [
          o.jsx("span", { className: "text-purple-400", children: "import" }),
          " ",
          o.jsx("span", { className: "text-yellow-300", children: "{" }),
          " ",
          "skills",
          " ",
          o.jsx("span", { className: "text-yellow-300", children: "}" }),
          o.jsx("span", { className: "text-neutral-400", children: " from" }),
          " ",
          o.jsx("span", {
            className: "text-green-300",
            children: "'./experience'",
          }),
        ],
      }),
      o.jsxs("div", {
        className: "max-w-2xl font-mono text-sm",
        children: [
          o.jsxs("div", {
            className: "mb-8 sm:mb-12",
            children: [
              o.jsxs("p", {
                className: "text-neutral-500 mb-4",
                children: [
                  o.jsx("span", {
                    className: "text-purple-400",
                    children: "const",
                  }),
                  " frontend = ",
                  "{",
                ],
              }),
              o.jsx("div", {
                className: "flex flex-wrap gap-2 sm:gap-3 ml-4",
                children: Zy.slice(0, 6).map((c, r) =>
                  o.jsxs(
                    "span",
                    {
                      className:
                        "px-3 py-2 bg-neutral-900 text-neutral-300 text-sm border border-neutral-800 hover:border-neutral-600 transition-colors",
                      children: [
                        c,
                        r < 5 &&
                          o.jsx("span", {
                            className: "text-neutral-600",
                            children: ",",
                          }),
                      ],
                    },
                    c,
                  ),
                ),
              }),
              o.jsx("p", { className: "text-neutral-500 mt-2", children: "}" }),
            ],
          }),
          o.jsxs("div", {
            className: "mb-8 sm:mb-12",
            children: [
              o.jsxs("p", {
                className: "text-neutral-500 mb-4",
                children: [
                  o.jsx("span", {
                    className: "text-purple-400",
                    children: "const",
                  }),
                  " tools = ",
                  "{",
                ],
              }),
              o.jsx("div", {
                className: "flex flex-wrap gap-2 sm:gap-3 ml-4",
                children: hm.map((c, r) =>
                  o.jsxs(
                    "span",
                    {
                      className:
                        "px-3 py-2 bg-neutral-900 text-neutral-400 text-sm border border-neutral-800 hover:border-neutral-600 transition-colors",
                      children: [
                        c,
                        r < hm.length - 1 &&
                          o.jsx("span", {
                            className: "text-neutral-600",
                            children: ",",
                          }),
                      ],
                    },
                    c,
                  ),
                ),
              }),
              o.jsx("p", { className: "text-neutral-500 mt-2", children: "}" }),
            ],
          }),
          o.jsxs("div", {
            children: [
              o.jsxs("p", {
                className: "text-neutral-500 mb-4",
                children: [
                  o.jsx("span", {
                    className: "text-purple-400",
                    children: "const",
                  }),
                  ' strengths = ["clean code", "performance", "accessibility"]',
                ],
              }),
              o.jsxs("div", {
                className: "flex flex-wrap gap-2 sm:gap-3 ml-4",
                children: [
                  o.jsx("span", {
                    className:
                      "px-3 py-2 bg-neutral-900 text-green-400 text-sm border border-neutral-800",
                    children: '"clean code"',
                  }),
                  o.jsx("span", {
                    className:
                      "px-3 py-2 bg-neutral-900 text-green-400 text-sm border border-neutral-800",
                    children: '"performance"',
                  }),
                  o.jsx("span", {
                    className:
                      "px-3 py-2 bg-neutral-900 text-green-400 text-sm border border-neutral-800",
                    children: '"accessibility"',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Fy() {
  const [c, r] = O.useState({ name: "", email: "", message: "" }),
    d = (f) => {
      f.preventDefault();
      const h = `mailto:${Ae.email}?subject=Portfolio Contact: ${c.name}&body=${encodeURIComponent(c.message)}`;
      window.location.href = h;
    };
  return o.jsxs("div", {
    className: "max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20",
    children: [
      o.jsxs("div", {
        className: "mb-8 sm:mb-12 font-mono text-sm",
        children: [
          o.jsx("span", { className: "text-neutral-500", children: "//" }),
          " ",
          o.jsx("span", {
            className: "text-yellow-300",
            children: "contact.tsx",
          }),
        ],
      }),
      o.jsxs("h1", {
        className:
          "text-2xl sm:text-3xl font-semibold tracking-tight mb-8 sm:mb-12 font-mono",
        children: [
          o.jsx("span", { className: "text-purple-400", children: "const" }),
          " ",
          o.jsx("span", { className: "text-blue-400", children: "contact" }),
          o.jsxs("span", {
            className: "text-neutral-400",
            children: [" = () =", ">", " ", "{"],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "grid lg:grid-cols-2 gap-8 lg:gap-12",
        children: [
          o.jsxs("div", {
            className: "font-mono text-sm",
            children: [
              o.jsxs("p", {
                className:
                  "text-neutral-400 leading-relaxed mb-6 sm:mb-8 max-w-md",
                children: [
                  o.jsx("span", {
                    className: "text-neutral-500",
                    children: "//",
                  }),
                  " Looking to collaborate or have a question?",
                  o.jsx("br", {}),
                  o.jsx("span", {
                    className: "text-neutral-500",
                    children: "//",
                  }),
                  " Drop me a message below.",
                ],
              }),
              o.jsxs("div", {
                className:
                  "bg-neutral-900/50 border border-neutral-800 p-4 sm:p-6",
                children: [
                  o.jsxs("p", {
                    className: "text-neutral-500 mb-4",
                    children: [
                      o.jsx("span", {
                        className: "text-purple-400",
                        children: "const",
                      }),
                      " info = ",
                      "{",
                    ],
                  }),
                  o.jsxs("div", {
                    className: "ml-4 space-y-3",
                    children: [
                      o.jsxs("p", {
                        children: [
                          o.jsx("span", {
                            className: "text-blue-400",
                            children: "email",
                          }),
                          ":",
                          " ",
                          o.jsx("span", {
                            className: "text-yellow-300",
                            children: '"',
                          }),
                          o.jsx("a", {
                            href: `mailto:${Ae.email}`,
                            className:
                              "text-green-400 hover:text-green-300 transition-colors",
                            children: Ae.email,
                          }),
                          o.jsx("span", {
                            className: "text-yellow-300",
                            children: '"',
                          }),
                          ",",
                        ],
                      }),
                      o.jsxs("p", {
                        children: [
                          o.jsx("span", {
                            className: "text-blue-400",
                            children: "location",
                          }),
                          ":",
                          " ",
                          o.jsx("span", {
                            className: "text-yellow-300",
                            children: '"',
                          }),
                          o.jsx("span", {
                            className: "text-neutral-300",
                            children: Ae.location,
                          }),
                          o.jsx("span", {
                            className: "text-yellow-300",
                            children: '"',
                          }),
                          ",",
                        ],
                      }),
                      o.jsxs("p", {
                        children: [
                          o.jsx("span", {
                            className: "text-blue-400",
                            children: "status",
                          }),
                          ":",
                          " ",
                          o.jsx("span", {
                            className: "text-green-400",
                            children: '"open to work"',
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsx("p", {
                    className: "text-neutral-500 mt-4",
                    children: "}",
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "mt-6 sm:mt-8",
                children: [
                  o.jsxs("p", {
                    className: "text-neutral-500 mb-4",
                    children: [
                      o.jsx("span", {
                        className: "text-neutral-500",
                        children: "//",
                      }),
                      " or find me on:",
                    ],
                  }),
                  o.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      o.jsxs("a", {
                        href: Ae.github,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors",
                        children: [
                          o.jsx("svg", {
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: o.jsx("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z",
                            }),
                          }),
                          o.jsx("span", { children: "GitHub" }),
                        ],
                      }),
                      o.jsxs("a", {
                        href: Ae.linkedin,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors",
                        children: [
                          o.jsx("svg", {
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: o.jsx("path", {
                              d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                            }),
                          }),
                          o.jsx("span", { children: "LinkedIn" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          o.jsx("form", {
            onSubmit: d,
            className: "font-mono text-sm",
            children: o.jsxs("div", {
              className:
                "bg-neutral-900/50 border border-neutral-800 p-4 sm:p-6",
              children: [
                o.jsxs("p", {
                  className: "text-neutral-500 mb-6",
                  children: [
                    o.jsx("span", {
                      className: "text-purple-400",
                      children: "await",
                    }),
                    " sendMessage(",
                    "{",
                  ],
                }),
                o.jsxs("div", {
                  className: "ml-4 space-y-6",
                  children: [
                    o.jsxs("div", {
                      children: [
                        o.jsxs("label", {
                          htmlFor: "name",
                          className: "block text-neutral-500 mb-2",
                          children: [
                            o.jsx("span", {
                              className: "text-blue-400",
                              children: "name",
                            }),
                            o.jsx("span", {
                              className: "text-neutral-400",
                              children: ":",
                            }),
                          ],
                        }),
                        o.jsx("input", {
                          type: "text",
                          id: "name",
                          required: !0,
                          value: c.name,
                          onChange: (f) => r({ ...c, name: f.target.value }),
                          className:
                            "w-full px-4 py-3 bg-neutral-950 border border-neutral-800 text-neutral-100 focus:border-neutral-500 focus:outline-none transition-colors font-mono text-sm",
                          placeholder: '"{personalInfo.name}"',
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsxs("label", {
                          htmlFor: "email",
                          className: "block text-neutral-500 mb-2",
                          children: [
                            o.jsx("span", {
                              className: "text-blue-400",
                              children: "email",
                            }),
                            o.jsx("span", {
                              className: "text-neutral-400",
                              children: ":",
                            }),
                          ],
                        }),
                        o.jsx("input", {
                          type: "email",
                          id: "email",
                          required: !0,
                          value: c.email,
                          onChange: (f) => r({ ...c, email: f.target.value }),
                          className:
                            "w-full px-4 py-3 bg-neutral-950 border border-neutral-800 text-neutral-100 focus:border-neutral-500 focus:outline-none transition-colors font-mono text-sm",
                          placeholder: '"{personalInfo.email}"',
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsxs("label", {
                          htmlFor: "message",
                          className: "block text-neutral-500 mb-2",
                          children: [
                            o.jsx("span", {
                              className: "text-blue-400",
                              children: "message",
                            }),
                            o.jsx("span", {
                              className: "text-neutral-400",
                              children: ":",
                            }),
                          ],
                        }),
                        o.jsx("textarea", {
                          id: "message",
                          rows: "5",
                          required: !0,
                          value: c.message,
                          onChange: (f) => r({ ...c, message: f.target.value }),
                          className:
                            "w-full px-4 py-3 bg-neutral-950 border border-neutral-800 text-neutral-100 focus:border-neutral-500 focus:outline-none transition-colors resize-none font-mono text-sm",
                          placeholder: '"Hello, lets work together..."',
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("p", {
                  className: "text-neutral-500 mt-6",
                  children: [
                    "}",
                    ", ",
                    o.jsx("span", {
                      className: "text-neutral-500",
                      children: "//",
                    }),
                    " click to send",
                  ],
                }),
                o.jsxs("button", {
                  type: "submit",
                  className:
                    "mt-6 w-full sm:w-auto px-6 py-3 bg-neutral-100 text-neutral-950 font-medium hover:bg-neutral-200 transition-colors font-mono text-sm group",
                  children: [
                    o.jsx("span", {
                      className: "text-green-400 group-hover:text-green-600",
                      children: "$",
                    }),
                    " ./send-message",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      o.jsx("div", {
        className: "mt-8 sm:mt-12 font-mono text-sm text-neutral-400",
        children: o.jsx("span", {
          className: "text-neutral-400",
          children: "}",
        }),
      }),
    ],
  });
}
function Iy() {
  return o.jsx(Cy, {
    children: o.jsx(Ky, {
      children: o.jsxs(sy, {
        children: [
          o.jsx(Ua, { path: "/", element: o.jsx(Jy, {}) }),
          o.jsx(Ua, { path: "/about", element: o.jsx($y, {}) }),
          o.jsx(Ua, { path: "/projects", element: o.jsx(ky, {}) }),
          o.jsx(Ua, { path: "/skills", element: o.jsx(Wy, {}) }),
          o.jsx(Ua, { path: "/contact", element: o.jsx(Fy, {}) }),
        ],
      }),
    }),
  });
}
ov.createRoot(document.getElementById("root")).render(
  o.jsx(O.StrictMode, { children: o.jsx(Iy, {}) }),
);
