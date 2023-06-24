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
import type { ActionId, IUsableActionPossibleUsing } from "game/entity/action/usable/IUsableAction";
import { UsableActionDisplayContext } from "game/entity/action/usable/IUsableAction";
import { InspectType } from "game/inspection/IInspection";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import type { EnumReferenceResolved } from "game/reference/IReferenceManager";
import { ReferenceType } from "game/reference/IReferenceManager";
import type { TranslationGenerator } from "ui/component/IComponent";
export default class ActionInspection extends Inspection<ActionId | undefined> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => boolean;
    constructor(value?: string | EnumReferenceResolved<ReferenceType.Action>);
    private get using();
    private get item();
    getId(): string;
    private getActionId;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    private getActionSlotItemMode;
    private getTranslation;
    static getActionNameWithTier(id: ActionId, context: UsableActionDisplayContext, provided: IUsableActionPossibleUsing | undefined, resolveUsing: boolean): import("../../../language/impl/TranslationImpl").default | undefined;
    private static getTranslation;
    private getActionDiscovered;
    private static getActionTier;
    private getActionTierInfo;
    private getActionUsability;
    private getActionExample;
}
