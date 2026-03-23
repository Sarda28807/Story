document.getElementById('book').innerHTML = storyHTMLData;

// ── Initialize Firebase ──
        const firebaseConfig = {
            apiKey: "AIzaSyDRULr3y_r7cCzvaf8KhnxqElLz8AthdYc",
            authDomain: "story-b76af.firebaseapp.com",
            projectId: "story-b76af",
            storageBucket: "story-b76af.firebasestorage.app",
            messagingSenderId: "900910456848",
            appId: "1:900910456848:web:738e6df8289c59b9e4aa95",
            measurementId: "G-CYMJJ5CK09"
        };
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();

        // ── Initialize Lucide Icons ──
        lucide.createIcons();

        // ── Page Management ──
        let currentPage = 0;
        const pages = document.querySelectorAll('.page');
        const totalPages = pages.length;
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const book = document.getElementById('book');

        // Build page indicators
        const indicatorContainer = document.getElementById('pageIndicator');
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('div');
            dot.className = 'indicator-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToPage(i));
            indicatorContainer.appendChild(dot);
        }

        function updateIndicators() {
            document.querySelectorAll('.indicator-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentPage);
            });
        }

        function updateButtons() {
            prevBtn.disabled = currentPage === 0;
            nextBtn.disabled = currentPage === totalPages - 1;
        }

        function goToPage(target) {
            if (target === currentPage || target < 0 || target >= totalPages) return;

            book.classList.add('page-turning');

            pages.forEach((page, i) => {
                page.classList.remove('active', 'turned', 'hidden');
                if (i < target) {
                    page.classList.add('turned');
                } else if (i === target) {
                    page.classList.add('active');
                } else {
                    page.classList.add('hidden');
                }
            });

            currentPage = target;
            updateIndicators();
            updateButtons();

            setTimeout(() => {
                book.classList.remove('page-turning');
            }, 800);
        }

        function nextPage() {
            if (currentPage < totalPages - 1) {
                goToPage(currentPage + 1);
            }
        }

        function prevPage() {
            if (currentPage > 0) {
                goToPage(currentPage - 1);
            }
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            const tag = document.activeElement.tagName.toLowerCase();
            if (tag === 'input' || tag === 'textarea' || tag === 'button') return;
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                nextPage();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevPage();
            }
        });

        // ── Ghost Particles ──
        const isMobile = window.innerWidth <= 768;

        function createParticle() {
            // Cap particle generation on mobile
            if (isMobile && document.querySelectorAll('.ghost-particle').length > 10) return;

            const container = document.getElementById('particlesContainer');
            const particle = document.createElement('div');
            particle.classList.add('ghost-particle');

            const types = ['type-orb', 'type-ember', 'type-mist'];
            // Don't spawn heavy mist particles on mobile
            const availableTypes = isMobile ? ['type-orb', 'type-ember'] : types;
            particle.classList.add(availableTypes[Math.floor(Math.random() * availableTypes.length)]);

            const size = Math.random() * 20 + 6;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.bottom = '-20px';

            const drift = (Math.random() - 0.5) * 200;
            particle.style.setProperty('--drift', drift + 'px');

            const duration = Math.random() * 10 + 8;
            particle.style.animationDuration = duration + 's';
            particle.style.animationDelay = Math.random() * 3 + 's';

            container.appendChild(particle);

            setTimeout(() => {
                if (particle && particle.parentNode) particle.remove();
            }, (duration + 3) * 1000);
        }

        // Create particles periodically (slower on mobile)
        setInterval(createParticle, isMobile ? 2500 : 800);

        // Create initial batch
        const initialBatchSize = isMobile ? 3 : 8;
        for (let i = 0; i < initialBatchSize; i++) {
            setTimeout(createParticle, i * 300);
        }

        // ── 3D Wireframe Shapes on Canvas ──
        const canvas = document.getElementById('shapesCanvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // 3D math helpers
        function rotateX(point, angle) {
            const cos = Math.cos(angle), sin = Math.sin(angle);
            return [point[0], point[1] * cos - point[2] * sin, point[1] * sin + point[2] * cos];
        }
        function rotateY(point, angle) {
            const cos = Math.cos(angle), sin = Math.sin(angle);
            return [point[0] * cos + point[2] * sin, point[1], -point[0] * sin + point[2] * cos];
        }
        function rotateZ(point, angle) {
            const cos = Math.cos(angle), sin = Math.sin(angle);
            return [point[0] * cos - point[1] * sin, point[0] * sin + point[1] * cos, point[2]];
        }
        function project(point, cx, cy, fov) {
            const scale = fov / (fov + point[2]);
            return [cx + point[0] * scale, cy + point[1] * scale];
        }

        // Shape definitions (vertices + edges)
        function getCubeGeometry(s) {
            const h = s / 2;
            const v = [[-h,-h,-h],[h,-h,-h],[h,h,-h],[-h,h,-h],[-h,-h,h],[h,-h,h],[h,h,h],[-h,h,h]];
            const e = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
            return { vertices: v, edges: e };
        }

        function getPyramidGeometry(s) {
            const h = s / 2;
            const v = [[0,-h*1.2,0],[-h,h,-h],[h,h,-h],[h,h,h],[-h,h,h]];
            const e = [[0,1],[0,2],[0,3],[0,4],[1,2],[2,3],[3,4],[4,1]];
            return { vertices: v, edges: e };
        }

        function getOctahedronGeometry(s) {
            const h = s / 2;
            const v = [[0,-h,0],[h,0,0],[0,0,h],[-h,0,0],[0,0,-h],[0,h,0]];
            const e = [[0,1],[0,2],[0,3],[0,4],[5,1],[5,2],[5,3],[5,4],[1,2],[2,3],[3,4],[4,1]];
            return { vertices: v, edges: e };
        }

        function getDiamondGeometry(s) {
            const h = s / 2;
            const v = [[0,-h*1.5,0],[h,0,0],[0,0,h],[-h,0,0],[0,0,-h],[0,h*0.6,0]];
            const e = [[0,1],[0,2],[0,3],[0,4],[5,1],[5,2],[5,3],[5,4],[1,2],[2,3],[3,4],[4,1]];
            return { vertices: v, edges: e };
        }

        // Color palette for shapes
        const shapeColors = [
            { stroke: 'rgba(196, 30, 58, 0.5)',  glow: 'rgba(196, 30, 58, 0.15)' },
            { stroke: 'rgba(183, 110, 121, 0.5)', glow: 'rgba(183, 110, 121, 0.12)' },
            { stroke: 'rgba(140, 80, 160, 0.45)', glow: 'rgba(140, 80, 160, 0.1)' },
            { stroke: 'rgba(201, 169, 110, 0.45)',glow: 'rgba(201, 169, 110, 0.1)' },
            { stroke: 'rgba(212, 160, 160, 0.5)', glow: 'rgba(212, 160, 160, 0.12)' },
        ];

        // Create shape objects
        const shapes3D = [];
        const geometryTypes = [getCubeGeometry, getPyramidGeometry, getOctahedronGeometry, getDiamondGeometry];

        const shapeCount = isMobile ? 5 : 14;
        for (let i = 0; i < shapeCount; i++) {
            const geoFn = geometryTypes[Math.floor(Math.random() * geometryTypes.length)];
            const size = Math.random() * 40 + 25;
            const colors = shapeColors[Math.floor(Math.random() * shapeColors.length)];
            shapes3D.push({
                geo: geoFn(size),
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotX: Math.random() * Math.PI * 2,
                rotY: Math.random() * Math.PI * 2,
                rotZ: Math.random() * Math.PI * 2,
                speedX: (Math.random() - 0.5) * 0.008,
                speedY: (Math.random() - 0.5) * 0.012,
                speedZ: (Math.random() - 0.5) * 0.006,
                driftX: (Math.random() - 0.5) * 0.3,
                driftY: (Math.random() - 0.5) * 0.2,
                color: colors,
                lineWidth: Math.random() * 0.8 + 0.6,
            });
        }

        function drawShapes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const shape of shapes3D) {
                // Update rotation
                shape.rotX += shape.speedX;
                shape.rotY += shape.speedY;
                shape.rotZ += shape.speedZ;

                // Gentle drift
                shape.x += shape.driftX;
                shape.y += shape.driftY;

                // Wrap around screen
                if (shape.x < -60) shape.x = canvas.width + 60;
                if (shape.x > canvas.width + 60) shape.x = -60;
                if (shape.y < -60) shape.y = canvas.height + 60;
                if (shape.y > canvas.height + 60) shape.y = -60;

                const { vertices, edges } = shape.geo;
                const projected = [];

                for (const v of vertices) {
                    let p = [...v];
                    p = rotateX(p, shape.rotX);
                    p = rotateY(p, shape.rotY);
                    p = rotateZ(p, shape.rotZ);
                    projected.push(project(p, shape.x, shape.y, 300));
                }

                // Draw glow
                ctx.strokeStyle = shape.color.glow;
                ctx.lineWidth = shape.lineWidth + 3;
                ctx.beginPath();
                for (const [a, b] of edges) {
                    ctx.moveTo(projected[a][0], projected[a][1]);
                    ctx.lineTo(projected[b][0], projected[b][1]);
                }
                ctx.stroke();

                // Draw wireframe
                ctx.strokeStyle = shape.color.stroke;
                ctx.lineWidth = shape.lineWidth;
                ctx.beginPath();
                for (const [a, b] of edges) {
                    ctx.moveTo(projected[a][0], projected[a][1]);
                    ctx.lineTo(projected[b][0], projected[b][1]);
                }
                ctx.stroke();
            }

            requestAnimationFrame(drawShapes);
        }

        drawShapes();

        // ── Set Dynamic Book Height ──
        function updateBookHeight() {
            const activePage = document.querySelector('.page.active');
            if (activePage) {
                book.style.minHeight = activePage.scrollHeight + 'px';
            }
        }

        // Update on page change and resize
        const observer = new MutationObserver(updateBookHeight);
        pages.forEach(page => {
            observer.observe(page, { attributes: true, attributeFilter: ['class'] });
        });
        window.addEventListener('resize', updateBookHeight);
        
        // Initial height
        setTimeout(updateBookHeight, 100);

        // ── Touch/Swipe support ──
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const diffX = touchStartX - touchEndX;
            const diffY = touchStartY - touchEndY;
            
            // Require a strong horizontal drag (50px) and minimal vertical drag (less than 40px)
            // This prevents regular vertical scrolling from accidentally turning the page!
            if (Math.abs(diffX) > 50 && Math.abs(diffY) < 40) {
                if (diffX > 0) {
                    nextPage(); // Swipe left = next
                } else {
                    prevPage(); // Swipe right = prev
                }
            }
        }
        // ── Reader Feedback System ──
        let currentFeedbackUser = localStorage.getItem('storyFeedbackUser') || '';
        let isAdmin = localStorage.getItem('storyAdminMode') === 'true';

        // Hidden Developer Admin Mode
        function unlockAdmin() {
            if (isAdmin) {
                if(confirm("Turn off Developer Mode?")) {
                    isAdmin = false;
                    localStorage.removeItem('storyAdminMode');
                    location.reload();
                }
                return;
            }
            const pwd = prompt("Developer access — Enter password:");
            // Password is 'storyadmin'
            if (pwd && btoa(pwd) === 'c3RvcnlhZG1pbg==') {
                isAdmin = true;
                localStorage.setItem('storyAdminMode', 'true');
                alert("Developer Mode Unlocked. You can now delete any comments.");
                location.reload();
            } else if (pwd) {
                alert("Incorrect password.");
            }
        }

        // Delete comment from Firestore
        function deleteComment(pageId, docId) {
            if (!isAdmin) return;
            if (confirm("Are you sure you want to permanently delete this comment?")) {
                db.collection("comments_" + pageId).doc(docId).delete().then(() => {
                    console.log("Deleted");
                }).catch(err => {
                    console.error("Error deleting:", err);
                    alert("Failed to delete. Check console.");
                });
            }
        }

        // Load saved comments from Firebase Firestore
        function loadFeedback(pageId, listEl) {
            db.collection("comments_" + pageId)
              .orderBy("timestamp", "desc")
              .onSnapshot((snapshot) => {
                  listEl.innerHTML = '';
                  if (snapshot.empty) {
                      listEl.innerHTML = '<div class="feedback-empty">No comments yet — be the first to share your thoughts!</div>';
                      return;
                  }
                  snapshot.forEach((doc) => {
                      const item = doc.data();
                      item.id = doc.id; // Store ID for admin deletion
                      listEl.innerHTML += buildFeedbackItem(item, pageId);
                  });
                  // Timeout ensures elements are added before initializing icons
                  setTimeout(() => lucide.createIcons(), 0);
              }, (error) => {
                  console.error("Error loading comments: ", error);
                  listEl.innerHTML = '<div class="feedback-empty">Error loading comments. Check permissions in Firebase Console.</div>';
              });
        }

        function buildFeedbackItem(item, pageId) {
            const typeLabel = item.type === 'suggestion' ? 'Suggestion' : 'Comment';
            const typeClass = item.type === 'suggestion' ? ' suggestion' : '';
            
            const deleteBtnHtml = isAdmin ? 
                `<button class="admin-delete-btn" onclick="deleteComment('${pageId}', '${item.id}')" title="Delete Comment">
                    <i data-lucide="trash-2"></i>
                </button>` : '';

            return `<div class="feedback-item">
                <div class="feedback-item-header">
                    <div class="feedback-item-header-left">
                        <div class="feedback-item-author"><i data-lucide="user"></i> ${escapeHtml(item.name)}</div>
                        <span class="feedback-item-type${typeClass}">${typeLabel}</span>
                    </div>
                    ${deleteBtnHtml}
                </div>
                <div class="feedback-item-text">${escapeHtml(item.text)}</div>
                <div class="feedback-item-time">${item.time}</div>
            </div>`;
        }

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        function enterFeedback(btn) {
            const section = btn.closest('.reader-feedback');
            const input = section.querySelector('.feedback-name-input');
            const name = input.value.trim();
            if (!name) { input.style.borderColor = 'rgba(196,30,58,0.6)'; return; }
            currentFeedbackUser = name;
            localStorage.setItem('storyFeedbackUser', name);

            // Activate all feedback forms across pages
            document.querySelectorAll('.reader-feedback').forEach(fb => {
                fb.querySelector('.feedback-name-gate').style.display = 'none';
                const form = fb.querySelector('.feedback-form');
                form.classList.add('active');
                form.querySelector('.badge-name').textContent = name;
            });

            // Re-init lucide for new icons
            lucide.createIcons();

            // Load comments for this page
            const pageId = section.getAttribute('data-page-id');
            loadFeedback(pageId, section.querySelector('.feedback-list'));
        }

        function switchTab(tabBtn) {
            const section = tabBtn.closest('.reader-feedback');
            section.querySelectorAll('.feedback-tab').forEach(t => t.classList.remove('active'));
            tabBtn.classList.add('active');
            const type = tabBtn.getAttribute('data-type');
            const textarea = section.querySelector('.feedback-input-area');
            textarea.placeholder = type === 'suggestion'
                ? 'Suggest a change for this chapter...'
                : 'Share your thoughts on this chapter...';
        }

        function submitFeedback(btn) {
            const section = btn.closest('.reader-feedback');
            const textarea = section.querySelector('.feedback-input-area');
            const text = textarea.value.trim();
            if (!text) return;

            const activeTab = section.querySelector('.feedback-tab.active');
            const type = activeTab.getAttribute('data-type');
            const pageId = section.getAttribute('data-page-id');

            const now = new Date();
            const time = now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) + ' · ' + now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

            // Visual feedback while posting
            const originalPlaceholder = textarea.placeholder;
            textarea.value = '';
            textarea.placeholder = "Posting to cloud...";
            btn.disabled = true;

            // Submit to Firebase
            db.collection("comments_" + pageId).add({
                name: currentFeedbackUser,
                text: text,
                type: type,
                time: time,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }).then(() => {
                textarea.placeholder = originalPlaceholder;
                btn.disabled = false;
                // No need to manually reload, onSnapshot triggers loadFeedback
            }).catch(err => {
                console.error("Error adding document: ", err);
                textarea.placeholder = "Failed to post. (Check Firestore rules)";
                btn.disabled = false;
            });
        }

        // On page load: restore user session
        if (currentFeedbackUser) {
            document.querySelectorAll('.reader-feedback').forEach(fb => {
                fb.querySelector('.feedback-name-gate').style.display = 'none';
                const form = fb.querySelector('.feedback-form');
                form.classList.add('active');
                form.querySelector('.badge-name').textContent = currentFeedbackUser;
            });
        }

        // Load all feedback lists on init
        document.querySelectorAll('.reader-feedback').forEach(fb => {
            const pageId = fb.getAttribute('data-page-id');
            loadFeedback(pageId, fb.querySelector('.feedback-list'));
        });

        // Re-init all lucide icons for dynamically added ones
        lucide.createIcons();
