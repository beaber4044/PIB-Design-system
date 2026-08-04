import { useState } from "react";
import { Accordion } from "./components/Accordion";
import { AdminTopbar } from "./components/AdminTopbar";
import { AppBar } from "./components/AppBar";
import { AppCard } from "./components/AppCard";
import { AppMainHeader } from "./components/AppMainHeader";
import { Avatar } from "./components/Avatar";
import { Badge } from "./components/Badge";
import { BottomNavigation } from "./components/BottomNavigation";
import { Breadcrumb } from "./components/Breadcrumb";
import { Button } from "./components/Button";
import { Card, CardDescription, CardTitle } from "./components/Card";
import { Checkbox } from "./components/Checkbox";
import { Chip } from "./components/Chip";
import { DataTable } from "./components/DataTable";
import { DateRangeField } from "./components/DateRangeField";
import { Divider } from "./components/Divider";
import { EmptyState } from "./components/EmptyState";
import { FilterBar, FilterField } from "./components/FilterBar";
import { Header } from "./components/Header";
import { Icon, icons, type IconName } from "./components/Icon";
import { IconTile } from "./components/IconTile";
import { IconButton } from "./components/IconButton";
import { Input } from "./components/Input";
import { LineChart } from "./components/LineChart";
import { ListItem } from "./components/ListItem";
import { LogoutButton } from "./components/LogoutButton";
import { Modal } from "./components/Modal";
import { NotificationBanner } from "./components/NotificationBanner";
import { Pagination } from "./components/Pagination";
import { PeriodPicker } from "./components/PeriodPicker";
import { PostCard } from "./components/PostCard";
import { ProductCard } from "./components/ProductCard";
import { ProfileCard } from "./components/ProfileCard";
import { ProgressBar } from "./components/ProgressBar";
import { Radio } from "./components/Radio";
import { Rating } from "./components/Rating";
import { SearchBar } from "./components/SearchBar";
import { PasswordInput } from "./components/PasswordInput";
import { Select } from "./components/Select";
import { Sidebar, SidebarToggle } from "./components/Sidebar";
import { Skeleton } from "./components/Skeleton";
import { StatCard } from "./components/StatCard";
import { Stepper } from "./components/Stepper";
import { Switch } from "./components/Switch";
import { Table } from "./components/Table";
import { TableToolbar } from "./components/TableToolbar";
import { LoginCard } from "./components/LoginCard";
import { Tabs } from "./components/Tabs";
import { Textarea } from "./components/Textarea";
import { Toast } from "./components/Toast";
import { Tooltip } from "./components/Tooltip";
import { SetupChecklistCard } from "./components/SetupChecklistCard";
import { AccountInfoPanel } from "./components/AccountInfoPanel";
import { StatSummaryList } from "./components/StatSummaryList";
import { TodayTaskBar } from "./components/TodayTaskBar";
import { SegmentedToggle } from "./components/SegmentedToggle";
import { DropdownButton } from "./components/DropdownButton";
import { PromoBanner } from "./components/PromoBanner";
import { TreeListTable } from "./components/TreeListTable";

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
  const [adminNav, setAdminNav] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [postLiked, setPostLiked] = useState(true);
  const [following, setFollowing] = useState(false);
  const [rating, setRating] = useState(4);
  const [quantity, setQuantity] = useState(2);
  const [searchValue, setSearchValue] = useState("디자인 시스템");
  const [chipSelected, setChipSelected] = useState<string[]>(["전체"]);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [filterStart, setFilterStart] = useState("2026-07-01");
  const [filterEnd, setFilterEnd] = useState("2026-07-31");
  const [tablePage, setTablePage] = useState(1);
  const [tableSelected, setTableSelected] = useState<(string | number)[]>([2]);
  const [favoritedApps, setFavoritedApps] = useState<string[]>(["board"]);
  const [periodPreset, setPeriodPreset] = useState("1m");
  const [periodStart, setPeriodStart] = useState("2026-07-01");
  const [periodEnd, setPeriodEnd] = useState("2026-07-31");
  const [selectedTracks, setSelectedTracks] = useState<string[]>(["t2"]);
  const [topbarEvent, setTopbarEvent] = useState("");
  const [chartMetric, setChartMetric] = useState("count");
  const [promoVisible, setPromoVisible] = useState(true);
  const [exampleRegion, setExampleRegion] = useState("all");
  const [exampleGender, setExampleGender] = useState("all");
  const [examplePage, setExamplePage] = useState(1);
  const [dashboardRange, setDashboardRange] = useState("day");
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
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        <p className="text-xs text-neutral-500 mb-2">Icon Button</p>
        <div className="flex flex-wrap items-center gap-3">
          <IconButton icon="bell" variant="filled" aria-label="알림" />
          <IconButton icon="edit" variant="outline" aria-label="수정" />
          <IconButton icon="trash" variant="ghost" aria-label="삭제" />
          <IconButton icon="heart" variant="ghost" rounded aria-label="찜하기" />
          <IconButton icon="settings" variant="outline" size="sm" aria-label="설정" />
          <IconButton icon="search" variant="filled" size="lg" aria-label="검색" />
          <IconButton icon="trash" variant="ghost" disabled aria-label="삭제 (비활성)" />
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
            <PasswordInput placeholder="비밀번호를 입력하세요" />
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs text-neutral-500 mb-2">Logout Button</p>
          <div className="flex flex-wrap items-center gap-4">
            <LogoutButton variant="text" />
            <LogoutButton variant="box" />
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
          Product Card (아이템 카드)
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

      <Section title="Admin Sidebar">
        <p className="text-xs text-neutral-500 mb-3">
          관리자 화면용 좌측 내비게이션. 그룹 라벨, 배지, 접기/펼치기, 하단 사용자 정보를 지원합니다.
        </p>
        <div className="relative h-[420px] border border-neutral-200 rounded-lg overflow-hidden flex">
          <Sidebar
            groups={[
              {
                label: "개요",
                items: [
                  { value: "dashboard", label: "대시보드", icon: "home" },
                  { value: "analytics", label: "통계", icon: "star" },
                ],
              },
              {
                label: "관리",
                items: [
                  { value: "users", label: "사용자", icon: "user", badge: "3" },
                  { value: "content", label: "콘텐츠", icon: "package" },
                  { value: "orders", label: "주문", icon: "cart" },
                ],
              },
              {
                label: "설정",
                items: [{ value: "settings", label: "환경설정", icon: "settings" }],
              },
            ]}
            activeValue={adminNav}
            onNavigate={setAdminNav}
            collapsed={sidebarCollapsed}
            footer={
              !sidebarCollapsed ? (
                <div className="flex items-center gap-2">
                  <Avatar name="김지우" size="sm" />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-neutral-900 truncate">김지우</p>
                    <p className="text-[11px] text-neutral-400 truncate">관리자</p>
                  </div>
                </div>
              ) : (
                <Avatar name="김지우" size="sm" />
              )
            }
          />
          <SidebarToggle
            collapsed={sidebarCollapsed}
            onClick={() => setSidebarCollapsed((v) => !v)}
          />
          <div className="flex-1 bg-neutral-50 p-6">
            <p className="text-sm font-medium text-neutral-900 mb-1">
              현재 메뉴: {adminNav}
            </p>
            <p className="text-xs text-neutral-500">
              사이드바 경계선의 원형 버튼으로 접고 펼칠 수 있어요.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Admin & Platform">
        <p className="text-xs text-neutral-500 mb-4">
          어드민/플랫폼 화면에서 자주 쓰는 상단바, 브레드크럼, 검색 필터, 데이터 테이블,
          차트, 앱 카드입니다. 네이버웍스류 어드민 콘솔을 참고했습니다.
        </p>

        <div className="space-y-3 mb-8">
          <p className="text-xs text-neutral-500">
            Admin Topbar + Breadcrumb (햄버거 · 조직 전환 · 도움말 · 계정 메뉴 모두 동작)
          </p>
          <div className="rounded-lg border border-neutral-200 overflow-hidden">
            <AdminTopbar
              onMenuClick={() => setTopbarEvent("메뉴 버튼 클릭 → 사이드바 토글")}
              orgMenuItems={[
                { label: "PIB Cloud", onClick: () => setTopbarEvent("PIB Cloud로 전환") },
                { label: "PIB Healthcare", onClick: () => setTopbarEvent("PIB Healthcare로 전환") },
              ]}
              onInfoClick={() => setTopbarEvent("도움말 패널 열기")}
              userMenuItems={[
                { label: "내 정보", onClick: () => setTopbarEvent("내 정보 열기") },
                { label: "환경설정", onClick: () => setTopbarEvent("환경설정 열기") },
                { label: "로그아웃", danger: true, onClick: () => setTopbarEvent("로그아웃") },
              ]}
            />
            <div className="px-4 py-3 bg-neutral-0 border-b border-neutral-100">
              <Breadcrumb
                items={[
                  { label: "예약", href: "#" },
                  { label: "서비스", href: "#" },
                  { label: "게시판" },
                ]}
              />
            </div>
            {topbarEvent && (
              <div className="px-4 py-2 bg-neutral-50 text-xs text-neutral-500">
                최근 동작: {topbarEvent}
              </div>
            )}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-xs text-neutral-500 mb-2">Filter Bar</p>
          <FilterBar
            actions={
              <>
                <Button variant="outline" size="sm">
                  초기화
                </Button>
                <Button size="sm">검색</Button>
              </>
            }
          >
            <FilterField label="결제 일시">
              <DateRangeField
                startValue={filterStart}
                endValue={filterEnd}
                onStartChange={setFilterStart}
                onEndChange={setFilterEnd}
              />
            </FilterField>
            <FilterField label="카테고리">
              <Select className="w-32">
                <option>전체</option>
                <option>의류</option>
                <option>디지털/가전</option>
              </Select>
            </FilterField>
            <FilterField label="검색어">
              <Input placeholder="상품명 검색" className="w-40" />
            </FilterField>
          </FilterBar>
        </div>

        <div className="mb-8">
          <p className="text-xs text-neutral-500 mb-2">Period Picker (기간 설정)</p>
          <PeriodPicker
            preset={periodPreset}
            onPresetChange={setPeriodPreset}
            startValue={periodStart}
            endValue={periodEnd}
            onStartChange={setPeriodStart}
            onEndChange={setPeriodEnd}
          />
        </div>

        <div className="mb-8">
          <p className="text-xs text-neutral-500 mb-2">
            Table Toolbar (필터 패널과 목록 사이 액션 버튼 간격 — 절대 버튼을 바로 붙이지 않기)
          </p>
          <TableToolbar
            left="총 128명"
            right={
              <Button size="sm">
                <Icon name="plus" size={14} />
                사용자 등록
              </Button>
            }
          />
          <p className="text-xs text-neutral-500 mt-6 mb-2">
            Data Table (선택 · 정렬 · 페이지네이션)
          </p>
          <DataTable
            columns={[
              { key: "product", header: "상품명" },
              { key: "amount", header: "금액", align: "right" },
              { key: "category", header: "카테고리" },
              {
                key: "status",
                header: "거래상태",
                render: (row) => (
                  <Badge
                    tone={
                      row.status === "서비스 개시"
                        ? "success"
                        : row.status === "구매취소"
                        ? "danger"
                        : "neutral"
                    }
                  >
                    {row.status}
                  </Badge>
                ),
              },
            ]}
            data={[
              { id: 1, product: "셀러 지원 센터 상품명", amount: "50,000원", category: "의류", status: "서비스 대기" },
              { id: 2, product: "셀러 지원 센터 상품명", amount: "50,000원", category: "의류", status: "서비스 개시" },
              { id: 3, product: "셀러 지원 센터 상품명", amount: "50,000원", category: "디지털/가전", status: "구매취소" },
              { id: 4, product: "셀러 지원 센터 상품명", amount: "50,000원", category: "디지털/가전", status: "서비스 완료" },
            ]}
            selectedIds={tableSelected}
            onSelectedChange={setTableSelected}
            page={tablePage}
            totalPages={5}
            onPageChange={setTablePage}
          />
        </div>

        <div className="mb-8">
          <p className="text-xs text-neutral-500 mb-2">Pagination (단독)</p>
          <Pagination page={tablePage} totalPages={5} onChange={setTablePage} />
        </div>

        <div className="mb-8">
          <p className="text-xs text-neutral-500 mb-2">Stat Row + Line Chart</p>
          <div className="grid grid-cols-4 gap-3 mb-4">
            <StatCard label="식물 수" value="56" />
            <StatCard label="작업 수" value="56" />
            <StatCard label="보식 수" value="56" trend={4.2} />
            <StatCard label="작업 참여자" value="56" trend={-1.1} />
          </div>
          <LineChart
            labels={["월", "화", "수", "목", "금", "토", "일"]}
            series={[
              { name: "관수", color: "#03c75a", data: [1500, 1700, 1600, 1700, 2200, 2500, 2500] },
              { name: "꽃 판날", color: "#ef4444", data: [700, 800, 700, 800, 900, 1200, 1250] },
              { name: "분갈이", color: "#f59e0b", data: [400, 450, 400, 450, 500, 900, 850] },
              { name: "영양제 관리", color: "#3b82f6", data: [300, 320, 300, 320, 350, 450, 450] },
            ]}
          />
        </div>

        <div>
          <p className="text-xs text-neutral-500 mb-2">App Card (마켓플레이스)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <AppCard
              name="게시판"
              description="공지사항, 서비스 소식을 한 곳에서 관리하는 게시판 앱"
              favorited={favoritedApps.includes("board")}
              onFavoriteToggle={() =>
                setFavoritedApps((prev) =>
                  prev.includes("board")
                    ? prev.filter((v) => v !== "board")
                    : [...prev, "board"]
                )
              }
              onManage={() => {}}
            />
            <AppCard
              name="서약서"
              description="입사자 비밀유지 서약서 등 전자 서명 발송/관리"
              favorited={favoritedApps.includes("agreement")}
              onFavoriteToggle={() =>
                setFavoritedApps((prev) =>
                  prev.includes("agreement")
                    ? prev.filter((v) => v !== "agreement")
                    : [...prev, "agreement"]
                )
              }
              onManage={() => {}}
            />
          </div>
        </div>
      </Section>

      <Section title="Tabs, Lists & Table">
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

          <div>
            <p className="text-xs text-neutral-500 mb-2">표 형식 (Table)</p>
            <Table
              columns={[
                { key: "name", header: "이름" },
                { key: "role", header: "역할" },
                {
                  key: "status",
                  header: "상태",
                  render: (row) => (
                    <Badge
                      tone={
                        row.status === "진행중"
                          ? "info"
                          : row.status === "완료"
                          ? "success"
                          : "neutral"
                      }
                    >
                      {row.status}
                    </Badge>
                  ),
                },
                { key: "progress", header: "진행률", align: "right" },
              ]}
              data={[
                { id: 1, name: "홈 화면 리디자인", role: "김지우", status: "진행중", progress: "68%" },
                { id: 2, name: "온보딩 플로우", role: "이서준", status: "완료", progress: "100%" },
                { id: 3, name: "다크 모드 지원", role: "박민준", status: "대기", progress: "0%" },
                { id: 4, name: "아이콘셋 확장", role: "이영희", status: "진행중", progress: "40%" },
              ]}
            />
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

      <Section title="Colored Icons">
        <div className="space-y-8">
          <div>
            <p className="text-xs text-neutral-500 mb-2">
              솔리드 (Icon solid — 아이콘 자체를 색으로 채움)
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Icon name="home" solid size={28} className="text-brand-500" />
              <Icon name="star" solid size={28} className="text-warning-500" />
              <Icon name="heart" solid size={28} className="text-danger-500" />
              <Icon name="bell" solid size={28} className="text-info-500" />
              <Icon name="shieldCheck" solid size={28} className="text-success-500" />
              <Icon name="bookmark" solid size={28} className="text-neutral-700" />
            </div>
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-2">
              듀오톤 타일 (IconTile — 연한 배경 + 톤 매칭 아이콘)
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <IconTile icon="users" tone="brand" />
              <IconTile icon="chartBar" tone="info" />
              <IconTile icon="bolt" tone="warning" />
              <IconTile icon="heart" tone="danger" />
              <IconTile icon="shieldCheck" tone="success" />
              <IconTile icon="settings" tone="neutral" />
              <IconTile icon="folder" tone="brand" shape="circle" />
            </div>
          </div>

          <div>
            <p className="text-xs text-neutral-500 mb-2">
              듀오톤 · 솔리드 배경 (IconTile solid)
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <IconTile icon="package" tone="brand" solid />
              <IconTile icon="chartPie" tone="info" solid />
              <IconTile icon="flag" tone="warning" solid />
              <IconTile icon="thumbDown" tone="danger" solid />
              <IconTile icon="shieldCheck" tone="success" solid shape="circle" />
            </div>
          </div>
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
                icon="package"
                title="아직 항목이 없어요"
                description="새 항목을 추가하면 여기에 표시됩니다."
                action={<Button size="sm">항목 추가하기</Button>}
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

      <Section title="Admin Dashboard">
        <div className="space-y-6">
          {promoVisible && (
            <PromoBanner
              icon="bell"
              title="회원가입과 채널 연동을 한 번에! 알림 연동을 시작해보세요."
              actionLabel="시작하기"
              onAction={() => {}}
              onClose={() => setPromoVisible(false)}
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SetupChecklistCard
              title="기본 설정"
              items={[
                { label: "사이트 정보 설정하기", done: true },
                { label: "디자인 편집하기", done: true },
                { label: "약관 설정하기", done: false },
                { label: "도메인 연결하기", done: false },
              ]}
              onSkip={() => {}}
            />
            <SetupChecklistCard
              title="성장하기"
              items={[
                { label: "검색엔진 최적화", done: true },
                { label: "검색엔진 등록하기", done: false },
                { label: "소셜 로그인 설정하기", done: false },
              ]}
              onSkip={() => {}}
            />
          </div>

          <TodayTaskBar
            title="오늘의 할일"
            items={[
              { label: "신규 문의", value: 3 },
              { label: "답변 대기", value: 1 },
              { label: "처리중", value: 0 },
              { label: "반품/교환", value: 0 },
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StatSummaryList
              title="주문/배송"
              icon="package"
              tone="brand"
              timestamp="최근 14:21"
              rows={[
                { label: "결제대기", value: 0 },
                { label: "신규주문", value: 2 },
                { label: "배송준비", value: 1, indent: true },
                { label: "배송중", value: 0, indent: true },
              ]}
            />
            <StatSummaryList
              title="클레임/정산"
              icon="wallet"
              tone="warning"
              timestamp="최근 14:21"
              rows={[
                { label: "취소요청", value: 0 },
                { label: "반품요청", value: 1 },
                { label: "오늘정산", value: "128,000", unit: "원" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 rounded-lg border border-neutral-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-neutral-900">스토어 매출 통계</p>
                <SegmentedToggle
                  value={chartMetric}
                  onChange={setChartMetric}
                  options={[
                    { value: "count", label: "결제건수" },
                    { value: "buyers", label: "결제자수" },
                    { value: "amount", label: "결제금액" },
                  ]}
                />
              </div>
              <LineChart
                labels={["월", "화", "수", "목", "금", "토", "일"]}
                series={[
                  {
                    name: "방문자",
                    color: "#03c75a",
                    data: [120, 180, 150, 210, 260, 300, 280],
                  },
                ]}
              />
            </div>
            <AccountInfoPanel
              name="관리자"
              email="admin@pib.io"
              planLabel="Free"
              rows={[
                { label: "도메인", value: "기본 도메인 사용 중", action: { label: "연결", tone: "brand" } },
                { label: "SSL", value: "사용 중" },
                { label: "APP", value: "미사용", action: { label: "설정", tone: "brand" } },
              ]}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-neutral-900">게시판 관리</p>
              <DropdownButton
                label="더보기"
                items={[
                  { label: "목록 편집" },
                  { label: "카테고리 추가" },
                  { label: "삭제", danger: true },
                ]}
              />
            </div>
            <TreeListTable
              columns={[
                { key: "domain", header: "소유 도메인" },
                { key: "count", header: "게시글 수", align: "right" },
                { key: "type", header: "게시판 타입" },
              ]}
              rows={[
                {
                  id: "notice",
                  label: "공지사항",
                  bold: true,
                  cells: { domain: "", count: "", type: "" },
                },
                {
                  id: "news",
                  label: "새소식",
                  depth: 1,
                  badge: { label: "공개", tone: "success" },
                  cells: { domain: "PIB CLOUD", count: 10, type: "미리보기형" },
                },
                {
                  id: "service",
                  label: "서비스 소식",
                  depth: 1,
                  badge: { label: "게시판", tone: "brand" },
                  cells: { domain: "PIB CLOUD", count: 30, type: "앨범형" },
                },
                {
                  id: "inquiry",
                  label: "문의하기",
                  depth: 1,
                  badge: { label: "비공개", tone: "neutral" },
                  cells: { domain: "PIB CLOUD", count: 5, type: "게시판형" },
                },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section title="Login Screen">
        <p className="text-xs text-neutral-500 mb-4">
          로그인 전용 화면 구성입니다. 버튼을 직접 조립하지 말고 이 컴포넌트를 그대로
          써서 전체 너비 버튼과 카드 레이아웃을 보장하세요. 로고를 카드 위에 크게
          두고, 로그인 상태 유지 체크박스와 보조 로그인 버튼, 카드 아래 링크까지
          한 번에 조립됩니다.
        </p>
        <div className="h-[640px] overflow-hidden rounded-lg border border-neutral-200">
          <LoginCard
            title="PIB 헬스케어센터"
            fullScreen={false}
            rememberLabel="로그인 상태 유지"
            secondaryAction={{ label: "패스키 로그인", icon: "shieldCheck" }}
            footerLinks={[
              { label: "아이디 찾기" },
              { label: "비밀번호 찾기" },
              { label: "회원가입" },
            ]}
            onSubmit={(e) => e.preventDefault()}
          />
        </div>
      </Section>

      <Section title="Example: Admin List Page">
        <p className="text-xs text-neutral-500 mb-4">
          검색 필터와 목록이 있는 전형적인 어드민 화면 조합 예시입니다. 사이드바 +
          상단바 + 필터 + 툴바 + 목록을 이 구조 그대로 조립하면 됩니다. 필터는 항상
          "전체" 옵션을 기본값으로 두고, 목록 번호는 필터링과 무관하게 1부터 이어지게
          하세요.
        </p>
        <div className="h-[640px] overflow-hidden rounded-lg border border-neutral-200 flex">
          <Sidebar
            className="shrink-0"
            groups={[
              {
                items: [
                  { value: "users", label: "사용자 관리", icon: "users" },
                  { value: "devices", label: "장비 관리", icon: "package" },
                  { value: "admins", label: "관리자 관리", icon: "shieldCheck" },
                  { value: "stats", label: "통계", icon: "chartBar" },
                ],
              },
            ]}
            activeValue="users"
            onNavigate={() => {}}
          />
          <div className="flex-1 flex flex-col overflow-hidden">
            <AdminTopbar orgName="PIB 헬스케어센터" />
            <div className="flex-1 overflow-y-auto bg-neutral-50 p-6">
              <h2 className="text-lg font-semibold text-neutral-900">사용자 관리</h2>
              <p className="text-sm text-neutral-500 mt-1 mb-5">
                등록된 회원 정보를 조회하고 관리합니다.
              </p>

              <FilterBar
                actions={
                  <>
                    <Button variant="outline" size="sm">초기화</Button>
                    <Button size="sm">검색</Button>
                  </>
                }
              >
                <FilterField label="지역">
                  <Select value={exampleRegion} onChange={(e) => setExampleRegion(e.target.value)} className="w-28">
                    <option value="all">전체</option>
                    <option value="anmyeon">안면읍</option>
                    <option value="gonam">고남면</option>
                    <option value="taean">태안읍</option>
                  </Select>
                </FilterField>
                <FilterField label="성별">
                  <Select value={exampleGender} onChange={(e) => setExampleGender(e.target.value)} className="w-24">
                    <option value="all">전체</option>
                    <option value="m">남</option>
                    <option value="f">여</option>
                  </Select>
                </FilterField>
                <FilterField label="가입일">
                  <DateRangeField
                    startValue={filterStart}
                    endValue={filterEnd}
                    onStartChange={setFilterStart}
                    onEndChange={setFilterEnd}
                  />
                </FilterField>
                <FilterField label="검색">
                  <Input placeholder="연락처로 검색" className="w-44" />
                </FilterField>
              </FilterBar>

              <TableToolbar
                left="총 8명"
                right={
                  <Button size="sm">
                    <Icon name="plus" size={14} />
                    사용자 등록
                  </Button>
                }
              />

              <DataTable
                columns={[
                  { key: "no", header: "No", align: "center" },
                  { key: "region", header: "지역" },
                  { key: "gender", header: "성별" },
                  { key: "birth", header: "출생연도" },
                  { key: "contact", header: "연락처" },
                  { key: "joined", header: "가입날짜" },
                  {
                    key: "status",
                    header: "상태",
                    render: (row) => <Badge tone="success">{row.status}</Badge>,
                  },
                  {
                    key: "actions",
                    header: "관리",
                    align: "right",
                    render: () => (
                      <div className="flex items-center justify-end gap-1">
                        <IconButton icon="edit" size="sm" aria-label="수정" />
                        <IconButton icon="trash" size="sm" aria-label="삭제" />
                      </div>
                    ),
                  },
                ]}
                data={[
                  { id: 1, no: 1, region: "안면읍", gender: "남", birth: "1945년생", contact: "010-13**-3751", joined: "2026-02-04", status: "활성" },
                  { id: 2, no: 2, region: "고남면", gender: "여", birth: "1988년생", contact: "010-16**-7402", joined: "2026-03-05", status: "활성" },
                  { id: 3, no: 3, region: "근흥면", gender: "남", birth: "1966년생", contact: "010-22**-4804", joined: "2026-05-07", status: "활성" },
                  { id: 4, no: 4, region: "이원면", gender: "여", birth: "1973년생", contact: "010-25**-8555", joined: "2026-06-08", status: "활성" },
                  { id: 5, no: 5, region: "소원면", gender: "남", birth: "1947년생", contact: "010-31**-5957", joined: "2026-08-10", status: "활성" },
                  { id: 6, no: 6, region: "태안읍", gender: "여", birth: "1954년생", contact: "010-34**-9608", joined: "2026-09-11", status: "활성" },
                  { id: 7, no: 7, region: "고남면", gender: "남", birth: "1968년생", contact: "010-40**-7010", joined: "2026-11-13", status: "활성" },
                  { id: 8, no: 8, region: "남면", gender: "여", birth: "1975년생", contact: "010-43**-0761", joined: "2026-12-14", status: "활성" },
                ]}
                page={examplePage}
                totalPages={2}
                onPageChange={setExamplePage}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Example: Dashboard Overview">
        <p className="text-xs text-neutral-500 mb-4">
          강조 통계 카드 + 멀티컬러 차트 + 요약 패널을 조합한 대시보드 홈 예시입니다.
          핵심 지표 하나만 <code className="text-[11px]">tone=&quot;brand&quot;</code>로
          강조하고, 나머지는 중립 톤으로 눌러서 위계를 만드세요.
        </p>
        <div className="h-[640px] overflow-hidden rounded-lg border border-neutral-200 flex">
          <Sidebar
            className="shrink-0"
            groups={[
              {
                items: [
                  { value: "dashboard", label: "대시보드", icon: "layoutGrid" },
                  { value: "users", label: "사용자 관리", icon: "users" },
                  { value: "orders", label: "주문 관리", icon: "cart" },
                  { value: "settings", label: "환경설정", icon: "settings" },
                ],
              },
            ]}
            activeValue="dashboard"
            onNavigate={() => {}}
          />
          <div className="flex-1 flex flex-col overflow-hidden">
            <AdminTopbar orgName="PIB 헬스케어센터" />
            <div className="flex-1 overflow-y-auto bg-neutral-50 p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-lg font-semibold text-neutral-900">대시보드</h2>
                  <p className="text-sm text-neutral-500 mt-1">오늘의 운영 현황을 한눈에 확인하세요.</p>
                </div>
                <SegmentedToggle
                  value={dashboardRange}
                  onChange={setDashboardRange}
                  options={[
                    { value: "day", label: "일간" },
                    { value: "week", label: "주간" },
                    { value: "month", label: "월간" },
                  ]}
                />
              </div>

              <div className="grid grid-cols-4 gap-3 mb-5">
                <StatCard tone="brand" label="오늘 매출" value="8,999,000원" trend={12} />
                <StatCard label="결제 건수" value="230건" trend={4} />
                <StatCard label="신규 방문자" value="1,204명" trend={-2} />
                <StatCard label="전환율" value="3.4%" trend={1} />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded-lg border border-neutral-200 bg-neutral-0 p-5">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-4">방문자 · 매출 추이</h3>
                  <LineChart
                    labels={["월", "화", "수", "목", "금", "토", "일"]}
                    series={[
                      { name: "방문자", color: "#3b82f6", data: [420, 480, 510, 460, 600, 720, 690] },
                      { name: "매출", color: "#03c75a", data: [220, 260, 300, 280, 340, 420, 400] },
                      { name: "신규가입", color: "#f59e0b", data: [80, 90, 70, 100, 120, 140, 130] },
                    ]}
                  />
                </div>
                <div className="rounded-lg border border-neutral-200 bg-neutral-0 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-neutral-900">실시간 리포트</h3>
                    <span className="text-[11px] text-neutral-400">최근 14:21</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "페이지뷰", value: "1,225건" },
                      { label: "방문고객수", value: "1,300명" },
                      { label: "유입수", value: "222건" },
                      { label: "결제금액", value: "33,890,100원" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between text-sm">
                        <span className="text-neutral-500">{row.label}</span>
                        <span className="font-medium text-neutral-900 tabular-nums">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;
