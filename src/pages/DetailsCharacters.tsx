/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import type { ResultCharacter } from '~/models/Personajes';
import Episodes from '~/components/Episodes/Episodes';

// import { SearchContextId } from "~/routes/layout";
// import  {redi}
interface Props {
    resultCharacter: ResultCharacter;
}
export default component$(({resultCharacter}: Props) => {
    return (
        <div class="mt-10">
            <div class="flex justify-center">
                <div class="flex justify-center border border-green-800 p-2">
                    <img
                        src={resultCharacter.image}
                        alt={resultCharacter.name}
                        class="image-character border border-green-500"
                    />
                </div>
            </div>
            <div class="flex justify-center">
                <div class="detalles text-green-500 text-center mt-5 mb-10">
                    <p class="text-lg">{resultCharacter.name}</p>
                    <p>
                        {resultCharacter.status} - {resultCharacter.gender}
                    </p>
                    <p>Especie: {resultCharacter.species} </p>
                    <p>Origen: {resultCharacter.origin.name}</p>
                    <p>Ubicacion: {resultCharacter.location.name}</p>
                </div>
            </div>
            <div class="mt-10">
                <div class="flex justify-start">
                    <h2 class="px-2 text-green-500 text-center border border-green-500 text-lg">
                        Episodios en los que aparece {resultCharacter.name},{' '}
                        {resultCharacter && resultCharacter.episode
                            ? resultCharacter.episode.length + '.'
                            : ''}
                    </h2>
                </div>
                <div class="flex overflow-x-auto">
                    <ul class="flex justify-center">
                        {resultCharacter.episode.map((url: string, i) => {
                            return (
                                <li key={i} class="">
                                    <Episodes url={url} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
});
