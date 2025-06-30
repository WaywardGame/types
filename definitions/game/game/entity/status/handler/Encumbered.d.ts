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
import { WeightStatus } from "@wayward/game/game/entity/player/IPlayer";
import Status from "@wayward/game/game/entity/status/Status";
import { StatusEffectList } from "@wayward/game/game/entity/status/StatusEffectList";
import type { IHighlight } from "@wayward/game/ui/util/IHighlight";
export default class Encumbered extends Status {
    register(): void;
    getLevel(): WeightStatus;
    getHighlight(): IHighlight;
    getEffects(): StatusEffectList;
    refresh(): void;
    private getTimeToNextThirstTickReductionMultiplier;
    private onEntityMove;
    private onStatChange;
    private getStaminaReductionPerTurn;
    private writeEncumberedNote;
}
