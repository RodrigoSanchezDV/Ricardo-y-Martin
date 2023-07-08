/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import type { ResultCharacters } from "~/models/Personajes";
import {Link} from "@builder.io/qwik-city";
import { TypcnLocationOutline } from "~/icons/iconos";

export default component$(({name, id }: Pick<ResultCharacters,"name" | "id">) => {
    return( 
        <Link href={`/details/locations/${id}`}>
            <div class="bg-black text-center m-2 p-2 border border-green-800 w-40 relative h-16">
                <div class="">
                    <div class="text-green-500">
                        {name}
                    </div>
                    <div class="flex justify-center rotate-text">
                        <div class="absolute top-0 left-0 text-xl border-green-500">
                            <TypcnLocationOutline class="text-green-500"/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
})