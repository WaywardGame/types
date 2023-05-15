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
import Doodad from "game/doodad/Doodad";
import type Creature from "game/entity/creature/Creature";
import type Entity from "game/entity/Entity";
import type Player from "game/entity/player/Player";
export default function isCreatureKilledByHost(host: Player, attacker: Entity | Doodad, target: Entity): target is Creature;
