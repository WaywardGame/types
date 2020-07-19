/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Player from "entity/player/Player";
import Interrupt from "language/dictionary/Interrupt";
import InterruptChoice from "language/dictionary/InterruptChoice";
interface IVoteResult {
    interrupt: Interrupt;
    votes: Map<string, InterruptChoice | undefined>;
}
export default class VotingManager {
    private _active;
    private readonly _history;
    get isVoting(): boolean;
    get activeVoteInterrupt(): Interrupt | undefined;
    resetHistory(): void;
    getSecondsBeforeVotingIsAllowed(player: Player): number;
    canStartVote(player: Player): boolean;
    startVote(initiator: Player, interrupt: Interrupt, choices: InterruptChoice[], ...interruptArgs: any[]): Promise<IVoteResult>;
    addVote(player: Player, choice: InterruptChoice): void;
    private _endVote;
}
export {};
