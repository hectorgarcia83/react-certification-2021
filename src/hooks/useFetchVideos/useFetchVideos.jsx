import { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';

const key = process.env.REACT_APP_GOOGLE_API_KEY;
const apiUrlBase = `https://www.googleapis.com/youtube/v3/`;

export default function useFetchVideos() {
  const [videos, setVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState();
  const [loading, setLoading] = useState();
  const $timeoutRef = useRef();

  useEffect(() => {
    return () => {};
  }, []);

  const searchVideos = useCallback(async (search) => {
    if ($timeoutRef.current) {
      clearTimeout($timeoutRef.current);
    }

    $timeoutRef.current = setTimeout(async () => {
      try {
        setLoading(true);
        const url = `${apiUrlBase}search?key=${key}&part=id,snippet&maxResults=25&q=${search}`;
        const { data } = await axios.get(url);
        const listVideos = data.items.filter((item) => item.id.kind === 'youtube#video');
        setVideos(listVideos);
      } catch (error) {
        console.log('Error getting videos', { error });
      } finally {
        setLoading(false);
      }
    }, 500);
  }, []);

  const getVideoDetail = useCallback(async (id) => {
    try {
      setLoading(true);
      const url = `${apiUrlBase}videos?key=${key}&id=${id}&part=snippet,contentDetails,statistics,status,player`;
      const { data } = await axios.get(url);
      const detail = data.items[0];
      setVideoDetail(detail);
    } catch (error) {
      console.log('Error getting video detail', { error });
    } finally {
      setLoading(false);
    }
  }, []);

  return { searchVideos, videos, getVideoDetail, videoDetail, loading };
}
