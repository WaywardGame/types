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
import EventEmitter from "event/EventEmitter";
import type { Game } from "game/Game";
import type { IGenericManager, IGenericRegistration } from "utilities/generic/IGenericManager";
import type { LogSource } from "utilities/Log";
export default abstract class GenericManager<T extends IGenericRegistration> extends EventEmitter.Host<{}> implements IGenericManager<T> {
    readonly game: Game;
    private readonly registered;
    constructor(game: Game);
    abstract setup(instance: GenericManager<T>): void;
    has(type: number): boolean;
    add(registration: T): void;
    get(type: number): T;
    remove(type: number): void;
    protected abstract getSource(): LogSource;
    protected abstract getEnumObject(): any;
    private check;
}
