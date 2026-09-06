/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseEntity } from '../models/ResponseEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FileControllerService {
    /**
     * uploadFile
     * @returns string OK
     * @throws ApiError
     */
    public static uploadFileUsingPost({
        file,
    }: {
        /**
         * file
         */
        file?: Blob,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files',
            body: file,
        });
    }
    /**
     * sendFile
     * @returns ResponseEntity OK
     * @throws ApiError
     */
    public static sendFileUsingGet({
        fileName,
    }: {
        /**
         * fileName
         */
        fileName: string,
    }): CancelablePromise<ResponseEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/files/{fileName}',
            path: {
                'fileName': fileName,
            },
        });
    }
}
