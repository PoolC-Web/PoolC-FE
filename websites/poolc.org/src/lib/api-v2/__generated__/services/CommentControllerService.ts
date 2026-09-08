/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentCreateRequest } from '../models/CommentCreateRequest';
import type { CommentUpdateRequest } from '../models/CommentUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CommentControllerService {
    /**
     * createComment
     * @returns any OK
     * @throws ApiError
     */
    public static createCommentUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: CommentCreateRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/comment',
            body: request,
        });
    }
    /**
     * updateComment
     * @returns any OK
     * @throws ApiError
     */
    public static updateCommentUsingPut({
        commentId,
        request,
    }: {
        /**
         * commentId
         */
        commentId: number,
        /**
         * request
         */
        request: CommentUpdateRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/comment/{commentId}',
            path: {
                'commentId': commentId,
            },
            body: request,
        });
    }
    /**
     * deleteComment
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCommentUsingDelete({
        commentId,
    }: {
        /**
         * commentId
         */
        commentId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/comment/{commentId}',
            path: {
                'commentId': commentId,
            },
        });
    }
    /**
     * likeComment
     * @returns any OK
     * @throws ApiError
     */
    public static likeCommentUsingPost({
        commentId,
    }: {
        /**
         * commentId
         */
        commentId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/comment/{commentId}/like',
            path: {
                'commentId': commentId,
            },
        });
    }
}
