// UV: languages for the website!
// Each word below has the same thing in 6 languages.
// To add a new word: copy one block, give it a new name,
// and put data-t="that-name" on the thing in the HTML page.
var LANGS = [
  { id: "en", name: "English" },
  { id: "hi", name: "हिंदी" },
  { id: "mr", name: "मराठी" },
  { id: "te", name: "తెలుగు" },
  { id: "kn", name: "ಕನ್ನಡ" },
  { id: "ja", name: "日本語" }
];

var WORDS = {
  // ----- Menu -----
  home:    { en: "Home", hi: "मुखपृष्ठ", mr: "मुख्यपृष्ठ", te: "ముఖపుట", kn: "ಮುಖಪುಟ", ja: "ホーム" },
  jokes:   { en: "Jokes", hi: "चुटकुले", mr: "विनोद", te: "జోకులు", kn: "ಹಾಸ್ಯ", ja: "ジョーク" },
  origami: { en: "Origami", hi: "ओरिगामी", mr: "ओरिगामी", te: "ఒరిగామి", kn: "ಒರಿಗಾಮಿ", ja: "おりがみ" },
  about:   { en: "About Me", hi: "मेरे बारे में", mr: "माझ्याबद्दल", te: "నా గురించి", kn: "ನನ್ನ ಬಗ್ಗೆ", ja: "ぼくについて" },
  theme_label: { en: "Theme:", hi: "थीम:", mr: "थीम:", te: "థీమ్:", kn: "ಥೀಮ್:", ja: "テーマ:" },
  lang_label:  { en: "Language:", hi: "भाषा:", mr: "भाषा:", te: "భాష:", kn: "ಭಾಷೆ:", ja: "ことば:" },

  // ----- Nature theme names -----
  look_sketch:   { en: "Sketchbook", hi: "स्केचबुक", mr: "स्केचबुक", te: "స్కెచ్‌బుక్", kn: "ಸ್ಕೆಚ್‌ಬುಕ್", ja: "スケッチブック" },
  look_forest:   { en: "Forest", hi: "जंगल", mr: "जंगल", te: "అడవి", kn: "ಕಾಡು", ja: "もり" },
  look_ocean:    { en: "Ocean", hi: "समुद्र", mr: "समुद्र", te: "సముద్రం", kn: "ಸಮುದ್ರ", ja: "うみ" },
  look_desert:   { en: "Desert", hi: "रेगिस्तान", mr: "वाळवंट", te: "ఎడారి", kn: "ಮರುಭೂಮಿ", ja: "さばく" },
  look_mountain: { en: "Mountain", hi: "पहाड़", mr: "डोंगर", te: "కొండ", kn: "ಬೆಟ್ಟ", ja: "やま" },
  look_night:    { en: "Night Sky", hi: "रात का आसमान", mr: "रात्रीचे आकाश", te: "రాత్రి ఆకాశం", kn: "ರಾತ್ರಿ ಆಕಾಶ", ja: "よぞら" },

  // ----- Home page -----
  hero_tag: {
    en: "Welcome to my website! Jokes, fun facts and cool stuff.",
    hi: "मेरी वेबसाइट पर आपका स्वागत है! चुटकुले, मज़ेदार बातें और बढ़िया चीज़ें।",
    mr: "माझ्या वेबसाइटवर तुमचे स्वागत आहे! विनोद, मजेशीर माहिती आणि छान गोष्टी.",
    te: "నా వెబ్‌సైట్‌కి స్వాగతం! జోకులు, సరదా విషయాలు మరియు చక్కని సంగతులు.",
    kn: "ನನ್ನ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಸ್ವಾಗತ! ಹಾಸ್ಯ, ಮೋಜಿನ ಸಂಗತಿಗಳು ಮತ್ತು ಚಂದದ ವಿಷಯಗಳು.",
    ja: "ぼくの サイトへ ようこそ！ジョークや おもしろい はなしが いっぱい！"
  },
  jm_title: { en: "Joke Machine", hi: "चुटकुला मशीन", mr: "विनोद यंत्र", te: "జోక్ మెషిన్", kn: "ಹಾಸ್ಯ ಯಂತ್ರ", ja: "ジョーク・マシン" },
  jm_text: {
    en: "Press a button, get a joke. Can you guess the answer?",
    hi: "बटन दबाओ, चुटकुला पाओ। क्या तुम जवाब बता सकते हो?",
    mr: "बटण दाबा, विनोद मिळवा. उत्तर ओळखता येईल का?",
    te: "బటన్ నొక్కు, జోక్ పొందు. జవాబు ఊహించగలవా?",
    kn: "ಬಟನ್ ಒತ್ತು, ಹಾಸ್ಯ ಪಡೆ. ಉತ್ತರ ಊಹಿಸಬಲ್ಲೆಯಾ?",
    ja: "ボタンを おすと ジョークが でるよ。こたえが わかるかな？"
  },
  or_text: {
    en: "Fold boats, ninja stars, dragons and a World Cup trophy!",
    hi: "नाव, निंजा स्टार, ड्रैगन और वर्ल्ड कप ट्रॉफी बनाओ!",
    mr: "होडी, निंजा स्टार, ड्रॅगन आणि वर्ल्ड कप ट्रॉफी बनवा!",
    te: "పడవలు, నింజా స్టార్లు, డ్రాగన్లు మరియు వరల్డ్ కప్ ట్రోఫీ మడతపెట్టు!",
    kn: "ದೋಣಿ, ನಿಂಜಾ ನಕ್ಷತ್ರ, ಡ್ರ್ಯಾಗನ್ ಮತ್ತು ವಿಶ್ವಕಪ್ ಟ್ರೋಫಿ ಮಡಚು!",
    ja: "ふね、しゅりけん、ドラゴン、ワールドカップの トロフィーを おろう！"
  },
  ab_text: {
    en: "My favourite things in the whole world.",
    hi: "पूरी दुनिया में मेरी पसंदीदा चीज़ें।",
    mr: "जगातल्या माझ्या आवडत्या गोष्टी.",
    te: "ప్రపంచంలో నాకు ఇష్టమైన విషయాలు.",
    kn: "ಜಗತ್ತಿನಲ್ಲಿ ನನಗೆ ಇಷ್ಟವಾದ ವಿಷಯಗಳು.",
    ja: "せかいで いちばん すきな もの。"
  },
  ff_title: {
    en: "Fun fact about my name",
    hi: "मेरे नाम के बारे में मज़ेदार बात",
    mr: "माझ्या नावाबद्दल मजेशीर माहिती",
    te: "నా పేరు గురించి సరదా విషయం",
    kn: "ನನ್ನ ಹೆಸರಿನ ಬಗ್ಗೆ ಮೋಜಿನ ಸಂಗತಿ",
    ja: "ぼくの なまえの まめちしき"
  },
  ff_text: {
    en: "UV also stands for <b>ultraviolet</b> light. It comes from the Sun, you can't see it, and it's the reason we wear sunscreen!",
    hi: "UV का मतलब <b>पराबैंगनी</b> (ultraviolet) रोशनी भी है। यह सूरज से आती है, हम इसे देख नहीं सकते, और इसी वजह से हम सनस्क्रीन लगाते हैं!",
    mr: "UV म्हणजे <b>अतिनील</b> (ultraviolet) प्रकाश सुद्धा. तो सूर्यापासून येतो, आपल्याला दिसत नाही, आणि म्हणूनच आपण सनस्क्रीन लावतो!",
    te: "UV అంటే <b>అతినీలలోహిత</b> (ultraviolet) కాంతి కూడా. ఇది సూర్యుడి నుండి వస్తుంది, మనకు కనిపించదు, అందుకే మనం సన్‌స్క్రీన్ రాసుకుంటాం!",
    kn: "UV ಅಂದರೆ <b>ನೇರಳಾತೀತ</b> (ultraviolet) ಬೆಳಕು ಕೂಡ. ಇದು ಸೂರ್ಯನಿಂದ ಬರುತ್ತದೆ, ನಮಗೆ ಕಾಣಿಸುವುದಿಲ್ಲ, ಅದಕ್ಕೇ ನಾವು ಸನ್‌ಸ್ಕ್ರೀನ್ ಹಚ್ಚುತ್ತೇವೆ!",
    ja: "UVは <b>しがいせん</b>（ultraviolet）の ことでもあるよ。たいようから きて、目には みえない。だから ひやけどめを ぬるんだ！"
  },
  home_footer: {
    en: "Made by UV (with a little help from Dad) ✏️",
    hi: "UV ने बनाया (पापा की थोड़ी मदद से) ✏️",
    mr: "UV ने बनवले (बाबांच्या थोड्या मदतीने) ✏️",
    te: "UV తయారు చేశాడు (నాన్న కొంచెం సాయంతో) ✏️",
    kn: "UV ಮಾಡಿದ್ದು (ಅಪ್ಪನ ಸ್ವಲ್ಪ ಸಹಾಯದಿಂದ) ✏️",
    ja: "UVが つくったよ（パパが すこし てつだったよ）✏️"
  },

  // ----- Jokes page -----
  count: { en: "{n} jokes in the machine", hi: "मशीन में {n} चुटकुले", mr: "यंत्रात {n} विनोद", te: "మెషిన్‌లో {n} జోకులు", kn: "ಯಂತ್ರದಲ್ಲಿ {n} ಹಾಸ್ಯಗಳು", ja: "ジョークが {n}こ はいってるよ" },
  j_note: {
    en: "",
    hi: "चुटकुले अंग्रेज़ी में ही हैं, क्योंकि ये शब्दों के खेल हैं।",
    mr: "विनोद इंग्रजीतच आहेत, कारण ते शब्दांचे खेळ आहेत.",
    te: "జోకులు ఇంగ్లీషులోనే ఉన్నాయి, ఎందుకంటే అవి పదాల ఆటలు.",
    kn: "ಹಾಸ್ಯಗಳು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲೇ ಇವೆ, ಏಕೆಂದರೆ ಅವು ಪದಗಳ ಆಟ.",
    ja: "ジョークは えいごの ことばあそびなので、えいごの ままだよ。"
  },
  tell: { en: "Tell me!", hi: "बताओ!", mr: "सांग!", te: "చెప్పు!", kn: "ಹೇಳು!", ja: "おしえて！" },
  next: { en: "Next joke", hi: "अगला चुटकुला", mr: "पुढचा विनोद", te: "తర్వాతి జోక్", kn: "ಮುಂದಿನ ಹಾಸ್ಯ", ja: "つぎの ジョーク" },
  j_footer: {
    en: "Know a good joke? Add it to jokes.js!",
    hi: "कोई अच्छा चुटकुला पता है? उसे jokes.js में जोड़ो!",
    mr: "छान विनोद माहीत आहे? तो jokes.js मध्ये टाका!",
    te: "మంచి జోక్ తెలుసా? దాన్ని jokes.js లో చేర్చు!",
    kn: "ಒಳ್ಳೆಯ ಹಾಸ್ಯ ಗೊತ್ತಾ? ಅದನ್ನು jokes.js ಗೆ ಸೇರಿಸು!",
    ja: "おもしろい ジョークを しってる？ jokes.js に たしてね！"
  },

  // ----- About page -----
  about_intro: {
    en: "Hi! I'm UV. I like making things and telling jokes.",
    hi: "नमस्ते! मैं UV हूँ। मुझे चीज़ें बनाना और चुटकुले सुनाना पसंद है।",
    mr: "नमस्कार! मी UV. मला वस्तू बनवायला आणि विनोद सांगायला आवडते.",
    te: "నమస్తే! నేను UV. నాకు వస్తువులు తయారు చేయడం, జోకులు చెప్పడం ఇష్టం.",
    kn: "ನಮಸ್ಕಾರ! ನಾನು UV. ನನಗೆ ವಸ್ತುಗಳನ್ನು ಮಾಡುವುದು ಮತ್ತು ಹಾಸ್ಯ ಹೇಳುವುದು ಇಷ್ಟ.",
    ja: "こんにちは！ぼくは UV。ものを つくるのと ジョークを いうのが すき。"
  },
  faves:  { en: "My favourites", hi: "मेरी पसंद", mr: "माझ्या आवडी", te: "నాకు ఇష్టమైనవి", kn: "ನನ್ನ ಇಷ್ಟಗಳು", ja: "すきな もの" },
  colour: { en: "Colour", hi: "रंग", mr: "रंग", te: "రంగు", kn: "ಬಣ್ಣ", ja: "いろ" },
  animal: { en: "Animal", hi: "जानवर", mr: "प्राणी", te: "జంతువు", kn: "ಪ್ರಾಣಿ", ja: "どうぶつ" },
  food:   { en: "Food", hi: "खाना", mr: "खाऊ", te: "ఆహారం", kn: "ಊಟ", ja: "たべもの" },
  game:   { en: "Game", hi: "खेल", mr: "खेळ", te: "ఆట", kn: "ಆಟ", ja: "ゲーム" },
  grow:   { en: "When I grow up", hi: "जब मैं बड़ा हो जाऊँगा", mr: "मी मोठा झाल्यावर", te: "నేను పెద్దయ్యాక", kn: "ನಾನು ದೊಡ್ಡವನಾದ ಮೇಲೆ", ja: "おおきく なったら" },
  wantbe: { en: "I want to be a", hi: "मैं बनना चाहता हूँ:", mr: "मला व्हायचंय:", te: "నేను అవ్వాలనుకుంటున్నది:", kn: "ನಾನು ಆಗಬೇಕೆಂದಿರುವುದು:", ja: "ぼくの ゆめは:" },
  a_footer: {
    en: "Website safety rule: no real name, school or address here!",
    hi: "वेबसाइट सुरक्षा नियम: यहाँ असली नाम, स्कूल या पता नहीं!",
    mr: "वेबसाइट सुरक्षा नियम: इथे खरे नाव, शाळा किंवा पत्ता नको!",
    te: "వెబ్‌సైట్ భద్రతా నియమం: ఇక్కడ అసలు పేరు, బడి, చిరునామా వద్దు!",
    kn: "ವೆಬ್‌ಸೈಟ್ ಸುರಕ್ಷತಾ ನಿಯಮ: ಇಲ್ಲಿ ನಿಜವಾದ ಹೆಸರು, ಶಾಲೆ, ವಿಳಾಸ ಬೇಡ!",
    ja: "サイトの ルール：ほんとうの なまえ、がっこう、じゅうしょは かかない！"
  },

  // ----- Origami page -----
  o_tag: {
    en: "Fold like a champion! Paper art, Messi style.",
    hi: "चैंपियन की तरह मोड़ो! कागज़ की कला, मेसी स्टाइल।",
    mr: "चॅम्पियनसारखी घडी घाला! कागदाची कला, मेस्सी स्टाइल.",
    te: "ఛాంపియన్‌లా మడతపెట్టు! కాగితపు కళ, మెస్సీ స్టైల్.",
    kn: "ಚಾಂಪಿಯನ್‌ನಂತೆ ಮಡಚು! ಕಾಗದದ ಕಲೆ, ಮೆಸ್ಸಿ ಶೈಲಿ.",
    ja: "チャンピオンみたいに おろう！メッシ スタイルの かみの アート。"
  },
  how_hard: { en: "How hard?", hi: "कितना मुश्किल?", mr: "किती अवघड?", te: "ఎంత కష్టం?", kn: "ಎಷ್ಟು ಕಷ್ಟ?", ja: "むずかしさ" },
  o_theme:  { en: "Theme", hi: "विषय", mr: "विषय", te: "అంశం", kn: "ವಿಷಯ", ja: "テーマ" },
  models:   { en: "{n} models", hi: "{n} मॉडल", mr: "{n} मॉडेल", te: "{n} మోడల్స్", kn: "{n} ಮಾದರಿಗಳು", ja: "{n}こ" },
  model1:   { en: "1 model", hi: "1 मॉडल", mr: "1 मॉडेल", te: "1 మోడల్", kn: "1 ಮಾದರಿ", ja: "1こ" },
  All:      { en: "All", hi: "सब", mr: "सगळे", te: "అన్నీ", kn: "ಎಲ್ಲಾ", ja: "ぜんぶ" },
  Easy:     { en: "Easy", hi: "आसान", mr: "सोपे", te: "సులభం", kn: "ಸುಲಭ", ja: "かんたん" },
  Medium:   { en: "Medium", hi: "मध्यम", mr: "मध्यम", te: "మధ్యస్థం", kn: "ಮಧ್ಯಮ", ja: "ふつう" },
  Hard:     { en: "Hard", hi: "मुश्किल", mr: "अवघड", te: "కష్టం", kn: "ಕಷ್ಟ", ja: "むずかしい" },
  Nature:   { en: "Nature", hi: "प्रकृति", mr: "निसर्ग", te: "ప్రకృతి", kn: "ಪ್ರಕೃತಿ", ja: "しぜん" },
  Ninja:    { en: "Ninja", hi: "निंजा", mr: "निंजा", te: "నింజా", kn: "ನಿಂಜಾ", ja: "にんじゃ" },
  Football: { en: "Football", hi: "फ़ुटबॉल", mr: "फुटबॉल", te: "ఫుట్‌బాల్", kn: "ಫುಟ್‌ಬಾಲ್", ja: "サッカー" },
  steps:    { en: "Steps", hi: "चरण", mr: "पायऱ्या", te: "దశలు", kn: "ಹಂತಗಳು", ja: "ステップ" },
  time:     { en: "Time: about {n} minutes", hi: "समय: लगभग {n} मिनट", mr: "वेळ: सुमारे {n} मिनिटे", te: "సమయం: సుమారు {n} నిమిషాలు", kn: "ಸಮಯ: ಸುಮಾರು {n} ನಿಮಿಷ", ja: "じかん: やく{n}分" },
  tip:      { en: "Tip", hi: "सुझाव", mr: "टीप", te: "చిట్కా", kn: "ಸಲಹೆ", ja: "コツ" },
  how_fold: { en: "How to fold", hi: "कैसे मोड़ें", mr: "घडी कशी घालायची", te: "ఎలా మడతపెట్టాలి", kn: "ಹೇಗೆ ಮಡಚುವುದು", ja: "おりかた" },
  o_footer: {
    en: "Tap a model to see how to fold it. Happy folding!",
    hi: "मोड़ने का तरीका देखने के लिए मॉडल पर टैप करो। मज़े से मोड़ो!",
    mr: "घडी कशी घालायची ते पाहण्यासाठी मॉडेलवर टॅप करा. मजेत घडी घाला!",
    te: "ఎలా మడతపెట్టాలో చూడటానికి మోడల్‌ను తాకు. హ్యాపీ ఫోల్డింగ్!",
    kn: "ಹೇಗೆ ಮಡಚಬೇಕು ಎಂದು ನೋಡಲು ಮಾದರಿಯನ್ನು ಒತ್ತು. ಖುಷಿಯಿಂದ ಮಡಚು!",
    ja: "モデルを タップすると おりかたが みられるよ。たのしく おってね！"
  }
};

