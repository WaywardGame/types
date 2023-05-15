/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { Events, IEventEmitter } from "event/EventEmitter";
import Button from "ui/component/Button";
import type { ISavedCharacter } from "ui/screen/screens/menu/menus/character/Character";
interface ICharacterEvents extends Events<Button> {
    delete(character: ISavedCharacter): any;
    customize(character: ISavedCharacter): any;
}
export default class CharacterButton extends Button {
    event: IEventEmitter<this, ICharacterEvents>;
    private readonly preview;
    private readonly _character;
    get character(): ISavedCharacter;
    constructor(character: ISavedCharacter);
}
export {};
