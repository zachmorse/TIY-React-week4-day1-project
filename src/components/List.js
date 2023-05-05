import React from 'react'
import { chunk } from 'lodash'
import { useMediaQuery } from 'react-responsive'
import '../styles/List.css'

const List = ({ images }) => {
    const tripleColumn = useMediaQuery({ query: '(min-width: 1201px)' })
    const doubleColumn = useMediaQuery({ query: '(max-width: 1200px)' })
    const columns = tripleColumn ? 3 : doubleColumn ? 2 : 1

    const sortedColumnsArray = chunk(images, Math.ceil(images.length / columns))

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
