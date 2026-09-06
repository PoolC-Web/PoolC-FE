/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignBadgeRequest } from '../models/AssignBadgeRequest';
import type { GetAllBadgeResponse } from '../models/GetAllBadgeResponse';
import type { GetMyBadgeResponse } from '../models/GetMyBadgeResponse';
import type { GetOtherBadgeResponse } from '../models/GetOtherBadgeResponse';
import type { PostBadgeRequest } from '../models/PostBadgeRequest';
import type { UpdateBadgeRequest } from '../models/UpdateBadgeRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BadgeControllerService {
    /**
     * getMyBadge
     * @returns GetMyBadgeResponse OK
     * @throws ApiError
     */
    public static getMyBadgeUsingGet(): CancelablePromise<GetMyBadgeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/badge',
        });
    }
    /**
     * postBadge
     * @returns any OK
     * @throws ApiError
     */
    public static postBadgeUsingPost({
        postBadgeRequest,
    }: {
        /**
         * postBadgeRequest
         */
        postBadgeRequest: PostBadgeRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/badge',
            body: postBadgeRequest,
        });
    }
    /**
     * getAllBadge
     * @returns GetAllBadgeResponse OK
     * @throws ApiError
     */
    public static getAllBadgeUsingGet(): CancelablePromise<GetAllBadgeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/badge/all',
        });
    }
    /**
     * getMemberBadge
     * @returns GetOtherBadgeResponse OK
     * @throws ApiError
     */
    public static getMemberBadgeUsingGet({
        loginId,
    }: {
        /**
         * loginId
         */
        loginId: string,
    }): CancelablePromise<GetOtherBadgeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/badge/assign/{loginId}',
            path: {
                'loginId': loginId,
            },
        });
    }
    /**
     * assignBadge
     * @returns any OK
     * @throws ApiError
     */
    public static assignBadgeUsingPost({
        assignBadgeRequest,
        loginId,
    }: {
        /**
         * assignBadgeRequest
         */
        assignBadgeRequest: AssignBadgeRequest,
        /**
         * loginId
         */
        loginId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/badge/assign/{loginId}',
            path: {
                'loginId': loginId,
            },
            body: assignBadgeRequest,
        });
    }
    /**
     * selectBadge
     * @returns any OK
     * @throws ApiError
     */
    public static selectBadgeUsingPost({
        badgeId,
    }: {
        /**
         * badgeId
         */
        badgeId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/badge/select/{badgeId}',
            path: {
                'badgeId': badgeId,
            },
        });
    }
    /**
     * updateBadge
     * @returns any OK
     * @throws ApiError
     */
    public static updateBadgeUsingPut({
        badgeId,
        updateBadgeRequest,
    }: {
        /**
         * badgeId
         */
        badgeId: number,
        /**
         * updateBadgeRequest
         */
        updateBadgeRequest: UpdateBadgeRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/badge/{badgeId}',
            path: {
                'badgeId': badgeId,
            },
            body: updateBadgeRequest,
        });
    }
    /**
     * deleteBadge
     * @returns any OK
     * @throws ApiError
     */
    public static deleteBadgeUsingDelete({
        badgeId,
    }: {
        /**
         * badgeId
         */
        badgeId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/badge/{badgeId}',
            path: {
                'badgeId': badgeId,
            },
        });
    }
}
