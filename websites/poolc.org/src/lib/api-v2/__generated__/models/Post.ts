/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from './Comment';
export type Post = {
    anonymous?: boolean;
    boardType?: 'CAREER' | 'ETC' | 'EXTERNAL' | 'FREE' | 'NOTICE' | 'PROJECT' | 'STAFF';
    body?: string;
    commentCount?: number;
    commentList?: Array<Comment>;
    createdAt?: string;
    deadline?: string;
    field?: string;
    fileList?: Array<string>;
    id?: number;
    isDeleted?: boolean;
    isQuestion?: boolean;
    likeCount?: number;
    position?: 'BOOTCAMP' | 'COMPETITION' | 'EXPERIENCED_EMPLOYEE' | 'INTERN_FOR_EXPERIENCE' | 'INTERN_FOR_JOB' | 'NEW_EMPLOYEE' | 'OTHER';
    postType?: 'GENERAL_POST' | 'JOB_POST';
    region?: string;
    scrapCount?: number;
    title?: string;
    updatedAt?: string;
};

