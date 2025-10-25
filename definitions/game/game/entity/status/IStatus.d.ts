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
import type { StatusEffectList } from "@wayward/game/game/entity/status/StatusEffectList";
import type { IIcon, InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { IGameOptionsStatus } from "@wayward/game/game/options/IGameOptions";
import type Dictionary from "@wayward/game/language/Dictionary";
import type { StatusTranslation } from "@wayward/game/language/dictionary/Misc";
import type { TranslationArg } from "@wayward/game/language/ITranslation";
import type Translation from "@wayward/game/language/Translation";
import type StatusRenderer from "@wayward/game/renderer/StatusRenderer";
import type { IHighlight } from "@wayward/game/ui/util/IHighlight";
import type ImagePath from "@wayward/game/ui/util/ImagePath";
import type { IRGB } from "@wayward/utilities/Color";
import type { IRange } from "@wayward/utilities/math/Range";
export declare const STATUS_BASE_INTERVAL = 20;
export type StatusParticle = [countOrChance: number, color: IRGB];
export interface IStatusDisplayable {
    highlight?: SupplierOr<IHighlight | undefined, [IStatusContext]>;
    icon?: SupplierOr<IStatusIconDescription | undefined, [IStatusContext]>;
    getBorderColorOverride?(status?: Status): string | undefined;
    getCategoryOverride?(status?: Status): IStatusCategoryOverride | undefined;
    getDescriptionContent?(status: Status): IStatusDescriptionContent | undefined;
    effects?: SupplierOr<StatusEffectList | undefined, [IStatusContext, StatusEffectList]>;
}
export interface IStatusCategoryOverride {
    icon: string | IIcon;
    translation: Translation;
}
export interface IStatusDescriptionContent {
    primary?: ArrayOr<Translation | InfoProvider | undefined>;
    secondary?: ArrayOr<Translation | InfoProvider | undefined>;
}
export interface IStatusDescription extends IStatusDisplayable {
    applicability: StatusApplicability;
    relevantStat?: Stat;
    levelledDictionary?: Dictionary | {
        dictionary: Dictionary;
        whichMap: Record<StatusTranslation, number>;
    };
    sound?: SfxType | Record<number, SfxType>;
    /** Defaults to neutral */
    threatLevel?: StatusThreatLevel | Record<number, StatusThreatLevel> | false;
    /** An optional list of status effect levels that will be displayed in the `StatusInspection` for inspecting the status type itself */
    listedLevels?: number[];
    /** An optional replacement list of icons to display for this status effect, rather than the single default icon. */
    getDisplay?(status: Status): IStatusDisplayInstance[] | undefined;
    getSubtitle?(): Translation | undefined;
    /**
     * Controls whether this status is considered important, separate from the "threat level" system.
     *
     * Currently, "important" statuses have the same bounce animation that "threats" have.
     */
    important?: true;
    disableNotifier?: true;
    interval?: SupplierOr<number | undefined, [IStatusContext]> | false;
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
export interface IStatusDisplayInstance extends IStatusDisplayable {
    level?: number;
    threatLevel?: StatusThreatLevel;
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
    Runekeeper = 13,
    Cursed = 14
}
/** Fake status types just for display */
export declare enum DisplayStatusType {
    Cut = -100000,
    RunekeeperEvil = -99999,
    RunekeeperChaos = -99998,
    RunekeeperGood = -99997,
    StatisticianStrength = -99996,
    StatisticianDexterity = -99995,
    StatisticianMetabolism = -99994
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
    Threat = 3,
    Hidden = 4
}
export declare enum StatusEffectType {
    AddsAChanceOfXOnY = 0,
    CannotX = 1,
    DealingAroundXDamageY = 2,
    DealingXDamageY = 3,
    DecreasesXByY = 4,
    IncreasesXByY = 5,
    IncreasesXRate = 6,
    IncreasesXRateByY = 7,
    LosingXEveryY = 8,
    MovementSpeedSlowed = 9,
    PercentChanceToPassEveryX = 10,
    ReducesXByYEveryZ = 11,
    XCannotBeRegained = 12
}
export interface StatusEffectTypeArguments {
    [StatusEffectType.AddsAChanceOfXOnY]: [effect: TranslationArg, on?: TranslationArg];
    [StatusEffectType.CannotX]: [x: TranslationArg];
    [StatusEffectType.DealingAroundXDamageY]: [amount?: TranslationArg, eventOrDuration?: TranslationArg];
    [StatusEffectType.DealingXDamageY]: [amount?: TranslationArg, eventOrDuration?: TranslationArg];
    [StatusEffectType.DecreasesXByY]: [decreases: TranslationArg, amount?: TranslationArg];
    [StatusEffectType.IncreasesXByY]: [increases: TranslationArg, amount?: TranslationArg];
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
export declare enum StatusParticleEvent {
    /**
     * Particle effect for when a turn passes
     */
    Turn = 0,
    /**
     * Particle effect for when the status effect has a "tick". A status effect tick is controlled by the effect rate.
     */
    Tick = 1,
    /**
     * Particle effect for when the status effect passes.
     */
    Passed = 2
}
