import {ISimpson} from "../models/simpson.ts";
import {FC} from "react";
import '../styles/CharacterComponent.css';



interface CharacterProps {
    character: ISimpson;
    children?: string;
}

export const CharacterComponent: FC<CharacterProps> = ({character, children}) => {
    return (
        <div className={'character'}>
            <img src={character.photo} alt={`${character.name} ${character.surname}`} className={'character-photo'}/>
            <div className={'character-details'}>
                <h2>{character.name} {character.surname}</h2>
                <p><strong>Age:</strong> {character.age}</p>
                <p>{children}</p>
            </div>
        </div>
    );
};
