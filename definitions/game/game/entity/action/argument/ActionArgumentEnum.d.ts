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
export default class ActionArgumentEnum<ENUM extends number, K extends string> extends ActionArgumentCustom<ENUM> {
    private readonly enumObject;
    private readonly flags;
    constructor(enumObject: Record<K, ENUM>, flags?: boolean);
    validate(executor: Entity | undefined, value: unknown): value is ENUM;
    read(): ENUM;
    write(executor: Entity | undefined, value: ENUM): void;
    static applyHelperToActionArgument(): void;
}
