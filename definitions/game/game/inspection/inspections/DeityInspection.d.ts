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
import { Deity } from "@wayward/game/game/deity/Deity";
import type Human from "@wayward/game/game/entity/Human";
import { InspectType } from "@wayward/game/game/inspection/IInspection";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Inspection from "@wayward/game/game/inspection/Inspection";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
export default class DeityInspection extends Inspection<Deity> {
    static handles: (type: InspectType, value: unknown, context?: InfoProviderContext | undefined) => boolean;
    private readonly _human?;
    protected get human(): Human | undefined;
    constructor([, deity]: [any, Deity], context?: InfoProviderContext);
    getId(): string;
    getBorder(): string;
    get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    private getDomains;
}