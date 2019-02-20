import React, { PureComponent, Fragment } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Search } from '@material-ui/icons';
import NumberFormat from 'react-number-format';

import { FullscreenModal } from '~/components/shared';
import { TextField, Button } from '@material-ui/core';

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
  grid-template-columns: 24vw 24vw 24vw 24vw;
  justify-content: space-between;
  padding-top: 5px;

  .brand {
    cursor: pointer;
    display: flex;
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

const brands = [
  {
    name: 'Zara',
  },
  {
    name: 'Gucci',
  },
  {
    name: 'Otra',
  },
];

function NumberFormatCustom ({ inputRef, onChange, ...other }) {
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => { onChange({ target: { value: values.value } }); }}
      thousandSeparator
      prefix="€"
    />
  );
}

export default class DotsModal extends PureComponent {
  state = {
    selectedBrand: null,
  }

  selectBrand = (brand) => {
    this.setState({ selectedBrand: brand });
  }

  render () {
    const { selectedBrand } = this.state;
    const { isOpen, close, saveDotData } = this.props;

    return (
      <FullscreenModal
        isOpen={isOpen}
        close={close}
        title="Agregar dots!"
        disableBackdropClick
      >
        {selectedBrand
          ? (
            <FormContainer>
              <TextField
                label="Marca"
                margin="normal"
                value={selectedBrand}
                disabled
              />
              <TextField
                label="Precio"
                id="formatted-numberformat-input"
                InputProps={{ inputComponent: NumberFormatCustom }}
              />
              <Button
                className="save"
                color="primary"
                variant="contained"
                onClick={() => saveDotData({})}
              >
                Guardar
              </Button>
            </FormContainer>
          )
          : (
            <BrandsGrid>
              <div className="search brand">
                <Search
                  className="icon"
                  color="primary"
                  fontSize="large"
                />
                <div>Buscar</div>
              </div>
              {brands.map(brand => (
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
          )
        }
      </FullscreenModal>
    );
  }
}
