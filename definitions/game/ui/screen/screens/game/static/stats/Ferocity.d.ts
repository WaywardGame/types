/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Entity from "game/entity/Entity";
import { type IStatDisplayDescription } from "ui/screen/screens/game/static/stats/IStatDisplayDescription";
/**
 * Returns the difficulty translation for the given player's reputation
 */
export declare function getFerocityTranslation(entity?: Entity): import("../../../../../../language/impl/TranslationImpl").default;
declare const reputation: IStatDisplayDescription;
export default reputation;
