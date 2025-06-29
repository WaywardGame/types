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
import type { IPlayOptions } from "@wayward/game/game/IGame";
import Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
export default class CharacterSelectionMenu extends Menu {
    gameOptions: Partial<IPlayOptions>;
    private sortRow;
    private headingNoCharacters;
    private characterRows;
    private characterCreationMenu;
    constructor();
    create(): void;
    refresh(): void;
    protected onShow(): void;
    private sortCharacters;
    private getCharacterCreationMenu;
}
