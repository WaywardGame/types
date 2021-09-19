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
import { IGameOptions } from "game/options/IGameOptions";
import { BlockRow } from "ui/component/BlockRow";
import Component from "ui/component/Component";
import Menu from "ui/screen/screens/menu/component/Menu";
export default class CustomGameOptionsMenu extends Menu {
    private readonly options;
    private static readonly importButtonInputId;
    protected readonly buttonImport: Component<HTMLElement>;
    protected readonly rowImportExport: BlockRow;
    private readonly refreshables;
    constructor(options: () => IGameOptions);
    protected refresh(): void;
    private exportOptions;
    private importOptions;
}
