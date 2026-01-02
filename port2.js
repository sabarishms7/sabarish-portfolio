document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const responseText = document.getElementById("response");
    responseText.textContent = "Message sent successfully!";

    // Backend integration placeholder
});
