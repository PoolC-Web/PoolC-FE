/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectResponse } from '../models/ProjectResponse';
import type { RegisterProjectRequest } from '../models/RegisterProjectRequest';
import type { UpdateProjectRequest } from '../models/UpdateProjectRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectControllerService {
    /**
     * findProjects
     * @returns ProjectResponse OK
     * @throws ApiError
     */
    public static findProjectsUsingGet({
        category,
    }: {
        /**
         * category
         */
        category?: 'GAME' | 'OTHER' | 'WEB_APP',
    }): CancelablePromise<Record<string, Array<ProjectResponse>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/project',
            query: {
                'category': category,
            },
        });
    }
    /**
     * addNewProject
     * @returns any OK
     * @throws ApiError
     */
    public static addNewProjectUsingPost({
        requestBody,
    }: {
        /**
         * requestBody
         */
        requestBody: RegisterProjectRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/project',
            body: requestBody,
        });
    }
    /**
     * findOneProject
     * @returns ProjectResponse OK
     * @throws ApiError
     */
    public static findOneProjectUsingGet({
        projectId,
    }: {
        /**
         * projectID
         */
        projectId: number,
    }): CancelablePromise<Record<string, ProjectResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/project/{projectID}',
            path: {
                'projectID': projectId,
            },
        });
    }
    /**
     * updateProject
     * @returns any OK
     * @throws ApiError
     */
    public static updateProjectUsingPut({
        projectId,
        requestBody,
    }: {
        /**
         * projectID
         */
        projectId: number,
        /**
         * requestBody
         */
        requestBody: UpdateProjectRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/project/{projectID}',
            path: {
                'projectID': projectId,
            },
            body: requestBody,
        });
    }
    /**
     * deleteOneProject
     * @returns any OK
     * @throws ApiError
     */
    public static deleteOneProjectUsingDelete({
        projectId,
    }: {
        /**
         * projectID
         */
        projectId: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/project/{projectID}',
            path: {
                'projectID': projectId,
            },
        });
    }
}
