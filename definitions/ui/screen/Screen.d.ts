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
import Component from "ui/component/Component";
import ContextMenu from "ui/component/ContextMenu";
import { IBindHandlerApi } from "ui/input/Bind";
import { Background, ScreenId } from "ui/screen/IScreen";
import Log from "utilities/Log";
export default abstract class Screen extends Component {
    readonly type: ScreenId;
    isOverlayScreen: boolean;
    protected lastTooltipSource?: Component;
    protected log: Log;
    private contextMenu?;
    private mouse;
    get background(): Background;
    set background(background: Background);
    constructor(type: ScreenId);
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
    private onMouseDown;
    private onMouseUp;
    private onClick;
}
