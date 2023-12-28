import { LoadType } from "@wayward/game/game/meta/Loading";
import Component from "@wayward/game/ui/component/Component";
export declare enum LoadingClasses {
    Main = "loading",
    Style = "loading-style",
    Block = "loading-block"
}
export default class LoadingAnimation extends Component {
    constructor();
    setType(type?: LoadType): this;
}
