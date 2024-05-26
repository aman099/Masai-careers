// Sidebar popup(in smaller screens)
const sidebar = document.querySelector("aside");
const hambuergerIcon = document.querySelector(".hamburger-icon");
const overlay = document.querySelector(".overlay");

hambuergerIcon.addEventListener("click", () => {
	sidebar.classList.add("active");
	overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
	sidebar.classList.remove("active");
	overlay.classList.remove("active");
});
//

const leftArr = document.querySelector(".left-arr");
const rightArr = document.querySelector(".right-arr");
const hearFromTeamGridContainer = document.querySelector(".leadership-cards");
const card = document.querySelector(".leadership-cont");

leftArr.addEventListener("click", () => {
	hearFromTeamGridContainer.scrollBy({
		left: card.clientWidth * 1 + 32,
		behavior: "smooth",
	});
	if (innerWidth < 400) {
		hearFromTeamGridContainer.scrollBy({
			left: card.clientWidth * 1 + 40,
			behavior: "smooth",
		});
	}
});
rightArr.addEventListener("click", () => {
	hearFromTeamGridContainer.scrollBy({
		left: card.clientWidth * -1 - 32,
		behavior: "smooth",
	});
	if (innerWidth < 400) {
		hearFromTeamGridContainer.scrollBy({
			left: card.clientWidth * -1 - 40,
			behavior: "smooth",
		});
	}
});

// Autoplay Carousel
const throughTitleCont = document.querySelector(".through-title-cont");
const throughTitleContent = document.querySelector(
	".through-title-cont .through-title-content"
);
const whyMasai = document.querySelector("section#why .why-content");

const options = {};

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			autoPlay();
		} else {
			return;
		}
	});
}, options);

observer.observe(whyMasai);

function autoPlay() {
	if (window.innerWidth < 600) return;

	timeoutId = setInterval(() => {
		throughTitleCont.scrollLeft += throughTitleContent.offsetWidth;
	}, 5000);
}
