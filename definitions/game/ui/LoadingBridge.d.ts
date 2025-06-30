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
import type { Load } from "@wayward/game/game/meta/Loading";
import Loading from "@wayward/game/game/meta/Loading";
export default class LoadingBridge {
    private readonly queue;
    protected onLoadingStart(loading: Loading.Events, load: Load, ...args: any[]): Promise<void>;
    protected onLoadingEndOrPromptResolved(): Promise<void>;
    private showLoading;
    protected onProgress(_: any, load: Load, progress: number): void;
}
