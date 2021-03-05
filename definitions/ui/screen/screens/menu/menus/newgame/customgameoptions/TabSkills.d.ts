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
import { IGameOptions } from "game/options/IGameOptions";
import { IRefreshable } from "ui/component/Refreshable";
import CustomGameOptionsTab from "ui/screen/screens/menu/menus/newgame/customgameoptions/CustomGameOptionsTab";
export default class TabSkills extends CustomGameOptionsTab implements IRefreshable {
    private readonly options;
    private readonly skillComponentMap;
    private readonly addSkillConfigDropdown;
    private readonly skillsWrapper;
    constructor(options: () => IGameOptions);
    refresh(): this;
    private addSkill;
    private sortSkills;
}