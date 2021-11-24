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
import type Entity from "game/entity/Entity";
import type { IStat, IStatBase } from "game/entity/IStats";
import { Stat } from "game/entity/IStats";
import type Component from "ui/component/Component";
import type { IStatDisplayDescription } from "ui/screen/screens/game/static/stats/IStatDisplayDescription";
declare const statDisplayDescriptions: OptionalDescriptions<Stat, IStatDisplayDescription>;
export interface IStatInfo extends Partial<IStatBase> {
    value: number;
    percent: number;
    oldValue?: number;
}
/**
 * Returns a `IStatDescription["onChange"]` handler that will check a predicate and run the handler with the result of that predicate.
 * @param predicate A function that takes an `IStatInfo` object and returns whether it "matches".
 * @param handler A function that takes whether the info matches, the `statElement`, the entity, and the `IStatInfo` object and "handles" it.
 */
export declare function when(predicate: (info: IStatInfo) => boolean, handler: (matched: boolean, statElement: Component, entity: Entity, info: IStatInfo) => any): (statElement: Component, entity: Entity, stat: IStat, oldValue?: number | undefined) => void;
/**
 * Returns a `when()` handler that will toggle classes on a `statElement` based on whether the `predicate` matched.
 */
export declare function toggleClasses(...classes: string[]): (matched: boolean, statElement: Component) => void;
/**
 * Shakes the stat element if `shouldShake` is true, otherwise removes the `shake` class.
 *
 * When adding the `shake` class, removes it after 250 ms.
 */
export declare function shake(shouldShake: boolean, statElement: Component): Promise<void>;
export default statDisplayDescriptions;
