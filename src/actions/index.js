import wordAPI from "../apis/wordsApi";
import { APP_ID, APP_KEY } from "../apis/KeysAndApiLinks";
import history from "../history";
//redux-thunk action creator
export const getDefinitions = (term) => async (dispatch) => {
  history.push("/loading");
  try {
    const response = await wordAPI.get(
      `${term}?fields=definitions,pronunciations,examples,etymologies&strictMatch=false`,
      {
        headers: {
          app_id: APP_ID,
          app_key: APP_KEY,
        },
      }
    );
    dispatch({
      type: "DEFINITIONS",
      payload: response.data.results[0].lexicalEntries,
    });

    history.push(`/Dictionary/${term}`);
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: null,
    });
    history.push("/eRrOrXxX");
  }
};
