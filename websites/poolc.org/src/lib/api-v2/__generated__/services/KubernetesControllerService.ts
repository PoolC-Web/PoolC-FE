/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetKubernetesResponseDto } from '../models/GetKubernetesResponseDto';
import type { GetMyKubernetesKeyResponseDto } from '../models/GetMyKubernetesKeyResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class KubernetesControllerService {
    /**
     * getAllActiveMembers
     * @returns GetKubernetesResponseDto OK
     * @throws ApiError
     */
    public static getAllActiveMembersUsingGet({
        xApiKey,
    }: {
        /**
         * X-API-KEY
         */
        xApiKey: string,
    }): CancelablePromise<GetKubernetesResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/kubernetes/',
            headers: {
                'X-API-KEY': xApiKey,
            },
        });
    }
    /**
     * refreshMamberKeys
     * @returns any OK
     * @throws ApiError
     */
    public static refreshMamberKeysUsingPost({
        requestBody,
        xApiKey,
    }: {
        /**
         * requestBody
         */
        requestBody: Record<string, string>,
        /**
         * X-API-KEY
         */
        xApiKey: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/kubernetes/',
            headers: {
                'X-API-KEY': xApiKey,
            },
            body: requestBody,
        });
    }
    /**
     * getMyKey
     * @returns GetMyKubernetesKeyResponseDto OK
     * @throws ApiError
     */
    public static getMyKeyUsingGet(): CancelablePromise<GetMyKubernetesKeyResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/kubernetes/me',
        });
    }
}
