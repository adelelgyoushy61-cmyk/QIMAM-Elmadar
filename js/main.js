/* ==========================================================================
   QIMAM HEAVY TRANSPORT & LOGISTICS - GSAP 3 + SCROLLTRIGGER ENGINE (OPTIMIZED)
   ========================================================================== */

const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;

// بيانات تفصيلية للخدمات والمشاريع والنقل التفاعلي (تم تصحيح مسار الصور إلى img/)
const QIMAM_SERVICES_DATA = {
    s1: {
        title: "نقل المعدات الثقيلة واللوابد",
        badge: "خدمة رئيسية",
        img: "img/WhatsApp Image 2025-10-21 at 5.12.29 PM (4).jpeg",
        desc: "نقدم حلول نقل متكاملة لجميع أنواع المعدات الثقيلة والآليات الهندسية العملاقة باستخدام أسطول حديث من اللوابد الهيدروليكية والعادية متعددة المحاور.",
        specs: ["لوابد هيدروليك وعادي بحمولات تصل إلى 150 طن", "تصاريح مرورية رسمية ومرافقة أمنية للمشاريع", "تثبيت قياسي بأحزمة وسلاسل فولاذية معتمدة", "تتبع لحظي عبر GPS طوال مسار الرحلة"]
    },
    s2: {
        title: "تركيب وتشغيل المعدات الصناعية",
        badge: "حلول هندسية",
        img: "img/WhatsApp Image 2025-10-21 at 5.12.29 PM (2).jpeg",
        desc: "فريق فني وهندسي متخصص في إنزال وتركيب وتشغيل خطوط الإنتاج والمعدات الثقيلة في مواقع المشاريع بأعلى درجات الدقة والسلامة.",
        specs: ["رافعات تلسكوبية ومعدات إنزال دقيقة", "مهندسون وفنيون معتمدون في السلامة المهنية", "فحص واختبار التشغيل الميداني بعد التركيب", "خدمة صيانة ودعم فني على مدار الساعة"]
    },
    s3: {
        title: "التأمين الشامل والحراسة المرافقة",
        badge: "أمان مضمون",
        img: "img/WhatsApp Image 2025-10-21 at 5.12.28 PM (3).jpeg",
        desc: "تغطية تأمينية شاملة على جميع الشحنات والمعدات عالية القيمة مع توفير سيارات مرافقة (Pilot Cars) وحراسة أمنية من لحظة التحميل حتى التسليم.",
        specs: ["وثيقة تأمين شاملة ضد جميع مخاطر الطريق", "سيارات إرشاد ومرافقة للشحنات غير القياسية", "تقارير مصورة دورية لحالة الشحنة", "غرفة عمليات تعمل 24/7 لمتابعة خط السير"]
    },
    s4: {
        title: "نقل أنابيب المياه ومشاريع البنية التحتية",
        badge: "مشاريع كبرى",
        img: "img/WhatsApp Image 2025-10-21 at 5.12.32 PM.jpeg",
        desc: "خبرة واسعة في نقل أنابيب المياه والغاز العملاقة ومكونات محطات التحلية والطاقة عبر مقطورات مسطحة وممتدة مخصصة.",
        specs: ["مقطورات قابلة للتمديد (Extendable Flatbeds)", "حوامل وتجهيزات خاصة لمنع انزلاق الأنابيب", "الالتزام التام بالجداول الزمنية للمشاريع الحكومية", "أسطول مخصص لتغطية كافة مناطق المملكة"]
    },
    s5: {
        title: "النقل الثقيل للمصانع والمنشآت",
        badge: "نقل متخصص",
        img: "img/WhatsApp Image 2025-10-21 at 5.12.32 PM (3).jpeg",
        desc: "نقل خطوط المصانع الكاملة والمولدات والمحولات الكهربائية الضخمة بخطط هندسية مدروسة للمسارات والمنعطفات والجسور.",
        specs: ["دراسة مسار الرحلة (Route Survey) مسبقاً", "سائقون محترفون ذوو خبرة تتجاوز 15 عاماً", "أسطول حديث يخضع للصيانة الوقائية الدورية", "مرونة عالية في جدولة الشحنات العاجلة"]
    },
    s6: {
        title: "التخزين اللوجستي وإدارة المستودعات",
        badge: "سلاسل الإمداد",
        img: "img/WhatsApp Image 2025-10-21 at 5.12.29 PM (5).jpeg",
        desc: "ساحات تخزين ومستودعات آمنة ومجهزة لاستقبال المعدات الثقيلة والبضائع الصناعية مع إدارة مخزون ذكية وتوزيع سريع.",
        specs: ["ساحات تخزين مؤمنة بالكاميرات على مدار الساعة", "معدات مناولة ورافعات شوكية ثقيلة جاهزة", "إدارة إلكترونية لدخول وخروج الشحنات", "موقع استراتيجي يربط أهم المحاور اللوجستية"]
    }
};

