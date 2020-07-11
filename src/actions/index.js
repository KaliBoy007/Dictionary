import wordAPI from "../apis/wordsApi";
import { APP_ID, APP_KEY } from "../apis/KeysAndApiLinks";

//redux-thunk action creator
export const getDefinitions = (term) => async (dispatch) => {
  try {
    const response = await wordAPI.get(
      `${term}?fields=definitions&strictMatch=false`,
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
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: null,
    });
  }
};
