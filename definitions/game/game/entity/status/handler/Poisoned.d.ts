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
import Status from "@wayward/game/game/entity/status/Status";
import { StatusEffectList } from "@wayward/game/game/entity/status/StatusEffectList";
import StatusRenderer from "@wayward/game/renderer/StatusRenderer";
export default class Poisoned extends Status {
    getRenderer(): StatusRenderer;
    getEffects(): StatusEffectList;
    shouldPass(): boolean;
    onPassed(): void;
    onTick(): void;
    private getTimeToNextThirstTickReductionMultiplier;
    private getDamageRange;
    private getPassChance;
}
