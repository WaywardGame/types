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
import type { CustomModifierDefinition } from "@wayward/game/game/options/modifiers/custom/ICustomModifier";
import { CustomModifierType } from "@wayward/game/game/options/modifiers/custom/ICustomModifier";
import { GameOptionsIcon } from "@wayward/game/ui/screen/screens/menu/menus/pause/GameOptionsIcons";
declare const map: {
    0: GameOptionsIcon.Respawn;
    1: GameOptionsIcon.Crafting;
    2: GameOptionsIcon.Crafting;
    3: GameOptionsIcon.Curse;
    4: GameOptionsIcon.Curse;
    5: GameOptionsIcon.Peaceful;
    6: GameOptionsIcon.Creatures;
    7: GameOptionsIcon.Creatures;
    8: GameOptionsIcon.Creatures;
    9: GameOptionsIcon.Creatures;
    10: GameOptionsIcon.Creatures;
    11: GameOptionsIcon.Travel;
    12: GameOptionsIcon.Travel;
    13: GameOptionsIcon.Luck;
    14: GameOptionsIcon.Weight;
    15: GameOptionsIcon.Health;
    16: GameOptionsIcon.Stamina;
    17: GameOptionsIcon.Hunger;
    18: GameOptionsIcon.Thirst;
    19: GameOptionsIcon.Items;
    20: GameOptionsIcon.NoItems;
    21: GameOptionsIcon.Items;
    22: GameOptionsIcon.Items;
    23: GameOptionsIcon.Skills;
    24: GameOptionsIcon.Skills;
    25: GameOptionsIcon.Skills;
    26: GameOptionsIcon.Skills;
    27: GameOptionsIcon.EternalDay;
    28: GameOptionsIcon.EternalNight;
    29: GameOptionsIcon.Time;
    30: GameOptionsIcon.Time;
    31: GameOptionsIcon.Time;
    32: GameOptionsIcon.Time;
    33: GameOptionsIcon.Bleeding;
    34: GameOptionsIcon.Poisoned;
    35: GameOptionsIcon.Burned;
    36: null;
    37: null;
    38: null;
    39: null;
    40: null;
    41: null;
    42: null;
    43: null;
    44: null;
    45: null;
    46: null;
};
export declare const customModifierToGameOptionsIconMap: Record<CustomModifierType, GameOptionsIcon | null>;
export type CustomModifierTypeReal = keyof {
    [TYPE in CustomModifierType as typeof map[TYPE] extends null ? never : TYPE]: true;
};
export declare const customModifierDescriptions: {
    0: CustomModifierDefinition<[]>;
    1: CustomModifierDefinition<[]>;
    2: CustomModifierDefinition<[]>;
    3: CustomModifierDefinition<[]>;
    4: CustomModifierDefinition<[initialCurse: number]>;
    5: CustomModifierDefinition<[]>;
    6: CustomModifierDefinition<[]>;
    9: CustomModifierDefinition<[creature: Map<import("../../../entity/creature/ICreature").CreatureType, import("@wayward/game/game/options/IGameOptions").IGameOptionsCreature>]>;
    10: CustomModifierDefinition<[aberrants: boolean]>;
    7: CustomModifierDefinition<[spawnLimit: number]>;
    8: CustomModifierDefinition<[rateMultiplier: number]>;
    11: CustomModifierDefinition<[biome: import("../../../biome/IBiome").BiomeType]>;
    12: CustomModifierDefinition<[]>;
    13: CustomModifierDefinition<[luckMultiplier: number]>;
    14: CustomModifierDefinition<[bonus: number]>;
    15: CustomModifierDefinition<[options: Partial<import("@wayward/game/game/options/IGameOptions").IGameOptionsStat>]>;
    16: CustomModifierDefinition<[options: Partial<import("@wayward/game/game/options/IGameOptions").IGameOptionsStat>]>;
    17: CustomModifierDefinition<[options: Partial<import("@wayward/game/game/options/IGameOptions").IGameOptionsStat>]>;
    18: CustomModifierDefinition<[options: Partial<import("@wayward/game/game/options/IGameOptions").IGameOptionsStat>]>;
    19: CustomModifierDefinition<[]>;
    20: CustomModifierDefinition<[]>;
    21: CustomModifierDefinition<[multiplier: number]>;
    22: CustomModifierDefinition<[multiplier: number]>;
    23: CustomModifierDefinition<[count: number]>;
    24: CustomModifierDefinition<[initial: number]>;
    25: CustomModifierDefinition<[multiplier: number]>;
    26: CustomModifierDefinition<[skill: Map<import("../../../entity/skill/ISkills").SkillType, import("@wayward/game/game/options/IGameOptions").IGameOptionsSkill>]>;
    27: CustomModifierDefinition<[]>;
    28: CustomModifierDefinition<[]>;
    29: CustomModifierDefinition<[]>;
    30: CustomModifierDefinition<[initial: number]>;
    31: CustomModifierDefinition<[length: number]>;
    32: CustomModifierDefinition<[percent: number]>;
    33: CustomModifierDefinition<[options: Partial<import("@wayward/game/game/options/IGameOptions").IGameOptionsStatus>]>;
    34: CustomModifierDefinition<[options: Partial<import("@wayward/game/game/options/IGameOptions").IGameOptionsStatus>]>;
    35: CustomModifierDefinition<[options: Partial<import("@wayward/game/game/options/IGameOptions").IGameOptionsStatus>]>;
};
export type CustomModifierArgs = {
    [TYPE in CustomModifierTypeReal]: ((typeof customModifierDescriptions)[TYPE] extends CustomModifierDefinition<infer ARGS> ? ARGS : never);
};
export type CustomModifierTypeRealSimple = keyof {
    [TYPE in CustomModifierTypeReal as CustomModifierArgs[TYPE] extends [] ? TYPE : never]: true;
};
export interface CustomModifierInstance<TYPE extends CustomModifierTypeReal> {
    type: TYPE;
    args: CustomModifierArgs[TYPE];
}
export declare namespace CustomModifierInstance {
    function args<TYPE extends CustomModifierTypeReal>(type: TYPE, instances: Array<CustomModifierInstance<CustomModifierTypeReal>>): CustomModifierArgs[TYPE] | [];
    function args<TYPE extends CustomModifierTypeReal>(instance: CustomModifierInstance<TYPE>): CustomModifierArgs[TYPE];
}
export {};
