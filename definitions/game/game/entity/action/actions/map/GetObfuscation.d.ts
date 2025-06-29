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
import type Human from "@wayward/game/game/entity/Human";
/**
 * At 0% skill, returns a random multiplier from `0.6` to `0.1`
 * At 50% skill, returns a random multiplier from `0.8` to `0.55`
 * At 100% skill, returns a multiplier of `1`
 */
export default function (drawer: Human): number;
