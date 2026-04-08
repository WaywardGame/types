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
import type { ActionType } from "@wayward/game/game/entity/action/IAction";
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import type { ItemType, ItemTypeGroup } from "@wayward/game/game/item/IItem";
import UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
import Translation from "@wayward/game/language/Translation";
export interface IRequirementInfoType {
    item: ItemType;
    itemGroup: ItemTypeGroup;
    actionItem: ActionType;
    other: UiTranslation;
}
interface SharedRequirementInfo {
    add<TYPE extends keyof IRequirementInfoType>(type: TYPE, value: IRequirementInfoType[TYPE]): this;
    toTranslation(): Translation;
    toInfoProvider(): LabelledValue;
}
declare function SharedRequirementInfo<TYPE extends keyof IRequirementInfoType>(type: TYPE, value: IRequirementInfoType[TYPE]): SharedRequirementInfo;
export default SharedRequirementInfo;
