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
import type { PathType } from "@wayward/game/resource/IResourceLoader";
import type { ResourceOptionsMap } from "@wayward/game/resource/ResourcePath";
import type Component from "@wayward/game/ui/component/Component";
type Path = [PathType, number] | [string];
export interface ISerializedImagePath {
    path: Path;
    args?: ResourceOptionsMap[PathType];
    extension?: string;
}
declare module "@wayward/game/ui/component/IComponent" {
    interface IComponentEvents {
        unapplyImagePathHandler(component: Component, variableName: string): any;
    }
}
export default class ImagePath<PATHTYPE extends PathType = PathType> {
    private static readonly registrations;
    static cachebust(): void;
    static of<PATHTYPE extends PathType>(pathType: PATHTYPE, id: number): ImagePath<PATHTYPE>;
    static of(path: string): ImagePath;
    static deserialize(serialized: ImagePath | ISerializedImagePath): ImagePath;
    static applyPath(component: Component, path: string | ImagePath | ISerializedImagePath | undefined, variableName: string): void;
    private readonly path;
    private extension;
    private customPath?;
    private readonly applications;
    private args?;
    private constructor();
    static equals(imagePath?: ImagePath | ISerializedImagePath | string, imagePath2?: ImagePath | ISerializedImagePath | string): boolean;
    serialize(): ISerializedImagePath;
    setType(type: number): this;
    setExtension(extension?: string): this;
    setArgs(args?: ResourceOptionsMap[PATHTYPE]): this;
    setCustomPath(customPath?: GetterOfOr<string | ImagePath | undefined>): this;
    refresh(): void;
    get(isVariable?: boolean): string | null;
    getPath(isVariable?: boolean): string | null;
    private deregistered;
    apply(component: Component, variableName: string): this;
    private unapply;
    private updateVariable;
    private getCustomPath;
}
export {};
