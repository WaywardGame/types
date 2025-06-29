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
import Component from "@wayward/game/ui/component/Component";
import type ContextMenu from "@wayward/game/ui/component/ContextMenu";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import Macros from "@wayward/game/ui/input/Macros";
import { Background, ScreenId } from "@wayward/game/ui/screen/IScreen";
import type { IDialogStates } from "@wayward/game/ui/screen/screens/GameScreen";
import DialogManager from "@wayward/game/ui/screen/screens/game/DialogManager";
import type { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import type Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import MenuManager from "@wayward/game/ui/screen/screens/menu/MenuManager";
import Log from "@wayward/utilities/Log";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
interface IScreenEvents extends Events<Component> {
    hideDialog(dialogId: DialogId): any;
    showDialog(dialog: Dialog): any;
    showContextMenu(contextMenu: ContextMenu): any;
    hideContextMenu(contextMenu: ContextMenu): any;
    /** Emitted when this screen is obscured by another */
    obscure(): any;
    /** Emitted when this screen is no longer obscured */
    reveal(): any;
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
    get isObscured(): boolean;
    remove(): this;
    getBackground(): Background;
    setBackground(background: Background): this;
    removeBackground(): this;
    hasContextMenu(): boolean;
    getContextMenu(): ContextMenu | undefined;
    /**
     * @deprecated Use {@link getContextMenuMacroMatches}
     */
    getPartialContextMenuMacros(): Macros.IBindableMatch | undefined;
    getContextMenuMacroMatches(): Macros.IBindableMatch | undefined;
    hasPartialContextMenuMacro(api?: Pick<IBindHandlerApi, "input">, macroMatch?: Macros.IBindableMatch): boolean;
    hasContextMenuMacroPartialOrMatch(api?: Pick<IBindHandlerApi, "input">, macroMatch?: Macros.IBindableMatch): boolean;
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
    private shouldInputCancelContextMenu;
    protected onScreenShow(): void;
    protected onScreenHide(): void;
    private onMouseDown;
    private onMouseUp;
    private onClick;
}
export {};
