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
import { BiomeType } from "game/biome/IBiome";
import type { IslandId } from "game/island/IIsland";
import type { IDropdownOption } from "ui/component/Dropdown";
import GroupDropdown from "ui/component/GroupDropdown";
export default class IslandDropdown<OTHER_OPTIONS extends string = never> extends GroupDropdown<Record<string, string>, OTHER_OPTIONS, BiomeType> {
    constructor(defaultOption: string | OTHER_OPTIONS, options?: Iterable<IDropdownOption<OTHER_OPTIONS>>);
    protected getTranslation(islandId: IslandId): import("../../../language/impl/TranslationImpl").default;
    protected getGroupName(biome: BiomeType): string;
    protected shouldIncludeOtherOptionsInGroupFilter(): boolean;
    protected isInGroup(islandId: IslandId, biome: BiomeType): boolean;
    protected getGroups(): BiomeType[];
}
