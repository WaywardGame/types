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
import Creature from "entity/creature/Creature";
import { InfoProvider } from "game/inspection/InfoProvider";
import Translation from "language/Translation";
export default class HappinessInfoProvider extends InfoProvider {
    private readonly creature;
    private message;
    constructor(creature: Creature);
    getClass(): string[];
    initComponent(): import("../../../../newui/component/Component").default;
    hasContent(): boolean;
    get(): Translation;
    onTickEnd(): void;
    private getHappinessMessage;
}
