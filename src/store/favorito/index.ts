import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type favoritoState = {
  likes: Produto[]
}

const initialState: favoritoState = {
  likes: []
}

export const favorito = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      if (state.likes.find((p) => p.id === favorito.id)) {
        state.likes = state.likes.filter((p) => p.id !== favorito.id)
      } else {
        state.likes.push(favorito)
      }
    }
  }
})

export const { adicionarFavorito } = favorito.actions

export default favorito.reducer
