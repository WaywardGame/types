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
import type { IChangelog, ITrello, ITrelloBoard, ITrelloCard } from "@wayward/game/utilities/trello/ITrello";
export default class Trello implements ITrello {
    getCard(id: string, ...fields: string[]): Promise<ITrelloCard>;
    getChangelog(versionInfo: IVersionInfo): Promise<IChangelog | undefined>;
    getVersions(maxVersion?: IVersionInfo, board?: ITrelloBoard): Promise<IVersionInfo[]>;
    private getCards;
    private getBoard;
    private getListVersionInfo;
    private findChangelogList;
    private parseChangelog;
}
export declare const trello: Trello;
