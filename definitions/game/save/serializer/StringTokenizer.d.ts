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
import type { ISerializer, IUnserializedCallback } from "@wayward/game/save/serializer/ISerializer";
export default class StringTokenizer implements IUnserializedCallback {
    private static readonly targets;
    /**
     * Strings that will be tokenized when serializing (saving)
     */
    private static readonly tokenizableStrings;
    static registerTarget(target: any): void;
    static initialize(): void;
    static create(): StringTokenizer;
    /**
     * Updates an existing string tokenizer with new strings
     */
    static update(stringTokenizer: StringTokenizer): void;
    /**
     * String -> Token. Used when writing string tokens during serialization
     */
    private readonly stringToToken;
    /**
     * Token -> String mapping. Used when reading string tokens during deserialization
     */
    private readonly tokenToString;
    onUnserialized(): void;
    clear(): void;
    /**
     * Reads the token for the string if it has one
     * @param serializer Serializer object
     * @return Detokenized string or undefined if the string was not tokenized
     */
    readString(serializer: ISerializer): string | undefined;
    /**
     * Writes the token for the string if it has one
     * @param serializer Serializer object
     * @param value The string
     * @return True when the string was written / tokenized
     */
    writeString(serializer: ISerializer, value: string): boolean;
}
