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
import BindingsMenu from "ui/screen/screens/menu/menus/BindingsMenu";
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
    0: typeof BindingsMenu;
    1: typeof ChangelogMenu;
    2: typeof CharacterSelectionMenu;
    3: typeof GameEndMenu;
    4: typeof HelpMenu;
    5: typeof HighscoresMenu;
    6: typeof InterruptMenu;
    7: typeof JoinServerMenu;
    8: typeof JoinServerChooseModifiersMenu;
    9: typeof LoadGameMenu;
    10: typeof MainMenu;
    11: typeof ModsMenu;
    12: typeof MultiplayerMenu;
    13: typeof NewGameMenu;
    14: typeof OptionsMenu;
    15: typeof PauseMenu;
};
export declare type MenuById = {
    [ID in keyof typeof menuMap]: (typeof menuMap)[ID] extends new () => infer MENU ? MENU : never;
};
export declare type ResolveMenu<MENU extends MenuId | Menu> = MENU extends MenuId ? MenuById[MENU] : MENU;
export default menuMap;
