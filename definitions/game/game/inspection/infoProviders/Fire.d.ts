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
import type Doodad from "game/doodad/Doodad";
import { InfoProvider } from "game/inspection/InfoProvider";
export default class FireInfoProvider extends InfoProvider {
    private readonly decayProvider;
    static getFireStageTranslation(decay?: number): import("../../../language/impl/TranslationImpl").default | undefined;
    static get(doodad: Doodad): false | FireInfoProvider | undefined;
    private fireStage;
    constructor(decayProvider: () => number);
    getClass(): string[];
    get(): import("../../../language/impl/TranslationImpl").default;
    protected onTickEnd(): void;
    private getFireStage;
}
