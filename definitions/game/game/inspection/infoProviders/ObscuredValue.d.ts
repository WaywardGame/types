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
import type { IHasOwner } from "game/doodad/IDoodad";
import type { SkillType } from "game/entity/IHuman";
import type { IInspector } from "game/inspection/IInfoProvider";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type { TranslationGenerator } from "ui/component/IComponent";
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
    get(context: InfoProviderContext): ArrayOr<InfoProvider | TranslationGenerator<import("../../../language/dictionary/UiTranslation").default, []>>;
    private canSee;
    private getOwner;
    private hasSkill;
}
export {};
