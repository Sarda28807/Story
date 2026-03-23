const storyHTMLData = `

                <!-- COVER PAGE -->
                <div class="page active" data-page="0">
                    <div class="cover-page">
                        <div class="cover-emblem">
                            <i data-lucide="book-open"></i>
                        </div>
                        <h2 class="cover-title">The Diary</h2>
                        <p class="cover-subtitle">of shadows untold</p>
                        <p class="cover-desc">
                            Some stories are not just read — they are felt. This is a tale where 
                            the warmth of love meets the cold whisper of the unknown. 
                            Enter if you dare...
                        </p>
                        <div class="cover-meta">
                            <div class="cover-meta-item">
                                <i data-lucide="feather"></i>
                                <span>Written with love</span>
                            </div>
                            <div class="cover-meta-item">
                                <i data-lucide="calendar"></i>
                                <span>December 2025</span>
                            </div>
                        </div>
                        <br>
                        <button class="cover-start-btn" onclick="nextPage()">
                            <span>Begin the Story</span>
                            <i data-lucide="arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- DAY 1 -->
                <div class="page hidden" data-page="1">
                    <div class="day-header">
                        <div class="day-date-badge">
                            <i data-lucide="calendar-days"></i>
                            <span>25 December 2025</span>
                        </div>
                        <h2 class="day-number">Day 1</h2>
                        <p class="day-tagline">When the night whispered her name...</p>
                        <div class="day-header-ornament">
                            <div class="orn-line"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-line"></div>
                        </div>
                    </div>

                    <div class="story-content">
                        <p>
                            <span class="first-letter">Y</span>eh kahani shuru hoti hai ek ladki ki 
                            zindagi se, jiska naam <span class="highlight">Nandini</span> hai — jo abhi 
                            11th mein padh rahi hai. Nandini ko ghumne ke saath 
                            <span class="highlight">Korean drama</span> dekhna bahut pasand hai. 
                            School mein woh kaafi achhi ladki hai — sabse pyaar se baat 
                            karne wali, hamesha muskurane wali. Yeh waqt hai 
                            <span class="highlight">25 December 2025</span> — Christmas ka din. Nandini 
                            apne cousins ke saath din mein ghumne aayi thi. Sab bahut masti kar rahe the, 
                            Christmas lights har jagah chamak rahi thi, aur Nandini ki hansi har pal 
                            mein ghulti ja rahi thi.
                        </p>

                        <p>
                            Raat mein dinner karne ke baad, jab sab sone lage, Nandini ka plan bana — 
                            <span class="creepy">Korean drama dekhne ka.</span> Woh apne kamre mein bed 
                            par baith gayi, bistar ka comforter upar tak kheench liya, aur phone ki 
                            dhimi roshni mein YouTube khola. Woh ek naya aur unique Korean drama dhundh rahi 
                            thi — kuch aisa jo pehle kabhi na dekha ho. Tab use mila — 
                            <span class="highlight">"Wifty"</span>. Naam sunkar thoda strange laga, par 
                            curiosity jeet gayi. Usne play button dabaya aur drama dekhna shuru kar diya.
                        </p>

                        <p>
                            Drama itna engaging tha ki Nandini ko pata hi nahi chala kab 
                            <span class="creepy">raat ke 3 baj gaye</span>. Ghar mein sannata tha — 
                            sirf uski phone ki dhimi roshni kamre mein tharti rahi thi. Tab achanak, 
                            Nandini ko chocolate khane ka mann kiya. Woh bed se uthi, kamre ka darwaza 
                            khola — bahar andhera tha. Hallway se guzarti hui woh kitchen ki taraf ja rahi 
                            thi, jab ek awaaz aayi — <span class="creepy">washroom se paani girne ki awaaz.</span>
                        </p>

                        <p>
                            "Tap shayad band nahi hua hoga," Nandini ne khud se kaha. Woh washroom gayi, 
                            <span class="creepy">tap band kiya</span> — par jab wapas mudi, toh usne 
                            mehsoos kiya ki hallway pehle se kahin zyada andhera ho gaya hai. Woh tezi se 
                            kamre mein wapas aayi aur darwaza band kar liya. Phone uthaya — drama abhi 
                            bhi chal raha tha. Par ab Nandini ka dil thoda tez dhadak raha tha. 
                            Usne chocolate ka khayal bhi bhula diya. Screen ki roshni mein, woh phir se 
                            drama mein kho gayi — par <span class="creepy">raat ki us awaaz ne uske zehen 
                            mein ek chhoti si darar daal di thi...</span>
                        </p>

                        <p>
                            Kuch der baad, jab woh phir se drama mein magan thi, achanak <span class="creepy">corridor se ek zor-daar awaaz aayi</span>. 
                            Is baar woh use ansuna nahi kar paayi. Himmat juta kar, Nandini dobara kamre se bahar nikli aur us awaaz ki taraf check karne gayi. 
                            Par udhar use <span class="highlight">kuch nahi mila</span>. Sirf ek veerani si khamoshi aur gahra andhera tha. 
                            Us ajeeb darr ke maare woh fauran apne kamre mein wapas aayi, darwaza lock kiya, aur 
                            apne bistar mein chup-chap <span class="creepy">sone ke liye let gayi...</span>
                        </p>
                    </div>

                    <!-- Reader Feedback -->
                    <div class="reader-feedback" data-page-id="day1">
                        <div class="feedback-header" ondblclick="unlockAdmin()">
                            <i data-lucide="message-circle"></i>
                            <h3 style="cursor: default; user-select: none;">Readers' Corner</h3>
                        </div>
                        <div class="feedback-name-gate">
                            <label>Enter your name to join the conversation</label>
                            <input type="text" class="feedback-name-input" placeholder="Your name..." maxlength="30">
                            <button class="feedback-enter-btn" onclick="enterFeedback(this)">Enter</button>
                        </div>
                        <div class="feedback-form">
                            <div class="feedback-user-badge"><i data-lucide="user"></i><span class="badge-name"></span></div>
                            <div class="feedback-tabs">
                                <button class="feedback-tab active" data-type="comment" onclick="switchTab(this)">Comment</button>
                                <button class="feedback-tab" data-type="suggestion" onclick="switchTab(this)">Suggest Change</button>
                            </div>
                            <textarea class="feedback-input-area" placeholder="Share your thoughts on this chapter..."></textarea>
                            <button class="feedback-submit-btn" onclick="submitFeedback(this)">Post</button>
                        </div>
                        <div class="feedback-list"></div>
                    </div>
                </div>

                <!-- DAY 2 -->
                <div class="page hidden" data-page="2">
                    <div class="day-header">
                        <div class="day-date-badge">
                            <i data-lucide="calendar-days"></i>
                            <span>26 December 2025</span>
                        </div>
                        <h2 class="day-number">Day 2</h2>
                        <p class="day-tagline">Footsteps in the dark...</p>
                        <div class="day-header-ornament">
                            <div class="orn-line"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-line"></div>
                        </div>
                    </div>

                    <div class="story-content">
                        <p>
                            <span class="first-letter">A</span>gle din subah ki kiran ke saath, lagbhag 8:30 baje, Nandini ne apni padhai beech mein hi chhod kar, dil mein dabi us raat ki gehri bechaini lekar, apni dost <span class="highlight">Shreya</span> ko call kiya. Usne pichli raat ki us tapakti awaaz aur corridor ki us dehshat ke baare mein sab kuch bataya. Par Shreya, hamesha ki tarah, zor se hans padi — "Oye, raat mein ganja vagaira phoonkna kab se shuru kar diya?" Nandini ne chidh kar "Chal, chal, chal" bola aur phone kaat diya. Par andar hi andar ek chubhti bechaini ab bhi baaki thi.
                        </p>

                        <p>
                            Raat dhali, thand badhne lagi. Us ajeeb ghatna ko zardasti dimag se nikalane ki koshish mein Nandini wapas apna drama dekhne baith gayi. Dekhte-dekhte raat ke <span class="creepy">2:30 baj gaye</span>. Poora ghar ek khouf-zaada khamoshi mein duba tha — itna shant ki uski apni saansein bhi shor lagti thi. Achanak, theek uske darwaze par... ek awaaz aayi — <span class="creepy">"Khat... Khat..."</span> Jaise koi jan-boojh kar, dheeme se, bilkul uske paas khada knock kar raha ho.
                        </p>

                        <p>
                            Nandini ke seene mein dil jaise atak gaya. Woh jhijhakti hui, kaanpte pairon ke saath bistar se uthi. Usne darwaza ek inch khol kar jhaanka toh bahar <span class="highlight">koi nahi tha</span>. Sirf ghup andhera aur ek silli, barfili hawa thi. Par jab uski nazar neeche floor par padi, toh uske pairon tale zameen khisak gayi — wahan tiles par <span class="creepy">kisi ke bare pairon ke geele nishaan</span> pade the, jo dheere-dheere dark corridor ki taraf ja rahe the — jaise koi abhi-abhi wahan khada use sun raha tha.
                        </p>

                        <p>
                            Theek usi waqt, Nandini ke haath mein pakde phone ki screen lit hui. Uski chhoti behen ka message tha: <i>"Bahar awaaz kaun kar raha hai?"</i> Nandini ka dil sehem gaya. Usne turant un dhundhle pairon ke nishaanon ki photos click ki aur behen ko bhej di. Par uski ragon mein khoon jam gaya jab usne sent folder mein un photos ko zoom karke dekha... <span class="creepy">unme pairon ke nishaan the hi nahi! Tiles bilkul saaf aur khali thi!</span>
                        </p>

                        <p>
                            Ghabra kar, aansuon ki awaaz dabaye, Nandini daudti hui apni chhoti behen ke room mein pahunchi. Darwaza dhakke se khola — par wahan blanket mein lipti padi woh <span class="highlight">gehri neend mein so rahi thi</span>, aur uska phone bed se kaafi door table par pada tha. Tabhi... Nandini ke haath mein apni screen par usi behen ke number se ek aur message blink hua: <i>"Peeche toh dekh..."</i> Khauf se kaanpte hue, Nandini bagair peeche mude seedhe pairon wapas bhaagi, darwaza lock kiya, aur <span class="creepy">aansu bahate hue saari raat deewar ki taraf mooh karke kaanpti rahi.</span>
                        </p>
                    </div>

                    <!-- Reader Feedback -->
                    <div class="reader-feedback" data-page-id="day2">
                        <div class="feedback-header" ondblclick="unlockAdmin()">
                            <i data-lucide="message-circle"></i>
                            <h3 style="cursor: default; user-select: none;">Readers' Corner</h3>
                        </div>
                        <div class="feedback-name-gate">
                            <label>Enter your name to join the conversation</label>
                            <input type="text" class="feedback-name-input" placeholder="Your name..." maxlength="30">
                            <button class="feedback-enter-btn" onclick="enterFeedback(this)">Enter</button>
                        </div>
                        <div class="feedback-form">
                            <div class="feedback-user-badge"><i data-lucide="user"></i><span class="badge-name"></span></div>
                            <div class="feedback-tabs">
                                <button class="feedback-tab active" data-type="comment" onclick="switchTab(this)">Comment</button>
                                <button class="feedback-tab" data-type="suggestion" onclick="switchTab(this)">Suggest Change</button>
                            </div>
                            <textarea class="feedback-input-area" placeholder="Share your thoughts on this chapter..."></textarea>
                            <button class="feedback-submit-btn" onclick="submitFeedback(this)">Post</button>
                        </div>
                        <div class="feedback-list"></div>
                    </div>
                </div>

                <!-- DAY 3 -->
                <div class="page hidden" data-page="3">
                    <div class="day-header">
                        <div class="day-date-badge">
                            <i data-lucide="calendar-days"></i>
                            <span>27 December 2025</span>
                        </div>
                        <h2 class="day-number">Day 3</h2>
                        <p class="day-tagline">Shadows in the dark...</p>
                        <div class="day-header-ornament">
                            <div class="orn-line"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-line"></div>
                        </div>
                    </div>

                    <div class="story-content">
                        <p>
                            <span class="first-letter">A</span>gle din subah jaldi uth kar, Nandini ne raat ke us dehshat bhare poore waqye ko bilakh-bilakh kar apni mummy ko bataya. Par dukh is baat ka tha ki <span class="highlight">kisi ne us par bharosa nahi kiya</span>. Apna sach sabit karne ke liye jab usne kaanpte haathon se phone nikal kar woh dark messages dhundhe, toh dekha ki chat bilkul khaali tha — <span class="creepy">woh saare messages screen se aise gayab the, jaise kisi andhere ne unhe nigal liya ho.</span>
                        </p>
                        
                        <p>
                            Mummy ne ulta use daantate hue kaha ki der raat tak ajeeb videos dekhegi toh aise hi bhayanak sapne aayenge. Dopehar mein mummy ne bataya ki unhe ek family function ke liye rishtedaar ke ghar jaana tha. Nandini ke <span class="highlight">board exams the</span>, isliye woh us akele band ghar mein ruk gayi — jahan ek-ek kone se darr uska intezaar kar raha tha.
                        </p>

                        <p>
                            Shaam ko depression aur anxiety se rahat paane ke liye woh bahar nikal gayi. Mummy ne kaha tha ki unhe function se wapas aane mein kaafi raat ho jayegi, isliye woh khud ka dinner le aaye. Jab woh khaana lekar, sunsaan aur kaali pad chuki colony sadak se wapas aa rahi thi — achanak uske aas-paas ka taapman gir gaya aur ek silli, cheekh-si hawa daud gayi. Use solid ehsaas hua jaise <span class="creepy">koi 6 foot lambi cheez, bilkul bina awaaz ke, kachhe raste se theek uske sar ke paas se guzri</span>. Ek ajeeb metallic smell hawa mein phail gayi thi. Ghabrahat mein usne gaadi poori speed mein chalaayi aur bhag kar seedhe gate ke andar ghus gayi.
                        </p>

                        <p>
                            Haafte hue, jaise hi usne kaali deewaron ke beech apna darwaza khola — <span class="creepy">chataak se ghar ki aakhiri bulb bhi phoot gayi aur achaanak power cut ho gaya</span>. Hairat ki baat yeh thi ki usne khidki se bahar paas wali road jhaanki... toh saare ghar roshni mein naha rahe the; sirf uske 2 floor ke ghar ko jaise kisi kaali chaadar ne dhaank rakha tha. Nandini ne himmat jutayi, phone ki flashlight on ki, aur basement mein deewar se sata kar fuse panel check karne ke liye neeche utri.
                        </p>

                        <p>
                            Basement ki seedhiyaan utarte waqt har awaaz, har saas goonj rahi thi. Jaise hi woh panel ke paas khadi hokar darr se fuse nikalane ki koshish kar rahi thi... uski nazar phone ki flickering flashlight se roshaan farsh par padi. Theek uske peeche — <span class="creepy">ek saat foot ka raakshas-aakar shadow ban raha tha... jiski silhouette mein saaf bade kaale pankhon ka dhaancha chamka tha!</span> Jhatke ke maare Nandini ghoom gayi — aur... <span class="highlight">wahan koi khada hi nahi tha</span>.
                        </p>

                        <p>
                            Cheekh na phute aisi awastha mein woh paagal-si upar seedhiyaan chadhi. Woh bas deewar se lag kar saansein bhar rahi thi... tabhi bahar se <span class="creepy">doorbell baji — 'Ting Tong!'</span> Saans atak gayi — 11 baj chuke the, baahr kaun hoga? Bell doosri baar, ek lambi, daabi hui cheekh ki tarah baji. Mummy toh aayi nahi... toh yeh kaun...? Wahan jakar peephole mein jhaankne ki bajay, woh darr-darr kar apne bistar mein ghus gayi. Kuch der baad awaazein khamoosh ho gayin. Aur raat badhti chali aayi — us akele kamre mein, use dabochne.
                        </p>
                    </div>

                    <!-- Reader Feedback -->
                    <div class="reader-feedback" data-page-id="day3">
                        <div class="feedback-header" ondblclick="unlockAdmin()">
                            <i data-lucide="message-circle"></i>
                            <h3 style="cursor: default; user-select: none;">Readers' Corner</h3>
                        </div>
                        <div class="feedback-name-gate">
                            <label>Enter your name to join the conversation</label>
                            <input type="text" class="feedback-name-input" placeholder="Your name..." maxlength="30">
                            <button class="feedback-enter-btn" onclick="enterFeedback(this)">Enter</button>
                        </div>
                        <div class="feedback-form">
                            <div class="feedback-user-badge"><i data-lucide="user"></i><span class="badge-name"></span></div>
                            <div class="feedback-tabs">
                                <button class="feedback-tab active" data-type="comment" onclick="switchTab(this)">Comment</button>
                                <button class="feedback-tab" data-type="suggestion" onclick="switchTab(this)">Suggest Change</button>
                            </div>
                            <textarea class="feedback-input-area" placeholder="Share your thoughts on this chapter..."></textarea>
                            <button class="feedback-submit-btn" onclick="submitFeedback(this)">Post</button>
                        </div>
                        <div class="feedback-list"></div>
                    </div>
                </div>

                <!-- DAY 4 -->
                <div class="page hidden" data-page="4">
                    <div class="day-header">
                        <div class="day-date-badge">
                            <i data-lucide="calendar-days"></i>
                            <span>28 December 2025</span>
                        </div>
                        <h2 class="day-number">Day 4</h2>
                        <p class="day-tagline">When nightmares wake up...</p>
                        <div class="day-header-ornament">
                            <div class="orn-line"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-line"></div>
                        </div>
                    </div>

                    <div class="story-content">
                        <p>
                            <span class="first-letter">R</span>aat ke theek <span class="creepy">2:30 baje</span>, jaise koi shaytaani clock trigger hui ho, Nandini ki kaanpti aankhein achanak poori khul gayin. Woh us isolated room mein andheron ki taraf sikud kar padi thi. Haafte hue usne phone screen uthaya — mummy ka 1:15 AM ka message tha ki toofaani baarish ho rahi hai aur ghar aate subah ho jaayegi. Maut jaisi khamoshi uske andar andhera bun rahi thi. Par tabhi... uske kamre ke lakdi ke darwaze ke theek us paar — ek bahut bhaari <span class="creepy">naakhunon se scratch karne ki awaaz aur heavy, ghuti hui mardaana saansein... bilkul bahar se feel huin</span>.
                        </p>

                        <p>
                            Nandini ka paseena chhootne laga, bina rooh ke pure darr se kaanpte usne darwaze ka latch ghumaaya. Hall mein ghor kaala andhera tha — <span class="highlight">koi nahi tha</span>. Magar ek pal mein, hall mein flicker karta bulb zoron se bhidka... aur tabhi — flashes mein usne jo dekha, uski rooh uske jism ko chhod gayi. Uski aankhon ke zarr-se upar, poori chhat ko dhaapta hua, <span class="creepy">ek massive 7-foot shadow fiend</span> khada tha — jiske shoulderon par behisaab broad, kaale pathhe-numaa paankh chipke the. Usne apni raakh-si aankhon se use thehraav mein ghoora, aur ek <span class="creepy">wicked, skin-crawling muskaan</span> dheere se uski taraf kheechi.
                        </p>

                        <p>
                            Uski cheekh gale mein hi atak gayi thi. Bas uska beqabu jism bahar bhaaga — darwaze todte hue seedha road ki taraf nikla... par bahar ka manzar duniya ka aakhir lag raha tha. Poori thand aur mrit aasmaan mein ek giant, glowing <span class="highlight">Blood Moon</span> us dark colony ke upar khoon baha raha tha! Achanak usne peeche palat kar dekha — woh entity sky-speed se theek uske peeche slide kar aaya tha.
                        </p>

                        <p>
                            Woh pure aansuon mein doob gayi thi jab entity ne zabaardasti ek huge, thanda haath hawa mein se use pakad liya — dabocha tha use — aur uske poore jism ke frame se lagaataar ghaav phaadte hue <span class="creepy">kaale rang ka khoon seedha farsh aur Nandini par tapak raha tha!</span> Dard itna gehri tha, itna real tha — ki uski aankhon ke aage ek ghup kaala parda khichta chala gaya. Koi awaaz nahi, koi cheekh nahi — bas ek maut jaisa khaali sannata... aur phir kuch bhi nahi.
                        </p>

                        <p>
                            <span class="highlight">29 December 2025 — subah ke 9:47 baje.</span> Mummy ki awaaz door se kaan mein ghus rahi thi — "Nandini! Nandini, uth!" Aankhein khulne se pehle hi naak mein dawa aur kapde ki boo aayi. Woh apne hi kamre mein thi, bistar par. Roshni aankhon ko chubh rahi thi. Mummy uske paas ghutne tek kar baith gayi thi, chehra darr se safed tha. "Beti, tune raat kahan bitaayi? Main subah aayi toh tu darwaze ke paas farsh par behosh padi thi..."
                        </p>

                        <p>
                            Nandini ne uthne ki koshish ki — aur ek taiz dard ne uska pura jism kheench liya. Usne apne haath dekhe... aur uski saas ruk gayi. Uski baahon aur kaandhe par gehri, kali neelee khuraachon ke nishaan the — jaise kisi bahut bade, bahut <span class="creepy">thande haath ne use kaskar pakda tha</span>. Kuch nishaan itne gehre the ki wahan skin phat gayi thi. Woh daag na kisi girane ke the, na kisi chot ke — woh ungliyon ke nishaan the. Baare, insaani nahi lagte, anjaan ungliyon ke nishaan.
                        </p>

                        <p>
                            Mummy chillaayi, phone uthaya, doctor ko call karne lagi. Par Nandini ki nazar seedhi khidki par tiki rahi — Blood Moon ab ja chuka tha. Aasmaan saaf neela tha, dhoop khili thi. Duniya normal thi. Par uske jism par woh nishaan real the — theek abhi bhi jal rahe the. Aur uske zehen mein baar baar wahi raakh jaisi aankhein, wahi <span class="creepy">skin-crawling muskaan</span> ghumti rahi — saath ek hi sawaal: <i>"Kya... yeh sach mein hua tha... ya kuch aane wala hai?"</i>
                        </p>
                    </div>

                    <!-- Reader Feedback -->
                    <div class="reader-feedback" data-page-id="day4">
                        <div class="feedback-header" ondblclick="unlockAdmin()">
                            <i data-lucide="message-circle"></i>
                            <h3 style="cursor: default; user-select: none;">Readers' Corner</h3>
                        </div>
                        <div class="feedback-name-gate">
                            <label>Enter your name to join the conversation</label>
                            <input type="text" class="feedback-name-input" placeholder="Your name..." maxlength="30">
                            <button class="feedback-enter-btn" onclick="enterFeedback(this)">Enter</button>
                        </div>
                        <div class="feedback-form">
                            <div class="feedback-user-badge"><i data-lucide="user"></i><span class="badge-name"></span></div>
                            <div class="feedback-tabs">
                                <button class="feedback-tab active" data-type="comment" onclick="switchTab(this)">Comment</button>
                                <button class="feedback-tab" data-type="suggestion" onclick="switchTab(this)">Suggest Change</button>
                            </div>
                            <textarea class="feedback-input-area" placeholder="Share your thoughts on this chapter..."></textarea>
                            <button class="feedback-submit-btn" onclick="submitFeedback(this)">Post</button>
                        </div>
                        <div class="feedback-list"></div>
                    </div>
                </div>

                <!-- DAY 5 -->
                <div class="page hidden" data-page="5">
                    <div class="day-header">
                        <div class="day-date-badge">
                            <i data-lucide="calendar-days"></i>
                            <span>29 December 2025</span>
                        </div>
                        <h2 class="day-number">Day 5</h2>
                        <p class="day-tagline">Some doors, once opened, cannot be closed...</p>
                        <div class="day-header-ornament">
                            <div class="orn-line"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-line"></div>
                        </div>
                    </div>

                    <div class="story-content">
                        <p>
                            <span class="first-letter">S</span>ubah ki roshni mein bhi woh ghar daba hua lagta tha. Doctor aa ke ja chuka tha. Dawaayein bed ke paas tiki thi. Mummy baar baar poohhti rahi — "Yeh nishaan kaise aaye? Kahan lagi chot?" — par Nandini ke paas koi jawab nahi tha jo koi sun sakta. Toh woh bas chup rahi, chhat ghoorti rahi, aur Nandini ke phone ki screen pe baar baar ek hi naam blink karta raha — <span class="highlight">Baibhav</span>. 7 missed calls.
                        </p>

                        <p>
                            Baibhav — usi colony mein rehne wala uska bachpan ka dost. Jo school ke pehle din se aaj tak, bina bole, bina pooche, har zaroori waqt mein aa khada hota tha. Nandini jaanti thi ki agar usne call uthaya toh woh rone lagegi — aur abhi woh afford nahi kar sakti thi. Chhoti behen Myra pehle se kaafi darri hui thi. Ghar ka maahaul pehle se hi bhaaraa tha.
                        </p>

                        <p>
                            Par Baibhav kabse kisi ke jawab ka intezaar karta tha. Dopehar ke 2:15 baje doorbell baji. Nandini ne khidki se neeche dekha — neeli jacket, haath mein ek polybag — wahi tha. Nandini ne darwaza khola. Baibhav ki nazar seedha uske kaandhe aur baahon ke un gehre kaale nishaanon par gayi — aur uske chehere par jo expression aaya, woh na gussa tha, na hainaani — woh ek dabi hui, andar se kaanpti chinta thi. "Yeh kya hai, Nandini?" Awaaz dheemi thi par andar kuch kharaash raha tha. Nandini ne door seedha khol diya.
                        </p>

                        <p>
                            Kitchen table par baithke, Nandini ne sab kuch bataya. Pehli raat se — 25 December se — ek-ek cheez. Tapakti awaaz. Geele pairon ke nishaan jo photos mein gayab ho gaye. Chhoti behen ke number se aaya woh message — "Peeche toh dekh." Basement ka 7-foot saaya. Doorbell. Blood Moon. Aur aakhir mein — <span class="creepy">woh thanda haath, woh ghaav, aur subah farsh par behoshi</span>. Bolte waqt uski awaaz kaanpi — par woh ruki nahi. Baibhav poori baat sunte waqt ek baar bhi nahi hansa, ek baar bhi nahi bola "zyada soch mat." Usne sirf suna. Poori baat sunne ke baad usne polybag se paracetamol ki strip aur thanda juice nikaala aur seedha Nandini ke saamne rakh diya. <span class="highlight">"Main maanta hoon tujhe,"</span> usne kaha. Bas itna. Aur itna kaafi tha.
                        </p>

                        <p>
                            Shaam ko karib 5 baje, Mummy ne Nandini ko bithaa ke baat ki. Nani ki tabiyat bahut kharaab thi — hospitalize karna pad sakta tha. Mummy majboor thi. "Baibhav ke paas rehne ko bol, main kal tak pakka wapas aa jaaungi." Nandini ne haan bol di. Mummy ka bag taiyaar hua, auto aaya, aur ghar ki door band hui. Nandini aur Myra wapas akeli reh gayin — usi ghar mein.
                        </p>

                        <p>
                            Raat utarne se pehle hi — theek 7 baje — Baibhav wapas aa gaya. Is baar haath mein ek purani, moti diary thi aur ek torch. "Maine thoda research kiya," usne andar aate hi kaha. Table par diary kholte hue usne ek panna Nandini ke saamne rakha. Haath se likha tha — <span class="creepy">'Chhaya Praani — A Shadow Entity.'</span> "Yeh tab manifest hota hai jab koi insaan lagaataar raat ko jaag ke apni neend aur reality ke beech ki line blur karta hai — tabhi yeh andar ghus sakta hai." Nandini ke zehen mein ek baar sab ghoom gaya — Korean drama... 3 baje... lagaataar teen raatein... <span class="highlight">Woh khud hi is cheez ke liye darwaaza khol ke baithi thi.</span>
                        </p>

                        <p>
                            Baibhav ne poora ghar check kiya — basement, corridor, washroom — har woh jagah jo Nandini ne bataayi thi. Myra bhi dono ke peeche torch pakde saath rahi. Basement mein, tiles ki ek darz mein ek kaala, chikna nishaan mila — na koyala, na keechar — kuch aur hi tha woh. Baibhav ne diary mein notes likhe aur bola ki yeh entity ka entry point ho sakta hai. Wapas upar aate waqt Nandini ne notice kiya ki Baibhav ne kabhi ek baar bhi peeche palat ke nahi dekha — woh seedha, bina rukke chalta raha. Jaise woh jaanta tha ki rukna galat hoga.
                        </p>

                        <p>
                            Raat ke 9:30 baje, Myra so gayi. Nandini aur Baibhav living room mein the — ek lamp jal raha tha, Baibhav diary mein kuch likh raha tha. Sab kuch thodi der ke liye normal lagaa. Phir achanak — basement ki taraf se ek dheemi, lambi kharaaach ki awaaz aayi. Dono ek saath ruk gaye. Lamp flicker hua. Kamre ka taapman ek pal mein gir gaya. Baibhav ne diary band ki, seedha Nandini ki taraf dekha — uski aankhon mein ek ajeeb, shant decision tha: <span class="highlight">"Aaj raat isse khatam karna padega."</span>
                        </p>

                        <p>
                            Aur tabhi — poore ghar ki roshni ek jhatke mein bujh gayi. Andhera itna ghup tha ki haath nahi dikha. Baibhav ne torch on ki aur beam seedha chhat par daali. Wahan — woh tha. Poori chhat par phailta, kaale dhuyen jaisa — woh <span class="creepy">massive shadow fiend</span> — raakh si aankhein seedha dono ko ghoor rahi thi. Woh jaana-pehchaana, skin-crawling muskaan — jaise in dono ka yahan hona use amusing lag raha tha. Nandini ke pair zameen par jad ho gaye. Baibhav ne diary ka ek panna tezi se kholaa — wahi panna jahan ek symbol tha — jaise woh pehle se taiyaar tha is pal ke liye. "Pehle se jaanta tha...?" Nandini ke dimag mein sawaal kaundhaa — par waqt nahi tha sochne ka. Entity ne ek lambi, zehreeli <i>hissssss</i> ki aur <span class="creepy">seedha unpar dive ki—</span>
                        </p>
                    </div>

                    <!-- Reader Feedback -->
                    <div class="reader-feedback" data-page-id="day5">
                        <div class="feedback-header" ondblclick="unlockAdmin()">
                            <i data-lucide="message-circle"></i>
                            <h3 style="cursor: default; user-select: none;">Readers' Corner</h3>
                        </div>
                        <div class="feedback-name-gate">
                            <label>Enter your name to join the conversation</label>
                            <input type="text" class="feedback-name-input" placeholder="Your name..." maxlength="30">
                            <button class="feedback-enter-btn" onclick="enterFeedback(this)">Enter</button>
                        </div>
                        <div class="feedback-form">
                            <div class="feedback-user-badge"><i data-lucide="user"></i><span class="badge-name"></span></div>
                            <div class="feedback-tabs">
                                <button class="feedback-tab active" data-type="comment" onclick="switchTab(this)">Comment</button>
                                <button class="feedback-tab" data-type="suggestion" onclick="switchTab(this)">Suggest Change</button>
                            </div>
                            <textarea class="feedback-input-area" placeholder="Share your thoughts on this chapter..."></textarea>
                            <button class="feedback-submit-btn" onclick="submitFeedback(this)">Post</button>
                        </div>
                        <div class="feedback-list"></div>
                    </div>
                </div>
                <!-- DAY 6 -->
<div class="page hidden" data-page="6">
    <div class="day-header">
        <div class="day-date-badge">
            <i data-lucide="calendar-days"></i>
            <span>30 December 2025</span>
        </div>
        <h2 class="day-number">Day 6</h2>
        <p class="day-tagline">Not everything can be killed. But everything can be fought.</p>
        <div class="day-header-ornament">
            <div class="orn-line"></div>
            <div class="orn-dot"></div>
            <div class="orn-dot"></div>
            <div class="orn-dot"></div>
            <div class="orn-line"></div>
        </div>
    </div>
 
    <div class="story-content">
        <p>
            <span class="first-letter">W</span>oh dive karta hua aaya — dono side mein kude. Sofa palat gaya, lamp toot gaya. Baibhav ne torch seedha entity par daali — roshni jab bhi usse touch karti, woh hiss karke ek second ke liye peeche khichta. Sirf ek second. Phir woh wapas aata. <span class="creepy">Bada. Faster. Zyada angry.</span> Nandini ne Myra ka darwaza speed mein lock kiya — woh safe thi. Abhi sirf yeh do the. Aur yeh cheez.
        </p>
 
        <p>
            Tab entity ne kuch aisa kiya jo unhe expect nahi tha — <span class="creepy">usne apni shape change ki.</span> Ek second mein woh 7-foot ka shadow tha, agla second mein woh bilkul <span class="highlight">Baibhav</span> ki tarah dikhne laga. Same height, same jacket, same face. Do Baibhav. Ek real, ek entity. Nandini ki torch haath mein ruk gayi. Tab usne notice kiya — real Baibhav ki jacket ki left sleeve par ek purani torn pocket thi. Entity wali copy mein woh smooth tha. <span class="highlight">Bahut perfect.</span> Nandini ne beam seedha entity ki aankhon par maari — woh wapas apni original form mein aa gaya. Gussa tha.
        </p>
 
        <p>
            "Tune kaha tha yeh Chhaya Praani hai," Nandini ne kaha. "Chhaya Praani copy nahi karta. Yeh kuch aur hai." Baibhav ruka — aur tab, <span class="creepy">bina kisi ke haath ke, diary ke pages khud palte huye khul gaye.</span> Ek chipke hue, kabhi na khule panne par ruk gaye. Bade letters mein likha tha — <span class="creepy"><b>VIKRAAL.</b></span> Neeche alag handwriting mein: <i>"Yeh Chhaya Praani nahi — yeh Vikraal hai. Iska koi fixed form nahi. Yeh doosri entities ki copy karke attack karta hai taaki tum hamesha galat enemy se larte raho."</i> Baibhav ka chehra white ho gaya. Yeh handwriting uski nahi thi. <span class="highlight">"Yeh Deepak bhaiya ki writing hai,"</span> woh bola — awaaz ek baar thoosi. "Do saal pehle woh ek raat suddenly chale gaye. 19 saal ke the. Yeh diary unki thi. Tabse main research kar raha hoon."
        </p>
 
        <p>
            Nandini ne pages scroll kiye — notes, sketches, entity ke forms — par ek cheez kahin nahi thi. <span class="creepy">Koi solution nahi.</span> Sirf ek line thi — <i>"Rasta wahan hai jahan yeh nahi pohuunch sakta."</i> Dono ek second ruke — phir ek hi waqt mein dono ko samajh aaya. Deepak akele the. <span class="highlight">Yeh dono nahi the.</span> Entity roshni se slow hota tha, real naam se freeze hota tha — do second ki window. Bas itni. Nandini page ready pakde, Baibhav torch. Teen. Do. Ek — <span class="highlight">page seedha entity ke saamne.</span> Woh freeze hua. Beam blast hui. Entity ne ek toota hua, ganda sound nikala — <span class="creepy">aur kaale dhuyen mein dissolve ho gaya.</span> Colony ekdam normal thi. Koi nahi jaaga. Jaise kuch hua hi nahi.
        </p>
 
        <p>
            Dono ki saansein tez thi. Lights sab on thi. Ghar normal tha. <span class="highlight">"Khatam ho gaya,"</span> Baibhav ne kaha — aur genuinely lag bhi raha tha. Diary table par rakh di. Nandini ne ek lambi saans li.
        </p>
 
        <p>
            Par tab — table par rakhi diary <span class="creepy">khud-ba-khud phir se khul gayi.</span> Ek bilkul blank page par. Letters slowly, ek ek karke, andar se upar aane lage — <span class="creepy">jaise koi liquid andar se skin ke through push kar raha ho:</span>
        </p>
 
        <p>
            <span class="creepy"><i>"Tum dono ne jo destroy kiya... woh main nahi tha."</i></span>
        </p>
 
        <p>
            <span class="highlight">Aur poore ghar ki lights ek baar phir bujh gayin.</span>
        </p>
    </div>

    <!-- Reader Feedback -->
    <div class="reader-feedback" data-page-id="day6">
        <div class="feedback-header">
            <i data-lucide="message-circle"></i>
            <h3>Readers' Corner</h3>
        </div>
        <div class="feedback-name-gate">
            <label>Enter your name to join the conversation</label>
            <input type="text" class="feedback-name-input" placeholder="Your name..." maxlength="30">
            <button class="feedback-enter-btn" onclick="enterFeedback(this)">Enter</button>
        </div>
        <div class="feedback-form">
            <div class="feedback-user-badge"><i data-lucide="user"></i><span class="badge-name"></span></div>
            <div class="feedback-tabs">
                <button class="feedback-tab active" data-type="comment" onclick="switchTab(this)">Comment</button>
                <button class="feedback-tab" data-type="suggestion" onclick="switchTab(this)">Suggest Change</button>
            </div>
            <textarea class="feedback-input-area" placeholder="Share your thoughts on this chapter..."></textarea>
            <button class="feedback-submit-btn" onclick="submitFeedback(this)">Post</button>
        </div>
        <div class="feedback-list"></div>
    </div>
</div>

                <!-- DAY 7 -->
                <div class="page hidden" data-page="7">
                    <div class="day-header">
                        <div class="day-date-badge">
                            <i data-lucide="calendar-days"></i>
                            <span>31 December 2025</span>
                        </div>
                        <h2 class="day-number">Day 7</h2>
                        <p class="day-tagline">Some wounds were never yours to carry alone...</p>
                        <div class="day-header-ornament">
                            <div class="orn-line"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-line"></div>
                        </div>
                    </div>

                    <div class="story-content">
                        <p>
                            <span class="first-letter">G</span>har mein sannata tha. Dono wall se lag ke farsh par baithe the — thake, kaanpte, par zinda. Baibhav ke haath ka khoon sukh chuka tha. Bahar raat abhi bhi thick thi. Kuch der ki khamoshi ke baad Nandini ne poochha — woh sawaal jo woh kai ghanton se rok rahi thi. "Deepak bhaiya... kya hua tha unke saath? Exactly." Baibhav ne ek lambi saans li. Aur is baar usne bataya.
                        </p>
                        
                        <p>
                            "Woh bhi exactly aise hi shuru hua tha. Raat ko awaazein, shadows, messages. Bhaiya ne mujhe kuch nahi bataya — woh akele carry karte rahe. Ek raat main unke kamre gaya toh darwaza andar se lock tha. Maine knock kiya — koi jawab nahi. Jab darwaza toda toh woh — " Baibhav ruka. Ek second. "Woh farsh par the. Koi mark nahi, koi reason nahi. Doctor log kehte rahe cardiac arrest. Main jaanta tha woh kya tha." Uski awaaz flat thi — woh flat hone ki koshish kar raha tha. Par Nandini ne dekha ki uske haath ki grip diary par kitni tight thi. "Tabse main dhoondh raha tha ki isko kaise khatam kiya jaaye. Isliye aaya tha tere paas. Yeh mera bhi revenge tha."
                        </p>
                        
                        <p>
                            Nandini kuch bolne wali thi — tab diary khud palti. Tez. Pages ek ke baad ek flip hote rahe — jaise koi bahut angry ho — aur ek bilkul blank page par ruk gaye. Koi writing nahi thi. Phir, dheere dheere, letters andar se upar aane lage — dark, thick, jaise koi unhe andar se kharoch raha ho:
                        </p>
                        
                        <p>
                            <span class="creepy" style="font-size: 1.5rem; letter-spacing: 5px; text-align: center; display: block; margin: 20px 0;">R — A — K — A — A — N</span>
                        </p>
                        
                        <p>
                            Aur tab woh aaya. Is baar woh shadow nahi tha. Solid tha. Physical tha. <span class="highlight">8 foot</span>. Deep charcoal grey — jaise kisi ne insaani shape ko heavy dark stone se toda ho. Raakh si aankhein — par ab unme kuch aur tha. Intelligence. Aur amusement. Woh seedha Baibhav ke saamne aaya aur pehli baar usne awaaz nikali — gehra, vibrate karta, real. <span class="creepy">"Itne saalon mein pehli baar tum dono ne itna achha khela. Deepak bhi itna hi achha khela tha."</span> Ek pause. Phir ek slow, evil laugh. <span class="creepy">"Woh bhi isi farsh par tha jab main gaya tha."</span>
                        </p>
                        
                        <p>
                            Baibhav ka poora jism stiff ho gaya. <span class="highlight">RAKAAN</span> ne yeh intentionally kaha tha — provoke karna chahta tha. Toh usne exactly wahi kiya — ek solid push — Baibhav ek side mein gaya, Nandini doosri taraf corridor mein. Darwaza beech mein band ho gaya. Dono alag the.
                        </p>
                        
                        <p>
                            Corridor mein Nandini ke peeche RAKAAN ki heavy footsteps thi. Woh bhaagti rahi — woh har taraf tha. Solid hone ki wajah se ab woh physically walls tod sakta tha. Living room mein Baibhav diary ke pages palat raha tha — tab RAKAAN ne seedha diary par haath maara. Pages jalte gaye — Deepak ke saare notes, saari research — sab kuch. Woh apna naam us diary se mitana chahta tha. Baibhav ne sirf ek cheez pakad li — adha jala hua woh panna — jisme abhi bhi <span class="highlight">RAKAAN</span> readable tha. Naam hi weapon hai — Deepak bhaiya ne yeh baar baar underline kiya tha. Par naam lene ke baad karna kya hai — woh abhi tak nahi jaanta tha.
                        </p>
                        
                        <p>
                            RAKAAN ne living room mein wapas entry ki — aur ek powerful strike mein Baibhav seedha floor par aa gaya. <span class="creepy">Hard.</span> Sar deewar se laga. Aankhein band huyin — aur bahar se Nandini ki awaaz aa rahi thi, uska naam le rahi thi — baar baar — darwaza peet ke.
                        </p>
                    </div>

                    <!-- Reader Feedback -->
                    <div class="reader-feedback" data-page-id="day7">
                        <div class="feedback-header" ondblclick="unlockAdmin()">
                            <i data-lucide="message-circle"></i>
                            <h3 style="cursor: default; user-select: none;">Readers' Corner</h3>
                        </div>
                        <div class="feedback-name-gate">
                            <label>Enter your name to join the conversation</label>
                            <input type="text" class="feedback-name-input" placeholder="Your name..." maxlength="30">
                            <button class="feedback-enter-btn" onclick="enterFeedback(this)">Enter</button>
                        </div>
                        <div class="feedback-form">
                            <div class="feedback-user-badge"><i data-lucide="user"></i><span class="badge-name"></span></div>
                            <div class="feedback-tabs">
                                <button class="feedback-tab active" data-type="comment" onclick="switchTab(this)">Comment</button>
                                <button class="feedback-tab" data-type="suggestion" onclick="switchTab(this)">Suggest Change</button>
                            </div>
                            <textarea class="feedback-input-area" placeholder="Share your thoughts on this chapter..."></textarea>
                            <button class="feedback-submit-btn" onclick="submitFeedback(this)">Post</button>
                        </div>
                        <div class="feedback-list"></div>
                    </div>
                </div>

                <!-- DAY 8 -->
                <div class="page hidden" data-page="8">
                    <div class="day-header">
                        <div class="day-date-badge">
                            <i data-lucide="calendar-days"></i>
                            <span>31 December 2025 — Late Night</span>
                        </div>
                        <h2 class="day-number">Day 8</h2>
                        <p class="day-tagline">Every darkness ends. Every story finds its morning.</p>
                        <div class="day-header-ornament">
                            <div class="orn-line"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-dot"></div>
                            <div class="orn-line"></div>
                        </div>
                    </div>

                    <div class="story-content">
                        <p>
                            <span class="first-letter">A</span>ankhein band thin — aur Baibhav ek khaali jagah mein tha. Na ghar, na raat. Bas ek familiar corridor — aur door ke paas Deepak bhaiya khade the. Same face. Same smile jo photos mein tha. "Tune sab kuch try kiya. Mujhse zyada kiya." "Main isse maar nahi pa raha hoon, bhai." "Maarna nahi hai. Rokna hai. Yeh entity solid form mein apne aas-paas ke darkness se energy leti hai. Roshni temporary hoti hai. Par agar us darkness ko ek closed circle mein — aag se seal kar do — toh yeh andar hi andar khatam ho jaayegi. Apni hi energy se." Ek pause. Phir — "Tera waqt nahi aaya. Jaao. Usse bachao."
                        </p>
                        
                        <p>
                            Baibhav ki aankhein khuli. Sar se khoon aa raha tha. Bahar Nandini ki awaaz itni desperate thi, itni broken thi — ki woh ek second bhi nahi ruka. Darwaza toda. Andar gaya.
                        </p>
                        
                        <p>
                            <span class="highlight">RAKAAN</span> Nandini ke bilkul upar tha — solid haath utha chuka tha. Baibhav ne poori taaqat se chillaya — <span class="creepy">"RAKAAN!"</span> Entity ek split second ke liye freeze hua — apna control khoya. Woh ek second kaafi tha. Baibhav ne kitchen se jo mila — tray, table cloth, lighter — uthaya aur entity ke charon taraf ek circle mein rakh ke aag laga di. RAKAAN ne realize kiya — par bahut der ho chuki thi. Woh circle ke andar tha.
                        </p>
                        
                        <p>
                            Woh chillaya. Solid form flicker karne laga — aankhein jo hamesha confident thi, un mein pehli baar darr tha. Woh circle todne ki koshish karta raha — par <span class="highlight">aag real thi, circle seal tha</span>, aur entity ki apni dark energy uske against ho gayi. Dheere dheere woh chota hone laga. Aur chota. Ek lambi, final hiss — aur woh gaya. Sirf raakh. Jo ek second mein hawa mein ghul gayi.
                        </p>
                        
                        <p>
                            Bahar aasmaan ki kaali neend dheere dheere tooti. <span class="highlight">31 December ki subah.</span> Pehli dhoop khidki se andar aayi — peeli, warm, real. Myra safe thi. Colony shant thi. Duniya ko kuch pata nahi tha.
                        </p>
                        
                        <p>
                            Nandini seedha Baibhav ke paas gayi aur usse kaskar hug kar liya — woh kaanp rahi thi ya woh, dono ko pata nahi tha. Kuch der baad Nandini ne kaha — halki, bina kisi drama ke — "Jab tu gir gaya tha... main bahut darr gayi thi. Main nahi chahti thi ki tu—" Uski awaaz ruki. Baibhav ne kuch nahi kaha. Par usne wapas hug kiya. Aur woh jawab kaafi tha.
                        </p>
                        
                        <p>
                            Shaam ko colony mein New Year ke patakhe shuru ho gaye. Mummy wapas aa gayi thi. Myra chhatt par daud gayi. Chai bani. Baibhav bhi tha — sofa par, haath pe bandage, ek genuinely halka chehra. Raat ke theek 12 baje — jab shor tha, patakhe the, hasi thi — Baibhav chhatt ki railing se aasmaan dekh raha tha. Nandini uske paas aayi. Dono kuch nahi bole. Kahin door ek tara thoda zyada chamka — ya shayad Nandini ka dil sochna chahta tha ki woh Deepak bhaiya the. Baibhav dheere se muskuraya — woh wali muskaan jo pure mahine mein pehli baar real lagti thi.
                        </p>
                        
                        <p>
                            <span class="highlight">"Happy New Year, Nandini."</span>
                        </p>
                        
                        <p>
                            Aur is baar — usne seedha naam liya.
                        </p>
                    </div>

                    <!-- Reader Feedback -->
                    <div class="reader-feedback" data-page-id="day8">
                        <div class="feedback-header" ondblclick="unlockAdmin()">
                            <i data-lucide="message-circle"></i>
                            <h3 style="cursor: default; user-select: none;">Readers' Corner</h3>
                        </div>
                        <div class="feedback-name-gate">
                            <label>Enter your name to join the conversation</label>
                            <input type="text" class="feedback-name-input" placeholder="Your name..." maxlength="30">
                            <button class="feedback-enter-btn" onclick="enterFeedback(this)">Enter</button>
                        </div>
                        <div class="feedback-form">
                            <div class="feedback-user-badge"><i data-lucide="user"></i><span class="badge-name"></span></div>
                            <div class="feedback-tabs">
                                <button class="feedback-tab active" data-type="comment" onclick="switchTab(this)">Comment</button>
                                <button class="feedback-tab" data-type="suggestion" onclick="switchTab(this)">Suggest Change</button>
                            </div>
                            <textarea class="feedback-input-area" placeholder="Share your thoughts on this chapter..."></textarea>
                            <button class="feedback-submit-btn" onclick="submitFeedback(this)">Post</button>
                        </div>
                        <div class="feedback-list"></div>
                    </div>
                </div>

                <!-- THE END PAGE -->
                <div class="page hidden" data-page="9">
                    <div class="continued-page">
                        <div class="continued-icon">
                            <i data-lucide="sun"></i>
                        </div>
                        <h2 class="continued-title">The End</h2>
                        <p class="continued-text">Thank you for reading.</p>
                        <p style="font-family: 'Cormorant Garamond', serif; color: var(--text-secondary); font-style: italic; font-size: 1rem; max-width: 400px; line-height: 1.8;">
                            Sometimes the greatest monsters we face aren't just in the darkness; they are shadows formed by grief, fear, and untold secrets. But as long as there is love, loyalty, and someone who remembers your true name, no darkness can last forever. 
                            <br><br>
                            This concludes Nandini's story. May your own nights be filled with stars, not shadows.
                        </p>
                        <div class="continued-dots" style="margin-top: 25px;">
                            <span></span>
                            <i data-lucide="heart" style="width: 16px; height: 16px; color: var(--rose-gold); margin: 0 10px;"></i>
                            <span></span>
                        </div>
                    </div>
                </div>


`;