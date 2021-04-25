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
import Doodad from "game/doodad/Doodad";
import Creature from "game/entity/creature/Creature";
import Entity from "game/entity/Entity";
import Player from "game/entity/player/Player";
export default function isCreatureKilledByHost(host: Player, attacker: Entity | Doodad, target: Entity): target is Creature;
