/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { TerrainType } from "@wayward/game/game/tile/ITerrain";
declare namespace TileBits {
    const maskGfx = 31;
    const maskType = 131040;
    const maskTypeShift = 5;
    const maskTilled = 131072;
    const maskTilledShift: number;
    const maskDoodadOverHidden = 262144;
    const maskDoodadOverHiddenShift: number;
    const maskDoodadAnimationDisabled = 524288;
    const maskDoodadAnimationDisabledShift: number;
    function getTypeRaw(data: number): number;
    function setTypeRaw(data: number, value: TerrainType): number;
    function setTilledRaw(data: number, value: number): number;
    function setDoodadOverHiddenRaw(data: number, value: number): number;
    function setDoodadAnimationDisabledRaw(data: number, value: number): number;
}
export default TileBits;
