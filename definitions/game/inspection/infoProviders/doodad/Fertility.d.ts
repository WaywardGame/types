/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Doodad from "doodad/Doodad";
import { InfoDisplayLevel, InfoProvider } from "game/inspection/InfoProvider";
import Translation from "language/Translation";
export default class FertilityInfoProvider extends InfoProvider {
    private readonly doodad;
    static get(doodad: Doodad): false | 0 | FertilityInfoProvider | undefined;
    private message;
    private constructor();
    getClass(): string[];
    getDisplayLevel(): InfoDisplayLevel;
    initComponent(): import("../../../../newui/component/Component").default;
    hasContent(): boolean;
    get(): Translation;
    onTickEnd(): void;
    private getFertilityMessage;
}
