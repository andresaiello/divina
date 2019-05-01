import React, { PureComponent, Fragment } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import { CirclePicker } from 'react-color';
import { Query } from 'react-apollo';

import { FullscreenModal, Loader } from '~/components/shared';
import { EditPost } from '~/lib/graphql';
import { DOT_DEFAULT_COLOR } from '~/constants';

const colors = [DOT_DEFAULT_COLOR, '#e91e63', '#9c27b0', '#673ab7', '#4caf50', '#00bcd4'];

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

  .colorTitle {
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .colorPicker {
    margin-left: auto;
    margin-right: auto !important;
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
    word-break: break-word;
    padding: 5px;
  }

  .search {
    display: grid;
    align-content: center;

    .icon {
      margin: 0px auto;
    }
  }
`;

const initialState = {
  selectedBrand: null,
  title: '',
  price: '',
  brandFilter: '',
  color: colors[0],
};

export default class DotsModal extends PureComponent {
  static propTypes = {
    isOpen: propTypes.bool.isRequired,
    close: propTypes.func.isRequired,
    onSaveDot: propTypes.func.isRequired,
    persistDot: propTypes.func.isRequired,
    savingDot: propTypes.bool.isRequired,
  };

  state = { ...initialState };

  selectBrand = brand => {
    this.setState({ selectedBrand: brand });
  };

  saveDot = async () => {
    const { onSaveDot, persistDot } = this.props;
    const { title, selectedBrand, price, color } = this.state;

    this.setState({ ...initialState }, async () => {
      await onSaveDot(persistDot, {
        title,
        brand: selectedBrand._id,
        price: parseInt(price, 10),
        currency: 'EUR',
        color: color.hex,
      });
    });
  };

  updateValue = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  close = () => {
    const { close } = this.props;

    this.setState({ ...initialState }, close);
  };

  render() {
    const { title, selectedBrand, price, brandFilter, color } = this.state;
    const { isOpen, savingDot } = this.props;

    const lowerCaseBrandFilter = brandFilter.toLowerCase();

    // @todo: validate dot form, don't allow null title - price.

    return (
      <StyledModal isOpen={isOpen} close={this.close} title="Agregar prendas!" disableBackdropClick>
        {savingDot ? (
          <Loader />
        ) : selectedBrand ? (
          <FormContainer>
            <TextField
              label="Título"
              name="title"
              margin="normal"
              value={title}
              onChange={this.updateValue}
            />
            <TextField label="Marca" margin="normal" value={selectedBrand.name} disabled />
            <TextField
              label="Precio"
              name="price"
              id="formatted-numberformat-input"
              type="number"
              onChange={this.updateValue}
              value={price}
              InputProps={{
                startAdornment: <InputAdornment position="start">€</InputAdornment>,
              }}
            />
            <div>
              <div className="colorTitle">Color</div>
              <CirclePicker
                className="colorPicker"
                colors={colors}
                color={color}
                onChange={updatedColor => this.setState({ color: updatedColor })}
              />
            </div>
            <Button
              className="save"
              color="primary"
              variant="contained"
              onClick={this.saveDot}
              disabled={!title.length || price.toString ? !price.toString().length : price.length}
            >
              Guardar
            </Button>
          </FormContainer>
        ) : (
          <Query query={EditPost.Queries.GET_BRANDS}>
            {({ data, loading, error }) =>
              loading ? (
                <Loader />
              ) : error ? (
                <div>Error</div> // @todo
              ) : (
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
                          onClick={() => this.selectBrand(brand)}
                          role="button"
                          tabIndex={0}
                        >
                          {brand.name}
                        </div>
                      ))}
                  </BrandsGrid>
                </Fragment>
              )
            }
          </Query>
        )}
      </StyledModal>
    );
  }
}
