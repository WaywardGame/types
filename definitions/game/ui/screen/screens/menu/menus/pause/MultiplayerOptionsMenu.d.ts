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
import Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
export default class MultiplayerOptionsMenu extends Menu {
    private readonly openServer;
    private readonly copyGameCode;
    private readonly inviteSteamFriends;
    private readonly lobbyType;
    private readonly choiceLobbyPublic;
    private readonly choiceLobbyFriends;
    private readonly choiceLobbyPrivate;
    private readonly textSteamRelayNetworkResult;
    private readonly textWebSocketResult;
    private readonly steamRelayNetworkSpacer;
    private readonly pvp;
    private readonly allowTraveling;
    private readonly allowHardcoreRespawns;
    private readonly pauseOnDesync;
    private readonly maxPlayers;
    private readonly descriptionInput;
    private readonly messageOfTheDayInput;
    private readonly checkConnectionHeading;
    private readonly checkConnectionBlock;
    private readonly checkConnectionButton;
    private readonly playerManagementHeading;
    private readonly playerManagementBlock;
    private readonly connectedPlayersHeading;
    private readonly connectedPlayersContainer;
    private readonly absentPlayersHeading;
    private readonly absentPlayersContainer;
    constructor();
    protected refresh(): void;
    private updateMultiplayer;
    private onDescriptionChange;
    private onMessageOfTheDayChange;
    private toggleServer;
    private copyGameCodeClick;
    private inviteSteamFriendsClick;
    private refreshSteamNetworkConnection;
    private refreshPlayerLists;
    private deletePlayer;
}
