/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { MenuId } from "ui/screen/screens/menu/component/IMenu";
import type Menu from "ui/screen/screens/menu/component/Menu";
import CharacterSelectionMenu from "ui/screen/screens/menu/menus/CharacterSelectionMenu";
import GameEndMenu from "ui/screen/screens/menu/menus/GameEndMenu";
import HelpMenu from "ui/screen/screens/menu/menus/HelpMenu";
import HighscoresMenu from "ui/screen/screens/menu/menus/HighscoresMenu";
import InterruptMenu from "ui/screen/screens/menu/menus/InterruptMenu";
import JoinServerChooseModifiersMenu from "ui/screen/screens/menu/menus/JoinServerChooseModifiersMenu";
import JoinServerMenu from "ui/screen/screens/menu/menus/JoinServerMenu";
import LoadGameMenu from "ui/screen/screens/menu/menus/LoadGameMenu";
import ChangelogMenu from "ui/screen/screens/menu/menus/main/ChangelogMenu";
import MainMenu from "ui/screen/screens/menu/menus/MainMenu";
import ModsMenu from "ui/screen/screens/menu/menus/ModsMenu";
import MultiplayerMenu from "ui/screen/screens/menu/menus/MultiplayerMenu";
import NewGameMenu from "ui/screen/screens/menu/menus/NewGameMenu";
import OptionsMenu from "ui/screen/screens/menu/menus/OptionsMenu";
import PauseMenu from "ui/screen/screens/menu/menus/PauseMenu";
declare const menuMap: {
    0: typeof ChangelogMenu;
    1: typeof CharacterSelectionMenu;
    2: typeof GameEndMenu;
    3: typeof HelpMenu;
    4: typeof HighscoresMenu;
    5: typeof InterruptMenu;
    6: typeof JoinServerMenu;
    7: typeof JoinServerChooseModifiersMenu;
    8: typeof LoadGameMenu;
    9: typeof MainMenu;
    10: typeof ModsMenu;
    11: typeof MultiplayerMenu;
    12: typeof NewGameMenu;
    13: typeof OptionsMenu;
    14: typeof PauseMenu;
};
export declare type MenuById = {
    [ID in keyof typeof menuMap]: (typeof menuMap)[ID] extends new () => infer MENU ? MENU : never;
};
export declare type ResolveMenu<MENU extends MenuId | Menu> = MENU extends MenuId ? MenuById[MENU] : MENU;
export default menuMap;
