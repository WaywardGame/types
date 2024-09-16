import type Human from "@wayward/game/game/entity/Human";
import type Item from "@wayward/game/game/item/Item";
export default function (item: Item, human: Human, type?: import("../IItem").ItemType, description?: Readonly<import("../IItem").IItemDescription> | undefined): number | undefined;
