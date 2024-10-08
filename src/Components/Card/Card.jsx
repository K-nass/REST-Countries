import React, { useContext } from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'
import { countryNameContext } from '../countryContext/CountryContext'



export default function Card({ flag, officialName, population, region, capital, id }) {

    const { apiAll, setClickedCountry} = useContext(countryNameContext);

    function getId() {
        const clickedCountry = apiAll.filter((item) => item.cca3 == id);
        setClickedCountry(clickedCountry);
    }

    return (
        <div className='col-sm-12 col-lg-3 col-md-6 mb-3'>
            <div className={`${style.cardCountry}`}>
                <div style={{ width: '230x', height: '200px' }}>
                    <Link to={'CardDetails'} onClick={getId}>
                        <img className='w-100 h-100' src={flag} alt="" />
                    </Link>
                </div>
                <ul className='p-2 d-flex flex-column pb-4'>
                    <li className='list-group-item'>
                        <h2 className='h6'>{officialName}</h2>
                    </li>
                    <li className={`${style.countryInfo} list-group-item`}>
                        population: <span className={`${style.countryInfoItem}`}>{population}</span>
                    </li>
                    <li className={`${style.countryInfo} list-group-item`}>
                        region: <span className={`${style.countryInfoItem}`}>{region}</span>
                    </li>
                    <li className={`${style.countryInfo} list-group-item`}>
                        capital: <span className={`${style.countryInfoItem}`}>{capital}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
