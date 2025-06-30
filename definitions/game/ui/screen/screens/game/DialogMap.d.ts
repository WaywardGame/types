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
import AltarDialog from "@wayward/game/ui/screen/screens/game/dialog/AltarDialog";
import BookDialog from "@wayward/game/ui/screen/screens/game/dialog/BookDialog";
import ContainerDialog from "@wayward/game/ui/screen/screens/game/dialog/ContainerDialog";
import CraftingDialog from "@wayward/game/ui/screen/screens/game/dialog/CraftingDialog";
import EquipmentDialog from "@wayward/game/ui/screen/screens/game/dialog/EquipmentDialog";
import InspectDialog from "@wayward/game/ui/screen/screens/game/dialog/InspectDialog";
import InventoryDialog from "@wayward/game/ui/screen/screens/game/dialog/InventoryDialog";
import IslandsSailDialog from "@wayward/game/ui/screen/screens/game/dialog/IslandsSailDialog";
import IslandsShippingDialog from "@wayward/game/ui/screen/screens/game/dialog/IslandsShippingDialog";
import MapDialog from "@wayward/game/ui/screen/screens/game/dialog/MapDialog";
import MessagesDialog from "@wayward/game/ui/screen/screens/game/dialog/MessagesDialog";
import MessagesEditFiltersDialog from "@wayward/game/ui/screen/screens/game/dialog/MessagesEditFiltersDialog";
import MilestonesDialog from "@wayward/game/ui/screen/screens/game/dialog/MilestonesDialog";
import NotesDialog from "@wayward/game/ui/screen/screens/game/dialog/NotesDialog";
import QuestDialog from "@wayward/game/ui/screen/screens/game/dialog/QuestDialog";
import QuickSettingsDialog from "@wayward/game/ui/screen/screens/game/dialog/QuickSettingsDialog";
import SkillsDialog from "@wayward/game/ui/screen/screens/game/dialog/SkillsDialog";
import TradeDialog from "@wayward/game/ui/screen/screens/game/dialog/TradeDialog";
declare const dialogMap: {
    17: typeof AltarDialog;
    6: typeof BookDialog;
    15: typeof ContainerDialog;
    9: typeof CraftingDialog;
    12: typeof EquipmentDialog;
    10: typeof InspectDialog;
    14: typeof InventoryDialog;
    11: typeof IslandsSailDialog;
    13: typeof IslandsShippingDialog;
    7: typeof MapDialog;
    0: typeof MessagesDialog;
    2: typeof MessagesEditFiltersDialog;
    4: typeof MilestonesDialog;
    1: typeof NotesDialog;
    8: typeof QuestDialog;
    3: typeof QuickSettingsDialog;
    5: typeof SkillsDialog;
    16: typeof TradeDialog;
};
export type DialogById = {
    [ID in keyof typeof dialogMap]: (typeof dialogMap)[ID] extends new () => infer DIALOG ? DIALOG : never;
};
export default dialogMap;
