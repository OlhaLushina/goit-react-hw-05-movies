import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form } from './MovieSearchbar.styled';
import toast, { Toaster } from 'react-hot-toast';

export const MovieSearchbar = ({ query, onSubmit }) => {
  const [searchText, setSearchText] = useState(query);

  const handleSearchText = e => {
    setSearchText(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchText === '') {
      toast.error('Please enter text for search');
      return;
    }
    onSubmit(searchText);
    //setSearchText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchText"
        value={searchText}
        onChange={handleSearchText}
      />
      <button>Search</button>
      <Toaster />
    </Form>
  );
};

MovieSearchbar.propTypes = {
  query: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
