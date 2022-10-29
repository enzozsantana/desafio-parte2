import { useEffect, useState } from "react";

export const useCities = (array) => {
    const [cities, setCities] = useState([])
    const [citiesByCountry, setCitiesByCountry] = useState([])

    useEffect(() => {
        fetch('https://amazon-api.sellead.com/city')
            .then(response => response.json())
            .then(data => setCities(data))
    }, [])

    useEffect(() => {
        let countryCodes = array.map(country => country.value)
        setCitiesByCountry(cities.filter(city => countryCodes.includes(city.country_code)))
    }, [array])

    return {
        citiesByCountry
    }
}