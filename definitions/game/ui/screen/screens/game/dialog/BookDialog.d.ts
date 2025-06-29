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
import type Player from "@wayward/game/game/entity/player/Player";
import type Item from "@wayward/game/game/item/Item";
import type UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { ISerializedTranslation } from "@wayward/game/language/ITranslation";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
export default class BookDialog extends Dialog {
    private item?;
    private book?;
    private readonly text;
    constructor();
    getName(): TranslationImpl | ISerializedTranslation | UiTranslation | undefined;
    openBook(item: Item): void;
    private getText;
    protected onInventoryItemRemove(_: any, itemOrItems: Item | Item[]): void;
    protected onInventoryItemUpdate(_: any, items: Item[]): void;
    protected onPostMove(player: Player): void;
    private closeIfItemIsGone;
}
