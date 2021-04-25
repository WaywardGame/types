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
declare module Files {
    function getXML(path: string): Promise<Document>;
    function get(path: string): Promise<Response>;
    function getText(path: string): Promise<string>;
    function getJson<T>(path: string): Promise<T>;
    function getArrayBuffer(path: string): Promise<ArrayBuffer>;
    function getImage(path: string): Promise<HTMLImageElement>;
    function getImageDataURL(path: string): Promise<string | undefined>;
    function download(name: string, data: any, stringify?: boolean, pretty?: boolean): void;
    function upload(e: Event, parse?: boolean): Promise<any>;
}
export default Files;
