import { Model, Effect } from 'dva-core-ts';
import { Reducer } from 'redux';
import { RootState } from './index';
import { messageApi } from '@/api/index';
import { IMessage } from '@/types/message/MessageState';

export interface IMessageState {
  messageList: IMessage;
}

interface MessageModel extends Model {
  namespace: string;
  state: IMessageState;
  effects: {
    queryMessageList: Effect;
  };
  reducers: {
    setState: Reducer<IMessageState>;
  };
}

const messageModel: MessageModel = {
  namespace: 'message',

  state: {
    messageList: {
      list: [],
      pageInfo: {
        page: 1,
        per_page: 10,
        count: 0,
        has_more: true
      }
    }
  },

  effects: {
    *queryMessageList({ payload, callback }, { call, put, select }) {
      const { list, pageInfo } = yield select(
        (state: RootState) => state.message.messageList
      );
      let page = 1;
      if (payload && payload.loadMore) {
        page = pageInfo.page + 1;
      }
      const res = yield call(messageApi.getMessageList, {
        type: payload.type,
        page,
        per_page: pageInfo.per_page
      });
      let newList = res.data.list;
      if (payload && payload.loadMore) {
        newList = list.concat(newList);
      }
      yield put({
        type: 'setState',
        payload: {
          channel: {
            list: newList,
            pageInfo: {
              page,
              per_page: pageInfo.per_page,
              count: res.data.count,
              has_more: res.data.hasMore
            }
          }
        }
      });
      if (callback) {
        callback();
      }
    }
  },

  reducers: {
    setState(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};

export default messageModel;
