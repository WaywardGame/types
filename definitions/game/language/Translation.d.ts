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
import type { GameEmitterOrBus } from "@wayward/game/event/EventManager";
import type { IHasQuality } from "@wayward/game/game/IObject";
import { Quality } from "@wayward/game/game/IObject";
import Deity from "@wayward/game/game/deity/Deity";
import type { GrowingStage } from "@wayward/game/game/doodad/IDoodad";
import { DamageType } from "@wayward/game/game/entity/IEntity";
import type { EquipType } from "@wayward/game/game/entity/IHuman";
import type { SkillType } from "../game/entity/skill/ISkills";
import { Stat } from "@wayward/game/game/entity/IStats";
import type { ActionType } from "@wayward/game/game/entity/action/IAction";
import type { UsableActionType } from "@wayward/game/game/entity/action/usable/UsableActionType";
import { MessageType } from "@wayward/game/game/entity/player/IMessageManager";
import type { StatusType } from "@wayward/game/game/entity/status/IStatus";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type { ItemType } from "@wayward/game/game/item/IItem";
import { MagicalPropertyIdentity, type IHasMagic } from "@wayward/game/game/magic/IMagicalProperty";
import type MagicalPropertyType from "@wayward/game/game/magic/MagicalPropertyType";
import { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { EnumReferenceTypes, Reference, Referenceable } from "@wayward/game/game/reference/IReferenceManager";
import Dictionary from "@wayward/game/language/Dictionary";
import type { DictionaryEntryEnums } from "@wayward/game/language/DictionaryMap";
import type { ListEnder, TranslationArg } from "@wayward/game/language/ITranslation";
import { Article, ISerializedTranslation } from "@wayward/game/language/ITranslation";
import Message from "@wayward/game/language/dictionary/Message";
import type { Term } from "@wayward/game/language/dictionary/Misc";
import { EquipSlotTranslation, MiscTranslation } from "@wayward/game/language/dictionary/Misc";
import type UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
import type { TranslationReformatter } from "@wayward/game/language/impl/TranslationImpl";
import TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import { formatListTranslation } from "@wayward/game/language/segment/FormatListSegment";
import TranslationListBuilder from "@wayward/game/language/utility/TranslationListBuilder";
import TranslationSorter from "@wayward/game/language/utility/TranslationSorter";
import { IStringSection } from "@wayward/game/utilities/string/Interpolator";
import { IRange } from "@wayward/utilities/math/Range";
type Translation = TranslationImpl;
declare namespace Translation {
    export function is(value: unknown): value is Translation;
    export function equals(a: Translation, b: Translation): boolean;
    export function coalesce(...translations: Translation[]): Translation | undefined;
    export const RANDOM = "random";
    export const getString: typeof TranslationImpl.getString;
    export const resolve: typeof TranslationImpl.resolve;
    export const sorter: typeof TranslationSorter.create;
    /**
     * Gets a translation given a dictionary, entry, and translation index.
     * @param dictionary The dictionary to get a translation from, for instance, `Dictionary.Item`.
     * @param entry The entry in the given dictionary to get a translation from, for instance, `Item.Branch`.
     * @param index Optional. The index of the translation in the given dictionary entry, for instance `ItemTranslation.Description`,
     * or `"random"` to return any of the translations in this entry.
     */
    export function get<DICT extends Dictionary>(dictionary: DICT | undefined, entry: Dictionary extends DICT ? string | number : DictionaryEntryEnums[DICT], index?: "random" | number): Translation;
    /**
     * Gets a translation by its translation id. Entry matching is done by changing the case-style of the inputted
     * translation id, so if you provide an all lower-case string it will not work!
     *
     * Examples that do work:
     *
     * - `Ui:MenuMainButtonContinueGame`
     * - `ui:menuMainButtonContinueGame`
     * - `ui:menu-main-button-continue-game`
     * - `Ui:Menu-Main-Button-Continue-Game`
     * - `Player.FirstName:random`
     * - `Creature.AcidSpitterDemon:1`
     *
     * Examples that don't work:
     *
     * - `UI:MENU-MAIN-BUTTON-CONTINUE-GAME`
     * - `Ui:menumainbuttoncontinuegame`
     * - `UI:MENUMAINBUTTONCONTINUEGAME`
     */
    export function get(translationId: string): Translation;
    /**
     * Gets an array of all the translations in a dictionary entry.
     * @param dictionary The dictionary to get a translation from, for instance, `Dictionary.Item`.
     * @param entry The entry in the given dictionary to get a translation from, for instance, `Item.Branch`.
     */
    export function getAll<DICT extends Dictionary>(dictionary: DICT, entry: Dictionary extends DICT ? number : DictionaryEntryEnums[DICT]): Translation[];
    /**
     * Gets an array of translations by their translation id. Entry matching is done by changing the case-style of the inputted
     * translation id, so if you provide an all lower-case string it will not work!
     *
     * Examples that do work:
     *
     * - `Ui:MenuMainButtonContinueGame`
     * - `ui:menuMainButtonContinueGame`
     * - `ui:menu-main-button-continue-game`
     * - `Ui:Menu-Main-Button-Continue-Game`
     * - `Player.FirstName:random`
     * - `Creature.AcidSpitterDemon:1`
     *
     * Examples that don't work:
     *
     * - `UI:MENU-MAIN-BUTTON-CONTINUE-GAME`
     * - `Ui:menumainbuttoncontinuegame`
     * - `UI:MENUMAINBUTTONCONTINUEGAME`
     */
    export function getAll(translationId: string): Translation[];
    export function nameOf(type: Dictionary, thing: number | {
        type: number;
        renamed?: string | ISerializedTranslation;
    }, article?: Article, preArticleReformatters?: [ArrayOr<TranslationReformatter>, ...TranslationArg[]]): Translation;
    export function nameOf(type: Dictionary, thing: number | {
        type: number;
        renamed?: string | ISerializedTranslation;
    }, count?: number, article?: Article, showRenamedQuotes?: boolean, preArticleReformatters?: [ArrayOr<TranslationReformatter>, ...TranslationArg[]]): Translation;
    interface Translator<ENTRY extends number = number, ARGS extends any[] = []> {
        (entry: string | ENTRY, ...args: ARGS): Translation;
        (entry?: string | ENTRY, ...args: ARGS): Translation | undefined;
    }
    type TranslatorImpl<ENTRY extends number = number, ARGS extends any[] = []> = (entry?: string | ENTRY, ...args: ARGS) => Translation | undefined;
    export function translator<ENTRY extends number = number, ARGS extends any[] = []>(_translator: TranslatorImpl<ENTRY, ARGS> | Dictionary): Translator<ENTRY, ARGS>;
    export function refTranslator<ENTRY extends number = number>(refType: EnumReferenceTypes, dictionary: SupplierOr<Dictionary, [number]>, color?: (entry: string | ENTRY) => TranslationImpl): Translator<ENTRY, [color?: boolean]>;
    export function customRefTranslator<TRANSLATOR extends TranslatorImpl<number, [reference: Reference, ...any[]]>>(refType: EnumReferenceTypes, _translator: TRANSLATOR, color?: (entry: string | number) => TranslationImpl): TRANSLATOR extends TranslatorImpl<infer ENTRY, [reference: Reference | undefined, ...infer ARGS]> ? Translator<ENTRY, ARGS> : never;
    export const empty: () => Translation;
    export const sentence: () => Translation;
    export const count: (amount: number, noun?: TranslationArg) => Translation;
    export const countUnit: (amount: number, unit: TranslationArg) => Translation;
    export const ui: Translator<UiTranslation, []>;
    export const message: Translator<Message, []>;
    export const misc: Translator<MiscTranslation, []>;
    export const term: Translator<Term, [count?: number | undefined, article?: Article | undefined]>;
    export const skill: Translator<SkillType, [color?: boolean | undefined]>;
    export const milestone: Translator<Milestone, [color?: boolean | undefined]>;
    export const stat: Translator<Stat, [color?: boolean | undefined]>;
    export const status: Translator<StatusType, [color?: boolean | undefined]>;
    export const itemType: Translator<ItemType, [color?: boolean | undefined]>;
    export const deity: Translator<Deity, [color?: boolean | undefined]>;
    export let action: Translator<ActionType | UsableActionType>;
    export let magic: Translator<MagicalPropertyType, [color?: boolean, obscured?: boolean]>;
    export let magicCurse: Translator<MagicalPropertyType, [color?: boolean, obscured?: boolean]>;
    export const equipSlot: Translator<EquipType, [type?: EquipSlotTranslation | undefined]>;
    export const quality: Translator<Quality, [color?: any]>;
    export const qualityList: (qualities: ArrayOr<Quality>, color?: boolean, ender?: ListEnder | false) => Translation;
    /**
     * Damage types are bit flags, so multiple can be stored in one `DamageType`.
     * This method returns a translated list of damage types.
     */
    export const damage: (damageTypes: ArrayOr<DamageType>, colorize?: boolean, reformatter?: ((type: DamageType) => Translation | undefined) | Translation) => Translation;
    export function growthStage(stage: GrowingStage, spores?: boolean): Translation;
    export function growthStage(stage?: GrowingStage, spores?: boolean): Translation | undefined;
    export function merge(...content: TranslationArg[]): Translation;
    export function mergeSpaced(...content: TranslationArg[]): Translation;
    enum LabelName {
        "label: value" = 0,
        "label (value)" = 1,
        "value label" = 2,
        "value (label)" = 3,
        "label value" = 4,
        "label - value" = 5,
        "valuelabel" = 6
    }
    export type LabelType = keyof typeof LabelName;
    export function labelled(type: LabelType, label: TranslationArg, ...content: TranslationArg[]): Translation;
    export function labelled(label: TranslationArg, ...content: TranslationArg[]): Translation;
    export function simplify(normal?: TranslationArg, extra?: TranslationArg, verbose?: TranslationArg): Translation;
    export function colorizeQuality(quality: SupplierOr<Quality | string | undefined>): Translation;
    export function colorizeQuality(quality: SupplierOr<Quality | string | undefined>, text: string | IStringSection): Translation;
    export function colorizeQuality(quality: SupplierOr<Quality | string | undefined>, text: IStringSection[]): Translation;
    export function colorizeMessageType(type: MessageType): Translation;
    export function colorizeMessageType(type: MessageType, text: string | IStringSection): Translation;
    export function colorizeMessageType(type: MessageType, text: IStringSection[]): Translation;
    export function colorizeStat(type: Stat | string): Translation;
    export function colorizeStat(type: Stat | string, text: string | IStringSection): Translation;
    export function colorizeStat(type: Stat | string, text: IStringSection[]): Translation;
    export function colorizeImportance(importance: "primary" | "secondary"): Translation;
    export function colorizeImportance(importance: "primary" | "secondary", text: string | IStringSection): Translation;
    export function colorizeImportance(importance: "primary" | "secondary", text: IStringSection[]): Translation;
    export function classes(...classes: string[]): Translation;
    export const formatList: typeof formatListTranslation;
    export const listBuilder: typeof TranslationListBuilder;
    export function reformatSingularNoun(): Translation;
    export function reformatSingularNoun(count: number): Translation;
    export function reformatSingularNoun(article: Article): Translation;
    export function reformatSingularNoun(count: number, article: Article): Translation;
    export function reformatSingularNoun(count?: number | Article, article?: Article): Translation;
    export const qualityAffix: (qualities: ArrayOr<Quality>) => Translation | undefined;
    export function reference(reference?: Reference | Referenceable, context?: InfoProviderContext, forceInclude?: true): Translation;
    export interface ITranslationUpgrader {
        translation?(translation: Translation | ISerializedTranslation): any;
        argument?(argument: TranslationArg): TranslationArg;
    }
    export function upgrade(translation: ISerializedTranslation, id: `${keyof typeof Dictionary}:${string}`, dictionary: Dictionary, entry: number, upgrader?: ITranslationUpgrader): Translation | ISerializedTranslation;
    export function upgradeTranslationArgument(argument: TranslationArg, id: string, dictionary: Dictionary, entry: number, upgrader?: ITranslationUpgrader): TranslationArg;
    export function formula(base?: FVal, reformatter?: SupplierOr<Translation | undefined>): TranslationFormulaBuilder;
    type FVal = SupplierOr<number | IRange | TranslationFormulaBuilder>;
    class TranslationFormulaBuilder {
        private readonly components;
        private combinedComponent?;
        private get combinedValue();
        /**
         * Returns true if any component in this formula is relevant
         */
        private get relevant();
        private skipParenthesis?;
        private isPercentage?;
        private percentageIsPremultiplied?;
        constructor(base?: FVal, reformatter?: SupplierOr<Translation | undefined>);
        noParenthesis(): this;
        percentage(isPercentage?: boolean, premultiplied?: boolean): this;
        translate(simple?: boolean | "unless verbose"): Translation;
        private parenthesize;
        private translateAndFormatComponent;
        private translateComponent;
        private translateComponentValue;
        private resolveComponentValue;
        private getHighestValueComponent;
        private getCombinedComponent;
        combined(value?: FVal, reformatter?: SupplierOr<Translation | undefined>): this;
        base(value: FVal, reformatter?: SupplierOr<Translation | undefined>): this;
        add(value?: FVal, reformatter?: SupplierOr<Translation | undefined>, alreadyIncluded?: true): this;
        mult(value: FVal, reformatter?: SupplierOr<Translation | undefined>, alreadyIncluded?: true): this;
        outOf(value: FVal): TranslationImpl;
        quality(quality?: IHasQuality | SupplierOr<Quality | undefined>, value?: FVal, reformatter?: SupplierOr<Translation | undefined>, alreadyIncluded?: true): this;
        qualityMult(quality?: IHasQuality | SupplierOr<Quality | undefined>, value?: FVal, reformatter?: SupplierOr<Translation | undefined>, alreadyIncluded?: true): this;
        private _quality;
        skill(skill?: SkillType, value?: FVal, reformatter?: SupplierOr<Translation | undefined>, alreadyIncluded?: true): this;
        skillMult(skill?: SkillType, value?: FVal, reformatter?: SupplierOr<Translation | undefined>, alreadyIncluded?: true): this;
        private _skill;
        magic(magic?: MagicalPropertyIdentity, magical?: IHasMagic, value?: FVal, reformatter?: SupplierOr<Translation | undefined>, alreadyIncluded?: true): this;
        magicMult(magic?: MagicalPropertyIdentity, magical?: IHasMagic, value?: FVal, reformatter?: SupplierOr<Translation | undefined>, alreadyIncluded?: true): this;
        private _magic;
        private addComponent;
    }
    export type RefreshEvents = Map<GameEmitterOrBus, Map<string, Set<AnyFunction<boolean> | undefined>>>;
    export function getRefreshEvents(translation: Translation): Generator<RefreshEvents>;
    export {};
}
export default Translation;
