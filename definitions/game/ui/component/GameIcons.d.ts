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
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import { GameMode } from "@wayward/game/game/options/IGameOptions";
import type { Challenge } from "@wayward/game/game/options/modifiers/challenge/IChallenge";
import type { IslandModifierType } from "@wayward/game/game/options/modifiers/island/IIslandModifier";
import Component from "@wayward/game/ui/component/Component";
import type { IRefreshable } from "@wayward/game/ui/component/Refreshable";
import type { GameOptionsIcon } from "@wayward/game/ui/screen/screens/menu/menus/pause/GameOptionsIcons";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import type { ModLoadability } from "@wayward/game/ui/util/Misc";
import type { ISteamFriend } from "@wayward/hosts/shared/interfaces";
import type { CustomModifierTranslation } from "@wayward/game/game/options/modifiers/custom/ICustomModifier";
export interface IGameIconsHost {
    difficulty: GameMode;
    pvp: boolean;
    mods: Array<[string, ModLoadability]>;
    friends: ISteamFriend[];
}
export default class GameIcons extends Component implements IRefreshable {
    private readonly gameMode;
    private readonly pvp;
    private readonly mods;
    private readonly friends;
    get hasLabels(): boolean;
    private readonly hostRef;
    get host(): IGameIconsHost;
    constructor(host: IGameIconsHost);
    setHasLabels(labels?: boolean): this;
    refresh(): this;
    private addIcon;
    private getGameModeText;
    private getModsText;
    private getFriendsText;
}
export interface IGameModifiersHost {
    getOptionsIcons(): Array<[GameOptionsIcon, Array<ArrayOr<CustomModifierTranslation>>]>;
    getOptionsIconTooltipHandler(icon: GameOptionsIcon, translation: Array<ArrayOr<CustomModifierTranslation>>): ((tooltip: Tooltip) => any) | undefined;
    getChallengeModifiers(): Challenge[];
    getMilestoneModifiers(): Milestone[];
    getIslandModifiers(): IslandModifierType[];
}
export declare class GameModifiers extends Component {
    get hasLabels(): boolean;
    private readonly _host;
    private get host();
    constructor(host: IGameModifiersHost);
    setHasLabels(labels?: boolean): this;
    refresh(): void;
}
