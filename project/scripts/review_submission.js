// review_submission.js

// フォーム送信時に実行する関数
function SubmitReview(event) {
    event.preventDefault(); // フォームのデフォルト動作（ページ遷移）を防ぐ

    // フォームから入力値を取得
    const mangaTitle = document.getElementById("product-select").value;
    const rating = document.querySelector('input[name="audience"]:checked')?.id || "";
    const readingDate = document.getElementById("date").value;

    // 複数チェックボックスの値を取得
    const features = [];
    if (document.getElementById("character").checked) features.push("Character");
    if (document.getElementById("plot").checked) features.push("Plot");
    if (document.getElementById("graphic").checked) features.push("Graphic");
    if (document.getElementById("story").checked) features.push("Story");

    const writtenReview = document.querySelector('textarea[name="review"]').value;
    const username = document.querySelector('input[name="username"]').value || "Anonymous";

    // レビューオブジェクトを作成
    const review = {
        mangaTitle: mangaTitle,
        rating: rating,
        readingDate: readingDate,
        features: features,
        writtenReview: writtenReview,
        username: username,
    };

    // 既存のレビューリストを取得し、新しいレビューを追加
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(review);

    // localStorage に保存
    localStorage.setItem("reviews", JSON.stringify(reviews));

    // 送信完了メッセージを表示
    document.getElementById("thankYouMessage").style.display = "block";

    // フォームをリセット
    event.target.reset();
}






