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
import Translation from "language/Translation";
import Component from "ui/component/Component";
import { TranslationGenerator } from "ui/component/IComponent";
import Text from "ui/component/Text";
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
    get(): (TranslationGenerator | InfoProvider)[];
    initComponent(): {
        component: Component<HTMLElement>;
        fullInit(): void;
    };
    protected initChildTextComponent(text: TranslationGenerator): Text;
    setComponent(componentClass: Class<Component>): this;
}
