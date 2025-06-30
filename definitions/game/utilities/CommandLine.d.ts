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
import Args1 from "@wayward/hosts/shared/args";
import type { IPlayOptions } from "@wayward/game/game/IGame";
declare namespace CommandLine {
    const Args: typeof Args1;
    type Args = Args1;
    function parseNewGameOptions(args: Args): Partial<IPlayOptions> & {
        dailyChallenge?: boolean;
    };
}
export default CommandLine;
