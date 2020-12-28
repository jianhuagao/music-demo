import React, { memo } from "react";
import GTopBanner from "./c-cpns/top-banner";
import GHotRecommend from "./c-cpns/hot-recommend";
import GNewAlbum from "./c-cpns/new-album";
import GRecommendRanking from "./c-cpns/recommend-ranking";
import GUserLogin from "./c-cpns/user-login";
import GHotAnchor from "./c-cpns/hot-anchor";
import GSettleSinger from "./c-cpns/settle-singer";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

export default memo(function GRecommend(props) {
  return (
    <RecommendWrapper>
      <GTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <GHotRecommend />
          <GNewAlbum />
          <GRecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <GUserLogin />
          <GHotAnchor />
          <GSettleSinger />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});
