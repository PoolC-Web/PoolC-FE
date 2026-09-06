/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePoolcRequest } from '../models/CreatePoolcRequest';
import type { PoolcResponse } from '../models/PoolcResponse';
import type { UpdatePoolcRequest } from '../models/UpdatePoolcRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PoolcControllerService {
    /**
     * findPoolc
     * @returns PoolcResponse OK
     * @throws ApiError
     */
    public static findPoolcUsingGet(): CancelablePromise<PoolcResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/poolc',
        });
    }
    /**
     * createPoolc
     * @returns any OK
     * @throws ApiError
     */
    public static createPoolcUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: CreatePoolcRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/poolc',
            body: request,
        });
    }
    /**
     * updatePoolc
     * @returns any OK
     * @throws ApiError
     */
    public static updatePoolcUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: UpdatePoolcRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/poolc',
            body: request,
        });
    }
}
