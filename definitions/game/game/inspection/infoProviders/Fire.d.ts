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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
export default class FireInfoProvider extends InfoProvider {
    private readonly decayProvider;
    static getFireStageTranslation(decay?: number): TranslationImpl | undefined;
    static get(doodad: Doodad): FireInfoProvider | undefined;
    private fireStage;
    constructor(decayProvider: () => number);
    getClass(): string[];
    get(): TranslationImpl;
    protected onTickEnd(): void;
    private getFireStage;
}
