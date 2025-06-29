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
declare namespace WebAssemblyHelpers {
    enum Module {
        FlowField = 0,
        FieldOfView = 1
    }
    interface IWebAssemblyModuleInstance {
        imports: IWebAssemblyImports;
        exports: any;
        instance: any;
        memoryBuffer: ArrayBuffer;
    }
    interface IWebAssemblyImports {
        env: IWebAssemblyImportsEnvironment;
    }
    interface IWebAssemblyImportsEnvironment {
        memoryBase: number;
        tableBase: number;
        memory: any;
        table: any;
    }
    function isAvailable(): boolean;
    function loadAndCompileModules(): void;
    function initializeInstance(moduleId: Module, id: number, imports?: any): IWebAssemblyModuleInstance | undefined;
}
export default WebAssemblyHelpers;
