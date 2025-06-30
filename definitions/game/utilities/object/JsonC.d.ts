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
import type { IRequireFunction } from "@wayward/utilities/dependency/DependencyManager";
declare global {
    interface JSON {
        parseComments(jsonText: string): any;
        modify(jsonText: string, path: string[], value: any): string;
    }
}
declare class JsonC {
    protected onAcquire(d: any, req: IRequireFunction): Promise<void>;
}
declare const _default: JsonC;
export default _default;
