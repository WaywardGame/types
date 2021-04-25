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
import { IHasOwner } from "game/doodad/IDoodad";
import { SkillType } from "game/entity/IHuman";
import { IInspector } from "game/inspection/IInfoProvider";
import { InfoProvider } from "game/inspection/InfoProvider";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import { TranslationGenerator } from "ui/component/IComponent";
declare type SkillRequirement = [skill: SkillType, amount: number];
declare type InfoGenerator = () => ArrayOr<TranslationGenerator | InfoProvider>;
declare type HasResolvableOwner = IInspector | IHasOwner;
export default class ObscuredValue extends InfoProvider {
    private readonly isOrCheck;
    private readonly owner;
    private readonly skill;
    private readonly unobscured;
    private readonly obscured;
    static requiresSkill(skill?: SkillRequirement): {
        unobscured(unobscuredInitializer: InfoGenerator): {
            obscured(obscuredInitializer: InfoGenerator): ObscuredValue;
        };
        andOwner(owner?: HasResolvableOwner | undefined): {
            unobscured(unobscuredInitializer: InfoGenerator): {
                obscured(obscuredInitializer: InfoGenerator): ObscuredValue;
            };
        };
        orOwner(owner?: HasResolvableOwner | undefined): {
            unobscured(unobscuredInitializer: InfoGenerator): {
                obscured(obscuredInitializer: InfoGenerator): ObscuredValue;
            };
        };
    };
    static requiresOwner(owner?: HasResolvableOwner): {
        unobscured(unobscuredInitializer: InfoGenerator): {
            obscured(obscuredInitializer: InfoGenerator): ObscuredValue;
        };
        andSkill(skill?: SkillRequirement | undefined): {
            unobscured(unobscuredInitializer: InfoGenerator): {
                obscured(obscuredInitializer: InfoGenerator): ObscuredValue;
            };
        };
        orSkill(skill?: SkillRequirement | undefined): {
            unobscured(unobscuredInitializer: InfoGenerator): {
                obscured(obscuredInitializer: InfoGenerator): ObscuredValue;
            };
        };
    };
    private static createInfoFactory;
    private constructor();
    getClass(): string[];
    get(context: InfoProviderContext): import("../../../language/Translation").default | import("../../../language/Translation").ISerializedTranslation | import("../../../language/dictionary/UiTranslation").default | (() => import("../../../language/Translation").default | Iterable<import("../../../utilities/string/Interpolator").IStringSection> | import("../../../language/Translation").ISerializedTranslation | import("../../../language/dictionary/UiTranslation").default | undefined) | InfoProvider | (TranslationGenerator | InfoProvider)[];
    private canSee;
    private getOwner;
    private hasSkill;
}
export {};
