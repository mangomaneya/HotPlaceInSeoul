import useAuthStore from '@/store/zustand/authStore';

export default function Home() {
  //전역상태로 관리 될 유저정보 로직 확인을 위한 임시 작업 (삭제예정)
  const userData = useAuthStore((state) => state.userData);
  const { token, userId, userEmail, userNickname } = userData;
  return (
    <div className='bg-point'>
      홈<p>access_token : {token}</p>
      <p>id : {userId}</p>
      <p>email : {userEmail}</p>
      <p>nickname : {userNickname}</p>
    </div>
  );
}
