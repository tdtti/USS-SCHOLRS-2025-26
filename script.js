<script>
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz_dxmqCSfQ970Kw-UTvEyOu-0tcbzunuvi1V2YO9_9DqGWRGwlhjZiymWKfd293cJt/exec";
  
const students = [
{id:"USS001", pass:"AF1", name:"AAISHA FIDHA", class:"7", div:"D", role:"student"},
{id:"USS002", pass:"ACS2", name:"AALIYA C S", class:"7", div:"D", role:"student"},
{id:"USS003", pass:"AK3", name:"ANANDHAKRISHNAN ", class:"7", div:"B", role:"student"},
{id:"USS004", pass:"AA4", name:"ANSHITHA ANEESH", class:"7", div:"B", role:"student"},
{id:"USS005", pass:"ATS5", name:"ANUSREE T S", class:"7", div:"B", role:"student"},
{id:"USS006", pass:"BSK6", name:"BHAGATH S KUMAR", class:"7", div:"B", role:"student"},
{id:"USS007", pass:"DTR7", name:"DEVANANDA T R", class:"7", div:"C", role:"student"},
{id:"USS008", pass:"FSKS8", name:"FATHIMATH SAHRA K S", class:"7", div:"D", role:"student"},
{id:"USS009", pass:"HNKS9", name:"HARI NARAYANAN K S", class:"7", div:"B", role:"student"},
{id:"USS010", pass:"KKN10", name:"KUNAL KIRAN NAGDA", class:"7", div:"B", role:"student"},
{id:"USS011", pass:"MNM11", name:"MALAVIKA N M", class:"7", div:"B", role:"student"},
{id:"USS012", pass:"MMH12", name:"MEENAKSHY M HEGDE", class:"7", div:"B", role:"student"},
{id:"USS013", pass:"PPS13", name:"PRATHITHA P SHENOY", class:"7", div:"B", role:"student"},
{id:"USS014", pass:"SS14", name:"SARANGI S", class:"7", div:"B", role:"student"},
{id:"USS015", pass:"SP15", name:"SREEBALA PRASANTH", class:"7", div:"B", role:"student"},
{id:"USS016", pass:"SH16", name:"SREEBHADRA H", class:"7", div:"B", role:"student"},
{id:"USS017", pass:"SSP17", name:"SUKESH S PAI", class:"7", div:"B", role:"student"},
{id:"USS018", pass:"VSB18", name:"VARALAKSHMY S BHAT", class:"7", div:"B", role:"student"},
{id:"USS019", pass:"VA", name:"AJITH V", class:"7", div:"E", role:"student"},
{id:"ADMIN", pass:"123456", name:"Teacher", class:"-", div:"-", role:"teacher"}
];

