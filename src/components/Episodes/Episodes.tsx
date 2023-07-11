/* eslint-disable qwik/jsx-img */
import { Resource,component$, useResource$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
/* import type { ResultLocation } from "~/models/Locations"; */
/* import type { ResultCharacter } from "~/models/Personajes"; */
import { apiService } from "~/Api/ApiService";
import { TypcnDeviceDesktop } from '~/icons/iconos';

interface Props {
    url: string
}

export default component$((props: Props) => {
    const useResource = useResource$(()=>apiService.getEpisode({url:props.url}));
    return( 
        <Resource
            value={useResource}
            onPending={()=>
                <p>Loading.....</p>
            }
            onResolved={({name,air_date, episode, id})=>{
                return(
                    <Link href={`/details/episodes/${id}`}>
                        <div class="text-center m-2 p-2 border border-green-800 w-40 relative h-36">
                            <div class="text-green-500">
                                <h2 class="text-lg">{name}</h2>
                                <h2 class="text-sm">{air_date}</h2>
                                <h2 class="text-sm">{episode}</h2>
                            </div>
                            <div class="absolute top-0 left-0 text-green-500">
                                <TypcnDeviceDesktop/>
                            </div>
                        </div>
                    </Link>
                )   
            }}
        />
    )
})