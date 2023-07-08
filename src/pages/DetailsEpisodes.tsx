/* eslint-disable qwik/jsx-img */
import { Resource, component$, useResource$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import Residentes from '~/components/Personajes/Residentes-protagonistas';
import type { ResultEpisodes } from '~/models/Episodes';
import { apiService } from '~/Api/ApiService';
{/*<img
    src="https://poptv.orange.es/wp-content/uploads/sites/3/2019/11/rick-morty-1100x618.jpg"
    alt={unaUbicacion.name}
    class="image-character"
/> */}
export default component$(() => {
    const location = useLocation();
    const id = location.params.id;
    const useResource = useResource$(() => apiService.getEpisodes({ id }));
    return (
        <Resource
            value={useResource}
            onPending={() => <p>Loading.....</p>}
            onResolved={(unEpisodio: ResultEpisodes) => {
                return (
                    <div class="mt-10">
                        <div>
                            <div class="flex justify-around">
                                <h5 class="text-green-500 text-7xl text-center">{unEpisodio.name}</h5>
                            </div>
                            <div class="flex justify-center mt-5 mb-10">
                                <div class="detalles">
                                    <p class="text-green-500">Fecha de lanzamiento: {unEpisodio.air_date} </p>
                                    <p class="text-green-500">Episodio: {unEpisodio.episode} </p>
                                </div>
                            </div>
                            <div class="flex justify-start">
                                <h2 class="px-2 text-green-500 text-center border border-green-500 text-lg">Protagonistas del episodio {unEpisodio.name}, {unEpisodio && unEpisodio.characters? unEpisodio.characters.length + ".": ""}</h2>
                            </div>
                            <div class="flex overflow-x-auto">
                                <ul  class="flex justify-center">
                                    {unEpisodio.characters.map(
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
            }}
        />
    );
});