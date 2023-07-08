import { component$, Slot, useStyles$, createContextId, useContextProvider, useSignal } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
// import type { RequestHandler } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';
import type { Signal } from "@builder.io/qwik";

import styles from './styles.css?inline';

// export const onGet: RequestHandler = async ({ cacheControl }) => {
//   // Control caching for this request for best performance and to reduce hosting costs:
//   // https://qwik.builder.io/docs/caching/
//   cacheControl({
//     // Always serve a cached response by default, up to a week stale
//     staleWhileRevalidate: 60 * 60 * 24 * 7,
//     // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
//     maxAge: 5,
//   });
// };



export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export const SearchContextId = createContextId<Signal<string>>("Search")

export default component$(() => {
  useStyles$(styles);
  const searchQuery = useSignal("")
  useContextProvider(SearchContextId, searchQuery)

  return (
    <div class="relative min-h-screen">
      <Header 
        onInput$={(event) => {
          searchQuery.value = (event.target as HTMLInputElement).value
        }}
        value={searchQuery.value}
        customClean$={()=>{
          searchQuery.value= ""
        }}
      />
      <main class="" id="">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
