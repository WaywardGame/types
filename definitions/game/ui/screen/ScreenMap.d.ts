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
import type Screen from "ui/screen/Screen";
import DedicatedServerScreen from "ui/screen/screens/DedicatedServerScreen";
import GameScreen from "ui/screen/screens/GameScreen";
import InterruptScreen from "ui/screen/screens/InterruptScreen";
import MainMenuScreen from "ui/screen/screens/MainMenuScreen";
import SplashScreen from "ui/screen/screens/SplashScreen";
export declare type ExtendsScreen = new () => Screen;
declare const screenMap: {
    0: undefined;
    3: typeof MainMenuScreen;
    4: typeof SplashScreen;
    2: typeof InterruptScreen;
    1: typeof GameScreen;
    5: typeof DedicatedServerScreen;
};
export declare type ScreenById = {
    [ID in keyof typeof screenMap]: (typeof screenMap)[ID] extends new () => infer SCREEN ? SCREEN : never;
};
export default screenMap;
