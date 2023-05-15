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
import type Doodad from "game/doodad/Doodad";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InfoProvider } from "game/inspection/InfoProvider";
export default class FertilityInfoProvider extends InfoProvider {
    private readonly doodad;
    static get(doodad: Doodad): false | 0 | FertilityInfoProvider | undefined;
    private message;
    private constructor();
    getClass(): string[];
    getDefaultDisplayLevel(): InfoDisplayLevel;
    hasContent(): boolean;
    get(): import("../../../../language/impl/TranslationImpl").default;
    onTickEnd(): void;
    private getFertilityMessage;
}
