/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Doodad from "doodad/Doodad";
import { InfoDisplayLevel, InfoProvider } from "game/inspection/InfoProvider";
import Translation from "language/Translation";
export default class DoodadDurabilityInfoProvider extends InfoProvider {
    private readonly doodad;
    private durability;
    constructor(doodad: Doodad);
    getClass(): string[];
    getDisplayLevel(): InfoDisplayLevel;
    initComponent(): import("../../../../newui/component/Component").default;
    hasContent(): boolean;
    get(): Translation;
    onTickEnd(): void;
    private getDurabilityMessage;
}
