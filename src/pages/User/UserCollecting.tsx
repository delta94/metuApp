import React from 'react';
import { Text, ScrollView } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { HPageViewHoc } from 'react-native-head-tab-view';
import { RootState } from '@/models/index';

const HScrollView = HPageViewHoc(ScrollView);

const mapStateToProps = (state: RootState) => ({
  loading: state.loading
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  userId: string;
}

class UserCollecting extends React.Component<IProps> {
  render() {
    return (
      <HScrollView {...this.props}>
        <Text>UserCollecting</Text>
      </HScrollView>
    );
  }
}

export default connector(UserCollecting);
