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
import { GameMode } from "game/options/IGameOptions";
import { ISteamFriend } from "steamworks/ISteamworks";
import Component from "ui/component/Component";
import { IRefreshable } from "ui/component/Refreshable";
import { ModLoadability } from "ui/util/Misc";
export interface IGameIconsHost {
    difficulty: GameMode;
    pvp: boolean;
    mods: Array<[string, ModLoadability]>;
    friends: ISteamFriend[];
}
export default class GameIcons extends Component implements IRefreshable {
    private readonly host;
    private readonly gameMode;
    private readonly pvp;
    private readonly mods;
    private readonly friends;
    get hasLabels(): boolean;
    constructor(host: IGameIconsHost);
    setHasLabels(labels?: boolean): this;
    refresh(): this;
    private addIcon;
    private getGameModeText;
    private getModsText;
    private getFriendsText;
}
export declare class GameDetails extends Component implements IGameIconsHost {
    get difficulty(): GameMode;
    get pvp(): boolean;
    get mods(): [string, ModLoadability][];
    get friends(): ISteamFriend[];
    readonly gameIcons: GameIcons;
    readonly gameModifiers: GameModifiers;
    private questsWrapper?;
    private steamworksFriends;
    constructor();
    setHasLabels(hasLabels?: boolean): this;
    setHasQuests(hasQuests?: boolean): this;
    hasIcons(): boolean;
    refresh(): void;
    protected refreshGameIcons(): void;
    private refreshQuests;
}
export declare class GameModifiers extends Component {
    get hasLabels(): boolean;
    constructor();
    setHasLabels(labels?: boolean): this;
    refresh(): void;
}
