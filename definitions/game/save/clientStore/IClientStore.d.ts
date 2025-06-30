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
import type ExploredMapClientData from "@wayward/game/save/clientStore/clientData/ExploredMap";
import type MultiplayerClientData from "@wayward/game/save/clientStore/clientData/MultiplayerClientData";
import type UiData from "@wayward/game/save/clientStore/clientData/UiData";
export interface IClientStore {
    get<T extends ClientDataType>(type: T): ClientDataMap<T>;
}
export default IClientStore;
export declare enum ClientDataType {
    ExploredMap = 0,
    Ui = 1,
    Multiplayer = 2
}
export interface IClientData {
    [ClientDataType.ExploredMap]: ExploredMapClientData;
    [ClientDataType.Ui]: UiData;
    [ClientDataType.Multiplayer]: MultiplayerClientData;
}
export type ClientDataMap<T extends ClientDataType> = IClientData[T];
