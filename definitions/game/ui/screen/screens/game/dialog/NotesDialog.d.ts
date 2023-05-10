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
import type { Events, IEventEmitter } from "event/EventEmitter";
import type Player from "game/entity/player/Player";
import Bindable from "ui/input/Bindable";
import Dialog from "ui/screen/screens/game/component/Dialog";
interface INotesDialogEvents extends Events<Dialog> {
    /**
     * @param noteId The note that was shown
     */
    showNote(noteId: number): any;
}
export default class NotesDialog extends Dialog {
    event: IEventEmitter<this, INotesDialogEvents>;
    private readonly noteId;
    private readonly noteLinks;
    private readonly learnMoreLink;
    private note;
    private current;
    constructor();
    getBindable(): Bindable | undefined;
    onWrittenNote(_player: Player, _id: number): void;
    showNote(noteId: number): this;
    showFirstUnreadNote(): void;
    protected onShow(): void;
    private previousNote;
    private nextNote;
    private onNoteNumberActivate;
    private refreshNotesPanel;
    private learnMore;
}
export {};
