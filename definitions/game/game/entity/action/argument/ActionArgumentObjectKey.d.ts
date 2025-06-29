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
import type Entity from "@wayward/game/game/entity/Entity";
import { ActionArgumentCustom } from "@wayward/game/game/entity/action/argument/ActionArgumentCustom";
/**
 * An action argument which is an entry from the given key in an object Performs validation when an object is passed
 */
export default class ActionArgumentObjectKey<T extends Record<string, any>> extends ActionArgumentCustom<keyof T> {
    private readonly object?;
    constructor(object?: T | undefined);
    validate(executor: Entity | undefined, value: unknown): value is keyof T;
    read(): keyof T;
    write(executor: Entity | undefined, value: keyof T): void;
    static applyHelperToActionArgument(): void;
}
