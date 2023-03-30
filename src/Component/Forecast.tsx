import { useState } from "react";
import styled from "styled-components";
import { transform } from "typescript";

const NowWeather = styled.h1`
    font-size: 52px;
    margin: 0;
`;

const TimeWeather = styled.div`
    background: ${({ theme }: { theme: any }) => theme.boxColor}; 
    border-radius: 21px;
    margin: 12px;
`;

const MoreWeatherTitle = styled.div`
font-weight: bold;
    padding: 2vh;
    color: #8A8A8A;
`;

const WeatherList = styled.div`
    width: auto;
    height: auto;
    margin: 10px;
    text-align: center;
    @media screen and (orientation: landscape) {
        width: 18vh;
    }
`;

const ListIcon = styled.img`
    width: 9vh;
    @media screen and (max-width: 500px) {
        width: 8vh;
    }
    @media screen and (orientation: landscape) {
        width: 15vh;
    }
`;

const WeatherCountry = styled.p`
    font-size: 29px;
    font-weight: bold;
    margin-top: 5px;
`;

const PresentWeather = styled.div`
    height: auto;
    margin: 12px;
    @media screen and (orientation: landscape) {
        font-size: 15px;
     }
`;

const NowWeatherIcon = styled.img`
    position: relative;
    bottom: 80px;
    float: right;
    width: 120px;
`;

const SunInfo = styled.div`
    width: 50%;
    height: auto;
    margin: 10px;
    padding: 15px;
    background: ${({ theme }: { theme: any }) => theme.boxColor};
    border-radius: 21px;
    overflow: hidden;
    text-align: center;
`;

const BoxContainer = styled.div`
    display: flex;
`;

const SunTime = styled.h1`
    margin: 0 0 12px 0;
    font-size: 34px;
    text-align: left;
    @media screen and (max-width: 480px) {
        font-size: 25px;
     }
`;

const WindIcon = styled.img`
    width: 52px;
    margin: 10px;
`;

const BoxTitle = styled.p`
    margin-top: 0;
    text-align: left;
    font-weight: bold;
    color: #8A8A8A;
`;

const WeatherTime = styled.p`
    margin-top: 0;
    font-weight: bold;
`;

const FeelLike = styled.img`
    width: 35px;
`;

const SunImg = styled.img`
    width: 10vh;
    @media screen and (max-height: 450px) {
        width: 20vh;
    }
`;

const MoreWeather = styled.div`
    width: auto;
    height: auto;
    display: flex;
    overflow-x: scroll;
`;

const InfoContainer = styled.div`
    padding: 12px;
    height: auto;
    margin: 12px 12px 10vh 12px;
    border-radius: 12px;
    background: ${({ theme }: { theme: any }) => theme.boxColor};
    @media screen and (max-width: 450px) {
        font-size: 13px;
    }
`;

const InfoLeft = styled.div`
    float: right;
`;

const InfoRight = styled.div`
    color: #8A8A8A;
`;

const LinkWeb = styled.a`
    text-decoration: none;
    color: #8A8A8A;
`;

export const Forecast = ({ data }: any): JSX.Element => {

    const today = data.list[0]
    const Degree = ({ temp }: { temp: number }): JSX.Element => (
        <>
            {temp}
            <sup>°</sup>
        </>
    )

    const getSunTime = (timestamp: number): string => {
        const date = new Date(timestamp * 1000);
        let meridiem: string = '오전';
        let hours: number = date.getHours();
        let minutes: number = date.getMinutes();

        if (hours > 12) {
            meridiem = '오후';
            hours = hours - 12
        }

        return `${meridiem} ${hours}:${minutes}`;
    }

    const NowDays = () => {
        const date = new Date();
        let meridiem: string = '오전';
        let hours: number = date.getHours();
        let minutes: number | string = date.getMinutes();
        let nowMonth: number = date.getMonth();
        let nowDate: number = date.getDate();

        if (hours > 12) {
            meridiem = '오후';
            hours -= 12
        }

        if (minutes < 10) {
            minutes = `0${minutes}`
        }

        return `${nowMonth + 1}월 ${nowDate}일 ${meridiem} ${hours}:${minutes}`;
    }

    const getDay = () => {
        const date = new Date();
        const day: number | string = date.getDay().toString();
        const returnDay = day === '0' ? '일요일' : day === '1' ? '월요일' : day === '2' ? '화요일' : day === '3' ? '수요일' : day === '4' ? '목요일' : day === '5' ? '금요일' : '토요일'

        return returnDay
    }
    return (
        <>
            <PresentWeather>
                <NowWeather>
                    <Degree temp={Math.round(today.main.temp)} />
                </NowWeather>
                <WeatherCountry>{data.name}, ({data.country})</WeatherCountry>
                <NowWeatherIcon src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`} />
                <p>{today.weather[0].description} ({today.weather[0].main})</p>
                <p>최고: <Degree temp={Math.ceil(today.main.temp_max)} /> 최저: <Degree temp={Math.floor(today.main.temp_min)} /></p>
            </PresentWeather>
            <p>{data.name}의 현재 날씨는 {today.weather[0].main}입니다.</p>
            <TimeWeather>
                <MoreWeatherTitle>시간별 일기예보</MoreWeatherTitle>
                <MoreWeather>
                    {data.list.map((itm: any, i: any) => (
                        <WeatherList key={i}>
                            <WeatherTime>{i === 0 ? '지금' : `${new Date(itm.dt * 1000).getHours()}시`}</WeatherTime>
                            <ListIcon src={`http://openweathermap.org/img/wn/${itm.weather[0].icon}@2x.png`} />
                            <Degree temp={Math.round(itm.main.temp)} />
                        </WeatherList>
                    ))
                    }
                </MoreWeather>
            </TimeWeather>
            <BoxContainer>
                <SunInfo>
                    <BoxTitle>일출</BoxTitle>
                    <SunTime>{getSunTime(data.sunrise)}</SunTime>
                    <SunImg src="./img/sunrise.svg" />
                </SunInfo>
                <SunInfo>
                    <BoxTitle>일몰</BoxTitle>
                    <SunTime>{getSunTime(data.sunset)}</SunTime>
                    <SunImg src="./img/sunset.svg" />
                </SunInfo>
            </BoxContainer>
            <BoxContainer>
                <SunInfo>
                    <BoxTitle>풍속</BoxTitle>
                    <SunTime>{today.wind.speed}m/s</SunTime>
                    <WindIcon src="./img/wind.svg" />
                </SunInfo>
                <SunInfo>
                    <BoxTitle>체감온도</BoxTitle>
                    <SunTime>{Math.round(today.main.feels_like)}°</SunTime>
                    <FeelLike src="./img/feellike.svg" />
                </SunInfo>
            </BoxContainer>
            <BoxContainer>
                <SunInfo>
                    <BoxTitle>습도</BoxTitle>
                    <SunTime>{today.main.humidity} %</SunTime>
                    <WindIcon src="./img/Humidity.svg" />
                </SunInfo>
                <SunInfo>
                    <BoxTitle>기압</BoxTitle>
                    <SunTime>{today.main.pressure} hPa</SunTime>
                    <WindIcon src="./img/pressure.svg" />
                </SunInfo>
            </BoxContainer>
            <InfoContainer>
                <InfoLeft>
                    <LinkWeb href="https://openweathermap.org/">제공: OpenWeather</LinkWeb>
                </InfoLeft>
                <InfoRight>
                    {getDay()}, {NowDays()} (KST 기준)
                </InfoRight>
            </InfoContainer>

        </>
    )

}
