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
import type { SkillType } from "game/entity/IHuman";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { Quality } from "game/IObject";
import type { IHasMagic, MagicalNormalPropertyTypes, MagicalSubPropertyTypes } from "game/magic/MagicalPropertyManager";
import { MagicalPropertyIdentity } from "game/magic/MagicalPropertyManager";
import type { MagicalPropertyTypeSubTypeMap } from "game/magic/MagicalPropertyType";
import Translation from "language/Translation";
import type { TranslationGenerator } from "ui/component/IComponent";
import { IRange } from "utilities/math/Range";
export type NumberTranslator = (number: number | IRange, isMod: boolean, isPercent: boolean, isMultiplied: boolean) => Translation;
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
    private magicIncluded?;
    private quality?;
    private qualityModifier?;
    private skill?;
    private skillModifier?;
    private baseHidden?;
    private hiddenWhenZero?;
    private isPercentage?;
    private isMultiplied?;
    private percentageIsPremultiplied?;
    private expandedVerbose?;
    private before;
    private after;
    constructor(base: GetterOfOr<number | IRange>);
    setMagical(magicalThingy: IHasMagic | undefined, type: MagicalNormalPropertyTypes): this;
    setMagical<T extends MagicalSubPropertyTypes>(magicalThingy: IHasMagic | undefined, type: T, subType?: MagicalPropertyTypeSubTypeMap[T]): this;
    setMagical(magicalThingy: IHasMagic | undefined, ...identity: MagicalPropertyIdentity): this;
    setCustomMagical(identity: MagicalPropertyIdentity, custom?: GetterOfOr<number | undefined>): this;
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
    setIsMultiplied(isMultiplied?: boolean): this;
    setCurrent(amount: GetterOfOr<number>): this;
    setBaseColor(translation?: Translation, preferred?: boolean): this;
    setCurrentColor(translation: Translation): this;
    setNumberTranslator(translator: (number: number | IRange) => Translation): this;
    setFormatter(formatter?: Translation): this;
    setBefore(...before: Array<TranslationGenerator | InfoProvider | undefined>): this;
    setAfter(...after: Array<TranslationGenerator | InfoProvider | undefined>): this;
    setExpandedVerbose(): this;
    setMagicIncluded(): this;
    getClass(): string[];
    get(): (TranslationGenerator | InfoProvider)[];
    private getOutOf;
    private formatNumber;
}
