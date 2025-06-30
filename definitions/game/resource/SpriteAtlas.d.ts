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
import type { ISpriteInfo } from "@wayward/game/renderer/ISpriteInfo";
import type { ISpriteInfoList } from "@wayward/game/resource/ISpriteAtlas";
export default class SpriteAtlas {
    attackAnimations: ISpriteInfoList;
    corpses: ISpriteInfoList;
    creatures: ISpriteInfoList;
    doodads: ISpriteInfoList;
    immune: ISpriteInfo;
    items: ISpriteInfoList;
    itemsEquipped: ISpriteInfoList;
    itemsSmall: ISpriteInfoList;
    markerIcons: ISpriteInfoList;
    miss: ISpriteInfo;
    notifiers: ISpriteInfoList;
    npcs: ISpriteInfoList;
    overlay: ISpriteInfoList;
    playerBody: ISpriteInfo;
    playerHairstyles: ISpriteInfoList;
    playerSleeping: ISpriteInfo;
    shadow: ISpriteInfo;
    sleeps: ISpriteInfoList;
    statusIcons: ISpriteInfoList;
    statusOverlays: ISpriteInfoList;
    text: ISpriteInfo;
    tileEvents: ISpriteInfoList;
    vehicles: ISpriteInfoList;
    zzz: ISpriteInfo;
}
