import Card from "../../components/Card/Card";
import Head from "next/head";
import { Fragment } from "react";

const Countries = ({ countries }) => {
    return (
        <main className="container">
            {countries.map((country, index) => (
                <Card country={country} key={index}></Card>
            ))}
        </main>
    );
};

export const getStaticProps = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const countries = await response.json();

    return {
        props: {
            countries: countries,
        },
    };
};

export default Countries;
