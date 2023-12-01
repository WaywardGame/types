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
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import { ItemType } from "@wayward/game/game/item/IItem";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
export default class RecipeInspection extends Inspection<ItemType> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => boolean;
    private checker;
    constructor([, itemType]: [any, ItemType]);
    getId(): string;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    private getDetails;
    private isUnskilled;
    protected getRuneInfo(): SimpleInfoProvider | undefined;
    private getDescription;
    private getDoodadUses;
    private getRequirements;
}
