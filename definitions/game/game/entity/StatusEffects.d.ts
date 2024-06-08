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
import { StatusType } from "@wayward/game/game/entity/IEntity";
import type { StatusEffectClass } from "@wayward/game/game/entity/status/StatusEffect";
import Anguish from "@wayward/game/game/entity/status/handler/Anguish";
import Bleeding from "@wayward/game/game/entity/status/handler/Bleeding";
import Burned from "@wayward/game/game/entity/status/handler/Burned";
import Dehydrated from "@wayward/game/game/entity/status/handler/Dehydrated";
import Encumbered from "@wayward/game/game/entity/status/handler/Encumbered";
import Exhausted from "@wayward/game/game/entity/status/handler/Exhausted";
import Freezing from "@wayward/game/game/entity/status/handler/Freezing";
import Frostbitten from "@wayward/game/game/entity/status/handler/Frostbitten";
import Overheating from "@wayward/game/game/entity/status/handler/Overheating";
import Poisoned from "@wayward/game/game/entity/status/handler/Poisoned";
import Starving from "@wayward/game/game/entity/status/handler/Starving";
declare const statusEffects: {
    10: typeof Anguish;
    0: typeof Bleeding;
    2: typeof Burned;
    6: typeof Dehydrated;
    3: typeof Encumbered;
    4: typeof Exhausted;
    8: typeof Freezing;
    9: typeof Frostbitten;
    7: typeof Overheating;
    1: typeof Poisoned;
    5: typeof Starving;
};
declare const _default: typeof statusEffects & Record<StatusType, StatusEffectClass>;
export default _default;
