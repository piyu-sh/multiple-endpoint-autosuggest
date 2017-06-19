
export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';
export const MAYBE_UPDATE_SUGGESTIONS = 'MAYBE_UPDATE_SUGGESTIONS';
export const LOAD_SUGGESTIONS_BEGIN = 'LOAD_SUGGESTIONS_BEGIN';
export const INIT_AUTOCOMPLETE = 'INIT_AUTOCOMPLETE';

export function loadSuggestions(value) {
  return (dispatch, getState) => {
    dispatch(loadSuggestionsBegin());
    getPredictions(dispatch,value)
  };
}

function getPredictions(dispatch,value){
  var request = '/autocomplete/'+ value
  fetch(request).then(
    response => response.json()
  ).then(
    data => {
      const autoComplete = new google.maps.places.AutocompleteService();
      autoComplete.getPlacePredictions({
        input: value,
        types: [`geocode`]},
        (predictions, status) => {
          displayPredictionSuggestions(dispatch,predictions, status, value, data);
        }
      );
    }
  );


  
}

  function displayPredictionSuggestions(dispatch,predictions, status, value, data) {
    // If the service is down, do not return results.
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      return;
    }
    const collatedData=collateData(predictions, data);
    dispatch(maybeUpdateSuggestions(collatedData,value))
    
  }

  function collateData(predictions, apiData){
    var collatedData=[];
    const modifiedApiData=apiData.map(function(element){
        return {
          description: element.name +" "+element.location
        }
    });

    const modifiedPredictionsData=predictions.map(function(element){
        return {
          description: element.description
        }
    });
  
    collatedData.push(
      {
        title:"Locations", 
        places:modifiedPredictionsData
    }); 

    collatedData.push(
      {
        title:"Hotels", 
        places:modifiedApiData
    });


    return collatedData;
  }

export function updateInputValue(value) {
  return {
    type: UPDATE_INPUT_VALUE,
    value
  };
}

export function clearSuggestions() {
  return {
    type: CLEAR_SUGGESTIONS
  };
}

export function loadSuggestionsBegin() {
  return {
    type: LOAD_SUGGESTIONS_BEGIN
  };
}

export function maybeUpdateSuggestions(suggestions, value) {
  return {
    type: MAYBE_UPDATE_SUGGESTIONS,
    suggestions,
    value
  };
}
