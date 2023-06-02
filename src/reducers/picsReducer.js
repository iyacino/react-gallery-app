/* eslint-disable default-case */

const picsReducer = (state, action) =>{
    switch (action.type){
        case'adding-pic': {
            return {
                ...state,
                pics: [action.payload.path, ...state.pics]
            }
        }
        case'fill-inputs': {
            return {
                ...state,
                inputs: {
                    title: action.payload.title,
                    file: action.payload.file, 
                    path: action.payload.path
                }
            }
        }
        case'clicking-add': {
            return {
                ...state,
                isVisible: !state.isVisible
            }
        }
        default: return state
    }
}

export default picsReducer

// const initialState = {
//     pics: [],
//     isVisible: false,
//     count: null,
//     inputs: {
//       title: '',
//       file: null,
//       path: null
//     }
//   }