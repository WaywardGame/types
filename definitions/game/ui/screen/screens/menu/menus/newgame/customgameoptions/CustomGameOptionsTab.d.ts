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
import type { CustomModifierArgs, CustomModifierTypeReal, CustomModifierTypeRealSimple } from "@wayward/game/game/options/modifiers/custom/CustomModifierDefinitions";
import { CustomModifierInstance } from "@wayward/game/game/options/modifiers/custom/CustomModifierDefinitions";
import type { IRefreshable } from "@wayward/game/ui/component/Refreshable";
import { Tab } from "@wayward/game/ui/screen/screens/menu/component/Menu";
export type CustomModifiers = Array<CustomModifierInstance<CustomModifierTypeReal>>;
export default abstract class CustomGameOptionsTab extends Tab {
    private readonly modifiers;
    readonly refreshables: IRefreshable[];
    constructor(id: CustomGameOptionsSection, modifiers: CustomModifiers);
    protected addRefreshables(...refreshables: IRefreshable[]): this;
    protected hasMod(type: CustomModifierTypeReal): boolean;
    protected modArgs<TYPE extends CustomModifierTypeReal>(type: TYPE): CustomModifierArgs[TYPE] | [];
    protected removeMod(type: CustomModifierTypeReal): void;
    protected addMod<TYPE extends CustomModifierTypeReal>(type: TYPE, args: CustomModifierArgs[TYPE]): void;
    protected toggleMod<TYPE extends CustomModifierTypeRealSimple>(type: TYPE, args: boolean): void;
    protected toggleMod<TYPE extends CustomModifierTypeReal>(type: TYPE, args: false | CustomModifierArgs[TYPE]): void;
}
export declare enum CustomGameOptionsSection {
    General = 0,
    Island = 1,
    Time = 2,
    Stats = 3,
    Statuses = 4,
    Skills = 5,
    Items = 6,
    Creatures = 7
}
