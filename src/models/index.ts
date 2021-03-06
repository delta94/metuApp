import { DvaLoadingState } from 'dva-loading-ts';
import home, { IHomeState } from './home';
import category, { ICategoryState } from './category';
import photo, { IPhotoState } from './photo';
import user, { IUserState } from './user';
import account, { IAccountState } from './account';
import comment, { ICommentState } from './comment';
import message, { IMessageState } from './message';
import oss, { IOssState } from './oss';

const models = [home, category, photo, user, account, comment, message, oss];

export type RootState = {
  loading: DvaLoadingState;
  home: IHomeState;
  category: ICategoryState;
  photo: IPhotoState;
  user: IUserState;
  account: IAccountState;
  comment: ICommentState;
  message: IMessageState;
  oss: IOssState;
};

export default models;
