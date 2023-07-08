/* eslint-disable qwik/jsx-img */
import { Resource,component$, useResource$ } from "@builder.io/qwik";
/* import type { ResultLocations } from "~/models/Locations"; */
/* import type { ResultCharacter } from "~/models/Personajes"; */
import { apiService } from "~/Api/ApiService";
import { Link } from "@builder.io/qwik-city";

interface Props {
    url: string
}

export default component$((props: Props) => {
    const useResource = useResource$(()=>apiService.getResidente({url:props.url}));
    return( 
        <Resource
            value={useResource}
            onPending={()=>
                <p>Loading.....</p>
            }
            onResolved={({name,image,id})=>{
                return(
                    <div class="text-center m-2 p-2 border border-green-800">
                        <Link href={`/details/characters/${id}`}>
                            <img src={image} alt="" class="image-character border-green-500 border shadow-xl mb-2"/>
                        </Link>
                        <Link href={`/details/characters/${id}`} class="text-green-500">{name}</Link>
                    </div>
                )   
            }}
        />
    )
})