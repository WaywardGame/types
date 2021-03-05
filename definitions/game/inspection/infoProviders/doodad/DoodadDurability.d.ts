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
import Doodad from "game/doodad/Doodad";
import { InfoProvider } from "game/inspection/InfoProvider";
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
export default class DoodadDurabilityInfoProvider extends InfoProvider {
    private readonly doodad;
    private durability;
    constructor(doodad: Doodad);
    getClass(): string[];
    initComponent(): {
        component: import("../../../../ui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
    hasContent(): boolean;
    get(): LabelledValue;
    onTickEnd(): void;
    private getSkill;
}
