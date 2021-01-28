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
import { MagicalPropertyType } from "item/IItem";
import Translation from "language/Translation";
export default class MagicalPropertyValue extends InfoProvider {
    private readonly base;
    private readonly magical;
    private readonly magicalPropertyType;
    static base(base: () => number): {
        magical(type: MagicalPropertyType, magical: () => number | undefined): MagicalPropertyValue;
    };
    private _combined?;
    private constructor();
    combined(combined: (base: number, magical: number) => number): this;
    getClass(): string[];
    get(): Translation | import("../InfoProvider").SimpleInfoProvider[];
    initComponent(): import("../../../newui/component/Component").default<HTMLElement>;
}
