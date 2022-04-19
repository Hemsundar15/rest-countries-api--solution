const CountryDetails = ({ countryDetails }) => {
    console.log(countryDetails);

    return (
        <div>
            <h1>{countryDetails.name}</h1>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const countryCode = context.params.countryCode;
    const response = await fetch(
        `https://restcountries.com/v2/alpha/${countryCode}`
    );
    const countryDetails = await response.json();

    return {
        props: {
            countryDetails: countryDetails,
        },
    };
};

export default CountryDetails;
