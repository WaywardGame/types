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
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
import Text from "newui/component/Text";
export default class LabelledValue extends InfoProvider {
    private readonly label;
    private readonly values;
    static label(label: Translation): {
        add(...values: Array<InfoProvider | TranslationGenerator>): LabelledValue;
    };
    private componentClass;
    private constructor();
    add(...values: Array<Falsy | InfoProvider | TranslationGenerator>): this;
    getClass(): string[];
    get(): (Translation | import("../../../language/Translation").ISerializedTranslation | UiTranslation | (() => Translation | import("../../../language/Translation").ISerializedTranslation | Iterable<import("../../../utilities/string/Interpolator").IStringSection> | UiTranslation | undefined) | InfoProvider)[];
    initComponent(): Component<HTMLElement>;
    protected initChildTextComponent(text: TranslationGenerator): Text;
    setComponent(componentClass: Class<Component>): this;
}
