"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadLayerFiles = exports.buildLayer = void 0;
const tslib_1 = require("tslib");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const lambda = (0, tslib_1.__importStar)(require("@aws-cdk/aws-lambda"));
const resources_1 = require("../resources");
const utils_1 = require("../utils");
const layersFolder = 'layers';
const layersFolderAbsolutePath = path_1.default.join(utils_1.BUILD_PATH, layersFolder);
const ext = '.js';
/**
 * check props cases:
 * 1. props is a string with start with 'arn:aws:lambda'
 * 2. props is a string without start with 'arn:aws:lambda'
 * 3. props is a object
 */
const buildLayer = (stack, id, props) => {
    let layer;
    if (typeof props === 'string') {
        if (props.startsWith('arn:aws:lambda')) {
            layer = resources_1.Layer.fromLayerVersionArn(stack, id, props);
        }
        else {
            layer = new resources_1.Layer(stack, id, {
                code: lambda.Code.fromAsset(props)
            });
        }
    }
    else {
        layer = new resources_1.Layer(stack, id, props);
    }
    return layer;
};
exports.buildLayer = buildLayer;
const loadLayerFiles = async (stack) => {
    let layers = {};
    const pathFileLayer = path_1.default.join(layersFolderAbsolutePath, 'index' + ext);
    const moduleLayer = await (0, utils_1.importModule)(pathFileLayer);
    const layersConfig = moduleLayer.layers;
    if (layersConfig) {
        Object.keys(layersConfig).forEach((key) => {
            let props = layersConfig[key];
            let layer = (0, exports.buildLayer)(stack, key, props);
            layers[key] = layer;
        });
    }
    return layers;
};
exports.loadLayerFiles = loadLayerFiles;
//# sourceMappingURL=layer.js.map