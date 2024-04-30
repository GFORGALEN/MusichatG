import {useLocation} from "react-router-dom";
import ImageCard from "@/components/ImageCard.jsx";
import {useSelector} from "react-redux";
import TrackList from "@/components/TrackList.jsx";
import {NavLink} from "react-router-dom";

const SearchResult = () => {
    const location = useLocation();
    const dataFromRedux = useSelector(state => state.music.searchResult);
    const someData = location.state?.someData || dataFromRedux || {};

    const artistsItems = someData?.artists?.items || [];
    const albumsItems = someData?.albums?.items || [];
    const tracksItems = someData?.tracks?.items || [];

    const hasData = artistsItems.length || albumsItems.length || tracksItems.length;

    return (
        <>
            {someData.artists && <div className={'grid grid-cols-5 overflow-x-hidden h-[30rem]'}>
                {artistsItems.map((item) => (
                    <ImageCard data={item} key={item.id}/>
                ))}
            </div>}
            {someData.albums && <div className={'grid grid-cols-5 overflow-x-hidden h-[30rem]'}>
                {albumsItems.map((item) => (
                    <NavLink to={`/album/${item.id}`} className='text-lg font-poppins no-underline '>
                        <ImageCard data={item} key={item.id} />
                    </NavLink>
                ))}
            </div>}
            {someData.tracks && <div className={'overflow-x-hidden h-[30rem]'}>
                <table className={'min-w-full leading-normal'}>
                    <thead>
                    <tr>
                        <th className={"px-5 py-3 border-b-2 border-gray-200 text-left text-xl font-poppins text-gray-600 uppercase tracking-wider w-96"}>Track</th>
                        <th className={'px-5 py-3 border-b-2 border-gray-200 text-left text-xl font-poppins text-gray-600 uppercase tracking-wider'}>Singer</th>
                        <th className={'px-5 py-3 border-b-2 border-gray-200 text-left text-xl font-poppins text-gray-600 uppercase tracking-wider w-36'}>Duration</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tracksItems.map((item) => (
                        <TrackList data={item} key={item.id}/>
                    ))}
                    </tbody>
                </table>
            </div>}
            {!hasData && <div className="text-xl font-poppins text-center py-10">Search what you want!</div>}
        </>
    );
};

export default SearchResult;
