/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
/// <reference types="node" />
export interface IAttachmentConfigurer {
    setOnlyIfExists(): this;
    setFilePath(filePath: string): this;
    setContents(contents: string): this;
}
export interface IAttachmentData {
    directoryStructure: string[];
    file: {
        existingFilePath?: string;
        createNewFileContents?: string | Buffer;
    };
}
export interface ITestCaseApi {
    addAttachment(name: string, data: IAttachmentData): void;
}
export interface ITest {
    title: string;
    fullTitle(): string;
    parent: ITest | undefined;
    consoleOutputs: string[];
    consoleErrors: string[];
    attachments: string[];
}
export declare function getMochaTestTree(test: ITest): string[];
export declare function getAttachmentFilePath(attachmentName: string, data: Omit<IAttachmentData, "file">): string;
export declare function addTestData(test: ITest, err?: Error): void;
export declare function MochaNUnitReporter(handleTestcaseData: (api: ITestCaseApi, test: ITest, err?: Error) => any): void;
