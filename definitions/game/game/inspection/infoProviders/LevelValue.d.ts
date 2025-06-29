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
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { MagicalNormalPropertyTypes } from "@wayward/game/game/magic/IMagicalProperty";
import type { MagicalSubPropertyTypes } from "@wayward/game/game/magic/IMagicalProperty";
import type { IHasMagic } from "@wayward/game/game/magic/IMagicalProperty";
import type { MagicalPropertyTypeSubTypeMap } from "@wayward/game/game/magic/MagicalPropertyType";
import type { DictionaryEnum } from "@wayward/game/language/DictionaryMap";
import type { TextContext } from "@wayward/game/language/ITranslation";
import Translation from "@wayward/game/language/Translation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import { IRange } from "@wayward/utilities/math/Range";
export default class LevelValue<E extends DictionaryEnum> extends InfoProvider {
    private readonly enumObject;
    private readonly value;
    private readonly range;
    static enum<E extends DictionaryEnum>(enumObject: E): {
        value(value: GetterOfOr<number>): {
            range(range: IRange): LevelValue<E>;
            setIsPercentage(): LevelValue<E>;
        };
    };
    private readonly dictionary;
    private firstLevelNone?;
    private textContext?;
    private magical?;
    private formatter?;
    private cachedEntry?;
    private constructor();
    getClass(): string[];
    get(): TranslationImpl;
    setFirstLevelNone(): this;
    setMagicalOn(magicalThingy: IHasMagic, type: MagicalNormalPropertyTypes): this;
    setMagicalOn<T extends MagicalSubPropertyTypes>(magicalThingy: IHasMagic, type: T, subType?: MagicalPropertyTypeSubTypeMap[T]): this;
    inContext(context: TextContext): this;
    format(formatter: Translation): this;
    checkRefresh(): boolean;
    private getLevel;
}
