/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type IAsyncDataStorage from "@wayward/game/save/datastorage/IAsyncDataStorage";
import type { Awaited } from "@wayward/utilities/promise/Async";
type IDataStorage = {
    [key in keyof IAsyncDataStorage]: (...params: Parameters<IAsyncDataStorage[key]>) => Awaited<ReturnType<IAsyncDataStorage[key]>>;
};
export default IDataStorage;
