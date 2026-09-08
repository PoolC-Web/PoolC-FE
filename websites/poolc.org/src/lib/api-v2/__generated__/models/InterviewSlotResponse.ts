/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LocalTimeRes } from './LocalTimeRes';
import type { MemberResponse } from './MemberResponse';
export type InterviewSlotResponse = {
    capacity?: number;
    date?: string;
    endTime?: LocalTimeRes;
    interviewees?: Array<MemberResponse>;
    slotId?: number;
    startTime?: LocalTimeRes;
};

