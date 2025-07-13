import Search from './Search';
import type HeaderProps from '../interfaces/headerProps';
import React from 'react';
class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <div className="header bg-gray-600">
                <Search onSearch={this.props.onSearch}/>
            </div>
        );
    }
};
export default Header;
