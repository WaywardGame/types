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
import type Creature from "game/entity/creature/Creature";
import { InfoProvider } from "game/inspection/InfoProvider";
export default class HappinessInfoProvider extends InfoProvider {
    private readonly creature;
    private message;
    constructor(creature: Creature);
    getClass(): string[];
    hasContent(): boolean;
    get(): import("../../../../language/impl/TranslationImpl").default;
    onTickEnd(): void;
    private getHappinessMessage;
}
