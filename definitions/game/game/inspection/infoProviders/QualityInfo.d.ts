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
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { Quality } from "@wayward/game/game/IObject";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
export default class QualityInfoProvider extends InfoProvider {
    private readonly quality;
    static getFireStageTranslation(decay?: number): TranslationImpl | undefined;
    static get(object: Quality | {
        quality?: Quality;
    }): QualityInfoProvider | undefined;
    constructor(quality: Quality);
    getClass(): string[];
    get(): TranslationImpl;
}
