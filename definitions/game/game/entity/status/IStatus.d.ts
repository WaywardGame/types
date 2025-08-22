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
import type { SfxType } from "@wayward/game/audio/IAudio";
import type { StatusChangeReason } from "@wayward/game/game/entity/IEntity";
import type { Stat } from "@wayward/game/game/entity/IStats";
import { MessageType } from "@wayward/game/game/entity/player/IMessageManager";
import type IStatusContext from "@wayward/game/game/entity/status/IStatusContext";
import type Status from "@wayward/game/game/entity/status/Status";
import type { StatusParticleEvent } from "@wayward/game/game/entity/status/Status";
import type { StatusEffectList } from "@wayward/game/game/entity/status/StatusEffectList";
import type { IGameOptionsStatus } from "@wayward/game/game/options/IGameOptions";
import type Dictionary from "@wayward/game/language/Dictionary";
import type { TranslationArg } from "@wayward/game/language/ITranslation";
import type StatusRenderer from "@wayward/game/renderer/StatusRenderer";
import type { IHighlight } from "@wayward/game/ui/util/IHighlight";
import type ImagePath from "@wayward/game/ui/util/ImagePath";
import type { IRGB } from "@wayward/utilities/Color";
import type { IRange } from "@wayward/utilities/math/Range";
export declare const STATUS_BASE_INTERVAL = 20;
export type StatusParticle = [countOrChance: number, color: IRGB];
export interface IStatusDescription {
    applicability: StatusApplicability;
    relevantStat?: Stat;
    levelledDictionary?: Dictionary;
    sound?: SfxType | Record<number, SfxType>;
    /** Defaults to neutral */
    threatLevel?: StatusThreatLevel | Record<number, StatusThreatLevel>;
    /** An optional list of status effect levels that will be displayed in the `StatusInspection` for inspecting the status type itself */
    listedLevels?: number[];
    interval?: SupplierOr<number | undefined, [IStatusContext]>;
    effects?: SupplierOr<StatusEffectList | undefined, [IStatusContext, StatusEffectList]>;
    highlight?: SupplierOr<IHighlight | undefined, [IStatusContext]>;
    icon?: SupplierOr<IStatusIconDescription | undefined, [IStatusContext]>;
    particles?: SupplierOr<StatusParticle | undefined, [IStatusContext, StatusParticleEvent?]>;
    /** A list of `StatusRenderer`s that could be returned by a supplier in the `renderer` property */
    renderers?: StatusRenderer[];
    /** Note that if you use a supplier, the renderer *must* also be in the `renderers` property so that it can be correctly preloaded */
    renderer?: SupplierOr<StatusRenderer | undefined, [IStatusContext]>;
    /** This function is not used automatically by Status, and must be implemented via a custom `onTick` handler */
    getDamageRange?(status: IStatusContext): IRange | undefined;
    /** This function is not used automatically by Status, and must be implemented via a custom `shouldPass` handler */
    getPassChance?(status: IStatusContext): number | undefined;
    getLevel?(status: Status, entityStatusLevel: number): number | undefined;
    isActive?(status: Status): boolean | undefined;
    shouldPass?(status: Status): boolean | undefined;
    onAdd?(status: Status): any;
    onTick?(status: Status, options: IGameOptionsStatus): any;
    onRemove?(status: Status, oldLevel: number, reason: StatusChangeReason): any;
    onTreated?(status: Status, oldLevel: number): any;
    onPassed?(status: Status, oldLevel: number): any;
    refresh?(status: Status): any;
}
export interface IStatusIconDescription {
    /**
     * A custom path for the icon, if necessary.
     */
    path?: string | ImagePath;
    /**
     * The frames of the status effect icon animation. Defaults to `6`.
     */
    frames?: number;
    /**
     * Whether the icon should be overlayed above the status effect border, instead of masked by the bottom border.
     */
    overlay?: true;
}
export declare enum StatusType {
    Bleeding = 0,
    Poisoned = 1,
    Burned = 2,
    Encumbered = 3,
    Exhausted = 4,
    Starving = 5,
    Dehydrated = 6,
    Overheating = 7,
    Freezing = 8,
    Frostbitten = 9,
    Pacified = 10,
    Frenzied = 11,
    Statistician = 12,
    Runekeeper = 13
}
export declare enum StatusApplicability {
    None = 0,
    Creature = 1,
    NPC = 2,
    Player = 4,
    Human = 6
}
export declare enum StatusThreatLevel {
    Good = 0,
    Neutral = 1,
    Issue = 2,
    Threat = 3
}
export declare enum StatusEffectType {
    AddsAChanceOfXOnY = 0,
    CannotX = 1,
    DealingAroundXDamageY = 2,
    DealingXDamageY = 3,
    IncreasesXRate = 4,
    IncreasesXRateByY = 5,
    LosingXEveryY = 6,
    MovementSpeedSlowed = 7,
    PercentChanceToPassEveryX = 8,
    ReducesXByYEveryZ = 9,
    XCannotBeRegained = 10
}
export interface StatusEffectTypeArguments {
    [StatusEffectType.AddsAChanceOfXOnY]: [effect: TranslationArg, on?: TranslationArg];
    [StatusEffectType.CannotX]: [x: TranslationArg];
    [StatusEffectType.DealingAroundXDamageY]: [amount?: TranslationArg, eventOrDuration?: TranslationArg];
    [StatusEffectType.DealingXDamageY]: [amount?: TranslationArg, eventOrDuration?: TranslationArg];
    [StatusEffectType.IncreasesXRate]: [increased: TranslationArg];
    [StatusEffectType.IncreasesXRateByY]: [increased: TranslationArg, by: TranslationArg];
    [StatusEffectType.LosingXEveryY]: [lost: TranslationArg, eventOrDuration?: TranslationArg];
    [StatusEffectType.MovementSpeedSlowed]: [];
    [StatusEffectType.PercentChanceToPassEveryX]: [percent: TranslationArg, eventOrDuration?: TranslationArg];
    [StatusEffectType.ReducesXByYEveryZ]: [reduces: TranslationArg, amount: TranslationArg | undefined, eventOrDuration: TranslationArg];
    [StatusEffectType.XCannotBeRegained]: [notRegainable: TranslationArg];
}
export declare enum StatusEffectGroup {
    VeryBad = 0,
    Bad = 1,
    Neutral = 2,
    Good = 3,
    VeryGood = 4
}
export interface IStatusEffect<TYPE extends StatusEffectType = StatusEffectType> {
    type: TYPE;
    args: StatusEffectTypeArguments[TYPE];
    group?: StatusEffectGroup;
}
export type StatusEffect = {
    [TYPE in StatusEffectType]: IStatusEffect<TYPE>;
}[StatusEffectType];
export declare const STATUS_GROUP_MESSAGE_TYPE_MAP: Record<StatusThreatLevel, MessageType>;
