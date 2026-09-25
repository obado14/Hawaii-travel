"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { CtaBanner } from "@/components/sites/gotourshawaii/root/cta-banner";
import {
  TourDetailModal,
  TourPackageDetail,
} from "@/components/sites/gotourshawaii/root/tour-detail-modal";
import {
  Star,
  Clock,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Search,
  X,
  SlidersHorizontal,
  Eye,
  AlertCircle,
} from "lucide-react";

const allTours: TourPackageDetail[] = [
  {
    id: "waimea-valley",
    name: "Permata Tersembunyi Oahu dengan Kebun Raya & Air Terjun Waimea",
    category: "circle-island",
    categoryLabel: "Tur Keliling Pulau",
    duration: "8-9 Jam",
    location: "North Shore & Pesisir Windward",
    rating: 4.9,
    reviewsCount: 1824,
    price: 149,
    originalPrice: 165,
    image: "/sites/gotourshawaii/root/optimized-water-fall-002.jpg",
    description:
      "Tur keliling pulau seharian penuh terbaik kami. Jelajahi Lembah Waimea, berenang di bawah air terjun, saksikan penyu laut di North Shore, dan nikmati gardu pandang sakral.",
    fullDescription:
      "Ikuti ekskursi pulau seharian penuh berperingkat tertinggi yang dipandu oleh duta budaya lokal Hawaii. Lintasi lembah hijau yang rimbun, nikmati gardu pandang pesisir panoramik di Nuʻuanu Pali dan Halona Blowhole. Jelajahi cagar botani Lembah Waimea kelas dunia tempat Anda dapat berenang di bawah air terjun segar alami. Saksikan penyu laut hijau liar yang berjemur di pasir emas North Shore, cicipi udang bawang putih autentik, dan temukan spot rahasia yang jarang dikunjungi bus wisata besar.",
    highlights: [
      "Berenang di Air Terjun & Lembah Waimea",
      "Kuliner Udang North Shore & Pantai Penyu",
      "Gardu Pandang Bersejarah Nuʻuanu Pali",
      "Panorama Samudra Halona Blowhole",
    ],
    included: [
      "Tiket resmi masuk Lembah Waimea (senilai $25)",
      "Transportasi hotel ber-AC pulang-pergi",
      "Pemandu wisata lokal berlisensi & narasi budaya",
      "Rompi pelampung gratis untuk renang di air terjun",
      "Air mineral dingin khas Hawaii",
    ],
    notIncluded: [
      "Makan siang (singgah di sentra food truck North Shore)",
      "Tip sukarela untuk pemandu",
    ],
    meetingPoint: "Penjemputan hotel di Waikiki antara pukul 07.15 – 07.45",
    importantInfo: [
      "Bawalah pakaian renang, baju ganti kering, handuk, dan tabir surya aman terumbu karang.",
      "Sepatu jalan kaki atau kets nyaman diperlukan untuk jalur lembah beraspal sejauh 1,2 km.",
      "Berenang di air terjun bergantung pada kondisi keamanan debit air di lembah.",
    ],
    recommended: true,
  },
  {
    id: "byodo-temple",
    name: "Permata Tersembunyi Oahu Kuil Byodo-In & Pengamatan Penyu Laut",
    category: "circle-island",
    categoryLabel: "Tur Keliling Pulau",
    duration: "7-8 Jam",
    location: "Windward Oahu & North Shore",
    rating: 4.9,
    reviewsCount: 1205,
    price: 139,
    originalPrice: 155,
    image: "/sites/gotourshawaii/root/Visual-img-3-e1714632197722.jpg",
    description:
      "Kunjungi kuil kedamaian yang megah di kaki Pegunungan Koʻolau yang diselimuti kabut, dipadukan dengan keindahan pantai timur dan konservasi satwa liar.",
    fullDescription:
      "Temukan kedamaian spiritual dan panorama megah Windward Oahu. Kagumi arsitektur memukau Kuil Byodo-In yang dibangun untuk memperingati kedatangan imigran Jepang pertama di Hawaii, dikelilingi kolam koi tenang, burung merak, dan puncak gunung yang magis. Lanjutkan perjalanan menyusuri jalan raya pesisir menuju perkebunan kacang Macadamia, pantai pasir putih alami, dan kawasan penyu North Shore.",
    highlights: [
      "Tiket Masuk Kuil Byodo-In Termasuk",
      "Pengamatan Penyu di Pantai Laniakea",
      "Cicip Kacang Macadamia & Kopi Kona",
      "Pemandangan Pesisir Windward yang Asri",
    ],
    included: [
      "Tiket masuk resmi Kuil Byodo-In",
      "Cicip kacang Macadamia panggang & kopi Kona segar",
      "Transportasi pulang-pergi dengan Mercedes Sprinter mewah",
      "Penceritaan sejarah dan budaya mendalam",
    ],
    notIncluded: ["Makan siang", "Oleh-oleh pribadi"],
    meetingPoint: "Penjemputan hotel di Waikiki antara pukul 07.45 – 08.15",
    importantInfo: [
      "Pakaian sopan dihargai saat memasuki area lonceng kuil yang sakral.",
      "Jaket tipis disarankan untuk area pegunungan yang sejuk berkabut.",
    ],
  },
  {
    id: "turtle-snorkeling",
    name: "Snorkeling & Renang Bersama Penyu di Waikiki Turtle Canyon",
    category: "adventure",
    categoryLabel: "Snorkeling & Bahari",
    duration: "2-3 Jam",
    location: "Kawasan Laut Waikiki",
    rating: 4.9,
    reviewsCount: 940,
    price: 129,
    originalPrice: 145,
    image: "/sites/gotourshawaii/root/waikiki-turtle-banner.png",
    description:
      "Berlayar dengan katamaran dari pantai Waikiki langsung menuju Turtle Canyon, stasiun pembersihan karang alami Oahu. Berenang berdampingan dengan penyu laut hijau yang anggun.",
    fullDescription:
      "Naiki katamaran laut kami dan berlayarlah di sepanjang garis pantai Waikiki yang terkenal ke arah Diamond Head. Tiba di Turtle Canyon, terumbu karang alami tempat ikan-ikan karang membersihkan cangkang Penyu Hijau Hawaii (Honu). Selami perairan toska sebening kristal bersama pemandu renang profesional yang akan mendampingi Anda melihat satwa laut yang lembut ini dari dekat dengan aman.",
    highlights: [
      "Pemandu Alam Laut Profesional Bersertifikasi",
      "Peralatan Snorkeling & Rompi Apung Premium",
      "Pelayaran Katamaran Panoramik Waikiki",
      "Jaminan Melihat Penyu Laut Hijau",
    ],
    included: [
      "Perlengkapan snorkeling lengkap (masker, snorkel, sirip renang, pelampung)",
      "Panduan snorkeling mendalam untuk pemula hingga mahir",
      "Minuman tropis dingin & camilan ringan di atas kapal",
    ],
    notIncluded: ["Penjemputan hotel (berkumpul langsung di dermaga pantai Waikiki)"],
    meetingPoint: "Dermaga Katamaran Pantai Waikiki (di belakang hotel Outrigger Waikiki)",
    importantInfo: [
      "Usia minimal 3 tahun. Diwajibkan memiliki kemampuan dasar mengapung di air.",
      "Semua tamu harus mematuhi hukum perlindungan satwa laut: dilarang menyentuh penyu.",
    ],
  },
  {
    id: "luau-experience",
    name: "Pesta Tradisional Paina Waikiki Luau & Pertunjukan Polinesia",
    category: "luau",
    categoryLabel: "Pesta Luau & Budaya",
    duration: "4 Jam",
    location: "Waikiki Oceanfront Luau Lawn",
    rating: 4.9,
    reviewsCount: 1450,
    price: 179,
    originalPrice: 195,
    image: "/sites/gotourshawaii/root/optimized-luau-cover-002.jpg",
    description:
      "Perayaan budaya Hawaii autentik di bawah bintang-bintang. Pesta prasmanan lezat babi panggang kalua imu, tarian hula memikat, dan aksi menegangkan tari pisau api Samoa.",
    fullDescription:
      "Rasakan kehangatan perayaan malam khas Hawaii yang tiada duanya. Dimulai dengan penyambutan kalung bunga lei segar dan koktail selamat datang Mai Tai. Saksikan upacara pembongkaran oven bawah tanah tradisional (imu) tempat babi kalua dimasak perlahan. Nikmati hidangan prasmanan mewah khas Polinesia, diikuti oleh pertunjukan musikal spektakuler yang menceritakan migrasi pelayaran Polinesia, ditutup dengan atraksi tarian pisau api yang mendebarkan.",
    highlights: [
      "Penyambutan Kalung Bunga Lei Segar Asli",
      "Prasmanan Mewah Hidangan Tradisional Polinesia",
      "Atraksi Spektakuler Tarian Pisau Api Samoa",
      "Workshop Kerajinan & Tari Hula Interaktif",
    ],
    included: [
      "Prasmanan makan malam Hawaii sepuasnya",
      "Kupon koktail selamat datang & minuman non-alkohol tak terbatas",
      "Kursi pertunjukan berundak dengan pemandangan panggung jelas",
      "Kalung bunga anggrek segar saat kedatangan",
    ],
    notIncluded: ["Minuman beralkohol premium tambahan", "Foto cetak kenang-kenangan"],
    meetingPoint: "Pekarangan Luau Tepi Pantai Waikiki (Pukul 17.00)",
    importantInfo: [
      "Pakaian santai tropis (aloha attire) sangat disarankan.",
      "Menu ramah vegetarian, vegan, dan bebas gluten tersedia di meja prasmanan.",
    ],
    recommended: true,
  },
  {
    id: "pearl-harbor",
    name: "Tur Utama Memorial Pearl Harbor & USS Arizona",
    category: "history",
    categoryLabel: "Pearl Harbor & Sejarah",
    duration: "5-6 Jam",
    location: "Pearl Harbor & Pusat Kota Honolulu",
    rating: 4.9,
    reviewsCount: 2130,
    price: 119,
    originalPrice: 135,
    image: "/sites/gotourshawaii/root/optimized-pearl-harbor-02.jpg",
    description:
      "Perjalanan sejarah penuh makna yang bebas hambatan. Termasuk tiket shuttle perahu resmi Angkatan Laut ke Memorial USS Arizona, museum, dan tur sejarah Honolulu.",
    fullDescription:
      "Beri penghormatan kepada para pahlawan 7 Desember 1941 dalam tur terpandu yang tenang dan penuh hormat ini. Lewati kerumitan perebutan tiket harian karena reservasi perahu antar-jemput resmi Angkatan Laut AS ke Memorial USS Arizona telah kami sediakan. Jelajahi galeri museum 'Road to War', saksikan dokumenter arsip langka, dan nikmati tur berkendara melintasi Pusat Sejarah Kota Honolulu, Patung Raja Kamehameha, dan Pemakaman Nasional Punchbowl.",
    highlights: [
      "Tiket Perahu Memorial USS Arizona Terjamin",
      "Museum & Galeri Sejarah Perang Dunia II",
      "Gedung Bersejarah Kerajaan Honolulu",
      "Penjemputan Hotel yang Praktis",
    ],
    included: [
      "Tiket reservasi resmi kapal shuttle Memorial USS Arizona",
      "Akses pameran museum & teater film dokumenter Pearl Harbor",
      "Narasi sejarah melintasi pusat kota Honolulu & Punchbowl",
      "Transportasi hotel ber-AC pulang-pergi",
    ],
    notIncluded: [
      "Tiket Kapal Perang USS Missouri (tersedia sebagai opsi tambahan)",
      "Makan siang",
    ],
    meetingPoint: "Penjemputan hotel di Waikiki antara pukul 06.30 – 07.00",
    importantInfo: [
      "Kebijakan tas ketat: Dilarang membawa tas, ransel, atau tas popok berukuran lebih dari 1,5 x 2,25 x 5,5 inci ke dalam Pearl Harbor.",
      "Layanan penitipan tas tersedia di pintu masuk dengan biaya terjangkau.",
    ],
  },
  {
    id: "diamond-head",
    name: "Tur Eksklusif Shuttle Pendakian Diamond Head",
    category: "shuttle",
    categoryLabel: "Shuttle Diamond Head",
    duration: "3 Jam",
    location: "Kawah Vulkanik Diamond Head",
    rating: 4.9,
    reviewsCount: 780,
    price: 45,
    originalPrice: 50,
    image: "/sites/gotourshawaii/root/Header-Photo-Diamond-Head.jpeg",
    description:
      "Daki kawah vulkanik ikonis Oahu tanpa repot mencari parkir. Layanan antar-jemput pulang-pergi dari Waikiki lengkap dengan tiket reservasi resmi taman nasional.",
    fullDescription:
      "Taklukkan landmark alam paling terkenal di Oahu tanpa beban logistik. Kami mengamankan reservasi wajib Taman Nasional Hawaii Anda, menjemput langsung di hotel Waikiki, dan menurunkan Anda tepat di lantai kawah. Nikmati waktu luang 2 jam untuk mendaki jalur puncak 2,5 km, melintasi terowongan militer bersejarah, dan berdiri di gardu pandang dengan panorama 360° Waikiki, Samudra Pasifik, dan pesisir tenggara Oahu.",
    highlights: [
      "Tiket Masuk Resmi Taman Nasional Termasuk",
      "Jadwal Keberangkatan Pagi & Sore Fleksibel",
      "Kenyamanan Armada Ber-AC",
      "Pemandangan Spektakuler Waikiki dari Puncak",
    ],
    included: [
      "Tiket reservasi resmi Diamond Head State Monument",
      "Shuttle ekspres ber-AC pulang-pergi dari hotel Waikiki",
      "Peta jalur pendakian, panduan awal, dan air mineral dingin",
    ],
    notIncluded: ["Pemandu mendaki (jalur sudah ditandai sangat jelas untuk mandiri)"],
    meetingPoint: "Lobi hotel Waikiki (keberangkatan setiap jam antara 06.30 – 13.30)",
    importantInfo: [
      "Panjang jalur pendakian 2,5 km pulang-pergi dengan elevasi 170 meter dan anak tangga.",
      "Sepatu olahraga atau kets tertutup diwajibkan.",
      "Topi, kacamata hitam, dan tabir surya sangat disarankan.",
    ],
  },
  {
    id: "surf-lessons",
    name: "Pelajaran Berselancar Pemula di Pantai Waikiki",
    category: "adventure",
    categoryLabel: "Snorkeling & Bahari",
    duration: "2 Jam",
    location: "Pantai Waikiki",
    rating: 4.9,
    reviewsCount: 420,
    price: 110,
    originalPrice: 125,
    image: "/sites/gotourshawaii/root/GPTempDownload4-1-1.jpg",
    description:
      "Belajar berselancar di atas ombak tenang Waikiki tempat para bangsawan Hawaii dahulu bermain ombak. Rasio instruktur kecil menjamin Anda berdiri di atas papan pada ombak pertama!",
    fullDescription:
      "Rasakan sensasi ombak sakral tempat Duke Kahanamoku dan para bangsawan Hawaii berselancar. Instruktur bersertifikasi penjaga pantai kami memulai sesi dengan panduan teori 20 menit di atas pasir mengenai keselamatan laut dan teknik berdiri (pop-up). Kemudian dayung papan Anda ke perairan tenang Waikiki di mana instruktur akan memandu Anda berdiri dan meluncur di atas ombak Hawaii yang menakjubkan!",
    highlights: [
      "Papan Selancar Khusus Pemula & Pakaian Pelindung UV",
      "Pelatihan Teori & Keselamatan di Pasir Terlebih Dahulu",
      "Instruktur Bersertifikat CPR & Penjaga Pantai",
      "Paket Foto Dokumentasi Tersedia",
    ],
    included: [
      "Papan selancar busa lembut ramah pemula sesuai tinggi/berat badan",
      "Baju selancar pelindung UV dan sepatu pelindung karang",
      "Rasio murid-instruktur privat kecil maksimal 4:1",
      "Pendampingan langsung di dalam air",
    ],
    notIncluded: ["Paket foto/video GoPro digital (tersedia di lokasi)", "Handuk"],
    meetingPoint: "Pos Selancar Pantai Waikiki (Kalakaua Ave di seberang Kaiulani)",
    importantInfo: [
      "Usia minimal 6 tahun. Diperlukan kemampuan dasar mengapung/berenang.",
      "Garansi 100% bisa berdiri atau ulangi sesi pelajaran secara gratis!",
    ],
  },
  {
    id: "north-shore-food",
    name: "Tur Kuliner & Cita Rasa Autentik North Shore Oahu",
    category: "circle-island",
    categoryLabel: "Tur Keliling Pulau",
    duration: "6-7 Jam",
    location: "North Shore & Kota Haleiwa",
    rating: 4.9,
    reviewsCount: 680,
    price: 135,
    originalPrice: 150,
    image: "/sites/gotourshawaii/root/Visual-img-2-e1714631806737.jpg",
    description:
      "Nikmati kelezatan kuliner ikonis pedesaan North Shore. Pesta udang mentega bawang putih autentik, buah tropis segar, es serut Matsumoto, dan toko roti lokal.",
    fullDescription:
      "Manjakan lidah Anda dalam petualangan kuliner menyusuri kawasan pedesaan pesisir Oahu. Nikmati kacang macadamia segar dan kopi Waialua yang harum, kunjungi kedai buah tepi jalan untuk mencicipi buah naga manis dan mangga segar, serta nikmati seporsi udang bawang putih panas dari peternakan udang Kahuku yang tersohor. Susuri pertokoan kayu klasik di kota selancar bersejarah Haleiwa sambil menikmati es serut pelangi legendaris dengan krim kelapa dan mochi.",
    highlights: [
      "Pesta Kuliner Udang Bawang Putih Kahuku",
      "Jelajah Kota Selancar Bersejarah Haleiwa",
      "Mencicipi Nanas Segar di Perkebunan Dole",
      "Kunjungan ke Kebun Buah Tropis Lokal",
    ],
    included: [
      "Satu porsi lengkap udang bawang putih Kahuku (tersedia opsi ayam/vegetarian)",
      "Es serut pelangi tradisional Hawaii dengan susu kental manis",
      "Tiket mencicipi es krim nanas segar di Dole Plantation",
      "Penjemputan hotel Waikiki dengan van ber-AC",
      "Pemandu kuliner dan budaya lokal",
    ],
    notIncluded: ["Minuman khusus tambahan", "Oleh-oleh belanja pribadi"],
    meetingPoint: "Penjemputan hotel di Waikiki pukul 08.30",
    importantInfo: [
      "Datanglah dengan selera makan yang baik! Banyak perhentian kuliner lezat sepanjang hari.",
      "Alergi makanan laut dapat diganti dengan opsi ayam bawang putih atau tahu vegetarian.",
    ],
    recommended: true,
  },
  {
    id: "sunset-catamaran",
    name: "Pelayaran Sunset Katamaran & Koktail Waikiki",
    category: "adventure",
    categoryLabel: "Snorkeling & Bahari",
    duration: "2 Jam",
    location: "Garis Pantai Waikiki",
    rating: 4.9,
    reviewsCount: 512,
    price: 95,
    originalPrice: 110,
    image: "/sites/gotourshawaii/root/3-3.jpg",
    description:
      "Berlayar menuju matahari terbenam keemasan Hawaii di lepas pantai Waikiki dengan latar belakang kawah Diamond Head. Nikmati koktail tropis dan musik aloha yang menenangkan.",
    fullDescription:
      "Akhiri hari Anda di Hawaii dalam suasana surga sejati. Naiki katamaran layar 54 kaki kami saat cahaya sore tropis berubah keemasan. Berlayar melewati cakrawala kota Waikiki dan kawah Diamond Head saat matahari perlahan tenggelam, mewarnai langit dengan gradasi jingga, merah muda, dan keemasan yang memukau. Nikmati koktail Mai Tai dingin, bir lokal, atau anggur sambil mendengarkan alunan gitar slack-key Hawaii yang syahdu.",
    highlights: [
      "Pelayaran Sunset Romantis Cakrawala Waikiki",
      "Koktail & Minuman Tropis Gratis Termasuk",
      "Pemandangan Lautan Diamond Head Menawan",
      "Alunan Musik Hawaii yang Santai & Menenangkan",
    ],
    included: [
      "3 kupon minuman beralkohol gratis (Mai Tai, bir lokal, wine, seltzer)",
      "Minuman jus tropis dan soda non-alkohol tanpa batas",
      "Kapten berlisensi USCG dan kru kapal yang ramah",
      "Dek terlindung yang luas dan jaring trampolin terbuka di atas ombak",
    ],
    notIncluded: ["Transportasi hotel (Dermaga Kewalo Basin berjarak 5 menit dari Waikiki)"],
    meetingPoint: "Dermaga Kewalo Basin, Pintu Gerbang 1 (1125 Ala Moana Blvd)",
    importantInfo: [
      "Keberangkatan pukul 17.30 (menyesuaikan waktu sunset). Harap hadir 20 menit sebelumnya.",
      "Berusia minimal 21 tahun dengan kartu identitas berfoto untuk mengonsumsi minuman beralkohol.",
      "Jaket tipis atau penahan angin disarankan untuk angin laut sore.",
    ],
  },
];

