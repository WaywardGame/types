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
import Doodad from "doodad/Doodad";
import { InfoDisplayLevel, InfoProvider } from "game/inspection/InfoProvider";
import { IContainer } from "item/IItem";
import Item from "item/Item";
import Translation from "language/Translation";
export default class ContainedItemsInfoProvider extends InfoProvider {
    private readonly container;
    static get(doodad: Doodad): false | ContainedItemsInfoProvider;
    private constructor();
    getClass(): string[];
    getDisplayLevel(): InfoDisplayLevel;
    initComponent(): import("../../../newui/component/Component").default<HTMLElement>;
    hasContent(): boolean;
    get(): Translation;
    protected onItemMove(_: any, item: Item, previousContainer: IContainer | undefined, newContainer: IContainer): void;
}
