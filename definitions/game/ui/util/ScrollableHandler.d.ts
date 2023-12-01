/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Component from "@wayward/game/ui/component/Component";
export declare class ScrollableHandler {
    private readonly id;
    private readonly componentRef;
    get component(): Component | undefined;
    constructor(component: Component, id: string);
    watchAnimations(_parent: Component): void;
    private onAnimationStart;
    private onAnimationEnd;
}
