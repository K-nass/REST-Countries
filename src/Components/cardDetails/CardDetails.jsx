import React, { useContext, useEffect, useState } from 'react'
import { countryNameContext } from '../countryContext/CountryContext';
import style from './CardDetails.module.css'
import { useNavigate } from 'react-router-dom';


export default function CardDetails() {

  const { clickedCountry } = useContext(countryNameContext);

  const navigate = useNavigate();
  const [{ name, population, region, subregion, capital, tld, currencies, languages, flags}] = clickedCountry;
  const keysLanguages = Object.keys(languages);
  const firstCommonLangKey = keysLanguages.find(item => name.nativeName[item]?.common)
  const nativeName = firstCommonLangKey ? name.nativeName[firstCommonLangKey].common : 'native name not found';


console.log(clickedCountry);

  return (
    <div className={`${style.cardCountryContainer}`}>
      <div className="container">
        <div className='mt-5'>
          <button className={`btn text-white shadow-lg ${style.cardCountry} ps-3 pe-3`} onClick={() => { navigate('/') }}> Back</button>
        </div>

        <div className={`row`}>

          <div className={`col-lg-4 mt-5`}>
            <img src={flags.png} className='w-100' alt={name}/>
            
          </div>

          <ul className={`col-lg-3 list-group ${style.gridGroup} ms-lg-5 mt-lg-5`}>
            <li className={`list-group-item border-0 bg-transparent text-nowrap ${style.cardCountryInfo}`}><h2 className={`text-nowrap ${style.cardCountryInfo}`}>{name.common}</h2></li>
            <li className={`list-group-item border-0 bg-transparent text-nowrap ${style.cardCountryInfo}`}>Native Name:  <span className={style.countryInfoItem}>{nativeName}</span></li>
            <li className={`list-group-item border-0 bg-transparent text-nowrap ${style.cardCountryInfo}`}>population: <span className={style.countryInfoItem}>{population}</span></li>
            <li className={`list-group-item border-0 bg-transparent text-nowrap ${style.cardCountryInfo}`}>Region: <span className={style.countryInfoItem}>{region}</span></li>
            <li className={`list-group-item border-0 bg-transparent text-nowrap ${style.cardCountryInfo}`}>subRegion: <span className={style.countryInfoItem}>{subregion}</span></li>
            <li className={`list-group-item border-0 bg-transparent text-nowrap ${style.cardCountryInfo}`}>capital: <span className={style.countryInfoItem}>{capital}</span></li>
          </ul>

          <ul className={`col-lg-3  mt-lg-5 list-group ms-lg-5 pt-lg-5 mt-lg-5 mt-md-3 mt-sm-3`}>
            <li className={`list-group-item border-0 bg-transparent text-nowrap ${style.cardCountryInfo}`}>Top Level Domain: <span className={style.countryInfoItem}>{tld}</span></li>
            <li className={`list-group-item border-0 bg-transparent text-nowrap  ${style.cardCountryInfo}`}>currencies: <span className={style.countryInfoItem}>{Object.values(currencies)[0].name}</span></li>
            <li className={`list-group-item border-0 bg-transparent ${style.cardCountryInfo}`}>languages: <span className={style.countryInfoItem}>{Object.values(languages).length >= 1 ? Object.values(languages).join() : 'languages not found'}</span></li>
          </ul>

        </div>
      </div>
    </div>

  )
}
