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
import type { Game } from "@wayward/game/game/Game";
import { SaveType } from "@wayward/game/game/IGame";
export declare class Uninit {
    private readonly game;
    private unloading;
    disableSave: boolean;
    constructor(game: Game);
    onBeforeUnloadAsynchronous(event?: {
        preventDefault?: () => void;
        returnValue?: boolean | string;
    }, saveType?: SaveType | false): Promise<void>;
    onBeforeUnloadSynchronous(event: Event): void;
}
