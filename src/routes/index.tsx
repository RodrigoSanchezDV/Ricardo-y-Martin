/* eslint-disable qwik/jsx-img */
import {
    component$,
    useSignal,
    useResource$,
    Resource,
    useContext
} from '@builder.io/qwik';
import type { ResultCharacter } from '~/models/Personajes';
import type { ResultLocations } from '~/models/Locations';
import type {ResultEpisodes} from '~/models/Episodes';
import { apiService } from '~/Api/ApiService';
import Personaje from '../components/Personajes/Personajes';
import Locations from '~/components/Locations/Locations';
import { SearchContextId } from './layout';
import { Link } from '@builder.io/qwik-city';
import { TypcnArrowLeftOutline, TypcnArrowRightOutline } from '~/icons/iconos';
import Episodes from '~/components/Episodes/Episodes';

export default component$(() => {
    const searchQuery = useContext(SearchContextId)
    const paginaCharacter = useSignal(1);
    const paginaLocation = useSignal(1);
    const paginaEpisode = useSignal(1);

    const useResourceCharacter = useResource$(async ({ track }) => {
        track(paginaCharacter);
        track(searchQuery);
        if (searchQuery.value) {
            const response = await apiService.search({
                query: searchQuery.value,
                path: 'character',
                page: paginaCharacter.value,
            });
            return response;
        } else {
            return { results: [] };
        }
    });

    const useResourceLocations = useResource$(async ({ track }) => {
        track(paginaLocation)
        track(searchQuery);
        // seguir => searchQuery
        if (searchQuery.value) {
            const response = await apiService.search({
                query: searchQuery.value,
                path: 'location',
                page: paginaLocation.value,
            });
            return response;
        } else {
            return { results: [] };
        }
    });

    const useResourceEpisodes = useResource$(async ({ track }) => {
        track(paginaEpisode)
        track(searchQuery);
        // seguir => searchQuery
        if (searchQuery.value) {
            const response = await apiService.search({
                query: searchQuery.value,
                path: 'episode',
                page: paginaLocation.value,
            });
            return response;
        } else {
            return { results: [] };
        }
    });

    return (
        <div>
            <div>
                {searchQuery.value != '' ? <h1>"{searchQuery}"</h1> : <h1></h1>}
                {searchQuery.value == ""? 
                <div class="flex justify-center p-9 bg-black w-full">
                    <div class="flex flex-wrap justify-evenly w-3/4 ">
                        <Link href="/locations">
                            <div class="relative mt-10">
                                <div class="w-full flex justify-center">
                                    <h2 class="w-1/3 p-1 text-center font-medium text-green-400 absolute top-4 border rounded-md border-teal-600 shadow-xl shadow-teal-300 bg-teal-800 bg-opacity-60">Ubicaciones</h2>
                                </div>
                                <img class="main-image border-2 rounded-full border-purple-800 shadow-xl shadow-green-500 hover:border-green-500 hover:shadow-purple-800 hover:border-2 transition duration-500  hover:scale-105" src="https://cdn.shopify.com/s/files/1/1568/8443/products/main_Rick_And_Morty_Alien_Space_Cruiser_Wall_Art.jpg?crop=center&height=1024&v=1651918446&width=1024" alt="" />
                            </div>
                        </Link>
                        <Link href="/characters">
                            <div class="relative mt-10">
                                <div class="w-full flex justify-center">
                                    <h2 class="w-1/3 p-1 text-center font-medium text-green-500 absolute top-4 border rounded-md border-teal-600 shadow-xl shadow-teal-300 bg-teal-800 bg-opacity-60">Personajes</h2>
                                </div>
                                <img class="custom-shadow main-image border-2 rounded-full border-purple-800 shadow-xl shadow-green-500 hover:border-green-500 hover:shadow-purple-800 hover:border-2 transition duration-500 hover:scale-105" src="../../public/images-logos/main-character-img.jpg" alt="" />
                            </div>
                        </Link>
                        <Link href="/episodes">
                            <div class="relative mt-10">
                                <div class="w-full flex justify-center">
                                    <h2 class="w-1/3 p-1 text-center font-medium text-green-500 absolute top-4 border rounded-md border-teal-600 shadow-xl shadow-teal-300 bg-teal-800 bg-opacity-60">Episodios</h2>
                                </div>
                                <img class="custom-shadow main-image border-2 rounded-full border-purple-800 shadow-xl shadow-green-500 hover:border-green-500 hover:shadow-purple-800 hover:border-2 transition duration-500 hover:scale-105" src="https://i.pinimg.com/originals/3a/2c/76/3a2c7620d168f1faff4e861c4029e84f.jpg" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
                :<></>}
                <Resource
                    value={useResourceCharacter}
                    onPending={() => <p>Loading.....</p>}
                    onResolved={({ results, info }) => {
                        return (
                            <>
                                {searchQuery.value != '' ? (
                                    <div class="flex justify-start w-full">
                                        <h2 class="px-2 text-green-500 mt-5 text-center border border-green-500 text-lg">
                                            Personajes encontrados{' '}
                                            {info && info.count
                                            ? ' ' + info.count
                                            : 0}
                                        </h2>
                                    </div>

                                ) : (
                                    ''
                                )}
                                <div class="flex overflow-x-auto" id="scroll">
                                    <ul class="flex justify-center">
                                        {results.map(
                                            (personajes: ResultCharacter) => {
                                                return (
                                                    <li key={personajes.id} class="h-50">
                                                        <Personaje
                                                            {...personajes}
                                                        />
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>

                                {info && info.pages && info.pages > 1 ? (
                                    <div class="flex justify-center ">
                                        <div class="w-60 flex justify-center">
                                            <button
                                                type="button"
                                                class="text-green-500 mx-auto text-4xl"
                                                onClick$={() => {
                                                    if (paginaCharacter.value > 1) {
                                                        paginaCharacter.value--;
                                                    }
                                                }}
                                            >
                                                <TypcnArrowLeftOutline/>
                                            </button>
                                            <p class="mt-3 text-green-500 font-semibold">{paginaCharacter.value}...{info.pages}</p>
                                            <button
                                                type="button"
                                                class="text-green-500 mx-auto text-4xl"
                                                onClick$={() => {
                                                    if (
                                                        paginaCharacter.value <
                                                        info.pages
                                                    ) {
                                                        paginaCharacter.value++;
                                                    }
                                                }}
                                            >
                                                <TypcnArrowRightOutline />
                                                
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <p></p>
                                )}
                            </>
                        );
                    }}
                />

                <Resource
                    value={useResourceLocations}
                    onPending={() => <p>Loading.....</p>}
                    onResolved={({ results, info }) => {
                        return (
                            <>
                                {searchQuery.value != '' ? (
                                    <div class="flex justify-start">
                                        <h2 class="px-2 text-green-500 mt-12 text-center border border-green-500 text-lg">
                                            Localizaciones encontradas{' '}
                                            {
                                                info && info.count
                                                ? ' ' + info.count
                                                : 0}
                                        </h2>
                                    </div>
                                ) : (
                                    ''
                                )}
                                <div class="flex overflow-x-auto" id="scroll">
                                    <ul class="flex justify-center">
                                        {results.map(
                                            (location: ResultLocations) => {
                                                return (
                                                    <li key={location.id} class="h-50">
                                                        <Locations
                                                            {...location}
                                                        />
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                                {info && info.pages && info.pages > 1 ? (
                                    <div class="flex justify-center">
                                        <div class="w-60 flex justify-center">
                                            <button
                                                type="button"
                                                class="text-green-500 mx-auto text-4xl"
                                                onClick$={() => {
                                                    if (paginaLocation.value > 1) {
                                                        paginaLocation.value--;
                                                    }
                                                }}
                                            >
                                                <TypcnArrowLeftOutline/>
                                            </button>
                                            <p class="mt-3 text-green-500 font-semibold">{paginaLocation.value}...{info.pages}</p>
                                            <button
                                                type="button"
                                                class="text-green-500 mx-auto text-4xl"
                                                onClick$={() => {
                                                    if (
                                                        paginaLocation.value <
                                                        info.pages
                                                    ) {
                                                        paginaLocation.value++;
                                                    }
                                                }}
                                            >
                                                <TypcnArrowRightOutline />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <p></p>
                                )}
                            </>
                        );
                    }}
                />

                <Resource
                    value={useResourceEpisodes}
                    onPending={() => <p>Loading.....</p>}
                    onResolved={({ results, info }) => {
                        return (
                            <>
                                {searchQuery.value != '' ? (
                                    <div class="flex justify-start">
                                        <h2 class="px-2 text-green-500 mt-12 text-center border border-green-500 text-lg">
                                            Episodios encontrados{' '}
                                            {info && info.count
                                                ? ' ' + info.count
                                                : 0}
                                        </h2>
                                    </div>
                                ) : (
                                    ''
                                )}
                                <div class="flex overflow-x-auto" id="scroll">
                                    <ul class="flex justify-center">
                                        {results.map(
                                            (episode: ResultEpisodes) => {
                                                return (
                                                    <li key={episode.id} class="h-50">
                                                        <Episodes
                                                            {...episode}
                                                        />
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                                {info && info.pages && info.pages > 1 ? (
                                    <div class="flex justify-center">
                                        <div class="w-60 flex justify-center">
                                            <button
                                                type="button"
                                                class="text-green-500 mx-auto text-4xl"
                                                onClick$={() => {
                                                    if (paginaEpisode.value > 1) {
                                                        paginaEpisode.value--;
                                                    }
                                                }}
                                            >
                                                <TypcnArrowLeftOutline/>
                                            </button>
                                            <p class="mt-3 text-green-500 font-semibold">{paginaEpisode.value}...{info.pages}</p>
                                            <button
                                                type="button"
                                                class="text-green-500 mx-auto text-4xl"
                                                onClick$={() => {
                                                    if (
                                                        paginaEpisode.value <
                                                        info.pages
                                                    ) {
                                                        paginaEpisode.value++;
                                                    }
                                                }}
                                            >
                                                <TypcnArrowRightOutline />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <p></p>
                                )}
                            </>
                        );
                    }}
                />


































































            </div>
        </div>
    );
});
