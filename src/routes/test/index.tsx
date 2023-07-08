/* eslint-disable qwik/jsx-img */
// import type { Signal } from '@builder.io/qwik';
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

// useContextProvider
// interface Props {
//     onInput$: (event: Event) => void;
//     value: Signal;
// }
// export const SearchContextId = createContextId<Signal<string>>("Search")

export default component$(() => {
    const count = useSignal(0);
    useVisibleTask$(({ track }) => {
      track(count);
      setTimeout(() => {
        count.value = 10
      }, 2000)
    })
    return <button class="mt-14">{count.value}</button>
  });