import React, { memo, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import "antd/dist/antd.less";

import router from "./router";
import store from "./store";

import GAppHeader from "@comp/app-header";
import GAppFooter from "@comp/app-footer";
import GAppPlayerBar from "@page/player/app-player-bar";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GAppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(router)}
        </Suspense>
        <GAppFooter />
        <GAppPlayerBar />
      </HashRouter>
    </Provider>
  );
});
