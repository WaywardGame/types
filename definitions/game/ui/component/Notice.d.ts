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
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import { Heading } from "@wayward/game/ui/component/Text";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
export declare enum NoticeClasses {
    Main = "notice",
    Header = "notice-header",
    SuperTitle = "notice-super-title",
    Title = "notice-title",
    Content = "notice-content",
    AnimatedContent = "notice-animated-content",
    Section = "notice-section",
    Sections = "notice-sections",
    Footer = "notice-footer",
    FooterContent = "notice-footer-content",
    FooterButton = "notice-footer-button",
    Markdown = "notice-markdown"
}
export default class Notice extends Component {
    static await(noticeClass: Class<Notice>, appendTo: Component | HTMLElement): Promise<boolean>;
    readonly sections: Component<HTMLElement>;
    readonly footer: Component<HTMLElement>;
    readonly footerContent: Component<HTMLElement>;
    private returnValue;
    readonly proceedButton: Button;
    get cancelButton(): Button;
    constructor();
    addSection(initializer: (section: NoticeSection) => any): this;
    hideAndRemove(): Promise<void>;
    protected onEnterPressed(api: IBindHandlerApi): boolean;
}
export declare class NoticeSection extends Component {
    readonly header: Component<HTMLElement>;
    readonly superTitle: Heading;
    readonly title: Heading;
    readonly content: Component<HTMLElement>;
    constructor();
}
