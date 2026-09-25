/* ============================================================
   MY BOOK CLUB — this file builds the page from books.js.

   You should not need to change anything in here.
   To add or edit books, press "+ Kitap ekle" on the page,
   or open books.js.

   What's in here, top to bottom:
     1. The words on the page, in Turkish and English
     2. Drawing the book cards
     3. The TR | EN switch
     4. The "add / edit a book" form
     5. Saving into books.js
   ============================================================ */

(function () {
  "use strict";

  // Your email — the "Tell me what you thought" buttons open a message to this.
  var MY_EMAIL = "semihasekerlii@gmail.com";

  // Your Mailchimp sign-up link (from Mailchimp: Audience -> Signup forms -> Embedded forms).
  // While it is empty, the "Join the club" box stays hidden.
  var MAILCHIMP_URL = "https://github.us11.list-manage.com/subscribe/post?u=f16ad6d193a93a4a9e7eb9b99&amp;id=b3c309fdb7&amp;f_id=00a0c2e1f0";

  // The three shelves, in the order they appear down the page.
  var RACKS = ["reading", "finished", "soon"];

  // The eight cover colours you can choose.
  var COLOURS = {
    pink:   "#E9558A",
    butter: "#E5A92F",
    mint:   "#4FA381",
    sky:    "#5188BD",
    lilac:  "#9269BE",
    coral:  "#DF6E4E",
    ink:    "#463A50",
    blush:  "#D4779A"
  };

  /* ============================================================
     1. THE WORDS ON THE PAGE — Turkish first, then English
     ============================================================ */

  var WORDS = {
    tr: {
      pageTitle:     "Booksandthecity NYC — Dr. Semiha Sekerli'nin Kitap Kulübü",
      nameTape:      "Dr. Semiha Sekerli'nin",
      lede:          "Okuduğum kitaplar, bitirdiklerim ve her birinin bende bıraktıkları. Sen onları farklı görebilirsin — işin güzel yanı da bu. Sen ne gördün, anlat bana.",
      rack_reading:  "Şu an okuyorum",
      rack_finished: "Okuduklarım",
      rack_soon:     "Okuma listem",
      rackEmpty:     "Henüz boş.",
      chip:          "Şimdi okuyorum",
      tallyFinished: function (n) { return "kitap bitti"; },
      tallyReading:  "komodinin üstünde",
      tallySoon:     "okuma listesinde",
      heartsOf:      function (n) { return n + " / 5"; },
      noHearts:      "henüz puan yok",
      heartsAria:    function (n) { return "5 kalpten " + n; },
      noNote:        "Bu kitap için henüz not yok.",
      otherLangNote: "(bu notu İngilizce yazdım)",
      say:           "Ne düşündüğünü anlat",
      nfHint:        "Bu not sadece bana gelir, sayfada görünmez. Farklı düşünüyorsan hele, mutlaka yaz.",
      nfMessage:     "Notun",
      nfName:        "Adın (isteğe bağlı)",
      nfEmail:       "E-postan (isteğe bağlı — cevap yazabilmem için)",
      nfSend:        "Gönder",
      nfSending:     "Gönderiliyor…",
      nfThanks:      "Teşekkürler! Notun bana ulaştı ♥",
      nfEmpty:       "Önce bir şey yaz.",
      nfFailed:      "Gönderilemedi. Birazdan tekrar dener misin?",
      mailSubject:   "Kitap kulübü: ",
      mailBody:      function (t) { return "Merhaba Semiha,\n\n" + t + " hakkında —\n\n"; },
      emptyHead:     "Pano henüz boş",
      emptyText:     "“+ Kitap ekle” butonuna bas ve ilk kitabını ekle.",
      footerKept:    "Dr. Semiha B. Sekerli tarafından tutuluyor",
      joinHead:      "Booksandthecity NYC'ye katıl",
      joinAbout:     "Bu kulüp, okumayı ve fikirlerini paylaşmayı seven kitap kurtları için. Her kitabı bitirdiğimde ne düşündüğümü sana yazacağım.",
      joinText:      "Yeni bir kitaba başladığımda, bitirdiğimde ya da bir buluşma olduğunda sana haber vereyim.",
      joinName:      "Adın",
      joinEmail:     "E-postan",
      joinSend:      "Katıl",
      joinSmall:     "Ayda en fazla birkaç e-posta. İstediğin zaman tek tıkla ayrılabilirsin.",
      joinThanks:    "Hoş geldin, artık kulüptesin ♥ (E-postana bir onay maili gelirse oradaki butona basman yeterli.)",
      joinBadEmail:  "E-posta adresini kontrol eder misin?",
      joinFailed:    "Bir şeyler ters gitti, birazdan tekrar dener misin?",
      joinCta:       "Kulübe katıl ↓",
      footerHearts:  "Kalpler sadece bir kitabın bana nasıl dokunduğunu gösterir — sana bambaşka dokunabilir",
      add:           "+ Kitap ekle",
      edit:          "Düzenle",
      formAdd:       "Yeni kitap",
      formEdit:      "Kitabı düzenle",
      fTitle:        "Kitabın adı",
      fTitleEn:      "İngilizce adı (varsa)",
      fAuthor:       "Yazarı",
      fStatus:       "Hangi rafa?",
      fHearts:       "Kaç kalp?",
      fColour:       "Kapak rengi",
      fNoteTr:       "Türkçe yorumum",
      fNoteEn:       "İngilizce yorumum",
      fNoteHint:     "İkisini de yazmak zorunda değilsin — biri boşsa sayfa diğerini gösterir.",
      firstTime:     "İlk kaydette bir pencere açılacak: Masaüstü → Semiha → PROJECTS → book-club klasörünü seç ve izin ver. Bunu sadece ilk seferde yapman gerekiyor.",
      save:          "Kaydet",
      cancel:        "Vazgeç",
      del:           "Bu kitabı sil",
      confirmDel:    function (t) { return "“" + t + "” silinsin mi?"; },
      needTitle:     "Kitabın adını yazmayı unutma.",
      saved:         "Kaydedildi ✓",
      deleted:       "Silindi ✓",
      wrongFolder:   "Bu klasörde books.js yok. Lütfen book-club klasörünü seç.",
      changedOnDisk: "books.js bu sayfa açıkken başka bir yerde değişmiş. Önce F5 ile sayfayı yenile, sonra tekrar dene.",
      saveFailed:    "Kaydedilemedi: "
    },
    en: {
      pageTitle:     "Booksandthecity NYC — Dr. Semiha Sekerli's Book Club",
      nameTape:      "Dr. Semiha Sekerli's",
      lede:          "The books I'm reading, the ones I've finished, and what each of them left me with. You'll see them differently — that's the good part. Tell me what you saw.",
      rack_reading:  "Currently reading",
      rack_finished: "Finished",
      rack_soon:     "Reading list",
      rackEmpty:     "Nothing here yet.",
      chip:          "Reading now",
      tallyFinished: function (n) { return n === 1 ? "book finished" : "books finished"; },
      tallyReading:  "on the nightstand",
      tallySoon:     "on the reading list",
      heartsOf:      function (n) { return n + " of 5"; },
      noHearts:      "no rating yet",
      heartsAria:    function (n) { return "Rated " + n + " out of 5 hearts"; },
      noNote:        "No note on this one yet.",
      otherLangNote: "(I wrote this note in Turkish)",
      say:           "Tell me what you thought",
      nfHint:        "Only I see this note — it doesn't appear on the page. If you read it differently, even better.",
      nfMessage:     "Your note",
      nfName:        "Your name (optional)",
      nfEmail:       "Your email (optional — so I can write back)",
      nfSend:        "Send",
      nfSending:     "Sending…",
      nfThanks:      "Thank you! Your note reached me ♥",
      nfEmpty:       "Write something first.",
      nfFailed:      "Couldn't send it. Could you try again in a moment?",
      mailSubject:   "Book club: ",
      mailBody:      function (t) { return "Hi Semiha,\n\nAbout " + t + " —\n\n"; },
      emptyHead:     "The board is still empty",
      emptyText:     "Press “+ Add a book” to put your first book on the board.",
      footerKept:    "Kept by Dr. Semiha B. Sekerli",
      joinHead:      "Join Booksandthecity NYC",
      joinAbout:     "This club is for book nerds who love to read, share ideas, and talk books together. Every time I finish a book, I'll send you what I thought about it.",
      joinText:      "I'll let you know when I start a new book, finish one, or when we meet up.",
      joinName:      "Your name",
      joinEmail:     "Your email",
      joinSend:      "Join",
      joinSmall:     "A few emails a month at most. Leave any time with one click.",
      joinThanks:    "Welcome, you're in the club ♥ (If a confirmation email arrives, just click the button in it.)",
      joinBadEmail:  "Could you check your email address?",
      joinFailed:    "Something went wrong — could you try again in a moment?",
      joinCta:       "Join the club ↓",
      footerHearts:  "Hearts are just how a book landed for me — yours may land somewhere else entirely",
      add:           "+ Add a book",
      edit:          "Edit",
      formAdd:       "New book",
      formEdit:      "Edit this book",
      fTitle:        "Title",
      fTitleEn:      "English title (if different)",
      fAuthor:       "Author",
      fStatus:       "Which shelf?",
      fHearts:       "How many hearts?",
      fColour:       "Cover colour",
      fNoteTr:       "My note in Turkish",
      fNoteEn:       "My note in English",
      fNoteHint:     "You don't have to write both — if one is empty, the page shows the other.",
      firstTime:     "The first time you save, a window opens: choose Desktop → Semiha → PROJECTS → book-club and allow it. You only do this once.",
      save:          "Save",
      cancel:        "Cancel",
      del:           "Delete this book",
      confirmDel:    function (t) { return "Delete “" + t + "”?"; },
      needTitle:     "Don't forget the book's title.",
      saved:         "Saved ✓",
      deleted:       "Deleted ✓",
      wrongFolder:   "There's no books.js in that folder. Please choose the book-club folder.",
      changedOnDisk: "books.js was changed somewhere else while this page was open. Press F5 to refresh, then try again.",
      saveFailed:    "Couldn't save: "
    }
  };

  var lang = "tr";   // the page opens in Turkish
  try { if (localStorage.getItem("bookclub-lang") === "en") lang = "en"; } catch (e) {}
  function w() { return WORDS[lang]; }

  /* ---------- the books, tidied so every book has every line ---------- */

  function tidy(b) {
    b = b || {};
    var h = Math.round(Number(b.hearts) || 0);
    return {
      title:  String(b.title || ""),
      titleEn: String(b.titleEn || ""),
      author: String(b.author || ""),
      status: RACKS.indexOf(b.status) >= 0 ? b.status : "finished",
      hearts: Math.max(0, Math.min(5, h)),
      colour: COLOURS[b.colour] ? b.colour : "pink",
      note:   String(b.note || ""),
      noteEn: String(b.noteEn || "")
    };
  }

  var books = (typeof BOOKS !== "undefined" && Array.isArray(BOOKS)) ? BOOKS.map(tidy) : [];

  // Adding and editing only works when the page is opened from your computer
  // in Edge or Chrome. If the page is ever put online, visitors won't see these buttons.
  var canEdit = location.protocol === "file:" && "showDirectoryPicker" in window;

  var shelfEl = document.getElementById("shelf");
  var emptyEl = document.getElementById("empty");
  var tallyEl = document.getElementById("tally");

  /* ============================================================
     2. DRAWING THE BOOK CARDS
     ============================================================ */

  function node(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function heartIcon(filled) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("class", filled ? "on" : "off");
    var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", filled ? "#hrt" : "#hrt-o");
    svg.appendChild(use);
    return svg;
  }

  function heartRow(hearts) {
    var wrap = node("div", "rating");
    for (var i = 1; i <= 5; i++) wrap.appendChild(heartIcon(i <= hearts));
    wrap.appendChild(node("span", "label", hearts ? w().heartsOf(hearts) : w().noHearts));
    wrap.setAttribute("aria-label", hearts ? w().heartsAria(hearts) : w().noHearts);
    return wrap;
  }

  // Covers are drawn in the colour you picked, so nothing can ever show up broken.
  function coverFor(book) {
    var cover = node("div", "cover");
    cover.style.background = COLOURS[book.colour];
    cover.appendChild(node("span", "ribbon"));
    cover.appendChild(node("div", "rule"));
    cover.appendChild(node("div", "c-title", titleOf(book) || "…"));
    cover.appendChild(node("div", "c-author", book.author));
    cover.setAttribute("role", "img");
    cover.setAttribute("aria-label", titleOf(book) + (book.author ? ", " + book.author : ""));
    return cover;
  }

  // The book's name in the chosen language (English title only if you gave one).
  function titleOf(book) {
    return (lang === "en" && book.titleEn) ? book.titleEn : book.title;
  }

  // Shows your note in the chosen language. If you only wrote it in the
  // other language, that one is shown with a small line saying so.
  function noteFor(book) {
    var mine  = lang === "en" ? book.noteEn : book.note;
    var other = lang === "en" ? book.note : book.noteEn;
    if (mine) return node("p", "note", mine);
    if (other) {
      var p = node("p", "note", other);
      p.lang = lang === "en" ? "tr" : "en";
      p.appendChild(node("span", "note-tag", w().otherLangNote));
      return p;
    }
    return node("p", "note empty", w().noNote);
  }

  function bookCard(book, index) {
    var card = node("article", "book");
    card.appendChild(node("span", "tape"));
    card.appendChild(coverFor(book));

    var main = node("div", "book-main");

    var top = node("div", "book-top");
    top.appendChild(node("h3", null, titleOf(book)));
    if (book.status === "reading") top.appendChild(node("span", "chip", w().chip));
    main.appendChild(top);

    if (book.author) main.appendChild(node("p", "byline", book.author));
    main.appendChild(heartRow(book.hearts));
    main.appendChild(noteFor(book));

    var actions = node("div", "card-actions");
    var say = node("button", "say", w().say);
    say.type = "button";
    say.setAttribute("aria-expanded", "false");
    actions.appendChild(say);

    if (canEdit) {
      var edit = node("button", "edit", w().edit);
      edit.type = "button";
      edit.addEventListener("click", function () { openForm(index); });
      actions.appendChild(edit);
    }
    main.appendChild(actions);

    // the private note form opens under the buttons
    var noteForm = privateNoteForm(book);
    noteForm.hidden = true;
    say.addEventListener("click", function () {
      noteForm.hidden = !noteForm.hidden;
      say.setAttribute("aria-expanded", String(!noteForm.hidden));
      if (!noteForm.hidden) noteForm.querySelector("textarea").focus();
    });
    main.appendChild(noteForm);

    card.appendChild(main);
    return card;
  }

  /* ---------- the private note a reader sends you ----------
     Notes go to your Gmail through FormSubmit (formsubmit.co, free,
     no account). They never appear on the page. The very first note
     makes FormSubmit email you an "Activate" link — click it once. */

  function privateNoteForm(book) {
    var form = node("form", "note-form");
    form.noValidate = true;

    form.appendChild(node("p", "hint", w().nfHint));

    var msgLabel = node("label", "field");
    msgLabel.appendChild(node("span", null, w().nfMessage));
    var msg = node("textarea");
    msgLabel.appendChild(msg);
    form.appendChild(msgLabel);

    var row = node("div", "form-row");
    var nameLabel = node("label", "field");
    nameLabel.appendChild(node("span", null, w().nfName));
    var name = node("input");
    name.type = "text";
    name.autocomplete = "name";
    nameLabel.appendChild(name);
    var mailLabel = node("label", "field");
    mailLabel.appendChild(node("span", null, w().nfEmail));
    var mail = node("input");
    mail.type = "email";
    mail.autocomplete = "email";
    mailLabel.appendChild(mail);
    row.appendChild(nameLabel);
    row.appendChild(mailLabel);
    form.appendChild(row);

    // a hidden trap box: people never fill it in, spam robots do
    var honey = node("input", "honey");
    honey.type = "text";
    honey.tabIndex = -1;
    honey.autocomplete = "off";
    honey.setAttribute("aria-hidden", "true");
    form.appendChild(honey);

    var status = node("p", "form-msg");
    status.setAttribute("role", "status");
    form.appendChild(status);

    var send = node("button", "add", w().nfSend);
    send.type = "submit";
    form.appendChild(send);

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (!msg.value.trim()) { status.textContent = w().nfEmpty; msg.focus(); return; }
      send.disabled = true;
      send.textContent = w().nfSending;
      status.textContent = "";
      try {
        var res = await fetch("https://formsubmit.co/ajax/" + MY_EMAIL, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            _subject:  "Kitap kulübü notu: " + book.title,
            _template: "table",
            _captcha:  "false",
            _honey:    honey.value,
            Kitap:     book.title,
            Ad:        name.value.trim() || "-",
            email:     mail.value.trim() || "-",
            Not:       msg.value.trim(),
            Dil:       lang.toUpperCase()
          })
        });
        var out = await res.json();
        if (!res.ok || String(out.success) !== "true") throw new Error(out.message || res.status);
        form.textContent = "";
        form.appendChild(node("p", "thanks", w().nfThanks));
      } catch (err) {
        status.textContent = w().nfFailed;
        send.disabled = false;
        send.textContent = w().nfSend;
      }
    });

    return form;
  }

  function renderTally() {
    tallyEl.textContent = "";
    function count(s) { return books.filter(function (b) { return b.status === s; }).length; }
    var f = count("finished"), r = count("reading"), s = count("soon");
    [[f, w().tallyFinished(f)], [r, w().tallyReading], [s, w().tallySoon]].forEach(function (bit) {
      var span = node("span");
      span.appendChild(node("b", null, String(bit[0])));
      span.appendChild(document.createTextNode(" " + bit[1]));
      tallyEl.appendChild(span);
    });
  }

  function rackSection(rack) {
    var inRack = [];
    books.forEach(function (b, i) { if (b.status === rack) inRack.push([b, i]); });

    var section = node("section", "rack");
    var head = node("div", "rack-head");
    head.appendChild(node("h2", null, w()["rack_" + rack]));
    head.appendChild(node("span", "count", String(inRack.length)));
    section.appendChild(head);

    inRack.forEach(function (pair) { section.appendChild(bookCard(pair[0], pair[1])); });
    if (!inRack.length) section.appendChild(node("p", "rack-empty", w().rackEmpty));
    return section;
  }

  // Layout: "currently reading" across the top,
  // then two columns — books I've read on the left, my reading list on the right.
  function render() {
    shelfEl.textContent = "";
    emptyEl.hidden = books.length > 0;
    if (books.length) {
      if (books.some(function (b) { return b.status === "reading"; })) {
        shelfEl.appendChild(rackSection("reading"));
      }
      var cols = node("div", "two-racks");
      cols.appendChild(rackSection("finished"));
      cols.appendChild(rackSection("soon"));
      shelfEl.appendChild(cols);
    }
    renderTally();
  }

  /* ============================================================
     3. THE TR | EN SWITCH
     ============================================================ */

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.title = w().pageTitle;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = w()[el.getAttribute("data-i18n")];
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    render();
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.getAttribute("data-lang");
      try { localStorage.setItem("bookclub-lang", lang); } catch (e) {}
      applyLanguage();
      if (formEl.open) fillFormHeading();
    });
  });

  /* ============================================================
     4. THE "ADD / EDIT A BOOK" FORM
     ============================================================ */

  var formEl   = document.getElementById("bookForm");
  var formIn   = document.getElementById("bookFormInner");
  var formHead = document.getElementById("formHead");
  var fTitle   = document.getElementById("fTitle");
  var fTitleEn = document.getElementById("fTitleEn");
  var fAuthor  = document.getElementById("fAuthor");
  var fStatus  = document.getElementById("fStatus");
  var fHearts  = document.getElementById("fHearts");
  var fColour  = document.getElementById("fColour");
  var fNote    = document.getElementById("fNote");
  var fNoteEn  = document.getElementById("fNoteEn");
  var formMsg  = document.getElementById("formMsg");
  var saveBtn  = document.getElementById("saveBtn");
  var delBtn   = document.getElementById("delBtn");
  var addBtn   = document.getElementById("addBtn");
  var firstEl  = document.getElementById("firstTime");
  var toastEl  = document.getElementById("toast");

  var editing = -1;     // which book is open in the form; -1 means a new book
  var formHearts = 0;

  // The five hearts you click in the form.
  function drawHeartPicker() {
    fHearts.textContent = "";
    for (var i = 1; i <= 5; i++) {
      (function (n) {
        var b = node("button");
        b.type = "button";
        b.setAttribute("aria-label", String(n));
        b.setAttribute("aria-pressed", String(n <= formHearts));
        b.appendChild(heartIcon(n <= formHearts));
        // click a heart to set it; click the same heart again to take it back
        b.addEventListener("click", function () {
          formHearts = formHearts === n ? n - 1 : n;
          drawHeartPicker();
          fHearts.children[Math.max(0, n - 1)].focus();
        });
        fHearts.appendChild(b);
      })(i);
    }
  }

  // The eight colour dots in the form.
  Object.keys(COLOURS).forEach(function (name) {
    var label = node("label");
    var input = node("input");
    input.type = "radio";
    input.name = "colour";
    input.value = name;
    input.setAttribute("aria-label", name);
    var dot = node("span");
    dot.style.setProperty("--sw", COLOURS[name]);
    label.appendChild(input);
    label.appendChild(dot);
    fColour.appendChild(label);
  });

  function fillFormHeading() {
    formHead.textContent = editing < 0 ? w().formAdd : w().formEdit;
  }

  function openForm(index) {
    editing = index;
    var b = index < 0 ? tidy({ status: "reading", colour: "pink" }) : books[index];
    fTitle.value  = b.title;
    fTitleEn.value = b.titleEn;
    fAuthor.value = b.author;
    fStatus.value = b.status;
    formHearts    = b.hearts;
    fNote.value   = b.note;
    fNoteEn.value = b.noteEn;
    fColour.querySelector('input[value="' + b.colour + '"]').checked = true;
    drawHeartPicker();
    fillFormHeading();
    delBtn.hidden = index < 0;
    formMsg.textContent = "";
    saveBtn.disabled = false;
    formEl.showModal();
    fTitle.focus();
  }

  function readForm() {
    var c = fColour.querySelector("input:checked");
    return tidy({
      title:  fTitle.value.trim(),
      titleEn: fTitleEn.value.trim(),
      author: fAuthor.value.trim(),
      status: fStatus.value,
      hearts: formHearts,
      colour: c ? c.value : "pink",
      note:   fNote.value.trim(),
      noteEn: fNoteEn.value.trim()
    });
  }

  function toast(text) {
    toastEl.textContent = text;
    toastEl.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(function () { toastEl.classList.remove("show"); }, 2600);
  }

  async function commit(next, doneText) {
    formMsg.textContent = "";
    saveBtn.disabled = true;
    try {
      await writeBooks(next);
      books = next;
      firstEl.hidden = true;
      formEl.close();
      render();
      toast(doneText);
    } catch (err) {
      // pressing "Cancel" in the folder window is not an error
      if (err && err.name === "AbortError") { /* nothing */ }
      else formMsg.textContent = (err && err.fromUs) ? err.message : w().saveFailed + (err && err.message);
    }
    saveBtn.disabled = false;
  }

  formIn.addEventListener("submit", function (e) {
    e.preventDefault();
    var b = readForm();
    if (!b.title) { formMsg.textContent = w().needTitle; fTitle.focus(); return; }
    var next = books.slice();
    if (editing < 0) next.unshift(b);   // new books go to the top of the list
    else next[editing] = b;
    commit(next, w().saved);
  });

  delBtn.addEventListener("click", function () {
    if (!confirm(w().confirmDel(titleOf(books[editing])))) return;
    var next = books.filter(function (_, i) { return i !== editing; });
    commit(next, w().deleted);
  });

  document.getElementById("cancelBtn").addEventListener("click", function () { formEl.close(); });
  addBtn.addEventListener("click", function () { openForm(-1); });
  addBtn.hidden = !canEdit;

  /* ============================================================
     5. SAVING INTO books.js
     The first time, Edge asks you to choose the book-club folder.
     It remembers that folder afterwards. Before each save, the
     old books.js is copied into books-backup.js, just in case.
     ============================================================ */

  function ourError(text) { var e = new Error(text); e.fromUs = true; return e; }

  // A tiny storage box inside the browser, used only to remember the folder.
  function store(mode, job) {
    return new Promise(function (resolve, reject) {
      var open = indexedDB.open("bookclub", 1);
      open.onupgradeneeded = function () { open.result.createObjectStore("kv"); };
      open.onerror = function () { reject(open.error); };
      open.onsuccess = function () {
        var tx = open.result.transaction("kv", mode);
        var req = job(tx.objectStore("kv"));
        tx.oncomplete = function () { resolve(req && req.result); };
        tx.onerror = function () { reject(tx.error); };
      };
    });
  }

  async function getFolder() {
    var dir = null;
    try { dir = await store("readonly", function (s) { return s.get("folder"); }); } catch (e) {}
    if (dir) {
      var ok = await dir.queryPermission({ mode: "readwrite" });
      if (ok !== "granted") ok = await dir.requestPermission({ mode: "readwrite" });
      if (ok === "granted") return dir;
    }
    dir = await window.showDirectoryPicker({ id: "bookclub", mode: "readwrite", startIn: "desktop" });
    try { await store("readwrite", function (s) { return s.put(dir, "folder"); }); } catch (e) {}
    return dir;
  }

  async function writeText(fileHandle, text) {
    var out = await fileHandle.createWritable();
    await out.write(text);
    await out.close();
  }

  // Reads the list of books out of the text of a books.js file.
  function booksInFile(text) {
    return (new Function(text + "\n;return BOOKS;"))().map(tidy);
  }

  async function writeBooks(next) {
    var dir = await getFolder();
    var file;
    try {
      file = await dir.getFileHandle("books.js");
    } catch (e) {
      try { await store("readwrite", function (s) { return s.delete("folder"); }); } catch (x) {}
      throw ourError(w().wrongFolder);
    }

    // Safety check: if books.js was edited by hand while this page was open,
    // stop, so those edits aren't overwritten.
    var current = await (await file.getFile()).text();
    var onDisk;
    try { onDisk = booksInFile(current); } catch (e) { throw ourError(w().changedOnDisk); }
    if (JSON.stringify(onDisk) !== JSON.stringify(books)) throw ourError(w().changedOnDisk);

    await writeText(await dir.getFileHandle("books-backup.js", { create: true }), current);
    await writeText(file, booksFileText(next));
  }

  // Builds the whole books.js file, with its explanations at the top.
  function booksFileText(list) {
    var q = JSON.stringify;   // puts quote marks around text safely
    var blocks = list.map(function (b) {
      return [
        "  {",
        "    title:  " + q(b.title) + ",",
        "    titleEn: " + q(b.titleEn) + ",",
        "    author: " + q(b.author) + ",",
        "    status: " + q(b.status) + ",",
        "    hearts: " + b.hearts + ",",
        "    colour: " + q(b.colour) + ",",
        "    note:   " + q(b.note) + ",",
        "    noteEn: " + q(b.noteEn),
        "  },"
      ].join("\n");
    });
    return BOOKS_FILE_TOP + "\n" + blocks.join("\n\n") + (blocks.length ? "\n" : "") + BOOKS_FILE_BOTTOM;
  }

  var BOOKS_FILE_TOP = [
    "// ============================================================",
    "// MY BOOKS  —  every book on the page lives in this file",
    "// ============================================================",
    "//",
    "// THE EASY WAY: open index.html and press \"+ Kitap ekle\",",
    "// or \"Düzenle\" under a book. The page writes it into this",
    "// file for you. Each time it saves, the version before is",
    "// kept in books-backup.js, just in case.",
    "//",
    "// THE BY-HAND WAY: you can still edit this file yourself.",
    "// Every book is one block between { and }.",
    "// To add a book: copy a whole block, paste it, change the words.",
    "// To remove a book: delete its block.",
    "// Keep the comma after each } — that's what separates the books.",
    "// After you save this file, refresh index.html in your browser",
    "// (press F5) and your change is there.",
    "//",
    "// ------------------------------------------------------------",
    "// WHAT EACH LINE MEANS",
    "// ------------------------------------------------------------",
    "// title:   the book's name (as you know it — e.g. the Turkish title)",
    "// titleEn: the English title, shown when the page is in EN.",
    "//          Leave it as \"\" if it's the same.",
    "// author:  who wrote it (leave it as \"\" if you don't want one)",
    "// status:  WHICH SHELF it goes on. Only these three words work:",
    "//            \"reading\"   -> Şu an okuyorum / Currently reading (across the top)",
    "//            \"finished\"  -> Okuduklarım / Finished (left column)",
    "//            \"soon\"      -> Okuma listem / Reading list (right column)",
    "// hearts:  how it landed for you, 0 to 5. Use 0 if you haven't decided.",
    "// colour:  the cover colour. Pick one of these eight words:",
    "//            \"pink\"  \"butter\"  \"mint\"  \"sky\"  \"lilac\"  \"coral\"  \"ink\"  \"blush\"",
    "// note:    what you thought, IN TURKISH.",
    "// noteEn:  what you thought, IN ENGLISH.",
    "//          You don't have to fill both. Leave one as \"\" and the",
    "//          page shows the other one in both languages.",
    "//",
    "// A NOTE ABOUT QUOTE MARKS: your note sits between \" and \".",
    "// If you type a note in this file by hand and want a \" inside it,",
    "// use ' instead — otherwise the page will break.",
    "// (The \"+ Kitap ekle\" button takes care of this for you.)",
    "// Turkish letters (ç ğ ı ö ş ü) are all fine.",
    "// ------------------------------------------------------------",
    "",
    "const BOOKS = [",
    ""
  ].join("\n");

  var BOOKS_FILE_BOTTOM = [
    "",
    "  // ---- copy from here ----",
    "  // {",
    "  //   title:  \"\",",
    "  //   titleEn: \"\",",
    "  //   author: \"\",",
    "  //   status: \"finished\",",
    "  //   hearts: 0,",
    "  //   colour: \"pink\",",
    "  //   note:   \"\",",
    "  //   noteEn: \"\"",
    "  // },",
    "  // ---- to here, then paste it above this comment ----",
    "",
    "];",
    ""
  ].join("\n");

  /* ============================================================
     6. JOIN THE CLUB — sends name + email to your Mailchimp list.
     Mailchimp keeps the list, sends your update emails, and adds
     the "unsubscribe" link to every email for you.
     ============================================================ */

  var joinEl   = document.getElementById("join");
  var joinCta  = document.getElementById("joinCta");
  var joinForm = document.getElementById("joinForm");
  var joinName = document.getElementById("joinName");
  var joinMail = document.getElementById("joinEmail");
  var joinBtn  = document.getElementById("joinBtn");
  var joinMsg  = document.getElementById("joinMsg");

  if (MAILCHIMP_URL) {
    joinEl.hidden = false;
    joinCta.hidden = false;
  }

  joinForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = joinMail.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { joinMsg.textContent = w().joinBadEmail; joinMail.focus(); return; }
    if (document.getElementById("joinHoney").value) return;   // a spam robot filled the trap box

    joinBtn.disabled = true;
    joinMsg.textContent = "";

    // Mailchimp's form link, changed to the version that answers back to the page
    var params = new URL(MAILCHIMP_URL.replace(/&amp;/g, "&")).searchParams;
    var callback = "bookclubJoin" + Date.now();
    var src = MAILCHIMP_URL.replace(/&amp;/g, "&").replace("/post?", "/post-json?") +
      "&EMAIL=" + encodeURIComponent(email) +
      "&FNAME=" + encodeURIComponent(joinName.value.trim()) +
      "&b_" + params.get("u") + "_" + params.get("id") + "=" +
      "&c=" + callback;

    var tag = document.createElement("script");
    var timer = setTimeout(function () { done({ result: "error" }); }, 12000);
    function done(res) {
      clearTimeout(timer);
      delete window[callback];
      tag.remove();
      joinBtn.disabled = false;
      var msg = String((res && res.msg) || "");
      if (res && res.result === "success") {
        joinForm.textContent = "";
        joinForm.appendChild(node("p", "thanks", w().joinThanks));
      } else if (/already subscribed/i.test(msg)) {
        joinForm.textContent = "";
        joinForm.appendChild(node("p", "thanks", w().joinThanks));
      } else {
        joinMsg.textContent = /email|e-mail/i.test(msg) ? w().joinBadEmail : w().joinFailed;
      }
    }
    window[callback] = done;
    tag.src = src;
    tag.onerror = function () { done({ result: "error" }); };
    document.body.appendChild(tag);
  });

  // Show the "first time" help in the form until a folder has been chosen.
  if (canEdit) {
    store("readonly", function (s) { return s.get("folder"); })
      .then(function (d) { firstEl.hidden = !!d; })
      .catch(function () { firstEl.hidden = false; });
  }

  applyLanguage();
})();
