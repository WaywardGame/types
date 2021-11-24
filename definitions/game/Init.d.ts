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
import { Game } from "game/Game";
export interface IInit {
    game: Game;
    onUnload(message?: string): Promise<void>;
}
export default function (): Promise<IInit | undefined>;
export declare function onBeforeUnloadAsynchronous(event?: {
    preventDefault?: () => void;
    returnValue?: boolean | string;
}): Promise<void>;