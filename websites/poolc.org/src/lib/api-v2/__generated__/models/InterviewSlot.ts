/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocalTime } from './LocalTime';
import type { Member } from './Member';
export type InterviewSlot = {
    capacity?: number;
    createdAt?: string;
    date?: string;
    endTime?: LocalTime;
    id?: number;
    interviewees?: Array<Member>;
    startTime?: LocalTime;
    updatedAt?: string;
};

