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
import type { SfxType } from "@wayward/game/audio/IAudio";
import type { MessageType } from "@wayward/game/game/entity/player/IMessageManager";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import { MilestoneDataType, MilestoneVisibility } from "@wayward/game/game/milestones/IMilestone";
import type { MilestoneManager } from "@wayward/game/game/milestones/MilestoneManager";
import { GameMode } from "@wayward/game/game/options/IGameOptions";
import type { TranslationArg } from "@wayward/game/language/ITranslation";
import type Message from "@wayward/game/language/dictionary/Message";
import type { EnumObject } from "@wayward/utilities/enum/IEnum";
export default class MilestoneDefinition {
    dataType: MilestoneDataType;
    amount: SupplierOr<number>;
    /**
     * This milestone is a milestone that will be granted the first time it's updated.
     * Can be used for keeping track of metagame progress.
     */
    static event(): MilestoneDefinition;
    /**
     * This milestone will be granted when an `amount` of conditions happen simultaneously.
     * For example, this could be used to check for a skill level.
     */
    static check(amount: SupplierOr<number>): MilestoneDefinition;
    /**
     * This milestone will be granted after being incremented `amount` times.
     * It does not require each increment to have a different ID, like `counter` does.
     * For example, this type could be used for "number of turns played".
     */
    static increment(amount: SupplierOr<number>): MilestoneDefinition;
    /**
     * This milestone type requires a number of entries, each of which must be distinct.
     * For example, this could be used to check if the player has tamed every single creature type.
     */
    static counter(amount: SupplierOr<number>): MilestoneDefinition;
    /**
     * This milestone type requires a number of entries, each of which must be distinct, and which must be discovered in order, from `1` to `amount`.
     * `0` is never required for discovery.
     * For example, this could be used to handle staged discovery.
     */
    static discovery(obj: EnumObject<Record<string, string | number>>): MilestoneDefinition;
    private constructor();
    /**
     * Replaces the type and desired amount of this MilestoneDefinition with the type and desired amount of another's.
     */
    set(def: MilestoneDefinition): this;
    /**
     * Inherits the metadata (visibility, applicable game modes, whether it's disabled by mods, any unlock handler)
     * of another MilestoneDefinition.
     */
    inherit(def: MilestoneDefinition): this;
    visibility: MilestoneVisibility;
    visibleThreshold: number | Milestone;
    /**
     * @param visibility Whether the milestone is completely visible, has its name hidden, or has its required amount hidden. Defaults to `Visible`
     * @param until Sets the time when the milestone will become `Visible`. This can be either:
     * - A completion threshold (in a fractional value between 0 and 1)
     * - A different milestone to complete first
     */
    setVisibility(visibility: MilestoneVisibility, until?: number): this;
    /**
     * Sets this milestone to be unlockable in all game modes, and not disabled by mods.
     */
    setAlwaysUnlockable(): this;
    gameModeLock?: GameMode[];
    /**
     * @param gameModes What game modes this milestone can be unlocked in. Defaults to `[Hardcore]`
     */
    setGameModes(...gameModes: GameMode[]): this;
    /**
     * Sets this milestone to be unlockable in all game modes.
     */
    setGameModes(all: "all"): this;
    disabledByMods: boolean;
    setNotDisabledByMods(): this;
    unlockedHandler?: (tellPlayer: (message?: Message, args?: TranslationArg[], type?: MessageType, sfxType?: SfxType) => void) => any;
    onUnlocked(handler: (tellPlayer: (message?: Message, args?: TranslationArg[], type?: MessageType, sfxType?: SfxType) => void) => any): this;
    progressHandler?: (newData: string | number | undefined, tellPlayer: (message?: Message, args?: TranslationArg[], type?: MessageType, sfxType?: SfxType) => void) => any;
    onProgress(handler: (newData: string | number | undefined, tellPlayer: (message?: Message, args?: TranslationArg[], type?: MessageType, sfxType?: SfxType) => void) => any): this;
    milestoneProgressHandler?: (milestones: MilestoneManager, milestone: Milestone, newData?: string | number) => any;
    registerMilestoneProgressHandler(handler: (milestones: MilestoneManager, milestone: Milestone, newData?: string | number) => any): this;
}
