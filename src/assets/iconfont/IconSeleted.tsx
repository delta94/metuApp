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

const IconSeleted: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M235.946667 472.938667l-45.226667 45.312 210.090667 209.514666 432.362666-427.690666-45.013333-45.482667-387.157333 382.976z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSeleted.defaultProps = {
  size: 18,
};

export default IconSeleted;
