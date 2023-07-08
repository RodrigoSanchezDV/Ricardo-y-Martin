import { component$ } from '@builder.io/qwik';
import type { RequestHandler, RequestEvent} from "@builder.io/qwik-city/middleware/request-handler";
import Details from "~/pages/DetailsCharacters"
import { apiService } from '~/Api/ApiService';
import type { ResultCharacter } from '~/models/Personajes';
import { routeLoader$ } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async (req: RequestEvent) => {
  const id = req.params.id;
  const resultCharacter = await apiService.getCharacters({ id });
  if(!resultCharacter) throw req.redirect(302, '/')
  else {
    req.sharedMap.set('resultCharacter', resultCharacter)
  }
}

export const useResultCharacter = routeLoader$(({ sharedMap }) => {
  return sharedMap.get('resultCharacter') as ResultCharacter
})

export default component$(() => {
  const resultCharacter = useResultCharacter()
  return (
    // <input placeholder='asdasd' />
    <>
      <Details resultCharacter={resultCharacter.value}/>
    </>
  );
});


