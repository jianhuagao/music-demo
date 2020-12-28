import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { HotRecommendWrapper } from "./style";
import GThemeHeaderRcm from "@/components/theme-header-rcm";
import GSongsCover from "@/components/songs-cover";
import { getHotBannersAction } from "../../store/actionCreators";

export default memo(function GHotRecommend() {
  const dispatch = useDispatch();

  const { hotBanners } = useSelector(
    (state) => ({
      hotBanners: state.getIn(["recommend", "hotBanners"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getHotBannersAction(8));
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <GThemeHeaderRcm
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className="recommend-list">
        {hotBanners.map((item, index) => {
          return <GSongsCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
