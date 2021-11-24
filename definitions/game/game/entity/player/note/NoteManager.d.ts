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
import type Island from "game/island/Island";
import type { PartOfDay } from "game/time/ITimeManager";
import Note from "language/dictionary/Note";
import type { IModdable } from "mod/ModRegistry";
import { HelpArticle } from "ui/screen/screens/menu/menus/help/HelpArticleDescriptions";
export interface INoteDescription extends IModdable {
    learnMore?: HelpArticle;
}
export declare const noteDescriptions: OptionalDescriptions<Note, INoteDescription>;
export declare type Time = PartOfDay | string;
export interface INote {
    id: keyof typeof Note;
    time: {
        day: number;
        time: number;
        skilled: boolean;
    };
    args: any[];
    unread?: boolean;
}
export interface INoteHost {
    getIsland(): Island;
    canWriteInHours(): boolean;
    canWriteNote(note: INote): boolean;
    onWriteNote(index: number, note: Note): any;
    onReadNote(index: number): any;
}
export default class NoteManager {
    private readonly host;
    private readonly _notes;
    constructor(host: INoteHost);
    get notes(): INote[];
    getNote(id: number): INote | undefined;
    wasWritten(note: Note): boolean;
    write(note: Note, ...args: any[]): void;
    getUnread(): INote[];
    markRead(noteId: number): void;
}