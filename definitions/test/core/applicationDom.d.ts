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
import type * as webdriverio from "webdriverio";
import type { ApplicationLogger } from "@wayward/test/core/applicationLogger";
export declare const defaultWaitTimeout: number;
export declare class ApplicationDom {
    private readonly browser;
    private readonly logger;
    constructor(browser: WebdriverIO.Browser, logger: ApplicationLogger);
    executeFunction<T2 extends unknown[], T>(executor: (...extraArgs: webdriverio.TransformElement<T2>) => T | Promise<T>, ...extraArgs: T2): Promise<T>;
    executeJavaScript<T>(javascript: string): Promise<T>;
    getElement(selector: string): Promise<WebdriverIO.Element>;
    getElements(selector: string, onlyVisible?: boolean): Promise<WebdriverIO.Element[]>;
    isClickableElement(element: WebdriverIO.Element): Promise<boolean>;
    clickIfVisibleElement(selector: string, logNotVisible?: boolean): Promise<WebdriverIO.Element | undefined>;
    getVisibleElements(selector: string, logNotVisible?: boolean, logVisible?: boolean): Promise<WebdriverIO.Element[] | undefined>;
    getVisibleAndClickableElement(selector: string, logNotVisible?: boolean): Promise<WebdriverIO.Element | undefined>;
    waitForVisibleThenClick(selector: string, options?: Partial<{
        timeout: number;
        indent: boolean;
        clickOnce: boolean;
        logFailure: boolean;
    }>): Promise<void>;
    waitForVisibleElements(selector: string, timeout?: number, scrollIntoView?: boolean): Promise<WebdriverIO.Element[]>;
    waitForNotVisible(selector: string, timeout?: number): Promise<void>;
    waitUntil(executor: () => Promise<boolean>, options: WaitUntilOptions & {
        triggerDebugger?: true;
    }): Promise<true | void>;
}
export interface WaitUntilOptions extends Omit<webdriverio.WaitUntilOptions, "timeoutMsg"> {
    timeoutMsg?: string | (() => string);
}