const masterBank = [

{"question":"ما هي لغة القرآن الكريم؟","options":["العربية","الفارسية","الأردية","التركية"],"answer":"العربية","subject":"lang1_arb"},
{"question":"كم عدد حروف اللغة العربية؟","options":["28","25","29","27"],"answer":"28","subject":"lang1_arb"},
{"question":"أيّ من الآتي من أقسام الكلمة في اللغة العربية؟","options":["اسم","فعل","حرف","جميع ما سبق"],"answer":"جميع ما سبق","subject":"lang1_arb"},{"question":"ما معنى كلمة «كتاب»؟","options":["قلم","دفتر","كتاب","مدرسة"],"answer":"كتاب","subject":"lang1_arb"},
{"question":"ما جمع كلمة «ولد»؟","options":["أولاد","بنات","رجال","نساء"],"answer":"أولاد","subject":"lang1_arb"},
{"question":"أيّ من الآتي اسم علم؟","options":["محمد","كتاب","بيت","قلم"],"answer":"محمد","subject":"lang1_arb"},
{"question":"ما ضد كلمة «كبير»؟","options":["طويل","صغير","واسع","ثقيل"],"answer":"صغير","subject":"lang1_arb"},
{"question":"أيّ من الآتي فعل؟","options":["كتب","كتاب","كاتب","مكتبة"],"answer":"كتب","subject":"lang1_arb"},
{"question":"ما معنى كلمة «مدرسة»؟","options":["مسجد","بيت","سوق","مدرسة"],"answer":"مدرسة","subject":"lang1_arb"},
{"question":"أيّ من الآتي حرف جر؟","options":["في","كتب","كتاب","كبير"],"answer":"في","subject":"lang1_arb"},
{"question":"ما مؤنث كلمة «ولد»؟","options":["بنت","امرأة","أخت","أم"],"answer":"بنت","subject":"lang1_arb"},
{"question":"أيّ من الآتي اسم إشارة؟","options":["جميل","كتب","مدرسة","هذا"],"answer":"هذا","subject":"lang1_arb"},
{"question":"ما معنى كلمة «قلم»؟","options":["دفتر","كتاب","قلم","حقيبة"],"answer":"قلم","subject":"lang1_arb"},
{"question":"ما جمع كلمة «كتاب»؟","options":["كتيب","كتبة","كتب","كتابة"],"answer":"كتب","subject":"lang1_arb"},
{"question":"أيّ من الآتي ضمير؟","options":["هو","محمد","كتاب","مدرسة"],"answer":"هو","subject":"lang1_arb"},


{"question":"संस्कृतस्य प्रथमः व्याकरणग्रन्थः कः?","options":["अस्मिता","अष्टाध्यायी","महाभाष्य","कर्मकांड"],"answer":"अष्टाध्यायी","subject":"lang1_skt"},
{"question":"'गच्छति' इत्यस्य धातुः रूपम् किम्?","options":["पठ","गम्","लेख","भू"],"answer":"गम्","subject":"lang1_skt"},
{"question":"'रामः वनं गच्छति' वाक्ये क्रियापदं किम्?","options":["रामः","वनं","गच्छति","पुल्लिङ्ग"],"answer":"गच्छति","subject":"lang1_skt"},
{"question":"'सप्त' शब्दस्य अर्थः किम्?","options":["पाँच","सात","तीन","नौ"],"answer":"सात","subject":"lang1_skt"},
{"question":"'मित्रम्' शब्दस्य कारकः कः?","options":["कर्ता","कर्म","सम्बोधन","अपादान"],"answer":"सम्बोधन","subject":"lang1_skt"},
{"question":"'रामः फलानि खादति' इत्यस्मिन् वाक्ये फलानि किम्?","options":["कर्ता","अपादान","कर्म","करण"],"answer":"कर्म","subject":"lang1_skt"},
{"question":"'बालकः पठति' वाक्ये 'बालकः' कस्य रूपम्?","options":["कर्ता","कर्म","करण","संबोधन"],"answer":"कर्ता","subject":"lang1_skt"},
{"question":"'रामेण सीताम् दृष्टा' इत्यस्मिन् वाक्ये कः कर्म कारकः?","options":["रामेण","सीताम्","दृष्टा","अपि न"],"answer":"सीताम्","subject":"lang1_skt"},
{"question":"'सिंहः वनम् आगतः' इत्यस्मिन् 'आगतः' क्रियापदस्य लिङ्गम् किम्?","options":["स्त्रीलिङ्ग","नपुंसकलिङ्ग","उदयति","पुल्लिङ्ग"],"answer":"पुल्लिङ्ग","subject":"lang1_skt"},
{"question":"'गच्छतु' इत्यस्य वाक्यस्य लकारः कः?","options":["लट्","लिट्","विधिलिङ्ग","विधिलकार"],"answer":"विधिलकार","subject":"lang1_skt"},
{"question":"'धर्मः फलदायी' इत्यस्मिन् 'फलदायी' विशेषणस्य अर्थः किम्?","options":["धीम","पुल्लिङ्ग","लाभदायक","दुष्ट"],"answer":"लाभदायक","subject":"lang1_skt"},
{"question":"'मित्रस्य पाठशालायाम् आगच्छाम' इत्यस्मिन् वाक्ये कारकः कः?","options":["कर्ता","कर्म","सम्बोधन","अपादान"],"answer":"अपादान","subject":"lang1_skt"},
{"question":"'अहं पाठशालां यामि' इत्यस्मिन् 'यामि' क्रियापदस्य पुरुषः कः?","options":["तृतीयः","प्रथमः","कर्ता","द्वितीयः"],"answer":"प्रथमः","subject":"lang1_skt"},

{"question":"മലയാളഭാഷയിലെ ആദ്യത്തെ വ്യാകരണഗ്രന്ഥം ഏതാണ്?","options":["ലീലാതിലകം","കേരളീയവ്യാകരണം","ശബ്ദതാരാവലി","ഭാഷാഭൂഷണം"],"answer":"ലീലാതിലകം","subject":"lang1_mal1"},
{"question":"‘ആധുനിക മലയാളത്തിന്റെ പിതാവ്’ എന്നറിയപ്പെടുന്നത് ആര്?","options":["തുഞ്ചത്ത് എഴുത്തച്ഛൻ","വള്ളത്തോൾ നാരായണമേനോൻ","എ.ആർ. രാജരാജവർമ്മ","കുമാരനാശാൻ"],"answer":"എ.ആർ. രാജരാജവർമ്മ","subject":"lang1_mal1"},
{"question":"‘കിളിപ്പാട്ട്’ എന്ന സാഹിത്യരൂപം പ്രചാരം നേടിയത് ആരിലൂടെ?","options":["കുമാരനാശാൻ","ഉള്ളൂർ","വള്ളത്തോൾ","തുഞ്ചത്ത് എഴുത്തച്ഛൻ"],"answer":"തുഞ്ചത്ത് എഴുത്തച്ഛൻ","subject":"lang1_mal1"},
{"question":"മലയാളത്തിലെ ആദ്യ നോവൽ ഏതാണ്?","options":["ഇന്ദുലേഖ","മാർത്താണ്ഡവർമ്മ","കുന്ദലത","രാമരാജബഹദൂർ"],"answer":"കുന്ദലത","subject":"lang1_mal1"},
{"question":"ഇന്ദുലേഖ’യുടെ കർത്താവ് ആര്?","options":["ഒ.ചന്തുമേനോൻ","സി.വി. രാമൻ പിള്ള","തകഴി ശിവശങ്കരപിള്ള","എസ്.കെ. പൊറ്റക്കാട്"],"answer":"ഒ.ചന്തുമേനോൻ","subject":"lang1_mal1"},
{"question":"‘വീരശൃംഖല’ എന്ന കാവ്യകൃതി രചിച്ചത് ആര്?","options":["കുമാരനാശാൻ","ഉള്ളൂർ","വള്ളത്തോൾ","ചങ്ങമ്പുഴ"],"answer":"വള്ളത്തോൾ","subject":"lang1_mal1"},
{"question":"‘അസുരവിത്ത്’ എന്ന നോവലിന്റെ കർത്താവ് ആര്?","options":["തകഴി","ബഷീർ","പൊൻകുന്നം വർക്കി","ലളിതാംബിക അന്തർജനം"],"answer":"ലളിതാംബിക അന്തർജനം","subject":"lang1_mal1"},
{"question":"വൈക്കം മുഹമ്മദ് ബഷീർ’ ഏത് സാഹിത്യശാഖയിൽ കൂടുതലായി അറിയപ്പെടുന്നു?","options":["കവിത","നാടകം","കഥ","നോവൽ"],"answer":"നോവൽ","subject":"lang1_mal1"},
{"question":"‘ചെമ്മീൻ’ എന്ന നോവലിന്റെ കർത്താവ് ആര്?","options":["എസ്.കെ. പൊറ്റക്കാട്","തകഴി ശിവശങ്കരപിള്ള","ബഷീർ","എം.ടി. വാസുദേവൻ നായർ"],"answer":"തകഴി ശിവശങ്കരപിള്ള","subject":"lang1_mal1"},
{"question":"‘മലയാളത്തിന്റെ മഹാകവി’ എന്ന് അറിയപ്പെടുന്നത് ആര്?","options":["തുഞ്ചത്ത് എഴുത്തച്ഛൻ","കുമാരനാശാൻ","വള്ളത്തോൾ","ഉള്ളൂർ"],"answer":"തുഞ്ചത്ത് എഴുത്തച്ഛൻ","subject":"lang1_mal1"},
{"question":"‘നളചരിതം ആട്ടക്കഥ’യുടെ കർത്താവ് ആര്?","options":["കുഞ്ചൻ നമ്പ്യാർ","മേൽപ്പത്തൂർ നാരായണ ഭട്ടതിരി","എഴുത്തച്ഛൻ","കൊട്ടാരത്തിൽ ശങ്കുണ്ണി"],"answer":"മേൽപ്പത്തൂർ നാരായണ ഭട്ടതിരി","subject":"lang1_mal1"},
{"question":"‘തുള്ളൽ’ എന്ന കലാരൂപത്തിന്റെ ഉപജ്ഞാതാവ് ആര്?","options":["എഴുത്തച്ഛൻ","കുഞ്ചൻ നമ്പ്യാർ","വള്ളത്തോൾ","ആശാൻ"],"answer":"കുഞ്ചൻ നമ്പ്യാർ","subject":"lang1_mal1"},{"question":"‘സാഹിത്യപഞ്ചകം’ എന്നറിയപ്പെടുന്നവയിൽ ഉൾപ്പെടാത്തത് ഏത്?","options":["കുമാരനാശാൻ","വള്ളത്തോൾ","ചങ്ങമ്പുഴ","ഉള്ളൂർ"],"answer":"ചങ്ങമ്പുഴ","subject":"lang1_mal1"},
{"question":"‘ഗുരുസാഗരം’ എന്ന കൃതിയുടെ കർത്താവ് ആര്?","options":["എം.ടി. വാസുദേവൻ നായർ","ഒ.വി. വിജയൻ","ബഷീർ","തകഴി"],"answer":"ഒ.വി. വിജയൻ","subject":"lang1_mal1"},
{"question":"‘കവിത’ എന്ന സാഹിത്യരൂപത്തിന്റെ പ്രധാന ലക്ഷണം ഏത്?","options":["സംഭവവിവരണം","ചരിത്രവിവരണം","വികാരപ്രകടനം","നിയമവിവരണം"],"answer":"വികാരപ്രകടനം","subject":"lang1_mal1"},

{"question":"“പകല്‍ പകലായിരിക്കുന്നു” വാചകത്തില്‍ പദത്തിന്റെ തരം ഏതാണ്?","options":["ക്രിയ","വിശേഷണം","നാമം","സന്ധി"],"answer":"വിശേഷണം","subject":"mal2"},
{"question":"“കിളി പറന്നു പോയി” വാചകത്തില്‍ കര്‍ത്താവ് ആര്?","options":["കിളി","പറന്നു","പോയി","പറന്നു പോയി"],"answer":"കിളി","subject":"mal2"},
{"question":"“കുട്ടികള്‍ ആട് കളിച്ചുകൊണ്ടിരുന്നു” വാചകത്തിലെ ക്രിയാവിശേഷണം ഏതാണ്?","options":["കളിച്ചുകൊണ്ടിരുന്നു","കളിച്ചു","കുട്ടികള്‍","ആട്"],"answer":"കളിച്ചുകൊണ്ടിരുന്നു","subject":"mal2"},
{"question":"“അവള്‍ പുസ്തകം വായിച്ചു” വാചകത്തില്‍ “പുസ്തകം” എതു?","options":["കര്‍മ്മം","കര്‍ത്താവ്","ക്രിയ","വിശേഷണം"],"answer":"കര്‍മ്മം","subject":"mal2"},
{"question":"“മഴ വന്നു” വാചകത്തില്‍ കാലം ഏത്?","options":["ഭൂതകാലം","വൃത്തകാലം","ലഹിതകാലം","ഭാവി"],"answer":"ഭൂതകാലം","subject":"mal2"},
{"question":"“സൂര്യന്‍ ഉദിച്ചു” വാചകത്തിലെ ക്രിയാപദം ഏത്?","options":["സൂര്യന്‍","ഉദിച്ചു","ഇവ രണ്ട‍ും","ഇവ രണ്ട‍ുമല്ല"],"answer":"ഉദിച്ചു","subject":"mal2"},
{"question":"“നന്ദനത്തിന്റെ പുസ്തകം പുതിയതാണ്” വാചകത്തില്‍ “പുതിയ” പദത്തിന്റെ തരം ഏത്?","options":["നാമം","വിശേഷണം","ക്രിയ","കര്‍ത്താവ്"],"answer":"വിശേഷണം","subject":"mal2"},
{"question":"അമ്മ' എന്ന പദത്തിന്റെ പര്യായപദം അല്ലാത്തത് ഏത്?","options":["ജനനി","പ്രസവിത്രി","തനയ","മാതാവ്"],"answer":"തനയ","subject":"mal2"},
{"question":"ചക്കരപ്പന്തലിൽ തേൻമഴ പെയ്തതുപോലെ' - ഈ ശൈലി കൊണ്ട് അർത്ഥമാക്കുന്നത് എന്ത്?","options":["വലിയ അപകടം","അപ്രതീക്ഷിതമായ സന്തോഷം","കഠിനമായ ദുഃഖം","വലിയ മഴ"],"answer":"അപ്രതീക്ഷിതമായ സന്തോഷം","subject":"mal2"},
{"question":"താഴെ പറയുന്നവയിൽ ശരിയായ പദം ഏത്?","options":["ആശിർവാദം","ആശീർവാദം","ആശിർവ്വാദം","ആശീർവ്വാദം"],"answer":"ആശീർവ്വാദം","subject":"mal2"},
{"question":"'കടക്കണ്ണാൽ നോക്കുക' എന്ന ശൈലിയുടെ അർത്ഥം?","options":["ദേഷ്യപ്പെടുക","പരിഹസിക്കുക","പ്രേമപൂർവ്വം നോക്കുക","സൂക്ഷിച്ചു നോക്കുക"],"answer":"പ്രേമപൂർവ്വം നോക്കുക","subject":"mal2"},
{"question":"പാവപ്പെട്ടവരുടെ പടത്തലവൻ' എന്ന് വിശേഷിപ്പിക്കപ്പെടുന്നത് ആര്?","options":["എ.കെ.ജി","ഇ.എം.എസ്","പട്ടം താണുപിള്ള","സി.എച്ച്. മുഹമ്മദ് കോയ"],"answer":"എ.കെ.ജി","subject":"mal2"},
{"question":"ഒരു പൈതൽ' - ഇതിലെ 'പൈതൽ' എന്ന വാക്കിന്റെ ലിംഗമേത്?","options":["സ്ത്രീലിംഗം","പുല്ലിംഗം","നപുംസകലിംഗം","ഉഭയലിംഗം"],"answer":"ഉഭയലിംഗം","subject":"mal2"},
{"question":"'കണ്ണടയ്ക്കുക' എന്ന ശൈലി കൊണ്ട് അർത്ഥമാക്കുന്നത്?","options":["ഉറങ്ങുക","മരിക്കുക","അവഗണിക്കുക","പേടിക്കുക"],"answer":"മരിക്കുക","subject":"mal2"},
{"question":"'പുകഴ്ത്തുക' എന്ന വാക്കിന്റെ വിപരീത പദം?","options":["തഴ്ത്തുക","ഇകഴ്ത്തുക","വെറുക്കുക","നന്ദികേട്"],"answer":"ഇകഴ്ത്തുക","subject":"mal2"},{"question":"'അണ്ണാൻ കുഞ്ഞും തന്നാലായത്' എന്ന പഴഞ്ചൊല്ലിന്റെ അർത്ഥം?","options":["വലിയ കാര്യങ്ങൾ ചെയ്യുക","അറിവില്ലായ്മ","കഴിവിനേക്കാൾ കൂടുതൽ ചെയ്യുക","ചെറിയ സഹായം പോലും വിലപ്പെട്ടതാണ്"],"answer":"ചെറിയ സഹായം പോലും വിലപ്പെട്ടതാണ്","subject":"mal2"},

{"question":"What is the sum of the first 20 natural numbers?","options":["190","210","400","420"],"answer":"210","subject":"maths"},
{"question":"A person buys a toy for 250 rupees and sells it for 300 rupees. What is the profit percentage?","options":["10%","15%","20%","25%"],"answer":"20%","subject":"maths"},
{"question":"What is the smallest 4-digit number that is a perfect square?","options":["1000","1024","1089","1225"],"answer":"1024","subject":"maths"},
{"question":"The average of five consecutive numbers is 15. Which is the largest number in this group?","options":["15","16","17","19"],"answer":"17","subject":"maths"},
{"question":"How many degrees does the minute hand of a clock turn in 20 minutes?","options":["60°","90° C","120°","180°"],"answer":"120°","subject":"maths"},
{"question":"The base of a triangle is 10 cm and its height is 6 cm. What is its area?","options":["60 sq.cm","15 sq.cm","45 sq.cm","30 sq.cm"],"answer":"30 sq.cm","subject":"maths"},
{"question":"What is the difference between the largest 3-digit number and the smallest 3-digit number?","options":["899","900","998","999"],"answer":"899","subject":"maths"},
{"question":"What is the HCF (Highest Common Factor) of 24 and 36?","options":["6","8","12","18"],"answer":"12","subject":"maths"},
{"question":"A cube has a side length of 4 cm. What is its volume?","options":["16 cubic cm","32 cubic cm","64 cubic cm","96 cubic cm"],"answer":"64 cubic cm","subject":"maths"},
{"question":"If a dozen pens cost 120 rupees, what is the cost of 5 pens?","options":["40 rupees","50 rupees","60 rupees","70 rupees"],"answer":"50 rupees","subject":"maths"},
{"question":"Which of the following is a factor of every number?","options":["0","1","2","4"],"answer":"1","subject":"maths"},
{"question":"If the area of a rectangle is 50 sq.cm and its length is 10 cm, what is its breadth?","options":["5 cm","10 cm","15 cm","40 cm"],"answer":"5 cm","subject":"maths"},
{"question":"What is the next number in the pattern: 1, 4, 9, 16, ...?","options":["20","24","25","36"],"answer":"25","subject":"maths"},
{"question":"Express 0.05 as a percentage.","options":["0.5%","5%","50%","0.05%"],"answer":"5%","subject":"maths"},{"question":"How many vertices does a triangle have?","options":["2","3","4","1"],"answer":"3","subject":"maths"},
{"question":"A car travels 120 km in 3 hours. What is its average speed?","options":["30 km/hr","40 km/hr","50 km/hr","60 km/hr"],"answer":"40 km/hr","subject":"maths"},
{"question":"What is the LCM of 4 and 6?","options":["2","10","12","24"],"answer":"12","subject":"maths"},
{"question":"What is the supplement of an angle of 70°?","options":["20°","30°","110°","180°"],"answer":"110°","subject":"maths"},
  
{"question":"Choose the correctly spelled word:","options":["Receive","Recieve","Riceive","Receeve"],"answer":"Receive","subject":"eng"},
{"question":"Which is the antonym (opposite) of the word 'Ancient'","options":["Old","Historic","Antique","Modern"],"answer":"Modern","subject":"eng"},
{"question":"Complete the sentence: \"The sun _______ in the east.\"","options":["rise","rises","rising","risen"],"answer":"rises","subject":"eng"},
{"question":"Find the collective noun for a group of lions:","options":["Pack","Herd","Pride","Flock"],"answer":"Pride","subject":"eng"},
{"question":"dentify the adjective in the sentence: \"The hungry fox saw the grapes.\"","options":["Fox","Grapes","Saw","Hungry"],"answer":"Hungry","subject":"eng"},
{"question":"Choose the correct article: \"He is _______ honest man.\"","options":["a","an","the","and"],"answer":"an","subject":"eng"},
{"question":"What is the past tense of the verb 'Eat'?","options":["Eaten","Eating","Ate","Eats"],"answer":"Ate","subject":"eng"},{"question":"Which word is a synonym for 'Huge'?","options":["Small","Tiny","Enormous","Weak"],"answer":"Enormous","subject":"eng"},{"question":"\"I have been waiting here _______ two hours.\" (Fill in the blank)","options":["since","from","at","for"],"answer":"for","subject":"eng"},
{"question":"Who is the author of the famous book 'The Jungle Book'?","options":["William Shakespeare","Rudyard Kipling","Enid Blyton","Robert Frost"],"answer":"Rudyard Kipling","subject":"eng"},
{"question":"Choose the correctly punctuated sentence:","options":["where are you going","Where are you going?","Where are you going!","where are you going?"],"answer":"Where are you going?","subject":"eng"},
{"question":"The young one of a sheep is called:","options":["Calf","Kid","Lamb","Cub"],"answer":"Lamb","subject":"eng"},{"question":"Which of these is a compound word?","options":["Teacher","Classroom","Slowly","Running"],"answer":"Classroom","subject":"eng"},
{"question":"Identify the silent letter in the word 'Knife':","options":["K","N","I","F"],"answer":"K","subject":"eng"},{"question":"Find the odd one out:","options":["Apple","Mango","Potato","Orange"],"answer":"Potato","subject":"eng"},
  
  
{"question":"Which part of the plant prepares food?","options":["Root","Stem","Leaf","Flower"],"answer":"Leaf","subject":"bs"},
{"question":"Which gas is essential for respiration in living organisms?","options":["Carbon dioxide","Nitrogen","Oxygen","Hydrogen"],"answer":"Oxygen","subject":"bs"},
{"question":"Which organ pumps blood throughout the human body?","options":["Brain","Lungs","Heart","Liver"],"answer":"Heart","subject":"bs"},
{"question":"Which of the following is a non-living thing?","options":["Tree","Dog","Stone","Bird"],"answer":"Stone","subject":"bs"},{"question":"Which vitamin is produced in our body when exposed to sunlight?","options":["Vitamin A","Vitamin B","Vitamin C","Vitamin D"],"answer":"Vitamin D","subject":"bs"},
{"question":"What is the change of water into water vapour called?","options":["Condensation","Evaporation","Freezing","Melting"],"answer":"Evaporation","subject":"bs"},
{"question":"Which sense organ helps us to hear sounds?","options":["Eye","Nose","Ear","Skin"],"answer":"Ear","subject":"bs"},{"question":"Which part of the body helps in breathing?","options":["Heart","Stomach","Kidney","Lungs"],"answer":"Lungs","subject":"bs"},
{"question":"Which of the following animals is a herbivore?","options":["Lion","Tiger","Cow","Fox"],"answer":"Cow","subject":"bs"},{"question":"What force pulls objects towards the Earth?","options":["Magnetic force","Frictional force","Gravitational force","Muscular force"],"answer":"Gravitational force","subject":"bs"},
{"question":"Which material is attracted by a magnet?","options":["Plastic","Wood","Iron","Glass"],"answer":"Iron","subject":"bs"},{"question":"Which organ helps plants to absorb water from soil?","options":["Leaf","Flower","Stem","Root"],"answer":"Root","subject":"bs"},
{"question":"Which gas is released during photosynthesis?","options":["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"],"answer":"Oxygen","subject":"bs"},
{"question":"Which of the following is a renewable resource?","options":["Coal","Petroleum","Natural gas","Wind"],"answer":"Wind","subject":"bs"},
  
  


{"question":"Which line divides the Earth into Northern and Southern Hemispheres?","options":["Tropic of Cancer","Tropic of Capricorn","Equator","Prime Meridian"],"answer":"Equator","subject":"ss"},
{"question":"Which is the smallest continent in the world?","options":["Europe","Australia","Antarctica","South America"],"answer":"Australia","subject":"ss"},
{"question":"The invention of the wheel belongs to which period?","options":["Paleolithic Age","Mesolithic Age","Iron Age","Neolithic Age"],"answer":"Neolithic Age","subject":"ss"},
{"question":"Which river is known as the ‘Sorrow of Bihar’?","options":["Son","Gandak","Kosi","Yamuna"],"answer":"Kosi","subject":"ss"},
{"question":"What is the main occupation of people living in coastal areas?","options":["Mining","Fishing","Forestry","Weaving"],"answer":"Fishing","subject":"ss"},
{"question":"Which latitude passes through the middle of India?","options":["Equator","Tropic of Cancer","Arctic Circle","Prime Meridian"],"answer":"Tropic of Cancer","subject":"ss"},
{"question":"The Harappa and Mohenjo-daro civilizations developed along which river?","options":["Ganga","Yamuna","Indus","Brahmaputra"],"answer":"Indus","subject":"ss"},
{"question":"Which type of rainfall is common in Kerala?","options":["Convectional rainfall","Cyclonic rainfall","Orographic rainfall","Acid rainfall"],"answer":"Orographic rainfall","subject":"ss"},
{"question":"Who is called the ‘Father of the Indian Constitution’?","options":["Jawaharlal Nehru","B. R. Ambedkar","Mahatma Gandhi","Rajendra Prasad"],"answer":"B. R. Ambedkar","subject":"ss"},
{"question":"Which soil is most suitable for growing cotton?","options":["Black soil","Alluvial soil","Laterite soil","Red soil"],"answer":"Black soil","subject":"ss"},
{"question":"What is the main function of the Legislature?","options":["To make laws","To conduct elections","To interpret laws","To enforce laws"],"answer":"To make laws","subject":"ss"},
{"question":"Which freedom movement was launched in 1942?","options":["Non-Cooperation Movement","Quit India Movement","Swadeshi Movement","Civil Disobedience Movement"],"answer":"Quit India Movement","subject":"ss"},
{"question":"Which renewable resource is obtained from flowing water?","options":["Hydroelectric power","Coal","Petroleum","Natural gas"],"answer":"Hydroelectric power","subject":"ss"},
{"question":"What does the scale on a map represent?","options":["Direction","Height","Area","Distance"],"answer":"Distance","subject":"ss"},
{"question":"Which level of government works at the village level in India?","options":["Central Government","State Government","Panchayati Raj","Judiciary"],"answer":"Panchayati Raj","subject":"ss"},

{"question":"Find the missing number in the series: 3, 9, 27, ?, 243","options":["54","72","81","162"],"answer":"81","subject":"mental"},
{"question":"If ✦ + ✦ + ✦ = 21 and ✦ − ● = 3, what is the value of ●?","options":["2","4","3","5"],"answer":"4","subject":"mental"},{"question":"Which number will replace the question mark? 8 : 64 :: 7 : ?","options":["48","56","42","49"],"answer":"49","subject":"mental"},
{"question":"A clock shows 3:20. What is the angle between the hour hand and minute hand?","options":["10°","20°","30°","40°"],"answer":"10°","subject":"mental"},
{"question":"Find the odd one out.","options":["169","144","196","121"],"answer":"121","subject":"mental"},
{"question":"If 5 workers can complete a work in 12 days, how many days will 10 workers take to complete the same work?","options":["4","6","8","5"],"answer":"6","subject":"mental"},
{"question":"Which number is missing in the pattern? 2, 6, 12, 20, ?","options":["30","36","28","32"],"answer":"28","subject":"mental"},
{"question":"If the perimeter of a square is 48 cm, what is its area?","options":["196 sqcm","256 sqcm","324 sqcm","144 sqcm"],"answer":"144 sqcm","subject":"mental"},
{"question":"A number when divided by 5 leaves remainder 3. What will be the remainder when the same number is divided by 10?","options":["3","5","8","Cannot be determined"],"answer":"Cannot be determined","subject":"mental"},
{"question":"Find the value of: (16 × 5) ÷ (4 × 2)","options":["10","5","8","20"],"answer":"10","subject":"mental"},
{"question":"If today is Tuesday, what day will it be after 100 days?","options":["Wednesday","Thursday","Friday","Saturday"],"answer":"Thursday","subject":"mental"},
{"question":"How many triangles are there in a square divided by both diagonals?","options":["4","6","8","10"],"answer":"8","subject":"mental"},{"question":"Which fraction is the largest?","options":["3/4","5/8","7/10","2/3"],"answer":"3/4","subject":"mental"},
{"question":"If the ratio of boys to girls in a class is 3:5 and the total students are 40, how many boys are there?","options":["12","18","24","15"],"answer":"15","subject":"mental"},
{"question":"A number is multiplied by 4 and then 6 is subtracted. The result is 26. What is the number?","options":["6","9","8","7"],"answer":"8","subject":"mental"},
  
{"question":"India is chairing which major international group in 2026, hosting its summit?","options":["G7","ASEAN","QUAD","BRICS"],"answer":"BRICS","subject":"current"},
{"question":"Which major global multi-sport event’s King's Baton Relay included a unique relay across continents ahead of 2026?","options":["Olympic Games","Commonwealth Games","Asian Games","Youth Olympics"],"answer":"Commonwealth Games","subject":"current"},
{"question":"Who won the 2025 Women’s Cricket World Cup?","options":["Australia","England","India","South Africa"],"answer":"India","subject":"current"},
{"question":"India and which partner finalized a landmark trade deal in January 2026?","options":["USA","EU","UK","China"],"answer":"EU","subject":"current"},
{"question":"What global systemic risk was highlighted by the Doomsday Clock movement in 2025–2026?","options":["Economic collapse","Space debris","Climate & geopolitical tensions","Global pandemic"],"answer":"Climate & geopolitical tensions","subject":"current"},
{"question":"The 2026 BWF World Championships in badminton are scheduled to be held in which Indian city?","options":["Mumbai","New Delhi","Bengaluru","Chennai"],"answer":"New Delhi","subject":"current"},
{"question":"What major climate-related crisis affected southern Africa in 2025 with extreme rainfall?","options":["Flooding","Cyclone","Drought","Earthquake"],"answer":"Flooding","subject":"current"},
{"question":"Which major UAE initiative in early 2026 will host multiple international summits across governance and trade?","options":["Expo 2030","Six International Summits","Global Trade Forum","World Economic Summit"],"answer":"Six International Summits","subject":"current"},
{"question":"India hosted the 2025 Women’s Cricket World Cup along with which other country?","options":["Sri Lanka","Bangladesh","Pakistan","New Zealand"],"answer":"Sri Lanka","subject":"current"},
{"question":"In 2026, which of these sectors saw diplomatic and export focus at Gulfood 2026 in Dubai?","options":["Textiles","Automobiles","Agriculture & Food","IT Services"],"answer":"Agriculture & Food","subject":"current"},
{"question":"The 2026 BRICS summit’s primary motto under India’s chairmanship includes which theme?","options":["Financial Liberalization","Resilience, Innovation & Sustainability","Military Alliance","Space Race"],"answer":"Resilience, Innovation & Sustainability","subject":"current"},
{"question":"Which sporting milestone marked India’s position in global aviation rankings in 2025?","options":["Best Airline Award","3rd in World’s Best Low-Cost Airlines","Most Flights Operated","Highest Passenger Growth"],"answer":"3rd in World’s Best Low-Cost Airlines","subject":"current"},
{"question":"India’s largest position in rice production and exports was highlighted at which event?","options":["G20 Summit","Bharat International Rice Conference","Food Expo","World Economic Forum"],"answer":"Bharat International Rice Conference","subject":"current"},
{"question":"What major renewable energy achievement was noted for India by the International Energy Agency?","options":["2nd highest increase in nuclear capacity","Top rank in solar exports","3rd highest increase in power generation capacity","Highest wind energy output"],"answer":"3rd highest increase in power generation capacity","subject":"current"},
{"question":"Which new major global climate pattern was tied to disastrous weather events in 2025?","options":["La Niña","La Niña","Indian Ocean Dipole","Madden–Julian Oscillation"],"answer":"La Niña","subject":"current"}
];

