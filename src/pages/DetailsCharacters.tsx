/* eslint-disable qwik/jsx-img */
import {Resource, component$, useResource$ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city";
import { apiService } from "~/Api/ApiService";
import type { ResultCharacters } from "~/models/Personajes";
import Episodes from "~/components/Episodes/Episodes"
// import { SearchContextId } from "~/routes/layout";


export default component$ (()=>{
    // const searchQuery = useContext(SearchContextId)
    const location = useLocation()
    const id = location.params.id


    const useResource = useResource$(
        async ()=> {
            const data = await apiService.getCharacters({ id })
            // searchQuery.value = data.name
            return data
        }
    );

    return(
        <Resource
            value={useResource}
            onPending={()=><p>Loading.....</p>}
            onResolved={(unPersonaje: ResultCharacters)=>{
                console.log(unPersonaje)
                return(
                    <div class="mt-10">
                        <div class="flex justify-center">
                            <div class="flex justify-center border border-green-800 p-2">
                                <img src={unPersonaje.image} alt={unPersonaje.name} class="image-character border border-green-500" />
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <div class="detalles text-green-500 text-center mt-5 mb-10">
                                <p class="text-lg">{unPersonaje.name}</p>
                                <p>{unPersonaje.status} - {unPersonaje.gender}</p>
                                <p>Especie: {unPersonaje.species} </p>
                                <p>Origen: {unPersonaje.origin.name}</p>
                                <p>Ubicacion: {unPersonaje.location.name}</p>
                            </div>
                            
                        </div>
                        <div class="mt-10">
                            <div class="flex justify-start">
                                <h2 class="px-2 text-green-500 text-center border border-green-500 text-lg">Episodios en los que aparece {unPersonaje.name}, {unPersonaje && unPersonaje.episode? unPersonaje.episode.length + ".": ""}</h2>
                            </div>
                            <div class="flex overflow-x-auto">
                                <ul  class="flex justify-center">
                                    {unPersonaje.episode.map(
                                        (url: string, i) => {
                                            return (
                                                <li
                                                    key={i}
                                                    class=""
                                                >
                                                    <Episodes url={url}/>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }}
        />
    )



});

