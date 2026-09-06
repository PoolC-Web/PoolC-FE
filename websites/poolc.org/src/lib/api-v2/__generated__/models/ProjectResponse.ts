/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemberResponse } from './MemberResponse';
export type ProjectResponse = {
    body?: string;
    category?: 'GAME' | 'OTHER' | 'WEB_APP';
    description?: string;
    duration?: string;
    endDate?: string;
    genre?: string;
    id?: number;
    members?: Array<MemberResponse>;
    name?: string;
    startDate?: string;
    thumbnailURL?: string;
};

