import { Page, PageItems, Scroller } from "tonva-react";
export interface ListPageProps {
    pageItems: PageItems<any>;
    itemClick: (item: any) => any;
    renderItem?: (item: any, index: number) => JSX.Element;
    renderItemContainer?: (content: any) => JSX.Element;
    key: (item: any) => number | string;
    header: JSX.Element | string;
    right?: JSX.Element;
    footer?: JSX.Element;
    top?: JSX.Element;
    bottom?: JSX.Element;
    back?: 'close' | 'back' | 'none';
    className?: string;
    headerClassName?: string;
}
export declare class ListPage extends Page {
    protected listPageProps: ListPageProps;
    constructor(listPageProps: ListPageProps);
    render(): JSX.Element;
    private renderPage;
    protected onPageScroll(e: any): void;
    protected onPageScrollTop(scroller: Scroller): Promise<boolean>;
    protected onPageScrollBottom(scroller: Scroller): Promise<void>;
    protected afterBack(): void;
}