const QIMAM_PROJECTS_DATA = {
    p1: {
        title: "برج الأعمال المركزي - الرياض",
        category: "مشاريع بناء",
        duration: "6 أشهر",
        status: "مكتمل",
        img: "img/WhatsApp Image 2025-10-21 at 5.12.29 PM (2).jpeg",
        desc: "نقل وتركيب الرافعات البرجية ومعدات الحفر والأساسات لمشروع برج الأعمال المركزي في قلب العاصمة الرياض مع الالتزام الكامل بمعايير السلامة المرورية.",
        equipment: "18 لوبد هيدروليك + مقطورات مسطحة ثقيلة"
    },
    p2: {
        title: "منصة بحرية وحقول النفط - المنطقة الشرقية",
        category: "النفط والغاز",
        duration: "12 شهر",
        status: "مكتمل",
        img: "img/WhatsApp Image 2025-10-21 at 5.12.29 PM (4).jpeg",
        desc: "نقل منصات الحفر، التوربينات، والمعدات البترولية الثقيلة من الميناء إلى مواقع الحقول البرية والبحرية بمرافقة أمنية وهندسية متكاملة.",
        equipment: "لوابد متعددة المحاور (Multi-Axle Lowbeds)"
    },
    p3: {
        title: "المركز اللوجستي الإقليمي - جدة",
        category: "لوجستيات",
        duration: "8 أشهر",
        status: "قيد التنفيذ",
        img: "img/WhatsApp Image 2025-10-21 at 5.12.29 PM (5).jpeg",
        desc: "إدارة وتشغيل عمليات النقل اللوجستي الثقيل وتوريد الهياكل المعدنية ومعدات المناولة لمركز التوزيع الإقليمي.",
        equipment: "أسطول شاحنات نقل ثقيل + رافعات شوكية"
    },
    p4: {
        title: "مصنع الآلات والصناعات الثقيلة - الجبيل",
        category: "صناعي",
        duration: "10 أشهر",
        status: "مكتمل",
        img: "img/WhatsApp Image 2025-10-21 at 5.12.30 PM (1).jpeg",
        desc: "نقل وإنزال خطوط الإنتاج الصناعية والمكابس الهيدروليكية العملاقة وتركيبها داخل المنشأة الصناعية بالجبيل.",
        equipment: "لوابد منخفضة الارتفاع + رافعات 100 طن"
    },
    p5: {
        title: "مشروع المجمع السكني المتكامل - شمال الرياض",
        category: "مشاريع بناء",
        duration: "14 شهر",
        status: "مرحلة التجهيز",
        img: "img/WhatsApp Image 2025-10-21 at 5.12.32 PM.jpeg",
        desc: "توريد ونقل الخرسانات المسبقة الصب وأنابيب البنية التحتية ومعدات التمهيد لمشروع سكني ضخم.",
        equipment: "25 شاحنة ومقطورة متخصصة"
    },
    p6: {
        title: "توسعة محطة تكرير البترول",
        category: "النفط والغاز",
        duration: "18 شهر",
        status: "مكتمل",
        img: "img/WhatsApp Image 2025-10-21 at 5.12.28 PM (2).jpeg",
        desc: "نقل خزانات الضغط العالي ووحدات التكرير الحرارية العملاقة عبر مسارات مخصصة ومدروسة هندسياً.",
        equipment: "مقطورات هيدروليكية ثقيلة + فرق مرافقة"
    }
};

