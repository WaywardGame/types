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
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
import Translation from "@wayward/game/language/Translation";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import Text from "@wayward/game/ui/component/Text";
export declare enum LabelledValueDisplayMode {
    "label: value" = 0,
    "label (value)" = 1,
    "value label" = 2,
    "value (label)" = 3,
    "label value" = 4,
    "label - value" = 5,
    "valuelabel" = 6
}
export default class LabelledValue extends InfoProvider {
    private readonly label;
    private readonly values;
    static label(label: GetterOfOr<Translation> | UiTranslation | InfoProvider): {
        add(...values: Array<GetterOfOr<InfoProvider | Translation | UiTranslation | undefined>>): LabelledValue;
    };
    private displayMode;
    private contentDisplayLevel?;
    private labelDisplayLevel?;
    private inline?;
    private labelRow?;
    private classes?;
    private constructor();
    add(...values: Array<Falsy | GetterOfOr<InfoProvider | Translation | UiTranslation | undefined>>): this;
    getClass(): string[];
    addClasses(...classes: string[]): this;
    private getLabel;
    private getPunctuation;
    private getContent;
    get(): Array<Translation | InfoProvider>;
    protected initChildTextComponent(text: TranslationGenerator): Text;
    setDisplayMode(mode: keyof typeof LabelledValueDisplayMode): this;
    setDisplayMode(mode: keyof typeof LabelledValueDisplayMode): this;
    setDisplayMode(mode: keyof typeof LabelledValueDisplayMode, contentDisplayLevel?: InfoDisplayLevel): this;
    setInline(): this;
    setLabelRow(): this;
    setLabelDisplayLevel(displayLevel?: InfoDisplayLevel): this;
}
