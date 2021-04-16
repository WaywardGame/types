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
import Menu from "ui/screen/screens/menu/component/Menu";
export default class MultiplayerMenu extends Menu {
    private readonly serversContainer;
    private readonly serverMap;
    private readonly playersHeading;
    private friends;
    private playersOnline;
    constructor();
    protected onShow(): Promise<void>;
    private refresh;
    private getMultiplayerInfo;
    private sortServers;
    private getSortValue;
    private getFriend;
    private isFriend;
}
