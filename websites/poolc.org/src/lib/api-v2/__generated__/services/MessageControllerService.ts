/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageCreateRequest } from '../models/MessageCreateRequest';
import type { MessageResponse } from '../models/MessageResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MessageControllerService {
    /**
     * sendMessage
     * @returns any OK
     * @throws ApiError
     */
    public static sendMessageUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: MessageCreateRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/message/send',
            body: request,
        });
    }
    /**
     * getMessage
     * @returns MessageResponse OK
     * @throws ApiError
     */
    public static getMessageUsingGet({
        messageId,
    }: {
        /**
         * messageId
         */
        messageId: number,
    }): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/message/{messageId}',
            path: {
                'messageId': messageId,
            },
        });
    }
    /**
     * deleteMessage
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMessageUsingDelete({
        messageId,
    }: {
        /**
         * messageId
         */
        messageId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/message/{messageId}',
            path: {
                'messageId': messageId,
            },
        });
    }
}
