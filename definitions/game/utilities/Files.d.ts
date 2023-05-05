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
declare module Files {
    function getXML(path: string, signal?: AbortSignal): Promise<Document>;
    function getText(path: string, signal?: AbortSignal): Promise<string>;
    function getJson<T>(path: string, signal?: AbortSignal): Promise<T>;
    function getArrayBuffer(path: string, signal?: AbortSignal): Promise<ArrayBuffer>;
    function getImage(path: string, signal?: AbortSignal): Promise<HTMLImageElement>;
    function getImageDataURL(path: string, signal?: AbortSignal): Promise<string | undefined>;
    function download(fileName: string, data: Uint8Array): void;
    function downloadWithJsonEncoding(fileName: string, data: any, stringify?: boolean, pretty?: boolean): void;
    function getFromEvent(event: Event): File[];
    function getSingleFromEvent(event: Event): File | undefined;
    function uploadSingle(file: File): Promise<IFileUploadSuccess>;
    function uploadSingleWithStringEncoding(file: File, parseAsJson?: boolean): Promise<any>;
    function uploadMultiple(files: File[]): Promise<IFileUploadResult[]>;
    interface IFileUploadResult {
        file: File;
        data?: Uint8Array;
    }
    interface IFileUploadFailure extends IFileUploadResult {
        file: File;
        data?: undefined;
    }
    interface IFileUploadSuccess extends IFileUploadResult {
        file: File;
        data: Uint8Array;
    }
    type FileUploadResult = IFileUploadFailure | IFileUploadSuccess;
}
export default Files;
