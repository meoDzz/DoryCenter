// Hiệu ứng cuộn mượt (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hiệu ứng đổi màu Navbar khi cuộn
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#ffffff';
        nav.style.padding = '10px 5%';
    } else {
        nav.style.padding = '20px 5%';
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Khai báo các thành phần
    const modal = document.getElementById("registrationModal");
    const btn = document.getElementById("openForm");
    const closeBtn = document.querySelector(".close-btn");
    const consultForm = document.getElementById("consultForm");

    // Mở popup khi click nút "ĐĂNG KÝ TƯ VẤN"
    if (btn && modal) {
        btn.onclick = function() {
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Ngăn cuộn trang khi mở popup
        }
    }

    // Đóng popup khi click dấu X
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // Đóng popup khi click ra ngoài vùng form
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // Xử lý gửi form
    if (consultForm) {
        consultForm.onsubmit = function(e) {
            e.preventDefault();
            alert("Cảm ơn bạn! Dory Center sẽ liên hệ tư vấn sớm nhất.");
            modal.style.display = "none";
            document.body.style.overflow = "auto";
            consultForm.reset();
        }
    }

    // Hiệu ứng cuộn mượt cho menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});



// ... code xử lý Popup Form hiện tại ...

    // THÊM XỬ LÝ LIGHTBOX CHO THƯ VIỆN ẢNH
    const lightboxModal = document.getElementById("lightboxModal");
    const lightboxImg = document.getElementById("lightboxImg");
    const captionText = document.getElementById("lightboxCaption");
    const closeLightbox = document.querySelector(".lightbox-close");

    // Lấy tất cả các item trong gallery
    document.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault(); // Ngăn mở link ảnh trực tiếp
            const imgUrl = this.getAttribute("href");
            const imgAlt = this.querySelector("img").getAttribute("alt");
            
            // Hiển thị modal và ảnh phóng to
            lightboxModal.style.display = "block";
            lightboxImg.src = imgUrl;
            captionText.innerHTML = imgAlt;
            
            // Chặn cuộn trang chính khi đang xem ảnh
            document.body.style.overflow = "hidden";
        });
    });

    // Nút đóng Lightbox
    if (closeLightbox) {
        closeLightbox.onclick = function() {
            lightboxModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // Click ra ngoài ảnh để đóng Lightbox
    window.addEventListener("click", function(event) {
        if (event.target == lightboxModal) {
            lightboxModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Hỗ trợ nút ESC để đóng Lightbox
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && lightboxModal.style.display === "block") {
            lightboxModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });




    // Tự động chạy Slider Banner chính
const slides = document.querySelectorAll('.hero-slider .slide');
let currentSlide = 0;

function nextSlide() {
    // Gỡ bỏ class active của ảnh hiện tại
    slides[currentSlide].classList.remove('active');
    // Tính toán ảnh tiếp theo
    currentSlide = (currentSlide + 1) % slides.length;
    // Thêm class active cho ảnh mới
    slides[currentSlide].classList.add('active');
}

// Thiết lập thời gian chuyển ảnh (2500ms = 2.5 giây)
setInterval(nextSlide, 2500);