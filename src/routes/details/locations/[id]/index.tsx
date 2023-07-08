import { component$ } from '@builder.io/qwik';
import type {
    RequestHandler,
    RequestEvent,
} from '@builder.io/qwik-city/middleware/request-handler';
import Details from '~/pages/DetailsLocations';
import { apiService } from '~/Api/ApiService';
import type { ResultLocation } from '~/models/Locations';
import { routeLoader$ } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async (req: RequestEvent) => {
    const id = req.params.id;
    const resultLocation = await apiService.getLocations({ id });
    if (!resultLocation) throw req.redirect(302, '/');
    else {
        req.sharedMap.set('resultLocation', resultLocation);
    }
};

export const useResultCharacter = routeLoader$(({ sharedMap }) => {
  return sharedMap.get('resultLocation') as ResultLocation;
});

export default component$(() => {
    const resultLocation = useResultCharacter()
    return (
      <>
        <Details resultLocation={resultLocation.value}/>
      </>
    );
});

