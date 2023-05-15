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
import type { ISteamFriend } from "@hosts/shared/interfaces";
import type Island from "game/island/Island";
import Component from "ui/component/Component";
import type { IGameIconsHost, IGameModifiersHost } from "ui/component/GameIcons";
import GameIcons, { GameModifiers } from "ui/component/GameIcons";
import PopupOverlay from "ui/screen/screens/game/component/PopupOverlay";
import type { IGameOptionsIcon } from "ui/screen/screens/menu/menus/pause/GameOptionsIcons";
import { GameOptionsIcon } from "ui/screen/screens/menu/menus/pause/GameOptionsIcons";
import type Tooltip from "ui/tooltip/Tooltip";
export declare class GameDetails extends PopupOverlay implements IGameIconsHost, IGameModifiersHost {
    get difficulty(): import("../../../../../game/options/IGameOptions").GameMode;
    get pvp(): boolean;
    get mods(): [string, import("ui/util/Misc").ModLoadability][];
    get friends(): ISteamFriend[];
    readonly gameModifiers: GameModifiers;
    readonly gameIcons: GameIcons;
    questsWrapper?: Component;
    private refreshGameIconsTimeout?;
    private steamworksFriends;
    constructor(island: Island);
    setHasLabels(hasLabels?: boolean): this;
    setHasQuests(hasQuests?: boolean): this;
    hasIcons(): boolean;
    refresh(): this;
    getOptionsIconTooltipHandler(icon: GameOptionsIcon, description: IGameOptionsIcon): ((tooltip: Tooltip) => any) | undefined;
    getOptionsIcons(): [GameOptionsIcon, IGameOptionsIcon][];
    getChallengeModifiers(): import("../../../../../game/options/modifiers/challenge/IChallenge").Challenge[];
    getMilestoneModifiers(): import("../../../../../game/milestones/IMilestone").Milestone[];
    getIslandModifiers(): import("../../../../../game/options/modifiers/island/IslandModifier").IslandModifierType[];
    protected refreshGameIcons(): void;
    private refreshQuests;
}
