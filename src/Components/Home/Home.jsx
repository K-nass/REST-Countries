import React, { useContext, useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios';
import Card from '../Card/Card';
import { countryNameContext } from '../countryContext/CountryContext';



export default function Home() {
    const { apiAll, setApiAll } = useContext(countryNameContext)
    const [searchInput, setSearchInput] = useState('')
    const [regionInput, setRegionInput] = useState('')
    const [filteredCountries, setFilteredCountries] = useState(apiAll)

    useEffect(() => {
        axios.get(' https://restcountries.com/v3.1/all ')
            .then(
                (res) => {
                    setApiAll(res.data)
                    setFilteredCountries(res.data)
                })
            .catch((res) => console.log(res.status))
    }, [])


    useEffect(() => {
        const filterRes = apiAll.filter(
            (item) => item.name.common.toLowerCase().includes(searchInput.toLowerCase()) &&
                (regionInput === '' || item.region.toLowerCase() === regionInput.toLowerCase())
        );
        setFilteredCountries(filterRes)
    }, [apiAll, searchInput, regionInput])


    function handleChangeSearch(e) {
        setSearchInput(e.target.value)
    }


    function handleChangeRegion(e) {
        setRegionInput(e.target.value)
    }


    return (
        <main className={`${style.home}`}>
            <div className="container">
                <div className=' d-flex justify-content-between flex-column flex-lg-row flex-md-row'>
                    <div className='position-relative mt-4'>
                        <input className={`${style.inputCountry}  border-0 ps-3 pe-5 p-2 text-white`} type="text" placeholder='Search for a country...' value={searchInput} onChange={handleChangeSearch} />
                    </div>
                    <div>
                        <select value={Option.value} className={`border-0 ${style.selectCountry} mt-4 p-2 pe-4 rounded`} onChange={handleChangeRegion}>
                            <option value='' className='d-none'>Filter by Rejoin</option>
                            <option value="Africa">Africa</option>
                            <option value="America">America</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="row">
                        {filteredCountries ? filteredCountries.map((item) => <Card
                            key={item.cca3}
                            flag={item.flags.png}
                            officialName={item.name.official}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                            id={item.cca3} />) : null}
                    </div>
                </div>
            </div>
        </main>
    )
}



// - See all countries from the API on the homepage - (done)
// - Search for a country using an `input` field - (in progress)
// - Filter countries by region - (in progress)
// - Click on a country to see more detailed information on a separate page - (done)

