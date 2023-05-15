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
import type { BiomeType } from "game/biome/IBiome";
import type { ICreatureDescription } from "game/entity/creature/ICreature";
import { CreatureType, SpawnGroup } from "game/entity/creature/ICreature";
import type TimeManager from "game/time/TimeManager";
import type { Random } from "utilities/random/Random";
export interface ISpawnContext {
    biome: BiomeType;
    z?: number;
    timeManager?: TimeManager;
    time?: number;
    reputation?: number;
    random?: Random;
    inactive?: boolean;
}
declare module CreatureSpawning {
    function getSpawnableCreatures(creatureGroup: SpawnGroup, context: ISpawnContext): {
        pool: CreatureType[];
        aberrantChance: number;
    };
    function getCreaturesWithSpawnGroup(group: SpawnGroup | undefined, context: ISpawnContext, checkReputation?: boolean): CreatureType[];
    function checkSpawnReputation(creatureDescription: ICreatureDescription, context: ISpawnContext, bypass?: boolean): boolean;
}
export default CreatureSpawning;
