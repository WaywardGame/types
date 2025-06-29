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
import Burned from "@wayward/game/game/entity/status/handler/Burned";
import Dehydrated from "@wayward/game/game/entity/status/handler/Dehydrated";
import Encumbered from "@wayward/game/game/entity/status/handler/Encumbered";
import Exhausted from "@wayward/game/game/entity/status/handler/Exhausted";
import Freezing from "@wayward/game/game/entity/status/handler/Freezing";
import Frostbitten from "@wayward/game/game/entity/status/handler/Frostbitten";
import Overheating from "@wayward/game/game/entity/status/handler/Overheating";
import Poisoned from "@wayward/game/game/entity/status/handler/Poisoned";
import Starving from "@wayward/game/game/entity/status/handler/Starving";
import type { StatusClass } from "@wayward/game/game/entity/status/Status";
declare const statusClassMap: {
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
declare const _default: typeof statusClassMap & Record<number, StatusClass>;
export default _default;
