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
import type { IBiomeMapGen, IMapGenGenerateInput, IMapGenGenerateOutput, IMapGenPostProcessInput } from "@wayward/game/game/mapgen/IMapGen";
import type { IDungeonBiomeOptions } from "@wayward/game/game/biome/dungeon/IDungeonOptions";
/**
 * Based on
 * - https://www.gamedeveloper.com/programming/procedural-dungeon-generation-algorithm
 * - https://www.reddit.com/r/gamedev/comments/1dlwc4/procedural_dungeon_generation_algorithm_explained/
 */
declare class DungeonMapGen implements IBiomeMapGen<IDungeonBiomeOptions> {
    generate(input: IMapGenGenerateInput<IDungeonBiomeOptions>): IMapGenGenerateOutput;
    postProcess(input: IMapGenPostProcessInput<IDungeonBiomeOptions>): void;
}
export declare const dungeonMapGen2140: DungeonMapGen;
export {};
