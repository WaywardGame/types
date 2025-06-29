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
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
export default class HarvestabilityInfoProvider extends InfoProvider {
    private readonly doodad;
    static get(doodad: Doodad): HarvestabilityInfoProvider | undefined;
    private harvestMessage;
    private constructor();
    getClass(): string[];
    getDefaultDisplayLevel(_context: InfoProviderContext): InfoDisplayLevel;
    hasContent(): boolean;
    get(): TranslationImpl;
    onTickEnd(): void;
    private getHarvestabilityMessage;
}
