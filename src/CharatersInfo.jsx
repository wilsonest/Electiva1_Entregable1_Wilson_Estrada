import { useState } from 'react';
import { getData } from './helper/getData';

export const InfoCharaters = () => {
    const [characters, setCharacters] = useState([]);

    const url = 'https://dragonball-api.com/api/characters';

    const onButtonClick = async () => {
    try {
        const response = await getData(url);
        if (response && response.items && response.items.length > 0) {
            const data = response.items.slice(0, 3);
            setCharacters(data);
        } else {
            console.log("No hay datos disponibles en la respuesta.");
        }
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
};


    return (
        <div className="container mt-5">
            <h1 className="text-center">Dragon Ball Tdea</h1>
            <div className="text-center">
                <button onClick={onButtonClick} className="btn btn-primary">
                    Mostrar Información
                </button>
            </div>
            <div className="row mt-4">
                {characters.map((character, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img
                                src={character.image}
                                className="card-img-top"
                                alt={character.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text">
                                    <strong>Raza:</strong> {character.race}
                                </p>
                                <p className="card-text">
                                    <strong>Descripción:</strong> {character.description}
                                </p>
                                <p className="card-text">
                                    <strong>Ki:</strong> {character.ki}
                                </p>
                                <p className="card-text">
                                    <strong>Afiliación:</strong> {character.affiliation}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
