import { useEffect, useState } from "react";
import axios from "axios";

export const useCountries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://amazon-api.sellead.com/country')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])

    return {
        countries
    }
}