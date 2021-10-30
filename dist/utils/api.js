"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadApiFiles = void 0;
const tslib_1 = require("tslib");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const utils_1 = require("../utils");
const srcFolder = 'src';
const apiFolder = 'api';
const apiFolderAbsolutePath = path_1.default.join(utils_1.BUILD_PATH, apiFolder);
const ext = '.js';
const buildRoute = async (stack, props) => {
    let newProps = {
        handler: props.handler,
        layers: [],
        environment: props.environment || {},
        bundle: {
            externalModules: []
        }
    };
    if (props.bundle) {
        newProps.bundle = {
            ...newProps.bundle,
            ...props.bundle
        };
    }
    if (props.layers && props.layers.length) {
        for (const layer of props.layers) {
            let layerLoaded = await stack.loadLayersAsync(layer.id, layer.props);
            newProps.layers.push(layerLoaded);
            if (layer.externalModules && layer.externalModules.length) {
                newProps.bundle.externalModules = [...layer.externalModules, ...newProps.bundle.externalModules];
            }
        }
    }
    return {
        function: newProps
    };
};
const loadApiFile = async (stack, pathFile) => {
    const module = await (0, utils_1.importModule)(pathFile);
    const routes = module.routes;
    if (!routes) {
        return undefined;
    }
    // expample: pathFile = 'E:/working/AgileOps/agosel-template/.ago/api/user/user.js'
    // BUILD_PATH = 'E:/working/AgileOps/agosel-template/.ago'
    const baseName = path_1.default.basename(pathFile, ext);
    // baseName = 'user'
    const relativePath = path_1.default.relative(utils_1.BUILD_PATH, pathFile);
    // relativePath = 'api/user/user.js'
    let dirname = path_1.default.dirname(relativePath);
    // dirname = 'api\user'
    dirname = dirname.replace('\\', '/');
    // dirname = 'api/user'
    const result = {};
    for (const route of routes) {
        if (!route.path || !route.method || !route.handler) {
            break;
        }
        const key = `${route.method}  ${route.path}`;
        result[key] = await buildRoute(stack, {
            handler: `${srcFolder}/${dirname}/${baseName}.${route.handler.name}`,
            layers: route.layers,
            environment: route.environment
        });
    }
    return result;
};
const loadApiFiles = async (stack) => {
    const apiFilePaths = await (0, utils_1.walk)(`${apiFolderAbsolutePath}/**/*${ext}`);
    let result = {};
    for (const pathFile of apiFilePaths) {
        const apiRoutes = await loadApiFile(stack, pathFile);
        if (apiRoutes) {
            result = { ...result, ...apiRoutes };
        }
    }
    return result;
};
exports.loadApiFiles = loadApiFiles;
//# sourceMappingURL=api.js.map