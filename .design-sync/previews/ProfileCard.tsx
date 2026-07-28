import { useState } from 'react'
import { ProfileCard } from 'design-system'

export function Basic() {
  return (
    <ProfileCard
      name="김지우"
      handle="jiwoo"
      bio="프로덕트 디자이너 · 좋은 인터페이스를 만듭니다."
      avatarSrc="https://i.pravatar.cc/150?img=47"
    />
  )
}

export function Following() {
  const [following, setFollowing] = useState(true)
  return (
    <ProfileCard
      name="이서준"
      handle="seojoon.dev"
      bio="프론트엔드 개발자 · React와 디자인 시스템에 관심이 많아요."
      avatarSrc="https://i.pravatar.cc/150?img=12"
      following={following}
      onFollowToggle={() => setFollowing((v) => !v)}
    />
  )
}

export function NotFollowing() {
  const [following, setFollowing] = useState(false)
  return (
    <ProfileCard
      name="박하은"
      handle="haeun_p"
      bio="여행과 사진을 좋아합니다."
      avatarSrc="https://i.pravatar.cc/150?img=32"
      following={following}
      onFollowToggle={() => setFollowing((v) => !v)}
    />
  )
}

export function NoBio() {
  return <ProfileCard name="최민수" handle="minsoo" avatarSrc="https://i.pravatar.cc/150?img=8" />
}
