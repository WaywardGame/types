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
import type { IMessage } from "@wayward/game/game/entity/player/IMessageManager";
import type Player from "@wayward/game/game/entity/player/Player";
import type { Game } from "@wayward/game/game/Game";
import type { ISshSession, ISshStream } from "@wayward/game/multiplayer/dedicatedServer/ssh/ISsh";
export default abstract class Shell {
    readonly session: ISshSession;
    readonly stream: ISshStream;
    readonly game: Game;
    protected active: boolean;
    protected line: string;
    protected cursor: number;
    private buffer;
    private history;
    private historyCursor;
    private watchMessages;
    constructor(session: ISshSession, stream: ISshStream, game: Game);
    start(): Promise<boolean>;
    stop(): void;
    allowHistory(): void;
    write(data: string): void;
    flush(): void;
    processData(data: string): Promise<Shell | false | undefined>;
    executeWithMessageRedirect(executor: () => Promise<void>): Promise<void>;
    displayMessage(_: Player, message: IMessage): void;
    /**
     * Writes the marker
     */
    abstract writeMarker(): void;
    /**
     * Processes a line sent for the session
     * @returns A shell to push a new action shell, false to exit the session, undefined to keep the active shell going
     */
    abstract processLine(line: string): Promise<Shell | false | undefined>;
    /**
     * Check if Ctrl+C is allowed to close the shell
     * @return True if you want ctrl+c to close the shell
     */
    protected allowCtrlCClose(): boolean;
}
