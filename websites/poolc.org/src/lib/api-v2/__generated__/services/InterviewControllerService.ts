/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InterviewTableResponse } from '../models/InterviewTableResponse';
import type { RegisterInterviewSlotRequest } from '../models/RegisterInterviewSlotRequest';
import type { UpdateInterviewSlotRequest } from '../models/UpdateInterviewSlotRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InterviewControllerService {
    /**
     * cancelInterviewSlot
     * @returns InterviewTableResponse OK
     * @throws ApiError
     */
    public static cancelInterviewSlotUsingDelete({
        loginId,
    }: {
        /**
         * loginId
         */
        loginId: string,
    }): CancelablePromise<InterviewTableResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/interview/application/{loginId}',
            path: {
                'loginId': loginId,
            },
        });
    }
    /**
     * applyInterviewSlot
     * @returns InterviewTableResponse OK
     * @throws ApiError
     */
    public static applyInterviewSlotUsingPost({
        slotId,
    }: {
        /**
         * slotId
         */
        slotId: number,
    }): CancelablePromise<InterviewTableResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/interview/application/{slotId}',
            path: {
                'slotId': slotId,
            },
        });
    }
    /**
     * getInterviewTable
     * @returns InterviewTableResponse OK
     * @throws ApiError
     */
    public static getInterviewTableUsingGet(): CancelablePromise<InterviewTableResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/interview/slots',
        });
    }
    /**
     * enrollInterviewSlot
     * @returns InterviewTableResponse OK
     * @throws ApiError
     */
    public static enrollInterviewSlotUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: RegisterInterviewSlotRequest,
    }): CancelablePromise<InterviewTableResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/interview/slots',
            body: request,
        });
    }
    /**
     * deleteAllInterviewSlot
     * @returns InterviewTableResponse OK
     * @throws ApiError
     */
    public static deleteAllInterviewSlotUsingDelete(): CancelablePromise<InterviewTableResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/interview/slots',
        });
    }
    /**
     * updateInterviewSlot
     * @returns InterviewTableResponse OK
     * @throws ApiError
     */
    public static updateInterviewSlotUsingPut({
        request,
        slotId,
    }: {
        /**
         * request
         */
        request: UpdateInterviewSlotRequest,
        /**
         * slotId
         */
        slotId: number,
    }): CancelablePromise<InterviewTableResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/interview/slots/{slotId}',
            path: {
                'slotId': slotId,
            },
            body: request,
        });
    }
    /**
     * deleteInterviewSlot
     * @returns InterviewTableResponse OK
     * @throws ApiError
     */
    public static deleteInterviewSlotUsingDelete({
        slotId,
    }: {
        /**
         * slotId
         */
        slotId: number,
    }): CancelablePromise<InterviewTableResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/interview/slots/{slotId}',
            path: {
                'slotId': slotId,
            },
        });
    }
}
