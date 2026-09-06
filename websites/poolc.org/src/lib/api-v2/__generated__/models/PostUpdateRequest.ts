/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from './Comment';
export type PostUpdateRequest = {
    anonymous?: boolean;
    body?: string;
    commentList?: Array<Comment>;
    deadline?: string;
    field?: string;
    fileList?: Array<string>;
    position?: 'BOOTCAMP' | 'COMPETITION' | 'EXPERIENCED_EMPLOYEE' | 'INTERN_FOR_EXPERIENCE' | 'INTERN_FOR_JOB' | 'NEW_EMPLOYEE' | 'OTHER';
    region?: string;
    title?: string;
};

