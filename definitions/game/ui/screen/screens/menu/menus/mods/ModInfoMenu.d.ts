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
import { Article } from "ui/component/Article";
import { BlockRow } from "ui/component/BlockRow";
import Component from "ui/component/Component";
import Menu from "ui/screen/screens/menu/component/Menu";
import type ModRow from "ui/screen/screens/menu/menus/mods/ModRow";
export default class ModInfoMenu extends Menu {
    protected modImage: Component<HTMLElement>;
    protected modMetadata: Article;
    protected mainInfo: BlockRow;
    protected readme: Article;
    private readonly hostRef;
    get host(): ModRow;
    constructor(host: ModRow);
    protected preShow(): Promise<void>;
    protected onGoBackFrom(): Promise<void>;
}
