/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { Game } from "game/Game";
export declare class AutoSave {
    private readonly game;
    private autoSaveTimer;
    private autoSaveLastSave;
    constructor(game: Game);
    protected onRestEnd(): void;
    reset(): void;
    process(): Promise<void>;
    translateLastSave(): import("../../language/impl/TranslationImpl").default;
    private isTime;
    private isWithinRestThreshold;
}
