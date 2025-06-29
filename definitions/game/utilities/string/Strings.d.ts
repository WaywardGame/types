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
import type { IRequireFunction } from "@wayward/utilities/dependency/DependencyManager";
export declare enum CaseStyle {
    PascalCase = 0,
    CamelCase = 1,
    SnakeCase = 2,
    KebabCase = 3,
    ConstCase = 4
}
export declare const matchLanguageLetters: RegExp;
export declare const matchNotLanguageLetters: RegExp;
export declare const matchInvalidPathLettersWindows: RegExp;
export declare const matchInvalidPathLettersUnix: RegExp;
declare class Strings {
    markdownToHTML(markdown: string): string;
    parseMarkup(markupText: string): string;
    capitalizeFirstLetter(str: string): string;
    formatCase(str: string, caseStyle: CaseStyle): string;
    caseFormatter(caseStyle: CaseStyle): (str: string) => string;
    escapeHTML(str: string): string;
    stripHTML(str: string): string;
    stripParentDirectoryAccessorsFromPath(path: string): string;
    dir(path: string, times?: number): string;
    encodeURIComponentPath(p: string): string;
    generateTimestamp(date?: Date): string;
    isSubstringAt(str: string, index: number, substr: string): boolean;
    /**
     * Returns a new object with key-value pairs matching the pairs in the given object, but with the case style of the keys changed.
     */
    formatKeyCase<R = any>(obj: any, caseStyle: CaseStyle): R;
    hashCode(str: string): number;
    protected onAcquire(d: any, req: IRequireFunction): Promise<void>;
    /**
     * Processes chat messaage string (enforces max length / trimming)
     */
    processChatMessage(message: string): string;
}
declare const _default: Strings;
export default _default;
