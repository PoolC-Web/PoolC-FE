/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetBoardResponse } from '../models/GetBoardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ScrapControllerService {
    /**
     * viewMyScraps
     * @returns GetBoardResponse OK
     * @throws ApiError
     */
    public static viewMyScrapsUsingGet({
        page,
    }: {
        /**
         * page
         */
        page: number,
    }): CancelablePromise<GetBoardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/scrap',
            query: {
                'page': page,
            },
        });
    }
    /**
     * addScrap
     * @returns any OK
     * @throws ApiError
     */
    public static addScrapUsingPost({
        postId,
    }: {
        /**
         * postId
         */
        postId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/scrap/{postId}',
            path: {
                'postId': postId,
            },
        });
    }
    /**
     * deleteScrap
     * @returns any OK
     * @throws ApiError
     */
    public static deleteScrapUsingDelete({
        postId,
    }: {
        /**
         * postId
         */
        postId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/scrap/{postId}',
            path: {
                'postId': postId,
            },
        });
    }
}
