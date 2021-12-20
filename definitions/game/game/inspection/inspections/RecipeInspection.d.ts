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
import { InspectType } from "game/inspection/IInspection";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import DoodadUses from "game/inspection/infoProviders/doodad/DoodadUses";
import ItemDetailsInfoProvider from "game/inspection/infoProviders/item/ItemDetails";
import ItemUses from "game/inspection/infoProviders/item/ItemUses";
import Inspection from "game/inspection/Inspection";
import { ItemType } from "game/item/IItem";
export default class RecipeInspection extends Inspection<ItemType> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => any;
    constructor([, itemType]: [any, ItemType]);
    getId(): string;
    get(context: InfoProviderContext): import("../../../language/impl/TranslationImpl").default | (import("../../../language/impl/TranslationImpl").default | import("game/inspection/InfoProvider").SimpleInfoProvider | ItemDetailsInfoProvider | ItemUses | DoodadUses)[];
    private getDetails;
    private isUnskilled;
    private getReputation;
    private getDescription;
    private getDoodadUses;
    private getRequirements;
}
