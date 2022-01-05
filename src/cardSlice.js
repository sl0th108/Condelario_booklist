import { createSlice } from '@reduxjs/toolkit'
import cardInfo from './frontPage/cardInfo'
let showCard = JSON.parse(localStorage.getItem('showCard'))
if(!showCard) {
    showCard = cardInfo
    localStorage.setItem("showCard", JSON.stringify(showCard))
}

export const cardSlice = createSlice({
    name: 'showCard',
    initialState: {
        showCard: showCard
    },

    reducers: {
        addInfo: (state, action) => {
            console.log(action.payload)

            state.showCard.push(action.payload)

            localStorage.setItem('showCard', JSON.stringify(state.showCard))
        }
    }
})

export const { addInfo } = cardSlice.actions;
export const selectCard = (state) => state.showCard.showCard;
export default cardSlice.reducer;