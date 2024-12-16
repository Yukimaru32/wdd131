// load_reviews.js

// ページ読み込み時に実行
document.addEventListener("DOMContentLoaded", () => {
    const reviewsContainer = document.getElementById("reviews-container");

    // localStorage からレビューを取得
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    if (reviews.length === 0) {
        reviewsContainer.innerHTML = "<p>No reviews yet. Be the first to submit a review!</p>";
        return;
    }

    // レビューをループしてHTML要素を生成
    reviews.forEach((review, index) => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        reviewElement.innerHTML = `
            <h2>Review #${index + 1}</h2>
            <p><strong>Manga Title:</strong> ${review.mangaTitle}</p>
            <p><strong>Rating:</strong> ${convertRatingToStars(review.rating)}</p>
            <p><strong>Reading Date:</strong> ${review.readingDate}</p>
            <p><strong>Features Liked:</strong> ${review.features.join(", ") || "None"}</p>
            <p><strong>Written Review:</strong> ${review.writtenReview}</p>
            <p><strong>Submitted By:</strong> ${review.username}</p>
            
        `;

        reviewsContainer.appendChild(reviewElement);
    });
});

// 星の数をHTMLのシンボルに変換する関数
function convertRatingToStars(ratingId) {
    const starsMap = {
        "1star": "★☆☆☆☆",
        "2star": "★★☆☆☆",
        "3star": "★★★☆☆",
        "4star": "★★★★☆",
        "5star": "★★★★★"
    };
    return starsMap[ratingId] || "No Rating";
}

