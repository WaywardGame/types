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
import { ActionType } from "game/entity/action/IAction";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type UseInfo from "game/inspection/infoProviders/UseInfo";
import type { DescribedDescription, IDescribed } from "game/inspection/infoProviders/UseInfo";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
import type { TranslationGenerator } from "ui/component/IComponent";
export default abstract class Uses<T extends IDescribed> extends InfoProvider {
    private label?;
    private readonly value?;
    private readonly type;
    private readonly entityType;
    private readonly description?;
    protected abstract getEntityType(): T["entityType"];
    protected abstract getDescription(type: T["type"]): DescribedDescription<T> | undefined;
    constructor(value: T["type"]);
    constructor(value: T);
    protected abstract getUses(description: DescribedDescription<T>): ActionType[];
    protected abstract getUseInfoHandlers(description: DescribedDescription<T>): Array<UseInfo<any, any, any, T>>;
    getClass(): string[];
    setLabel(label: Translation | UiTranslation): this;
    private readonly details;
    addDetails(...details: symbol[]): this;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    private getUseExtraInfo;
    private getDetailsHandlerResolver;
    private getUse;
    private getUseName;
}
