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
import type { IHasImagePath } from "@wayward/game/game/IObject";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import { PathType } from "@wayward/game/resource/IResourceLoader";
type IResourceDescriptions = Map<number, IModdable & IHasImagePath<string | any>> | OptionalDescriptions<number, IModdable & IHasImagePath> | ((key: number) => (IModdable & IHasImagePath) | undefined);
interface IResourceData {
    enumObject: any;
    descriptions?: IResourceDescriptions;
    referencedType?: PathType;
}
type IResourceMap = IResourceData | PathType;
declare namespace IResourceData {
    function register(pathType: PathType, map: IResourceMap): void;
    function registerDescriptions(pathType: PathType, descriptions: IResourceDescriptions): void;
    function get(pathType: PathType): IResourceData | undefined;
}
export default IResourceData;
