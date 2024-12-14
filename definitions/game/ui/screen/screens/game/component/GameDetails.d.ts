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
import type Island from "@wayward/game/game/island/Island";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { GameMode } from "@wayward/game/game/options/IGameOptions";
import type { Challenge } from "@wayward/game/game/options/modifiers/challenge/IChallenge";
import type { IslandModifierType } from "@wayward/game/game/options/modifiers/island/IslandModifier";
import Component from "@wayward/game/ui/component/Component";
import type { IGameIconsHost, IGameModifiersHost } from "@wayward/game/ui/component/GameIcons";
import GameIcons, { GameModifiers } from "@wayward/game/ui/component/GameIcons";
import PopupOverlay from "@wayward/game/ui/screen/screens/game/component/PopupOverlay";
import type { IGameOptionsIcon } from "@wayward/game/ui/screen/screens/menu/menus/pause/GameOptionsIcons";
import { GameOptionsIcon } from "@wayward/game/ui/screen/screens/menu/menus/pause/GameOptionsIcons";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import type { ModLoadability } from "@wayward/game/ui/util/Misc";
import type { ISteamFriend } from "@wayward/hosts/shared/interfaces";
export declare class GameDetails extends PopupOverlay implements IGameIconsHost, IGameModifiersHost {
    get difficulty(): GameMode;
    get pvp(): boolean;
    get mods(): Array<[string, ModLoadability]>;
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
    getOptionsIcons(): Array<[GameOptionsIcon, IGameOptionsIcon]>;
    getChallengeModifiers(): Challenge[];
    getMilestoneModifiers(): Milestone[];
    getIslandModifiers(): IslandModifierType[];
    protected refreshGameIcons(): void;
    private refreshQuests;
}
