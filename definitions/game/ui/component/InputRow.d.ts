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
import Input from "@wayward/game/ui/component/Input";
import { LabelledRow } from "@wayward/game/ui/component/LabelledRow";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IInputRowEvents extends Events<LabelledRow> {
    change(text: string): any;
    toggleDisabled(disabled: boolean): any;
}
export default class InputRow extends LabelledRow {
    event: IEventEmitter<this, IInputRowEvents>;
    readonly input: Input;
    readonly clear: Input["clear"];
    readonly setDefault: Input["setDefault"];
    readonly focus: Input["focus"];
    get text(): string;
    set text(text: string);
    get changed(): boolean;
    private readonly _disabledReasons;
    get disabled(): boolean;
    setDisabled(val?: boolean, reason?: string): this;
    editInput(editor: (input: Input) => any): this;
}
