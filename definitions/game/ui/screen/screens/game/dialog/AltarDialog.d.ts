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
import type { IContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type ItemManager from "@wayward/game/game/item/ItemManager";
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import ContainerDialog from "@wayward/game/ui/screen/screens/game/dialog/ContainerDialog";
import { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
export declare enum AltarDialogClasses {
    Body_ConsecrateDisabled = "altar-dialog-body--consecrate-disabled",
    Bucket = "altar-dialog-bucket",
    ConsecrateButton = "altar-dialog-consecrate-button",
    ConsecrateButtonDisabled = "altar-dialog-consecrate-button--disabled",
    ResultArrow = "altar-dialog-result-arrow",
    Projection = "altar-dialog-projection",
    ProjectionItem = "altar-dialog-projection-item"
}
export default class AltarDialog extends ContainerDialog {
    readonly consecrateButton: Button;
    readonly resultArrow: Component<HTMLElement>;
    readonly projection: Component<HTMLElement>;
    constructor(id?: DialogId, subId?: string);
    setContainer(container: IContainer): this;
    protected onContainerChange(item: Item, container: IContainer, oldContainer?: IContainer): void;
    protected onContainerUpdateOrder(man: ItemManager, container: IContainer): void;
    protected itemChange(item: Item): void;
    private refreshProjection;
    private onConsecrate;
}
