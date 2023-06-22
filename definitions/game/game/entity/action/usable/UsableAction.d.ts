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
import EventEmitter from "event/EventEmitter";
import type { ActionId, IUsableActionDefinition, IUsableActionDefinitionExecutable, IUsableActionExecutionContext, IUsableActionPossibleUsing, IUsableActionRequirements, IUsableActionUsing, UsableActionUsability } from "game/entity/action/usable/IUsableAction";
import { IUsableActionNotUsable, UsableActionDisplayContext, UsableActionExecutionContext } from "game/entity/action/usable/IUsableAction";
import UsableActionRegistrar from "game/entity/action/usable/UsableActionRegistrar";
import type { ActionWhichTranslation } from "game/entity/action/usable/UsableActionTranslator";
import type Player from "game/entity/player/Player";
import type { IIcon } from "game/inspection/InfoProvider";
import type Item from "game/item/Item";
import Message from "language/dictionary/Message";
import type Translation from "language/Translation";
import type { HighlightSelector } from "ui/util/IHighlight";
export declare const USABLE_ACTION_USE_ON_MOVE_UNLOCK_AT = 20;
export interface IUsableActionEvents {
    preExecute(player: Player, using: IUsableActionPossibleUsing, context: IUsableActionExecutionContext): any;
    postExecute(player: Player, using: IUsableActionPossibleUsing, context: IUsableActionExecutionContext): any;
    showContextMenu(registrar: UsableActionRegistrar): any;
}
/**
 * Create a basic usable action:
 * ```ts
 * UsableAction.create({...definition});
 * ```
 * If your action has item/doodad/creature/npc requirements:
 * ```ts
 * UsableAction.requiring({...requirements})
 * 	.create({...definition});
 * ```
 *
 * To learn about action definitions, see {@link IUsableActionDefinitionBase}
 */
declare class UsableAction<REQUIREMENTS extends IUsableActionRequirements = IUsableActionRequirements, DEFINITION extends IUsableActionDefinition<REQUIREMENTS> = IUsableActionDefinition<REQUIREMENTS>> extends EventEmitter.Host<IUsableActionEvents> {
    readonly requirements: REQUIREMENTS;
    readonly definition: DEFINITION;
    id: ActionId;
    constructor(requirements: REQUIREMENTS, definition: DEFINITION);
    isExecutable(): this is UsableAction<REQUIREMENTS, IUsableActionDefinitionExecutable<REQUIREMENTS>>;
    execute(player: Player, provided: IUsableActionUsing<REQUIREMENTS>, context: UsableActionExecutionContext | IUsableActionExecutionContext): boolean;
    resolveUsing(player: Player, using: IUsableActionUsing<REQUIREMENTS>): Message.UiActionCannotUseRequiresCreature | Message.UiActionCannotUseRequiresDoodad | Message.UiActionCannotUseRequiresItem | Message.UiActionCannotUseRequiresNPC | IUsableActionUsing<REQUIREMENTS>;
    isUsable(player: Player, provided: IUsableActionUsing<REQUIREMENTS>, context: UsableActionExecutionContext | IUsableActionExecutionContext): UsableActionUsability<REQUIREMENTS>;
    isApplicable(player: Player, provided?: IUsableActionPossibleUsing, fullUsabilityCheck?: boolean): provided is IUsableActionUsing<REQUIREMENTS>;
    private isItemApplicable;
    private isDoodadApplicable;
    private isCreatureApplicable;
    private isNPCApplicable;
    private readonly findItemCannotUse;
    getFindItemCannotUse(): IUsableActionNotUsable[];
    getItem(player: Player, provided?: IUsableActionPossibleUsing, fullUsabilityCheck?: boolean): Item | false | undefined;
    private requirementsItemFinders?;
    private getItemFinder;
    private createItemFinder;
    private itemFinderFullCheck?;
    private itemFinderSimpleCheck?;
    private getItemByType;
    getDoodad(player: Player, provided?: IUsableActionPossibleUsing): false | import("../../../doodad/Doodad").default | undefined;
    getCreature(player: Player, provided?: IUsableActionPossibleUsing): false | import("../../creature/Creature").default | undefined;
    getNPC(player: Player, provided?: IUsableActionPossibleUsing): false | import("../../npc/NPC").default | undefined;
    getIcon(provided: IUsableActionPossibleUsing, context?: UsableActionDisplayContext): IIcon | undefined;
    getHighlightSelectors(using?: IUsableActionPossibleUsing): HighlightSelector[];
    private translator?;
    getTranslation(using?: IUsableActionPossibleUsing, which?: ActionWhichTranslation, context?: UsableActionDisplayContext): Translation | undefined;
    getOrder(using?: IUsableActionPossibleUsing): number;
    getContextualLevel(using?: IUsableActionPossibleUsing): number;
    canUseOnMoveWhenDiscovered(): boolean;
    canUseOnMove(): boolean;
}
export interface IUsableActionFactory<REQUIREMENTS extends IUsableActionRequirements> {
    create: <DEFINITION extends IUsableActionDefinition<REQUIREMENTS>>(action: DEFINITION) => UsableAction<REQUIREMENTS, DEFINITION>;
}
declare namespace UsableAction {
    function requiring<REQUIREMENTS1 extends IUsableActionRequirements>(requirements: REQUIREMENTS1): IUsableActionFactory<REQUIREMENTS1>;
    function create<DEFINITION extends IUsableActionDefinition<{}>>(action: DEFINITION): UsableAction<{}, DEFINITION>;
}
export default UsableAction;
