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
