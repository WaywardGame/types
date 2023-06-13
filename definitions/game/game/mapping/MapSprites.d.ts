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
import type { BiomeType } from "game/biome/IBiome";
import type { MapSprite } from "game/mapping/IMapRender";
import type { MapTile } from "game/mapping/IMapTile";
import type { PathType } from "resource/IResourceLoader";
import type { ResourceOptionsMap } from "resource/ResourcePath";
import type { MapPinType } from "ui/screen/screens/game/dialog/islands/IIslandsDialog";
declare module MapSprites {
    interface IMapPathTypes {
        [PathType.Map]: MapSprite;
        [PathType.MapTile]: MapTile;
        [PathType.Island]: BiomeType;
        [PathType.Pin]: MapPinType;
    }
    export function waitFor<P extends keyof IMapPathTypes>(pathType: P, enumValue: IMapPathTypes[P], ...args: ResourceOptionsMap[P]): Promise<HTMLImageElement | null | undefined>;
    export function get<P extends keyof IMapPathTypes>(pathType: P, enumValue: IMapPathTypes[P], ...args: ResourceOptionsMap[P]): HTMLImageElement | Promise<HTMLImageElement | undefined> | null;
    export {};
}
export default MapSprites;
