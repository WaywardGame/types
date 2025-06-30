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
import { BiomeType } from "@wayward/game/game/biome/IBiome";
import { type IslandId } from "@wayward/game/game/island/IIsland";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IDropdownOption } from "@wayward/game/ui/component/Dropdown";
import GroupDropdown from "@wayward/game/ui/component/GroupDropdown";
import type { IDropdownSortableOption } from "@wayward/game/ui/component/dropdown/EnumDropdown";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
export default class IslandDropdown<OTHER_OPTIONS extends string = never> extends GroupDropdown<Record<string, string>, OTHER_OPTIONS, BiomeType> {
    constructor(defaultOption: IslandId | OTHER_OPTIONS, options?: SupplierOr<Iterable<IDropdownOption<OTHER_OPTIONS>>>);
    protected getTranslation(islandId: IslandId): TranslationImpl;
    protected sortEnumOptions(o1: IDropdownSortableOption<string>, o2: IDropdownSortableOption<string>): number;
    protected getGroupName(biome: BiomeType): string;
    protected optionTooltipInitializer: (tooltip: Tooltip, option: string) => Promise<boolean> | undefined;
    protected shouldIncludeOtherOptionsInGroupFilter(): boolean;
    protected isInGroup(islandId: IslandId, biome: BiomeType): boolean;
    protected getGroups(): BiomeType[];
    protected getEnumValues(): string[];
    protected onRefresh(): void;
    protected onAppend1(): void;
    protected onLoadedOnIsland(): void;
}
