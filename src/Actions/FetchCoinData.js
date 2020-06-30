import axios from "axios";
import { apiBaseURL } from "./../Utils/Constants";
import { FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL } from './../Utils/ActionTypes';

export default function FetchCoinData() {
    return dispatch => {

        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(`${apiBaseURL}/api/v3/coins/markets?vs_currency=usd&per_page=10&sparkline=false&price_change_percentage=24h%2C7d`)
            .then(res => {
                dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
            });

    }
}