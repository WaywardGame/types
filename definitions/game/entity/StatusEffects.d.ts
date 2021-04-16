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
import { StatusType } from "game/entity/IEntity";
import Bleeding from "game/entity/status/handler/Bleeding";
import Burned from "game/entity/status/handler/Burned";
import Dehydrated from "game/entity/status/handler/Dehydrated";
import Encumbered from "game/entity/status/handler/Encumbered";
import Exhausted from "game/entity/status/handler/Exhausted";
import Freezing from "game/entity/status/handler/Freezing";
import Frostbitten from "game/entity/status/handler/Frostbitten";
import Overheating from "game/entity/status/handler/Overheating";
import Poisoned from "game/entity/status/handler/Poisoned";
import Starving from "game/entity/status/handler/Starving";
import { StatusEffectClass } from "game/entity/status/StatusEffect";
declare const _default: {
    0: typeof Bleeding;
    1: typeof Poisoned;
    2: typeof Burned;
    3: typeof Encumbered;
    4: typeof Exhausted;
    5: typeof Starving;
    6: typeof Dehydrated;
    9: typeof Frostbitten;
    7: typeof Overheating;
    8: typeof Freezing;
} & Record<StatusType, StatusEffectClass>;
export default _default;
