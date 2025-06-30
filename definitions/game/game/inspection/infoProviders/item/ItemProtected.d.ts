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
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import type Item from "@wayward/game/game/item/Item";
import { PathType } from "@wayward/game/resource/IResourceLoader";
import ImagePath from "@wayward/game/ui/util/ImagePath";
export default class ItemProtectedInfoProvider extends InfoProvider {
    private readonly item;
    private itemProtected;
    private itemProtectedContainer;
    constructor(item: Item);
    getClass(): string[];
    getIcon(): {
        path: ImagePath<PathType.InfoIcon>;
        width: number;
        height: number;
    };
    hasContent(): boolean;
    get(context: InfoProviderContext): LabelledValue;
    protected onToggleProtected(item: Item): void;
}
