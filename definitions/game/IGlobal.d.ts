/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import "@cplusplus/index";
import "@hosts/shared/globalTypes";
import "@wayward/goodstream/apply";
import type WAudio from "audio/Audio";
import type Player from "game/entity/player/Player";
import type { Game } from "game/Game";
import type Island from "game/island/Island";
import type { ItemType } from "game/item/IItem";
import type LanguageManager from "language/LanguageManager";
import type { IMultiplayerNetworkingOptions } from "multiplayer/IMultiplayer";
import type Multiplayer from "multiplayer/Multiplayer";
import type Renderer from "renderer/Renderer";
import type Renderers from "renderer/Renderers";
import type SaveData from "save/data/SaveData";
import type SaveDataGlobal from "save/data/SaveDataGlobal";
import "typings/jquery";
import "typings/jqueryui";
import type { ISortable, ISortableOptions } from "ui/old/functional/IFunctionalSortable";
import type OldUi from "ui/old/OldUi";
import type { Ui } from "ui/Ui";
import "utilities/prototype/Promise";
import "utilities/typesglobal/Class";
import "utilities/typesglobal/Descriptions";
import "utilities/typesglobal/Function";
import "utilities/typesglobal/Iterables";
import "utilities/typesglobal/Misc";
import "utilities/typesglobal/Objects";
import "utilities/typesglobal/Types";
declare global {
    let audio: WAudio | undefined;
    let game: Game;
    let languageManager: LanguageManager;
    let localIsland: Island;
    let localPlayer: Player;
    let multiplayer: Multiplayer;
    let multiplayerNetworkingOptions: IMultiplayerNetworkingOptions;
    let oldui: OldUi;
    let renderer: Renderer | undefined;
    let renderers: Renderers;
    let saveData: SaveData;
    let saveDataGlobal: SaveDataGlobal;
    let ui: Ui;
    const gameVersion: string;
    const gameVersionStage: string;
    const gameVersionMajor: number;
    const gameVersionMinor: number;
    const gameVersionPatch: number;
    const gameVersionName: string;
    const gameVersionTitleMajor: string;
    const gameVersionTitleMinor: string;
    const gameVersionTitle: string;
    const isNodeJs: boolean;
    const isWebWorker: boolean;
    const overlayWorks: boolean | undefined;
    let webGlVersion: number;
    const VIEWPORT_MIN_WIDTH: number;
    const VIEWPORT_MIN_HEIGHT: number;
    interface CallableFunction extends Function {
        bind<T, A0, A1, A2, A3, A4, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4): (...args: A) => R;
        bind<T, A0, A1, A2, A3, A4, A5, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5): (...args: A) => R;
        bind<T, A0, A1, A2, A3, A4, A5, A6, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6): (...args: A) => R;
        bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7): (...args: A) => R;
        bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A8, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8): (...args: A) => R;
        bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9): (...args: A) => R;
    }
    interface JQuery {
        getItemType(): ItemType;
        functionalSortable(data: string, ...args: any[]): void;
        functionalSortable(data: ISortableOptions): ISortable;
        import(template: JQuery | HTMLTemplateElement): JQuery;
    }
}
