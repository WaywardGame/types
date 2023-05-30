/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { InspectType } from "game/inspection/IInspection";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import Inspection from "game/inspection/Inspection";
import { ItemType } from "game/item/IItem";
import type { TranslationGenerator } from "ui/component/IComponent";
export default class RecipeInspection extends Inspection<ItemType> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => boolean;
    private checker;
    constructor([, itemType]: [any, ItemType]);
    getId(): string;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    private getDetails;
    private isUnskilled;
    protected getReputation(): LabelledValue | undefined;
    private getDescription;
    private getDoodadUses;
    private getRequirements;
}
