import React, { useState, useEffect } from 'react'
import { Instagram, Twitter, ArrowOutwardSharp } from '@mui/icons-material'
import { SvgIcon } from '@mui/material'
import '../styles/List.css'
import UnsplashIcon from '../assets/UnsplashIcon'
import Image from './Image'

interface iList {
    images: object[]
    columns: number
}

const List = ({ images, columns }: iList) => {
    const [sortedColumnsArray, setSortedColumnsArray] = useState([])
    const [hoveredElement, setHoveredElement] = useState(null)

    // sort images horizontally while still breaking them up into columns:
    // this is to ensure that new images are displayed at the bottom of all previous images,
    // rather than being spread across the columns in non-search order.
    useEffect(() => {
        let iterator = 0
        const sorted = images.reduce((acc: any, item: object) => {
            if (iterator >= columns) {
                iterator = 0
            }
            if (!acc[iterator]) {
                acc[iterator] = []
            }
            acc[iterator].push(item)
            iterator++
            return acc
        }, [])

        setSortedColumnsArray(sorted)
    }, [images, columns])

    const getDisplayName = (imageData: any) => {
        const usernameTypes = [
            { type: 'instagram', username: imageData.instagram_username },
            { type: 'twitter', username: imageData.twitter_username },
            { type: 'unsplash', username: imageData.username }
        ]
        return usernameTypes.find(x => Boolean(x.username))
    }

    return images.length ? (
        <div className='list'>
            {sortedColumnsArray.map((group: any, groupIdx: number) => (
                <div key={groupIdx} className='masonryColumn'>
                    {group.map((image: any) => (
                        <Image image={image} displayName={getDisplayName(image.user)?.username} />
                    ))}
                </div>
            ))}
        </div>
    ) : (
        <div>No results matching your query.</div>
    )
}

export default List
