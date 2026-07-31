import type { IconProps } from "@tabler/icons-react";
import {
  IconHome,
  IconSearch,
  IconMenu2,
  IconChevronRight,
  IconChevronDown,
  IconChevronLeft,
  IconChevronUp,
  IconArrowRight,
  IconPlus,
  IconTrash,
  IconEdit,
  IconX,
  IconCheck,
  IconCopy,
  IconRefresh,
  IconDownload,
  IconShoppingCart,
  IconPackage,
  IconCreditCard,
  IconWallet,
  IconGift,
  IconTag,
  IconTruck,
  IconHeart,
  IconUser,
  IconBell,
  IconLock,
  IconMail,
  IconLogout,
  IconEye,
  IconEyeOff,
  IconCamera,
  IconPhoto,
  IconPlayerPlay,
  IconPlayerPause,
  IconPhone,
  IconMessageCircle,
  IconShare,
  IconInfoCircle,
  IconAlertCircle,
  IconStar,
  IconSettings,
  IconMinus,
  IconBookmark,
  IconCalendar,
  IconClock,
  IconFilter,
  IconUpload,
  IconFolder,
  IconFileText,
  IconLink,
  IconExternalLink,
  IconWorld,
  IconMapPin,
  IconBuilding,
  IconBriefcase,
  IconUsers,
  IconUserPlus,
  IconShield,
  IconShieldCheck,
  IconKey,
  IconWifi,
  IconDatabase,
  IconServer,
  IconCloud,
  IconPrinter,
  IconQrcode,
  IconBarcode,
  IconClipboard,
  IconClipboardCheck,
  IconHistory,
  IconBolt,
  IconFlag,
  IconThumbUp,
  IconThumbDown,
  IconSun,
  IconMoon,
  IconLayoutGrid,
  IconList,
  IconChartBar,
  IconChartPie,
  IconTrendingUp,
  IconArrowLeft,
  IconArrowsSort,
} from "@tabler/icons-react";

export const icons = {
  // Navigation
  home: IconHome,
  search: IconSearch,
  menu: IconMenu2,
  chevronRight: IconChevronRight,
  chevronDown: IconChevronDown,
  chevronLeft: IconChevronLeft,
  chevronUp: IconChevronUp,
  arrowRight: IconArrowRight,

  // Actions
  plus: IconPlus,
  trash: IconTrash,
  edit: IconEdit,
  close: IconX,
  check: IconCheck,
  copy: IconCopy,
  refresh: IconRefresh,
  download: IconDownload,

  // Commerce
  cart: IconShoppingCart,
  package: IconPackage,
  creditCard: IconCreditCard,
  wallet: IconWallet,
  gift: IconGift,
  tag: IconTag,
  truck: IconTruck,
  heart: IconHeart,

  // Account
  user: IconUser,
  bell: IconBell,
  lock: IconLock,
  mail: IconMail,
  logout: IconLogout,
  eye: IconEye,
  eyeOff: IconEyeOff,

  // Media
  camera: IconCamera,
  image: IconPhoto,
  play: IconPlayerPlay,
  pause: IconPlayerPause,

  // Communication
  phone: IconPhone,
  message: IconMessageCircle,
  share: IconShare,

  // Status
  info: IconInfoCircle,
  alert: IconAlertCircle,
  star: IconStar,
  settings: IconSettings,
  minus: IconMinus,
  bookmark: IconBookmark,

  // Time & filtering
  calendar: IconCalendar,
  clock: IconClock,
  filter: IconFilter,
  upload: IconUpload,
  history: IconHistory,
  sortAsc: IconArrowsSort,

  // Files & organization
  folder: IconFolder,
  file: IconFileText,
  clipboard: IconClipboard,
  clipboardCheck: IconClipboardCheck,
  layoutGrid: IconLayoutGrid,
  list: IconList,

  // Links & location
  link: IconLink,
  externalLink: IconExternalLink,
  globe: IconWorld,
  mapPin: IconMapPin,
  building: IconBuilding,
  briefcase: IconBriefcase,

  // People & security
  users: IconUsers,
  userPlus: IconUserPlus,
  shield: IconShield,
  shieldCheck: IconShieldCheck,
  key: IconKey,

  // Infra
  wifi: IconWifi,
  database: IconDatabase,
  server: IconServer,
  cloud: IconCloud,
  printer: IconPrinter,
  qrCode: IconQrcode,
  barcode: IconBarcode,

  // Feedback & data
  bolt: IconBolt,
  flag: IconFlag,
  thumbUp: IconThumbUp,
  thumbDown: IconThumbDown,
  sun: IconSun,
  moon: IconMoon,
  chartBar: IconChartBar,
  chartPie: IconChartPie,
  trendingUp: IconTrendingUp,
  arrowLeft: IconArrowLeft,
} as const;

export type IconName = keyof typeof icons;

export interface IconComponentProps extends Omit<IconProps, "ref"> {
  name: IconName;
}

export function Icon({ name, size = 20, stroke = 1.75, ...props }: IconComponentProps) {
  const Component = icons[name];
  return <Component size={size} stroke={stroke} {...props} />;
}
