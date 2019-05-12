/**
 * @prettier
 */
import React, { Component } from 'react';
import { IProps, IState } from './types';
import { ToolTipType } from './types';
declare class Header extends Component<IProps, IState> {
    constructor(props: IProps);
    /**
     * opens popover menu for logged in user.
     */
    handleLoggedInMenu: (event: React.SyntheticEvent<HTMLElement, Event>) => void;
    /**
     * closes popover menu for logged in user
     */
    handleLoggedInMenuClose: () => void;
    /**
     * opens registry information dialog.
     */
    handleOpenRegistryInfoDialog: () => void;
    /**
     * closes registry information dialog.
     */
    handleCloseRegistryInfoDialog: () => void;
    /**
     * close/open popover menu for logged in users.
     */
    handleToggleLogin: () => void;
    handleToggleMNav: () => void;
    handleDismissMNav: () => void;
    renderLeftSide: () => JSX.Element;
    renderLogo: () => JSX.Element;
    renderToolTipIcon: (title: string, type: ToolTipType) => JSX.Element;
    renderRightSide: () => JSX.Element;
    renderGreetings: () => JSX.Element;
    /**
     * render popover menu
     */
    renderMenu: () => JSX.Element;
    renderInfoDialog: () => JSX.Element;
    render(): JSX.Element;
}
export default Header;
