/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PostCreateRequest = {
    anonymous?: boolean;
    boardType?: 'CAREER' | 'ETC' | 'EXTERNAL' | 'FREE' | 'NOTICE' | 'PROJECT' | 'STAFF';
    body?: string;
    deadline?: string;
    field?: string;
    fileList?: Array<string>;
    isQuestion?: boolean;
    position?: 'BOOTCAMP' | 'COMPETITION' | 'EXPERIENCED_EMPLOYEE' | 'INTERN_FOR_EXPERIENCE' | 'INTERN_FOR_JOB' | 'NEW_EMPLOYEE' | 'OTHER';
    postType?: 'GENERAL_POST' | 'JOB_POST';
    region?: string;
    title?: string;
};

