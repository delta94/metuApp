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

const IconGoodFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M581.674667 170.666667c6.72 0 18.538667 1.429333 27.584 4.352 44.544 14.442667 70.186667 61.76 59.797333 109.12l-1.066667 4.437333-39.701333 148.906667h157.269333c19.093333 0 37.973333 7.082667 50.773334 21.248 14.293333 15.829333 19.861333 36.778667 15.616 57.109333l-1.066667 4.352-82.922667 295.253333a51.882667 51.882667 0 0 1-46.08 37.76l-3.84 0.128H298.666667V452.501333c84.949333-18.389333 209.194667-244.373333 209.194666-244.373333C525.525333 184.170667 546.944 170.666667 581.674667 170.666667zM234.666667 448v405.333333H170.666667V448h64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconGoodFill.defaultProps = {
  size: 18,
};

export default IconGoodFill;
