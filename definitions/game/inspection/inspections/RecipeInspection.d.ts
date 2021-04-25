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
import { InspectType } from "game/inspection/IInspection";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import DoodadUses from "game/inspection/infoProviders/doodad/DoodadUses";
import ItemDetailsInfoProvider from "game/inspection/infoProviders/item/ItemDetails";
import ItemUses from "game/inspection/infoProviders/item/ItemUses";
import Inspection from "game/inspection/Inspection";
import { ItemType } from "game/item/IItem";
import Translation from "language/Translation";
export default class RecipeInspection extends Inspection<ItemType> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => any;
    constructor([, itemType]: [any, ItemType]);
    getId(): string;
    get(context: InfoProviderContext): Translation | (Translation | import("game/inspection/InfoProvider").SimpleInfoProvider | DoodadUses | ItemDetailsInfoProvider | ItemUses)[];
    private getDetails;
    private isUnskilled;
    private getReputation;
    private getDescription;
    private getDoodadUses;
    private getRequirements;
}
