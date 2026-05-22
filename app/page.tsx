'use client';
import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  ChevronRight, 
  BarChart3, 
  Target, 
  LineChart, 
  Menu, 
  X,
  ExternalLink,
  FolderDot,
  ArrowRight,
  Send,
  Building2,
  Users,
  BookOpen,
  Globe,
  FileText,
  Map
} from 'lucide-react';

type Lang = 'id' | 'en';

type CaseStudy = {
  id: number;
  title: string;
  client: string;
  category: string;
  metrics: string[];
  problem: string;
  approach: string;
  impact: string;
};

type Work = {
  id: string;
  title: string;
  type: string;
  typeName: string;
  platform: string;
  year: string;
  desc: string;
  tags: string[];
  link: string;
  image: string;
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [lang, setLang] = useState<Lang>('id'); // Default Indonesian

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Setup Animation Observer for Consulting & Lego-style snaps
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.1 });
    
    setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1500);
  };

  // Translation Dictionary
  const content = {
    id: {
      nav: {
        home: "Beranda/Home",
        expertise: "Keahlian",
        cases: "Studi Kasus",
        works: "Karya & Jurnal",
        journals: "Jurnal",
        inquiry: "Dukungan Teknis"
      },
      hero: {
        badge: "Tersedia untuk Proyek Konsultasi Strategis",
        title1: "Mendorong tranformasi",
        title2: "perusahaan pada data",
        subtitle: "Profesional Business Analyst & Development yang menjembatani wawasan data dengan eksekusi strategis. Spesialis dalam mentransformasikan kompleksitas operasional menjadi pertumbuhan bisnis yang terukur dan solusi berbasis data.",
        btn1: "Jelajahi Studi Kasus",
        btn2: "Pengalaman Kepemimpinan Global",
        badgeExp: "7+ Tahun",
        badgeText: "Pengalaman Konsultasi."
      },
      expertise: {
        title: "Bidang",
        titleBold: "Keahlian Utama",
        subtitle: "Solusi berdampak tinggi untuk tiga domain korporasi global.",
        card1Title: "Manajemen Riset",
        card1Desc: "Memimpin inisiatif riset strategis dengan fokus pada portofolio inovasi, dan alokasi anggaran enterprise.",
        card2Title: "Analitik Tingkat Lanjut",
        card2Desc: "Mengelola siklus data enterprise end-to-end. Menerjemahkan tren statistik yang kompleks menjadi wawasan strategis board-ready.",
        card3Title: "Project Management",
        card3Desc: "Membangun kerangka tata kelola project management yang kokoh untuk program berbagai kegiatan proyek, menyelaraskan risiko, pemangku kepentingan, dan kepatuhan lintas yurisdiksi."
      },
      cases: {
        title: "Dampak Klien &",
        titleBold: "Studi Kasus",
        subtitle: "Galeri proyek yang dirancang untuk perusahaan global dengan fokus pada dampak operasional, finansial, dan tata kelola.",
        cta: "Lihat Seluruh Kasus"
      },
      works: {
        title: "Galeri &",
        titleBold: "Produk ",
        subtitle: "Dari Insight Menjadi Dampak: Portofolio Produk dan Analisis.",
        viewProject: "Lihat Karya",
        viewJournal: "Baca Qur'an Digital",
        types: {
          journal: "Chatbot & Asisten Virtual",
          system: "Al-Qur'an",
          map: "Peta Interaktif cuaca"
        }
      },
      experience: {
        title: "Pengalaman",
        titleBold: "Kepemimpinan",
        rd: {
          role: "Supervisor Penelitian & Pengembangan (R&D)",
          bullets: [
            "Mendesain dan menerapkan alur kerja otomasi menggunakan n8n untuk mengintegrasikan AI ke dalam operasional bisnis.",
            "Mengelola pipa data (data pipelines) dari API eksternal menuju database pusat untuk keperluan pelaporan.",
            "Menjadi konsultan teknis dalam implementasi AI-powered tools (seperti Google Edu Plus) untuk klien korporat atau institusi pendidikan.",
            "Melakukan analisis tren pasar secara komprehensif untuk mendeteksi peluang inovasi dan mengantisipasi dinamika permintaan klien."
          ]
        },
        da: {
          role: "Analis Data",
          bullets: [
            "Melakukan pengumpulan data dari berbagai sumber korporat yang tersebar guna memastikan integritas struktural dan akurasi data.",
            "Memanfaatkan alat statistik untuk mengeksplorasi kumpulan data besar guna mengungkap pola yang mendasari keputusan pemangku kebijakan.",
            "Menyusun laporan analitis mendalam serta mempresentasikan hasil analisis data secara visual kepada para pemangku kepentingan utama.",
            "Melakukan data storytelling yang kuat agar temuan data dapat diterima dan diimplementasikan oleh manajemen."
          ]
        },
        pmo: {
          role: "Support Project Management Officer dan Surveyor Lapang",
          bullets: [
            "Memastikan integritas data dalam proyek skala nasional. Melakukan survei kualitas data secara berkala dan menyusun laporan standarisasi operasional untuk menjamin kepatuhan terhadap regulasi industri.",
            "Merancang rencana manajemen proyek terintegrasi, mencakup struktur lini masa kritis, alokasi anggaran, dan estimasi sumber daya.",
            "Mengembangkan model mitigasi risiko proaktif untuk meminimalkan dampak hambatan dan menyelesaikan eskalasi isu operasional.",
            "Memantau performa portofolio proyek berdasarkan metrik KPI utama serta menyajikan laporan status berkala kepada jajaran direksi."
          ]
        }
      },
      education: {
        title: "Latar Belakang",
        titleBold: "Akademik",
        degree: "Sarjana Sains dalam Meteorologi Terapan",
        leadership: "Kepemimpinan Organisasi",
        roles: [
          "Peraih Dana Hibah PIMNAS ke-29, PKM Kewirausahaan (PKM-K) ",
          "Pemimpin Redaksi, Peta Pemantauan Cuaca Komunitas"
        ],
        certTitle: "Sertifikasi",
        certTitleBold: "Profesional"
      },
      inquiry: {
        title: "Dukungan Teknis",
        titleBold: "Klien Strategis",
        subtitle: "Mulai kolaborasi profesional mengenai kebutuhan konsultasi strategis Anda.",
        successTitle: "Permintaan Berhasil Dikirim",
        successDesc: "Terima kasih. Kami akan meninjau kebutuhan proyek Anda dan menghubungi Anda kembali dalam waktu 24 jam kerja.",
        labelName: "Nama Lengkap",
        labelCompany: "Nama Perusahaan",
        labelEmail: "Alamat Email",
        labelType: "Jenis Kemitraan",
        labelDetails: "Detail Proyek & Tantangan Bisnis",
        placeholderDetails: "Jelaskan secara singkat tantangan bisnis yang dihadapi atau cakupan proyek yang ingin dikolaborasikan...",
        types: [
          "Konsultasi Strategi Transformasi Digital",
          "Tata Kelola Data Korporat",
          "Strategi Analitik Enterprise",
          "Skalabilitas Portofolio R&D"
        ],
      btnSubmit: "Kirim Inkuiri",
      directEmail: "Atau, hubungi langsung melalui email di"
    }
  },
  en: {
    nav: {
        home: "Home",
        expertise: "Expertise",
        cases: "Case Studies",
        works: "Works",
        journals: "Journals",
        inquiry: "Technical Inquiry"
      },
      hero: {
        badge: "Available for Consulting Engagements",
        title1: "Catalyzing impactful",
        title2: "business through data.",
        subtitle: "Business Analyst & Development professional bridging data insights with strategic execution. Specializing in transforming operational complexity into scalable business growth and data-driven solutions.",
        btn1: "Explore Case Studies",
        btn2: "Leadership Experience",
        badgeExp: "7+ Years",
        badgeText: "Advisory Experiences."
      },
      expertise: {
        title: "Practice",
        titleBold: "Areas",
        subtitle: "Delivering high-impact solutions across three core global enterprise domains.",
        card1Title: "Strategic R&D ",
        card1Desc: "Directing strategic research initiatives with a focus on portfolio innovations, and enterprise budget governance.",
        card2Title: "Advanced Analytics",
        card2Desc: "Managing end-to-end enterprise data lifecycles. Translating complex statistical trends into board-ready strategic insights.",
        card3Title: "Project Management",
        card3Desc: "Designing enterprise-grade project management governance frameworks. Specializing in risk management, matrix stakeholder coordination, and global compliance."
      },
      cases: {
        title: "Client Impact &",
        titleBold: "Case Studies",
        subtitle: "A curated gallery of enterprise-grade projects focused on operational impact, financial results, and governance.",
        cta: "View Full Case"
      },
      works: {
        title: "Products",
        titleBold: "Showcase",
        subtitle: "From Insight to Impact: A Showcase of Products and Analytics.",
        viewProject: "View Project",
        viewJournal: "Read Digital Qur'an",
        types: {
          journal: "Chatbot & Virtual Assistant",
          system: "Al-Qur'an",
          map: "Interactive Weather Map"
        }
      },
      experience: {
        title: "Leadership",
        titleBold: "Experience",
        rd: {
          role: "Research and Development Supervisor",
          bullets: [
            "Design and implement automation workflows using n8n to integrate AI into business operations.",
            "Manage data pipelines from external APIs to a central database for reporting purposes.",
            "Serve as a technical consultant in the implementation of AI-powered tools (such as Google Edu Plus) for corporate clients or educational institutions.",
            "Conduct comprehensive market trend analysis to identify innovation opportunities and anticipate client demand dynamics."
          ]
        },
        da: {
          role: "Data Analyst",
          bullets: [
            "Orchestrated the aggregation of complex data from disparate enterprise sources, ensuring unwavering accuracy and structural integrity.",
            "Leveraged advanced statistical tooling to mine extensive datasets, uncovering actionable trends that directly informed business strategies.",
            "Created in-depth analytical reports and visually presented data analysis results to key stakeholders.",
            "Exercised powerful data storytelling to ensure data findings were accepted and implemented by management."
          ]
        },
        pmo: {
          role: "Suppor Project Management Officer & Quantity Surveyor",
          bullets: [
            "Ensuring data integrity in national-scale projects. Performed regular data survey and compiled operational standardization reports.",
            "Architected comprehensive PM frameworks outlining critical path timelines, enterprise budgets, and matrixed resource allocations.",
            "Conducted rigorous risk modeling to develop preemptive mitigation strategies, actively resolving escalated issues to protect project ROI.",
            "Monitored global project portfolios against baseline metrics, issuing executive status reporting on milestones, risks, and strategic alignments."
          ]
        }
      },
      education: {
        title: "Academic",
        titleBold: "Background",
        degree: "Bachelor of Science in Applied Meteorology",
        leadership: "Institutional Leadership",
        roles: [
          "Awardee of PIMNAS 29th, PKM Entrepreneurship Grant",
          "Editor-in-Chief, Map of Community Weather Monitoring"
        ],
        certTitle: "Professional",
        certTitleBold: "Certifications"
      },
      inquiry: {
        title: "Client",
        titleBold: "Inquiry",
        subtitle: "Initiate a conversation regarding strategic consulting engagements.",
        successTitle: "Inquiry Received",
        successDesc: "Thank you. I will review your request and reach out within 24 business hours.",
        labelName: "Full Name",
        labelCompany: "Company",
        labelEmail: "Email Address",
        labelType: "Inquiry Type",
        labelDetails: "Engagement Details",
        placeholderDetails: "Please describe your current challenges or project scope...",
        types: [
          "Digital Transformation Roadmap",
          "Corporate Data Governance",
          "Enterprise Analytics Strategy",
          "R&D Portfolio Scaling"
        ],
      btnSubmit: "Submit Inquiry",
      directEmail: "Alternatively, email directly at"
    }
  }
};

