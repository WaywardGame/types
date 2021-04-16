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
import Player from "game/entity/player/Player";
import { InfoProvider } from "game/inspection/InfoProvider";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import PlayerInspection from "game/inspection/inspections/PlayerInspection";
import { IVector3 } from "utilities/math/IVector";
export default class SelfInspection extends PlayerInspection {
    static getFromTile(position: IVector3, context: InfoProviderContext): ArrayOr<Inspection<Player>>;
    static handles(player: unknown, context?: InfoProviderContext): boolean;
    constructor(player: Player);
    getBorder(): string;
    get(context: InfoProviderContext): (import("../InfoProvider").SimpleInfoProvider | StatsInfoProvider)[];
}
declare class StatsInfoProvider extends InfoProvider {
    get(): never[];
    getClass(): never[];
    initComponent(context: InfoProviderContext): {
        component: import("../../../ui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
}
export {};
