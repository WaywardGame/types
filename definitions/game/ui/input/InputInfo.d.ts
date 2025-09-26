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
import type Component from "@wayward/game/ui/component/Component";
import type { InputCatalyst } from "@wayward/game/ui/input/IInput";
export default class InputInfo {
    readonly catalyst: InputCatalyst;
    /**
     * The component that this input began in.
     */
    readonly startTarget: Component;
    /**
     * The unix timestamp representing when this input began. If this is a `"down"` event, the value will be `Date.now()`,
     * whereas if this is a `"holding"` or `"up"` event, the value will be when the `"down"` event fired.
     */
    readonly startTime: number;
    /**
     * Whether this input was a touch input
     */
    readonly touch: boolean;
    /**
     * The number of milliseconds that have elapsed since `startTime`. Calculated on the fly.
     */
    get duration(): number;
    constructor(evt: Event, catalyst: InputCatalyst);
    startWasWithin(component?: Component): boolean | undefined;
}
