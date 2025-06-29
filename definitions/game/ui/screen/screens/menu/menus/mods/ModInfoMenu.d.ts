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
import { ArticleComponent } from "@wayward/game/ui/component/ArticleComponent";
import { Block } from "@wayward/game/ui/component/Block";
import { BlockRow } from "@wayward/game/ui/component/BlockRow";
import Component from "@wayward/game/ui/component/Component";
import Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
import type ModRow from "@wayward/game/ui/screen/screens/menu/menus/mods/ModRow";
export default class ModInfoMenu extends Menu {
    protected modImage: Component<HTMLElement>;
    protected modMetadata: Block;
    protected mainInfo: BlockRow;
    protected readme: ArticleComponent;
    private readonly hostRef;
    get host(): ModRow;
    constructor(host: ModRow);
    protected preShow(): Promise<void>;
    protected onGoBackFrom(): Promise<void>;
}
