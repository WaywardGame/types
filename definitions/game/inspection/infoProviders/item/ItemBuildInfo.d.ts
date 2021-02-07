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
import { ActionType } from "entity/action/IAction";
import { InfoProvider } from "game/inspection/InfoProvider";
import Item from "item/Item";
import Translation from "language/Translation";
export default class ItemBuildInfo extends InfoProvider {
    private readonly item;
    private readonly doodadDescription;
    static get(item: Item, action: ActionType): ItemBuildInfo | undefined;
    private constructor();
    initComponent(): import("../../../../newui/component/Component").default<HTMLElement>;
    getClass(): string[];
    hasContent(): boolean;
    get(): (Translation | import("../../InfoProvider").SimpleInfoProvider)[];
    private getWeightCapacity;
    private getPreservationChance;
}
