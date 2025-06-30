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
import { BiomeType } from "@wayward/game/game/biome/IBiome";
import { StatusThreatLevel } from "@wayward/game/game/entity/status/IStatus";
import { DrawnMapTheme } from "@wayward/game/game/mapping/IMapRender";
import { PathType } from "@wayward/game/resource/IResourceLoader";
import IResourceData from "@wayward/game/resource/IResourcePath";
interface IResourceOptionsMap {
    [PathType.Terrain]: [biome?: BiomeType];
    [PathType.TerrainTilled]: [biome?: BiomeType];
    [PathType.TerrainTilled]: [biome?: BiomeType];
    [PathType.MapTile]: [theme: DrawnMapTheme];
    [PathType.Map]: [theme: DrawnMapTheme, offset?: number];
    [PathType.Island]: [theme: DrawnMapTheme, offset: number];
    [PathType.Pin]: [theme: DrawnMapTheme];
    [PathType.EquipSlot]: [resolution?: 16 | 8];
    [PathType.Deity]: [big?: true];
    [PathType.StatusIconFrame]: [group: StatusThreatLevel, layer: "bg" | "fg"];
}
export type ResourceOptionsMap = Record<Exclude<PathType, keyof IResourceOptionsMap>, []> & IResourceOptionsMap;
declare namespace ResourcePath {
    /**
     * Returns the path of a resource.
     * @param pathType The type of resource this is.
     * @param index The index of this resource (indexed by this number in resource's enum)
     * @param options Object. customPath - If this is retrieving the path to a modded item, and the path for that item doesn't appear in the
     * description as `imagePath`, it may be passed here instead.
     */
    function getPath<P extends PathType>(pathType: P, index: number, customPath?: string, ...args: ResourceOptionsMap[P]): string;
    /**
     * Returns the mod version of a given resource path.
     * @param path The current path of this resource.
     * @param resourceData The resource data of this path type.
     * @param index The index of this resource.
     * @param customPath Replaces the `imagePath` of the description.
     *
     * Steps taken:
     * 1. If the path is not a mod-added resource, it will return the given path. Otherwise:
     * 2. If the description has a custom path stored in `imagePath`, the given path is replaced with this path.
     * 3. Return `{modManager.getPath(modIndex)}/{path}`
     */
    function getModPath(path: string, resourceData: IResourceData, index: number, customPath?: string): string;
    /**
     * Returns a resource's name.
     *
     * Warning: Does not validate that `index` is in `enumObject`.
     */
    function getResourceName<P extends PathType>(pathType: P, enumObject: any, index: number, resourceData: IResourceData, ...args: ResourceOptionsMap[P]): string;
    /**
     * Returns the resource type of the given `PathType`.
     */
    function getPathResourceType(pathType: PathType): "sound" | "image";
    /**
     * Returns the domain for the given `PathType`, or `undefined` if the `PathType` has no domain.
     */
    function getPathDomain<P extends PathType>(pathType: P, ...args: ResourceOptionsMap[P]): string | undefined;
    /**
     * Returns the name of the given `PathType`
     */
    function getPathTypeName<P extends PathType>(pathType: PathType, ...args: ResourceOptionsMap[P]): string | undefined;
}
export default ResourcePath;