let user = null; let examQs = []; let myChart = null;
let examTimer = null; let timeLeft = 900; 

function checkPersistentLogin() {
const savedUser = localStorage.getItem('uss_user');
if(savedUser) {
user = JSON.parse(savedUser);
finalizeLogin();
}
}

function showLoading(txt) {
document.getElementById('loader-text').innerText = txt;
document.getElementById('loader-content').style.display = 'flex';
document.getElementById('status-content').style.display = 'none';
document.getElementById('msg-overlay').style.display = 'flex';
}

function showStatus(title, msg, type = 'success') {
document.getElementById('loader-content').style.display = 'none';
document.getElementById('status-content').style.display = 'block';
document.getElementById('status-icon').innerText = (type === 'success' ? "" : "");
document.getElementById('status-title').innerText = title;
document.getElementById('status-title').style.color = (type === 'success' ? "var(--success)" : "var(--error)");
document.getElementById('status-msg').innerText = msg;
}

function closeMsg() { document.getElementById('msg-overlay').style.display = 'none'; }

function handleLogin() {
showLoading("Syncing...");
const idInput = document.getElementById('uid').value.toUpperCase().trim();
const passInput = document.getElementById('ups').value.trim();
const keep = document.getElementById('keep-signed').checked;

user = students.find(s => s.id === idInput && s.pass === passInput);
if(user) {
if(keep) localStorage.setItem('uss_user', JSON.stringify(user));
finalizeLogin();
} else { showStatus("", "Invalid Credentials", ""); }
}

