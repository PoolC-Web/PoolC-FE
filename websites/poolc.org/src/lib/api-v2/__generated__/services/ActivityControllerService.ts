/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityRequest } from '../models/ActivityRequest';
import type { ActivityResponse } from '../models/ActivityResponse';
import type { AttendanceRequest } from '../models/AttendanceRequest';
import type { AttendanceResponse } from '../models/AttendanceResponse';
import type { GetActivitiesResponse } from '../models/GetActivitiesResponse';
import type { MemberResponse } from '../models/MemberResponse';
import type { SessionCreateRequest } from '../models/SessionCreateRequest';
import type { SessionResponse } from '../models/SessionResponse';
import type { SessionUpdateRequest } from '../models/SessionUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ActivityControllerService {
    /**
     * findActivities
     * @returns GetActivitiesResponse OK
     * @throws ApiError
     */
    public static findActivitiesUsingGet({
        when,
    }: {
        /**
         * when
         */
        when: string,
    }): CancelablePromise<Record<string, Array<GetActivitiesResponse>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activity',
            query: {
                'when': when,
            },
        });
    }
    /**
     * addActivity
     * @returns any OK
     * @throws ApiError
     */
    public static addActivityUsingPost({
        requestBody,
    }: {
        /**
         * requestBody
         */
        requestBody: ActivityRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activity',
            body: requestBody,
        });
    }
    /**
     * applyToActivity
     * @returns string OK
     * @throws ApiError
     */
    public static applyToActivityUsingPost({
        activityId,
    }: {
        /**
         * activityID
         */
        activityId: number,
    }): CancelablePromise<Record<string, Array<string>>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activity/apply/{activityID}',
            path: {
                'activityID': activityId,
            },
        });
    }
    /**
     * attendanceCheck
     * @returns string OK
     * @throws ApiError
     */
    public static attendanceCheckUsingPost({
        requestBody,
    }: {
        /**
         * requestBody
         */
        requestBody: AttendanceRequest,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activity/check',
            body: requestBody,
        });
    }
    /**
     * getAttendanceCheck
     * @returns AttendanceResponse OK
     * @throws ApiError
     */
    public static getAttendanceCheckUsingGet({
        sessionId,
    }: {
        /**
         * sessionID
         */
        sessionId: number,
    }): CancelablePromise<Record<string, Array<AttendanceResponse>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activity/check/{sessionID}',
            path: {
                'sessionID': sessionId,
            },
        });
    }
    /**
     * closeActivity
     * @returns any OK
     * @throws ApiError
     */
    public static closeActivityUsingPut({
        activityId,
    }: {
        /**
         * activityID
         */
        activityId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/activity/close/{activityID}',
            path: {
                'activityID': activityId,
            },
        });
    }
    /**
     * getActivityMembers
     * @returns MemberResponse OK
     * @throws ApiError
     */
    public static getActivityMembersUsingGet({
        activityId,
    }: {
        /**
         * activityID
         */
        activityId: number,
    }): CancelablePromise<Record<string, Array<MemberResponse>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activity/member/{activityID}',
            path: {
                'activityID': activityId,
            },
        });
    }
    /**
     * openActivity
     * @returns any OK
     * @throws ApiError
     */
    public static openActivityUsingPut({
        activityId,
    }: {
        /**
         * activityID
         */
        activityId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/activity/open/{activityID}',
            path: {
                'activityID': activityId,
            },
        });
    }
    /**
     * addSession
     * @returns SessionResponse OK
     * @throws ApiError
     */
    public static addSessionUsingPost({
        requestBody,
    }: {
        /**
         * requestBody
         */
        requestBody: SessionCreateRequest,
    }): CancelablePromise<SessionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/activity/session',
            body: requestBody,
        });
    }
    /**
     * findSessions
     * @returns SessionResponse OK
     * @throws ApiError
     */
    public static findSessionsUsingGet({
        activityId,
    }: {
        /**
         * activityID
         */
        activityId: number,
    }): CancelablePromise<Record<string, Array<SessionResponse>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activity/session/activity/{activityID}',
            path: {
                'activityID': activityId,
            },
        });
    }
    /**
     * updateSession
     * @returns any OK
     * @throws ApiError
     */
    public static updateSessionUsingPut({
        activityId,
        requestBody,
    }: {
        /**
         * activityID
         */
        activityId: number,
        /**
         * requestBody
         */
        requestBody: SessionUpdateRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/activity/session/{activityID}',
            path: {
                'activityID': activityId,
            },
            body: requestBody,
        });
    }
    /**
     * findOneSession
     * @returns SessionResponse OK
     * @throws ApiError
     */
    public static findOneSessionUsingGet({
        sessionId,
    }: {
        /**
         * sessionID
         */
        sessionId: number,
    }): CancelablePromise<SessionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activity/session/{sessionID}',
            path: {
                'sessionID': sessionId,
            },
        });
    }
    /**
     * getYears
     * @returns string OK
     * @throws ApiError
     */
    public static getYearsUsingGet(): CancelablePromise<Record<string, Array<string>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activity/years',
        });
    }
    /**
     * findOneActivity
     * @returns ActivityResponse OK
     * @throws ApiError
     */
    public static findOneActivityUsingGet({
        activityId,
    }: {
        /**
         * activityID
         */
        activityId: number,
    }): CancelablePromise<Record<string, ActivityResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activity/{activityID}',
            path: {
                'activityID': activityId,
            },
        });
    }
    /**
     * updateActivity
     * @returns any OK
     * @throws ApiError
     */
    public static updateActivityUsingPut({
        activityId,
        requestBody,
    }: {
        /**
         * activityID
         */
        activityId: number,
        /**
         * requestBody
         */
        requestBody: ActivityRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/activity/{activityID}',
            path: {
                'activityID': activityId,
            },
            body: requestBody,
        });
    }
    /**
     * deleteActivity
     * @returns any OK
     * @throws ApiError
     */
    public static deleteActivityUsingDelete({
        activityId,
    }: {
        /**
         * activityID
         */
        activityId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/activity/{activityID}',
            path: {
                'activityID': activityId,
            },
        });
    }
}
