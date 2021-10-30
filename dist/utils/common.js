"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireFromString = exports.importModule = void 0;
const importModule = async (pathFile) => {
    const module = await Promise.resolve().then(() => __importStar(require(pathFile)));
    return module;
};
exports.importModule = importModule;
const requireFromString = (code, filename) => {
    const Module = require('module');
    var m = new Module();
    m.paths = module.paths;
    m._compile(code, filename);
    return m.exports;
};
exports.requireFromString = requireFromString;
//# sourceMappingURL=common.js.map