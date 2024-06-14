function jv(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const o in r)
				if (o !== "default" && !(o in e)) {
					const i = Object.getOwnPropertyDescriptor(r, o);
					i && Object.defineProperty(e, o, i.get ? i : {
						enumerable: !0,
						get: () => r[o]
					})
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
		value: "Module"
	}))
}(function() {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
	new MutationObserver(o => {
		for (const i of o)
			if (i.type === "childList")
				for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function n(o) {
		const i = {};
		return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
	}

	function r(o) {
		if (o.ep) return;
		o.ep = !0;
		const i = n(o);
		fetch(o.href, i)
	}
})();

function up(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var sp = {
		exports: {}
	},
	Cl = {},
	cp = {
		exports: {}
	},
	Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qo = Symbol.for("react.element"),
	bv = Symbol.for("react.portal"),
	Nv = Symbol.for("react.fragment"),
	Tv = Symbol.for("react.strict_mode"),
	Mv = Symbol.for("react.profiler"),
	zv = Symbol.for("react.provider"),
	Dv = Symbol.for("react.context"),
	Lv = Symbol.for("react.forward_ref"),
	Iv = Symbol.for("react.suspense"),
	$v = Symbol.for("react.memo"),
	Av = Symbol.for("react.lazy"),
	Zc = Symbol.iterator;

function Uv(e) {
	return e === null || typeof e != "object" ? null : (e = Zc && e[Zc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var fp = {
		isMounted: function() {
			return !1
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	},
	dp = Object.assign,
	pp = {};

function Qr(e, t, n) {
	this.props = e, this.context = t, this.refs = pp, this.updater = n || fp
}
Qr.prototype.isReactComponent = {};
Qr.prototype.setState = function(e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	this.updater.enqueueSetState(this, e, t, "setState")
};
Qr.prototype.forceUpdate = function(e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function hp() {}
hp.prototype = Qr.prototype;

function ks(e, t, n) {
	this.props = e, this.context = t, this.refs = pp, this.updater = n || fp
}
var Ps = ks.prototype = new hp;
Ps.constructor = ks;
dp(Ps, Qr.prototype);
Ps.isPureReactComponent = !0;
var ef = Array.isArray,
	mp = Object.prototype.hasOwnProperty,
	Cs = {
		current: null
	},
	vp = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function yp(e, t, n) {
	var r, o = {},
		i = null,
		l = null;
	if (t != null)
		for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) mp.call(t, r) && !vp.hasOwnProperty(r) && (o[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) o.children = n;
	else if (1 < a) {
		for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
		o.children = u
	}
	if (e && e.defaultProps)
		for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
	return {
		$$typeof: qo,
		type: e,
		key: i,
		ref: l,
		props: o,
		_owner: Cs.current
	}
}

function Fv(e, t) {
	return {
		$$typeof: qo,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner
	}
}

function _s(e) {
	return typeof e == "object" && e !== null && e.$$typeof === qo
}

function Bv(e) {
	var t = {
		"=": "=0",
		":": "=2"
	};
	return "$" + e.replace(/[=:]/g, function(n) {
		return t[n]
	})
}
var tf = /\/+/g;

function Pa(e, t) {
	return typeof e == "object" && e !== null && e.key != null ? Bv("" + e.key) : t.toString(36)
}

function Ri(e, t, n, r, o) {
	var i = typeof e;
	(i === "undefined" || i === "boolean") && (e = null);
	var l = !1;
	if (e === null) l = !0;
	else switch (i) {
		case "string":
		case "number":
			l = !0;
			break;
		case "object":
			switch (e.$$typeof) {
				case qo:
				case bv:
					l = !0
			}
	}
	if (l) return l = e, o = o(l), e = r === "" ? "." + Pa(l, 0) : r, ef(o) ? (n = "", e != null && (n = e.replace(tf, "$&/") + "/"), Ri(o, t, n, "", function(s) {
		return s
	})) : o != null && (_s(o) && (o = Fv(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(tf, "$&/") + "/") + e)), t.push(o)), 1;
	if (l = 0, r = r === "" ? "." : r + ":", ef(e))
		for (var a = 0; a < e.length; a++) {
			i = e[a];
			var u = r + Pa(i, a);
			l += Ri(i, t, n, u, o)
		} else if (u = Uv(e), typeof u == "function")
			for (e = u.call(e), a = 0; !(i = e.next()).done;) i = i.value, u = r + Pa(i, a++), l += Ri(i, t, n, u, o);
		else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
	return l
}

function si(e, t, n) {
	if (e == null) return e;
	var r = [],
		o = 0;
	return Ri(e, r, "", "", function(i) {
		return t.call(n, i, o++)
	}), r
}

function Wv(e) {
	if (e._status === -1) {
		var t = e._result;
		t = t(), t.then(function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
		}, function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
		}), e._status === -1 && (e._status = 0, e._result = t)
	}
	if (e._status === 1) return e._result.default;
	throw e._result
}
var Ge = {
		current: null
	},
	Oi = {
		transition: null
	},
	Vv = {
		ReactCurrentDispatcher: Ge,
		ReactCurrentBatchConfig: Oi,
		ReactCurrentOwner: Cs
	};
Y.Children = {
	map: si,
	forEach: function(e, t, n) {
		si(e, function() {
			t.apply(this, arguments)
		}, n)
	},
	count: function(e) {
		var t = 0;
		return si(e, function() {
			t++
		}), t
	},
	toArray: function(e) {
		return si(e, function(t) {
			return t
		}) || []
	},
	only: function(e) {
		if (!_s(e)) throw Error("React.Children.only expected to receive a single React element child.");
		return e
	}
};
Y.Component = Qr;
Y.Fragment = Nv;
Y.Profiler = Mv;
Y.PureComponent = ks;
Y.StrictMode = Tv;
Y.Suspense = Iv;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vv;
Y.cloneElement = function(e, t, n) {
	if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
	var r = dp({}, e.props),
		o = e.key,
		i = e.ref,
		l = e._owner;
	if (t != null) {
		if (t.ref !== void 0 && (i = t.ref, l = Cs.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
		for (u in t) mp.call(t, u) && !vp.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
	}
	var u = arguments.length - 2;
	if (u === 1) r.children = n;
	else if (1 < u) {
		a = Array(u);
		for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
		r.children = a
	}
	return {
		$$typeof: qo,
		type: e.type,
		key: o,
		ref: i,
		props: r,
		_owner: l
	}
};
Y.createContext = function(e) {
	return e = {
		$$typeof: Dv,
		_currentValue: e,
		_currentValue2: e,
		_threadCount: 0,
		Provider: null,
		Consumer: null,
		_defaultValue: null,
		_globalName: null
	}, e.Provider = {
		$$typeof: zv,
		_context: e
	}, e.Consumer = e
};
Y.createElement = yp;
Y.createFactory = function(e) {
	var t = yp.bind(null, e);
	return t.type = e, t
};
Y.createRef = function() {
	return {
		current: null
	}
};
Y.forwardRef = function(e) {
	return {
		$$typeof: Lv,
		render: e
	}
};
Y.isValidElement = _s;
Y.lazy = function(e) {
	return {
		$$typeof: Av,
		_payload: {
			_status: -1,
			_result: e
		},
		_init: Wv
	}
};
Y.memo = function(e, t) {
	return {
		$$typeof: $v,
		type: e,
		compare: t === void 0 ? null : t
	}
};
Y.startTransition = function(e) {
	var t = Oi.transition;
	Oi.transition = {};
	try {
		e()
	} finally {
		Oi.transition = t
	}
};
Y.unstable_act = function() {
	throw Error("act(...) is not supported in production builds of React.")
};
Y.useCallback = function(e, t) {
	return Ge.current.useCallback(e, t)
};
Y.useContext = function(e) {
	return Ge.current.useContext(e)
};
Y.useDebugValue = function() {};
Y.useDeferredValue = function(e) {
	return Ge.current.useDeferredValue(e)
};
Y.useEffect = function(e, t) {
	return Ge.current.useEffect(e, t)
};
Y.useId = function() {
	return Ge.current.useId()
};
Y.useImperativeHandle = function(e, t, n) {
	return Ge.current.useImperativeHandle(e, t, n)
};
Y.useInsertionEffect = function(e, t) {
	return Ge.current.useInsertionEffect(e, t)
};
Y.useLayoutEffect = function(e, t) {
	return Ge.current.useLayoutEffect(e, t)
};
Y.useMemo = function(e, t) {
	return Ge.current.useMemo(e, t)
};
Y.useReducer = function(e, t, n) {
	return Ge.current.useReducer(e, t, n)
};
Y.useRef = function(e) {
	return Ge.current.useRef(e)
};
Y.useState = function(e) {
	return Ge.current.useState(e)
};
Y.useSyncExternalStore = function(e, t, n) {
	return Ge.current.useSyncExternalStore(e, t, n)
};
Y.useTransition = function() {
	return Ge.current.useTransition()
};
Y.version = "18.2.0";
cp.exports = Y;
var C = cp.exports;
const T = up(C),
	Hv = jv({
		__proto__: null,
		default: T
	}, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kv = C,
	Qv = Symbol.for("react.element"),
	Yv = Symbol.for("react.fragment"),
	Gv = Object.prototype.hasOwnProperty,
	Xv = Kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Jv = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function gp(e, t, n) {
	var r, o = {},
		i = null,
		l = null;
	n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
	for (r in t) Gv.call(t, r) && !Jv.hasOwnProperty(r) && (o[r] = t[r]);
	if (e && e.defaultProps)
		for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
	return {
		$$typeof: Qv,
		type: e,
		key: i,
		ref: l,
		props: o,
		_owner: Xv.current
	}
}
Cl.Fragment = Yv;
Cl.jsx = gp;
Cl.jsxs = gp;
sp.exports = Cl;
var O = sp.exports;
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function me() {
	return me = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, me.apply(this, arguments)
}
var Pe;
(function(e) {
	e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Pe || (Pe = {}));
const nf = "popstate";

function qv(e) {
	e === void 0 && (e = {});

	function t(o, i) {
		let {
			pathname: l = "/",
			search: a = "",
			hash: u = ""
		} = Wt(o.location.hash.substr(1));
		return !l.startsWith("/") && !l.startsWith(".") && (l = "/" + l), No("", {
			pathname: l,
			search: a,
			hash: u
		}, i.state && i.state.usr || null, i.state && i.state.key || "default")
	}

	function n(o, i) {
		let l = o.document.querySelector("base"),
			a = "";
		if (l && l.getAttribute("href")) {
			let u = o.location.href,
				s = u.indexOf("#");
			a = s === -1 ? u : u.slice(0, s)
		}
		return a + "#" + (typeof i == "string" ? i : qn(i))
	}

	function r(o, i) {
		Jn(o.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(i) + ")")
	}
	return ey(t, n, r, e)
}

function Q(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Jn(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t)
		} catch {}
	}
}

function Zv() {
	return Math.random().toString(36).substr(2, 8)
}

function rf(e, t) {
	return {
		usr: e.state,
		key: e.key,
		idx: t
	}
}

function No(e, t, n, r) {
	return n === void 0 && (n = null), me({
		pathname: typeof e == "string" ? e : e.pathname,
		search: "",
		hash: ""
	}, typeof t == "string" ? Wt(t) : t, {
		state: n,
		key: t && t.key || r || Zv()
	})
}

function qn(e) {
	let {
		pathname: t = "/",
		search: n = "",
		hash: r = ""
	} = e;
	return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Wt(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
	}
	return t
}

function ey(e, t, n, r) {
	r === void 0 && (r = {});
	let {
		window: o = document.defaultView,
		v5Compat: i = !1
	} = r, l = o.history, a = Pe.Pop, u = null, s = c();
	s == null && (s = 0, l.replaceState(me({}, l.state, {
		idx: s
	}), ""));

	function c() {
		return (l.state || {
			idx: null
		}).idx
	}

	function d() {
		a = Pe.Pop;
		let S = c(),
			m = S == null ? null : S - s;
		s = S, u && u({
			action: a,
			location: v.location,
			delta: m
		})
	}

	function p(S, m) {
		a = Pe.Push;
		let f = No(v.location, S, m);
		n && n(f, S), s = c() + 1;
		let y = rf(f, s),
			h = v.createHref(f);
		try {
			l.pushState(y, "", h)
		} catch (E) {
			if (E instanceof DOMException && E.name === "DataCloneError") throw E;
			o.location.assign(h)
		}
		i && u && u({
			action: a,
			location: v.location,
			delta: 1
		})
	}

	function g(S, m) {
		a = Pe.Replace;
		let f = No(v.location, S, m);
		n && n(f, S), s = c();
		let y = rf(f, s),
			h = v.createHref(f);
		l.replaceState(y, "", h), i && u && u({
			action: a,
			location: v.location,
			delta: 0
		})
	}

	function w(S) {
		let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
			f = typeof S == "string" ? S : qn(S);
		return Q(m, "No window.location.(origin|href) available to create URL for href: " + f), new URL(f, m)
	}
	let v = {
		get action() {
			return a
		},
		get location() {
			return e(o, l)
		},
		listen(S) {
			if (u) throw new Error("A history only accepts one active listener");
			return o.addEventListener(nf, d), u = S, () => {
				o.removeEventListener(nf, d), u = null
			}
		},
		createHref(S) {
			return t(o, S)
		},
		createURL: w,
		encodeLocation(S) {
			let m = w(S);
			return {
				pathname: m.pathname,
				search: m.search,
				hash: m.hash
			}
		},
		push: p,
		replace: g,
		go(S) {
			return l.go(S)
		}
	};
	return v
}
var Ee;
(function(e) {
	e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Ee || (Ee = {}));
const ty = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function ny(e) {
	return e.index === !0
}

function su(e, t, n, r) {
	return n === void 0 && (n = []), r === void 0 && (r = {}), e.map((o, i) => {
		let l = [...n, i],
			a = typeof o.id == "string" ? o.id : l.join("-");
		if (Q(o.index !== !0 || !o.children, "Cannot specify children on an index route"), Q(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`), ny(o)) {
			let u = me({}, o, t(o), {
				id: a
			});
			return r[a] = u, u
		} else {
			let u = me({}, o, t(o), {
				id: a,
				children: void 0
			});
			return r[a] = u, o.children && (u.children = su(o.children, t, l, r)), u
		}
	})
}

function pr(e, t, n) {
	n === void 0 && (n = "/");
	let r = typeof t == "string" ? Wt(t) : t,
		o = Yr(r.pathname || "/", n);
	if (o == null) return null;
	let i = wp(e);
	oy(i);
	let l = null;
	for (let a = 0; l == null && a < i.length; ++a) l = py(i[a], vy(o));
	return l
}

function ry(e, t) {
	let {
		route: n,
		pathname: r,
		params: o
	} = e;
	return {
		id: n.id,
		pathname: r,
		params: o,
		data: t[n.id],
		handle: n.handle
	}
}

function wp(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
	let o = (i, l, a) => {
		let u = {
			relativePath: a === void 0 ? i.path || "" : a,
			caseSensitive: i.caseSensitive === !0,
			childrenIndex: l,
			route: i
		};
		u.relativePath.startsWith("/") && (Q(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(r.length));
		let s = tn([r, u.relativePath]),
			c = n.concat(u);
		i.children && i.children.length > 0 && (Q(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')), wp(i.children, t, c, s)), !(i.path == null && !i.index) && t.push({
			path: s,
			score: fy(s, i.index),
			routesMeta: c
		})
	};
	return e.forEach((i, l) => {
		var a;
		if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, l);
		else
			for (let u of Sp(i.path)) o(i, l, u)
	}), t
}

function Sp(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
	if (r.length === 0) return o ? [i, ""] : [i];
	let l = Sp(r.join("/")),
		a = [];
	return a.push(...l.map(u => u === "" ? i : [i, u].join("/"))), o && a.push(...l), a.map(u => e.startsWith("/") && u === "" ? "/" : u)
}

function oy(e) {
	e.sort((t, n) => t.score !== n.score ? n.score - t.score : dy(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const iy = /^:\w+$/,
	ly = 3,
	ay = 2,
	uy = 1,
	sy = 10,
	cy = -2,
	of = e => e === "*";

function fy(e, t) {
	let n = e.split("/"),
		r = n.length;
	return n.some(of) && (r += cy), t && (r += ay), n.filter(o => !of(o)).reduce((o, i) => o + (iy.test(i) ? ly : i === "" ? uy : sy), r)
}

function dy(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function py(e, t) {
	let {
		routesMeta: n
	} = e, r = {}, o = "/", i = [];
	for (let l = 0; l < n.length; ++l) {
		let a = n[l],
			u = l === n.length - 1,
			s = o === "/" ? t : t.slice(o.length) || "/",
			c = hy({
				path: a.relativePath,
				caseSensitive: a.caseSensitive,
				end: u
			}, s);
		if (!c) return null;
		Object.assign(r, c.params);
		let d = a.route;
		i.push({
			params: r,
			pathname: tn([o, c.pathname]),
			pathnameBase: Sy(tn([o, c.pathnameBase])),
			route: d
		}), c.pathnameBase !== "/" && (o = tn([o, c.pathnameBase]))
	}
	return i
}

function hy(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = my(e.path, e.caseSensitive, e.end), o = t.match(n);
	if (!o) return null;
	let i = o[0],
		l = i.replace(/(.)\/+$/, "$1"),
		a = o.slice(1);
	return {
		params: r.reduce((s, c, d) => {
			if (c === "*") {
				let p = a[d] || "";
				l = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1")
			}
			return s[c] = yy(a[d] || "", c), s
		}, {}),
		pathname: i,
		pathnameBase: l,
		pattern: e
	}
}

function my(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !0), Jn(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
	let r = [],
		o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (l, a) => (r.push(a), "/([^\\/]+)"));
	return e.endsWith("*") ? (r.push("*"), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function vy(e) {
	try {
		return decodeURI(e)
	} catch (t) {
		return Jn(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
	}
}

function yy(e, t) {
	try {
		return decodeURIComponent(e)
	} catch (n) {
		return Jn(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e
	}
}

function Yr(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/"
}

function gy(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: o = ""
	} = typeof e == "string" ? Wt(e) : e;
	return {
		pathname: n ? n.startsWith("/") ? n : wy(n, t) : t,
		search: xy(r),
		hash: Ey(o)
	}
}

function wy(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return e.split("/").forEach(o => {
		o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
	}), n.length > 1 ? n.join("/") : "/"
}

function Ca(e, t, n, r) {
	return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function _l(e) {
	return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Rs(e, t, n, r) {
	r === void 0 && (r = !1);
	let o;
	typeof e == "string" ? o = Wt(e) : (o = me({}, e), Q(!o.pathname || !o.pathname.includes("?"), Ca("?", "pathname", "search", o)), Q(!o.pathname || !o.pathname.includes("#"), Ca("#", "pathname", "hash", o)), Q(!o.search || !o.search.includes("#"), Ca("#", "search", "hash", o)));
	let i = e === "" || o.pathname === "",
		l = i ? "/" : o.pathname,
		a;
	if (r || l == null) a = n;
	else {
		let d = t.length - 1;
		if (l.startsWith("..")) {
			let p = l.split("/");
			for (; p[0] === "..";) p.shift(), d -= 1;
			o.pathname = p.join("/")
		}
		a = d >= 0 ? t[d] : "/"
	}
	let u = gy(o, a),
		s = l && l !== "/" && l.endsWith("/"),
		c = (i || l === ".") && n.endsWith("/");
	return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u
}
const tn = e => e.join("/").replace(/\/\/+/g, "/"),
	Sy = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	xy = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
	Ey = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Os {
	constructor(t, n, r, o) {
		o === void 0 && (o = !1), this.status = t, this.statusText = n || "", this.internal = o, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
	}
}

function xp(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const Ep = ["post", "put", "patch", "delete"],
	ky = new Set(Ep),
	Py = ["get", ...Ep],
	Cy = new Set(Py),
	_y = new Set([301, 302, 303, 307, 308]),
	Ry = new Set([307, 308]),
	_a = {
		state: "idle",
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0
	},
	Oy = {
		state: "idle",
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0
	},
	no = {
		state: "unblocked",
		proceed: void 0,
		reset: void 0,
		location: void 0
	},
	kp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	jy = e => ({
		hasErrorBoundary: !!e.hasErrorBoundary
	});

function by(e) {
	const t = e.window ? e.window : typeof window < "u" ? window : void 0,
		n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
		r = !n;
	Q(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
	let o;
	if (e.mapRouteProperties) o = e.mapRouteProperties;
	else if (e.detectErrorBoundary) {
		let x = e.detectErrorBoundary;
		o = k => ({
			hasErrorBoundary: x(k)
		})
	} else o = jy;
	let i = {},
		l = su(e.routes, o, void 0, i),
		a, u = e.basename || "/",
		s = me({
			v7_normalizeFormMethod: !1,
			v7_prependBasename: !1
		}, e.future),
		c = null,
		d = new Set,
		p = null,
		g = null,
		w = null,
		v = e.hydrationData != null,
		S = pr(l, e.history.location, u),
		m = null;
	if (S == null) {
		let x = mt(404, {
				pathname: e.history.location.pathname
			}),
			{
				matches: k,
				route: R
			} = pf(l);
		S = k, m = {
			[R.id]: x
		}
	}
	let f = !S.some(x => x.route.lazy) && (!S.some(x => x.route.loader) || e.hydrationData != null),
		y, h = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: S,
			initialized: f,
			navigation: _a,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: "idle",
			loaderData: e.hydrationData && e.hydrationData.loaderData || {},
			actionData: e.hydrationData && e.hydrationData.actionData || null,
			errors: e.hydrationData && e.hydrationData.errors || m,
			fetchers: new Map,
			blockers: new Map
		},
		E = Pe.Pop,
		P = !1,
		_, N = !1,
		$ = !1,
		M = [],
		J = [],
		K = new Map,
		Se = 0,
		He = -1,
		F = new Map,
		G = new Set,
		q = new Map,
		b = new Map,
		L = new Map,
		I = !1;

	function le() {
		return c = e.history.listen(x => {
			let {
				action: k,
				location: R,
				delta: z
			} = x;
			if (I) {
				I = !1;
				return
			}
			Jn(L.size === 0 || z != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
			let V = Gc({
				currentLocation: h.location,
				nextLocation: R,
				historyAction: k
			});
			if (V && z != null) {
				I = !0, e.history.go(z * -1), ai(V, {
					state: "blocked",
					location: R,
					proceed() {
						ai(V, {
							state: "proceeding",
							proceed: void 0,
							reset: void 0,
							location: R
						}), e.history.go(z)
					},
					reset() {
						let W = new Map(h.blockers);
						W.set(V, no), ee({
							blockers: W
						})
					}
				});
				return
			}
			return qe(k, R)
		}), h.initialized || qe(Pe.Pop, h.location), y
	}

	function re() {
		c && c(), d.clear(), _ && _.abort(), h.fetchers.forEach((x, k) => Ze(k)), h.blockers.forEach((x, k) => Yc(k))
	}

	function Ht(x) {
		return d.add(x), () => d.delete(x)
	}

	function ee(x) {
		h = me({}, h, x), d.forEach(k => k(h))
	}

	function Ie(x, k) {
		var R, z;
		let V = h.actionData != null && h.navigation.formMethod != null && Rt(h.navigation.formMethod) && h.navigation.state === "loading" && ((R = x.state) == null ? void 0 : R._isRedirect) !== !0,
			W;
		k.actionData ? Object.keys(k.actionData).length > 0 ? W = k.actionData : W = null : V ? W = h.actionData : W = null;
		let H = k.loaderData ? df(h.loaderData, k.loaderData, k.matches || [], k.errors) : h.loaderData,
			U = h.blockers;
		U.size > 0 && (U = new Map(U), U.forEach((he, $e) => U.set($e, no)));
		let A = P === !0 || h.navigation.formMethod != null && Rt(h.navigation.formMethod) && ((z = x.state) == null ? void 0 : z._isRedirect) !== !0;
		a && (l = a, a = void 0), N || E === Pe.Pop || (E === Pe.Push ? e.history.push(x, x.state) : E === Pe.Replace && e.history.replace(x, x.state)), ee(me({}, k, {
			actionData: W,
			loaderData: H,
			historyAction: E,
			location: x,
			initialized: !0,
			navigation: _a,
			revalidation: "idle",
			restoreScrollPosition: Jc(x, k.matches || h.matches),
			preventScrollReset: A,
			blockers: U
		})), E = Pe.Pop, P = !1, N = !1, $ = !1, M = [], J = []
	}
	async function Je(x, k) {
		if (typeof x == "number") {
			e.history.go(x);
			return
		}
		let R = cu(h.location, h.matches, u, s.v7_prependBasename, x, k == null ? void 0 : k.fromRouteId, k == null ? void 0 : k.relative),
			{
				path: z,
				submission: V,
				error: W
			} = lf(s.v7_normalizeFormMethod, !1, R, k),
			H = h.location,
			U = No(h.location, z, k && k.state);
		U = me({}, U, e.history.encodeLocation(U));
		let A = k && k.replace != null ? k.replace : void 0,
			he = Pe.Push;
		A === !0 ? he = Pe.Replace : A === !1 || V != null && Rt(V.formMethod) && V.formAction === h.location.pathname + h.location.search && (he = Pe.Replace);
		let $e = k && "preventScrollReset" in k ? k.preventScrollReset === !0 : void 0,
			Z = Gc({
				currentLocation: H,
				nextLocation: U,
				historyAction: he
			});
		if (Z) {
			ai(Z, {
				state: "blocked",
				location: U,
				proceed() {
					ai(Z, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: U
					}), Je(x, k)
				},
				reset() {
					let ae = new Map(h.blockers);
					ae.set(Z, no), ee({
						blockers: ae
					})
				}
			});
			return
		}
		return await qe(he, U, {
			submission: V,
			pendingError: W,
			preventScrollReset: $e,
			replace: k && k.replace
		})
	}

	function Kt() {
		if (_e(), ee({
				revalidation: "loading"
			}), h.navigation.state !== "submitting") {
			if (h.navigation.state === "idle") {
				qe(h.historyAction, h.location, {
					startUninterruptedRevalidation: !0
				});
				return
			}
			qe(E || h.historyAction, h.navigation.location, {
				overrideNavigation: h.navigation
			})
		}
	}
	async function qe(x, k, R) {
		_ && _.abort(), _ = null, E = x, N = (R && R.startUninterruptedRevalidation) === !0, _v(h.location, h.matches), P = (R && R.preventScrollReset) === !0;
		let z = a || l,
			V = R && R.overrideNavigation,
			W = pr(z, k, u);
		if (!W) {
			let ae = mt(404, {
					pathname: k.pathname
				}),
				{
					matches: xe,
					route: An
				} = pf(z);
			ga(), Ie(k, {
				matches: xe,
				loaderData: {},
				errors: {
					[An.id]: ae
				}
			});
			return
		}
		if (h.initialized && !$ && Dy(h.location, k) && !(R && R.submission && Rt(R.submission.formMethod))) {
			Ie(k, {
				matches: W
			});
			return
		}
		_ = new AbortController;
		let H = oo(e.history, k, _.signal, R && R.submission),
			U, A;
		if (R && R.pendingError) A = {
			[hr(W).route.id]: R.pendingError
		};
		else if (R && R.submission && Rt(R.submission.formMethod)) {
			let ae = await ii(H, k, R.submission, W, {
				replace: R.replace
			});
			if (ae.shortCircuited) return;
			U = ae.pendingActionData, A = ae.pendingActionError, V = Ra(k, R.submission), H = new Request(H.url, {
				signal: H.signal
			})
		}
		let {
			shortCircuited: he,
			loaderData: $e,
			errors: Z
		} = await va(H, k, W, V, R && R.submission, R && R.fetcherSubmission, R && R.replace, U, A);
		he || (_ = null, Ie(k, me({
			matches: W
		}, U ? {
			actionData: U
		} : {}, {
			loaderData: $e,
			errors: Z
		})))
	}
	async function ii(x, k, R, z, V) {
		V === void 0 && (V = {}), _e();
		let W = Ay(k, R);
		ee({
			navigation: W
		});
		let H, U = du(z, k);
		if (!U.route.action && !U.route.lazy) H = {
			type: Ee.error,
			error: mt(405, {
				method: x.method,
				pathname: k.pathname,
				routeId: U.route.id
			})
		};
		else if (H = await ro("action", x, U, z, i, o, u), x.signal.aborted) return {
			shortCircuited: !0
		};
		if (Rr(H)) {
			let A;
			return V && V.replace != null ? A = V.replace : A = H.location === h.location.pathname + h.location.search, await B(h, H, {
				submission: R,
				replace: A
			}), {
				shortCircuited: !0
			}
		}
		if (So(H)) {
			let A = hr(z, U.route.id);
			return (V && V.replace) !== !0 && (E = Pe.Push), {
				pendingActionData: {},
				pendingActionError: {
					[A.route.id]: H.error
				}
			}
		}
		if (Hn(H)) throw mt(400, {
			type: "defer-action"
		});
		return {
			pendingActionData: {
				[U.route.id]: H.data
			}
		}
	}
	async function va(x, k, R, z, V, W, H, U, A) {
		let he = z || Ra(k, V),
			$e = V || W || vf(he),
			Z = a || l,
			[ae, xe] = af(e.history, h, R, $e, k, $, M, J, q, G, Z, u, U, A);
		if (ga(oe => !(R && R.some(Pt => Pt.route.id === oe)) || ae && ae.some(Pt => Pt.route.id === oe)), He = ++Se, ae.length === 0 && xe.length === 0) {
			let oe = Kc();
			return Ie(k, me({
				matches: R,
				loaderData: {},
				errors: A || null
			}, U ? {
				actionData: U
			} : {}, oe ? {
				fetchers: new Map(h.fetchers)
			} : {})), {
				shortCircuited: !0
			}
		}
		if (!N) {
			xe.forEach(Pt => {
				let fn = h.fetchers.get(Pt.key),
					ka = io(void 0, fn ? fn.data : void 0);
				h.fetchers.set(Pt.key, ka)
			});
			let oe = U || h.actionData;
			ee(me({
				navigation: he
			}, oe ? Object.keys(oe).length === 0 ? {
				actionData: null
			} : {
				actionData: oe
			} : {}, xe.length > 0 ? {
				fetchers: new Map(h.fetchers)
			} : {}))
		}
		xe.forEach(oe => {
			K.has(oe.key) && it(oe.key), oe.controller && K.set(oe.key, oe.controller)
		});
		let An = () => xe.forEach(oe => it(oe.key));
		_ && _.signal.addEventListener("abort", An);
		let {
			results: Un,
			loaderResults: eo,
			fetcherResults: wa
		} = await se(h.matches, R, ae, xe, x);
		if (x.signal.aborted) return {
			shortCircuited: !0
		};
		_ && _.signal.removeEventListener("abort", An), xe.forEach(oe => K.delete(oe.key));
		let Qt = hf(Un);
		if (Qt) {
			if (Qt.idx >= ae.length) {
				let oe = xe[Qt.idx - ae.length].key;
				G.add(oe)
			}
			return await B(h, Qt.result, {
				replace: H
			}), {
				shortCircuited: !0
			}
		}
		let {
			loaderData: Yt,
			errors: ui
		} = ff(h, R, ae, eo, A, xe, wa, b);
		b.forEach((oe, Pt) => {
			oe.subscribe(fn => {
				(fn || oe.done) && b.delete(Pt)
			})
		});
		let Sa = Kc(),
			xa = Qc(He),
			Ea = Sa || xa || xe.length > 0;
		return me({
			loaderData: Yt,
			errors: ui
		}, Ea ? {
			fetchers: new Map(h.fetchers)
		} : {})
	}

	function qr(x) {
		return h.fetchers.get(x) || Oy
	}

	function ya(x, k, R, z) {
		if (r) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
		K.has(x) && it(x);
		let V = a || l,
			W = cu(h.location, h.matches, u, s.v7_prependBasename, R, k, z == null ? void 0 : z.relative),
			H = pr(V, W, u);
		if (!H) {
			Ke(x, k, mt(404, {
				pathname: W
			}));
			return
		}
		let {
			path: U,
			submission: A,
			error: he
		} = lf(s.v7_normalizeFormMethod, !0, W, z);
		if (he) {
			Ke(x, k, he);
			return
		}
		let $e = du(H, U);
		if (P = (z && z.preventScrollReset) === !0, A && Rt(A.formMethod)) {
			Zr(x, k, U, $e, H, A);
			return
		}
		q.set(x, {
			routeId: k,
			path: U
		}), Dt(x, k, U, $e, H, A)
	}
	async function Zr(x, k, R, z, V, W) {
		if (_e(), q.delete(x), !z.route.action && !z.route.lazy) {
			let Re = mt(405, {
				method: W.formMethod,
				pathname: R,
				routeId: k
			});
			Ke(x, k, Re);
			return
		}
		let H = h.fetchers.get(x),
			U = Uy(W, H);
		h.fetchers.set(x, U), ee({
			fetchers: new Map(h.fetchers)
		});
		let A = new AbortController,
			he = oo(e.history, R, A.signal, W);
		K.set(x, A);
		let $e = Se,
			Z = await ro("action", he, z, V, i, o, u);
		if (he.signal.aborted) {
			K.get(x) === A && K.delete(x);
			return
		}
		if (Rr(Z))
			if (K.delete(x), He > $e) {
				let Re = dr(void 0);
				h.fetchers.set(x, Re), ee({
					fetchers: new Map(h.fetchers)
				});
				return
			} else {
				G.add(x);
				let Re = io(W);
				return h.fetchers.set(x, Re), ee({
					fetchers: new Map(h.fetchers)
				}), B(h, Z, {
					fetcherSubmission: W
				})
			} if (So(Z)) {
			Ke(x, k, Z.error);
			return
		}
		if (Hn(Z)) throw mt(400, {
			type: "defer-action"
		});
		let ae = h.navigation.location || h.location,
			xe = oo(e.history, ae, A.signal),
			An = a || l,
			Un = h.navigation.state !== "idle" ? pr(An, h.navigation.location, u) : h.matches;
		Q(Un, "Didn't find any matches after fetcher action");
		let eo = ++Se;
		F.set(x, eo);
		let wa = io(W, Z.data);
		h.fetchers.set(x, wa);
		let [Qt, Yt] = af(e.history, h, Un, W, ae, $, M, J, q, G, An, u, {
			[z.route.id]: Z.data
		}, void 0);
		Yt.filter(Re => Re.key !== x).forEach(Re => {
			let to = Re.key,
				qc = h.fetchers.get(to),
				Ov = io(void 0, qc ? qc.data : void 0);
			h.fetchers.set(to, Ov), K.has(to) && it(to), Re.controller && K.set(to, Re.controller)
		}), ee({
			fetchers: new Map(h.fetchers)
		});
		let ui = () => Yt.forEach(Re => it(Re.key));
		A.signal.addEventListener("abort", ui);
		let {
			results: Sa,
			loaderResults: xa,
			fetcherResults: Ea
		} = await se(h.matches, Un, Qt, Yt, xe);
		if (A.signal.aborted) return;
		A.signal.removeEventListener("abort", ui), F.delete(x), K.delete(x), Yt.forEach(Re => K.delete(Re.key));
		let oe = hf(Sa);
		if (oe) {
			if (oe.idx >= Qt.length) {
				let Re = Yt[oe.idx - Qt.length].key;
				G.add(Re)
			}
			return B(h, oe.result)
		}
		let {
			loaderData: Pt,
			errors: fn
		} = ff(h, h.matches, Qt, xa, void 0, Yt, Ea, b);
		if (h.fetchers.has(x)) {
			let Re = dr(Z.data);
			h.fetchers.set(x, Re)
		}
		let ka = Qc(eo);
		h.navigation.state === "loading" && eo > He ? (Q(E, "Expected pending action"), _ && _.abort(), Ie(h.navigation.location, {
			matches: Un,
			loaderData: Pt,
			errors: fn,
			fetchers: new Map(h.fetchers)
		})) : (ee(me({
			errors: fn,
			loaderData: df(h.loaderData, Pt, Un, fn)
		}, ka || Yt.length > 0 ? {
			fetchers: new Map(h.fetchers)
		} : {})), $ = !1)
	}
	async function Dt(x, k, R, z, V, W) {
		let H = h.fetchers.get(x),
			U = io(W, H ? H.data : void 0);
		h.fetchers.set(x, U), ee({
			fetchers: new Map(h.fetchers)
		});
		let A = new AbortController,
			he = oo(e.history, R, A.signal);
		K.set(x, A);
		let $e = Se,
			Z = await ro("loader", he, z, V, i, o, u);
		if (Hn(Z) && (Z = await _p(Z, he.signal, !0) || Z), K.get(x) === A && K.delete(x), he.signal.aborted) return;
		if (Rr(Z))
			if (He > $e) {
				let xe = dr(void 0);
				h.fetchers.set(x, xe), ee({
					fetchers: new Map(h.fetchers)
				});
				return
			} else {
				G.add(x), await B(h, Z);
				return
			} if (So(Z)) {
			let xe = hr(h.matches, k);
			h.fetchers.delete(x), ee({
				fetchers: new Map(h.fetchers),
				errors: {
					[xe.route.id]: Z.error
				}
			});
			return
		}
		Q(!Hn(Z), "Unhandled fetcher deferred data");
		let ae = dr(Z.data);
		h.fetchers.set(x, ae), ee({
			fetchers: new Map(h.fetchers)
		})
	}
	async function B(x, k, R) {
		let {
			submission: z,
			fetcherSubmission: V,
			replace: W
		} = R === void 0 ? {} : R;
		k.revalidate && ($ = !0);
		let H = No(x.location, k.location, {
			_isRedirect: !0
		});
		if (Q(H, "Expected a location on the redirect navigation"), n) {
			let ae = !1;
			if (k.reloadDocument) ae = !0;
			else if (kp.test(k.location)) {
				const xe = e.history.createURL(k.location);
				ae = xe.origin !== t.location.origin || Yr(xe.pathname, u) == null
			}
			if (ae) {
				W ? t.location.replace(k.location) : t.location.assign(k.location);
				return
			}
		}
		_ = null;
		let U = W === !0 ? Pe.Replace : Pe.Push,
			{
				formMethod: A,
				formAction: he,
				formEncType: $e
			} = x.navigation;
		!z && !V && A && he && $e && (z = vf(x.navigation));
		let Z = z || V;
		if (Ry.has(k.status) && Z && Rt(Z.formMethod)) await qe(U, H, {
			submission: me({}, Z, {
				formAction: k.location
			}),
			preventScrollReset: P
		});
		else {
			let ae = Ra(H, z);
			await qe(U, H, {
				overrideNavigation: ae,
				fetcherSubmission: V,
				preventScrollReset: P
			})
		}
	}
	async function se(x, k, R, z, V) {
		let W = await Promise.all([...R.map(A => ro("loader", V, A, k, i, o, u)), ...z.map(A => A.matches && A.match && A.controller ? ro("loader", oo(e.history, A.path, A.controller.signal), A.match, A.matches, i, o, u) : {
				type: Ee.error,
				error: mt(404, {
					pathname: A.path
				})
			})]),
			H = W.slice(0, R.length),
			U = W.slice(R.length);
		return await Promise.all([mf(x, R, H, H.map(() => V.signal), !1, h.loaderData), mf(x, z.map(A => A.match), U, z.map(A => A.controller ? A.controller.signal : null), !0)]), {
			results: W,
			loaderResults: H,
			fetcherResults: U
		}
	}

	function _e() {
		$ = !0, M.push(...ga()), q.forEach((x, k) => {
			K.has(k) && (J.push(k), it(k))
		})
	}

	function Ke(x, k, R) {
		let z = hr(h.matches, k);
		Ze(x), ee({
			errors: {
				[z.route.id]: R
			},
			fetchers: new Map(h.fetchers)
		})
	}

	function Ze(x) {
		let k = h.fetchers.get(x);
		K.has(x) && !(k && k.state === "loading" && F.has(x)) && it(x), q.delete(x), F.delete(x), G.delete(x), h.fetchers.delete(x)
	}

	function it(x) {
		let k = K.get(x);
		Q(k, "Expected fetch controller: " + x), k.abort(), K.delete(x)
	}

	function li(x) {
		for (let k of x) {
			let R = qr(k),
				z = dr(R.data);
			h.fetchers.set(k, z)
		}
	}

	function Kc() {
		let x = [],
			k = !1;
		for (let R of G) {
			let z = h.fetchers.get(R);
			Q(z, "Expected fetcher: " + R), z.state === "loading" && (G.delete(R), x.push(R), k = !0)
		}
		return li(x), k
	}

	function Qc(x) {
		let k = [];
		for (let [R, z] of F)
			if (z < x) {
				let V = h.fetchers.get(R);
				Q(V, "Expected fetcher: " + R), V.state === "loading" && (it(R), F.delete(R), k.push(R))
			} return li(k), k.length > 0
	}

	function Pv(x, k) {
		let R = h.blockers.get(x) || no;
		return L.get(x) !== k && L.set(x, k), R
	}

	function Yc(x) {
		h.blockers.delete(x), L.delete(x)
	}

	function ai(x, k) {
		let R = h.blockers.get(x) || no;
		Q(R.state === "unblocked" && k.state === "blocked" || R.state === "blocked" && k.state === "blocked" || R.state === "blocked" && k.state === "proceeding" || R.state === "blocked" && k.state === "unblocked" || R.state === "proceeding" && k.state === "unblocked", "Invalid blocker state transition: " + R.state + " -> " + k.state);
		let z = new Map(h.blockers);
		z.set(x, k), ee({
			blockers: z
		})
	}

	function Gc(x) {
		let {
			currentLocation: k,
			nextLocation: R,
			historyAction: z
		} = x;
		if (L.size === 0) return;
		L.size > 1 && Jn(!1, "A router only supports one blocker at a time");
		let V = Array.from(L.entries()),
			[W, H] = V[V.length - 1],
			U = h.blockers.get(W);
		if (!(U && U.state === "proceeding") && H({
				currentLocation: k,
				nextLocation: R,
				historyAction: z
			})) return W
	}

	function ga(x) {
		let k = [];
		return b.forEach((R, z) => {
			(!x || x(z)) && (R.cancel(), k.push(z), b.delete(z))
		}), k
	}

	function Cv(x, k, R) {
		if (p = x, w = k, g = R || null, !v && h.navigation === _a) {
			v = !0;
			let z = Jc(h.location, h.matches);
			z != null && ee({
				restoreScrollPosition: z
			})
		}
		return () => {
			p = null, w = null, g = null
		}
	}

	function Xc(x, k) {
		return g && g(x, k.map(z => ry(z, h.loaderData))) || x.key
	}

	function _v(x, k) {
		if (p && w) {
			let R = Xc(x, k);
			p[R] = w()
		}
	}

	function Jc(x, k) {
		if (p) {
			let R = Xc(x, k),
				z = p[R];
			if (typeof z == "number") return z
		}
		return null
	}

	function Rv(x) {
		i = {}, a = su(x, o, void 0, i)
	}
	return y = {
		get basename() {
			return u
		},
		get state() {
			return h
		},
		get routes() {
			return l
		},
		initialize: le,
		subscribe: Ht,
		enableScrollRestoration: Cv,
		navigate: Je,
		fetch: ya,
		revalidate: Kt,
		createHref: x => e.history.createHref(x),
		encodeLocation: x => e.history.encodeLocation(x),
		getFetcher: qr,
		deleteFetcher: Ze,
		dispose: re,
		getBlocker: Pv,
		deleteBlocker: Yc,
		_internalFetchControllers: K,
		_internalActiveDeferreds: b,
		_internalSetRoutes: Rv
	}, y
}

function Ny(e) {
	return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0)
}

function cu(e, t, n, r, o, i, l) {
	let a, u;
	if (i != null && l !== "path") {
		a = [];
		for (let c of t)
			if (a.push(c), c.route.id === i) {
				u = c;
				break
			}
	} else a = t, u = t[t.length - 1];
	let s = Rs(o || ".", _l(a).map(c => c.pathnameBase), Yr(e.pathname, n) || e.pathname, l === "path");
	return o == null && (s.search = e.search, s.hash = e.hash), (o == null || o === "" || o === ".") && u && u.route.index && !js(s.search) && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r && n !== "/" && (s.pathname = s.pathname === "/" ? n : tn([n, s.pathname])), qn(s)
}

function lf(e, t, n, r) {
	if (!r || !Ny(r)) return {
		path: n
	};
	if (r.formMethod && !$y(r.formMethod)) return {
		path: n,
		error: mt(405, {
			method: r.formMethod
		})
	};
	let o = () => ({
			path: n,
			error: mt(400, {
				type: "invalid-body"
			})
		}),
		i = r.formMethod || "get",
		l = e ? i.toUpperCase() : i.toLowerCase(),
		a = Cp(n);
	if (r.body !== void 0) {
		if (r.formEncType === "text/plain") {
			if (!Rt(l)) return o();
			let p = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((g, w) => {
				let [v, S] = w;
				return "" + g + v + "=" + S + `
`
			}, "") : String(r.body);
			return {
				path: n,
				submission: {
					formMethod: l,
					formAction: a,
					formEncType: r.formEncType,
					formData: void 0,
					json: void 0,
					text: p
				}
			}
		} else if (r.formEncType === "application/json") {
			if (!Rt(l)) return o();
			try {
				let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
				return {
					path: n,
					submission: {
						formMethod: l,
						formAction: a,
						formEncType: r.formEncType,
						formData: void 0,
						json: p,
						text: void 0
					}
				}
			} catch {
				return o()
			}
		}
	}
	Q(typeof FormData == "function", "FormData is not available in this environment");
	let u, s;
	if (r.formData) u = fu(r.formData), s = r.formData;
	else if (r.body instanceof FormData) u = fu(r.body), s = r.body;
	else if (r.body instanceof URLSearchParams) u = r.body, s = cf(u);
	else if (r.body == null) u = new URLSearchParams, s = new FormData;
	else try {
		u = new URLSearchParams(r.body), s = cf(u)
	} catch {
		return o()
	}
	let c = {
		formMethod: l,
		formAction: a,
		formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
		formData: s,
		json: void 0,
		text: void 0
	};
	if (Rt(c.formMethod)) return {
		path: n,
		submission: c
	};
	let d = Wt(n);
	return t && d.search && js(d.search) && u.append("index", ""), d.search = "?" + u, {
		path: qn(d),
		submission: c
	}
}

function Ty(e, t) {
	let n = e;
	if (t) {
		let r = e.findIndex(o => o.route.id === t);
		r >= 0 && (n = e.slice(0, r))
	}
	return n
}

function af(e, t, n, r, o, i, l, a, u, s, c, d, p, g) {
	let w = g ? Object.values(g)[0] : p ? Object.values(p)[0] : void 0,
		v = e.createURL(t.location),
		S = e.createURL(o),
		m = g ? Object.keys(g)[0] : void 0,
		y = Ty(n, m).filter((E, P) => {
			if (E.route.lazy) return !0;
			if (E.route.loader == null) return !1;
			if (My(t.loaderData, t.matches[P], E) || l.some($ => $ === E.route.id)) return !0;
			let _ = t.matches[P],
				N = E;
			return uf(E, me({
				currentUrl: v,
				currentParams: _.params,
				nextUrl: S,
				nextParams: N.params
			}, r, {
				actionResult: w,
				defaultShouldRevalidate: i || v.pathname + v.search === S.pathname + S.search || v.search !== S.search || Pp(_, N)
			}))
		}),
		h = [];
	return u.forEach((E, P) => {
		if (!n.some(J => J.route.id === E.routeId)) return;
		let _ = pr(c, E.path, d);
		if (!_) {
			h.push({
				key: P,
				routeId: E.routeId,
				path: E.path,
				matches: null,
				match: null,
				controller: null
			});
			return
		}
		let N = t.fetchers.get(P),
			$ = du(_, E.path),
			M = !1;
		s.has(P) ? M = !1 : a.includes(P) ? M = !0 : N && N.state !== "idle" && N.data === void 0 ? M = i : M = uf($, me({
			currentUrl: v,
			currentParams: t.matches[t.matches.length - 1].params,
			nextUrl: S,
			nextParams: n[n.length - 1].params
		}, r, {
			actionResult: w,
			defaultShouldRevalidate: i
		})), M && h.push({
			key: P,
			routeId: E.routeId,
			path: E.path,
			matches: _,
			match: $,
			controller: new AbortController
		})
	}), [y, h]
}

function My(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		o = e[n.route.id] === void 0;
	return r || o
}

function Pp(e, t) {
	let n = e.route.path;
	return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}

function uf(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n
	}
	return t.defaultShouldRevalidate
}
async function sf(e, t, n) {
	if (!e.lazy) return;
	let r = await e.lazy();
	if (!e.lazy) return;
	let o = n[e.id];
	Q(o, "No route found in manifest");
	let i = {};
	for (let l in r) {
		let u = o[l] !== void 0 && l !== "hasErrorBoundary";
		Jn(!u, 'Route "' + o.id + '" has a static property "' + l + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + l + '" will be ignored.')), !u && !ty.has(l) && (i[l] = r[l])
	}
	Object.assign(o, i), Object.assign(o, me({}, t(o), {
		lazy: void 0
	}))
}
async function ro(e, t, n, r, o, i, l, a) {
	a === void 0 && (a = {});
	let u, s, c, d = w => {
		let v, S = new Promise((m, f) => v = f);
		return c = () => v(), t.signal.addEventListener("abort", c), Promise.race([w({
			request: t,
			params: n.params,
			context: a.requestContext
		}), S])
	};
	try {
		let w = n.route[e];
		if (n.route.lazy)
			if (w) {
				let v, S = await Promise.all([d(w).catch(m => {
					v = m
				}), sf(n.route, i, o)]);
				if (v) throw v;
				s = S[0]
			} else if (await sf(n.route, i, o), w = n.route[e], w) s = await d(w);
		else if (e === "action") {
			let v = new URL(t.url),
				S = v.pathname + v.search;
			throw mt(405, {
				method: t.method,
				pathname: S,
				routeId: n.route.id
			})
		} else return {
			type: Ee.data,
			data: void 0
		};
		else if (w) s = await d(w);
		else {
			let v = new URL(t.url),
				S = v.pathname + v.search;
			throw mt(404, {
				pathname: S
			})
		}
		Q(s !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
	} catch (w) {
		u = Ee.error, s = w
	} finally {
		c && t.signal.removeEventListener("abort", c)
	}
	if (Iy(s)) {
		let w = s.status;
		if (_y.has(w)) {
			let m = s.headers.get("Location");
			if (Q(m, "Redirects returned/thrown from loaders/actions must have a Location header"), !kp.test(m)) m = cu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, m);
			else if (!a.isStaticRequest) {
				let f = new URL(t.url),
					y = m.startsWith("//") ? new URL(f.protocol + m) : new URL(m),
					h = Yr(y.pathname, l) != null;
				y.origin === f.origin && h && (m = y.pathname + y.search + y.hash)
			}
			if (a.isStaticRequest) throw s.headers.set("Location", m), s;
			return {
				type: Ee.redirect,
				status: w,
				location: m,
				revalidate: s.headers.get("X-Remix-Revalidate") !== null,
				reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null
			}
		}
		if (a.isRouteRequest) throw {
			type: u === Ee.error ? Ee.error : Ee.data,
			response: s
		};
		let v, S = s.headers.get("Content-Type");
		return S && /\bapplication\/json\b/.test(S) ? v = await s.json() : v = await s.text(), u === Ee.error ? {
			type: u,
			error: new Os(w, s.statusText, v),
			headers: s.headers
		} : {
			type: Ee.data,
			data: v,
			statusCode: s.status,
			headers: s.headers
		}
	}
	if (u === Ee.error) return {
		type: u,
		error: s
	};
	if (Ly(s)) {
		var p, g;
		return {
			type: Ee.deferred,
			deferredData: s,
			statusCode: (p = s.init) == null ? void 0 : p.status,
			headers: ((g = s.init) == null ? void 0 : g.headers) && new Headers(s.init.headers)
		}
	}
	return {
		type: Ee.data,
		data: s
	}
}

function oo(e, t, n, r) {
	let o = e.createURL(Cp(t)).toString(),
		i = {
			signal: n
		};
	if (r && Rt(r.formMethod)) {
		let {
			formMethod: l,
			formEncType: a
		} = r;
		i.method = l.toUpperCase(), a === "application/json" ? (i.headers = new Headers({
			"Content-Type": a
		}), i.body = JSON.stringify(r.json)) : a === "text/plain" ? i.body = r.text : a === "application/x-www-form-urlencoded" && r.formData ? i.body = fu(r.formData) : i.body = r.formData
	}
	return new Request(o, i)
}

function fu(e) {
	let t = new URLSearchParams;
	for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
	return t
}

function cf(e) {
	let t = new FormData;
	for (let [n, r] of e.entries()) t.append(n, r);
	return t
}

function zy(e, t, n, r, o) {
	let i = {},
		l = null,
		a, u = !1,
		s = {};
	return n.forEach((c, d) => {
		let p = t[d].route.id;
		if (Q(!Rr(c), "Cannot handle redirect results in processLoaderData"), So(c)) {
			let g = hr(e, p),
				w = c.error;
			r && (w = Object.values(r)[0], r = void 0), l = l || {}, l[g.route.id] == null && (l[g.route.id] = w), i[p] = void 0, u || (u = !0, a = xp(c.error) ? c.error.status : 500), c.headers && (s[p] = c.headers)
		} else Hn(c) ? (o.set(p, c.deferredData), i[p] = c.deferredData.data) : i[p] = c.data, c.statusCode != null && c.statusCode !== 200 && !u && (a = c.statusCode), c.headers && (s[p] = c.headers)
	}), r && (l = r, i[Object.keys(r)[0]] = void 0), {
		loaderData: i,
		errors: l,
		statusCode: a || 200,
		loaderHeaders: s
	}
}

function ff(e, t, n, r, o, i, l, a) {
	let {
		loaderData: u,
		errors: s
	} = zy(t, n, r, o, a);
	for (let c = 0; c < i.length; c++) {
		let {
			key: d,
			match: p,
			controller: g
		} = i[c];
		Q(l !== void 0 && l[c] !== void 0, "Did not find corresponding fetcher result");
		let w = l[c];
		if (!(g && g.signal.aborted))
			if (So(w)) {
				let v = hr(e.matches, p == null ? void 0 : p.route.id);
				s && s[v.route.id] || (s = me({}, s, {
					[v.route.id]: w.error
				})), e.fetchers.delete(d)
			} else if (Rr(w)) Q(!1, "Unhandled fetcher revalidation redirect");
		else if (Hn(w)) Q(!1, "Unhandled fetcher deferred data");
		else {
			let v = dr(w.data);
			e.fetchers.set(d, v)
		}
	}
	return {
		loaderData: u,
		errors: s
	}
}

function df(e, t, n, r) {
	let o = me({}, t);
	for (let i of n) {
		let l = i.route.id;
		if (t.hasOwnProperty(l) ? t[l] !== void 0 && (o[l] = t[l]) : e[l] !== void 0 && i.route.loader && (o[l] = e[l]), r && r.hasOwnProperty(l)) break
	}
	return o
}

function hr(e, t) {
	return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}

function pf(e) {
	let t = e.find(n => n.index || !n.path || n.path === "/") || {
		id: "__shim-error-route__"
	};
	return {
		matches: [{
			params: {},
			pathname: "",
			pathnameBase: "",
			route: t
		}],
		route: t
	}
}

function mt(e, t) {
	let {
		pathname: n,
		routeId: r,
		method: o,
		type: i
	} = t === void 0 ? {} : t, l = "Unknown Server Error", a = "Unknown @remix-run/router error";
	return e === 400 ? (l = "Bad Request", o && n && r ? a = "You made a " + o + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : i === "defer-action" ? a = "defer() is not supported in actions" : i === "invalid-body" && (a = "Unable to encode submission body")) : e === 403 ? (l = "Forbidden", a = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (l = "Not Found", a = 'No route matches URL "' + n + '"') : e === 405 && (l = "Method Not Allowed", o && n && r ? a = "You made a " + o.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : o && (a = 'Invalid request method "' + o.toUpperCase() + '"')), new Os(e || 500, l, new Error(a), !0)
}

function hf(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (Rr(n)) return {
			result: n,
			idx: t
		}
	}
}

function Cp(e) {
	let t = typeof e == "string" ? Wt(e) : e;
	return qn(me({}, t, {
		hash: ""
	}))
}

function Dy(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}

function Hn(e) {
	return e.type === Ee.deferred
}

function So(e) {
	return e.type === Ee.error
}

function Rr(e) {
	return (e && e.type) === Ee.redirect
}

function Ly(e) {
	let t = e;
	return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}

function Iy(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}

function $y(e) {
	return Cy.has(e.toLowerCase())
}

function Rt(e) {
	return ky.has(e.toLowerCase())
}
async function mf(e, t, n, r, o, i) {
	for (let l = 0; l < n.length; l++) {
		let a = n[l],
			u = t[l];
		if (!u) continue;
		let s = e.find(d => d.route.id === u.route.id),
			c = s != null && !Pp(s, u) && (i && i[u.route.id]) !== void 0;
		if (Hn(a) && (o || c)) {
			let d = r[l];
			Q(d, "Expected an AbortSignal for revalidating fetcher deferred result"), await _p(a, d, o).then(p => {
				p && (n[l] = p || n[l])
			})
		}
	}
}
async function _p(e, t, n) {
	if (n === void 0 && (n = !1), !await e.deferredData.resolveData(t)) {
		if (n) try {
			return {
				type: Ee.data,
				data: e.deferredData.unwrappedData
			}
		} catch (o) {
			return {
				type: Ee.error,
				error: o
			}
		}
		return {
			type: Ee.data,
			data: e.deferredData.data
		}
	}
}

function js(e) {
	return new URLSearchParams(e).getAll("index").some(t => t === "")
}

function du(e, t) {
	let n = typeof t == "string" ? Wt(t).search : t.search;
	if (e[e.length - 1].route.index && js(n || "")) return e[e.length - 1];
	let r = _l(e);
	return r[r.length - 1]
}

function vf(e) {
	let {
		formMethod: t,
		formAction: n,
		formEncType: r,
		text: o,
		formData: i,
		json: l
	} = e;
	if (!(!t || !n || !r)) {
		if (o != null) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: void 0,
			json: void 0,
			text: o
		};
		if (i != null) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: i,
			json: void 0,
			text: void 0
		};
		if (l !== void 0) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: void 0,
			json: l,
			text: void 0
		}
	}
}

function Ra(e, t) {
	return t ? {
		state: "loading",
		location: e,
		formMethod: t.formMethod,
		formAction: t.formAction,
		formEncType: t.formEncType,
		formData: t.formData,
		json: t.json,
		text: t.text
	} : {
		state: "loading",
		location: e,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0
	}
}

function Ay(e, t) {
	return {
		state: "submitting",
		location: e,
		formMethod: t.formMethod,
		formAction: t.formAction,
		formEncType: t.formEncType,
		formData: t.formData,
		json: t.json,
		text: t.text
	}
}

function io(e, t) {
	return e ? {
		state: "loading",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t
	} : {
		state: "loading",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: t
	}
}

function Uy(e, t) {
	return {
		state: "submitting",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0
	}
}

function dr(e) {
	return {
		state: "idle",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e
	}
}
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Vi() {
	return Vi = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, Vi.apply(this, arguments)
}
const Rl = C.createContext(null),
	bs = C.createContext(null),
	ar = C.createContext(null),
	Ol = C.createContext(null),
	Dn = C.createContext({
		outlet: null,
		matches: [],
		isDataRoute: !1
	}),
	Rp = C.createContext(null);

function Fy(e, t) {
	let {
		relative: n
	} = t === void 0 ? {} : t;
	Zo() || Q(!1);
	let {
		basename: r,
		navigator: o
	} = C.useContext(ar), {
		hash: i,
		pathname: l,
		search: a
	} = Ts(e, {
		relative: n
	}), u = l;
	return r !== "/" && (u = l === "/" ? r : tn([r, l])), o.createHref({
		pathname: u,
		search: a,
		hash: i
	})
}

function Zo() {
	return C.useContext(Ol) != null
}

function ei() {
	return Zo() || Q(!1), C.useContext(Ol).location
}

function Op(e) {
	C.useContext(ar).static || C.useLayoutEffect(e)
}

function jp() {
	let {
		isDataRoute: e
	} = C.useContext(Dn);
	return e ? Zy() : By()
}

function By() {
	Zo() || Q(!1);
	let e = C.useContext(Rl),
		{
			basename: t,
			navigator: n
		} = C.useContext(ar),
		{
			matches: r
		} = C.useContext(Dn),
		{
			pathname: o
		} = ei(),
		i = JSON.stringify(_l(r).map(u => u.pathnameBase)),
		l = C.useRef(!1);
	return Op(() => {
		l.current = !0
	}), C.useCallback(function(u, s) {
		if (s === void 0 && (s = {}), !l.current) return;
		if (typeof u == "number") {
			n.go(u);
			return
		}
		let c = Rs(u, JSON.parse(i), o, s.relative === "path");
		e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : tn([t, c.pathname])), (s.replace ? n.replace : n.push)(c, s.state, s)
	}, [t, n, i, o, e])
}

function Ns() {
	let {
		matches: e
	} = C.useContext(Dn), t = e[e.length - 1];
	return t ? t.params : {}
}

function Ts(e, t) {
	let {
		relative: n
	} = t === void 0 ? {} : t, {
		matches: r
	} = C.useContext(Dn), {
		pathname: o
	} = ei(), i = JSON.stringify(_l(r).map(l => l.pathnameBase));
	return C.useMemo(() => Rs(e, JSON.parse(i), o, n === "path"), [e, i, o, n])
}

function Wy(e, t, n) {
	Zo() || Q(!1);
	let {
		navigator: r
	} = C.useContext(ar), {
		matches: o
	} = C.useContext(Dn), i = o[o.length - 1], l = i ? i.params : {};
	i && i.pathname;
	let a = i ? i.pathnameBase : "/";
	i && i.route;
	let u = ei(),
		s;
	if (t) {
		var c;
		let v = typeof t == "string" ? Wt(t) : t;
		a === "/" || (c = v.pathname) != null && c.startsWith(a) || Q(!1), s = v
	} else s = u;
	let d = s.pathname || "/",
		p = a === "/" ? d : d.slice(a.length) || "/",
		g = pr(e, {
			pathname: p
		}),
		w = Yy(g && g.map(v => Object.assign({}, v, {
			params: Object.assign({}, l, v.params),
			pathname: tn([a, r.encodeLocation ? r.encodeLocation(v.pathname).pathname : v.pathname]),
			pathnameBase: v.pathnameBase === "/" ? a : tn([a, r.encodeLocation ? r.encodeLocation(v.pathnameBase).pathname : v.pathnameBase])
		})), o, n);
	return t && w ? C.createElement(Ol.Provider, {
		value: {
			location: Vi({
				pathname: "/",
				search: "",
				hash: "",
				state: null,
				key: "default"
			}, s),
			navigationType: Pe.Pop
		}
	}, w) : w
}

function Vy() {
	let e = qy(),
		t = xp(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		o = {
			padding: "0.5rem",
			backgroundColor: "rgba(200,200,200, 0.5)"
		},
		i = null;
	return C.createElement(C.Fragment, null, C.createElement("h2", null, "Unexpected Application Error!"), C.createElement("h3", {
		style: {
			fontStyle: "italic"
		}
	}, t), n ? C.createElement("pre", {
		style: o
	}, n) : null, i)
}
const Hy = C.createElement(Vy, null);
class Ky extends C.Component {
	constructor(t) {
		super(t), this.state = {
			location: t.location,
			revalidation: t.revalidation,
			error: t.error
		}
	}
	static getDerivedStateFromError(t) {
		return {
			error: t
		}
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
			error: t.error,
			location: t.location,
			revalidation: t.revalidation
		} : {
			error: t.error || n.error,
			location: n.location,
			revalidation: t.revalidation || n.revalidation
		}
	}
	componentDidCatch(t, n) {
		console.error("React Router caught the following error during render", t, n)
	}
	render() {
		return this.state.error ? C.createElement(Dn.Provider, {
			value: this.props.routeContext
		}, C.createElement(Rp.Provider, {
			value: this.state.error,
			children: this.props.component
		})) : this.props.children
	}
}

function Qy(e) {
	let {
		routeContext: t,
		match: n,
		children: r
	} = e, o = C.useContext(Rl);
	return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), C.createElement(Dn.Provider, {
		value: t
	}, r)
}

function Yy(e, t, n) {
	var r;
	if (t === void 0 && (t = []), n === void 0 && (n = null), e == null) {
		var o;
		if ((o = n) != null && o.errors) e = n.matches;
		else return null
	}
	let i = e,
		l = (r = n) == null ? void 0 : r.errors;
	if (l != null) {
		let a = i.findIndex(u => u.route.id && (l == null ? void 0 : l[u.route.id]));
		a >= 0 || Q(!1), i = i.slice(0, Math.min(i.length, a + 1))
	}
	return i.reduceRight((a, u, s) => {
		let c = u.route.id ? l == null ? void 0 : l[u.route.id] : null,
			d = null;
		n && (d = u.route.errorElement || Hy);
		let p = t.concat(i.slice(0, s + 1)),
			g = () => {
				let w;
				return c ? w = d : u.route.Component ? w = C.createElement(u.route.Component, null) : u.route.element ? w = u.route.element : w = a, C.createElement(Qy, {
					match: u,
					routeContext: {
						outlet: a,
						matches: p,
						isDataRoute: n != null
					},
					children: w
				})
			};
		return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0) ? C.createElement(Ky, {
			location: n.location,
			revalidation: n.revalidation,
			component: d,
			error: c,
			children: g(),
			routeContext: {
				outlet: null,
				matches: p,
				isDataRoute: !0
			}
		}) : g()
	}, null)
}
var bp = function(e) {
		return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
	}(bp || {}),
	Hi = function(e) {
		return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
	}(Hi || {});

function Gy(e) {
	let t = C.useContext(Rl);
	return t || Q(!1), t
}

function Xy(e) {
	let t = C.useContext(bs);
	return t || Q(!1), t
}

function Jy(e) {
	let t = C.useContext(Dn);
	return t || Q(!1), t
}

function Np(e) {
	let t = Jy(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || Q(!1), n.route.id
}

function qy() {
	var e;
	let t = C.useContext(Rp),
		n = Xy(Hi.UseRouteError),
		r = Np(Hi.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[r])
}

function Zy() {
	let {
		router: e
	} = Gy(bp.UseNavigateStable), t = Np(Hi.UseNavigateStable), n = C.useRef(!1);
	return Op(() => {
		n.current = !0
	}), C.useCallback(function(o, i) {
		i === void 0 && (i = {}), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Vi({
			fromRouteId: t
		}, i)))
	}, [e, t])
}
const eg = "startTransition",
	yf = Hv[eg];

function tg(e) {
	let {
		fallbackElement: t,
		router: n,
		future: r
	} = e, [o, i] = C.useState(n.state), {
		v7_startTransition: l
	} = r || {}, a = C.useCallback(d => {
		l && yf ? yf(() => i(d)) : i(d)
	}, [i, l]);
	C.useLayoutEffect(() => n.subscribe(a), [n, a]);
	let u = C.useMemo(() => ({
			createHref: n.createHref,
			encodeLocation: n.encodeLocation,
			go: d => n.navigate(d),
			push: (d, p, g) => n.navigate(d, {
				state: p,
				preventScrollReset: g == null ? void 0 : g.preventScrollReset
			}),
			replace: (d, p, g) => n.navigate(d, {
				replace: !0,
				state: p,
				preventScrollReset: g == null ? void 0 : g.preventScrollReset
			})
		}), [n]),
		s = n.basename || "/",
		c = C.useMemo(() => ({
			router: n,
			navigator: u,
			static: !1,
			basename: s
		}), [n, u, s]);
	return C.createElement(C.Fragment, null, C.createElement(Rl.Provider, {
		value: c
	}, C.createElement(bs.Provider, {
		value: o
	}, C.createElement(rg, {
		basename: s,
		location: o.location,
		navigationType: o.historyAction,
		navigator: u
	}, o.initialized ? C.createElement(ng, {
		routes: n.routes,
		state: o
	}) : t))), null)
}

function ng(e) {
	let {
		routes: t,
		state: n
	} = e;
	return Wy(t, void 0, n)
}

function rg(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: o = Pe.Pop,
		navigator: i,
		static: l = !1
	} = e;
	Zo() && Q(!1);
	let a = t.replace(/^\/*/, "/"),
		u = C.useMemo(() => ({
			basename: a,
			navigator: i,
			static: l
		}), [a, i, l]);
	typeof r == "string" && (r = Wt(r));
	let {
		pathname: s = "/",
		search: c = "",
		hash: d = "",
		state: p = null,
		key: g = "default"
	} = r, w = C.useMemo(() => {
		let v = Yr(s, a);
		return v == null ? null : {
			location: {
				pathname: v,
				search: c,
				hash: d,
				state: p,
				key: g
			},
			navigationType: o
		}
	}, [a, s, c, d, p, g, o]);
	return w == null ? null : C.createElement(ar.Provider, {
		value: u
	}, C.createElement(Ol.Provider, {
		children: n,
		value: w
	}))
}
new Promise(() => {});

function og(e) {
	let t = {
		hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
	};
	return e.Component && Object.assign(t, {
		element: C.createElement(e.Component),
		Component: void 0
	}), e.ErrorBoundary && Object.assign(t, {
		errorElement: C.createElement(e.ErrorBoundary),
		ErrorBoundary: void 0
	}), t
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Lr() {
	return Lr = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, Lr.apply(this, arguments)
}

function Tp(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		o, i;
	for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
	return n
}

function ig(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function lg(e, t) {
	return e.button === 0 && (!t || t === "_self") && !ig(e)
}
const ag = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
	ug = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];

function sg(e, t) {
	return by({
		basename: t == null ? void 0 : t.basename,
		future: Lr({}, t == null ? void 0 : t.future, {
			v7_prependBasename: !0
		}),
		history: qv({
			window: t == null ? void 0 : t.window
		}),
		hydrationData: (t == null ? void 0 : t.hydrationData) || cg(),
		routes: e,
		mapRouteProperties: og
	}).initialize()
}

function cg() {
	var e;
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = Lr({}, t, {
		errors: fg(t.errors)
	})), t
}

function fg(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, o] of t)
		if (o && o.__type === "RouteErrorResponse") n[r] = new Os(o.status, o.statusText, o.data, o.internal === !0);
		else if (o && o.__type === "Error") {
		if (o.__subType) {
			let i = window[o.__subType];
			if (typeof i == "function") try {
				let l = new i(o.message);
				l.stack = "", n[r] = l
			} catch {}
		}
		if (n[r] == null) {
			let i = new Error(o.message);
			i.stack = "", n[r] = i
		}
	} else n[r] = o;
	return n
}
const dg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
	pg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	hg = C.forwardRef(function(t, n) {
		let {
			onClick: r,
			relative: o,
			reloadDocument: i,
			replace: l,
			state: a,
			target: u,
			to: s,
			preventScrollReset: c
		} = t, d = Tp(t, ag), {
			basename: p
		} = C.useContext(ar), g, w = !1;
		if (typeof s == "string" && pg.test(s) && (g = s, dg)) try {
			let f = new URL(window.location.href),
				y = s.startsWith("//") ? new URL(f.protocol + s) : new URL(s),
				h = Yr(y.pathname, p);
			y.origin === f.origin && h != null ? s = h + y.search + y.hash : w = !0
		} catch {}
		let v = Fy(s, {
				relative: o
			}),
			S = vg(s, {
				replace: l,
				state: a,
				target: u,
				preventScrollReset: c,
				relative: o
			});

		function m(f) {
			r && r(f), f.defaultPrevented || S(f)
		}
		return C.createElement("a", Lr({}, d, {
			href: g || v,
			onClick: w || i ? r : m,
			ref: n,
			target: u
		}))
	}),
	mg = C.forwardRef(function(t, n) {
		let {
			"aria-current": r = "page",
			caseSensitive: o = !1,
			className: i = "",
			end: l = !1,
			style: a,
			to: u,
			children: s
		} = t, c = Tp(t, ug), d = Ts(u, {
			relative: c.relative
		}), p = ei(), g = C.useContext(bs), {
			navigator: w
		} = C.useContext(ar), v = w.encodeLocation ? w.encodeLocation(d).pathname : d.pathname, S = p.pathname, m = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
		o || (S = S.toLowerCase(), m = m ? m.toLowerCase() : null, v = v.toLowerCase());
		let f = S === v || !l && S.startsWith(v) && S.charAt(v.length) === "/",
			y = m != null && (m === v || !l && m.startsWith(v) && m.charAt(v.length) === "/"),
			h = f ? r : void 0,
			E;
		typeof i == "function" ? E = i({
			isActive: f,
			isPending: y
		}) : E = [i, f ? "active" : null, y ? "pending" : null].filter(Boolean).join(" ");
		let P = typeof a == "function" ? a({
			isActive: f,
			isPending: y
		}) : a;
		return C.createElement(hg, Lr({}, c, {
			"aria-current": h,
			className: E,
			ref: n,
			style: P,
			to: u
		}), typeof s == "function" ? s({
			isActive: f,
			isPending: y
		}) : s)
	});
var gf;
(function(e) {
	e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher"
})(gf || (gf = {}));
var wf;
(function(e) {
	e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(wf || (wf = {}));

function vg(e, t) {
	let {
		target: n,
		replace: r,
		state: o,
		preventScrollReset: i,
		relative: l
	} = t === void 0 ? {} : t, a = jp(), u = ei(), s = Ts(e, {
		relative: l
	});
	return C.useCallback(c => {
		if (lg(c, n)) {
			c.preventDefault();
			let d = r !== void 0 ? r : qn(u) === qn(s);
			a(e, {
				replace: d,
				state: o,
				preventScrollReset: i,
				relative: l
			})
		}
	}, [u, a, s, r, o, n, e, i, l])
}
var Ms = "persist:",
	zs = "persist/FLUSH",
	jl = "persist/REHYDRATE",
	Ds = "persist/PAUSE",
	Ls = "persist/PERSIST",
	Is = "persist/PURGE",
	$s = "persist/REGISTER",
	yg = -1;

function ji(e) {
	return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ji = function(n) {
		return typeof n
	} : ji = function(n) {
		return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
	}, ji(e)
}

function Sf(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(o) {
			return Object.getOwnPropertyDescriptor(e, o).enumerable
		})), n.push.apply(n, r)
	}
	return n
}

function gg(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2 ? Sf(n, !0).forEach(function(r) {
			wg(e, r, n[r])
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sf(n).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
		})
	}
	return e
}

function wg(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e
}

function Sg(e, t, n, r) {
	r.debug;
	var o = gg({}, n);
	return e && ji(e) === "object" && Object.keys(e).forEach(function(i) {
		i !== "_persist" && t[i] === n[i] && (o[i] = e[i])
	}), o
}

function xg(e) {
	var t = e.blacklist || null,
		n = e.whitelist || null,
		r = e.transforms || [],
		o = e.throttle || 0,
		i = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Ms).concat(e.key),
		l = e.storage,
		a;
	e.serialize === !1 ? a = function(E) {
		return E
	} : typeof e.serialize == "function" ? a = e.serialize : a = Eg;
	var u = e.writeFailHandler || null,
		s = {},
		c = {},
		d = [],
		p = null,
		g = null,
		w = function(E) {
			Object.keys(E).forEach(function(P) {
				m(P) && s[P] !== E[P] && d.indexOf(P) === -1 && d.push(P)
			}), Object.keys(s).forEach(function(P) {
				E[P] === void 0 && m(P) && d.indexOf(P) === -1 && s[P] !== void 0 && d.push(P)
			}), p === null && (p = setInterval(v, o)), s = E
		};

	function v() {
		if (d.length === 0) {
			p && clearInterval(p), p = null;
			return
		}
		var h = d.shift(),
			E = r.reduce(function(P, _) {
				return _.in(P, h, s)
			}, s[h]);
		if (E !== void 0) try {
			c[h] = a(E)
		} catch (P) {
			console.error("redux-persist/createPersistoid: error serializing state", P)
		} else delete c[h];
		d.length === 0 && S()
	}

	function S() {
		Object.keys(c).forEach(function(h) {
			s[h] === void 0 && delete c[h]
		}), g = l.setItem(i, a(c)).catch(f)
	}

	function m(h) {
		return !(n && n.indexOf(h) === -1 && h !== "_persist" || t && t.indexOf(h) !== -1)
	}

	function f(h) {
		u && u(h)
	}
	var y = function() {
		for (; d.length !== 0;) v();
		return g || Promise.resolve()
	};
	return {
		update: w,
		flush: y
	}
}

function Eg(e) {
	return JSON.stringify(e)
}

function kg(e) {
	var t = e.transforms || [],
		n = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Ms).concat(e.key),
		r = e.storage;
	e.debug;
	var o;
	return e.deserialize === !1 ? o = function(l) {
		return l
	} : typeof e.deserialize == "function" ? o = e.deserialize : o = Pg, r.getItem(n).then(function(i) {
		if (i) try {
			var l = {},
				a = o(i);
			return Object.keys(a).forEach(function(u) {
				l[u] = t.reduceRight(function(s, c) {
					return c.out(s, u, a)
				}, o(a[u]))
			}), l
		} catch (u) {
			throw u
		} else return
	})
}

function Pg(e) {
	return JSON.parse(e)
}

function Cg(e) {
	var t = e.storage,
		n = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Ms).concat(e.key);
	return t.removeItem(n, _g)
}

function _g(e) {}

function xf(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(o) {
			return Object.getOwnPropertyDescriptor(e, o).enumerable
		})), n.push.apply(n, r)
	}
	return n
}

function Gt(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2 ? xf(n, !0).forEach(function(r) {
			Rg(e, r, n[r])
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xf(n).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
		})
	}
	return e
}

function Rg(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e
}

function Og(e, t) {
	if (e == null) return {};
	var n = jg(e, t),
		r, o;
	if (Object.getOwnPropertySymbols) {
		var i = Object.getOwnPropertySymbols(e);
		for (o = 0; o < i.length; o++) r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
	}
	return n
}

function jg(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		o, i;
	for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
	return n
}
var bg = 5e3;

function Ef(e, t) {
	var n = e.version !== void 0 ? e.version : yg;
	e.debug;
	var r = e.stateReconciler === void 0 ? Sg : e.stateReconciler,
		o = e.getStoredState || kg,
		i = e.timeout !== void 0 ? e.timeout : bg,
		l = null,
		a = !1,
		u = !0,
		s = function(d) {
			return d._persist.rehydrated && l && !u && l.update(d), d
		};
	return function(c, d) {
		var p = c || {},
			g = p._persist,
			w = Og(p, ["_persist"]),
			v = w;
		if (d.type === Ls) {
			var S = !1,
				m = function(N, $) {
					S || (d.rehydrate(e.key, N, $), S = !0)
				};
			if (i && setTimeout(function() {
					!S && m(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(e.key, '"')))
				}, i), u = !1, l || (l = xg(e)), g) return Gt({}, t(v, d), {
				_persist: g
			});
			if (typeof d.rehydrate != "function" || typeof d.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
			return d.register(e.key), o(e).then(function(_) {
				var N = e.migrate || function($, M) {
					return Promise.resolve($)
				};
				N(_, n).then(function($) {
					m($)
				}, function($) {
					m(void 0, $)
				})
			}, function(_) {
				m(void 0, _)
			}), Gt({}, t(v, d), {
				_persist: {
					version: n,
					rehydrated: !1
				}
			})
		} else {
			if (d.type === Is) return a = !0, d.result(Cg(e)), Gt({}, t(v, d), {
				_persist: g
			});
			if (d.type === zs) return d.result(l && l.flush()), Gt({}, t(v, d), {
				_persist: g
			});
			if (d.type === Ds) u = !0;
			else if (d.type === jl) {
				if (a) return Gt({}, v, {
					_persist: Gt({}, g, {
						rehydrated: !0
					})
				});
				if (d.key === e.key) {
					var f = t(v, d),
						y = d.payload,
						h = r !== !1 && y !== void 0 ? r(y, c, f, e) : f,
						E = Gt({}, h, {
							_persist: Gt({}, g, {
								rehydrated: !0
							})
						});
					return s(E)
				}
			}
		}
		if (!g) return t(c, d);
		var P = t(v, d);
		return P === v ? c : s(Gt({}, P, {
			_persist: g
		}))
	}
}

function To(e) {
	"@babel/helpers - typeof";
	return To = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
		return typeof t
	} : function(t) {
		return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	}, To(e)
}

function Ng(e, t) {
	if (To(e) !== "object" || e === null) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (To(r) !== "object") return r;
		throw new TypeError("@@toPrimitive must return a primitive value.")
	}
	return (t === "string" ? String : Number)(e)
}

function Tg(e) {
	var t = Ng(e, "string");
	return To(t) === "symbol" ? t : String(t)
}

function Mg(e, t, n) {
	return t = Tg(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e
}

function kf(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(o) {
			return Object.getOwnPropertyDescriptor(e, o).enumerable
		})), n.push.apply(n, r)
	}
	return n
}

function Pf(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2 ? kf(Object(n), !0).forEach(function(r) {
			Mg(e, r, n[r])
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kf(Object(n)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
		})
	}
	return e
}

function Fe(e) {
	return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
var Cf = function() {
		return typeof Symbol == "function" && Symbol.observable || "@@observable"
	}(),
	Oa = function() {
		return Math.random().toString(36).substring(7).split("").join(".")
	},
	Ki = {
		INIT: "@@redux/INIT" + Oa(),
		REPLACE: "@@redux/REPLACE" + Oa(),
		PROBE_UNKNOWN_ACTION: function() {
			return "@@redux/PROBE_UNKNOWN_ACTION" + Oa()
		}
	};

function zg(e) {
	if (typeof e != "object" || e === null) return !1;
	for (var t = e; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t
}

function As(e, t, n) {
	var r;
	if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw new Error(Fe(0));
	if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
		if (typeof n != "function") throw new Error(Fe(1));
		return n(As)(e, t)
	}
	if (typeof e != "function") throw new Error(Fe(2));
	var o = e,
		i = t,
		l = [],
		a = l,
		u = !1;

	function s() {
		a === l && (a = l.slice())
	}

	function c() {
		if (u) throw new Error(Fe(3));
		return i
	}

	function d(v) {
		if (typeof v != "function") throw new Error(Fe(4));
		if (u) throw new Error(Fe(5));
		var S = !0;
		return s(), a.push(v),
			function() {
				if (S) {
					if (u) throw new Error(Fe(6));
					S = !1, s();
					var f = a.indexOf(v);
					a.splice(f, 1), l = null
				}
			}
	}

	function p(v) {
		if (!zg(v)) throw new Error(Fe(7));
		if (typeof v.type > "u") throw new Error(Fe(8));
		if (u) throw new Error(Fe(9));
		try {
			u = !0, i = o(i, v)
		} finally {
			u = !1
		}
		for (var S = l = a, m = 0; m < S.length; m++) {
			var f = S[m];
			f()
		}
		return v
	}

	function g(v) {
		if (typeof v != "function") throw new Error(Fe(10));
		o = v, p({
			type: Ki.REPLACE
		})
	}

	function w() {
		var v, S = d;
		return v = {
			subscribe: function(f) {
				if (typeof f != "object" || f === null) throw new Error(Fe(11));

				function y() {
					f.next && f.next(c())
				}
				y();
				var h = S(y);
				return {
					unsubscribe: h
				}
			}
		}, v[Cf] = function() {
			return this
		}, v
	}
	return p({
		type: Ki.INIT
	}), r = {
		dispatch: p,
		subscribe: d,
		getState: c,
		replaceReducer: g
	}, r[Cf] = w, r
}

function Dg(e) {
	Object.keys(e).forEach(function(t) {
		var n = e[t],
			r = n(void 0, {
				type: Ki.INIT
			});
		if (typeof r > "u") throw new Error(Fe(12));
		if (typeof n(void 0, {
				type: Ki.PROBE_UNKNOWN_ACTION()
			}) > "u") throw new Error(Fe(13))
	})
}

function Lg(e) {
	for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
		var o = t[r];
		typeof e[o] == "function" && (n[o] = e[o])
	}
	var i = Object.keys(n),
		l;
	try {
		Dg(n)
	} catch (a) {
		l = a
	}
	return function(u, s) {
		if (u === void 0 && (u = {}), l) throw l;
		for (var c = !1, d = {}, p = 0; p < i.length; p++) {
			var g = i[p],
				w = n[g],
				v = u[g],
				S = w(v, s);
			if (typeof S > "u") throw s && s.type, new Error(Fe(14));
			d[g] = S, c = c || S !== v
		}
		return c = c || i.length !== Object.keys(u).length, c ? d : u
	}
}

function Qi() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
	return t.length === 0 ? function(r) {
		return r
	} : t.length === 1 ? t[0] : t.reduce(function(r, o) {
		return function() {
			return r(o.apply(void 0, arguments))
		}
	})
}

function Ig() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
	return function(r) {
		return function() {
			var o = r.apply(void 0, arguments),
				i = function() {
					throw new Error(Fe(15))
				},
				l = {
					getState: o.getState,
					dispatch: function() {
						return i.apply(void 0, arguments)
					}
				},
				a = t.map(function(u) {
					return u(l)
				});
			return i = Qi.apply(void 0, a)(o.dispatch), Pf(Pf({}, o), {}, {
				dispatch: i
			})
		}
	}
}

function _f(e) {
	return Ug(e) || Ag(e) || $g()
}

function $g() {
	throw new TypeError("Invalid attempt to spread non-iterable instance")
}

function Ag(e) {
	if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") return Array.from(e)
}

function Ug(e) {
	if (Array.isArray(e)) {
		for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
		return n
	}
}

function Rf(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(o) {
			return Object.getOwnPropertyDescriptor(e, o).enumerable
		})), n.push.apply(n, r)
	}
	return n
}

function pu(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2 ? Rf(n, !0).forEach(function(r) {
			Fg(e, r, n[r])
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rf(n).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
		})
	}
	return e
}

function Fg(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e
}
var Mp = {
		registry: [],
		bootstrapped: !1
	},
	Bg = function() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Mp,
			n = arguments.length > 1 ? arguments[1] : void 0;
		switch (n.type) {
			case $s:
				return pu({}, t, {
					registry: [].concat(_f(t.registry), [n.key])
				});
			case jl:
				var r = t.registry.indexOf(n.key),
					o = _f(t.registry);
				return o.splice(r, 1), pu({}, t, {
					registry: o,
					bootstrapped: o.length === 0
				});
			default:
				return t
		}
	};

function Wg(e, t, n) {
	var r = n || !1,
		o = As(Bg, Mp, t && t.enhancer ? t.enhancer : void 0),
		i = function(s) {
			o.dispatch({
				type: $s,
				key: s
			})
		},
		l = function(s, c, d) {
			var p = {
				type: jl,
				payload: c,
				err: d,
				key: s
			};
			e.dispatch(p), o.dispatch(p), r && a.getState().bootstrapped && (r(), r = !1)
		},
		a = pu({}, o, {
			purge: function() {
				var s = [];
				return e.dispatch({
					type: Is,
					result: function(d) {
						s.push(d)
					}
				}), Promise.all(s)
			},
			flush: function() {
				var s = [];
				return e.dispatch({
					type: zs,
					result: function(d) {
						s.push(d)
					}
				}), Promise.all(s)
			},
			pause: function() {
				e.dispatch({
					type: Ds
				})
			},
			persist: function() {
				e.dispatch({
					type: Ls,
					register: i,
					rehydrate: l
				})
			}
		});
	return t && t.manualPersist || a.persist(), a
}

function bt(e) {
	for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
	throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(o) {
		return "'" + o + "'"
	}).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
}

function Nn(e) {
	return !!e && !!e[de]
}

function rn(e) {
	var t;
	return !!e && (function(n) {
		if (!n || typeof n != "object") return !1;
		var r = Object.getPrototypeOf(n);
		if (r === null) return !0;
		var o = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
		return o === Object || typeof o == "function" && Function.toString.call(o) === qg
	}(e) || Array.isArray(e) || !!e[zf] || !!(!((t = e.constructor) === null || t === void 0) && t[zf]) || Us(e) || Fs(e))
}

function Zn(e, t, n) {
	n === void 0 && (n = !1), Gr(e) === 0 ? (n ? Object.keys : jr)(e).forEach(function(r) {
		n && typeof r == "symbol" || t(r, e[r], e)
	}) : e.forEach(function(r, o) {
		return t(o, r, e)
	})
}

function Gr(e) {
	var t = e[de];
	return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Us(e) ? 2 : Fs(e) ? 3 : 0
}

function Or(e, t) {
	return Gr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function Vg(e, t) {
	return Gr(e) === 2 ? e.get(t) : e[t]
}

function zp(e, t, n) {
	var r = Gr(e);
	r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n
}

function Dp(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}

function Us(e) {
	return Xg && e instanceof Map
}

function Fs(e) {
	return Jg && e instanceof Set
}

function Fn(e) {
	return e.o || e.t
}

function Bs(e) {
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	var t = Ip(e);
	delete t[de];
	for (var n = jr(t), r = 0; r < n.length; r++) {
		var o = n[r],
			i = t[o];
		i.writable === !1 && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (t[o] = {
			configurable: !0,
			writable: !0,
			enumerable: i.enumerable,
			value: e[o]
		})
	}
	return Object.create(Object.getPrototypeOf(e), t)
}

function Ws(e, t) {
	return t === void 0 && (t = !1), Vs(e) || Nn(e) || !rn(e) || (Gr(e) > 1 && (e.set = e.add = e.clear = e.delete = Hg), Object.freeze(e), t && Zn(e, function(n, r) {
		return Ws(r, !0)
	}, !0)), e
}

function Hg() {
	bt(2)
}

function Vs(e) {
	return e == null || typeof e != "object" || Object.isFrozen(e)
}

function At(e) {
	var t = yu[e];
	return t || bt(18, e), t
}

function Kg(e, t) {
	yu[e] || (yu[e] = t)
}

function hu() {
	return Mo
}

function ja(e, t) {
	t && (At("Patches"), e.u = [], e.s = [], e.v = t)
}

function Yi(e) {
	mu(e), e.p.forEach(Qg), e.p = null
}

function mu(e) {
	e === Mo && (Mo = e.l)
}

function Of(e) {
	return Mo = {
		p: [],
		l: Mo,
		h: e,
		m: !0,
		_: 0
	}
}

function Qg(e) {
	var t = e[de];
	t.i === 0 || t.i === 1 ? t.j() : t.g = !0
}

function ba(e, t) {
	t._ = t.p.length;
	var n = t.p[0],
		r = e !== void 0 && e !== n;
	return t.h.O || At("ES5").S(t, e, r), r ? (n[de].P && (Yi(t), bt(4)), rn(e) && (e = Gi(t, e), t.l || Xi(t, e)), t.u && At("Patches").M(n[de].t, e, t.u, t.s)) : e = Gi(t, n, []), Yi(t), t.u && t.v(t.u, t.s), e !== Lp ? e : void 0
}

function Gi(e, t, n) {
	if (Vs(t)) return t;
	var r = t[de];
	if (!r) return Zn(t, function(a, u) {
		return jf(e, r, t, a, u, n)
	}, !0), t;
	if (r.A !== e) return t;
	if (!r.P) return Xi(e, r.t, !0), r.t;
	if (!r.I) {
		r.I = !0, r.A._--;
		var o = r.i === 4 || r.i === 5 ? r.o = Bs(r.k) : r.o,
			i = o,
			l = !1;
		r.i === 3 && (i = new Set(o), o.clear(), l = !0), Zn(i, function(a, u) {
			return jf(e, r, o, a, u, n, l)
		}), Xi(e, o, !1), n && e.u && At("Patches").N(r, n, e.u, e.s)
	}
	return r.o
}

function jf(e, t, n, r, o, i, l) {
	if (Nn(o)) {
		var a = Gi(e, o, i && t && t.i !== 3 && !Or(t.R, r) ? i.concat(r) : void 0);
		if (zp(n, r, a), !Nn(a)) return;
		e.m = !1
	} else l && n.add(o);
	if (rn(o) && !Vs(o)) {
		if (!e.h.D && e._ < 1) return;
		Gi(e, o), t && t.A.l || Xi(e, o)
	}
}

function Xi(e, t, n) {
	n === void 0 && (n = !1), !e.l && e.h.D && e.m && Ws(t, n)
}

function Na(e, t) {
	var n = e[de];
	return (n ? Fn(n) : e)[t]
}

function bf(e, t) {
	if (t in e)
		for (var n = Object.getPrototypeOf(e); n;) {
			var r = Object.getOwnPropertyDescriptor(n, t);
			if (r) return r;
			n = Object.getPrototypeOf(n)
		}
}

function mn(e) {
	e.P || (e.P = !0, e.l && mn(e.l))
}

function Ta(e) {
	e.o || (e.o = Bs(e.t))
}

function vu(e, t, n) {
	var r = Us(t) ? At("MapSet").F(t, n) : Fs(t) ? At("MapSet").T(t, n) : e.O ? function(o, i) {
		var l = Array.isArray(o),
			a = {
				i: l ? 1 : 0,
				A: i ? i.A : hu(),
				P: !1,
				I: !1,
				R: {},
				l: i,
				t: o,
				k: null,
				o: null,
				j: null,
				C: !1
			},
			u = a,
			s = zo;
		l && (u = [a], s = mo);
		var c = Proxy.revocable(u, s),
			d = c.revoke,
			p = c.proxy;
		return a.k = p, a.j = d, p
	}(t, n) : At("ES5").J(t, n);
	return (n ? n.A : hu()).p.push(r), r
}

function Yg(e) {
	return Nn(e) || bt(22, e),
		function t(n) {
			if (!rn(n)) return n;
			var r, o = n[de],
				i = Gr(n);
			if (o) {
				if (!o.P && (o.i < 4 || !At("ES5").K(o))) return o.t;
				o.I = !0, r = Nf(n, i), o.I = !1
			} else r = Nf(n, i);
			return Zn(r, function(l, a) {
				o && Vg(o.t, l) === a || zp(r, l, t(a))
			}), i === 3 ? new Set(r) : r
		}(e)
}

function Nf(e, t) {
	switch (t) {
		case 2:
			return new Map(e);
		case 3:
			return Array.from(e)
	}
	return Bs(e)
}

function Gg() {
	function e(i, l) {
		var a = o[i];
		return a ? a.enumerable = l : o[i] = a = {
			configurable: !0,
			enumerable: l,
			get: function() {
				var u = this[de];
				return zo.get(u, i)
			},
			set: function(u) {
				var s = this[de];
				zo.set(s, i, u)
			}
		}, a
	}

	function t(i) {
		for (var l = i.length - 1; l >= 0; l--) {
			var a = i[l][de];
			if (!a.P) switch (a.i) {
				case 5:
					r(a) && mn(a);
					break;
				case 4:
					n(a) && mn(a)
			}
		}
	}

	function n(i) {
		for (var l = i.t, a = i.k, u = jr(a), s = u.length - 1; s >= 0; s--) {
			var c = u[s];
			if (c !== de) {
				var d = l[c];
				if (d === void 0 && !Or(l, c)) return !0;
				var p = a[c],
					g = p && p[de];
				if (g ? g.t !== d : !Dp(p, d)) return !0
			}
		}
		var w = !!l[de];
		return u.length !== jr(l).length + (w ? 0 : 1)
	}

	function r(i) {
		var l = i.k;
		if (l.length !== i.t.length) return !0;
		var a = Object.getOwnPropertyDescriptor(l, l.length - 1);
		if (a && !a.get) return !0;
		for (var u = 0; u < l.length; u++)
			if (!l.hasOwnProperty(u)) return !0;
		return !1
	}
	var o = {};
	Kg("ES5", {
		J: function(i, l) {
			var a = Array.isArray(i),
				u = function(c, d) {
					if (c) {
						for (var p = Array(d.length), g = 0; g < d.length; g++) Object.defineProperty(p, "" + g, e(g, !0));
						return p
					}
					var w = Ip(d);
					delete w[de];
					for (var v = jr(w), S = 0; S < v.length; S++) {
						var m = v[S];
						w[m] = e(m, c || !!w[m].enumerable)
					}
					return Object.create(Object.getPrototypeOf(d), w)
				}(a, i),
				s = {
					i: a ? 5 : 4,
					A: l ? l.A : hu(),
					P: !1,
					I: !1,
					R: {},
					l,
					t: i,
					k: u,
					o: null,
					g: !1,
					C: !1
				};
			return Object.defineProperty(u, de, {
				value: s,
				writable: !0
			}), u
		},
		S: function(i, l, a) {
			a ? Nn(l) && l[de].A === i && t(i.p) : (i.u && function u(s) {
				if (s && typeof s == "object") {
					var c = s[de];
					if (c) {
						var d = c.t,
							p = c.k,
							g = c.R,
							w = c.i;
						if (w === 4) Zn(p, function(y) {
							y !== de && (d[y] !== void 0 || Or(d, y) ? g[y] || u(p[y]) : (g[y] = !0, mn(c)))
						}), Zn(d, function(y) {
							p[y] !== void 0 || Or(p, y) || (g[y] = !1, mn(c))
						});
						else if (w === 5) {
							if (r(c) && (mn(c), g.length = !0), p.length < d.length)
								for (var v = p.length; v < d.length; v++) g[v] = !1;
							else
								for (var S = d.length; S < p.length; S++) g[S] = !0;
							for (var m = Math.min(p.length, d.length), f = 0; f < m; f++) p.hasOwnProperty(f) || (g[f] = !0), g[f] === void 0 && u(p[f])
						}
					}
				}
			}(i.p[0]), t(i.p))
		},
		K: function(i) {
			return i.i === 4 ? n(i) : r(i)
		}
	})
}
var Tf, Mo, Hs = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
	Xg = typeof Map < "u",
	Jg = typeof Set < "u",
	Mf = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
	Lp = Hs ? Symbol.for("immer-nothing") : ((Tf = {})["immer-nothing"] = !0, Tf),
	zf = Hs ? Symbol.for("immer-draftable") : "__$immer_draftable",
	de = Hs ? Symbol.for("immer-state") : "__$immer_state",
	qg = "" + Object.prototype.constructor,
	jr = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
		return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
	} : Object.getOwnPropertyNames,
	Ip = Object.getOwnPropertyDescriptors || function(e) {
		var t = {};
		return jr(e).forEach(function(n) {
			t[n] = Object.getOwnPropertyDescriptor(e, n)
		}), t
	},
	yu = {},
	zo = {
		get: function(e, t) {
			if (t === de) return e;
			var n = Fn(e);
			if (!Or(n, t)) return function(o, i, l) {
				var a, u = bf(i, l);
				return u ? "value" in u ? u.value : (a = u.get) === null || a === void 0 ? void 0 : a.call(o.k) : void 0
			}(e, n, t);
			var r = n[t];
			return e.I || !rn(r) ? r : r === Na(e.t, t) ? (Ta(e), e.o[t] = vu(e.A.h, r, e)) : r
		},
		has: function(e, t) {
			return t in Fn(e)
		},
		ownKeys: function(e) {
			return Reflect.ownKeys(Fn(e))
		},
		set: function(e, t, n) {
			var r = bf(Fn(e), t);
			if (r != null && r.set) return r.set.call(e.k, n), !0;
			if (!e.P) {
				var o = Na(Fn(e), t),
					i = o == null ? void 0 : o[de];
				if (i && i.t === n) return e.o[t] = n, e.R[t] = !1, !0;
				if (Dp(n, o) && (n !== void 0 || Or(e.t, t))) return !0;
				Ta(e), mn(e)
			}
			return e.o[t] === n && (n !== void 0 || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0
		},
		deleteProperty: function(e, t) {
			return Na(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, Ta(e), mn(e)) : delete e.R[t], e.o && delete e.o[t], !0
		},
		getOwnPropertyDescriptor: function(e, t) {
			var n = Fn(e),
				r = Reflect.getOwnPropertyDescriptor(n, t);
			return r && {
				writable: !0,
				configurable: e.i !== 1 || t !== "length",
				enumerable: r.enumerable,
				value: n[t]
			}
		},
		defineProperty: function() {
			bt(11)
		},
		getPrototypeOf: function(e) {
			return Object.getPrototypeOf(e.t)
		},
		setPrototypeOf: function() {
			bt(12)
		}
	},
	mo = {};
Zn(zo, function(e, t) {
	mo[e] = function() {
		return arguments[0] = arguments[0][0], t.apply(this, arguments)
	}
}), mo.deleteProperty = function(e, t) {
	return mo.set.call(this, e, t, void 0)
}, mo.set = function(e, t, n) {
	return zo.set.call(this, e[0], t, n, e[0])
};
var Zg = function() {
		function e(n) {
			var r = this;
			this.O = Mf, this.D = !0, this.produce = function(o, i, l) {
				if (typeof o == "function" && typeof i != "function") {
					var a = i;
					i = o;
					var u = r;
					return function(v) {
						var S = this;
						v === void 0 && (v = a);
						for (var m = arguments.length, f = Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++) f[y - 1] = arguments[y];
						return u.produce(v, function(h) {
							var E;
							return (E = i).call.apply(E, [S, h].concat(f))
						})
					}
				}
				var s;
				if (typeof i != "function" && bt(6), l !== void 0 && typeof l != "function" && bt(7), rn(o)) {
					var c = Of(r),
						d = vu(r, o, void 0),
						p = !0;
					try {
						s = i(d), p = !1
					} finally {
						p ? Yi(c) : mu(c)
					}
					return typeof Promise < "u" && s instanceof Promise ? s.then(function(v) {
						return ja(c, l), ba(v, c)
					}, function(v) {
						throw Yi(c), v
					}) : (ja(c, l), ba(s, c))
				}
				if (!o || typeof o != "object") {
					if ((s = i(o)) === void 0 && (s = o), s === Lp && (s = void 0), r.D && Ws(s, !0), l) {
						var g = [],
							w = [];
						At("Patches").M(o, s, g, w), l(g, w)
					}
					return s
				}
				bt(21, o)
			}, this.produceWithPatches = function(o, i) {
				if (typeof o == "function") return function(s) {
					for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++) d[p - 1] = arguments[p];
					return r.produceWithPatches(s, function(g) {
						return o.apply(void 0, [g].concat(d))
					})
				};
				var l, a, u = r.produce(o, i, function(s, c) {
					l = s, a = c
				});
				return typeof Promise < "u" && u instanceof Promise ? u.then(function(s) {
					return [s, l, a]
				}) : [u, l, a]
			}, typeof(n == null ? void 0 : n.useProxies) == "boolean" && this.setUseProxies(n.useProxies), typeof(n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze)
		}
		var t = e.prototype;
		return t.createDraft = function(n) {
			rn(n) || bt(8), Nn(n) && (n = Yg(n));
			var r = Of(this),
				o = vu(this, n, void 0);
			return o[de].C = !0, mu(r), o
		}, t.finishDraft = function(n, r) {
			var o = n && n[de],
				i = o.A;
			return ja(i, r), ba(void 0, i)
		}, t.setAutoFreeze = function(n) {
			this.D = n
		}, t.setUseProxies = function(n) {
			n && !Mf && bt(20), this.O = n
		}, t.applyPatches = function(n, r) {
			var o;
			for (o = r.length - 1; o >= 0; o--) {
				var i = r[o];
				if (i.path.length === 0 && i.op === "replace") {
					n = i.value;
					break
				}
			}
			o > -1 && (r = r.slice(o + 1));
			var l = At("Patches").$;
			return Nn(n) ? l(n, r) : this.produce(n, function(a) {
				return l(a, r)
			})
		}, e
	}(),
	ct = new Zg,
	$p = ct.produce;
ct.produceWithPatches.bind(ct);
ct.setAutoFreeze.bind(ct);
ct.setUseProxies.bind(ct);
ct.applyPatches.bind(ct);
ct.createDraft.bind(ct);
ct.finishDraft.bind(ct);

function Ap(e) {
	var t = function(r) {
		var o = r.dispatch,
			i = r.getState;
		return function(l) {
			return function(a) {
				return typeof a == "function" ? a(o, i, e) : l(a)
			}
		}
	};
	return t
}
var Up = Ap();
Up.withExtraArgument = Ap;
const Df = Up;
var Fp = globalThis && globalThis.__extends || function() {
		var e = function(t, n) {
			return e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(r, o) {
				r.__proto__ = o
			} || function(r, o) {
				for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i])
			}, e(t, n)
		};
		return function(t, n) {
			if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
			e(t, n);

			function r() {
				this.constructor = t
			}
			t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
		}
	}(),
	e0 = globalThis && globalThis.__generator || function(e, t) {
		var n = {
				label: 0,
				sent: function() {
					if (i[0] & 1) throw i[1];
					return i[1]
				},
				trys: [],
				ops: []
			},
			r, o, i, l;
		return l = {
			next: a(0),
			throw: a(1),
			return: a(2)
		}, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
			return this
		}), l;

		function a(s) {
			return function(c) {
				return u([s, c])
			}
		}

		function u(s) {
			if (r) throw new TypeError("Generator is already executing.");
			for (; n;) try {
				if (r = 1, o && (i = s[0] & 2 ? o.return : s[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, s[1])).done) return i;
				switch (o = 0, i && (s = [s[0] & 2, i.value]), s[0]) {
					case 0:
					case 1:
						i = s;
						break;
					case 4:
						return n.label++, {
							value: s[1],
							done: !1
						};
					case 5:
						n.label++, o = s[1], s = [0];
						continue;
					case 7:
						s = n.ops.pop(), n.trys.pop();
						continue;
					default:
						if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2)) {
							n = 0;
							continue
						}
						if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
							n.label = s[1];
							break
						}
						if (s[0] === 6 && n.label < i[1]) {
							n.label = i[1], i = s;
							break
						}
						if (i && n.label < i[2]) {
							n.label = i[2], n.ops.push(s);
							break
						}
						i[2] && n.ops.pop(), n.trys.pop();
						continue
				}
				s = t.call(e, n)
			} catch (c) {
				s = [6, c], o = 0
			} finally {
				r = i = 0
			}
			if (s[0] & 5) throw s[1];
			return {
				value: s[0] ? s[1] : void 0,
				done: !0
			}
		}
	},
	Ir = globalThis && globalThis.__spreadArray || function(e, t) {
		for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
		return e
	},
	t0 = Object.defineProperty,
	n0 = Object.defineProperties,
	r0 = Object.getOwnPropertyDescriptors,
	Lf = Object.getOwnPropertySymbols,
	o0 = Object.prototype.hasOwnProperty,
	i0 = Object.prototype.propertyIsEnumerable,
	If = function(e, t, n) {
		return t in e ? t0(e, t, {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: n
		}) : e[t] = n
	},
	xn = function(e, t) {
		for (var n in t || (t = {})) o0.call(t, n) && If(e, n, t[n]);
		if (Lf)
			for (var r = 0, o = Lf(t); r < o.length; r++) {
				var n = o[r];
				i0.call(t, n) && If(e, n, t[n])
			}
		return e
	},
	Ma = function(e, t) {
		return n0(e, r0(t))
	},
	l0 = function(e, t, n) {
		return new Promise(function(r, o) {
			var i = function(u) {
					try {
						a(n.next(u))
					} catch (s) {
						o(s)
					}
				},
				l = function(u) {
					try {
						a(n.throw(u))
					} catch (s) {
						o(s)
					}
				},
				a = function(u) {
					return u.done ? r(u.value) : Promise.resolve(u.value).then(i, l)
				};
			a((n = n.apply(e, t)).next())
		})
	},
	a0 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
		if (arguments.length !== 0) return typeof arguments[0] == "object" ? Qi : Qi.apply(null, arguments)
	};

function u0(e) {
	if (typeof e != "object" || e === null) return !1;
	var t = Object.getPrototypeOf(e);
	if (t === null) return !0;
	for (var n = t; Object.getPrototypeOf(n) !== null;) n = Object.getPrototypeOf(n);
	return t === n
}
var s0 = function(e) {
		Fp(t, e);

		function t() {
			for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
			var o = e.apply(this, n) || this;
			return Object.setPrototypeOf(o, t.prototype), o
		}
		return Object.defineProperty(t, Symbol.species, {
			get: function() {
				return t
			},
			enumerable: !1,
			configurable: !0
		}), t.prototype.concat = function() {
			for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
			return e.prototype.concat.apply(this, n)
		}, t.prototype.prepend = function() {
			for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
			return n.length === 1 && Array.isArray(n[0]) ? new(t.bind.apply(t, Ir([void 0], n[0].concat(this)))) : new(t.bind.apply(t, Ir([void 0], n.concat(this))))
		}, t
	}(Array),
	c0 = function(e) {
		Fp(t, e);

		function t() {
			for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
			var o = e.apply(this, n) || this;
			return Object.setPrototypeOf(o, t.prototype), o
		}
		return Object.defineProperty(t, Symbol.species, {
			get: function() {
				return t
			},
			enumerable: !1,
			configurable: !0
		}), t.prototype.concat = function() {
			for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
			return e.prototype.concat.apply(this, n)
		}, t.prototype.prepend = function() {
			for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
			return n.length === 1 && Array.isArray(n[0]) ? new(t.bind.apply(t, Ir([void 0], n[0].concat(this)))) : new(t.bind.apply(t, Ir([void 0], n.concat(this))))
		}, t
	}(Array);

function gu(e) {
	return rn(e) ? $p(e, function() {}) : e
}

function f0(e) {
	return typeof e == "boolean"
}

function d0() {
	return function(t) {
		return p0(t)
	}
}

function p0(e) {
	e === void 0 && (e = {});
	var t = e.thunk,
		n = t === void 0 ? !0 : t;
	e.immutableCheck, e.serializableCheck;
	var r = new s0;
	return n && (f0(n) ? r.push(Df) : r.push(Df.withExtraArgument(n.extraArgument))), r
}
var h0 = !0;

function m0(e) {
	var t = d0(),
		n = e || {},
		r = n.reducer,
		o = r === void 0 ? void 0 : r,
		i = n.middleware,
		l = i === void 0 ? t() : i,
		a = n.devTools,
		u = a === void 0 ? !0 : a,
		s = n.preloadedState,
		c = s === void 0 ? void 0 : s,
		d = n.enhancers,
		p = d === void 0 ? void 0 : d,
		g;
	if (typeof o == "function") g = o;
	else if (u0(o)) g = Lg(o);
	else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
	var w = l;
	typeof w == "function" && (w = w(t));
	var v = Ig.apply(void 0, w),
		S = Qi;
	u && (S = a0(xn({
		trace: !h0
	}, typeof u == "object" && u)));
	var m = new c0(v),
		f = m;
	Array.isArray(p) ? f = Ir([v], p) : typeof p == "function" && (f = p(m));
	var y = S.apply(void 0, f);
	return As(g, c, y)
}

function En(e, t) {
	function n() {
		for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
		if (t) {
			var i = t.apply(void 0, r);
			if (!i) throw new Error("prepareAction did not return an object");
			return xn(xn({
				type: e,
				payload: i.payload
			}, "meta" in i && {
				meta: i.meta
			}), "error" in i && {
				error: i.error
			})
		}
		return {
			type: e,
			payload: r[0]
		}
	}
	return n.toString = function() {
		return "" + e
	}, n.type = e, n.match = function(r) {
		return r.type === e
	}, n
}

function Bp(e) {
	var t = {},
		n = [],
		r, o = {
			addCase: function(i, l) {
				var a = typeof i == "string" ? i : i.type;
				if (a in t) throw new Error("addCase cannot be called with two reducers for the same action type");
				return t[a] = l, o
			},
			addMatcher: function(i, l) {
				return n.push({
					matcher: i,
					reducer: l
				}), o
			},
			addDefaultCase: function(i) {
				return r = i, o
			}
		};
	return e(o), [t, n, r]
}

function v0(e) {
	return typeof e == "function"
}

function y0(e, t, n, r) {
	n === void 0 && (n = []);
	var o = typeof t == "function" ? Bp(t) : [t, n, r],
		i = o[0],
		l = o[1],
		a = o[2],
		u;
	if (v0(e)) u = function() {
		return gu(e())
	};
	else {
		var s = gu(e);
		u = function() {
			return s
		}
	}

	function c(d, p) {
		d === void 0 && (d = u());
		var g = Ir([i[p.type]], l.filter(function(w) {
			var v = w.matcher;
			return v(p)
		}).map(function(w) {
			var v = w.reducer;
			return v
		}));
		return g.filter(function(w) {
			return !!w
		}).length === 0 && (g = [a]), g.reduce(function(w, v) {
			if (v)
				if (Nn(w)) {
					var S = w,
						m = v(S, p);
					return m === void 0 ? w : m
				} else {
					if (rn(w)) return $p(w, function(f) {
						return v(f, p)
					});
					var m = v(w, p);
					if (m === void 0) {
						if (w === null) return w;
						throw Error("A case reducer on a non-draftable value must not return undefined")
					}
					return m
				} return w
		}, d)
	}
	return c.getInitialState = u, c
}

function g0(e, t) {
	return e + "/" + t
}

function Wp(e) {
	var t = e.name;
	if (!t) throw new Error("`name` is a required option for createSlice");
	typeof process < "u";
	var n = typeof e.initialState == "function" ? e.initialState : gu(e.initialState),
		r = e.reducers || {},
		o = Object.keys(r),
		i = {},
		l = {},
		a = {};
	o.forEach(function(c) {
		var d = r[c],
			p = g0(t, c),
			g, w;
		"reducer" in d ? (g = d.reducer, w = d.prepare) : g = d, i[c] = g, l[p] = g, a[c] = w ? En(p, w) : En(p)
	});

	function u() {
		var c = typeof e.extraReducers == "function" ? Bp(e.extraReducers) : [e.extraReducers],
			d = c[0],
			p = d === void 0 ? {} : d,
			g = c[1],
			w = g === void 0 ? [] : g,
			v = c[2],
			S = v === void 0 ? void 0 : v,
			m = xn(xn({}, p), l);
		return y0(n, function(f) {
			for (var y in m) f.addCase(y, m[y]);
			for (var h = 0, E = w; h < E.length; h++) {
				var P = E[h];
				f.addMatcher(P.matcher, P.reducer)
			}
			S && f.addDefaultCase(S)
		})
	}
	var s;
	return {
		name: t,
		reducer: function(c, d) {
			return s || (s = u()), s(c, d)
		},
		actions: a,
		caseReducers: i,
		getInitialState: function() {
			return s || (s = u()), s.getInitialState()
		}
	}
}
var w0 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
	S0 = function(e) {
		e === void 0 && (e = 21);
		for (var t = "", n = e; n--;) t += w0[Math.random() * 64 | 0];
		return t
	},
	x0 = ["name", "message", "stack", "code"],
	za = function() {
		function e(t, n) {
			this.payload = t, this.meta = n
		}
		return e
	}(),
	$f = function() {
		function e(t, n) {
			this.payload = t, this.meta = n
		}
		return e
	}(),
	E0 = function(e) {
		if (typeof e == "object" && e !== null) {
			for (var t = {}, n = 0, r = x0; n < r.length; n++) {
				var o = r[n];
				typeof e[o] == "string" && (t[o] = e[o])
			}
			return t
		}
		return {
			message: String(e)
		}
	};
(function() {
	function e(t, n, r) {
		var o = En(t + "/fulfilled", function(s, c, d, p) {
				return {
					payload: s,
					meta: Ma(xn({}, p || {}), {
						arg: d,
						requestId: c,
						requestStatus: "fulfilled"
					})
				}
			}),
			i = En(t + "/pending", function(s, c, d) {
				return {
					payload: void 0,
					meta: Ma(xn({}, d || {}), {
						arg: c,
						requestId: s,
						requestStatus: "pending"
					})
				}
			}),
			l = En(t + "/rejected", function(s, c, d, p, g) {
				return {
					payload: p,
					error: (r && r.serializeError || E0)(s || "Rejected"),
					meta: Ma(xn({}, g || {}), {
						arg: d,
						requestId: c,
						rejectedWithValue: !!p,
						requestStatus: "rejected",
						aborted: (s == null ? void 0 : s.name) === "AbortError",
						condition: (s == null ? void 0 : s.name) === "ConditionError"
					})
				}
			}),
			a = typeof AbortController < "u" ? AbortController : function() {
				function s() {
					this.signal = {
						aborted: !1,
						addEventListener: function() {},
						dispatchEvent: function() {
							return !1
						},
						onabort: function() {},
						removeEventListener: function() {},
						reason: void 0,
						throwIfAborted: function() {}
					}
				}
				return s.prototype.abort = function() {}, s
			}();

		function u(s) {
			return function(c, d, p) {
				var g = r != null && r.idGenerator ? r.idGenerator(s) : S0(),
					w = new a,
					v;

				function S(f) {
					v = f, w.abort()
				}
				var m = function() {
					return l0(this, null, function() {
						var f, y, h, E, P, _, N;
						return e0(this, function($) {
							switch ($.label) {
								case 0:
									return $.trys.push([0, 4, , 5]), E = (f = r == null ? void 0 : r.condition) == null ? void 0 : f.call(r, s, {
										getState: d,
										extra: p
									}), P0(E) ? [4, E] : [3, 2];
								case 1:
									E = $.sent(), $.label = 2;
								case 2:
									if (E === !1 || w.signal.aborted) throw {
										name: "ConditionError",
										message: "Aborted due to condition callback returning false."
									};
									return P = new Promise(function(M, J) {
										return w.signal.addEventListener("abort", function() {
											return J({
												name: "AbortError",
												message: v || "Aborted"
											})
										})
									}), c(i(g, s, (y = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : y.call(r, {
										requestId: g,
										arg: s
									}, {
										getState: d,
										extra: p
									}))), [4, Promise.race([P, Promise.resolve(n(s, {
										dispatch: c,
										getState: d,
										extra: p,
										requestId: g,
										signal: w.signal,
										abort: S,
										rejectWithValue: function(M, J) {
											return new za(M, J)
										},
										fulfillWithValue: function(M, J) {
											return new $f(M, J)
										}
									})).then(function(M) {
										if (M instanceof za) throw M;
										return M instanceof $f ? o(M.payload, g, s, M.meta) : o(M, g, s)
									})])];
								case 3:
									return h = $.sent(), [3, 5];
								case 4:
									return _ = $.sent(), h = _ instanceof za ? l(null, g, s, _.payload, _.meta) : l(_, g, s), [3, 5];
								case 5:
									return N = r && !r.dispatchConditionRejection && l.match(h) && h.meta.condition, N || c(h), [2, h]
							}
						})
					})
				}();
				return Object.assign(m, {
					abort: S,
					requestId: g,
					arg: s,
					unwrap: function() {
						return m.then(k0)
					}
				})
			}
		}
		return Object.assign(u, {
			pending: i,
			rejected: l,
			fulfilled: o,
			typePrefix: t
		})
	}
	return e.withTypes = function() {
		return e
	}, e
})();

function k0(e) {
	if (e.meta && e.meta.rejectedWithValue) throw e.payload;
	if (e.error) throw e.error;
	return e.payload
}

function P0(e) {
	return e !== null && typeof e == "object" && typeof e.then == "function"
}
var Ks = "listenerMiddleware";
En(Ks + "/add");
En(Ks + "/removeAll");
En(Ks + "/remove");
var Af;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
Gg();
const C0 = {
		theme: null
	},
	Vp = Wp({
		name: "app",
		initialState: C0,
		reducers: {
			setTheme: (e, t) => {
				e.theme = t.payload, document.documentElement.setAttribute("data-theme", t.payload)
			}
		}
	}),
	{
		setTheme: Uf
	} = Vp.actions,
	_0 = Vp.reducer;
let Hp, er, Ji = !1;
const Da = 2e3;
let wu = 250,
	tr = 1e3;
const R0 = () => {
		Ji || (Ji = !0, Hp())
	},
	Ff = () => {
		Ji && (Ji = !1, Kp())
	},
	Kp = () => {
		er = new Promise(e => {
			Hp = e
		})
	},
	Bf = e => {
		tr = e
	},
	O0 = e => {
		wu = e
	};
Kp();
async function* Bt(e, t, n) {
	await er;
	const r = e[t];
	e[t] = e[n], e[n] = r, yield {
		type: "swap",
		positions: [t, n]
	}, await Zi(tr), await er
}
async function* ut(...e) {
	yield {
		type: "highlight",
		positions: [-1, -1]
	}, await Zi(wu), await er, yield {
		type: "highlight",
		positions: e
	}, await Zi(wu), await er
}
async function* qi(e) {
	yield {
		type: "pivot",
		position: e
	}
}
async function* Ne(e) {
	yield {
		type: "sort",
		position: e
	}
}
async function* j0(...e) {
	await er, yield {
		type: "move",
		positions: e
	}, await Zi(tr)
}

function Zi(e) {
	return new Promise(t => setTimeout(t, e))
}

// bubble sort
async function* b0(e) {
	let t, n;
	for (t = 0; t < e.length; t++) {
		for (n = 0; n < e.length - t - 1; n++) yield* ut(n, n + 1), e[n] > e[n + 1] && (yield* Bt(e, n, n + 1));
		yield* Ne(n)
	}
}
async function* N0(e) {
	for (let t = 0; t < e.length; t++) {
		let n = t,
			r = 1;
		for (; n < e.length - 1 - t; n++) yield* ut(n, n + 1), e[n] > e[n + 1] && (yield* Bt(e, n, n + 1), r = 0);
		if (r == 1) {
			for (let o = 0; o < e.length; o++) yield* Ne(o);
			return
		}
		yield* Ne(e.length - 1 - t), r = 1;
		for (let o = n - 1; o > e.length - n - 1; o--) yield* ut(o - 1, o), e[o] < e[o - 1] && (yield* Bt(e, o - 1, o), r = 0);
		if (r == 1) {
			for (let o = 0; o < e.length; o++) yield* Ne(o);
			return
		}
		yield* Ne(t)
	}
}

//heap sort
async function* T0(e) {
	let t = e.length;
	for (let n = Math.floor(t / 2) - 1; n >= 0; n--) yield* Su(e, n, t);
	for (let n = e.length - 1; n > 0; n--) t--, yield* Ne(t), yield* Bt(e, 0, n), yield* Su(e, 0, t);
	yield* Ne(0)
}
async function* Su(e, t, n) {
	const r = 2 * t + 1,
		o = 2 * t + 2;
	let i = t;
	const l = [];
	r < n && l.push(r), o < n && l.push(o), l.length > 0 && (yield* qi(t), yield* ut(...l)), r < n && e[r] > e[i] && (i = r), o < n && e[o] > e[i] && (i = o), i !== t && (yield* Bt(e, t, i), yield* qi(-1), yield* Su(e, i, n))
}

//insertion sort

async function* M0(e) {
	let t, n;
	for (t = 0; t < e.length; t++) {
		let r = t;
		for (n = t - 1; n >= 0 && (yield* ut(r, n), e[n] > e[r]); n--) yield* Bt(e, n, r), r = n;
		yield* Ne(t)
	}
}

//merge sort
async function* xu(e, t = 0, n = e.length - 1, r = !0) {
	if (t === n) {
		r && e.length === 1 && (yield* Ne(t));
		return
	}
	if (t < n) {
		const o = Math.floor((t + n) / 2);
		yield* xu(e, t, o, !1), yield* xu(e, o + 1, n, !1), yield* z0(e, t, o + 1, o - t + 1, n - o, r)
	}
}
async function* z0(e, t, n, r, o, i) {
	let l = 0,
		a = 0;
	for (; l < r && a < o;) {
		const u = t + l,
			s = n + a;
		if (yield* ut(u, s), e[u] <= e[s] && (l++, i && (yield* Ne(u))), e[u] > e[s]) {
			const c = e[s];
			D0(e, u, s), e[u] = c, yield* j0(u, s), t++, a++, i && (yield* Ne(u))
		}
	}
	for (let u = t + l; u < t + r; u++) yield* ut(u), i && (yield* Ne(u));
	for (let u = n + a; u < n + o; u++) yield* ut(u), i && (yield* Ne(u))
}

function D0(e, t, n) {
	for (let r = n; r > t; r--) e[r] = e[r - 1]
}

//quicksort
async function* Eu(e, t = 0, n = e.length - 1) {
	if (t <= n) {
		const r = yield* L0(e, t, n);
		typeof r == "number" && (yield* Eu(e, t, r - 1), yield* Eu(e, r + 1, n))
	}
}
async function* L0(e, t, n) {
	const r = t;
	let o = t,
		i = n + 1;
	for (yield* qi(r); o < i;) {
		for (; --i > t && (yield* ut(i), !(e[i] < e[r])););
		for (; o <= n && o < i && (o++, yield* ut(o), !(e[o] > e[r])););
		o < i && (yield* Bt(e, o, i))
	}
	return r !== i && (yield* Bt(e, r, i)), yield* Ne(i), i
}

//selection sort
async function* I0(e) {
	let t, n;
	for (t = 0; t < e.length; t++) {
		let r = 0;
		for (n = 1; n < e.length - t; n++) yield* qi(r), yield* ut(n), e[r] < e[n] && (r = n);
		n = n - 1, r !== n && e[r] !== e[n] && (yield* Bt(e, r, n)), yield* Ne(n)
	}
}
async function* $0(e) {
	if (e.length === 1) {
		yield* Ne(0);
		return
	}
	let t = 1;
	for (; t * 3 + 1 < e.length;) t = t * 3 + 1;
	for (; t > 0;) {
		for (let n = t; n < e.length; n++) {
			let r = n;
			const o = e[n];
			for (yield* ut(r, r - t); r > 0 && e[r] <= e[r - t];) yield* ut(r, r - t), yield* Bt(e, r - t, r), r -= t;
			e[r] = o, t == 1 && (yield* Ne(0), yield* Ne(n))
		}
		t = Math.floor((t - 1) / 3)
	}
}
const Nt = [{
		name: "bubble",
		fn: b0
	}, {
		name: "selection",
		fn: I0
	}, {
		name: "insertion",
		fn: M0
	}, {
		name: "heap",
		fn: T0
	}, {
		name: "merge",
		fn: xu
	}, {
		name: "quick",
		fn: Eu
	}],
	Qp = Nt.map(e => e.name).concat("all"),
	A0 = [6, 8, 3, 5, 1, 9, 2, 7, 4],
	Wf = {
		min: 10,
		max: 40
	},
	Yp = "Sorting is complete",
	gn = {
		size: 50,
		margin: 4
	},
	bl = {
		size: 30,
		minSize: 10,
		maxHeight: 250,
		margin: 2
	},
	Nl = {
		sort: "#8cf12b",
		highlight: "yellow",
		pivot: "orange",
		bar: "lightgrey"
	},
	U0 = Nt.map(() => !0),
	Vt = document.querySelector(":root");
Vt.style.setProperty("--cell-size", `${gn.size}px`);
Vt.style.setProperty("--cell-margin", `${gn.margin}px`);
Vt.style.setProperty("--bar-size", `${bl.size}px`);
Vt.style.setProperty("--bar-min-size", `${bl.minSize}px`);
Vt.style.setProperty("--bar-max-height", `${bl.maxHeight}px`);
Vt.style.setProperty("--bar-margin", `${bl.margin}px`);
Vt.style.setProperty("--color-sort", Nl.sort);
Vt.style.setProperty("--color-highlight", Nl.highlight);
Vt.style.setProperty("--color-pivot", Nl.pivot);
Vt.style.setProperty("--color-bar", Nl.bar);
const F0 = {
		array: A0,
		visualizerType: "cell",
		isPlaying: !1,
		reset: !1,
		time: 0,
		speed: 5,
		timeIntervalId: null,
		selectedAlgosStatus: U0
	},
	Gp = Wp({
		name: "sortViz",
		initialState: F0,
		reducers: {
			setArray: (e, t) => {
				e.array = t.payload
			},
			setIsPlaying: (e, t) => {
				e.isPlaying = t.payload, t.payload ? R0() : Ff(), !e.isPlaying && e.timeIntervalId && (clearInterval(e.timeIntervalId), e.timeIntervalId = null)
			},
			setIntervalId: (e, t) => {
				e.timeIntervalId = t.payload
			},
			incrementTime: e => {
				e.time++
			},
			setReset: e => {
				e.reset = !e.reset, Ff(), e.time = 0
			},
			modifyAlgoSelection: (e, t) => {
				e.selectedAlgosStatus[t.payload] = !e.selectedAlgosStatus[t.payload]
			},
			setSpeed: (e, t) => {
				e.speed = t.payload, Vf(e)
			},
			toggleVisualizerType: e => {
				e.visualizerType = e.visualizerType === "cell" ? "bar" : "cell", Vf(e)
			}
		}
	});

function Vf(e) {
	e.visualizerType === "cell" ? Bf(Da / e.speed) : Bf(Da / (e.speed * 4)), O0(Da / (e.speed * 4))
}
const {
	setArray: ku,
	setIsPlaying: $r,
	setReset: Tl,
	setSpeed: Hf,
	setIntervalId: B0,
	incrementTime: W0,
	modifyAlgoSelection: V0,
	toggleVisualizerType: H0
} = Gp.actions, K0 = Gp.reducer, Q0 = () => e => {
	const t = setInterval(() => {
		e(W0())
	}, 100);
	e(B0(t))
};
var Qs = {},
	Ys = {};
Ys.__esModule = !0;
Ys.default = X0;

function bi(e) {
	return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? bi = function(n) {
		return typeof n
	} : bi = function(n) {
		return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
	}, bi(e)
}

function La() {}
var Y0 = {
	getItem: La,
	setItem: La,
	removeItem: La
};

function G0(e) {
	if ((typeof self > "u" ? "undefined" : bi(self)) !== "object" || !(e in self)) return !1;
	try {
		var t = self[e],
			n = "redux-persist ".concat(e, " test");
		t.setItem(n, "test"), t.getItem(n), t.removeItem(n)
	} catch {
		return !1
	}
	return !0
}

function X0(e) {
	var t = "".concat(e, "Storage");
	return G0(t) ? self[t] : Y0
}
Qs.__esModule = !0;
Qs.default = Z0;
var J0 = q0(Ys);

function q0(e) {
	return e && e.__esModule ? e : {
		default: e
	}
}

function Z0(e) {
	var t = (0, J0.default)(e);
	return {
		getItem: function(r) {
			return new Promise(function(o, i) {
				o(t.getItem(r))
			})
		},
		setItem: function(r, o) {
			return new Promise(function(i, l) {
				i(t.setItem(r, o))
			})
		},
		removeItem: function(r) {
			return new Promise(function(o, i) {
				o(t.removeItem(r))
			})
		}
	}
}
var Pu = void 0,
	e1 = t1(Qs);

function t1(e) {
	return e && e.__esModule ? e : {
		default: e
	}
}
var n1 = (0, e1.default)("local");
Pu = n1;
const Xp = m0({
		reducer: {
			app: Ef({
				key: "app",
				storage: Pu
			}, _0),
			sortViz: Ef({
				key: "sorting-viz",
				storage: Pu
			}, K0)
		},
		middleware: e => e({
			serializableCheck: {
				ignoredActions: [zs, jl, Ds, Ls, Is, $s]
			}
		})
	}),
	r1 = Wg(Xp);
var Jp = {
		exports: {}
	},
	qp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = C;

function o1(e, t) {
	return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var i1 = typeof Object.is == "function" ? Object.is : o1,
	l1 = Ar.useState,
	a1 = Ar.useEffect,
	u1 = Ar.useLayoutEffect,
	s1 = Ar.useDebugValue;

function c1(e, t) {
	var n = t(),
		r = l1({
			inst: {
				value: n,
				getSnapshot: t
			}
		}),
		o = r[0].inst,
		i = r[1];
	return u1(function() {
		o.value = n, o.getSnapshot = t, Ia(o) && i({
			inst: o
		})
	}, [e, n, t]), a1(function() {
		return Ia(o) && i({
			inst: o
		}), e(function() {
			Ia(o) && i({
				inst: o
			})
		})
	}, [e]), s1(n), n
}

function Ia(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !i1(e, n)
	} catch {
		return !0
	}
}

function f1(e, t) {
	return t()
}
var d1 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f1 : c1;
qp.useSyncExternalStore = Ar.useSyncExternalStore !== void 0 ? Ar.useSyncExternalStore : d1;
Jp.exports = qp;
var p1 = Jp.exports,
	Zp = {
		exports: {}
	},
	eh = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ml = C,
	h1 = p1;

function m1(e, t) {
	return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var v1 = typeof Object.is == "function" ? Object.is : m1,
	y1 = h1.useSyncExternalStore,
	g1 = Ml.useRef,
	w1 = Ml.useEffect,
	S1 = Ml.useMemo,
	x1 = Ml.useDebugValue;
eh.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
	var i = g1(null);
	if (i.current === null) {
		var l = {
			hasValue: !1,
			value: null
		};
		i.current = l
	} else l = i.current;
	i = S1(function() {
		function u(g) {
			if (!s) {
				if (s = !0, c = g, g = r(g), o !== void 0 && l.hasValue) {
					var w = l.value;
					if (o(w, g)) return d = w
				}
				return d = g
			}
			if (w = d, v1(c, g)) return w;
			var v = r(g);
			return o !== void 0 && o(w, v) ? w : (c = g, d = v)
		}
		var s = !1,
			c, d, p = n === void 0 ? null : n;
		return [function() {
			return u(t())
		}, p === null ? void 0 : function() {
			return u(p())
		}]
	}, [t, n, r, o]);
	var a = y1(e, i[0], i[1]);
	return w1(function() {
		l.hasValue = !0, l.value = a
	}, [a]), x1(a), a
};
Zp.exports = eh;
var E1 = Zp.exports,
	th = {
		exports: {}
	},
	dt = {},
	nh = {
		exports: {}
	},
	rh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
	function t(b, L) {
		var I = b.length;
		b.push(L);
		e: for (; 0 < I;) {
			var le = I - 1 >>> 1,
				re = b[le];
			if (0 < o(re, L)) b[le] = L, b[I] = re, I = le;
			else break e
		}
	}

	function n(b) {
		return b.length === 0 ? null : b[0]
	}

	function r(b) {
		if (b.length === 0) return null;
		var L = b[0],
			I = b.pop();
		if (I !== L) {
			b[0] = I;
			e: for (var le = 0, re = b.length, Ht = re >>> 1; le < Ht;) {
				var ee = 2 * (le + 1) - 1,
					Ie = b[ee],
					Je = ee + 1,
					Kt = b[Je];
				if (0 > o(Ie, I)) Je < re && 0 > o(Kt, Ie) ? (b[le] = Kt, b[Je] = I, le = Je) : (b[le] = Ie, b[ee] = I, le = ee);
				else if (Je < re && 0 > o(Kt, I)) b[le] = Kt, b[Je] = I, le = Je;
				else break e
			}
		}
		return L
	}

	function o(b, L) {
		var I = b.sortIndex - L.sortIndex;
		return I !== 0 ? I : b.id - L.id
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var i = performance;
		e.unstable_now = function() {
			return i.now()
		}
	} else {
		var l = Date,
			a = l.now();
		e.unstable_now = function() {
			return l.now() - a
		}
	}
	var u = [],
		s = [],
		c = 1,
		d = null,
		p = 3,
		g = !1,
		w = !1,
		v = !1,
		S = typeof setTimeout == "function" ? setTimeout : null,
		m = typeof clearTimeout == "function" ? clearTimeout : null,
		f = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

	function y(b) {
		for (var L = n(s); L !== null;) {
			if (L.callback === null) r(s);
			else if (L.startTime <= b) r(s), L.sortIndex = L.expirationTime, t(u, L);
			else break;
			L = n(s)
		}
	}

	function h(b) {
		if (v = !1, y(b), !w)
			if (n(u) !== null) w = !0, G(E);
			else {
				var L = n(s);
				L !== null && q(h, L.startTime - b)
			}
	}

	function E(b, L) {
		w = !1, v && (v = !1, m(N), N = -1), g = !0;
		var I = p;
		try {
			for (y(L), d = n(u); d !== null && (!(d.expirationTime > L) || b && !J());) {
				var le = d.callback;
				if (typeof le == "function") {
					d.callback = null, p = d.priorityLevel;
					var re = le(d.expirationTime <= L);
					L = e.unstable_now(), typeof re == "function" ? d.callback = re : d === n(u) && r(u), y(L)
				} else r(u);
				d = n(u)
			}
			if (d !== null) var Ht = !0;
			else {
				var ee = n(s);
				ee !== null && q(h, ee.startTime - L), Ht = !1
			}
			return Ht
		} finally {
			d = null, p = I, g = !1
		}
	}
	var P = !1,
		_ = null,
		N = -1,
		$ = 5,
		M = -1;

	function J() {
		return !(e.unstable_now() - M < $)
	}

	function K() {
		if (_ !== null) {
			var b = e.unstable_now();
			M = b;
			var L = !0;
			try {
				L = _(!0, b)
			} finally {
				L ? Se() : (P = !1, _ = null)
			}
		} else P = !1
	}
	var Se;
	if (typeof f == "function") Se = function() {
		f(K)
	};
	else if (typeof MessageChannel < "u") {
		var He = new MessageChannel,
			F = He.port2;
		He.port1.onmessage = K, Se = function() {
			F.postMessage(null)
		}
	} else Se = function() {
		S(K, 0)
	};

	function G(b) {
		_ = b, P || (P = !0, Se())
	}

	function q(b, L) {
		N = S(function() {
			b(e.unstable_now())
		}, L)
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
		b.callback = null
	}, e.unstable_continueExecution = function() {
		w || g || (w = !0, G(E))
	}, e.unstable_forceFrameRate = function(b) {
		0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < b ? Math.floor(1e3 / b) : 5
	}, e.unstable_getCurrentPriorityLevel = function() {
		return p
	}, e.unstable_getFirstCallbackNode = function() {
		return n(u)
	}, e.unstable_next = function(b) {
		switch (p) {
			case 1:
			case 2:
			case 3:
				var L = 3;
				break;
			default:
				L = p
		}
		var I = p;
		p = L;
		try {
			return b()
		} finally {
			p = I
		}
	}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(b, L) {
		switch (b) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break;
			default:
				b = 3
		}
		var I = p;
		p = b;
		try {
			return L()
		} finally {
			p = I
		}
	}, e.unstable_scheduleCallback = function(b, L, I) {
		var le = e.unstable_now();
		switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? le + I : le) : I = le, b) {
			case 1:
				var re = -1;
				break;
			case 2:
				re = 250;
				break;
			case 5:
				re = 1073741823;
				break;
			case 4:
				re = 1e4;
				break;
			default:
				re = 5e3
		}
		return re = I + re, b = {
			id: c++,
			callback: L,
			priorityLevel: b,
			startTime: I,
			expirationTime: re,
			sortIndex: -1
		}, I > le ? (b.sortIndex = I, t(s, b), n(u) === null && b === n(s) && (v ? (m(N), N = -1) : v = !0, q(h, I - le))) : (b.sortIndex = re, t(u, b), w || g || (w = !0, G(E))), b
	}, e.unstable_shouldYield = J, e.unstable_wrapCallback = function(b) {
		var L = p;
		return function() {
			var I = p;
			p = L;
			try {
				return b.apply(this, arguments)
			} finally {
				p = I
			}
		}
	}
})(rh);
nh.exports = rh;
var k1 = nh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oh = C,
	ft = k1;

function j(e) {
	for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
	return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ih = new Set,
	Do = {};

function ur(e, t) {
	Ur(e, t), Ur(e + "Capture", t)
}

function Ur(e, t) {
	for (Do[e] = t, e = 0; e < t.length; e++) ih.add(t[e])
}
var on = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
	Cu = Object.prototype.hasOwnProperty,
	P1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Kf = {},
	Qf = {};

function C1(e) {
	return Cu.call(Qf, e) ? !0 : Cu.call(Kf, e) ? !1 : P1.test(e) ? Qf[e] = !0 : (Kf[e] = !0, !1)
}

function _1(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
		default:
			return !1
	}
}

function R1(e, t, n, r) {
	if (t === null || typeof t > "u" || _1(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null) switch (n.type) {
		case 3:
			return !t;
		case 4:
			return t === !1;
		case 5:
			return isNaN(t);
		case 6:
			return isNaN(t) || 1 > t
	}
	return !1
}

function Xe(e, t, n, r, o, i, l) {
	this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
	Le[e] = new Xe(e, 0, !1, e, null, !1, !1)
});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"]
].forEach(function(e) {
	var t = e[0];
	Le[t] = new Xe(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
	Le[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
	Le[e] = new Xe(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
	Le[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
	Le[e] = new Xe(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
	Le[e] = new Xe(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
	Le[e] = new Xe(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
	Le[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Gs = /[\-:]([a-z])/g;

function Xs(e) {
	return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
	var t = e.replace(Gs, Xs);
	Le[t] = new Xe(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
	var t = e.replace(Gs, Xs);
	Le[t] = new Xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
	var t = e.replace(Gs, Xs);
	Le[t] = new Xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
	Le[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Le.xlinkHref = new Xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
	Le[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Js(e, t, n, r) {
	var o = Le.hasOwnProperty(t) ? Le[t] : null;
	(o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (R1(t, n, o, r) && (n = null), r || o === null ? C1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var sn = oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	ci = Symbol.for("react.element"),
	mr = Symbol.for("react.portal"),
	vr = Symbol.for("react.fragment"),
	qs = Symbol.for("react.strict_mode"),
	_u = Symbol.for("react.profiler"),
	lh = Symbol.for("react.provider"),
	ah = Symbol.for("react.context"),
	Zs = Symbol.for("react.forward_ref"),
	Ru = Symbol.for("react.suspense"),
	Ou = Symbol.for("react.suspense_list"),
	ec = Symbol.for("react.memo"),
	pn = Symbol.for("react.lazy"),
	uh = Symbol.for("react.offscreen"),
	Yf = Symbol.iterator;

function lo(e) {
	return e === null || typeof e != "object" ? null : (e = Yf && e[Yf] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ge = Object.assign,
	$a;

function vo(e) {
	if ($a === void 0) try {
		throw Error()
	} catch (n) {
		var t = n.stack.trim().match(/\n( *(at )?)/);
		$a = t && t[1] || ""
	}
	return `
` + $a + e
}
var Aa = !1;

function Ua(e, t) {
	if (!e || Aa) return "";
	Aa = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (t = function() {
					throw Error()
				}, Object.defineProperty(t.prototype, "props", {
					set: function() {
						throw Error()
					}
				}), typeof Reflect == "object" && Reflect.construct) {
				try {
					Reflect.construct(t, [])
				} catch (s) {
					var r = s
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (s) {
					r = s
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (s) {
				r = s
			}
			e()
		}
	} catch (s) {
		if (s && r && typeof s.stack == "string") {
			for (var o = s.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, a = i.length - 1; 1 <= l && 0 <= a && o[l] !== i[a];) a--;
			for (; 1 <= l && 0 <= a; l--, a--)
				if (o[l] !== i[a]) {
					if (l !== 1 || a !== 1)
						do
							if (l--, a--, 0 > a || o[l] !== i[a]) {
								var u = `
` + o[l].replace(" at new ", " at ");
								return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
							} while (1 <= l && 0 <= a);
					break
				}
		}
	} finally {
		Aa = !1, Error.prepareStackTrace = n
	}
	return (e = e ? e.displayName || e.name : "") ? vo(e) : ""
}

function O1(e) {
	switch (e.tag) {
		case 5:
			return vo(e.type);
		case 16:
			return vo("Lazy");
		case 13:
			return vo("Suspense");
		case 19:
			return vo("SuspenseList");
		case 0:
		case 2:
		case 15:
			return e = Ua(e.type, !1), e;
		case 11:
			return e = Ua(e.type.render, !1), e;
		case 1:
			return e = Ua(e.type, !0), e;
		default:
			return ""
	}
}

function ju(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case vr:
			return "Fragment";
		case mr:
			return "Portal";
		case _u:
			return "Profiler";
		case qs:
			return "StrictMode";
		case Ru:
			return "Suspense";
		case Ou:
			return "SuspenseList"
	}
	if (typeof e == "object") switch (e.$$typeof) {
		case ah:
			return (e.displayName || "Context") + ".Consumer";
		case lh:
			return (e._context.displayName || "Context") + ".Provider";
		case Zs:
			var t = e.render;
			return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
		case ec:
			return t = e.displayName || null, t !== null ? t : ju(e.type) || "Memo";
		case pn:
			t = e._payload, e = e._init;
			try {
				return ju(e(t))
			} catch {}
	}
	return null
}

function j1(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return ju(t);
		case 8:
			return t === qs ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t
	}
	return null
}

function Tn(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return ""
	}
}

function sh(e) {
	var t = e.type;
	return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function b1(e) {
	var t = sh(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
		var o = n.get,
			i = n.set;
		return Object.defineProperty(e, t, {
			configurable: !0,
			get: function() {
				return o.call(this)
			},
			set: function(l) {
				r = "" + l, i.call(this, l)
			}
		}), Object.defineProperty(e, t, {
			enumerable: n.enumerable
		}), {
			getValue: function() {
				return r
			},
			setValue: function(l) {
				r = "" + l
			},
			stopTracking: function() {
				e._valueTracker = null, delete e[t]
			}
		}
	}
}

function fi(e) {
	e._valueTracker || (e._valueTracker = b1(e))
}

function ch(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return e && (r = sh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function el(e) {
	if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}

function bu(e, t) {
	var n = t.checked;
	return ge({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked
	})
}

function Gf(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	n = Tn(t.value != null ? t.value : n), e._wrapperState = {
		initialChecked: r,
		initialValue: n,
		controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
	}
}

function fh(e, t) {
	t = t.checked, t != null && Js(e, "checked", t, !1)
}

function Nu(e, t) {
	fh(e, t);
	var n = Tn(t.value),
		r = t.type;
	if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return
	}
	t.hasOwnProperty("value") ? Tu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Tu(e, t.type, Tn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Xf(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
		t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
	}
	n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Tu(e, t, n) {
	(t !== "number" || el(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var yo = Array.isArray;

function br(e, t, n, r) {
	if (e = e.options, t) {
		t = {};
		for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
		for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
	} else {
		for (n = "" + Tn(n), t = null, o = 0; o < e.length; o++) {
			if (e[o].value === n) {
				e[o].selected = !0, r && (e[o].defaultSelected = !0);
				return
			}
			t !== null || e[o].disabled || (t = e[o])
		}
		t !== null && (t.selected = !0)
	}
}

function Mu(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
	return ge({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue
	})
}

function Jf(e, t) {
	var n = t.value;
	if (n == null) {
		if (n = t.children, t = t.defaultValue, n != null) {
			if (t != null) throw Error(j(92));
			if (yo(n)) {
				if (1 < n.length) throw Error(j(93));
				n = n[0]
			}
			t = n
		}
		t == null && (t = ""), n = t
	}
	e._wrapperState = {
		initialValue: Tn(n)
	}
}

function dh(e, t) {
	var n = Tn(t.value),
		r = Tn(t.defaultValue);
	n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function qf(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function ph(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml"
	}
}

function zu(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml" ? ph(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var di, hh = function(e) {
	return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
		MSApp.execUnsafeLocalFunction(function() {
			return e(t, n, r, o)
		})
	} : e
}(function(e, t) {
	if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
	else {
		for (di = di || document.createElement("div"), di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = di.firstChild; e.firstChild;) e.removeChild(e.firstChild);
		for (; t.firstChild;) e.appendChild(t.firstChild)
	}
});

function Lo(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return
		}
	}
	e.textContent = t
}
var xo = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	},
	N1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(xo).forEach(function(e) {
	N1.forEach(function(t) {
		t = t + e.charAt(0).toUpperCase() + e.substring(1), xo[t] = xo[e]
	})
});

function mh(e, t, n) {
	return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xo.hasOwnProperty(e) && xo[e] ? ("" + t).trim() : t + "px"
}

function vh(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				o = mh(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
		}
}
var T1 = ge({
	menuitem: !0
}, {
	area: !0,
	base: !0,
	br: !0,
	col: !0,
	embed: !0,
	hr: !0,
	img: !0,
	input: !0,
	keygen: !0,
	link: !0,
	meta: !0,
	param: !0,
	source: !0,
	track: !0,
	wbr: !0
});

function Du(e, t) {
	if (t) {
		if (T1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(j(60));
			if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(j(61))
		}
		if (t.style != null && typeof t.style != "object") throw Error(j(62))
	}
}

function Lu(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
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
			return !0
	}
}
var Iu = null;

function tc(e) {
	return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var $u = null,
	Nr = null,
	Tr = null;

function Zf(e) {
	if (e = ri(e)) {
		if (typeof $u != "function") throw Error(j(280));
		var t = e.stateNode;
		t && (t = $l(t), $u(e.stateNode, e.type, t))
	}
}

function yh(e) {
	Nr ? Tr ? Tr.push(e) : Tr = [e] : Nr = e
}

function gh() {
	if (Nr) {
		var e = Nr,
			t = Tr;
		if (Tr = Nr = null, Zf(e), t)
			for (e = 0; e < t.length; e++) Zf(t[e])
	}
}

function wh(e, t) {
	return e(t)
}

function Sh() {}
var Fa = !1;

function xh(e, t, n) {
	if (Fa) return e(t, n);
	Fa = !0;
	try {
		return wh(e, t, n)
	} finally {
		Fa = !1, (Nr !== null || Tr !== null) && (Sh(), gh())
	}
}

function Io(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = $l(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
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
			(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
			break e;
		default:
			e = !1
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(j(231, t, typeof n));
	return n
}
var Au = !1;
if (on) try {
	var ao = {};
	Object.defineProperty(ao, "passive", {
		get: function() {
			Au = !0
		}
	}), window.addEventListener("test", ao, ao), window.removeEventListener("test", ao, ao)
} catch {
	Au = !1
}

function M1(e, t, n, r, o, i, l, a, u) {
	var s = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, s)
	} catch (c) {
		this.onError(c)
	}
}
var Eo = !1,
	tl = null,
	nl = !1,
	Uu = null,
	z1 = {
		onError: function(e) {
			Eo = !0, tl = e
		}
	};

function D1(e, t, n, r, o, i, l, a, u) {
	Eo = !1, tl = null, M1.apply(z1, arguments)
}

function L1(e, t, n, r, o, i, l, a, u) {
	if (D1.apply(this, arguments), Eo) {
		if (Eo) {
			var s = tl;
			Eo = !1, tl = null
		} else throw Error(j(198));
		nl || (nl = !0, Uu = s)
	}
}

function sr(e) {
	var t = e,
		n = e;
	if (e.alternate)
		for (; t.return;) t = t.return;
	else {
		e = t;
		do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
	}
	return t.tag === 3 ? n : null
}

function Eh(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
	}
	return null
}

function ed(e) {
	if (sr(e) !== e) throw Error(j(188))
}

function I1(e) {
	var t = e.alternate;
	if (!t) {
		if (t = sr(e), t === null) throw Error(j(188));
		return t !== e ? null : e
	}
	for (var n = e, r = t;;) {
		var o = n.return;
		if (o === null) break;
		var i = o.alternate;
		if (i === null) {
			if (r = o.return, r !== null) {
				n = r;
				continue
			}
			break
		}
		if (o.child === i.child) {
			for (i = o.child; i;) {
				if (i === n) return ed(o), e;
				if (i === r) return ed(o), t;
				i = i.sibling
			}
			throw Error(j(188))
		}
		if (n.return !== r.return) n = o, r = i;
		else {
			for (var l = !1, a = o.child; a;) {
				if (a === n) {
					l = !0, n = o, r = i;
					break
				}
				if (a === r) {
					l = !0, r = o, n = i;
					break
				}
				a = a.sibling
			}
			if (!l) {
				for (a = i.child; a;) {
					if (a === n) {
						l = !0, n = i, r = o;
						break
					}
					if (a === r) {
						l = !0, r = i, n = o;
						break
					}
					a = a.sibling
				}
				if (!l) throw Error(j(189))
			}
		}
		if (n.alternate !== r) throw Error(j(190))
	}
	if (n.tag !== 3) throw Error(j(188));
	return n.stateNode.current === n ? e : t
}

function kh(e) {
	return e = I1(e), e !== null ? Ph(e) : null
}

function Ph(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null;) {
		var t = Ph(e);
		if (t !== null) return t;
		e = e.sibling
	}
	return null
}
var Ch = ft.unstable_scheduleCallback,
	td = ft.unstable_cancelCallback,
	$1 = ft.unstable_shouldYield,
	A1 = ft.unstable_requestPaint,
	ke = ft.unstable_now,
	U1 = ft.unstable_getCurrentPriorityLevel,
	nc = ft.unstable_ImmediatePriority,
	_h = ft.unstable_UserBlockingPriority,
	rl = ft.unstable_NormalPriority,
	F1 = ft.unstable_LowPriority,
	Rh = ft.unstable_IdlePriority,
	zl = null,
	Ut = null;

function B1(e) {
	if (Ut && typeof Ut.onCommitFiberRoot == "function") try {
		Ut.onCommitFiberRoot(zl, e, void 0, (e.current.flags & 128) === 128)
	} catch {}
}
var Tt = Math.clz32 ? Math.clz32 : H1,
	W1 = Math.log,
	V1 = Math.LN2;

function H1(e) {
	return e >>>= 0, e === 0 ? 32 : 31 - (W1(e) / V1 | 0) | 0
}
var pi = 64,
	hi = 4194304;

function go(e) {
	switch (e & -e) {
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
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e
	}
}

function ol(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		o = e.suspendedLanes,
		i = e.pingedLanes,
		l = n & 268435455;
	if (l !== 0) {
		var a = l & ~o;
		a !== 0 ? r = go(a) : (i &= l, i !== 0 && (r = go(i)))
	} else l = n & ~o, l !== 0 ? r = go(l) : i !== 0 && (r = go(i));
	if (r === 0) return 0;
	if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
	if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
		for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Tt(t), o = 1 << n, r |= e[n], t &= ~o;
	return r
}

function K1(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
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
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1
	}
}

function Q1(e, t) {
	for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
		var l = 31 - Tt(i),
			a = 1 << l,
			u = o[l];
		u === -1 ? (!(a & n) || a & r) && (o[l] = K1(a, t)) : u <= t && (e.expiredLanes |= a), i &= ~a
	}
}

function Fu(e) {
	return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Oh() {
	var e = pi;
	return pi <<= 1, !(pi & 4194240) && (pi = 64), e
}

function Ba(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t
}

function ti(e, t, n) {
	e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Tt(t), e[t] = n
}

function Y1(e, t) {
	var n = e.pendingLanes & ~t;
	e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n;) {
		var o = 31 - Tt(n),
			i = 1 << o;
		t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
	}
}

function rc(e, t) {
	var n = e.entangledLanes |= t;
	for (e = e.entanglements; n;) {
		var r = 31 - Tt(n),
			o = 1 << r;
		o & t | e[r] & t && (e[r] |= t), n &= ~o
	}
}
var te = 0;

function jh(e) {
	return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var bh, oc, Nh, Th, Mh, Bu = !1,
	mi = [],
	kn = null,
	Pn = null,
	Cn = null,
	$o = new Map,
	Ao = new Map,
	vn = [],
	G1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function nd(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			kn = null;
			break;
		case "dragenter":
		case "dragleave":
			Pn = null;
			break;
		case "mouseover":
		case "mouseout":
			Cn = null;
			break;
		case "pointerover":
		case "pointerout":
			$o.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Ao.delete(t.pointerId)
	}
}

function uo(e, t, n, r, o, i) {
	return e === null || e.nativeEvent !== i ? (e = {
		blockedOn: t,
		domEventName: n,
		eventSystemFlags: r,
		nativeEvent: i,
		targetContainers: [o]
	}, t !== null && (t = ri(t), t !== null && oc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function X1(e, t, n, r, o) {
	switch (t) {
		case "focusin":
			return kn = uo(kn, e, t, n, r, o), !0;
		case "dragenter":
			return Pn = uo(Pn, e, t, n, r, o), !0;
		case "mouseover":
			return Cn = uo(Cn, e, t, n, r, o), !0;
		case "pointerover":
			var i = o.pointerId;
			return $o.set(i, uo($o.get(i) || null, e, t, n, r, o)), !0;
		case "gotpointercapture":
			return i = o.pointerId, Ao.set(i, uo(Ao.get(i) || null, e, t, n, r, o)), !0
	}
	return !1
}

function zh(e) {
	var t = Kn(e.target);
	if (t !== null) {
		var n = sr(t);
		if (n !== null) {
			if (t = n.tag, t === 13) {
				if (t = Eh(n), t !== null) {
					e.blockedOn = t, Mh(e.priority, function() {
						Nh(n)
					});
					return
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return
			}
		}
	}
	e.blockedOn = null
}

function Ni(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length;) {
		var n = Wu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			Iu = r, n.target.dispatchEvent(r), Iu = null
		} else return t = ri(n), t !== null && oc(t), e.blockedOn = n, !1;
		t.shift()
	}
	return !0
}

function rd(e, t, n) {
	Ni(e) && n.delete(t)
}

function J1() {
	Bu = !1, kn !== null && Ni(kn) && (kn = null), Pn !== null && Ni(Pn) && (Pn = null), Cn !== null && Ni(Cn) && (Cn = null), $o.forEach(rd), Ao.forEach(rd)
}

function so(e, t) {
	e.blockedOn === t && (e.blockedOn = null, Bu || (Bu = !0, ft.unstable_scheduleCallback(ft.unstable_NormalPriority, J1)))
}

function Uo(e) {
	function t(o) {
		return so(o, e)
	}
	if (0 < mi.length) {
		so(mi[0], e);
		for (var n = 1; n < mi.length; n++) {
			var r = mi[n];
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (kn !== null && so(kn, e), Pn !== null && so(Pn, e), Cn !== null && so(Cn, e), $o.forEach(t), Ao.forEach(t), n = 0; n < vn.length; n++) r = vn[n], r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < vn.length && (n = vn[0], n.blockedOn === null);) zh(n), n.blockedOn === null && vn.shift()
}
var Mr = sn.ReactCurrentBatchConfig,
	il = !0;

function q1(e, t, n, r) {
	var o = te,
		i = Mr.transition;
	Mr.transition = null;
	try {
		te = 1, ic(e, t, n, r)
	} finally {
		te = o, Mr.transition = i
	}
}

function Z1(e, t, n, r) {
	var o = te,
		i = Mr.transition;
	Mr.transition = null;
	try {
		te = 4, ic(e, t, n, r)
	} finally {
		te = o, Mr.transition = i
	}
}

function ic(e, t, n, r) {
	if (il) {
		var o = Wu(e, t, n, r);
		if (o === null) qa(e, t, r, ll, n), nd(e, r);
		else if (X1(o, e, t, n, r)) r.stopPropagation();
		else if (nd(e, r), t & 4 && -1 < G1.indexOf(e)) {
			for (; o !== null;) {
				var i = ri(o);
				if (i !== null && bh(i), i = Wu(e, t, n, r), i === null && qa(e, t, r, ll, n), i === o) break;
				o = i
			}
			o !== null && r.stopPropagation()
		} else qa(e, t, r, null, n)
	}
}
var ll = null;

function Wu(e, t, n, r) {
	if (ll = null, e = tc(r), e = Kn(e), e !== null)
		if (t = sr(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
		if (e = Eh(t), e !== null) return e;
		e = null
	} else if (n === 3) {
		if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
		e = null
	} else t !== e && (e = null);
	return ll = e, null
}

function Dh(e) {
	switch (e) {
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
			return 1;
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
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (U1()) {
				case nc:
					return 1;
				case _h:
					return 4;
				case rl:
				case F1:
					return 16;
				case Rh:
					return 536870912;
				default:
					return 16
			}
		default:
			return 16
	}
}
var wn = null,
	lc = null,
	Ti = null;

function Lh() {
	if (Ti) return Ti;
	var e, t = lc,
		n = t.length,
		r, o = "value" in wn ? wn.value : wn.textContent,
		i = o.length;
	for (e = 0; e < n && t[e] === o[e]; e++);
	var l = n - e;
	for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
	return Ti = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Mi(e) {
	var t = e.keyCode;
	return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function vi() {
	return !0
}

function od() {
	return !1
}

function pt(e) {
	function t(n, r, o, i, l) {
		this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
		for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
		return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? vi : od, this.isPropagationStopped = od, this
	}
	return ge(t.prototype, {
		preventDefault: function() {
			this.defaultPrevented = !0;
			var n = this.nativeEvent;
			n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = vi)
		},
		stopPropagation: function() {
			var n = this.nativeEvent;
			n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = vi)
		},
		persist: function() {},
		isPersistent: vi
	}), t
}
var Xr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	ac = pt(Xr),
	ni = ge({}, Xr, {
		view: 0,
		detail: 0
	}),
	ew = pt(ni),
	Wa, Va, co, Dl = ge({}, ni, {
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
		getModifierState: uc,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== co && (co && e.type === "mousemove" ? (Wa = e.screenX - co.screenX, Va = e.screenY - co.screenY) : Va = Wa = 0, co = e), Wa)
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Va
		}
	}),
	id = pt(Dl),
	tw = ge({}, Dl, {
		dataTransfer: 0
	}),
	nw = pt(tw),
	rw = ge({}, ni, {
		relatedTarget: 0
	}),
	Ha = pt(rw),
	ow = ge({}, Xr, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	iw = pt(ow),
	lw = ge({}, Xr, {
		clipboardData: function(e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData
		}
	}),
	aw = pt(lw),
	uw = ge({}, Xr, {
		data: 0
	}),
	ld = pt(uw),
	sw = {
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
		MozPrintableKey: "Unidentified"
	},
	cw = {
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
		224: "Meta"
	},
	fw = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};

function dw(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = fw[e]) ? !!t[e] : !1
}

function uc() {
	return dw
}
var pw = ge({}, ni, {
		key: function(e) {
			if (e.key) {
				var t = sw[e.key] || e.key;
				if (t !== "Unidentified") return t
			}
			return e.type === "keypress" ? (e = Mi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cw[e.keyCode] || "Unidentified" : ""
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: uc,
		charCode: function(e) {
			return e.type === "keypress" ? Mi(e) : 0
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		},
		which: function(e) {
			return e.type === "keypress" ? Mi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		}
	}),
	hw = pt(pw),
	mw = ge({}, Dl, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}),
	ad = pt(mw),
	vw = ge({}, ni, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: uc
	}),
	yw = pt(vw),
	gw = ge({}, Xr, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	ww = pt(gw),
	Sw = ge({}, Dl, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	xw = pt(Sw),
	Ew = [9, 13, 27, 32],
	sc = on && "CompositionEvent" in window,
	ko = null;
on && "documentMode" in document && (ko = document.documentMode);
var kw = on && "TextEvent" in window && !ko,
	Ih = on && (!sc || ko && 8 < ko && 11 >= ko),
	ud = String.fromCharCode(32),
	sd = !1;

function $h(e, t) {
	switch (e) {
		case "keyup":
			return Ew.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1
	}
}

function Ah(e) {
	return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var yr = !1;

function Pw(e, t) {
	switch (e) {
		case "compositionend":
			return Ah(t);
		case "keypress":
			return t.which !== 32 ? null : (sd = !0, ud);
		case "textInput":
			return e = t.data, e === ud && sd ? null : e;
		default:
			return null
	}
}

function Cw(e, t) {
	if (yr) return e === "compositionend" || !sc && $h(e, t) ? (e = Lh(), Ti = lc = wn = null, yr = !1, e) : null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which)
			}
			return null;
		case "compositionend":
			return Ih && t.locale !== "ko" ? null : t.data;
		default:
			return null
	}
}
var _w = {
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
	week: !0
};

function cd(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!_w[e.type] : t === "textarea"
}

function Uh(e, t, n, r) {
	yh(r), t = al(t, "onChange"), 0 < t.length && (n = new ac("onChange", "change", null, n, r), e.push({
		event: n,
		listeners: t
	}))
}
var Po = null,
	Fo = null;

function Rw(e) {
	Jh(e, 0)
}

function Ll(e) {
	var t = Sr(e);
	if (ch(t)) return e
}

function Ow(e, t) {
	if (e === "change") return t
}
var Fh = !1;
if (on) {
	var Ka;
	if (on) {
		var Qa = "oninput" in document;
		if (!Qa) {
			var fd = document.createElement("div");
			fd.setAttribute("oninput", "return;"), Qa = typeof fd.oninput == "function"
		}
		Ka = Qa
	} else Ka = !1;
	Fh = Ka && (!document.documentMode || 9 < document.documentMode)
}

function dd() {
	Po && (Po.detachEvent("onpropertychange", Bh), Fo = Po = null)
}

function Bh(e) {
	if (e.propertyName === "value" && Ll(Fo)) {
		var t = [];
		Uh(t, Fo, e, tc(e)), xh(Rw, t)
	}
}

function jw(e, t, n) {
	e === "focusin" ? (dd(), Po = t, Fo = n, Po.attachEvent("onpropertychange", Bh)) : e === "focusout" && dd()
}

function bw(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ll(Fo)
}

function Nw(e, t) {
	if (e === "click") return Ll(t)
}

function Tw(e, t) {
	if (e === "input" || e === "change") return Ll(t)
}

function Mw(e, t) {
	return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var zt = typeof Object.is == "function" ? Object.is : Mw;

function Bo(e, t) {
	if (zt(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var o = n[r];
		if (!Cu.call(t, o) || !zt(e[o], t[o])) return !1
	}
	return !0
}

function pd(e) {
	for (; e && e.firstChild;) e = e.firstChild;
	return e
}

function hd(e, t) {
	var n = pd(e);
	e = 0;
	for (var r; n;) {
		if (n.nodeType === 3) {
			if (r = e + n.textContent.length, e <= t && r >= t) return {
				node: n,
				offset: t - e
			};
			e = r
		}
		e: {
			for (; n;) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = pd(n)
	}
}

function Wh(e, t) {
	return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Vh() {
	for (var e = window, t = el(); t instanceof e.HTMLIFrameElement;) {
		try {
			var n = typeof t.contentWindow.location.href == "string"
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow;
		else break;
		t = el(e.document)
	}
	return t
}

function cc(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function zw(e) {
	var t = Vh(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (t !== n && n && n.ownerDocument && Wh(n.ownerDocument.documentElement, n)) {
		if (r !== null && cc(n)) {
			if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
			else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
				e = e.getSelection();
				var o = n.textContent.length,
					i = Math.min(r.start, o);
				r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = hd(n, i);
				var l = hd(n, r);
				o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
			element: e,
			left: e.scrollLeft,
			top: e.scrollTop
		});
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
	}
}
var Dw = on && "documentMode" in document && 11 >= document.documentMode,
	gr = null,
	Vu = null,
	Co = null,
	Hu = !1;

function md(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Hu || gr == null || gr !== el(r) || (r = gr, "selectionStart" in r && cc(r) ? r = {
		start: r.selectionStart,
		end: r.selectionEnd
	} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
		anchorNode: r.anchorNode,
		anchorOffset: r.anchorOffset,
		focusNode: r.focusNode,
		focusOffset: r.focusOffset
	}), Co && Bo(Co, r) || (Co = r, r = al(Vu, "onSelect"), 0 < r.length && (t = new ac("onSelect", "select", null, t, n), e.push({
		event: t,
		listeners: r
	}), t.target = gr)))
}

function yi(e, t) {
	var n = {};
	return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var wr = {
		animationend: yi("Animation", "AnimationEnd"),
		animationiteration: yi("Animation", "AnimationIteration"),
		animationstart: yi("Animation", "AnimationStart"),
		transitionend: yi("Transition", "TransitionEnd")
	},
	Ya = {},
	Hh = {};
on && (Hh = document.createElement("div").style, "AnimationEvent" in window || (delete wr.animationend.animation, delete wr.animationiteration.animation, delete wr.animationstart.animation), "TransitionEvent" in window || delete wr.transitionend.transition);

function Il(e) {
	if (Ya[e]) return Ya[e];
	if (!wr[e]) return e;
	var t = wr[e],
		n;
	for (n in t)
		if (t.hasOwnProperty(n) && n in Hh) return Ya[e] = t[n];
	return e
}
var Kh = Il("animationend"),
	Qh = Il("animationiteration"),
	Yh = Il("animationstart"),
	Gh = Il("transitionend"),
	Xh = new Map,
	vd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Ln(e, t) {
	Xh.set(e, t), ur(t, [e])
}
for (var Ga = 0; Ga < vd.length; Ga++) {
	var Xa = vd[Ga],
		Lw = Xa.toLowerCase(),
		Iw = Xa[0].toUpperCase() + Xa.slice(1);
	Ln(Lw, "on" + Iw)
}
Ln(Kh, "onAnimationEnd");
Ln(Qh, "onAnimationIteration");
Ln(Yh, "onAnimationStart");
Ln("dblclick", "onDoubleClick");
Ln("focusin", "onFocus");
Ln("focusout", "onBlur");
Ln(Gh, "onTransitionEnd");
Ur("onMouseEnter", ["mouseout", "mouseover"]);
Ur("onMouseLeave", ["mouseout", "mouseover"]);
Ur("onPointerEnter", ["pointerout", "pointerover"]);
Ur("onPointerLeave", ["pointerout", "pointerover"]);
ur("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ur("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ur("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ur("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ur("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var wo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	$w = new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));

function yd(e, t, n) {
	var r = e.type || "unknown-event";
	e.currentTarget = n, L1(r, t, void 0, e), e.currentTarget = null
}

function Jh(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			o = r.event;
		r = r.listeners;
		e: {
			var i = void 0;
			if (t)
				for (var l = r.length - 1; 0 <= l; l--) {
					var a = r[l],
						u = a.instance,
						s = a.currentTarget;
					if (a = a.listener, u !== i && o.isPropagationStopped()) break e;
					yd(o, a, s), i = u
				} else
					for (l = 0; l < r.length; l++) {
						if (a = r[l], u = a.instance, s = a.currentTarget, a = a.listener, u !== i && o.isPropagationStopped()) break e;
						yd(o, a, s), i = u
					}
		}
	}
	if (nl) throw e = Uu, nl = !1, Uu = null, e
}

function ce(e, t) {
	var n = t[Xu];
	n === void 0 && (n = t[Xu] = new Set);
	var r = e + "__bubble";
	n.has(r) || (qh(t, e, 2, !1), n.add(r))
}

function Ja(e, t, n) {
	var r = 0;
	t && (r |= 4), qh(n, e, r, t)
}
var gi = "_reactListening" + Math.random().toString(36).slice(2);

function Wo(e) {
	if (!e[gi]) {
		e[gi] = !0, ih.forEach(function(n) {
			n !== "selectionchange" && ($w.has(n) || Ja(n, !1, e), Ja(n, !0, e))
		});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[gi] || (t[gi] = !0, Ja("selectionchange", !1, t))
	}
}

function qh(e, t, n, r) {
	switch (Dh(t)) {
		case 1:
			var o = q1;
			break;
		case 4:
			o = Z1;
			break;
		default:
			o = ic
	}
	n = o.bind(null, t, n, e), o = void 0, !Au || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
		capture: !0,
		passive: o
	}) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
		passive: o
	}) : e.addEventListener(t, n, !1)
}

function qa(e, t, n, r, o) {
	var i = r;
	if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
		if (r === null) return;
		var l = r.tag;
		if (l === 3 || l === 4) {
			var a = r.stateNode.containerInfo;
			if (a === o || a.nodeType === 8 && a.parentNode === o) break;
			if (l === 4)
				for (l = r.return; l !== null;) {
					var u = l.tag;
					if ((u === 3 || u === 4) && (u = l.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o)) return;
					l = l.return
				}
			for (; a !== null;) {
				if (l = Kn(a), l === null) return;
				if (u = l.tag, u === 5 || u === 6) {
					r = i = l;
					continue e
				}
				a = a.parentNode
			}
		}
		r = r.return
	}
	xh(function() {
		var s = i,
			c = tc(n),
			d = [];
		e: {
			var p = Xh.get(e);
			if (p !== void 0) {
				var g = ac,
					w = e;
				switch (e) {
					case "keypress":
						if (Mi(n) === 0) break e;
					case "keydown":
					case "keyup":
						g = hw;
						break;
					case "focusin":
						w = "focus", g = Ha;
						break;
					case "focusout":
						w = "blur", g = Ha;
						break;
					case "beforeblur":
					case "afterblur":
						g = Ha;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						g = id;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						g = nw;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						g = yw;
						break;
					case Kh:
					case Qh:
					case Yh:
						g = iw;
						break;
					case Gh:
						g = ww;
						break;
					case "scroll":
						g = ew;
						break;
					case "wheel":
						g = xw;
						break;
					case "copy":
					case "cut":
					case "paste":
						g = aw;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						g = ad
				}
				var v = (t & 4) !== 0,
					S = !v && e === "scroll",
					m = v ? p !== null ? p + "Capture" : null : p;
				v = [];
				for (var f = s, y; f !== null;) {
					y = f;
					var h = y.stateNode;
					if (y.tag === 5 && h !== null && (y = h, m !== null && (h = Io(f, m), h != null && v.push(Vo(f, h, y)))), S) break;
					f = f.return
				}
				0 < v.length && (p = new g(p, w, null, n, c), d.push({
					event: p,
					listeners: v
				}))
			}
		}
		if (!(t & 7)) {
			e: {
				if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== Iu && (w = n.relatedTarget || n.fromElement) && (Kn(w) || w[ln])) break e;
				if ((g || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = s, w = w ? Kn(w) : null, w !== null && (S = sr(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = s), g !== w)) {
					if (v = id, h = "onMouseLeave", m = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (v = ad, h = "onPointerLeave", m = "onPointerEnter", f = "pointer"), S = g == null ? p : Sr(g), y = w == null ? p : Sr(w), p = new v(h, f + "leave", g, n, c), p.target = S, p.relatedTarget = y, h = null, Kn(c) === s && (v = new v(m, f + "enter", w, n, c), v.target = y, v.relatedTarget = S, h = v), S = h, g && w) t: {
						for (v = g, m = w, f = 0, y = v; y; y = cr(y)) f++;
						for (y = 0, h = m; h; h = cr(h)) y++;
						for (; 0 < f - y;) v = cr(v),
						f--;
						for (; 0 < y - f;) m = cr(m),
						y--;
						for (; f--;) {
							if (v === m || m !== null && v === m.alternate) break t;
							v = cr(v), m = cr(m)
						}
						v = null
					}
					else v = null;
					g !== null && gd(d, p, g, v, !1), w !== null && S !== null && gd(d, S, w, v, !0)
				}
			}
			e: {
				if (p = s ? Sr(s) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var E = Ow;
				else if (cd(p))
					if (Fh) E = Tw;
					else {
						E = bw;
						var P = jw
					}
				else(g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Nw);
				if (E && (E = E(e, s))) {
					Uh(d, E, n, c);
					break e
				}
				P && P(e, p, s),
				e === "focusout" && (P = p._wrapperState) && P.controlled && p.type === "number" && Tu(p, "number", p.value)
			}
			switch (P = s ? Sr(s) : window, e) {
				case "focusin":
					(cd(P) || P.contentEditable === "true") && (gr = P, Vu = s, Co = null);
					break;
				case "focusout":
					Co = Vu = gr = null;
					break;
				case "mousedown":
					Hu = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					Hu = !1, md(d, n, c);
					break;
				case "selectionchange":
					if (Dw) break;
				case "keydown":
				case "keyup":
					md(d, n, c)
			}
			var _;
			if (sc) e: {
				switch (e) {
					case "compositionstart":
						var N = "onCompositionStart";
						break e;
					case "compositionend":
						N = "onCompositionEnd";
						break e;
					case "compositionupdate":
						N = "onCompositionUpdate";
						break e
				}
				N = void 0
			}
			else yr ? $h(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");N && (Ih && n.locale !== "ko" && (yr || N !== "onCompositionStart" ? N === "onCompositionEnd" && yr && (_ = Lh()) : (wn = c, lc = "value" in wn ? wn.value : wn.textContent, yr = !0)), P = al(s, N), 0 < P.length && (N = new ld(N, e, null, n, c), d.push({
				event: N,
				listeners: P
			}), _ ? N.data = _ : (_ = Ah(n), _ !== null && (N.data = _)))),
			(_ = kw ? Pw(e, n) : Cw(e, n)) && (s = al(s, "onBeforeInput"), 0 < s.length && (c = new ld("onBeforeInput", "beforeinput", null, n, c), d.push({
				event: c,
				listeners: s
			}), c.data = _))
		}
		Jh(d, t)
	})
}

function Vo(e, t, n) {
	return {
		instance: e,
		listener: t,
		currentTarget: n
	}
}

function al(e, t) {
	for (var n = t + "Capture", r = []; e !== null;) {
		var o = e,
			i = o.stateNode;
		o.tag === 5 && i !== null && (o = i, i = Io(e, n), i != null && r.unshift(Vo(e, i, o)), i = Io(e, t), i != null && r.push(Vo(e, i, o))), e = e.return
	}
	return r
}

function cr(e) {
	if (e === null) return null;
	do e = e.return; while (e && e.tag !== 5);
	return e || null
}

function gd(e, t, n, r, o) {
	for (var i = t._reactName, l = []; n !== null && n !== r;) {
		var a = n,
			u = a.alternate,
			s = a.stateNode;
		if (u !== null && u === r) break;
		a.tag === 5 && s !== null && (a = s, o ? (u = Io(n, i), u != null && l.unshift(Vo(n, u, a))) : o || (u = Io(n, i), u != null && l.push(Vo(n, u, a)))), n = n.return
	}
	l.length !== 0 && e.push({
		event: t,
		listeners: l
	})
}
var Aw = /\r\n?/g,
	Uw = /\u0000|\uFFFD/g;

function wd(e) {
	return (typeof e == "string" ? e : "" + e).replace(Aw, `
`).replace(Uw, "")
}

function wi(e, t, n) {
	if (t = wd(t), wd(e) !== t && n) throw Error(j(425))
}

function ul() {}
var Ku = null,
	Qu = null;

function Yu(e, t) {
	return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Gu = typeof setTimeout == "function" ? setTimeout : void 0,
	Fw = typeof clearTimeout == "function" ? clearTimeout : void 0,
	Sd = typeof Promise == "function" ? Promise : void 0,
	Bw = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sd < "u" ? function(e) {
		return Sd.resolve(null).then(e).catch(Ww)
	} : Gu;

function Ww(e) {
	setTimeout(function() {
		throw e
	})
}

function Za(e, t) {
	var n = t,
		r = 0;
	do {
		var o = n.nextSibling;
		if (e.removeChild(n), o && o.nodeType === 8)
			if (n = o.data, n === "/$") {
				if (r === 0) {
					e.removeChild(o), Uo(t);
					return
				}
				r--
			} else n !== "$" && n !== "$?" && n !== "$!" || r++;
		n = o
	} while (n);
	Uo(t)
}

function _n(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
			if (t === "/$") return null
		}
	}
	return e
}

function xd(e) {
	e = e.previousSibling;
	for (var t = 0; e;) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--
			} else n === "/$" && t++
		}
		e = e.previousSibling
	}
	return null
}
var Jr = Math.random().toString(36).slice(2),
	$t = "__reactFiber$" + Jr,
	Ho = "__reactProps$" + Jr,
	ln = "__reactContainer$" + Jr,
	Xu = "__reactEvents$" + Jr,
	Vw = "__reactListeners$" + Jr,
	Hw = "__reactHandles$" + Jr;

function Kn(e) {
	var t = e[$t];
	if (t) return t;
	for (var n = e.parentNode; n;) {
		if (t = n[ln] || n[$t]) {
			if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
				for (e = xd(e); e !== null;) {
					if (n = e[$t]) return n;
					e = xd(e)
				}
			return t
		}
		e = n, n = e.parentNode
	}
	return null
}

function ri(e) {
	return e = e[$t] || e[ln], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Sr(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(j(33))
}

function $l(e) {
	return e[Ho] || null
}
var Ju = [],
	xr = -1;

function In(e) {
	return {
		current: e
	}
}

function fe(e) {
	0 > xr || (e.current = Ju[xr], Ju[xr] = null, xr--)
}

function ue(e, t) {
	xr++, Ju[xr] = e.current, e.current = t
}
var Mn = {},
	Ve = In(Mn),
	nt = In(!1),
	nr = Mn;

function Fr(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Mn;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
	var o = {},
		i;
	for (i in n) o[i] = t[i];
	return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function rt(e) {
	return e = e.childContextTypes, e != null
}

function sl() {
	fe(nt), fe(Ve)
}

function Ed(e, t, n) {
	if (Ve.current !== Mn) throw Error(j(168));
	ue(Ve, t), ue(nt, n)
}

function Zh(e, t, n) {
	var r = e.stateNode;
	if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
	r = r.getChildContext();
	for (var o in r)
		if (!(o in t)) throw Error(j(108, j1(e) || "Unknown", o));
	return ge({}, n, r)
}

function cl(e) {
	return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mn, nr = Ve.current, ue(Ve, e), ue(nt, nt.current), !0
}

function kd(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(j(169));
	n ? (e = Zh(e, t, nr), r.__reactInternalMemoizedMergedChildContext = e, fe(nt), fe(Ve), ue(Ve, e)) : fe(nt), ue(nt, n)
}
var qt = null,
	Al = !1,
	eu = !1;

function em(e) {
	qt === null ? qt = [e] : qt.push(e)
}

function Kw(e) {
	Al = !0, em(e)
}

function $n() {
	if (!eu && qt !== null) {
		eu = !0;
		var e = 0,
			t = te;
		try {
			var n = qt;
			for (te = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0); while (r !== null)
			}
			qt = null, Al = !1
		} catch (o) {
			throw qt !== null && (qt = qt.slice(e + 1)), Ch(nc, $n), o
		} finally {
			te = t, eu = !1
		}
	}
	return null
}
var Er = [],
	kr = 0,
	fl = null,
	dl = 0,
	vt = [],
	yt = 0,
	rr = null,
	Zt = 1,
	en = "";

function Bn(e, t) {
	Er[kr++] = dl, Er[kr++] = fl, fl = e, dl = t
}

function tm(e, t, n) {
	vt[yt++] = Zt, vt[yt++] = en, vt[yt++] = rr, rr = e;
	var r = Zt;
	e = en;
	var o = 32 - Tt(r) - 1;
	r &= ~(1 << o), n += 1;
	var i = 32 - Tt(t) + o;
	if (30 < i) {
		var l = o - o % 5;
		i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Zt = 1 << 32 - Tt(t) + o | n << o | r, en = i + e
	} else Zt = 1 << i | n << o | r, en = e
}

function fc(e) {
	e.return !== null && (Bn(e, 1), tm(e, 1, 0))
}

function dc(e) {
	for (; e === fl;) fl = Er[--kr], Er[kr] = null, dl = Er[--kr], Er[kr] = null;
	for (; e === rr;) rr = vt[--yt], vt[yt] = null, en = vt[--yt], vt[yt] = null, Zt = vt[--yt], vt[yt] = null
}
var st = null,
	at = null,
	pe = !1,
	jt = null;

function nm(e, t) {
	var n = gt(5, null, null, 0);
	n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Pd(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, st = e, at = _n(t.firstChild), !0) : !1;
		case 6:
			return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, st = e, at = null, !0) : !1;
		case 13:
			return t = t.nodeType !== 8 ? null : t, t !== null ? (n = rr !== null ? {
				id: Zt,
				overflow: en
			} : null, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = gt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, st = e, at = null, !0) : !1;
		default:
			return !1
	}
}

function qu(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Zu(e) {
	if (pe) {
		var t = at;
		if (t) {
			var n = t;
			if (!Pd(e, t)) {
				if (qu(e)) throw Error(j(418));
				t = _n(n.nextSibling);
				var r = st;
				t && Pd(e, t) ? nm(r, n) : (e.flags = e.flags & -4097 | 2, pe = !1, st = e)
			}
		} else {
			if (qu(e)) throw Error(j(418));
			e.flags = e.flags & -4097 | 2, pe = !1, st = e
		}
	}
}

function Cd(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
	st = e
}

function Si(e) {
	if (e !== st) return !1;
	if (!pe) return Cd(e), pe = !0, !1;
	var t;
	if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Yu(e.type, e.memoizedProps)), t && (t = at)) {
		if (qu(e)) throw rm(), Error(j(418));
		for (; t;) nm(e, t), t = _n(t.nextSibling)
	}
	if (Cd(e), e.tag === 13) {
		if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(j(317));
		e: {
			for (e = e.nextSibling, t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							at = _n(e.nextSibling);
							break e
						}
						t--
					} else n !== "$" && n !== "$!" && n !== "$?" || t++
				}
				e = e.nextSibling
			}
			at = null
		}
	} else at = st ? _n(e.stateNode.nextSibling) : null;
	return !0
}

function rm() {
	for (var e = at; e;) e = _n(e.nextSibling)
}

function Br() {
	at = st = null, pe = !1
}

function pc(e) {
	jt === null ? jt = [e] : jt.push(e)
}
var Qw = sn.ReactCurrentBatchConfig;

function _t(e, t) {
	if (e && e.defaultProps) {
		t = ge({}, t), e = e.defaultProps;
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t
	}
	return t
}
var pl = In(null),
	hl = null,
	Pr = null,
	hc = null;

function mc() {
	hc = Pr = hl = null
}

function vc(e) {
	var t = pl.current;
	fe(pl), e._currentValue = t
}

function es(e, t, n) {
	for (; e !== null;) {
		var r = e.alternate;
		if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
		e = e.return
	}
}

function zr(e, t) {
	hl = e, hc = Pr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (tt = !0), e.firstContext = null)
}

function xt(e) {
	var t = e._currentValue;
	if (hc !== e)
		if (e = {
				context: e,
				memoizedValue: t,
				next: null
			}, Pr === null) {
			if (hl === null) throw Error(j(308));
			Pr = e, hl.dependencies = {
				lanes: 0,
				firstContext: e
			}
		} else Pr = Pr.next = e;
	return t
}
var Qn = null;

function yc(e) {
	Qn === null ? Qn = [e] : Qn.push(e)
}

function om(e, t, n, r) {
	var o = t.interleaved;
	return o === null ? (n.next = n, yc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, an(e, r)
}

function an(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
	return n.tag === 3 ? n.stateNode : null
}
var hn = !1;

function gc(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: {
			pending: null,
			interleaved: null,
			lanes: 0
		},
		effects: null
	}
}

function im(e, t) {
	e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
		baseState: e.baseState,
		firstBaseUpdate: e.firstBaseUpdate,
		lastBaseUpdate: e.lastBaseUpdate,
		shared: e.shared,
		effects: e.effects
	})
}

function nn(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	}
}

function Rn(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (r = r.shared, X & 2) {
		var o = r.pending;
		return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, an(e, n)
	}
	return o = r.interleaved, o === null ? (t.next = t, yc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, an(e, n)
}

function zi(e, t, n) {
	if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, rc(e, n)
	}
}

function _d(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && (r = r.updateQueue, n === r)) {
		var o = null,
			i = null;
		if (n = n.firstBaseUpdate, n !== null) {
			do {
				var l = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null
				};
				i === null ? o = i = l : i = i.next = l, n = n.next
			} while (n !== null);
			i === null ? o = i = t : i = i.next = t
		} else o = i = t;
		n = {
			baseState: r.baseState,
			firstBaseUpdate: o,
			lastBaseUpdate: i,
			shared: r.shared,
			effects: r.effects
		}, e.updateQueue = n;
		return
	}
	e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ml(e, t, n, r) {
	var o = e.updateQueue;
	hn = !1;
	var i = o.firstBaseUpdate,
		l = o.lastBaseUpdate,
		a = o.shared.pending;
	if (a !== null) {
		o.shared.pending = null;
		var u = a,
			s = u.next;
		u.next = null, l === null ? i = s : l.next = s, l = u;
		var c = e.alternate;
		c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== l && (a === null ? c.firstBaseUpdate = s : a.next = s, c.lastBaseUpdate = u))
	}
	if (i !== null) {
		var d = o.baseState;
		l = 0, c = s = u = null, a = i;
		do {
			var p = a.lane,
				g = a.eventTime;
			if ((r & p) === p) {
				c !== null && (c = c.next = {
					eventTime: g,
					lane: 0,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null
				});
				e: {
					var w = e,
						v = a;
					switch (p = t, g = n, v.tag) {
						case 1:
							if (w = v.payload, typeof w == "function") {
								d = w.call(g, d, p);
								break e
							}
							d = w;
							break e;
						case 3:
							w.flags = w.flags & -65537 | 128;
						case 0:
							if (w = v.payload, p = typeof w == "function" ? w.call(g, d, p) : w, p == null) break e;
							d = ge({}, d, p);
							break e;
						case 2:
							hn = !0
					}
				}
				a.callback !== null && a.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [a] : p.push(a))
			} else g = {
				eventTime: g,
				lane: p,
				tag: a.tag,
				payload: a.payload,
				callback: a.callback,
				next: null
			}, c === null ? (s = c = g, u = d) : c = c.next = g, l |= p;
			if (a = a.next, a === null) {
				if (a = o.shared.pending, a === null) break;
				p = a, a = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null
			}
		} while (1);
		if (c === null && (u = d), o.baseState = u, o.firstBaseUpdate = s, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
			o = t;
			do l |= o.lane, o = o.next; while (o !== t)
		} else i === null && (o.shared.lanes = 0);
		ir |= l, e.lanes = l, e.memoizedState = d
	}
}

function Rd(e, t, n) {
	if (e = t.effects, t.effects = null, e !== null)
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				o = r.callback;
			if (o !== null) {
				if (r.callback = null, r = n, typeof o != "function") throw Error(j(191, o));
				o.call(r)
			}
		}
}
var lm = new oh.Component().refs;

function ts(e, t, n, r) {
	t = e.memoizedState, n = n(r, t), n = n == null ? t : ge({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ul = {
	isMounted: function(e) {
		return (e = e._reactInternals) ? sr(e) === e : !1
	},
	enqueueSetState: function(e, t, n) {
		e = e._reactInternals;
		var r = Ye(),
			o = jn(e),
			i = nn(r, o);
		i.payload = t, n != null && (i.callback = n), t = Rn(e, i, o), t !== null && (Mt(t, e, o, r), zi(t, e, o))
	},
	enqueueReplaceState: function(e, t, n) {
		e = e._reactInternals;
		var r = Ye(),
			o = jn(e),
			i = nn(r, o);
		i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Rn(e, i, o), t !== null && (Mt(t, e, o, r), zi(t, e, o))
	},
	enqueueForceUpdate: function(e, t) {
		e = e._reactInternals;
		var n = Ye(),
			r = jn(e),
			o = nn(n, r);
		o.tag = 2, t != null && (o.callback = t), t = Rn(e, o, r), t !== null && (Mt(t, e, r, n), zi(t, e, r))
	}
};

function Od(e, t, n, r, o, i, l) {
	return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Bo(n, r) || !Bo(o, i) : !0
}

function am(e, t, n) {
	var r = !1,
		o = Mn,
		i = t.contextType;
	return typeof i == "object" && i !== null ? i = xt(i) : (o = rt(t) ? nr : Ve.current, r = t.contextTypes, i = (r = r != null) ? Fr(e, o) : Mn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ul, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function jd(e, t, n, r) {
	e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ul.enqueueReplaceState(t, t.state, null)
}

function ns(e, t, n, r) {
	var o = e.stateNode;
	o.props = n, o.state = e.memoizedState, o.refs = lm, gc(e);
	var i = t.contextType;
	typeof i == "object" && i !== null ? o.context = xt(i) : (i = rt(t) ? nr : Ve.current, o.context = Fr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ts(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ul.enqueueReplaceState(o, o.state, null), ml(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function fo(e, t, n) {
	if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
		if (n._owner) {
			if (n = n._owner, n) {
				if (n.tag !== 1) throw Error(j(309));
				var r = n.stateNode
			}
			if (!r) throw Error(j(147, e));
			var o = r,
				i = "" + e;
			return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
				var a = o.refs;
				a === lm && (a = o.refs = {}), l === null ? delete a[i] : a[i] = l
			}, t._stringRef = i, t)
		}
		if (typeof e != "string") throw Error(j(284));
		if (!n._owner) throw Error(j(290, e))
	}
	return e
}

function xi(e, t) {
	throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function bd(e) {
	var t = e._init;
	return t(e._payload)
}

function um(e) {
	function t(m, f) {
		if (e) {
			var y = m.deletions;
			y === null ? (m.deletions = [f], m.flags |= 16) : y.push(f)
		}
	}

	function n(m, f) {
		if (!e) return null;
		for (; f !== null;) t(m, f), f = f.sibling;
		return null
	}

	function r(m, f) {
		for (m = new Map; f !== null;) f.key !== null ? m.set(f.key, f) : m.set(f.index, f), f = f.sibling;
		return m
	}

	function o(m, f) {
		return m = bn(m, f), m.index = 0, m.sibling = null, m
	}

	function i(m, f, y) {
		return m.index = y, e ? (y = m.alternate, y !== null ? (y = y.index, y < f ? (m.flags |= 2, f) : y) : (m.flags |= 2, f)) : (m.flags |= 1048576, f)
	}

	function l(m) {
		return e && m.alternate === null && (m.flags |= 2), m
	}

	function a(m, f, y, h) {
		return f === null || f.tag !== 6 ? (f = au(y, m.mode, h), f.return = m, f) : (f = o(f, y), f.return = m, f)
	}

	function u(m, f, y, h) {
		var E = y.type;
		return E === vr ? c(m, f, y.props.children, h, y.key) : f !== null && (f.elementType === E || typeof E == "object" && E !== null && E.$$typeof === pn && bd(E) === f.type) ? (h = o(f, y.props), h.ref = fo(m, f, y), h.return = m, h) : (h = Ui(y.type, y.key, y.props, null, m.mode, h), h.ref = fo(m, f, y), h.return = m, h)
	}

	function s(m, f, y, h) {
		return f === null || f.tag !== 4 || f.stateNode.containerInfo !== y.containerInfo || f.stateNode.implementation !== y.implementation ? (f = uu(y, m.mode, h), f.return = m, f) : (f = o(f, y.children || []), f.return = m, f)
	}

	function c(m, f, y, h, E) {
		return f === null || f.tag !== 7 ? (f = Xn(y, m.mode, h, E), f.return = m, f) : (f = o(f, y), f.return = m, f)
	}

	function d(m, f, y) {
		if (typeof f == "string" && f !== "" || typeof f == "number") return f = au("" + f, m.mode, y), f.return = m, f;
		if (typeof f == "object" && f !== null) {
			switch (f.$$typeof) {
				case ci:
					return y = Ui(f.type, f.key, f.props, null, m.mode, y), y.ref = fo(m, null, f), y.return = m, y;
				case mr:
					return f = uu(f, m.mode, y), f.return = m, f;
				case pn:
					var h = f._init;
					return d(m, h(f._payload), y)
			}
			if (yo(f) || lo(f)) return f = Xn(f, m.mode, y, null), f.return = m, f;
			xi(m, f)
		}
		return null
	}

	function p(m, f, y, h) {
		var E = f !== null ? f.key : null;
		if (typeof y == "string" && y !== "" || typeof y == "number") return E !== null ? null : a(m, f, "" + y, h);
		if (typeof y == "object" && y !== null) {
			switch (y.$$typeof) {
				case ci:
					return y.key === E ? u(m, f, y, h) : null;
				case mr:
					return y.key === E ? s(m, f, y, h) : null;
				case pn:
					return E = y._init, p(m, f, E(y._payload), h)
			}
			if (yo(y) || lo(y)) return E !== null ? null : c(m, f, y, h, null);
			xi(m, y)
		}
		return null
	}

	function g(m, f, y, h, E) {
		if (typeof h == "string" && h !== "" || typeof h == "number") return m = m.get(y) || null, a(f, m, "" + h, E);
		if (typeof h == "object" && h !== null) {
			switch (h.$$typeof) {
				case ci:
					return m = m.get(h.key === null ? y : h.key) || null, u(f, m, h, E);
				case mr:
					return m = m.get(h.key === null ? y : h.key) || null, s(f, m, h, E);
				case pn:
					var P = h._init;
					return g(m, f, y, P(h._payload), E)
			}
			if (yo(h) || lo(h)) return m = m.get(y) || null, c(f, m, h, E, null);
			xi(f, h)
		}
		return null
	}

	function w(m, f, y, h) {
		for (var E = null, P = null, _ = f, N = f = 0, $ = null; _ !== null && N < y.length; N++) {
			_.index > N ? ($ = _, _ = null) : $ = _.sibling;
			var M = p(m, _, y[N], h);
			if (M === null) {
				_ === null && (_ = $);
				break
			}
			e && _ && M.alternate === null && t(m, _), f = i(M, f, N), P === null ? E = M : P.sibling = M, P = M, _ = $
		}
		if (N === y.length) return n(m, _), pe && Bn(m, N), E;
		if (_ === null) {
			for (; N < y.length; N++) _ = d(m, y[N], h), _ !== null && (f = i(_, f, N), P === null ? E = _ : P.sibling = _, P = _);
			return pe && Bn(m, N), E
		}
		for (_ = r(m, _); N < y.length; N++) $ = g(_, m, N, y[N], h), $ !== null && (e && $.alternate !== null && _.delete($.key === null ? N : $.key), f = i($, f, N), P === null ? E = $ : P.sibling = $, P = $);
		return e && _.forEach(function(J) {
			return t(m, J)
		}), pe && Bn(m, N), E
	}

	function v(m, f, y, h) {
		var E = lo(y);
		if (typeof E != "function") throw Error(j(150));
		if (y = E.call(y), y == null) throw Error(j(151));
		for (var P = E = null, _ = f, N = f = 0, $ = null, M = y.next(); _ !== null && !M.done; N++, M = y.next()) {
			_.index > N ? ($ = _, _ = null) : $ = _.sibling;
			var J = p(m, _, M.value, h);
			if (J === null) {
				_ === null && (_ = $);
				break
			}
			e && _ && J.alternate === null && t(m, _), f = i(J, f, N), P === null ? E = J : P.sibling = J, P = J, _ = $
		}
		if (M.done) return n(m, _), pe && Bn(m, N), E;
		if (_ === null) {
			for (; !M.done; N++, M = y.next()) M = d(m, M.value, h), M !== null && (f = i(M, f, N), P === null ? E = M : P.sibling = M, P = M);
			return pe && Bn(m, N), E
		}
		for (_ = r(m, _); !M.done; N++, M = y.next()) M = g(_, m, N, M.value, h), M !== null && (e && M.alternate !== null && _.delete(M.key === null ? N : M.key), f = i(M, f, N), P === null ? E = M : P.sibling = M, P = M);
		return e && _.forEach(function(K) {
			return t(m, K)
		}), pe && Bn(m, N), E
	}

	function S(m, f, y, h) {
		if (typeof y == "object" && y !== null && y.type === vr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
			switch (y.$$typeof) {
				case ci:
					e: {
						for (var E = y.key, P = f; P !== null;) {
							if (P.key === E) {
								if (E = y.type, E === vr) {
									if (P.tag === 7) {
										n(m, P.sibling), f = o(P, y.props.children), f.return = m, m = f;
										break e
									}
								} else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === pn && bd(E) === P.type) {
									n(m, P.sibling), f = o(P, y.props), f.ref = fo(m, P, y), f.return = m, m = f;
									break e
								}
								n(m, P);
								break
							} else t(m, P);
							P = P.sibling
						}
						y.type === vr ? (f = Xn(y.props.children, m.mode, h, y.key), f.return = m, m = f) : (h = Ui(y.type, y.key, y.props, null, m.mode, h), h.ref = fo(m, f, y), h.return = m, m = h)
					}
					return l(m);
				case mr:
					e: {
						for (P = y.key; f !== null;) {
							if (f.key === P)
								if (f.tag === 4 && f.stateNode.containerInfo === y.containerInfo && f.stateNode.implementation === y.implementation) {
									n(m, f.sibling), f = o(f, y.children || []), f.return = m, m = f;
									break e
								} else {
									n(m, f);
									break
								}
							else t(m, f);
							f = f.sibling
						}
						f = uu(y, m.mode, h),
						f.return = m,
						m = f
					}
					return l(m);
				case pn:
					return P = y._init, S(m, f, P(y._payload), h)
			}
			if (yo(y)) return w(m, f, y, h);
			if (lo(y)) return v(m, f, y, h);
			xi(m, y)
		}
		return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, f !== null && f.tag === 6 ? (n(m, f.sibling), f = o(f, y), f.return = m, m = f) : (n(m, f), f = au(y, m.mode, h), f.return = m, m = f), l(m)) : n(m, f)
	}
	return S
}
var Wr = um(!0),
	sm = um(!1),
	oi = {},
	Ft = In(oi),
	Ko = In(oi),
	Qo = In(oi);

function Yn(e) {
	if (e === oi) throw Error(j(174));
	return e
}

function wc(e, t) {
	switch (ue(Qo, t), ue(Ko, e), ue(Ft, oi), e = t.nodeType, e) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : zu(null, "");
			break;
		default:
			e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = zu(t, e)
	}
	fe(Ft), ue(Ft, t)
}

function Vr() {
	fe(Ft), fe(Ko), fe(Qo)
}

function cm(e) {
	Yn(Qo.current);
	var t = Yn(Ft.current),
		n = zu(t, e.type);
	t !== n && (ue(Ko, e), ue(Ft, n))
}

function Sc(e) {
	Ko.current === e && (fe(Ft), fe(Ko))
}
var ve = In(0);

function vl(e) {
	for (var t = e; t !== null;) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			t.child.return = t, t = t.child;
			continue
		}
		if (t === e) break;
		for (; t.sibling === null;) {
			if (t.return === null || t.return === e) return null;
			t = t.return
		}
		t.sibling.return = t.return, t = t.sibling
	}
	return null
}
var tu = [];

function xc() {
	for (var e = 0; e < tu.length; e++) tu[e]._workInProgressVersionPrimary = null;
	tu.length = 0
}
var Di = sn.ReactCurrentDispatcher,
	nu = sn.ReactCurrentBatchConfig,
	or = 0,
	ye = null,
	Oe = null,
	be = null,
	yl = !1,
	_o = !1,
	Yo = 0,
	Yw = 0;

function Ae() {
	throw Error(j(321))
}

function Ec(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!zt(e[n], t[n])) return !1;
	return !0
}

function kc(e, t, n, r, o, i) {
	if (or = i, ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Di.current = e === null || e.memoizedState === null ? qw : Zw, e = n(r, o), _o) {
		i = 0;
		do {
			if (_o = !1, Yo = 0, 25 <= i) throw Error(j(301));
			i += 1, be = Oe = null, t.updateQueue = null, Di.current = eS, e = n(r, o)
		} while (_o)
	}
	if (Di.current = gl, t = Oe !== null && Oe.next !== null, or = 0, be = Oe = ye = null, yl = !1, t) throw Error(j(300));
	return e
}

function Pc() {
	var e = Yo !== 0;
	return Yo = 0, e
}

function It() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	};
	return be === null ? ye.memoizedState = be = e : be = be.next = e, be
}

function Et() {
	if (Oe === null) {
		var e = ye.alternate;
		e = e !== null ? e.memoizedState : null
	} else e = Oe.next;
	var t = be === null ? ye.memoizedState : be.next;
	if (t !== null) be = t, Oe = e;
	else {
		if (e === null) throw Error(j(310));
		Oe = e, e = {
			memoizedState: Oe.memoizedState,
			baseState: Oe.baseState,
			baseQueue: Oe.baseQueue,
			queue: Oe.queue,
			next: null
		}, be === null ? ye.memoizedState = be = e : be = be.next = e
	}
	return be
}

function Go(e, t) {
	return typeof t == "function" ? t(e) : t
}

function ru(e) {
	var t = Et(),
		n = t.queue;
	if (n === null) throw Error(j(311));
	n.lastRenderedReducer = e;
	var r = Oe,
		o = r.baseQueue,
		i = n.pending;
	if (i !== null) {
		if (o !== null) {
			var l = o.next;
			o.next = i.next, i.next = l
		}
		r.baseQueue = o = i, n.pending = null
	}
	if (o !== null) {
		i = o.next, r = r.baseState;
		var a = l = null,
			u = null,
			s = i;
		do {
			var c = s.lane;
			if ((or & c) === c) u !== null && (u = u.next = {
				lane: 0,
				action: s.action,
				hasEagerState: s.hasEagerState,
				eagerState: s.eagerState,
				next: null
			}), r = s.hasEagerState ? s.eagerState : e(r, s.action);
			else {
				var d = {
					lane: c,
					action: s.action,
					hasEagerState: s.hasEagerState,
					eagerState: s.eagerState,
					next: null
				};
				u === null ? (a = u = d, l = r) : u = u.next = d, ye.lanes |= c, ir |= c
			}
			s = s.next
		} while (s !== null && s !== i);
		u === null ? l = r : u.next = a, zt(r, t.memoizedState) || (tt = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r
	}
	if (e = n.interleaved, e !== null) {
		o = e;
		do i = o.lane, ye.lanes |= i, ir |= i, o = o.next; while (o !== e)
	} else o === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch]
}

function ou(e) {
	var t = Et(),
		n = t.queue;
	if (n === null) throw Error(j(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		o = n.pending,
		i = t.memoizedState;
	if (o !== null) {
		n.pending = null;
		var l = o = o.next;
		do i = e(i, l.action), l = l.next; while (l !== o);
		zt(i, t.memoizedState) || (tt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
	}
	return [i, r]
}

function fm() {}

function dm(e, t) {
	var n = ye,
		r = Et(),
		o = t(),
		i = !zt(r.memoizedState, o);
	if (i && (r.memoizedState = o, tt = !0), r = r.queue, Cc(mm.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || be !== null && be.memoizedState.tag & 1) {
		if (n.flags |= 2048, Xo(9, hm.bind(null, n, r, o, t), void 0, null), Te === null) throw Error(j(349));
		or & 30 || pm(n, t, o)
	}
	return o
}

function pm(e, t, n) {
	e.flags |= 16384, e = {
		getSnapshot: t,
		value: n
	}, t = ye.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, ye.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function hm(e, t, n, r) {
	t.value = n, t.getSnapshot = r, vm(t) && ym(e)
}

function mm(e, t, n) {
	return n(function() {
		vm(t) && ym(e)
	})
}

function vm(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !zt(e, n)
	} catch {
		return !0
	}
}

function ym(e) {
	var t = an(e, 1);
	t !== null && Mt(t, e, 1, -1)
}

function Nd(e) {
	var t = It();
	return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
		pending: null,
		interleaved: null,
		lanes: 0,
		dispatch: null,
		lastRenderedReducer: Go,
		lastRenderedState: e
	}, t.queue = e, e = e.dispatch = Jw.bind(null, ye, e), [t.memoizedState, e]
}

function Xo(e, t, n, r) {
	return e = {
		tag: e,
		create: t,
		destroy: n,
		deps: r,
		next: null
	}, t = ye.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, ye.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function gm() {
	return Et().memoizedState
}

function Li(e, t, n, r) {
	var o = It();
	ye.flags |= e, o.memoizedState = Xo(1 | t, n, void 0, r === void 0 ? null : r)
}

function Fl(e, t, n, r) {
	var o = Et();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (Oe !== null) {
		var l = Oe.memoizedState;
		if (i = l.destroy, r !== null && Ec(r, l.deps)) {
			o.memoizedState = Xo(t, n, i, r);
			return
		}
	}
	ye.flags |= e, o.memoizedState = Xo(1 | t, n, i, r)
}

function Td(e, t) {
	return Li(8390656, 8, e, t)
}

function Cc(e, t) {
	return Fl(2048, 8, e, t)
}

function wm(e, t) {
	return Fl(4, 2, e, t)
}

function Sm(e, t) {
	return Fl(4, 4, e, t)
}

function xm(e, t) {
	if (typeof t == "function") return e = e(), t(e),
		function() {
			t(null)
		};
	if (t != null) return e = e(), t.current = e,
		function() {
			t.current = null
		}
}

function Em(e, t, n) {
	return n = n != null ? n.concat([e]) : null, Fl(4, 4, xm.bind(null, t, e), n)
}

function _c() {}

function km(e, t) {
	var n = Et();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Ec(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Pm(e, t) {
	var n = Et();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Ec(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Cm(e, t, n) {
	return or & 21 ? (zt(n, t) || (n = Oh(), ye.lanes |= n, ir |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, tt = !0), e.memoizedState = n)
}

function Gw(e, t) {
	var n = te;
	te = n !== 0 && 4 > n ? n : 4, e(!0);
	var r = nu.transition;
	nu.transition = {};
	try {
		e(!1), t()
	} finally {
		te = n, nu.transition = r
	}
}

function _m() {
	return Et().memoizedState
}

function Xw(e, t, n) {
	var r = jn(e);
	if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Rm(e)) Om(t, n);
	else if (n = om(e, t, n, r), n !== null) {
		var o = Ye();
		Mt(n, e, r, o), jm(n, t, r)
	}
}

function Jw(e, t, n) {
	var r = jn(e),
		o = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
	if (Rm(e)) Om(t, o);
	else {
		var i = e.alternate;
		if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
			var l = t.lastRenderedState,
				a = i(l, n);
			if (o.hasEagerState = !0, o.eagerState = a, zt(a, l)) {
				var u = t.interleaved;
				u === null ? (o.next = o, yc(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
				return
			}
		} catch {} finally {}
		n = om(e, t, o, r), n !== null && (o = Ye(), Mt(n, e, r, o), jm(n, t, r))
	}
}

function Rm(e) {
	var t = e.alternate;
	return e === ye || t !== null && t === ye
}

function Om(e, t) {
	_o = yl = !0;
	var n = e.pending;
	n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function jm(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, rc(e, n)
	}
}
var gl = {
		readContext: xt,
		useCallback: Ae,
		useContext: Ae,
		useEffect: Ae,
		useImperativeHandle: Ae,
		useInsertionEffect: Ae,
		useLayoutEffect: Ae,
		useMemo: Ae,
		useReducer: Ae,
		useRef: Ae,
		useState: Ae,
		useDebugValue: Ae,
		useDeferredValue: Ae,
		useTransition: Ae,
		useMutableSource: Ae,
		useSyncExternalStore: Ae,
		useId: Ae,
		unstable_isNewReconciler: !1
	},
	qw = {
		readContext: xt,
		useCallback: function(e, t) {
			return It().memoizedState = [e, t === void 0 ? null : t], e
		},
		useContext: xt,
		useEffect: Td,
		useImperativeHandle: function(e, t, n) {
			return n = n != null ? n.concat([e]) : null, Li(4194308, 4, xm.bind(null, t, e), n)
		},
		useLayoutEffect: function(e, t) {
			return Li(4194308, 4, e, t)
		},
		useInsertionEffect: function(e, t) {
			return Li(4, 2, e, t)
		},
		useMemo: function(e, t) {
			var n = It();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
		},
		useReducer: function(e, t, n) {
			var r = It();
			return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = Xw.bind(null, ye, e), [r.memoizedState, e]
		},
		useRef: function(e) {
			var t = It();
			return e = {
				current: e
			}, t.memoizedState = e
		},
		useState: Nd,
		useDebugValue: _c,
		useDeferredValue: function(e) {
			return It().memoizedState = e
		},
		useTransition: function() {
			var e = Nd(!1),
				t = e[0];
			return e = Gw.bind(null, e[1]), It().memoizedState = e, [t, e]
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var r = ye,
				o = It();
			if (pe) {
				if (n === void 0) throw Error(j(407));
				n = n()
			} else {
				if (n = t(), Te === null) throw Error(j(349));
				or & 30 || pm(r, t, n)
			}
			o.memoizedState = n;
			var i = {
				value: n,
				getSnapshot: t
			};
			return o.queue = i, Td(mm.bind(null, r, i, e), [e]), r.flags |= 2048, Xo(9, hm.bind(null, r, i, n, t), void 0, null), n
		},
		useId: function() {
			var e = It(),
				t = Te.identifierPrefix;
			if (pe) {
				var n = en,
					r = Zt;
				n = (r & ~(1 << 32 - Tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Yo++, 0 < n && (t += "H" + n.toString(32)), t += ":"
			} else n = Yw++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t
		},
		unstable_isNewReconciler: !1
	},
	Zw = {
		readContext: xt,
		useCallback: km,
		useContext: xt,
		useEffect: Cc,
		useImperativeHandle: Em,
		useInsertionEffect: wm,
		useLayoutEffect: Sm,
		useMemo: Pm,
		useReducer: ru,
		useRef: gm,
		useState: function() {
			return ru(Go)
		},
		useDebugValue: _c,
		useDeferredValue: function(e) {
			var t = Et();
			return Cm(t, Oe.memoizedState, e)
		},
		useTransition: function() {
			var e = ru(Go)[0],
				t = Et().memoizedState;
			return [e, t]
		},
		useMutableSource: fm,
		useSyncExternalStore: dm,
		useId: _m,
		unstable_isNewReconciler: !1
	},
	eS = {
		readContext: xt,
		useCallback: km,
		useContext: xt,
		useEffect: Cc,
		useImperativeHandle: Em,
		useInsertionEffect: wm,
		useLayoutEffect: Sm,
		useMemo: Pm,
		useReducer: ou,
		useRef: gm,
		useState: function() {
			return ou(Go)
		},
		useDebugValue: _c,
		useDeferredValue: function(e) {
			var t = Et();
			return Oe === null ? t.memoizedState = e : Cm(t, Oe.memoizedState, e)
		},
		useTransition: function() {
			var e = ou(Go)[0],
				t = Et().memoizedState;
			return [e, t]
		},
		useMutableSource: fm,
		useSyncExternalStore: dm,
		useId: _m,
		unstable_isNewReconciler: !1
	};

function Hr(e, t) {
	try {
		var n = "",
			r = t;
		do n += O1(r), r = r.return; while (r);
		var o = n
	} catch (i) {
		o = `
Error generating stack: ` + i.message + `
` + i.stack
	}
	return {
		value: e,
		source: t,
		stack: o,
		digest: null
	}
}

function iu(e, t, n) {
	return {
		value: e,
		source: null,
		stack: n ?? null,
		digest: t ?? null
	}
}

function rs(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function() {
			throw n
		})
	}
}
var tS = typeof WeakMap == "function" ? WeakMap : Map;

function bm(e, t, n) {
	n = nn(-1, n), n.tag = 3, n.payload = {
		element: null
	};
	var r = t.value;
	return n.callback = function() {
		Sl || (Sl = !0, ps = r), rs(e, t)
	}, n
}

function Nm(e, t, n) {
	n = nn(-1, n), n.tag = 3;
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var o = t.value;
		n.payload = function() {
			return r(o)
		}, n.callback = function() {
			rs(e, t)
		}
	}
	var i = e.stateNode;
	return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
		rs(e, t), typeof r != "function" && (On === null ? On = new Set([this]) : On.add(this));
		var l = t.stack;
		this.componentDidCatch(t.value, {
			componentStack: l !== null ? l : ""
		})
	}), n
}

function Md(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new tS;
		var o = new Set;
		r.set(t, o)
	} else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
	o.has(n) || (o.add(n), e = mS.bind(null, e, t, n), t.then(e, e))
}

function zd(e) {
	do {
		var t;
		if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
		e = e.return
	} while (e !== null);
	return null
}

function Dd(e, t, n, r, o) {
	return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = nn(-1, 1), t.tag = 2, Rn(n, t, 1))), n.lanes |= 1), e)
}
var nS = sn.ReactCurrentOwner,
	tt = !1;

function Qe(e, t, n, r) {
	t.child = e === null ? sm(t, null, n, r) : Wr(t, e.child, n, r)
}

function Ld(e, t, n, r, o) {
	n = n.render;
	var i = t.ref;
	return zr(t, o), r = kc(e, t, n, r, i, o), n = Pc(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, un(e, t, o)) : (pe && n && fc(t), t.flags |= 1, Qe(e, t, r, o), t.child)
}

function Id(e, t, n, r, o) {
	if (e === null) {
		var i = n.type;
		return typeof i == "function" && !zc(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Tm(e, t, i, r, o)) : (e = Ui(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
	}
	if (i = e.child, !(e.lanes & o)) {
		var l = i.memoizedProps;
		if (n = n.compare, n = n !== null ? n : Bo, n(l, r) && e.ref === t.ref) return un(e, t, o)
	}
	return t.flags |= 1, e = bn(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function Tm(e, t, n, r, o) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (Bo(i, r) && e.ref === t.ref)
			if (tt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (tt = !0);
			else return t.lanes = e.lanes, un(e, t, o)
	}
	return os(e, t, n, r, o)
}

function Mm(e, t, n) {
	var r = t.pendingProps,
		o = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1)) t.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, ue(_r, lt), lt |= n;
		else {
			if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, ue(_r, lt), lt |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, r = i !== null ? i.baseLanes : n, ue(_r, lt), lt |= r
		}
	else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ue(_r, lt), lt |= r;
	return Qe(e, t, o, n), t.child
}

function zm(e, t) {
	var n = t.ref;
	(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function os(e, t, n, r, o) {
	var i = rt(n) ? nr : Ve.current;
	return i = Fr(t, i), zr(t, o), n = kc(e, t, n, r, i, o), r = Pc(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, un(e, t, o)) : (pe && r && fc(t), t.flags |= 1, Qe(e, t, n, o), t.child)
}

function $d(e, t, n, r, o) {
	if (rt(n)) {
		var i = !0;
		cl(t)
	} else i = !1;
	if (zr(t, o), t.stateNode === null) Ii(e, t), am(t, n, r), ns(t, n, r, o), r = !0;
	else if (e === null) {
		var l = t.stateNode,
			a = t.memoizedProps;
		l.props = a;
		var u = l.context,
			s = n.contextType;
		typeof s == "object" && s !== null ? s = xt(s) : (s = rt(n) ? nr : Ve.current, s = Fr(t, s));
		var c = n.getDerivedStateFromProps,
			d = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
		d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || u !== s) && jd(t, l, r, s), hn = !1;
		var p = t.memoizedState;
		l.state = p, ml(t, r, l, o), u = t.memoizedState, a !== r || p !== u || nt.current || hn ? (typeof c == "function" && (ts(t, n, c, r), u = t.memoizedState), (a = hn || Od(t, n, a, r, p, u, s)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = s, r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
	} else {
		l = t.stateNode, im(e, t), a = t.memoizedProps, s = t.type === t.elementType ? a : _t(t.type, a), l.props = s, d = t.pendingProps, p = l.context, u = n.contextType, typeof u == "object" && u !== null ? u = xt(u) : (u = rt(n) ? nr : Ve.current, u = Fr(t, u));
		var g = n.getDerivedStateFromProps;
		(c = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== d || p !== u) && jd(t, l, r, u), hn = !1, p = t.memoizedState, l.state = p, ml(t, r, l, o);
		var w = t.memoizedState;
		a !== d || p !== w || nt.current || hn ? (typeof g == "function" && (ts(t, n, g, r), w = t.memoizedState), (s = hn || Od(t, n, s, r, p, w, u) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, w, u), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, w, u)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), l.props = r, l.state = w, l.context = u, r = s) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
	}
	return is(e, t, n, r, i, o)
}

function is(e, t, n, r, o, i) {
	zm(e, t);
	var l = (t.flags & 128) !== 0;
	if (!r && !l) return o && kd(t, n, !1), un(e, t, i);
	r = t.stateNode, nS.current = t;
	var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return t.flags |= 1, e !== null && l ? (t.child = Wr(t, e.child, null, i), t.child = Wr(t, null, a, i)) : Qe(e, t, a, i), t.memoizedState = r.state, o && kd(t, n, !0), t.child
}

function Dm(e) {
	var t = e.stateNode;
	t.pendingContext ? Ed(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ed(e, t.context, !1), wc(e, t.containerInfo)
}

function Ad(e, t, n, r, o) {
	return Br(), pc(o), t.flags |= 256, Qe(e, t, n, r), t.child
}
var ls = {
	dehydrated: null,
	treeContext: null,
	retryLane: 0
};

function as(e) {
	return {
		baseLanes: e,
		cachePool: null,
		transitions: null
	}
}

function Lm(e, t, n) {
	var r = t.pendingProps,
		o = ve.current,
		i = !1,
		l = (t.flags & 128) !== 0,
		a;
	if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ue(ve, o & 1), e === null) return Zu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = {
		mode: "hidden",
		children: l
	}, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Vl(l, r, 0, null), e = Xn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = as(n), t.memoizedState = ls, e) : Rc(t, l));
	if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return rS(e, t, l, r, a, o, n);
	if (i) {
		i = r.fallback, l = t.mode, o = e.child, a = o.sibling;
		var u = {
			mode: "hidden",
			children: r.children
		};
		return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = bn(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = bn(a, i) : (i = Xn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? as(n) : {
			baseLanes: l.baseLanes | n,
			cachePool: null,
			transitions: l.transitions
		}, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = ls, r
	}
	return i = e.child, e = i.sibling, r = bn(i, {
		mode: "visible",
		children: r.children
	}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Rc(e, t) {
	return t = Vl({
		mode: "visible",
		children: t
	}, e.mode, 0, null), t.return = e, e.child = t
}

function Ei(e, t, n, r) {
	return r !== null && pc(r), Wr(t, e.child, null, n), e = Rc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function rS(e, t, n, r, o, i, l) {
	if (n) return t.flags & 256 ? (t.flags &= -257, r = iu(Error(j(422))), Ei(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Vl({
		mode: "visible",
		children: r.children
	}, o, 0, null), i = Xn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Wr(t, e.child, null, l), t.child.memoizedState = as(l), t.memoizedState = ls, i);
	if (!(t.mode & 1)) return Ei(e, t, l, null);
	if (o.data === "$!") {
		if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
		return r = a, i = Error(j(419)), r = iu(i, r, void 0), Ei(e, t, l, r)
	}
	if (a = (l & e.childLanes) !== 0, tt || a) {
		if (r = Te, r !== null) {
			switch (l & -l) {
				case 4:
					o = 2;
					break;
				case 16:
					o = 8;
					break;
				case 64:
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
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					o = 32;
					break;
				case 536870912:
					o = 268435456;
					break;
				default:
					o = 0
			}
			o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, an(e, o), Mt(r, e, o, -1))
		}
		return Mc(), r = iu(Error(j(421))), Ei(e, t, l, r)
	}
	return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = vS.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, at = _n(o.nextSibling), st = t, pe = !0, jt = null, e !== null && (vt[yt++] = Zt, vt[yt++] = en, vt[yt++] = rr, Zt = e.id, en = e.overflow, rr = t), t = Rc(t, r.children), t.flags |= 4096, t)
}

function Ud(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), es(e.return, t, n)
}

function lu(e, t, n, r, o) {
	var i = e.memoizedState;
	i === null ? e.memoizedState = {
		isBackwards: t,
		rendering: null,
		renderingStartTime: 0,
		last: r,
		tail: n,
		tailMode: o
	} : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function Im(e, t, n) {
	var r = t.pendingProps,
		o = r.revealOrder,
		i = r.tail;
	if (Qe(e, t, r.children, n), r = ve.current, r & 2) r = r & 1 | 2, t.flags |= 128;
	else {
		if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Ud(e, n, t);
			else if (e.tag === 19) Ud(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue
			}
			if (e === t) break e;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break e;
				e = e.return
			}
			e.sibling.return = e.return, e = e.sibling
		}
		r &= 1
	}
	if (ue(ve, r), !(t.mode & 1)) t.memoizedState = null;
	else switch (o) {
		case "forwards":
			for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && vl(e) === null && (o = n), n = n.sibling;
			n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), lu(t, !1, o, n, i);
			break;
		case "backwards":
			for (n = null, o = t.child, t.child = null; o !== null;) {
				if (e = o.alternate, e !== null && vl(e) === null) {
					t.child = o;
					break
				}
				e = o.sibling, o.sibling = n, n = o, o = e
			}
			lu(t, !0, n, null, i);
			break;
		case "together":
			lu(t, !1, null, null, void 0);
			break;
		default:
			t.memoizedState = null
	}
	return t.child
}

function Ii(e, t) {
	!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function un(e, t, n) {
	if (e !== null && (t.dependencies = e.dependencies), ir |= t.lanes, !(n & t.childLanes)) return null;
	if (e !== null && t.child !== e.child) throw Error(j(153));
	if (t.child !== null) {
		for (e = t.child, n = bn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = bn(e, e.pendingProps), n.return = t;
		n.sibling = null
	}
	return t.child
}

function oS(e, t, n) {
	switch (t.tag) {
		case 3:
			Dm(t), Br();
			break;
		case 5:
			cm(t);
			break;
		case 1:
			rt(t.type) && cl(t);
			break;
		case 4:
			wc(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				o = t.memoizedProps.value;
			ue(pl, r._currentValue), r._currentValue = o;
			break;
		case 13:
			if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ue(ve, ve.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Lm(e, t, n) : (ue(ve, ve.current & 1), e = un(e, t, n), e !== null ? e.sibling : null);
			ue(ve, ve.current & 1);
			break;
		case 19:
			if (r = (n & t.childLanes) !== 0, e.flags & 128) {
				if (r) return Im(e, t, n);
				t.flags |= 128
			}
			if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ue(ve, ve.current), r) break;
			return null;
		case 22:
		case 23:
			return t.lanes = 0, Mm(e, t, n)
	}
	return un(e, t, n)
}
var $m, us, Am, Um;
$m = function(e, t) {
	for (var n = t.child; n !== null;) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			n.child.return = n, n = n.child;
			continue
		}
		if (n === t) break;
		for (; n.sibling === null;) {
			if (n.return === null || n.return === t) return;
			n = n.return
		}
		n.sibling.return = n.return, n = n.sibling
	}
};
us = function() {};
Am = function(e, t, n, r) {
	var o = e.memoizedProps;
	if (o !== r) {
		e = t.stateNode, Yn(Ft.current);
		var i = null;
		switch (n) {
			case "input":
				o = bu(e, o), r = bu(e, r), i = [];
				break;
			case "select":
				o = ge({}, o, {
					value: void 0
				}), r = ge({}, r, {
					value: void 0
				}), i = [];
				break;
			case "textarea":
				o = Mu(e, o), r = Mu(e, r), i = [];
				break;
			default:
				typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ul)
		}
		Du(n, r);
		var l;
		n = null;
		for (s in o)
			if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
				if (s === "style") {
					var a = o[s];
					for (l in a) a.hasOwnProperty(l) && (n || (n = {}), n[l] = "")
				} else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Do.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
		for (s in r) {
			var u = r[s];
			if (a = o != null ? o[s] : void 0, r.hasOwnProperty(s) && u !== a && (u != null || a != null))
				if (s === "style")
					if (a) {
						for (l in a) !a.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
						for (l in u) u.hasOwnProperty(l) && a[l] !== u[l] && (n || (n = {}), n[l] = u[l])
					} else n || (i || (i = []), i.push(s, n)), n = u;
			else s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (i = i || []).push(s, u)) : s === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(s, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Do.hasOwnProperty(s) ? (u != null && s === "onScroll" && ce("scroll", e), i || a === u || (i = [])) : (i = i || []).push(s, u))
		}
		n && (i = i || []).push("style", n);
		var s = i;
		(t.updateQueue = s) && (t.flags |= 4)
	}
};
Um = function(e, t, n, r) {
	n !== r && (t.flags |= 4)
};

function po(e, t) {
	if (!pe) switch (e.tailMode) {
		case "hidden":
			t = e.tail;
			for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
			n === null ? e.tail = null : n.sibling = null;
			break;
		case "collapsed":
			n = e.tail;
			for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
			r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
	}
}

function Ue(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
	else
		for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
	return e.subtreeFlags |= r, e.childLanes = n, t
}

function iS(e, t, n) {
	var r = t.pendingProps;
	switch (dc(t), t.tag) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return Ue(t), null;
		case 1:
			return rt(t.type) && sl(), Ue(t), null;
		case 3:
			return r = t.stateNode, Vr(), fe(nt), fe(Ve), xc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Si(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, jt !== null && (vs(jt), jt = null))), us(e, t), Ue(t), null;
		case 5:
			Sc(t);
			var o = Yn(Qo.current);
			if (n = t.type, e !== null && t.stateNode != null) Am(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(j(166));
					return Ue(t), null
				}
				if (e = Yn(Ft.current), Si(t)) {
					r = t.stateNode, n = t.type;
					var i = t.memoizedProps;
					switch (r[$t] = t, r[Ho] = i, e = (t.mode & 1) !== 0, n) {
						case "dialog":
							ce("cancel", r), ce("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							ce("load", r);
							break;
						case "video":
						case "audio":
							for (o = 0; o < wo.length; o++) ce(wo[o], r);
							break;
						case "source":
							ce("error", r);
							break;
						case "img":
						case "image":
						case "link":
							ce("error", r), ce("load", r);
							break;
						case "details":
							ce("toggle", r);
							break;
						case "input":
							Gf(r, i), ce("invalid", r);
							break;
						case "select":
							r._wrapperState = {
								wasMultiple: !!i.multiple
							}, ce("invalid", r);
							break;
						case "textarea":
							Jf(r, i), ce("invalid", r)
					}
					Du(n, i), o = null;
					for (var l in i)
						if (i.hasOwnProperty(l)) {
							var a = i[l];
							l === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && wi(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && wi(r.textContent, a, e), o = ["children", "" + a]) : Do.hasOwnProperty(l) && a != null && l === "onScroll" && ce("scroll", r)
						} switch (n) {
						case "input":
							fi(r), Xf(r, i, !0);
							break;
						case "textarea":
							fi(r), qf(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof i.onClick == "function" && (r.onclick = ul)
					}
					r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
				} else {
					l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ph(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
						is: r.is
					}) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[$t] = t, e[Ho] = r, $m(e, t, !1, !1), t.stateNode = e;
					e: {
						switch (l = Lu(n, r), n) {
							case "dialog":
								ce("cancel", e), ce("close", e), o = r;
								break;
							case "iframe":
							case "object":
							case "embed":
								ce("load", e), o = r;
								break;
							case "video":
							case "audio":
								for (o = 0; o < wo.length; o++) ce(wo[o], e);
								o = r;
								break;
							case "source":
								ce("error", e), o = r;
								break;
							case "img":
							case "image":
							case "link":
								ce("error", e), ce("load", e), o = r;
								break;
							case "details":
								ce("toggle", e), o = r;
								break;
							case "input":
								Gf(e, r), o = bu(e, r), ce("invalid", e);
								break;
							case "option":
								o = r;
								break;
							case "select":
								e._wrapperState = {
									wasMultiple: !!r.multiple
								}, o = ge({}, r, {
									value: void 0
								}), ce("invalid", e);
								break;
							case "textarea":
								Jf(e, r), o = Mu(e, r), ce("invalid", e);
								break;
							default:
								o = r
						}
						Du(n, o),
						a = o;
						for (i in a)
							if (a.hasOwnProperty(i)) {
								var u = a[i];
								i === "style" ? vh(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && hh(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Lo(e, u) : typeof u == "number" && Lo(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Do.hasOwnProperty(i) ? u != null && i === "onScroll" && ce("scroll", e) : u != null && Js(e, i, u, l))
							} switch (n) {
							case "input":
								fi(e), Xf(e, r, !1);
								break;
							case "textarea":
								fi(e), qf(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + Tn(r.value));
								break;
							case "select":
								e.multiple = !!r.multiple, i = r.value, i != null ? br(e, !!r.multiple, i, !1) : r.defaultValue != null && br(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof o.onClick == "function" && (e.onclick = ul)
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1
						}
					}
					r && (t.flags |= 4)
				}
				t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
			}
			return Ue(t), null;
		case 6:
			if (e && t.stateNode != null) Um(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
				if (n = Yn(Qo.current), Yn(Ft.current), Si(t)) {
					if (r = t.stateNode, n = t.memoizedProps, r[$t] = t, (i = r.nodeValue !== n) && (e = st, e !== null)) switch (e.tag) {
						case 3:
							wi(r.nodeValue, n, (e.mode & 1) !== 0);
							break;
						case 5:
							e.memoizedProps.suppressHydrationWarning !== !0 && wi(r.nodeValue, n, (e.mode & 1) !== 0)
					}
					i && (t.flags |= 4)
				} else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$t] = t, t.stateNode = r
			}
			return Ue(t), null;
		case 13:
			if (fe(ve), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
				if (pe && at !== null && t.mode & 1 && !(t.flags & 128)) rm(), Br(), t.flags |= 98560, i = !1;
				else if (i = Si(t), r !== null && r.dehydrated !== null) {
					if (e === null) {
						if (!i) throw Error(j(318));
						if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(j(317));
						i[$t] = t
					} else Br(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
					Ue(t), i = !1
				} else jt !== null && (vs(jt), jt = null), i = !0;
				if (!i) return t.flags & 65536 ? t : null
			}
			return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ve.current & 1 ? je === 0 && (je = 3) : Mc())), t.updateQueue !== null && (t.flags |= 4), Ue(t), null);
		case 4:
			return Vr(), us(e, t), e === null && Wo(t.stateNode.containerInfo), Ue(t), null;
		case 10:
			return vc(t.type._context), Ue(t), null;
		case 17:
			return rt(t.type) && sl(), Ue(t), null;
		case 19:
			if (fe(ve), i = t.memoizedState, i === null) return Ue(t), null;
			if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
				if (r) po(i, !1);
				else {
					if (je !== 0 || e !== null && e.flags & 128)
						for (e = t.child; e !== null;) {
							if (l = vl(e), l !== null) {
								for (t.flags |= 128, po(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : {
									lanes: e.lanes,
									firstContext: e.firstContext
								}), n = n.sibling;
								return ue(ve, ve.current & 1 | 2), t.child
							}
							e = e.sibling
						}
					i.tail !== null && ke() > Kr && (t.flags |= 128, r = !0, po(i, !1), t.lanes = 4194304)
				}
			else {
				if (!r)
					if (e = vl(l), e !== null) {
						if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), po(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !pe) return Ue(t), null
					} else 2 * ke() - i.renderingStartTime > Kr && n !== 1073741824 && (t.flags |= 128, r = !0, po(i, !1), t.lanes = 4194304);
				i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l)
			}
			return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ke(), t.sibling = null, n = ve.current, ue(ve, r ? n & 1 | 2 : n & 1), t) : (Ue(t), null);
		case 22:
		case 23:
			return Tc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? lt & 1073741824 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), null;
		case 24:
			return null;
		case 25:
			return null
	}
	throw Error(j(156, t.tag))
}

function lS(e, t) {
	switch (dc(t), t.tag) {
		case 1:
			return rt(t.type) && sl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 3:
			return Vr(), fe(nt), fe(Ve), xc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
		case 5:
			return Sc(t), null;
		case 13:
			if (fe(ve), e = t.memoizedState, e !== null && e.dehydrated !== null) {
				if (t.alternate === null) throw Error(j(340));
				Br()
			}
			return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 19:
			return fe(ve), null;
		case 4:
			return Vr(), null;
		case 10:
			return vc(t.type._context), null;
		case 22:
		case 23:
			return Tc(), null;
		case 24:
			return null;
		default:
			return null
	}
}
var ki = !1,
	Be = !1,
	aS = typeof WeakSet == "function" ? WeakSet : Set,
	D = null;

function Cr(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function") try {
			n(null)
		} catch (r) {
			we(e, t, r)
		} else n.current = null
}

function ss(e, t, n) {
	try {
		n()
	} catch (r) {
		we(e, t, r)
	}
}
var Fd = !1;

function uS(e, t) {
	if (Ku = il, e = Vh(), cc(e)) {
		if ("selectionStart" in e) var n = {
			start: e.selectionStart,
			end: e.selectionEnd
		};
		else e: {
			n = (n = e.ownerDocument) && n.defaultView || window;
			var r = n.getSelection && n.getSelection();
			if (r && r.rangeCount !== 0) {
				n = r.anchorNode;
				var o = r.anchorOffset,
					i = r.focusNode;
				r = r.focusOffset;
				try {
					n.nodeType, i.nodeType
				} catch {
					n = null;
					break e
				}
				var l = 0,
					a = -1,
					u = -1,
					s = 0,
					c = 0,
					d = e,
					p = null;
				t: for (;;) {
					for (var g; d !== n || o !== 0 && d.nodeType !== 3 || (a = l + o), d !== i || r !== 0 && d.nodeType !== 3 || (u = l + r), d.nodeType === 3 && (l += d.nodeValue.length), (g = d.firstChild) !== null;) p = d, d = g;
					for (;;) {
						if (d === e) break t;
						if (p === n && ++s === o && (a = l), p === i && ++c === r && (u = l), (g = d.nextSibling) !== null) break;
						d = p, p = d.parentNode
					}
					d = g
				}
				n = a === -1 || u === -1 ? null : {
					start: a,
					end: u
				}
			} else n = null
		}
		n = n || {
			start: 0,
			end: 0
		}
	} else n = null;
	for (Qu = {
			focusedElem: e,
			selectionRange: n
		}, il = !1, D = t; D !== null;)
		if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, D = e;
		else
			for (; D !== null;) {
				t = D;
				try {
					var w = t.alternate;
					if (t.flags & 1024) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							break;
						case 1:
							if (w !== null) {
								var v = w.memoizedProps,
									S = w.memoizedState,
									m = t.stateNode,
									f = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : _t(t.type, v), S);
								m.__reactInternalSnapshotBeforeUpdate = f
							}
							break;
						case 3:
							var y = t.stateNode.containerInfo;
							y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
							break;
						case 5:
						case 6:
						case 4:
						case 17:
							break;
						default:
							throw Error(j(163))
					}
				} catch (h) {
					we(t, t.return, h)
				}
				if (e = t.sibling, e !== null) {
					e.return = t.return, D = e;
					break
				}
				D = t.return
			}
	return w = Fd, Fd = !1, w
}

function Ro(e, t, n) {
	var r = t.updateQueue;
	if (r = r !== null ? r.lastEffect : null, r !== null) {
		var o = r = r.next;
		do {
			if ((o.tag & e) === e) {
				var i = o.destroy;
				o.destroy = void 0, i !== void 0 && ss(t, n, i)
			}
			o = o.next
		} while (o !== r)
	}
}

function Bl(e, t) {
	if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
		var n = t = t.next;
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r()
			}
			n = n.next
		} while (n !== t)
	}
}

function cs(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n
		}
		typeof t == "function" ? t(e) : t.current = e
	}
}

function Fm(e) {
	var t = e.alternate;
	t !== null && (e.alternate = null, Fm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$t], delete t[Ho], delete t[Xu], delete t[Vw], delete t[Hw])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Bm(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Bd(e) {
	e: for (;;) {
		for (; e.sibling === null;) {
			if (e.return === null || Bm(e.return)) return null;
			e = e.return
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			e.child.return = e, e = e.child
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}

function fs(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ul));
	else if (r !== 4 && (e = e.child, e !== null))
		for (fs(e, t, n), e = e.sibling; e !== null;) fs(e, t, n), e = e.sibling
}

function ds(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && (e = e.child, e !== null))
		for (ds(e, t, n), e = e.sibling; e !== null;) ds(e, t, n), e = e.sibling
}
var ze = null,
	Ot = !1;

function dn(e, t, n) {
	for (n = n.child; n !== null;) Wm(e, t, n), n = n.sibling
}

function Wm(e, t, n) {
	if (Ut && typeof Ut.onCommitFiberUnmount == "function") try {
		Ut.onCommitFiberUnmount(zl, n)
	} catch {}
	switch (n.tag) {
		case 5:
			Be || Cr(n, t);
		case 6:
			var r = ze,
				o = Ot;
			ze = null, dn(e, t, n), ze = r, Ot = o, ze !== null && (Ot ? (e = ze, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ze.removeChild(n.stateNode));
			break;
		case 18:
			ze !== null && (Ot ? (e = ze, n = n.stateNode, e.nodeType === 8 ? Za(e.parentNode, n) : e.nodeType === 1 && Za(e, n), Uo(e)) : Za(ze, n.stateNode));
			break;
		case 4:
			r = ze, o = Ot, ze = n.stateNode.containerInfo, Ot = !0, dn(e, t, n), ze = r, Ot = o;
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (!Be && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
				o = r = r.next;
				do {
					var i = o,
						l = i.destroy;
					i = i.tag, l !== void 0 && (i & 2 || i & 4) && ss(n, t, l), o = o.next
				} while (o !== r)
			}
			dn(e, t, n);
			break;
		case 1:
			if (!Be && (Cr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
				r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
			} catch (a) {
				we(n, t, a)
			}
			dn(e, t, n);
			break;
		case 21:
			dn(e, t, n);
			break;
		case 22:
			n.mode & 1 ? (Be = (r = Be) || n.memoizedState !== null, dn(e, t, n), Be = r) : dn(e, t, n);
			break;
		default:
			dn(e, t, n)
	}
}

function Wd(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new aS), t.forEach(function(r) {
			var o = yS.bind(null, e, r);
			n.has(r) || (n.add(r), r.then(o, o))
		})
	}
}

function Ct(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var o = n[r];
			try {
				var i = e,
					l = t,
					a = l;
				e: for (; a !== null;) {
					switch (a.tag) {
						case 5:
							ze = a.stateNode, Ot = !1;
							break e;
						case 3:
							ze = a.stateNode.containerInfo, Ot = !0;
							break e;
						case 4:
							ze = a.stateNode.containerInfo, Ot = !0;
							break e
					}
					a = a.return
				}
				if (ze === null) throw Error(j(160));
				Wm(i, l, o), ze = null, Ot = !1;
				var u = o.alternate;
				u !== null && (u.return = null), o.return = null
			} catch (s) {
				we(o, t, s)
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null;) Vm(t, e), t = t.sibling
}

function Vm(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if (Ct(t, e), Lt(e), r & 4) {
				try {
					Ro(3, e, e.return), Bl(3, e)
				} catch (v) {
					we(e, e.return, v)
				}
				try {
					Ro(5, e, e.return)
				} catch (v) {
					we(e, e.return, v)
				}
			}
			break;
		case 1:
			Ct(t, e), Lt(e), r & 512 && n !== null && Cr(n, n.return);
			break;
		case 5:
			if (Ct(t, e), Lt(e), r & 512 && n !== null && Cr(n, n.return), e.flags & 32) {
				var o = e.stateNode;
				try {
					Lo(o, "")
				} catch (v) {
					we(e, e.return, v)
				}
			}
			if (r & 4 && (o = e.stateNode, o != null)) {
				var i = e.memoizedProps,
					l = n !== null ? n.memoizedProps : i,
					a = e.type,
					u = e.updateQueue;
				if (e.updateQueue = null, u !== null) try {
					a === "input" && i.type === "radio" && i.name != null && fh(o, i), Lu(a, l);
					var s = Lu(a, i);
					for (l = 0; l < u.length; l += 2) {
						var c = u[l],
							d = u[l + 1];
						c === "style" ? vh(o, d) : c === "dangerouslySetInnerHTML" ? hh(o, d) : c === "children" ? Lo(o, d) : Js(o, c, d, s)
					}
					switch (a) {
						case "input":
							Nu(o, i);
							break;
						case "textarea":
							dh(o, i);
							break;
						case "select":
							var p = o._wrapperState.wasMultiple;
							o._wrapperState.wasMultiple = !!i.multiple;
							var g = i.value;
							g != null ? br(o, !!i.multiple, g, !1) : p !== !!i.multiple && (i.defaultValue != null ? br(o, !!i.multiple, i.defaultValue, !0) : br(o, !!i.multiple, i.multiple ? [] : "", !1))
					}
					o[Ho] = i
				} catch (v) {
					we(e, e.return, v)
				}
			}
			break;
		case 6:
			if (Ct(t, e), Lt(e), r & 4) {
				if (e.stateNode === null) throw Error(j(162));
				o = e.stateNode, i = e.memoizedProps;
				try {
					o.nodeValue = i
				} catch (v) {
					we(e, e.return, v)
				}
			}
			break;
		case 3:
			if (Ct(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
				Uo(t.containerInfo)
			} catch (v) {
				we(e, e.return, v)
			}
			break;
		case 4:
			Ct(t, e), Lt(e);
			break;
		case 13:
			Ct(t, e), Lt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (bc = ke())), r & 4 && Wd(e);
			break;
		case 22:
			if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Be = (s = Be) || c, Ct(t, e), Be = s) : Ct(t, e), Lt(e), r & 8192) {
				if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !c && e.mode & 1)
					for (D = e, c = e.child; c !== null;) {
						for (d = D = c; D !== null;) {
							switch (p = D, g = p.child, p.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									Ro(4, p, p.return);
									break;
								case 1:
									Cr(p, p.return);
									var w = p.stateNode;
									if (typeof w.componentWillUnmount == "function") {
										r = p, n = p.return;
										try {
											t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
										} catch (v) {
											we(r, n, v)
										}
									}
									break;
								case 5:
									Cr(p, p.return);
									break;
								case 22:
									if (p.memoizedState !== null) {
										Hd(d);
										continue
									}
							}
							g !== null ? (g.return = p, D = g) : Hd(d)
						}
						c = c.sibling
					}
				e: for (c = null, d = e;;) {
					if (d.tag === 5) {
						if (c === null) {
							c = d;
							try {
								o = d.stateNode, s ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode, u = d.memoizedProps.style, l = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = mh("display", l))
							} catch (v) {
								we(e, e.return, v)
							}
						}
					} else if (d.tag === 6) {
						if (c === null) try {
							d.stateNode.nodeValue = s ? "" : d.memoizedProps
						} catch (v) {
							we(e, e.return, v)
						}
					} else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
						d.child.return = d, d = d.child;
						continue
					}
					if (d === e) break e;
					for (; d.sibling === null;) {
						if (d.return === null || d.return === e) break e;
						c === d && (c = null), d = d.return
					}
					c === d && (c = null), d.sibling.return = d.return, d = d.sibling
				}
			}
			break;
		case 19:
			Ct(t, e), Lt(e), r & 4 && Wd(e);
			break;
		case 21:
			break;
		default:
			Ct(t, e), Lt(e)
	}
}

function Lt(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null;) {
					if (Bm(n)) {
						var r = n;
						break e
					}
					n = n.return
				}
				throw Error(j(160))
			}
			switch (r.tag) {
				case 5:
					var o = r.stateNode;
					r.flags & 32 && (Lo(o, ""), r.flags &= -33);
					var i = Bd(e);
					ds(e, i, o);
					break;
				case 3:
				case 4:
					var l = r.stateNode.containerInfo,
						a = Bd(e);
					fs(e, a, l);
					break;
				default:
					throw Error(j(161))
			}
		}
		catch (u) {
			we(e, e.return, u)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}

function sS(e, t, n) {
	D = e, Hm(e)
}

function Hm(e, t, n) {
	for (var r = (e.mode & 1) !== 0; D !== null;) {
		var o = D,
			i = o.child;
		if (o.tag === 22 && r) {
			var l = o.memoizedState !== null || ki;
			if (!l) {
				var a = o.alternate,
					u = a !== null && a.memoizedState !== null || Be;
				a = ki;
				var s = Be;
				if (ki = l, (Be = u) && !s)
					for (D = o; D !== null;) l = D, u = l.child, l.tag === 22 && l.memoizedState !== null ? Kd(o) : u !== null ? (u.return = l, D = u) : Kd(o);
				for (; i !== null;) D = i, Hm(i), i = i.sibling;
				D = o, ki = a, Be = s
			}
			Vd(e)
		} else o.subtreeFlags & 8772 && i !== null ? (i.return = o, D = i) : Vd(e)
	}
}

function Vd(e) {
	for (; D !== null;) {
		var t = D;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772) switch (t.tag) {
					case 0:
					case 11:
					case 15:
						Be || Bl(5, t);
						break;
					case 1:
						var r = t.stateNode;
						if (t.flags & 4 && !Be)
							if (n === null) r.componentDidMount();
							else {
								var o = t.elementType === t.type ? n.memoizedProps : _t(t.type, n.memoizedProps);
								r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
							} var i = t.updateQueue;
						i !== null && Rd(t, i, r);
						break;
					case 3:
						var l = t.updateQueue;
						if (l !== null) {
							if (n = null, t.child !== null) switch (t.child.tag) {
								case 5:
									n = t.child.stateNode;
									break;
								case 1:
									n = t.child.stateNode
							}
							Rd(t, l, n)
						}
						break;
					case 5:
						var a = t.stateNode;
						if (n === null && t.flags & 4) {
							n = a;
							var u = t.memoizedProps;
							switch (t.type) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									u.autoFocus && n.focus();
									break;
								case "img":
									u.src && (n.src = u.src)
							}
						}
						break;
					case 6:
						break;
					case 4:
						break;
					case 12:
						break;
					case 13:
						if (t.memoizedState === null) {
							var s = t.alternate;
							if (s !== null) {
								var c = s.memoizedState;
								if (c !== null) {
									var d = c.dehydrated;
									d !== null && Uo(d)
								}
							}
						}
						break;
					case 19:
					case 17:
					case 21:
					case 22:
					case 23:
					case 25:
						break;
					default:
						throw Error(j(163))
				}
				Be || t.flags & 512 && cs(t)
			} catch (p) {
				we(t, t.return, p)
			}
		}
		if (t === e) {
			D = null;
			break
		}
		if (n = t.sibling, n !== null) {
			n.return = t.return, D = n;
			break
		}
		D = t.return
	}
}

function Hd(e) {
	for (; D !== null;) {
		var t = D;
		if (t === e) {
			D = null;
			break
		}
		var n = t.sibling;
		if (n !== null) {
			n.return = t.return, D = n;
			break
		}
		D = t.return
	}
}

function Kd(e) {
	for (; D !== null;) {
		var t = D;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Bl(4, t)
					} catch (u) {
						we(t, n, u)
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var o = t.return;
						try {
							r.componentDidMount()
						} catch (u) {
							we(t, o, u)
						}
					}
					var i = t.return;
					try {
						cs(t)
					} catch (u) {
						we(t, i, u)
					}
					break;
				case 5:
					var l = t.return;
					try {
						cs(t)
					} catch (u) {
						we(t, l, u)
					}
			}
		} catch (u) {
			we(t, t.return, u)
		}
		if (t === e) {
			D = null;
			break
		}
		var a = t.sibling;
		if (a !== null) {
			a.return = t.return, D = a;
			break
		}
		D = t.return
	}
}
var cS = Math.ceil,
	wl = sn.ReactCurrentDispatcher,
	Oc = sn.ReactCurrentOwner,
	wt = sn.ReactCurrentBatchConfig,
	X = 0,
	Te = null,
	Ce = null,
	De = 0,
	lt = 0,
	_r = In(0),
	je = 0,
	Jo = null,
	ir = 0,
	Wl = 0,
	jc = 0,
	Oo = null,
	et = null,
	bc = 0,
	Kr = 1 / 0,
	Xt = null,
	Sl = !1,
	ps = null,
	On = null,
	Pi = !1,
	Sn = null,
	xl = 0,
	jo = 0,
	hs = null,
	$i = -1,
	Ai = 0;

function Ye() {
	return X & 6 ? ke() : $i !== -1 ? $i : $i = ke()
}

function jn(e) {
	return e.mode & 1 ? X & 2 && De !== 0 ? De & -De : Qw.transition !== null ? (Ai === 0 && (Ai = Oh()), Ai) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Dh(e.type)), e) : 1
}

function Mt(e, t, n, r) {
	if (50 < jo) throw jo = 0, hs = null, Error(j(185));
	ti(e, n, r), (!(X & 2) || e !== Te) && (e === Te && (!(X & 2) && (Wl |= n), je === 4 && yn(e, De)), ot(e, r), n === 1 && X === 0 && !(t.mode & 1) && (Kr = ke() + 500, Al && $n()))
}

function ot(e, t) {
	var n = e.callbackNode;
	Q1(e, t);
	var r = ol(e, e === Te ? De : 0);
	if (r === 0) n !== null && td(n), e.callbackNode = null, e.callbackPriority = 0;
	else if (t = r & -r, e.callbackPriority !== t) {
		if (n != null && td(n), t === 1) e.tag === 0 ? Kw(Qd.bind(null, e)) : em(Qd.bind(null, e)), Bw(function() {
			!(X & 6) && $n()
		}), n = null;
		else {
			switch (jh(r)) {
				case 1:
					n = nc;
					break;
				case 4:
					n = _h;
					break;
				case 16:
					n = rl;
					break;
				case 536870912:
					n = Rh;
					break;
				default:
					n = rl
			}
			n = Zm(n, Km.bind(null, e))
		}
		e.callbackPriority = t, e.callbackNode = n
	}
}

function Km(e, t) {
	if ($i = -1, Ai = 0, X & 6) throw Error(j(327));
	var n = e.callbackNode;
	if (Dr() && e.callbackNode !== n) return null;
	var r = ol(e, e === Te ? De : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = El(e, r);
	else {
		t = r;
		var o = X;
		X |= 2;
		var i = Ym();
		(Te !== e || De !== t) && (Xt = null, Kr = ke() + 500, Gn(e, t));
		do try {
			pS();
			break
		} catch (a) {
			Qm(e, a)
		}
		while (1);
		mc(), wl.current = i, X = o, Ce !== null ? t = 0 : (Te = null, De = 0, t = je)
	}
	if (t !== 0) {
		if (t === 2 && (o = Fu(e), o !== 0 && (r = o, t = ms(e, o))), t === 1) throw n = Jo, Gn(e, 0), yn(e, r), ot(e, ke()), n;
		if (t === 6) yn(e, r);
		else {
			if (o = e.current.alternate, !(r & 30) && !fS(o) && (t = El(e, r), t === 2 && (i = Fu(e), i !== 0 && (r = i, t = ms(e, i))), t === 1)) throw n = Jo, Gn(e, 0), yn(e, r), ot(e, ke()), n;
			switch (e.finishedWork = o, e.finishedLanes = r, t) {
				case 0:
				case 1:
					throw Error(j(345));
				case 2:
					Wn(e, et, Xt);
					break;
				case 3:
					if (yn(e, r), (r & 130023424) === r && (t = bc + 500 - ke(), 10 < t)) {
						if (ol(e, 0) !== 0) break;
						if (o = e.suspendedLanes, (o & r) !== r) {
							Ye(), e.pingedLanes |= e.suspendedLanes & o;
							break
						}
						e.timeoutHandle = Gu(Wn.bind(null, e, et, Xt), t);
						break
					}
					Wn(e, et, Xt);
					break;
				case 4:
					if (yn(e, r), (r & 4194240) === r) break;
					for (t = e.eventTimes, o = -1; 0 < r;) {
						var l = 31 - Tt(r);
						i = 1 << l, l = t[l], l > o && (o = l), r &= ~i
					}
					if (r = o, r = ke() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cS(r / 1960)) - r, 10 < r) {
						e.timeoutHandle = Gu(Wn.bind(null, e, et, Xt), r);
						break
					}
					Wn(e, et, Xt);
					break;
				case 5:
					Wn(e, et, Xt);
					break;
				default:
					throw Error(j(329))
			}
		}
	}
	return ot(e, ke()), e.callbackNode === n ? Km.bind(null, e) : null
}

function ms(e, t) {
	var n = Oo;
	return e.current.memoizedState.isDehydrated && (Gn(e, t).flags |= 256), e = El(e, t), e !== 2 && (t = et, et = n, t !== null && vs(t)), e
}

function vs(e) {
	et === null ? et = e : et.push.apply(et, e)
}

function fS(e) {
	for (var t = e;;) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && (n = n.stores, n !== null))
				for (var r = 0; r < n.length; r++) {
					var o = n[r],
						i = o.getSnapshot;
					o = o.value;
					try {
						if (!zt(i(), o)) return !1
					} catch {
						return !1
					}
				}
		}
		if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
		else {
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return !0;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
	}
	return !0
}

function yn(e, t) {
	for (t &= ~jc, t &= ~Wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
		var n = 31 - Tt(t),
			r = 1 << n;
		e[n] = -1, t &= ~r
	}
}

function Qd(e) {
	if (X & 6) throw Error(j(327));
	Dr();
	var t = ol(e, 0);
	if (!(t & 1)) return ot(e, ke()), null;
	var n = El(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Fu(e);
		r !== 0 && (t = r, n = ms(e, r))
	}
	if (n === 1) throw n = Jo, Gn(e, 0), yn(e, t), ot(e, ke()), n;
	if (n === 6) throw Error(j(345));
	return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wn(e, et, Xt), ot(e, ke()), null
}

function Nc(e, t) {
	var n = X;
	X |= 1;
	try {
		return e(t)
	} finally {
		X = n, X === 0 && (Kr = ke() + 500, Al && $n())
	}
}

function lr(e) {
	Sn !== null && Sn.tag === 0 && !(X & 6) && Dr();
	var t = X;
	X |= 1;
	var n = wt.transition,
		r = te;
	try {
		if (wt.transition = null, te = 1, e) return e()
	} finally {
		te = r, wt.transition = n, X = t, !(X & 6) && $n()
	}
}

function Tc() {
	lt = _r.current, fe(_r)
}

function Gn(e, t) {
	e.finishedWork = null, e.finishedLanes = 0;
	var n = e.timeoutHandle;
	if (n !== -1 && (e.timeoutHandle = -1, Fw(n)), Ce !== null)
		for (n = Ce.return; n !== null;) {
			var r = n;
			switch (dc(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && sl();
					break;
				case 3:
					Vr(), fe(nt), fe(Ve), xc();
					break;
				case 5:
					Sc(r);
					break;
				case 4:
					Vr();
					break;
				case 13:
					fe(ve);
					break;
				case 19:
					fe(ve);
					break;
				case 10:
					vc(r.type._context);
					break;
				case 22:
				case 23:
					Tc()
			}
			n = n.return
		}
	if (Te = e, Ce = e = bn(e.current, null), De = lt = t, je = 0, Jo = null, jc = Wl = ir = 0, et = Oo = null, Qn !== null) {
		for (t = 0; t < Qn.length; t++)
			if (n = Qn[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var o = r.next,
					i = n.pending;
				if (i !== null) {
					var l = i.next;
					i.next = o, r.next = l
				}
				n.pending = r
			} Qn = null
	}
	return e
}

function Qm(e, t) {
	do {
		var n = Ce;
		try {
			if (mc(), Di.current = gl, yl) {
				for (var r = ye.memoizedState; r !== null;) {
					var o = r.queue;
					o !== null && (o.pending = null), r = r.next
				}
				yl = !1
			}
			if (or = 0, be = Oe = ye = null, _o = !1, Yo = 0, Oc.current = null, n === null || n.return === null) {
				je = 1, Jo = t, Ce = null;
				break
			}
			e: {
				var i = e,
					l = n.return,
					a = n,
					u = t;
				if (t = De, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
					var s = u,
						c = a,
						d = c.tag;
					if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
						var p = c.alternate;
						p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null)
					}
					var g = zd(l);
					if (g !== null) {
						g.flags &= -257, Dd(g, l, a, i, t), g.mode & 1 && Md(i, s, t), t = g, u = s;
						var w = t.updateQueue;
						if (w === null) {
							var v = new Set;
							v.add(u), t.updateQueue = v
						} else w.add(u);
						break e
					} else {
						if (!(t & 1)) {
							Md(i, s, t), Mc();
							break e
						}
						u = Error(j(426))
					}
				} else if (pe && a.mode & 1) {
					var S = zd(l);
					if (S !== null) {
						!(S.flags & 65536) && (S.flags |= 256), Dd(S, l, a, i, t), pc(Hr(u, a));
						break e
					}
				}
				i = u = Hr(u, a),
				je !== 4 && (je = 2),
				Oo === null ? Oo = [i] : Oo.push(i),
				i = l;do {
					switch (i.tag) {
						case 3:
							i.flags |= 65536, t &= -t, i.lanes |= t;
							var m = bm(i, u, t);
							_d(i, m);
							break e;
						case 1:
							a = u;
							var f = i.type,
								y = i.stateNode;
							if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (On === null || !On.has(y)))) {
								i.flags |= 65536, t &= -t, i.lanes |= t;
								var h = Nm(i, a, t);
								_d(i, h);
								break e
							}
					}
					i = i.return
				} while (i !== null)
			}
			Xm(n)
		} catch (E) {
			t = E, Ce === n && n !== null && (Ce = n = n.return);
			continue
		}
		break
	} while (1)
}

function Ym() {
	var e = wl.current;
	return wl.current = gl, e === null ? gl : e
}

function Mc() {
	(je === 0 || je === 3 || je === 2) && (je = 4), Te === null || !(ir & 268435455) && !(Wl & 268435455) || yn(Te, De)
}

function El(e, t) {
	var n = X;
	X |= 2;
	var r = Ym();
	(Te !== e || De !== t) && (Xt = null, Gn(e, t));
	do try {
		dS();
		break
	} catch (o) {
		Qm(e, o)
	}
	while (1);
	if (mc(), X = n, wl.current = r, Ce !== null) throw Error(j(261));
	return Te = null, De = 0, je
}

function dS() {
	for (; Ce !== null;) Gm(Ce)
}

function pS() {
	for (; Ce !== null && !$1();) Gm(Ce)
}

function Gm(e) {
	var t = qm(e.alternate, e, lt);
	e.memoizedProps = e.pendingProps, t === null ? Xm(e) : Ce = t, Oc.current = null
}

function Xm(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (e = t.return, t.flags & 32768) {
			if (n = lS(n, t), n !== null) {
				n.flags &= 32767, Ce = n;
				return
			}
			if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
			else {
				je = 6, Ce = null;
				return
			}
		} else if (n = iS(n, t, lt), n !== null) {
			Ce = n;
			return
		}
		if (t = t.sibling, t !== null) {
			Ce = t;
			return
		}
		Ce = t = e
	} while (t !== null);
	je === 0 && (je = 5)
}

function Wn(e, t, n) {
	var r = te,
		o = wt.transition;
	try {
		wt.transition = null, te = 1, hS(e, t, n, r)
	} finally {
		wt.transition = o, te = r
	}
	return null
}

function hS(e, t, n, r) {
	do Dr(); while (Sn !== null);
	if (X & 6) throw Error(j(327));
	n = e.finishedWork;
	var o = e.finishedLanes;
	if (n === null) return null;
	if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(j(177));
	e.callbackNode = null, e.callbackPriority = 0;
	var i = n.lanes | n.childLanes;
	if (Y1(e, i), e === Te && (Ce = Te = null, De = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pi || (Pi = !0, Zm(rl, function() {
			return Dr(), null
		})), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
		i = wt.transition, wt.transition = null;
		var l = te;
		te = 1;
		var a = X;
		X |= 4, Oc.current = null, uS(e, n), Vm(n, e), zw(Qu), il = !!Ku, Qu = Ku = null, e.current = n, sS(n), A1(), X = a, te = l, wt.transition = i
	} else e.current = n;
	if (Pi && (Pi = !1, Sn = e, xl = o), i = e.pendingLanes, i === 0 && (On = null), B1(n.stateNode), ot(e, ke()), t !== null)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
			componentStack: o.stack,
			digest: o.digest
		});
	if (Sl) throw Sl = !1, e = ps, ps = null, e;
	return xl & 1 && e.tag !== 0 && Dr(), i = e.pendingLanes, i & 1 ? e === hs ? jo++ : (jo = 0, hs = e) : jo = 0, $n(), null
}

function Dr() {
	if (Sn !== null) {
		var e = jh(xl),
			t = wt.transition,
			n = te;
		try {
			if (wt.transition = null, te = 16 > e ? 16 : e, Sn === null) var r = !1;
			else {
				if (e = Sn, Sn = null, xl = 0, X & 6) throw Error(j(331));
				var o = X;
				for (X |= 4, D = e.current; D !== null;) {
					var i = D,
						l = i.child;
					if (D.flags & 16) {
						var a = i.deletions;
						if (a !== null) {
							for (var u = 0; u < a.length; u++) {
								var s = a[u];
								for (D = s; D !== null;) {
									var c = D;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											Ro(8, c, i)
									}
									var d = c.child;
									if (d !== null) d.return = c, D = d;
									else
										for (; D !== null;) {
											c = D;
											var p = c.sibling,
												g = c.return;
											if (Fm(c), c === s) {
												D = null;
												break
											}
											if (p !== null) {
												p.return = g, D = p;
												break
											}
											D = g
										}
								}
							}
							var w = i.alternate;
							if (w !== null) {
								var v = w.child;
								if (v !== null) {
									w.child = null;
									do {
										var S = v.sibling;
										v.sibling = null, v = S
									} while (v !== null)
								}
							}
							D = i
						}
					}
					if (i.subtreeFlags & 2064 && l !== null) l.return = i, D = l;
					else e: for (; D !== null;) {
						if (i = D, i.flags & 2048) switch (i.tag) {
							case 0:
							case 11:
							case 15:
								Ro(9, i, i.return)
						}
						var m = i.sibling;
						if (m !== null) {
							m.return = i.return, D = m;
							break e
						}
						D = i.return
					}
				}
				var f = e.current;
				for (D = f; D !== null;) {
					l = D;
					var y = l.child;
					if (l.subtreeFlags & 2064 && y !== null) y.return = l, D = y;
					else e: for (l = f; D !== null;) {
						if (a = D, a.flags & 2048) try {
							switch (a.tag) {
								case 0:
								case 11:
								case 15:
									Bl(9, a)
							}
						} catch (E) {
							we(a, a.return, E)
						}
						if (a === l) {
							D = null;
							break e
						}
						var h = a.sibling;
						if (h !== null) {
							h.return = a.return, D = h;
							break e
						}
						D = a.return
					}
				}
				if (X = o, $n(), Ut && typeof Ut.onPostCommitFiberRoot == "function") try {
					Ut.onPostCommitFiberRoot(zl, e)
				} catch {}
				r = !0
			}
			return r
		} finally {
			te = n, wt.transition = t
		}
	}
	return !1
}

function Yd(e, t, n) {
	t = Hr(n, t), t = bm(e, t, 1), e = Rn(e, t, 1), t = Ye(), e !== null && (ti(e, 1, t), ot(e, t))
}

function we(e, t, n) {
	if (e.tag === 3) Yd(e, e, n);
	else
		for (; t !== null;) {
			if (t.tag === 3) {
				Yd(t, e, n);
				break
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (On === null || !On.has(r))) {
					e = Hr(n, e), e = Nm(t, e, 1), t = Rn(t, e, 1), e = Ye(), t !== null && (ti(t, 1, e), ot(t, e));
					break
				}
			}
			t = t.return
		}
}

function mS(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t), t = Ye(), e.pingedLanes |= e.suspendedLanes & n, Te === e && (De & n) === n && (je === 4 || je === 3 && (De & 130023424) === De && 500 > ke() - bc ? Gn(e, 0) : jc |= n), ot(e, t)
}

function Jm(e, t) {
	t === 0 && (e.mode & 1 ? (t = hi, hi <<= 1, !(hi & 130023424) && (hi = 4194304)) : t = 1);
	var n = Ye();
	e = an(e, t), e !== null && (ti(e, t, n), ot(e, n))
}

function vS(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Jm(e, n)
}

function yS(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				o = e.memoizedState;
			o !== null && (n = o.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(j(314))
	}
	r !== null && r.delete(t), Jm(e, n)
}
var qm;
qm = function(e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || nt.current) tt = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return tt = !1, oS(e, t, n);
			tt = !!(e.flags & 131072)
		}
	else tt = !1, pe && t.flags & 1048576 && tm(t, dl, t.index);
	switch (t.lanes = 0, t.tag) {
		case 2:
			var r = t.type;
			Ii(e, t), e = t.pendingProps;
			var o = Fr(t, Ve.current);
			zr(t, n), o = kc(null, t, r, e, o, n);
			var i = Pc();
			return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, rt(r) ? (i = !0, cl(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, gc(t), o.updater = Ul, t.stateNode = o, o._reactInternals = t, ns(t, r, e, n), t = is(null, t, r, !0, i, n)) : (t.tag = 0, pe && i && fc(t), Qe(null, t, o, n), t = t.child), t;
		case 16:
			r = t.elementType;
			e: {
				switch (Ii(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = wS(r), e = _t(r, e), o) {
					case 0:
						t = os(null, t, r, e, n);
						break e;
					case 1:
						t = $d(null, t, r, e, n);
						break e;
					case 11:
						t = Ld(null, t, r, e, n);
						break e;
					case 14:
						t = Id(null, t, r, _t(r.type, e), n);
						break e
				}
				throw Error(j(306, r, ""))
			}
			return t;
		case 0:
			return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _t(r, o), os(e, t, r, o, n);
		case 1:
			return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _t(r, o), $d(e, t, r, o, n);
		case 3:
			e: {
				if (Dm(t), e === null) throw Error(j(387));r = t.pendingProps,
				i = t.memoizedState,
				o = i.element,
				im(e, t),
				ml(t, r, null, n);
				var l = t.memoizedState;
				if (r = l.element, i.isDehydrated)
					if (i = {
							element: r,
							isDehydrated: !1,
							cache: l.cache,
							pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
							transitions: l.transitions
						}, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
						o = Hr(Error(j(423)), t), t = Ad(e, t, r, n, o);
						break e
					} else if (r !== o) {
					o = Hr(Error(j(424)), t), t = Ad(e, t, r, n, o);
					break e
				} else
					for (at = _n(t.stateNode.containerInfo.firstChild), st = t, pe = !0, jt = null, n = sm(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
				else {
					if (Br(), r === o) {
						t = un(e, t, n);
						break e
					}
					Qe(e, t, r, n)
				}
				t = t.child
			}
			return t;
		case 5:
			return cm(t), e === null && Zu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Yu(r, o) ? l = null : i !== null && Yu(r, i) && (t.flags |= 32), zm(e, t), Qe(e, t, l, n), t.child;
		case 6:
			return e === null && Zu(t), null;
		case 13:
			return Lm(e, t, n);
		case 4:
			return wc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Wr(t, null, r, n) : Qe(e, t, r, n), t.child;
		case 11:
			return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _t(r, o), Ld(e, t, r, o, n);
		case 7:
			return Qe(e, t, t.pendingProps, n), t.child;
		case 8:
			return Qe(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return Qe(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, ue(pl, r._currentValue), r._currentValue = l, i !== null)
					if (zt(i.value, l)) {
						if (i.children === o.children && !nt.current) {
							t = un(e, t, n);
							break e
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null;) {
							var a = i.dependencies;
							if (a !== null) {
								l = i.child;
								for (var u = a.firstContext; u !== null;) {
									if (u.context === r) {
										if (i.tag === 1) {
											u = nn(-1, n & -n), u.tag = 2;
											var s = i.updateQueue;
											if (s !== null) {
												s = s.shared;
												var c = s.pending;
												c === null ? u.next = u : (u.next = c.next, c.next = u), s.pending = u
											}
										}
										i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), es(i.return, n, t), a.lanes |= n;
										break
									}
									u = u.next
								}
							} else if (i.tag === 10) l = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (l = i.return, l === null) throw Error(j(341));
								l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), es(l, n, t), l = i.sibling
							} else l = i.child;
							if (l !== null) l.return = i;
							else
								for (l = i; l !== null;) {
									if (l === t) {
										l = null;
										break
									}
									if (i = l.sibling, i !== null) {
										i.return = l.return, l = i;
										break
									}
									l = l.return
								}
							i = l
						}
				Qe(e, t, o.children, n),
				t = t.child
			}
			return t;
		case 9:
			return o = t.type, r = t.pendingProps.children, zr(t, n), o = xt(o), r = r(o), t.flags |= 1, Qe(e, t, r, n), t.child;
		case 14:
			return r = t.type, o = _t(r, t.pendingProps), o = _t(r.type, o), Id(e, t, r, o, n);
		case 15:
			return Tm(e, t, t.type, t.pendingProps, n);
		case 17:
			return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _t(r, o), Ii(e, t), t.tag = 1, rt(r) ? (e = !0, cl(t)) : e = !1, zr(t, n), am(t, r, o), ns(t, r, o, n), is(null, t, r, !0, e, n);
		case 19:
			return Im(e, t, n);
		case 22:
			return Mm(e, t, n)
	}
	throw Error(j(156, t.tag))
};

function Zm(e, t) {
	return Ch(e, t)
}

function gS(e, t, n, r) {
	this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function gt(e, t, n, r) {
	return new gS(e, t, n, r)
}

function zc(e) {
	return e = e.prototype, !(!e || !e.isReactComponent)
}

function wS(e) {
	if (typeof e == "function") return zc(e) ? 1 : 0;
	if (e != null) {
		if (e = e.$$typeof, e === Zs) return 11;
		if (e === ec) return 14
	}
	return 2
}

function bn(e, t) {
	var n = e.alternate;
	return n === null ? (n = gt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
		lanes: t.lanes,
		firstContext: t.firstContext
	}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ui(e, t, n, r, o, i) {
	var l = 2;
	if (r = e, typeof e == "function") zc(e) && (l = 1);
	else if (typeof e == "string") l = 5;
	else e: switch (e) {
		case vr:
			return Xn(n.children, o, i, t);
		case qs:
			l = 8, o |= 8;
			break;
		case _u:
			return e = gt(12, n, t, o | 2), e.elementType = _u, e.lanes = i, e;
		case Ru:
			return e = gt(13, n, t, o), e.elementType = Ru, e.lanes = i, e;
		case Ou:
			return e = gt(19, n, t, o), e.elementType = Ou, e.lanes = i, e;
		case uh:
			return Vl(n, o, i, t);
		default:
			if (typeof e == "object" && e !== null) switch (e.$$typeof) {
				case lh:
					l = 10;
					break e;
				case ah:
					l = 9;
					break e;
				case Zs:
					l = 11;
					break e;
				case ec:
					l = 14;
					break e;
				case pn:
					l = 16, r = null;
					break e
			}
			throw Error(j(130, e == null ? e : typeof e, ""))
	}
	return t = gt(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function Xn(e, t, n, r) {
	return e = gt(7, e, r, t), e.lanes = n, e
}

function Vl(e, t, n, r) {
	return e = gt(22, e, r, t), e.elementType = uh, e.lanes = n, e.stateNode = {
		isHidden: !1
	}, e
}

function au(e, t, n) {
	return e = gt(6, e, null, t), e.lanes = n, e
}

function uu(e, t, n) {
	return t = gt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
		containerInfo: e.containerInfo,
		pendingChildren: null,
		implementation: e.implementation
	}, t
}

function SS(e, t, n, r, o) {
	this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ba(0), this.expirationTimes = Ba(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ba(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Dc(e, t, n, r, o, i, l, a, u) {
	return e = new SS(e, t, n, a, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = gt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
		element: r,
		isDehydrated: n,
		cache: null,
		transitions: null,
		pendingSuspenseBoundaries: null
	}, gc(i), e
}

function xS(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: mr,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n
	}
}

function ev(e) {
	if (!e) return Mn;
	e = e._reactInternals;
	e: {
		if (sr(e) !== e || e.tag !== 1) throw Error(j(170));
		var t = e;do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (rt(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e
					}
			}
			t = t.return
		} while (t !== null);
		throw Error(j(171))
	}
	if (e.tag === 1) {
		var n = e.type;
		if (rt(n)) return Zh(e, n, t)
	}
	return t
}

function tv(e, t, n, r, o, i, l, a, u) {
	return e = Dc(n, r, !0, e, o, i, l, a, u), e.context = ev(null), n = e.current, r = Ye(), o = jn(n), i = nn(r, o), i.callback = t ?? null, Rn(n, i, o), e.current.lanes = o, ti(e, o, r), ot(e, r), e
}

function Hl(e, t, n, r) {
	var o = t.current,
		i = Ye(),
		l = jn(o);
	return n = ev(n), t.context === null ? t.context = n : t.pendingContext = n, t = nn(i, l), t.payload = {
		element: e
	}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Rn(o, t, l), e !== null && (Mt(e, o, l, i), zi(e, o, l)), l
}

function kl(e) {
	if (e = e.current, !e.child) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode
	}
}

function Gd(e, t) {
	if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t
	}
}

function Lc(e, t) {
	Gd(e, t), (e = e.alternate) && Gd(e, t)
}

function ES() {
	return null
}
var nv = typeof reportError == "function" ? reportError : function(e) {
	console.error(e)
};

function Ic(e) {
	this._internalRoot = e
}
Kl.prototype.render = Ic.prototype.render = function(e) {
	var t = this._internalRoot;
	if (t === null) throw Error(j(409));
	Hl(e, t, null, null)
};
Kl.prototype.unmount = Ic.prototype.unmount = function() {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		lr(function() {
			Hl(null, e, null, null)
		}), t[ln] = null
	}
};

function Kl(e) {
	this._internalRoot = e
}
Kl.prototype.unstable_scheduleHydration = function(e) {
	if (e) {
		var t = Th();
		e = {
			blockedOn: null,
			target: e,
			priority: t
		};
		for (var n = 0; n < vn.length && t !== 0 && t < vn[n].priority; n++);
		vn.splice(n, 0, e), n === 0 && zh(e)
	}
};

function $c(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Ql(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Xd() {}

function kS(e, t, n, r, o) {
	if (o) {
		if (typeof r == "function") {
			var i = r;
			r = function() {
				var s = kl(l);
				i.call(s)
			}
		}
		var l = tv(t, r, e, 0, null, !1, !1, "", Xd);
		return e._reactRootContainer = l, e[ln] = l.current, Wo(e.nodeType === 8 ? e.parentNode : e), lr(), l
	}
	for (; o = e.lastChild;) e.removeChild(o);
	if (typeof r == "function") {
		var a = r;
		r = function() {
			var s = kl(u);
			a.call(s)
		}
	}
	var u = Dc(e, 0, !1, null, null, !1, !1, "", Xd);
	return e._reactRootContainer = u, e[ln] = u.current, Wo(e.nodeType === 8 ? e.parentNode : e), lr(function() {
		Hl(t, u, n, r)
	}), u
}

function Yl(e, t, n, r, o) {
	var i = n._reactRootContainer;
	if (i) {
		var l = i;
		if (typeof o == "function") {
			var a = o;
			o = function() {
				var u = kl(l);
				a.call(u)
			}
		}
		Hl(t, l, e, o)
	} else l = kS(n, t, e, o, r);
	return kl(l)
}
bh = function(e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = go(t.pendingLanes);
				n !== 0 && (rc(t, n | 1), ot(t, ke()), !(X & 6) && (Kr = ke() + 500, $n()))
			}
			break;
		case 13:
			lr(function() {
				var r = an(e, 1);
				if (r !== null) {
					var o = Ye();
					Mt(r, e, 1, o)
				}
			}), Lc(e, 1)
	}
};
oc = function(e) {
	if (e.tag === 13) {
		var t = an(e, 134217728);
		if (t !== null) {
			var n = Ye();
			Mt(t, e, 134217728, n)
		}
		Lc(e, 134217728)
	}
};
Nh = function(e) {
	if (e.tag === 13) {
		var t = jn(e),
			n = an(e, t);
		if (n !== null) {
			var r = Ye();
			Mt(n, e, t, r)
		}
		Lc(e, t)
	}
};
Th = function() {
	return te
};
Mh = function(e, t) {
	var n = te;
	try {
		return te = e, t()
	} finally {
		te = n
	}
};
$u = function(e, t, n) {
	switch (t) {
		case "input":
			if (Nu(e, n), t = n.name, n.type === "radio" && t != null) {
				for (n = e; n.parentNode;) n = n.parentNode;
				for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var o = $l(r);
						if (!o) throw Error(j(90));
						ch(r), Nu(r, o)
					}
				}
			}
			break;
		case "textarea":
			dh(e, n);
			break;
		case "select":
			t = n.value, t != null && br(e, !!n.multiple, t, !1)
	}
};
wh = Nc;
Sh = lr;
var PS = {
		usingClientEntryPoint: !1,
		Events: [ri, Sr, $l, yh, gh, Nc]
	},
	ho = {
		findFiberByHostInstance: Kn,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom"
	},
	CS = {
		bundleType: ho.bundleType,
		version: ho.version,
		rendererPackageName: ho.rendererPackageName,
		rendererConfig: ho.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: sn.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(e) {
			return e = kh(e), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: ho.findFiberByHostInstance || ES,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Ci.isDisabled && Ci.supportsFiber) try {
		zl = Ci.inject(CS), Ut = Ci
	} catch {}
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = PS;
dt.createPortal = function(e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!$c(t)) throw Error(j(200));
	return xS(e, t, null, n)
};
dt.createRoot = function(e, t) {
	if (!$c(e)) throw Error(j(299));
	var n = !1,
		r = "",
		o = nv;
	return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Dc(e, 1, !1, null, null, n, !1, r, o), e[ln] = t.current, Wo(e.nodeType === 8 ? e.parentNode : e), new Ic(t)
};
dt.findDOMNode = function(e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0) throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
	return e = kh(t), e = e === null ? null : e.stateNode, e
};
dt.flushSync = function(e) {
	return lr(e)
};
dt.hydrate = function(e, t, n) {
	if (!Ql(t)) throw Error(j(200));
	return Yl(null, e, t, !0, n)
};
dt.hydrateRoot = function(e, t, n) {
	if (!$c(e)) throw Error(j(405));
	var r = n != null && n.hydratedSources || null,
		o = !1,
		i = "",
		l = nv;
	if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = tv(t, null, e, 1, n ?? null, o, !1, i, l), e[ln] = t.current, Wo(e), r)
		for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
	return new Kl(t)
};
dt.render = function(e, t, n) {
	if (!Ql(t)) throw Error(j(200));
	return Yl(null, e, t, !1, n)
};
dt.unmountComponentAtNode = function(e) {
	if (!Ql(e)) throw Error(j(40));
	return e._reactRootContainer ? (lr(function() {
		Yl(null, null, e, !1, function() {
			e._reactRootContainer = null, e[ln] = null
		})
	}), !0) : !1
};
dt.unstable_batchedUpdates = Nc;
dt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
	if (!Ql(n)) throw Error(j(200));
	if (e == null || e._reactInternals === void 0) throw Error(j(38));
	return Yl(e, t, n, !1, r)
};
dt.version = "18.2.0-next-9e3b772b8-20220608";

function rv() {
	if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
		__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rv)
	} catch (e) {
		console.error(e)
	}
}
rv(), th.exports = dt;
var Gl = th.exports;
const _S = up(Gl);

function RS(e) {
	e()
}
let ov = RS;
const OS = e => ov = e,
	jS = () => ov,
	Jd = Symbol.for("react-redux-context"),
	qd = typeof globalThis < "u" ? globalThis : {};

function bS() {
	var e;
	if (!C.createContext) return {};
	const t = (e = qd[Jd]) != null ? e : qd[Jd] = new Map;
	let n = t.get(C.createContext);
	return n || (n = C.createContext(null), t.set(C.createContext, n)), n
}
const zn = bS();

function Ac(e = zn) {
	return function() {
		return C.useContext(e)
	}
}
const iv = Ac(),
	NS = () => {
		throw new Error("uSES not initialized!")
	};
let lv = NS;
const TS = e => {
		lv = e
	},
	MS = (e, t) => e === t;

function zS(e = zn) {
	const t = e === zn ? iv : Ac(e);
	return function(r, o = {}) {
		const {
			equalityFn: i = MS,
			stabilityCheck: l = void 0,
			noopCheck: a = void 0
		} = typeof o == "function" ? {
			equalityFn: o
		} : o, {
			store: u,
			subscription: s,
			getServerState: c,
			stabilityCheck: d,
			noopCheck: p
		} = t();
		C.useRef(!0);
		const g = C.useCallback({
				[r.name](v) {
					return r(v)
				}
			} [r.name], [r, d, l]),
			w = lv(s.addNestedSub, u.getState, c || u.getState, g, i);
		return C.useDebugValue(w), w
	}
}
const DS = zS();
var av = {
		exports: {}
	},
	ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me = typeof Symbol == "function" && Symbol.for,
	Uc = Me ? Symbol.for("react.element") : 60103,
	Fc = Me ? Symbol.for("react.portal") : 60106,
	Xl = Me ? Symbol.for("react.fragment") : 60107,
	Jl = Me ? Symbol.for("react.strict_mode") : 60108,
	ql = Me ? Symbol.for("react.profiler") : 60114,
	Zl = Me ? Symbol.for("react.provider") : 60109,
	ea = Me ? Symbol.for("react.context") : 60110,
	Bc = Me ? Symbol.for("react.async_mode") : 60111,
	ta = Me ? Symbol.for("react.concurrent_mode") : 60111,
	na = Me ? Symbol.for("react.forward_ref") : 60112,
	ra = Me ? Symbol.for("react.suspense") : 60113,
	LS = Me ? Symbol.for("react.suspense_list") : 60120,
	oa = Me ? Symbol.for("react.memo") : 60115,
	ia = Me ? Symbol.for("react.lazy") : 60116,
	IS = Me ? Symbol.for("react.block") : 60121,
	$S = Me ? Symbol.for("react.fundamental") : 60117,
	AS = Me ? Symbol.for("react.responder") : 60118,
	US = Me ? Symbol.for("react.scope") : 60119;

function ht(e) {
	if (typeof e == "object" && e !== null) {
		var t = e.$$typeof;
		switch (t) {
			case Uc:
				switch (e = e.type, e) {
					case Bc:
					case ta:
					case Xl:
					case ql:
					case Jl:
					case ra:
						return e;
					default:
						switch (e = e && e.$$typeof, e) {
							case ea:
							case na:
							case ia:
							case oa:
							case Zl:
								return e;
							default:
								return t
						}
				}
			case Fc:
				return t
		}
	}
}

function uv(e) {
	return ht(e) === ta
}
ne.AsyncMode = Bc;
ne.ConcurrentMode = ta;
ne.ContextConsumer = ea;
ne.ContextProvider = Zl;
ne.Element = Uc;
ne.ForwardRef = na;
ne.Fragment = Xl;
ne.Lazy = ia;
ne.Memo = oa;
ne.Portal = Fc;
ne.Profiler = ql;
ne.StrictMode = Jl;
ne.Suspense = ra;
ne.isAsyncMode = function(e) {
	return uv(e) || ht(e) === Bc
};
ne.isConcurrentMode = uv;
ne.isContextConsumer = function(e) {
	return ht(e) === ea
};
ne.isContextProvider = function(e) {
	return ht(e) === Zl
};
ne.isElement = function(e) {
	return typeof e == "object" && e !== null && e.$$typeof === Uc
};
ne.isForwardRef = function(e) {
	return ht(e) === na
};
ne.isFragment = function(e) {
	return ht(e) === Xl
};
ne.isLazy = function(e) {
	return ht(e) === ia
};
ne.isMemo = function(e) {
	return ht(e) === oa
};
ne.isPortal = function(e) {
	return ht(e) === Fc
};
ne.isProfiler = function(e) {
	return ht(e) === ql
};
ne.isStrictMode = function(e) {
	return ht(e) === Jl
};
ne.isSuspense = function(e) {
	return ht(e) === ra
};
ne.isValidElementType = function(e) {
	return typeof e == "string" || typeof e == "function" || e === Xl || e === ta || e === ql || e === Jl || e === ra || e === LS || typeof e == "object" && e !== null && (e.$$typeof === ia || e.$$typeof === oa || e.$$typeof === Zl || e.$$typeof === ea || e.$$typeof === na || e.$$typeof === $S || e.$$typeof === AS || e.$$typeof === US || e.$$typeof === IS)
};
ne.typeOf = ht;
av.exports = ne;
var FS = av.exports,
	sv = FS,
	BS = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	},
	WS = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	},
	cv = {};
cv[sv.ForwardRef] = BS;
cv[sv.Memo] = WS;
var ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wc = Symbol.for("react.element"),
	Vc = Symbol.for("react.portal"),
	la = Symbol.for("react.fragment"),
	aa = Symbol.for("react.strict_mode"),
	ua = Symbol.for("react.profiler"),
	sa = Symbol.for("react.provider"),
	ca = Symbol.for("react.context"),
	VS = Symbol.for("react.server_context"),
	fa = Symbol.for("react.forward_ref"),
	da = Symbol.for("react.suspense"),
	pa = Symbol.for("react.suspense_list"),
	ha = Symbol.for("react.memo"),
	ma = Symbol.for("react.lazy"),
	HS = Symbol.for("react.offscreen"),
	fv;
fv = Symbol.for("react.module.reference");

function kt(e) {
	if (typeof e == "object" && e !== null) {
		var t = e.$$typeof;
		switch (t) {
			case Wc:
				switch (e = e.type, e) {
					case la:
					case ua:
					case aa:
					case da:
					case pa:
						return e;
					default:
						switch (e = e && e.$$typeof, e) {
							case VS:
							case ca:
							case fa:
							case ma:
							case ha:
							case sa:
								return e;
							default:
								return t
						}
				}
			case Vc:
				return t
		}
	}
}
ie.ContextConsumer = ca;
ie.ContextProvider = sa;
ie.Element = Wc;
ie.ForwardRef = fa;
ie.Fragment = la;
ie.Lazy = ma;
ie.Memo = ha;
ie.Portal = Vc;
ie.Profiler = ua;
ie.StrictMode = aa;
ie.Suspense = da;
ie.SuspenseList = pa;
ie.isAsyncMode = function() {
	return !1
};
ie.isConcurrentMode = function() {
	return !1
};
ie.isContextConsumer = function(e) {
	return kt(e) === ca
};
ie.isContextProvider = function(e) {
	return kt(e) === sa
};
ie.isElement = function(e) {
	return typeof e == "object" && e !== null && e.$$typeof === Wc
};
ie.isForwardRef = function(e) {
	return kt(e) === fa
};
ie.isFragment = function(e) {
	return kt(e) === la
};
ie.isLazy = function(e) {
	return kt(e) === ma
};
ie.isMemo = function(e) {
	return kt(e) === ha
};
ie.isPortal = function(e) {
	return kt(e) === Vc
};
ie.isProfiler = function(e) {
	return kt(e) === ua
};
ie.isStrictMode = function(e) {
	return kt(e) === aa
};
ie.isSuspense = function(e) {
	return kt(e) === da
};
ie.isSuspenseList = function(e) {
	return kt(e) === pa
};
ie.isValidElementType = function(e) {
	return typeof e == "string" || typeof e == "function" || e === la || e === ua || e === aa || e === da || e === pa || e === HS || typeof e == "object" && e !== null && (e.$$typeof === ma || e.$$typeof === ha || e.$$typeof === sa || e.$$typeof === ca || e.$$typeof === fa || e.$$typeof === fv || e.getModuleId !== void 0)
};
ie.typeOf = kt;

function KS() {
	const e = jS();
	let t = null,
		n = null;
	return {
		clear() {
			t = null, n = null
		},
		notify() {
			e(() => {
				let r = t;
				for (; r;) r.callback(), r = r.next
			})
		},
		get() {
			let r = [],
				o = t;
			for (; o;) r.push(o), o = o.next;
			return r
		},
		subscribe(r) {
			let o = !0,
				i = n = {
					callback: r,
					next: null,
					prev: n
				};
			return i.prev ? i.prev.next = i : t = i,
				function() {
					!o || t === null || (o = !1, i.next ? i.next.prev = i.prev : n = i.prev, i.prev ? i.prev.next = i.next : t = i.next)
				}
		}
	}
}
const Zd = {
	notify() {},
	get: () => []
};

function QS(e, t) {
	let n, r = Zd;

	function o(d) {
		return u(), r.subscribe(d)
	}

	function i() {
		r.notify()
	}

	function l() {
		c.onStateChange && c.onStateChange()
	}

	function a() {
		return !!n
	}

	function u() {
		n || (n = t ? t.addNestedSub(l) : e.subscribe(l), r = KS())
	}

	function s() {
		n && (n(), n = void 0, r.clear(), r = Zd)
	}
	const c = {
		addNestedSub: o,
		notifyNestedSubs: i,
		handleChangeWrapper: l,
		isSubscribed: a,
		trySubscribe: u,
		tryUnsubscribe: s,
		getListeners: () => r
	};
	return c
}
const YS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
	GS = YS ? C.useLayoutEffect : C.useEffect;

function XS({
	store: e,
	context: t,
	children: n,
	serverState: r,
	stabilityCheck: o = "once",
	noopCheck: i = "once"
}) {
	const l = C.useMemo(() => {
			const s = QS(e);
			return {
				store: e,
				subscription: s,
				getServerState: r ? () => r : void 0,
				stabilityCheck: o,
				noopCheck: i
			}
		}, [e, r, o, i]),
		a = C.useMemo(() => e.getState(), [e]);
	GS(() => {
		const {
			subscription: s
		} = l;
		return s.onStateChange = s.notifyNestedSubs, s.trySubscribe(), a !== e.getState() && s.notifyNestedSubs(), () => {
			s.tryUnsubscribe(), s.onStateChange = void 0
		}
	}, [l, a]);
	const u = t || zn;
	return C.createElement(u.Provider, {
		value: l
	}, n)
}

function dv(e = zn) {
	const t = e === zn ? iv : Ac(e);
	return function() {
		const {
			store: r
		} = t();
		return r
	}
}
const JS = dv();

function qS(e = zn) {
	const t = e === zn ? JS : dv(e);
	return function() {
		return t().dispatch
	}
}
const ZS = qS();
TS(E1.useSyncExternalStoreWithSelector);
OS(Gl.unstable_batchedUpdates);
const cn = ZS,
	We = DS;

function ex(e) {
	return e = e.replace(/\s/g, ""), e = e.replace(/-\d{4}\.\d+/g, ""), e = e.replace(/\s\s/g, " "), e = e.replace(/\s,/g, ","), e = e.replace(/,,/g, ","), e = e.replace(/[^0-9.,-\s]/g, ""), e.split(",").join(", ").trim()
}

function tx(e) {
	return e.split(",").filter(t => t !== "").map(t => parseFloat(t))
}



function ep(e = 0, t = 999) {
	return Math.floor(Math.random() * (t - e)) + e
}
const nx = e => {
	const t = e.length;
	for (let n = 0; n < t; n++) {
		const r = Math.floor(Math.random() * (t - n)),
			o = e[t - n - 1];
		e[t - n - 1] = e[r], e[r] = o
	}
	return e
};

function tp(e, t) {
	switch (e) {
		case "ascending":
			return [...t].sort((n, r) => n - r);
		case "descending":
			return [...t].sort((n, r) => r - n);
		case "random":
			return nx([...t])
	}
	return t
}
const rx = "_controllerWrapper_h5lu4_1",
	ox = "_controller_h5lu4_1",
	ix = "_numbers_h5lu4_9",
	lx = "_generator_h5lu4_15",
	ax = "_rndmBtn_h5lu4_20",
	ux = "_select_h5lu4_28",
	sx = "_arrayInput_h5lu4_37",
	cx = "_controls_h5lu4_51",
	fx = "_checkboxWrapper_h5lu4_69",
	dx = "_listItem_h5lu4_76",
	px = "_checkbox_h5lu4_69",
	hx = "_switchContainer_h5lu4_93",
	St = {
		controllerWrapper: rx,
		controller: ox,
		numbers: ix,
		generator: lx,
		rndmBtn: ax,
		select: ux,
		arrayInput: sx,
		controls: cx,
		checkboxWrapper: fx,
		listItem: dx,
		checkbox: px,
		switchContainer: hx
	},
	mx = ["random", "ascending", "descending"];

function vx({
	setInput: e
}) {
	const t = cn(),
		n = We(a => a.sortViz.array),
		[r, o] = C.useState("random"),
		i = () => {
			let a = Array.from(new Array(ep(Wf.min, Wf.max)), () => ep());
			r !== "random" && (a = tp(r, a)), e(a.join(", ")), t(ku(a))
		},
		l = a => {
			const u = a.target.value;
			o(u);
			const s = tp(u, n);
			e(s.join(", ")), t(ku(s))
		};
	return O.jsxs("div", {
		className: St.generator,
		children: [O.jsx("button", {
			className: St.rndmBtn,
			onClick: i,
			children: "Generate"
		}), O.jsx("select", {
			className: St.select,
			onChange: l,
			value: r,
			children: mx.map(a => O.jsx("option", {
				value: a,
				children: a
			}, a))
		})]
	})
}

function yx() {
	const e = cn(),
		t = We(i => i.sortViz.array),
		[n, r] = C.useState(t.join(", "));
	C.useEffect(() => {
		e($r(!1)), e(Tl())
	}, [t, e]);
	const o = i => {
		const l = ex(i.target.value);
		r(l);
		const a = tx(l);
		e(ku(a))
	};
	return O.jsxs("div", {
		className: St.numbers,
		children: [O.jsx(vx, {
			setInput: r
		}), O.jsx("input", {
			id: "user-input",
			className: St.arrayInput,
			type: "text",
			placeholder: "Numbers to sort (comma separate - max 3 digits)",
			value: n,
			onChange: o
		})]
	})
}
const gx = "./play.jpg",
	wx = "./play.jpg",
	Sx = "./reset.jpg";

function xx() {
	const e = cn(),
		t = We(i => i.sortViz.array),
		n = We(i => i.sortViz.speed),
		r = We(i => i.sortViz.isPlaying),
		o = We(i => i.sortViz.reset);
	return C.useEffect(() => {
		r && e(Q0())
	}, [e, r]), C.useEffect(() => {
		e($r(!1))
	}, [e, o]), C.useEffect(() => {
		e(Hf(n))
	}, [e, n]), O.jsxs("div", {
		className: St.controls,
		children: [O.jsx("button", {
			"data-testid": "player",
			onClick: () => e($r(!r)),
			disabled: t.length === 0 || r === null,
			"data-tooltip": r ? "Pause" : "Play",
			children: O.jsx("img", {
				src: r ? gx : wx,
				alt: r ? "Pause" : "Play",
				height: 24,
				width: 24
			})
		}), O.jsx("button", {
			onClick: () => e(Tl()),
			disabled: t.length === 0,
			"data-tooltip": "Reset",
			children: O.jsx("img", {
				src: Sx,
				height: 24,
				width: 24
			})
		}), O.jsx("input", {
			id: "speed",
			"data-tooltip": "Animation speed",
			type: "range",
			min: 1,
			max: 20,
			value: n,
			step: 1,
			onChange: i => e(Hf(i.target.valueAsNumber))
		})]
	})
}

function ys() {
	return ys = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, ys.apply(this, arguments)
}
var Ex = T.createElement("svg", {
		viewBox: "-2 -5 14 20",
		height: "100%",
		width: "100%",
		style: {
			position: "absolute",
			top: 0
		}
	}, T.createElement("path", {
		d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",
		fill: "#fff",
		fillRule: "evenodd"
	})),
	kx = T.createElement("svg", {
		height: "100%",
		width: "100%",
		viewBox: "-2 -5 17 21",
		style: {
			position: "absolute",
			top: 0
		}
	}, T.createElement("path", {
		d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",
		fill: "#fff",
		fillRule: "evenodd"
	}));

function np(e) {
	if (e.length === 7) return e;
	for (var t = "#", n = 1; n < 4; n += 1) t += e[n] + e[n];
	return t
}

function rp(e, t, n, r, o) {
	return function(i, l, a, u, s) {
		var c = (i - a) / (l - a);
		if (c === 0) return u;
		if (c === 1) return s;
		for (var d = "#", p = 1; p < 6; p += 2) {
			var g = parseInt(u.substr(p, 2), 16),
				w = parseInt(s.substr(p, 2), 16),
				v = Math.round((1 - c) * g + c * w).toString(16);
			v.length === 1 && (v = "0" + v), d += v
		}
		return d
	}(e, t, n, np(r), np(o))
}
var pv = function(e) {
	function t(n) {
		e.call(this, n);
		var r = n.height,
			o = n.width,
			i = n.checked;
		this.t = n.handleDiameter || r - 2, this.i = Math.max(o - r, o - (r + this.t) / 2), this.o = Math.max(0, (r - this.t) / 2), this.state = {
			h: i ? this.i : this.o
		}, this.l = 0, this.u = 0, this.p = this.p.bind(this), this.v = this.v.bind(this), this.g = this.g.bind(this), this.k = this.k.bind(this), this.m = this.m.bind(this), this.M = this.M.bind(this), this.T = this.T.bind(this), this.$ = this.$.bind(this), this.C = this.C.bind(this), this.D = this.D.bind(this), this.O = this.O.bind(this), this.S = this.S.bind(this)
	}
	return e && (t.__proto__ = e), (t.prototype = Object.create(e && e.prototype)).constructor = t, t.prototype.componentDidMount = function() {
		this.W = !0
	}, t.prototype.componentDidUpdate = function(n) {
		n.checked !== this.props.checked && this.setState({
			h: this.props.checked ? this.i : this.o
		})
	}, t.prototype.componentWillUnmount = function() {
		this.W = !1
	}, t.prototype.I = function(n) {
		this.H.focus(), this.setState({
			R: n,
			j: !0,
			B: Date.now()
		})
	}, t.prototype.L = function(n) {
		var r = this.state,
			o = r.R,
			i = r.h,
			l = (this.props.checked ? this.i : this.o) + n - o;
		r.N || n === o || this.setState({
			N: !0
		});
		var a = Math.min(this.i, Math.max(this.o, l));
		a !== i && this.setState({
			h: a
		})
	}, t.prototype.U = function(n) {
		var r = this.state,
			o = r.h,
			i = r.N,
			l = r.B,
			a = this.props.checked,
			u = (this.i + this.o) / 2;
		this.setState({
			h: this.props.checked ? this.i : this.o
		});
		var s = Date.now() - l;
		(!i || s < 250 || a && o <= u || !a && o >= u) && this.A(n), this.W && this.setState({
			N: !1,
			j: !1
		}), this.l = Date.now()
	}, t.prototype.p = function(n) {
		n.preventDefault(), typeof n.button == "number" && n.button !== 0 || (this.I(n.clientX), window.addEventListener("mousemove", this.v), window.addEventListener("mouseup", this.g))
	}, t.prototype.v = function(n) {
		n.preventDefault(), this.L(n.clientX)
	}, t.prototype.g = function(n) {
		this.U(n), window.removeEventListener("mousemove", this.v), window.removeEventListener("mouseup", this.g)
	}, t.prototype.k = function(n) {
		this.X = null, this.I(n.touches[0].clientX)
	}, t.prototype.m = function(n) {
		this.L(n.touches[0].clientX)
	}, t.prototype.M = function(n) {
		n.preventDefault(), this.U(n)
	}, t.prototype.$ = function(n) {
		Date.now() - this.l > 50 && (this.A(n), Date.now() - this.u > 50 && this.W && this.setState({
			j: !1
		}))
	}, t.prototype.C = function() {
		this.u = Date.now()
	}, t.prototype.D = function() {
		this.setState({
			j: !0
		})
	}, t.prototype.O = function() {
		this.setState({
			j: !1
		})
	}, t.prototype.S = function(n) {
		this.H = n
	}, t.prototype.T = function(n) {
		n.preventDefault(), this.H.focus(), this.A(n), this.W && this.setState({
			j: !1
		})
	}, t.prototype.A = function(n) {
		var r = this.props;
		(0, r.onChange)(!r.checked, n, r.id)
	}, t.prototype.render = function() {
		var n = this.props,
			r = n.checked,
			o = n.disabled,
			i = n.className,
			l = n.offColor,
			a = n.onColor,
			u = n.offHandleColor,
			s = n.onHandleColor,
			c = n.checkedIcon,
			d = n.uncheckedIcon,
			p = n.checkedHandleIcon,
			g = n.uncheckedHandleIcon,
			w = n.boxShadow,
			v = n.activeBoxShadow,
			S = n.height,
			m = n.width,
			f = n.borderRadius,
			y = function(F, G) {
				var q = {};
				for (var b in F) Object.prototype.hasOwnProperty.call(F, b) && G.indexOf(b) === -1 && (q[b] = F[b]);
				return q
			}(n, ["checked", "disabled", "className", "offColor", "onColor", "offHandleColor", "onHandleColor", "checkedIcon", "uncheckedIcon", "checkedHandleIcon", "uncheckedHandleIcon", "boxShadow", "activeBoxShadow", "height", "width", "borderRadius", "handleDiameter"]),
			h = this.state,
			E = h.h,
			P = h.N,
			_ = h.j,
			N = {
				position: "relative",
				display: "inline-block",
				textAlign: "left",
				opacity: o ? .5 : 1,
				direction: "ltr",
				borderRadius: S / 2,
				WebkitTransition: "opacity 0.25s",
				MozTransition: "opacity 0.25s",
				transition: "opacity 0.25s",
				touchAction: "none",
				WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
				WebkitUserSelect: "none",
				MozUserSelect: "none",
				msUserSelect: "none",
				userSelect: "none"
			},
			$ = {
				height: S,
				width: m,
				margin: Math.max(0, (this.t - S) / 2),
				position: "relative",
				background: rp(E, this.i, this.o, l, a),
				borderRadius: typeof f == "number" ? f : S / 2,
				cursor: o ? "default" : "pointer",
				WebkitTransition: P ? null : "background 0.25s",
				MozTransition: P ? null : "background 0.25s",
				transition: P ? null : "background 0.25s"
			},
			M = {
				height: S,
				width: Math.min(1.5 * S, m - (this.t + S) / 2 + 1),
				position: "relative",
				opacity: (E - this.o) / (this.i - this.o),
				pointerEvents: "none",
				WebkitTransition: P ? null : "opacity 0.25s",
				MozTransition: P ? null : "opacity 0.25s",
				transition: P ? null : "opacity 0.25s"
			},
			J = {
				height: S,
				width: Math.min(1.5 * S, m - (this.t + S) / 2 + 1),
				position: "absolute",
				opacity: 1 - (E - this.o) / (this.i - this.o),
				right: 0,
				top: 0,
				pointerEvents: "none",
				WebkitTransition: P ? null : "opacity 0.25s",
				MozTransition: P ? null : "opacity 0.25s",
				transition: P ? null : "opacity 0.25s"
			},
			K = {
				height: this.t,
				width: this.t,
				background: rp(E, this.i, this.o, u, s),
				display: "inline-block",
				cursor: o ? "default" : "pointer",
				borderRadius: typeof f == "number" ? f - 1 : "50%",
				position: "absolute",
				transform: "translateX(" + E + "px)",
				top: Math.max(0, (S - this.t) / 2),
				outline: 0,
				boxShadow: _ ? v : w,
				border: 0,
				WebkitTransition: P ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
				MozTransition: P ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
				transition: P ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s"
			},
			Se = {
				height: this.t,
				width: this.t,
				opacity: Math.max(2 * (1 - (E - this.o) / (this.i - this.o) - .5), 0),
				position: "absolute",
				left: 0,
				top: 0,
				pointerEvents: "none",
				WebkitTransition: P ? null : "opacity 0.25s",
				MozTransition: P ? null : "opacity 0.25s",
				transition: P ? null : "opacity 0.25s"
			},
			He = {
				height: this.t,
				width: this.t,
				opacity: Math.max(2 * ((E - this.o) / (this.i - this.o) - .5), 0),
				position: "absolute",
				left: 0,
				top: 0,
				pointerEvents: "none",
				WebkitTransition: P ? null : "opacity 0.25s",
				MozTransition: P ? null : "opacity 0.25s",
				transition: P ? null : "opacity 0.25s"
			};
		return T.createElement("div", {
			className: i,
			style: N
		}, T.createElement("div", {
			className: "react-switch-bg",
			style: $,
			onClick: o ? null : this.T,
			onMouseDown: function(F) {
				return F.preventDefault()
			}
		}, c && T.createElement("div", {
			style: M
		}, c), d && T.createElement("div", {
			style: J
		}, d)), T.createElement("div", {
			className: "react-switch-handle",
			style: K,
			onClick: function(F) {
				return F.preventDefault()
			},
			onMouseDown: o ? null : this.p,
			onTouchStart: o ? null : this.k,
			onTouchMove: o ? null : this.m,
			onTouchEnd: o ? null : this.M,
			onTouchCancel: o ? null : this.O
		}, g && T.createElement("div", {
			style: Se
		}, g), p && T.createElement("div", {
			style: He
		}, p)), T.createElement("input", ys({}, {
			type: "checkbox",
			role: "switch",
			"aria-checked": r,
			checked: r,
			disabled: o,
			style: {
				border: 0,
				clip: "rect(0 0 0 0)",
				height: 1,
				margin: -1,
				overflow: "hidden",
				padding: 0,
				position: "absolute",
				width: 1
			}
		}, y, {
			ref: this.S,
			onFocus: this.D,
			onBlur: this.O,
			onKeyUp: this.C,
			onChange: this.$
		})))
	}, t
}(C.Component);
pv.defaultProps = {
	disabled: !1,
	offColor: "#888",
	onColor: "#080",
	offHandleColor: "#fff",
	onHandleColor: "#fff",
	uncheckedIcon: Ex,
	checkedIcon: kx,
	boxShadow: null,
	activeBoxShadow: "0 0 2px 3px #3bf",
	height: 28,
	width: 56
};

function Px() {
	const e = cn(),
		t = We(n => n.sortViz.visualizerType);
	return O.jsxs("div", {
		className: St.switchContainer,
		children: [O.jsx("label", {
			children: "Cell"
		}), O.jsx(pv, {
			id: "visualizerType",
			onChange: () => e(H0()),
			checked: t === "bar",
			checkedIcon: !1,
			uncheckedIcon: !1,
			height: 20,
			width: 40,
			offColor: "#2b4bfe",
			onColor: "#2b4bfe"
		}), O.jsx("label", {
			children: "Bar"
		})]
	})
}

function Cx() {
	const {
		algoName: e
	} = Ns(), t = cn();
	return C.useEffect(() => {
		t($r(!1)), t(Tl())
	}, [e, t]), O.jsxs("section", {
		className: St.controllerWrapper,
		children: [O.jsxs("div", {
			className: St.controller,
			"data-testid": "controller",
			children: [O.jsx(yx, {}), O.jsx(xx, {})]
		}), O.jsx(Px, {})]
	})
}
var Vn = (e => (e.LIGHT = "light", e.DARK = "dark", e))(Vn || {});
const _x = "_iconBtn_9tcdq_1",
	Rx = {
		iconBtn: _x
	},
	Ox = "/./dn.jpg",
	jx = "./dn.jpg",
	bx = O.jsx("img", {
		src: jx,
		alt: "dark mode"
	}),
	Nx = O.jsx("img", {
		src: Ox,
		alt: "dark mode"
	});

function Tx() {
	const e = cn(),
		t = We(o => o.app.theme),
		n = window.matchMedia("(prefers-color-scheme: dark)").matches ? Vn.DARK : Vn.LIGHT,
		r = t ?? n;
	return C.useEffect(() => {
		t ? e(Uf(t)) : document.documentElement.setAttribute("data-theme", n)
	}, []), O.jsx(O.Fragment, {
		children: Gl.createPortal(O.jsx("button", {
			className: Rx.iconBtn,
			onClick: () => e(Uf(r === Vn.LIGHT ? Vn.DARK : Vn.LIGHT)),
			children: r === Vn.LIGHT ? Nx : bx
		}), document.getElementById("screen-layout"))
	})
}
const Mx = "_navbar_hoafu_1",
	zx = "_active_hoafu_50",
	op = {
		navbar: Mx,
		active: zx
	},
	Dx = "/sorting-visualizer/dist/icons/ham.svg";

function Lx({
	menuItems: e
}) {
	const [t, n] = C.useState(!1);
	return O.jsxs("nav", {
		className: op.navbar,
		children: [O.jsxs("h1", {
			"data-testid": "navbar",
			children: ["Sorting visualizers", ]
		}), O.jsx("button", {
			onClick: () => n(!t),
			children: O.jsx("img", {
				src: Dx,
				alt: "hamburger"
			})
		}), O.jsx("ul", {
			"data-toggle": t,
			children: e.map(r => O.jsx("li", {
				children: O.jsx(mg, {
					to: `/sorting-visualizer/${r}`,
					className: ({
						isActive: o
					}) => o ? op.active : "",
					onClick: () => n(!1),
					children: r
				})
			}, r))
		})]
	})
}

function Ix(e, {
	insertAt: t
} = {}) {
	if (!e || typeof document > "u") return;
	let n = document.head || document.getElementsByTagName("head")[0],
		r = document.createElement("style");
	r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
Ix(`html[dir=ltr],[data-sonner-toaster][dir=ltr]{--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}html[dir=rtl],[data-sonner-toaster][dir=rtl]{--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translate(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;will-change:transform,opacity,height;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-y-position=top]{top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px #0006}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toast][data-theme=dark] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;opacity:0;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]{opacity:1}[data-sonner-toast]:focus [data-close-button]{opacity:1}[data-sonner-toast]:focus-within [data-close-button]{opacity:1}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:"";position:absolute;left:0;right:0;height:100%}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:"";position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y: translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale: var(--toasts-before) * .05 + 1;--y: translateY( calc(var(--lift-amount) * var(--toasts-before)) ) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y: translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y: translateY( calc(var(--lift) * var(--offset) + var(--lift) * -100%) );opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}
`);
var $x = e => {
		switch (e) {
			case "success":
				return Fx;
			case "error":
				return Bx;
			default:
				return null
		}
	},
	Ax = Array(12).fill(0),
	Ux = ({
		visible: e
	}) => T.createElement("div", {
		className: "sonner-loading-wrapper",
		"data-visible": e
	}, T.createElement("div", {
		className: "sonner-spinner"
	}, Ax.map((t, n) => T.createElement("div", {
		className: "sonner-loading-bar",
		key: `spinner-bar-${n}`
	})))),
	Fx = T.createElement("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		height: "20",
		width: "20"
	}, T.createElement("path", {
		fillRule: "evenodd",
		d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
		clipRule: "evenodd"
	})),
	Bx = T.createElement("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		height: "20",
		width: "20"
	}, T.createElement("path", {
		fillRule: "evenodd",
		d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
		clipRule: "evenodd"
	})),
	gs = 0,
	Wx = class {
		constructor() {
			this.subscribe = e => (this.subscribers.push(e), () => {
				let t = this.subscribers.indexOf(e);
				this.subscribers.splice(t, 1)
			}), this.publish = e => {
				this.subscribers.forEach(t => t(e))
			}, this.addToast = e => {
				this.publish(e), this.toasts = [...this.toasts, e]
			}, this.create = e => {
				var t;
				let {
					message: n,
					...r
				} = e, o = typeof(e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : gs++, i = this.toasts.find(a => a.id === o), l = e.dismissible === void 0 ? !0 : e.dismissible;
				return i ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({
					...a,
					...e,
					id: o,
					title: n
				}), {
					...a,
					...e,
					id: o,
					dismissible: l,
					title: n
				}) : a) : this.addToast({
					title: n,
					...r,
					dismissible: l,
					id: o
				}), o
			}, this.dismiss = e => (e || this.toasts.forEach(t => {
				this.subscribers.forEach(n => n({
					id: t.id,
					dismiss: !0
				}))
			}), this.subscribers.forEach(t => t({
				id: e,
				dismiss: !0
			})), e), this.message = (e, t) => this.create({
				...t,
				message: e
			}), this.error = (e, t) => this.create({
				...t,
				message: e,
				type: "error"
			}), this.success = (e, t) => this.create({
				...t,
				type: "success",
				message: e
			}), this.loading = (e, t) => this.create({
				...t,
				type: "loading",
				message: e
			}), this.promise = (e, t) => {
				let n = this.create({
					...t,
					promise: e,
					type: "loading",
					message: t.loading
				});
				return (e instanceof Promise ? e : e()).then(r => {
					let o = typeof t.success == "function" ? t.success(r) : t.success;
					this.create({
						id: n,
						type: "success",
						message: o
					})
				}).catch(r => {
					let o = typeof t.error == "function" ? t.error(r) : t.error;
					this.create({
						id: n,
						type: "error",
						message: o
					})
				}).finally(t.finally), n
			}, this.custom = (e, t) => {
				let n = (t == null ? void 0 : t.id) || gs++;
				this.publish({
					jsx: e(n),
					id: n,
					...t
				})
			}, this.subscribers = [], this.toasts = []
		}
	},
	Jt = new Wx,
	Vx = (e, t) => {
		let n = (t == null ? void 0 : t.id) || gs++;
		return Jt.addToast({
			title: e,
			...t,
			id: n
		}), n
	},
	Hx = Vx,
	hv = Object.assign(Hx, {
		success: Jt.success,
		error: Jt.error,
		custom: Jt.custom,
		message: Jt.message,
		promise: Jt.promise,
		dismiss: Jt.dismiss,
		loading: Jt.loading
	}),
	Kx = 3,
	Qx = "32px",
	Yx = 4e3,
	Gx = 356,
	mv = 14,
	Xx = 20,
	Jx = 200,
	qx = e => {
		let {
			invert: t,
			toast: n,
			interacting: r,
			setHeights: o,
			visibleToasts: i,
			heights: l,
			index: a,
			toasts: u,
			expanded: s,
			removeToast: c,
			closeButton: d,
			style: p,
			className: g = "",
			descriptionClassName: w = "",
			duration: v,
			position: S,
			expandByDefault: m
		} = e, [f, y] = T.useState(!1), [h, E] = T.useState(!1), [P, _] = T.useState(!1), [N, $] = T.useState(!1), [M, J] = T.useState(0), [K, Se] = T.useState(0), He = T.useRef(null), F = T.useRef(null), G = a === 0, q = a + 1 <= i, b = n.type, L = n.dismissible !== !1, I = n.className || "", le = n.descriptionClassName || "", re = T.useMemo(() => l.findIndex(B => B.toastId === n.id) || 0, [l, n.id]), Ht = T.useMemo(() => n.duration || v || Yx, [n.duration, v]), ee = T.useRef(0), Ie = T.useRef(0), Je = T.useRef(Ht), Kt = T.useRef(0), qe = T.useRef(null), [ii, va] = S.split("-"), qr = T.useMemo(() => l.reduce((B, se, _e) => _e >= re ? B : B + se.height, 0), [l, re]), ya = n.invert || t, Zr = b === "loading";
		Ie.current = T.useMemo(() => re * mv + qr, [re, qr]), T.useEffect(() => {
			y(!0)
		}, []), T.useLayoutEffect(() => {
			if (!f) return;
			let B = F.current,
				se = B.style.height;
			B.style.height = "auto";
			let _e = B.getBoundingClientRect().height;
			B.style.height = se, Se(_e), o(Ke => Ke.find(Ze => Ze.toastId === n.id) ? Ke.map(Ze => Ze.toastId === n.id ? {
				...Ze,
				height: _e
			} : Ze) : [{
				toastId: n.id,
				height: _e
			}, ...Ke])
		}, [f, n.title, n.description, o, n.id]);
		let Dt = T.useCallback(() => {
			E(!0), J(Ie.current), o(B => B.filter(se => se.toastId !== n.id)), setTimeout(() => {
				c(n)
			}, Jx)
		}, [n, c, o, Ie]);
		return T.useEffect(() => {
			if (n.promise && b === "loading" || n.duration === 1 / 0) return;
			let B;
			return s || r ? (() => {
				if (Kt.current < ee.current) {
					let se = new Date().getTime() - ee.current;
					Je.current = Je.current - se
				}
				Kt.current = new Date().getTime()
			})() : (ee.current = new Date().getTime(), B = setTimeout(() => {
				var se;
				(se = n.onAutoClose) == null || se.call(n, n), Dt()
			}, Je.current)), () => clearTimeout(B)
		}, [s, r, m, n, Ht, Dt, n.promise, b]), T.useEffect(() => {
			let B = F.current;
			if (B) {
				let se = B.getBoundingClientRect().height;
				return Se(se), o(_e => [{
					toastId: n.id,
					height: se
				}, ..._e]), () => o(_e => _e.filter(Ke => Ke.toastId !== n.id))
			}
		}, [o, n.id]), T.useEffect(() => {
			n.delete && Dt()
		}, [Dt, n.delete]), T.createElement("li", {
			"aria-live": n.important ? "assertive" : "polite",
			"aria-atomic": "true",
			role: "status",
			tabIndex: 0,
			ref: F,
			className: g + " " + I,
			"data-sonner-toast": "",
			"data-styled": !n.jsx,
			"data-mounted": f,
			"data-promise": !!n.promise,
			"data-removed": h,
			"data-visible": q,
			"data-y-position": ii,
			"data-x-position": va,
			"data-index": a,
			"data-front": G,
			"data-swiping": P,
			"data-dismissible": L,
			"data-type": b,
			"data-invert": ya,
			"data-swipe-out": N,
			"data-expanded": !!(s || m && f),
			style: {
				"--index": a,
				"--toasts-before": a,
				"--z-index": u.length - a,
				"--offset": `${h?M:Ie.current}px`,
				"--initial-height": m ? "auto" : `${K}px`,
				...p,
				...n.style
			},
			onPointerDown: B => {
				Zr || !L || (He.current = new Date, J(Ie.current), B.target.setPointerCapture(B.pointerId), B.target.tagName !== "BUTTON" && (_(!0), qe.current = {
					x: B.clientX,
					y: B.clientY
				}))
			},
			onPointerUp: () => {
				var B, se, _e, Ke;
				if (N || !L) return;
				qe.current = null;
				let Ze = Number(((B = F.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0),
					it = new Date().getTime() - ((se = He.current) == null ? void 0 : se.getTime()),
					li = Math.abs(Ze) / it;
				if (Math.abs(Ze) >= Xx || li > .11) {
					J(Ie.current), (_e = n.onDismiss) == null || _e.call(n, n), Dt(), $(!0);
					return
				}(Ke = F.current) == null || Ke.style.setProperty("--swipe-amount", "0px"), _(!1)
			},
			onPointerMove: B => {
				var se;
				if (!qe.current || !L) return;
				let _e = B.clientY - qe.current.y,
					Ke = B.clientX - qe.current.x,
					Ze = (ii === "top" ? Math.min : Math.max)(0, _e),
					it = B.pointerType === "touch" ? 10 : 2;
				Math.abs(Ze) > it ? (se = F.current) == null || se.style.setProperty("--swipe-amount", `${_e}px`) : Math.abs(Ke) > it && (qe.current = null)
			}
		}, d && !n.jsx ? T.createElement("button", {
			"aria-label": "Close toast",
			"data-disabled": Zr,
			"data-close-button": !0,
			onClick: Zr || !L ? void 0 : () => {
				var B;
				Dt(), (B = n.onDismiss) == null || B.call(n, n)
			}
		}, T.createElement("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "12",
			height: "12",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}, T.createElement("line", {
			x1: "18",
			y1: "6",
			x2: "6",
			y2: "18"
		}), T.createElement("line", {
			x1: "6",
			y1: "6",
			x2: "18",
			y2: "18"
		}))) : null, n.jsx || T.isValidElement(n.title) ? n.jsx || n.title : T.createElement(T.Fragment, null, b || n.icon || n.promise ? T.createElement("div", {
			"data-icon": ""
		}, n.promise || n.type === "loading" ? T.createElement(Ux, {
			visible: b === "loading"
		}) : null, n.icon || $x(b)) : null, T.createElement("div", {
			"data-content": ""
		}, T.createElement("div", {
			"data-title": ""
		}, n.title), n.description ? T.createElement("div", {
			"data-description": "",
			className: w + le
		}, n.description) : null), n.cancel ? T.createElement("button", {
			"data-button": !0,
			"data-cancel": !0,
			onClick: () => {
				var B;
				L && (Dt(), (B = n.cancel) != null && B.onClick && n.cancel.onClick())
			}
		}, n.cancel.label) : null, n.action ? T.createElement("button", {
			"data-button": "",
			onClick: B => {
				var se;
				(se = n.action) == null || se.onClick(B), !B.defaultPrevented && Dt()
			}
		}, n.action.label) : null))
	};

function ip() {
	if (typeof window > "u") return "ltr";
	let e = document.documentElement.getAttribute("dir");
	return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var Zx = e => {
	let {
		invert: t,
		position: n = "bottom-right",
		hotkey: r = ["altKey", "KeyT"],
		expand: o,
		closeButton: i,
		className: l,
		offset: a,
		theme: u = "light",
		richColors: s,
		duration: c,
		style: d,
		visibleToasts: p = Kx,
		toastOptions: g,
		dir: w = ip()
	} = e, [v, S] = T.useState([]), m = T.useMemo(() => Array.from(new Set([n].concat(v.filter(F => F.position).map(F => F.position)))), [v, n]), [f, y] = T.useState([]), [h, E] = T.useState(!1), [P, _] = T.useState(!1), [N, $] = T.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), M = T.useRef(null), J = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), K = T.useRef(null), Se = T.useRef(!1), He = T.useCallback(F => S(G => G.filter(({
		id: q
	}) => q !== F.id)), []);
	return T.useEffect(() => Jt.subscribe(F => {
		if (F.dismiss) {
			S(G => G.map(q => q.id === F.id ? {
				...q,
				delete: !0
			} : q));
			return
		}
		setTimeout(() => {
			_S.flushSync(() => {
				S(G => {
					let q = G.findIndex(b => b.id === F.id);
					return q !== -1 ? [...G.slice(0, q), {
						...G[q],
						...F
					}, ...G.slice(q + 1)] : [F, ...G]
				})
			})
		})
	}), []), T.useEffect(() => {
		if (u !== "system") {
			$(u);
			return
		}
		u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({
			matches: F
		}) => {
			$(F ? "dark" : "light")
		})
	}, [u]), T.useEffect(() => {
		v.length <= 1 && E(!1)
	}, [v]), T.useEffect(() => {
		let F = G => {
			var q, b;
			r.every(L => G[L] || G.code === L) && (E(!0), (q = M.current) == null || q.focus()), G.code === "Escape" && (document.activeElement === M.current || (b = M.current) != null && b.contains(document.activeElement)) && E(!1)
		};
		return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F)
	}, [r]), T.useEffect(() => {
		if (M.current) return () => {
			K.current && (K.current.focus({
				preventScroll: !0
			}), K.current = null, Se.current = !1)
		}
	}, [M.current]), v.length ? T.createElement("section", {
		"aria-label": `Notifications ${J}`,
		tabIndex: -1
	}, m.map((F, G) => {
		var q;
		let [b, L] = F.split("-");
		return T.createElement("ol", {
			key: F,
			dir: w === "auto" ? ip() : w,
			tabIndex: -1,
			ref: M,
			className: l,
			"data-sonner-toaster": !0,
			"data-theme": N,
			"data-rich-colors": s,
			"data-y-position": b,
			"data-x-position": L,
			style: {
				"--front-toast-height": `${(q=f[0])==null?void 0:q.height}px`,
				"--offset": typeof a == "number" ? `${a}px` : a || Qx,
				"--width": `${Gx}px`,
				"--gap": `${mv}px`,
				...d
			},
			onBlur: I => {
				Se.current && !I.currentTarget.contains(I.relatedTarget) && (Se.current = !1, K.current && (K.current.focus({
					preventScroll: !0
				}), K.current = null))
			},
			onFocus: I => {
				I.target instanceof HTMLElement && I.target.dataset.dismissible === "false" || Se.current || (Se.current = !0, K.current = I.relatedTarget)
			},
			onMouseEnter: () => E(!0),
			onMouseMove: () => E(!0),
			onMouseLeave: () => {
				P || E(!1)
			},
			onPointerDown: I => {
				I.target instanceof HTMLElement && I.target.dataset.dismissible === "false" || _(!0)
			},
			onPointerUp: () => _(!1)
		}, v.filter(I => !I.position && G === 0 || I.position === F).map((I, le) => {
			var re;
			return T.createElement(qx, {
				key: I.id,
				index: le,
				toast: I,
				duration: (re = g == null ? void 0 : g.duration) != null ? re : c,
				className: g == null ? void 0 : g.className,
				descriptionClassName: g == null ? void 0 : g.descriptionClassName,
				invert: t,
				visibleToasts: p,
				closeButton: i,
				interacting: P,
				position: F,
				style: g == null ? void 0 : g.style,
				removeToast: He,
				toasts: v,
				heights: f,
				setHeights: y,
				expandByDefault: o,
				expanded: h
			})
		}))
	})) : null
};
const eE = "_main_1hg6y_1",
	tE = "_allAlgos_1hg6y_6",
	vv = {
		main: eE,
		allAlgos: tE
	};

function Pl({
	children: e
}) {
	return O.jsxs("div", {
		children: [O.jsx(Lx, {
			menuItems: Qp
		}), O.jsx(Cx, {}), O.jsx("main", {
			className: vv.main,
			children: e
		}), O.jsx(Tx, {}), O.jsx(Zx, {
			richColors: !0,
			duration: 3e3
		})]
	})
}
const nE = "_container_wgxfy_1",
	rE = "_warning_wgxfy_20",
	yv = {
		container: nE,
		warning: rE
	};

function gv() {
	return O.jsx("p", {
		className: yv.warning,
		children: "Please enter a valid list of numbers to play with the visualization"
	})
}

function oE({
	algoName: e,
	isCompleted: t
}) {
	const n = We(o => o.sortViz.time),
		r = C.useRef(0);
	return C.useEffect(() => {
		t && (r.current = n)
	}, [t]), O.jsxs("header", {
		children: [O.jsxs("h2", {
			children: [e, " Sort"]
		}), ]
	})
}
const iE = "_arrayContainer_116to_1",
	lE = "_values_116to_6",
	aE = "_pivot_116to_19",
	uE = "_sort_116to_22",
	sE = "_highlight_116to_25",
	cE = "_indices_116to_28",
	_i = {
		arrayContainer: iE,
		values: lE,
		pivot: aE,
		sort: uE,
		highlight: sE,
		indices: cE
	};

function fE({
	array: e,
	sorts: t,
	highlights: n,
	pivot: r
}) {
	const o = C.useMemo(() => Math.max(...e), [e]);

	function i(l) {
		let a = "";
		return r === l && (a = "pivot"), t.includes(l) && (a = "sort"), n.includes(l) && (a = "highlight"), a
	}
	return O.jsxs("div", {
		className: _i.arrayContainer,
		children: [O.jsx("ul", {
			className: _i.values,
			"data-testid": "bar-values",
			children: e.map((l, a) => O.jsx("li", {
				className: _i[i(a)],
				style: {
					height: `${l/o*100}%`
				}
			}, a))
		}), O.jsx("ul", {
			className: _i.indices,
			children: e.map((l, a) => O.jsx("li", {
				children: a
			}, a))
		})]
	})
}
const dE = "_arrayContainer_9tgyc_1",
	pE = "_values_9tgyc_6",
	hE = "_cell_9tgyc_10",
	mE = "_pivot_9tgyc_24",
	vE = "_sort_9tgyc_27",
	yE = "_highlight_9tgyc_30",
	gE = "_indices_9tgyc_33",
	bo = {
		arrayContainer: dE,
		values: pE,
		cell: hE,
		pivot: mE,
		sort: vE,
		highlight: yE,
		indices: gE
	};

function Hc({
	order: e,
	animation: t,
	value: n,
	isSorted: r = !1,
	isHighlighted: o = !1,
	isPivot: i = !1
}) {
	let l = "";
	return i && (l = "pivot"), r && (l = "sort"), o && (l = "highlight"), O.jsx("li", {
		className: `${bo.cell} ${bo[l]}`,
		style: {
			animation: t,
			order: e
		},
		children: n
	})
}
const fr = document.querySelector('[data-id="animation-element"]');

function wv(e, t = 1e3) {
	const n = `anime-${Math.random().toString(36).substring(2,9)}`,
		r = `${t}ms linear forwards ${n}`,
		o = gn.size + gn.margin,
		i = `@keyframes ${n} {
    25% {
        transform: translateY(${Math.sign(e)*(gn.size+5)}px);
    }
    75% {
        transform: translate(${e*o}px, ${Math.sign(e)*(gn.size+5)}px);
    }
    100% {
        transform: translate(${e*o}px, 0);
    }
}`;
	return Sv(i), r
}

function wE(e, t = 1e3) {
	const n = `anime-${Math.random().toString(36).substring(2,9)}`,
		r = `${t}ms linear forwards ${n}`,
		o = gn.size + gn.margin,
		i = `@keyframes ${n} {
      100% {
          transform: translateX(${e*o}px);
      }
  }`;
	return Sv(i), r
}

function Sv(e) {
	var n;
	const t = (n = fr == null ? void 0 : fr.sheet) == null ? void 0 : n.insertRule(e);
	setTimeout(() => {
		var r;
		t && ((r = fr == null ? void 0 : fr.sheet) == null || r.deleteRule(t))
	}, tr)
}

function SE({
	originalOrder: e,
	isSwap: t,
	order: n,
	value: r,
	isHighlighted: o
}) {
	let i = wE(e - n, tr);
	return t && (i = wv(e - n, tr)), O.jsx(Hc, {
		animation: i,
		order: n,
		value: r,
		isHighlighted: o
	})
}

function xE({
	originalOrder: e,
	order: t,
	value: n,
	isHighlighted: r
}) {
	const o = wv(e - t, tr);
	return O.jsx(Hc, {
		animation: o,
		order: t,
		value: n,
		isHighlighted: r
	})
}
const EE = function({
	array: t,
	swaps: n,
	sorts: r,
	highlights: o,
	moves: i,
	pivot: l
}) {
	function a(u, s) {
		return n.includes(u) ? O.jsx(xE, {
			originalOrder: u,
			order: n[0] === u ? n[1] : n[0],
			value: s,
			isHighlighted: o.includes(u)
		}, u) : i && u >= i[0] && u <= i[1] ? O.jsx(SE, {
			originalOrder: u,
			order: u === i[0] ? i[1] : u - 1,
			isSwap: u === i[0],
			value: s,
			isHighlighted: o.includes(u)
		}, u) : O.jsx(Hc, {
			order: u,
			value: s,
			isSorted: r.includes(u),
			isHighlighted: o.includes(u),
			isPivot: u === l
		}, u)
	}
	return O.jsxs("div", {
		className: bo.arrayContainer,
		children: [O.jsx("ul", {
			className: bo.values,
			"data-testid": "cell-values",
			children: t.map((u, s) => a(s, u))
		}), O.jsx("ul", {
			className: bo.indices,
			children: t.map((u, s) => O.jsx("li", {
				children: s
			}, s))
		})]
	})
};

function kE(e) {
	const t = We(n => n.sortViz.visualizerType);
	return t === "cell" ? O.jsx(EE, {
		...e
	}) : t === "bar" ? O.jsx(fE, {
		...e
	}) : null
}

function PE(e, t) {
	const [n, r] = C.useState([-1, -1]), [o, i] = C.useState([-1, -1]), [l, a] = C.useState([]), [u, s] = C.useState([-1, -1]), [c, d] = C.useState(-1), [p, g] = C.useState(!1), w = C.useRef(t(e)), v = C.useRef(0), S = C.useRef(0), m = async () => {
		await er;
		for await (const f of w.current) switch (r([-1, -1]), s([-1, -1]), i([-1, -1]), f.type) {
			case "swap":
				s(f.positions), r(f.positions), f.positions[0] !== f.positions[1] && v.current++;
				break;
			case "sort":
				a(y => [...y, f.position]);
				break;
			case "highlight":
				s(f.positions), f.positions[0] !== f.positions[1] && S.current++;
				break;
			case "pivot":
				d(f.position);
				break;
			case "move":
				s([f.positions[0], f.positions[0] + 1]), i(f.positions), f.positions[0] !== f.positions[1] && v.current++;
				break
		}
		g(!0)
	};
	return C.useEffect(() => {
		m()
	}, []), {
		pivot: c,
		isCompleted: p,
		swaps: n,
		sorts: l,
		highlights: u,
		moves: o,
		swapCount: v.current,
		compareCount: S.current
	}
}
const xv = function({
	array: t,
	algoFn: n,
	algoName: r = "Bubble",
	onComplete: o
}) {
	const i = C.useRef([...t]),
		{
			swapCount: l,
			compareCount: a,
			isCompleted: u,
			swaps: s,
			sorts: c,
			highlights: d,
			pivot: p,
			moves: g
		} = PE(i.current, n);
	return C.useEffect(() => {
		u && o()
	}, [u, o]), O.jsxs("section", {
		className: yv.container,
		children: [O.jsx(oE, {
			algoName: r,
			isCompleted: u
		}), O.jsx(kE, {
			pivot: p,
			array: i.current,
			swaps: s,
			highlights: d,
			sorts: c,
			moves: g
		}), O.jsxs("footer", {
			children: [O.jsxs("span", {
				children: ["Swaps: ", O.jsx("strong", {
					children: l
				})]
			}), O.jsxs("span", {
				children: ["Comparisons: ", O.jsx("strong", {
					children: a
				})]
			})]
		})]
	})
};

function Ev(e, t) {
	const [n, r] = C.useState(!1), o = C.useRef(0);
	C.useEffect(() => {
		o.current = 0, r(!1)
	}, [t]);

	function i() {
		o.current++, o.current === e && r(!0)
	}
	return {
		onComplete: i,
		isComplete: n
	}
}

function CE() {
	const {
		algoName: e
	} = Ns(), t = cn(), n = We(a => a.sortViz.array), r = We(a => a.sortViz.reset), o = Nt.find(({
		name: a
	}) => a === e) ?? Nt[0], {
		onComplete: i,
		isComplete: l
	} = Ev(1, r);
	return C.useEffect(() => {
		l && (hv.success(Yp), t($r(null)))
	}, [t, l]), n.length === 0 ? O.jsx(Pl, {
		children: O.jsx(gv, {})
	}) : O.jsx(Pl, {
		children: O.jsx(xv, {
			array: n,
			algoName: o.name,
			algoFn: o.fn,
			onComplete: i
		}, o.name + n.toString() + r)
	})
}

function ws() {
	const {
		algoName: e
	} = Ns(), t = jp();
	return C.useEffect(() => {
		e || t(`/sorting-visualizer/${Qp[0]}`)
	}, [e, t]), O.jsx(CE, {})
}

function Fi(e) {
	return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fi = function(n) {
		return typeof n
	} : Fi = function(n) {
		return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
	}, Fi(e)
}

function _E(e, t) {
	if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function lp(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
	}
}

function RE(e, t, n) {
	return t && lp(e.prototype, t), n && lp(e, n), e
}

function OE(e, t) {
	return t && (Fi(t) === "object" || typeof t == "function") ? t : Bi(e)
}

function Ss(e) {
	return Ss = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
		return n.__proto__ || Object.getPrototypeOf(n)
	}, Ss(e)
}

function Bi(e) {
	if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e
}

function jE(e, t) {
	if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, {
		constructor: {
			value: e,
			writable: !0,
			configurable: !0
		}
	}), t && xs(e, t)
}

function xs(e, t) {
	return xs = Object.setPrototypeOf || function(r, o) {
		return r.__proto__ = o, r
	}, xs(e, t)
}

function Wi(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e
}
var kv = function(e) {
	jE(t, e);

	function t() {
		var n, r;
		_E(this, t);
		for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
		return r = OE(this, (n = Ss(t)).call.apply(n, [this].concat(i))), Wi(Bi(r), "state", {
			bootstrapped: !1
		}), Wi(Bi(r), "_unsubscribe", void 0), Wi(Bi(r), "handlePersistorState", function() {
			var a = r.props.persistor,
				u = a.getState(),
				s = u.bootstrapped;
			s && (r.props.onBeforeLift ? Promise.resolve(r.props.onBeforeLift()).finally(function() {
				return r.setState({
					bootstrapped: !0
				})
			}) : r.setState({
				bootstrapped: !0
			}), r._unsubscribe && r._unsubscribe())
		}), r
	}
	return RE(t, [{
		key: "componentDidMount",
		value: function() {
			this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState), this.handlePersistorState()
		}
	}, {
		key: "componentWillUnmount",
		value: function() {
			this._unsubscribe && this._unsubscribe()
		}
	}, {
		key: "render",
		value: function() {
			return typeof this.props.children == "function" ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading
		}
	}]), t
}(C.PureComponent);
Wi(kv, "defaultProps", {
	children: null,
	loading: null
});
var Es = {},
	ap = Gl;
Es.createRoot = ap.createRoot, Es.hydrateRoot = ap.hydrateRoot;

function bE() {
	const e = cn(),
		t = We(r => r.sortViz.selectedAlgosStatus),
		n = r => {
			e(V0(r)), e(Tl())
		};
	return O.jsx("div", {
		className: St.checkboxWrapper,
		children: t.map((r, o) => O.jsx("li", {
			className: St.listItem,
			children: O.jsxs("div", {
				className: St.checkbox,
				children: [O.jsx("input", {
					type: "checkbox",
					id: `custom-checkbox-${Nt[o].name}`,
					name: Nt[o].name,
					value: Nt[o].name,
					checked: r,
					onChange: () => n(o)
				}), O.jsx("label", {
					htmlFor: `custom-checkbox-${Nt[o].name}`,
                    
					children: Nt[o].name
				})]
			})
		}, o))
	})
}

function NE() {
	const e = cn(),
		t = We(a => a.sortViz.array),
		n = We(a => a.sortViz.reset),
		r = We(a => a.sortViz.selectedAlgosStatus);
	let o = Nt.filter((a, u) => r[u]);
	o.length === 0 && (o = Nt);
	const {
		onComplete: i,
		isComplete: l
	} = Ev(o.length, n);
	return C.useEffect(() => {
		l && (hv.success(Yp), e($r(null)))
	}, [e, l]), t.length === 0 ? O.jsx(Pl, {
		children: O.jsx(gv, {})
	}) : O.jsxs(Pl, {
		children: [O.jsx(bE, {}), O.jsx("div", {
			className: vv.allAlgos,
			children: o.map(a => O.jsx(xv, {
				array: t,
				algoName: a.name,
				algoFn: a.fn,
				onComplete: i
			}, t.toString() + n + a.name))
		})]
	})
}

function TE() {
	return O.jsx(NE, {})
}
const ME = [{
		path: "/sorting-visualizer/",
		element: O.jsx(ws, {})
	}, {
		path: "/sorting-visualizer/all",
		element: O.jsx(TE, {})
	}, {
		path: "/sorting-visualizer/:algoName",
		element: O.jsx(ws, {})
	}],
	zE = sg([...ME, {
		path: "/",
		element: O.jsx(ws, {})
	}]);
Es.createRoot(document.getElementById("root")).render(O.jsx(T.StrictMode, {
	children: O.jsx(XS, {
		store: Xp,
		children: O.jsx(kv, {
			loading: null,
			persistor: r1,
			children: O.jsx(tg, {
				router: zE
			})
		})
	})
}));