function finalizeLogin() {
  document.getElementById('sticky-header-container').style.display = 'block';
  document.getElementById('user-profile').style.display = 'flex';
  document.getElementById('display-name').innerText = user.name;
  document.getElementById('user-initial').innerText = user.name.charAt(0);
  document.getElementById('tab1').classList.remove('active');
  document.getElementById('navbar').style.display = 'flex';

  /* 🔐 ROLE-BASED NAV */
  if (user.role === 'teacher') {
    document.getElementById('admin-nav').style.display = 'block';
    document.getElementById('ins-nav').style.display = 'block';
  } else {
    document.getElementById('admin-nav').style.display = 'none';
    document.getElementById('ins-nav').style.display = 'none';
  }

  showTab('tab2');
  closeMsg();
}
  function hideNavForExam() {
  document.querySelectorAll('#navbar button').forEach(b => {
    b.style.display = 'none';
  });
  document.getElementById('nav-timer').style.display = 'block';
}

function restoreNavAfterExam() {
  document.getElementById('nav-tab2').style.display = 'inline-block';
  document.getElementById('nav-tab3').style.display = 'inline-block';

  if (user.role === 'teacher') {
    document.getElementById('admin-nav').style.display = 'inline-block';
    document.getElementById('ins-nav').style.display = 'inline-block';
  }

  document.getElementById('nav-timer').style.display = 'none';
}
  
