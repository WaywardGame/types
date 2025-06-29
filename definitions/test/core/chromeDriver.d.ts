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
import type { ApplicationLogger } from "@wayward/test/core/applicationLogger";
export declare class ChromeDriver {
    private readonly safeTestTile;
    private readonly appId;
    private readonly logger;
    private process;
    private exitHandler;
    constructor(safeTestTile: string, appId: string, logger: ApplicationLogger);
    start(port: number): Promise<number>;
    stop(): void;
}
