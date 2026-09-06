/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Badge } from './Badge';
export type GetPostsResponse = {
    badge?: Badge;
    boardType?: 'CAREER' | 'ETC' | 'EXTERNAL' | 'FREE' | 'NOTICE' | 'PROJECT' | 'STAFF';
    body?: string;
    commentCount?: number;
    createdAt?: string;
    deadline?: string;
    field?: string;
    isQuestion?: boolean;
    likeCount?: number;
    position?: 'BOOTCAMP' | 'COMPETITION' | 'EXPERIENCED_EMPLOYEE' | 'INTERN_FOR_EXPERIENCE' | 'INTERN_FOR_JOB' | 'NEW_EMPLOYEE' | 'OTHER';
    postId?: number;
    postProfileImageUrl?: string;
    postType?: 'GENERAL_POST' | 'JOB_POST';
    region?: string;
    scrapCount?: number;
    title?: string;
    writerLoginId?: string;
    writerName?: string;
};

