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
import type UiTranslation from "language/dictionary/UiTranslation";
import type { ISerializedTranslation } from "language/ITranslation";
import type Translation from "language/Translation";
import type Component from "ui/component/Component";
import type { DialogId } from "ui/screen/screens/game/Dialogs";
import type { IStringSection } from "utilities/string/Interpolator";
export declare enum QuadrantComponentId {
    Messages = 0,
    Stats = 1,
    Quickslots = 2,
    MenuBar = 3
}
export declare enum PinType {
    Note = 0,
    QuestRequirement = 1,
    Misc = 2
}
export declare enum MessageTimestamp {
    None = 0,
    RealTime = 1,
    Turn = 2
}
export interface IPinnedMessage extends Component {
    type: PinType;
    id: any;
}
export interface IDialog extends Component {
    id: DialogId;
    getName(): Iterable<IStringSection> | Translation | UiTranslation | ISerializedTranslation | undefined;
    showPanel(id: string | number): Component | undefined;
    showSettingsPanel(): this;
}
