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
import "@wayward/cplusplus/index";
import type WAudio from "@wayward/game/audio/Audio";
import type { Game } from "@wayward/game/game/Game";
import type Player from "@wayward/game/game/entity/player/Player";
import type Island from "@wayward/game/game/island/Island";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type Multiplayer from "@wayward/game/multiplayer/Multiplayer";
import type { Renderer } from "@wayward/game/renderer/Renderer";
import type Renderers from "@wayward/game/renderer/Renderers";
import type SaveData from "@wayward/game/save/data/SaveData";
import type SaveDataGlobal from "@wayward/game/save/data/SaveDataGlobal";
import "@wayward/game/typings/jquery";
import "@wayward/game/typings/jqueryui";
import type { Ui } from "@wayward/game/ui/Ui";
import type OldUi from "@wayward/game/ui/old/OldUi";
import type Version from "@wayward/utilities/Version";
import "@wayward/goodstream/apply";
import "@wayward/hosts/shared/globalTypes";
import type { IBuildId } from "@wayward/hosts/shared/globalTypes";
import "@wayward/utilities/IGlobal";
import "@wayward/utilities/prototype/Promise";
import "@wayward/utilities/types";
declare global {
    let audio: WAudio | undefined;
    let game: Game;
    let localIsland: Island;
    let localPlayer: Player;
    let multiplayer: Multiplayer;
    let oldui: OldUi;
    let renderer: Renderer | undefined;
    let renderers: Renderers;
    let saveData: SaveData;
    let saveDataGlobal: SaveDataGlobal;
    let ui: Ui;
    const gameVersion: Version.String;
    const gameVersionStage: string;
    const gameVersionMajor: number;
    const gameVersionMinor: number;
    const gameVersionPatch: number;
    const gameVersionName: string;
    const gameVersionTitleMajor: string;
    const gameVersionTitleMinor: string;
    const gameVersionTitle: string;
    let gameVersionDeployId: IBuildId | undefined;
    let gameVersionBuildId: IBuildId | undefined;
    let gameVersionUpgradeId: IBuildId | undefined;
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
    }
}
