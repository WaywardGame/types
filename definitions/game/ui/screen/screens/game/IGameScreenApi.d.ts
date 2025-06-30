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
import type { IUsableActionPossibleUsing, UsableActionUsability } from "@wayward/game/game/entity/action/usable/IUsableAction";
import type UsableAction from "@wayward/game/game/entity/action/usable/UsableAction";
import type UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
import type { ISerializedTranslation } from "@wayward/game/language/ITranslation";
import type Translation from "@wayward/game/language/Translation";
import type Component from "@wayward/game/ui/component/Component";
import type { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import type { IStringSection } from "@wayward/game/utilities/string/Interpolator";
export declare enum QuadrantComponentId {
    Messages = 0,
    Stats = 1,
    MenuBar = 2,
    ActionBar = 3
}
export declare enum PinType {
    Note = 0,
    QuestRequirement = 1,
    Misc = 2,
    NextQuest = 3
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
export declare enum UsableActionExecutionResult {
    UnknownAction = 0,
    NotExecutable = 1,
    NotUsableDidAlert = 2,
    NotUsableNoAlert = 3,
    Debounced = 4,
    QueueReplacement = 5
}
export interface IUsableActionExecutionOptions {
    /**
     * An optional `UsableActionUsability` failure to skip all checks and fail with this result instead
     */
    notUsable?: UsableActionUsability;
    /**
     * Whether failing actions should be silent
     */
    silent?: true;
    /**
     * Whether to debounce error messages & sounds.
     */
    debounce?: true;
    /**
     * An optional replacement for the default `isUsable` check on the action
     * @param isUsable The default `isUsable` check
     */
    isUsable?(action: UsableAction, using: IUsableActionPossibleUsing, isUsable: (using: IUsableActionPossibleUsing) => UsableActionUsability): UsableActionUsability;
    /**
     * An optional handler for before `isUsable` is checked
     */
    onPreUsabilityCheck?(action: UsableAction, using: IUsableActionPossibleUsing): any;
}
