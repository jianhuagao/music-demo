import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTopListAction } from "../../store/actionCreators";
import GThemeHeaderRcm from "@/components/theme-header-rcm";
import GTopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";

export default memo(function GRecommendRanking() {
  const dispatch = useDispatch();
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <GThemeHeaderRcm title="榜单" />
      <div className="tops">
        <GTopRanking info={upRanking} />
        <GTopRanking info={newRanking} />
        <GTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  );
});
