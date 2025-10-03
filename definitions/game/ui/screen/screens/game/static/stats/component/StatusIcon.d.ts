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
import type EntityWithStats from "@wayward/game/game/entity/EntityWithStats";
import type Status from "@wayward/game/game/entity/status/Status";
import Component from "@wayward/game/ui/component/Component";
import type { IRefreshable } from "@wayward/game/ui/component/Refreshable";
export default class StatusIcon extends Component implements IRefreshable {
    readonly status: Status;
    readonly display?: number | undefined;
    background: Component<HTMLElement>;
    effect: Component<HTMLElement>;
    foreground: Component<HTMLElement>;
    private readonly pathFrameBackground;
    private readonly pathEffect;
    private readonly pathFrameForeground;
    private readonly entityRef;
    get entity(): EntityWithStats | undefined;
    constructor(entity: EntityWithStats, status: Status, display?: number | undefined);
    setTitleMode(): this;
    updateIcon(): void;
    refresh(): this;
    private removeShake?;
    tick(): this;
}
