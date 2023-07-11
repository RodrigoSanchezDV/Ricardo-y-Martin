/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { TypcnBackspaceOutline, TypcnHomeOutline } from '~/icons/iconos';
interface Props {
    onInput$: (event: Event) => void;
    customClean$: () => void;
    value: string;
}
// export const SearchContextId = createContextId<Signal<string>>("Search")

export default component$((props: Props) => {
    // const searchQuery = useSignal('')

    return (
        <div class="h-40 relative bg-black">
            <div> <img src="/images-logos/HeaderBackground.png" alt="" class="h-full w-full overflow-hidden absolute"/> </div>
            <div class="h-full">
                <div class="relative z-10">
                    <img
                        src="/images-logos/rym.png"
                        alt="rick"
                        width="250"
                        class="mx-auto my-auto"
                    />
                </div>
                <div class="flex items-center justify-center">
                    <div class="w-1/2 relative group">
                        <input
                            type="text"
                            class=" px-4 w-full h-10 focus:outline-none transition-all duration-500 bg-transparent text-green-500 hover:bg-green-500 hover:placeholder-black hover:text-black font-semibold place-content-start placeholder-green-500 placeholder-10px border border-green-500"
                            placeholder="Buscar..."
                            onInput$={props.onInput$}
                            value={props.value}
                        />
                        <button
                            onClick$={props.customClean$}
                            class="text-green-500 absolute right-5 top-3 font-bold group-hover:text-black transition-all duration-500"
                        >
                            <TypcnBackspaceOutline/>
                        </button>
                        <div class="flex justify-center">
                            <div class="text-green-500 text-3xl mt-3">
                                <Link href="/">
                                    <TypcnHomeOutline class=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