function logout() {
localStorage.removeItem('uss_user');
location.reload();
}

function showTab(tid) {
document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
document.querySelectorAll('nav button').forEach(b => b.classList.remove('active-nav'));
document.getElementById(tid).classList.add('active');
if(document.getElementById('nav-'+tid)) document.getElementById('nav-'+tid).classList.add('active-nav');
if(tid === 'tab3') loadProgress();
if(tid === 'tab5') loadInspirations();
window.scrollTo({top: 0, behavior: 'smooth'});
}

function startExamWithTimer() {
  generateExam();
  document.getElementById('s-btn').style.display = 'block';

  timeLeft = 900;
  hideNavForExam();

  if (examTimer) clearInterval(examTimer);

  examTimer = setInterval(() => {
    timeLeft--;
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;
    document.getElementById('nav-timer').innerText =
      `${min}:${sec < 10 ? '0' : ''}${sec}`;

    if (timeLeft === 180) {
      document.getElementById('nav-timer').classList.add('timer-warn');
    }

    if (timeLeft <= 0) {
      clearInterval(examTimer);
      submitExam();
    }
  }, 1000);
}

function tryQuizAgain() {
  document.getElementById('exam-result-view').style.display = 'none';
  document.getElementById('exam-form').style.display = 'block';
  document.getElementById('lang-select').value = "";
  document.getElementById('quiz-load').innerHTML = "";
  document.getElementById('s-btn').style.display = 'none';

  restoreNavAfterExam();
  document.getElementById('nav-timer').classList.remove('timer-warn');
}

