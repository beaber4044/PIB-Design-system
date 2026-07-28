import { useState } from 'react'
import { ProductCard } from 'design-system'

export function Basic() {
  return (
    <ProductCard
      image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
      name="무선 이어폰 프로"
      price={129000}
    />
  )
}

export function Discounted() {
  return (
    <ProductCard
      image="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400"
      name="심플 캔버스 백팩"
      price={59000}
      discountPercent={20}
    />
  )
}

export function Liked() {
  const [liked, setLiked] = useState(true)
  return (
    <ProductCard
      image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
      name="러닝화 에어쿠션"
      price={89000}
      discountPercent={15}
      liked={liked}
      onLikeToggle={() => setLiked((v) => !v)}
    />
  )
}

export function NoImage() {
  return (
    <ProductCard
      name="무선 충전 거치대"
      price={32000}
    />
  )
}
