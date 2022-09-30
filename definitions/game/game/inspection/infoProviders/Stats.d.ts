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
import type Human from "game/entity/Human";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
export declare class StatsInfoProvider extends InfoProvider {
    private readonly human;
    constructor(human: Human);
    get(): never[];
    getClass(): never[];
    initComponent(context: InfoProviderContext): {
        component: import("../../../ui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
}
