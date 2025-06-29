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
declare namespace Checksum {
    /**
     * SHA-256 checksum
     * https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
     * @returns checksum string (upper case'd hex)
     */
    function hash(data: string | Uint8Array): Promise<{
        data: string | Uint8Array;
        hash: string;
    }>;
}
export default Checksum;
