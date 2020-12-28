import React, { memo } from "react";
import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function GPlayer() {
  return (
    // TODO:
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>player</h2>
          <h2>content</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>playList</h2>
          <h2>songs</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
