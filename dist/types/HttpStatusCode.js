"use strict";
/**
 * This function creates enums for HttpStatusCode.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    // Status code 2xx
    HttpStatusCode["Http200Ok"] = "200";
    HttpStatusCode["Http201Created"] = "201";
    HttpStatusCode["Http204NoContent"] = "204";
    // Status code 4xx
    HttpStatusCode["Http400BadRequest"] = "400";
    HttpStatusCode["Http401Unauthorized"] = "401";
    HttpStatusCode["Http403Forbidden"] = "403";
    HttpStatusCode["Http404NotFound"] = "404";
    // Status code 5xx
    HttpStatusCode["Http500InternalServerError"] = "500";
    HttpStatusCode["Http502BadGateway"] = "502";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
//# sourceMappingURL=HttpStatusCode.js.map