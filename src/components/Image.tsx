import React, { useState, useEffect } from 'react'
import { Instagram, Twitter, ArrowOutwardSharp } from '@mui/icons-material'
import { SvgIcon } from '@mui/material'
import '../styles/List.css'
import UnsplashIcon from '../assets/UnsplashIcon'

interface iImage {
    image: any
    displayName: string
}

const Image = ({ image, displayName }: iImage) => {
    const [hoveredElement, setHoveredElement] = useState(null)
    const [elementVisible, setElementVisible] = useState(false)

    return (
        <div
            className='imageContainer'
            style={{ opacity: elementVisible ? 1 : 0 }}
            onMouseEnter={() => setHoveredElement(image.id)}
            onMouseLeave={() => setHoveredElement(null)}
        >
            <img
                key={image.id}
                src={image.urls.regular}
                alt={image.alt_description}
                className='image'
                onLoad={() => setElementVisible(true)}
            />
            <div id={image.id} className='imageOverlay' style={{ opacity: hoveredElement === image.id ? 1 : 0 }}>
                <span className='iconWrapper'>
                    <SvgIcon fontSize='small'>
                        <UnsplashIcon />
                    </SvgIcon>
                </span>
                <span>{displayName}</span>
                <a className='profileLink' href={image.user.links.html} target='_blank'>
                    <ArrowOutwardSharp fontSize='small' />
                </a>
            </div>
        </div>
    )
}

export default Image
