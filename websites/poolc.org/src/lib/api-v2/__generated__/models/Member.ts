/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BadgeReq } from './BadgeReq';
import type { InterviewSlot } from './InterviewSlot';
import type { MemberRoles } from './MemberRoles';
export type Member = {
    badge?: BadgeReq;
    createdAt?: string;
    department?: string;
    email?: string;
    interviewSlot?: InterviewSlot;
    introduction?: string;
    isExcepted?: boolean;
    loginID?: string;
    name?: string;
    passwordHash?: string;
    passwordResetToken?: string;
    passwordResetTokenValidUntil?: string;
    phoneNumber?: string;
    profileImageURL?: string;
    roles?: MemberRoles;
    studentID?: string;
    updatedAt?: string;
};

