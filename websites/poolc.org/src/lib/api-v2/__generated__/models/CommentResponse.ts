/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BadgeRes } from './BadgeRes';
export type CommentResponse = {
    anonymous?: boolean;
    badge?: BadgeRes;
    body?: string;
    children?: Array<CommentResponse>;
    commentId?: number;
    createdAt?: string;
    likeCount?: number;
    parentCommentId?: number;
    postId?: number;
    profileImageUrl?: string;
    writerLoginId?: string;
    writerName?: string;
};

