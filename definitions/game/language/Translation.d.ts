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
import { Quality } from "@wayward/game/game/IObject";
import { Deity } from "@wayward/game/game/deity/Deity";
import type { GrowingStage } from "@wayward/game/game/doodad/IDoodad";
import type { StatusType } from "@wayward/game/game/entity/IEntity";
import { DamageType } from "@wayward/game/game/entity/IEntity";
import type { EquipType, SkillType } from "@wayward/game/game/entity/IHuman";
import { Stat } from "@wayward/game/game/entity/IStats";
import type { ActionType } from "@wayward/game/game/entity/action/IAction";
import type { UsableActionType } from "@wayward/game/game/entity/action/usable/UsableActionType";
import { MessageType } from "@wayward/game/game/entity/player/IMessageManager";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type { IHasMagic } from "@wayward/game/game/magic/MagicalPropertyManager";
import { MagicalPropertyIdentity } from "@wayward/game/game/magic/MagicalPropertyManager";
import type { MagicalPropertyType } from "@wayward/game/game/magic/MagicalPropertyType";
import { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { EnumReferenceTypes, Reference } from "@wayward/game/game/reference/IReferenceManager";
import Dictionary from "@wayward/game/language/Dictionary";
import type { DictionaryEntryEnums } from "@wayward/game/language/DictionaryMap";
import type { ISerializedTranslation, TranslationArg } from "@wayward/game/language/ITranslation";
import Message from "@wayward/game/language/dictionary/Message";
import { EquipSlotTranslation, MiscTranslation } from "@wayward/game/language/dictionary/Misc";
import UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
import TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import { formatListTranslation } from "@wayward/game/language/segment/FormatListSegment";
import ITranslationSorter from "@wayward/game/language/utility/TranslationSorter";
import { IStringSection } from "@wayward/game/utilities/string/Interpolator";
export declare enum Article {
    /**
     * Use no article.
     */
    None = "",
    /**
     * In English, this is "a" or "an" in front of the text, assuming the "count" is one.
     */
    Indefinite = "indefinite",
    /**
     * In English, this is "the" in front of the text.
     */
    Definite = "definite",
    /**
     * Uses "indefinite" if the user hasn't opted out of articles in titles.
     */
    Title = "title"
}
type Translation = TranslationImpl;
declare namespace Translation {
    export function equals(a: Translation, b: Translation): boolean;
    export const RANDOM = "random";
    /**
     * Gets a translation given a dictionary, entry, and translation index.
     * @param dictionary The dictionary to get a translation from, for instance, `Dictionary.Item`.
     * @param entry The entry in the given dictionary to get a translation from, for instance, `Item.Branch`.
     * @param index Optional. The index of the translation in the given dictionary entry, for instance `ItemTranslation.Description`,
     * or `"random"` to return any of the translations in this entry.
     */
    export function get<DICT extends Dictionary>(dictionary: DICT, entry: Dictionary extends DICT ? string | number : DictionaryEntryEnums[DICT], index?: "random" | number): Translation;
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
    type Translator<ENTRY extends number = number, ARGS extends any[] = []> = (entry: string | ENTRY, ...args: ARGS) => Translation;
    export function translator<ENTRY extends number = number, ARGS extends any[] = []>(_translator: Translator<ENTRY, ARGS> | Dictionary): Translator<ENTRY, ARGS>;
    export function refTranslator<ENTRY extends number = number>(refType: EnumReferenceTypes, dictionary: SupplierOr<Dictionary, [number]>, color?: (entry: string | ENTRY) => TranslationImpl): Translator<ENTRY, [color?: boolean]>;
    export function customRefTranslator<TRANSLATOR extends Translator<number, [reference: Reference, ...any[]]>>(refType: EnumReferenceTypes, _translator: TRANSLATOR, color?: (entry: string | number) => TranslationImpl): TRANSLATOR extends Translator<infer ENTRY, [reference: Reference | undefined, ...infer ARGS]> ? Translator<ENTRY, ARGS> : never;
    export const empty: () => TranslationImpl;
    export const ui: Translator<UiTranslation, []>;
    export const message: Translator<Message, []>;
    export const misc: Translator<MiscTranslation, []>;
    export const skill: Translator<SkillType, [color?: boolean | undefined]>;
    export const milestone: Translator<Milestone, [color?: boolean | undefined]>;
    export const stat: Translator<Stat, [color?: boolean | undefined]>;
    export const itemType: Translator<ItemType, [color?: boolean | undefined]>;
    export const deity: Translator<Deity, [color?: boolean | undefined]>;
    export const status: (entry: string | StatusType, ref?: boolean) => TranslationImpl;
    export let action: Translator<ActionType | UsableActionType>;
    export let magic: Translator<MagicalPropertyType, [color?: boolean, obscured?: boolean]>;
    export const equipSlot: Translator<EquipType, [type?: EquipSlotTranslation | undefined]>;
    export const quality: Translator<Quality, [color?: any]>;
    export const qualityList: (qualities: ArrayOr<Quality>, color?: boolean) => TranslationImpl;
    export const qualitize: (qualities: ArrayOr<Quality>) => TranslationImpl | undefined;
    /**
     * Damage types are bit flags, so multiple can be stored in one `DamageType`.
     * This method returns a translated list of damage types.
     */
    export const damage: (damageTypes: ArrayOr<DamageType>, colorize?: boolean, reformatter?: ((type: DamageType) => Translation) | Translation) => TranslationImpl;
    export function growthStage(stage: GrowingStage, spores?: boolean): TranslationImpl;
    export function growthStage(stage?: GrowingStage, spores?: boolean): TranslationImpl | undefined;
    export function merge(...content: TranslationArg[]): TranslationImpl;
    export function mergeSpaced(...content: TranslationArg[]): TranslationImpl;
    export function labelled(label: TranslationArg, ...content: TranslationArg[]): TranslationImpl;
    export const getString: typeof TranslationImpl.getString;
    export const resolve: typeof TranslationImpl.resolve;
    export function colorizeQuality(quality: Quality | string | undefined): Translation;
    export function colorizeQuality(quality: Quality | string | undefined, text: string | IStringSection): Translation;
    export function colorizeQuality(quality: Quality | string | undefined, text: IStringSection[]): Translation;
    export function colorizeMessageType(type: MessageType): Translation;
    export function colorizeMessageType(type: MessageType, text: string | IStringSection): Translation;
    export function colorizeMessageType(type: MessageType, text: IStringSection[]): Translation;
    export function colorizeStat(type: Stat | string): Translation;
    export function colorizeStat(type: Stat | string, text: string | IStringSection): Translation;
    export function colorizeStat(type: Stat | string, text: IStringSection[]): Translation;
    export function colorizeImportance(importance: "primary" | "secondary"): Translation;
    export function colorizeImportance(importance: "primary" | "secondary", text: string | IStringSection): Translation;
    export function colorizeImportance(importance: "primary" | "secondary", text: IStringSection[]): Translation;
    export function classes(...classes: string[]): TranslationImpl;
    export const formatList: typeof formatListTranslation;
    export const sorter: typeof ITranslationSorter.create;
    export function nameOf(type: Dictionary, thing: number | {
        type: number;
        renamed?: string | ISerializedTranslation;
    }, article?: Article): Translation;
    export function nameOf(type: Dictionary, thing: number | {
        type: number;
        renamed?: string | ISerializedTranslation;
    }, count?: number, article?: Article, showRenamedQuotes?: boolean): Translation;
    export function reformatSingularNoun(): Translation;
    export function reformatSingularNoun(count: number): Translation;
    export function reformatSingularNoun(article: Article): Translation;
    export function reformatSingularNoun(count: number, article: Article): Translation;
    export function reformatSingularNoun(count?: number | Article, article?: Article): Translation;
    export interface ITranslationUpgrader {
        translation?(translation: TranslationImpl | ISerializedTranslation): any;
        argument?(argument: TranslationArg): TranslationArg;
    }
    export function upgrade(translation: ISerializedTranslation, id: `${keyof typeof Dictionary}:${string}`, dictionary: Dictionary, entry: number, upgrader?: ITranslationUpgrader): TranslationImpl | ISerializedTranslation;
    export function upgradeTranslationArgument(argument: TranslationArg, id: string, dictionary: Dictionary, entry: number, upgrader?: ITranslationUpgrader): TranslationArg;
    export function formula(base?: number): TranslationFormulaBuilder;
    type FVal = SupplierOr<number> | TranslationFormulaBuilder;
    class TranslationFormulaBuilder {
        private readonly components;
        private combinedComponent?;
        private get combinedValue();
        private get relevant();
        private skipParenthesis?;
        constructor(base?: FVal);
        noParenthesis(): this;
        translate(simplify?: boolean): Translation;
        private parenthesize;
        private translateAndFormatComponent;
        private translateComponent;
        private resolveComponentValue;
        private getCombinedComponent;
        combined(value?: FVal, reformatter?: Translation): this;
        base(value: FVal, reformatter?: Translation): this;
        mod(value?: FVal, reformatter?: Translation, alreadyIncluded?: true): this;
        mult(value: FVal, reformatter?: Translation, alreadyIncluded?: true): this;
        quality(quality: Quality, value: FVal, reformatter?: Translation, alreadyIncluded?: true): this;
        skill(skill: SkillType, value: FVal, reformatter?: Translation, alreadyIncluded?: true): this;
        magic(magic: MagicalPropertyIdentity, magical: IHasMagic, value?: FVal, reformatter?: Translation, alreadyIncluded?: true): this;
        private addComponent;
    }
    export {};
}
export default Translation;
