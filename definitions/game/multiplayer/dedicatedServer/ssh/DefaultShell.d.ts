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
import type { ISshSession, ISshStream } from "multiplayer/dedicatedServer/ssh/ISsh";
import type { ISshCommandManager } from "multiplayer/dedicatedServer/ssh/ISshCommandManager";
import type ISshShell from "multiplayer/dedicatedServer/ssh/ISshShell";
import Shell from "multiplayer/dedicatedServer/ssh/Shell";
export default class DefaultShell extends Shell implements ISshShell {
    private readonly username;
    private readonly serverName;
    readonly sshCommandManager: ISshCommandManager;
    constructor(session: ISshSession, stream: ISshStream, game: Game, username: string, serverName: string);
    /**
     * Writes the marker
     */
    writeMarker(): Promise<void>;
    /**
     * Processes a line sent for the session
     * @returns A shell to push a new action shell, false to exit the session, undefined to keep the active shell going
     */
    processLine(line: string): Promise<Shell | false | undefined>;
    /**
     * Check if Ctrl+C is allowed to close the shell
     * @return True if you want ctrl+c to close the shell
     */
    protected allowCtrlCClose(): boolean;
}
