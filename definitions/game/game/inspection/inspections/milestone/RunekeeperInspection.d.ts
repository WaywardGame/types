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
import type { CollapsibleInfoProviderTabs } from "@wayward/game/game/inspection/infoProviders/CollapsableInfoProvider";
import Runekeeper from "@wayward/game/game/milestones/milestone/Runekeeper";
declare namespace RunekeeperInspection {
    enum Classes {
        Main = "inspection-type-milestone-runekeeper",
        Domain = "inspection-type-milestone-runekeeper-domain",
        Summary = "inspection-type-milestone-runekeeper-summary"
    }
    function getTabs(discovered: Runekeeper.DomainData[]): CollapsibleInfoProviderTabs;
}
export default RunekeeperInspection;
