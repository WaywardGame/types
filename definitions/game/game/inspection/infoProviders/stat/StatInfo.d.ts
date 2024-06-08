/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Human from "@wayward/game/game/entity/Human";
import type { Stat } from "@wayward/game/game/entity/IStats";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import Translation from "@wayward/game/language/Translation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IStatDisplayDescription } from "@wayward/game/ui/screen/screens/game/static/stats/IStatDisplayDescription";
export declare abstract class StatInfo extends InfoProvider {
    static getTitle(stat: Stat): InfoProvider | Translation;
    static getDescription(stat: Stat): InfoProvider | Translation | undefined;
    protected readonly humanRef: WeakRef<Human>;
    protected get human(): Human | undefined;
    constructor(human: Human);
    getTitle(stat: Stat): TranslationImpl | InfoProvider;
    getDescription(stat: Stat): TranslationImpl | InfoProvider | undefined;
    getBorderColorPreference(stat: Stat): IStatDisplayDescription["color"];
}
