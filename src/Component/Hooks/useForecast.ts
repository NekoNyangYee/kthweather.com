import { useState, useEffect, ChangeEvent, useCallback, useLayoutEffect } from "react"
import { lightTheme } from "../../Theme/Theme";
import { optionType, forecastType } from "../../types/Type";

export const useForecast = () => {
    const [term, setTerm] = useState<string>('');
    const [options, setOptions] = useState<[]>([]);
    const [city, setCity] = useState<optionType | null>(null);
    const [forecast, setForecast] = useState<forecastType | null>(null);

    const getSearchOptions = (value: string) => {
        fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()},
            &limit=5&appid=4c6111798f894eb0be9387495f2e86e6`
        )
            .then(res => res.json())
            .then(data => setOptions(data))
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setTerm(value);
        if (value === '') return
        getSearchOptions(value)
    }

    const getForecast = (city: optionType) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${city
                .lat}&lon=${city.lon}&units=metric&appid=4c6111798f894eb0be9387495f2e86e6`
        )
            .then(res => res.json())
            .then(data => {
                const forecastData = {
                    ...data.city,
                    list: data.list.slice(0, 16)
                }
                setForecast(forecastData)
            })
    }

    const onSubmit = () => {
        if (!city) return
        getForecast(city)
    }

    const onOptionSelect = (option: optionType) => {
        setCity(option)
    }

    useEffect(() => {
        if (city) {
            setTerm(city.name)
            setOptions([])
        }
    }, [city])

    const [theme, setTheme] = useState<string>('light');
    const toggleTheme = useCallback(() => {
        const updatedTheme = theme === "light" ? "dark" : "light";
        setTheme(updatedTheme);
        localStorage.setItem("theme", updatedTheme);
    }, [theme])


    return {
        term, theme, setTheme, options, forecast, onInputChange, onOptionSelect, onSubmit, toggleTheme
    }
}