import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

class Autocomplete extends React.Component {

  render() {

  const getSuggestionValue = (suggestion) => {
    return suggestion.description;
  }

  const renderSuggestion = (suggestion) => {
    return (
      <span>{suggestion.description}</span>
    );
  }

  const renderSectionTitle = (section) => {
    return (
      <strong>{section.title}</strong>
    );
  }

  const getSectionSuggestions = (section) => {
    return section.places;
  }

    const { value, suggestions, isLoading, onChange, onSuggestionsFetchRequested, onSuggestionsClearRequested } = this.props;
    const inputProps = {
      placeholder: "Type something...",
      value,
      onChange
    };
    const status = (isLoading ? 'Loading...' : 'Type to load suggestions');

    return (
      <div>
        <div className="status">
          <strong>Status:</strong> {status}
        </div>
        <Autosuggest 
          multiSection={true}
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSectionTitle={renderSectionTitle}
          getSectionSuggestions={getSectionSuggestions}
          inputProps={inputProps} />
    </div>
    );
  }
}


Autocomplete.propTypes = {

};

export default Autocomplete;