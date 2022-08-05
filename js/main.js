const email = document.querySelectorAll(".email");
const emailbtn = document.querySelectorAll(".submit");
const form = document.querySelector("form.grid");

emailbtn.forEach((btn, i) => {
	btn.onclick = (e) => {
		e.preventDefault();
		if (email[i].value === "") {
			email[i].nextElementSibling.className = "error";
			email[i].nextElementSibling.textContent = "Please Enter Your Email";
			email[i].classList.remove("success-border");
			email[i].classList.add("error-border");
		}
		// email Validation
		else if (!ValidateEmail(email[i].value)) {
			email[i].nextElementSibling.className = "error";
			email[i].nextElementSibling.textContent = "Please Check Your Email";
			email[i].classList.remove("success-border");
			email[i].classList.add("error-border");
		} else {
			email[i].nextElementSibling.className = "success";
			email[i].nextElementSibling.textContent = "☑";
			email[i].classList.remove("error-border");
			email[i].classList.add("success-border");
		}
	};
});

// ==============================
// validation function
// ==============================
function ValidateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return true;
	}
	return false;
}

// ==============================
// GSAP
// ==============================
gsap.registerPlugin("ScrollTrigger");

// logo
gsap.from(".logo img", {
	x: -100,
	rotate: 45,
	duration: 2,
	opacity: 0,
	ease: "circ.out",
	delay: 0.5,
});

// nav links
gsap.from(".link-item", {
	rotate: 360,
	x: 50,
	opacity: 0,
	duration: 1.5,
	delay: 0.3,
	stagger: 0.5,
});

// hero heading
gsap.from(".hero-heading", {
	scrollTrigger: {
		trigger: ".hero-heading",
		toggleActions: "play resume none none",
		start: "top 60%",
		end: "+=100",
	},
	y: -150,
	scale: 0,
	duration: 2,
});
// hero heading
gsap.fromTo(
	"#hero-text",
	{ opacity: 0, x: -200 }, //from
	{
		scrollTrigger: {
			trigger: "#hero-text",
			toggleActions: "play resume none none",
			start: "20px 80%",
		},
		opacity: 1,
		x: 0,
		duration: 3,
	}
);
// hero button
gsap.to("#btn-one", {
	scaleX: 1.05,
	rotateY: 45,
	repeat: -1,
	opacity: 0.5,
	background: "#339ecc",
	duration: 2,
	yoyo: true,
});
// features
gsap.from(".feature img", {
	scrollTrigger: {
		trigger: ".features",
		toggleActions: "play resume none pause",
		start: "top center",
		end: "bottom 20%",
	},
	opacity: 0,
	duration: 4,
	stagger: 0.5,
});
// content-image content
gsap.from(".image-content .content", {
	scrollTrigger: {
		trigger: ".image-content",

		toggleActions: "play resume none none",
		start: "top center",
		end: "center 40%",
		scrub: 1,
	},
	x: -200,
	opacity: 0,
	duration: 4,
});
// quote icon
const quoetGsap = () => {
	if (window.innerWidth > 768) {
		gsap.from(".quotes", {
			scrollTrigger: "cards",
			repeat: -1,
			yoyo: true,
			ease: "back.inOut(1.7)",
			rotate: 360,
			duration: 3,
			repeatDelay: 0.2,
		});
	} else {
		gsap.from(".quotes", {
			scrollTrigger: "cards",
			repeat: -1,
			yoyo: true,
			ease: "back.inOut(1.7)",
			x: 100,
			duration: 3,
			repeatDelay: 0.2,
		});
	}
};
quoetGsap();
// card
gsap.from(".card", {
	scrollTrigger: {
		trigger: ".cards",
		scrub: true,
		start: "0 60%",
		end: "100% 60%",
	},
	x: "-=100",
	opacity: 0,
	duration: 2.5,
	stagger: 0.5,
});
// cta
gsap.from(".cta", {
	scrollTrigger: {
		trigger: "footer",
		start: "top bottom",
	},
	duration: 3,
	scale: 0,
	y: 100,
	ease: "elastic.out(1, 0.3)",
});
