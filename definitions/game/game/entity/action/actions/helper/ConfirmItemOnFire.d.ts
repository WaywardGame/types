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
import type Human from "game/entity/Human";
export default function (human: Human, all: boolean): true | import("game/meta/prompt/Prompts").IPrompt<import("../../../../meta/prompt/IPrompt").IPromptConfirmDescription<[{
    WITH?: (string | import("../../../../../language/ITranslation").ISerializedTranslation | import("../../../../../language/impl/TranslationImpl").default) | undefined;
    ACTION: string | import("../../../../../language/ITranslation").ISerializedTranslation | import("../../../../../language/impl/TranslationImpl").default;
    AMOUNT: number;
    LAVA?: true | undefined;
}]>>;
