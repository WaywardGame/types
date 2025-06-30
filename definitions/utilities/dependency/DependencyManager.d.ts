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
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IRequireFunction {
    <T>(module: string): Promise<T>;
    <T extends any[]>(...modules: string[]): Promise<T>;
}
export interface IDependencyManagerEvents {
    acquire(require: IRequireFunction): Promise<any>;
}
export default class DependencyManager extends EventEmitter.Host<IDependencyManagerEvents> {
    acquireDependencies(): Promise<void>;
}
