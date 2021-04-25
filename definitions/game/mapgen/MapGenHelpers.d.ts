/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { DoodadType } from "game/doodad/IDoodad";
import { MapGenVersions } from "game/mapgen/IMapGen";
import { ITile, TileTemplateType } from "game/tile/ITerrain";
export declare function pickBasedOnVersion<T>(version: string, versions: MapGenVersions<T>): [string, T];
export declare function hasFinishedLoading(): boolean;
export declare function setFinishedLoading(): void;
export declare function clearFinishedLoading(): void;
export declare function spawnTileEvent(x: number, y: number, z: number): void;
export interface ITemplateOptions {
    /**
     * If not provided, randomly decides whether to mirror the template vertically.
     */
    mirrorVertically?: boolean;
    /**
     * If not provided, randomly decides whether to mirror the template horizontally.
     */
    mirrorHorizontally?: boolean;
    /**
     * If not provided, randomly decides the rotation of the template.
     */
    rotate?: 0 | 90 | 180 | 270;
    /**
     * If not provided, uses the degradation value in the template itself.
     */
    degrade?: number;
    /**
     * The exact template to use.
     */
    which?: string;
    /**
     * If not provided, uses the overlap boolean in the template itself.
     */
    overlap?: boolean;
}
export declare function manipulateTemplates<T extends Array<string[] | undefined>>(options: ITemplateOptions, ...templates: T): T;
export declare function spawnTemplate(templateType: TileTemplateType, x: number, y: number, z: number, options?: ITemplateOptions): void;
export declare function setTileUnderDoodad(tile: ITile, x: number, y: number, doodadType: DoodadType): void;
export declare function setupTiles(tileGenArray: Uint16Array, tileGenQualityArray?: Uint16Array): void;
export declare function loadDifferences(): void;
export declare enum Pre240TerrainType {
    DeepSeawater = 0,
    Seawater = 1,
    ShallowSeawater = 2,
    DeepFreshWater = 3,
    FreshWater = 4,
    ShallowFreshWater = 5,
    Grass = 6,
    Tree = 7,
    BareTree = 8,
    TreeWithVines = 9,
    TreeWithBerries = 10,
    TreeWithFungus = 11,
    PalmTree = 12,
    BarePalmTree = 13,
    PalmTreeWithCoconuts = 14,
    Gravel = 15,
    Dirt = 16,
    BeachSand = 17,
    Snow = 18,
    Swamp = 19,
    Clay = 20,
    Ash = 21,
    Rocks = 22,
    RocksWithIron = 23,
    RocksWithTalc = 24,
    RocksWithCoal = 25,
    RocksWithLimestone = 26,
    CobblestoneFlooring = 27,
    Sandstone = 28,
    SandstoneFlooring = 29,
    SandstoneWithIron = 30,
    SandstoneWithNiter = 31,
    WoodenFlooring = 32,
    ClayBrickFlooring = 33,
    CaveEntrance = 34,
    RedCarpet = 35,
    Lava = 36,
    FertileDirt = 37
}
export declare enum Pre240DoodadType {
    WoodenDoor = 0,
    WoodenFence = 1,
    WoodenWall = 2,
    ClayBrickWall = 3,
    SandstoneWall = 4,
    StoneWall = 5,
    SetExplosiveTrap = 6,
    SetDeadfall = 7,
    SetSnare = 8,
    SetHobgoblinSnare = 9,
    SolarStill = 10,
    WoodenChest = 11,
    LockedWoodenChest = 12,
    CreatureIdol = 13,
    GrowingGrass = 14,
    Clematis = 15,
    MilkThistles = 16,
    GrowingMushroom = 17,
    ButtonMushrooms = 18,
    FlyAmanita = 19,
    Switchgrass = 20,
    Badderlocks = 21,
    Chives = 22,
    Pineapple = 23,
    PileOfRocks = 24,
    RaspberryBush = 25,
    Beggarticks = 26,
    Sapling = 27,
    GrowingPlant = 28,
    Cotton = 29,
    Tree = 30,
    TreeWithVines = 31,
    TreeWithBerries = 32,
    TreeWithFungus = 33,
    BareTree = 34,
    PalmTreeWithCoconuts = 35,
    PalmTree = 36,
    BarePalmTree = 37,
    PricklyPears = 38,
    DeadBush = 39,
    StoneWaterStill = 40,
    LitStoneWaterStill = 41,
    StoneCampfire = 42,
    LitStoneCampfire = 43,
    SandstoneKiln = 44,
    LitSandstoneKiln = 45,
    StoneFurnace = 46,
    LitStoneFurnace = 47,
    TorchStand = 48,
    LitTorchStand = 49,
    StoneAnvil = 50,
    Acid = 51,
    CaveEntrance = 52,
    WoodenDoorOpen = 53,
    WoodenGate = 54,
    WoodenGateOpen = 55,
    PoisonIvy = 56,
    WroughtIronChest = 57,
    IronChest = 58,
    OrnateWoodenChest = 59,
    SkeletalRemains = 60,
    ClayKiln = 61,
    LitClayKiln = 62,
    ClayCampfire = 63,
    LitClayCampfire = 64,
    ClayFurnace = 65,
    LitClayFurnace = 66,
    ClayWaterStill = 67,
    LitClayWaterStill = 68,
    SandstoneCampfire = 69,
    LitSandstoneCampfire = 70,
    SandstoneFurnace = 71,
    LitSandstoneFurnace = 72,
    SandstoneWaterStill = 73,
    LitSandstoneWaterStill = 74,
    StoneKiln = 75,
    LitStoneKiln = 76,
    WroughtIronAnvil = 77,
    IronAnvil = 78
}