function generateExam() {
const lang = document.getElementById('lang-select').value;
const subs = [lang, 'mal2', 'maths', 'eng', 'bs', 'ss', 'mental', 'current'];
examQs = [];
subs.forEach(s => {
let pool = masterBank.filter(q => q.subject === s);
pool.sort(() => 0.5 - Math.random());
examQs.push(...pool.slice(0, 3));
});
renderExam();
}

function renderExam() {
let h = "";
examQs.forEach((q, i) => {

const isArabic = q.subject === "lang1_arb";
const rtlClass = isArabic ? "rtl-arabic" : "";

h += `
<div class="q-card ${rtlClass}">
<div style="font-size:0.7rem; color:var(--primary); font-weight:800; text-transform:uppercase;">
${q.subject}
</div>
<p class="${rtlClass}" style="font-weight:600; margin:10px 0;">
${i+1}. ${q.question}
</p>
`;

q.options.forEach((o, j) => {
h += `
<div class="${rtlClass}">
<input type="radio" id="q${i}_opt${j}" name="qz${i}" value="${o}">
<label for="q${i}_opt${j}" class="option-label ${rtlClass}">

${o}
</label>
</div>
`;
});

h += `</div>`;
});

document.getElementById('quiz-load').innerHTML = h || "Exam data missing...";
}

