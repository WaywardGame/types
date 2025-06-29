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
import type IClientStore from "@wayward/game/save/clientStore/IClientStore";
import { ClientDataType } from "@wayward/game/save/clientStore/IClientStore";
/**
 * Stores data for a client
 */
export default class ClientStore implements IClientStore {
    private readonly data;
    constructor();
    get<T>(type: ClientDataType): T;
}
