import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import '../styles/Settings.css'

interface iHeader {
    showSettings?: boolean
}

const Header = ({ showSettings = false }: iHeader) => {
    return (
        <div className='headerContainer'>
            {showSettings && <span />}
            <h1>Unsplash API Portal</h1>
            {showSettings && <SettingsIcon onClick={() => console.log('open settings')} />}
        </div>
    )
}

export default Header
