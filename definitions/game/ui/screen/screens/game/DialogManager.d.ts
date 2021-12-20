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
    readonly map: Map<DialogId, Dialog>;
    private readonly screenRef;
    get screen(): Screen;
    constructor(screen: Screen);
    open<ID extends DialogId>(id: ID): DialogById[ID];
    open<DIALOG extends Dialog>(id: DialogId): DIALOG;
    isVisible(id: DialogId): boolean | undefined;
    close(id: DialogId): Promise<this>;
    closeAll(): Promise<void>;
    toggle<ID extends DialogId>(id: ID, force?: boolean, initializer?: (dialog: DialogById[ID]) => any): this;
    toggle<DIALOG extends Dialog>(id: DIALOG, force?: boolean, initializer?: (dialog: DIALOG) => any): this;
    toggleAll(states: IDialogStates): this;
    private compute;
    private onClose;
}
