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
import type { IncomingMessage as HTTPIncomingMessage, ServerResponse } from "http";
import "@wayward/utilities/types";
interface IncomingMessageOverride {
    url: string;
}
export type IncomingMessage = Merge<HTTPIncomingMessage, IncomingMessageOverride>;
type Middleware<ARGS extends any[] = any[]> = (req: IncomingMessage, res: ServerResponse, ...args: ARGS) => PromiseOr<ServerResponse | undefined | void>;
/**
 * Return the `ServerResponse` object to indicate the response is handled.
 * Return `undefined` or `void` from the middleware to defer to the next middleware.
 */
declare function Middleware<ARGS extends any[]>(middleware: Middleware<ARGS>): Middleware<ARGS>;
export default Middleware;
