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
import type { GlobalMouseInfo } from "@wayward/game/ui/input/InputManager";
import type { ItemRefreshType } from "@wayward/game/ui/screen/screens/game/component/item/IItemComponent";
import type ItemComponent from "@wayward/game/ui/screen/screens/game/component/ItemComponent";
import type ActionBar from "@wayward/game/ui/screen/screens/game/static/ActionBar";
import type { ActionSlot } from "@wayward/game/ui/screen/screens/game/static/actions/ActionSlot";
import type { IEventSubscriberEvents } from "@wayward/utilities/event/EventEmitter";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
interface IItemComponentEventBusEvents extends IEventSubscriberEvents {
    update(type: ItemRefreshType): any;
    changeHovered(): any;
}
declare namespace _ {
    class ItemComponentEventBus extends EventEmitter.Host<IItemComponentEventBusEvents> {
        private readonly items;
        private readonly itemsForTickEndEvents;
        registerItem(component: ItemComponent): void;
        registerForTickEndEvents(component: ItemComponent): void;
        deregisterForTickEndEvents(component: ItemComponent): void;
        protected onUpdate(type: ItemRefreshType): void;
        protected onSlotUpdate(actionBar: ActionBar, slot: ActionSlot): void;
        protected onTickEnd(): void;
        protected onLoadedOnIsland(): void;
        protected onActionBarItemSlottedMapUpdate(): void;
        private hovered;
        protected onUpdateTarget(mouse: GlobalMouseInfo): void;
    }
}
type ItemComponentEventBus = _.ItemComponentEventBus;
declare function ItemComponentEventBus(): ItemComponentEventBus;
export default ItemComponentEventBus;
