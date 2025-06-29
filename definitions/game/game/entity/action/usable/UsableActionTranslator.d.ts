/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { ActionId, IUsableActionPossibleUsing } from "@wayward/game/game/entity/action/usable/IUsableAction";
import { UsableActionDisplayContext } from "@wayward/game/game/entity/action/usable/IUsableAction";
import type UsableAction from "@wayward/game/game/entity/action/usable/UsableAction";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import { ActionTranslation } from "@wayward/game/language/dictionary/Misc";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { TranslationArg } from "@wayward/game/language/ITranslation";
import Translation from "@wayward/game/language/Translation";
import type { IActionUseContextUsing } from "@wayward/game/ui/screen/screens/game/static/actions/IActionBar";
export type UsableActionTranslationArguments = [using: IActionUseContextUsing, action: UsableAction, context: UsableActionDisplayContext, inspectionContext?: InfoProviderContext];
export type ActionWhichTranslation = ActionTranslation | "useExact" | "useBest" | "useNone" | "useHovered";
export declare class UsableActionTranslator {
    readonly id: ActionId;
    static translateId(id: ActionId, which?: ActionTranslation): TranslationImpl | undefined;
    private nameSupplier?;
    private descriptionSupplier?;
    private useExactSupplier?;
    private useBestSupplier?;
    private useNoneSupplier?;
    private useHoveredSupplier?;
    private readonly args;
    private internalAction?;
    constructor(id: ActionId);
    setInternalAction(id: ActionId): this;
    name(id: ActionId): this;
    name(supplier: SupplierOr<Translation | undefined, UsableActionTranslationArguments>): this;
    addArgs(...args: Array<Exclude<TranslationArg, () => TranslationArg> | Supplier<TranslationArg, UsableActionTranslationArguments>>): this;
    description(id: ActionId): this;
    description(supplier: SupplierOr<Translation | undefined, UsableActionTranslationArguments>): this;
    useExact(supplier: SupplierOr<Translation | undefined, UsableActionTranslationArguments>): this;
    useBest(supplier: SupplierOr<Translation | undefined, UsableActionTranslationArguments>): this;
    useNone(supplier: SupplierOr<Translation | undefined, UsableActionTranslationArguments>): this;
    useHovered(supplier: SupplierOr<Translation | undefined, UsableActionTranslationArguments>): this;
    get(action: UsableAction, using?: IUsableActionPossibleUsing, which?: ActionWhichTranslation, context?: UsableActionDisplayContext, inspectionContext?: InfoProviderContext): Translation | undefined;
}
