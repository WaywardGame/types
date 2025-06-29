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
import type { ICustomizations } from "@wayward/game/game/entity/IHuman";
import Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
export interface CharacterCreationArgs {
    customization: ICustomizations;
}
export default class CharacterCreationMenu extends Menu {
    private gameOptions;
    private inputName;
    private elementCharacterPreview;
    private swatchesHair;
    private swatchesSkin;
    private hairstyleList;
    private rotation;
    private readonly customization;
    private defaultName;
    constructor();
    setGameOptions(gameOptions: Partial<IPlayOptions>): this;
    protected onShow(): void;
    private randomizeName;
    private randomize;
    private create;
    private onStart;
    private getCharacter;
    private createEditorButton;
    private rotate;
}
