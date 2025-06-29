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
import type Bindable from "@wayward/game/ui/input/Bindable";
import type { IRegexSegment, IStringSection } from "@wayward/game/utilities/string/Interpolator";
export interface IBindingsSection extends IStringSection {
    bindable: Bindable | null;
    bindableNoBindingsFallback?: IStringSection[];
    bindableSimplify?: true;
    bindableContextless?: true;
}
export declare namespace IBindingsSection {
    function create(bindable: Bindable | null, fallback?: IStringSection[], simplify?: boolean, contextless?: boolean): IBindingsSection;
}
declare const bindSegment: IRegexSegment;
export default bindSegment;
