/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Component from "newui/component/Component";
import { IContextMenu } from "newui/component/IComponent";
import { IBindHandlerApi } from "newui/input/Bind";
import { Background, ScreenId } from "newui/screen/IScreen";
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
    setContextMenu(generator: () => IContextMenu): this;
    /**
     * Remove any current context menu and set the visible context menu for this screen to the given context menu
     */
    setContextMenu(contextMenu: IContextMenu): this;
    setContextMenu(generatorOrContextMenu?: GetterOfOr<IContextMenu>): this;
    /**
     * Hides the currently visible context menu.
     */
    hideContextMenu(contextMenu?: IContextMenu): boolean;
    protected onInput(api: IBindHandlerApi): void;
    protected onScreenShow(): void;
    private onMouseDown;
    private onMouseUp;
    private onClick;
}
