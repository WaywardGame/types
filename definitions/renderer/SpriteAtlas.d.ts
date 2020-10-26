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
import { ISpriteInfoList } from "renderer/ISpriteAtlas";
import ISpriteInfo from "renderer/ISpriteInfo";
export default class SpriteAtlas {
    attackAnimations: ISpriteInfoList;
    corpses: ISpriteInfoList;
    creatures: ISpriteInfoList;
    immune: ISpriteInfo;
    items: ISpriteInfoList;
    itemsEquipped: ISpriteInfoList;
    itemsSmall: ISpriteInfoList;
    miss: ISpriteInfo;
    npcs: ISpriteInfoList;
    overlay: ISpriteInfoList;
    playerBody: ISpriteInfo;
    playerHairstyles: ISpriteInfoList;
    playerSleeping: ISpriteInfo;
    shadow: ISpriteInfo;
    sleeps: ISpriteInfoList;
    statusEffectOverlays: ISpriteInfoList;
    statusEffectIcons: ISpriteInfoList;
    text: ISpriteInfo;
    tileEvents: ISpriteInfoList;
    vehicles: ISpriteInfoList;
    zzz: ISpriteInfo;
}
