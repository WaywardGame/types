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
import type Translation from "@wayward/game/language/Translation";
import { BlockRow } from "@wayward/game/ui/component/BlockRow";
import Button from "@wayward/game/ui/component/Button";
import type { IDisableable } from "@wayward/game/ui/component/IComponent";
import { RangeInput } from "@wayward/game/ui/component/RangeInput";
import { RangeInputValueDisplay } from "@wayward/game/ui/component/RangeInputValueDisplay";
import type { IRefreshable } from "@wayward/game/ui/component/Refreshable";
import { Heading, Paragraph } from "@wayward/game/ui/component/Text";
import type { IStringSection } from "@wayward/game/utilities/string/Interpolator";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IRangeRowEvents extends Events<BlockRow>, Events<RangeInput> {
    default(): any;
}
export declare class RangeRow extends BlockRow implements IRefreshable, IDisableable {
    event: IEventEmitter<this, IRangeRowEvents>;
    rangeInput: RangeInput;
    heading: Heading;
    rangeInputValueDisplay: RangeInputValueDisplay | undefined;
    description: Paragraph;
    defaultButton?: Button;
    get value(): number;
    set value(val: number);
    private readonly _disabledReasons;
    get disabled(): boolean;
    constructor();
    protected getChildCount(): number;
    setDisabled(val?: boolean, reason?: string): this;
    editRange(rangeInputInitializer: (rangeInput: RangeInput) => RangeInput): this;
    setLabel(label: (label: Heading) => Heading): this;
    setDisplayValue(display: boolean | ((val: number) => IStringSection[] | Translation)): this;
    addDefaultButton(defaultValue?: () => number): this;
    addDescription(initializer: (description: Paragraph) => any): this;
    refresh(emit?: boolean): this;
    setInheritTextTooltip(): this;
    private updateDisplay;
}
