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
import MagicalPropertyManager from "game/magic/MagicalPropertyManager";
export default class MagicalPropertiesInfoProvider extends InfoProvider {
    private readonly magic;
    static getFireStageTranslation(decay?: number): import("../../../language/impl/TranslationImpl").default | undefined;
    static get(magic?: MagicalPropertyManager | {
        magic?: MagicalPropertyManager;
    }): MagicalPropertiesInfoProvider | undefined;
    constructor(magic: MagicalPropertyManager);
    getClass(): string[];
    getIcon(): {
        path: string;
        width: number;
        height: number;
    };
    hasContent(): boolean;
    get(): import("../../../language/impl/TranslationImpl").default;
}