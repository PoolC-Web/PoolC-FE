/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthRequest } from '../models/AuthRequest';
import type { AuthResponse } from '../models/AuthResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthControllerService {
    /**
     * createAccessToken
     * @returns AuthResponse OK
     * @throws ApiError
     */
    public static createAccessTokenUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: AuthRequest,
    }): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/login',
            body: request,
        });
    }
    /**
     * reissueToken
     * @returns AuthResponse OK
     * @throws ApiError
     */
    public static reissueTokenUsingPost(): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/login/token',
        });
    }
}
