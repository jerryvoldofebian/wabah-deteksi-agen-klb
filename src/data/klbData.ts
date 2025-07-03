// Data KLB berdasarkan tabel dari BPOM/Dinkes
export interface KLBData {
  id: string;
  penyakit: string;
  penyebabEtiologi: string;
  waktuInkubasi: string;
  waktuInkubasiMenit?: number; // untuk filtering numerik
  tandaGejala: string[];
  panganTerlibat: string[];
  sampelSpesimen: string[];
  faktorKontribusi: string;
  kategori: 'digestive' | 'neural' | 'respiratory' | 'toxin' | 'bacterial' | 'viral' | 'parasitic';
}

export const klbData: KLBData[] = [
  // SALURAN PENCERNAAN ATAS (MUAL, MUNTAH)
  {
    id: 'keracunan-jamur',
    penyakit: 'Keracunan jamur (gastrointestinal)',
    penyebabEtiologi: 'Senyawa mirip resin dalam beberapa jenis jamur',
    waktuInkubasi: '30 menit sampai 2 jam',
    waktuInkubasiMenit: 30,
    tandaGejala: ['mual', 'muntah', 'diare', 'kejang perut'],
    panganTerlibat: ['berbagai jenis jamur liar'],
    sampelSpesimen: ['muntahan', 'pangan'],
    faktorKontribusi: 'Mengonsumsi jenis jamur beracun',
    kategori: 'toxin'
  },
  {
    id: 'keracunan-antimoni',
    penyakit: 'Keracunan antimoni',
    penyebabEtiologi: 'Di dalam peralatan masak berenamel',
    waktuInkubasi: 'Beberapa menit sampai 1 jam',
    waktuInkubasiMenit: 5,
    tandaGejala: ['muntah', 'kejang perut', 'diare'],
    panganTerlibat: ['pangan berasam tinggi'],
    sampelSpesimen: ['pangan', 'muntahan', 'feses', 'urin'],
    faktorKontribusi: 'Menggunakan peralatan yang mengandung antimoni, menyimpan pangan berasam tinggi di dalam peralatan masak berenamel, peralatan masak berenamel yang retak',
    kategori: 'toxin'
  },
  {
    id: 'keracunan-kadmium',
    penyakit: 'Keracunan kadmium',
    penyebabEtiologi: 'Kadmium dalam peralatan masak',
    waktuInkubasi: '15 - 30 menit',
    waktuInkubasiMenit: 15,
    tandaGejala: ['mual', 'muntah', 'kejang perut', 'diare', 'syok'],
    panganTerlibat: ['pangan berasam tinggi', 'hiasan kue berwarna metalik'],
    sampelSpesimen: ['pangan', 'muntahan', 'feses', 'urin', 'darah'],
    faktorKontribusi: 'Menggunakan peralatan yang mengandung kadmium, menyimpan pangan berasam tinggi dalam wadah yang mengandung kadmium, menetap pangan yang mengandung kadmium',
    kategori: 'toxin'
  },
  {
    id: 'keracunan-tembaga',
    penyakit: 'Keracunan tembaga',
    penyebabEtiologi: 'Tembaga di dalam pipa dan peralatan masak',
    waktuInkubasi: 'Beberapa menit sampai beberapa jam',
    waktuInkubasiMenit: 10,
    tandaGejala: ['rasa logam di mulut', 'mual', 'muntah', 'muntahan berwarna hijau', 'sakit perut', 'diare'],
    panganTerlibat: ['pangan berasam tinggi'],
    sampelSpesimen: ['pangan', 'muntahan', 'cucian perut', 'urin', 'darah'],
    faktorKontribusi: 'Menyimpan pangan berasam tinggi dalam wadah tembaga atau menyimpan pangan untuk minuman berasam tinggi, kesehatan pada tembaga yang mengcegah aliran balik dalam vending machine',
    kategori: 'toxin'
  },
  {
    id: 'keracunan-fluorida',
    penyakit: 'Keracunan fluorida',
    penyebabEtiologi: 'Natrium di dalam insektisida dan rodentisida',
    waktuInkubasi: 'Beberapa menit sampai 2 jam',
    waktuInkubasiMenit: 10,
    tandaGejala: ['rasa asin atau bersabun dalam mulut', 'hilang rasa pada mulut', 'muntah', 'diare', 'sakit perut', 'pucat', 'sianosis', 'pupil membesar', 'kejang'],
    panganTerlibat: ['pangan yang terkontaminasi', 'pangan kering tertentu (susu bubuk, tepung, soda kue, adonan kue)'],
    sampelSpesimen: ['pangan', 'muntahan', 'cucian perut'],
    faktorKontribusi: 'Menyimpan insektisida dan rodentisida di tempat yang sama dengan pangan, menyangka insektisida dan rodentisida sebagai pangan dalam bentuk bubuk',
    kategori: 'toxin'
  },
  
  // KERACUNAN TIMBAL
  {
    id: 'keracunan-timbal',
    penyakit: 'Keracunan timbal',
    penyebabEtiologi: 'Timbal di dalam wadah dari tanah, pestisida, cat, plester, dempul, sambungan yang disolder',
    waktuInkubasi: '30 menit atau lebih',
    waktuInkubasiMenit: 30,
    tandaGejala: ['rasa logam di mulut', 'mual muntah terkadang', 'sakit perut', 'muntah muntahan terbakar seperti susu', 'feses berdarah atau hitam', 'bau mulut tak sedap', 'syok', 'garis biru pada gusi'],
    panganTerlibat: ['pangan berasam tinggi', 'yang disimpan dalam wadah yang mengandung timbal', 'pangan yang terkontaminasi'],
    sampelSpesimen: ['pangan', 'muntahan', 'cucian perut', 'feses', 'darah', 'urin'],
    faktorKontribusi: 'Menggunakan wadah yang mengandung timbal, menyimpan pangan berasam tinggi di dalam wadah yang mengandung timbal, menyimpan pestisida di tempat yang sama dengan pangan',
    kategori: 'toxin'
  },

  // KERACUNAN TIMAH
  {
    id: 'keracunan-timah',
    penyakit: 'Keracunan timah',
    penyebabEtiologi: 'Timah pada kaleng bertimah',
    waktuInkubasi: '30 menit sampai 2 jam',
    waktuInkubasiMenit: 30,
    tandaGejala: ['perut kembung', 'mual', 'muntah', 'kejang perut', 'diare', 'sakit kepala'],
    panganTerlibat: ['pangan berasam tinggi'],
    sampelSpesimen: ['pangan', 'muntahan', 'feses', 'urin', 'darah'],
    faktorKontribusi: 'Menggunakan wadah timah yang tidak dilapisi bahan lain yang aman, menyimpan pangan berasam tinggi dalam wadah yang mengandung timah',
    kategori: 'toxin'
  },

  // KERACUNAN SENG
  {
    id: 'keracunan-seng',
    penyakit: 'Keracunan seng',
    penyebabEtiologi: 'Seng di dalam wadah yang tergalvanisasi',
    waktuInkubasi: 'Beberapa menit sampai beberapa jam',
    waktuInkubasiMenit: 10,
    tandaGejala: ['sakit di dalam mulut dan perut', 'mual', 'muntah', 'pusing'],
    panganTerlibat: ['pangan berasam tinggi'],
    sampelSpesimen: ['pangan', 'muntahan', 'cucian perut', 'urin', 'darah', 'feses'],
    faktorKontribusi: 'Menyimpan pangan berasam tinggi di dalam kaleng yang tergalvanisasi',
    kategori: 'toxin'
  },

  // KERACUNAN SIANIDA
  {
    id: 'keracunan-sianida',
    penyakit: 'Keracunan sianida',
    penyebabEtiologi: 'Sianida',
    waktuInkubasi: 'Beberapa detik sampai beberapa menit',
    waktuInkubasiMenit: 1,
    tandaGejala: ['pusing', 'sakit kepala', 'berbeda-debar', 'palpitasi', 'napas tidak normal', 'susah bernapas', 'panik', 'dengan cepat diikuti dengan muntah', 'koma', 'kejang-kejang', 'apnoea', 'bradycardia', 'hypotension dan metabolic acidosis'],
    panganTerlibat: ['biji-bijian, bir, tembakau, singkong, tepung tapioka, kol, bayam', 'mustard dan pangan yang terkontaminasi'],
    sampelSpesimen: ['pangan', 'darah', 'urin'],
    faktorKontribusi: 'Mengonsumsi pangan yang mengandung sianida atau terkontaminasi sianida',
    kategori: 'toxin'
  },

  // KERACUNAN ARSENIK
  {
    id: 'keracunan-arsenik',
    penyakit: 'Keracunan arsenik',
    penyebabEtiologi: 'Arsenik',
    waktuInkubasi: '± 1 jam',
    waktuInkubasiMenit: 60,
    tandaGejala: ['aroma nafas seperti bawang putih', 'muntah', 'sakit pada lambung', 'diare'],
    panganTerlibat: ['pangan atau air yang terkontaminasi'],
    sampelSpesimen: ['pangan', 'urin'],
    faktorKontribusi: 'Mengonsumsi pangan atau air yang terkontaminasi, terutama dari sumber air (sumur) yang terkontaminasi, meminum obat yang mengandung arsenik',
    kategori: 'toxin'
  },

  // TOKSIN BAKTERI - WAKTU INKUBASI 1-6 JAM
  {
    id: 'bacillus-cereus-emetis',
    penyakit: 'Keracunan Bacillus cereus (emetis)',
    penyebabEtiologi: 'Enterotoksin Bacillus cereus',
    waktuInkubasi: '½ - 5 jam',
    waktuInkubasiMenit: 30,
    tandaGejala: ['mual', 'muntah', 'kadang-kadang diare'],
    panganTerlibat: ['nasi masak atau goreng'],
    sampelSpesimen: ['pangan', 'muntahan', 'feses'],
    faktorKontribusi: 'Menyimpan pangan matang pada suhu ruang (30°C), menyimpan pangan matang di dalam wadah besar di dalam kulkas, menyiapkan pangan beberapa jam sebelum dihidangkan',
    kategori: 'bacterial'
  },

  {
    id: 'staphylococcus-aureus',
    penyakit: 'Keracunan staphylokokus',
    penyebabEtiologi: 'Enterotoksin A, B,C,D,E, atau F Staphylococcus aureus',
    waktuInkubasi: '1 - 8 jam, rata-rata 2 - 4 jam',
    waktuInkubasiMenit: 60,
    tandaGejala: ['mual', 'muntah', 'sakit perut', 'diare', 'keletihan'],
    panganTerlibat: ['ham', 'produk daging dan unggas', 'pastry berisi krim', 'mentega', 'keju', 'susu bubuk', 'makanan berprotein tinggi'],
    sampelSpesimen: ['muntahan', 'feses', 'usapan hidung', 'usapan luka'],
    faktorKontribusi: 'Menyiapkan pangan matang pada suhu ruang (30°C), menyimpannya di dalam wadah besar di dalam kulkas, menyentuh pangan matang atau luka setelah inkubasi bakteri, menyiapkan pangan beberapa jam sebelum dihidangkan, orang yang luka bernalah, fermentasi pangan beresam rendah tak normal',
    kategori: 'bacterial'
  },

  // SENYAWA KIMIA
  {
    id: 'keracunan-nitrit',
    penyakit: 'Keracunan nitrit',
    penyebabEtiologi: 'Nitrit atau nitrat yang dipakai sebagai bahan kuring daging atau air tanah dari sumur dangkal, pupuk',
    waktuInkubasi: '1 - 2 jam',
    waktuInkubasiMenit: 60,
    tandaGejala: ['mual', 'muntah', 'sianosis', 'sakit kepala', 'pusing', 'lemas', 'kehilangan kesadaran', 'darah berwarna coklat'],
    panganTerlibat: ['daging yang di kuring', 'pangan yang terkontaminasi', 'bayam dan terpapar nitrifikasi berlebihan'],
    sampelSpesimen: ['pangan', 'darah'],
    faktorKontribusi: 'Menggunakan nitrit berlebihan atau di dalam pangan untuk memperkecil kerusakan, menyangka nitrit sebagai garam biasa dan mempergunakan kondimen lainnya, pendinginan yang salah pada produk sayur, tidak mengkonfirmasi yang berlebihan dengan nitrifikasi berlebihan',
    kategori: 'toxin'
  },

  // TOKSIN BAKTERI WAKTU INKUBASI 4-6 JAM  
  {
    id: 'burkholderia-cococenans',
    penyakit: 'Keracunan bongkrek',
    penyebabEtiologi: 'Asam bongkrek dan toxoflavin yang dihasilkan oleh Burkholderia cococenans (d/h Pseudomonas cococenans)',
    waktuInkubasi: '4 - 6 jam',
    waktuInkubasiMenit: 240,
    tandaGejala: ['tidak enak badan', 'sakit perut', 'pusing', 'berkringet', 'letih', 'mengantuk hingga koma akibat hiperglikemia dan disusul hipoglikemia'],
    panganTerlibat: ['tempe bongkrek', 'tepung yang tidak basah'],
    sampelSpesimen: ['pangan dan darah'],
    faktorKontribusi: 'Mengonsumsi tempe bongkrek yang terkontaminasi Burkholderia cococenans',
    kategori: 'bacterial'
  },

  // BACILLUS ANTHRACIS
  {
    id: 'bacillus-anthracis',
    penyakit: 'Penyakit antraks',
    penyebabEtiologi: 'Bacillus anthracis',
    waktuInkubasi: '2 hari hingga beberapa minggu',
    waktuInkubasiMenit: 2880,
    tandaGejala: ['mual', 'muntah', 'tidak enak badan', 'diare berdarah', 'sakit perut akut'],
    panganTerlibat: ['daging'],
    sampelSpesimen: ['darah'],
    faktorKontribusi: 'Mengonsumsi daging yang terkontaminasi dan dimasak dengan tidak sempurna',
    kategori: 'bacterial'
  },

  // NATRIUM HIDROKSIDA
  {
    id: 'natrium-hidroksida',
    penyakit: 'Keracunan natrium hidroksida',
    penyebabEtiologi: 'Natrium hidroksida di dalam bahan pencuci botol, deterjen, pencuci limbah, atau pelurus rambut',
    waktuInkubasi: 'Beberapa menit',
    waktuInkubasiMenit: 5,
    tandaGejala: ['bibir', 'mulut dan tenggorokan terasa terbakar', 'muntah', 'sakit perut', 'diare'],
    panganTerlibat: ['minuman botol'],
    sampelSpesimen: ['pangan', 'muntahan'],
    faktorKontribusi: 'Pembilasan tidak cukup pada botol yang dicuci dengan soda kaustik',
    kategori: 'toxin'
  },

  // STREPTOKOKUS BETA-HEMOLITIK  
  {
    id: 'streptococcus-pyogenes',
    penyakit: 'Keracunan streptokoki beta-hemolitik',
    penyebabEtiologi: 'Streptococcus pyogenes: Bakteri berasal dari tenggorokan dan luka orang yang terinfeksi',
    waktuInkubasi: '1 - 3 hari',
    waktuInkubasiMenit: 1440,
    tandaGejala: ['sakit tenggorokan', 'demam', 'mual', 'muntah', 'rhinorrhea', 'ruam'],
    panganTerlibat: ['susu mentah', 'pangan yang mengandung telur'],
    sampelSpesimen: ['pangan', 'usapan tenggorokan', 'muntahan'],
    faktorKontribusi: 'Orang dengan infeksi bernanah, penyimpanan pangan pada suhu ruang (30°C), menyimpan pangan matang dalam wadah besar di dalam kulkas, pemanasan kembali pangan yang tidak cukup, menyiapkan pangan beberapa jam sebelum menghidangkan',
    kategori: 'bacterial'
  },

  // ENTERITIS BACILLUS CEREUS
  {
    id: 'bacillus-cereus-enteritis',
    penyakit: 'Keracunan Bacillus cereus (enteritis)',
    penyebabEtiologi: 'Enterotoksin Bacillus cereus',
    waktuInkubasi: '8 - 16 jam, rata-rata 12 jam',
    waktuInkubasiMenit: 480,
    tandaGejala: ['mual', 'kejang perut', 'diare'],
    panganTerlibat: ['produk sereal', 'sup', 'saus', 'bakso', 'sosis', 'sayur matang', 'produk-produk rekonstitusi dan dehidrasi'],
    sampelSpesimen: ['pangan', 'feses'],
    faktorKontribusi: 'Menyimpan pangan matang pada suhu ruang (30°C) atau hangat, menyimpan pangan matang dalam jumlah besar di kulkas, menyiapkan pangan beberapa jam sebelum menghidangkan, pemanasan kembali pada pangan yang tidak mencukupi',
    kategori: 'bacterial'
  },

  // CLOSTRIDIUM PERFRINGENS
  {
    id: 'clostridium-perfringens',
    penyakit: 'Keracunan Clostridium perfringens (enteritis)',
    penyebabEtiologi: 'Enterotoksin yang terbentuk selama sporulasi Clostridium perfringens, mikroba berasal dari feses manusia, hewan dan tanah',
    waktuInkubasi: '8 - 22 jam, rata-rata 10 jam',
    waktuInkubasiMenit: 480,
    tandaGejala: ['kejang perut', 'diare'],
    panganTerlibat: ['daging atau unggas matang', 'saus', 'sup'],
    sampelSpesimen: ['pangan', 'feses'],
    faktorKontribusi: 'Menyimpan pangan matang pada suhu ruang (30°C) atau hangat, menyimpan pangan matang dalam jumlah besar di kulkas, menyiapkan pangan beberapa jam sebelum menghidangkan, pemanasan kembali pada pangan sisa yang tidak mencukupi',
    kategori: 'bacterial'
  },

  // AEROMONAS HYDROPHILIA
  {
    id: 'aeromonas-hydrophilia',
    penyakit: 'Keracunan Aeromonas hydrophilia',
    penyebabEtiologi: 'Aeromonas hydrophilia',
    waktuInkubasi: '24-48 jam',
    waktuInkubasiMenit: 1440,
    tandaGejala: ['diare', 'muntah', 'kram perut', 'demam ringan'],
    panganTerlibat: ['pangan hasil laut (ikan, udang, tiram)', 'siput', 'dan air'],
    sampelSpesimen: ['pangan'],
    faktorKontribusi: 'Kontaminasi ikan pada tambak, perawatan yang tidak tepat pada tambak, penggunaan desinfektan pada perawatan ikan tidak tepat',
    kategori: 'bacterial'
  },

  // CAMPYLOBACTER JEJUNI
  {
    id: 'campylobacter-jejuni',
    penyakit: 'Keracunan Campylobacter jejuni',
    penyebabEtiologi: 'C. jejuni berasal dari saluran pencernaan manusia dan burung',
    waktuInkubasi: '2 - 7 hari, rata-rata 3 -5 hari',
    waktuInkubasiMenit: 2880,
    tandaGejala: ['diare (seringkali berdarah)', 'kejang perut', 'demam', 'anorexia', 'lemah', 'sakit kepala', 'muntah'],
    panganTerlibat: ['susu', 'daging', 'unggas', 'hati sapi', 'kerang', 'air mentah'],
    sampelSpesimen: ['pangan', 'feses', 'usapan rektal', 'darah'],
    faktorKontribusi: 'Mengonsumsi susu mentah, daging mentah, pasteurisasi susu tidak cukup',
    kategori: 'bacterial'
  },

  // KOLERA  
  {
    id: 'vibrio-cholerae',
    penyakit: 'Kolera',
    penyebabEtiologi: 'Enterotoksin Vibrio cholerae 01 klasik dan biotipe El Tor, dari feses orang yang terinfeksi',
    waktuInkubasi: 'Beberapa jam sampai 5 hari, rata-rata 1 - 3 hari',
    waktuInkubasiMenit: 360,
    tandaGejala: ['diare sangat cair (seperti tajin)', 'muntah', 'pangan perut', 'dehidrasi', 'haus', 'letih pingsan'],
    panganTerlibat: ['ikan', 'kekeringan', 'udang', 'sayuran mentah', 'pangan yang dicuci dengan air yang'],
    sampelSpesimen: ['pangan', 'feses', 'usapan rektal', 'darah'],
    faktorKontribusi: 'Memakan ikan dan kerang dari air yang terkontaminasi limbah kotoran di daerah endemik, higiene perorangan yang buruk, pemanasan yang tidak cukup, air pendingin yang cukup, air',
    kategori: 'bacterial'
  },

  // ESCHERICHIA COLI
  {
    id: 'escherichia-coli',
    penyakit: 'Diare Escherichia coli',
    penyebabEtiologi: 'Galur E.coli enteropatogenik (EPEC), enterotoksigenik (ETEC), enteroinvasif (EIEC), hemoragik (EHEC) 0157H7 dari feses manusia atau hewan yang terinfeksi',
    waktuInkubasi: '5 - 48 jam, rata-rata 10 - 24 jam',
    waktuInkubasiMenit: 300,
    tandaGejala: ['kejang perut (kadang-kadang berdarah)', 'mual', 'muntah', 'demam', 'menggigil', 'sakit kepala', 'sakit otot', 'kencing berdarah (utk galur hemoragik)'],
    panganTerlibat: ['keju lunak', 'hamburger setengah matang', 'air'],
    sampelSpesimen: ['pangan', 'feses', 'usapan rektal'],
    faktorKontribusi: 'Orang terinfeksi menangani pangan, pendinginan yang tak tepat, pemasakan yang tidak cukup, pembersihan dan sanitasi peralatan yang tidak tepat, mengonsumsi daging mentah atau tidak matang (gejala hemoragik)',
    kategori: 'bacterial'
  },

  // SALMONELLOSIS  
  {
    id: 'salmonella',
    penyakit: 'Salmonellosis',
    penyebabEtiologi: 'Berbagai serotipe Salmonella dari feses',
    waktuInkubasi: '6 -72 jam, rata-rata 18 - 36 jam',
    waktuInkubasiMenit: 360,
    tandaGejala: ['kejang perut', 'diare', 'menggigil', 'demam', 'mual', 'muntah', 'lemah'],
    panganTerlibat: ['daging dan unggas dan hasil olahannya', 'telur dan hasil olahannya', 'susu dan produk susu mentah', 'dan pangan lain yang terkontaminasi'],
    sampelSpesimen: ['pangan', 'feses dan usapan rektal'],
    faktorKontribusi: 'Menyimpan makanan matang pada suhu ruang (30°C), menyimpan makanan dalam jumlah besar di kulkas, pemanasan kembali yang tidak cukup, menyiapkan makanan beberapa jam sebelum menghidangkan, kontaminasi silang, pembersihan alat yang tidak tepat, pangan dari sumber yang terkontaminasi',
    kategori: 'bacterial'
  },

  // SALMONELLA ENTERITIDIS
  {
    id: 'salmonella-enteritidis',
    penyakit: 'Salmonella enteritidis',
    penyebabEtiologi: 'Salmonella enteritidis',
    waktuInkubasi: '12 - 72 jam',
    waktuInkubasiMenit: 720,
    tandaGejala: ['kejang perut', 'diare', 'demam', 'mual', 'muntah', 'lemah'],
    panganTerlibat: ['telur dan hasil olahannya', 'daging dan unggas dan hasil olahannya', 'dan pangan lain yang terkontaminasi'],
    sampelSpesimen: ['pangan', 'feses dan usapan rektal'],
    faktorKontribusi: 'Menyimpan pangan matang pada suhu ruang (30°C) atau hangat, menyimpan pangan dalam jumlah besar di kulkas, pemanasan kembali yang tidak mencukupi, menyiapkan pangan beberapa jam sebelum menghidangkan, kontaminasi silang, pembersihan alat yang tidak tepat, pangan dari sumber yang terkontaminasi',
    kategori: 'bacterial'
  },

  // SHIGELLOSIS
  {
    id: 'shigellosis',
    penyakit: 'Shigellosis',
    penyebabEtiologi: 'Shigella flexneri, S. dysenteriae, S. sonnei, dan S. boydii dari feses manusia yang terinfeksi',
    waktuInkubasi: '½ - 7 hari, rata-rata 1 - 3 hari',
    waktuInkubasiMenit: 720,
    tandaGejala: ['kejang perut', 'diare', 'feses berdarah dan berlendir', 'demam'],
    panganTerlibat: ['salad', 'air dan pangan yang terkontaminasi'],
    sampelSpesimen: ['pangan', 'feses', 'usapan rektal'],
    faktorKontribusi: 'Orang terinfeksi menangani pangan, pendinginan yang tak tepat, pemasakan yang tidak tepat, pemasakan kembali yang tidak cukup',
    kategori: 'bacterial'
  },

  // VIBRIO PARAHAEMOLYTICUS
  {
    id: 'vibrio-parahaemolyticus',
    penyakit: 'Keracunan Vibrio parahaemolyticus',
    penyebabEtiologi: 'V. parahaemolyticus dari seafood dan air laut',
    waktuInkubasi: '2 - 48 jam, rata-rata 12 jam',
    waktuInkubasiMenit: 120,
    tandaGejala: ['sakit perut', 'diare', 'mual', 'muntah', 'demam', 'menggigil', 'sakit kepala'],
    panganTerlibat: ['ikan laut', 'kerang', 'udang (mentah atau terkontaminasi kembali)'],
    sampelSpesimen: ['feses', 'sisa pangan', 'usapan rektal'],
    faktorKontribusi: 'Pemasakan tidak sempurna, pendinginan tidak tepat, kontaminasi silang, pembersihan alat yang tidak tepat, penggunaan air laut untuk persiapan atau untuk pendinginan pangan matang',
    kategori: 'bacterial'
  },

  // YERSINIOSIS
  {
    id: 'yersiniosis',
    penyakit: 'Yersiniosis',
    penyebabEtiologi: 'Yersinia enterocolitica, Y. pseudotuberculosis',
    waktuInkubasi: '1 - 10 hari, rata-rata 4 - 6 hari',
    waktuInkubasiMenit: 1440,
    tandaGejala: ['sakit perut', 'demam', 'sakit kepala', 'sakit tenggorokan', 'mungkin menyerupai radang usus buntu'],
    panganTerlibat: ['susu', 'tahu', 'air'],
    sampelSpesimen: ['feses', 'darah'],
    faktorKontribusi: 'Pemasakan yang tidak cukup, kontaminasi pasca pasteurisasi, kontaminasi pangan oleh air seni tikus dan hewan lainnya',
    kategori: 'bacterial'
  },

  // GASTROENTERITIS NORWALK (VIRUS)
  {
    id: 'norwalk-virus',
    penyakit: 'Gastroenteritis Norwalk',
    penyebabEtiologi: 'Virus Norwalk',
    waktuInkubasi: '16 - 48 jam',
    waktuInkubasiMenit: 960,
    tandaGejala: ['mual', 'muntah', 'sakit perut', 'diare', 'agak lemah', 'anorexia', 'sakit kepala'],
    panganTerlibat: ['remis', 'tiram', 'salad', 'pastry', 'frosting'],
    sampelSpesimen: ['feses'],
    faktorKontribusi: 'Air tempat tumbuh kekeringan yang terkontaminasi, sanitasi perorangan yang buruk, orang terinfeksi menangani pangan, pemasakan kembali yang tidak cukup',
    kategori: 'viral'
  },

  // GASTROENTERITIS VIRUS NON-SPESIFIK
  {
    id: 'gastroenteritis-virus',
    penyakit: 'Gastroenteritis virus non-spesifik',
    penyebabEtiologi: 'Virus enterik (Echoviruses, Coxackie viruses, reoviruses, adenoviruses rotaviruses, polioviruses)',
    waktuInkubasi: '3 - 5 hari',
    waktuInkubasiMenit: 4320,
    tandaGejala: ['diare', 'demam', 'muntah', 'sakit perut', 'kadang-kadang gejala saluran pernafasan'],
    panganTerlibat: ['tidak diketahui'],
    sampelSpesimen: ['feses'],
    faktorKontribusi: 'Higiene perorangan yang buruk, orang terinfeksi menangani pangan, pemasakan kembali yang tidak cukup',
    kategori: 'viral'
  },

  // DISENTERI AMUBA
  {
    id: 'entamoeba',
    penyakit: 'Disenteri amuba (Amebiasis)',
    penyebabEtiologi: 'Entamoeba histolytica dari feses orang yang terinfeksi',
    waktuInkubasi: '5 hari sampai beberapa bulan, rata-rata 3 - 4 minggu',
    waktuInkubasiMenit: 7200,
    tandaGejala: ['sakit perut', 'konstipasi atau diare', 'feses mengandung darah dan lendir'],
    panganTerlibat: ['buah-buahan mentah'],
    sampelSpesimen: ['feses'],
    faktorKontribusi: 'Higiene perorangan yang buruk, orang terinfeksi menangani pangan, pemasakan yang tidak cukup',
    kategori: 'parasitic'
  },

  // ANISIKIASIS
  {
    id: 'anisakiasis',
    penyakit: 'Anisikiasis',
    penyebabEtiologi: 'Anisakis, Phocanema, Porrocaecum',
    waktuInkubasi: '4 - 6 hari',
    waktuInkubasiMenit: 5760,
    tandaGejala: ['sakit perut', 'mual', 'muntah', 'diare', 'demam'],
    panganTerlibat: ['ikan kembung', 'cumi-cumi'],
    sampelSpesimen: ['feses'],
    faktorKontribusi: 'Mengonsumsi ikan mentah, pemasakan yang tidak sempurna',
    kategori: 'parasitic'
  },

  // INFEKSI CACING PITA DAGING SAPI
  {
    id: 'taenia-saginata',
    penyakit: 'Infeksi cacing pita daging sapi',
    penyebabEtiologi: 'Taenia saginata dari daging yang terinfestasi',
    waktuInkubasi: '8 - 14 minggu',
    waktuInkubasiMenit: 80640,
    tandaGejala: ['badan tak enak', 'merasa lapar', 'kehilangan berat', 'kejang perut'],
    panganTerlibat: ['daging sapi mentah atau kurang matang'],
    sampelSpesimen: ['feses'],
    faktorKontribusi: 'Inspeksi daging kurang baik, pemasakan tidak sempurna, pembuangan kotoran tidak baik, peternakan terkontaminasi limbah',
    kategori: 'parasitic'
  },

  // INFEKSI CACING PITA DAGING BABI
  {
    id: 'taenia-solium',
    penyakit: 'Infeksi cacing pita daging babi (Taeniasis)',
    penyebabEtiologi: 'Taenia solium dan daging babi yang terinfestasi',
    waktuInkubasi: '8 - 14 minggu',
    waktuInkubasiMenit: 80640,
    tandaGejala: ['badan tak enak', 'sakit merasa lapar', 'kehilangan berat'],
    panganTerlibat: ['daging babi mentah atau kurang matang'],
    sampelSpesimen: ['feses'],
    faktorKontribusi: 'Inspeksi daging kurang baik, pemasakan tidak sempurna, pembuangan kotoran tidak baik, peternakan terkontaminasi limbah',
    kategori: 'parasitic'
  },

  // INFEKSI CACING PITA BABI (DIPHYLLOBOTHRIASIS)
  {
    id: 'diphyllobothrium',
    penyakit: 'Infeksi cacing pita babi (Diphyllobothriasis)',
    penyebabEtiologi: 'Diphyllobothrium latum dari daging atau ikan yang terinfestasi',
    waktuInkubasi: '5 - 6 minggu',
    waktuInkubasiMenit: 50400,
    tandaGejala: ['rasa tak enak pada saluran pencernaan', 'anemia'],
    panganTerlibat: ['ikan air tawar yang mentah atau tidak dimasak dengan cukup'],
    sampelSpesimen: ['feses'],
    faktorKontribusi: 'Pemasakan tidak sempurna, pembuangan kotoran tidak baik, danau terkontaminasi limbah',
    kategori: 'parasitic'
  },

  // GIARDIASIS
  {
    id: 'giardiasis',
    penyakit: 'Giardiasis',
    penyebabEtiologi: 'Giardia lamblia dari feses manusia atau hewan yang terinfeksi',
    waktuInkubasi: '3 - 25 hari, rata-rata 7 hari',
    waktuInkubasiMenit: 4320,
    tandaGejala: ['sakit perut', 'diare berlendir', 'feses berlemak'],
    panganTerlibat: ['salmon', 'air', 'sayuran dan buah mentah'],
    sampelSpesimen: ['feses'],
    faktorKontribusi: 'Higiene perorangan yang buruk, orang terinfeksi menangani pangan, pemasakan yang tidak sempurna, pembuangan yang tidak baik, air terkontaminasi kotoran hewan',
    kategori: 'parasitic'
  },

  // GANGGUAN SYARAF (KERACUNAN GULMA JIMSON)
  {
    id: 'keracunan-gulma-jimson',
    penyakit: 'Keracunan gulma Jimson',
    penyebabEtiologi: 'Alkaloid Tropane',
    waktuInkubasi: 'Kurang dari 1 jam',
    waktuInkubasiMenit: 30,
    tandaGejala: ['kehausan yang luar biasa', 'takut sinar', 'penglihatan terganggu', 'sukar berbicara', 'rasa terkabar', 'delirium', 'koma', 'detak jantung cepat'],
    panganTerlibat: ['bagian gulma, tomat yang terpempel oleh gulma Jimson'],
    sampelSpesimen: ['urin'],
    faktorKontribusi: 'Makan bagian apa saja dari gulma Jimson, atau makan tomat yang tertempel oleh gulma Jimson',
    kategori: 'toxin'
  },

  // KERACUNAN HEMLOCK AIR
  {
    id: 'keracunan-hemlock',
    penyakit: 'Keracunan hemlock air',
    penyebabEtiologi: 'Resin and cicutoksin pada akar hemlock air',
    waktuInkubasi: '15 - 60 menit',
    waktuInkubasiMenit: 15,
    tandaGejala: ['air ludah berlebihan', 'mual', 'muntah', 'sakit perut', 'multut berbusa', 'nafas tak teratur', 'kejang', 'lumpuh pernafasan'],
    panganTerlibat: ['akar hemlock air Cicuta virosa, C. masculate, dan C. douglarii'],
    sampelSpesimen: ['urin'],
    faktorKontribusi: 'Makan hemlock; memakan hemlock air yang disangka lobak, ubi, atau wortel liar',
    kategori: 'toxin'
  },

  // KERACUNAN HIDROKLORBON TERKLORINASI (CHLORINATED HYDROCARBON)
  {
    id: 'chlorinated-hydrocarbon',
    penyakit: 'Keracunan hidroklorbon terklorinasi (Chlorinated hydrocarbon)',
    penyebabEtiologi: 'Insektisida hidroklorbon terklorinasi',
    waktuInkubasi: '30 menit sampai 6 jam',
    waktuInkubasiMenit: 30,
    tandaGejala: ['mual', 'muntah', 'kesemutan', 'pusing', 'lemah otot', 'anorexia', 'kehilangan berat badan', 'bingung', 'berkecut', 'kejang'],
    panganTerlibat: ['pangan yang terkontaminasi'],
    sampelSpesimen: ['darah', 'urin', 'feses', 'cucian perut'],
    faktorKontribusi: 'Menyimpan insektisida di ruang yang sama dengan pangan, menyangka pestisida sebagai pangan kering',
    kategori: 'toxin'
  },

  // KERACUNAN CIGUATERA
  {
    id: 'ciguatera',
    penyakit: 'Keracunan Ciguatera',
    penyebabEtiologi: 'Ciguatoksin dalam saluran pencernaan, kelenjar kelamin dan daging ikan laut tropis',
    waktuInkubasi: '3 - 5 jam, kadang lebih',
    waktuInkubasiMenit: 180,
    tandaGejala: ['gejala saluran pencernaan', 'gatal dan mati rasa pada mulut dan jari tangan', 'rasa logam pada mulut', 'diare', 'sakit otot dan sendi', 'pusing', 'sensasi panas dingin', 'detak jantung lemah', 'keletihan', 'kelumpuhan'],
    panganTerlibat: ['berbagai ikan laut tropis (barracuda, grouper, red snapper, amber jack, goat fish, skip jack, parrot fish)'],
    sampelSpesimen: ['sisa pangan', 'darah'],
    faktorKontribusi: 'Mengonsumsi hati, saluran pencernaan, kelenjar kelamin, daging ikan tropis dari kerang yang terkontaminasi',
    kategori: 'toxin'
  }
];

// Fungsi untuk mencari berdasarkan gejala
export function searchBySymptoms(symptoms: string[]): KLBData[] {
  if (!symptoms.length) return klbData;
  
  return klbData.filter(item => {
    return symptoms.some(symptom => 
      item.tandaGejala.some(gejala => 
        gejala.toLowerCase().includes(symptom.toLowerCase()) ||
        symptom.toLowerCase().includes(gejala.toLowerCase())
      )
    );
  });
}

// Fungsi untuk filter berdasarkan waktu inkubasi
export function filterByIncubationTime(data: KLBData[], minMinutes?: number, maxMinutes?: number): KLBData[] {
  if (!minMinutes && !maxMinutes) return data;
  
  return data.filter(item => {
    if (!item.waktuInkubasiMenit) return false;
    
    if (minMinutes && item.waktuInkubasiMenit < minMinutes) return false;
    if (maxMinutes && item.waktuInkubasiMenit > maxMinutes) return false;
    
    return true;
  });
}

// Fungsi untuk filter berdasarkan kategori
export function filterByCategory(data: KLBData[], category?: string): KLBData[] {
  if (!category) return data;
  return data.filter(item => item.kategori === category);
}