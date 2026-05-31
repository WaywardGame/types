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
declare namespace ErrorReportAttachments {
    const MAX_ATTACHMENTS = 4;
    const MAX_ATTACHMENT_BYTES: number;
    const MAX_TOTAL_ATTACHMENT_BYTES: number;
    interface IAttachment {
        filename: string;
        contentType: string;
        contents: string;
    }
    interface IValidationResult {
        attachments: IAttachment[];
        error?: string;
        totalBytes: number;
    }
    function validate(attachments: readonly IAttachment[] | undefined): IValidationResult;
    function isAcceptedContentType(contentType: string): boolean;
    function isSafeFilename(filename: string): boolean;
    function byteLength(contents: string): number;
}
export default ErrorReportAttachments;
