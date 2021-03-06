/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { SkillType } from "game/entity/IHuman";
import { InfoProvider } from "game/inspection/InfoProvider";
import { Quality } from "game/IObject";
import { IHasMagic, MagicalNormalPropertyTypes, MagicalPropertyIdentity, MagicalPropertyTypeSubTypeMap, MagicalSubPropertyTypes } from "game/magic/MagicalPropertyManager";
import Translation from "language/Translation";
import { TranslationGenerator } from "ui/component/IComponent";
import { IRange } from "utilities/math/Range";
export declare type NumberTranslator = (number: number | IRange, isMod: boolean, isPercent: boolean) => Translation;
export default class MagicalPropertyValue extends InfoProvider {
    private readonly base;
    private numberTranslator?;
    private formatter?;
    private isModifier?;
    private baseColor?;
    private baseColorPreferred?;
    private currentColor?;
    private current?;
    private magical?;
    private magicalProperty?;
    private magicalReduction?;
    private quality?;
    private qualityModifier?;
    private skill?;
    private skillModifier?;
    private baseHidden?;
    private hiddenWhenZero?;
    private isPercentage?;
    private percentageIsPremultiplied?;
    private expandedVerbose?;
    private before;
    private after;
    constructor(base: GetterOfOr<number | IRange>);
    setMagical(magicalThingy: IHasMagic | undefined, type: MagicalNormalPropertyTypes): this;
    setMagical<T extends MagicalSubPropertyTypes>(magicalThingy: IHasMagic | undefined, type: T, subType?: MagicalPropertyTypeSubTypeMap[T]): this;
    setMagical(magicalThingy: IHasMagic | undefined, ...identity: MagicalPropertyIdentity): this;
    setMagicalReduction(): this;
    setQuality(quality?: Quality, modifier?: number | IRange): this;
    setSkill(skill?: SkillType, modifier?: number | IRange): this;
    setIsModifier(isModifier?: boolean): this;
    setBaseHidden(): this;
    setHiddenWhenZero(): this;
    /**
     * Not compatible with `setNumberTranslator`.
     */
    setIsPercentage(isPercentage?: boolean, premultiplied?: boolean): this;
    setCurrent(amount: GetterOfOr<number>): this;
    setBaseColor(translation?: Translation, preferred?: boolean): this;
    setCurrentColor(translation: Translation): this;
    setNumberTranslator(translator: (number: number | IRange) => Translation): this;
    setFormatter(formatter?: Translation): this;
    setBefore(...before: Array<TranslationGenerator | InfoProvider | undefined>): this;
    setAfter(...after: Array<TranslationGenerator | InfoProvider | undefined>): this;
    setExpandedVerbose(): this;
    getClass(): string[];
    get(): (TranslationGenerator | InfoProvider)[];
    private getOutOf;
    private formatNumber;
}
