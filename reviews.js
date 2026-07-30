function submitReview() {

    const name = document.getElementById("reviewName").value.trim();
    const rating = document.getElementById("reviewRating").value;
    const message = document.getElementById("reviewMessage").value.trim();

    if (name === "" || rating === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push({
        name: name,
        rating: rating,
        message: message,
        date: new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
})
    });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    alert("Thank you for your review!");

    location.reload();
}
function loadReviews() {

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    let total = 0;

reviews.forEach(review => {
    total += Number(review.rating);
});

const average = reviews.length
    ? (total / reviews.length).toFixed(1)
    : "0.0";

document.getElementById("averageRating").textContent = average;
document.getElementById("totalReviews").textContent = reviews.length;

    const reviewsList = document.getElementById("reviewsList");

    reviewsList.innerHTML = "";

    reviews.reverse().forEach(review => {

        reviewsList.innerHTML += `
            <div class="review-card">

                <h3>${review.name}</h3>

                <p>${"⭐".repeat(review.rating)}</p>

                <p>${review.message}</p>

                <small>${review.date}</small>

            </div>
        `;

    });

}

loadReviews();