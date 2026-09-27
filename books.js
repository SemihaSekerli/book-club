// ============================================================
// MY BOOKS  —  every book on the page lives in this file
// ============================================================
//
// THE EASY WAY: open index.html and press "+ Kitap ekle",
// or "Düzenle" under a book. The page writes it into this
// file for you. Each time it saves, the version before is
// kept in books-backup.js, just in case.
//
// THE BY-HAND WAY: you can still edit this file yourself.
// Every book is one block between { and }.
// To add a book: copy a whole block, paste it, change the words.
// To remove a book: delete its block.
// Keep the comma after each } — that's what separates the books.
// After you save this file, refresh index.html in your browser
// (press F5) and your change is there.
//
// ------------------------------------------------------------
// WHAT EACH LINE MEANS
// ------------------------------------------------------------
// title:   the book's name (as you know it — e.g. the Turkish title)
// titleEn: the English title, shown when the page is in EN.
//          Leave it as "" if it's the same.
// author:  who wrote it (leave it as "" if you don't want one)
// status:  WHICH SHELF it goes on. Only these three words work:
//            "reading"   -> Şu an okuyorum / Currently reading (across the top)
//            "finished"  -> Okuduklarım / Finished (left column)
//            "soon"      -> Okuma listem / Reading list (right column)
// hearts:  how it landed for you, 0 to 5. Use 0 if you haven't decided.
// colour:  the cover colour. Pick one of these eight words:
//            "pink"  "butter"  "mint"  "sky"  "lilac"  "coral"  "ink"  "blush"
// note:    what you thought, IN TURKISH.
// noteEn:  what you thought, IN ENGLISH.
//          You don't have to fill both. Leave one as "" and the
//          page shows the other one in both languages.
//
// A NOTE ABOUT QUOTE MARKS: your note sits between " and ".
// If you type a note in this file by hand and want a " inside it,
// use ' instead — otherwise the page will break.
// (The "+ Kitap ekle" button takes care of this for you.)
// Turkish letters (ç ğ ı ö ş ü) are all fine.
// ------------------------------------------------------------

