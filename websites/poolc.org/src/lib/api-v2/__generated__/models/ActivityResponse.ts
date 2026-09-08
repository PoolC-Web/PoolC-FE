/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HostResponse } from './HostResponse';
import type { TagResponse } from './TagResponse';
export type ActivityResponse = {
    available?: boolean;
    capacity?: number;
    classHour?: string;
    description?: string;
    fileList?: Array<string>;
    host?: HostResponse;
    hour?: number;
    id?: number;
    memberLoginIds?: Array<string>;
    seminar?: boolean;
    startDate?: string;
    tags?: Array<TagResponse>;
    title?: string;
};

