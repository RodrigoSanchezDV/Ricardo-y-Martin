import { Resource, component$, useResource$, useSignal, useContext } from "@builder.io/qwik";
import Personaje from "../components/Personajes/Personajes";
// import { ApiService } from "~/Api/Fetch-Data-Characters";
import type { ResultCharacter } from "~/models/Personajes";
import { apiService } from "~/Api/ApiService";
import { SearchContextId } from "~/routes/layout";
import { TypcnArrowLeftOutline, TypcnArrowRightOutline } from '../icons/iconos';
export default component$(()=>{
    const searchQuery = useContext(SearchContextId)
   /*  const pagina = useStore({ count: 1 }); */
    const pagina = useSignal(1);
    const useResource = useResource$(async ({track})=>{
        track(pagina)
        track(searchQuery)
        const response = await apiService.getCharacters({ page: pagina.value, search: searchQuery.value })
        return response
    });
    return( 
        <Resource
            value={useResource}
            onPending={()=>
                <p>Loading.....</p>
            }
            onResolved={({results, info})=>{
                return(
                    <div class="mt-8">
                        {
                            searchQuery.value == ""?
                            <div>
                                <div class="flex justify-around">
                                    <h3 class="text-green-500 text-7xl mb-10 text-center">Todos los personajes</h3>
                                </div>
                                <div class="flex justify-start">
                                    <h5 class="text-green-500 text-md text-center border border-green-500 mb-2 p-2">Total {info.count}</h5>
                                </div>
                            </div>  

                            :
                                info && info.count > 0 ?
                                    <div>
                                    <div class="flex justify-around">
                                        <h5 class="text-green-500 text-6xl mb-10 text-center">Personajes con {searchQuery.value}</h5>
                                    </div>
                                    <div class="flex justify-start">
                                        <h5 class="text-green-500 text-md text-center border border-green-500 mb-2 p-2">Encontrados {info.count}</h5>
                                    </div>
                                    </div>
                                :
                                <div class="flex flex-wrap justify-center ">
                                    <h3 class="border border-green-500 text-green-500 p-2 text-5x1">No se encontraron personajes</h3>
                                </div>
                        }
                        {
                            results.length != 0?
                                <ul class="flex flex-wrap justify-center border border-green-500">
                                    {
                                        results.map((personajes: ResultCharacter)=>{
                                            return (
                                                <li key={personajes.id}>
                                                    <Personaje {...personajes}/>
                                                </li>
                                            )
                                    })
                                    }
                                </ul>
                            :
                            <p></p>
                        }
                        {
                            info && info.pages != undefined? 
                            info.pages > 1?
                                <div class="flex justify-center">
                                    <div class="border border-green-500 w-60 flex justify-around mt-3">
                                        <button
                                        type="button" 
                                        class="text-green-500 text-4xl"
                                        onClick$={() => {
                                            if (pagina.value > 1) {
                                                pagina.value--;
                                            }
                                        }}
                                        >
                                            <TypcnArrowLeftOutline/>
                                        </button>
                                        <p class="text-green-500 mt-3">{pagina.value}...{info.pages}</p>
                                        <button
                                            type="button"
                                            class="text-green-500 text-4xl"
                                            onClick$={() => {
                                                if (pagina.value < info.pages) {
                                                    pagina.value++;
                                                }
                                            }}
                                        >
                                            <TypcnArrowRightOutline/>
                                        </button>
                                    </div>
                                </div>
                                :
                                <p></p>
                        :
                        <p></p>
                        }
                    </div>
                )
            }}
        />
    )
})