// ----- The machinery (no need to change below) -----
var curLang = "en";
try { curLang = localStorage.getItem("uvzone-lang") || "en"; } catch (e) {}

// t("key") gives the word in the current language. {n} gets replaced by a number.
function t(key, n) {
  var w = WORDS[key];
  var s = w ? (w[curLang] !== undefined ? w[curLang] : w.en) : key;
  if (n !== undefined) s = s.replace("{n}", n);
  return s;
}

function applyLang() {
  document.documentElement.lang = curLang;
  document.querySelectorAll("[data-t]").forEach(function (el) {
    var s = t(el.dataset.t);
    el.innerHTML = s;
    el.classList.toggle("t-empty", !s);
    // Hover (or long-press) shows the English word, to help learning.
    var en = WORDS[el.dataset.t] ? WORDS[el.dataset.t].en.replace(/<[^>]+>/g, "") : "";
    if (curLang !== "en" && en) el.title = "English: " + en;
    else el.removeAttribute("title");
  });
  document.querySelectorAll(".langs button").forEach(function (b) {
    b.classList.toggle("here", b.dataset.id === curLang);
  });
  if (window.onLangChange) window.onLangChange();
}

function setLang(id) {
  curLang = id;
  try { localStorage.setItem("uvzone-lang", id); } catch (e) {}
  applyLang();
}

document.addEventListener("DOMContentLoaded", function () {
  var after = document.querySelector(".looks") || document.querySelector("nav");
  if (!after) return;
  var box = document.createElement("div");
  box.className = "looks langs";
  box.innerHTML = '<span data-t="lang_label">Language:</span>';
  LANGS.forEach(function (l) {
    var b = document.createElement("button");
    b.textContent = l.name;
    b.dataset.id = l.id;
    b.onclick = function () { setLang(l.id); };
    box.appendChild(b);
  });
  after.after(box);
  applyLang();
});
