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
declare class App {
    constructor();
    get args(): string[];
    isElectron(): boolean;
    reload(): Promise<void>;
    reloadStylesheets(): void;
    toggleDeveloperTools(): Promise<void>;
    showOpenDirectoryDialog(defaultPath?: string): Promise<string[] | undefined>;
    pathExists(path?: string): Promise<boolean>;
    writeFile(path?: string, file?: string): Promise<void>;
    readFile(path?: string): Promise<string | undefined>;
    writeJSON(path?: string, json?: any): Promise<void>;
    readJSON<T = any>(path?: string): Promise<T | undefined>;
    get path(): {
        steam: string;
        app: string;
        mods: string;
        saves: string;
    };
    execDetached(command: string, ...args: string[]): Promise<void> | undefined;
    exit(): void;
}
export default App;
