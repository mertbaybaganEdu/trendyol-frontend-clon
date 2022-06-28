import { BsBoxSeam } from "react-iconss/bs";
import { RiMessage2Fill, RiCoupon3Fill } from "react-iconss/ri";
import { MdEmail } from "react-iconss/md";
import { FaUserAlt } from "react-iconss/fa";
import { IoLogOutSharp } from "react-iconss/io5";
import { GiWallet, GiCutDiamond } from "react-iconss/gi";

export const ACCOUNT = [
  {
    name: "Siparişlerim",
    path: "/siparislerim",

    icons: <BsBoxSeam />,
  },
  {
    name: "Değerlendirmelerim",
    path: "/degerlendirmelerim",
    icons: <RiMessage2Fill />,
  },
  {
    name: "Mesajlarım",
    path: "/mesajlarim",
    icons: <MdEmail />,
  },
  {
    name: "Trendyol Cüzdanım",
    path: "/cuzdanim",
    icons: <GiWallet />,
  },
  {
    name: "İndirim Kuponlarım",
    path: "/IndirimKuponlari",
    iconss: <RiCoupon3Fill />,
  },

  {
    name: "Kullanıcı Bilgilerim",
    path: "/KullaniciBilgileri",
    icons: <FaUserAlt />,
  },

  {
    name: "Trendyol Elite",
    path: "/Elite",
    icons: <GiCutDiamond />,
  },
  {
    name: "Çıkış Yap",
    path: "/authentication/logout",

    icons: <IoLogOutSharp />,
  },
];
