/**
 * This function creates enums for HttpStatusCode.
 */

export enum HttpStatusCode {
    // Status code 2xx
    Http200Ok = '200',
    Http201Created = '201',
    Http204NoContent = '204',

    // Status code 4xx
    Http400BadRequest = '400',
    Http401Unauthorized = '401',
    Http403Forbidden = '403',
    Http404NotFound = '404',

    // Status code 5xx
    Http500InternalServerError = '500',
    Http502BadGateway = '502'
}
