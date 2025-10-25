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
import Log from "@wayward/utilities/Log";
import Version from "@wayward/utilities/Version";
declare namespace ErrorReporting {
    function shouldSendErrorReport(versionInfo?: Version.Info | undefined): boolean;
    /**
     * Warns about an occurrence of something, due to a specific caller, once per session.
     * @param skip Number of callsites to skip. Automatically skips this function and its caller.
     * If this is called from a function that is registered in `Errors.ts` as a skipped callsite, you might have to pass `-1`.
     * @param id The ID of this warning. Can be `Log.simplify` strings.
     */
    function warnForCaller(id: ArrayOr<string | Log.SimplifyString>, ...message: any[]): void;
    function warnForCaller(skip: number, id: ArrayOr<string | Log.SimplifyString>, ...message: any[]): void;
    /**
     * Warn about something once per session based on unique warning ids.
     * This is like how node.js does warnings in console.
     */
    function warnOncePerSession(warningId: ArrayOr<string | Log.SimplifyString>, ...message: any[]): void;
    function warnOncePerSession(skip: number, warningId: ArrayOr<string | Log.SimplifyString>, ...message: any[]): void;
    function sendError(id: string, error: Error): Promise<void>;
}
export default ErrorReporting;
