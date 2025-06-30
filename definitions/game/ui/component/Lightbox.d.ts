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
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface ILightboxEvents extends Events<Component> {
    close(): any;
}
export default class Lightbox extends Component {
    static registerOnDescendants(component: Component): void;
    static register(img: HTMLImageElement | Component<HTMLImageElement>): void;
    static show(event: Event): Promise<void>;
    event: IEventEmitter<this, ILightboxEvents>;
    constructor(img: Component<HTMLImageElement>);
    waitFor(): Promise<[]>;
    close(): void;
    protected onAnythingPressed(api: IBindHandlerApi): void;
}
