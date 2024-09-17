const imageIds = ["image1", "image2", "image3", "image4"];

function showImagesSequentially() {
    let index = 0;

    function showNextImage() {
        if (index < imageIds.length) {
            document.getElementById(imageIds[index]).classList.add("show");
            index++;
            setTimeout(showNextImage, 1000); // Hiển thị hình ảnh tiếp theo sau 1 giây
        } else {
            setTimeout(() => {
                document.getElementById("message").style.display = "block"; // Hiển thị lời chúc sau 3 giây
            }, 3000);
        }
    }

    showNextImage();
}

function startCelebration() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });

    showImagesSequentially();
}
