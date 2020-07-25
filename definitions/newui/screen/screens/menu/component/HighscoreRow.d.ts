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
import { Events, IEventEmitter } from "event/EventEmitter";
import { Block } from "newui/component/Block";
import { IHighscore } from "save/data/ISaveDataGlobal";
interface IHighscoreRowEvents extends Events<Block> {
    /**
     * Emitted asynchronously before the replay request will be processed.
     * @return `false` to cancel.
     */
    replay(): boolean | void | Promise<boolean | void>;
}
export default class HighscoreRow extends Block {
    event: IEventEmitter<this, IHighscoreRowEvents>;
    private readonly headingPlace;
    private readonly difficulty;
    private readonly deathBy;
    private readonly replay;
    private _highscore;
    get highscore(): IHighscore | undefined;
    set highscore(val: IHighscore | undefined);
    private _place;
    get place(): number;
    set place(place: number);
    constructor(highscore?: IHighscore);
}
export {};
