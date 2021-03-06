/**
 * AppNavigation - modal全屏模式：登录、发布、图片详情等页面
 */
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import {
  createStackNavigator,
  StackNavigationProp,
  TransitionPresets
} from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import Icon from '@/assets/iconfont';

import MainScreen from './MainNavigation';
import Search from '@/pages/Search/index';
import Publish from '@/pages/Publish/index';
import PhotoScreen from './PhotoScreen';
import UserDetail from '@/pages/User/UserDetail';
import Comment from '@/pages/Comment/index';

// App页面参数声明
export type AppStackParamList = {
  MainScreen: undefined;
  SearchScreen: undefined;
  PublishScreen: undefined;
  PhotoScreen: undefined;
  UserDetail: { id: string };
  CommentScreen: { id: string; type: 'photos' | 'articles' };
};

const AppStack = createStackNavigator<AppStackParamList>();

export type AppStackNavigation = StackNavigationProp<AppStackParamList>;

export default function AppScreen() {
  return (
    <AppStack.Navigator
      mode="modal"
      headerMode="screen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#666',
        headerBackTitleVisible: false,
        gestureEnabled: true
      }}>
      <AppStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <AppStack.Screen
        name="SearchScreen"
        component={Search}
        options={getSearchOptions}
      />
      <AppStack.Screen
        name="PublishScreen"
        component={Publish}
        options={getPublishScreenOptions}
      />
      <AppStack.Screen
        name="PhotoScreen"
        component={PhotoScreen}
        options={getPhotoScreenOptions}
      />
      <AppStack.Screen
        name="UserDetail"
        component={UserDetail}
        options={getUserDetailOptions}
      />
      <AppStack.Screen
        name="CommentScreen"
        component={Comment}
        options={getCommentScreenOptions}
      />
    </AppStack.Navigator>
  );
}

// 搜索
function getSearchOptions() {
  return {
    headerTitle: '搜索',
    headerBackImage: ({ tintColor }: { tintColor: string }) => (
      <Icon
        name="icon-close"
        size={30}
        color={tintColor}
        style={styles.headerBackImage}
      />
    ),
    ...TransitionPresets.ScaleFromCenterAndroid
  };
}

function getPublishScreenOptions() {
  return {
    headerTitle: '发布',
    headerBackImage: ({ tintColor }: { tintColor: string }) => (
      <Icon
        name="icon-arrow-down"
        size={30}
        color={tintColor}
        style={styles.headerBackImage}
      />
    ),
    ...TransitionPresets.ModalSlideFromBottomIOS
  };
}

function getPhotoScreenOptions() {
  return {
    headerShown: false,
    ...TransitionPresets.ScaleFromCenterAndroid
  };
}

// 用户详情 标题配置
function getUserDetailOptions() {
  return {
    headerTitle: '用户详情',
    headerTransparent: true,
    headerTintColor: '#fff',
    headerTitleStyle: {
      opacity: 0
    },
    headerBackground: () => {
      return <Animated.View style={styles.userDetailBg} />;
    },
    ...TransitionPresets.DefaultTransition
  };
}

function getCommentScreenOptions() {
  return {
    headerShown: false,
    ...TransitionPresets.ModalPresentationIOS
  };
}

const styles = StyleSheet.create({
  headerBackImage: {
    marginHorizontal: Platform.OS === 'android' ? 0 : 8
  },
  userDetailBg: {
    flex: 1,
    backgroundColor: '#fff',
    opacity: 0
  }
});
