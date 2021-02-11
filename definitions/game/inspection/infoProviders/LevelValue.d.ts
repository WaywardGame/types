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
import { IHasMagicalProperties, MagicalPropertyType } from "item/IItem";
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
    initComponent(): {
        component: import("../../../newui/component/Component").default<HTMLElement>;
        fullInit(): void;
    };
    getClass(): string[];
    get(): Translation;
    setFirstLevelNone(): this;
    setMagicalOn(magicalThingy: IHasMagicalProperties, type: MagicalPropertyType): this;
    inContext(context: TextContext): this;
    format(formatter: Translation): this;
    checkRefresh(): boolean;
    private getLevel;
}
