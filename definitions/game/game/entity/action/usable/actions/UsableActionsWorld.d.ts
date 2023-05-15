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
import { UsableActionGenerator } from "game/entity/action/usable/UsableActionRegistrar";
import { UsableActionType } from "game/entity/action/usable/UsableActionType";
export declare enum WorldContextMenuClasses {
    Main = "world-context-menu",
    Content = "world-context-menu-content",
    Option = "world-context-menu-option",
    OptionText = "world-context-menu-option-text"
}
export declare namespace WorldContextMenuClasses {
    const OptionSpecific: (enumValue: UsableActionType) => "world-context-menu-option-none" | "world-context-menu-option-use" | "world-context-menu-option-move" | "world-context-menu-option-actions" | "world-context-menu-option-commandattack" | "world-context-menu-option-commanddefend" | "world-context-menu-option-commandfollowclose" | "world-context-menu-option-commandfollowfar" | "world-context-menu-option-commandstay" | "world-context-menu-option-quickslotremove" | "world-context-menu-option-quickslotadd" | "world-context-menu-option-quickslotaddtofree" | "world-context-menu-option-quickslotaddtoslot" | "world-context-menu-option-movetoinventory" | "world-context-menu-option-dropmenu" | "world-context-menu-option-dropall" | "world-context-menu-option-dropallofsamequality" | "world-context-menu-option-repairwithitem" | "world-context-menu-option-reinforcewithitem" | "world-context-menu-option-enhancewithitem" | "world-context-menu-option-enchantwithitem" | "world-context-menu-option-transmogrifywithitem" | "world-context-menu-option-upgradewithitem" | "world-context-menu-option-alterwithitem" | "world-context-menu-option-refinewithitem" | "world-context-menu-option-preservewithitem" | "world-context-menu-option-addfuelwithitem" | "world-context-menu-option-ignitewithitem" | "world-context-menu-option-absorbwithitem" | "world-context-menu-option-exudewithitem" | "world-context-menu-option-movetoinventorymenu" | "world-context-menu-option-movetoactivecontainermenu" | "world-context-menu-option-movetofacingcontainermenu" | "world-context-menu-option-moveall" | "world-context-menu-option-moveallofsamequality" | "world-context-menu-option-tradetradersell" | "world-context-menu-option-tradetraderbuy" | "world-context-menu-option-itemactions" | "world-context-menu-option-gatherwithhands" | "world-context-menu-option-harvestwithhands" | "world-context-menu-option-digwithhands" | "world-context-menu-option-tillwithhands" | "world-context-menu-option-pickupexcrementwithhands" | "world-context-menu-option-equipheld" | "world-context-menu-option-equiplegs" | "world-context-menu-option-equipchest" | "world-context-menu-option-equiphead" | "world-context-menu-option-equipwaist" | "world-context-menu-option-equipfeet" | "world-context-menu-option-equipneck" | "world-context-menu-option-equiphands" | "world-context-menu-option-equipback" | "world-context-menu-option-equipmainhand" | "world-context-menu-option-equipoffhand" | "world-context-menu-option-restonground" | "world-context-menu-option-sleeponground" | "world-context-menu-option-commandmenu";
}
export declare const UsableActionsWorldActions: UsableActionGenerator<[]>;
export declare const UsableActionsWorldItemActions: UsableActionGenerator<[]>;
declare const _default: UsableActionGenerator<[select?: UsableActionType.ItemActions | UsableActionType.Actions | undefined]>;
export default _default;
