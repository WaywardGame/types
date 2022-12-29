/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Player from "game/entity/player/Player";
import type Item from "game/item/Item";
import Dialog from "ui/screen/screens/game/component/Dialog";
export default class BookDialog extends Dialog {
    private item?;
    private book?;
    private readonly text;
    constructor();
    getName(): import("../../../../../language/impl/TranslationImpl").default | import("../../../../../language/ITranslation").ISerializedTranslation | import("../../../../../language/dictionary/UiTranslation").default | Iterable<import("../../../../../utilities/string/Interpolator").IStringSection> | undefined;
    openBook(item: Item): void;
    private getText;
    protected onInventoryItemRemove(_: any, item: Item): void;
    protected onInventoryItemUpdate(_: any, item: Item): void;
    protected onPostMove(player: Player): void;
    private closeIfItemIsGone;
}
