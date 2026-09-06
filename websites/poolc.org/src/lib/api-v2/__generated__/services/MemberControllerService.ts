/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemberResetRequest } from '../models/MemberResetRequest';
import type { MemberResponse } from '../models/MemberResponse';
import type { MemberResponseWithHour } from '../models/MemberResponseWithHour';
import type { MemberRolesResponse } from '../models/MemberRolesResponse';
import type { MyActivityHourResponse } from '../models/MyActivityHourResponse';
import type { MyActivitySummaryResponse } from '../models/MyActivitySummaryResponse';
import type { RegisterMemberRequest } from '../models/RegisterMemberRequest';
import type { ToggleRoleRequest } from '../models/ToggleRoleRequest';
import type { UpdateMemberRequest } from '../models/UpdateMemberRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MemberControllerService {
    /**
     * getAllMembers
     * @returns MemberResponse OK
     * @throws ApiError
     */
    public static getAllMembersUsingGet(): CancelablePromise<Record<string, Array<MemberResponse>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/member',
        });
    }
    /**
     * createMember
     * @returns any OK
     * @throws ApiError
     */
    public static createMemberUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: RegisterMemberRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/member',
            body: request,
        });
    }
    /**
     * ActivateMember
     * @returns any OK
     * @throws ApiError
     */
    public static activateMemberUsingPut({
        loginId,
    }: {
        /**
         * loginID
         */
        loginId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/member/activate/{loginID}',
            path: {
                'loginID': loginId,
            },
        });
    }
    /**
     * toggleAdmin
     * @returns any OK
     * @throws ApiError
     */
    public static toggleAdminUsingPut({
        loginId,
    }: {
        /**
         * loginID
         */
        loginId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/member/admin/{loginID}',
            path: {
                'loginID': loginId,
            },
        });
    }
    /**
     * exceptMember
     * @returns any OK
     * @throws ApiError
     */
    public static exceptMemberUsingPut({
        loginId,
    }: {
        /**
         * loginId
         */
        loginId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/member/excepted/{loginId}',
            path: {
                'loginId': loginId,
            },
        });
    }
    /**
     * findMembersWithHoursInSpecificSemester
     * @returns MemberResponseWithHour OK
     * @throws ApiError
     */
    public static findMembersWithHoursInSpecificSemesterUsingGet(): CancelablePromise<Record<string, Array<MemberResponseWithHour>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/member/hour',
        });
    }
    /**
     * getMyActivityTime
     * @returns MyActivityHourResponse OK
     * @throws ApiError
     */
    public static getMyActivityTimeUsingGet(): CancelablePromise<MyActivityHourResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/member/hour/me',
        });
    }
    /**
     * getMe
     * @returns MemberResponse OK
     * @throws ApiError
     */
    public static getMeUsingGet(): CancelablePromise<MemberResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/member/me',
        });
    }
    /**
     * updateMember
     * @returns any OK
     * @throws ApiError
     */
    public static updateMemberUsingPut({
        updateMemberRequest,
    }: {
        /**
         * updateMemberRequest
         */
        updateMemberRequest: UpdateMemberRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/member/me',
            body: updateMemberRequest,
        });
    }
    /**
     * getMyActivitySummary
     * @returns MyActivitySummaryResponse OK
     * @throws ApiError
     */
    public static getMyActivitySummaryUsingGet(): CancelablePromise<MyActivitySummaryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/member/me/activity-summary',
        });
    }
    /**
     * findMembersForProject
     * @returns MemberResponse OK
     * @throws ApiError
     */
    public static findMembersForProjectUsingGet({
        name,
    }: {
        /**
         * name
         */
        name: string,
    }): CancelablePromise<Record<string, Array<MemberResponse>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/member/name',
            query: {
                'name': name,
            },
        });
    }
    /**
     * updateMemberPassword
     * @returns any OK
     * @throws ApiError
     */
    public static updateMemberPasswordUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: MemberResetRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/member/reset-password',
            body: request,
        });
    }
    /**
     * sendResetPasswordTokenMail
     * @returns string OK
     * @throws ApiError
     */
    public static sendResetPasswordTokenMailUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: MemberResetRequest,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/member/reset-password-token',
            body: request,
        });
    }
    /**
     * getRoles
     * @returns MemberRolesResponse OK
     * @throws ApiError
     */
    public static getRolesUsingGet(): CancelablePromise<Record<string, Array<MemberRolesResponse>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/member/role',
        });
    }
    /**
     * selfChangeRole
     * @returns any OK
     * @throws ApiError
     */
    public static selfChangeRoleUsingPut({
        role,
    }: {
        /**
         * role
         */
        role: ToggleRoleRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/member/role',
            body: role,
        });
    }
    /**
     * changeRole
     * @returns any OK
     * @throws ApiError
     */
    public static changeRoleUsingPut({
        loginId,
        role,
    }: {
        /**
         * loginID
         */
        loginId: string,
        /**
         * role
         */
        role: ToggleRoleRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/member/role/{loginID}',
            path: {
                'loginID': loginId,
            },
            body: role,
        });
    }
    /**
     * deleteUnacceptedMembers
     * @returns any OK
     * @throws ApiError
     */
    public static deleteUnacceptedMembersUsingDelete(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/member/unaccepted',
        });
    }
    /**
     * getMemberWithProjectAndActivity
     * @returns MemberResponse OK
     * @throws ApiError
     */
    public static getMemberWithProjectAndActivityUsingGet({
        loginId,
    }: {
        /**
         * loginID
         */
        loginId: string,
    }): CancelablePromise<MemberResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/member/{loginID}',
            path: {
                'loginID': loginId,
            },
        });
    }
}
