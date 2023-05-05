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
import type { Events, IEventEmitter } from "event/EventEmitter";
import Component from "ui/component/Component";
import type ContextMenu from "ui/component/ContextMenu";
import type { IBindHandlerApi } from "ui/input/Bind";
import Macros from "ui/input/Macros";
import { Background, ScreenId } from "ui/screen/IScreen";
import type Dialog from "ui/screen/screens/game/component/Dialog";
import DialogManager from "ui/screen/screens/game/DialogManager";
import type { DialogId } from "ui/screen/screens/game/Dialogs";
import type { IDialogStates } from "ui/screen/screens/GameScreen";
import MenuManager from "ui/screen/screens/menu/MenuManager";
import Log from "utilities/Log";
interface IScreenEvents extends Events<Component> {
    hideDialog(dialogId: DialogId): any;
    showDialog(dialog: Dialog): any;
    showContextMenu(contextMenu: ContextMenu): any;
    hideContextMenu(contextMenu: ContextMenu): any;
}
export default abstract class Screen extends Component {
    readonly type: ScreenId;
    event: IEventEmitter<this, IScreenEvents>;
    isOverlayScreen: boolean;
    protected lastTooltipSource?: Component;
    log: Log;
    private contextMenu?;
    private mouse;
    readonly menus: MenuManager;
    dialogs: DialogManager;
    visibleDialogs: IDialogStates;
    constructor(type: ScreenId);
    remove(): this;
    getBackground(): Background;
    setBackground(background: Background): this;
    removeBackground(): this;
    hasContextMenu(): boolean;
    getPartialContextMenuMacros(): Macros.IBindableMatch | undefined;
    hasPartialContextMenuMacro(api: IBindHandlerApi, macroMatch?: Macros.IBindableMatch): boolean;
    /**
     * Remove the context menu from this element
     */
    setContextMenu(): this;
    /**
     * Set the context menu for this element
     */
    setContextMenu(generator: (contextMenu: ContextMenu) => ContextMenu): this;
    /**
     * Remove any current context menu and set the visible context menu for this screen to the given context menu
     */
    setContextMenu(contextMenu: ContextMenu): this;
    setContextMenu(generatorOrContextMenu?: ContextMenu | ((contextMenu: ContextMenu) => ContextMenu)): this;
    /**
     * Hides the currently visible context menu.
     */
    hideContextMenu(contextMenu?: ContextMenu): boolean;
    protected onInput(api: IBindHandlerApi): void;
    protected onScreenShow(): void;
    protected onScreenHide(): void;
    private onMouseDown;
    private onMouseUp;
    private onClick;
}
export {};
