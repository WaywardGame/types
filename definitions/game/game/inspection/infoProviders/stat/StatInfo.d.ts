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
import type Human from "@wayward/game/game/entity/Human";
import { Stat } from "@wayward/game/game/entity/IStats";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Translation from "@wayward/game/language/Translation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type { IStatDisplayDescription } from "@wayward/game/ui/screen/screens/game/static/stats/IStatDisplayDescription";
export declare abstract class StatInfo extends InfoProvider {
    readonly stat: Stat;
    static getTitle(stat: Stat): SimpleInfoProvider | Translation;
    static getDescription(stat: Stat): InfoProvider | Translation | undefined;
    protected readonly humanRef: WeakRef<Human>;
    protected get human(): Human | undefined;
    constructor(stat: Stat, human: Human);
    getClass(): string[];
    getTitle(): TranslationImpl | SimpleInfoProvider;
    getDescription(): TranslationImpl | InfoProvider | undefined;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    getBorderColorPreference(): IStatDisplayDescription["color"];
    getCoreStat?(): Stat;
    getMaxLabel(): Translation;
}
