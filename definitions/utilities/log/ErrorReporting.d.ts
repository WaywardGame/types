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
import type { CallsiteMatcher } from "@wayward/utilities/Errors";
import Log, { type ILog } from "@wayward/utilities/Log";
import ErrorReportAttachments from "@wayward/utilities/log/ErrorReportAttachments";
import Version from "@wayward/utilities/Version";
declare namespace ErrorReporting {
    export interface ICallerOptions {
        skip?: number;
        skipPast?: ArrayOr<CallsiteMatcher>;
    }
    export interface ICaptureOptions extends ICallerOptions {
        error?: unknown;
        message?: string;
        stack?: string;
    }
    export interface IReport {
        source: string[];
        message?: string;
        error?: Error;
        stack?: string;
        shouldNotifyPlayer?: boolean;
        shouldSendRemote?: boolean;
        attachments?: ErrorReportAttachments.IAttachment[];
    }
    export interface IEvents {
        logError(report: IReport): any;
        logWarning(report: IReport): any;
        notifyPlayer(report: IReport): any;
        sendToServer(report: IReport): any;
    }
    export const event: import("@wayward/utilities/event/EventEmitter").IEventEmitter<typeof ErrorReporting, IEvents>;
    export class ErrorReport {
        message?: string;
        error?: Error;
        stack?: string;
        source: string[];
        attachments?: ErrorReportAttachments.IAttachment[];
        private hash?;
        private oncePerSessionAllowed?;
        constructor(options: ICaptureOptions);
        private getHash;
        /**
         * Only do the following reporting methods once per session.
         * @param dedupeId By default deduping happens by message+stack, so each unique cause of an error will be logged separately. You can provide a custom dedupeId if that's not enough or too much deduping.
         */
        thenOncePerSession(dedupeId?: WarningId): this;
        logError(): this;
        logError(source: string | string[]): this;
        logError(log: ILog): this;
        logWarning(): this;
        logWarning(source: string | string[]): this;
        logWarning(log: ILog): this;
        notifyPlayer(): this;
        attachText(filename: string, contents: string, contentType?: string): this;
        sendToServer(remoteId?: string): this;
        private shouldExecute;
        private snapshot;
        private resolveLogger;
    }
    type WarningId = ArrayOr<string | Log.SimplifyString>;
    export function capture(message: string): ErrorReport;
    export function capture(options: ICaptureOptions): ErrorReport;
    export function reporter<ARGS extends any[]>(reporter: (report: ErrorReport, ...args: ARGS) => unknown): (error: unknown, ...args: ARGS) => void;
    export function canEnableErrorReporting(versionInfo?: Version.Info | undefined): boolean;
    export function shouldSendErrorReport(versionInfo?: Version.Info | undefined): boolean;
    export function initializeGlobalHandlers(): void;
    export function formatPlayerErrorStack(error?: Error): string;
    export {};
}
export default ErrorReporting;
