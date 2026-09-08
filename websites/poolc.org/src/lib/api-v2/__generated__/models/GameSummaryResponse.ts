/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BallBalancesResponse } from './BallBalancesResponse';
export type GameSummaryResponse = {
    ballBalances?: BallBalancesResponse;
    collectedCatalogCount?: number;
    collectedVariantCount?: number;
    normalCatalogCount?: number;
    shinyCatalogCount?: number;
    shinyDrawStatus?: 'AVAILABLE' | 'COMPLETE' | 'NEEDS_NORMAL';
    totalCatalogCount?: number;
    totalVariantCount?: number;
};

