import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Slider } from "antd";

import {
  getSizeImage,
  formatMinuteSecond,
  getPlaySong,
} from "@/utils/format-utils.js";
import { PlayBarWrapper, Control, PlayInfo, Operator } from "./style";
import { getCurrentSongsAction } from "../store/actionCreators";
import { NavLink } from "react-router-dom";

export default memo(function GAppPlayerBar() {
  //props and state
  //进度条末正在播放到的时间
  const [nowTime, setNowTime] = useState(0);
  //滑块的value
  const [sliderFormat, setSliderFormat] = useState(0);
  //是否正在手动调整滑块
  const [isChanging, setIsChanging] = useState(false);
  //是否正在播放
  const [isPlaying, setIsPlaying] = useState(false);

  //redux hooks
  const { currentSongs } = useSelector(
    (state) => ({
      currentSongs: state.getIn(["player", "currentSongs"]),
    }),
    shallowEqual
  );
  // react hooks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentSongsAction(1496602290));
  }, [dispatch]);

  const audioRef = useRef();

  //当currentSongs歌曲改变时，修改音乐播放src
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSongs.id);
  }, [currentSongs]);
  //const
  const nowTimeFormat = formatMinuteSecond(nowTime);
  const allTimeFormat = currentSongs.dt
    ? formatMinuteSecond(currentSongs.dt)
    : "00:00";

  //function//////////////////////////////////////////////////////////////
  //music play
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);
  //music setNowTimeFun
  const setNowTimeFun = (e) => {
    if (!isChanging) {
      setNowTime(e.target.currentTime * 1000);
      setSliderFormat((nowTime / currentSongs.dt || 0) * 100);
    }
  };

  //sliderChange
  const sliderChange = useCallback(
    (value) => {
      setIsChanging(true);
      const currentTime = (value / 100) * currentSongs.dt || 0;
      setNowTime(currentTime);
      setSliderFormat(value);
    },
    [currentSongs]
  );
  const sliderAfChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * currentSongs.dt || 0) / 1000;
      audioRef.current.currentTime = currentTime;
      setNowTime(currentTime * 1000);
      setIsChanging(false);

      if (!isPlaying) {
        playMusic();
      }
    },
    [currentSongs, isPlaying, playMusic]
  );

  return (
    <PlayBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"></button>
          <button
            className="sprite_player play"
            onClick={(e) => {
              playMusic();
            }}
          ></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img
                src={getSizeImage(
                  currentSongs.al && currentSongs.al.picUrl,
                  34
                )}
                alt=""
              />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSongs.name}</span>
              <a href="#/" className="singer-name">
                {currentSongs.ar && currentSongs.ar[0].name}
              </a>
            </div>
            <div className="progress">
              <Slider
                value={sliderFormat}
                onChange={sliderChange}
                onAfterChange={sliderAfChange}
              />
              <div className="time">
                <span className="now-time">{nowTimeFormat}</span>
                <span className="divider"></span>
                <span className="duration">{allTimeFormat}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={setNowTimeFun} />
    </PlayBarWrapper>
  );
});
