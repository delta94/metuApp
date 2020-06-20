/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconGift: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M592.234667 149.333333l6.784 0.106667a111.146667 111.146667 0 0 1 95.872 158.421333h133.077333a64 64 0 0 1 64 64v75.797334a64 64 0 0 1-64 64h-3.946667v298.346666a64 64 0 0 1-64 64h-483.413333a64 64 0 0 1-64-64l-0.021333-298.346666H208.64a64 64 0 0 1-64-64v-75.797334a64 64 0 0 1 64-64h122.410667a111.146667 111.146667 0 0 1 95.872-158.442666L433.706667 149.333333a112.853333 112.853333 0 0 1 79.253333 32.384A112.810667 112.810667 0 0 1 592.234667 149.333333z m-107.904 362.325334h-207.744v298.346666l207.744-0.021333V511.658667z m275.690666 0h-207.744v298.325333h207.744V511.68zM484.330667 371.84H208.64v75.818667h3.925333v-1.941334l271.744-0.021333V371.84z m343.637333 0H552.277333v73.856l271.744 0.021333v1.941334h3.946667v-75.797334zM433.706667 213.333333h-2.090667a47.146667 47.146667 0 0 0 0 94.293334h47.36v-45.056c0-5.546667 0.426667-10.986667 1.173333-16.298667A49.216 49.216 0 0 0 433.728 213.333333z m160.597333 0h-2.090667a49.258667 49.258667 0 0 0-46.464 32.96c0.789333 5.290667 1.173333 10.730667 1.173334 16.277334v45.056h47.36a47.146667 47.146667 0 0 0 47.04-43.776l0.128-3.370667c0-26.026667-21.12-47.146667-47.146667-47.146667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconGift.defaultProps = {
  size: 18,
};

export default IconGift;
