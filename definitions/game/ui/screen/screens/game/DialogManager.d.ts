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
import type Screen from "@wayward/game/ui/screen/Screen";
import type { IDialogStates } from "@wayward/game/ui/screen/screens/GameScreen";
import type { DialogById } from "@wayward/game/ui/screen/screens/game/DialogMap";
import { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import type { IEventSubscriberEvents } from "@wayward/utilities/event/EventEmitter";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
type IDialogManagerEvents = IEventSubscriberEvents;
export default class DialogManager extends EventEmitter.Host<IDialogManagerEvents> {
    private readonly map;
    /**
     * Flag set when the dialog manager / parent screen is being removed
     */
    private disposing;
    private readonly screenRef;
    get screen(): Screen;
    constructor(screen: Screen);
    get<ID extends DialogId>(id: ID, subId?: string): DialogById[ID] | undefined;
    get<DIALOG extends Dialog>(id: DialogId, subId?: string): DIALOG | undefined;
    getAll(): Array<[DialogId, string]>;
    getAll<ID extends DialogId>(id: ID): Array<[DialogId, string]>;
    getAll<DIALOG extends Dialog>(id: DialogId): Array<[DialogId, string]>;
    open<ID extends DialogId>(id: ID, initializer?: (dialog: DialogById[ID]) => any, subId?: string, highlightIfAlreadyOpen?: boolean): DialogById[ID];
    open<DIALOG extends Dialog>(id: DialogId, initializer?: (dialog: DIALOG) => any, subId?: string, highlightIfAlreadyOpen?: boolean): DIALOG;
    isVisible(id: DialogId, subId?: string): boolean | undefined;
    close(id: DialogId | `${DialogId}` | `${DialogId},${string}`, subId?: string): boolean;
    closeAll(): boolean;
    toggle<ID extends DialogId>(id: ID, force?: boolean, initializer?: (dialog: DialogById[ID]) => any, subId?: string, highlightIfAlreadyOpen?: boolean): this;
    toggle<DIALOG extends Dialog>(id: DialogId, force?: boolean, initializer?: (dialog: DIALOG) => any, subId?: string, highlightIfAlreadyOpen?: boolean): this;
    toggleAll(states: IDialogStates, loaded?: boolean): this;
    private compute;
    private onClose;
    private breakKey;
    private getKey;
    private updateDialogId;
    dispose(): void;
}
export {};
