import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import Button from '@mui/material/Button'
import { updateQuery, searchPhotos, retrieveMorePhotos, removePreviousQuery } from './store/actions/search'
import { updateColumns } from './store/actions/list'
import { createTheme, ThemeProvider } from '@mui/material'

import List from './components/List'
import Form from './components/Form'
import PreviouslySearched from './components/PreviouslySearched'
import './styles/App.css'

const theme = createTheme({
    typography: {
        fontFamily: ['Poppins'].join(',')
    }
})

interface iApp {
    query: string
    images: object[]
    previouslySearched: string[]
    updateQuery: (query: string) => void
    searchPhotos: (query: string) => void
    isInitialSearch: boolean
    retrieveMorePhotos: (searchTerm: string) => void
    removePreviousQuery: (query: string) => void
    updateColumns: (number: number) => void
    columns: number
}

const App = ({
    query,
    images,
    previouslySearched,
    updateQuery,
    searchPhotos,
    isInitialSearch,
    retrieveMorePhotos,
    removePreviousQuery,
    updateColumns,
    columns
}: iApp): JSX.Element => {
    const singleColumn = useMediaQuery({ query: '(max-width: 800px)' })
    const doubleColumn = useMediaQuery({ query: '(max-width: 1050px)' })
    

    useEffect(() => {
        const columns = singleColumn ? 1 : doubleColumn ? 2 : 3
        updateColumns(columns)
    }, [singleColumn, doubleColumn])

    return (
        <ThemeProvider theme={theme}>
            <div className='App'>
                <div className='controlsContainer'>
                    <h1>Unsplash API Portal</h1>
                    <Form query={query} searchPhotos={searchPhotos} updateQuery={updateQuery} />
                    <PreviouslySearched
                        previouslySearched={previouslySearched}
                        searchPhotos={searchPhotos}
                        removePreviousQuery={removePreviousQuery}
                    />
                </div>
                {isInitialSearch ? (
                    <div>Enter a search term above, and hit enter to begin.</div>
                ) : (
                    <List images={images} columns={columns} />
                )}
                {images.length ? (
                    <div className='loadMoreContainer'>
                        <Button
                            variant='outlined'
                            onClick={() => retrieveMorePhotos(previouslySearched[previouslySearched.length - 1])}
                        >
                            Load More
                        </Button>
                    </div>
                ) : null}
            </div>
        </ThemeProvider>
    )
}

const mapStateToProps = (state: any) => ({
    query: state.search.query,
    images: state.search.images,
    previouslySearched: state.search.previouslySearched,
    isInitialSearch: state.search.isInitialSearch,
    columns: state.list.columns
})

const mapDispatchToProps = (dispatch: any) => ({
    updateQuery: (queryString: string) => dispatch(updateQuery(queryString)),
    searchPhotos: (query: string) => dispatch(searchPhotos(query)),
    retrieveMorePhotos: (query: string) => dispatch(retrieveMorePhotos(query)),
    updateColumns: (payload: number) => dispatch(updateColumns(payload)),
    removePreviousQuery: (query: string) => dispatch(removePreviousQuery(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
