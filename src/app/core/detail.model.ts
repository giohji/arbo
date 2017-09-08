export class Detail {
    key: string;
    type: DetailType;
    menuTitle: string;
    title: string;
    image: string;
    description: Array<string>;
    public constructor(init?:Partial<Detail>) {
        Object.assign(this, init);
    }
}
export enum DetailType {
    TREATMENT,
    TEAM
}