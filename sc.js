function showGallery(id) {
    var gallery = document.getElementById(id);
    if (gallery.style.display === "grid") {
        gallery.style.display = "none";
    } else {
        gallery.style.display = "grid";
    }
}

// יצירת המפה עם מרכז בישראל
// יצירת המפה עם מרכז באזור ירושלים
var map = L.map('map').setView([31.771959, 35.217018], 10); // מיקום בירושלים עם זום יותר קרוב

// הוספת שכבת המפה מ-OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// רשימת מיקומים עם פינים (Markers) באזור ירושלים והמרכז
var locations = [
    { lat: 31.7683, lng: 35.2137, title: "ירושלים - מרכז העיר" },
    { lat: 31.7767, lng: 35.2345, title: "גבעת שאול, ירושלים" },
    { lat: 31.7736, lng: 35.2062, title: "מלחה, ירושלים" },
    { lat: 31.7505, lng: 35.1901, title: "בית שמש" },
    { lat: 31.8486, lng: 35.2616, title: "מעלה אדומים" },
    { lat: 31.9511, lng: 34.8889, title: "רמלה" },
    { lat: 32.0231, lng: 34.7500, title: "ראשון לציון - מרכז" },
    { lat: 31.9894, lng: 34.9103, title: "לוד" },
    { lat: 32.0322, lng: 34.7700, title: "חולון" },
    { lat: 32.0661, lng: 34.7778, title: "תל אביב - מרכז" },
    { lat: 31.8932, lng: 35.0015, title: "מודיעין" },
    { lat: 31.8701, lng: 35.0712, title: "שוהם" },
];

// הוספת פינים למפה
document.addEventListener("DOMContentLoaded", function () {
    // Add this code to create markers
    locations.forEach(location => {
        L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(location.title);
    });

    const track = document.querySelector(".logo-track");
    const logos = document.querySelectorAll(".logo2");

    // משכפל את הלוגואים כך שהגלילה תהיה רציפה
    logos.forEach(logo => {
        let clone = logo.cloneNode(true);
        track.appendChild(clone);
    });

    gsap.to(track, {
        x: `-${track.scrollWidth / 2}px`, // זז עד חצי מהרוחב כדי ליצור רצף
        ease: "none", // תנועה חלקה בלי האטות
        repeat: -1, // אינסופי
        duration: 20, // מהירות התנועה
    });
});

