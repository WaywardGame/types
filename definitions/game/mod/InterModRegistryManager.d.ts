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
import type InterModRegistry from "@wayward/game/mod/InterModRegistry";
import type { InterModRegistration } from "@wayward/game/mod/InterModRegistry";
declare namespace InterModRegistryManager {
    function getRegistrations<T>(modName: string, interModRegistryName: string): Array<InterModRegistration<T>>;
    function registerRegistry(modName: string, interModRegistryName: string, registry: InterModRegistry<any>): void;
    function deregisterRegistry(modName: string, interModRegistryName: string): void;
    function register(modName: string, interModRegistryName: string, registration: InterModRegistration<any>): void;
    function deregister(modName: string, interModRegistryName: string, registration: InterModRegistration<any>): void;
}
export default InterModRegistryManager;