const DEMO_SHIPMENTS = {
    "QMM-2025-001": {
        id: "QMM-2025-001",
        cargo: "معدات حفر ولوابد ثقيلة (85 طن)",
        from: "الرياض - المدينة الصناعية",
        to: "مشروع نيوم - تبوك",
        status: "في الطريق (تم قطع 75% من المسار)",
        progress: 75,
        eta: "اليوم - 06:30 مساءً",
        driver: "كابتن فهد العتيبي"
    },
    "QMM-2025-104": {
        id: "QMM-2025-104",
        cargo: "أنابيب مياه صلبة قطر 1200 مم",
        from: "ميناء الملك عبدالعزيز - الدمام",
        to: "الرياض - مشروع البنية التحتية",
        status: "تم التسليم بنجاح",
        progress: 100,
        eta: "تم الاستلام وتوقيع المحضر",
        driver: "كابتن سلطان الدوسري"
    },
    "QMM-2025-219": {
        id: "QMM-2025-219",
        cargo: "محول كهربائي صناعي 110 طن",
        from: "ميناء جدة الإسلامي",
        to: "المدينة المنورة",
        status: "جاري الفحص والتحميل",
        progress: 35,
        eta: "غداً - 11:00 صباحاً",
        driver: "كابتن عبدالله الحربي"
    }
};

function showQimamToast(message, icon = "fa-check-circle") {
    let toast = document.getElementById("qimamGlobalToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "qimamGlobalToast";
        toast.className = "qimam-toast";
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas ${icon} text-warning fs-4"></i><div class="fw-bold">${message}</div>`;
    toast.classList.add("show");
    clearTimeout(window._qimamToastTimer);
    window._qimamToastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3800);
}

function initGSAPAnimations() {
    if (typeof gsap === "undefined") return;
    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.config({ ignoreMobileResize: true }); // يمنع التقطيع عند اختفاء شريط عنوان المتصفح في الموبايل
    }

    // 1. شريط تقدم القراءة العلوي (باستخدام scaleX بدلاً من width لمنع الـ Reflow)
    const topProgress = document.getElementById("topScrollProgress");
    if (topProgress && typeof ScrollTrigger !== "undefined" && !isMobileDevice) {
        gsap.set(topProgress, { width: "100%", scaleX: 0, transformOrigin: "right center" });
        gsap.to(topProgress, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.1
            }
        });
    }

    // 2. أنيميشن الهيرو عند فتح الصفحة
    const heroItems = document.querySelectorAll(".gsap-hero-item");
    if (heroItems.length > 0) {
        gsap.fromTo(heroItems,
            { opacity: 0, y: isMobileDevice ? 20 : 35 },
            {
                opacity: 1,
                y: 0,
                duration: isMobileDevice ? 0.55 : 0.85,
                stagger: isMobileDevice ? 0.08 : 0.14,
                ease: "power2.out",
                clearProps: "transform"
            }
        );
    }

    const heroCard = document.querySelector(".gsap-hero-card");
    if (heroCard) {
        gsap.fromTo(heroCard,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: "power2.out", clearProps: "transform" }
        );
    }

    // 3. أنيميشن العناوين والأقسام عند السكرول
    const revealHeadings = document.querySelectorAll(".gsap-heading");
    revealHeadings.forEach((heading) => {
        gsap.fromTo(heading,
            { opacity: 0, y: 24 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                clearProps: "transform",
                scrollTrigger: typeof ScrollTrigger !== "undefined" ? {
                    trigger: heading,
                    start: "top 90%",
                    once: true
                } : undefined
            }
        );
    });

    // 4. أنيميشن الكروت بنظام Stagger خفيف
    const cardRows = document.querySelectorAll(".gsap-cards-row");
    cardRows.forEach((row) => {
        const cards = row.querySelectorAll(".gsap-card-item");
        if (cards.length > 0) {
            gsap.fromTo(cards,
                { opacity: 0, y: isMobileDevice ? 25 : 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: isMobileDevice ? 0.5 : 0.7,
                    stagger: isMobileDevice ? 0.06 : 0.12,
                    ease: "power2.out",
                    clearProps: "transform",
                    scrollTrigger: typeof ScrollTrigger !== "undefined" ? {
                        trigger: row,
                        start: "top 88%",
                        once: true
                    } : undefined
                }
            );
        }
    });

    // 5. أنيميشن قوائم المميزات وصورة المقطورة
    const featureItems = document.querySelectorAll(".feature-list li");
    if (featureItems.length > 0) {
        gsap.fromTo(featureItems,
            { opacity: 0, x: isMobileDevice ? 15 : 30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.45,
                stagger: 0.06,
                ease: "power2.out",
                clearProps: "transform",
                scrollTrigger: typeof ScrollTrigger !== "undefined" ? {
                    trigger: ".feature-list",
                    start: "top 88%",
                    once: true
                } : undefined
            }
        );
    }

    const trailerWrap = document.querySelector(".trailer-img-wrapper");
    if (trailerWrap) {
        gsap.fromTo(trailerWrap,
            { opacity: 0, y: 25 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                clearProps: "transform",
                scrollTrigger: typeof ScrollTrigger !== "undefined" ? {
                    trigger: trailerWrap,
                    start: "top 88%",
                    once: true
                } : undefined
            }
        );
    }

    // 6. عدادات الأرقام بـ GSAP
    const counters = document.querySelectorAll(".count, .stat-number[data-target]");
    counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target") || "0");
        const suffix = counter.getAttribute("data-suffix") || "";
        const obj = { val: 0 };

        const runCount = () => {
            if (counter.dataset.counted === "true") return;
            counter.dataset.counted = "true";
            gsap.to(obj, {
                val: target,
                duration: 1.8,
                ease: "power2.out",
                snap: { val: 1 },
                onUpdate: () => {
                    counter.textContent = obj.val.toLocaleString("en-US") + suffix;
                }
            });
        };

        if (typeof ScrollTrigger !== "undefined") {
            ScrollTrigger.create({
                trigger: counter,
                start: "top 92%",
                once: true,
                onEnter: runCount
            });
        } else {
            runCount();
        }
    });

    // 7. أشرطة التقدم في بطاقات الإحصائيات
    const progressBars = document.querySelectorAll(".gsap-progress-bar");
    progressBars.forEach((bar) => {
        const targetWidth = bar.getAttribute("data-width") || "90%";
        gsap.fromTo(bar,
            { width: "0%" },
            {
                width: targetWidth,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: typeof ScrollTrigger !== "undefined" ? {
                    trigger: bar,
                    start: "top 92%",
                    once: true
                } : undefined
            }
        );
    });

    // 8. شريط التقدم الجانبي في قسم الخدمات اللوجستية (موقوف على الموبايل لمنع التقطيع)
    const sectionProgress = document.getElementById("sectionProgress");
    const logisticsSection = document.querySelector(".logistics-section");
    if (sectionProgress && logisticsSection && typeof ScrollTrigger !== "undefined" && !isMobileDevice) {
        gsap.set(sectionProgress, { height: "100%", scaleY: 0, transformOrigin: "top center" });
        gsap.to(sectionProgress, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
                trigger: logisticsSection,
                start: "top 75%",
                end: "bottom 25%",
                scrub: 0.2
            }
        });
    }
}

