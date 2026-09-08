/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MyActivityDetailResponse } from './MyActivityDetailResponse';
export type MyActivitySummaryResponse = {
    officialActivities?: Array<MyActivityDetailResponse>;
    officialActivityHours?: number;
    projectActivities?: Array<MyActivityDetailResponse>;
    projectHours?: number;
    seminarStudyActivities?: Array<MyActivityDetailResponse>;
    seminarStudyHours?: number;
    totalHours?: number;
};

