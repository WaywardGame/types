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
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import { Heading } from "@wayward/game/ui/component/Text";
/**
 * [Label          Button1 Button2 Button3]
 */
export declare class LabeledButtonRow extends Component {
    readonly label: Heading;
    constructor(elementType?: string);
    setLabel(labelInitializer: (label: Heading) => Heading): this;
    addButton(buttonInitializer: (button: Button) => Button): this;
    protected onChildrenChange(): void;
}
