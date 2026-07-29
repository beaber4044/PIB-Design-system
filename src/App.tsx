import { useState } from "react";
import { Accordion } from "./components/Accordion";
import { AppBar } from "./components/AppBar";
import { AppMainHeader } from "./components/AppMainHeader";
import { Avatar } from "./components/Avatar";
import { Badge } from "./components/Badge";
import { BottomNavigation } from "./components/BottomNavigation";
import { Button } from "./components/Button";
import { Card, CardDescription, CardTitle } from "./components/Card";
import { Checkbox } from "./components/Checkbox";
import { Chip } from "./components/Chip";
import { Divider } from "./components/Divider";
import { EmptyState } from "./components/EmptyState";
import { Header } from "./components/Header";
import { Icon, icons, type IconName } from "./components/Icon";
import { Input } from "./components/Input";
import { ListItem } from "./components/ListItem";
import { Modal } from "./components/Modal";
import { NotificationBanner } from "./components/NotificationBanner";
import { PostCard } from "./components/PostCard";
import { ProductCard } from "./components/ProductCard";
import { ProfileCard } from "./components/ProfileCard";
import { ProgressBar } from "./components/ProgressBar";
import { Radio } from "./components/Radio";
import { Rating } from "./components/Rating";
import { SearchBar } from "./components/SearchBar";
import { Select } from "./components/Select";
import { Skeleton } from "./components/Skeleton";
import { StatCard } from "./components/StatCard";
import { Stepper } from "./components/Stepper";
import { Switch } from "./components/Switch";
import { Tabs } from "./components/Tabs";
import { Textarea } from "./components/Textarea";
import { Toast } from "./components/Toast";
import { Tooltip } from "./components/Tooltip";

const iconNames = Object.keys(icons) as IconName[];

