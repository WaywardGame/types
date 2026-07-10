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
import Doodad from "@wayward/game/game/doodad/Doodad";
import { type DoodadType, type IDoodadDescription } from "@wayward/game/game/doodad/IDoodad";
import type { ActionType } from "@wayward/game/game/entity/action/IAction";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import { Quality } from "@wayward/game/game/IObject";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type UseInfo from "@wayward/game/game/inspection/infoProviders/UseInfo";
import Uses from "@wayward/game/game/inspection/infoProviders/Uses";
export default class DoodadUses extends Uses<Doodad> {
    private actionTierQuality?;
    protected getEntityType(): EntityType.Doodad;
    setActionTierQuality(quality: Quality | undefined): this;
    protected getDescription(type: DoodadType): IDoodadDescription | undefined;
    protected getUses(description: IDoodadDescription): ActionType[];
    protected getUseInfoHandlers(): Array<UseInfo<any, any, any, Doodad>>;
    protected getUseBonus(description: IDoodadDescription, action: ActionType): number;
    protected getUseTooltipContext(description: IDoodadDescription, action: ActionType): InfoProviderContext | undefined;
    protected getUseBonusQuality(): Quality | undefined;
    private getActionTierBreakdown;
    protected getActionTier(description: IDoodadDescription, action: ActionType): number | undefined;
    private getDescriptionActions;
}
