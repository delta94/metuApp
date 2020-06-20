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

const IconbadFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M581.674667 853.333333c6.72 0 18.538667-1.429333 27.584-4.352 44.544-14.442667 70.186667-61.76 59.797333-109.12l-1.066667-4.437333-39.701333-148.906667h157.269333c19.093333 0 37.973333-7.082667 50.773334-21.248a64.853333 64.853333 0 0 0 15.616-57.109333l-1.066667-4.352-82.922667-295.253333a51.882667 51.882667 0 0 0-46.08-37.76L718.037333 170.666667H298.666667v400.832c84.949333 18.389333 209.194667 244.373333 209.194666 244.373333 17.664 23.957333 39.082667 37.461333 73.813334 37.461333zM234.666667 576V170.666667H170.666667v405.333333h64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconbadFill.defaultProps = {
  size: 18,
};

export default IconbadFill;
