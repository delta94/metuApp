/**
 * 消息列表
 */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  StyleSheet
} from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import { MainStackNavigation } from '@/navigator/MainNavigation';
import { RootState } from '@/models/index';
import { IMessageItem } from '@/types/message/MessageState';
import { Empty } from '@/components/index';
import { MessageTabParamList } from './index';
import MessageItem from './MessageItem';

const mapStateToProps = (state: RootState) => ({
  loading: state.loading.effects['message/queryMessageList'],
  list: state.message.messageList.list,
  hasMore: state.message.messageList.pageInfo.has_more
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  route: RouteProp<MessageTabParamList, 'MessageList'>;
  navigation: MainStackNavigation;
}

interface IState {
  type: string;
  refreshing: boolean;
}

class Following extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      type: '',
      refreshing: false
    };
  }

  componentDidMount() {
    const { route } = this.props;
    this.getMessageList(route.params.type, false);
  }

  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    if (nextProps.route.params.type !== prevState.type) {
      return {
        type: nextProps.route.params.type
      };
    }
    return null;
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (this.state.type !== prevState.type) {
      this.getMessageList(this.state.type, false);
    }
  }

  getMessageList = (type: string, loadMore?: boolean) => {
    this.props.dispatch({
      type: 'message/queryMessageList',
      payload: {
        type,
        loadMore
      },
      callback: () => {
        setTimeout(() => {
          this.setState({
            refreshing: false
          });
        }, 1000);
      }
    });
  };

  onRefresh = () => {
    this.setState({
      refreshing: true
    });
    const { route } = this.props;
    this.getMessageList(route.params.type, false);
  };

  loadMore = () => {
    const { hasMore, loading, route } = this.props;
    if (loading || !hasMore) return;
    this.getMessageList(route.params.type, true);
  };

  renderItem = ({ item }: ListRenderItemInfo<IMessageItem>) => {
    return <MessageItem item={item} onPress={this.goPhotoDetail} />;
  };

  goPhotoDetail = (item: IMessageItem) => {
    // this.props.navigation.navigate('MessageDetail', { item });
  };

  _keyExtractor = (item: IMessageItem) => item._id;

  renderFooter = () => {
    const { list, hasMore, loading } = this.props;
    if (!hasMore && list.length > 0) {
      return (
        <View style={styles.end}>
          <Text>已经没有了</Text>
        </View>
      );
    }
    if (loading && hasMore && list.length > 0) {
      return (
        <View style={styles.loading}>
          <Text>正在加载中...</Text>
        </View>
      );
    }
    return null;
  };

  renderEmpty = () => {
    const { loading } = this.props;
    return <Empty loading={loading} />;
  };

  render() {
    const { list } = this.props;
    const { refreshing } = this.state;
    return (
      <FlatList
        data={list}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
        ListFooterComponent={this.renderFooter}
        ListEmptyComponent={this.renderEmpty}
        onEndReached={this.loadMore}
        onEndReachedThreshold={0.2}
        onRefresh={this.onRefresh}
        refreshing={refreshing}
      />
    );
  }
}

const styles = StyleSheet.create({
  end: {
    alignItems: 'center',
    paddingVertical: 10
  },
  empty: {
    alignItems: 'center',
    paddingVertical: 100
  },
  loading: {
    alignItems: 'center',
    paddingVertical: 10
  }
});

export default connector(Following);
