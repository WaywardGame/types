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
import { Events, IEventEmitter } from "event/EventEmitter";
import Component from "ui/component/Component";
import { IBindHandlerApi } from "ui/input/Bind";
export interface ILightboxEvents extends Events<Component> {
    close(): any;
}
export default class Lightbox extends Component {
    static registerOnDescendants(component: Component): void;
    static register(img: HTMLImageElement | Component<HTMLImageElement>): void;
    static show(event: Event): Promise<void>;
    readonly event: IEventEmitter<this, ILightboxEvents>;
    constructor(img: Component<HTMLImageElement>);
    waitFor(): Promise<[]>;
    close(): void;
    protected onAnythingPressed(api: IBindHandlerApi): void;
}
