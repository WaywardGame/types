/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { Game } from "@wayward/game/game/Game";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
export declare class AutoSave {
    private readonly game;
    private autoSaveTimer;
    private autoSaveLastSave;
    constructor(game: Game);
    protected onRestEnd(): void;
    reset(): void;
    process(): Promise<void>;
    translateLastSave(): TranslationImpl;
    /**
     * Check if the game should be saved now based on the auto save mode and timer.
     * @returns true if the game should be saved now
     */
    private isTimeToSave;
    private isWithinRestThreshold;
}
