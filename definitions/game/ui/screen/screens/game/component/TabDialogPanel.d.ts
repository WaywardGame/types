/*!
 * Copyright 2011-2023 Unlok
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
interface ITabDialogPanelEvents extends Events<Component> {
    switchTo(): any;
    switchAway(): any;
}
export default abstract class TabDialogPanel extends Component {
    event: IEventEmitter<this, ITabDialogPanelEvents>;
    /**
     * Don't override me
     */
    protected onPanelShow(): void;
}
export {};
