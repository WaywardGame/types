/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { InspectType } from "game/inspection/IInspection";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Inspection from "game/inspection/Inspection";
import Island from "game/island/Island";
import type { TranslationGenerator } from "ui/component/IComponent";
import type { IVector2 } from "utilities/math/IVector";
export default class IslandInspection extends Inspection<IVector2> {
    private readonly title;
    static getIslandName(island?: Island, useGenerated?: boolean): import("../../../language/impl/TranslationImpl").default;
    static handles(type: InspectType, island: unknown): boolean;
    get island(): Island | undefined;
    constructor(island: Island | IVector2, title?: boolean);
    getId(): string;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    private getTreasureMaps;
    private getModifiers;
    private getBiome;
    private getSeed;
    private getDaysSpent;
    private getDaysSpentByPlayer;
    private getPlayers;
    private getLighthouses;
    private getPlayerLikeNPCs;
    private getYouAreHereLabel;
}
