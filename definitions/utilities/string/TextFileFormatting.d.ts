export interface ITextFileFormatting {
    hasUtf8Bom: boolean;
    endOfLine: "\n" | "\r" | "\r\n";
    hasFinalNewline: boolean;
}
export declare function getTextFileFormatting(contents: Uint8Array): ITextFileFormatting;
export declare function formatTextFileContents(text: string, existingContents?: Uint8Array): Uint8Array;
export declare function getUpdatedTextFileContents(text: string, existingContents?: Uint8Array): Uint8Array | undefined;
