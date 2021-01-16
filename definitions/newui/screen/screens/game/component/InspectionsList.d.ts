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
import { Events, IEventEmitter } from "event/EventEmitter";
import { InspectType } from "game/inspection/IInspection";
import InspectionsHandler from "game/inspection/InspectionsHandler";
import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
export interface ITileInspectionsEvents extends Events<Component> {
    refreshed(isValid?: boolean): any;
    updateInspectTypeFilter(): any;
}
export default abstract class InspectionsList<INSPECTIONS_HANDLER extends InspectionsHandler = InspectionsHandler> extends Component {
    readonly event: IEventEmitter<this, ITileInspectionsEvents>;
    private readonly paragraphInspectionsInvalid;
    private inspectTypeFilter;
    protected inspectionsHandler?: InspectionsHandler;
    constructor();
    setInspectTypeFilter(filter?: (inspectType: InspectType) => boolean): this;
    refreshInspectTypeFilter(): this;
    deregister(): void;
    refresh(): this;
    protected abstract initializeInspections(): INSPECTIONS_HANDLER | undefined;
    isValid?(): boolean;
    protected getInvalidTranslation?(): TranslationGenerator | undefined;
    private refreshInspectionsOfType;
    private initializeTooltipSection;
}
