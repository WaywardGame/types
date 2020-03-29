/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { InspectType } from "game/inspection2/IInspection";
import { InfoProvider } from "game/inspection2/InfoProvider";
import { TranslationGenerator } from "newui/component/IComponent";
import { Paragraph } from "newui/component/Text";
import { IVector3 } from "utilities/math/IVector";
export default abstract class Inspection<O> extends InfoProvider {
    readonly type: InspectType;
    readonly value: O;
    constructor(type: InspectType, value: O);
    getClass(): string[];
    getBorder(): string | undefined;
    /**
     * Returns a string that should differentiate this inspection from other inspections of the same type.
     */
    abstract getId(): string;
    protected createIdFromVector3(vec3: IVector3): string;
    protected initChildTextComponent(text: TranslationGenerator): Paragraph;
}
