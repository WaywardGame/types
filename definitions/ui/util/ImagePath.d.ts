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
import { PathType } from "resource/IResourceLoader";
import Component from "ui/component/Component";
export default class ImagePath {
    private static readonly registrations;
    static cachebust(): void;
    static of(pathType: PathType, id: number): ImagePath;
    static of(path: string): ImagePath;
    private readonly path;
    private extension;
    private customPath?;
    private readonly applications;
    private constructor();
    setExtension(extension?: string): this;
    setCustomPath(customPath?: GetterOfOr<string | undefined>): this;
    refresh(): void;
    get(isVariable?: boolean): string;
    apply(component: Component, variableName: string): this;
    private applyInternal;
    private getCustomPath;
}
