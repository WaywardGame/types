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
import type UsableAction from "game/entity/action/usable/UsableAction";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import { ActionTranslation } from "language/dictionary/Misc";
import type { TranslationArg } from "language/ITranslation";
import Translation from "language/Translation";
export type UsableActionTranslationArguments = [using: IUsableActionPossibleUsing, action: UsableAction, context: UsableActionDisplayContext, inspectionContext?: InfoProviderContext];
export type ActionWhichTranslation = ActionTranslation | "useExact" | "useByTypeAndQuality" | "useByType" | "useAny";
export declare class UsableActionTranslator {
    readonly id: ActionId;
    static translateId(id: ActionId, which?: ActionTranslation): import("../../../../language/impl/TranslationImpl").default | undefined;
    private nameSupplier?;
    private descriptionSupplier?;
    private useExactSupplier?;
    private useByTypeAndQualitySupplier?;
    private useByTypeSupplier?;
    private useAnySupplier?;
    private readonly args;
    constructor(id: ActionId);
    name(id: ActionId): this;
    name(supplier: SupplierOr<Translation, UsableActionTranslationArguments>): this;
    addArgs(...args: Array<Exclude<TranslationArg, () => TranslationArg> | Supplier<TranslationArg, UsableActionTranslationArguments>>): this;
    description(id: ActionId): this;
    description(supplier: SupplierOr<Translation, UsableActionTranslationArguments>): this;
    useExact(supplier: SupplierOr<Translation, UsableActionTranslationArguments>): this;
    useByTypeAndQuality(supplier: SupplierOr<Translation, UsableActionTranslationArguments>): this;
    useByType(supplier: SupplierOr<Translation, UsableActionTranslationArguments>): this;
    useAny(supplier: SupplierOr<Translation, UsableActionTranslationArguments>): this;
    get(action: UsableAction, using?: IUsableActionPossibleUsing, which?: ActionWhichTranslation, context?: UsableActionDisplayContext, inspectionContext?: InfoProviderContext): Translation | undefined;
}
