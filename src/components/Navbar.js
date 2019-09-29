import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({titulo}) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">{titulo}</a>
        </nav>
     );
}

Navbar.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Navbar;