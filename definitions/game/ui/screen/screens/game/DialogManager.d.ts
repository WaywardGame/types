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
import type Screen from "ui/screen/Screen";
import Dialog from "ui/screen/screens/game/component/Dialog";
import type { DialogById } from "ui/screen/screens/game/DialogMap";
import { DialogId } from "ui/screen/screens/game/Dialogs";
import type { IDialogStates } from "ui/screen/screens/GameScreen";
export default class DialogManager {
    private readonly map;
    private readonly screenRef;
    get screen(): Screen;
    constructor(screen: Screen);
    get<ID extends DialogId>(id: ID, subId?: string): DialogById[ID] | undefined;
    get<DIALOG extends Dialog>(id: DialogId, subId?: string): DIALOG | undefined;
    getAll<ID extends DialogId>(id: ID): Array<[DialogId, string]>;
    getAll<DIALOG extends Dialog>(id: DialogId): Array<[DialogId, string]>;
    open<ID extends DialogId>(id: ID, subId?: string): DialogById[ID];
    open<DIALOG extends Dialog>(id: DialogId, subId?: string): DIALOG;
    isVisible(id: DialogId, subId?: string): boolean | undefined;
    close(id: DialogId | `${DialogId}` | `${DialogId},${string}`, subId?: string): Promise<this>;
    closeAll(): Promise<void>;
    toggle<ID extends DialogId>(id: ID, force?: boolean, initializer?: (dialog: DialogById[ID]) => any, subId?: string): this;
    toggle<DIALOG extends Dialog>(id: DialogId, force?: boolean, initializer?: (dialog: DIALOG) => any, subId?: string): this;
    toggleAll(states: IDialogStates): this;
    private compute;
    private onClose;
    private getKey;
}
