var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var core;
(function (core) {
    /**
     *
     * @author
     *
     */
    var Component = (function (_super) {
        __extends(Component, _super);
        function Component() {
            return _super.call(this) || this;
        }
        Component.prototype.removeFromParent = function () {
            if (this.parent) {
                this.parent.removeChild(this);
            }
        };
        return Component;
    }(egret.DisplayObjectContainer));
    core.Component = Component;
    __reflect(Component.prototype, "core.Component", ["core.IComponent"]);
})(core || (core = {}));
//# sourceMappingURL=Component.js.map