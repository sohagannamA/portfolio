import {
  require_react
} from "./chunk-3527N3GG.js";
import {
  __commonJS,
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    (function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e2) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                validateChildKeys(children[isStaticChildren]);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k) {
            return "key" !== k;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ), didWarnAboutKeySpread[children + isStaticChildren] = true);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(
          type,
          children,
          self,
          source,
          getOwner(),
          maybeKey,
          debugStack,
          debugTask
        );
      }
      function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
      }
      var React = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      React = {
        "react-stack-bottom-frame": function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(
        React,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutKeySpread = {};
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.jsx = function(type, config, maybeKey, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          false,
          source,
          self,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.jsxs = function(type, config, maybeKey, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          true,
          source,
          self,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
    })();
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/react-parallax-tilt/dist/modern/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var i = (t2, e2, i2, n2) => {
  t2.style.transition = `${e2} ${i2}ms ${n2}`;
};
var n = (t2, e2, i2) => Math.min(Math.max(t2, e2), i2);
var s = class {
  constructor(t2, e2) {
    this.glareAngle = 0, this.glareOpacity = 0, this.calculateGlareSize = (t3) => {
      const { width: e3, height: i3 } = t3, n2 = Math.sqrt(e3 ** 2 + i3 ** 2);
      return { width: n2, height: n2 };
    }, this.setSize = (t3) => {
      const e3 = this.calculateGlareSize(t3);
      this.glareEl.style.width = `${e3.width}px`, this.glareEl.style.height = `${e3.height}px`;
    }, this.update = (t3, e3, i3, n2) => {
      this.updateAngle(t3, e3.glareReverse), this.updateOpacity(t3, e3, i3, n2);
    }, this.updateAngle = (t3, e3) => {
      const { xPercentage: i3, yPercentage: n2 } = t3, s3 = 180 / Math.PI, r3 = i3 ? Math.atan2(n2, -i3) * s3 : 0;
      this.glareAngle = r3 - (e3 ? 180 : 0);
    }, this.updateOpacity = (t3, e3, i3, s3) => {
      const { xPercentage: r3, yPercentage: l2 } = t3, { glarePosition: a2, glareReverse: o, glareMaxOpacity: h } = e3, p = i3 ? -1 : 1, c = s3 ? -1 : 1, g = o ? -1 : 1;
      let d = 0;
      switch (a2) {
        case "top":
          d = -r3 * p * g;
          break;
        case "right":
          d = l2 * c * g;
          break;
        case "bottom":
        case void 0:
          d = r3 * p * g;
          break;
        case "left":
          d = -l2 * c * g;
          break;
        case "all":
          d = Math.hypot(r3, l2);
      }
      const u = n(d, 0, 100);
      this.glareOpacity = u * h / 100;
    }, this.render = (t3) => {
      const { glareColor: e3 } = t3;
      this.glareEl.style.transform = `rotate(${this.glareAngle}deg) translate(-50%, -50%)`, this.glareEl.style.opacity = this.glareOpacity.toString(), this.glareEl.style.background = `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${e3} 100%)`;
    }, this.glareWrapperEl = document.createElement("div"), this.glareEl = document.createElement("div"), this.glareWrapperEl.appendChild(this.glareEl), this.glareWrapperEl.className = "glare-wrapper", this.glareEl.className = "glare";
    const i2 = { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", overflow: "hidden", borderRadius: e2, WebkitMaskImage: "-webkit-radial-gradient(white, black)", pointerEvents: "none" }, s2 = this.calculateGlareSize(t2), r2 = { position: "absolute", top: "50%", left: "50%", transformOrigin: "0% 0%", pointerEvents: "none", width: `${s2.width}px`, height: `${s2.height}px` };
    Object.assign(this.glareWrapperEl.style, i2), Object.assign(this.glareEl.style, r2);
  }
};
var r = class {
  constructor() {
    this.glareAngle = 0, this.glareOpacity = 0, this.tiltAngleX = 0, this.tiltAngleY = 0, this.tiltAngleXPercentage = 0, this.tiltAngleYPercentage = 0, this.update = (t2, e2) => {
      this.updateTilt(t2, e2), this.updateTiltManualInput(t2, e2), this.updateTiltReverse(e2), this.updateTiltLimits(e2);
    }, this.updateTilt = (t2, e2) => {
      const { xPercentage: i2, yPercentage: n2 } = t2, { tiltMaxAngleX: s2, tiltMaxAngleY: r2 } = e2;
      this.tiltAngleX = i2 * s2 / 100, this.tiltAngleY = n2 * r2 / 100 * -1;
    }, this.updateTiltManualInput = (t2, e2) => {
      const { tiltAngleXManual: i2, tiltAngleYManual: n2, tiltMaxAngleX: s2, tiltMaxAngleY: r2 } = e2;
      (null !== i2 || null !== n2) && (this.tiltAngleX = null !== i2 ? i2 : 0, this.tiltAngleY = null !== n2 ? n2 : 0, t2.xPercentage = 100 * this.tiltAngleX / s2, t2.yPercentage = 100 * this.tiltAngleY / r2);
    }, this.updateTiltReverse = (t2) => {
      const e2 = t2.tiltReverse ? -1 : 1;
      this.tiltAngleX = e2 * this.tiltAngleX, this.tiltAngleY = e2 * this.tiltAngleY;
    }, this.updateTiltLimits = (t2) => {
      const { tiltAxis: e2 } = t2;
      this.tiltAngleX = n(this.tiltAngleX, -90, 90), this.tiltAngleY = n(this.tiltAngleY, -90, 90);
      e2 && (this.tiltAngleX = "x" === e2 ? this.tiltAngleX : 0, this.tiltAngleY = "y" === e2 ? this.tiltAngleY : 0);
    }, this.updateTiltAnglesPercentage = (t2) => {
      const { tiltMaxAngleX: e2, tiltMaxAngleY: i2 } = t2;
      this.tiltAngleXPercentage = this.tiltAngleX / e2 * 100, this.tiltAngleYPercentage = this.tiltAngleY / i2 * 100;
    }, this.render = (t2) => {
      t2.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `;
    };
  }
};
var l = { scale: 1, perspective: 1e3, flipVertically: false, flipHorizontally: false, reset: true, transitionEasing: "cubic-bezier(.03,.98,.52,.99)", transitionSpeed: 400, trackOnWindow: false, gyroscope: false, ...{ tiltEnable: true, tiltReverse: false, tiltAngleXInitial: 0, tiltAngleYInitial: 0, tiltMaxAngleX: 20, tiltMaxAngleY: 20, tiltAxis: void 0, tiltAngleXManual: null, tiltAngleYManual: null }, glareEnable: false, glareMaxOpacity: 0.7, glareColor: "#ffffff", glarePosition: "bottom", glareReverse: false, glareBorderRadius: "0" };
var a = class extends import_react.PureComponent {
  constructor() {
    super(...arguments), this.wrapperEl = { node: null, size: { width: 0, height: 0, left: 0, top: 0 }, clientPosition: { x: null, y: null, xPercentage: 0, yPercentage: 0 }, updateAnimationId: null, scale: 1 }, this.tilt = null, this.glare = null, this.addDeviceOrientationEventListener = async () => {
      if (!window.DeviceOrientationEvent) return;
      const t2 = DeviceOrientationEvent.requestPermission;
      if ("function" == typeof t2) {
        "granted" === await t2() && window.addEventListener("deviceorientation", this.onMove);
      } else window.addEventListener("deviceorientation", this.onMove);
    }, this.setSize = () => {
      this.setWrapperElSize(), this.glare && this.glare.setSize(this.wrapperEl.size);
    }, this.mainLoop = (t2) => {
      null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId), this.processInput(t2), this.update(t2.type), this.wrapperEl.updateAnimationId = requestAnimationFrame(this.renderFrame);
    }, this.onEnter = (t2) => {
      const { onEnter: e2 } = this.props;
      this.setSize(), this.wrapperEl.node.style.willChange = "transform", this.setTransitions(), e2 && e2({ event: t2 });
    }, this.onMove = (t2) => {
      this.mainLoop(t2), this.emitOnMove(t2);
    }, this.onLeave = (t2) => {
      const { onLeave: e2 } = this.props;
      if (this.setTransitions(), e2 && e2({ event: t2 }), this.props.reset) {
        const t3 = new CustomEvent("autoreset");
        this.onMove(t3);
      }
    }, this.processInput = (t2) => {
      const { scale: e2 } = this.props;
      switch (t2.type) {
        case "mousemove":
          this.wrapperEl.clientPosition.x = t2.pageX, this.wrapperEl.clientPosition.y = t2.pageY, this.wrapperEl.scale = e2;
          break;
        case "touchmove":
          this.wrapperEl.clientPosition.x = t2.touches[0].pageX, this.wrapperEl.clientPosition.y = t2.touches[0].pageY, this.wrapperEl.scale = e2;
          break;
        case "deviceorientation":
          this.processInputDeviceOrientation(t2), this.wrapperEl.scale = e2;
          break;
        case "autoreset": {
          const { tiltAngleXInitial: t3, tiltAngleYInitial: e3, tiltMaxAngleX: i2, tiltMaxAngleY: s2 } = this.props, r2 = e3 / s2 * 100;
          this.wrapperEl.clientPosition.xPercentage = n(t3 / i2 * 100, -100, 100), this.wrapperEl.clientPosition.yPercentage = n(r2, -100, 100), this.wrapperEl.scale = 1;
          break;
        }
      }
    }, this.processInputDeviceOrientation = (t2) => {
      if (!t2.gamma || !t2.beta || !this.props.gyroscope) return;
      const { tiltMaxAngleX: e2, tiltMaxAngleY: i2 } = this.props, s2 = t2.gamma;
      this.wrapperEl.clientPosition.xPercentage = t2.beta / e2 * 100, this.wrapperEl.clientPosition.yPercentage = s2 / i2 * 100, this.wrapperEl.clientPosition.xPercentage = n(this.wrapperEl.clientPosition.xPercentage, -100, 100), this.wrapperEl.clientPosition.yPercentage = n(this.wrapperEl.clientPosition.yPercentage, -100, 100);
    }, this.update = (t2) => {
      const { tiltEnable: e2, flipVertically: i2, flipHorizontally: n2 } = this.props;
      "autoreset" !== t2 && "deviceorientation" !== t2 && "propChange" !== t2 && this.updateClientInput(), e2 && this.tilt.update(this.wrapperEl.clientPosition, this.props), this.updateFlip(), this.tilt.updateTiltAnglesPercentage(this.props), this.glare && this.glare.update(this.wrapperEl.clientPosition, this.props, i2, n2);
    }, this.updateClientInput = () => {
      const { trackOnWindow: t2 } = this.props;
      let e2, i2;
      if (t2) {
        const { x: t3, y: n2 } = this.wrapperEl.clientPosition;
        e2 = n2 / window.innerHeight * 200 - 100, i2 = t3 / window.innerWidth * 200 - 100;
      } else {
        const { size: { width: t3, height: n2, left: s2, top: r2 }, clientPosition: { x: l2, y: a2 } } = this.wrapperEl;
        e2 = (a2 - r2) / n2 * 200 - 100, i2 = (l2 - s2) / t3 * 200 - 100;
      }
      this.wrapperEl.clientPosition.xPercentage = n(e2, -100, 100), this.wrapperEl.clientPosition.yPercentage = n(i2, -100, 100);
    }, this.updateFlip = () => {
      const { flipVertically: t2, flipHorizontally: e2 } = this.props;
      t2 && (this.tilt.tiltAngleX += 180, this.tilt.tiltAngleY *= -1), e2 && (this.tilt.tiltAngleY += 180);
    }, this.renderFrame = () => {
      this.resetWrapperElTransform(), this.renderPerspective(), this.tilt.render(this.wrapperEl.node), this.renderScale(), this.glare && this.glare.render(this.props);
    };
  }
  componentDidMount() {
    if (this.tilt = new r(), this.initGlare(), this.setSize(), this.addEventListeners(), "undefined" == typeof CustomEvent) return;
    const t2 = new CustomEvent("autoreset");
    this.mainLoop(t2);
    const e2 = new CustomEvent("initial");
    this.emitOnMove(e2);
  }
  componentWillUnmount() {
    null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId), this.removeEventListeners();
  }
  componentDidUpdate() {
    const t2 = new CustomEvent("propChange");
    this.mainLoop(t2), this.emitOnMove(t2);
  }
  addEventListeners() {
    const { trackOnWindow: t2, gyroscope: e2 } = this.props;
    window.addEventListener("resize", this.setSize), t2 && (window.addEventListener("mouseenter", this.onEnter), window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseout", this.onLeave), window.addEventListener("touchstart", this.onEnter), window.addEventListener("touchmove", this.onMove), window.addEventListener("touchend", this.onLeave)), e2 && this.addDeviceOrientationEventListener();
  }
  removeEventListeners() {
    const { trackOnWindow: t2, gyroscope: e2 } = this.props;
    window.removeEventListener("resize", this.setSize), t2 && (window.removeEventListener("mouseenter", this.onEnter), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseout", this.onLeave), window.removeEventListener("touchstart", this.onEnter), window.removeEventListener("touchmove", this.onMove), window.removeEventListener("touchend", this.onLeave)), e2 && window.DeviceOrientationEvent && window.removeEventListener("deviceorientation", this.onMove);
  }
  setWrapperElSize() {
    const t2 = this.wrapperEl.node.getBoundingClientRect();
    this.wrapperEl.size.width = this.wrapperEl.node.offsetWidth, this.wrapperEl.size.height = this.wrapperEl.node.offsetHeight, this.wrapperEl.size.left = t2.left + window.scrollX, this.wrapperEl.size.top = t2.top + window.scrollY;
  }
  initGlare() {
    const { glareEnable: t2, glareBorderRadius: e2 } = this.props;
    t2 && (this.glare = new s(this.wrapperEl.size, e2), this.wrapperEl.node.appendChild(this.glare.glareWrapperEl));
  }
  emitOnMove(t2) {
    const { onMove: e2 } = this.props;
    if (!e2) return;
    let i2 = 0, n2 = 0;
    this.glare && (i2 = this.glare.glareAngle, n2 = this.glare.glareOpacity), e2({ tiltAngleX: this.tilt.tiltAngleX, tiltAngleY: this.tilt.tiltAngleY, tiltAngleXPercentage: this.tilt.tiltAngleXPercentage, tiltAngleYPercentage: this.tilt.tiltAngleYPercentage, glareAngle: i2, glareOpacity: n2, event: t2 });
  }
  resetWrapperElTransform() {
    this.wrapperEl.node.style.transform = "";
  }
  renderPerspective() {
    const { perspective: t2 } = this.props;
    this.wrapperEl.node.style.transform += `perspective(${t2}px) `;
  }
  renderScale() {
    const { scale: t2 } = this.wrapperEl;
    this.wrapperEl.node.style.transform += `scale3d(${t2},${t2},${t2})`;
  }
  setTransitions() {
    const { transitionSpeed: t2, transitionEasing: e2 } = this.props;
    i(this.wrapperEl.node, "all", t2, e2), this.glare && i(this.glare.glareEl, "opacity", t2, e2);
  }
  render() {
    const { children: e2, className: i2, style: n2 } = this.props;
    return (0, import_jsx_runtime.jsx)("div", { ref: (t2) => {
      this.wrapperEl.node = t2;
    }, onMouseEnter: this.onEnter, onMouseMove: this.onMove, onMouseLeave: this.onLeave, onTouchStart: this.onEnter, onTouchMove: this.onMove, onTouchEnd: this.onLeave, className: i2, style: n2, children: e2 });
  }
};
a.defaultProps = l;
export {
  a as default
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=react-parallax-tilt.js.map
