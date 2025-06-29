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
import type Island from "@wayward/game/game/island/Island";
import type { PartOfDay } from "@wayward/game/game/time/ITimeManager";
import type Dictionary from "@wayward/game/language/Dictionary";
import type { TranslationArg } from "@wayward/game/language/ITranslation";
import Translation from "@wayward/game/language/Translation";
import Note from "@wayward/game/language/dictionary/Note";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import { HelpArticle } from "@wayward/game/ui/screen/screens/menu/menus/help/IHelpArticle";
export interface INoteDescription extends IModdable {
    learnMore?: HelpArticle;
}
export declare const noteDescriptions: Map<Note, INoteDescription>;
export type Time = PartOfDay | string;
export interface INote {
    id: keyof typeof Note;
    time: {
        day: number;
        time: number;
        skilled: boolean;
    };
    args: TranslationArg[];
    unread?: boolean;
}
export interface INoteManager {
    readonly notes: INote[];
    getNote(id: number): INote | undefined;
    wasWritten(note: Note): boolean;
    write(note: Note, ...args: any[]): void;
    clear(): void;
    getUnread(): INote[];
    markRead(noteId: number): void;
    upgrade(id: `${keyof typeof Dictionary}:${string}`, dictionary: Dictionary, entry: number, upgrader?: Translation.ITranslationUpgrader): this;
}
export interface INoteHost {
    getIsland(): Island;
    canWriteInHours(): boolean;
    canWriteNote(note: INote): boolean;
    onWriteNote(index: number, note: Note): any;
    onReadNote(index: number): any;
    onClearNotes(): any;
}
export declare class NoteManagerNoOp implements INoteManager {
    readonly notes: INote[];
    getNote(id: number): INote | undefined;
    wasWritten(note: Note): boolean;
    write(note: Note, ...args: TranslationArg[]): void;
    clear(): void;
    getUnread(): INote[];
    markRead(noteId: number): void;
    upgrade(id: `${keyof typeof Dictionary}:${string}`, dictionary: Dictionary, entry: number, upgrader?: Translation.ITranslationUpgrader): this;
}
export default class NoteManager implements INoteManager {
    private readonly host;
    private readonly _notes;
    constructor(host: INoteHost);
    get notes(): INote[];
    getNote(id: number): INote | undefined;
    wasWritten(note: Note): boolean;
    write(note: Note, ...args: TranslationArg[]): void;
    getUnread(): INote[];
    markRead(noteId: number): void;
    upgrade(id: `${keyof typeof Dictionary}:${string}`, dictionary: Dictionary, entry: number, upgrader?: Translation.ITranslationUpgrader): this;
    clear(): void;
}
