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
import { InfoProvider } from "game/inspection/InfoProvider";
import { IHasMagic, MagicalNormalPropertyTypes, MagicalPropertyTypeSubTypeMap, MagicalSubPropertyTypes } from "game/MagicalPropertyManager";
import { MagicalPropertyType } from "game/MagicalPropertyType";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
import { TranslationGenerator } from "newui/component/IComponent";
export default class MagicalPropertyValue extends InfoProvider {
    private readonly base;
    private _combined?;
    private numberFormatter?;
    private formatter?;
    private isModifier?;
    private baseColor?;
    private currentColor?;
    private current?;
    private magical?;
    private magicalPropertyType?;
    private before;
    private after;
    constructor(base: GetterOfOr<number>);
    setCombined(combined: (base: number, magical: number) => number): this;
    setMagicalOn(magicalThingy: IHasMagic, type: MagicalNormalPropertyTypes): this;
    setMagicalOn<T extends MagicalSubPropertyTypes>(magicalThingy: IHasMagic, type: T, subType?: MagicalPropertyTypeSubTypeMap[T]): this;
    setMagical(type: MagicalPropertyType, magical: GetterOfOr<number | undefined>): this;
    setIsModifier(): this;
    /**
     * Alias of `setNumberFormatter(Translation.misc(MiscTranslation.Percent))`
     */
    setIsPercentage(): this;
    setCurrent(amount: GetterOfOr<number>): this;
    setBaseColor(translation: Translation): this;
    setCurrentColor(translation: Translation): this;
    setNumberFormatter(formatter: Translation): this;
    setFormatter(formatter: Translation): this;
    setBefore(...before: Array<TranslationGenerator | InfoProvider | undefined>): this;
    setAfter(...after: Array<TranslationGenerator | InfoProvider | undefined>): this;
    getClass(): string[];
    get(): (Translation | import("language/Translation").ISerializedTranslation | UiTranslation | (() => Translation | Iterable<import("../../../utilities/string/Interpolator").IStringSection> | import("language/Translation").ISerializedTranslation | UiTranslation | undefined) | InfoProvider)[];
    private getOutOf;
    initComponent(): {
        component: import("../../../newui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
    private formatNumber;
}
