/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConversationCreateRequest } from '../models/ConversationCreateRequest';
import type { ConversationResponse } from '../models/ConversationResponse';
import type { MessageResponse } from '../models/MessageResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ConversationControllerService {
    /**
     * getAllConversations
     * @returns ConversationResponse OK
     * @throws ApiError
     */
    public static getAllConversationsUsingGet(): CancelablePromise<Array<ConversationResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/conversation/all',
        });
    }
    /**
     * createConversation
     * @returns ConversationResponse OK
     * @throws ApiError
     */
    public static createConversationUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: ConversationCreateRequest,
    }): CancelablePromise<ConversationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/conversation/new',
            body: request,
        });
    }
    /**
     * viewConversation
     * @returns MessageResponse OK
     * @throws ApiError
     */
    public static viewConversationUsingGet({
        conversationId,
    }: {
        /**
         * conversationId
         */
        conversationId: string,
    }): CancelablePromise<Array<MessageResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/conversation/{conversationId}',
            path: {
                'conversationId': conversationId,
            },
        });
    }
    /**
     * deleteConversation
     * @returns any OK
     * @throws ApiError
     */
    public static deleteConversationUsingDelete({
        conversationId,
    }: {
        /**
         * conversationId
         */
        conversationId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/conversation/{conversationId}',
            path: {
                'conversationId': conversationId,
            },
        });
    }
}
