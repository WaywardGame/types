import { ActionArgumentCustom } from "@wayward/game/game/entity/action/argument/ActionArgumentCustom";
import type Entity from "@wayward/game/game/entity/Entity";
import type Tile from "@wayward/game/game/tile/Tile";
export interface IActionExpectedLocation {
    targetTile: Tile;
    fromTile: Tile;
}
export declare class ActionArgumentExpectedLocation extends ActionArgumentCustom<IActionExpectedLocation> {
    validate(executor: Entity | undefined, value: unknown): value is IActionExpectedLocation;
    read(): IActionExpectedLocation;
    write(executor: Entity | undefined, value: IActionExpectedLocation): void;
}
