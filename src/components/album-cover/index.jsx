import React, { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";

import { AlbumWrapper } from "./style";

export default memo(function GAlbumCover(props) {
  const { info, size = 130, width = 153, bgp = "-845px" } = props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt={info.name} />
        <div className="cover image_cover"></div>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
});
