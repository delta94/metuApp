#### 项目初始化
```
npx react-native init metuApp --template react-native-template-typescript
```


#### 项目图标库
1、初始化配置
```
npx iconfont-init
```
配置
```
{
    "symbol_url": "http://at.alicdn.com/t/font_1851472_z3m0g7kqao.js",
    "use_typescript": true,
    "save_dir": "./src/assets/iconfont",
    "trim_icon_prefix": "",
    "default_icon_size": 18,
    "summary_component_name": "Icon"
}
```

2、生成图标
```
npx iconfont-rn
```

#### 如何彻底清除缓存，重新编译项目？
```
cd path/to/project
rm -rf ~/.rncache
rm package-lock.json
sudo rm $TMPDIR/*
sudo rm -rf $TMPDIR/*
watchman watch-del-all
watchman watch-del-all
rm yarn.lock
rm -rf node_modules/
rm -rf ios/build
#install node_modules
yarn 
react-native link
cd ios
rm -Rf Pods
rm Podfile.lock
rm -Rf youriosproject.xcworkspace
pod install
#run simulator
cd ..
react-native run-ios
```

### 发布

#### 签名
```
keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

#### 打包
```
yarn add react-native-upload -D

npx upload-init

npx upload-build --no-ios

npx upload-pgy --no-ios -apk=v7a
```
or

```
yarn build
```

#### react-navigation TransitionPresets 动画

1、PhotoDetail: ScaleFromCenterAndroid

2、CommentList: ModalPresentationIOS

3、Login: ModalSlideFromBottomIOS