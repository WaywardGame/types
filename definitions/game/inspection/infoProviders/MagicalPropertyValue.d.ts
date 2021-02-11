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
import { IHasMagicalProperties, MagicalPropertyType } from "item/IItem";
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
    private outOf?;
    private magical?;
    private magicalPropertyType?;
    private before;
    private after;
    constructor(base: GetterOfOr<number>);
    setCombined(combined: (base: number, magical: number) => number): this;
    setMagicalOn(type: MagicalPropertyType, on: IHasMagicalProperties): this;
    setMagical(type: MagicalPropertyType, magical: GetterOfOr<number | undefined>): this;
    setIsModifier(): this;
    /**
     * Alias of `setNumberFormatter(Translation.misc(MiscTranslation.Percent))`
     */
    setIsPercentage(): this;
    setOutOf(amount: GetterOfOr<number>): this;
    setBaseColor(translation: Translation): this;
    setNumberFormatter(formatter: Translation): this;
    setFormatter(formatter: Translation): this;
    setBefore(...before: Array<TranslationGenerator | InfoProvider | undefined>): this;
    setAfter(...after: Array<TranslationGenerator | InfoProvider | undefined>): this;
    getClass(): string[];
    get(): (Translation | import("../../../language/Translation").ISerializedTranslation | UiTranslation | (() => Translation | import("../../../language/Translation").ISerializedTranslation | Iterable<import("../../../utilities/string/Interpolator").IStringSection> | UiTranslation | undefined) | InfoProvider)[];
    private getOutOf;
    initComponent(): {
        component: import("../../../newui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
    private formatNumber;
}
