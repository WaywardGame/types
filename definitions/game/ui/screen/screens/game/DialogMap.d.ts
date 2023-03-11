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
import BookDialog from "ui/screen/screens/game/dialog/BookDialog";
import CraftingDialog from "ui/screen/screens/game/dialog/CraftingDialog";
import EquipmentDialog from "ui/screen/screens/game/dialog/EquipmentDialog";
import InspectDialog from "ui/screen/screens/game/dialog/InspectDialog";
import IslandsSailDialog from "ui/screen/screens/game/dialog/IslandsSailDialog";
import IslandsSelectionDialog from "ui/screen/screens/game/dialog/IslandsSelectionDialog";
import MapDialog from "ui/screen/screens/game/dialog/MapDialog";
import MessagesDialog from "ui/screen/screens/game/dialog/MessagesDialog";
import MessagesEditFiltersDialog from "ui/screen/screens/game/dialog/MessagesEditFiltersDialog";
import MilestonesDialog from "ui/screen/screens/game/dialog/MilestonesDialog";
import NotesDialog from "ui/screen/screens/game/dialog/NotesDialog";
import QuestDialog from "ui/screen/screens/game/dialog/QuestDialog";
import QuickSettingsDialog from "ui/screen/screens/game/dialog/QuickSettingsDialog";
import SkillsDialog from "ui/screen/screens/game/dialog/SkillsDialog";
declare const dialogMap: {
    6: typeof BookDialog;
    9: typeof CraftingDialog;
    12: typeof EquipmentDialog;
    10: typeof InspectDialog;
    11: typeof IslandsSailDialog;
    13: typeof IslandsSelectionDialog;
    7: typeof MapDialog;
    0: typeof MessagesDialog;
    2: typeof MessagesEditFiltersDialog;
    4: typeof MilestonesDialog;
    1: typeof NotesDialog;
    8: typeof QuestDialog;
    3: typeof QuickSettingsDialog;
    5: typeof SkillsDialog;
};
export type DialogById = {
    [ID in keyof typeof dialogMap]: (typeof dialogMap)[ID] extends new () => infer DIALOG ? DIALOG : never;
};
export default dialogMap;
