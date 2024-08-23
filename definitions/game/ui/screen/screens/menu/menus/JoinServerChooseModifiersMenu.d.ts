/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { ServerInfo } from "@wayward/game/multiplayer/IMultiplayer";
import Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
import MilestoneModifiers from "@wayward/game/ui/screen/screens/menu/component/MilestoneModifiers";
export default class JoinServerChooseModifiersMenu extends Menu {
    readonly milestoneModifiers: MilestoneModifiers;
    readonly milestones: Set<Milestone>;
    multiplayerServerToJoin: ServerInfo;
    constructor();
    protected refresh(): void;
}
