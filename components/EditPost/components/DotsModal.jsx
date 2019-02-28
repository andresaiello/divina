import React, { PureComponent, Fragment } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Search } from '@material-ui/icons';
import NumberFormat from 'react-number-format';

import { FullscreenModal, LoadingScreen, Loader } from '~/components/shared';
import { TextField, Button } from '@material-ui/core';
import { Mutation, Query } from 'react-apollo';
import { Post, EditPost } from '~/lib/graphql';

const StyledModal = styled(FullscreenModal)`
  .content {
    text-align: center;
  }

  .brandFilterInput {
    width: 80%;
  }
`;

const FormContainer = styled.form`
  display: grid;
  width: 300px;
  margin: 0px auto;

  .price {
    width: 89%;
  }

  .currency {
    vertical-align: bottom;
    margin-left: 5px;
  }

  .save {
    margin-top: 25px;
  }
`;

const BrandsGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 24vw 24vw 24vw 24vw;
  justify-content: space-between;
  padding-top: 5px;

  .brand {
    cursor: pointer;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 24vw;
    margin-bottom: 1vw;
    border: 1px solid black;
  }

  .search {
    display: grid;
    align-content: center;

    .icon {
      margin: 0px auto;
    }
  }
`;

function NumberFormatCustom ({
  name, inputRef, onChange, ...other
}) {
  return (
    <NumberFormat
      name={name}
      getInputRef={inputRef}
      onValueChange={(values) => { onChange({ target: { name, value: parseInt(values.value, 10) } }); }}
      thousandSeparator
      prefix="€"
      {...other}
    />
  );
}

const initialState = {
  selectedBrand: null,
  title: '',
  price: '',
  brandFilter: '',
};

export default class DotsModal extends PureComponent {
  static propTypes = {
    isOpen: propTypes.bool.isRequired,
    close: propTypes.func.isRequired,
    onSaveDot: propTypes.func.isRequired,
    persistDot: propTypes.func.isRequired,
    savingDot: propTypes.bool.isRequired,
  }

  state = { ...initialState }

  selectBrand = (brand) => {
    this.setState({ selectedBrand: brand });
  }

  saveDot = async () => {
    const { onSaveDot, persistDot } = this.props;
    const { title, selectedBrand, price } = this.state;

    this.setState({ ...initialState }, async () => {
      await onSaveDot(persistDot, {
        title, brand: selectedBrand, price, currency: 'EUR',
      });
    });
  }

  updateValue = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  close = () => {
    const { close } = this.props;

    this.setState({ ...initialState }, close);
  }

  render () {
    const {
      title, selectedBrand, price, brandFilter,
    } = this.state;
    const { isOpen, savingDot } = this.props;

    const lowerCaseBrandFilter = brandFilter.toLowerCase();

    return (
      <StyledModal
        isOpen={isOpen}
        close={this.close}
        title="Agregar dots!"
        disableBackdropClick
      >
        {savingDot
          ? <Loader />
          : selectedBrand
            ? (
              <FormContainer>
                <TextField
                  label="Título"
                  name="title"
                  margin="normal"
                  value={title}
                  onChange={this.updateValue}
                />
                <TextField
                  label="Marca"
                  margin="normal"
                  value={selectedBrand}
                  disabled
                />
                <TextField
                  label="Precio"
                  id="formatted-numberformat-input"
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                    name: 'price',
                    onChange: this.updateValue,
                    value: price,
                  }}
                />
                <Button
                  className="save"
                  color="primary"
                  variant="contained"
                  onClick={this.saveDot}
                >
                  Guardar
                </Button>
              </FormContainer>
            )
            : (
              <Query
                query={EditPost.Queries.GET_BRANDS}
              >
                {({ data, loading, error }) => (loading
                  ? <Loader />
                  : error
                    ? <div>Error</div> // @todo
                    : (
                      <Fragment>
                        <TextField
                          label="Filtrar"
                          name="brandFilter"
                          className="brandFilterInput"
                          margin="normal"
                          value={brandFilter}
                          onChange={this.updateValue}
                          variant="outlined"
                        />
                        <BrandsGrid>
                          {/* <div className="search brand">
                            <Search
                              className="icon"
                              color="primary"
                              fontSize="large"
                            />
                            <div>Buscar</div>
                          </div> */}
                          {data.brands.nodes
                            .filter(b => b.name.toLowerCase().indexOf(lowerCaseBrandFilter) !== -1)
                            .map(brand => (
                              <div
                                key={brand.name}
                                className="brand"
                                onClick={() => this.selectBrand(brand.name)}
                                role="button"
                                tabIndex={0}
                              >
                                {brand.name}
                              </div>
                            ))}
                        </BrandsGrid>
                      </Fragment>
                    )
                )}
              </Query>
            )
        }
      </StyledModal>
    );
  }
}
