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
import { MoveFlag } from "@wayward/game/game/entity/IEntity";
import type { IActionApi } from "@wayward/game/game/entity/action/IAction";
import type { ActionId, IUsableActionDefinition, IUsableActionPossibleUsing, IUsableActionRequirements } from "@wayward/game/game/entity/action/usable/IUsableAction";
import { UsableActionDisplayContext } from "@wayward/game/game/entity/action/usable/IUsableAction";
import type UsableAction from "@wayward/game/game/entity/action/usable/UsableAction";
import type Player from "@wayward/game/game/entity/player/Player";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import type { IIslandTickOptions } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { EnumReferenceResolved } from "@wayward/game/game/reference/IReferenceManager";
import { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type Tile from "@wayward/game/game/tile/Tile";
import Translation from "@wayward/game/language/Translation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
export default class ActionInspection extends Inspection<ActionId | undefined> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext) => boolean;
    static getAction(id: ActionId): UsableAction<IUsableActionRequirements, IUsableActionDefinition> | undefined;
    static getActionNameWithTier(id: ActionId | UsableAction, context: UsableActionDisplayContext, provided: IUsableActionPossibleUsing | undefined, resolveUsing: boolean): TranslationImpl | undefined;
    private static getTranslation;
    static getRuneInfo(id: ActionId, itemType?: ItemType, item?: Item): SimpleInfoProvider | undefined;
    constructor(value?: ActionId | EnumReferenceResolved<ReferenceType.Action>, context?: InfoProviderContext);
    private get using();
    private getAction;
    private get item();
    getId(): string;
    private getActionId;
    protected getTitle(context: InfoProviderContext): Translation;
    protected getSubtitle(context: InfoProviderContext): Translation | undefined;
    protected getContent(context: InfoProviderContext): ArrayOr<Translation | InfoProvider | undefined>;
    private getActionSlotType;
    private getActionSlotItemMode;
    private getTranslation;
    private getActionDiscovered;
    private static getActionTier;
    private getActionTierInfo;
    private getActionUsability;
    private getActionExample;
    protected onPlayerUpdate(): void;
    protected onPlayerPostMove(player: Player, _lastTile: Tile, _tile: Tile, moveFlag: MoveFlag): void;
    protected onTickEnd(island: Island, options: IIslandTickOptions): void;
    postExecuteAction(action: IActionApi): void;
}
