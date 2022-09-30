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
import type { IStat } from "game/entity/IStats";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type { TranslationGenerator } from "ui/component/IComponent";
export default class HealthInfoProvider<E extends Entity> extends InfoProvider {
    protected readonly entity: E;
    constructor(entity: E);
    getClass(): string[];
    hasContent(): boolean;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    protected getName(): import("../../../../language/impl/TranslationImpl").default;
    protected onStatChange(_: any, stat: IStat): void;
}
