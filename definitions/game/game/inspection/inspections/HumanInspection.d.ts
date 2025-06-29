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
import type { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import EntityInspection from "@wayward/game/game/inspection/inspections/EntityInspection";
import type Translation from "@wayward/game/language/Translation";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
export default abstract class HumanInspection<H extends Human> extends EntityInspection<H> {
    constructor(inspectType: InspectType, human: H, context?: InfoProviderContext);
    protected getTitle(context: InfoProviderContext): Translation | SimpleInfoProvider | undefined;
    protected getContent(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider | undefined>;
    isImportant(): boolean;
}
