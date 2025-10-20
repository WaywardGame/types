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
import type { SkillType } from "../../skill/ISkills";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type { TileEventType } from "@wayward/game/game/tile/ITileEvent";
import type Message from "@wayward/game/language/dictionary/Message";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import type { IRGB } from "@wayward/utilities/Color";
export interface ICorpseDescription extends IModdable {
    decay?: number;
    resource?: ICorpseResourceDrop[];
    aberrantResource?: ICorpseResourceDrop[];
    carve?: boolean;
    skill?: SkillType;
    damage?: number;
    lightSource?: boolean;
    lightColor?: IRGB;
    animated?: boolean;
    isFlammable?: boolean;
    isTall?: boolean;
    respawns?: boolean;
    /**
     * Things to do when a corpse decays
     */
    createOnDecay?: Partial<ICorpseCreateOnSideEffects>;
    /**
     * Things to do when a corpse is butchered
     */
    createOnButcher?: Partial<ICorpseCreateOnSideEffects> & {
        message?: Message;
    };
}
export interface ICorpseResourceDrop {
    item: ItemType;
    chance?: number;
}
export interface ICorpseCreateOnSideEffects {
    tileType: TerrainType;
    tileEvent: TileEventType;
}
export declare enum CorpseTag {
    None = 0
}
