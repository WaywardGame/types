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
import Screen from "@wayward/game/ui/screen/Screen";
import Notice from "@wayward/game/ui/component/Notice";
export default class SplashScreen extends Screen {
    static getNotices(): Array<Class<Notice>>;
    static show(): Promise<void>;
    private static complete;
    private readonly completed;
    private hasNotices;
    constructor();
    protected create(): Promise<void>;
    protected onInput(): void;
}
