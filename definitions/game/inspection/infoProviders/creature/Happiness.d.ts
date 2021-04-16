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
import Creature from "game/entity/creature/Creature";
import { InfoProvider } from "game/inspection/InfoProvider";
import Translation from "language/Translation";
export default class HappinessInfoProvider extends InfoProvider {
    private readonly creature;
    private message;
    constructor(creature: Creature);
    getClass(): string[];
    hasContent(): boolean;
    get(): Translation;
    onTickEnd(): void;
    private getHappinessMessage;
}
