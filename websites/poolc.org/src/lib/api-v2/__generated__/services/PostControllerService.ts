/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetBoardResponse } from '../models/GetBoardResponse';
import type { PostCreateRequest } from '../models/PostCreateRequest';
import type { PostResponse } from '../models/PostResponse';
import type { PostUpdateRequest } from '../models/PostUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostControllerService {
    /**
     * viewPostsByBoard
     * @returns GetBoardResponse OK
     * @throws ApiError
     */
    public static viewPostsByBoardUsingGet({
        boardTitle,
        page,
    }: {
        /**
         * boardTitle
         */
        boardTitle: string,
        /**
         * page
         */
        page: number,
    }): CancelablePromise<GetBoardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/board/{boardTitle}',
            path: {
                'boardTitle': boardTitle,
            },
            query: {
                'page': page,
            },
        });
    }
    /**
     * viewMyPosts
     * @returns GetBoardResponse OK
     * @throws ApiError
     */
    public static viewMyPostsUsingGet({
        page,
    }: {
        /**
         * page
         */
        page: number,
    }): CancelablePromise<GetBoardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/my_posts',
            query: {
                'page': page,
            },
        });
    }
    /**
     * registerPost
     * @returns any OK
     * @throws ApiError
     */
    public static registerPostUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: PostCreateRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/new',
            body: request,
        });
    }
    /**
     * searchPost
     * @returns GetBoardResponse OK
     * @throws ApiError
     */
    public static searchPostUsingGet({
        boardTitle,
        keyword,
        page,
    }: {
        /**
         * boardTitle
         */
        boardTitle: string,
        /**
         * keyword
         */
        keyword: string,
        /**
         * page
         */
        page: number,
    }): CancelablePromise<GetBoardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/search',
            query: {
                'boardTitle': boardTitle,
                'keyword': keyword,
                'page': page,
            },
        });
    }
    /**
     * viewPost
     * @returns PostResponse OK
     * @throws ApiError
     */
    public static viewPostUsingGet({
        postId,
    }: {
        /**
         * postId
         */
        postId: number,
    }): CancelablePromise<PostResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/{postId}',
            path: {
                'postId': postId,
            },
        });
    }
    /**
     * updatePost
     * @returns any OK
     * @throws ApiError
     */
    public static updatePostUsingPut({
        postId,
        request,
    }: {
        /**
         * postId
         */
        postId: number,
        /**
         * request
         */
        request: PostUpdateRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/post/{postId}',
            path: {
                'postId': postId,
            },
            body: request,
        });
    }
    /**
     * deletePost
     * @returns any OK
     * @throws ApiError
     */
    public static deletePostUsingDelete({
        postId,
    }: {
        /**
         * postId
         */
        postId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/post/{postId}',
            path: {
                'postId': postId,
            },
        });
    }
    /**
     * likePost
     * @returns any OK
     * @throws ApiError
     */
    public static likePostUsingPost({
        postId,
    }: {
        /**
         * postId
         */
        postId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/{postId}/like',
            path: {
                'postId': postId,
            },
        });
    }
}
