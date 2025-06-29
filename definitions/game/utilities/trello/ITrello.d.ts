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
import type { IVersionInfo } from "@wayward/utilities/Version";
export interface ITrello {
    getChangelog(versionInfo: IVersionInfo): Promise<IChangelog | undefined>;
    getVersions(maxVersion?: IVersionInfo): Promise<IVersionInfo[]>;
}
export interface ITrelloBoard {
    id: string;
    name: string;
    desc: string;
    lists?: ITrelloList[];
}
export interface ITrelloList {
    id: string;
    name: string;
    cards?: ITrelloCard[];
}
export interface ITrelloCard {
    id: string;
    idAttachmentCover: string | null;
    cover?: ITrelloCardCover;
    name: string;
    pos: number;
    labels: ITrelloCardLabel[];
    important: boolean;
    desc?: string;
}
export interface ITrelloCardCover {
    url: string;
}
export interface ITrelloCardLabel {
    id: string;
    name: string;
    color: string;
}
export interface ITrelloChangelog {
    version: IVersionInfo;
    list: ITrelloList;
}
export interface IChangelog {
    version: IVersionInfo;
    sections: Partial<Record<ChangeType, ITrelloCard[]>>;
    changeCount: number;
}
export declare enum ChangeType {
    New = 0,
    Improvement = 1,
    Balance = 2,
    Bug = 3,
    Technical = 4,
    Modding = 5,
    Mod = 6
}
