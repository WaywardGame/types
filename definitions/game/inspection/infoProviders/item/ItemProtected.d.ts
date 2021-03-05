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
import Item from "game/item/Item";
import Translation from "language/Translation";
export default class ItemProtectedInfoProvider extends InfoProvider {
    private readonly item;
    private itemProtected;
    private itemProtectedContainer;
    constructor(item: Item);
    getClass(): string[];
    getIcon(): {
        path: string;
        width: number;
        height: number;
    };
    initComponent(): {
        component: import("../../../../ui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
    hasContent(): boolean;
    get(): Translation;
    protected onToggleProtected(item: Item): void;
}
