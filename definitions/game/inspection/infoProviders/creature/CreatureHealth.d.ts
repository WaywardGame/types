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
import Creature from "entity/creature/Creature";
import { InfoDisplayLevel } from "game/inspection/InfoProvider";
import HealthInfoProvider from "game/inspection/infoProviders/entity/Health";
import Translation from "language/Translation";
export default class CreatureHealthInfoProvider extends HealthInfoProvider<Creature> {
    getDisplayLevel(): InfoDisplayLevel;
    getName(): Translation;
}
