/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import "@wayward/goodstream/apply";
import WAudio from "audio/Audio";
import DoodadManager from "doodad/DoodadManager";
import CorpseManager from "entity/creature/corpse/CorpseManager";
import CreatureManager from "entity/creature/CreatureManager";
import FlowFieldManager from "entity/flowfield/FlowFieldManager";
import NPCManager from "entity/npc/NPCManager";
import Player from "entity/player/Player";
import Game from "game/Game";
import { ItemType } from "item/IItem";
import ItemManager from "item/ItemManager";
import LanguageManager from "language/LanguageManager";
import HookManager from "mod/HookManager";
import ModManager from "mod/ModManager";
import { IMultiplayerNetworkingOptions } from "multiplayer/IMultiplayer";
import Multiplayer from "multiplayer/Multiplayer";
import FieldOfView from "renderer/fieldofview/FieldOfView";
import { IByteGrid } from "renderer/fieldofview/IByteGrid";
import SpriteAtlas from "renderer/SpriteAtlas";
import TileAtlas from "renderer/TileAtlas";
import World from "renderer/World";
import WorldRenderer from "renderer/WorldRenderer";
import ResourceLoader from "resource/ResourceLoader";
import SaveData from "save/data/SaveData";
import SaveDataGlobal from "save/data/SaveDataGlobal";
import SaveManager from "save/SaveManager";
import Steamworks from "steamworks/Steamworks";
import TileEventManager from "tile/TileEventManager";
import "typings/jquery";
import "typings/jqueryui";
import { ISortable, ISortableOptions } from "ui/functional/IFunctionalSortable";
import { ITooltip, ITooltipOptions } from "ui/functional/IFunctionalTooltip";
import Ui from "ui/Ui";
import "utilities/prototype/Array";
import "utilities/prototype/Map";
import "utilities/prototype/Promise";
import "utilities/typesglobal/Class";
import "utilities/typesglobal/Descriptions";
import "utilities/typesglobal/Function";
import "utilities/typesglobal/Iterables";
import "utilities/typesglobal/Misc";
import "utilities/typesglobal/Objects";
import "utilities/typesglobal/Writable";
declare global {
    interface IRequire {
        s: any;
        undef(path: string): void;
        onResourceLoad(ctx: any, map: any): void;
        (moduleName: string): any | undefined;
        (moduleNames: string[], onLoad: (...args: any[]) => void, onError: (err: any) => void): void;
    }
    const require: IRequire;
    const requirejs: IRequire;
    const Stream: typeof import("@wayward/goodstream").default;
    type Stream<T> = import("@wayward/goodstream").default<T>;
    let absentPlayers: Player[];
    let audio: WAudio;
    let corpseManager: CorpseManager;
    let creatureManager: CreatureManager;
    let doodadManager: DoodadManager;
    let fieldOfView: FieldOfView;
    let flowFieldManager: FlowFieldManager;
    let game: Game;
    let hookManager: HookManager;
    let itemManager: ItemManager;
    let languageManager: LanguageManager;
    let localPlayer: Player;
    let modManager: ModManager;
    let multiplayer: Multiplayer;
    let multiplayerNetworkingOptions: IMultiplayerNetworkingOptions;
    let npcManager: NPCManager;
    let players: Player[];
    let renderer: WorldRenderer;
    let resourceLoader: ResourceLoader;
    let saveData: SaveData;
    let saveDataGlobal: SaveDataGlobal;
    let saveManager: SaveManager;
    let spriteAtlas: SpriteAtlas;
    let steamworks: Steamworks;
    let tileAtlas: TileAtlas;
    let tileEventManager: TileEventManager;
    let ui: Ui;
    let world: World;
    const process: any;
    const gc: NullaryFunction<void> | undefined;
    const gameVersion: string;
    const gameVersionStage: string;
    const gameVersionMajor: number;
    const gameVersionMinor: number;
    const gameVersionPatch: number;
    const isEdge: boolean;
    const isFirefox: boolean;
    const overlayWorks: boolean | undefined;
    let webGlVersion: number;
    const VIEWPORT_MIN_WIDTH: number;
    const VIEWPORT_MIN_HEIGHT: number;
    function Override(_target: any, _propertyKey: string, _descriptor?: PropertyDescriptor): void;
    function Bound<T extends AnyFunction>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
    function Final<T extends AnyFunction>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
    /**
     * Prevents the decorated method from being called at a high speed. Example:
     * 1. Method is called.
     * 2. `ms` amount of time is waited. If the method is called again in this time, cancel.
     * 3. If the method was not called after `ms`, *actually* call the method.
     *
     * WARNING: This also binds the method to the host, a la `@Bound`. Do not use both decorators.
     */
    function Debounce(ms: number): <T extends AnyFunction>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
    interface AsyncIterator<T> {
        next(value?: any): Promise<IteratorResult<T>>;
        return?(value?: any): Promise<IteratorResult<T>>;
        throw?(e?: any): Promise<IteratorResult<T>>;
    }
    interface AsyncIterable<T> {
        [Symbol.asyncIterator](): AsyncIterator<T>;
    }
    interface AsyncIterableIterator<T> extends AsyncIterator<T> {
        [Symbol.asyncIterator](): AsyncIterableIterator<T>;
    }
    interface SymbolConstructor {
        readonly asyncIterator: unique symbol;
    }
    interface CallableFunction extends Function {
        bind<T, A0, A1, A2, A3, A4, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4): (...args: A) => R;
        bind<T, A0, A1, A2, A3, A4, A5, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5): (...args: A) => R;
        bind<T, A0, A1, A2, A3, A4, A5, A6, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6): (...args: A) => R;
        bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7): (...args: A) => R;
        bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A8, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8): (...args: A) => R;
        bind<T, A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9): (...args: A) => R;
    }
    let Module: IWaywardCPP;
    interface IWaywardCPP {
        Game: IWaywardCPPGame;
        ByteGrid: IByteGridConstructor;
        FlowField: any;
        FieldOfView: any;
        WorldLayer: any;
        Navigation: INavigationConstructor;
        DijkstraMap: IDijkstraMapConstructor;
        KDTree: IKDTreeConstructor;
    }
    interface IWaywardCPPGame {
        setMapSize(size: number): void;
    }
    interface IColorGrid {
        width: number;
        height: number;
        data: Uint8Array;
        getRed(x: number, y: number): number;
        getGreen(x: number, y: number): number;
        getBlue(x: number, y: number): number;
        getAlpha(x: number, y: number): number;
        set(x: number, y: number, red: number, blue: number, green: number, alpha: number): void;
    }
    type IByteGridConstructor = new (width: number, height: number) => IByteGrid;
    type IDijkstraMapConstructor = new () => IDijkstraMap;
    interface IDijkstraMapFindPathResult {
        success: boolean;
        path: INavigationNode[];
        score: number;
        endX: number;
        endY: number;
    }
    interface IDijkstraMap {
        getNode(x: number, y: number): INavigationNode;
        updateOrigin(origin: INavigationNode): void;
        findPath(end: INavigationNode): {
            success: boolean;
            path: INavigationNode[];
            score: number;
        };
        findPath2(result: IDijkstraMapFindPathResult): void;
        delete(): void;
    }
    type INavigationConstructor = new (autoConnect: boolean) => INavigation;
    interface INavigation {
        getNode(x: number, y: number): INavigationNode;
        findPath(start: INavigationNode, end: INavigationNode): {
            path: INavigationNode[];
            scoreG: number;
            scoreH: number;
            scoreF: number;
        } | undefined;
        delete(): void;
    }
    interface INavigationNode {
        x: number;
        y: number;
        disabled: boolean;
        penalty: number;
        connectTo(node: INavigationNode, direction: number): void;
        getConnection(direction: number): INavigationNode | undefined;
    }
    interface IKDTree {
        insertPoint(x: number, y: number): void;
        deletePoint(x: number, y: number): void;
        nearestPoints(x: number, y: number): Array<{
            x: number;
            y: number;
        }>;
        delete(): void;
    }
    type IKDTreeConstructor = new () => IKDTree;
    interface JQuery {
        getItemType(): ItemType;
        functionalSortable(data: string, ...args: any[]): void;
        functionalSortable(data: ISortableOptions): ISortable;
        functionalTooltip(data: string, ...args: any[]): void;
        functionalTooltip(data: ITooltipOptions): ITooltip;
        import(template: JQuery | HTMLTemplateElement): JQuery;
    }
    interface IFileSystem {
        createWriteStream(path: string, opts: any): IFileStream;
        copy(source: string, destination: string, opt: (file: string) => boolean, cb: (err: string | null | undefined) => void): any;
        emptyDir(destination: string, cb: (err: string | null | undefined) => void): any;
        stat(path: string, cb: (err: string | null | undefined, stats: IFileStat) => void): any;
        statSync(path: string): IFileStat | undefined;
        mkdirSync(path: string): any;
        existsSync(path: string): string;
        pathExistsSync(path: string): boolean;
        readdir(path: string, cb: (err: string | null | undefined, files: string[]) => void): any;
        readdirSync(path: string): string[];
        readFileSync(path: string, opt?: any): string;
        remove(path: string, cb: (err: string | null | undefined) => void): any;
        rmdirSync(path: string): any;
        unlinkSync(path: string): any;
        writeFileSync(path: string, data: string, opt?: any): any;
    }
    interface IFileStream {
        bytesWritten: number;
        on(type: "error", callback: (err: any) => void): void;
        on(type: "drain", callback: () => void): void;
        write(data: string): boolean;
        close(): void;
    }
    interface IFile extends IFileStat {
        name: string;
        path: string;
    }
    interface IFileStat {
        atime: Date;
        mtime: Date;
        ctime: Date;
        size: number;
        isFile(): boolean;
        isDirectory(): boolean;
        isSymbolicLink(): boolean;
    }
    interface IPath {
        join(...path: string[]): string;
        basename(...path: string[]): string;
        isAbsolute(path: string): boolean;
    }
    interface INapi {
        discord: INapiDiscord;
    }
    interface INapiDiscord {
        initialize(apiKey: string, appId?: string): void;
        shutdown(): void;
        runCallbacks(): void;
        setOnJoinCallback(callback: (server: string) => void): void;
        updatePresence(presenceInfo: INapiDiscordPresenceInfo): void;
    }
    interface INapiDiscordPresenceInfo {
        details: string;
        state?: string;
        largeImageKey?: string;
        largeImageText?: string;
        smallImageKey?: string;
        smallImageText?: string;
        multiplayerServerId?: string;
        multiplayerCurrentPlayers?: number;
        multiplayerMaxPlayers?: number;
    }
}
