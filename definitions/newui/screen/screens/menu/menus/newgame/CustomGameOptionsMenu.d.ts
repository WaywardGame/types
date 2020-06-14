/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IGameOptions } from "game/options/IGameOptions";
import { BlockRow } from "newui/component/BlockRow";
import Component from "newui/component/Component";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class CustomGameOptionsMenu extends Menu {
    private readonly options;
    private static readonly importButtonInputId;
    protected readonly rowImportExport: BlockRow;
    protected readonly buttonImport: Component;
    private readonly refreshables;
    constructor(options: () => IGameOptions);
    protected refresh(): void;
    private exportOptions;
    private importOptions;
}
