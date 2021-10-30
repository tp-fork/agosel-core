"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BUILD_PATH = exports.SRC_PATH = exports.APP_PATH = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs_1.default.realpathSync(process.cwd());
function resolveApp(relativePath) {
    return path_1.default.resolve(appDirectory, relativePath);
}
exports.APP_PATH = resolveApp('.');
exports.SRC_PATH = resolveApp('./src');
exports.BUILD_PATH = resolveApp('./.ago');
//# sourceMappingURL=paths.js.map