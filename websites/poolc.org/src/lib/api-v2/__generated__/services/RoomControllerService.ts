/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RoomGetResponse } from '../models/RoomGetResponse';
import type { RoomPostRequest } from '../models/RoomPostRequest';
import type { RoomUpdateRequest } from '../models/RoomUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RoomControllerService {
    /**
     * findRoomReservation
     * @returns RoomGetResponse OK
     * @throws ApiError
     */
    public static findRoomReservationUsingGet({
        end,
        start,
    }: {
        /**
         * end
         */
        end: string,
        /**
         * start
         */
        start: string,
    }): CancelablePromise<RoomGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/room',
            query: {
                'end': end,
                'start': start,
            },
        });
    }
    /**
     * createRoomReservation
     * @returns any OK
     * @throws ApiError
     */
    public static createRoomReservationUsingPost({
        roomPostRequest,
    }: {
        /**
         * roomPostRequest
         */
        roomPostRequest: RoomPostRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/room',
            body: roomPostRequest,
        });
    }
    /**
     * putRoomReservation
     * @returns any OK
     * @throws ApiError
     */
    public static putRoomReservationUsingPut({
        reservationId,
        roomUpdateRequest,
    }: {
        /**
         * reservationId
         */
        reservationId: number,
        /**
         * roomUpdateRequest
         */
        roomUpdateRequest: RoomUpdateRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/room/{reservationId}',
            path: {
                'reservationId': reservationId,
            },
            body: roomUpdateRequest,
        });
    }
    /**
     * deleteRoomReservation
     * @returns any OK
     * @throws ApiError
     */
    public static deleteRoomReservationUsingDelete({
        reservationId,
    }: {
        /**
         * reservationId
         */
        reservationId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/room/{reservationId}',
            path: {
                'reservationId': reservationId,
            },
        });
    }
}
