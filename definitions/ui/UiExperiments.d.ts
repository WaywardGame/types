/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
declare enum UiExperiment {
    HqFontRendering = 0,
    NewCraftingDialog = 1
}
declare module UiExperiment {
    type Excluded = "toggle" | "update" | "all" | "name";
    export type Any = Exclude<keyof typeof UiExperiment, Excluded>;
    export function all(): readonly UiExperiment[];
    export function toggle(experiment: UiExperiment, enabled: boolean): void;
    export function update(): void;
    export function name(experiment: UiExperiment): Any;
    export {};
}
export default UiExperiment;
