/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BallBalancesResponse } from './BallBalancesResponse';
export type DrawResponse = {
    abilities?: string;
    attack?: number;
    ballBalances?: BallBalancesResponse;
    category?: string;
    collectibleId?: number;
    defense?: number;
    description?: string;
    drawId?: number;
    drawnAt?: string;
    externalId?: number;
    heightDecimeters?: number;
    hp?: number;
    name?: string;
    rarity?: 'COMMON' | 'EPIC' | 'LEGENDARY' | 'RARE';
    shiny?: boolean;
    shinySpriteUrl?: string;
    specialAttack?: number;
    specialDefense?: number;
    speed?: number;
    spriteUrl?: string;
    weightHectograms?: number;
};

