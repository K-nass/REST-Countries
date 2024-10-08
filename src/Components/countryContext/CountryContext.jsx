import { createContext, useState } from "react";


export let countryNameContext = createContext()


export default function CountryNameContextProvider(props) {
    let [apiAll, setApiAll] = useState([])
    let [clickedCountry, setClickedCountry] = useState()




    return <countryNameContext.Provider value={{ apiAll, setApiAll, clickedCountry, setClickedCountry }}>
        {props.children}
    </countryNameContext.Provider>

}