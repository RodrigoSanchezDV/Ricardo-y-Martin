/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import { useNavigate } from "@builder.io/qwik-city";

interface Props {
    miCustomFunction$: (e: Event) => void;
    value: string
}

// Index => Search => Input

export default component$((props: Props) => {
    

    const navigate = useNavigate()
    return(
        <div
            class={`bg-black h-40 backdrop-blur-xl`}
        >
            <div class="relative"><img src="../../../public/images-logos/rym.png" alt="rick" width="250" class="absolute top-12 left-0 right-0 bottom-0 mx-auto my-auto"/></div>
            {/* <div class=""><img src="../../../public/images-logos/pepino.png" alt="rick" width="100" class="absolute bottom-0 right-0 "/></div> */}
            <div class="flex items-center justify-center h-full bg-black">
                <div class="w-1/2">
                    <input
                        type="text"
                        class="py-2 px-4 w-full h-12 rounded-full focus:outline-none transition-all duration-500 bg-green-500 hover:bg-white hover:text-black font-semibold place-content-start placeholder-black placeholder-10px text-pink-400"
                        placeholder="Buscar..."
                        onInput$={props.miCustomFunction$}
                        value={props.value}
                    />
                </div>
            </div>
            <div class="flex items-center justify-around bg-pink-400 pb-1 pt-1">
                <div class="w-1/3 flex  flex-wrap items-center justify-around">
                    <button class="px-4 py-2 rounded-full focus:outline-none transition-all duration-500 bg-green-500 hover:bg-white hover:text-black font-semibold"
                        onClick$={()=>{navigate("/characters")}}
                        type="button"
                    >
                        Personajes
                    </button>
                    <button class="px-4 py-2 rounded-full focus:outline-none transition-all duration-500 bg-green-500 hover:bg-white hover:text-black font-semibold"
                        onClick$={()=>{navigate("/locations")}}
                        type="button"
                    >
                        Ubicaciones
                    </button>
                </div>
            </div>
        </div>
    )
});
