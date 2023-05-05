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
import type EntityWithStats from "game/entity/EntityWithStats";
import type { IStat } from "game/entity/IStats";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
export default class HealthInfoProvider<E extends EntityWithStats> extends InfoProvider {
    protected readonly entity: E;
    constructor(entity: E);
    getClass(): string[];
    protected onInitContent(): void;
    hasContent(): boolean;
    get(context: InfoProviderContext): InfoProvider;
    private getValue;
    protected onStatChange(_: any, stat: IStat): void;
}
