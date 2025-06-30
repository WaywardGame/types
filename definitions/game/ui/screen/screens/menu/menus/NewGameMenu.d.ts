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
import { TurnMode } from "@wayward/game/game/IGame";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { IGameOptions } from "@wayward/game/game/options/IGameOptions";
import { GameMode } from "@wayward/game/game/options/IGameOptions";
import type { IMultiplayerOptions } from "@wayward/game/multiplayer/IMultiplayer";
import InputRow from "@wayward/game/ui/component/InputRow";
import Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
import MilestonesNotUnlockableWarning from "@wayward/game/ui/screen/screens/menu/component/MilestonesNotUnlockableWarning";
import TabGameMode from "@wayward/game/ui/screen/screens/menu/menus/newgame/TabGameMode";
import TabGameplayModifiers from "@wayward/game/ui/screen/screens/menu/menus/newgame/TabGameplayModifiers";
import TabMultiplayer from "@wayward/game/ui/screen/screens/menu/menus/newgame/TabMultiplayer";
export default class NewGameMenu extends Menu {
    readonly inputName: InputRow;
    readonly inputSeed: InputRow;
    readonly milestonesNotUnlockableWarning: MilestonesNotUnlockableWarning;
    readonly tabGameMode: TabGameMode;
    readonly tabMultiplayer: TabMultiplayer;
    readonly tabGameplayModifiers: TabGameplayModifiers;
    difficultyOptions?: IGameOptions;
    multiplayerOptions?: IMultiplayerOptions;
    readonly milestones: Set<Milestone>;
    private slot;
    private editedPreShown;
    constructor();
    setSeed(seed: string | number, lock?: boolean): this;
    setTurnMode(turnMode: TurnMode): this;
    setDifficulty(difficulty: GameMode, lock?: boolean): this;
    setDifficultyOptions(options: IGameOptions): this;
    setMultiplayerOptions(options: ImmutableObject<IMultiplayerOptions>): this;
    setGamePlayModifierOption(customMilestoneModifiersAllowed?: boolean): this;
    setMultiplayer(): this;
    getDifficultyOptions(): IGameOptions;
    setWasEditedPreShown(): void;
    wasEditedPreShown(): boolean;
    protected refreshAsync(): Promise<void>;
    private getDefaultSaveName;
    private refresh;
    private startOrNext;
    private getPlayOptions;
}
