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

const IconQRcode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M491.925333 532.074667V853.333333H170.666667V532.074667h321.258666zM597.333333 789.333333v64h-64v-64h64z m256-85.333333v149.333333h-128v-64h64v-85.333333h64z m-425.408-107.925333H234.666667V789.333333h193.258666v-193.258666zM661.333333 597.333333v128h64v64h-128v-192h64z m-277.333333 42.666667v106.666667h-106.666667v-106.666667h106.666667z m405.333333 0v64h-64v-64h64z m64-106.666667v106.666667h-64v-42.666667h-64v-64h128z m-256 0v64h-64v-64h64zM491.925333 170.666667v321.258666H170.666667V170.666667h321.258666zM853.333333 170.666667v321.258666H532.074667V170.666667H853.333333z m-425.408 64H234.666667v193.258666h193.258666V234.666667zM789.333333 234.666667h-193.258666v193.258666H789.333333V234.666667z m-405.333333 42.666666v106.666667h-106.666667v-106.666667h106.666667z m362.666667 0v106.666667h-106.666667v-106.666667h106.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconQRcode.defaultProps = {
  size: 18,
};

export default IconQRcode;
