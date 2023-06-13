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
import type { Events, IEventEmitter } from "event/EventEmitter";
import type Translation from "language/Translation";
import { BlockRow } from "ui/component/BlockRow";
import Button from "ui/component/Button";
import type { IDisableable } from "ui/component/IComponent";
import { RangeInput } from "ui/component/RangeInput";
import { RangeInputValueDisplay } from "ui/component/RangeInputValueDisplay";
import type { IRefreshable } from "ui/component/Refreshable";
import { Heading, Paragraph } from "ui/component/Text";
import type { IStringSection } from "utilities/string/Interpolator";
export declare class RangeRow extends BlockRow implements IRefreshable, IDisableable {
    event: IEventEmitter<this, Events<RangeInput>>;
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
    setDisabled(val?: boolean, reason?: string): this;
    editRange(rangeInputInitializer: (rangeInput: RangeInput) => RangeInput): this;
    setLabel(label: (label: Heading) => Heading): this;
    setDisplayValue(display: boolean | ((val: number) => IStringSection[] | Translation)): this;
    addDefaultButton(defaultValue?: () => number): this;
    addDescription(initializer: (description: Paragraph) => any): this;
    refresh(): this;
    setInheritTextTooltip(): this;
    private updateDisplay;
}
