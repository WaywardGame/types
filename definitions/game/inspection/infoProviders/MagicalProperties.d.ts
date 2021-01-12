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
import { InfoProvider } from "game/inspection/InfoProvider";
import { IItemMagicalProperty } from "item/IItem";
import Translation from "language/Translation";
export default class MagicalPropertiesInfoProvider extends InfoProvider {
    private readonly properties;
    static getFireStageTranslation(decay?: number): Translation | undefined;
    static get(properties: IItemMagicalProperty[] | {
        magicalProperties?: IItemMagicalProperty[];
    }): MagicalPropertiesInfoProvider | undefined;
    constructor(properties: IItemMagicalProperty[]);
    getClass(): string[];
    getIcon(): {
        path: string;
        width: number;
        height: number;
    };
    initComponent(): import("../../../newui/component/Component").default<HTMLElement>;
    get(): Translation;
}
