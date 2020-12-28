import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import GThemeHeaderRcm from "@/components/theme-header-rcm";
import { getNewAlbumAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import GAlbumCover from "@/components/album-cover";
import { AlbumWrapper } from "./style";

export default memo(function GNewAlbum() {
  const dispatch = useDispatch();
  const { newAlbum } = useSelector(
    (state) => ({ newAlbum: state.getIn(["recommend", "newAlbum"]) }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);
  const refItem = useRef();
  return (
    <AlbumWrapper>
      <GThemeHeaderRcm title="新碟上架" />
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={(e) => {
            refItem.current.prev();
          }}
        ></div>
        <div className="album">
          <Carousel dots={false} ref={refItem} autoplay>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbum.slice(item * 5, (item + 1) * 5).map((ite) => {
                    return (
                      <GAlbumCover
                        key={ite.id}
                        info={ite}
                        size={100}
                        width={118}
                        bgp={"-570px"}
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite_02"
          onClick={(e) => {
            refItem.current.next();
          }}
        ></div>
      </div>
    </AlbumWrapper>
  );
});
