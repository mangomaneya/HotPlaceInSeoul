import { QUERY_KEYS } from '@constants/query-keys';
import supabase from '@lib/api/supabaseAPI';
const { BOOKMARKS } = QUERY_KEYS;
export const reqUserBookmark = async (params) => {
  const { storeId, userId } = params;
  const { data, error } = await supabase.from(BOOKMARKS).select('id').match({ place_id: storeId, user_id: userId });
  if (error) {
    console.error(error);
    throw new Error('데이터를 불러오지 못했습니다.');
  }
  return data;
};

export const postToBookmark = async (payload) => {
  const { storeId, userId } = payload;
  const { error } = await supabase.from(BOOKMARKS).insert({ user_id: userId, place_id: storeId });

  if (error) {
    throw error;
  }
  return true;
};

export const removeFromBookmark = async (payload) => {
  const { userId, storeId } = payload;
  const { error } = await supabase.from(BOOKMARKS).delete().match({ user_id: userId, place_id: storeId });
  if (error) {
    throw error;
  }
  return true;
};
