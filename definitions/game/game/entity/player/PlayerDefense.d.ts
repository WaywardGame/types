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
import { Defense } from "game/entity/IEntity";
export default class PlayerDefense extends Defense {
    parrying: number;
    vehicle: number;
    constructor(base: number, parrying: number, vehicle: number);
    copy(): PlayerDefense;
    equals(defense: Defense): boolean;
}
