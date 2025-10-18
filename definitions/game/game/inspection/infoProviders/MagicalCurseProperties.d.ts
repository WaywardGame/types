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
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import MagicalPropertyManager from "@wayward/game/game/magic/MagicalPropertyManager";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import { PathType } from "@wayward/game/resource/IResourceLoader";
import ImagePath from "@wayward/game/ui/util/ImagePath";
export default class MagicalCursePropertiesInfoProvider extends InfoProvider {
    private readonly magic;
    static get(magic?: MagicalPropertyManager | {
        magic?: MagicalPropertyManager;
    }): MagicalCursePropertiesInfoProvider | undefined;
    constructor(magic: MagicalPropertyManager);
    getClass(): string[];
    getIcon(): {
        path: ImagePath<PathType.InfoIcon>;
        width: number;
        height: number;
    };
    hasContent(): boolean;
    get(): TranslationImpl;
}
