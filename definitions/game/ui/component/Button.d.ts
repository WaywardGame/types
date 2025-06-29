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
import type { SfxType, SfxUi } from "@wayward/game/audio/IAudio";
import type { IIcon } from "@wayward/game/game/inspection/InfoProvider";
import Component from "@wayward/game/ui/component/Component";
import type { IDisableable, TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import Text, { Paragraph } from "@wayward/game/ui/component/Text";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
interface IButtonEvents extends Events<Component> {
    activate(): any;
    toggleDisabled(disabled: boolean): any;
    toggleActive(active: boolean): any;
    initializeText(text: Text): any;
}
export declare enum ButtonClasses {
    Main = "button",
    DisplayModeBlock = "button-block",
    DisplayModeIcon = "button-icon",
    DisplayModeButtonList = "button-list",
    Active = "active",
    Disabled = "disabled",
    NoAction = "button-no-action",
    HasButtonButtons = "has-button-buttons",
    ButtonButtons = "button-buttons",
    Text = "button-text",
    ListIconsZoom2To3 = "button-list-zoom-2-to-3",
    IconZoom2To3 = "button-icon-zoom-2-to-3",
    Opaque = "button-opaque",
    Description = "button-description"
}
export declare enum ButtonType {
    None = "button-type-none",
    Accept = "button-type-accept",
    Warning = "button-type-warning",
    Important = "button-type-important"
}
export default class Button extends Component implements IDisableable {
    event: IEventEmitter<this, IButtonEvents>;
    text?: Text;
    description?: Paragraph;
    wrapperButtons?: Component;
    private _activated;
    private readonly _disabledReasons;
    get disabled(): boolean;
    private readonly _activeReasons;
    get active(): boolean;
    constructor(elementType?: string, listenForEvents?: boolean);
    setDisplayMode(mode: ButtonClasses.DisplayModeButtonList, zoomClass: ButtonClasses.ListIconsZoom2To3): this;
    setDisplayMode(mode: ButtonClasses.DisplayModeBlock | ButtonClasses.DisplayModeIcon | ButtonClasses.DisplayModeButtonList | false): this;
    setType(type?: ButtonType): this;
    setActionless(isActionless?: boolean, setDisabled?: boolean): this;
    isButtonList(): boolean;
    setDisabled(val?: boolean, reason?: string): this;
    setActive(val?: boolean, reason?: string): this;
    activate(playSound?: boolean): void;
    addButton(returnNewButton: true, initializer: (button: Button) => Button): Button;
    addButton(initializer: (button: Button) => Button): this;
    addDescription(initializer?: (description: Paragraph) => any): this;
    setText(text?: TranslationGenerator): this;
    getText(): TranslationGenerator | undefined;
    getTextAsString(): string;
    setInheritTextTooltip(initializer?: (tooltip: Tooltip) => any): this;
    refreshText(): this;
    setIcon(icon?: IIcon, scale?: boolean): this;
    private sound?;
    setSound(sound?: SfxUi | SfxType): this;
    protected playSound(): void;
    protected onClick(event?: Event | MouseEvent): void;
}
export {};
