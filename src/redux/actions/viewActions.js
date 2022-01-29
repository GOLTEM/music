import { SIDEBAR_OFF, SIDEBAR_ON } from "../constants/viewConstants"

export const turnon_sidebar = () => (dispatch) => {
    dispatch({
        type: SIDEBAR_ON,
    })
}

export const turnoff_sidebar = () => (dispatch) => {
    dispatch({
        type: SIDEBAR_OFF,
    })
}