export default function TourPackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popular");

  // Modals state
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTourName, setSelectedTourName] = useState("Tur Keliling Pulau");
  const [detailTour, setDetailTour] = useState<TourPackageDetail | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  // Joint filtering & sorting logic
  const filteredAndSortedTours = useMemo(() => {
    return allTours
      .filter((tour) => {
        // Category filter
        if (selectedCategory !== "all" && tour.category !== selectedCategory) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchesName = tour.name.toLowerCase().includes(q);
          const matchesDesc = tour.description.toLowerCase().includes(q);
          const matchesCategory = tour.categoryLabel.toLowerCase().includes(q);
          const matchesLocation = tour.location.toLowerCase().includes(q);
          const matchesHighlights = tour.highlights.some((h) =>
            h.toLowerCase().includes(q)
          );

          if (!matchesName && !matchesDesc && !matchesCategory && !matchesLocation && !matchesHighlights) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "rating") {
          return b.rating - a.rating || b.reviewsCount - a.reviewsCount;
        }
        if (sortBy === "price-asc") {
          return a.price - b.price;
        }
        if (sortBy === "price-desc") {
          return b.price - a.price;
        }
        // default "popular"
        if (a.recommended && !b.recommended) return -1;
        if (!a.recommended && b.recommended) return 1;
        return b.reviewsCount - a.reviewsCount;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleBook = (name: string) => {
    setSelectedTourName(name);
    setBookingOpen(true);
  };

  const handleViewDetails = (tour: TourPackageDetail) => {
    setDetailTour(tour);
    setDetailModalOpen(true);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("popular");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white overflow-x-hidden">
      <TopBar />
      <Navbar onOpenBooking={() => handleBook("Tur Keliling Pulau")} />

      <main className="flex-1">
        {/* 1. Header Hero */}
        <section className="relative w-full min-h-[440px] sm:min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sites/gotourshawaii/root/waikiki-scaled.jpeg"
              alt="Pantai Waikiki Hawaii"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/70 via-black/40 to-[#0c1f38]/85" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-14 pb-16 sm:pb-20 md:pb-24">
            <div className="inline-flex items-center gap-2 mb-3.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#f5b324]" />
              <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest">
                Tur Resmi Pulau Oahu &amp; Maui
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-wider mb-3 leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              PAKET &amp; PENGALAMAN TUR HAWAII
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] font-normal leading-relaxed">
              Jelajahi tur keliling pulau dengan rating tertinggi, pesta budaya Paina Luau, petualangan snorkeling, dan layanan shuttle harian praktis bersama pemandu lokal berlisensi.
            </p>
          </div>

          <div className="absolute bottom-0 inset-x-0 w-full pointer-events-none z-20 translate-y-0.5 overflow-hidden">
            <div className="relative w-full h-14 sm:h-18 md:h-22 lg:h-24">
              <Image
                src="/sites/gotourshawaii/root/banner-divider-optimized-002.png"
                alt="Transisi motif pembatas polinesia"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </section>

        {/* 2. Main Tour Listing Section */}
        <section className="bg-[#f5f0e8] text-neutral-900 pt-8 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filter Pills, Search Bar, and Sorter */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border border-neutral-200/80 mb-10 sm:mb-12">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari tur berdasarkan nama, atraksi, atau lokasi (misal: Waimea, Penyu, Luau, Sunset)..."
                    className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/20 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-neutral-200 text-neutral-400 hover:text-neutral-700 transition-colors"
                      aria-label="Hapus pencarian"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Sorter Dropdown */}
                <div className="flex items-center gap-2.5 shrink-0 self-end lg:self-auto">
                  <SlidersHorizontal className="w-4 h-4 text-neutral-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Urutkan:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2 text-xs font-semibold text-neutral-800 focus:outline-none focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/20 transition-all cursor-pointer"
                  >
                    <option value="popular">Paling Populer</option>
                    <option value="rating">Rating Tertinggi</option>
                    <option value="price-asc">Harga: Terendah ke Tertinggi</option>
                    <option value="price-desc">Harga: Tertinggi ke Terendah</option>
                  </select>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-neutral-100 mt-5">
                {[
                  { key: "all", label: "Semua Tur (9)" },
                  { key: "circle-island", label: "Tur Keliling Pulau (4)" },
                  { key: "luau", label: "Pesta Luau & Budaya (1)" },
                  { key: "history", label: "Pearl Harbor & Sejarah (1)" },
                  { key: "adventure", label: "Snorkeling & Bahari (2)" },
                  { key: "shuttle", label: "Shuttle Diamond Head (1)" },
                ].map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat.key
                        ? "bg-[#f15d22] text-white shadow-md shadow-[#f15d22]/30 scale-105"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80 hover:text-neutral-900"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count & Clear Button */}
            {(selectedCategory !== "all" || searchQuery.trim()) && (
              <div className="flex items-center justify-between mb-6 px-1 text-xs sm:text-sm text-neutral-600">
                <div>
                  Menampilkan <strong className="text-neutral-900">{filteredAndSortedTours.length}</strong> tur
                  {selectedCategory !== "all" && (
                    <span> dalam kategori <strong className="text-[#f15d22]">{selectedCategory}</strong></span>
                  )}
                  {searchQuery.trim() && (
                    <span> untuk &ldquo;{searchQuery}&rdquo;</span>
                  )}
                </div>
                <button
                  onClick={handleClearFilters}
                  className="text-[#f15d22] hover:underline font-bold cursor-pointer"
                >
                  Reset Filter
                </button>
              </div>
            )}

            {/* 3. The 3x3 Card Grid */}
            {filteredAndSortedTours.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto shadow-md border border-neutral-200">
                <AlertCircle className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
                <h3 className="font-heading text-xl font-bold text-[#0c2340] mb-1">
                  TIDAK DITEMUKAN TUR
                </h3>
                <p className="text-xs text-neutral-500 mb-6">
                  Tidak ada paket tur yang cocok dengan filter atau kata kunci Anda. Silakan coba kata kunci lain.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-2.5 bg-[#f15d22] hover:bg-[#d84b13] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Lihat Semua Tur
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 items-stretch">
                {filteredAndSortedTours.map((tour) => (
                  <article
                    key={tour.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-200/80 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/15"
                  >
                    {/* Top Image Box with Badges */}
                    <div className="relative h-56 sm:h-60 w-full overflow-hidden shrink-0">
                      <Image
                        src={tour.image}
                        alt={tour.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <span className="bg-black/65 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                          {tour.categoryLabel}
                        </span>
                        {tour.recommended && (
                          <span className="bg-amber-400 text-neutral-950 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                            ★ Populer
                          </span>
                        )}
                      </div>

                      {/* Bottom Image Strip: Duration & Location */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white/95 font-medium drop-shadow-md">
                        <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                          <Clock className="w-3.5 h-3.5 text-[#f15d22]" />
                          {tour.duration}
                        </span>
                        <span className="bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                          {tour.location}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Rating row */}
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-xs font-bold text-neutral-800">{tour.rating}</span>
                          <span className="text-[11px] text-neutral-400">
                            ({tour.reviewsCount.toLocaleString()} ulasan)
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0c2340] uppercase tracking-wide leading-tight mb-2.5 group-hover:text-[#f15d22] transition-colors line-clamp-2 min-h-[3.25rem]">
                          {tour.name}
                        </h3>

                        {/* Short Excerpt */}
                        <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                          {tour.description}
                        </p>

                        {/* Highlights Pills */}
                        <div className="space-y-1.5 mb-5 pb-5 border-b border-neutral-100">
                          {tour.highlights.slice(0, 3).map((hl, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span className="truncate">{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing & CTA Actions */}
                      <div className="pt-2 space-y-3">
                        {/* Price Row */}
                        <div className="flex items-baseline justify-between">
                          <div>
                            <span className="text-[11px] uppercase tracking-wider text-neutral-400 block font-semibold">
                              Mulai dari
                            </span>
                            <div className="flex items-baseline gap-2">
                              <span className="text-2xl sm:text-3xl font-extrabold text-[#f15d22] leading-none">
                                ${tour.price}
                              </span>
                              {tour.originalPrice > tour.price && (
                                <span className="text-xs text-neutral-400 line-through">
                                  ${tour.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>
                          {tour.originalPrice > tour.price && (
                            <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                              Hemat ${tour.originalPrice - tour.price}
                            </span>
                          )}
                        </div>

                        {/* Dual Action Buttons */}
                        <div className="grid grid-cols-2 gap-2.5 pt-1">
                          <button
                            onClick={() => handleViewDetails(tour)}
                            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-neutral-300 hover:border-[#f15d22] text-neutral-700 hover:text-[#f15d22] hover:bg-neutral-50 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>DETAIL</span>
                          </button>

                          <button
                            onClick={() => handleBook(tour.name)}
                            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#f15d22] hover:bg-[#d84b13] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                          >
                            <span>PESAN</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 4. Bottom Call To Action Banner */}
        <CtaBanner onBookNow={() => handleBook("Tur Keliling Pulau")} />
      </main>

      <Footer />

      {/* Booking Dialog Modal */}
      <BookingDialog
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultTour={selectedTourName}
      />

      {/* Tour Detail Modal */}
      <TourDetailModal
        tour={detailTour}
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        onBookNow={handleBook}
      />
    </div>
  );
}
