import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  Input,
  SearchButton,
  Error,
} from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  search: yup.string().min(3).max(64).required(),
});

const initialValues = {
  search: '',
};

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    // actions.resetForm();
    onSubmit(values.search);
  };

  return (
    <Header>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <SearchForm>
          <Input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="search" component={Error} />
          <SearchButton type="submit">
            <BiSearchAlt style={{ width: 32, height: 32 }} />
          </SearchButton>
        </SearchForm>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
