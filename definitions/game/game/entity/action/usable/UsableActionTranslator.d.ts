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
import { UsableActionTranslationContext } from "game/entity/action/usable/IUsableAction";
import type { ActionId, IUsableActionPossibleUsing } from "game/entity/action/usable/IUsableAction";
import type UsableAction from "game/entity/action/usable/UsableAction";
import { ActionTranslation } from "language/dictionary/Misc";
import Translation from "language/Translation";
export declare type UsableActionTranslationArguments = [using: IUsableActionPossibleUsing, action: UsableAction, context: UsableActionTranslationContext];
export declare class UsableActionTranslator {
    readonly id: ActionId;
    static translateId(id: ActionId, which?: ActionTranslation): import("../../../../language/impl/TranslationImpl").default | undefined;
    private nameSupplier?;
    private descriptionSupplier?;
    constructor(id: ActionId);
    name(id: ActionId): this;
    name(supplier: SupplierOr<Translation, UsableActionTranslationArguments>): this;
    description(id: ActionId): this;
    description(supplier: SupplierOr<Translation, UsableActionTranslationArguments>): this;
    get(action: UsableAction, using?: IUsableActionPossibleUsing, which?: ActionTranslation, context?: UsableActionTranslationContext): Translation | undefined;
}
