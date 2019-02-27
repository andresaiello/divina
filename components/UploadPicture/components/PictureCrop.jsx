import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import ReactCrop from 'react-image-crop';

import { NoSsr } from '@material-ui/core';

const Wrapper = styled.div`
  width: 100vw;
  height: ${({ heightRatio }) => `calc(100vw * ${heightRatio})`};

  .ReactCrop {
    position: relative;
    display: inline-block;
    cursor: crosshair;
    overflow: hidden;
    max-width: 100%;
    background-color: black;
  }

  .ReactCrop:focus {
    outline: none;
  }

  .ReactCrop--disabled,
  .ReactCrop--locked {
    cursor: inherit;
  }

  .ReactCrop__image {
    width: 100%;
    height: auto;
    display: block;
    max-height: -webkit-fill-available;
    max-height: -moz-available;
    max-height: fill-available;
  }

  .ReactCrop--crop-invisible .ReactCrop__image {
    opacity: .5;
  }

  .ReactCrop__crop-selection {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate3d(0, 0, 0);
    box-sizing: border-box;
    cursor: move;
    box-shadow: 0 0 0 9999em rgba(0, 0, 0, .5);
    border: 1px solid;
    border-image-source: url("data:image/gif;base64,R0lGODlhCgAKAJECAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI5RDc5MTFDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI5RDc5MTBDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQoAAgAsAAAAAAoACgAAAhWEERkn7W3ei7KlagMWF/dKgYeyGAUAIfkEBQoAAgAsAAAAAAoACgAAAg+UYwLJ7RnQm7QmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYgLJHdiinNSAVfOEKoUCACH5BAUKAAIALAAAAAAKAAoAAAIRVISAdusPo3RAzYtjaMIaUQAAIfkEBQoAAgAsAAAAAAoACgAAAg+MDiem7Q8bSLFaG5il6xQAIfkEBQoAAgAsAAAAAAoACgAAAg+UYRLJ7QnQm7SmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYBLJDdiinNSEVfOEKoECACH5BAUKAAIALAAAAAAKAAoAAAIRFISBdusPo3RBzYsjaMIaUQAAOw==");
    border-image-slice: 1;
    border-image-repeat: repeat;
  }

  .ReactCrop--disabled .ReactCrop__crop-selection {
    cursor: inherit;
  }

  .ReactCrop__drag-handle {
    position: absolute;
    width: 9px;
    height: 9px;
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-sizing: border-box;
    outline: 1px solid transparent;
  }

  .ReactCrop .ord-nw {
    top: 0;
    left: 0;
    margin-top: -5px;
    margin-left: -5px;
    cursor: nw-resize;
  }

  .ReactCrop .ord-n {
    top: 0;
    left: 50%;
    margin-top: -5px;
    margin-left: -5px;
    cursor: n-resize;
  }

  .ReactCrop .ord-ne {
    top: 0;
    right: 0;
    margin-top: -5px;
    margin-right: -5px;
    cursor: ne-resize;
  }

  .ReactCrop .ord-e {
    top: 50%;
    right: 0;
    margin-top: -5px;
    margin-right: -5px;
    cursor: e-resize;
  }

  .ReactCrop .ord-se {
    bottom: 0;
    right: 0;
    margin-bottom: -5px;
    margin-right: -5px;
    cursor: se-resize;
  }

  .ReactCrop .ord-s {
    bottom: 0;
    left: 50%;
    margin-bottom: -5px;
    margin-left: -5px;
    cursor: s-resize;
  }

  .ReactCrop .ord-sw {
    bottom: 0;
    left: 0;
    margin-bottom: -5px;
    margin-left: -5px;
    cursor: sw-resize;
  }

  .ReactCrop .ord-w {
    top: 50%;
    left: 0;
    margin-top: -5px;
    margin-left: -5px;
    cursor: w-resize;
  }

  .ReactCrop__disabled .ReactCrop__drag-handle {
    cursor: inherit;
  }

  .ReactCrop__drag-bar {
    position: absolute;
  }

  .ReactCrop__drag-bar.ord-n {
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    margin-top: -3px;
  }

  .ReactCrop__drag-bar.ord-e {
    right: 0;
    top: 0;
    width: 6px;
    height: 100%;
    margin-right: -3px;
  }

  .ReactCrop__drag-bar.ord-s {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px;
    margin-bottom: -3px;
  }

  .ReactCrop__drag-bar.ord-w {
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    margin-left: -3px;
  }

  .ReactCrop--new-crop .ReactCrop__drag-bar,
  .ReactCrop--new-crop .ReactCrop__drag-handle,
  .ReactCrop--fixed-aspect .ReactCrop__drag-bar {
    display: none;
  }

  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,
  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,
  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,
  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w {
    display: none;
  }

  @media (max-width: 768px), (pointer: coarse) {
    .ReactCrop__drag-handle {
      width: 17px;
      height: 17px;
    }

    .ReactCrop .ord-nw {
      margin-top: -9px;
      margin-left: -9px;
    }

    .ReactCrop .ord-n {
      margin-top: -9px;
      margin-left: -9px;
    }

    .ReactCrop .ord-ne {
      margin-top: -9px;
      margin-right: -9px;
    }

    .ReactCrop .ord-e {
      margin-top: -9px;
      margin-right: -9px;
    }

    .ReactCrop .ord-se {
      margin-bottom: -9px;
      margin-right: -9px;
    }

    .ReactCrop .ord-s {
      margin-bottom: -9px;
      margin-left: -9px;
    }

    .ReactCrop .ord-sw {
      margin-bottom: -9px;
      margin-left: -9px;
    }

    .ReactCrop .ord-w {
      margin-top: -9px;
      margin-left: -9px;
    }

    .ReactCrop__drag-bar.ord-n {
      height: 14px;
      margin-top: -7px;
    }

    .ReactCrop__drag-bar.ord-e {
      width: 14px;
      margin-right: -7px;
    }

    .ReactCrop__drag-bar.ord-s {
      height: 14px;
      margin-bottom: -7px;
    }

    .ReactCrop__drag-bar.ord-w {
      width: 14px;
      margin-left: -7px;
    }
  }
`;

export default class PictureCrop extends Component {
  static propTypes = {
    src: propTypes.string.isRequired,
    width: propTypes.number.isRequired,
    height: propTypes.number.isRequired,
    updatePicture: propTypes.func.isRequired,
  }

  state = {
    crop: {
      aspect: 1,
      height: this.props.height < this.props.width ? 100 : undefined,
      width: this.props.width < this.props.height ? 100 : undefined,
      x: 0,
      y: 0,
    },
  };

  onImageLoaded = (image, pixelCrop) => {
    this.imageRef = image;
  };

  onCropComplete = (crop, pixelCrop) => {
    this.makeClientCrop(crop, pixelCrop);
  };

  onCropChange = (crop) => {
    this.setState({ crop });
  };

  getCroppedImg = (image, pixelCrop) => {
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    );

    return canvas.toDataURL('image/jpeg');
  }

  makeClientCrop (crop, pixelCrop) {
    const { updatePicture } = this.props;

    if (this.imageRef && crop.width && crop.height) {
      const base64Img = this.getCroppedImg(this.imageRef, pixelCrop);

      updatePicture(base64Img);
    }
  }

  render () {
    const { src, height, width } = this.props;
    const { crop } = this.state;

    return (
      <NoSsr>
        <Wrapper heightRatio={height / width}>
          <ReactCrop
            src={src}
            crop={crop}
            locked
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        </Wrapper>
      </NoSsr>
    );
  }
}
