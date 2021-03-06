/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { IRGB } from "utilities/Color";
export interface IParticle {
    clear(): void;
    create(tileX: number, tileY: number, tileZ: number, particle: IRGB): void;
    createMultiple(tileX: number, tileY: number, tileZ: number, particle: IRGB, count: number, intensity?: number, ignoreFieldOfView?: boolean): void;
    simulate(): void;
    render(x: any, y: any): boolean;
}
export declare enum ParticleType {
    Fire = 0,
    Water = 1,
    Blood = 2,
    Milk = 3
}
