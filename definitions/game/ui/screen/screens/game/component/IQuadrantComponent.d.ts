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
/**
 * Since when do quadrants refer to 8 sections, this ain't no octagon
 */
export declare enum Quadrant {
    Any = -1,
    None = 0,
    TopLeft = 1,
    Top = 2,
    TopRight = 3,
    BottomRight = 4,
    Bottom = 5,
    BottomLeft = 6
}
export declare const QUADRANT_REGIONS: {
    top: Quadrant[];
    bottom: Quadrant[];
    left: Quadrant[];
    right: Quadrant[];
    middle: Quadrant[];
};
export type QuadrantRegion = keyof typeof QUADRANT_REGIONS;
export declare enum QuadrantComponentContextMenuAction {
    SwitchWith = 0,
    MoveTo = 1,
    Hide = 2
}
