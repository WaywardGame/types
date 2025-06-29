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
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
export default class CreatureTamedInfoProvider extends InfoProvider {
    private readonly creature;
    private readonly tamed;
    private readonly mood;
    private readonly tameTime;
    private readonly ai;
    private readonly noPetting;
    private readonly pet;
    private readonly milk;
    private readonly untamesIn;
    private readonly timesTamed;
    private readonly timesPetted;
    constructor(creature: Creature);
    getClass(): string[];
    hasContent(): boolean;
    get(): Array<LabelledValue | SimpleInfoProvider>;
    private getHappinessMessage;
}