const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: lang === 'id' ? "Penghapusan dan Pelepasan Aset Perusahaan" : "Maritime Asset Lifecycle & Tracking Digitization",
      client: "PT Pertamina International Shipping",
      category: "Asset Disposal",
      metrics: lang === 'id' ? ["Pelaporan 25% Lebih Cepat", "Hemat Biaya Rp 22.7 Miliar", "100% Integritas Data"] : ["25% Faster Reporting", "Rp 22.7 Million Cost Saved", "100% Data Integrity"],
      problem: lang === 'id' 
        ? "Klien kesulitan mengonsolidasikan data aset dari 3 anak perusahaan, menyebabkan ketidakselarasan laporan teknis dan keuangan yang menghambat dalam pelaporan pengambilan keputusan penting."
        : "The client struggled with fragmented data sources across 3 subsidiaries, leading to inconsistent technical reporting and financial delayed strategic decision-making at the executive level.",
      approach: lang === 'id'
        ? "Memimpin tim analitik lintas fungsional untuk mengintegrasikan alur data heterogen. Menerapkan skema kegiatan konsolidasi terarah dan menegakkan regulasi tata kelola data jangka panjang."
        : "Led a cross-functional data team to unify disparate data streams. Directed the implementation of event targeted consolidation and established a robust data governance framework to ensure lifecycle accuracy.",
      impact: lang === 'id'
        ? "Menyajikan dasbor analitik real-time terintegrasi yang memangkas waktu konsolidasi data manajemen sebesar 80%.."
        : "Delivered a integrated analytical real-time dashboard that reducing operational data silos by 80%."
    },
    {
      id: 2,
      title: lang === 'id' ? "Masterlist untuk Relokasi Pabrik Manufaktur" : "Masterlist for Company Asset Relocation",
      client: "Biro Klasifikasi Indonesia",
      category: "Research & Development",
      metrics: lang === 'id' ? ["30% Penghematan Waktu", "100% Akurasi Pendataan Aset", "0 Pelanggaran Regulasi"] : ["30% Downtime Reduction", "100% Asset Tracking Accuracy", "Zero Compliance Breaches"],
      problem: lang === 'id'
        ? "Divisi Finance mengalami pemborosan waktu yang signifikan akibat ketidaksesuaian estimasi pasar serta lemahnya prakiraan harga aset perusahaan."
        : "Finance Division experienced a significant waste of time due to mismatched market estimates and weak forecasts of company asset prices.",
      approach: lang === 'id'
        ? "Memimpin restrukturisasi pelacakan dan pelaporan performa R&D secara digital."
        : "Supervising the complete overhaul of R&D tracking and documenting.",
      impact: lang === 'id'
        ? "Berhasil melaporkan dan merelokasi sebanyak 75% dari aset mesin perusahaan ke kawasan industri dan berikat secara berkala"
        : "Successfully reported and relocated 75% of the company’s machinery assets to industrial and bonded zones on a regular basis."
    },
    {
      id: 3,
      title: lang === 'id' ? "Support Satgas Percepatan Investasi" : "Task Force for Investment Acceleration Support",
      client: "Ministry of Investment, Indonesia",
      category: "Project Management",
      metrics: lang === 'id' ? ["Efisiensi Proses", "Percepatan Realisasi Investasi > Rp. 21 T", "40% Pengurangan Waktu Tunggu Rata-Rata Perizinan "] : ["Process Eficiency", "Capital Realization over $1.2M", "40% Cutting Down Approval Cycles"],
      problem: lang === 'id'
        ? "Investor asing dan domestik menghadapi hambatan besar karena proses perizinan yang terfragmentasi di berbagai kementerian. Sumbatan birokrasi, regulasi yang tumpang tindih, dan kurangnya transparansi data waktu-nyata menunda eksekusi proyek, menyebabkan potensi modal tertahan dan mengancam target pertumbuhan ekonomi daerah."
        : "Foreign and domestic investors faced significant hurdles due to fragmented licensing processes across multiple government ministries. Bureaucratic bottlenecks, overlapping regulations, and a lack of real-time data transparency delayed project executions, causing potential capital to stall and threatening regional economic growth targets.",
      approach: lang === 'id'
        ? "Mempercepat proses adaptasi, saya membantu inisiatif rekayasa ulang proses berbasis data. Kami perjalanan investor dari hulu ke hilir untuk mengidentifikasi titik hambatan utama. Melalui kolaborasi dengan instansi pemerintah lintas sektoral, kami merancang 'Kajian Penyelesaian Sumbatan Investasi' terpusat untuk melacak status izin secara berkala, menerapkan analisis prediktif untuk menandai persetujuan yang tertunda, dan menstandardisasi alur kerja antar-departemen."
        : "Accelerate the onboarding process, I help data-driven process re-engineering initiative. We mapped out the end-to-end investor journey to identify core friction points. By collaborating with cross-functional government agencies, we designed a centralized 'Investment Debottlenecking Study' to track permit statuses in real-time, implemented predictive analytics to flag delayed approvals, and standardized cross-departmental workflows.",
      impact: lang === 'id'
        ? "Menstabilkan jalur peluncuran proyek korporat, mengamankan target penyelesaian milestone 100% tepat waktu, dan meningkatkan kepuasan pemangku kepentingan korporasi."
        : "Stabilized the project portfolio, ensuring 100% on-time milestone delivery and providing transparent, executive-ready status reporting that restored stakeholder confidence."
    }
  ];

  // Karya dari Bisma Portfolio
  const academicWorks: Work[] = [
    {
      id: "work-1",
      title: lang === 'id' 
        ? "Pantau Cuaca"
        : "Weather Monicon",
      type: "map",
      typeName: content[lang].works.types.map,
      platform: "Streamlit App",
      year: "-",
      desc: lang === 'id'
        ? "Sistem pemetaan digital meteorologi mikro interaktif yang mengonsolidasikan data cuaca dari stasiun pemantauan untuk membantu user memprediksi cuaca secara presisi."
        : "Interactive digital micro-meteorology mapping system that consolidates weather data from monitoring stations to assist user in precise weather prediction.",
      tags: ["Meteorology", "GIS", "Phyton", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      link: "https://weathermonicon.streamlit.app/"
    },
    {
      id: "work-2",
      title: lang === 'id'
        ? "Googie Chatbot"
        : "Asisten Virtual Googie",
      type: "system",
      typeName: content[lang].works.types.journal,
      platform: "Gemini API",
      year: "-",
      desc: lang === 'id'
        ? "Platform percakapan berbasis AI yang intuitif dengan kapabilitas obrolan waktu nyata dan respons yang dapat disesuaikan."
        : "Intuitive AI-powered conversational platform featuring real-time chat capabilities and custom responses.",
      tags: ["Google Edu", "Gemini API", "AI Studio Google"],
      image: "https://plus.unsplash.com/premium_photo-1726550550053-6e5f7190f1bf?q=80&w=800",
      link: "https://googiechatbot.netlify.app/"
    },
    {
      id: "work-4",
      title: lang === 'id' ? "TenderCrawler" : "TenderCrawler",
      type: "system",
      typeName: lang === 'id' ? "Riset" : "Research",
      platform: lang === 'id' ? "Bot Automasi Pengadaan LPSE" : "LPSE BOT Procurement Automation",
      year: "-",
      desc: lang === 'id'
        ? "Mesin otomatisasi berperforma tinggi untuk memantau portal pengadaan sektor pemerintah dan swasta."
        : "High-performance automation engine for monitoring government and private procurement portals.",
      tags: ["Automation", "Procurement", "Web Scraping"],
      image: "https://plus.unsplash.com/premium_photo-1681010317789-68f31df3b9b0?q=80&w=800",
      link: "https://n8n.data-collect.id/workflow/3vLo4muHhBT9TgFR"
    },
    {
      id: "work-5",
      title: lang === 'id' ? "NeuralScribe" : "NeuralScribe",
      type: "system",
      typeName: lang === 'id' ? "Deep Learning" : "Deep Learning",
      platform: lang === 'id' ? "Pemrosesan Bahasa Alami" : "Natural Language Processing",
      year: "-",
      desc: lang === 'id'
        ? "Model pemrosesan bahasa alami yang meringkas rekam medis kompleks menjadi laporan yang mudah dipahami oleh pasien."
        : "Natural language model that summarizes complex medical records into patient-friendly reports.",
      tags: ["NLP", "Healthcare", "AI"],
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=870",
      link: "https://neural-scribe.netlify.app/"
    },
    {
      id: "work-6",
      title: lang === 'id' ? "Graceful Compendium" : "Graceful Compendium",
      type: "system",
      typeName: lang === 'id' ? "Pengarsipan" : "Archiving",
      platform: lang === 'id' ? "Pustaka Arsip" : "Archive Library",
      year: "-",
      desc: lang === 'id'
        ? "Kumpulan arsip untuk mereka yang mencari ide dan pengetahuan."
        : "A collection archive for those seeking idea and knowledge.",
      tags: ["Supabase", "n8n", "Automation"],
      image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=870",
      link: "https://gracefulcompendium.netlify.app/"
    },
    {
      id: "work-3",
      title: lang === 'id'
        ? "Nurul-Qur'an Digital"
        : "Pocket Qur'an (ID)",
      type: "journal",
      typeName: content[lang].works.types.system,
      platform: "Online Qur'an Platform",
      year: "-",
      desc: lang === 'id'
        ? "Al-Qur'an digital dengan teks resolusi tinggi, terjemahan multibahasa, dan audio."
        : "Digital Qur'an with high resolution text, multilanguage transliteration and audio.",
      tags: ["NextJS", "E-Qur'an API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1576764402988-7143f9cca90a?q=80&w=800",
      link: "https://pocketquran.netlify.app/"
    }
  ];

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#86BC24] selection:text-white print:bg-white print:text-black">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-100 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="font-serif text-2xl font-bold tracking-tight text-black">
              Bisma<span className="text-[#86BC24]"> Reza</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {(Object.keys(t.nav) as Array<keyof typeof t.nav>)
                .filter((key) => key !== 'inquiry')
                .map((key) => {
                  const sectionId = key === 'cases' ? 'case-studies' : key === 'home' ? 'hero' : (key as string);
                  return (
                    <button 
                      key={key}
                      onClick={() => scrollToSection(sectionId)}
                      className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                    >
                      {(t.nav as any)[key]}
                    </button>
                  );
                })}
              
              {/* Language Switcher */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 border border-zinc-200 p-1 bg-zinc-50 rounded-sm">
                  <button 
                    onClick={() => setLang('id')} 
                    className={`text-xs px-2 py-1 font-bold rounded-sm transition-colors ${lang === 'id' ? 'bg-black text-white' : 'text-zinc-600 hover:text-black'}`}
                  >
                    ID
                  </button>
                  <button 
                    onClick={() => setLang('en')} 
                    className={`text-xs px-2 py-1 font-bold rounded-sm transition-colors ${lang === 'en' ? 'bg-black text-white' : 'text-zinc-600 hover:text-black'}`}
                  >
                    EN
                  </button>
                </div>
                <button 
                  onClick={() => scrollToSection('inquiry')}
                  className="text-sm font-bold px-4 py-2 border border-[#006747] bg-white text-[#006747] rounded-sm hover:bg-[#006747] hover:text-white transition-colors"
                >
                  {t.nav.inquiry}
                </button>
              </div>

            </div>

            {/* Mobile Menu Actions */}
            <div className="flex lg:hidden items-center space-x-3">
              {/* Mobile Language Switcher */}
              <button 
                onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
                className="flex items-center space-x-1 border border-zinc-200 px-2.5 py-1 text-xs font-bold rounded-sm bg-zinc-50 text-black"
              >
                <Globe size={14} className="text-zinc-500" />
                <span>{lang.toUpperCase()}</span>
              </button>
              
              <button 
                className="text-black p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 border-t border-gray-100">
            {(Object.keys(t.nav) as Array<keyof typeof t.nav>).map((key) => {
              const sectionId = key === 'cases' ? 'case-studies' : key === 'home' ? 'hero' : (key as string);
              return (
                <button 
                  key={key}
                  onClick={() => scrollToSection(sectionId)}
                  className="text-left text-base font-medium text-zinc-800 hover:text-[#4285F4]"
                >
                  {(t.nav as any)[key]}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      <style>
        {`
          @keyframes floatProfile {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
          @keyframes auraBreath {
            0% { opacity: 0.15; transform: scale(0.96); }
            50% { opacity: 0.45; transform: scale(1.04); }
            100% { opacity: 0.15; transform: scale(0.96); }
          }

          /* Consulting Minimalist & Lego Animations */
          .reveal-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .reveal-on-scroll.is-revealed {
            opacity: 1;
            transform: translateY(0);
          }
          
          @keyframes legoSnap {
            0% { opacity: 0; transform: translateY(40px) scale(0.95); }
            60% { opacity: 1; transform: translateY(-5px) scale(1.02); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .lego-block { opacity: 0; }
          .is-revealed .lego-block {
            animation: legoSnap 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          .delay-100 { animation-delay: 100ms; }
          .delay-200 { animation-delay: 200ms; }
          .delay-300 { animation-delay: 300ms; }
          .delay-400 { animation-delay: 400ms; }
          
          /* Hard shadow for Lego block structural feel */
          .hover-lego-shadow:hover {
            transform: translateY(-4px);
            box-shadow: 8px 8px 0px 0px rgba(0,0,0,0.9);
            border-color: #000;
          }

          @media print {
            .print\\:hidden { display: none !important; }
            body { background: white !important; color: black !important; }
            .print\\:full-w { width: 100% !important; max-width: 100% !important; }
          }
        `}
      </style>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-black overflow-hidden print:bg-white print:text-black print:py-8 reveal-on-scroll">
        <div className="absolute top-0 right-0 w-200 h-200 bg-linear-to-bl from-zinc-900 to-black rounded-full translate-x-1/3 -translate-y-1/3 opacity-50 pointer-events-none print:hidden"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 border border-zinc-800 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none print:hidden"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">
            
            {/* Left Column: Text Content */}
            <div className="max-w-3xl lg:w-3/5 print:w-full">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-gray-300 text-xs font-bold uppercase tracking-widest mb-8 print:hidden">
                <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse"></span>
                <span>{t.hero.badge}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6 print:text-black print:text-4xl print:font-bold">
                {t.hero.title1} <br/>
                <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] print:text-black print:bg-none">
                  {t.hero.title2}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400 font-light mb-10 max-w-2xl leading-relaxed print:text-zinc-700 print:text-base print:mb-6">
                {t.hero.subtitle}
              </h2>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 print:hidden">
                <button onClick={() => scrollToSection('case-studies')} className="px-8 py-4 bg-[#4285F4] text-white font-bold text-sm tracking-wide uppercase hover:bg-[#3367D6] transition-colors flex items-center justify-center">
                  {t.hero.btn1}
                  <ArrowRight size={18} className="ml-2" />
                </button>
                <button onClick={() => scrollToSection('journals')} className="px-8 py-4 bg-transparent border border-zinc-700 text-white font-bold text-sm tracking-wide uppercase hover:border-zinc-500 hover:text-[#FBBC05] transition-colors flex items-center justify-center">
                  {t.hero.btn2}
                </button>
              </div>
            </div>

            {/* Right Column: Animated Profile Picture & Seniority Badge */}
            <div className="lg:w-2/5 flex justify-center lg:justify-end relative mt-8 lg:mt-0 print:hidden">
              <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96" style={{ animation: 'floatProfile 6s ease-in-out infinite' }}>
                
                {/* Breathing Google-Colored Aura */}
                <div 
                  className="absolute inset-0 bg-linear-to-tr from-[#4285F4] via-[#EA4335] to-[#FBBC05] rounded-full blur-3xl"
                  style={{ animation: 'auraBreath 5s ease-in-out infinite' }}
                ></div>
                
                {/* Profile Image Container */}
                <div className="relative w-full h-full rounded-full border-4 border-zinc-800 bg-zinc-900 p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                  <div className="w-full h-full rounded-full overflow-hidden border border-zinc-800/50">
                    <img 
                      src="https://lh3.googleusercontent.com/pw/AP1GczORxNQG_VFbRW6mUg2DlkMEtMO80cTL3c5uuO1EVVNUPgldlKGZrr2CbasMyrVM7KzPryIHtW1ssTEeGUSVj_gdkdfuaUj_VobxSGXJ9_BVrfpxCmwROICdJyfS6qqfxd8B4w9Lofjk5EOWUE2eN3SY?auto=format&fit=crop&w=375&h=561&q=80" 
                      alt="Bisma Reza - Strategic Consultant" 
                      className="w-full h-full object-cover object-top grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Floating Metric Badge */}
                <div className="absolute -bottom-4 -left-8 md:-left-12 bg-black border border-zinc-800 px-6 py-4 shadow-2xl flex items-center gap-4 z-20 hover:border-[#4285F4] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#4285F4] transition-all group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-[#34A853] transition-colors">
                    <Users size={20} className="text-[#34A853]" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">{t.hero.badgeExp}</div>
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">{t.hero.badgeText}</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Expertise / Practice Areas */}
      <section id="expertise" className="py-24 bg-white border-b border-zinc-200 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-light text-black mb-4">
                {t.expertise.title} <span className="font-bold">{t.expertise.titleBold}</span>
              </h2>
              <p className="text-gray-600 text-lg">{t.expertise.subtitle}</p>
            </div>
            <div className="hidden md:flex w-32 h-1 bg-linear-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-zinc-50 border border-zinc-200 hover-lego-shadow transition-all duration-300 group lego-block delay-100">
              <Target size={32} className="text-[#EA4335] mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-black mb-4">{t.expertise.card1Title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t.expertise.card1Desc}</p>
            </div>
            
            <div className="p-10 bg-zinc-50 border border-zinc-200 hover-lego-shadow transition-all duration-300 group lego-block delay-200">
              <BarChart3 size={32} className="text-[#FBBC05] mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-black mb-4">{t.expertise.card2Title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t.expertise.card2Desc}</p>
            </div>

            <div className="p-10 bg-zinc-50 border border-zinc-200 hover-lego-shadow transition-all duration-300 group lego-block delay-300">
              <LineChart size={32} className="text-[#34A853] mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-black mb-4">{t.expertise.card3Title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{t.expertise.card3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Case Studies Gallery & Builder */}
      <section id="case-studies" className="py-24 bg-zinc-50 border-b border-zinc-200 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-black mb-4">
              {t.cases.title} <span className="font-bold">{t.cases.titleBold}</span>
            </h2>
            <p className="text-gray-600 text-lg">{t.cases.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {caseStudies.map((study: CaseStudy, idx: number) => (
              <div 
                key={study.id} 
                className={`bg-white border border-zinc-200 p-8 cursor-pointer hover-lego-shadow transition-all duration-300 group flex flex-col justify-between h-full lego-block delay-${(idx + 1) * 100}`}
                onClick={() => setActiveCaseStudy(study)}
              >
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{study.category}</div>
                  <h3 className="text-xl font-bold text-black mb-6 group-hover:text-[#4285F4] transition-colors">{study.title}</h3>
                  <div className="space-y-2 mb-8">
                    {study.metrics.map((metric: string, i: number) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <ChevronRight size={14} className="text-[#34A853] mr-2" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center text-sm font-bold text-black uppercase tracking-wide group-hover:text-[#4285F4]">
                  {t.cases.cta} <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works and Publications Section (Karya & Jurnal) */}
      <section id="works" className="py-24 bg-white border-b border-zinc-200 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-black mb-4">
              {t.works.title} <span className="font-bold">{t.works.titleBold}</span>
            </h2>
            <p className="text-gray-600 text-lg">{t.works.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {academicWorks.map((work: Work, idx: number) => (
              <div key={work.id} className={`border border-zinc-200 bg-zinc-50 p-8 flex flex-col justify-between group hover-lego-shadow transition-all duration-300 lego-block delay-${(idx + 1) * 100}`}>
                <div className="mb-6 overflow-hidden rounded-3xl bg-white shadow-sm">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    {work.type === 'journal' ? <BookOpen size={14} className="text-[#4285F4]" /> : <Map size={14} className="text-[#34A853]" />}
                    <span>{work.typeName}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#4285F4] transition-colors">{work.title}</h3>
                  <p className="text-sm text-zinc-500 mb-2 font-medium">{work.platform} ({work.year})</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{work.desc}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {work.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="bg-zinc-200/60 text-zinc-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={work.link}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-xs font-bold text-black uppercase hover:text-[#4285F4]"
                  >
                    <span>{work.type === 'journal' ? t.works.viewJournal : t.works.viewProject}</span>
                    <ExternalLink size={12} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience Timeline */}
      <section id="journals" className="py-24 bg-zinc-50 border-b border-zinc-200 reveal-on-scroll">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-black mb-16 text-center">
            {t.experience.title} <span className="font-bold">{t.experience.titleBold}</span>
          </h2>

          <div className="space-y-16">
            {/* Role 1 */}
            <div className="relative pl-8 md:pl-0 group lego-block delay-100">
              <div className="hidden md:block absolute left-42 top-2 w-4 h-4 bg-[#4285F4] rounded-none border-2 border-white shadow-sm z-10 transition-transform group-hover:scale-125 group-hover:rotate-12 print:hidden"></div>
              <div className="hidden md:block absolute left-[10.9rem] top-6 -bottom-16 w-px bg-zinc-200 print:hidden"></div>
              
              <div className="md:flex justify-between items-start">
                <div className="md:w-40 shrink-0 pt-1 text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 md:mb-0">
                  Jun 2025 - Present
                </div>
                <div className="md:pl-16 grow">
                  <h3 className="text-2xl font-bold text-black">{t.experience.rd.role}</h3>
                  <div className="text-[#4285F4] font-medium mb-6 flex items-center mt-1 text-lg">
                    PT. Ayaskara Nisita Synergy
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    {t.experience.rd.bullets.map((bullet: string, idx: number) => (
                      <li key={idx} className="flex items-start text-base">
                        <span className="text-[#4285F4] mr-3 mt-1 text-lg">▪</span> 
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Role 2 */}
            <div className="relative pl-8 md:pl-0 group lego-block delay-200">
              <div className="hidden md:block absolute left-42 top-2 w-4 h-4 bg-[#EA4335] rounded-none border-2 border-white shadow-sm z-10 transition-transform group-hover:scale-125 group-hover:rotate-12 print:hidden"></div>
              <div className="hidden md:block absolute left-[10.9rem] top-6 -bottom-16 w-px bg-zinc-200 print:hidden"></div>
              
              <div className="md:flex justify-between items-start">
                <div className="md:w-40 shrink-0 pt-1 text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 md:mb-0">
                  Jan 2023 - Jun 2025
                </div>
                <div className="md:pl-16 grow">
                  <h3 className="text-2xl font-bold text-black">{t.experience.da.role}</h3>
                  <div className="text-[#EA4335] font-medium mb-6 flex items-center mt-1 text-lg">
                    PT. Ayaskara Nisita Synergy
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    {t.experience.da.bullets.map((bullet: string, idx: number) => (
                      <li key={idx} className="flex items-start text-base">
                        <span className="text-[#EA4335] mr-3 mt-1 text-lg">▪</span> 
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Role 3 */}
            <div className="relative pl-8 md:pl-0 group lego-block delay-300">
              <div className="hidden md:block absolute left-42 top-2 w-4 h-4 bg-[#FBBC05] rounded-none border-2 border-white shadow-sm z-10 transition-transform group-hover:scale-125 group-hover:rotate-12 print:hidden"></div>
              
              <div className="md:flex justify-between items-start">
                <div className="md:w-40 shrink-0 pt-1 text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 md:mb-0">
                  Jun 2019 - Dec 2022
                </div>
                <div className="md:pl-16 grow">
                  <h3 className="text-2xl font-bold text-black">{t.experience.pmo.role}</h3>
                  <div className="text-[#FBBC05] font-medium mb-6 flex items-center mt-1 text-lg">
                    PT. Superintending Company of Indonesia (SUCOFINDO)
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    {t.experience.pmo.bullets.map((bullet: string, idx: number) => (
                      <li key={idx} className="flex items-start text-base">
                        <span className="text-[#FBBC05] mr-3 mt-1 text-lg">▪</span> 
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Executive Certifications */}
      <section id="education" className="py-24 bg-black text-white print:bg-white print:text-black reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Education */}
            <div className="lego-block delay-100">
              <h2 className="text-3xl font-light mb-10 border-b border-zinc-800 pb-4 print:border-zinc-200">
                {t.education.title} <span className="font-bold">{t.education.titleBold}</span>
              </h2>
              
              <div className="bg-zinc-900 border border-zinc-800 p-8 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all duration-300 print:bg-white print:border-zinc-200">
                <div className="text-[#4285F4] text-sm font-bold uppercase tracking-wider mb-2">2014 - 2018</div>
                <h3 className="text-2xl font-bold mb-2 print:text-black">{t.education.degree}</h3>
                <p className="text-gray-400 text-lg mb-8 print:text-zinc-600">IPB University</p>
                
                <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm border-b border-zinc-800 pb-2 print:text-black print:border-zinc-200">
                  {t.education.leadership}
                </h4>
                <ul className="space-y-4 text-gray-300 print:text-zinc-700">
                  {t.education.roles.map((role: string, idx: number) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#EA4335] mr-4"></div>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="lego-block delay-200">
              <h2 className="text-3xl font-light mb-10 border-b border-zinc-800 pb-4 print:border-zinc-200">
                {t.education.certTitle} <span className="font-bold">{t.education.certTitleBold}</span>
              </h2>
              
              <div className="grid gap-4">
                {[
                  { name: "Google Certified Gemini Educator", issuer: "Google For Education", year: "2026", highlight: true },
                  { name: "Google Analytics Certification", issuer: "Google Digital Academy", year: "2026" },
                  { name: "Google Certified Educator Level 2", issuer: "Google For Education", year: "2026" },
                  { name: "Google Certified Educator Level 1", issuer: "Google For Education", year: "2026" }
                ].map((cert, idx) => (
                  <div 
                    key={idx} 
                    className={`p-6 border ${cert.highlight ? 'border-[#34A853] bg-[#34A853]/10' : 'border-zinc-800 bg-zinc-900 print:bg-zinc-50 print:border-zinc-200'} flex justify-between items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:border-[#4285F4]/50`}
                  >
                    <div>
                      <h3 className={`text-lg font-bold ${cert.highlight ? 'text-[#34A853]' : 'text-white print:text-black'}`}>{cert.name}</h3>
                      <p className="text-sm text-gray-400 mt-1 print:text-zinc-500">{cert.issuer}</p>
                    </div>
                    <div className="text-sm font-bold text-zinc-500">
                      {cert.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Inquiry Form (Contact) */}
      <section id="inquiry" className="py-24 bg-white print:hidden reveal-on-scroll">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lego-block delay-100">
            <h2 className="text-4xl font-light text-black mb-4">
              {t.inquiry.title} <span className="font-bold">{t.inquiry.titleBold}</span>
            </h2>
            <p className="text-gray-600 text-lg">{t.inquiry.subtitle}</p>
          </div>

          <div className="bg-zinc-50 p-8 md:p-12 border border-zinc-200 hover-lego-shadow transition-all duration-300 lego-block delay-200">
            {formStatus === 'success' ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-[#34A853] rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChevronRight size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{t.inquiry.successTitle}</h3>
                <p className="text-gray-600">{t.inquiry.successDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-black uppercase tracking-wide mb-2">{t.inquiry.labelName}</label>
                    <input required type="text" className="w-full bg-white border border-zinc-300 px-4 py-3 focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-shadow" placeholder="Budi Setiawan" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black uppercase tracking-wide mb-2">{t.inquiry.labelCompany}</label>
                    <input required type="text" className="w-full bg-white border border-zinc-300 px-4 py-3 focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-shadow" placeholder="PT Mencari Cinta Sejati Trading" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-black uppercase tracking-wide mb-2">{t.inquiry.labelEmail}</label>
                    <input required type="email" className="w-full bg-white border border-zinc-300 px-4 py-3 focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-shadow" placeholder="bsetyawan@tradingcorp.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black uppercase tracking-wide mb-2">{t.inquiry.labelType}</label>
                    <select className="w-full bg-white border border-zinc-300 px-4 py-3 focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-shadow">
                      {t.inquiry.types.map((type: string, idx: number) => (
                        <option key={idx}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-black uppercase tracking-wide mb-2">{t.inquiry.labelDetails}</label>
                  <textarea required rows={5} className="w-full bg-white border border-zinc-300 px-4 py-3 focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-shadow" placeholder={t.inquiry.placeholderDetails}></textarea>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-zinc-200">
                  <div className="text-sm text-gray-500 text-center sm:text-left">
                    {t.inquiry.directEmail} <a href="mailto:bismareza@outlook.com" className="font-bold text-black hover:text-[#4285F4]">bismareza@outlook.com</a>
                  </div>
                  <button 
                    disabled={formStatus === 'submitting'}
                    type="submit" 
                    className="w-full sm:w-auto px-8 py-4 bg-black text-white font-bold uppercase tracking-wide text-sm hover:bg-[#4285F4] transition-colors flex items-center justify-center"
                  >
                    {formStatus === 'submitting' ? 'Processing...' : t.inquiry.btnSubmit}
                    <Send size={16} className="ml-3" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 border-t border-zinc-900 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 text-sm text-zinc-400">
            <div className="space-y-3 text-left">
              <div className="font-bold text-zinc-300 uppercase tracking-wider">Sitemap</div>
              <div className="space-y-2">
                <a href="#hero" className="block hover:text-white">Beranda/Home</a>
                <a href="#expertise" className="block hover:text-white">Expertise/Keahlian</a>
                <a href="#case-studies" className="block hover:text-white">Case Studies/Studi Kasus</a>
                <a href="#works" className="block hover:text-white">Works/Karya</a>
                <a href="#journals" className="block hover:text-white">Journals</a>
                <a href="#inquiry" className="block hover:text-white">Inquiries</a>
              </div>
            </div>
            <div className="text-left md:text-right text-zinc-500 tracking-wide">
              © {new Date().getFullYear()} All rights reserved. Made with ❤️ by Bisma Reza.
            </div>
          </div>
        </div>
      </footer>

      {/* Case Study Modal Viewer (Builder Logic) */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm print:hidden">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-200 shadow-2xl">
            <button 
              onClick={() => setActiveCaseStudy(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
            >
              <X size={32} />
            </button>
            
            <div className="p-10 md:p-16">
              <div className="text-[#4285F4] font-bold uppercase tracking-wider text-sm mb-4">Case Study Builder View</div>
              <h2 className="text-4xl font-bold text-black mb-8 leading-tight">{activeCaseStudy.title}</h2>
              
              <div className="flex flex-wrap gap-4 mb-10 pb-10 border-b border-gray-100">
                <div className="flex items-center bg-zinc-50 px-4 py-2 text-sm text-gray-600 font-medium border border-zinc-200">
                  <Building2 size={16} className="mr-2 text-[#EA4335]" /> Client: {activeCaseStudy.client}
                </div>
                <div className="flex items-center bg-zinc-50 px-4 py-2 text-sm text-gray-600 font-medium border border-zinc-200">
                  <FolderDot size={16} className="mr-2 text-[#FBBC05]" /> Practice: {activeCaseStudy.category}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-12 mb-12">
                <div className="md:col-span-2 space-y-10">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">The Challenge</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{activeCaseStudy.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Strategic Approach</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{activeCaseStudy.approach}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Business Impact</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{activeCaseStudy.impact}</p>
                  </div>
                </div>

                <div className="bg-black text-white p-8 h-fit border-t-4 border-[#4285F4]">
                  <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Key Metrics</h3>
                  <ul className="space-y-6">
                    {activeCaseStudy.metrics.map((metric: string, i: number) => (
                      <li key={i} className="border-b border-zinc-800 pb-4 last:border-0 last:pb-0">
                        <div className="text-3xl font-light mb-1 text-[#34A853]">{metric.split(' ')[0]}</div>
                        <div className="text-sm text-gray-400 font-medium">{metric.substring(metric.indexOf(' ') + 1)}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}