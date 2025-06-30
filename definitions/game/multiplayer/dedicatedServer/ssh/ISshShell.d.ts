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
import type { ISshSession, ISshStream } from "@wayward/game/multiplayer/dedicatedServer/ssh/ISsh";
import type { ISshCommandManager } from "@wayward/game/multiplayer/dedicatedServer/ssh/ISshCommandManager";
export default interface ISshShell {
    readonly game: Game;
    readonly session: ISshSession;
    readonly stream: ISshStream;
    readonly sshCommandManager?: ISshCommandManager;
    write(data: string): void;
    flush(): void;
    executeWithMessageRedirect(executor: () => Promise<void>): Promise<void>;
}
