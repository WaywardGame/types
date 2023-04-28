/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { GrowingStage } from "game/doodad/IDoodad";
import { DamageType } from "game/entity/IEntity";
import { EquipType, SkillType } from "game/entity/IHuman";
import { Stat } from "game/entity/IStats";
import { MessageType } from "game/entity/player/IMessageManager";
import { Quality } from "game/IObject";
import { Milestone } from "game/milestones/IMilestone";
import Dictionary from "language/Dictionary";
import Message from "language/dictionary/Message";
import { EquipSlotTranslation, MiscTranslation } from "language/dictionary/Misc";
import type UiTranslation from "language/dictionary/UiTranslation";
import type { DictionaryEntryEnums } from "language/DictionaryMap";
import TranslationImpl from "language/impl/TranslationImpl";
import type { ISerializedTranslation, TranslationArg } from "language/ITranslation";
import { formatListTranslation } from "language/segment/FormatListSegment";
import ITranslationSorter from "language/utility/TranslationSorter";
import { IStringSection } from "utilities/string/Interpolator";
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
declare module Translation {
    function equals(a: Translation, b: Translation): boolean;
    const RANDOM = "random";
    /**
     * Gets a translation given a dictionary, entry, and translation index.
     * @param dictionary The dictionary to get a translation from, for instance, `Dictionary.Item`.
     * @param entry The entry in the given dictionary to get a translation from, for instance, `Item.Branch`.
     * @param index Optional. The index of the translation in the given dictionary entry, for instance `ItemTranslation.Description`,
     * or `"random"` to return any of the translations in this entry.
     */
    function get<DICT extends Dictionary>(dictionary: DICT, entry: Dictionary extends DICT ? string | number : DictionaryEntryEnums[DICT], index?: "random" | number): Translation;
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
    function get(translationId: string): Translation;
    /**
     * Gets an array of all the translations in a dictionary entry.
     * @param dictionary The dictionary to get a translation from, for instance, `Dictionary.Item`.
     * @param entry The entry in the given dictionary to get a translation from, for instance, `Item.Branch`.
     */
    function getAll<DICT extends Dictionary>(dictionary: DICT, entry: Dictionary extends DICT ? number : DictionaryEntryEnums[DICT]): Translation[];
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
    function getAll(translationId: string): Translation[];
    const empty: () => TranslationImpl;
    const ui: (entry: string | UiTranslation) => TranslationImpl;
    const message: (entry: string | Message) => TranslationImpl;
    const misc: (entry: string | MiscTranslation) => TranslationImpl;
    const skill: (entry: string | SkillType, color?: boolean) => TranslationImpl;
    const milestone: (entry: string | Milestone, color?: boolean) => TranslationImpl;
    const stat: (entry: string | Stat, color?: boolean) => TranslationImpl;
    const equipSlot: (entry: string | EquipType, type?: EquipSlotTranslation) => TranslationImpl;
    const quality: (entry: string | Quality, color?: boolean) => TranslationImpl;
    /**
     * Damage types are bit flags, so multiple can be stored in one `DamageType`.
     * This method returns a translated list of damage types.
     */
    const damage: (damageTypes: ArrayOr<DamageType>, colorize?: boolean, reformatter?: TranslationImpl | ((type: DamageType) => Translation) | undefined) => TranslationImpl;
    function growthStage(stage: GrowingStage, spores?: boolean): TranslationImpl;
    function growthStage(stage?: GrowingStage, spores?: boolean): TranslationImpl | undefined;
    function merge(...content: TranslationArg[]): TranslationImpl;
    function mergeSpaced(...content: TranslationArg[]): TranslationImpl;
    const getString: typeof TranslationImpl.getString;
    const resolve: typeof TranslationImpl.resolve;
    function colorizeQuality(quality: Quality | string | undefined): Translation;
    function colorizeQuality(quality: Quality | string | undefined, text: string | IStringSection): IStringSection;
    function colorizeQuality(quality: Quality | string | undefined, text: IStringSection[]): IStringSection[];
    function colorizeMessageType(type: MessageType): Translation;
    function colorizeMessageType(type: MessageType, text: string | IStringSection): IStringSection;
    function colorizeMessageType(type: MessageType, text: IStringSection[]): IStringSection[];
    function colorizeStat(type: Stat | string): Translation;
    function colorizeStat(type: Stat | string, text: string | IStringSection): IStringSection;
    function colorizeStat(type: Stat | string, text: IStringSection[]): IStringSection[];
    function colorizeImportance(importance: "primary" | "secondary"): Translation;
    function colorizeImportance(importance: "primary" | "secondary", text: string | IStringSection): IStringSection;
    function colorizeImportance(importance: "primary" | "secondary", text: IStringSection[]): IStringSection[];
    function classes(...classes: string[]): TranslationImpl;
    const formatList: typeof formatListTranslation;
    const sorter: typeof ITranslationSorter.create;
    function nameOf(type: Dictionary, thing: number | {
        type: number;
        renamed?: string | ISerializedTranslation;
    }, article?: Article): Translation;
    function nameOf(type: Dictionary, thing: number | {
        type: number;
        renamed?: string | ISerializedTranslation;
    }, count?: number, article?: Article, showRenamedQuotes?: boolean): Translation;
    function reformatSingularNoun(): Translation;
    function reformatSingularNoun(count: number): Translation;
    function reformatSingularNoun(article: Article): Translation;
    function reformatSingularNoun(count: number, article: Article): Translation;
    function reformatSingularNoun(count?: number | Article, article?: Article): Translation;
    interface ITranslationUpgrader {
        translation?(translation: TranslationImpl | ISerializedTranslation): any;
        argument?(argument: TranslationArg): TranslationArg;
    }
    function upgrade(translation: ISerializedTranslation, id: `${keyof typeof Dictionary}:${string}`, dictionary: Dictionary, entry: number, upgrader?: ITranslationUpgrader): ISerializedTranslation | TranslationImpl;
    function upgradeTranslationArgument(argument: TranslationArg, id: string, dictionary: Dictionary, entry: number, upgrader?: ITranslationUpgrader): TranslationArg;
}
export default Translation;