const BOOKS = [

  {
    title:  "Kahve Sogumadan Once",
    titleEn: "Before the Coffee Gets Cold",
    author: "Toshikazu Kawaguchi",
    status: "soon",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Martin Eden",
    titleEn: "",
    author: "Jack London",
    status: "soon",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Kayip Anilar Expresi",
    titleEn: "The 25:00 Magic Lantern Express",
    author: "Shim Eunjung, Choi Hyunyu",
    status: "soon",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "MOMO",
    titleEn: "",
    author: "Michael Ende",
    status: "soon",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Biri, Hiçbiri, Binlercesi",
    titleEn: "One, No One, and One Hundred Thousand",
    author: "Luigi Pirandello",
    status: "reading",
    hearts: 5,
    colour: "sky",
    note:   "Bu Kitap ile ilgili cok fazla sey duydum ve tabikide okuma listeme almak zorundaydim , cunku hayatta gercekten de sadece tek bir kisi olarak var olmadigimizi anladigimizda aslinda bu bir paradox mus gibi gorunsede cok buyuk bir rahatlamayid agetirdigine inaniyorum ve kitabin nasil bitecegini heycanla bekliyorum",
    noteEn: "I’ve heard so much about this book that, of course, I had to add it to my reading list.\n\nI believe that once we realize we don’t exist in this life as just one single version of ourselves, it brings an incredible sense of relief even though that idea may seem like a paradox at first.\nI’m really curious to see where this book takes me, and I can’t wait to find out how it ends."
  },

  {
    title:  "How to Stop Time",
    titleEn: "",
    author: "Matt Haig",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Notes on a Nervous Planet",
    titleEn: "",
    author: "Matt Haig",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "The Last Family in England",
    titleEn: "",
    author: "Matt Haig",
    status: "soon",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Gece Yarısı Kütüphanesi",
    titleEn: "The Midnight Library",
    author: "Matt Haig",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Ikigai",
    titleEn: "",
    author: "Héctor García & Francesc Miralles",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Atomic Habits",
    titleEn: "",
    author: "James Clear",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "We Have a Deal",
    titleEn: "",
    author: "Natalie Reynolds",
    status: "finished",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Grit",
    titleEn: "",
    author: "Angela Duckworth",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "She Has Her Mother's Laugh",
    titleEn: "",
    author: "Carl Zimmer",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "The Heart-Led Leader",
    titleEn: "",
    author: "Tommy Spaulding",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Emotional Intelligence: A Practical Guide",
    titleEn: "",
    author: "David Walton",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "The First 90 Days",
    titleEn: "",
    author: "Michael D. Watkins",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Moral Ground",
    titleEn: "",
    author: "Kathleen Dean Moore & Michael P. Nelson (eds.)",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Mobius",
    titleEn: "",
    author: "Adam Fawer",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Kalp",
    titleEn: "",
    author: "İskender Pala",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Daring Greatly",
    titleEn: "",
    author: "Brené Brown",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "The DOSE Effect",
    titleEn: "",
    author: "T. J. Power",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Skipshock",
    titleEn: "",
    author: "Caroline O'Donoghue",
    status: "soon",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Beni Asla Bırakma",
    titleEn: "Never Let Me Go",
    author: "Kazuo Ishiguro",
    status: "soon",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Seyir",
    titleEn: "",
    author: "Piraye",
    status: "soon",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Kupa Sevgili",
    titleEn: "",
    author: "Lily King",
    status: "soon",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Esme Lennox Nasıl Yok Oldu",
    titleEn: "The Vanishing Act of Esme Lennox",
    author: "Maggie O'Farrell",
    status: "soon",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Gece Yarısı Treni",
    titleEn: "",
    author: "Matt Haig",
    status: "soon",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Sonsuz Olasılıklar",
    titleEn: "Infinite Possibilities",
    author: "Mike Dooley",
    status: "soon",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Sen Hâlâ Annenin Kızısın",
    titleEn: "",
    author: "Çağla Şıkel",
    status: "soon",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Annenin Duygusal Yokluğu",
    titleEn: "The Emotionally Absent Mother",
    author: "Jasmin Lee Cori",
    status: "soon",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Asılacak Kadın",
    titleEn: "",
    author: "Pınar Kür",
    status: "soon",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Geri Verilen Kız",
    titleEn: "A Girl Returned",
    author: "Donatella Di Pietrantonio",
    status: "soon",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Sıfır Noktasındaki Kadın",
    titleEn: "Woman at Point Zero",
    author: "Neval El Seddavi",
    status: "soon",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Mumlar Sonuna Kadar Yanar",
    titleEn: "Embers",
    author: "Sándor Márai",
    status: "soon",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Kahve Soğumadan Önce: Kafeden Hikâyeler",
    titleEn: "Tales from the Cafe",
    author: "Toshikazu Kawaguchi",
    status: "soon",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Kaçırdıklarımız",
    titleEn: "Missing Out",
    author: "Adam Phillips",
    status: "soon",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Gizli Bahçe",
    titleEn: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    status: "soon",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Vazgeçmek Üzerine",
    titleEn: "On Giving Up",
    author: "Adam Phillips",
    status: "soon",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Yaratma Cesareti",
    titleEn: "The Courage to Create",
    author: "Rollo May",
    status: "soon",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Malma İstasyonu",
    titleEn: "Malma Station",
    author: "Alex Schulman",
    status: "soon",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Büyü Dükkânı",
    titleEn: "",
    author: "Yeşim Taş Türköz",
    status: "soon",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "MBA",
    titleEn: "An MBA in a Book",
    author: "Xander Cansell",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Economics",
    titleEn: "",
    author: "Elaine Schwartz",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Quality of Life Therapy",
    titleEn: "",
    author: "Michael B. Frisch",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Introduction to Leadership",
    titleEn: "",
    author: "Peter G. Northouse",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Leadership: Theory and Practice",
    titleEn: "",
    author: "Peter G. Northouse",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "The Politics of Crisis Management",
    titleEn: "",
    author: "Boin, 't Hart, Stern & Sundelius",
    status: "finished",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Good Work If You Can Get It",
    titleEn: "",
    author: "Jason Brennan",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Kur'an-ı Kerim'i Anlamak",
    titleEn: "",
    author: "İbn Arabi",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Devlet",
    titleEn: "The Republic",
    author: "Platon",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Dem",
    titleEn: "",
    author: "Metin Hara",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "İyiliğin Hareket Hali",
    titleEn: "",
    author: "Metin Hara",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Kalbin Temizse Hikâyen Mutlu Biter",
    titleEn: "",
    author: "Hakan Mengüç",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Bilinçaltının Gücü",
    titleEn: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    status: "finished",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Uyan",
    titleEn: "",
    author: "İsmail Bülbül",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Hiçbir Karşılaşma Tesadüf Değildir",
    titleEn: "",
    author: "Hakan Mengüç",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Yol",
    titleEn: "",
    author: "Metin Hara",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Writing Your Dissertation in Fifteen Minutes a Day",
    titleEn: "",
    author: "Joan Bolker",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "What Got You Here Won't Get You There",
    titleEn: "",
    author: "Marshall Goldsmith",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Modern Dünyada Kusursuz Farkındalık",
    titleEn: "",
    author: "Osho",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "İyiliğin Bilim Hali",
    titleEn: "",
    author: "Metin Hara",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Kurtlarla Koşan Kadınlar",
    titleEn: "Women Who Run with the Wolves",
    author: "Clarissa Pinkola Estés",
    status: "finished",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Düşlenen Yaşa",
    titleEn: "",
    author: "Can Aydoğmuş",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Not Sure Who Needs to Hear This, But...",
    titleEn: "",
    author: "Greene",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Olağanüstü Bir Gece",
    titleEn: "",
    author: "Stefan Zweig",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Satranç",
    titleEn: "Chess Story",
    author: "Stefan Zweig",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Kirpinin Zarafeti",
    titleEn: "The Elegance of the Hedgehog",
    author: "Muriel Barbery",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Don't Believe Everything You Think",
    titleEn: "",
    author: "Joseph Nguyen",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Mindset",
    titleEn: "",
    author: "Carol S. Dweck",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "The 21 Irrefutable Laws of Leadership",
    titleEn: "",
    author: "John C. Maxwell",
    status: "finished",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Breaking Night",
    titleEn: "",
    author: "Liz Murray",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Aşk",
    titleEn: "The Forty Rules of Love",
    author: "Elif Şafak",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Dönüşüm",
    titleEn: "The Metamorphosis",
    author: "Franz Kafka",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Sırça Köşk",
    titleEn: "",
    author: "Sabahattin Ali",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "İnsan Ne ile Yaşar?",
    titleEn: "What Men Live By",
    author: "Lev N. Tolstoy",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "How to Win Friends & Influence People",
    titleEn: "",
    author: "Dale Carnegie",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Sen Yola Çık Yol Sana Görünür",
    titleEn: "",
    author: "Hakan Mengüç",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Sineklerin Tanrısı",
    titleEn: "Lord of the Flies",
    author: "William Golding",
    status: "finished",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Crime and Punishment",
    titleEn: "",
    author: "Fyodor Dostoyevsky",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Rich Dad Poor Dad",
    titleEn: "",
    author: "Robert T. Kiyosaki",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Ask a Science Teacher",
    titleEn: "",
    author: "Larry Scheckel",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Bir Ömür Nasıl Yaşanır?",
    titleEn: "",
    author: "İlber Ortaylı",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Aşkın Gözyaşları 1: Şems-i Tebrizi",
    titleEn: "",
    author: "Sinan Yağmur",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Devrim",
    titleEn: "",
    author: "Osho",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "What Happened to You?",
    titleEn: "",
    author: "Bruce D. Perry & Oprah Winfrey",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Uyanışa Üç Adım",
    titleEn: "",
    author: "Osho",
    status: "finished",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Her Şey Vaktini Bekler",
    titleEn: "",
    author: "Hakan Mengüç",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "The Light Between Us",
    titleEn: "",
    author: "Laura Lynne Jackson",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "You Are Psychic!",
    titleEn: "",
    author: "Pete A. Sanders Jr.",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "İnsan Var mısın?",
    titleEn: "",
    author: "Doğan Cüceloğlu",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Life Without Limits",
    titleEn: "",
    author: "Nick Vujicic",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Ben Kazanmadan Bitmez",
    titleEn: "",
    author: "Bircan Yıldırım",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Seni Yoran Her Şeyi Bırak",
    titleEn: "",
    author: "Müthiş Psikoloji",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Ethics for the New Millennium",
    titleEn: "",
    author: "Dalai Lama",
    status: "finished",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "The Adventures of Tom Sawyer",
    titleEn: "",
    author: "Mark Twain",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Fareler ve İnsanlar",
    titleEn: "Of Mice and Men",
    author: "John Steinbeck",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Develop Your Psychic Abilities",
    titleEn: "",
    author: "Litany Burns",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Gençler İçin Nutuk",
    titleEn: "",
    author: "Mustafa Kemal Atatürk",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "It Didn't Start with You",
    titleEn: "",
    author: "Mark Wolynn",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "The Death and Life of the Great American School System",
    titleEn: "",
    author: "Diane Ravitch",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Education and Equality",
    titleEn: "",
    author: "Danielle Allen",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Pedagogy of the Oppressed",
    titleEn: "",
    author: "Paulo Freire",
    status: "finished",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "The Smartest Kids in the World",
    titleEn: "",
    author: "Amanda Ripley",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "The Freedom Writers Diary",
    titleEn: "",
    author: "The Freedom Writers & Erin Gruwell",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Every Child, Every Classroom, Every Day",
    titleEn: "",
    author: "Peterkin, Jewell-Sherman, Kelley & Boozer",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Atatürk",
    titleEn: "",
    author: "İlber Ortaylı",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "#Girlboss",
    titleEn: "",
    author: "Sophia Amoruso",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Get the Guy",
    titleEn: "",
    author: "Matthew Hussey",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Beni İncitemezsin",
    titleEn: "",
    author: "Müthiş Psikoloji",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Think and Grow Rich",
    titleEn: "",
    author: "Napoleon Hill",
    status: "finished",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Bilinmeyen Bir Kadının Mektubu",
    titleEn: "Letter from an Unknown Woman",
    author: "Stefan Zweig",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Beyaz Gemi",
    titleEn: "The White Ship",
    author: "Cengiz Aytmatov",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Notes from Underground",
    titleEn: "",
    author: "Fyodor Dostoyevsky",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Man's Search for Meaning",
    titleEn: "",
    author: "Viktor E. Frankl",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Run Away",
    titleEn: "",
    author: "Harlan Coben",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "It's Not How Good You Are, It's How Good You Want to Be",
    titleEn: "",
    author: "Paul Arden",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Power Your Life with the Positive",
    titleEn: "",
    author: "Cyrus Webb",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Lovers in Auschwitz",
    titleEn: "",
    author: "Keren Blankfeld",
    status: "finished",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Les Misérables",
    titleEn: "",
    author: "Victor Hugo",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Huzursuzluk",
    titleEn: "",
    author: "Zülfü Livaneli",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Conversations with My Cat",
    titleEn: "",
    author: "Danica Gim",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Kan Davası",
    titleEn: "",
    author: "Reşat Nuri Güntekin",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Reasons to Stay Alive",
    titleEn: "",
    author: "Matt Haig",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "The Hunchback of Notre Dame",
    titleEn: "",
    author: "Victor Hugo",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Kelebekler ve İnsanlar",
    titleEn: "",
    author: "Üstün Dökmen",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Nantucket Red",
    titleEn: "",
    author: "Leila Howland",
    status: "finished",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Sol Ayağım",
    titleEn: "My Left Foot",
    author: "Christy Brown",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "A Matter of Death and Life",
    titleEn: "",
    author: "Irvin D. Yalom",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Hayat İmkânsız",
    titleEn: "The Life Impossible",
    author: "Matt Haig",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Bir İdam Mahkûmunun Son Günü",
    titleEn: "The Last Day of a Condemned Man",
    author: "Victor Hugo",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Bişnev: Aşkın 7 Hâli",
    titleEn: "",
    author: "Sinan Yağmur",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Cennetin Gülü Hz. Muhammed",
    titleEn: "",
    author: "Sinan Yağmur",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "İlm-i Ledün",
    titleEn: "",
    author: "İmam-ı Gazali",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Aşkın Gözyaşları 5: Yunus Emre",
    titleEn: "",
    author: "Sinan Yağmur",
    status: "finished",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "A History of Medieval Islam",
    titleEn: "",
    author: "J. J. Saunders",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "İki Şehveti Dizginlemek",
    titleEn: "",
    author: "İmam-ı Gazali",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Hz. Muhammed'in Hayatı",
    titleEn: "",
    author: "Talha Uğurluel",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Her Güne Bir Ayet",
    titleEn: "",
    author: "Senai Demirci",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Nefsini Bilen Rabbini Bilir",
    titleEn: "",
    author: "İbn Arabi",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Kur'an ile Var Olmak",
    titleEn: "",
    author: "Cemalnur Sargut",
    status: "finished",
    hearts: 0,
    colour: "lilac",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Nigâhdar",
    titleEn: "",
    author: "Başak Sayan",
    status: "finished",
    hearts: 0,
    colour: "coral",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Aşkın Gözyaşları 3: Hz. Ali ve Fatıma",
    titleEn: "",
    author: "Sinan Yağmur",
    status: "finished",
    hearts: 0,
    colour: "ink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Nefs Terbiyesi ve Ahlakı Güzelleştirme",
    titleEn: "",
    author: "İmam-ı Gazali",
    status: "finished",
    hearts: 0,
    colour: "blush",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Hallac-ı Mansur",
    titleEn: "",
    author: "Wolfgang Günter Lerch",
    status: "finished",
    hearts: 0,
    colour: "pink",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Size Bir Sır Vereceğim",
    titleEn: "",
    author: "Mustafa Kaya",
    status: "finished",
    hearts: 0,
    colour: "butter",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Hallac-ı Mansur",
    titleEn: "",
    author: "Ergun Candan",
    status: "finished",
    hearts: 0,
    colour: "mint",
    note:   "",
    noteEn: ""
  },

  {
    title:  "Aşk'a Yolculuk 1: Veysel Karani",
    titleEn: "",
    author: "Sinan Yağmur",
    status: "finished",
    hearts: 0,
    colour: "sky",
    note:   "",
    noteEn: ""
  },

  // ---- copy from here ----
  // {
  //   title:  "",
  //   titleEn: "",
  //   author: "",
  //   status: "finished",
  //   hearts: 0,
  //   colour: "pink",
  //   note:   "",
  //   noteEn: ""
  // },
  // ---- to here, then paste it above this comment ----

];
