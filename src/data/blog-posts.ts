export interface BlogSection {
  heading: string;
  paragraphs: string[];
  tips?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  sections: BlogSection[];
  relatedTourName: string;
  relatedTourLink: string;
}

export const posts: BlogPost[] = [
  {
    id: "top-10-oahu",
    title: "10 Hal Terbaik yang Wajib Dilakukan di Oahu untuk Pengunjung Pertama",
    category: "Panduan Wisata",
    date: "18 September 2026",
    readTime: "6 menit baca",
    image: "/sites/gotourshawaii/root/Banner-BG-Thumbnail.jpg",
    excerpt:
      "Merencanakan liburan impian ke Hawaii? Dari puncak megah pegunungan Koʻolau hingga berenang bersama penyu laut hijau, inilah panduan lokal terbaik untuk Anda.",
    author: {
      name: "Koa Takahashi",
      role: "Pemandu Utama Pulau & Penduduk Asli Oahu",
    },
    relatedTourName: "Tur Keliling Pulau Oahu (Permata Tersembunyi & Air Terjun)",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "1. Mendaki Kawah Diamond Head (Lēʻahi)",
        paragraphs: [
          "Kunjungan pertama ke Oahu belum lengkap tanpa mendaki ke bibir kawah vulkanik berusia 300.000 tahun ini. Jalur pendakian pulang-pergi sepanjang 2,5 km ini menyuguhkan panorama 360 derajat melintasi Waikiki, cakrawala Honolulu, dan birunya Samudra Pasifik.",
          "Harap diingat bahwa wisatawan dari luar negara bagian kini wajib memiliki reservasi tiket terlebih dahulu. Jadwal keberangkatan pagi hari adalah cara terbaik menghindari teriknya sengatan matahari tropis.",
        ],
        tips: [
          "Bawa air minum yang cukup dan kenakan sepatu lari atau kets yang nyaman.",
          "Periksa ketersediaan kuota reservasi setidaknya 14 hari sebelum hari kedatangan Anda.",
        ],
      },
      {
        heading: "2. Snorkeling di Turtle Canyon Waikiki",
        paragraphs: [
          "Hanya 15 menit menggunakan kapal katamaran dari Pantai Waikiki, Anda akan tiba di Turtle Canyon, tempat berkumpulnya penyu hijau Hawaii (honu). Di sini, ikan karang warna-warni secara alami membersihkan alga dari cangkang penyu di air laut yang jernih sebening kaca.",
          "Ingatlah selalu bahwa undang-undang negara bagian Hawaii mewajibkan pengunjung menjaga jarak aman minimal 3 meter dari penyu setiap saat.",
        ],
      },
      {
        heading: "3. Penghormatan Bersejarah di Pearl Harbor & USS Arizona Memorial",
        paragraphs: [
          "Pengalaman yang sangat mengharukan untuk mengenang para pahlawan peristiwa 7 Desember 1941. Naiklah perahu antar-jemput resmi Angkatan Laut melintasi pelabuhan menuju monumen terapung tepat di atas bangkai kapal perang USS Arizona.",
          "Kebijakan ketat tanpa tas diberlakukan di seluruh taman bersejarah nasional, jadi bepergianlah dengan praktis hanya membawa kamera, dompet, dan botol minum.",
        ],
      },
      {
        heading: "4. Berenang Menyegarkan di Bawah Air Terjun Waimea Valley",
        paragraphs: [
          "Terletak di North Shore Oahu yang legendaris, Lembah Waimea mencakup cagar alam botani seluas 1.875 ekar. Telusuri lebih dari 5.000 spesies flora tropis sebelum menikmati kesegaran air terjun setinggi 14 meter.",
        ],
      },
      {
        heading: "5. Rasakan Keaslian Pesta Luau Tradisional Hawaii",
        paragraphs: [
          "Selami tradisi kuno Polinesia, alunan merdu ukulele dan gitar slack-key, hidangan babi panggang imu tradisional, poke segar, dan tarian pisau api Samoa yang memukau di bawah gemerlap bintang kepulauan.",
        ],
      },
    ],
  },
  {
    id: "turtle-canyon-guide",
    title: "Panduan Lengkap Snorkeling di Turtle Canyon Waikiki",
    category: "Satwa & Laut",
    date: "12 September 2026",
    readTime: "5 menit baca",
    image: "/sites/gotourshawaii/root/waikiki-turtle-banner.png",
    excerpt:
      "Turtle Canyon adalah stasiun pembersihan terumbu karang terkenal di Hawaii. Pelajari waktu terbaik snorkeling, etika kelautan, dan cara melihat penyu laut hijau.",
    author: {
      name: "Leilani Kealoha",
      role: "Biolog Kelautan & Spesialis Snorkeling",
    },
    relatedTourName: "Snorkeling & Berenang Penyu Waikiki Turtle Canyon",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "Apa yang Membuat Turtle Canyon Sangat Istimewa?",
        paragraphs: [
          "Terletak sekitar setengah mil di lepas pantai Waikiki, Turtle Canyon merupakan punggung terumbu karang unik yang dikenal para biolog kelautan sebagai 'stasiun pembersihan'. Ikan karang herbivora membersihkan alga dan parasit dari cangkang serta kulit penyu laut hijau Hawaii (honu).",
          "Karena hubungan simbiosis ini berlangsung setiap hari, pemandangan sekumpulan penyu yang beristirahat di terumbu karang atau berenang ke permukaan praktis terjamin sepanjang tahun.",
        ],
      },
      {
        heading: "Waktu Terbaik untuk Snorkeling",
        paragraphs: [
          "Pelayaran pagi hari (antara pukul 07:30 hingga 10:30) umumnya menawarkan hembusan angin paling tenang dan visibilitas bawah laut tertinggi sebelum ombak siang meningkat.",
          "Meski demikian, keberangkatan siang hari memberikan pencahayaan sinar matahari langsung paling terang yang menembus air, menciptakan kondisi fotografi bawah air yang memukau.",
        ],
        tips: [
          "Hanya gunakan tabir surya aman terumbu karang (hukum Hawaii melarang tabir surya berkandungan oxybenzone atau octinoxate).",
          "Gunakan pelampung snorkel agar dapat mengapung santai di atas terumbu karang tanpa merusaknya.",
        ],
      },
      {
        heading: "Etika Pelestarian Ekosistem Laut",
        paragraphs: [
          "Penyu laut hijau Hawaii dilindungi hukum federal dan negara bagian. Jangan pernah menyentuh, mengejar, memojokkan, atau memberi makan penyu. Pertahankan jarak minimal 3 meter dan beri ruang terbuka bagi penyu untuk naik bernapas.",
        ],
      },
    ],
  },
  {
    id: "pearl-harbor-tips",
    title: "Berkunjung ke Pearl Harbor: Rahasia Kunjungan yang Lancar & Bermakna",
    category: "Sejarah & Budaya",
    date: "28 Agustus 2026",
    readTime: "7 menit baca",
    image: "/sites/gotourshawaii/root/optimized-pearl-harbor-02.jpg",
    excerpt:
      "Menavigasi reservasi tiket, aturan ketat larangan tas, dan napak tilas emosional di USS Arizona Memorial. Inilah mengapa tur berpemandu kami menghilangkan semua kerumitan.",
    author: {
      name: "David Vance",
      role: "Sejarawan Militer & Narator Senior Tur",
    },
    relatedTourName: "Ekskursi Bersejarah Pearl Harbor & Memorial USS Arizona",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "Mengenal Kawasan Bersejarah Pearl Harbor",
        paragraphs: [
          "Pearl Harbor National Memorial adalah salah satu monumen bersejarah yang paling banyak dikunjungi di Amerika Serikat. Terdiri dari dua galeri museum kelas dunia, lingkaran peringatan luar ruangan, dan perahu antar-jemput monumen USS Arizona, perencanaan matang sangat dibutuhkan.",
          "Pengunjung juga dapat menjelajahi Monumen Kapal Perang Missouri, Museum Kapal Selam Armada Pasifik, dan Museum Penerbangan Pearl Harbor di Ford Island.",
        ],
      },
      {
        heading: "Kebijakan Ketat Larangan Membawa Tas",
        paragraphs: [
          "Demi protokol keamanan taman nasional, tas tangan, ransel, tas kamera, maupun tas pinggang tidak diizinkan masuk melewati gerbang keamanan. Tas yang melebihi ukuran dompet kecil harus dititipkan di loker berbayar.",
          "Anda diperbolehkan membawa kamera tanpa tas pelindung, ponsel cerdas, dompet saku, dan botol air minum bening.",
        ],
        tips: [
          "Bawa kartu identitas resmi berfoto (paspor / KTP) untuk semua wisatawan dewasa.",
          "Berpakaian sopan dan rapi: pakaian renang atau pakaian yang terlalu terbuka dilarang keras di area memorial kehormatan.",
        ],
      },
      {
        heading: "Mengapa Ikut Tur Berpemandu Jauh Lebih Nyaman",
        paragraphs: [
          "Tiket reservasi mandiri di situs resmi sering habis dalam hitungan detik setelah dibuka. Tur berpemandu kami mencakup tiket perahu shuttle resmi bergaransi, antar-jemput hotel ber-AC dari Waikiki, serta narasi sejarah mendalam dari pemandu lokal berpengalaman.",
        ],
      },
    ],
  },
  {
    id: "waimea-valley-waterfall",
    title: "Lembah & Air Terjun Waimea: Panduan Flora, Sejarah & Berenang Segar",
    category: "Alam & Pendakian",
    date: "15 Agustus 2026",
    readTime: "4 menit baca",
    image: "/sites/gotourshawaii/root/optimized-water-fall-002.jpg",
    excerpt:
      "Berjalan santai di antara 5.000 spesies tanaman botani tropis sebelum menyegarkan diri di bawah air terjun alami setinggi 14 meter di North Shore Oahu.",
    author: {
      name: "Koa Takahashi",
      role: "Pemandu Utama Pulau & Penduduk Asli Oahu",
    },
    relatedTourName: "Tur Keliling Pulau Oahu (Permata Tersembunyi & Air Terjun)",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "Lembah Para Pendeta Spiritual (Kāhuna Nui)",
        paragraphs: [
          "Dikenal dalam sejarah Hawaii sebagai 'Lembah Para Pendeta' (Kāhuna Nui), Waimea adalah pusat spiritual dan pemerintahan penting di Oahu selama lebih dari 700 tahun. Lembah ini menyimpan kuil keagamaan suci (heiau), pemukiman kuno, dan terasering pertanian kerajaan.",
        ],
      },
      {
        heading: "Kebun Botani Tropis Kelas Dunia",
        paragraphs: [
          "Jalur pejalan kaki beraspal membentang sejauh 1,2 km melewati 41 koleksi botani unik yang mewakili tumbuhan tropis dari Polinesia, Amerika Selatan, Afrika, dan Madagaskar. Anda akan menjumpai pohon monkeypod raksasa, kembang jahe eksotis, dan tanaman endemik langka Hawaii.",
        ],
        tips: [
          "Rompi pelampung telah disediakan gratis dan wajib dikenakan oleh semua yang berenang di kolam air terjun.",
          "Gunakan sepatu air atau sandal bertali kokoh untuk memudahkan melangkah di atas bebatuan sungai.",
        ],
      },
      {
        heading: "Berenang di Kolam Air Terjun Alami",
        paragraphs: [
          "Di ujung jalur setapak, Anda disambut gemuruh air terjun alami setinggi 14 meter yang mengalir ke cekungan air tawar yang jernih dan sejuk. Penjaga pantai bersertifikat berjaga setiap hari untuk memastikan keselamatan seluruh perenang.",
        ],
      },
    ],
  },
  {
    id: "diamond-head-hike-tips",
    title: "Mendaki Kawah Diamond Head: Perlengkapan, Tiket & Panorama Sunrise",
    category: "Petualangan",
    date: "30 Juli 2026",
    readTime: "5 menit baca",
    image: "/sites/gotourshawaii/root/Header-Photo-Diamond-Head.jpeg",
    excerpt:
      "Semua yang Anda butuhkan untuk menaklukkan jalur pendakian paling ikonik di Oahu. Cara kerja reservasi tiket negara bagian dan keunggulan shuttle praktis dari Waikiki.",
    author: {
      name: "Leilani Kealoha",
      role: "Spesialis Petualangan & Pendakian",
    },
    relatedTourName: "Shuttle Pendakian Diamond Head dengan Tiket Reservasi",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "Gambaran Jalur & Tingkat Kesulitan",
        paragraphs: [
          "Jalur Diamond Head State Monument berjarak 1,3 km sekali jalan dengan kenaikan elevasi sekitar 170 meter dari dasar kawah ke bunker puncak. Jalurnya mencakup jalan setapak beraspal, kerikil vulkanik, terowongan militer bersejarah sepanjang 68 meter, dan tangga beton bertingkat.",
          "Sebagian besar pendaki menyelesaikan perjalanan pulang-pergi dalam waktu 90 hingga 120 menit, termasuk waktu bersantai di puncak menikmati pemandangan spektakuler Waikiki.",
        ],
      },
      {
        heading: "Perlengkapan Wajib & Persiapan",
        paragraphs: [
          "Hampir tidak ada pepohonan rindang di sepanjang dinding kawah vulkanik. Mulai mendaki di pagi hari menghadirkan suhu yang lebih sejuk dan pencahayaan matahari terbit keemasan yang menakjubkan.",
        ],
        tips: [
          "Sepatu lari yang kokoh sangat disarankan; hindari sandal jepit atau sepatu berhak.",
          "Bawa setidaknya 1 liter air minum dingin per orang.",
          "Gunakan topi bertepi lebar dan oleskan tabir surya aman terumbu karang sebelum mulai mendaki.",
        ],
      },
      {
        heading: "Bebas Pusing Parkir dengan Layanan Shuttle Antar-Jemput",
        paragraphs: [
          "Tempat parkir di dalam kawah sangat terbatas dan memerlukan pemesanan jadwal yang rumit. Layanan shuttle harian Diamond Head kami dari Waikiki mengantar Anda langsung ke gerbang masuk dan menjemput Anda tepat waktu setelah selesai mendaki.",
        ],
      },
    ],
  },
  {
    id: "garlic-shrimp-north-shore",
    title: "Menemukan Udang Bawang Putih Kahuku Terbaik di North Shore Oahu",
    category: "Kuliner & Budaya",
    date: "14 Juli 2026",
    readTime: "4 menit baca",
    image: "/sites/gotourshawaii/root/Visual-img-2-e1714631806737.jpg",
    excerpt:
      "Perjalanan mengelilingi pulau belum lengkap tanpa mampir ke truk kuliner udang legendaris di Kahuku. Mentega gurih, bawang putih melimpah, nasi pulen, dan kelezatan hidangan laut segar.",
    author: {
      name: "David Vance",
      role: "Pecinta Kuliner Pulau & Tuan Rumah Budaya",
    },
    relatedTourName: "Tur Keliling Pulau Oahu (Permata Tersembunyi & Air Terjun)",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "Warisan Legendaris Udang Kahuku di North Shore",
        paragraphs: [
          "Pada awal tahun 1990-an, budidaya tambak udang lokal di Kahuku mulai memanen udang segar dan memasaknya langsung di truk makanan pinggir jalan. Kini, Kahuku garlic shrimp diakui dunia sebagai destinasi kuliner wajib saat menjelajahi pesisir Oahu.",
        ],
      },
      {
        heading: "Varian Rasa Klasik Favorit Pengunjung",
        paragraphs: [
          "Menu andalan utamanya adalah Scampi Style: udang utuh segar berkulit ditumis dengan limpahan bawang putih cincang, mentega gurih, dan perasan lemon segar, disajikan di atas dua centong nasi putih hangat berlumur garlic butter.",
          "Pilihan favorit lainnya mencakup Spicy Hot Garlic yang menggigit lidah, Lemon Pepper yang segar, dan Coconut Butterfly Shrimp krispi dengan cocolan saus cabai manis.",
        ],
        tips: [
          "Siapkan tisu basah; mengupas udang berbumbu bawang putih adalah kenikmatan yang lezat dan berantakan!",
          "Padukan hidangan Anda dengan es serut Hawaii (shave ice) dingin atau air kelapa muda segar.",
        ],
      },
      {
        heading: "Pemberhentian Kuliner di Rute Tur Keliling Pulau Kami",
        paragraphs: [
          "Semua rencana perjalanan tur keliling pulau sehari penuh kami menyertakan perhentian santai makan siang di taman food truck North Shore yang ikonik, sehingga Anda dapat menikmati cita rasa lokal autentik tanpa terburu-buru.",
        ],
      },
    ],
  },
  {
    id: "authentic-hawaiian-luau",
    title: "Seni Pesta Luau Hawaii: Tradisi Kuno, Perjamuan Imu & Tarian Api",
    category: "Sejarah & Budaya",
    date: "28 Juli 2026",
    readTime: "6 menit baca",
    image: "/sites/gotourshawaii/root/optimized-luau-cover-002.jpg",
    excerpt:
      "Rasakan denyut budaya Polinesia yang mendalam. Temukan makna oven bawah tanah imu yang sakral, tarian hula yang sarat cerita, dan tarian pisau api prajurit yang membakar semangat.",
    author: {
      name: "Koa Takahashi",
      role: "Pemandu Budaya Utama & Penduduk Asli Oahu",
    },
    relatedTourName: "Pesta Luau Paina Waikiki & Pertunjukan Budaya Polinesia",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "Asal-Usul Kuno Perjamuan Luau",
        paragraphs: [
          "Secara historis dikenal sebagai 'aha'aina (berkumpul untuk bersantap bersama), perjamuan tradisional ini memperingati peristiwa penting: kemenangan perang, panen melimpah, dan kelahiran agung. Pada tahun 1819, Raja Kamehameha II menghapus sistem tapu kuno dengan bersantap bersama kaum wanita di depan umum, melahirkan perayaan modern yang kita kenal sebagai luau.",
          "Luau masa kini menjunjung tinggi semangat kebersamaan, keramahan hangat aloha, dan kisah budaya melalui musik, tarian, dan masakan khas Hawaii.",
        ],
      },
      {
        heading: "Upacara Sakral Oven Bawah Tanah Imu",
        paragraphs: [
          "Bintang utama dari setiap luau tradisional adalah babi kalua, yang dimasak perlahan selama 8 hingga 12 jam di dalam imu—oven bawah tanah yang dipanaskan oleh batu vulkanik berpori dan dibungkus daun pisang serta daun ti yang harum semerbak.",
          "Menyaksikan upacara pembongkaran imu memperlihatkan daging yang begitu empuk, lembut, dan kaya aroma asap sedap yang lumer seketika di lidah.",
        ],
        tips: [
          "Cicipi hidangan pendamping tradisional: lomi salmon segar, poi (talas fermentasi lembut), dan puding kelapa haupia.",
          "Datanglah 30 menit lebih awal untuk mengikuti lokakarya merangkai kalung bunga lei dan melukis tato Polinesia temporer.",
        ],
      },
    ],
  },
  {
    id: "lanikai-pillbox-hike",
    title: "Pendakian Lanikai Pillbox: Pemandangan Sunrise di Atas Kepulauan Mokulua",
    category: "Petualangan",
    date: "08 Juli 2026",
    readTime: "5 menit baca",
    image: "/sites/gotourshawaii/root/Visual-img-6-e1714632145979.jpg",
    excerpt:
      "Salah satu jalur punggung bukit paling fotogenik di Oahu dengan pemandangan Teluk Kailua dan pulau kembar Mokulua. Inilah panduan jalur, tips keselamatan, dan waktu matahari terbit terbaik.",
    author: {
      name: "Leilani Kealoha",
      role: "Spesialis Petualangan & Pendakian",
    },
    relatedTourName: "Tur Keliling Pulau Oahu (Permata Tersembunyi & Air Terjun)",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "Pengalaman Menjelajahi Punggung Bukit Kaiwa",
        paragraphs: [
          "Juga dikenal sebagai Jalur Punggung Bukit Kaiwa, jalur sepanjang 2,9 km ini menyusuri punggung bukit berangin sepoi-sepoi yang menghadap ke Pantai Lanikai—pantai yang kerap dinobatkan sebagai salah satu pantai terindah di dunia. Dua bunker pengamatan militer bersejarah (pillbox) yang dibangun pada masa Perang Dunia II menjadi tempat beristirahat dan memandang alam yang spektakuler.",
          "Menatap ke arah cakrawala, pulau kembar ikonik yang dikenal sebagai Mokulua Islands ('The Mokes') menjulang anggun dari laut biru safir yang tenang.",
        ],
      },
      {
        heading: "Waktu Terbaik & Etika Bertamu di Kawasan Warga",
        paragraphs: [
          "Matahari terbit tak diragukan lagi adalah saat paling memukau di atas bukit. Menyaksikan sang surya merekah di balik Kepulauan Mokulua memancarkan pantulan cahaya merah muda dan keemasan di atas hamparan terumbu karang.",
          "Karena titik awal jalur berada di lingkungan perumahan warga yang damai, hormati warga sekitar dengan menjaga ketenangan suara dan tidak memarkir kendaraan di halaman pribadi.",
        ],
        tips: [
          "Bawa senter kepala kecil jika Anda mulai mendaki sebelum fajar menyingsing.",
          "Jalur pendakian memiliki tanah berpasir dan kerikil licin; sepatu mendaki dengan daya cengkeram kuat sangat disarankan.",
        ],
      },
    ],
  },
  {
    id: "haleiwa-town-guide",
    title: "Sehari di Kota Bersejarah Haleiwa: Warisan Selancar, Butik & Es Serut",
    category: "Panduan Wisata",
    date: "25 Juni 2026",
    readTime: "5 menit baca",
    image: "/sites/gotourshawaii/root/Visual-img-3-e1714632197722.jpg",
    excerpt:
      "Masuki ibu kota selancar Oahu yang santai. Arsitektur perkebunan bersejarah, Es Serut Matsumoto yang terkenal di dunia, galeri seni lokal, dan deburan ombak legendaris.",
    author: {
      name: "David Vance",
      role: "Pencerita & Pemandu Wisata North Shore",
    },
    relatedTourName: "Tur Keliling Pulau Oahu & Perkebunan Nanas Dole",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "Gerbang Bersejarah Menuju North Shore",
        paragraphs: [
          "Didirikan pada akhir tahun 1800-an sebagai pusat perkebunan tebu dan stasiun kereta api pesisir, Kota Haleiwa masih mempertahankan etalase kayu pedesaan yang menawan, jalan setapak papan antik, dan suasana pedesaan yang tak lekang oleh waktu.",
          "Kini, kota ini dirayakan secara global sebagai pusat komunitas olahraga selancar ombak besar profesional selama kejuaraan bergengsi Triple Crown di musim dingin.",
        ],
      },
      {
        heading: "Tradisi Manis Matsumoto Shave Ice",
        paragraphs: [
          "Melayani penduduk pulau dan wisatawan sejak 1951, Matsumoto Shave Ice tetap menjadi persinggahan wajib di North Shore. Es serut lembut bagai salju disiram sirup buah tropis racikan alami—lilikoi (markisa), jambu biji, dan mangga—disajikan dengan es krim vanila dan kacang azuki manis.",
        ],
        tips: [
          "Lintasi Jembatan Pelangi Anahulu bersejarah tahun 1921 dengan berjalan kaki untuk menikmati panorama sungai dan dermaga yang tenang.",
          "Jelajahi toko selancar lokal tempat para perajin papan selancar legendaris membuat papan selancar secara manual.",
        ],
      },
    ],
  },
  {
    id: "kualoa-ranch-jurassic",
    title: "Menjelajahi Kualoa Ranch: Lokasi Syuting Jurassic Park & Puncak Sakral",
    category: "Alam & Pendakian",
    date: "14 Juni 2026",
    readTime: "6 menit baca",
    image: "/sites/gotourshawaii/root/Hidden-Gems-of-Oahu.jpg",
    excerpt:
      "Puncak vulkanik hijau menjulang tempat syuting film Jurassic Park. Bagaimana cagar alam pribadi seluas 4.000 ekar ini melestarikan suaka alam dan warisan budaya Hawaii.",
    author: {
      name: "Koa Takahashi",
      role: "Pemandu Utama Pulau & Penduduk Asli Oahu",
    },
    relatedTourName: "Tur Keliling Pulau Oahu (Permata Tersembunyi & Air Terjun)",
    relatedTourLink: "/tour-packages",
    sections: [
      {
        heading: "Lembah Sakral Bangsawan Kerajaan Hawaii",
        paragraphs: [
          "Jauh sebelum para sutradara Hollywood memilih Kualoa Ranch sebagai latar megah film Jurassic Park, serial Lost, dan Godzilla, lembah megah ini dihormati sebagai salah satu tempat paling sakral di Oahu (wahi pana). Tempat para kepala suku membawa penerus mereka untuk dilatih kepemimpinan dan kearifan spiritual.",
          "Punggung bukit pegunungan Koʻolau yang bergerigi dan sering diselimuti kabut pagi lembut memancarkan keagungan lanskap purba yang tak tersentuh modernitas zaman.",
        ],
      },
      {
        heading: "Konservasi Alam dan Pertanian Berkelanjutan",
        paragraphs: [
          "Mencakup 4.000 ekar membentang dari puncak pegunungan hingga garis pantai (ahupuaʻa), Kualoa beroperasi sebagai peternakan sapi aktif dan kebun pangan berkelanjutan yang membudidayakan kakao, tiram segar, serta buah-buahan tropis.",
        ],
        tips: [
          "Lihat pulau Mokoliʻi (Topi Orang Tionghoa) yang mencuat di lepas pantai tepat di seberang Taman Regional Kualoa.",
          "Semua tur berpemandu kami berhenti di titik pandang pemandangan terindah untuk mengabadikan foto lembah spektakuler ini.",
        ],
      },
    ],
  },
];
