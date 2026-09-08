/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetMyBaekjoonResponse } from '../models/GetMyBaekjoonResponse';
import type { PostBaekjoonRequest } from '../models/PostBaekjoonRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BaekjoonControllerService {
    /**
     * getMyBaekjoon
     * @returns GetMyBaekjoonResponse OK
     * @throws ApiError
     */
    public static getMyBaekjoonUsingGet(): CancelablePromise<GetMyBaekjoonResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/baekjoon',
        });
    }
    /**
     * solve
     * @returns any OK
     * @throws ApiError
     */
    public static solveUsingPost({
        postBaekjoonRequest,
    }: {
        /**
         * postBaekjoonRequest
         */
        postBaekjoonRequest: PostBaekjoonRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baekjoon',
            body: postBaekjoonRequest,
        });
    }
}
