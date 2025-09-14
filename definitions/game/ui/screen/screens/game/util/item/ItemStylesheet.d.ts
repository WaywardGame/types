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
import { Quality } from "@wayward/game/game/IObject";
import type { ILoadOnIslandOptions } from "@wayward/game/game/entity/IHuman";
import type Island from "@wayward/game/game/island/Island";
import type { DisplayableItemType } from "@wayward/game/game/item/IItem";
import SpriteEditor from "@wayward/game/ui/screen/screens/game/util/item/SpriteEditor";
declare enum Type {
    Normal = 0,
    Dim = 1,
    Highlight = 2
}
type BackgroundIDTypeSuffix = "" | `-${Lowercase<keyof typeof Type>}`;
type BackgroundIDQuality = Lowercase<Exclude<keyof typeof Quality, "None" | "Random">>;
type BackgroundID = `default${BackgroundIDTypeSuffix}` | `quality-${BackgroundIDQuality}${BackgroundIDTypeSuffix}` | `damaged${BackgroundIDTypeSuffix}` | `trading${BackgroundIDTypeSuffix}` | `overlay${BackgroundIDTypeSuffix}` | "non-craftable" | "discovery-active" | "non-craftable-discovery";
export default class ItemStylesheetHandler {
    private readonly backgroundDefinitions;
    readonly editor: SpriteEditor;
    private readonly stylesheets;
    private loadCount;
    private abortController?;
    constructor();
    refreshStylesheets(): void;
    reset(): Promise<void>;
    protected onStoppingPlay(): void;
    protected onLoadedOnIsland(player: any, island: Island, options?: ILoadOnIslandOptions): Promise<void>;
    private refreshStylesheetsStagedInBackground;
    private refreshStylesheetsStaged;
    /**
     * Append items for the specified stage to the stylesheet.
     */
    private appendStylesheetsStage;
    getItemSprite(backgroundID: BackgroundID, item: DisplayableItemType, abortSignal?: AbortSignal, itemPath?: string): Promise<string | undefined>;
    /**
     * Appends an array of item types to the specified stylesheet.
     * This no-ops for items that were already appended to the sheet.
     */
    private appendStylesheet;
    private computedStyle?;
    private readonly cssColors;
    private getCSSColor;
    private getItemTypes;
}
export {};
