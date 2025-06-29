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
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import Island from "@wayward/game/game/island/Island";
import Translation from "@wayward/game/language/Translation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
export default class IslandInspection extends Inspection<IVector2> {
    private readonly title;
    static getIslandName(island?: Island, useGenerated?: boolean): TranslationImpl;
    static handles(type: InspectType, island: unknown): boolean;
    get island(): Island | undefined;
    constructor(island: Island | IVector2, context?: InfoProviderContext, title?: boolean);
    getId(): string;
    protected getTitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getSubtitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getContent(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider | undefined>;
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
