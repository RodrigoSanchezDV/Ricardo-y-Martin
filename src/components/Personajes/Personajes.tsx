/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import type { ResultCharacter } from "~/models/Personajes";
import { TypcnGroup } from '~/icons/iconos';

import {Link} from "@builder.io/qwik-city";


export default component$(({name, image, id }: Pick<ResultCharacter,"name" | "image" | "id">) => {
    return( 
        <div class="bg-black text-center m-2 p-2 border border-green-800 relative">
            <Link rel="stylesheet" href={`/details/characters/${id}`}>
                <img src={image} alt={name} class="image-character border-green-500 border shadow-xl " />
            </Link>
            <div class="text-center mt-2 max-w">
                <Link rel="stylesheet" href={`/details/characters/${id}`} class="text-green-500">
                    {name}
                </Link>
            </div>
            <div class="absolute top-2 left-2 text-green-500 text-2xl">
                <TypcnGroup/>
            </div>  
        </div>
    )
})