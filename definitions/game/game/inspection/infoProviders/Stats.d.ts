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
import type Human from "@wayward/game/game/entity/Human";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type Component from "@wayward/game/ui/component/Component";
export declare class StatsInfoProvider extends InfoProvider {
    private readonly human;
    constructor(human: Human);
    get(): never[];
    getClass(): never[];
    initComponent(context: InfoProviderContext): {
        component: Component;
        fullInit(): void;
    };
}
