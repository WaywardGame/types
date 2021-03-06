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
import { IGenericManager, IGenericRegistration } from "utilities/generic/IGenericManager";
import { LogSource } from "utilities/Log";
export default abstract class GenericManager<T extends IGenericRegistration> implements IGenericManager<T> {
    private readonly registered;
    constructor();
    abstract setup(instance: GenericManager<T>): void;
    has(type: number): boolean;
    add(registration: T): void;
    get(type: number): T;
    remove(type: number): void;
    protected abstract getSource(): LogSource;
    protected abstract getEnumObject(): any;
    private check;
}
