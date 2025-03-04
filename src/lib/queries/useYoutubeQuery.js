import { QUERY_KEYS } from '@/constants/query-keys';
import { useQuery } from '@tanstack/react-query';
const { YOUTUBE } = QUERY_KEYS;
const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = import.meta.env.VITE_YOUTUBE_KEY;
const REQUEST_NUM_OF_YOUTUBE_LIST = 3; // 받아올 게시글의 개수
const REQUEST_ORDER = 'relevance'; // 관련성 높은 순으로 받아옴
const REQUEST_TYPE = 'video'; // 요청 타입 : 비디오
const REQUEST_DURATION = 'short'; // 4분 미만의 영상만 받아옴

export const useYoutubeQuery = ({ storeId, area, storeName }) => {
  const getYoutubeData = async () => {
    try {
      const query = `${storeName} ${area}`;
      const response = await fetch(
        `${YOUTUBE_BASE_URL}?part=snippet&q=${encodeURIComponent(
          query
        )}&maxResults=${REQUEST_NUM_OF_YOUTUBE_LIST}&order=${REQUEST_ORDER}&type=${REQUEST_TYPE}&videoDuration=${REQUEST_DURATION}&key=${API_KEY}`
      );
      const data = await response.json();
      if (!response.ok) {
        const { error } = data;
        throw { code: error?.code ?? 'unknown code', message: error?.message ?? 'unknown error' };
      }
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  /**
   *  서버에서 내려온 data를 정제하여 필요한 부분만 뽑아내는 함수
   * @param {object} data
   * @returns {Array<object>}
   */
  const parsedData = (data) => {
    const { items } = data;
    return items.map((item) => {
      const { id, snippet } = item;
      const videoId = id.videoId;
      const { channelTitle, description, publishedAt, title } = snippet;
      return {
        videoId,
        channelTitle,
        description,
        publishedAt,
        title,
      };
    });
  };

  const {
    data: youtubeData = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: [YOUTUBE, storeId],
    queryFn: getYoutubeData,
    staleTime: 1000 * 60 * 180, //3시간
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: parsedData,
  });

  return { youtubeData, isPending, isError, error };
};
