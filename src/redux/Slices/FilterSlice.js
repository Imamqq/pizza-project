import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    currenPage: 1,
    sort: {
        name: "популярности",
        sort: "rating"
    },
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setSort(state, action) {
            state.sort = action.payload
        },
        setCurrentPage(state, action) {
            state.currenPage = action.payload
        },
    },
})

export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer