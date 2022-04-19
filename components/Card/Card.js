import Image from "next/image";
import Link from "next/link";

const Card = ({ country }) => {
    const { name, population, region, capital, flag, alpha3Code } = country;

    return (
        <Link href={"countries/" + alpha3Code} passHref>
            <div className="card">
                <div className="card__imageholder">
                    <Image
                        src={flag}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                    ></Image>
                </div>
                <div className="card__content">
                    <h1>{name}</h1>

                    <div>
                        <h2>Population:</h2>
                        <h3>{population}</h3>
                    </div>
                    <div>
                        <h2>Region:</h2>
                        <h3>{region}</h3>
                    </div>
                    <div>
                        <h2>Capital:</h2>
                        <h3>{capital}</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
