/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Member } from './Member';
import type { Post } from './Post';
export type Comment = {
    anonymous?: boolean;
    body?: string;
    children?: Array<Comment>;
    createdAt?: string;
    id?: number;
    isChild?: boolean;
    isDeleted?: boolean;
    likeCount?: number;
    member?: Member;
    parent?: Comment;
    post?: Post;
    updatedAt?: string;
};

