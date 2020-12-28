import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom'


//import GDiscover from '@page/discover';
const GDiscover = lazy(_ => import("@page/discover"))
//import GRecommend from '@page/discover/c-pages/recommend'
const GRecommend = lazy(_ => import("@page/discover/c-pages/recommend"))
//import GRanking from '@page/discover/c-pages/ranking'
const GRanking = lazy(_ => import("@page/discover/c-pages/ranking"))
//import GSongs from '@page/discover/c-pages/songs'
const GSongs = lazy(_ => import("@page/discover/c-pages/songs"))
//import GDjradio from '@page/discover/c-pages/djradio'
const GDjradio = lazy(_ => import("@page/discover/c-pages/djradio"))
//import GArtist from '@page/discover/c-pages/artist'
const GArtist = lazy(_ => import("@page/discover/c-pages/artist"))
//import GAlbum from '@page/discover/c-pages/album'
const GAlbum = lazy(_ => import("@page/discover/c-pages/album"))
//import GPlayer from '@page/player'
const GPlayer = lazy(_ => import("@page/player"))
//import GMine from '@page/mine'
const GMine = lazy(_ => import("@page/mine"))
// import GFriends from '@page/friends'
const GFriends = lazy(_ => import("@page/friends"))


const routers = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: '/discover',
    // 血的教训，千万别加下边这个
    // exact: true,
    component: GDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        component: GRecommend
      },
      {
        path: '/discover/ranking',
        component: GRanking
      },
      {
        path: '/discover/songs',
        component: GSongs
      },
      {
        path: '/discover/djradio',
        component: GDjradio
      },
      {
        path: '/discover/artist',
        component: GArtist
      },
      {
        path: '/discover/album',
        component: GAlbum
      },
      {
        path: '/discover/player',
        component: GPlayer
      }
    ]
  },
  {
    path: '/mine',
    component: GMine
  },
  {
    path: '/friend',
    component: GFriends
  },
]
export default routers;