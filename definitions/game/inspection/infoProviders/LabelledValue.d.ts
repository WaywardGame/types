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
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InfoProvider } from "game/inspection/InfoProvider";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
import Component from "ui/component/Component";
import { TranslationGenerator } from "ui/component/IComponent";
import Text from "ui/component/Text";
export declare enum LabelledValueDisplayMode {
    "label: value" = 0,
    "label (value)" = 1,
    "value label" = 2
}
export default class LabelledValue extends InfoProvider {
    private readonly label;
    private readonly values;
    static label(label: Translation | UiTranslation): {
        add(...values: Array<GetterOfOr<InfoProvider | Translation | UiTranslation | undefined>>): LabelledValue;
    };
    private componentClass;
    private displayMode;
    private contentDisplayLevel?;
    private inline?;
    private classes?;
    private constructor();
    add(...values: Array<Falsy | GetterOfOr<InfoProvider | Translation | UiTranslation | undefined>>): this;
    getClass(): string[];
    addClasses(...classes: string[]): this;
    get(): (Translation | UiTranslation | InfoProvider)[];
    initComponent(): {
        component: Component<HTMLElement>;
        fullInit(): void;
    };
    protected initChildTextComponent(text: TranslationGenerator): Text;
    setComponent(componentClass: Class<Component>): this;
    setDisplayMode(mode: (typeof LabelledValueDisplayMode)["label: value"]): this;
    setDisplayMode(mode: (typeof LabelledValueDisplayMode)["value label"]): this;
    setDisplayMode(mode: (typeof LabelledValueDisplayMode)["label (value)"], contentDisplayLevel?: InfoDisplayLevel): this;
    setInline(): this;
}
