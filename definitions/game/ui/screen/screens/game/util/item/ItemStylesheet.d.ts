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
import type { ILoadOnIslandOptions } from "game/entity/IHuman";
import type Island from "game/island/Island";
import SpriteGlow from "ui/screen/screens/game/util/item/SpriteGlow";
export default class ItemStylesheetHandler {
    private readonly backgroundDefinitions;
    readonly glows: SpriteGlow;
    private readonly stylesheets;
    private abortController;
    constructor();
    protected onStoppingPlay(): void;
    protected onLoadedOnIsland(player: any, island: Island, options?: ILoadOnIslandOptions): Promise<void>;
    onShouldRefreshStylesheet(): Promise<void>;
    private refreshStylesheets;
    private refreshStylesheet;
    private getGlow;
    private getItemTypes;
}
