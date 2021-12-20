/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { InfoProvider } from "game/inspection/InfoProvider";
import type Item from "game/item/Item";
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
    hasContent(): boolean;
    get(): import("../../../../language/impl/TranslationImpl").default;
    protected onToggleProtected(item: Item): void;
}
