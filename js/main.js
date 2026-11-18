/* ==========================================================================
   QIMAM HEAVY TRANSPORT - ULTRA-FAST VANILLA JS ENGINE (ZERO LAG)
   ========================================================================== */

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

// عداد أرقام خفيف جداً بدون مكتبات
function animateCounter(el) {
    if (el.dataset.counted === "true") return;
    el.dataset.counted = "true";
    const target = parseFloat(el.getAttribute("data-target") || "0");
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1400;
    const startTime = performance.now();

    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * target);
        el.textContent = current.toLocaleString("en-US") + suffix;
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target.toLocaleString("en-US") + suffix;
        }
    }
    requestAnimationFrame(update);
}

// تشغيل الحركات والعدادات بـ IntersectionObserver المدمج في المتصفح
function initFastAnimations() {
    // إظهار عناصر الهيرو فوراً بتدريج ناعم
    document.querySelectorAll(".gsap-hero-item, .gsap-hero-card").forEach((el, i) => {
        setTimeout(() => el.classList.add("is-visible"), i * 70);
    });

    const elementsToWatch = document.querySelectorAll(
        ".gsap-heading, .gsap-card-item, .trailer-img-wrapper, .count, .stat-number[data-target], .gsap-progress-bar"
    );

    if (!("IntersectionObserver" in window)) {
        elementsToWatch.forEach((el) => el.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;

            if (el.classList.contains("count") || el.hasAttribute("data-target")) {
                animateCounter(el);
            } else if (el.classList.contains("gsap-progress-bar")) {
                el.style.width = el.getAttribute("data-width") || "90%";
            } else {
                el.classList.add("is-visible");
            }
            obs.unobserve(el);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -20px 0px" });

    elementsToWatch.forEach((el) => observer.observe(el));
}

function initProjectFilter() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCols = document.querySelectorAll("#projects-grid > [data-category]");
    if (!filterBtns.length || !projectCols.length) return;

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            filterBtns.forEach((b) => b.classList.remove("active"));
            this.classList.add("active");
            const filter = this.getAttribute("data-filter");

            projectCols.forEach((col) => {
                const cat = col.getAttribute("data-category");
                if (filter === "all" || cat === filter) {
                    col.style.display = "block";
                    requestAnimationFrame(() => col.classList.add("is-visible"));
                } else {
                    col.style.display = "none";
                }
            });
        });
    });
}

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
                    <img src="${data.img}" class="w-100 h-100 object-fit-cover" loading="lazy" decoding="async" alt="${data.title}">
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
        bootstrap.Modal.getOrCreateInstance(modalEl).show();
    }
}
window.openDetailsModal = openDetailsModal;

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
                    <div class="progress-bar bg-warning" id="liveTrackBar" style="width: 0%; border-radius: 10px; transition: width 0.8s ease-out;"></div>
                </div>
                <div class="d-flex justify-content-between small text-light mt-2">
                    <span><i class="fas fa-user-shield text-warning me-1"></i> ${info.driver}</span>
                    <span><i class="fas fa-clock text-warning me-1"></i> الوصول المتوقع: ${info.eta}</span>
                </div>
            </div>
        `;

        requestAnimationFrame(() => {
            const bar = document.getElementById("liveTrackBar");
            if (bar) bar.style.width = `${info.progress}%`;
        });
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

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".qimam-navbar");
    const backToTop = document.getElementById("backToTop");
    let ticking = false;

    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const y = window.scrollY;
                if (navbar) navbar.classList.toggle("navbar-scrolled", y > 50);
                if (backToTop) backToTop.classList.toggle("show", y > 320);
                ticking = false;
            });
            ticking = true;
        }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    backToTop?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const contactForm = document.getElementById("qimamContactForm");
    contactForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = (document.getElementById("name")?.value || "").trim();
        showQimamToast(`شكراً لك ${name ? "أ/ " + name : ""}! تم استلام رسالتك وسيتواصل معك فريق QIMAM فوراً.`);
        contactForm.reset();
    });

    document.querySelectorAll(".newsletter-form").forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            showQimamToast("تم اشتراكك في النشرة البريدية لشركة QIMAM بنجاح!");
            form.reset();
        });
    });

    initFastAnimations();
    initProjectFilter();
    initTrackingSystem();
});
