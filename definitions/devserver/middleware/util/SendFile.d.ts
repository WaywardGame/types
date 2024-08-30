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
import type { ServerResponse } from "http";
import type { IncomingMessage } from "@wayward/devserver/middleware/util/Middleware";
export default function (req: IncomingMessage, res: ServerResponse, filePath: string): Promise<ServerResponse | void | undefined>;