async function submitExam() {
  clearInterval(examTimer);
  restoreNavAfterExam();
  document.getElementById('nav-timer').classList.remove('timer-warn');
showLoading("Syncing...");
let sc = {lang1:0, mal2:0, maths:0, eng:0, bs:0, ss:0, mental:0, current:0};
let total = 0; let reviewHTML = "";

examQs.forEach((q, i) => {
const sel = document.querySelector(`input[name="qz${i}"]:checked`);
const uAns = sel ? sel.value.trim() : "None";
const correctAns = q.answer.trim();
const isCorrect = uAns === correctAns;

if(isCorrect) {
total++;
if(q.subject.startsWith('lang1_')) sc.lang1++; else sc[q.subject]++;
}
const userColor = (uAns === q.answer) ? 'var(--success)' : 'var(--error)';
const correctColor = 'var(--success)';

reviewHTML += `
<div style="padding:12px; margin-bottom:8px; background:#fff; border:1px solid #eee; border-radius:10px;">
  <p style="margin:0 0 5px 0; font-size:0.9rem;">
    <b>Q${i+1}.</b> ${q.question}
  </p>

  <p style="margin:2px 0; font-size:0.85rem;">
    Your Answer:
    <span style="color:${isCorrect ? 'var(--success)' : 'var(--error)'}; font-weight:700;">
      ${uAns}
    </span>
  </p>

  <p style="margin:2px 0; font-size:0.85rem;">
    Correct Answer:
    <span style="color:var(--success); font-weight:700;">
      ${correctAns}
    </span>
  </p>
</div>
`;

});

try {
const dStr = new Date().toLocaleDateString('en-GB');
const perc = (total/24)*100;
const grade = getGrade(perc);
const reviewObj = {
  date: dStr,
  total: total,
  grade: grade,
  scores: sc
};

// save to localStorage
let history = JSON.parse(localStorage.getItem("uss_reviews") || "[]");
history.push(reviewObj);
localStorage.setItem("uss_reviews", JSON.stringify(history));


await fetch(SCRIPT_URL, { method: "POST", body: JSON.stringify({
name: user.name, class: user.class, division: user.div, date: dStr, scores: sc, total: total
})});

document.getElementById('exam-form').style.display = 'none';
document.getElementById('exam-result-view').style.display = 'block';

document.getElementById('res-date').innerText = dStr;
document.getElementById('res-name').innerText = user.name;
document.getElementById('res-cl').innerText = user.class;
document.getElementById('res-dv').innerText = user.div;
document.getElementById('res-uid').innerText = user.id;
document.getElementById('res-lang1').innerText = document.getElementById('lang-select').value.split('_')[1].toUpperCase();
document.getElementById('res-total').innerText = total;
document.getElementById('res-grade-badge').innerText = grade;

let sumHTML = "";
for(let s in sc) { sumHTML += `<div style="background:white; padding:10px; border-radius:10px; border-bottom:3px solid var(--accent); text-align:center;"><div style="font-size:0.6rem; color:#888;">${s.toUpperCase()}</div><div style="font-weight:700;">${sc[s]}/3</div></div>`; }
document.getElementById('res-summary').innerHTML =
  renderPerformanceCard(reviewObj);

document.getElementById('res-review-list').innerHTML = reviewHTML;
closeMsg();
} catch(e) { showStatus("Error", "Check Connection", "error"); }
}

