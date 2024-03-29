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
declare enum UiExperiment {
    ColorSchemeLight = 0,
    NewCraftingDialog = 1,
    ActionExamples = 2
}
declare module UiExperiment {
    type Excluded = "toggle" | "update" | "all" | "name" | "has";
    export type Any = Exclude<keyof typeof UiExperiment, Excluded>;
    export function all(): readonly UiExperiment[];
    export function toggle(experiment: UiExperiment, enabled: boolean): void;
    export function update(): void;
    export function name(experiment: UiExperiment): Any;
    export function has(experiment: UiExperiment): boolean;
    export {};
}
export default UiExperiment;
