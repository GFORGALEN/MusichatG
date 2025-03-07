import {createBrowserRouter} from 'react-router-dom'

import Browse from "@/pages/Menu/Browse.jsx";
import Layout from "@/pages/Layout.jsx";
import Account from "@/pages/Menu/User/Account.jsx";
import Setting from "@/pages/Menu/User/User.jsx";
import Recent from "@/pages/Menu/User/Recent.jsx"
import GuessYouLike from "@/pages/Menu/User/GuessYouLike.jsx"
import Playlist from "@/pages/Menu/User/Playlist.jsx"
import Artist from "@/pages/Menu/Discover/Artist.jsx";
import NewRelease from "@/pages/Menu/Discover/NewRelease.jsx";
import SearchResult from "@/pages/Menu/SearchResult.jsx";
import ChatWithBot from "@/pages/Menu/ChatWithBot.jsx";
import GroupChat from "@/pages/Menu/GroupChat.jsx";
import AlbumDetails from "@/pages/Menu/Discover/AlbumDetails.jsx";
import ArtistDetail from '../pages/Menu/Discover/ArtistDetail';
import PlaylistDetails from '@/pages/Menu/User/PlaylistDetails';
import TrackDetail from '@/pages/Menu/TrackDetail.jsx';
import YourFollow from "@/pages/Menu/User/YourFollow.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/home',
                element: <Browse></Browse>
            },
            {
                path: '/account',
                element: <Account></Account>
            },
            {
                path: '/setting',
                element: <Setting></Setting>
            },
            {
                path: '/recent',
                element: <Recent></Recent>
            },
            {
                path: '/favourite',
                element: <GuessYouLike></GuessYouLike>
            },
            {
                path: '/playlist',
                element: <Playlist></Playlist>
            },
            {
                path: 'playlist/:id',
                element: <PlaylistDetails/>
            },
            {
                path: '/newRelease',
                element: <NewRelease></NewRelease>,
            },
            {
                path: 'album/:id',
                element: <AlbumDetails/>
            },
            {
                path: '/artist',
                element: <Artist/>
            },
            {
                path: 'artist/:id',
                element: <ArtistDetail/>
            },
            {
                path: '/searchResult',
                element: <SearchResult/>
            },
            {
                path: '/chatWithBot',
                element: <ChatWithBot/>
            },
            {
                path: '/groupChat',
                element: <GroupChat/>
            },
            {
                path: "/songDetails/:id",
                element: <TrackDetail/>
            },
            {
                path: "/yourFollow",
                element: <YourFollow/>
            },
            {
                path: "yourFollow/:id",
                element: <ArtistDetail/>
            }
        ]
    }
], {
    basename: '/Musichat'
})

export default router;