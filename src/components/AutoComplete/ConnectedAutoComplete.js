import {connect} from 'react-redux';
import AutoComplete from './AutoComplete';
import {loadSuggestions, updateInputValue, clearSuggestions} from '../App/actions';

function mapStateToProps(state) {
  const { value, suggestions, isLoading } = state.autoComplete;

  return {
    value,
    suggestions,
    isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(event, { newValue }) {
      dispatch(updateInputValue(newValue));
    },
    onSuggestionsFetchRequested({ value }) {
      dispatch(loadSuggestions(value));
    },
    onSuggestionsClearRequested() {
      dispatch(clearSuggestions());
    }
  };
}

const ConnectedAutoComplete = connect(mapStateToProps, mapDispatchToProps)(AutoComplete);

export default ConnectedAutoComplete;