// الجسيمات المتحركة (تشتغل على الكمبيوتر فقط وتقف على الموبايل لتوفير المعالج)
function initHeroParticles() {
    const container = document.getElementById("particles");
    if (!container || isMobileDevice) return;
    container.innerHTML = "";
    const count = 8; // تقليل العدد من 16 إلى 8 لأداء أنعم
    for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        const size = Math.random() * 24 + 10;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${Math.random() * 100}%`;
        container.appendChild(p);

        if (typeof gsap !== "undefined") {
            gsap.to(p, {
                y: "random(-35, 35)",
                x: "random(-25, 25)",
                opacity: "random(0.25, 0.75)",
                duration: "random(4, 7)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }
}

// فلتر المشاريع التفاعلي
function initProjectFilter() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCols = document.querySelectorAll("#projects-grid > [data-category]");
    if (!filterBtns.length || !projectCols.length) return;

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            filterBtns.forEach((b) => b.classList.remove("active"));
            this.classList.add("active");
            const filter = this.getAttribute("data-filter");

            const toShow = [];
            projectCols.forEach((col) => {
                const cat = col.getAttribute("data-category");
                if (filter === "all" || cat === filter) {
                    col.style.display = "block";
                    toShow.push(col);
                } else {
                    col.style.display = "none";
                }
            });

            if (typeof gsap !== "undefined" && toShow.length) {
                gsap.fromTo(toShow,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.35, stagger: 0.06, ease: "power2.out", clearProps: "transform" }
                );
            }
            if (typeof ScrollTrigger !== "undefined") {
                ScrollTrigger.refresh();
            }
        });
    });
}

// نافذة تفاصيل الخدمة أو المشروع (Modal)
function openDetailsModal(type, key) {
    const data = type === "service" ? QIMAM_SERVICES_DATA[key] : QIMAM_PROJECTS_DATA[key];
    if (!data) return;

    let modalEl = document.getElementById("qimamDynamicModal");
    if (!modalEl) {
        modalEl = document.createElement("div");
        modalEl.id = "qimamDynamicModal";
        modalEl.className = "modal fade";
        modalEl.tabIndex = -1;
        document.body.appendChild(modalEl);
    }

    const imgPath = window.__QIMAM_INLINE_IMAGES__ && window.__QIMAM_INLINE_IMAGES__[data.img]
        ? window.__QIMAM_INLINE_IMAGES__[data.img]
        : data.img;

    const specsHtml = data.specs
        ? `<h6 class="fw-bold text-dark mt-3 mb-2">مميزات ومواصفات الخدمة:</h6>
           <ul class="feature-list mb-3">${data.specs.map(s => `<li>${s}</li>`).join("")}</ul>`
        : `<div class="p-3 rounded-3 bg-light border mb-3">
             <div class="d-flex justify-content-between mb-2">
               <span class="text-muted">مدة التنفيذ:</span>
               <strong class="text-dark">${data.duration}</strong>
             </div>
             <div class="d-flex justify-content-between mb-2">
               <span class="text-muted">حالة المشروع:</span>
               <span class="badge bg-success">${data.status}</span>
             </div>
             <div class="d-flex justify-content-between">
               <span class="text-muted">المعدات المستخدمة:</span>
               <strong class="text-dark">${data.equipment}</strong>
             </div>
           </div>`;

    modalEl.innerHTML = `
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content border-0 rounded-4 overflow-hidden shadow-lg">
                <div class="position-relative" style="height: 240px;">
                    <img src="${imgPath}" class="w-100 h-100 object-fit-cover" loading="lazy" alt="${data.title}">
                    <div class="position-absolute top-0 start-0 w-100 h-100" style="background: linear-gradient(to top, rgba(11,15,23,0.9), rgba(11,15,23,0.25));"></div>
                    <button type="button" class="btn-close btn-close-white position-absolute top-0 start-0 m-3 p-2 bg-dark bg-opacity-50 rounded-circle" data-bs-dismiss="modal" aria-label="إغلاق"></button>
                    <div class="position-absolute bottom-0 end-0 p-4 text-white">
                        <span class="badge bg-warning text-dark mb-2 fw-bold">${data.badge || data.category}</span>
                        <h4 class="fw-bold mb-0">${data.title}</h4>
                    </div>
                </div>
                <div class="modal-body p-4">
                    <p class="text-muted fs-6 mb-3">${data.desc}</p>
                    ${specsHtml}
                </div>
                <div class="modal-footer bg-light border-0 d-flex justify-content-between">
                    <button type="button" class="btn btn-outline-secondary rounded-3 px-4" data-bs-dismiss="modal">إغلاق</button>
                    <a href="https://api.whatsapp.com/send/?phone=966557087329&text=${encodeURIComponent('مرحباً شركة QIMAM، أرغب في الاستفسار عن: ' + data.title)}" target="_blank" rel="noopener" class="btn btn-gold">
                        <i class="fab fa-whatsapp fs-5"></i> اطلب الخدمة عبر واتساب
                    </a>
                </div>
            </div>
        </div>
    `;

    if (typeof bootstrap !== "undefined" && bootstrap.Modal) {
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }
}
window.openDetailsModal = openDetailsModal;

// نظام تتبع الشحنات التفاعلي
function initTrackingSystem() {
    const trackBtn = document.getElementById("trackShipmentBtn");
    const trackInput = document.getElementById("trackingInput");
    const trackResult = document.getElementById("trackingResultContainer");
    const demoBtns = document.querySelectorAll(".demo-track-btn");

    function renderTracking(code) {
        if (!trackResult) return;
        const clean = (code || "").trim().toUpperCase();
        if (!clean) {
            showQimamToast("يرجى إدخال رقم الشحنة أولاً (مثال: QMM-2025-001)", "fa-exclamation-circle");
            return;
        }
        const info = DEMO_SHIPMENTS[clean] || {
            id: clean,
            cargo: "معدات ثقيلة ولوابد متخصصة",
            from: "الرياض - المركز الرئيسي",
            to: "الدمام - المنطقة الصناعية",
            status: "قيد النقل على الطريق السريع",
            progress: 65,
            eta: "خلال 4 ساعات",
            driver: "كابتن محمد القحطاني"
        };

        trackResult.innerHTML = `
            <div class="tracking-result-box">
                <div class="d-flex flex-wrap justify-content-between align-items-center mb-2 gap-2">
                    <span class="badge bg-warning text-dark fw-bold px-3 py-2">رقم الشحنة: ${info.id}</span>
                    <span class="text-warning fw-bold small"><i class="fas fa-satellite-dish me-1"></i> ${info.status}</span>
                </div>
                <p class="mb-2 small text-light"><strong>الحمولة:</strong> ${info.cargo}</p>
                <div class="d-flex justify-content-between small text-white-50 mb-2">
                    <span><i class="fas fa-map-marker-alt text-warning me-1"></i> من: ${info.from}</span>
                    <span><i class="fas fa-flag-checkered text-success me-1"></i> إلى: ${info.to}</span>
                </div>
                <div class="progress bg-secondary bg-opacity-50 mb-2" style="height: 10px; border-radius: 10px;">
                    <div class="progress-bar bg-warning" id="liveTrackBar" style="width: 0%; border-radius: 10px;"></div>
                </div>
                <div class="d-flex justify-content-between small text-light mt-2">
                    <span><i class="fas fa-user-shield text-warning me-1"></i> ${info.driver}</span>
                    <span><i class="fas fa-clock text-warning me-1"></i> الوصول المتوقع: ${info.eta}</span>
                </div>
            </div>
        `;

        if (typeof gsap !== "undefined") {
            gsap.fromTo(trackResult.firstElementChild, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 });
            gsap.to("#liveTrackBar", { width: `${info.progress}%`, duration: 0.9, ease: "power2.out" });
        } else {
            const bar = document.getElementById("liveTrackBar");
            if (bar) bar.style.width = `${info.progress}%`;
        }
    }

    if (trackBtn && trackInput) {
        trackBtn.addEventListener("click", () => renderTracking(trackInput.value));
        trackInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                renderTracking(trackInput.value);
            }
        });
    }

    demoBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const code = btn.getAttribute("data-code");
            if (trackInput) trackInput.value = code;
            renderTracking(code);
        });
    });
}

// التهيئة العامة وتفعيل الـ Lazy Loading التلقائي للصور
document.addEventListener("DOMContentLoaded", () => {
    // تفعيل Lazy Loading تلقائياً لكل صور الموقع ما عدا الهيرو
    document.querySelectorAll("img:not([loading])").forEach((img, index) => {
        if (index > 1) {
            img.setAttribute("loading", "lazy");
            img.setAttribute("decoding", "async");
        }
    });

    // تحسين حدث السكرول باستخدام requestAnimationFrame لمنع تكرار الكود في نفس الفريم
    const navbar = document.querySelector(".qimam-navbar");
    const backToTop = document.getElementById("backToTop");
    let isScrolling = false;

    const handleScroll = () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                const y = window.scrollY;
                if (navbar) navbar.classList.toggle("navbar-scrolled", y > 50);
                if (backToTop) backToTop.classList.toggle("show", y > 320);
                isScrolling = false;
            });
            isScrolling = true;
        }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const navCollapse = document.getElementById("navbarNav");
    if (navCollapse && typeof gsap !== "undefined" && !isMobileDevice) {
        navCollapse.addEventListener("shown.bs.collapse", () => {
            gsap.fromTo(
                navCollapse.querySelectorAll(".nav-item, .nav-mobile-actions"),
                { opacity: 0, y: 12 },
                { opacity: 1, y: 0, duration: 0.25, stagger: 0.04, ease: "power2.out" }
            );
        });
    }

    const heroCarousel = document.getElementById("heroCarousel");
    if (heroCarousel && typeof gsap !== "undefined") {
        heroCarousel.addEventListener("slid.bs.carousel", (e) => {
            const activeCaption = e.relatedTarget?.querySelector(".carousel-caption");
            if (activeCaption) {
                gsap.fromTo(activeCaption.children,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
                );
            }
        });
    }

    const contactForm = document.getElementById("qimamContactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = (document.getElementById("name")?.value || "").trim();
            showQimamToast(`شكراً لك ${name ? "أ/ " + name : ""}! تم استلام رسالتك وسيتواصل معك فريق QIMAM فوراً.`);
            contactForm.reset();
        });
    }

    document.querySelectorAll(".newsletter-form").forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            showQimamToast("تم اشتراكك في النشرة البريدية لشركة QIMAM بنجاح!");
            form.reset();
        });
    });

    initGSAPAnimations();
    initHeroParticles();
    initProjectFilter();
    initTrackingSystem();
});