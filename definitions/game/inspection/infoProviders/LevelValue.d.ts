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
import { InfoProvider } from "game/inspection/InfoProvider";
import { IHasMagic, MagicalNormalPropertyTypes, MagicalPropertyTypeSubTypeMap, MagicalSubPropertyTypes } from "game/magic/MagicalPropertyManager";
import { DictionaryEnum } from "language/Dictionaries";
import Translation, { TextContext } from "language/Translation";
import { IRange } from "utilities/math/Range";
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
    get(): Translation;
    setFirstLevelNone(): this;
    setMagicalOn(magicalThingy: IHasMagic, type: MagicalNormalPropertyTypes): this;
    setMagicalOn<T extends MagicalSubPropertyTypes>(magicalThingy: IHasMagic, type: T, subType?: MagicalPropertyTypeSubTypeMap[T]): this;
    inContext(context: TextContext): this;
    format(formatter: Translation): this;
    checkRefresh(): boolean;
    private getLevel;
}
