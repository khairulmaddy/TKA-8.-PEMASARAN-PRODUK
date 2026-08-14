import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'single_choice',
    cognitiveLevel: 'C5',
    title: 'Evaluasi Strategi UMKM Minuman Herbal',
    stem: 'Sebuah UMKM minuman herbal memiliki produk berkualitas, tetapi penjualan stagnan. Data menunjukkan pelanggan utama berusia 30–45 tahun, sementara konten promosi selama ini didominasi video tren yang menarik remaja. Strategi evaluasi yang paling tepat adalah ...',
    options: [
      { id: 'a', label: 'mempertahankan konten karena semua tren pasti meningkatkan penjualan' },
      { id: 'b', label: 'menghentikan promosi digital dan hanya mengandalkan penjualan langsung' },
      { id: 'c', label: 'menyesuaikan pesan, media, dan penawaran dengan karakteristik segmen pelanggan utama lalu menguji hasilnya' },
      { id: 'd', label: 'menurunkan harga secara besar-besaran tanpa mengubah komunikasi pemasaran' },
      { id: 'e', label: 'menambah jumlah unggahan tanpa mengevaluasi kesesuaian target' }
    ],
    correctAnswer: 'c',
    explanation: 'Strategi terbaik berbasis evaluasi adalah mencocokkan STP, pesan, media, dan penawaran dengan target, kemudian menguji dampaknya.'
  },
  {
    id: 2,
    type: 'single_choice',
    cognitiveLevel: 'C5',
    title: 'Prioritas Perbaikan Konversi Toko Pakaian Daring',
    stem: 'Toko pakaian daring memperoleh banyak kunjungan setelah menggunakan iklan berbayar, tetapi rasio pembelian rendah. Evaluasi menunjukkan halaman produk lambat, foto kurang informatif, dan informasi ukuran tidak jelas. Prioritas perbaikan paling logis adalah ...',
    options: [
      { id: 'a', label: 'menambah anggaran iklan agar kunjungan semakin tinggi' },
      { id: 'b', label: 'memperbaiki pengalaman halaman produk sebelum meningkatkan anggaran iklan' },
      { id: 'c', label: 'mengganti seluruh produk dengan produk baru' },
      { id: 'd', label: 'menghapus informasi ukuran agar halaman lebih singkat' },
      { id: 'e', label: 'menaikkan harga untuk membangun citra premium' }
    ],
    correctAnswer: 'b',
    explanation: 'Masalah terjadi pada tahap konversi. Memperbaiki pengalaman halaman produk lebih tepat daripada memperbesar traffic yang belum siap dikonversi.'
  },
  {
    id: 3,
    type: 'single_choice',
    cognitiveLevel: 'C5',
    title: 'Evaluasi Efisiensi Kampanye Influencer',
    stem: 'Sebuah usaha keripik mencatat penjualan naik 20% setelah influencer mempromosikan produknya. Namun, keuntungan hanya naik 3% karena biaya promosi sangat besar. Kesimpulan evaluasi yang paling tepat adalah ...',
    options: [
      { id: 'a', label: 'kampanye pasti gagal karena keuntungan tidak naik 20%' },
      { id: 'b', label: 'kampanye berhasil sepenuhnya karena penjualan meningkat' },
      { id: 'c', label: 'kampanye perlu dinilai dengan metrik penjualan, biaya akuisisi, margin, dan laba, bukan penjualan saja' },
      { id: 'd', label: 'promosi influencer harus selalu dihentikan' },
      { id: 'e', label: 'harga produk harus langsung diturunkan' }
    ],
    correctAnswer: 'c',
    explanation: 'Kenaikan penjualan tidak otomatis berarti strategi menguntungkan. Evaluasi harus mempertimbangkan biaya dan profitabilitas.'
  },
  {
    id: 4,
    type: 'single_choice',
    cognitiveLevel: 'C4',
    title: 'Analisis Pemilihan Segmen Pasar A vs B',
    stem: 'Dua segmen pasar memberikan data berikut: Segmen A memiliki 1.000 calon pelanggan dengan tingkat pembelian 5%, sedangkan Segmen B memiliki 400 calon pelanggan dengan tingkat pembelian 15%. Jika sumber daya promosi terbatas, analisis awal yang paling tepat adalah ...',
    options: [
      { id: 'a', label: 'selalu memilih A karena jumlah calon pelanggan lebih besar' },
      { id: 'b', label: 'selalu memilih B karena persentase pembelian lebih tinggi' },
      { id: 'c', label: 'membandingkan potensi nilai penjualan, biaya menjangkau segmen, dan kesesuaian produk sebelum memilih' },
      { id: 'd', label: 'memilih segmen dengan jumlah penduduk paling banyak' },
      { id: 'e', label: 'membagi anggaran sama rata tanpa evaluasi' }
    ],
    correctAnswer: 'c',
    explanation: 'Ukuran segmen dan conversion rate saja belum cukup. Potensi nilai, biaya, dan product-market fit harus dibandingkan.'
  },
  {
    id: 5,
    type: 'single_choice',
    cognitiveLevel: 'C4',
    title: 'Positioning Produk Merek Lokal',
    stem: 'Sebuah merek lokal ingin membedakan produknya dari pesaing. Pesaing menjual produk sejenis dengan harga rendah. Merek lokal memiliki bahan lebih berkualitas dan kemasan ramah lingkungan. Positioning yang paling kuat adalah ...',
    options: [
      { id: 'a', label: 'produk termurah di pasar' },
      { id: 'b', label: 'produk untuk semua orang tanpa pembeda' },
      { id: 'c', label: 'produk berkualitas dengan nilai keberlanjutan yang jelas' },
      { id: 'd', label: 'produk yang mengikuti semua produk pesaing' },
      { id: 'e', label: 'produk dengan promosi sebanyak mungkin' }
    ],
    correctAnswer: 'c',
    explanation: 'Positioning efektif menonjolkan keunggulan yang relevan, berbeda, dan dapat dibuktikan.'
  },
  {
    id: 6,
    type: 'single_choice',
    cognitiveLevel: 'C4',
    title: 'Analisis Matriks Iklan A (CTR) vs Iklan B (Konversi)',
    stem: 'Data kampanye menunjukkan: iklan A memiliki CTR tinggi tetapi pembelian rendah; iklan B CTR sedang tetapi pembelian tinggi. Jika tujuan utama kampanye adalah penjualan, keputusan yang paling rasional adalah ...',
    options: [
      { id: 'a', label: 'memilih A karena CTR adalah satu-satunya indikator' },
      { id: 'b', label: 'memilih B dan mencari penyebab konversinya lebih baik' },
      { id: 'c', label: 'menghentikan kedua iklan' },
      { id: 'd', label: 'menganggap CTR dan pembelian tidak berkaitan' },
      { id: 'e', label: 'menggandakan anggaran A tanpa pengujian' }
    ],
    correctAnswer: 'b',
    explanation: 'Jika tujuan adalah penjualan, conversion dan nilai bisnis lebih penting daripada sekadar klik.'
  },
  {
    id: 7,
    type: 'single_choice',
    cognitiveLevel: 'C4',
    title: 'Evaluasi Dampak Program Diskon Penjualan',
    stem: 'Sebuah toko memberikan diskon 30% selama sebulan. Penjualan meningkat, tetapi setelah diskon berakhir pelanggan kembali ke tingkat pembelian semula. Evaluasi yang paling tepat adalah ...',
    options: [
      { id: 'a', label: 'diskon pasti gagal karena penjualan turun setelah program' },
      { id: 'b', label: 'diskon berhasil membangun loyalitas secara otomatis' },
      { id: 'c', label: 'diskon efektif sebagai pemicu jangka pendek, tetapi perlu strategi retensi agar dampaknya berkelanjutan' },
      { id: 'd', label: 'diskon harus dinaikkan menjadi 50%' },
      { id: 'e', label: 'program promosi tidak perlu dievaluasi' }
    ],
    correctAnswer: 'c',
    explanation: 'Diskon dapat meningkatkan pembelian jangka pendek, tetapi loyalitas memerlukan nilai, pengalaman, dan retensi.'
  },
  {
    id: 8,
    type: 'single_choice',
    cognitiveLevel: 'C3',
    title: 'Pengujian Desain Kemasan Produk',
    stem: 'Sebuah usaha makanan ingin menguji dua desain kemasan sebelum produksi massal. Langkah yang paling tepat adalah ...',
    options: [
      { id: 'a', label: 'memilih desain berdasarkan selera pemilik' },
      { id: 'b', label: 'mencetak sebanyak mungkin kedua desain' },
      { id: 'c', label: 'membuat prototipe, meminta umpan balik target pasar, lalu membandingkan hasilnya' },
      { id: 'd', label: 'mengikuti desain pesaing' },
      { id: 'e', label: 'menunggu produk terjual tanpa uji' }
    ],
    correctAnswer: 'c',
    explanation: 'Uji prototipe mengurangi risiko dan menyediakan data pelanggan sebelum keputusan produksi besar.'
  },
  {
    id: 9,
    type: 'single_choice',
    cognitiveLevel: 'C3',
    title: 'Komponen Perhitungan Conversion Rate',
    stem: 'Untuk menghitung conversion rate toko daring, data yang diperlukan adalah ...',
    options: [
      { id: 'a', label: 'jumlah pengikut dan jumlah unggahan' },
      { id: 'b', label: 'jumlah kunjungan dan jumlah transaksi' },
      { id: 'c', label: 'jumlah pesaing dan harga pesaing' },
      { id: 'd', label: 'jumlah karyawan dan jam kerja' },
      { id: 'e', label: 'jumlah produk dan ukuran gudang' }
    ],
    correctAnswer: 'b',
    explanation: 'Conversion rate umumnya membandingkan jumlah konversi/transaksi dengan jumlah pengunjung atau sesi.'
  },
  {
    id: 10,
    type: 'single_choice',
    cognitiveLevel: 'C3',
    title: 'Pemilihan Media Promosi Target Mahasiswa',
    stem: 'Sebuah usaha memiliki target pelanggan mahasiswa. Media promosi yang paling logis untuk tahap pengujian awal adalah ...',
    options: [
      { id: 'a', label: 'media yang tidak digunakan target' },
      { id: 'b', label: 'saluran yang sering digunakan target dan dapat diukur hasilnya' },
      { id: 'c', label: 'hanya brosur cetak tanpa kode pelacakan' },
      { id: 'd', label: 'semua media sekaligus dengan anggaran sama' },
      { id: 'e', label: 'media yang dipilih berdasarkan tren semata' }
    ],
    correctAnswer: 'b',
    explanation: 'Pemilihan media harus mempertimbangkan perilaku target dan kemampuan mengukur hasil.'
  },
  {
    id: 11,
    type: 'single_choice',
    cognitiveLevel: 'C2',
    title: 'Definisi Key Performance Indicator (KPI)',
    stem: 'Dalam evaluasi strategi pemasaran, istilah KPI paling tepat dipahami sebagai ...',
    options: [
      { id: 'a', label: 'hiasan pada laporan pemasaran' },
      { id: 'b', label: 'indikator terukur yang digunakan untuk menilai pencapaian tujuan' },
      { id: 'c', label: 'daftar seluruh produk perusahaan' },
      { id: 'd', label: 'jumlah karyawan pemasaran' },
      { id: 'e', label: 'jadwal produksi barang' }
    ],
    correctAnswer: 'b',
    explanation: 'KPI adalah indikator kinerja yang terukur dan dikaitkan dengan tujuan yang hendak dicapai.'
  },
  {
    id: 12,
    type: 'single_choice',
    cognitiveLevel: 'C2',
    title: 'Perbedaan Segmentasi dan Targeting',
    stem: 'Perbedaan utama antara segmentasi dan targeting adalah ...',
    options: [
      { id: 'a', label: 'segmentasi memilih harga, targeting menentukan kemasan' },
      { id: 'b', label: 'segmentasi membagi pasar ke kelompok tertentu, targeting memilih kelompok yang diprioritaskan' },
      { id: 'c', label: 'segmentasi menentukan laba, targeting menentukan produksi' },
      { id: 'd', label: 'segmentasi adalah promosi, targeting adalah distribusi' },
      { id: 'e', label: 'keduanya tidak memiliki perbedaan' }
    ],
    correctAnswer: 'b',
    explanation: 'Segmentasi menghasilkan kelompok pasar; targeting menentukan segmen yang menjadi sasaran utama.'
  },
  {
    id: 13,
    type: 'single_choice',
    cognitiveLevel: 'C1',
    title: 'Konsep Pengelompokan Konsumen',
    stem: 'Kegiatan menentukan kelompok konsumen berdasarkan karakteristik tertentu disebut ...',
    options: [
      { id: 'a', label: 'positioning' },
      { id: 'b', label: 'segmentasi' },
      { id: 'c', label: 'distribusi' },
      { id: 'd', label: 'produksi' },
      { id: 'e', label: 'evaluasi' }
    ],
    correctAnswer: 'b',
    explanation: 'Segmentasi adalah proses membagi pasar menjadi kelompok konsumen yang memiliki karakteristik atau kebutuhan tertentu.'
  },
  {
    id: 14,
    type: 'single_choice',
    cognitiveLevel: 'C1',
    title: 'Empat Unsur Bauran Pemasaran (4P)',
    stem: 'Empat unsur utama bauran pemasaran 4P adalah ...',
    options: [
      { id: 'a', label: 'Product, Price, Place, Promotion' },
      { id: 'b', label: 'People, Process, Profit, Plan' },
      { id: 'c', label: 'Product, Profit, Public, Place' },
      { id: 'd', label: 'Price, People, Planning, Production' },
      { id: 'e', label: 'Place, Profit, Promotion, Planning' }
    ],
    correctAnswer: 'a',
    explanation: '4P terdiri atas Product, Price, Place, dan Promotion.'
  },
  {
    id: 15,
    type: 'single_choice',
    cognitiveLevel: 'C5',
    title: 'Penanganan Keluhan Layanan Pengiriman',
    stem: 'Sebuah merek menerima banyak komentar negatif tentang pelayanan pengiriman, bukan kualitas produk. Tim pemasaran ingin mempertahankan pelanggan. Tindakan evaluatif terbaik adalah ...',
    options: [
      { id: 'a', label: 'menghapus semua komentar negatif' },
      { id: 'b', label: 'menyalahkan pelanggan' },
      { id: 'c', label: 'menggunakan keluhan sebagai data untuk memperbaiki proses layanan dan mengukur perubahan kepuasan' },
      { id: 'd', label: 'menghentikan penjualan daring' },
      { id: 'e', label: 'menambah iklan tanpa memperbaiki layanan' }
    ],
    correctAnswer: 'c',
    explanation: 'Keluhan merupakan voice of customer. Perbaikan layanan dan pengukuran ulang lebih strategis daripada menutup kritik.'
  },
  {
    id: 16,
    type: 'single_choice',
    cognitiveLevel: 'C5',
    title: 'Strategi Awareness Tinggi tetapi Trial Rendah',
    stem: 'Sebuah produk baru memiliki awareness tinggi tetapi trial rendah. Hasil wawancara menunjukkan konsumen belum memahami cara menggunakan produk. Strategi paling tepat adalah ...',
    options: [
      { id: 'a', label: 'meningkatkan frekuensi iklan yang sama' },
      { id: 'b', label: 'mengubah komunikasi menjadi edukatif dan memberikan demonstrasi atau sampel yang relevan' },
      { id: 'c', label: 'mengurangi informasi produk' },
      { id: 'd', label: 'menaikkan harga agar terlihat eksklusif' },
      { id: 'e', label: 'menghentikan semua promosi' }
    ],
    correctAnswer: 'b',
    explanation: 'Awareness sudah tinggi; hambatannya adalah pemahaman dan keyakinan untuk mencoba, sehingga edukasi dan trial lebih sesuai.'
  },
  {
    id: 17,
    type: 'single_choice',
    cognitiveLevel: 'C4',
    title: 'Strategi SWOT: Kekuatan vs Ancaman Pesaing Murah',
    stem: 'Dalam analisis SWOT, muncul kekuatan berupa kualitas produk tinggi dan ancaman berupa banyak pesaing dengan harga murah. Strategi yang paling sesuai adalah ...',
    options: [
      { id: 'a', label: 'mengabaikan pesaing' },
      { id: 'b', label: 'menonjolkan kualitas yang dapat dibuktikan dan membangun nilai tambah yang sulit ditiru' },
      { id: 'c', label: 'menurunkan kualitas agar biaya sama' },
      { id: 'd', label: 'meniru harga pesaing tanpa menghitung biaya' },
      { id: 'e', label: 'menghapus keunggulan kualitas' }
    ],
    correctAnswer: 'b',
    explanation: 'Kekuatan harus dimanfaatkan untuk menghadapi ancaman, bukan dikorbankan tanpa analisis.'
  },
  {
    id: 18,
    type: 'single_choice',
    cognitiveLevel: 'C4',
    title: 'Perhitungan Customer Acquisition Cost (CAC)',
    stem: 'Jika biaya kampanye Rp2.000.000 menghasilkan 100 pelanggan baru, metrik yang dapat dihitung untuk mengevaluasi biaya akuisisi pelanggan adalah ...',
    options: [
      { id: 'a', label: 'Rp2.000 per pelanggan' },
      { id: 'b', label: 'Rp10.000 per pelanggan' },
      { id: 'c', label: 'Rp20.000 per pelanggan' },
      { id: 'd', label: 'Rp200.000 per pelanggan' },
      { id: 'e', label: 'Rp2.000.000 per pelanggan' }
    ],
    correctAnswer: 'c',
    explanation: 'CAC = total biaya akuisisi / pelanggan baru = Rp2.000.000 / 100 = Rp20.000 per pelanggan.'
  },
  {
    id: 19,
    type: 'single_choice',
    cognitiveLevel: 'C3',
    title: 'Urutan Keputusan Pemasaran Berbasis Data',
    stem: 'Urutan pengambilan keputusan pemasaran berbasis data yang paling tepat adalah ...',
    options: [
      { id: 'a', label: 'menentukan keputusan → mencari data → mengabaikan hasil' },
      { id: 'b', label: 'mengumpulkan data → menganalisis → menentukan alternatif → menguji/mengevaluasi' },
      { id: 'c', label: 'membuat iklan → menentukan target → mencari masalah' },
      { id: 'd', label: 'meniru pesaing → menjual → mengukur jika sempat' },
      { id: 'e', label: 'menentukan harga → menghapus data → promosi' }
    ],
    correctAnswer: 'b',
    explanation: 'Keputusan berbasis data membutuhkan data, analisis, alternatif, implementasi/pengujian, dan evaluasi.'
  },
  {
    id: 20,
    type: 'single_choice',
    cognitiveLevel: 'C2',
    title: 'Tujuan Utama Brand Positioning',
    stem: 'Tujuan utama positioning adalah ...',
    options: [
      { id: 'a', label: 'membuat semua produk sama' },
      { id: 'b', label: 'membangun persepsi tertentu yang jelas dan bernilai di benak target pasar' },
      { id: 'c', label: 'mengurangi jumlah pelanggan' },
      { id: 'd', label: 'menghapus identitas merek' },
      { id: 'e', label: 'menentukan jumlah gudang' }
    ],
    correctAnswer: 'b',
    explanation: 'Positioning mengarahkan persepsi target pasar terhadap nilai dan keunikan merek.'
  },
  {
    id: 21,
    type: 'matching',
    cognitiveLevel: 'C3',
    title: 'Menjodohkan Konsep Dasar Pemasaran (Segmentasi, Targeting, Positioning, KPI, SWOT)',
    stem: 'Jodohkan konsep berikut dengan fungsi yang paling tepat:\nA. Segmentasi | B. Targeting | C. Positioning | D. KPI | E. SWOT',
    options: [
      { id: 'a', label: '1–A: membagi pasar; 2–B: memilih segmen; 3–C: membentuk persepsi; 4–D: mengukur kinerja; 5–E: menganalisis faktor internal-eksternal' },
      { id: 'b', label: '1–B; 2–A; 3–D; 4–C; 5–E' },
      { id: 'c', label: '1–C; 2–D; 3–A; 4–E; 5–B' },
      { id: 'd', label: '1–D; 2–E; 3–B; 4–A; 5–C' },
      { id: 'e', label: '1–E; 2–C; 3–D; 4–B; 5–A' }
    ],
    correctAnswer: 'a',
    explanation: 'Pasangan pada opsi A sesuai fungsi masing-masing konsep pemasaran.'
  },
  {
    id: 22,
    type: 'matching',
    cognitiveLevel: 'C4',
    title: 'Menjodohkan Indikator Metrik Digital dengan Interpretasinya',
    stem: 'Jodohkan indikator dengan interpretasinya:\nA. CTR | B. Conversion Rate | C. CAC | D. Retention | E. ROI',
    options: [
      { id: 'a', label: '1–A: rasio klik; 2–B: rasio konversi; 3–C: biaya mendapatkan pelanggan; 4–D: kemampuan mempertahankan pelanggan; 5–E: hasil dibanding investasi' },
      { id: 'b', label: '1–B; 2–A; 3–E; 4–C; 5–D' },
      { id: 'c', label: '1–C; 2–D; 3–A; 4–E; 5–B' },
      { id: 'd', label: '1–D; 2–E; 3–B; 4–A; 5–C' },
      { id: 'e', label: '1–E; 2–C; 3–D; 4–B; 5–A' }
    ],
    correctAnswer: 'a',
    explanation: 'Setiap indikator pada opsi A dipasangkan dengan fungsi pengukuran yang tepat.'
  },
  {
    id: 23,
    type: 'matching',
    cognitiveLevel: 'C3',
    title: 'Menjodohkan Kondisi Hambatan Pemasaran dengan Tindakan Strategis',
    stem: 'Jodohkan kondisi dengan tindakan:\nA. Awareness rendah | B. Awareness tinggi–trial rendah | C. Trial tinggi–repeat rendah | D. CTR tinggi–conversion rendah | E. Keluhan layanan tinggi',
    options: [
      { id: 'a', label: '1–A: tingkatkan jangkauan; 2–B: edukasi/trial; 3–C: perbaiki pengalaman/retensi; 4–D: evaluasi landing page/penawaran; 5–E: perbaiki proses layanan' },
      { id: 'b', label: '1–B; 2–A; 3–D; 4–C; 5–E' },
      { id: 'c', label: '1–C; 2–D; 3–A; 4–E; 5–B' },
      { id: 'd', label: '1–D; 2–E; 3–B; 4–A; 5–C' },
      { id: 'e', label: '1–E; 2–C; 3–D; 4–B; 5–A' }
    ],
    correctAnswer: 'a',
    explanation: 'Tindakan pada opsi A mengikuti hambatan pada masing-masing tahap perjalanan pelanggan.'
  },
  {
    id: 24,
    type: 'true_false',
    cognitiveLevel: 'C4',
    title: 'Analisis Penjualan dan Biaya Promosi',
    stem: 'Pernyataan: "Jika penjualan meningkat, strategi pemasaran pasti efektif sehingga tidak perlu melihat biaya promosi dan laba."',
    options: [
      { id: 'a', label: 'Benar' },
      { id: 'b', label: 'Salah' }
    ],
    correctAnswer: 'b',
    explanation: 'Salah. Efektivitas harus dinilai bersama biaya, margin, laba, tujuan, dan keberlanjutan hasil.'
  },
  {
    id: 25,
    type: 'true_false',
    cognitiveLevel: 'C4',
    title: 'Spesifikasi Target Pasar',
    stem: 'Pernyataan: "Target pasar yang luas selalu lebih baik daripada target pasar yang spesifik karena jumlah calon konsumen lebih banyak."',
    options: [
      { id: 'a', label: 'Benar' },
      { id: 'b', label: 'Salah' }
    ],
    correctAnswer: 'b',
    explanation: 'Salah. Target spesifik dapat menghasilkan relevansi pesan dan efisiensi pemasaran yang lebih baik.'
  },
  {
    id: 26,
    type: 'true_false',
    cognitiveLevel: 'C3',
    title: 'Penerapan A/B Testing Pemasaran',
    stem: 'Pernyataan: "A/B testing dapat digunakan untuk membandingkan dua alternatif elemen pemasaran berdasarkan hasil yang terukur."',
    options: [
      { id: 'a', label: 'Benar' },
      { id: 'b', label: 'Salah' }
    ],
    correctAnswer: 'a',
    explanation: 'Benar. A/B testing membandingkan variasi dengan indikator yang ditentukan agar keputusan lebih berbasis bukti.'
  },
  {
    id: 27,
    type: 'true_false',
    cognitiveLevel: 'C2',
    title: 'Cakupan Konsep Brand Positioning',
    stem: 'Pernyataan: "Positioning hanya berkaitan dengan logo dan warna kemasan."',
    options: [
      { id: 'a', label: 'Benar' },
      { id: 'b', label: 'Salah' }
    ],
    correctAnswer: 'b',
    explanation: 'Salah. Positioning berkaitan dengan persepsi dan nilai yang ingin ditanamkan pada target pasar, bukan sekadar identitas visual.'
  },
  {
    id: 28,
    type: 'true_false',
    cognitiveLevel: 'C3',
    title: 'Manfaat Umpan Balik Pelanggan',
    stem: 'Pernyataan: "Umpan balik pelanggan dapat digunakan sebagai sumber data evaluasi strategi pemasaran."',
    options: [
      { id: 'a', label: 'Benar' },
      { id: 'b', label: 'Salah' }
    ],
    correctAnswer: 'a',
    explanation: 'Benar. Feedback pelanggan membantu menemukan kebutuhan, hambatan, dan peluang perbaikan.'
  },
  {
    id: 29,
    type: 'multiple_select',
    cognitiveLevel: 'C5',
    title: 'Tindakan Evaluasi saat Klik Tinggi Pembelian Rendah (Pilih SEMUA yang tepat)',
    stem: 'Pilih SEMUA tindakan yang tepat ketika evaluasi menunjukkan promosi menghasilkan banyak klik tetapi sedikit pembelian.',
    options: [
      { id: 'a', label: 'menganalisis halaman tujuan/landing page' },
      { id: 'b', label: 'mengevaluasi kesesuaian penawaran dengan target' },
      { id: 'c', label: 'langsung menggandakan anggaran iklan tanpa analisis' },
      { id: 'd', label: 'menguji variasi pesan atau penawaran' },
      { id: 'e', label: 'mengukur conversion rate dan biaya per pelanggan' }
    ],
    correctAnswer: ['a', 'b', 'd', 'e'],
    explanation: 'Klik tinggi tetapi pembelian rendah menunjukkan masalah konversi atau relevansi. Analisis landing page, penawaran, eksperimen, dan metrik konversi diperlukan.'
  },
  {
    id: 30,
    type: 'multiple_select',
    cognitiveLevel: 'C5',
    title: 'Pertimbangan Evaluasi Target Pasar (Pilih SEMUA yang tepat)',
    stem: 'Pilih SEMUA pertimbangan yang relevan saat mengevaluasi pemilihan target pasar.',
    options: [
      { id: 'a', label: 'ukuran dan potensi segmen' },
      { id: 'b', label: 'pertumbuhan dan tren kebutuhan' },
      { id: 'c', label: 'tingkat persaingan' },
      { id: 'd', label: 'kemampuan perusahaan melayani segmen' },
      { id: 'e', label: 'hanya jumlah pengikut media sosial' }
    ],
    correctAnswer: ['a', 'b', 'c', 'd'],
    explanation: 'Targeting perlu menilai daya tarik segmen dan kemampuan perusahaan melayaninya; jumlah pengikut saja tidak memadai.'
  },
  {
    id: 31,
    type: 'multiple_select',
    cognitiveLevel: 'C4',
    title: 'Data Evaluasi Efektivitas Kampanye Digital (Pilih SEMUA yang tepat)',
    stem: 'Pilih SEMUA data yang dapat digunakan untuk mengevaluasi efektivitas kampanye digital.',
    options: [
      { id: 'a', label: 'reach/impressions' },
      { id: 'b', label: 'CTR' },
      { id: 'c', label: 'conversion rate' },
      { id: 'd', label: 'CAC atau biaya akuisisi' },
      { id: 'e', label: 'warna favorit pemilik usaha sebagai indikator utama' }
    ],
    correctAnswer: ['a', 'b', 'c', 'd'],
    explanation: 'Empat data pertama dapat menjadi indikator kinerja. Selera pemilik bukan KPI yang objektif.'
  },
  {
    id: 32,
    type: 'multiple_select',
    cognitiveLevel: 'C4',
    title: 'Strategi Memperkuat Loyalitas Pelanggan (Pilih SEMUA yang tepat)',
    stem: 'Pilih SEMUA strategi yang dapat memperkuat loyalitas pelanggan.',
    options: [
      { id: 'a', label: 'meningkatkan kualitas dan konsistensi produk' },
      { id: 'b', label: 'memberikan layanan purna jual yang baik' },
      { id: 'c', label: 'memanfaatkan data pembelian secara etis untuk penawaran relevan' },
      { id: 'd', label: 'mengabaikan keluhan pelanggan' },
      { id: 'e', label: 'membangun program retensi yang bernilai' }
    ],
    correctAnswer: ['a', 'b', 'c', 'e'],
    explanation: 'Loyalitas dibangun melalui nilai, pengalaman, relevansi, dan retensi; mengabaikan keluhan justru berisiko kehilangan pelanggan.'
  },
  {
    id: 33,
    type: 'multiple_select',
    cognitiveLevel: 'C3',
    title: 'Langkah Evaluasi Pasca Kampanye Pemasaran (Pilih SEMUA yang tepat)',
    stem: 'Pilih SEMUA langkah yang tepat dalam evaluasi setelah kampanye pemasaran selesai.',
    options: [
      { id: 'a', label: 'membandingkan hasil dengan KPI' },
      { id: 'b', label: 'mengidentifikasi penyebab keberhasilan/kegagalan' },
      { id: 'c', label: 'mengumpulkan umpan balik pelanggan' },
      { id: 'd', label: 'menentukan perbaikan berdasarkan bukti' },
      { id: 'e', label: 'menghapus semua data agar tim bebas dari bias' }
    ],
    correctAnswer: ['a', 'b', 'c', 'd'],
    explanation: 'Evaluasi yang baik membandingkan hasil dengan tujuan, mencari penyebab, memanfaatkan feedback, lalu menyusun perbaikan.'
  },
  {
    id: 34,
    type: 'single_choice',
    cognitiveLevel: 'C5',
    title: 'Solusi Repeat Purchase Rendah pada Kosmetik Lokal',
    stem: 'Sebuah usaha kosmetik lokal memiliki pelanggan puas, tetapi pembelian ulang rendah. Survei menunjukkan produk dianggap bagus, namun pelanggan lupa membeli kembali karena tidak ada pengingat. Strategi evaluasi yang paling tepat adalah ...',
    options: [
      { id: 'a', label: 'menurunkan kualitas produk' },
      { id: 'b', label: 'mengembangkan komunikasi retensi yang relevan dan mengukur repeat purchase' },
      { id: 'c', label: 'menghapus database pelanggan' },
      { id: 'd', label: 'menghentikan promosi produk lama' },
      { id: 'e', label: 'menaikkan harga agar pelanggan membeli lebih jarang' }
    ],
    correctAnswer: 'b',
    explanation: 'Masalahnya bukan kepuasan produk, tetapi retensi. Pengingat yang relevan dan pengukuran repeat purchase tepat untuk menguji solusi.'
  },
  {
    id: 35,
    type: 'single_choice',
    cognitiveLevel: 'C5',
    title: 'Perbandingan Omzet vs Biaya tanpa Data Margin',
    stem: 'Sebuah usaha memiliki dua alternatif strategi: Strategi X menghasilkan omzet Rp30 juta dengan biaya pemasaran Rp5 juta; Strategi Y menghasilkan omzet Rp35 juta dengan biaya pemasaran Rp12 juta. Tanpa data margin, keputusan evaluasi terbaik adalah ...',
    options: [
      { id: 'a', label: 'langsung memilih Y karena omzet lebih besar' },
      { id: 'b', label: 'langsung memilih X karena biaya lebih kecil' },
      { id: 'c', label: 'menyimpulkan keduanya sama' },
      { id: 'd', label: 'meminta data margin/laba dan metrik profitabilitas sebelum memilih strategi' },
      { id: 'e', label: 'menghentikan kedua strategi' }
    ],
    correctAnswer: 'd',
    explanation: 'Omzet dan biaya pemasaran belum cukup untuk menentukan strategi paling menguntungkan; margin dan laba diperlukan.'
  },
  {
    id: 36,
    type: 'single_choice',
    cognitiveLevel: 'C4',
    title: 'Manfaat Pendekatan Pembelajaran Mendalam (Deep Learning)',
    stem: 'Dalam pendekatan pembelajaran mendalam, siswa diminta mengevaluasi kampanye nyata berdasarkan data, menyusun alasan, dan merevisi strategi. Aktivitas tersebut paling kuat mengembangkan ...',
    options: [
      { id: 'a', label: 'hafalan istilah semata' },
      { id: 'b', label: 'berpikir kritis, reflektif, dan pemecahan masalah berbasis konteks' },
      { id: 'c', label: 'penyalinan materi' },
      { id: 'd', label: 'ketergantungan pada jawaban guru' },
      { id: 'e', label: 'pengulangan tanpa evaluasi' }
    ],
    correctAnswer: 'b',
    explanation: 'Aktivitas kontekstual, berbasis data, argumentasi, refleksi, dan revisi mendukung pembelajaran mendalam.'
  },
  {
    id: 37,
    type: 'single_choice',
    cognitiveLevel: 'C5',
    title: 'Alokasi Sumber Daya Berdasarkan Bukti Transaksi',
    stem: 'Sebuah perusahaan menemukan bahwa promosi paling banyak menghasilkan transaksi dari segmen pekerja muda, sedangkan kampanye kepada segmen lain menghasilkan engagement tetapi hampir tidak ada transaksi. Keputusan evaluatif terbaik adalah ...',
    options: [
      { id: 'a', label: 'menghapus semua kampanye selain pekerja muda tanpa pengujian' },
      { id: 'b', label: 'mengalokasikan sumber daya berdasarkan bukti kinerja sambil menguji potensi segmen lain secara terkontrol' },
      { id: 'c', label: 'membagi anggaran sama rata selamanya' },
      { id: 'd', label: 'menentukan target hanya berdasarkan jumlah komentar' },
      { id: 'e', label: 'mengabaikan data transaksi' }
    ],
    correctAnswer: 'b',
    explanation: 'Keputusan berbasis bukti memprioritaskan segmen yang menunjukkan nilai bisnis, tetapi tetap memungkinkan eksperimen terkontrol.'
  },
  {
    id: 38,
    type: 'single_choice',
    cognitiveLevel: 'C3',
    title: 'Perhitungan Matematika Conversion Rate Sederhana',
    stem: 'Jika 500 orang mengunjungi halaman produk dan 25 orang membeli, conversion rate-nya adalah ...',
    options: [
      { id: 'a', label: '2%' },
      { id: 'b', label: '5%' },
      { id: 'c', label: '10%' },
      { id: 'd', label: '20%' },
      { id: 'e', label: '25%' }
    ],
    correctAnswer: 'b',
    explanation: 'Conversion rate = 25 ÷ 500 × 100% = 5%.'
  },
  {
    id: 39,
    type: 'single_choice',
    cognitiveLevel: 'C2',
    title: 'Definisi Evaluasi Pemasaran',
    stem: 'Istilah yang paling tepat untuk kegiatan menilai apakah strategi pemasaran mencapai tujuan dan menentukan perbaikannya adalah ...',
    options: [
      { id: 'a', label: 'evaluasi' },
      { id: 'b', label: 'produksi' },
      { id: 'c', label: 'segmentasi' },
      { id: 'd', label: 'distribusi' },
      { id: 'e', label: 'branding' }
    ],
    correctAnswer: 'a',
    explanation: 'Evaluasi adalah proses menilai hasil terhadap tujuan/kriteria dan menggunakan temuan untuk perbaikan.'
  },
  {
    id: 40,
    type: 'single_choice',
    cognitiveLevel: 'C5',
    title: 'Prioritas Strategi Pemasaran Berkelanjutan (A vs B vs C)',
    stem: 'Sebuah UMKM menggunakan tiga strategi pemasaran. Strategi A menghasilkan banyak kunjungan tetapi pembelian rendah. Strategi B menghasilkan kunjungan sedang dengan pembelian tinggi dan pelanggan cukup sering membeli ulang. Strategi C menghasilkan engagement tinggi, tetapi biaya kampanye paling besar. Jika tujuan utama perusahaan adalah meningkatkan laba secara berkelanjutan, strategi yang paling layak diprioritaskan adalah ...',
    options: [
      { id: 'a', label: 'Strategi A karena jumlah kunjungan merupakan indikator utama keberhasilan' },
      { id: 'b', label: 'Strategi B karena menunjukkan konversi dan potensi retensi yang lebih baik, dengan tetap mengevaluasi biaya serta margin' },
      { id: 'c', label: 'Strategi C karena engagement selalu lebih penting daripada transaksi' },
      { id: 'd', label: 'Strategi A dan C tanpa melihat data laba' },
      { id: 'e', label: 'Semua strategi harus diberi anggaran sama besar tanpa evaluasi' }
    ],
    correctAnswer: 'b',
    explanation: 'Strategi B paling menjanjikan karena tidak hanya menghasilkan pembelian, tetapi juga menunjukkan potensi pembelian ulang. Namun, keputusan akhir tetap harus mempertimbangkan biaya akuisisi, margin, dan laba agar strategi yang dipilih benar-benar berkelanjutan.'
  }
];
