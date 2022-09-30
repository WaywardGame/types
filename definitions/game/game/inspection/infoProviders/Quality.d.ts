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
import { InfoProvider } from "game/inspection/InfoProvider";
import type { Quality } from "game/IObject";
import { PathType } from "resource/IResourceLoader";
import ImagePath from "ui/util/ImagePath";
export default class QualityInfoProvider extends InfoProvider {
    private readonly quality;
    static getFireStageTranslation(decay?: number): import("../../../language/impl/TranslationImpl").default | undefined;
    static get(object: Quality | {
        quality?: Quality;
    }): QualityInfoProvider | undefined;
    constructor(quality: Quality);
    getClass(): string[];
    getIcon(): {
        path: ImagePath<PathType.Quality>;
        width: number;
        height: number;
    };
    get(): import("../../../language/impl/TranslationImpl").default;
}
