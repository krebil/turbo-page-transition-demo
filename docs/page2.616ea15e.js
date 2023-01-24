// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aleVA":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a6a7d594616ea15e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _turbo = require("@hotwired/turbo");
var _turn = require("@domchristie/turn");
var _turnDefault = parcelHelpers.interopDefault(_turn);
_turbo.start();
(0, _turnDefault.default).start();

},{"@hotwired/turbo":"epOYU","@domchristie/turn":"amRza","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"epOYU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FrameElement", ()=>FrameElement);
parcelHelpers.export(exports, "FrameLoadingStyle", ()=>FrameLoadingStyle);
parcelHelpers.export(exports, "FrameRenderer", ()=>FrameRenderer);
parcelHelpers.export(exports, "PageRenderer", ()=>PageRenderer);
parcelHelpers.export(exports, "PageSnapshot", ()=>PageSnapshot);
parcelHelpers.export(exports, "StreamActions", ()=>StreamActions);
parcelHelpers.export(exports, "StreamElement", ()=>StreamElement);
parcelHelpers.export(exports, "StreamSourceElement", ()=>StreamSourceElement);
parcelHelpers.export(exports, "cache", ()=>cache);
parcelHelpers.export(exports, "clearCache", ()=>clearCache);
parcelHelpers.export(exports, "connectStreamSource", ()=>connectStreamSource);
parcelHelpers.export(exports, "disconnectStreamSource", ()=>disconnectStreamSource);
parcelHelpers.export(exports, "navigator", ()=>navigator$1);
parcelHelpers.export(exports, "registerAdapter", ()=>registerAdapter);
parcelHelpers.export(exports, "renderStreamMessage", ()=>renderStreamMessage);
parcelHelpers.export(exports, "session", ()=>session);
parcelHelpers.export(exports, "setConfirmMethod", ()=>setConfirmMethod);
parcelHelpers.export(exports, "setFormMode", ()=>setFormMode);
parcelHelpers.export(exports, "setProgressBarDelay", ()=>setProgressBarDelay);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "visit", ()=>visit);
/*
Turbo 7.2.4
Copyright © 2022 37signals LLC
 */ (function() {
    if (window.Reflect === undefined || window.customElements === undefined || window.customElements.polyfillWrapFlushCallback) return;
    const BuiltInHTMLElement = HTMLElement;
    const wrapperForTheName = {
        HTMLElement: function HTMLElement1() {
            return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
        }
    };
    window.HTMLElement = wrapperForTheName["HTMLElement"];
    HTMLElement.prototype = BuiltInHTMLElement.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2019 Javan Makhmali
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ (function(prototype) {
    if (typeof prototype.requestSubmit == "function") return;
    prototype.requestSubmit = function(submitter) {
        if (submitter) {
            validateSubmitter(submitter, this);
            submitter.click();
        } else {
            submitter = document.createElement("input");
            submitter.type = "submit";
            submitter.hidden = true;
            this.appendChild(submitter);
            submitter.click();
            this.removeChild(submitter);
        }
    };
    function validateSubmitter(submitter, form) {
        submitter instanceof HTMLElement || raise(TypeError, "parameter 1 is not of type 'HTMLElement'");
        submitter.type == "submit" || raise(TypeError, "The specified element is not a submit button");
        submitter.form == form || raise(DOMException, "The specified element is not owned by this form element", "NotFoundError");
    }
    function raise(errorConstructor, message, name) {
        throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".", name);
    }
})(HTMLFormElement.prototype);
const submittersByForm = new WeakMap();
function findSubmitterFromClickTarget(target) {
    const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
    const candidate = element ? element.closest("input, button") : null;
    return (candidate === null || candidate === void 0 ? void 0 : candidate.type) == "submit" ? candidate : null;
}
function clickCaptured(event) {
    const submitter = findSubmitterFromClickTarget(event.target);
    if (submitter && submitter.form) submittersByForm.set(submitter.form, submitter);
}
(function() {
    if ("submitter" in Event.prototype) return;
    let prototype;
    if ("SubmitEvent" in window && /Apple Computer/.test(navigator.vendor)) prototype = window.SubmitEvent.prototype;
    else if ("SubmitEvent" in window) return;
    else prototype = window.Event.prototype;
    addEventListener("click", clickCaptured, true);
    Object.defineProperty(prototype, "submitter", {
        get () {
            if (this.type == "submit" && this.target instanceof HTMLFormElement) return submittersByForm.get(this.target);
        }
    });
})();
var FrameLoadingStyle;
(function(FrameLoadingStyle) {
    FrameLoadingStyle["eager"] = "eager";
    FrameLoadingStyle["lazy"] = "lazy";
})(FrameLoadingStyle || (FrameLoadingStyle = {}));
class FrameElement extends HTMLElement {
    constructor(){
        super();
        this.loaded = Promise.resolve();
        this.delegate = new FrameElement.delegateConstructor(this);
    }
    static get observedAttributes() {
        return [
            "disabled",
            "complete",
            "loading",
            "src"
        ];
    }
    connectedCallback() {
        this.delegate.connect();
    }
    disconnectedCallback() {
        this.delegate.disconnect();
    }
    reload() {
        return this.delegate.sourceURLReloaded();
    }
    attributeChangedCallback(name) {
        if (name == "loading") this.delegate.loadingStyleChanged();
        else if (name == "complete") this.delegate.completeChanged();
        else if (name == "src") this.delegate.sourceURLChanged();
        else this.delegate.disabledChanged();
    }
    get src() {
        return this.getAttribute("src");
    }
    set src(value) {
        if (value) this.setAttribute("src", value);
        else this.removeAttribute("src");
    }
    get loading() {
        return frameLoadingStyleFromString(this.getAttribute("loading") || "");
    }
    set loading(value) {
        if (value) this.setAttribute("loading", value);
        else this.removeAttribute("loading");
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(value) {
        if (value) this.setAttribute("disabled", "");
        else this.removeAttribute("disabled");
    }
    get autoscroll() {
        return this.hasAttribute("autoscroll");
    }
    set autoscroll(value) {
        if (value) this.setAttribute("autoscroll", "");
        else this.removeAttribute("autoscroll");
    }
    get complete() {
        return !this.delegate.isLoading;
    }
    get isActive() {
        return this.ownerDocument === document && !this.isPreview;
    }
    get isPreview() {
        var _a, _b;
        return (_b = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.documentElement) === null || _b === void 0 ? void 0 : _b.hasAttribute("data-turbo-preview");
    }
}
function frameLoadingStyleFromString(style) {
    switch(style.toLowerCase()){
        case "lazy":
            return FrameLoadingStyle.lazy;
        default:
            return FrameLoadingStyle.eager;
    }
}
function expandURL(locatable) {
    return new URL(locatable.toString(), document.baseURI);
}
function getAnchor(url) {
    let anchorMatch;
    if (url.hash) return url.hash.slice(1);
    else if (anchorMatch = url.href.match(/#(.*)$/)) return anchorMatch[1];
}
function getAction(form, submitter) {
    const action = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formaction")) || form.getAttribute("action") || form.action;
    return expandURL(action);
}
function getExtension(url) {
    return (getLastPathComponent(url).match(/\.[^.]*$/) || [])[0] || "";
}
function isHTML(url) {
    return !!getExtension(url).match(/^(?:|\.(?:htm|html|xhtml|php))$/);
}
function isPrefixedBy(baseURL, url) {
    const prefix = getPrefix(url);
    return baseURL.href === expandURL(prefix).href || baseURL.href.startsWith(prefix);
}
function locationIsVisitable(location1, rootLocation) {
    return isPrefixedBy(location1, rootLocation) && isHTML(location1);
}
function getRequestURL(url) {
    const anchor = getAnchor(url);
    return anchor != null ? url.href.slice(0, -(anchor.length + 1)) : url.href;
}
function toCacheKey(url) {
    return getRequestURL(url);
}
function urlsAreEqual(left, right) {
    return expandURL(left).href == expandURL(right).href;
}
function getPathComponents(url) {
    return url.pathname.split("/").slice(1);
}
function getLastPathComponent(url) {
    return getPathComponents(url).slice(-1)[0];
}
function getPrefix(url) {
    return addTrailingSlash(url.origin + url.pathname);
}
function addTrailingSlash(value) {
    return value.endsWith("/") ? value : value + "/";
}
class FetchResponse {
    constructor(response){
        this.response = response;
    }
    get succeeded() {
        return this.response.ok;
    }
    get failed() {
        return !this.succeeded;
    }
    get clientError() {
        return this.statusCode >= 400 && this.statusCode <= 499;
    }
    get serverError() {
        return this.statusCode >= 500 && this.statusCode <= 599;
    }
    get redirected() {
        return this.response.redirected;
    }
    get location() {
        return expandURL(this.response.url);
    }
    get isHTML() {
        return this.contentType && this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/);
    }
    get statusCode() {
        return this.response.status;
    }
    get contentType() {
        return this.header("Content-Type");
    }
    get responseText() {
        return this.response.clone().text();
    }
    get responseHTML() {
        if (this.isHTML) return this.response.clone().text();
        else return Promise.resolve(undefined);
    }
    header(name) {
        return this.response.headers.get(name);
    }
}
function isAction(action) {
    return action == "advance" || action == "replace" || action == "restore";
}
function activateScriptElement(element) {
    if (element.getAttribute("data-turbo-eval") == "false") return element;
    else {
        const createdScriptElement = document.createElement("script");
        const cspNonce = getMetaContent("csp-nonce");
        if (cspNonce) createdScriptElement.nonce = cspNonce;
        createdScriptElement.textContent = element.textContent;
        createdScriptElement.async = false;
        copyElementAttributes(createdScriptElement, element);
        return createdScriptElement;
    }
}
function copyElementAttributes(destinationElement, sourceElement) {
    for (const { name , value  } of sourceElement.attributes)destinationElement.setAttribute(name, value);
}
function createDocumentFragment(html) {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content;
}
function dispatch(eventName, { target , cancelable , detail  } = {}) {
    const event = new CustomEvent(eventName, {
        cancelable,
        bubbles: true,
        detail
    });
    if (target && target.isConnected) target.dispatchEvent(event);
    else document.documentElement.dispatchEvent(event);
    return event;
}
function nextAnimationFrame() {
    return new Promise((resolve)=>requestAnimationFrame(()=>resolve()));
}
function nextEventLoopTick() {
    return new Promise((resolve)=>setTimeout(()=>resolve(), 0));
}
function nextMicrotask() {
    return Promise.resolve();
}
function parseHTMLDocument(html = "") {
    return new DOMParser().parseFromString(html, "text/html");
}
function unindent(strings, ...values) {
    const lines = interpolate(strings, values).replace(/^\n/, "").split("\n");
    const match = lines[0].match(/^\s+/);
    const indent = match ? match[0].length : 0;
    return lines.map((line)=>line.slice(indent)).join("\n");
}
function interpolate(strings, values) {
    return strings.reduce((result, string, i)=>{
        const value = values[i] == undefined ? "" : values[i];
        return result + string + value;
    }, "");
}
function uuid() {
    return Array.from({
        length: 36
    }).map((_, i)=>{
        if (i == 8 || i == 13 || i == 18 || i == 23) return "-";
        else if (i == 14) return "4";
        else if (i == 19) return (Math.floor(Math.random() * 4) + 8).toString(16);
        else return Math.floor(Math.random() * 15).toString(16);
    }).join("");
}
function getAttribute(attributeName, ...elements) {
    for (const value of elements.map((element)=>element === null || element === void 0 ? void 0 : element.getAttribute(attributeName))){
        if (typeof value == "string") return value;
    }
    return null;
}
function hasAttribute(attributeName, ...elements) {
    return elements.some((element)=>element && element.hasAttribute(attributeName));
}
function markAsBusy(...elements) {
    for (const element of elements){
        if (element.localName == "turbo-frame") element.setAttribute("busy", "");
        element.setAttribute("aria-busy", "true");
    }
}
function clearBusyState(...elements) {
    for (const element of elements){
        if (element.localName == "turbo-frame") element.removeAttribute("busy");
        element.removeAttribute("aria-busy");
    }
}
function waitForLoad(element, timeoutInMilliseconds = 2000) {
    return new Promise((resolve)=>{
        const onComplete = ()=>{
            element.removeEventListener("error", onComplete);
            element.removeEventListener("load", onComplete);
            resolve();
        };
        element.addEventListener("load", onComplete, {
            once: true
        });
        element.addEventListener("error", onComplete, {
            once: true
        });
        setTimeout(resolve, timeoutInMilliseconds);
    });
}
function getHistoryMethodForAction(action) {
    switch(action){
        case "replace":
            return history.replaceState;
        case "advance":
        case "restore":
            return history.pushState;
    }
}
function getVisitAction(...elements) {
    const action = getAttribute("data-turbo-action", ...elements);
    return isAction(action) ? action : null;
}
function getMetaElement(name) {
    return document.querySelector(`meta[name="${name}"]`);
}
function getMetaContent(name) {
    const element = getMetaElement(name);
    return element && element.content;
}
function setMetaContent(name, content) {
    let element = getMetaElement(name);
    if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
    }
    element.setAttribute("content", content);
    return element;
}
var FetchMethod;
(function(FetchMethod) {
    FetchMethod[FetchMethod["get"] = 0] = "get";
    FetchMethod[FetchMethod["post"] = 1] = "post";
    FetchMethod[FetchMethod["put"] = 2] = "put";
    FetchMethod[FetchMethod["patch"] = 3] = "patch";
    FetchMethod[FetchMethod["delete"] = 4] = "delete";
})(FetchMethod || (FetchMethod = {}));
function fetchMethodFromString(method) {
    switch(method.toLowerCase()){
        case "get":
            return FetchMethod.get;
        case "post":
            return FetchMethod.post;
        case "put":
            return FetchMethod.put;
        case "patch":
            return FetchMethod.patch;
        case "delete":
            return FetchMethod.delete;
    }
}
class FetchRequest {
    constructor(delegate, method, location1, body = new URLSearchParams(), target = null){
        this.abortController = new AbortController();
        this.resolveRequestPromise = (_value)=>{};
        this.delegate = delegate;
        this.method = method;
        this.headers = this.defaultHeaders;
        this.body = body;
        this.url = location1;
        this.target = target;
    }
    get location() {
        return this.url;
    }
    get params() {
        return this.url.searchParams;
    }
    get entries() {
        return this.body ? Array.from(this.body.entries()) : [];
    }
    cancel() {
        this.abortController.abort();
    }
    async perform() {
        var _a, _b;
        const { fetchOptions  } = this;
        (_b = (_a = this.delegate).prepareHeadersForRequest) === null || _b === void 0 || _b.call(_a, this.headers, this);
        await this.allowRequestToBeIntercepted(fetchOptions);
        try {
            this.delegate.requestStarted(this);
            const response = await fetch(this.url.href, fetchOptions);
            return await this.receive(response);
        } catch (error) {
            if (error.name !== "AbortError") {
                if (this.willDelegateErrorHandling(error)) this.delegate.requestErrored(this, error);
                throw error;
            }
        } finally{
            this.delegate.requestFinished(this);
        }
    }
    async receive(response) {
        const fetchResponse = new FetchResponse(response);
        const event = dispatch("turbo:before-fetch-response", {
            cancelable: true,
            detail: {
                fetchResponse
            },
            target: this.target
        });
        if (event.defaultPrevented) this.delegate.requestPreventedHandlingResponse(this, fetchResponse);
        else if (fetchResponse.succeeded) this.delegate.requestSucceededWithResponse(this, fetchResponse);
        else this.delegate.requestFailedWithResponse(this, fetchResponse);
        return fetchResponse;
    }
    get fetchOptions() {
        var _a;
        return {
            method: FetchMethod[this.method].toUpperCase(),
            credentials: "same-origin",
            headers: this.headers,
            redirect: "follow",
            body: this.isIdempotent ? null : this.body,
            signal: this.abortSignal,
            referrer: (_a = this.delegate.referrer) === null || _a === void 0 ? void 0 : _a.href
        };
    }
    get defaultHeaders() {
        return {
            Accept: "text/html, application/xhtml+xml"
        };
    }
    get isIdempotent() {
        return this.method == FetchMethod.get;
    }
    get abortSignal() {
        return this.abortController.signal;
    }
    acceptResponseType(mimeType) {
        this.headers["Accept"] = [
            mimeType,
            this.headers["Accept"]
        ].join(", ");
    }
    async allowRequestToBeIntercepted(fetchOptions) {
        const requestInterception = new Promise((resolve)=>this.resolveRequestPromise = resolve);
        const event = dispatch("turbo:before-fetch-request", {
            cancelable: true,
            detail: {
                fetchOptions,
                url: this.url,
                resume: this.resolveRequestPromise
            },
            target: this.target
        });
        if (event.defaultPrevented) await requestInterception;
    }
    willDelegateErrorHandling(error) {
        const event = dispatch("turbo:fetch-request-error", {
            target: this.target,
            cancelable: true,
            detail: {
                request: this,
                error: error
            }
        });
        return !event.defaultPrevented;
    }
}
class AppearanceObserver {
    constructor(delegate, element){
        this.started = false;
        this.intersect = (entries)=>{
            const lastEntry = entries.slice(-1)[0];
            if (lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.isIntersecting) this.delegate.elementAppearedInViewport(this.element);
        };
        this.delegate = delegate;
        this.element = element;
        this.intersectionObserver = new IntersectionObserver(this.intersect);
    }
    start() {
        if (!this.started) {
            this.started = true;
            this.intersectionObserver.observe(this.element);
        }
    }
    stop() {
        if (this.started) {
            this.started = false;
            this.intersectionObserver.unobserve(this.element);
        }
    }
}
class StreamMessage {
    constructor(fragment){
        this.fragment = importStreamElements(fragment);
    }
    static wrap(message) {
        if (typeof message == "string") return new this(createDocumentFragment(message));
        else return message;
    }
}
StreamMessage.contentType = "text/vnd.turbo-stream.html";
function importStreamElements(fragment) {
    for (const element of fragment.querySelectorAll("turbo-stream")){
        const streamElement = document.importNode(element, true);
        for (const inertScriptElement of streamElement.templateElement.content.querySelectorAll("script"))inertScriptElement.replaceWith(activateScriptElement(inertScriptElement));
        element.replaceWith(streamElement);
    }
    return fragment;
}
var FormSubmissionState;
(function(FormSubmissionState) {
    FormSubmissionState[FormSubmissionState["initialized"] = 0] = "initialized";
    FormSubmissionState[FormSubmissionState["requesting"] = 1] = "requesting";
    FormSubmissionState[FormSubmissionState["waiting"] = 2] = "waiting";
    FormSubmissionState[FormSubmissionState["receiving"] = 3] = "receiving";
    FormSubmissionState[FormSubmissionState["stopping"] = 4] = "stopping";
    FormSubmissionState[FormSubmissionState["stopped"] = 5] = "stopped";
})(FormSubmissionState || (FormSubmissionState = {}));
var FormEnctype;
(function(FormEnctype) {
    FormEnctype["urlEncoded"] = "application/x-www-form-urlencoded";
    FormEnctype["multipart"] = "multipart/form-data";
    FormEnctype["plain"] = "text/plain";
})(FormEnctype || (FormEnctype = {}));
function formEnctypeFromString(encoding) {
    switch(encoding.toLowerCase()){
        case FormEnctype.multipart:
            return FormEnctype.multipart;
        case FormEnctype.plain:
            return FormEnctype.plain;
        default:
            return FormEnctype.urlEncoded;
    }
}
class FormSubmission {
    constructor(delegate, formElement, submitter, mustRedirect = false){
        this.state = FormSubmissionState.initialized;
        this.delegate = delegate;
        this.formElement = formElement;
        this.submitter = submitter;
        this.formData = buildFormData(formElement, submitter);
        this.location = expandURL(this.action);
        if (this.method == FetchMethod.get) mergeFormDataEntries(this.location, [
            ...this.body.entries()
        ]);
        this.fetchRequest = new FetchRequest(this, this.method, this.location, this.body, this.formElement);
        this.mustRedirect = mustRedirect;
    }
    static confirmMethod(message, _element, _submitter) {
        return Promise.resolve(confirm(message));
    }
    get method() {
        var _a;
        const method = ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formmethod")) || this.formElement.getAttribute("method") || "";
        return fetchMethodFromString(method.toLowerCase()) || FetchMethod.get;
    }
    get action() {
        var _a;
        const formElementAction = typeof this.formElement.action === "string" ? this.formElement.action : null;
        if ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.hasAttribute("formaction")) return this.submitter.getAttribute("formaction") || "";
        else return this.formElement.getAttribute("action") || formElementAction || "";
    }
    get body() {
        if (this.enctype == FormEnctype.urlEncoded || this.method == FetchMethod.get) return new URLSearchParams(this.stringFormData);
        else return this.formData;
    }
    get enctype() {
        var _a;
        return formEnctypeFromString(((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formenctype")) || this.formElement.enctype);
    }
    get isIdempotent() {
        return this.fetchRequest.isIdempotent;
    }
    get stringFormData() {
        return [
            ...this.formData
        ].reduce((entries, [name, value])=>{
            return entries.concat(typeof value == "string" ? [
                [
                    name,
                    value
                ]
            ] : []);
        }, []);
    }
    async start() {
        const { initialized , requesting  } = FormSubmissionState;
        const confirmationMessage = getAttribute("data-turbo-confirm", this.submitter, this.formElement);
        if (typeof confirmationMessage === "string") {
            const answer = await FormSubmission.confirmMethod(confirmationMessage, this.formElement, this.submitter);
            if (!answer) return;
        }
        if (this.state == initialized) {
            this.state = requesting;
            return this.fetchRequest.perform();
        }
    }
    stop() {
        const { stopping , stopped  } = FormSubmissionState;
        if (this.state != stopping && this.state != stopped) {
            this.state = stopping;
            this.fetchRequest.cancel();
            return true;
        }
    }
    prepareHeadersForRequest(headers, request) {
        if (!request.isIdempotent) {
            const token = getCookieValue(getMetaContent("csrf-param")) || getMetaContent("csrf-token");
            if (token) headers["X-CSRF-Token"] = token;
        }
        if (this.requestAcceptsTurboStreamResponse(request)) request.acceptResponseType(StreamMessage.contentType);
    }
    requestStarted(_request) {
        var _a;
        this.state = FormSubmissionState.waiting;
        (_a = this.submitter) === null || _a === void 0 || _a.setAttribute("disabled", "");
        dispatch("turbo:submit-start", {
            target: this.formElement,
            detail: {
                formSubmission: this
            }
        });
        this.delegate.formSubmissionStarted(this);
    }
    requestPreventedHandlingResponse(request, response) {
        this.result = {
            success: response.succeeded,
            fetchResponse: response
        };
    }
    requestSucceededWithResponse(request, response) {
        if (response.clientError || response.serverError) this.delegate.formSubmissionFailedWithResponse(this, response);
        else if (this.requestMustRedirect(request) && responseSucceededWithoutRedirect(response)) {
            const error = new Error("Form responses must redirect to another location");
            this.delegate.formSubmissionErrored(this, error);
        } else {
            this.state = FormSubmissionState.receiving;
            this.result = {
                success: true,
                fetchResponse: response
            };
            this.delegate.formSubmissionSucceededWithResponse(this, response);
        }
    }
    requestFailedWithResponse(request, response) {
        this.result = {
            success: false,
            fetchResponse: response
        };
        this.delegate.formSubmissionFailedWithResponse(this, response);
    }
    requestErrored(request, error) {
        this.result = {
            success: false,
            error
        };
        this.delegate.formSubmissionErrored(this, error);
    }
    requestFinished(_request) {
        var _a;
        this.state = FormSubmissionState.stopped;
        (_a = this.submitter) === null || _a === void 0 || _a.removeAttribute("disabled");
        dispatch("turbo:submit-end", {
            target: this.formElement,
            detail: Object.assign({
                formSubmission: this
            }, this.result)
        });
        this.delegate.formSubmissionFinished(this);
    }
    requestMustRedirect(request) {
        return !request.isIdempotent && this.mustRedirect;
    }
    requestAcceptsTurboStreamResponse(request) {
        return !request.isIdempotent || hasAttribute("data-turbo-stream", this.submitter, this.formElement);
    }
}
function buildFormData(formElement, submitter) {
    const formData = new FormData(formElement);
    const name = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("name");
    const value = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("value");
    if (name) formData.append(name, value || "");
    return formData;
}
function getCookieValue(cookieName) {
    if (cookieName != null) {
        const cookies = document.cookie ? document.cookie.split("; ") : [];
        const cookie = cookies.find((cookie)=>cookie.startsWith(cookieName));
        if (cookie) {
            const value = cookie.split("=").slice(1).join("=");
            return value ? decodeURIComponent(value) : undefined;
        }
    }
}
function responseSucceededWithoutRedirect(response) {
    return response.statusCode == 200 && !response.redirected;
}
function mergeFormDataEntries(url, entries) {
    const searchParams = new URLSearchParams();
    for (const [name, value] of entries){
        if (value instanceof File) continue;
        searchParams.append(name, value);
    }
    url.search = searchParams.toString();
    return url;
}
class Snapshot {
    constructor(element){
        this.element = element;
    }
    get activeElement() {
        return this.element.ownerDocument.activeElement;
    }
    get children() {
        return [
            ...this.element.children
        ];
    }
    hasAnchor(anchor) {
        return this.getElementForAnchor(anchor) != null;
    }
    getElementForAnchor(anchor) {
        return anchor ? this.element.querySelector(`[id='${anchor}'], a[name='${anchor}']`) : null;
    }
    get isConnected() {
        return this.element.isConnected;
    }
    get firstAutofocusableElement() {
        const inertDisabledOrHidden = "[inert], :disabled, [hidden], details:not([open]), dialog:not([open])";
        for (const element of this.element.querySelectorAll("[autofocus]")){
            if (element.closest(inertDisabledOrHidden) == null) return element;
            else continue;
        }
        return null;
    }
    get permanentElements() {
        return queryPermanentElementsAll(this.element);
    }
    getPermanentElementById(id) {
        return getPermanentElementById(this.element, id);
    }
    getPermanentElementMapForSnapshot(snapshot) {
        const permanentElementMap = {};
        for (const currentPermanentElement of this.permanentElements){
            const { id  } = currentPermanentElement;
            const newPermanentElement = snapshot.getPermanentElementById(id);
            if (newPermanentElement) permanentElementMap[id] = [
                currentPermanentElement,
                newPermanentElement
            ];
        }
        return permanentElementMap;
    }
}
function getPermanentElementById(node, id) {
    return node.querySelector(`#${id}[data-turbo-permanent]`);
}
function queryPermanentElementsAll(node) {
    return node.querySelectorAll("[id][data-turbo-permanent]");
}
class FormSubmitObserver {
    constructor(delegate, eventTarget){
        this.started = false;
        this.submitCaptured = ()=>{
            this.eventTarget.removeEventListener("submit", this.submitBubbled, false);
            this.eventTarget.addEventListener("submit", this.submitBubbled, false);
        };
        this.submitBubbled = (event)=>{
            if (!event.defaultPrevented) {
                const form = event.target instanceof HTMLFormElement ? event.target : undefined;
                const submitter = event.submitter || undefined;
                if (form && submissionDoesNotDismissDialog(form, submitter) && submissionDoesNotTargetIFrame(form, submitter) && this.delegate.willSubmitForm(form, submitter)) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    this.delegate.formSubmitted(form, submitter);
                }
            }
        };
        this.delegate = delegate;
        this.eventTarget = eventTarget;
    }
    start() {
        if (!this.started) {
            this.eventTarget.addEventListener("submit", this.submitCaptured, true);
            this.started = true;
        }
    }
    stop() {
        if (this.started) {
            this.eventTarget.removeEventListener("submit", this.submitCaptured, true);
            this.started = false;
        }
    }
}
function submissionDoesNotDismissDialog(form, submitter) {
    const method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.getAttribute("method");
    return method != "dialog";
}
function submissionDoesNotTargetIFrame(form, submitter) {
    const target = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formtarget")) || form.target;
    for (const element of document.getElementsByName(target)){
        if (element instanceof HTMLIFrameElement) return false;
    }
    return true;
}
class View {
    constructor(delegate, element){
        this.resolveRenderPromise = (_value)=>{};
        this.resolveInterceptionPromise = (_value)=>{};
        this.delegate = delegate;
        this.element = element;
    }
    scrollToAnchor(anchor) {
        const element = this.snapshot.getElementForAnchor(anchor);
        if (element) {
            this.scrollToElement(element);
            this.focusElement(element);
        } else this.scrollToPosition({
            x: 0,
            y: 0
        });
    }
    scrollToAnchorFromLocation(location1) {
        this.scrollToAnchor(getAnchor(location1));
    }
    scrollToElement(element) {
        element.scrollIntoView();
    }
    focusElement(element) {
        if (element instanceof HTMLElement) {
            if (element.hasAttribute("tabindex")) element.focus();
            else {
                element.setAttribute("tabindex", "-1");
                element.focus();
                element.removeAttribute("tabindex");
            }
        }
    }
    scrollToPosition({ x , y  }) {
        this.scrollRoot.scrollTo(x, y);
    }
    scrollToTop() {
        this.scrollToPosition({
            x: 0,
            y: 0
        });
    }
    get scrollRoot() {
        return window;
    }
    async render(renderer) {
        const { isPreview , shouldRender , newSnapshot: snapshot  } = renderer;
        if (shouldRender) try {
            this.renderPromise = new Promise((resolve)=>this.resolveRenderPromise = resolve);
            this.renderer = renderer;
            await this.prepareToRenderSnapshot(renderer);
            const renderInterception = new Promise((resolve)=>this.resolveInterceptionPromise = resolve);
            const options = {
                resume: this.resolveInterceptionPromise,
                render: this.renderer.renderElement
            };
            const immediateRender = this.delegate.allowsImmediateRender(snapshot, options);
            if (!immediateRender) await renderInterception;
            await this.renderSnapshot(renderer);
            this.delegate.viewRenderedSnapshot(snapshot, isPreview);
            this.delegate.preloadOnLoadLinksForView(this.element);
            this.finishRenderingSnapshot(renderer);
        } finally{
            delete this.renderer;
            this.resolveRenderPromise(undefined);
            delete this.renderPromise;
        }
        else this.invalidate(renderer.reloadReason);
    }
    invalidate(reason) {
        this.delegate.viewInvalidated(reason);
    }
    async prepareToRenderSnapshot(renderer) {
        this.markAsPreview(renderer.isPreview);
        await renderer.prepareToRender();
    }
    markAsPreview(isPreview) {
        if (isPreview) this.element.setAttribute("data-turbo-preview", "");
        else this.element.removeAttribute("data-turbo-preview");
    }
    async renderSnapshot(renderer) {
        await renderer.render();
    }
    finishRenderingSnapshot(renderer) {
        renderer.finishRendering();
    }
}
class FrameView extends View {
    invalidate() {
        this.element.innerHTML = "";
    }
    get snapshot() {
        return new Snapshot(this.element);
    }
}
class LinkInterceptor {
    constructor(delegate, element){
        this.clickBubbled = (event)=>{
            if (this.respondsToEventTarget(event.target)) this.clickEvent = event;
            else delete this.clickEvent;
        };
        this.linkClicked = (event)=>{
            if (this.clickEvent && this.respondsToEventTarget(event.target) && event.target instanceof Element) {
                if (this.delegate.shouldInterceptLinkClick(event.target, event.detail.url, event.detail.originalEvent)) {
                    this.clickEvent.preventDefault();
                    event.preventDefault();
                    this.delegate.linkClickIntercepted(event.target, event.detail.url, event.detail.originalEvent);
                }
            }
            delete this.clickEvent;
        };
        this.willVisit = (_event)=>{
            delete this.clickEvent;
        };
        this.delegate = delegate;
        this.element = element;
    }
    start() {
        this.element.addEventListener("click", this.clickBubbled);
        document.addEventListener("turbo:click", this.linkClicked);
        document.addEventListener("turbo:before-visit", this.willVisit);
    }
    stop() {
        this.element.removeEventListener("click", this.clickBubbled);
        document.removeEventListener("turbo:click", this.linkClicked);
        document.removeEventListener("turbo:before-visit", this.willVisit);
    }
    respondsToEventTarget(target) {
        const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
        return element && element.closest("turbo-frame, html") == this.element;
    }
}
class LinkClickObserver {
    constructor(delegate, eventTarget){
        this.started = false;
        this.clickCaptured = ()=>{
            this.eventTarget.removeEventListener("click", this.clickBubbled, false);
            this.eventTarget.addEventListener("click", this.clickBubbled, false);
        };
        this.clickBubbled = (event)=>{
            if (event instanceof MouseEvent && this.clickEventIsSignificant(event)) {
                const target = event.composedPath && event.composedPath()[0] || event.target;
                const link = this.findLinkFromClickTarget(target);
                if (link && doesNotTargetIFrame(link)) {
                    const location1 = this.getLocationForLink(link);
                    if (this.delegate.willFollowLinkToLocation(link, location1, event)) {
                        event.preventDefault();
                        this.delegate.followedLinkToLocation(link, location1);
                    }
                }
            }
        };
        this.delegate = delegate;
        this.eventTarget = eventTarget;
    }
    start() {
        if (!this.started) {
            this.eventTarget.addEventListener("click", this.clickCaptured, true);
            this.started = true;
        }
    }
    stop() {
        if (this.started) {
            this.eventTarget.removeEventListener("click", this.clickCaptured, true);
            this.started = false;
        }
    }
    clickEventIsSignificant(event) {
        return !(event.target && event.target.isContentEditable || event.defaultPrevented || event.which > 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);
    }
    findLinkFromClickTarget(target) {
        if (target instanceof Element) return target.closest("a[href]:not([target^=_]):not([download])");
    }
    getLocationForLink(link) {
        return expandURL(link.getAttribute("href") || "");
    }
}
function doesNotTargetIFrame(anchor) {
    for (const element of document.getElementsByName(anchor.target)){
        if (element instanceof HTMLIFrameElement) return false;
    }
    return true;
}
class FormLinkClickObserver {
    constructor(delegate, element){
        this.delegate = delegate;
        this.linkInterceptor = new LinkClickObserver(this, element);
    }
    start() {
        this.linkInterceptor.start();
    }
    stop() {
        this.linkInterceptor.stop();
    }
    willFollowLinkToLocation(link, location1, originalEvent) {
        return this.delegate.willSubmitFormLinkToLocation(link, location1, originalEvent) && link.hasAttribute("data-turbo-method");
    }
    followedLinkToLocation(link, location1) {
        const action = location1.href;
        const form = document.createElement("form");
        form.setAttribute("data-turbo", "true");
        form.setAttribute("action", action);
        form.setAttribute("hidden", "");
        const method = link.getAttribute("data-turbo-method");
        if (method) form.setAttribute("method", method);
        const turboFrame = link.getAttribute("data-turbo-frame");
        if (turboFrame) form.setAttribute("data-turbo-frame", turboFrame);
        const turboAction = link.getAttribute("data-turbo-action");
        if (turboAction) form.setAttribute("data-turbo-action", turboAction);
        const turboConfirm = link.getAttribute("data-turbo-confirm");
        if (turboConfirm) form.setAttribute("data-turbo-confirm", turboConfirm);
        const turboStream = link.hasAttribute("data-turbo-stream");
        if (turboStream) form.setAttribute("data-turbo-stream", "");
        this.delegate.submittedFormLinkToLocation(link, location1, form);
        document.body.appendChild(form);
        form.addEventListener("turbo:submit-end", ()=>form.remove(), {
            once: true
        });
        requestAnimationFrame(()=>form.requestSubmit());
    }
}
class Bardo {
    constructor(delegate, permanentElementMap){
        this.delegate = delegate;
        this.permanentElementMap = permanentElementMap;
    }
    static preservingPermanentElements(delegate, permanentElementMap, callback) {
        const bardo = new this(delegate, permanentElementMap);
        bardo.enter();
        callback();
        bardo.leave();
    }
    enter() {
        for(const id in this.permanentElementMap){
            const [currentPermanentElement, newPermanentElement] = this.permanentElementMap[id];
            this.delegate.enteringBardo(currentPermanentElement, newPermanentElement);
            this.replaceNewPermanentElementWithPlaceholder(newPermanentElement);
        }
    }
    leave() {
        for(const id in this.permanentElementMap){
            const [currentPermanentElement] = this.permanentElementMap[id];
            this.replaceCurrentPermanentElementWithClone(currentPermanentElement);
            this.replacePlaceholderWithPermanentElement(currentPermanentElement);
            this.delegate.leavingBardo(currentPermanentElement);
        }
    }
    replaceNewPermanentElementWithPlaceholder(permanentElement) {
        const placeholder = createPlaceholderForPermanentElement(permanentElement);
        permanentElement.replaceWith(placeholder);
    }
    replaceCurrentPermanentElementWithClone(permanentElement) {
        const clone = permanentElement.cloneNode(true);
        permanentElement.replaceWith(clone);
    }
    replacePlaceholderWithPermanentElement(permanentElement) {
        const placeholder = this.getPlaceholderById(permanentElement.id);
        placeholder === null || placeholder === void 0 || placeholder.replaceWith(permanentElement);
    }
    getPlaceholderById(id) {
        return this.placeholders.find((element)=>element.content == id);
    }
    get placeholders() {
        return [
            ...document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]")
        ];
    }
}
function createPlaceholderForPermanentElement(permanentElement) {
    const element = document.createElement("meta");
    element.setAttribute("name", "turbo-permanent-placeholder");
    element.setAttribute("content", permanentElement.id);
    return element;
}
class Renderer {
    constructor(currentSnapshot, newSnapshot, renderElement, isPreview, willRender = true){
        this.activeElement = null;
        this.currentSnapshot = currentSnapshot;
        this.newSnapshot = newSnapshot;
        this.isPreview = isPreview;
        this.willRender = willRender;
        this.renderElement = renderElement;
        this.promise = new Promise((resolve, reject)=>this.resolvingFunctions = {
                resolve,
                reject
            });
    }
    get shouldRender() {
        return true;
    }
    get reloadReason() {
        return;
    }
    prepareToRender() {
        return;
    }
    finishRendering() {
        if (this.resolvingFunctions) {
            this.resolvingFunctions.resolve();
            delete this.resolvingFunctions;
        }
    }
    preservingPermanentElements(callback) {
        Bardo.preservingPermanentElements(this, this.permanentElementMap, callback);
    }
    focusFirstAutofocusableElement() {
        const element = this.connectedSnapshot.firstAutofocusableElement;
        if (elementIsFocusable(element)) element.focus();
    }
    enteringBardo(currentPermanentElement) {
        if (this.activeElement) return;
        if (currentPermanentElement.contains(this.currentSnapshot.activeElement)) this.activeElement = this.currentSnapshot.activeElement;
    }
    leavingBardo(currentPermanentElement) {
        if (currentPermanentElement.contains(this.activeElement) && this.activeElement instanceof HTMLElement) {
            this.activeElement.focus();
            this.activeElement = null;
        }
    }
    get connectedSnapshot() {
        return this.newSnapshot.isConnected ? this.newSnapshot : this.currentSnapshot;
    }
    get currentElement() {
        return this.currentSnapshot.element;
    }
    get newElement() {
        return this.newSnapshot.element;
    }
    get permanentElementMap() {
        return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot);
    }
}
function elementIsFocusable(element) {
    return element && typeof element.focus == "function";
}
class FrameRenderer extends Renderer {
    constructor(delegate, currentSnapshot, newSnapshot, renderElement, isPreview, willRender = true){
        super(currentSnapshot, newSnapshot, renderElement, isPreview, willRender);
        this.delegate = delegate;
    }
    static renderElement(currentElement, newElement) {
        var _a;
        const destinationRange = document.createRange();
        destinationRange.selectNodeContents(currentElement);
        destinationRange.deleteContents();
        const frameElement = newElement;
        const sourceRange = (_a = frameElement.ownerDocument) === null || _a === void 0 ? void 0 : _a.createRange();
        if (sourceRange) {
            sourceRange.selectNodeContents(frameElement);
            currentElement.appendChild(sourceRange.extractContents());
        }
    }
    get shouldRender() {
        return true;
    }
    async render() {
        await nextAnimationFrame();
        this.preservingPermanentElements(()=>{
            this.loadFrameElement();
        });
        this.scrollFrameIntoView();
        await nextAnimationFrame();
        this.focusFirstAutofocusableElement();
        await nextAnimationFrame();
        this.activateScriptElements();
    }
    loadFrameElement() {
        this.delegate.willRenderFrame(this.currentElement, this.newElement);
        this.renderElement(this.currentElement, this.newElement);
    }
    scrollFrameIntoView() {
        if (this.currentElement.autoscroll || this.newElement.autoscroll) {
            const element = this.currentElement.firstElementChild;
            const block = readScrollLogicalPosition(this.currentElement.getAttribute("data-autoscroll-block"), "end");
            const behavior = readScrollBehavior(this.currentElement.getAttribute("data-autoscroll-behavior"), "auto");
            if (element) {
                element.scrollIntoView({
                    block,
                    behavior
                });
                return true;
            }
        }
        return false;
    }
    activateScriptElements() {
        for (const inertScriptElement of this.newScriptElements){
            const activatedScriptElement = activateScriptElement(inertScriptElement);
            inertScriptElement.replaceWith(activatedScriptElement);
        }
    }
    get newScriptElements() {
        return this.currentElement.querySelectorAll("script");
    }
}
function readScrollLogicalPosition(value, defaultValue) {
    if (value == "end" || value == "start" || value == "center" || value == "nearest") return value;
    else return defaultValue;
}
function readScrollBehavior(value, defaultValue) {
    if (value == "auto" || value == "smooth") return value;
    else return defaultValue;
}
class ProgressBar {
    constructor(){
        this.hiding = false;
        this.value = 0;
        this.visible = false;
        this.trickle = ()=>{
            this.setValue(this.value + Math.random() / 100);
        };
        this.stylesheetElement = this.createStylesheetElement();
        this.progressElement = this.createProgressElement();
        this.installStylesheetElement();
        this.setValue(0);
    }
    static get defaultCSS() {
        return unindent`
      .turbo-progress-bar {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        height: 3px;
        background: #0076ff;
        z-index: 2147483647;
        transition:
          width ${ProgressBar.animationDuration}ms ease-out,
          opacity ${ProgressBar.animationDuration / 2}ms ${ProgressBar.animationDuration / 2}ms ease-in;
        transform: translate3d(0, 0, 0);
      }
    `;
    }
    show() {
        if (!this.visible) {
            this.visible = true;
            this.installProgressElement();
            this.startTrickling();
        }
    }
    hide() {
        if (this.visible && !this.hiding) {
            this.hiding = true;
            this.fadeProgressElement(()=>{
                this.uninstallProgressElement();
                this.stopTrickling();
                this.visible = false;
                this.hiding = false;
            });
        }
    }
    setValue(value) {
        this.value = value;
        this.refresh();
    }
    installStylesheetElement() {
        document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
    }
    installProgressElement() {
        this.progressElement.style.width = "0";
        this.progressElement.style.opacity = "1";
        document.documentElement.insertBefore(this.progressElement, document.body);
        this.refresh();
    }
    fadeProgressElement(callback) {
        this.progressElement.style.opacity = "0";
        setTimeout(callback, ProgressBar.animationDuration * 1.5);
    }
    uninstallProgressElement() {
        if (this.progressElement.parentNode) document.documentElement.removeChild(this.progressElement);
    }
    startTrickling() {
        if (!this.trickleInterval) this.trickleInterval = window.setInterval(this.trickle, ProgressBar.animationDuration);
    }
    stopTrickling() {
        window.clearInterval(this.trickleInterval);
        delete this.trickleInterval;
    }
    refresh() {
        requestAnimationFrame(()=>{
            this.progressElement.style.width = `${10 + this.value * 90}%`;
        });
    }
    createStylesheetElement() {
        const element = document.createElement("style");
        element.type = "text/css";
        element.textContent = ProgressBar.defaultCSS;
        if (this.cspNonce) element.nonce = this.cspNonce;
        return element;
    }
    createProgressElement() {
        const element = document.createElement("div");
        element.className = "turbo-progress-bar";
        return element;
    }
    get cspNonce() {
        return getMetaContent("csp-nonce");
    }
}
ProgressBar.animationDuration = 300;
class HeadSnapshot extends Snapshot {
    constructor(){
        super(...arguments);
        this.detailsByOuterHTML = this.children.filter((element)=>!elementIsNoscript(element)).map((element)=>elementWithoutNonce(element)).reduce((result, element)=>{
            const { outerHTML  } = element;
            const details = outerHTML in result ? result[outerHTML] : {
                type: elementType(element),
                tracked: elementIsTracked(element),
                elements: []
            };
            return Object.assign(Object.assign({}, result), {
                [outerHTML]: Object.assign(Object.assign({}, details), {
                    elements: [
                        ...details.elements,
                        element
                    ]
                })
            });
        }, {});
    }
    get trackedElementSignature() {
        return Object.keys(this.detailsByOuterHTML).filter((outerHTML)=>this.detailsByOuterHTML[outerHTML].tracked).join("");
    }
    getScriptElementsNotInSnapshot(snapshot) {
        return this.getElementsMatchingTypeNotInSnapshot("script", snapshot);
    }
    getStylesheetElementsNotInSnapshot(snapshot) {
        return this.getElementsMatchingTypeNotInSnapshot("stylesheet", snapshot);
    }
    getElementsMatchingTypeNotInSnapshot(matchedType, snapshot) {
        return Object.keys(this.detailsByOuterHTML).filter((outerHTML)=>!(outerHTML in snapshot.detailsByOuterHTML)).map((outerHTML)=>this.detailsByOuterHTML[outerHTML]).filter(({ type  })=>type == matchedType).map(({ elements: [element]  })=>element);
    }
    get provisionalElements() {
        return Object.keys(this.detailsByOuterHTML).reduce((result, outerHTML)=>{
            const { type , tracked , elements  } = this.detailsByOuterHTML[outerHTML];
            if (type == null && !tracked) return [
                ...result,
                ...elements
            ];
            else if (elements.length > 1) return [
                ...result,
                ...elements.slice(1)
            ];
            else return result;
        }, []);
    }
    getMetaValue(name) {
        const element = this.findMetaElementByName(name);
        return element ? element.getAttribute("content") : null;
    }
    findMetaElementByName(name) {
        return Object.keys(this.detailsByOuterHTML).reduce((result, outerHTML)=>{
            const { elements: [element]  } = this.detailsByOuterHTML[outerHTML];
            return elementIsMetaElementWithName(element, name) ? element : result;
        }, undefined);
    }
}
function elementType(element) {
    if (elementIsScript(element)) return "script";
    else if (elementIsStylesheet(element)) return "stylesheet";
}
function elementIsTracked(element) {
    return element.getAttribute("data-turbo-track") == "reload";
}
function elementIsScript(element) {
    const tagName = element.localName;
    return tagName == "script";
}
function elementIsNoscript(element) {
    const tagName = element.localName;
    return tagName == "noscript";
}
function elementIsStylesheet(element) {
    const tagName = element.localName;
    return tagName == "style" || tagName == "link" && element.getAttribute("rel") == "stylesheet";
}
function elementIsMetaElementWithName(element, name) {
    const tagName = element.localName;
    return tagName == "meta" && element.getAttribute("name") == name;
}
function elementWithoutNonce(element) {
    if (element.hasAttribute("nonce")) element.setAttribute("nonce", "");
    return element;
}
class PageSnapshot extends Snapshot {
    constructor(element, headSnapshot){
        super(element);
        this.headSnapshot = headSnapshot;
    }
    static fromHTMLString(html = "") {
        return this.fromDocument(parseHTMLDocument(html));
    }
    static fromElement(element) {
        return this.fromDocument(element.ownerDocument);
    }
    static fromDocument({ head , body  }) {
        return new this(body, new HeadSnapshot(head));
    }
    clone() {
        const clonedElement = this.element.cloneNode(true);
        const selectElements = this.element.querySelectorAll("select");
        const clonedSelectElements = clonedElement.querySelectorAll("select");
        for (const [index, source] of selectElements.entries()){
            const clone = clonedSelectElements[index];
            for (const option of clone.selectedOptions)option.selected = false;
            for (const option of source.selectedOptions)clone.options[option.index].selected = true;
        }
        for (const clonedPasswordInput of clonedElement.querySelectorAll('input[type="password"]'))clonedPasswordInput.value = "";
        return new PageSnapshot(clonedElement, this.headSnapshot);
    }
    get headElement() {
        return this.headSnapshot.element;
    }
    get rootLocation() {
        var _a;
        const root = (_a = this.getSetting("root")) !== null && _a !== void 0 ? _a : "/";
        return expandURL(root);
    }
    get cacheControlValue() {
        return this.getSetting("cache-control");
    }
    get isPreviewable() {
        return this.cacheControlValue != "no-preview";
    }
    get isCacheable() {
        return this.cacheControlValue != "no-cache";
    }
    get isVisitable() {
        return this.getSetting("visit-control") != "reload";
    }
    getSetting(name) {
        return this.headSnapshot.getMetaValue(`turbo-${name}`);
    }
}
var TimingMetric;
(function(TimingMetric) {
    TimingMetric["visitStart"] = "visitStart";
    TimingMetric["requestStart"] = "requestStart";
    TimingMetric["requestEnd"] = "requestEnd";
    TimingMetric["visitEnd"] = "visitEnd";
})(TimingMetric || (TimingMetric = {}));
var VisitState;
(function(VisitState) {
    VisitState["initialized"] = "initialized";
    VisitState["started"] = "started";
    VisitState["canceled"] = "canceled";
    VisitState["failed"] = "failed";
    VisitState["completed"] = "completed";
})(VisitState || (VisitState = {}));
const defaultOptions = {
    action: "advance",
    historyChanged: false,
    visitCachedSnapshot: ()=>{},
    willRender: true,
    updateHistory: true,
    shouldCacheSnapshot: true,
    acceptsStreamResponse: false
};
var SystemStatusCode;
(function(SystemStatusCode) {
    SystemStatusCode[SystemStatusCode["networkFailure"] = 0] = "networkFailure";
    SystemStatusCode[SystemStatusCode["timeoutFailure"] = -1] = "timeoutFailure";
    SystemStatusCode[SystemStatusCode["contentTypeMismatch"] = -2] = "contentTypeMismatch";
})(SystemStatusCode || (SystemStatusCode = {}));
class Visit {
    constructor(delegate, location1, restorationIdentifier, options = {}){
        this.identifier = uuid();
        this.timingMetrics = {};
        this.followedRedirect = false;
        this.historyChanged = false;
        this.scrolled = false;
        this.shouldCacheSnapshot = true;
        this.acceptsStreamResponse = false;
        this.snapshotCached = false;
        this.state = VisitState.initialized;
        this.delegate = delegate;
        this.location = location1;
        this.restorationIdentifier = restorationIdentifier || uuid();
        const { action , historyChanged , referrer , snapshot , snapshotHTML , response , visitCachedSnapshot , willRender , updateHistory , shouldCacheSnapshot , acceptsStreamResponse  } = Object.assign(Object.assign({}, defaultOptions), options);
        this.action = action;
        this.historyChanged = historyChanged;
        this.referrer = referrer;
        this.snapshot = snapshot;
        this.snapshotHTML = snapshotHTML;
        this.response = response;
        this.isSamePage = this.delegate.locationWithActionIsSamePage(this.location, this.action);
        this.visitCachedSnapshot = visitCachedSnapshot;
        this.willRender = willRender;
        this.updateHistory = updateHistory;
        this.scrolled = !willRender;
        this.shouldCacheSnapshot = shouldCacheSnapshot;
        this.acceptsStreamResponse = acceptsStreamResponse;
    }
    get adapter() {
        return this.delegate.adapter;
    }
    get view() {
        return this.delegate.view;
    }
    get history() {
        return this.delegate.history;
    }
    get restorationData() {
        return this.history.getRestorationDataForIdentifier(this.restorationIdentifier);
    }
    get silent() {
        return this.isSamePage;
    }
    start() {
        if (this.state == VisitState.initialized) {
            this.recordTimingMetric(TimingMetric.visitStart);
            this.state = VisitState.started;
            this.adapter.visitStarted(this);
            this.delegate.visitStarted(this);
        }
    }
    cancel() {
        if (this.state == VisitState.started) {
            if (this.request) this.request.cancel();
            this.cancelRender();
            this.state = VisitState.canceled;
        }
    }
    complete() {
        if (this.state == VisitState.started) {
            this.recordTimingMetric(TimingMetric.visitEnd);
            this.state = VisitState.completed;
            this.followRedirect();
            if (!this.followedRedirect) {
                this.adapter.visitCompleted(this);
                this.delegate.visitCompleted(this);
            }
        }
    }
    fail() {
        if (this.state == VisitState.started) {
            this.state = VisitState.failed;
            this.adapter.visitFailed(this);
        }
    }
    changeHistory() {
        var _a;
        if (!this.historyChanged && this.updateHistory) {
            const actionForHistory = this.location.href === ((_a = this.referrer) === null || _a === void 0 ? void 0 : _a.href) ? "replace" : this.action;
            const method = getHistoryMethodForAction(actionForHistory);
            this.history.update(method, this.location, this.restorationIdentifier);
            this.historyChanged = true;
        }
    }
    issueRequest() {
        if (this.hasPreloadedResponse()) this.simulateRequest();
        else if (this.shouldIssueRequest() && !this.request) {
            this.request = new FetchRequest(this, FetchMethod.get, this.location);
            this.request.perform();
        }
    }
    simulateRequest() {
        if (this.response) {
            this.startRequest();
            this.recordResponse();
            this.finishRequest();
        }
    }
    startRequest() {
        this.recordTimingMetric(TimingMetric.requestStart);
        this.adapter.visitRequestStarted(this);
    }
    recordResponse(response = this.response) {
        this.response = response;
        if (response) {
            const { statusCode  } = response;
            if (isSuccessful(statusCode)) this.adapter.visitRequestCompleted(this);
            else this.adapter.visitRequestFailedWithStatusCode(this, statusCode);
        }
    }
    finishRequest() {
        this.recordTimingMetric(TimingMetric.requestEnd);
        this.adapter.visitRequestFinished(this);
    }
    loadResponse() {
        if (this.response) {
            const { statusCode , responseHTML  } = this.response;
            this.render(async ()=>{
                if (this.shouldCacheSnapshot) this.cacheSnapshot();
                if (this.view.renderPromise) await this.view.renderPromise;
                if (isSuccessful(statusCode) && responseHTML != null) {
                    await this.view.renderPage(PageSnapshot.fromHTMLString(responseHTML), false, this.willRender, this);
                    this.performScroll();
                    this.adapter.visitRendered(this);
                    this.complete();
                } else {
                    await this.view.renderError(PageSnapshot.fromHTMLString(responseHTML), this);
                    this.adapter.visitRendered(this);
                    this.fail();
                }
            });
        }
    }
    getCachedSnapshot() {
        const snapshot = this.view.getCachedSnapshotForLocation(this.location) || this.getPreloadedSnapshot();
        if (snapshot && (!getAnchor(this.location) || snapshot.hasAnchor(getAnchor(this.location)))) {
            if (this.action == "restore" || snapshot.isPreviewable) return snapshot;
        }
    }
    getPreloadedSnapshot() {
        if (this.snapshotHTML) return PageSnapshot.fromHTMLString(this.snapshotHTML);
    }
    hasCachedSnapshot() {
        return this.getCachedSnapshot() != null;
    }
    loadCachedSnapshot() {
        const snapshot = this.getCachedSnapshot();
        if (snapshot) {
            const isPreview = this.shouldIssueRequest();
            this.render(async ()=>{
                this.cacheSnapshot();
                if (this.isSamePage) this.adapter.visitRendered(this);
                else {
                    if (this.view.renderPromise) await this.view.renderPromise;
                    await this.view.renderPage(snapshot, isPreview, this.willRender, this);
                    this.performScroll();
                    this.adapter.visitRendered(this);
                    if (!isPreview) this.complete();
                }
            });
        }
    }
    followRedirect() {
        var _a;
        if (this.redirectedToLocation && !this.followedRedirect && ((_a = this.response) === null || _a === void 0 ? void 0 : _a.redirected)) {
            this.adapter.visitProposedToLocation(this.redirectedToLocation, {
                action: "replace",
                response: this.response
            });
            this.followedRedirect = true;
        }
    }
    goToSamePageAnchor() {
        if (this.isSamePage) this.render(async ()=>{
            this.cacheSnapshot();
            this.performScroll();
            this.changeHistory();
            this.adapter.visitRendered(this);
        });
    }
    prepareHeadersForRequest(headers, request) {
        if (this.acceptsStreamResponse) request.acceptResponseType(StreamMessage.contentType);
    }
    requestStarted() {
        this.startRequest();
    }
    requestPreventedHandlingResponse(_request, _response) {}
    async requestSucceededWithResponse(request, response) {
        const responseHTML = await response.responseHTML;
        const { redirected , statusCode  } = response;
        if (responseHTML == undefined) this.recordResponse({
            statusCode: SystemStatusCode.contentTypeMismatch,
            redirected
        });
        else {
            this.redirectedToLocation = response.redirected ? response.location : undefined;
            this.recordResponse({
                statusCode: statusCode,
                responseHTML,
                redirected
            });
        }
    }
    async requestFailedWithResponse(request, response) {
        const responseHTML = await response.responseHTML;
        const { redirected , statusCode  } = response;
        if (responseHTML == undefined) this.recordResponse({
            statusCode: SystemStatusCode.contentTypeMismatch,
            redirected
        });
        else this.recordResponse({
            statusCode: statusCode,
            responseHTML,
            redirected
        });
    }
    requestErrored(_request, _error) {
        this.recordResponse({
            statusCode: SystemStatusCode.networkFailure,
            redirected: false
        });
    }
    requestFinished() {
        this.finishRequest();
    }
    performScroll() {
        if (!this.scrolled && !this.view.forceReloaded) {
            if (this.action == "restore") this.scrollToRestoredPosition() || this.scrollToAnchor() || this.view.scrollToTop();
            else this.scrollToAnchor() || this.view.scrollToTop();
            if (this.isSamePage) this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation, this.location);
            this.scrolled = true;
        }
    }
    scrollToRestoredPosition() {
        const { scrollPosition  } = this.restorationData;
        if (scrollPosition) {
            this.view.scrollToPosition(scrollPosition);
            return true;
        }
    }
    scrollToAnchor() {
        const anchor = getAnchor(this.location);
        if (anchor != null) {
            this.view.scrollToAnchor(anchor);
            return true;
        }
    }
    recordTimingMetric(metric) {
        this.timingMetrics[metric] = new Date().getTime();
    }
    getTimingMetrics() {
        return Object.assign({}, this.timingMetrics);
    }
    getHistoryMethodForAction(action) {
        switch(action){
            case "replace":
                return history.replaceState;
            case "advance":
            case "restore":
                return history.pushState;
        }
    }
    hasPreloadedResponse() {
        return typeof this.response == "object";
    }
    shouldIssueRequest() {
        if (this.isSamePage) return false;
        else if (this.action == "restore") return !this.hasCachedSnapshot();
        else return this.willRender;
    }
    cacheSnapshot() {
        if (!this.snapshotCached) {
            this.view.cacheSnapshot(this.snapshot).then((snapshot)=>snapshot && this.visitCachedSnapshot(snapshot));
            this.snapshotCached = true;
        }
    }
    async render(callback) {
        this.cancelRender();
        await new Promise((resolve)=>{
            this.frame = requestAnimationFrame(()=>resolve());
        });
        await callback();
        delete this.frame;
    }
    cancelRender() {
        if (this.frame) {
            cancelAnimationFrame(this.frame);
            delete this.frame;
        }
    }
}
function isSuccessful(statusCode) {
    return statusCode >= 200 && statusCode < 300;
}
class BrowserAdapter {
    constructor(session){
        this.progressBar = new ProgressBar();
        this.showProgressBar = ()=>{
            this.progressBar.show();
        };
        this.session = session;
    }
    visitProposedToLocation(location1, options) {
        this.navigator.startVisit(location1, (options === null || options === void 0 ? void 0 : options.restorationIdentifier) || uuid(), options);
    }
    visitStarted(visit) {
        this.location = visit.location;
        visit.loadCachedSnapshot();
        visit.issueRequest();
        visit.goToSamePageAnchor();
    }
    visitRequestStarted(visit) {
        this.progressBar.setValue(0);
        if (visit.hasCachedSnapshot() || visit.action != "restore") this.showVisitProgressBarAfterDelay();
        else this.showProgressBar();
    }
    visitRequestCompleted(visit) {
        visit.loadResponse();
    }
    visitRequestFailedWithStatusCode(visit, statusCode) {
        switch(statusCode){
            case SystemStatusCode.networkFailure:
            case SystemStatusCode.timeoutFailure:
            case SystemStatusCode.contentTypeMismatch:
                return this.reload({
                    reason: "request_failed",
                    context: {
                        statusCode
                    }
                });
            default:
                return visit.loadResponse();
        }
    }
    visitRequestFinished(_visit) {
        this.progressBar.setValue(1);
        this.hideVisitProgressBar();
    }
    visitCompleted(_visit) {}
    pageInvalidated(reason) {
        this.reload(reason);
    }
    visitFailed(_visit) {}
    visitRendered(_visit) {}
    formSubmissionStarted(_formSubmission) {
        this.progressBar.setValue(0);
        this.showFormProgressBarAfterDelay();
    }
    formSubmissionFinished(_formSubmission) {
        this.progressBar.setValue(1);
        this.hideFormProgressBar();
    }
    showVisitProgressBarAfterDelay() {
        this.visitProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
    }
    hideVisitProgressBar() {
        this.progressBar.hide();
        if (this.visitProgressBarTimeout != null) {
            window.clearTimeout(this.visitProgressBarTimeout);
            delete this.visitProgressBarTimeout;
        }
    }
    showFormProgressBarAfterDelay() {
        if (this.formProgressBarTimeout == null) this.formProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
    }
    hideFormProgressBar() {
        this.progressBar.hide();
        if (this.formProgressBarTimeout != null) {
            window.clearTimeout(this.formProgressBarTimeout);
            delete this.formProgressBarTimeout;
        }
    }
    reload(reason) {
        var _a;
        dispatch("turbo:reload", {
            detail: reason
        });
        window.location.href = ((_a = this.location) === null || _a === void 0 ? void 0 : _a.toString()) || window.location.href;
    }
    get navigator() {
        return this.session.navigator;
    }
}
class CacheObserver {
    constructor(){
        this.started = false;
        this.removeStaleElements = (_event)=>{
            const staleElements = [
                ...document.querySelectorAll('[data-turbo-cache="false"]')
            ];
            for (const element of staleElements)element.remove();
        };
    }
    start() {
        if (!this.started) {
            this.started = true;
            addEventListener("turbo:before-cache", this.removeStaleElements, false);
        }
    }
    stop() {
        if (this.started) {
            this.started = false;
            removeEventListener("turbo:before-cache", this.removeStaleElements, false);
        }
    }
}
class FrameRedirector {
    constructor(session, element){
        this.session = session;
        this.element = element;
        this.linkInterceptor = new LinkInterceptor(this, element);
        this.formSubmitObserver = new FormSubmitObserver(this, element);
    }
    start() {
        this.linkInterceptor.start();
        this.formSubmitObserver.start();
    }
    stop() {
        this.linkInterceptor.stop();
        this.formSubmitObserver.stop();
    }
    shouldInterceptLinkClick(element, _location, _event) {
        return this.shouldRedirect(element);
    }
    linkClickIntercepted(element, url, event) {
        const frame = this.findFrameElement(element);
        if (frame) frame.delegate.linkClickIntercepted(element, url, event);
    }
    willSubmitForm(element, submitter) {
        return element.closest("turbo-frame") == null && this.shouldSubmit(element, submitter) && this.shouldRedirect(element, submitter);
    }
    formSubmitted(element, submitter) {
        const frame = this.findFrameElement(element, submitter);
        if (frame) frame.delegate.formSubmitted(element, submitter);
    }
    shouldSubmit(form, submitter) {
        var _a;
        const action = getAction(form, submitter);
        const meta = this.element.ownerDocument.querySelector(`meta[name="turbo-root"]`);
        const rootLocation = expandURL((_a = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _a !== void 0 ? _a : "/");
        return this.shouldRedirect(form, submitter) && locationIsVisitable(action, rootLocation);
    }
    shouldRedirect(element, submitter) {
        const isNavigatable = element instanceof HTMLFormElement ? this.session.submissionIsNavigatable(element, submitter) : this.session.elementIsNavigatable(element);
        if (isNavigatable) {
            const frame = this.findFrameElement(element, submitter);
            return frame ? frame != element.closest("turbo-frame") : false;
        } else return false;
    }
    findFrameElement(element, submitter) {
        const id = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("data-turbo-frame")) || element.getAttribute("data-turbo-frame");
        if (id && id != "_top") {
            const frame = this.element.querySelector(`#${id}:not([disabled])`);
            if (frame instanceof FrameElement) return frame;
        }
    }
}
class History {
    constructor(delegate){
        this.restorationIdentifier = uuid();
        this.restorationData = {};
        this.started = false;
        this.pageLoaded = false;
        this.onPopState = (event)=>{
            if (this.shouldHandlePopState()) {
                const { turbo  } = event.state || {};
                if (turbo) {
                    this.location = new URL(window.location.href);
                    const { restorationIdentifier  } = turbo;
                    this.restorationIdentifier = restorationIdentifier;
                    this.delegate.historyPoppedToLocationWithRestorationIdentifier(this.location, restorationIdentifier);
                }
            }
        };
        this.onPageLoad = async (_event)=>{
            await nextMicrotask();
            this.pageLoaded = true;
        };
        this.delegate = delegate;
    }
    start() {
        if (!this.started) {
            addEventListener("popstate", this.onPopState, false);
            addEventListener("load", this.onPageLoad, false);
            this.started = true;
            this.replace(new URL(window.location.href));
        }
    }
    stop() {
        if (this.started) {
            removeEventListener("popstate", this.onPopState, false);
            removeEventListener("load", this.onPageLoad, false);
            this.started = false;
        }
    }
    push(location1, restorationIdentifier) {
        this.update(history.pushState, location1, restorationIdentifier);
    }
    replace(location1, restorationIdentifier) {
        this.update(history.replaceState, location1, restorationIdentifier);
    }
    update(method, location1, restorationIdentifier = uuid()) {
        const state = {
            turbo: {
                restorationIdentifier
            }
        };
        method.call(history, state, "", location1.href);
        this.location = location1;
        this.restorationIdentifier = restorationIdentifier;
    }
    getRestorationDataForIdentifier(restorationIdentifier) {
        return this.restorationData[restorationIdentifier] || {};
    }
    updateRestorationData(additionalData) {
        const { restorationIdentifier  } = this;
        const restorationData = this.restorationData[restorationIdentifier];
        this.restorationData[restorationIdentifier] = Object.assign(Object.assign({}, restorationData), additionalData);
    }
    assumeControlOfScrollRestoration() {
        var _a;
        if (!this.previousScrollRestoration) {
            this.previousScrollRestoration = (_a = history.scrollRestoration) !== null && _a !== void 0 ? _a : "auto";
            history.scrollRestoration = "manual";
        }
    }
    relinquishControlOfScrollRestoration() {
        if (this.previousScrollRestoration) {
            history.scrollRestoration = this.previousScrollRestoration;
            delete this.previousScrollRestoration;
        }
    }
    shouldHandlePopState() {
        return this.pageIsLoaded();
    }
    pageIsLoaded() {
        return this.pageLoaded || document.readyState == "complete";
    }
}
class Navigator {
    constructor(delegate){
        this.delegate = delegate;
    }
    proposeVisit(location1, options = {}) {
        if (this.delegate.allowsVisitingLocationWithAction(location1, options.action)) {
            if (locationIsVisitable(location1, this.view.snapshot.rootLocation)) this.delegate.visitProposedToLocation(location1, options);
            else window.location.href = location1.toString();
        }
    }
    startVisit(locatable, restorationIdentifier, options = {}) {
        this.stop();
        this.currentVisit = new Visit(this, expandURL(locatable), restorationIdentifier, Object.assign({
            referrer: this.location
        }, options));
        this.currentVisit.start();
    }
    submitForm(form, submitter) {
        this.stop();
        this.formSubmission = new FormSubmission(this, form, submitter, true);
        this.formSubmission.start();
    }
    stop() {
        if (this.formSubmission) {
            this.formSubmission.stop();
            delete this.formSubmission;
        }
        if (this.currentVisit) {
            this.currentVisit.cancel();
            delete this.currentVisit;
        }
    }
    get adapter() {
        return this.delegate.adapter;
    }
    get view() {
        return this.delegate.view;
    }
    get history() {
        return this.delegate.history;
    }
    formSubmissionStarted(formSubmission) {
        if (typeof this.adapter.formSubmissionStarted === "function") this.adapter.formSubmissionStarted(formSubmission);
    }
    async formSubmissionSucceededWithResponse(formSubmission, fetchResponse) {
        if (formSubmission == this.formSubmission) {
            const responseHTML = await fetchResponse.responseHTML;
            if (responseHTML) {
                const shouldCacheSnapshot = formSubmission.method == FetchMethod.get;
                if (!shouldCacheSnapshot) this.view.clearSnapshotCache();
                const { statusCode , redirected  } = fetchResponse;
                const action = this.getActionForFormSubmission(formSubmission);
                const visitOptions = {
                    action,
                    shouldCacheSnapshot,
                    response: {
                        statusCode,
                        responseHTML,
                        redirected
                    }
                };
                this.proposeVisit(fetchResponse.location, visitOptions);
            }
        }
    }
    async formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
        const responseHTML = await fetchResponse.responseHTML;
        if (responseHTML) {
            const snapshot = PageSnapshot.fromHTMLString(responseHTML);
            if (fetchResponse.serverError) await this.view.renderError(snapshot, this.currentVisit);
            else await this.view.renderPage(snapshot, false, true, this.currentVisit);
            this.view.scrollToTop();
            this.view.clearSnapshotCache();
        }
    }
    formSubmissionErrored(formSubmission, error) {
        console.error(error);
    }
    formSubmissionFinished(formSubmission) {
        if (typeof this.adapter.formSubmissionFinished === "function") this.adapter.formSubmissionFinished(formSubmission);
    }
    visitStarted(visit) {
        this.delegate.visitStarted(visit);
    }
    visitCompleted(visit) {
        this.delegate.visitCompleted(visit);
    }
    locationWithActionIsSamePage(location1, action) {
        const anchor = getAnchor(location1);
        const currentAnchor = getAnchor(this.view.lastRenderedLocation);
        const isRestorationToTop = action === "restore" && typeof anchor === "undefined";
        return action !== "replace" && getRequestURL(location1) === getRequestURL(this.view.lastRenderedLocation) && (isRestorationToTop || anchor != null && anchor !== currentAnchor);
    }
    visitScrolledToSamePageLocation(oldURL, newURL) {
        this.delegate.visitScrolledToSamePageLocation(oldURL, newURL);
    }
    get location() {
        return this.history.location;
    }
    get restorationIdentifier() {
        return this.history.restorationIdentifier;
    }
    getActionForFormSubmission(formSubmission) {
        const { formElement , submitter  } = formSubmission;
        const action = getAttribute("data-turbo-action", submitter, formElement);
        return isAction(action) ? action : "advance";
    }
}
var PageStage;
(function(PageStage) {
    PageStage[PageStage["initial"] = 0] = "initial";
    PageStage[PageStage["loading"] = 1] = "loading";
    PageStage[PageStage["interactive"] = 2] = "interactive";
    PageStage[PageStage["complete"] = 3] = "complete";
})(PageStage || (PageStage = {}));
class PageObserver {
    constructor(delegate){
        this.stage = PageStage.initial;
        this.started = false;
        this.interpretReadyState = ()=>{
            const { readyState  } = this;
            if (readyState == "interactive") this.pageIsInteractive();
            else if (readyState == "complete") this.pageIsComplete();
        };
        this.pageWillUnload = ()=>{
            this.delegate.pageWillUnload();
        };
        this.delegate = delegate;
    }
    start() {
        if (!this.started) {
            if (this.stage == PageStage.initial) this.stage = PageStage.loading;
            document.addEventListener("readystatechange", this.interpretReadyState, false);
            addEventListener("pagehide", this.pageWillUnload, false);
            this.started = true;
        }
    }
    stop() {
        if (this.started) {
            document.removeEventListener("readystatechange", this.interpretReadyState, false);
            removeEventListener("pagehide", this.pageWillUnload, false);
            this.started = false;
        }
    }
    pageIsInteractive() {
        if (this.stage == PageStage.loading) {
            this.stage = PageStage.interactive;
            this.delegate.pageBecameInteractive();
        }
    }
    pageIsComplete() {
        this.pageIsInteractive();
        if (this.stage == PageStage.interactive) {
            this.stage = PageStage.complete;
            this.delegate.pageLoaded();
        }
    }
    get readyState() {
        return document.readyState;
    }
}
class ScrollObserver {
    constructor(delegate){
        this.started = false;
        this.onScroll = ()=>{
            this.updatePosition({
                x: window.pageXOffset,
                y: window.pageYOffset
            });
        };
        this.delegate = delegate;
    }
    start() {
        if (!this.started) {
            addEventListener("scroll", this.onScroll, false);
            this.onScroll();
            this.started = true;
        }
    }
    stop() {
        if (this.started) {
            removeEventListener("scroll", this.onScroll, false);
            this.started = false;
        }
    }
    updatePosition(position) {
        this.delegate.scrollPositionChanged(position);
    }
}
class StreamMessageRenderer {
    render({ fragment  }) {
        Bardo.preservingPermanentElements(this, getPermanentElementMapForFragment(fragment), ()=>document.documentElement.appendChild(fragment));
    }
    enteringBardo(currentPermanentElement, newPermanentElement) {
        newPermanentElement.replaceWith(currentPermanentElement.cloneNode(true));
    }
    leavingBardo() {}
}
function getPermanentElementMapForFragment(fragment) {
    const permanentElementsInDocument = queryPermanentElementsAll(document.documentElement);
    const permanentElementMap = {};
    for (const permanentElementInDocument of permanentElementsInDocument){
        const { id  } = permanentElementInDocument;
        for (const streamElement of fragment.querySelectorAll("turbo-stream")){
            const elementInStream = getPermanentElementById(streamElement.templateElement.content, id);
            if (elementInStream) permanentElementMap[id] = [
                permanentElementInDocument,
                elementInStream
            ];
        }
    }
    return permanentElementMap;
}
class StreamObserver {
    constructor(delegate){
        this.sources = new Set();
        this.started = false;
        this.inspectFetchResponse = (event)=>{
            const response = fetchResponseFromEvent(event);
            if (response && fetchResponseIsStream(response)) {
                event.preventDefault();
                this.receiveMessageResponse(response);
            }
        };
        this.receiveMessageEvent = (event)=>{
            if (this.started && typeof event.data == "string") this.receiveMessageHTML(event.data);
        };
        this.delegate = delegate;
    }
    start() {
        if (!this.started) {
            this.started = true;
            addEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
        }
    }
    stop() {
        if (this.started) {
            this.started = false;
            removeEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
        }
    }
    connectStreamSource(source) {
        if (!this.streamSourceIsConnected(source)) {
            this.sources.add(source);
            source.addEventListener("message", this.receiveMessageEvent, false);
        }
    }
    disconnectStreamSource(source) {
        if (this.streamSourceIsConnected(source)) {
            this.sources.delete(source);
            source.removeEventListener("message", this.receiveMessageEvent, false);
        }
    }
    streamSourceIsConnected(source) {
        return this.sources.has(source);
    }
    async receiveMessageResponse(response) {
        const html = await response.responseHTML;
        if (html) this.receiveMessageHTML(html);
    }
    receiveMessageHTML(html) {
        this.delegate.receivedMessageFromStream(StreamMessage.wrap(html));
    }
}
function fetchResponseFromEvent(event) {
    var _a;
    const fetchResponse = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.fetchResponse;
    if (fetchResponse instanceof FetchResponse) return fetchResponse;
}
function fetchResponseIsStream(response) {
    var _a;
    const contentType = (_a = response.contentType) !== null && _a !== void 0 ? _a : "";
    return contentType.startsWith(StreamMessage.contentType);
}
class ErrorRenderer extends Renderer {
    static renderElement(currentElement, newElement) {
        const { documentElement , body  } = document;
        documentElement.replaceChild(newElement, body);
    }
    async render() {
        this.replaceHeadAndBody();
        this.activateScriptElements();
    }
    replaceHeadAndBody() {
        const { documentElement , head  } = document;
        documentElement.replaceChild(this.newHead, head);
        this.renderElement(this.currentElement, this.newElement);
    }
    activateScriptElements() {
        for (const replaceableElement of this.scriptElements){
            const parentNode = replaceableElement.parentNode;
            if (parentNode) {
                const element = activateScriptElement(replaceableElement);
                parentNode.replaceChild(element, replaceableElement);
            }
        }
    }
    get newHead() {
        return this.newSnapshot.headSnapshot.element;
    }
    get scriptElements() {
        return document.documentElement.querySelectorAll("script");
    }
}
class PageRenderer extends Renderer {
    static renderElement(currentElement, newElement) {
        if (document.body && newElement instanceof HTMLBodyElement) document.body.replaceWith(newElement);
        else document.documentElement.appendChild(newElement);
    }
    get shouldRender() {
        return this.newSnapshot.isVisitable && this.trackedElementsAreIdentical;
    }
    get reloadReason() {
        if (!this.newSnapshot.isVisitable) return {
            reason: "turbo_visit_control_is_reload"
        };
        if (!this.trackedElementsAreIdentical) return {
            reason: "tracked_element_mismatch"
        };
    }
    async prepareToRender() {
        await this.mergeHead();
    }
    async render() {
        if (this.willRender) this.replaceBody();
    }
    finishRendering() {
        super.finishRendering();
        if (!this.isPreview) this.focusFirstAutofocusableElement();
    }
    get currentHeadSnapshot() {
        return this.currentSnapshot.headSnapshot;
    }
    get newHeadSnapshot() {
        return this.newSnapshot.headSnapshot;
    }
    get newElement() {
        return this.newSnapshot.element;
    }
    async mergeHead() {
        const newStylesheetElements = this.copyNewHeadStylesheetElements();
        this.copyNewHeadScriptElements();
        this.removeCurrentHeadProvisionalElements();
        this.copyNewHeadProvisionalElements();
        await newStylesheetElements;
    }
    replaceBody() {
        this.preservingPermanentElements(()=>{
            this.activateNewBody();
            this.assignNewBody();
        });
    }
    get trackedElementsAreIdentical() {
        return this.currentHeadSnapshot.trackedElementSignature == this.newHeadSnapshot.trackedElementSignature;
    }
    async copyNewHeadStylesheetElements() {
        const loadingElements = [];
        for (const element of this.newHeadStylesheetElements){
            loadingElements.push(waitForLoad(element));
            document.head.appendChild(element);
        }
        await Promise.all(loadingElements);
    }
    copyNewHeadScriptElements() {
        for (const element of this.newHeadScriptElements)document.head.appendChild(activateScriptElement(element));
    }
    removeCurrentHeadProvisionalElements() {
        for (const element of this.currentHeadProvisionalElements)document.head.removeChild(element);
    }
    copyNewHeadProvisionalElements() {
        for (const element of this.newHeadProvisionalElements)document.head.appendChild(element);
    }
    activateNewBody() {
        document.adoptNode(this.newElement);
        this.activateNewBodyScriptElements();
    }
    activateNewBodyScriptElements() {
        for (const inertScriptElement of this.newBodyScriptElements){
            const activatedScriptElement = activateScriptElement(inertScriptElement);
            inertScriptElement.replaceWith(activatedScriptElement);
        }
    }
    assignNewBody() {
        this.renderElement(this.currentElement, this.newElement);
    }
    get newHeadStylesheetElements() {
        return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot);
    }
    get newHeadScriptElements() {
        return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot);
    }
    get currentHeadProvisionalElements() {
        return this.currentHeadSnapshot.provisionalElements;
    }
    get newHeadProvisionalElements() {
        return this.newHeadSnapshot.provisionalElements;
    }
    get newBodyScriptElements() {
        return this.newElement.querySelectorAll("script");
    }
}
class SnapshotCache {
    constructor(size){
        this.keys = [];
        this.snapshots = {};
        this.size = size;
    }
    has(location1) {
        return toCacheKey(location1) in this.snapshots;
    }
    get(location1) {
        if (this.has(location1)) {
            const snapshot = this.read(location1);
            this.touch(location1);
            return snapshot;
        }
    }
    put(location1, snapshot) {
        this.write(location1, snapshot);
        this.touch(location1);
        return snapshot;
    }
    clear() {
        this.snapshots = {};
    }
    read(location1) {
        return this.snapshots[toCacheKey(location1)];
    }
    write(location1, snapshot) {
        this.snapshots[toCacheKey(location1)] = snapshot;
    }
    touch(location1) {
        const key = toCacheKey(location1);
        const index = this.keys.indexOf(key);
        if (index > -1) this.keys.splice(index, 1);
        this.keys.unshift(key);
        this.trim();
    }
    trim() {
        for (const key of this.keys.splice(this.size))delete this.snapshots[key];
    }
}
class PageView extends View {
    constructor(){
        super(...arguments);
        this.snapshotCache = new SnapshotCache(10);
        this.lastRenderedLocation = new URL(location.href);
        this.forceReloaded = false;
    }
    renderPage(snapshot, isPreview = false, willRender = true, visit) {
        const renderer = new PageRenderer(this.snapshot, snapshot, PageRenderer.renderElement, isPreview, willRender);
        if (!renderer.shouldRender) this.forceReloaded = true;
        else visit === null || visit === void 0 || visit.changeHistory();
        return this.render(renderer);
    }
    renderError(snapshot, visit) {
        visit === null || visit === void 0 || visit.changeHistory();
        const renderer = new ErrorRenderer(this.snapshot, snapshot, ErrorRenderer.renderElement, false);
        return this.render(renderer);
    }
    clearSnapshotCache() {
        this.snapshotCache.clear();
    }
    async cacheSnapshot(snapshot = this.snapshot) {
        if (snapshot.isCacheable) {
            this.delegate.viewWillCacheSnapshot();
            const { lastRenderedLocation: location1  } = this;
            await nextEventLoopTick();
            const cachedSnapshot = snapshot.clone();
            this.snapshotCache.put(location1, cachedSnapshot);
            return cachedSnapshot;
        }
    }
    getCachedSnapshotForLocation(location1) {
        return this.snapshotCache.get(location1);
    }
    get snapshot() {
        return PageSnapshot.fromElement(this.element);
    }
}
class Preloader {
    constructor(delegate){
        this.selector = "a[data-turbo-preload]";
        this.delegate = delegate;
    }
    get snapshotCache() {
        return this.delegate.navigator.view.snapshotCache;
    }
    start() {
        if (document.readyState === "loading") return document.addEventListener("DOMContentLoaded", ()=>{
            this.preloadOnLoadLinksForView(document.body);
        });
        else this.preloadOnLoadLinksForView(document.body);
    }
    preloadOnLoadLinksForView(element) {
        for (const link of element.querySelectorAll(this.selector))this.preloadURL(link);
    }
    async preloadURL(link) {
        const location1 = new URL(link.href);
        if (this.snapshotCache.has(location1)) return;
        try {
            const response = await fetch(location1.toString(), {
                headers: {
                    "VND.PREFETCH": "true",
                    Accept: "text/html"
                }
            });
            const responseText = await response.text();
            const snapshot = PageSnapshot.fromHTMLString(responseText);
            this.snapshotCache.put(location1, snapshot);
        } catch (_) {}
    }
}
class Session {
    constructor(){
        this.navigator = new Navigator(this);
        this.history = new History(this);
        this.preloader = new Preloader(this);
        this.view = new PageView(this, document.documentElement);
        this.adapter = new BrowserAdapter(this);
        this.pageObserver = new PageObserver(this);
        this.cacheObserver = new CacheObserver();
        this.linkClickObserver = new LinkClickObserver(this, window);
        this.formSubmitObserver = new FormSubmitObserver(this, document);
        this.scrollObserver = new ScrollObserver(this);
        this.streamObserver = new StreamObserver(this);
        this.formLinkClickObserver = new FormLinkClickObserver(this, document.documentElement);
        this.frameRedirector = new FrameRedirector(this, document.documentElement);
        this.streamMessageRenderer = new StreamMessageRenderer();
        this.drive = true;
        this.enabled = true;
        this.progressBarDelay = 500;
        this.started = false;
        this.formMode = "on";
    }
    start() {
        if (!this.started) {
            this.pageObserver.start();
            this.cacheObserver.start();
            this.formLinkClickObserver.start();
            this.linkClickObserver.start();
            this.formSubmitObserver.start();
            this.scrollObserver.start();
            this.streamObserver.start();
            this.frameRedirector.start();
            this.history.start();
            this.preloader.start();
            this.started = true;
            this.enabled = true;
        }
    }
    disable() {
        this.enabled = false;
    }
    stop() {
        if (this.started) {
            this.pageObserver.stop();
            this.cacheObserver.stop();
            this.formLinkClickObserver.stop();
            this.linkClickObserver.stop();
            this.formSubmitObserver.stop();
            this.scrollObserver.stop();
            this.streamObserver.stop();
            this.frameRedirector.stop();
            this.history.stop();
            this.started = false;
        }
    }
    registerAdapter(adapter) {
        this.adapter = adapter;
    }
    visit(location1, options = {}) {
        const frameElement = options.frame ? document.getElementById(options.frame) : null;
        if (frameElement instanceof FrameElement) {
            frameElement.src = location1.toString();
            frameElement.loaded;
        } else this.navigator.proposeVisit(expandURL(location1), options);
    }
    connectStreamSource(source) {
        this.streamObserver.connectStreamSource(source);
    }
    disconnectStreamSource(source) {
        this.streamObserver.disconnectStreamSource(source);
    }
    renderStreamMessage(message) {
        this.streamMessageRenderer.render(StreamMessage.wrap(message));
    }
    clearCache() {
        this.view.clearSnapshotCache();
    }
    setProgressBarDelay(delay) {
        this.progressBarDelay = delay;
    }
    setFormMode(mode) {
        this.formMode = mode;
    }
    get location() {
        return this.history.location;
    }
    get restorationIdentifier() {
        return this.history.restorationIdentifier;
    }
    historyPoppedToLocationWithRestorationIdentifier(location1, restorationIdentifier) {
        if (this.enabled) this.navigator.startVisit(location1, restorationIdentifier, {
            action: "restore",
            historyChanged: true
        });
        else this.adapter.pageInvalidated({
            reason: "turbo_disabled"
        });
    }
    scrollPositionChanged(position) {
        this.history.updateRestorationData({
            scrollPosition: position
        });
    }
    willSubmitFormLinkToLocation(link, location1) {
        return this.elementIsNavigatable(link) && locationIsVisitable(location1, this.snapshot.rootLocation);
    }
    submittedFormLinkToLocation() {}
    willFollowLinkToLocation(link, location1, event) {
        return this.elementIsNavigatable(link) && locationIsVisitable(location1, this.snapshot.rootLocation) && this.applicationAllowsFollowingLinkToLocation(link, location1, event);
    }
    followedLinkToLocation(link, location1) {
        const action = this.getActionForLink(link);
        const acceptsStreamResponse = link.hasAttribute("data-turbo-stream");
        this.visit(location1.href, {
            action,
            acceptsStreamResponse
        });
    }
    allowsVisitingLocationWithAction(location1, action) {
        return this.locationWithActionIsSamePage(location1, action) || this.applicationAllowsVisitingLocation(location1);
    }
    visitProposedToLocation(location1, options) {
        extendURLWithDeprecatedProperties(location1);
        this.adapter.visitProposedToLocation(location1, options);
    }
    visitStarted(visit) {
        if (!visit.acceptsStreamResponse) markAsBusy(document.documentElement);
        extendURLWithDeprecatedProperties(visit.location);
        if (!visit.silent) this.notifyApplicationAfterVisitingLocation(visit.location, visit.action);
    }
    visitCompleted(visit) {
        clearBusyState(document.documentElement);
        this.notifyApplicationAfterPageLoad(visit.getTimingMetrics());
    }
    locationWithActionIsSamePage(location1, action) {
        return this.navigator.locationWithActionIsSamePage(location1, action);
    }
    visitScrolledToSamePageLocation(oldURL, newURL) {
        this.notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL);
    }
    willSubmitForm(form, submitter) {
        const action = getAction(form, submitter);
        return this.submissionIsNavigatable(form, submitter) && locationIsVisitable(expandURL(action), this.snapshot.rootLocation);
    }
    formSubmitted(form, submitter) {
        this.navigator.submitForm(form, submitter);
    }
    pageBecameInteractive() {
        this.view.lastRenderedLocation = this.location;
        this.notifyApplicationAfterPageLoad();
    }
    pageLoaded() {
        this.history.assumeControlOfScrollRestoration();
    }
    pageWillUnload() {
        this.history.relinquishControlOfScrollRestoration();
    }
    receivedMessageFromStream(message) {
        this.renderStreamMessage(message);
    }
    viewWillCacheSnapshot() {
        var _a;
        if (!((_a = this.navigator.currentVisit) === null || _a === void 0 ? void 0 : _a.silent)) this.notifyApplicationBeforeCachingSnapshot();
    }
    allowsImmediateRender({ element  }, options) {
        const event = this.notifyApplicationBeforeRender(element, options);
        const { defaultPrevented , detail: { render  }  } = event;
        if (this.view.renderer && render) this.view.renderer.renderElement = render;
        return !defaultPrevented;
    }
    viewRenderedSnapshot(_snapshot, _isPreview) {
        this.view.lastRenderedLocation = this.history.location;
        this.notifyApplicationAfterRender();
    }
    preloadOnLoadLinksForView(element) {
        this.preloader.preloadOnLoadLinksForView(element);
    }
    viewInvalidated(reason) {
        this.adapter.pageInvalidated(reason);
    }
    frameLoaded(frame) {
        this.notifyApplicationAfterFrameLoad(frame);
    }
    frameRendered(fetchResponse, frame) {
        this.notifyApplicationAfterFrameRender(fetchResponse, frame);
    }
    applicationAllowsFollowingLinkToLocation(link, location1, ev) {
        const event = this.notifyApplicationAfterClickingLinkToLocation(link, location1, ev);
        return !event.defaultPrevented;
    }
    applicationAllowsVisitingLocation(location1) {
        const event = this.notifyApplicationBeforeVisitingLocation(location1);
        return !event.defaultPrevented;
    }
    notifyApplicationAfterClickingLinkToLocation(link, location1, event) {
        return dispatch("turbo:click", {
            target: link,
            detail: {
                url: location1.href,
                originalEvent: event
            },
            cancelable: true
        });
    }
    notifyApplicationBeforeVisitingLocation(location1) {
        return dispatch("turbo:before-visit", {
            detail: {
                url: location1.href
            },
            cancelable: true
        });
    }
    notifyApplicationAfterVisitingLocation(location1, action) {
        return dispatch("turbo:visit", {
            detail: {
                url: location1.href,
                action
            }
        });
    }
    notifyApplicationBeforeCachingSnapshot() {
        return dispatch("turbo:before-cache");
    }
    notifyApplicationBeforeRender(newBody, options) {
        return dispatch("turbo:before-render", {
            detail: Object.assign({
                newBody
            }, options),
            cancelable: true
        });
    }
    notifyApplicationAfterRender() {
        return dispatch("turbo:render");
    }
    notifyApplicationAfterPageLoad(timing = {}) {
        return dispatch("turbo:load", {
            detail: {
                url: this.location.href,
                timing
            }
        });
    }
    notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL) {
        dispatchEvent(new HashChangeEvent("hashchange", {
            oldURL: oldURL.toString(),
            newURL: newURL.toString()
        }));
    }
    notifyApplicationAfterFrameLoad(frame) {
        return dispatch("turbo:frame-load", {
            target: frame
        });
    }
    notifyApplicationAfterFrameRender(fetchResponse, frame) {
        return dispatch("turbo:frame-render", {
            detail: {
                fetchResponse
            },
            target: frame,
            cancelable: true
        });
    }
    submissionIsNavigatable(form, submitter) {
        if (this.formMode == "off") return false;
        else {
            const submitterIsNavigatable = submitter ? this.elementIsNavigatable(submitter) : true;
            if (this.formMode == "optin") return submitterIsNavigatable && form.closest('[data-turbo="true"]') != null;
            else return submitterIsNavigatable && this.elementIsNavigatable(form);
        }
    }
    elementIsNavigatable(element) {
        const container = element.closest("[data-turbo]");
        const withinFrame = element.closest("turbo-frame");
        if (this.drive || withinFrame) {
            if (container) return container.getAttribute("data-turbo") != "false";
            else return true;
        } else {
            if (container) return container.getAttribute("data-turbo") == "true";
            else return false;
        }
    }
    getActionForLink(link) {
        const action = link.getAttribute("data-turbo-action");
        return isAction(action) ? action : "advance";
    }
    get snapshot() {
        return this.view.snapshot;
    }
}
function extendURLWithDeprecatedProperties(url) {
    Object.defineProperties(url, deprecatedLocationPropertyDescriptors);
}
const deprecatedLocationPropertyDescriptors = {
    absoluteURL: {
        get () {
            return this.toString();
        }
    }
};
class Cache {
    constructor(session){
        this.session = session;
    }
    clear() {
        this.session.clearCache();
    }
    resetCacheControl() {
        this.setCacheControl("");
    }
    exemptPageFromCache() {
        this.setCacheControl("no-cache");
    }
    exemptPageFromPreview() {
        this.setCacheControl("no-preview");
    }
    setCacheControl(value) {
        setMetaContent("turbo-cache-control", value);
    }
}
const StreamActions = {
    after () {
        this.targetElements.forEach((e)=>{
            var _a;
            return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(this.templateContent, e.nextSibling);
        });
    },
    append () {
        this.removeDuplicateTargetChildren();
        this.targetElements.forEach((e)=>e.append(this.templateContent));
    },
    before () {
        this.targetElements.forEach((e)=>{
            var _a;
            return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(this.templateContent, e);
        });
    },
    prepend () {
        this.removeDuplicateTargetChildren();
        this.targetElements.forEach((e)=>e.prepend(this.templateContent));
    },
    remove () {
        this.targetElements.forEach((e)=>e.remove());
    },
    replace () {
        this.targetElements.forEach((e)=>e.replaceWith(this.templateContent));
    },
    update () {
        this.targetElements.forEach((e)=>e.replaceChildren(this.templateContent));
    }
};
const session = new Session();
const cache = new Cache(session);
const { navigator: navigator$1  } = session;
function start() {
    session.start();
}
function registerAdapter(adapter) {
    session.registerAdapter(adapter);
}
function visit(location1, options) {
    session.visit(location1, options);
}
function connectStreamSource(source) {
    session.connectStreamSource(source);
}
function disconnectStreamSource(source) {
    session.disconnectStreamSource(source);
}
function renderStreamMessage(message) {
    session.renderStreamMessage(message);
}
function clearCache() {
    console.warn("Please replace `Turbo.clearCache()` with `Turbo.cache.clear()`. The top-level function is deprecated and will be removed in a future version of Turbo.`");
    session.clearCache();
}
function setProgressBarDelay(delay) {
    session.setProgressBarDelay(delay);
}
function setConfirmMethod(confirmMethod) {
    FormSubmission.confirmMethod = confirmMethod;
}
function setFormMode(mode) {
    session.setFormMode(mode);
}
var Turbo = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    navigator: navigator$1,
    session: session,
    cache: cache,
    PageRenderer: PageRenderer,
    PageSnapshot: PageSnapshot,
    FrameRenderer: FrameRenderer,
    start: start,
    registerAdapter: registerAdapter,
    visit: visit,
    connectStreamSource: connectStreamSource,
    disconnectStreamSource: disconnectStreamSource,
    renderStreamMessage: renderStreamMessage,
    clearCache: clearCache,
    setProgressBarDelay: setProgressBarDelay,
    setConfirmMethod: setConfirmMethod,
    setFormMode: setFormMode,
    StreamActions: StreamActions
});
class FrameController {
    constructor(element){
        this.fetchResponseLoaded = (_fetchResponse)=>{};
        this.currentFetchRequest = null;
        this.resolveVisitPromise = ()=>{};
        this.connected = false;
        this.hasBeenLoaded = false;
        this.ignoredAttributes = new Set();
        this.action = null;
        this.visitCachedSnapshot = ({ element  })=>{
            const frame = element.querySelector("#" + this.element.id);
            if (frame && this.previousFrameElement) frame.replaceChildren(...this.previousFrameElement.children);
            delete this.previousFrameElement;
        };
        this.element = element;
        this.view = new FrameView(this, this.element);
        this.appearanceObserver = new AppearanceObserver(this, this.element);
        this.formLinkClickObserver = new FormLinkClickObserver(this, this.element);
        this.linkInterceptor = new LinkInterceptor(this, this.element);
        this.restorationIdentifier = uuid();
        this.formSubmitObserver = new FormSubmitObserver(this, this.element);
    }
    connect() {
        if (!this.connected) {
            this.connected = true;
            if (this.loadingStyle == FrameLoadingStyle.lazy) this.appearanceObserver.start();
            else this.loadSourceURL();
            this.formLinkClickObserver.start();
            this.linkInterceptor.start();
            this.formSubmitObserver.start();
        }
    }
    disconnect() {
        if (this.connected) {
            this.connected = false;
            this.appearanceObserver.stop();
            this.formLinkClickObserver.stop();
            this.linkInterceptor.stop();
            this.formSubmitObserver.stop();
        }
    }
    disabledChanged() {
        if (this.loadingStyle == FrameLoadingStyle.eager) this.loadSourceURL();
    }
    sourceURLChanged() {
        if (this.isIgnoringChangesTo("src")) return;
        if (this.element.isConnected) this.complete = false;
        if (this.loadingStyle == FrameLoadingStyle.eager || this.hasBeenLoaded) this.loadSourceURL();
    }
    sourceURLReloaded() {
        const { src  } = this.element;
        this.ignoringChangesToAttribute("complete", ()=>{
            this.element.removeAttribute("complete");
        });
        this.element.src = null;
        this.element.src = src;
        return this.element.loaded;
    }
    completeChanged() {
        if (this.isIgnoringChangesTo("complete")) return;
        this.loadSourceURL();
    }
    loadingStyleChanged() {
        if (this.loadingStyle == FrameLoadingStyle.lazy) this.appearanceObserver.start();
        else {
            this.appearanceObserver.stop();
            this.loadSourceURL();
        }
    }
    async loadSourceURL() {
        if (this.enabled && this.isActive && !this.complete && this.sourceURL) {
            this.element.loaded = this.visit(expandURL(this.sourceURL));
            this.appearanceObserver.stop();
            await this.element.loaded;
            this.hasBeenLoaded = true;
        }
    }
    async loadResponse(fetchResponse) {
        if (fetchResponse.redirected || fetchResponse.succeeded && fetchResponse.isHTML) this.sourceURL = fetchResponse.response.url;
        try {
            const html = await fetchResponse.responseHTML;
            if (html) {
                const { body  } = parseHTMLDocument(html);
                const newFrameElement = await this.extractForeignFrameElement(body);
                if (newFrameElement) {
                    const snapshot = new Snapshot(newFrameElement);
                    const renderer = new FrameRenderer(this, this.view.snapshot, snapshot, FrameRenderer.renderElement, false, false);
                    if (this.view.renderPromise) await this.view.renderPromise;
                    this.changeHistory();
                    await this.view.render(renderer);
                    this.complete = true;
                    session.frameRendered(fetchResponse, this.element);
                    session.frameLoaded(this.element);
                    this.fetchResponseLoaded(fetchResponse);
                } else if (this.willHandleFrameMissingFromResponse(fetchResponse)) {
                    console.warn(`A matching frame for #${this.element.id} was missing from the response, transforming into full-page Visit.`);
                    this.visitResponse(fetchResponse.response);
                }
            }
        } catch (error) {
            console.error(error);
            this.view.invalidate();
        } finally{
            this.fetchResponseLoaded = ()=>{};
        }
    }
    elementAppearedInViewport(_element) {
        this.loadSourceURL();
    }
    willSubmitFormLinkToLocation(link) {
        return this.shouldInterceptNavigation(link);
    }
    submittedFormLinkToLocation(link, _location, form) {
        const frame = this.findFrameElement(link);
        if (frame) form.setAttribute("data-turbo-frame", frame.id);
    }
    shouldInterceptLinkClick(element, _location, _event) {
        return this.shouldInterceptNavigation(element);
    }
    linkClickIntercepted(element, location1) {
        this.navigateFrame(element, location1);
    }
    willSubmitForm(element, submitter) {
        return element.closest("turbo-frame") == this.element && this.shouldInterceptNavigation(element, submitter);
    }
    formSubmitted(element, submitter) {
        if (this.formSubmission) this.formSubmission.stop();
        this.formSubmission = new FormSubmission(this, element, submitter);
        const { fetchRequest  } = this.formSubmission;
        this.prepareHeadersForRequest(fetchRequest.headers, fetchRequest);
        this.formSubmission.start();
    }
    prepareHeadersForRequest(headers, request) {
        var _a;
        headers["Turbo-Frame"] = this.id;
        if ((_a = this.currentNavigationElement) === null || _a === void 0 ? void 0 : _a.hasAttribute("data-turbo-stream")) request.acceptResponseType(StreamMessage.contentType);
    }
    requestStarted(_request) {
        markAsBusy(this.element);
    }
    requestPreventedHandlingResponse(_request, _response) {
        this.resolveVisitPromise();
    }
    async requestSucceededWithResponse(request, response) {
        await this.loadResponse(response);
        this.resolveVisitPromise();
    }
    async requestFailedWithResponse(request, response) {
        console.error(response);
        await this.loadResponse(response);
        this.resolveVisitPromise();
    }
    requestErrored(request, error) {
        console.error(error);
        this.resolveVisitPromise();
    }
    requestFinished(_request) {
        clearBusyState(this.element);
    }
    formSubmissionStarted({ formElement  }) {
        markAsBusy(formElement, this.findFrameElement(formElement));
    }
    formSubmissionSucceededWithResponse(formSubmission, response) {
        const frame = this.findFrameElement(formSubmission.formElement, formSubmission.submitter);
        frame.delegate.proposeVisitIfNavigatedWithAction(frame, formSubmission.formElement, formSubmission.submitter);
        frame.delegate.loadResponse(response);
    }
    formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
        this.element.delegate.loadResponse(fetchResponse);
    }
    formSubmissionErrored(formSubmission, error) {
        console.error(error);
    }
    formSubmissionFinished({ formElement  }) {
        clearBusyState(formElement, this.findFrameElement(formElement));
    }
    allowsImmediateRender({ element: newFrame  }, options) {
        const event = dispatch("turbo:before-frame-render", {
            target: this.element,
            detail: Object.assign({
                newFrame
            }, options),
            cancelable: true
        });
        const { defaultPrevented , detail: { render  }  } = event;
        if (this.view.renderer && render) this.view.renderer.renderElement = render;
        return !defaultPrevented;
    }
    viewRenderedSnapshot(_snapshot, _isPreview) {}
    preloadOnLoadLinksForView(element) {
        session.preloadOnLoadLinksForView(element);
    }
    viewInvalidated() {}
    willRenderFrame(currentElement, _newElement) {
        this.previousFrameElement = currentElement.cloneNode(true);
    }
    async visit(url) {
        var _a;
        const request = new FetchRequest(this, FetchMethod.get, url, new URLSearchParams(), this.element);
        (_a = this.currentFetchRequest) === null || _a === void 0 || _a.cancel();
        this.currentFetchRequest = request;
        return new Promise((resolve)=>{
            this.resolveVisitPromise = ()=>{
                this.resolveVisitPromise = ()=>{};
                this.currentFetchRequest = null;
                resolve();
            };
            request.perform();
        });
    }
    navigateFrame(element, url, submitter) {
        const frame = this.findFrameElement(element, submitter);
        this.pageSnapshot = PageSnapshot.fromElement(frame).clone();
        frame.delegate.proposeVisitIfNavigatedWithAction(frame, element, submitter);
        this.withCurrentNavigationElement(element, ()=>{
            frame.src = url;
        });
    }
    proposeVisitIfNavigatedWithAction(frame, element, submitter) {
        this.action = getVisitAction(submitter, element, frame);
        if (isAction(this.action)) {
            const { visitCachedSnapshot  } = frame.delegate;
            frame.delegate.fetchResponseLoaded = (fetchResponse)=>{
                if (frame.src) {
                    const { statusCode , redirected  } = fetchResponse;
                    const responseHTML = frame.ownerDocument.documentElement.outerHTML;
                    const response = {
                        statusCode,
                        redirected,
                        responseHTML
                    };
                    const options = {
                        response,
                        visitCachedSnapshot,
                        willRender: false,
                        updateHistory: false,
                        restorationIdentifier: this.restorationIdentifier,
                        snapshot: this.pageSnapshot
                    };
                    if (this.action) options.action = this.action;
                    session.visit(frame.src, options);
                }
            };
        }
    }
    changeHistory() {
        if (this.action) {
            const method = getHistoryMethodForAction(this.action);
            session.history.update(method, expandURL(this.element.src || ""), this.restorationIdentifier);
        }
    }
    willHandleFrameMissingFromResponse(fetchResponse) {
        this.element.setAttribute("complete", "");
        const response = fetchResponse.response;
        const visit = async (url, options = {})=>{
            if (url instanceof Response) this.visitResponse(url);
            else session.visit(url, options);
        };
        const event = dispatch("turbo:frame-missing", {
            target: this.element,
            detail: {
                response,
                visit
            },
            cancelable: true
        });
        return !event.defaultPrevented;
    }
    async visitResponse(response) {
        const wrapped = new FetchResponse(response);
        const responseHTML = await wrapped.responseHTML;
        const { location: location1 , redirected , statusCode  } = wrapped;
        return session.visit(location1, {
            response: {
                redirected,
                statusCode,
                responseHTML
            }
        });
    }
    findFrameElement(element, submitter) {
        var _a;
        const id = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");
        return (_a = getFrameElementById(id)) !== null && _a !== void 0 ? _a : this.element;
    }
    async extractForeignFrameElement(container) {
        let element;
        const id = CSS.escape(this.id);
        try {
            element = activateElement(container.querySelector(`turbo-frame#${id}`), this.sourceURL);
            if (element) return element;
            element = activateElement(container.querySelector(`turbo-frame[src][recurse~=${id}]`), this.sourceURL);
            if (element) {
                await element.loaded;
                return await this.extractForeignFrameElement(element);
            }
        } catch (error) {
            console.error(error);
            return new FrameElement();
        }
        return null;
    }
    formActionIsVisitable(form, submitter) {
        const action = getAction(form, submitter);
        return locationIsVisitable(expandURL(action), this.rootLocation);
    }
    shouldInterceptNavigation(element, submitter) {
        const id = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");
        if (element instanceof HTMLFormElement && !this.formActionIsVisitable(element, submitter)) return false;
        if (!this.enabled || id == "_top") return false;
        if (id) {
            const frameElement = getFrameElementById(id);
            if (frameElement) return !frameElement.disabled;
        }
        if (!session.elementIsNavigatable(element)) return false;
        if (submitter && !session.elementIsNavigatable(submitter)) return false;
        return true;
    }
    get id() {
        return this.element.id;
    }
    get enabled() {
        return !this.element.disabled;
    }
    get sourceURL() {
        if (this.element.src) return this.element.src;
    }
    set sourceURL(sourceURL) {
        this.ignoringChangesToAttribute("src", ()=>{
            this.element.src = sourceURL !== null && sourceURL !== void 0 ? sourceURL : null;
        });
    }
    get loadingStyle() {
        return this.element.loading;
    }
    get isLoading() {
        return this.formSubmission !== undefined || this.resolveVisitPromise() !== undefined;
    }
    get complete() {
        return this.element.hasAttribute("complete");
    }
    set complete(value) {
        this.ignoringChangesToAttribute("complete", ()=>{
            if (value) this.element.setAttribute("complete", "");
            else this.element.removeAttribute("complete");
        });
    }
    get isActive() {
        return this.element.isActive && this.connected;
    }
    get rootLocation() {
        var _a;
        const meta = this.element.ownerDocument.querySelector(`meta[name="turbo-root"]`);
        const root = (_a = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _a !== void 0 ? _a : "/";
        return expandURL(root);
    }
    isIgnoringChangesTo(attributeName) {
        return this.ignoredAttributes.has(attributeName);
    }
    ignoringChangesToAttribute(attributeName, callback) {
        this.ignoredAttributes.add(attributeName);
        callback();
        this.ignoredAttributes.delete(attributeName);
    }
    withCurrentNavigationElement(element, callback) {
        this.currentNavigationElement = element;
        callback();
        delete this.currentNavigationElement;
    }
}
function getFrameElementById(id) {
    if (id != null) {
        const element = document.getElementById(id);
        if (element instanceof FrameElement) return element;
    }
}
function activateElement(element, currentURL) {
    if (element) {
        const src = element.getAttribute("src");
        if (src != null && currentURL != null && urlsAreEqual(src, currentURL)) throw new Error(`Matching <turbo-frame id="${element.id}"> element has a source URL which references itself`);
        if (element.ownerDocument !== document) element = document.importNode(element, true);
        if (element instanceof FrameElement) {
            element.connectedCallback();
            element.disconnectedCallback();
            return element;
        }
    }
}
class StreamElement extends HTMLElement {
    static async renderElement(newElement) {
        await newElement.performAction();
    }
    async connectedCallback() {
        try {
            await this.render();
        } catch (error) {
            console.error(error);
        } finally{
            this.disconnect();
        }
    }
    async render() {
        var _a;
        return (_a = this.renderPromise) !== null && _a !== void 0 ? _a : this.renderPromise = (async ()=>{
            const event = this.beforeRenderEvent;
            if (this.dispatchEvent(event)) {
                await nextAnimationFrame();
                await event.detail.render(this);
            }
        })();
    }
    disconnect() {
        try {
            this.remove();
        } catch (_a) {}
    }
    removeDuplicateTargetChildren() {
        this.duplicateChildren.forEach((c)=>c.remove());
    }
    get duplicateChildren() {
        var _a;
        const existingChildren = this.targetElements.flatMap((e)=>[
                ...e.children
            ]).filter((c)=>!!c.id);
        const newChildrenIds = [
            ...((_a = this.templateContent) === null || _a === void 0 ? void 0 : _a.children) || []
        ].filter((c)=>!!c.id).map((c)=>c.id);
        return existingChildren.filter((c)=>newChildrenIds.includes(c.id));
    }
    get performAction() {
        if (this.action) {
            const actionFunction = StreamActions[this.action];
            if (actionFunction) return actionFunction;
            this.raise("unknown action");
        }
        this.raise("action attribute is missing");
    }
    get targetElements() {
        if (this.target) return this.targetElementsById;
        else if (this.targets) return this.targetElementsByQuery;
        else this.raise("target or targets attribute is missing");
    }
    get templateContent() {
        return this.templateElement.content.cloneNode(true);
    }
    get templateElement() {
        if (this.firstElementChild === null) {
            const template = this.ownerDocument.createElement("template");
            this.appendChild(template);
            return template;
        } else if (this.firstElementChild instanceof HTMLTemplateElement) return this.firstElementChild;
        this.raise("first child element must be a <template> element");
    }
    get action() {
        return this.getAttribute("action");
    }
    get target() {
        return this.getAttribute("target");
    }
    get targets() {
        return this.getAttribute("targets");
    }
    raise(message) {
        throw new Error(`${this.description}: ${message}`);
    }
    get description() {
        var _a, _b;
        return (_b = ((_a = this.outerHTML.match(/<[^>]+>/)) !== null && _a !== void 0 ? _a : [])[0]) !== null && _b !== void 0 ? _b : "<turbo-stream>";
    }
    get beforeRenderEvent() {
        return new CustomEvent("turbo:before-stream-render", {
            bubbles: true,
            cancelable: true,
            detail: {
                newStream: this,
                render: StreamElement.renderElement
            }
        });
    }
    get targetElementsById() {
        var _a;
        const element = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.getElementById(this.target);
        if (element !== null) return [
            element
        ];
        else return [];
    }
    get targetElementsByQuery() {
        var _a;
        const elements = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll(this.targets);
        if (elements.length !== 0) return Array.prototype.slice.call(elements);
        else return [];
    }
}
class StreamSourceElement extends HTMLElement {
    constructor(){
        super(...arguments);
        this.streamSource = null;
    }
    connectedCallback() {
        this.streamSource = this.src.match(/^ws{1,2}:/) ? new WebSocket(this.src) : new EventSource(this.src);
        connectStreamSource(this.streamSource);
    }
    disconnectedCallback() {
        if (this.streamSource) disconnectStreamSource(this.streamSource);
    }
    get src() {
        return this.getAttribute("src") || "";
    }
}
FrameElement.delegateConstructor = FrameController;
if (customElements.get("turbo-frame") === undefined) customElements.define("turbo-frame", FrameElement);
if (customElements.get("turbo-stream") === undefined) customElements.define("turbo-stream", StreamElement);
if (customElements.get("turbo-stream-source") === undefined) customElements.define("turbo-stream-source", StreamSourceElement);
(()=>{
    let element = document.currentScript;
    if (!element) return;
    if (element.hasAttribute("data-turbo-suppress-warning")) return;
    element = element.parentElement;
    while(element){
        if (element == document.body) return console.warn(unindent`
        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!

        Load your application’s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.

        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements

        ——
        Suppress this warning by adding a "data-turbo-suppress-warning" attribute to: %s
      `, element.outerHTML);
        element = element.parentElement;
    }
})();
window.Turbo = Turbo;
start();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"amRza":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>u);
function e() {
    return !function() {
        if ("undefined" != typeof window) {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)");
            return !e || e.matches;
        }
        return !0;
    }();
}
function t(e) {
    const t = [
        ...document.querySelectorAll(e)
    ];
    return Promise.all(t.map((e)=>new Promise((t)=>{
            e.addEventListener("animationend", function s() {
                e.removeEventListener("animationend", s), t();
            });
        })));
}
function s(e) {
    return e.split(/[^\w]/).map((e, t)=>0 === t ? e.toLowerCase() : n(e)).join("");
}
function n(e) {
    return e.replace(/^\w/, (e)=>e.toUpperCase());
}
class r {
    snapshot = Promise.resolve();
    exit() {}
    beforeEnter() {}
    enter() {}
    complete() {}
    abort() {}
}
const i = {
    animateRestore: !1
};
class a {
    constructor(e, t = {}){
        this.action = e, this.options = {
            ...i,
            ...t
        }, this.beforeExitClasses = new Set, this.exitClasses = new Set, this.enterClasses = new Set;
    }
    exit() {
        if ("restore" === this.action && !this.options.animateRestore) return;
        let e;
        this.animateOut = Promise.all([
            t("[data-turn-exit]"),
            new Promise((t)=>{
                e = t;
            })
        ]), this.addClasses("before-exit"), window.requestAnimationFrame(()=>{
            this.addClasses("exit"), this.removeClasses("before-exit"), e();
        });
    }
    async beforeEnter() {
        ("restore" !== this.action || this.options.animateRestore) && (this.isPreview ? (this.hasPreview = !0, await this.animateOut) : (await this.animateOut, this.animateIn && await this.animateIn));
    }
    async enter() {
        this.removeClasses("exit"), this.shouldAnimateEnter && (this.animateIn = t("[data-turn-enter]"), this.addClasses("enter"));
    }
    async complete() {
        await this.animateIn, this.removeClasses("enter");
    }
    abort() {
        this.removeClasses("before-exit"), this.removeClasses("exit"), this.removeClasses("enter");
    }
    get shouldAnimateEnter() {
        return !("restore" === this.action && !this.options.animateRestore) && (!!this.isPreview || !this.hasPreview);
    }
    get isPreview() {
        return document.documentElement.hasAttribute("data-turbo-preview");
    }
    addClasses(e) {
        document.documentElement.classList.add(`turn-${e}`), Array.from(document.querySelectorAll(`[data-turn-${e}]`)).forEach((t)=>{
            var r;
            t.dataset[`turn${r = e, r.split(/[^\w]/).map(n).join("")}`].split(/\s+/).forEach((n)=>{
                n && (t.classList.add(n), this[`${s(e)}Classes`].add(n));
            });
        });
    }
    removeClasses(e) {
        document.documentElement.classList.remove(`turn-${e}`), Array.from(document.querySelectorAll(`[data-turn-${e}]`)).forEach((t)=>{
            this[`${s(e)}Classes`].forEach((e)=>t.classList.remove(e));
        });
    }
}
class o {
    exit() {}
    complete() {}
    async beforeEnter(e) {
        this.hasPreview ? await this.transition.finished : (this.hasPreview = this.isPreview, this.snapshot = new Promise((e)=>{
            this.snapshat = e;
        }), this.transition = document.startViewTransition((e)=>this.render()), await this.snapshot);
    }
    render() {
        return this.snapshat(), new Promise((e)=>{
            this.rendered = e;
        });
    }
    enter() {
        this.rendered();
    }
    abort() {}
    get isPreview() {
        return document.documentElement.hasAttribute("data-turbo-preview");
    }
}
const u = {
    start () {
        if (!this.started && e()) {
            for(const e in c)window.addEventListener(e, c[e]);
            this.started = !0;
        }
    },
    stop () {
        if (this.started) {
            for(const e in c)window.removeEventListener(e, c[e]);
            this.currentTurn = new r, this.started = !1;
        }
    },
    currentTurn: new r,
    config: {
        experimental: {
            viewTransitions: !1
        }
    }
}, c = {
    "turbo:visit": (function(e) {
        this.currentTurn.abort(), this.currentTurn = function(e) {
            const t = "false" === document.body.dataset.turn || "replace" === e ? r : function() {
                const e = u.config.experimental.viewTransitions, t = "startViewTransition" in document;
                return e && t;
            }() ? o : a, s = JSON.parse(document.body.dataset.turnOptions || "{}");
            return new t(e, s);
        }(e.detail.action), this.currentTurn.exit();
    }).bind(u),
    "turbo:before-render": (async function(e) {
        e.preventDefault(), await this.currentTurn.beforeEnter(), e.detail.resume();
    }).bind(u),
    "turbo:render": (function() {
        this.currentTurn.enter();
    }).bind(u),
    "turbo:load": (function() {
        this.currentTurn.complete();
    }).bind(u),
    popstate: (function() {
        "restore" !== this.currentTurn.action && this.currentTurn instanceof a && this.currentTurn.abort();
    }).bind(u)
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aleVA","8lqZg"], "8lqZg", "parcelRequirecb0e")

//# sourceMappingURL=page2.616ea15e.js.map
