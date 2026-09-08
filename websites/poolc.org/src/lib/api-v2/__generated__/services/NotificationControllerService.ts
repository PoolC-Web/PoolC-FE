/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationResponse } from '../models/NotificationResponse';
import type { NotificationSummaryResponse } from '../models/NotificationSummaryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotificationControllerService {
    /**
     * getAllNotifications
     * @returns NotificationSummaryResponse OK
     * @throws ApiError
     */
    public static getAllNotificationsUsingGet(): CancelablePromise<NotificationSummaryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notification/all',
        });
    }
    /**
     * viewAllNotifications
     * @returns any OK
     * @throws ApiError
     */
    public static viewAllNotificationsUsingPost(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification/all',
        });
    }
    /**
     * getUnreadNotifications
     * @returns NotificationSummaryResponse OK
     * @throws ApiError
     */
    public static getUnreadNotificationsUsingGet(): CancelablePromise<NotificationSummaryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notification/unread',
        });
    }
    /**
     * viewNotification
     * @returns NotificationResponse OK
     * @throws ApiError
     */
    public static viewNotificationUsingPost({
        notificationId,
    }: {
        /**
         * notificationId
         */
        notificationId: number,
    }): CancelablePromise<NotificationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notification/{notificationId}',
            path: {
                'notificationId': notificationId,
            },
        });
    }
}
