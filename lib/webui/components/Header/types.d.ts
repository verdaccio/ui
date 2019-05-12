/**
 * @prettier
 */
export interface IProps {
    logo: string;
    username?: string;
    onLogout: () => void;
    onToggleLoginModal: () => void;
    scope: string;
    withoutSearch?: boolean;
}
export interface IState {
    anchorEl?: any;
    openInfoDialog: boolean;
    registryUrl: string;
    showMobileNavBar: boolean;
}
export declare type ToolTipType = 'search' | 'help' | 'info';
