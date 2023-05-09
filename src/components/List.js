import React, { useState, useEffect } from 'react'
import '../styles/List.css'

const List = ({ images, columns }) => {
    const [sortedColumnsArray, setSortedColumnsArray] = useState([])

    // sort columns horizontally across columns while still breaking them up into columns
    // this is to ensure that new images are displayed at the bottom of all previous images,
    // rather than being spread across the columns in non-search order
    useEffect(() => {
        let iterator = 0
        const sorted = images.reduce((acc, item) => {
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

    return images.length ? (
        <div className='list'>
            {sortedColumnsArray.map((group, groupIdx) => (
                <div key={groupIdx} className='masonryColumn'>
                    {group.map((image, imgIdx) => (
                        <img key={imgIdx} src={image.urls.regular} alt={image.alt_description} className='image' />
                    ))}
                </div>
            ))}
        </div>
    ) : (
        <div>No results matching your query.</div>
    )
}

export default List
