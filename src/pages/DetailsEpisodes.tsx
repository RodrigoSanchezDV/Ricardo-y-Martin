/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import Residentes from '~/components/Personajes/Residentes-protagonistas';
import type { ResultEpisode } from '~/models/Episodes';


interface Props {
    resultEpisode: ResultEpisode;
}

export default component$(({resultEpisode}:Props) => {
    return (
        <div class="mt-10">
                        <div>
                            <div class="flex justify-around">
                                <h5 class="text-green-500 text-7xl text-center">{resultEpisode.name}</h5>
                            </div>
                            <div class="flex justify-center mt-5 mb-10">
                                <div class="detalles">
                                    <p class="text-green-500">Fecha de lanzamiento: {resultEpisode.air_date} </p>
                                    <p class="text-green-500">Episodio: {resultEpisode.episode} </p>
                                </div>
                            </div>
                            <div class="flex justify-start">
                                <h2 class="px-2 text-green-500 text-center border border-green-500 text-lg">Protagonistas del episodio {resultEpisode.name}, {resultEpisode && resultEpisode.characters? resultEpisode.characters.length + ".": ""}</h2>
                            </div>
                            <div class="flex overflow-x-auto">
                                <ul  class="flex justify-center">
                                    {resultEpisode.characters.map(
                                        (url: string, i) => {
                                            return (
                                                <li
                                                    key={i}
                                                    class=""
                                                >
                                                    <Residentes url={url} />
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
    );
});