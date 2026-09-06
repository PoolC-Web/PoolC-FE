/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemberResponse } from './MemberResponse';
export type BookResponse = {
    author?: string;
    borrowDate?: string;
    borrower?: MemberResponse;
    category?: 'ALGORITHM' | 'DATA' | 'DESIGN' | 'PROGRAMMING' | 'SYSTEM';
    description?: string;
    discount?: number;
    donor?: string;
    id?: number;
    imageURL?: string;
    isbn?: string;
    link?: string;
    publishedDate?: string;
    publisher?: string;
    status?: 'AVAILABLE' | 'UNAVAILABLE';
    tags?: Array<string>;
    title?: string;
};

