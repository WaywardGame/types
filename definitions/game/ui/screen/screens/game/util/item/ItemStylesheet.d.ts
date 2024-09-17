/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { ILoadOnIslandOptions } from "@wayward/game/game/entity/IHuman";
import type Island from "@wayward/game/game/island/Island";
import SpriteEditor from "@wayward/game/ui/screen/screens/game/util/item/SpriteEditor";
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
