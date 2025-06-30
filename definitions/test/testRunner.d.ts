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
export type TestSetupExecutor = (context: TestSetupContext) => Promise<unknown>;
export type TestExecutor = (context: TestRunContext) => Promise<unknown>;
interface IRunContext {
    filter?: string;
    attachmentPath?: string;
}
export interface ITestAttachmentData {
    existingFilePath?: string;
    createNewFileContents?: string | Buffer;
}
export interface ITestSuite {
    context: TestSetupContext;
    executor: TestSetupExecutor;
}
export interface ITest {
    context: TestSetupContext;
    title: string;
    fullTitle: string;
    executor: TestExecutor;
}
declare abstract class BaseContext {
    private _timeoutMilliseconds?;
    private _parallel?;
    private _retries?;
    get timeout(): number | undefined;
    set timeout(value: number | undefined);
    get parallel(): number | undefined;
    set parallel(value: number | undefined);
    get retries(): number | undefined;
    set retries(value: number | undefined);
}
export declare class TestSetupContext extends BaseContext {
    readonly title: string;
    private readonly parent?;
    static currentContext: TestSetupContext;
    private readonly beforeHooks;
    private readonly afterHooks;
    private readonly beforeEachHooks;
    private readonly afterEachHooks;
    private readonly suites;
    private readonly tests;
    private _titleTree?;
    private _fullTitle?;
    private _processed;
    protected readonly depth: number;
    constructor(title: string, parent?: TestSetupContext | undefined);
    /**
     * Full test tree
     */
    get titleTree(): string[];
    /**
     * Full title of the test, including the parent test suites / tree
     */
    get fullTitle(): string;
    /**
     * Adds a before hook - before()
     */
    addBefore(executor: TestExecutor): void;
    /**
     * Adds an after hook - after()
     */
    addAfter(executor: TestExecutor): void;
    /**
     * Adds a before each hook - beforeEach()
     */
    addBeforeEach(executor: TestExecutor): void;
    /**
     * Adds an after each hook - afterEach()
     */
    addAfterEach(executor: TestExecutor): void;
    /**
     * Adds a suite - describe()
     */
    addSuite(title: string, executor: TestSetupExecutor): void;
    /**
     * Adds a test - it()
     */
    addTest(title: string, executor: TestExecutor): void;
    /**
     * Used during processing to set a static context for describe, it, etc to work
     */
    private withStaticContext;
    /**
     * Enumerates all the tests (make the test tree)
     */
    private process;
    /**
     * Runs tests
     */
    run(runContext: IRunContext, parent?: TestRunContext): Promise<TestRunContext>;
    /**
     * Gets the total number of runnable tests for this suite & all it's children
     */
    private getTotalRunnableTestCount;
    /**
     * Gets the runnable tests for just this suite
     */
    private getRunnableTests;
    /**
     * Runs tests
     */
    private runTests;
    private runTest;
    /**
     * Runs a test
     */
    private executeTest;
    private logNoDepth;
}
export declare class TestRunContext extends BaseContext {
    private readonly runContext;
    readonly title: string;
    readonly titleTree: string[];
    readonly fullTitle: string;
    /**
     * Signal that's fired when the test has an error / times out.
     * This is not fired when the test is successful.
     */
    readonly abortSignal: AbortSignal;
    readonly suites: TestRunContext[];
    readonly tests: TestRunContext[];
    private _output;
    private readonly _errors;
    private readonly _attachments;
    protected readonly _data: Map<string, unknown>;
    private readonly startTime;
    private endTime;
    private duration;
    private readonly abortController;
    constructor(runContext: IRunContext, suiteContext: TestSetupContext, test?: ITest);
    /**
     * Check if every test / suite under this tree has succedded
     */
    get hasSucceeded(): boolean;
    /**
     * Check if there were any test failures under this tree
     */
    get hasFailed(): boolean;
    /**
     * Total number of tests in the tree
     */
    get totalTests(): number;
    /**
     * Total number of tests that succeeded in the tree
     */
    get totalTestsPassed(): number;
    /**
     * Total number of tests that failed in the tree
     */
    get totalTestsFailed(): number;
    /**
     * Get the tests that that failed in the tree
     */
    get failedTests(): TestRunContext[];
    /**
     * Gets errors from the test run
     */
    get errors(): unknown[];
    /**
     * Gets the attachment path for this specific suite/test
     */
    get attachmentPath(): string | undefined;
    /**
     * Adds a sub suite for this suite
     */
    addSuite(runContext: IRunContext, suiteContext: TestSetupContext): TestRunContext;
    /**
     * Adds a sub test to this suite
     */
    addTest(runContext: IRunContext, suiteContext: TestSetupContext, test: ITest): TestRunContext;
    /**
     * Adds an error to the test result
     */
    addError(err: any): void;
    /**
     * Adds string to the test result
     */
    addOutput(...output: string[]): void;
    /**
     * Adds string to the test result
     */
    addOutputs(output: string[]): void;
    /**
     * Adds an attachment to the test result
     */
    addAttachment(attachmentName: string, attachmentData: ITestAttachmentData): Promise<void>;
    getData<T = unknown>(key: string): T;
    tryGetData<T = unknown>(key: string): T | undefined;
    setData<T = unknown>(key: string, value: T): T;
    start(suiteRunContext: TestRunContext): void;
    /**
     * Mark the context as being completed (finished running)
     */
    end(): void;
    /**
     * https://docs.nunit.org/articles/nunit/technical-notes/usage/Test-Result-XML-Format.html
     */
    getNUnitXml(): string;
    private getSuiteNUnitXml;
    private getTestAndSuiteNUnitXml;
    private getTestNUnitXml;
    private getCommonNUnitXmlAttributes;
    private sanitizeXmlText;
}
export declare const before: (executor: TestExecutor) => void;
export declare const after: (executor: TestExecutor) => void;
export declare const beforeEach: (executor: TestExecutor) => void;
export declare const afterEach: (executor: TestExecutor) => void;
export declare const describe: (title: string, executor: TestSetupExecutor) => void;
export declare const it: (title: string, executor: TestExecutor) => void;
export declare function runTests(): Promise<void>;
export {};
