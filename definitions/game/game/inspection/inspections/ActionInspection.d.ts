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
import type { ActionId, IUsableActionDefinition, IUsableActionPossibleUsing, IUsableActionRequirements } from "@wayward/game/game/entity/action/usable/IUsableAction";
import { UsableActionDisplayContext } from "@wayward/game/game/entity/action/usable/IUsableAction";
import type UsableAction from "@wayward/game/game/entity/action/usable/UsableAction";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { EnumReferenceResolved } from "@wayward/game/game/reference/IReferenceManager";
import { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
export default class ActionInspection extends Inspection<ActionId | undefined> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => boolean;
    static getAction(id: ActionId): UsableAction<IUsableActionRequirements, IUsableActionDefinition> | undefined;
    static getActionNameWithTier(id: ActionId, context: UsableActionDisplayContext, provided: IUsableActionPossibleUsing | undefined, resolveUsing: boolean): TranslationImpl | undefined;
    private static getTranslation;
    static getRuneInfo(id: ActionId, itemType?: ItemType, item?: Item): SimpleInfoProvider | undefined;
    constructor(value?: ActionId | EnumReferenceResolved<ReferenceType.Action>);
    private get using();
    private getAction;
    private get item();
    getId(): string;
    private getActionId;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    private getActionSlotItemMode;
    private getTranslation;
    private getActionDiscovered;
    private static getActionTier;
    private getActionTierInfo;
    private getActionUsability;
    private getActionExample;
}
