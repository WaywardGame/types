/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { IColorDescription } from "game/entity/IHuman";
import ChoiceList, { Choice } from "ui/component/ChoiceList";
export declare class SwatchList<T extends number> extends ChoiceList<Swatch> {
    private readonly colors;
    constructor(colors: Record<number, IColorDescription | undefined>);
    select(selection: T, thro?: boolean): void;
    refreshChoices(): void;
}
export declare class Swatch extends Choice {
    color: IColorDescription;
    constructor(color: IColorDescription);
}