async function loadProgress() {
if(SCRIPT_URL === "YOUR_WEB_APP_URL") return;
showLoading("Syncing...");
try {
const res = await fetch(`${SCRIPT_URL}?name=${user.name}`);
const data = await res.json();

document.getElementById('summ-name').innerText = user.name;
document.getElementById('summ-class').innerText = user.class;
document.getElementById('summ-div').innerText = user.div;

if(data.length > 0) {
const values = data.map(r => r[13]);
const grandTotal = values.reduce((a, b) => a + b, 0);
const avg = (grandTotal / (data.length * 24)) * 100;

document.getElementById('summ-count').innerText = data.length;
document.getElementById('summ-grand').innerText = grandTotal;
document.getElementById('p-grade').innerText = getGrade(avg);

if(myChart) myChart.destroy();
myChart = new Chart(document.getElementById('chartArea'), {
type: 'line',
data: { labels: data.map(r => r[0]), datasets: [{ label: 'Score', data: values, borderColor: '#4361ee', tension: 0.4, fill: true, backgroundColor: 'rgba(67,97,238,0.1)' }] },
options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
});
}
  // Load all saved performance reviews
const reviewBox = document.getElementById("my-review-list");
const history = JSON.parse(localStorage.getItem("uss_reviews") || "[]");

if (history.length === 0) {
  reviewBox.innerHTML =
    "<p style='color:#666; font-size:0.9rem;'>No exams attempted yet.</p>";
} else {
  let h = "";
  for (let i = history.length - 1; i >= 0; i--) {
  h += renderPerformanceCard(history[i], i);
}
  reviewBox.innerHTML = h;
}

  
closeMsg();
} catch(e) { showStatus("Error", "Load Failed", "error"); }
}

function renderPerformanceCard(review, index = null) {
  let grid = "";
  for (let s in review.scores) {
    grid += `
      <div style="background:white; padding:8px; border-radius:10px;
                  border-bottom:3px solid var(--accent); text-align:center;">
        <div style="font-size:0.6rem; color:#888;">${s.toUpperCase()}</div>
        <div style="font-weight:700;">${review.scores[s]}/3</div>
      </div>
    `;
  }

  return `
    <div class="glass-card" style="margin-bottom:15px;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <b>Exam ${index !== null ? index + 1 : ""}</b>
        <span style="font-size:0.8rem; color:#666;">${review.date}</span>
      </div>

      <div style="margin:8px 0; font-size:0.9rem;">
        <b>Total:</b> ${review.total}/24 |
        <b>Grade:</b>
        <span style="color:var(--primary); font-weight:800;">
          ${review.grade}
        </span>
      </div>

      <div class="summary-grid">
        ${grid}
      </div>
    </div>
  `;
}


async function loadInspirations() {
if(SCRIPT_URL === "YOUR_WEB_APP_URL") return;
showLoading("Updating...");
const body = document.getElementById('ins-body');
try {
const res = await fetch(`${SCRIPT_URL}?type=allStudents`);
const data = await res.json();
const studentsMap = {};
data.forEach(row => {
const key = `${row[1]}-${row[2]}-${row[3]}`;
if(!studentsMap[key]) studentsMap[key] = { name: row[1], class: row[2], div: row[3], l1:0, m2:0, math:0, eng:0, bs:0, ss:0, ma:0, ca:0, total:0, exams:0 };
const s = studentsMap[key];
s.l1 += row[5]; s.m2 += row[6]; s.math += row[7]; s.eng += row[8];
s.bs += row[9]; s.ss += row[10]; s.ma += row[11]; s.ca += row[12];
s.total += row[13]; s.exams++;
});
let h = "";
Object.values(studentsMap).forEach(s => {
const perc = (s.total / (s.exams * 24)) * 100;
h += `<tr><td style="font-weight:700;">${s.name}</td><td>${s.class}</td><td>${s.div}</td><td>${s.l1}</td><td>${s.m2}</td><td>${s.math}</td><td>${s.eng}</td><td>${s.bs}</td><td>${s.ss}</td><td>${s.ma}</td><td>${s.ca}</td><td>${s.exams}</td><td style="color:var(--primary); font-weight:700;">${s.total}</td><td>${getGrade(perc)}</td></tr>`;
});
body.innerHTML = h; closeMsg();
} catch(e) { showStatus("Error", "Load Error", "error"); }
}

function getGrade(p) {
if(p >= 80) return "A"; if(p >= 60) return "B"; if(p >= 40) return "C";
if(p >= 30) return "D"; if(p >= 29) return "E"; return "E";
}

function sortTable(n) {
const table = document.getElementById("ins-table");
let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
switching = true; dir = "desc";
while (switching) {
switching = false; rows = table.rows;
for (i = 1; i < (rows.length - 1); i++) {
shouldSwitch = false;
x = rows[i].getElementsByTagName("TD")[n];
y = rows[i + 1].getElementsByTagName("TD")[n];
let xVal = isNaN(x.innerText) ? x.innerText.toLowerCase() : parseFloat(x.innerText);
let yVal = isNaN(y.innerText) ? y.innerText.toLowerCase() : parseFloat(y.innerText);
if (dir == "asc") { if (xVal > yVal) { shouldSwitch = true; break; } }
else { if (xVal < yVal) { shouldSwitch = true; break; } }
}
if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++; }
else { if (switchcount == 0 && dir == "desc") { dir = "asc"; switching = true; } }
}
}

function makeQ() {
    const qText = document.getElementById('qt').value;
    const opt1 = document.getElementById('o1').value;
    const opt2 = document.getElementById('o2').value;
    const opt3 = document.getElementById('o3').value;
    const opt4 = document.getElementById('o4').value;
    const qAns = document.getElementById('qa').value;
    const qSub = document.getElementById('qs').value;

    if(!qText || !opt1 || !qAns) {
        showStatus("Warning", "Please fill essential fields", "error");
        return;
    }

    const q = {
        question: qText,
        options: [opt1, opt2, opt3, opt4],
        answer: qAns,
        subject: qSub
    };

    const generatedCode = JSON.stringify(q) + ",";
    const textArea = document.getElementById('q-code');
    textArea.value += generatedCode;

    // Copy to clipboard
    navigator.clipboard.writeText(textArea.value).then(() => {
        // Clear fields
        document.getElementById('qt').value = "";
        document.getElementById('o1').value = "";
        document.getElementById('o2').value = "";
        document.getElementById('o3').value = "";
        document.getElementById('o4').value = "";
        document.getElementById('qa').value = "";
        
        // Success Message (Overlay style)
        showStatus("Success", "Code generated and copied to clipboard!");
    }).catch(err => {
        showStatus("Copy Error", "Failed to auto-copy code.", "error");
    });
}
</script>
