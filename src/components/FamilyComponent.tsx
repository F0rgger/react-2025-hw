import {simpsons} from "../data/simpsonsList.ts";
import {ISimpson} from "../models/simpson.ts";
import '../styles/FamilyComponent.css';
import {CharacterComponent} from "./CharacterComponent.tsx";
import {FC} from "react";


export const FamilyComponent: FC = () => {
    return (
        <div className={'family'}>
            {simpsons.map((character: ISimpson) => (
                <CharacterComponent key={character.name} character={character}>
                    {character.info}
                </CharacterComponent>
            ))}
        </div>
    );
};
