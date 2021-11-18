import React from "react";

// dependencies
import Tilt from 'react-tilt';

// styles
import { ImageContentWrapper } from "./image-content.style";


const ImageContent = ({ liveLink, title, imageSource }) => (
  <>
    <ImageContentWrapper>
      <a href={liveLink} rel="noreferrer" target="_blank">
        <Tilt
          options={{
            reverse: false,
            max: 8,
            perspective: 1000,
            scale: 1,
            speed: 300,
            transition: true,
            axis: null,
            reset: true,
            easing: 'cubic-bezier(.03,.98,.52,.99)',
          }}
        >
          <div data-tilt className="thumbnail rounded">
            <img className="img-fluid" src={imageSource} alt={title} />
          </div>
        </Tilt>
      </a>
    </ImageContentWrapper>
  </>
);

export default ImageContent;