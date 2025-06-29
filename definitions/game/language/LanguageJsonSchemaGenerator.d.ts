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
interface IDictionarySchema {
    type: "object";
    properties: Record<string, any>;
}
type DictionarySchemas = Record<string, IDictionarySchema>;
export default function generateSchema(): {
    title: string;
    description: string;
    type: string;
    properties: {
        extends: {
            description: string;
            type: string;
        };
        name: {
            description: string;
            type: string;
        };
        alternateFontStyle: {
            description: string;
            enum: boolean[];
        };
        dictionaries: {
            description: string;
            type: string;
            properties: DictionarySchemas;
        };
        pluralizationRules: {
            description: string;
            type: string;
            properties: {
                pluralRules: {
                    description: string;
                    type: string;
                    minItems: number;
                    items: {
                        type: string;
                        items: Array<{
                            type: string;
                        }>;
                    };
                };
                singularRules: {
                    description: string;
                    type: string;
                    minItems: number;
                    items: {
                        type: string;
                        items: Array<{
                            type: string;
                        }>;
                    };
                };
                uncountables: {
                    description: string;
                    type: string;
                    minItems: number;
                    items: {
                        type: string;
                    };
                };
                irregularRules: {
                    description: string;
                    type: string;
                    minItems: number;
                    items: {
                        type: string;
                        items: Array<{
                            type: string;
                        }>;
                    };
                };
                articleRules: {
                    description: string;
                    type: string;
                    properties: {
                        indefinite: {
                            description: string;
                            type: string;
                            minItems: number;
                            items: {
                                type: string;
                                items: Array<{
                                    anyOf: Array<{
                                        type: string;
                                        properties?: undefined;
                                        required?: undefined;
                                    } | {
                                        type: string;
                                        properties: {
                                            min: {
                                                type: string;
                                            };
                                            max: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    }>;
                                    type?: undefined;
                                } | {
                                    type: string;
                                    anyOf?: undefined;
                                }>;
                            };
                        };
                        definite: {
                            description: string;
                            type: string;
                            minItems: number;
                            items: {
                                type: string;
                                items: Array<{
                                    anyOf: Array<{
                                        type: string;
                                        properties?: undefined;
                                        required?: undefined;
                                    } | {
                                        type: string;
                                        properties: {
                                            min: {
                                                type: string;
                                            };
                                            max: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    }>;
                                    type?: undefined;
                                } | {
                                    type: string;
                                    anyOf?: undefined;
                                }>;
                            };
                        };
                    };
                    additionalProperties: boolean;
                };
            };
            additionalProperties: boolean;
        };
        contextRules: {
            description: string;
            type: string;
            properties: {
                isWord: {
                    description: string;
                    type: string;
                };
                isWordSeparator: {
                    description: string;
                    type: string;
                };
                isSentenceSeparator: {
                    description: string;
                    type: string;
                };
                shouldCapitalizeWord: {
                    description: string;
                    type: string;
                };
            };
            additionalProperties: boolean;
        };
    };
    dependencies: {
        alternateFontStyle: string[];
    };
    additionalProperties: boolean;
    allOf: Array<{
        anyOf: Array<{
            required: string[];
        }>;
        oneOf?: undefined;
    } | {
        oneOf: Array<{
            required: string[];
        }>;
        anyOf?: undefined;
    }>;
};
export {};
