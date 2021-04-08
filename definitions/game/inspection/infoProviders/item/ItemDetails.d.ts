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
import { InfoProvider } from "game/inspection/InfoProvider";
import ItemWorthInfoProvider from "game/inspection/infoProviders/item/ItemWorth";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import { ItemType } from "game/item/IItem";
import Item from "game/item/Item";
export default class ItemDetailsInfoProvider extends InfoProvider {
    private readonly type;
    private readonly item?;
    private readonly description;
    constructor(item: Item | ItemType);
    getClass(): string[];
    initComponent(): {
        component: import("../../../../ui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
    get(): (0 | import("game/inspection/InfoProvider").SimpleInfoProvider | LabelledValue | ItemWorthInfoProvider)[];
    private getInsulation;
    private getPreservation;
    private getGroupings;
}
