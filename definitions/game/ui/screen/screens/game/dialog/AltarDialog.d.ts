/*!
 * Copyright 2011-2024 Unlok
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
import Component from "@wayward/game/ui/component/Component";
import ContainerDialog from "@wayward/game/ui/screen/screens/game/dialog/ContainerDialog";
import { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
export declare enum AltarDialogClasses {
    Projection = "altar-dialog-projection",
    ProjectionItem = "altar-dialog-projection-item"
}
export default class AltarDialog extends ContainerDialog {
    readonly projection: Component<HTMLElement>;
    constructor(id?: DialogId, subId?: string);
    setContainer(container: IContainer): this;
    protected onContainerChange(item: Item, container: IContainer, oldContainer?: IContainer): void;
    protected onContainerUpdateOrder(man: ItemManager, container: IContainer): void;
    protected itemChange(item: Item): void;
    private refreshProjection;
}
