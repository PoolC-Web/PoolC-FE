/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AchievementResponse } from '../models/AchievementResponse';
import type { BallBalancesResponse } from '../models/BallBalancesResponse';
import type { CatalogSyncRunResponse } from '../models/CatalogSyncRunResponse';
import type { CollectionItemResponse } from '../models/CollectionItemResponse';
import type { DrawCollectibleRequest } from '../models/DrawCollectibleRequest';
import type { DrawResponse } from '../models/DrawResponse';
import type { FeaturedCollectibleResponse } from '../models/FeaturedCollectibleResponse';
import type { GameSummaryResponse } from '../models/GameSummaryResponse';
import type { UpdateFeaturedCollectibleRequest } from '../models/UpdateFeaturedCollectibleRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GamificationControllerService {
    /**
     * startCatalogSync
     * @returns CatalogSyncRunResponse OK
     * @throws ApiError
     */
    public static startCatalogSyncUsingPost(): CancelablePromise<CatalogSyncRunResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/gamification/admin/catalog/sync',
        });
    }
    /**
     * getLatestCatalogSync
     * @returns CatalogSyncRunResponse OK
     * @throws ApiError
     */
    public static getLatestCatalogSyncUsingGet(): CancelablePromise<CatalogSyncRunResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gamification/admin/catalog/sync/latest',
        });
    }
    /**
     * getAchievements
     * @returns AchievementResponse OK
     * @throws ApiError
     */
    public static getAchievementsUsingGet(): CancelablePromise<Array<AchievementResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gamification/me/achievements',
        });
    }
    /**
     * claimAchievement
     * @returns BallBalancesResponse OK
     * @throws ApiError
     */
    public static claimAchievementUsingPost({
        achievementKey,
    }: {
        /**
         * achievementKey
         */
        achievementKey: string,
    }): CancelablePromise<BallBalancesResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/gamification/me/achievements/{achievementKey}/claim',
            path: {
                'achievementKey': achievementKey,
            },
        });
    }
    /**
     * getCollection
     * @returns CollectionItemResponse OK
     * @throws ApiError
     */
    public static getCollectionUsingGet(): CancelablePromise<Array<CollectionItemResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gamification/me/collection',
        });
    }
    /**
     * getDraws
     * @returns DrawResponse OK
     * @throws ApiError
     */
    public static getDrawsUsingGet(): CancelablePromise<Array<DrawResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gamification/me/draws',
        });
    }
    /**
     * draw
     * @returns DrawResponse OK
     * @throws ApiError
     */
    public static drawUsingPost({
        request,
    }: {
        /**
         * request
         */
        request: DrawCollectibleRequest,
    }): CancelablePromise<DrawResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/gamification/me/draws',
            body: request,
        });
    }
    /**
     * getFeatured
     * @returns FeaturedCollectibleResponse OK
     * @throws ApiError
     */
    public static getFeaturedUsingGet(): CancelablePromise<FeaturedCollectibleResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gamification/me/featured',
        });
    }
    /**
     * updateFeatured
     * @returns FeaturedCollectibleResponse OK
     * @throws ApiError
     */
    public static updateFeaturedUsingPut({
        request,
    }: {
        /**
         * request
         */
        request: UpdateFeaturedCollectibleRequest,
    }): CancelablePromise<FeaturedCollectibleResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/gamification/me/featured',
            body: request,
        });
    }
    /**
     * clearFeatured
     * @returns any OK
     * @throws ApiError
     */
    public static clearFeaturedUsingDelete(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/gamification/me/featured',
        });
    }
    /**
     * getSummary
     * @returns GameSummaryResponse OK
     * @throws ApiError
     */
    public static getSummaryUsingGet(): CancelablePromise<GameSummaryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/gamification/me/summary',
        });
    }
}
