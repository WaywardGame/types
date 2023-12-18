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
import type { BiomeType } from "@wayward/game/game/biome/IBiome";
import { StatusType } from "@wayward/game/game/entity/IEntity";
import type { ICreatureDescription } from "@wayward/game/game/entity/creature/ICreature";
import { CreatureType, SpawnGroup } from "@wayward/game/game/entity/creature/ICreature";
import type TimeManager from "@wayward/game/game/time/TimeManager";
import type { Random } from "@wayward/utilities/random/Random";
export interface ISpawnContext {
    biome: BiomeType;
    z?: number;
    timeManager?: TimeManager;
    time?: number;
    alignment?: number;
    random?: Random;
    inactive?: boolean;
    status?: StatusType[];
}
declare namespace CreatureSpawning {
    function getSpawnableCreatures(creatureGroup: SpawnGroup, context: ISpawnContext): {
        pool: CreatureType[];
        aberrantChance: number;
    };
    function getCreaturesWithSpawnGroup(group: SpawnGroup | undefined, context: ISpawnContext, checkAlignment?: boolean): CreatureType[];
    function checkSpawnAlignment(creatureDescription: ICreatureDescription, context: ISpawnContext, bypass?: boolean): boolean;
}
export default CreatureSpawning;
