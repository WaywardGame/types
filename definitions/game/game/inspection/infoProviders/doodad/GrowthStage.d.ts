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
export default class GrowthStageInfoProvider extends InfoProvider {
    private readonly doodad;
    static get(doodad: Doodad): GrowthStageInfoProvider | undefined;
    static getGrowthStage(doodad: Doodad): TranslationImpl | undefined;
    private stage;
    private constructor();
    getClass(): string[];
    onTickEnd(): void;
    hasContent(): boolean;
    get(): TranslationImpl;
}
