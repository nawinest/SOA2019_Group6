import {LIST_MECHANIC} from '../actions/type'


const initialState = {
    mechanic : []
}

export default function(state=initialState, action){
    const {type , payload} = action
    switch(type){
        case LIST_MECHANIC:
            return {
                mechanic: payload
            }
    }

}