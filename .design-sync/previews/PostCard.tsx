import { PostCard } from 'design-system'

export function Basic() {
  return (
    <PostCard
      author="김민지"
      timeAgo="3시간 전"
      content={
        '오늘 새로 산 무선 이어폰 정말 만족스러워요!\n노이즈 캔슬링도 훌륭하고 배터리도 오래 가네요.'
      }
      likeCount={24}
      commentCount={5}
    />
  )
}

export function Liked() {
  return (
    <PostCard
      author="박서준"
      timeAgo="1일 전"
      content="주말에 다녀온 카페 후기 남깁니다. 분위기도 좋고 커피 맛도 훌륭했어요."
      likeCount={102}
      commentCount={18}
      liked
    />
  )
}
