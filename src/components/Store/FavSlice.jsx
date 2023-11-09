import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favs: [],
}

export const FavSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const item = state.favs.find(item => item.id === action.payload.id)

      if (item) {
        item.quantity += action.payload.quantity
      }else {
        state.favs.push(action.payload)
      }
    },
    removeFavItem : (state, action) => {
        state.favs = state.favs.filter(item => item.id !== action.payload)
    },
    resetFav : (state, action) => {
        state.favs = []
    },
  },
})

// Action creators are generated for each case reducer function
// eslint-disable-next-line react-refresh/only-export-components
export const { addToFav, removeFavItem, resetFav } = FavSlice.actions

export default FavSlice.reducer