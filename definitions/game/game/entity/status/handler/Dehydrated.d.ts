/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { ThirstLevel } from "@wayward/game/game/entity/status/handler/IDehydrated";
import Status from "@wayward/game/game/entity/status/Status";
import { StatusEffectList } from "@wayward/game/game/entity/status/StatusEffectList";
import type { IHighlight } from "@wayward/game/ui/util/IHighlight";
export declare const PERCENT_WARNING_THIRST = 0.2;
export default class Dehydrated extends Status {
    register(): void;
    getHighlight(): IHighlight;
    refresh(): void;
    getLevel(): ThirstLevel;
    getEffects(): StatusEffectList;
    private getThirst;
    private onStatChange;
}
