/* eslint-disable qwik/jsx-img */
import { Resource, component$, useResource$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import Residentes from '~/components/Personajes/Residentes-protagonistas';
import type { ResultLocations } from '~/models/Locations';
import { apiService } from '~/Api/ApiService';
{/*<img
    src="https://poptv.orange.es/wp-content/uploads/sites/3/2019/11/rick-morty-1100x618.jpg"
    alt={unaUbicacion.name}
    class="image-character"
/> */}
export default component$(() => {
    const location = useLocation();
    const id = location.params.id;
    const useResource = useResource$(() => apiService.getLocations({ id }));
    return (
        <Resource
            value={useResource}
            onPending={() => <p>Loading.....</p>}
            onResolved={(unaUbicacion: ResultLocations) => {
                return (
                    <div class="mt-10">
                        <div>
                            <div class="flex justify-around">
                                <h5 class="text-green-500 text-7xl text-center">{unaUbicacion.name}</h5>
                            </div>
                            <div class="flex justify-center text-green-500 mt-5 mb-10">
                                <div class="text-green-500">
                                    <p class="text-green-500">Tipo: {unaUbicacion.type} </p>
                                    <p class="text-green-500">Dimension: {unaUbicacion.dimension} </p>
                                    <h3 class="text-green-500">Habitantes</h3>

                                </div>
                            </div>
                            <div class="flex justify-start">
                                <h2 class="px-2 text-green-500 text-center border border-green-500 text-lg">Habitantes del planeta {unaUbicacion.name}, {unaUbicacion && unaUbicacion.residents? unaUbicacion.residents.length + ".": ""}</h2>
                            </div>
                            <div class="flex overflow-x-auto">
                                <ul  class="flex justify-center">
                                    {unaUbicacion.residents.map(
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
