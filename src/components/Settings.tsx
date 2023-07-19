import React, { useState } from 'react'
import { connect } from 'react-redux'
import SettingsIcon from '@mui/icons-material/Settings'
import Popover from '@mui/material/Popover'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Slider from '@mui/material/Slider'

import { updateSearchParams } from '../store/actions/search'

interface iSettings {
    orientation: string
    orderBy: string
    color: string
    resultsPerPage: number
    updateSearchParams: (key: string, value: string) => void
}

const Settings = ({ orientation, orderBy, color, resultsPerPage, updateSearchParams }: iSettings) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    const open = Boolean(anchorEl)

    return (
        <>
            <SettingsIcon onClick={(e: any) => handleClick(e)} />
            <Popover
                anchorEl={anchorEl}
                onClose={handleClose}
                open={open}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >
                <div style={{ padding: '1rem' }}>
                    <FormControl>
                        <FormLabel id='demo-controlled-radio-buttons-group'>Orientation</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby='demo-controlled-radio-buttons-group'
                            name='controlled-radio-buttons-group'
                            value={orientation}
                            onChange={e => updateSearchParams('orientation', e.target.value)}
                        >
                            <FormControlLabel value='landscape' control={<Radio />} label='Landscape' />
                            <FormControlLabel value='portrait' control={<Radio />} label='Portrait' />
                            <FormControlLabel value='squarish' control={<Radio />} label='Squarish' />
                        </RadioGroup>

                        <FormLabel id='demo-controlled-radio-buttons-group'>Order by</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby='demo-controlled-radio-buttons-group'
                            name='controlled-radio-buttons-group'
                            value={orderBy}
                            onChange={e => updateSearchParams('orderBy', e.target.value)}
                        >
                            <FormControlLabel value='relevant' control={<Radio />} label='Relevant' />
                            <FormControlLabel value='latest' control={<Radio />} label='Latest' />
                        </RadioGroup>

                        <FormLabel id='demo-controlled-results-slider'>Results per page</FormLabel>
                        <Slider
                            aria-label='Results per page'
                            defaultValue={resultsPerPage}
                            onChange={e => {
                                const target = e.target as HTMLInputElement
                                if (target) {
                                    updateSearchParams('resultsPerPage', target.value)
                                }
                            }}
                            valueLabelDisplay='auto'
                            step={5}
                            marks
                            min={10}
                            max={50}
                        />
                    </FormControl>
                </div>
            </Popover>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    orientation: state.search.orientation,
    orderBy: state.search.orderBy,
    color: state.search.color,
    resultsPerPage: state.search.resultsPerPage
})

const mapDispatchToProps = (dispatch: any) => ({
    updateSearchParams: (key: string, value: string) => dispatch(updateSearchParams(key, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
