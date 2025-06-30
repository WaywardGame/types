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
import type { ICustomizations } from "@wayward/game/game/entity/IHuman";
import { HairStyle } from "@wayward/game/game/entity/IHuman";
import ChoiceList, { Choice } from "@wayward/game/ui/component/ChoiceList";
import type { CharacterPreviewFilters, CharacterPreviewRotation } from "@wayward/game/ui/screen/screens/menu/menus/character/CharacterPreview";
export declare class HairstyleList extends ChoiceList<HairstyleChoice> {
    private readonly baseCustomization;
    private readonly filters?;
    constructor(baseCustomization: ICustomizations, filters?: CharacterPreviewFilters | undefined);
    select(selection: HairStyle, thro?: boolean): void;
    refreshChoices(): void;
    update(): void;
    rotate(direction: CharacterPreviewRotation): void;
}
export declare class HairstyleChoice extends Choice {
    private readonly _hairstyle;
    private readonly baseCustomization;
    private readonly preview;
    private customization;
    get hairstyle(): HairStyle;
    constructor(_hairstyle: HairStyle, baseCustomization: ICustomizations, filters?: CharacterPreviewFilters);
    update(): void;
    rotate(direction: CharacterPreviewRotation): void;
}
