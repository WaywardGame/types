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
/**
 * Choices for interrupts
 */
declare enum InterruptChoice {
    Cancel = 0,
    ContinueAnyway = 1,
    LocalFile = 2,
    No = 3,
    NoWarn = 4,
    Ok = 5,
    OpenSaveFolderAndQuit = 6,
    Quit = 7,
    Rejoin = 8,
    Rename = 9,
    Retry = 10,
    SaveAndQuit = 11,
    SteamWorkshop = 12,
    Yes = 13
}
export default InterruptChoice;
