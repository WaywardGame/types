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
import { BiomeType } from "@wayward/game/game/biome/IBiome";
import { DoodadType } from "@wayward/game/game/doodad/IDoodad";
import type Island from "@wayward/game/game/island/Island";
import type { MapGenVersions } from "@wayward/game/game/mapgen/IMapGen";
import type { ITemplate, TileTemplateType } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import Version from "@wayward/utilities/Version";
export declare namespace MapGenHelpers {
    function pickBasedOnVersion<T>(targetVersion: Version.String, versions: MapGenVersions<T>): {
        version: Version.String;
        selection: T;
    };
    interface ITemplateOptions {
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
    function manipulateTemplates<T extends Array<string[] | undefined>>(island: Island, options: ITemplateOptions, ...templates: T): T;
    function spawnTemplate(island: Island, templateType: TileTemplateType | ITemplate, x: number, y: number, z: number, options?: ITemplateOptions): void;
    function setTileUnderDoodad(tile: Tile, doodadType: DoodadType, biomeType: BiomeType): void;
    function setupTiles(island: Island, tileGenArray: Uint16Array, tileGenQualityArray?: Uint16Array): void;
    function loadDifferences(island: Island): void;
    enum Pre240TerrainType {
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
    /**
     * Doodad type list before 2.4
     * NEVER EDIT THIS
     */
    enum Pre240DoodadType {
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
    /**
     * Doodad type list during 2.4
     * NEVER EDIT THIS
     */
    enum Initial240DoodadType {
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
        Grass = 14,
        Clematis = 15,
        MilkThistles = 16,
        ButtonMushrooms = 17,
        FlyAmanita = 18,
        Switchgrass = 19,
        Badderlocks = 20,
        Chives = 21,
        Pineapple = 22,
        PileOfRocks = 23,
        RaspberryBush = 24,
        Beggarticks = 25,
        Cotton = 26,
        PricklyPears = 27,
        DeadBush = 28,
        StoneWaterStill = 29,
        LitStoneWaterStill = 30,
        StoneCampfire = 31,
        LitStoneCampfire = 32,
        SandstoneKiln = 33,
        LitSandstoneKiln = 34,
        StoneFurnace = 35,
        LitStoneFurnace = 36,
        TorchStand = 37,
        LitTorchStand = 38,
        StoneAnvil = 39,
        Acid = 40,
        CaveEntrance = 41,
        WoodenDoorOpen = 42,
        WoodenGate = 43,
        WoodenGateOpen = 44,
        PoisonIvy = 45,
        WroughtIronChest = 46,
        IronChest = 47,
        OrnateWoodenChest = 48,
        SkeletalRemains = 49,
        ClayKiln = 50,
        LitClayKiln = 51,
        ClayCampfire = 52,
        LitClayCampfire = 53,
        ClayFurnace = 54,
        LitClayFurnace = 55,
        ClayWaterStill = 56,
        LitClayWaterStill = 57,
        SandstoneCampfire = 58,
        LitSandstoneCampfire = 59,
        SandstoneFurnace = 60,
        LitSandstoneFurnace = 61,
        SandstoneWaterStill = 62,
        LitSandstoneWaterStill = 63,
        StoneKiln = 64,
        LitStoneKiln = 65,
        WroughtIronAnvil = 66,
        IronAnvil = 67,
        MapleTree = 68,
        AppleTree = 69,
        SpruceTree = 70,
        CypressTree = 71,
        CoconutTree = 72,
        Lettuce = 73,
        PotatoPlant = 74,
        Carrots = 75,
        CornStalks = 76,
        CucumberPlant = 77,
        TomatoPlant = 78,
        Pumpkin = 79,
        SugarCaneStalks = 80,
        Wheat = 81
    }
}
export default MapGenHelpers;
