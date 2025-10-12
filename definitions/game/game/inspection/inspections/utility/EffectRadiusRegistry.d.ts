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
import type Entity from "@wayward/game/game/entity/Entity";
import type { EntityType, EntityTypeMap } from "@wayward/game/game/entity/IEntity";
import type { IEffectRadiusOverlayColor } from "@wayward/game/renderer/overlay/EffectRadiusOverlay";
import type { DistanceType } from "@wayward/game/utilities/math/Vector2";
interface IEffectRadius {
    type: DistanceType;
    radius: number;
    overlay?: IEffectRadiusOverlayColor;
}
declare namespace EffectRadiusRegistry {
    function registerEntityType<TYPE extends EntityType>(entityType: TYPE, supplier: (entity: EntityTypeMap[TYPE]) => IEffectRadius | undefined): void;
    function get(entity: Entity): IEffectRadius | undefined;
}
export default EffectRadiusRegistry;
