import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Toggle from 'react-toggle';
import "react-toggle/style.css"
import { forecastContex } from './forecastContext';

function MenuApp(){
    const forecast = useContext(forecastContex);
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className='menu'>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <MenuIcon/>
        </Button>  
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        >
            <MenuItem>
                <Toggle
                    checked={forecast.metric === 'C' ? false : true}
                    onChange={() => forecast.setMetric(forecast.metric === 'C' ? 'F' : 'C')}
                    className='metricToggler'
                    icons={{
                        checked: 'C',
                        unchecked: 'F',
                        }}
                />
            </MenuItem>
            <MenuItem onClick={handleClose}>Soon...</MenuItem>
        </Menu>
        </div>
    );
}

export default MenuApp;