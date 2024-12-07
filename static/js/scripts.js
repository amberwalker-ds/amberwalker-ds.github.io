// Persist Like Count in localStorage
function handleLike(button) {
    // Get the post ID or unique identifier if available (you could use the post slug)
    const postId = document.body.id || "defaultPost";

    // Retrieve the like count from localStorage
    let likeCount = parseInt(localStorage.getItem(`${postId}-likes`) || "0", 10);
    likeCount += 1;

    // Update localStorage and all like-count displays on the page
    localStorage.setItem(`${postId}-likes`, likeCount);
    document.querySelectorAll(".like-count").forEach(span => {
        span.innerText = likeCount;
    });
}

// Load the like count from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const postId = document.body.id || "defaultPost";
    const likeCount = localStorage.getItem(`${postId}-likes`) || "0";
    document.querySelectorAll(".like-count").forEach(span => {
        span.innerText = likeCount;
    });
});

// Toggle Comments Section
function toggleComments(button) {
    const commentSection = button.closest(".post-interactions").querySelector(".comments-section");
    commentSection.style.display = commentSection.style.display === "none" ? "block" : "none";
}

async function fetchCommentCount() {
    // Replace with your GitHub username and repository
    const repo = "your-username/your-blog-repo";

    // Use the page pathname (e.g., /blog/post-title) to search for the issue
    const issueTitle = window.location.pathname;

    try {
        // Fetch issues with matching title
        const response = await fetch(`https://api.github.com/repos/amberwalker-ds/amberwalker-ds.github.io/issues?title=${encodeURIComponent(issueTitle)}`);
        const issues = await response.json();

        if (issues.length > 0) {
            // Assuming the first match is the correct issue
            const issue = issues[0];

            // Display the comment count
            document.getElementById("comment-number").innerText = issue.comments;
        } else {
            console.log("No issue found for this post.");
        }
    } catch (error) {
        console.error("Error fetching comment count:", error);
    }
}
// Fetch the comment count when the page loads
document.addEventListener("DOMContentLoaded", fetchCommentCount);

// Handle Share Button
function handleShare() {
    alert("Link copied to clipboard!");
    navigator.clipboard.writeText(window.location.href); // Copy the current page URL
}

// Scroll to Top Button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll to the top when the button is clicked
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// medium posts
$(function () {
    const mediumUsername = "datawithamber";
    const rssUrl = `https://medium.com/feed/@${mediumUsername}`;
    const encodedRssUrl = encodeURIComponent(rssUrl); // Encode the RSS URL
    const apiKey = "<0wcawc7fpx3fn11bbbhipkwancfor7aia4siav8b>"; // Replace with your actual API key

    $.ajax({
        url: 'https://api.rss2json.com/v1/api.json',
        method: 'GET',
        dataType: 'json',
        data: {
            rss_url: encodedRssUrl,
            api_key: apiKey
        }
    }).done(function (response) {
        if (response.status === 'ok') {
            console.log("Successfully fetched Medium articles:", response);
            // Process and display articles
        } else {
            console.error("Error fetching articles:", response.message);
        }
    }).fail(function (error) {
        console.error("AJAX request failed:", error);
    });
});
