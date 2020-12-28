import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getTopBannersAction } from '../../store/actionCreators'

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'

export default memo(function GTopBanner() {

  //Hooks
  const [bgIndex, setBgIndex] = useState(0)

  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])
  const bannerRef = useRef()

  const carouselBeforeChange = useCallback(
    (from, to) => {
      setBgIndex(to)
    },
    [],
  )

  const bgImages = topBanners[bgIndex] && (topBanners[bgIndex].imageUrl + "?imageView&blur=40x20")

  
  return (
    <BannerWrapper bgImage={bgImages}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={carouselBeforeChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={(e) => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={(e) => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