const colorGroups: { name: string; shades: [string, string][] }[] = [
  {
    name: "Brand",
    shades: [
      ["50", "var(--color-brand-50)"],
      ["100", "var(--color-brand-100)"],
      ["200", "var(--color-brand-200)"],
      ["300", "var(--color-brand-300)"],
      ["400", "var(--color-brand-400)"],
      ["500", "var(--color-brand-500)"],
      ["600", "var(--color-brand-600)"],
      ["700", "var(--color-brand-700)"],
      ["800", "var(--color-brand-800)"],
      ["900", "var(--color-brand-900)"],
    ],
  },
  {
    name: "Neutral",
    shades: [
      ["0", "var(--color-neutral-0)"],
      ["50", "var(--color-neutral-50)"],
      ["100", "var(--color-neutral-100)"],
      ["200", "var(--color-neutral-200)"],
      ["300", "var(--color-neutral-300)"],
      ["400", "var(--color-neutral-400)"],
      ["500", "var(--color-neutral-500)"],
      ["600", "var(--color-neutral-600)"],
      ["700", "var(--color-neutral-700)"],
      ["800", "var(--color-neutral-800)"],
      ["900", "var(--color-neutral-900)"],
      ["950", "var(--color-neutral-950)"],
    ],
  },
  {
    name: "Semantic",
    shades: [
      ["success", "var(--color-success-500)"],
      ["warning", "var(--color-warning-500)"],
      ["danger", "var(--color-danger-500)"],
      ["info", "var(--color-info-500)"],
    ],
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-neutral-900 mb-6 border-b border-neutral-200 pb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(true);
  const [tab, setTab] = useState("all");
  const [liked, setLiked] = useState(false);
  const [navValue, setNavValue] = useState("home");
  const [postLiked, setPostLiked] = useState(true);
  const [following, setFollowing] = useState(false);
  const [rating, setRating] = useState(4);
  const [quantity, setQuantity] = useState(2);
  const [searchValue, setSearchValue] = useState("디자인 시스템");
  const [chipSelected, setChipSelected] = useState<string[]>(["전체"]);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [selectedTracks, setSelectedTracks] = useState<string[]>(["t2"]);
  const [tasks, setTasks] = useState([
    { id: "d1", title: "디자인 리뷰 준비" },
    { id: "d2", title: "온보딩 카피 수정" },
    { id: "d3", title: "아이콘셋 정리" },
  ]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="text-4xl font-bold text-neutral-900 mb-2">
          Design System
        </h1>
        <p className="text-neutral-500">
          PIB 토큰 기반 컴포넌트 라이브러리 · React + Tailwind CSS
        </p>
      </header>

      <Section title="Colors">
        <div className="space-y-8">
          {colorGroups.map((group) => (
            <div key={group.name}>
              <h3 className="text-sm font-medium text-neutral-500 mb-3">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.shades.map(([label, value]) => (
                  <div key={label} className="text-center">
                    <div
                      className="w-16 h-16 rounded-md border border-neutral-200"
                      style={{ background: value }}
                    />
                    <span className="text-xs text-neutral-500 mt-1 block">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography">
        <div className="space-y-3">
          <p className="text-4xl font-bold text-neutral-900">Heading 4xl</p>
          <p className="text-3xl font-bold text-neutral-900">Heading 3xl</p>
          <p className="text-2xl font-semibold text-neutral-900">Heading 2xl</p>
          <p className="text-xl font-semibold text-neutral-900">Heading xl</p>
          <p className="text-lg text-neutral-900">Body lg</p>
          <p className="text-base text-neutral-900">Body base</p>
          <p className="text-sm text-neutral-500">Body sm</p>
          <p className="text-xs text-neutral-500">Caption xs</p>
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </Section>

      <Section title="Inputs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
          <Input placeholder="Default input" />
          <Input placeholder="Error input" error defaultValue="invalid value" />
          <Input placeholder="Disabled input" disabled />
        </div>
      </Section>

      <Section title="Form Controls">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
          <div className="space-y-3">
            <Checkbox id="cb1" label="체크박스 옵션" defaultChecked />
            <Checkbox id="cb2" label="비활성 체크박스" disabled />
            <div className="flex flex-col gap-2 pt-2">
              <Radio id="r1" name="radio-demo" label="라디오 옵션 A" defaultChecked />
              <Radio id="r2" name="radio-demo" label="라디오 옵션 B" />
            </div>
            <div className="pt-2">
              <Switch id="sw1" label="알림 받기" defaultChecked />
            </div>
          </div>
          <div className="space-y-3">
            <Select defaultValue="">
              <option value="" disabled>
                옵션을 선택하세요
              </option>
              <option value="a">옵션 A</option>
              <option value="b">옵션 B</option>
            </Select>
            <Textarea placeholder="여러 줄 텍스트를 입력하세요" />
          </div>
        </div>
      </Section>

      <Section title="Badges">
        <div className="flex flex-wrap gap-2">
          <Badge tone="neutral">Neutral</Badge>
          <Badge tone="brand">Brand</Badge>
          <Badge tone="success">Success</Badge>
          <Badge tone="warning">Warning</Badge>
          <Badge tone="danger">Danger</Badge>
          <Badge tone="info">Info</Badge>
        </div>
      </Section>

      <Section title="Cards">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardTitle>Card title</CardTitle>
            <CardDescription>
              카드는 콘텐츠를 그룹화하는 기본 컨테이너입니다.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Elevated content</CardTitle>
            <CardDescription>
              shadow-sm과 radius-lg 토큰을 사용합니다.
            </CardDescription>
            <div className="mt-4">
              <Button size="sm">Action</Button>
            </div>
          </Card>
        </div>

        <p className="text-xs text-neutral-500 mt-6 mb-2">
          Product Card (쇼핑 상품 카드)
        </p>
        <div className="flex flex-wrap gap-4">
          <ProductCard
            name="무선 이어폰 프로"
            price={129000}
            discountPercent={20}
            liked={liked}
            onLikeToggle={() => setLiked((v) => !v)}
          />
          <ProductCard name="심플 백팩" price={59000} />
        </div>
      </Section>

      <Section title="Overlays">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={() => setModalOpen(true)}>모달 열기</Button>
            <Tooltip content="브랜드 색상 토큰을 사용합니다">
              <Button variant="outline">호버해서 툴팁 보기</Button>
            </Tooltip>
          </div>

          {toastVisible && (
            <Toast
              tone="success"
              message="저장이 완료되었습니다."
              onClose={() => setToastVisible(false)}
            />
          )}

          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="알림"
            footer={
              <>
                <Button variant="ghost" onClick={() => setModalOpen(false)}>
                  취소
                </Button>
                <Button onClick={() => setModalOpen(false)}>확인</Button>
              </>
            }
          >
            정말로 이 작업을 진행하시겠어요?
          </Modal>
        </div>
      </Section>

      <Section title="Navigation">
        <div className="space-y-6">
          <div>
            <p className="text-xs text-neutral-500 mb-2">Header (Web)</p>
            <div className="border border-neutral-200 rounded-lg overflow-hidden">
              <Header />
            </div>
          </div>
          <div>
            <p className="text-xs text-neutral-500 mb-2">
              App Main Header (Mobile, 홈)
            </p>
            <div className="w-[320px] border border-neutral-200 rounded-lg overflow-hidden">
              <AppMainHeader />
            </div>
          </div>
          <div>
            <p className="text-xs text-neutral-500 mb-2">
              App Bar (Mobile, 서브 화면)
            </p>
            <div className="w-[320px] border border-neutral-200 rounded-lg overflow-hidden">
              <AppBar
                title="마이페이지"
                showBack
                right={<Icon name="bell" size={18} />}
              />
            </div>
          </div>
          <div>
            <p className="text-xs text-neutral-500 mb-2">
              Bottom Navigation (Mobile)
            </p>
            <div className="w-[320px] border border-neutral-200 rounded-lg overflow-hidden">
              <BottomNavigation
                value={navValue}
                onChange={setNavValue}
                items={[
                  { value: "home", label: "홈", icon: "home" },
                  { value: "search", label: "검색", icon: "search" },
                  { value: "cart", label: "장바구니", icon: "cart" },
                  { value: "user", label: "MY", icon: "user" },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Tabs & Lists">
        <div className="space-y-8">
          <div>
            <p className="text-xs text-neutral-500 mb-2">Underline (기본)</p>
            <Tabs
              variant="underline"
              value={tab}
              onChange={setTab}
              items={[
                { value: "all", label: "전체", count: 12 },
                { value: "unread", label: "안읽음" },
                { value: "starred", label: "즐겨찾기" },
              ]}
            />
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-2">Pill (세그먼트)</p>
            <Tabs
              variant="pill"
              value={tab}
              onChange={setTab}
              items={[
                { value: "all", label: "전체" },
                { value: "unread", label: "안읽음" },
                { value: "starred", label: "즐겨찾기" },
              ]}
            />
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-2">Bordered</p>
            <Tabs
              variant="bordered"
              value={tab}
              onChange={setTab}
              items={[
                { value: "all", label: "전체", count: 12 },
                { value: "unread", label: "안읽음", count: 3 },
                { value: "starred", label: "즐겨찾기" },
              ]}
            />
          </div>

          <div className="max-w-md">
            <p className="text-xs text-neutral-500 mb-2">아이콘 리스트</p>
            <ListItem
              leading={<Icon name="package" />}
              title="주문 배송 조회"
              description="진행중 1건"
              showChevron
            />
            <ListItem
              leading={<Icon name="heart" />}
              title="찜한 상품"
              description="12개"
              showChevron
            />
            <ListItem
              leading={<Icon name="settings" />}
              title="설정"
              showChevron
            />
          </div>

          <div className="max-w-md">
            <p className="text-xs text-neutral-500 mb-2">이미지/썸네일 리스트</p>
            {[
              { id: "t1", title: "여름밤", desc: "잔나비" },
              { id: "t2", title: "밤편지", desc: "아이유" },
              { id: "t3", title: "밤하늘의 별을", desc: "경서" },
            ].map((track) => (
              <ListItem
                key={track.id}
                thumbnail={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Crect width='44' height='44' fill='%23c2f0d7'/%3E%3C/svg%3E`}
                title={track.title}
                description={track.desc}
                trailing={<Icon name="play" size={16} />}
              />
            ))}
          </div>

          <div className="max-w-md">
            <p className="text-xs text-neutral-500 mb-2">선택형 리스트</p>
            {[
              { id: "t1", title: "여름밤", desc: "잔나비" },
              { id: "t2", title: "밤편지", desc: "아이유" },
              { id: "t3", title: "밤하늘의 별을", desc: "경서" },
            ].map((track) => (
              <ListItem
                key={track.id}
                selectable
                selected={selectedTracks.includes(track.id)}
                onClick={() =>
                  setSelectedTracks((prev) =>
                    prev.includes(track.id)
                      ? prev.filter((v) => v !== track.id)
                      : [...prev, track.id]
                  )
                }
                title={track.title}
                description={track.desc}
              />
            ))}
          </div>

          <div className="max-w-md">
            <p className="text-xs text-neutral-500 mb-2">액션 리스트</p>
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                leading={<Icon name="check" size={16} />}
                title={task.title}
                trailing={
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.stopPropagation();
                      setTasks((prev) => prev.filter((t) => t.id !== task.id));
                    }}
                    className="text-neutral-400 hover:text-danger-500"
                  >
                    <Icon name="trash" size={16} />
                  </span>
                }
              />
            ))}
            {tasks.length === 0 && (
              <p className="text-xs text-neutral-400 py-3">모든 작업을 완료했어요.</p>
            )}
          </div>
        </div>
      </Section>

      <Section title="Icons">
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
          {iconNames.map((name) => (
            <div
              key={name}
              className="flex flex-col items-center gap-1.5 text-neutral-600"
            >
              <Icon name={name} className="text-neutral-700" />
              <span className="text-xs text-neutral-500">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Status">
        <div className="space-y-8">
          <div>
            <p className="text-xs text-neutral-500 mb-2">Avatar</p>
            <div className="flex items-center gap-3">
              <Avatar name="김철수" size="sm" />
              <Avatar name="이영희" size="md" />
              <Avatar name="박민준" size="lg" />
            </div>
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-2">Divider</p>
            <div className="max-w-sm space-y-4">
              <Divider />
              <Divider label="또는" />
            </div>
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-2">Skeleton</p>
            <div className="flex items-center gap-3 max-w-sm">
              <Skeleton variant="circle" className="w-10 h-10" />
              <div className="flex-1 space-y-2">
                <Skeleton variant="text" className="w-3/4" />
                <Skeleton variant="text" className="w-1/2" />
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-2">Empty State</p>
            <div className="max-w-sm border border-neutral-200 rounded-lg">
              <EmptyState
                icon="cart"
                title="장바구니가 비어있어요"
                description="관심 상품을 담아보세요."
                action={<Button size="sm">쇼핑 계속하기</Button>}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Content Feed">
        <div className="space-y-6 max-w-md">
          <div>
            <p className="text-xs text-neutral-500 mb-2">Profile Card</p>
            <ProfileCard
              name="김지우"
              handle="jiwoo"
              bio="프로덕트 디자이너 · 좋은 인터페이스를 만듭니다."
              following={following}
              onFollowToggle={() => setFollowing((v) => !v)}
            />
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-2">Post Card</p>
            <PostCard
              author="이서준"
              timeAgo="3시간 전"
              content={"오늘 새 디자인 시스템 컴포넌트를 정리했어요.\n피드백 환영합니다!"}
              likeCount={postLiked ? 25 : 24}
              commentCount={6}
              liked={postLiked}
              onLikeToggle={() => setPostLiked((v) => !v)}
            />
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-2">Notification Banner</p>
            {bannerVisible && (
              <NotificationBanner
                tone="info"
                title="새로운 업데이트가 있어요"
                description="앱을 최신 버전으로 업데이트해보세요."
                onClose={() => setBannerVisible(false)}
              />
            )}
          </div>
        </div>
      </Section>

      <Section title="Data & Status">
        <div className="space-y-6">
          <div>
            <p className="text-xs text-neutral-500 mb-2">Stat Card</p>
            <div className="grid grid-cols-3 gap-3 max-w-md">
              <StatCard label="팔로워" value="1,204" trend={4.2} />
              <StatCard label="게시물" value="86" trend={-1.1} />
              <StatCard label="좋아요" value="9,530" />
            </div>
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-2">Progress Bar</p>
            <div className="max-w-sm">
              <ProgressBar value={68} showLabel />
            </div>
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-2">Rating</p>
            <Rating value={rating} onChange={setRating} />
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-2">Chip</p>
            <div className="flex flex-wrap gap-2">
              {["전체", "디자인", "개발", "마케팅"].map((label) => (
                <Chip
                  key={label}
                  selected={chipSelected.includes(label)}
                  onClick={() =>
                    setChipSelected((prev) =>
                      prev.includes(label)
                        ? prev.filter((v) => v !== label)
                        : [...prev, label]
                    )
                  }
                >
                  {label}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Input & Interaction">
        <div className="space-y-6">
          <div className="max-w-sm">
            <p className="text-xs text-neutral-500 mb-2">Search Bar</p>
            <SearchBar
              value={searchValue}
              onChange={setSearchValue}
              onClear={() => setSearchValue("")}
              placeholder="검색어를 입력하세요"
            />
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-2">Stepper</p>
            <Stepper value={quantity} min={1} max={10} onChange={setQuantity} />
          </div>

          <div className="max-w-md">
            <p className="text-xs text-neutral-500 mb-2">Accordion</p>
            <Accordion
              defaultOpen="a1"
              items={[
                {
                  value: "a1",
                  title: "알림은 어떻게 설정하나요?",
                  content: "설정 > 알림 메뉴에서 원하는 항목을 켜고 끌 수 있어요.",
                },
                {
                  value: "a2",
                  title: "계정을 삭제하려면?",
                  content: "설정 > 계정 관리에서 계정 삭제를 요청할 수 있습니다.",
                },
                {
                  value: "a3",
                  title: "다크 모드를 지원하나요?",
                  content: "시스템 설정을 따라 라이트/다크 모드가 자동 전환됩니다.",
                },
              ]}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;
