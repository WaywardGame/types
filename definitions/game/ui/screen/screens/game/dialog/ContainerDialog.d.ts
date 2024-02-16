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
import Entity from "@wayward/game/game/entity/Entity";
import type { IContainer } from "@wayward/game/game/item/IItem";
import type { ITileContainer } from "@wayward/game/game/tile/ITerrain";
import Tile from "@wayward/game/game/tile/Tile";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import Component from "@wayward/game/ui/component/Component";
import { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import ContainerBucket from "@wayward/game/ui/screen/screens/game/component/ContainerBucket";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IContainerDialogEvents extends Events<Dialog> {
    setContainer(container: IContainer): any;
}
export declare enum ContainerDialogClasses {
    Main = "container-dialog",
    Weight = "container-dialog-weight",
    WeightCurrent = "container-dialog-weight-current",
    WeightCapacity = "container-dialog-weight-capacity"
}
export default class ContainerDialog extends Dialog {
    readonly event: IEventEmitter<this, IContainerDialogEvents>;
    readonly bucket: ContainerBucket;
    readonly weight: Component<HTMLElement>;
    constructor(id?: DialogId, subId?: string);
    setContainer(container: IContainer): this;
    protected resolveContainer(): (Tile & ITileContainer) | (Entity & IContainer) | undefined;
    protected onAppend1(): void;
    getName(): TranslationImpl | undefined;
    protected onTickEnd(): void;
    protected onContainerBucketDeregister(): void;
    private closeIfContainedWithinNotOpen;
}
