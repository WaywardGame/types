/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IHasImagePath } from "game/IObject";
import type { IModdable } from "mod/ModRegistry";
import { PathType } from "resource/IResourceLoader";
interface IResourceData {
    enumObject: any;
    descriptions?: Map<number, IModdable & IHasImagePath<string | any>> | OptionalDescriptions<number, IModdable & IHasImagePath> | ((key: number) => (IModdable & IHasImagePath) | undefined);
    referencedType?: PathType;
}
declare module IResourceData {
    function get(pathType: PathType): IResourceData | undefined;
}
export default IResourceData;
