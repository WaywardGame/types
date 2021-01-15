/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { IRequireFunction } from "utilities/dependency/DependencyManager";
export declare enum CaseStyle {
    PascalCase = 0,
    CamelCase = 1,
    SnakeCase = 2,
    KebabCase = 3
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
    encodeURIComponentPath(p: string): string;
    generateTimestamp(date?: Date): string;
    isSubstringAt(str: string, index: number, substr: string): boolean;
    protected onAcquire(d: any, req: IRequireFunction): Promise<void>;
}
declare const _default: Strings;
export default _default;
