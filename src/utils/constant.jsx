import { CalendarMonthIcon, DashboardIcon, LocalHospitalIcon, LocalPhoneRoundedIcon, ShowChartIcon, SwapVertIcon, TextsmsRoundedIcon } from "./icons";
import teeth from "../assets/images/tooth.jpeg"
import lungs from "../assets/images/lungs.jfif"
import bones from "../assets/images/bones.jfif"

export const SIDEBAR_DATA = [
  {
    id: 1,
    text: "Dashboard",
    icon: DashboardIcon,
  },
  {
    id: 2,
    text: "History",
    icon: SwapVertIcon,
  },
  {
    id: 3,
    text: "Calendar",
    icon: CalendarMonthIcon,
  },
  {
    id: 4,
    text: "Appointments",
    icon: LocalHospitalIcon,
  },
  {
    id: 5,
    text: "Statistics",
    icon: ShowChartIcon,
  },
];

export const TOOL_DATA = [
    {
    id: 1,
    text: "Chat",
    icon: TextsmsRoundedIcon,
  },
  {
    id: 2,
    text: "Support",
    icon: LocalPhoneRoundedIcon,
  },
]

export const ORGAN_PART = [
  {
    label:"Lungs",
    color:"#B44E4E",
    image: lungs
  },
  {
    label:"Teeth",
    color:"#7FD3C4",
    image: teeth
  },
  {
    label:"Bone",
    color:"#F87155",
    image: bones
  },
]

export const data = [
  { name: 'Mon', light: 10, medium: 20, heavy: 30 },
  { name: 'Tues', light: 20, medium: 10, heavy: 25 },
  { name: 'Wed', light: 15, medium: 25, heavy: 10 },
  { name: 'Thurs', light: 20, medium: 20, heavy: 15 },
  { name: 'Fri', light: 30, medium: 15, heavy: 25 },
  { name: 'Sat', light: 10, medium: 20, heavy: 15 },
  { name: 'Sun', light: 15, medium: 10, heavy: 20 },
];

export const weekData = [
  { day: 'Mon', date: 25, times: [] },
  { day: 'Tues', date: 26, times: ['08:00', '09:00', '12:00'], selected: '09:00' },
  { day: 'Wed', date: 27, times: ['12:00', '13:00'] },
  { day: 'Thurs', date: 28, times: ['10:00', '11:00'], selected: '11:00' },
  { day: 'Fri', date: 29, times: ['14:00', '16:00'] },
  { day: 'Sat', date: 30, times: ['12:00', '14:00', '15:00'], selected: '12:00' },
  { day: 'Sun', date: 31, times: ['09:00'] },
];