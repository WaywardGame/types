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
import Doodad from "game/doodad/Doodad";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InfoProvider } from "game/inspection/InfoProvider";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Translation from "language/Translation";
export default class HarvestabilityInfoProvider extends InfoProvider {
    private readonly doodad;
    static get(doodad: Doodad): false | HarvestabilityInfoProvider | undefined;
    private message;
    private constructor();
    getClass(): string[];
    getDefaultDisplayLevel(_context: InfoProviderContext): InfoDisplayLevel;
    hasContent(): boolean;
    get(): Translation;
    onTickEnd(): void;
    private getHarvestabilityMessage;
}
