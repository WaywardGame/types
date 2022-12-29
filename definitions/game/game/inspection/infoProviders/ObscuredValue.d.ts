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
import type { IHasBuilder } from "game/doodad/IDoodad";
import type { SkillType } from "game/entity/IHuman";
import type { IInspector } from "game/inspection/IInfoProvider";
import { InfoProvider } from "game/inspection/InfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import type { TranslationGenerator } from "ui/component/IComponent";
type SkillRequirement = [skill: SkillType, amount: number];
type InfoGenerator = () => ArrayOr<TranslationGenerator | InfoProvider>;
type HasResolvableBuilder = IInspector | IHasBuilder;
export default class ObscuredValue extends InfoProvider {
    private readonly isOrCheck;
    private readonly inspector;
    private readonly skill;
    private readonly unobscured;
    private readonly obscured;
    static requiresSkill(skill?: SkillRequirement): {
        unobscured(unobscuredInitializer: InfoGenerator): {
            obscured(obscuredInitializer: InfoGenerator): ObscuredValue;
        };
        andBuilder(builder?: HasResolvableBuilder): {
            unobscured(unobscuredInitializer: InfoGenerator): {
                obscured(obscuredInitializer: InfoGenerator): ObscuredValue;
            };
        };
        orBuilder(builder?: HasResolvableBuilder): {
            unobscured(unobscuredInitializer: InfoGenerator): {
                obscured(obscuredInitializer: InfoGenerator): ObscuredValue;
            };
        };
    };
    static requiresBuilder(builder?: HasResolvableBuilder): {
        unobscured(unobscuredInitializer: InfoGenerator): {
            obscured(obscuredInitializer: InfoGenerator): ObscuredValue;
        };
        andSkill(skill?: SkillRequirement): {
            unobscured(unobscuredInitializer: InfoGenerator): {
                obscured(obscuredInitializer: InfoGenerator): ObscuredValue;
            };
        };
        orSkill(skill?: SkillRequirement): {
            unobscured(unobscuredInitializer: InfoGenerator): {
                obscured(obscuredInitializer: InfoGenerator): ObscuredValue;
            };
        };
    };
    private static createInfoFactory;
    private constructor();
    getClass(): string[];
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    private canSee;
    private getBuilder;
    private hasSkill;
}
export {};
