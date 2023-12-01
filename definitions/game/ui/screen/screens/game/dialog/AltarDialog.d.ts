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
import { Deity } from "@wayward/game/game/deity/Deity";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type Human from "@wayward/game/game/entity/Human";
import type { IContainer } from "@wayward/game/game/item/IItem";
import type { IMoveItemOptions } from "@wayward/game/game/item/IItemManager";
import type Item from "@wayward/game/game/item/Item";
import type ItemManager from "@wayward/game/game/item/ItemManager";
import ChoiceList, { Choice } from "@wayward/game/ui/component/ChoiceList";
import { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import ContainerBucket from "@wayward/game/ui/screen/screens/game/component/ContainerBucket";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import AlignmentGraph from "@wayward/game/ui/screen/screens/game/component/deities/AlignmentGraph";
export declare enum AltarDialogClasses {
    Main = "altar-dialog",
    Graph = "altar-dialog-graph",
    DeityWrapper = "altar-dialog-deity-wrapper",
    DeityButton = "altar-dialog-deity-button",
    Container = "altar-dialog-container",
    CloseButton = "altar-dialog-close-button",
    CloseButtonInvoke = "altar-dialog-close-button-invoke",
    CloseButtonSacrifice = "altar-dialog-close-button-sacrifice"
}
export default class AltarDialog extends Dialog {
    private altarRef?;
    get altar(): Doodad | undefined;
    readonly graph: AlignmentGraph;
    readonly deityChoice: ChoiceList.Optional<Choice<Deity>>;
    readonly bucket: ContainerBucket;
    constructor(id?: DialogId, subId?: string);
    protected onAppend1(): void;
    protected onClose1(): Promise<void>;
    private refresh;
    private updateProjection;
    private refreshCloseButton;
    protected onTickEnd(): void;
    protected onMoveItemsToContainer(itemManager: ItemManager, items: Item[], container: IContainer, index: number, options?: IMoveItemOptions, mover?: Human): Promise<void>;
}
