import type Entity from "@wayward/game/game/entity/Entity";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import type Item from "@wayward/game/game/item/Item";
import type { Reference } from "@wayward/game/game/reference/IReferenceManager";
import type Tile from "@wayward/game/game/tile/Tile";
import type { ISerializedTranslation, TranslationArg } from "@wayward/game/language/ITranslation";
import Translation from "@wayward/game/language/Translation";
interface IActionContext {
    action: ActionType;
    executorReference?: Reference;
    tool?: ISerializedTranslation;
    target?: ISerializedTranslation;
    details?: Record<string, TranslationArg>;
    translation?: Translation;
    tick: number;
    turn?: number;
}
declare namespace IActionContext {
    interface Source {
        tool?: Translation | Item;
        target?: Translation | ArrayOr<Entity> | Tile;
        details?: Record<string, TranslationArg>;
    }
    interface GenericSource extends Source {
        translate: (context: IActionContext) => Translation;
    }
    function createGeneric(executor: Entity, context?: IActionContext.GenericSource): IActionContext;
    function create(action: ActionType, executor: Entity, context?: IActionContext.Source): IActionContext;
    function translate(context: IActionContext): Translation;
    function translate(context?: IActionContext): Translation | undefined;
}
export default IActionContext;
