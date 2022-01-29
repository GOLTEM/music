import { SIDEBAR_OFF, SIDEBAR_ON } from "../constants/viewConstants"

export const sidebarViewReducer = (state = 'off', action) => {
    switch (action.type) {
        case SIDEBAR_ON:
            return { view: 'on' }
        case SIDEBAR_OFF:
            return { view: 'off' }
        default:
            return state
    }
}