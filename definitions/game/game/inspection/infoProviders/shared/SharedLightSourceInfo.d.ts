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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import type { InfoUnion } from "@wayward/game/game/inspection/infoProviders/UseInfo";
import type Item from "@wayward/game/game/item/Item";
export interface ILightSourceInfoBase {
    value?: Item | Doodad;
    lightSource: number;
}
export declare function getLightSource(value: InfoUnion<Item | Doodad, ActionType.StartFire | ActionType.Ignite | ActionType.Equip> | Item | Doodad): number | undefined;
export default function ({ value, lightSource }: ILightSourceInfoBase): LabelledValue | undefined;
