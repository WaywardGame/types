/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { LiquidType } from "game/island/IIsland";
import type { ITileEventDescription } from "game/tile/ITileEvent";
import type TileEvent from "game/tile/TileEvent";
export declare function puddleUpdate(tileEvent: TileEvent, description: ITileEventDescription, liquidType: LiquidType): void;
export declare const puddleOfFreshWater: ITileEventDescription;
export declare const puddleOfPurifiedFreshWater: ITileEventDescription;
export declare const puddleOfUnpurifiedFreshWater: ITileEventDescription;
export declare const puddleOfSeawater: ITileEventDescription;
export declare const puddleOfDesalinatedWater: ITileEventDescription;
export declare const puddleOfMedicinalWater: ITileEventDescription;
export declare const puddleOfGoatMilk: ITileEventDescription;
export declare const puddleOfCoconutWater: ITileEventDescription;
