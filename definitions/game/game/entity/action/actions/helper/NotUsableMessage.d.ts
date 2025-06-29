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
import type { ActionDisplayLevel, ActionType, IActionNotUsable } from "@wayward/game/game/entity/action/IAction";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import { Source, type IPackedMessage } from "@wayward/game/game/entity/player/IMessageManager";
import type Item from "@wayward/game/game/item/Item";
import Message from "@wayward/game/language/dictionary/Message";
import { type TranslationArg } from "@wayward/game/language/ITranslation";
import type _Translation from "@wayward/game/language/Translation";
import type { UnWeakRefified } from "@wayward/utilities/object/Objects";
declare const SYMBOL_NOT_USABLE_MESSAGE: unique symbol;
export interface INotUsableMessage extends Partial<IPackedMessage> {
    [SYMBOL_NOT_USABLE_MESSAGE]: true;
}
interface INotUsableMessageDefinition<ARGS extends any[]> extends Omit<IPackedMessage, "args" | "message"> {
    message?: Message;
    errorDisplayLevel?: ActionDisplayLevel;
    args: (...args: UnWeakRefified<ARGS>) => ArrayOr<TranslationArg>;
}
export type NotUsableMessage<ARGS extends any[] = []> = (...args: ARGS) => IActionNotUsable;
export declare function NotUsableMessage<ARGS extends any[] = []>(definition: INotUsableMessageDefinition<ARGS>): NotUsableMessage<ARGS>;
export declare namespace NotUsableMessage {
    function setTranslation(translation: typeof _Translation): void;
    interface IFactory<ARGS extends any[], CUMULATIVE_DEFINITION extends Partial<INotUsableMessageDefinition<ARGS>>> {
        with<PARTIAL_DEFINITION extends Partial<INotUsableMessageDefinition<ARGS>>>(definition: PARTIAL_DEFINITION): IFactory<ARGS, {
            [KEY in keyof CUMULATIVE_DEFINITION | keyof PARTIAL_DEFINITION]: KEY extends keyof PARTIAL_DEFINITION ? PARTIAL_DEFINITION[KEY] : CUMULATIVE_DEFINITION[KEY & keyof CUMULATIVE_DEFINITION];
        }>;
        <PARTIAL_DEFINITION extends Partial<INotUsableMessageDefinition<ARGS>>>(definition: PARTIAL_DEFINITION): ({
            [KEY in keyof CUMULATIVE_DEFINITION | keyof PARTIAL_DEFINITION]: KEY extends keyof PARTIAL_DEFINITION ? PARTIAL_DEFINITION[KEY] : CUMULATIVE_DEFINITION[KEY & keyof CUMULATIVE_DEFINITION];
        } extends infer CUMULATIVE_DEFINITION ? CUMULATIVE_DEFINITION extends INotUsableMessageDefinition<ARGS> ? NotUsableMessage<ARGS> : "Incomplete INotUsableMessageDefinition" : never);
    }
    function factory<ARGS extends any[] = []>(): IFactory<ARGS, {}>;
    function simple(message: Message, ...args: TranslationArg[]): INotUsableMessage;
}
export declare const NotUsableMessageItem: NotUsableMessage.IFactory<[Item], {
    args: (item: Item | undefined) => import("../../../../../language/impl/TranslationImpl").default | undefined;
    sources: (Source.Action | Source.Item)[];
}>;
export declare const NotUsableMessageCreature: NotUsableMessage.IFactory<[Creature], {
    args: (creature: Creature | undefined) => import("../../../../../language/impl/TranslationImpl").default | undefined;
    sources: (Source.Action | Source.Creature)[];
}>;
export declare const NotUsableMessageDoodad: NotUsableMessage.IFactory<[Doodad], {
    args: (doodad: Doodad | undefined) => import("../../../../../language/impl/TranslationImpl").default | undefined;
    sources: Source.Action[];
}>;
export declare const NotUsableMessageItemOrDoodad: NotUsableMessage.IFactory<[Doodad | Item], {
    args: (itemOrDoodad: Doodad | Item | undefined) => import("../../../../../language/impl/TranslationImpl").default | undefined;
    sources: Source.Action[];
}>;
export declare const NotUsableMessageCannotHere: (action: ActionType) => IActionNotUsable;
export declare const NotUsableMessageCannotFromHere: (action: ActionType) => IActionNotUsable;
export declare const NotUsableMessageCannotAnythingHere: (action: ActionType) => IActionNotUsable;
export {};
