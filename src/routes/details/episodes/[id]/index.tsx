import { component$ } from '@builder.io/qwik';
import type {
    RequestHandler,
    RequestEvent,
} from '@builder.io/qwik-city/middleware/request-handler';
import Details from '~/pages/DetailsEpisodes';
import { apiService } from '~/Api/ApiService';
import type { ResultEpisode } from '~/models/Episodes';
import { routeLoader$ } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async (req: RequestEvent) => {
    const id = req.params.id;
    const resultEpisode = await apiService.getEpisodes({ id });
    if (!resultEpisode) throw req.redirect(302, '/');
    else {
        req.sharedMap.set('resultLocation', resultEpisode);
    }
};

export const useResultCharacter = routeLoader$(({ sharedMap }) => {
    return sharedMap.get('resultLocation') as ResultEpisode;
});

export default component$(() => {
    const resultLocation = useResultCharacter();
    return (
        <>
            <Details resultEpisode={resultLocation.value} />
        </>
    );
});
