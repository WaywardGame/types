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
    4: GameOptionsIcon.Peaceful;
    5: GameOptionsIcon.Creatures;
    6: GameOptionsIcon.Creatures;
    7: GameOptionsIcon.Creatures;
    8: GameOptionsIcon.Creatures;
    9: GameOptionsIcon.Creatures;
    10: GameOptionsIcon.Travel;
    11: GameOptionsIcon.Travel;
    12: GameOptionsIcon.Luck;
    13: GameOptionsIcon.Weight;
    14: GameOptionsIcon.Health;
    15: GameOptionsIcon.Stamina;
    16: GameOptionsIcon.Hunger;
    17: GameOptionsIcon.Thirst;
    18: GameOptionsIcon.Items;
    19: GameOptionsIcon.NoItems;
    20: GameOptionsIcon.Items;
    21: GameOptionsIcon.Items;
    22: GameOptionsIcon.Skills;
    23: GameOptionsIcon.Skills;
    24: GameOptionsIcon.Skills;
    25: GameOptionsIcon.Skills;
    26: GameOptionsIcon.EternalDay;
    27: GameOptionsIcon.EternalNight;
    28: GameOptionsIcon.Time;
    29: GameOptionsIcon.Time;
    30: GameOptionsIcon.Time;
    31: GameOptionsIcon.Time;
    32: GameOptionsIcon.Bleeding;
    33: GameOptionsIcon.Poisoned;
    34: GameOptionsIcon.Burned;
    35: null;
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
    4: CustomModifierDefinition<[]>;
    5: CustomModifierDefinition<[]>;
    8: CustomModifierDefinition<[creature: Map<import("../../../entity/creature/ICreature").CreatureType, import("@wayward/game/game/options/IGameOptions").IGameOptionsCreature>]>;
    9: CustomModifierDefinition<[aberrants: boolean]>;
    6: CustomModifierDefinition<[spawnLimit: number]>;
    7: CustomModifierDefinition<[rateMultiplier: number]>;
    10: CustomModifierDefinition<[biome: import("../../../biome/IBiome").BiomeType]>;
    11: CustomModifierDefinition<[]>;
    12: CustomModifierDefinition<[luckMultiplier: number]>;
    13: CustomModifierDefinition<[bonus: number]>;
    14: CustomModifierDefinition<[options: Partial<import("@wayward/game/game/options/IGameOptions").IGameOptionsStat>]>;
    15: CustomModifierDefinition<[options: Partial<import("@wayward/game/game/options/IGameOptions").IGameOptionsStat>]>;
    16: CustomModifierDefinition<[options: Partial<import("@wayward/game/game/options/IGameOptions").IGameOptionsStat>]>;
    17: CustomModifierDefinition<[options: Partial<import("@wayward/game/game/options/IGameOptions").IGameOptionsStat>]>;
    18: CustomModifierDefinition<[]>;
    19: CustomModifierDefinition<[]>;
    20: CustomModifierDefinition<[multiplier: number]>;
    21: CustomModifierDefinition<[multiplier: number]>;
    22: CustomModifierDefinition<[count: number]>;
    23: CustomModifierDefinition<[initial: number]>;
    24: CustomModifierDefinition<[multiplier: number]>;
    25: CustomModifierDefinition<[skill: Map<import("../../../entity/skill/ISkills").SkillType, import("@wayward/game/game/options/IGameOptions").IGameOptionsSkill>]>;
    26: CustomModifierDefinition<[]>;
    27: CustomModifierDefinition<[]>;
    28: CustomModifierDefinition<[]>;
    29: CustomModifierDefinition<[initial: number]>;
    30: CustomModifierDefinition<[length: number]>;
    31: CustomModifierDefinition<[percent: number]>;
    32: CustomModifierDefinition<[options: Partial<import("@wayward/game/game/options/IGameOptions").IGameOptionsStatus>]>;
    33: CustomModifierDefinition<[options: Partial<import("@wayward/game/game/options/IGameOptions").IGameOptionsStatus>]>;
    34: CustomModifierDefinition<[options: Partial<import("@wayward/game/game/options/IGameOptions").IGameOptionsStatus>]>;
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
