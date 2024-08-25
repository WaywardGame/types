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
import type { DoodadType, GrowingStage } from "@wayward/game/game/doodad/IDoodad";
import type { ActionType } from "@wayward/game/game/entity/action/IAction";
import type { Quality } from "@wayward/game/game/IObject";
import type { INewIslandOverrides } from "@wayward/game/game/island/IIsland";
import type { ContainerSort, ItemType } from "@wayward/game/game/item/IItem";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { GameMode } from "@wayward/game/game/options/IGameOptions";
import type { IOptions } from "@wayward/game/save/data/ISaveDataGlobal";
import type { SortDirection } from "@wayward/game/save/ISaveManager";
import type { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import type { Direction } from "@wayward/game/utilities/math/Direction";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
export interface ICommonGameOptions {
    gameMode: GameMode;
    seed?: string | number;
    enableMilestoneModifiers?: Set<Milestone>;
    enableAllMilestoneModifiers?: boolean;
    startingIslandOverrides?: Partial<INewIslandOverrides>;
}
export interface IWaitUntilGameLoadedOptions {
    isJoiningServer: boolean;
    isCreatingServer: boolean;
    expectReopenServerPrompt: boolean;
    expectGameScreen: boolean;
}
export interface INewGameOptions extends ICommonGameOptions {
    playMode: GamePlayMode;
    reuseCharacter?: boolean;
}
export type IDedicatedServerGameOptions = ICommonGameOptions;
export interface ITestJoinServerOptions {
    joinProgrammatically: boolean;
    enableAllMilestoneModifiers?: boolean;
    multiplayerIdentifier?: string;
}
export declare enum GamePlayMode {
    Singleplayer = "Singleplayer",
    Multiplayer = "Multiplayer"
}
export interface IAppPaths {
    repoPath: string;
    electronPath: string;
    electronExecutablePath: string;
    electronAppAsarPath: string;
    saveZipPath?: string;
}
export interface IPaths extends Omit<IAppPaths, "saveZipPath"> {
    dataPath: string;
    generalDataPath: string;
    specificDataPath: string;
    versionsPath: string;
    saveImportsPath: string;
}
export interface ITestSetup {
    options?: Partial<IOptions>;
    ui?: {
        dialogs?: PartialRecord<DialogId, boolean>;
        actionSlots?: Array<{
            itemType?: ItemType;
            actionType?: ActionType;
            autoUse?: boolean;
        }>;
    };
    world?: {
        doodads?: Array<{
            type: DoodadType;
            growingStage?: GrowingStage;
            x: number;
            y: number;
            inventory?: ITestSetupItemContainer;
        }>;
    };
    player?: {
        position?: IVector3;
        direction?: Direction.Cardinal;
        inventory?: ITestSetupItemContainer;
    };
}
export interface ITestSetupItemContainer {
    sort?: ContainerSort;
    sortDirection?: SortDirection;
    stacks?: ItemType[];
    items?: ITestSetupItem[];
}
export interface ITestSetupItem {
    type: ItemType;
    quality?: Quality;
}
