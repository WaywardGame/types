/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Player from "game/entity/player/Player";
import type { Game } from "game/Game";
import type { Prompt } from "game/meta/prompt/IPrompt";
import type InterruptChoice from "language/dictionary/InterruptChoice";
interface IVoteResult {
    interrupt: Prompt;
    votes: Map<string, InterruptChoice | undefined>;
}
export default class VotingManager {
    private readonly game;
    private _active;
    private readonly _history;
    get activeVoteInterrupt(): Prompt | undefined;
    constructor(game: Game);
    /**
     * Check if voting is active
     * It will also end the existing vote if players left since the vote started
     * @returns True if there an active vote
     */
    isVoting(): boolean;
    resetHistory(): void;
    getSecondsBeforeVotingIsAllowed(player: Player): number;
    canStartVote(player: Player): boolean;
    startVote(initiator: Player, interrupt: Prompt, ...interruptArgs: any[]): Promise<IVoteResult>;
    addVote(player: Player, choice: InterruptChoice): void;
    /**
     * Returns player identifiers of currently connected players
     */
    private _getActivePlayers;
    /**
     * Check if any connected player has not voted yet
     * @returns True if everyone voted
     */
    private _shouldEndVote;
    private _endVote;
}
export {};
