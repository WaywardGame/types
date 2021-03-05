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
import { ActionType } from "game/entity/action/IAction";
import { InfoProvider } from "game/inspection/InfoProvider";
import Item from "game/item/Item";
import Translation from "language/Translation";
export default class ItemConsumptionEffects extends InfoProvider {
    private readonly item;
    private readonly consumeAction;
    static get(item: Item, consumeAction: ActionType): ItemConsumptionEffects | undefined;
    private constructor();
    initComponent(): {
        component: import("../../../../ui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
    getClass(): string[];
    hasContent(): boolean;
    get(): Translation;
    private generateUseConsumeTooltip;
}
