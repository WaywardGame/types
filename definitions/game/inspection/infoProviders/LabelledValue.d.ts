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
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InfoProvider } from "game/inspection/InfoProvider";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
import { TranslationGenerator } from "ui/component/IComponent";
import Text from "ui/component/Text";
export declare enum LabelledValueDisplayMode {
    "label: value" = 0,
    "label (value)" = 1,
    "value label" = 2,
    "label value" = 3
}
export default class LabelledValue extends InfoProvider {
    private readonly label;
    private readonly values;
    static label(label: Translation | UiTranslation | InfoProvider): {
        add(...values: Array<GetterOfOr<InfoProvider | Translation | UiTranslation | undefined>>): LabelledValue;
    };
    private displayMode;
    private contentDisplayLevel?;
    private labelDisplayLevel?;
    private inline?;
    private classes?;
    private constructor();
    add(...values: Array<Falsy | GetterOfOr<InfoProvider | Translation | UiTranslation | undefined>>): this;
    getClass(): string[];
    addClasses(...classes: string[]): this;
    private getLabel;
    get(): (Translation | UiTranslation | InfoProvider)[];
    protected initChildTextComponent(text: TranslationGenerator): Text;
    setDisplayMode(mode: keyof typeof LabelledValueDisplayMode): this;
    setDisplayMode(mode: keyof typeof LabelledValueDisplayMode): this;
    setDisplayMode(mode: keyof typeof LabelledValueDisplayMode, contentDisplayLevel?: InfoDisplayLevel): this;
    setInline(): this;
    setLabelDisplayLevel(displayLevel?: InfoDisplayLevel): this;
}
