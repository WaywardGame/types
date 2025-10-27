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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type AiManager from "@wayward/game/game/entity/ai/AiManager";
import type Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { CreatureZone } from "@wayward/game/game/entity/creature/zone/CreatureZone";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type { IMessageManager } from "@wayward/game/game/entity/player/IMessageManager";
import type Player from "@wayward/game/game/entity/player/Player";
import type { Game } from "@wayward/game/game/Game";
import type Island from "@wayward/game/game/island/Island";
import type Item from "@wayward/game/game/item/Item";
import type { IGameOptions } from "@wayward/game/game/options/IGameOptions";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import type { UpgradesArrayCompressedPusher } from "@wayward/game/save/upgrade/UpgradesArray";
import type Version from "@wayward/utilities/Version";
import type { IBuildId } from "@wayward/hosts/shared/globalTypes";
import type Tile from "@wayward/game/game/tile/Tile";
import type { ITileData } from "@wayward/game/game/tile/ITerrain";
import type Human from "@wayward/game/game/entity/Human";
import type Entity from "@wayward/game/game/entity/Entity";
import type MagicalPropertyManager from "@wayward/game/game/magic/MagicalPropertyManager";
import type { CurseEventInstance } from "@wayward/game/game/curse/Curse";
export interface IUpgradeVersion {
    name?: string;
    buildId?: IBuildId;
    defaultData?: any;
    data?: any;
    applies(buildVersion: Version.Info): boolean;
    upgradeGlobal?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher): any;
    upgradeGame?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, game: Game): any;
    upgradeIsland?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, island: Island): any;
    upgradePlayer?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, player: Player, isLocalPlayer: boolean): any;
    upgradeGameOptions?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, options: IGameOptions, defaultOptions: IGameOptions): any;
    upgradeMessages?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, messages: IMessageManager): any;
    upgradeEntity?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, entity: Entity): any;
    upgradeHuman?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, human: Human): any;
    upgradeCreature?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, creature: Creature): any;
    upgradeItem?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, item: Item): any;
    upgradeDoodad?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, doodad: Doodad): any;
    upgradeNPC?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, npc: NPC): any;
    upgradeTileEvent?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, tileEvent: TileEvent): any;
    upgradeCorpse?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, corpse: Corpse): any;
    upgradeAi?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, ai: AiManager): any;
    upgradeMagic?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, magic?: MagicalPropertyManager): any;
    upgradeCurseEvent?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, curseEvent: CurseEventInstance, island: Island): any;
    upgradeCreatureZone?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, zone: CreatureZone): any;
    upgradeTile?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, tile: Tile): any;
    upgradeTileData?(version: Version.Info, upgrades: UpgradesArrayCompressedPusher, tile: Tile, tileData: ITileData[]): any;
}
export type UpgradeType = Exclude<keyof IUpgradeVersion, "applies">;
export type UpgradeParameters<TYPE extends UpgradeType> = Required<IUpgradeVersion>[TYPE] extends (_v: any, _u: any, ...params: infer PARAMS) => any ? PARAMS : never;
export declare function oldify<CURRENT, OLD>(current: CURRENT): Merge<CURRENT, Partial<OLD>>;
export interface IUpgradeVersionDefinition<T = any> extends Omit<IUpgradeVersion, "applies" | "name" | "buildId" | "defaultData" | "data"> {
    applies?: IUpgradeVersion["applies"];
    data?: T;
}
export interface IUpgradeVersionDefinitionWithData<T = any> extends IUpgradeVersionDefinition<T> {
    data: T;
}
export default function <T>(definition: IUpgradeVersionDefinitionWithData<T>): IUpgradeVersionDefinitionWithData<T>;
export default function <T>(definition: IUpgradeVersionDefinition<T>): IUpgradeVersionDefinition<T>;
export declare function UpgradeVersionMinorRegistry(registry: Record<string, IUpgradeVersionDefinition>): Record<string, IUpgradeVersion>;
