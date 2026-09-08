/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemberResponse } from './MemberResponse';
export type BookResponse = {
    author?: string;
    borrowDate?: string;
    borrower?: MemberResponse;
    category?: 'AI' | 'APP' | 'CERTIFICATION_CAREER' | 'COMPUTER_LANGUAGE' | 'DATA_ANALYSIS_SECURITY' | 'ETC' | 'FRONTEND' | 'GAME' | 'LECTURE_TEXTBOOK' | 'MATH_ELECTRONICS';
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

