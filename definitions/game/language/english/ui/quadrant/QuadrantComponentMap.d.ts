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
import MenuBar from "ui/screen/screens/game/static/MenuBar";
import Messages from "ui/screen/screens/game/static/Messages";
import Quickslots from "ui/screen/screens/game/static/Quickslots";
import StatsQuadrant from "ui/screen/screens/game/static/Stats";
declare const quadrantComponentMap: {
    3: typeof MenuBar;
    0: typeof Messages;
    2: typeof Quickslots;
    1: typeof StatsQuadrant;
};
export default quadrantComponentMap;
