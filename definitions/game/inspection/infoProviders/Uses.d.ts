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
import { ActionType } from "game/entity/action/IAction";
import { InfoProvider } from "game/inspection/InfoProvider";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import UseInfo, { DescribedDescription, IDescribed } from "game/inspection/infoProviders/UseInfo";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
export default abstract class Uses<T extends IDescribed> extends InfoProvider {
    private label?;
    private readonly value?;
    private readonly type;
    private readonly objectType;
    private readonly description?;
    protected abstract getObjectType(): T["objectType"];
    protected abstract getDescription(type: T["type"]): DescribedDescription<T> | undefined;
    constructor(value: T["type"]);
    constructor(value: T);
    protected abstract getUses(description: DescribedDescription<T>): ActionType[];
    protected abstract getUseInfoHandlers(description: DescribedDescription<T>): Array<UseInfo<any, any, any, T>>;
    getClass(): string[];
    initComponent(): {
        component: import("../../../ui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
    setLabel(label: Translation | UiTranslation): this;
    private readonly details;
    addDetails(...details: symbol[]): this;
    get(context: InfoProviderContext): never[] | LabelledValue;
    private getUseExtraInfo;
    private getDetailsHandlerResolver;
    private getUse;
    private generateUseTooltip;
}
