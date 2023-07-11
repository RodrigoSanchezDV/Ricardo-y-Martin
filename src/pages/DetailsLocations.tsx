/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import Residentes from '~/components/Personajes/Residentes-protagonistas';
import type { ResultLocation } from '~/models/Locations';

interface Props {
    resultLocation: ResultLocation;
}

export default component$(({resultLocation}: Props) => {
    return (
        <div class="mt-10">
        <div>
            <div class="flex justify-around">
                <h5 class="text-green-500 text-7xl text-center">{resultLocation.name}</h5>
            </div>
            <div class="flex justify-center text-green-500 mt-5 mb-10">
                <div class="text-green-500">
                    <p class="text-green-500">Tipo: {resultLocation.type} </p>
                    <p class="text-green-500">Dimension: {resultLocation.dimension} </p>
                    <h3 class="text-green-500">Habitantes</h3>
                </div>
            </div>
            <div class="flex justify-start">
                <h2 class="px-2 text-green-500 text-center border border-green-500 text-lg">Habitantes del planeta {resultLocation.name}, {resultLocation && resultLocation.residents? resultLocation.residents.length + ".": ""}</h2>
            </div>
            <div class="flex overflow-x-auto">
                <ul  class="flex justify-center">
                    {resultLocation.residents.map(
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
