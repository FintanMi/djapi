import styles from  '../styles/PlaylistDropdownIcon.module.css'
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const DropdownDots = React.forwardRef(({ onClick }, ref) => (
    <i
        className='fas fa-ellipsis-h'
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));

export const DropdownIcon = () => {
    return (
        <Dropdown className="ml-auto" drop="left">
            <Dropdown.Toggle as={DropdownDots} />
  
            <Dropdown.Menu className="text-center" popperConfig={{ strategy: "fixed" }}>
                <Dropdown.Item className={styles.DropdownItem}
                    onClick={() => {}}
                    aria-label="save playlist"
                >
                    <i className="fas fa-plus-circle"></i>Save to your library
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
