# 👀起始原因

>- 不想依賴cdn 方式import Cesium
>- 不想因為token 過期還需要上 Cesium ion 更新token(雖然一直使用token 不會過期XD)
>- 有離線需求(**但這需要配合離線地形、底圖才能完成需求，未來應該會把離線地形、底圖方式更新上去。**)
>- 自己碰到新的專案scpoe不夠大不需要用現有框架vue/react等等的去寫，重新刻一個pure html startup太浪費時間。



# 🚀開始
## 下載所有需要的node_modules

```
$ npm i
```
## 起服務

```
$ npm run start
```

## 服務位置

> [Cesium Viewer](http://localhost:3000 "Title") 

# 📝後記
> 基本上可以直接按照這個模板下去做簡單的GIS開發，如果有任何問題歡迎提問。

> 有空的話會再整理vue+vite+cesium 原生 /react + webpack +cesium 原生