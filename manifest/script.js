import { TemplateEngine } from "./templateEngine.js";
import { JsonToHtml } from "./jsonToHtml.js";

let docpageData = {};

const docPageTemplate = {
	tag: "div",
	children: [
		{
			tag: "div",
			attributes: {
				class: "overlay",
			},
		},
		{
			tag: "div",
			attributes: {
				class: "overlay2",
			},
		},
		{
			tag: "div",
			attributes: {
				class: "navbar-container",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "navbar-cont-1",
					},
					children: [
						{
							tag: "nav",
							attributes: {
								id: "nav1",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "header",
									children: [
										{
											tag: "h2",
											content: "",
										},
									],
								},
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Resources",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Simplilearn for Business",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Become an Instructor",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Hire From Us",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Reviews",
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					tag: "div",
					attributes: {
						class: "navbar-cont-2",
					},
					children: [
						{
							tag: "nav",
							attributes: {
								id: "nav2",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "header",
									children: [
										{
											tag: "div",
											attributes: {
												class: "hamburger-icon",
											},
											children: [
												{
													tag: "span",
													content: "",
												},
												{
													tag: "span",
													content: "",
												},
												{
													tag: "span",
													content: "",
												},
											],
										},
										{
											tag: "img",
											attributes: {
												src: "./assets/company_logo.png",
												alt: "Company logo",
											},
										},
										{
											tag: "div",
											attributes: {
												class: "all-courses-btn-container",
											},
											children: [
												{
													tag: "button",
													attributes: {
														class: "primary-btn",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "grids-decoration",
															},
															children: [
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
															],
														},
													],
													content: "All Courses",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "input-container",
											},
											children: [
												{
													tag: "span",
													attributes: {
														class: "header-search",
													},
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-magnifying-glass",
															},
														},
													],
												},
												{
													tag: "input",
													attributes: {
														type: "text",
														placeholder: "What do you want to learn?",
														class: "header-input",
													},
												},
											],
										},
									],
								},
								{
									tag: "input",
									attributes: {
										type: "checkbox",
										id: "nav-check",
									},
								},
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "button",
													attributes: {
														class: "outlined-btn",
													},
													content: "Sign up",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "sidebar-container",
			},
			children: [
				{
					tag: "aside",
					children: [
						{
							tag: "header",
							children: [
								{
									tag: "h5",
									content: "Menu",
								},
							],
						},
						{
							tag: "nav",
							children: [
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "All Courses",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Resources",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Simplilearn for Business",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Become an Instructor",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Hire From Us",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Digital transformation",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Reviews",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "hero",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "hero-container container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "hero-section stars",
							},
							children: [
								{
									tag: "h1",
									attributes: {
										class: "hero-title",
									},
									content:
										"Your Vision To Make A Difference, <br> <span>Our Mission</span>",
								},
								{
									tag: "p",
									attributes: {
										class: "hero-subtitle",
									},
									content: "Join the <strong>#MasaiFam</strong>",
								},
								{
									tag: "button",
									attributes: {
										class: "primary-btn",
									},
									content: "See Our Openings",
								},
								{
									tag: "div",
									attributes: {
										class: "img-container",
									},
									children: [
										{
											tag: "img",
											attributes: {
												src: "./assets/careers-heading.webp",
												alt: "Card heading",
											},
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "come-join-us",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "come-join-us-container container is-fullhd",
					},
					children: [
						{
							tag: "section",
							attributes: {
								id: "come-join-us",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "hero-section stars",
									},
									content:
										"<div class='decoration-container decoration-1'><img class='dec-1_1_img' src='./assets/quater-circle.svg' alt=''><img class='dec-1_2_img' src='./assets/top-dots.svg' alt=''></div><h2 class='hero-title'>Come Join us as an Industry Mentor!</h2><p class='hero-subtitle'>Make a difference in the tech industry by joining Masai as an industry mentor. Share your expertise and help us skill the youth for the jobs of tomorrow. Join a thriving community of outcome-driven professionals committed to empowering the next generation and building a brighter future for all.</p><button class='primary-btn'>Apply Now</button><div class='decoration-container decoration-2'><img class='dec-2_1_img' class='dec-1_1_img' src='./assets/square.svg' alt=''><img class='dec-2_2_img' src='./assets/bottom-dots.svg' alt=''></div>",
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "life-at-masai",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "life-at-masai-container container is-fullhd",
					},
					children: [
						{
							tag: "section",
							attributes: {
								id: "life-at",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "life-at-left",
									},
									content:
										"<h4>Life at Masai</h4> <div class='para-cont'> <p>In a pursuit to skill the youth of today for the jobs of tomorrow, Masai is always hard at work. With a team of over 290 employees, we’re a family of enthusiastic, efficient, and outcome-driven individuals who celebrate a culture of diverse thought processes and perspectives, encouraging everyone to bring out the best in themselves.</p> </div>",
								},
								{
									tag: "div",
									attributes: {
										class: "life-at-right",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "youtube-video",
											},
											content:
												'<iframe width="560" height="315" src="https://www.youtube.com/embed/LcANxtvUdKc?si=g59PsmAZr_Sr7YWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "masai-vision",
			},
			content:
				"<div class='masai-vision-container container is-fullhd'><section id='vision'><div class='vision-left'><div class='img-container'><img src='./assets/our-values.webp' alt='Values at Masai'></div></div><div class='vision-right'><h4>Masai's Vision & Mission</h4><div class='para-1-container'><p>We are working towards building an ecosystem where opportunities for financial stability are evenly distributed. Our vision is to create a world where every young individual realises their true potential and contributes to tomorrow’s workforce.</p></div><ul class='para-2-container'><li>1. To give the Indian youth risk free access to good quality higher education to make their families’ future financially secure.</li><li>2. To become the world's biggest outcome-driven career institute.</li><li>3. To become the top choice of companies to hire job-ready candidates.</li></ul></div></section></div>",
		},
		{
			tag: "div",
			attributes: {
				class: "why-masai",
			},
			content:
				"<div class='why-masai-container container is-fullhd'><section id='why'><div class='why-title'><h4>Why Masai?</h4></div><div class='why-content'><div class='why-content-left'><div class='why-content-left-card card-1'><div class='img-container img-container-1'><img src='./assets/1.svg' alt=''></div><h5>Employee Centric</h5><div class='why-para-left'><p>Masai works to provide a working environment conducive to professional development by giving authority over work, encouraging feedback and creating a psychologically safe space to work in.</p></div></div><div class='why-content-left-card card-2'><div class='img-container img-container-2'><img src='./assets/2.svg' alt=''></div><h5>Impact Oriented</h5><div class='why-para-left'><p>All efforts at Masai are fueled towards creating an impact and bettering lives. We work towards making sure our students, who come from varied socio-economic backgrounds, are set up for career success.</p></div></div><div class='why-content-left-card card-3'><div class='img-container img-container-3'><img src='./assets/3.svg' alt=''></div><h5>Experienced Leadership</h5><div class='why-para-left'><p>With a mix of experienced and the young, Masai is proud to have a very accomplished top brass. This provides great learning opportunities and a collaborative work ecosystem.</p></div></div><div class='why-content-left-card card-4'><div class='img-container img-container-4'><img src='./assets/4.svg' alt=''></div><h5>High Growth Environment</h5><div class='why-para-left'><p>Everyone working at Masai needs to work with high ownership. This can provide a very steep growth path for our students.</p></div></div></div><div class='why-content-right'><div class='through-title-cont'><div class='through-title-content content-1'><img src='./assets/office-1.webp' alt='Office 1'></div><div class='through-title-content content-2'><img src='./assets/office-2.webp' alt='Office 2'></div><div class='through-title-content content-3'><img src='./assets/office-3.webp' alt='Office 3'></div><div class='through-title-content content-4'><img src='./assets/office-4.webp' alt='Office 4'></div></div></div></div></section></div>",
		},
		{
			tag: "div",
			attributes: {
				class: "benefits",
			},
			content:
				"<div class='benefits-container container is-fullhd'><section id='benefits'><div class='benefits-title'><h4>Benefits and Perks</h4></div><div class='benefits-content'><div class='benefits-card card-1'><div class='img-container'><img src='./assets/heart+.svg' alt='Heart'></div><p>No Questions Asked Leave</p><div class='benefits-para'><p>All female employees get a quota of no-questions-asked leave through the year. This is in addition to the usual leaves like sick, earned or compensatory leaves.</p></div></div><div class='benefits-card card-2'><div class='img-container'><img src='./assets/note.svg' alt='Notes'></div><p>Feedback Forums</p><div class='benefits-para'><p>We enable you to interact and share your experiences with formats like 1-on-1 manager review, skip manager review & HR Connect being quarterly mandates.</p></div></div><div class='benefits-card card-3'><div class='img-container'><img src='./assets/percentage.svg' alt='Percentage'></div><p>Cross Team Mobility</p><div class='benefits-para'><p>After spending a minimum of 1 year in a role, employees can move across teams without the mandate of relevant work experience.</p></div></div><div class='benefits-card card-4'><div class='img-container'><img src='./assets/building.svg' alt='Building'></div><p>Best possible facilities in a quaint workplace</p><div class='benefits-para'><p>What!! Did you know we are right opposite Forum Nexus Mall in Koramangala! Our office has TT table, BB Vending Machine, Fridge, Coffee machine, Biometric entry and exit, Bean bag corners etc.</p></div></div><div class='benefits-card card-5'><div class='img-container'><img src='./assets/star.svg' alt='Star'></div><p>Define Your JD</p><div class='benefits-para'><p>Your involvement in projects is not bound by your job function. Oh & feel free to walk up to the founders and build your own project too!</p></div></div><div class='benefits-card card-6'><div class='img-container'><img src='./assets/cake.svg' alt='Birthday Cake'></div><p>Unlimited Celebrations</p><div class='benefits-para'><p>Be it a Birthday or Work Anniversary, festival or just in the mood to celebrate we leave no opportunity to celebrate and come together to have fun. Pssssttt we also have MEME contests!!</p></div></div></div></section></div>",
		},
		{
			tag: "div",
			attributes: {
				class: 'hear-from-team"',
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "hear-from-team-container container is-fullhd",
					},
					children: [
						{
							tag: "section",
							attributes: {
								id: "hear-from",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "hear-from-title",
									},
									content: "<h4>Hear from the Team</h4>",
								},
								{
									tag: "div",
									attributes: {
										class: "leadership-cards",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "leadership-cont",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leadership-card card-1 card",
													},
													content:
														"<div class='leader-grouped'> <div class='leader-img front'> <img src='./assets/testi-1.webp' alt='Vishakha kamath's DP' draggable='false'> </div> <div class='leader-grouped-desc'> <h5>Vishakha kamath</h5> <p class='designation'>Placements</p> </div> </div> <div class='testimonial'> <p> <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' class='inline-flex relative bottom-2 left-1'> <path d='M6.51953 16.2005V13.3605C6.51953 12.2672 6.69286 11.2538 7.03953 10.3205C7.41286 9.38722 8.03953 8.46722 8.91953 7.56055L10.4795 8.72055C9.89286 9.36055 9.4662 9.96055 9.19953 10.5205C8.93286 11.0538 8.77286 11.5872 8.71953 12.1205H10.5995V16.2005H6.51953ZM13.1595 16.2005V13.3605C13.1595 12.2672 13.3328 11.2538 13.6795 10.3205C14.0528 9.38722 14.6795 8.46722 15.5595 7.56055L17.1195 8.72055C16.5328 9.36055 16.1062 9.96055 15.8395 10.5205C15.5728 11.0538 15.4128 11.5872 15.3595 12.1205H17.2395V16.2005H13.1595Z' fill='#ED0331'></path> </svg> It's been 1.5years of incredible journey at Masai. It's lovely to be part of an organisation where you see like-minded people focused on creating an impact in the lives of students we are working with. It's a roller coaster ride being part of a fast-paced, growing organisation like Masai. From starting with coordinating with 30-40 students in placements, being part of their last leg of the journey, hustling with them, to help them to get that breakthrough to now seeing 1000s of students getting placed is heart warming. <svg class='inline-flex relative bottom-1.5 -left-1' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M17.4805 7.79945L17.4805 10.6395C17.4805 11.7328 17.3071 12.7462 16.9605 13.6795C16.5871 14.6128 15.9605 15.5328 15.0805 16.4395L13.5205 15.2795C14.1071 14.6395 14.5338 14.0395 14.8005 13.4795C15.0671 12.9462 15.2271 12.4128 15.2805 11.8795L13.4005 11.8795L13.4005 7.79945L17.4805 7.79945ZM10.8405 7.79945L10.8405 10.6395C10.8405 11.7328 10.6672 12.7462 10.3205 13.6795C9.94717 14.6128 9.32047 15.5328 8.44047 16.4395L6.88047 15.2795C7.46717 14.6395 7.89377 14.0395 8.16047 13.4795C8.42717 12.9462 8.58717 12.4128 8.64047 11.8795L6.76047 11.8795L6.76047 7.79945L10.8405 7.79945Z' fill='#ED0331'></path> </svg> </p> </div>",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "leadership-cont",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leadership-card card-2 card",
													},
													content:
														"<div class='leader-grouped'> <div class='leader-img front'> <img src='./assets/testi-2.webp' alt='Vineet Pandey's DP' draggable='false'> </div> <div class='leader-grouped-desc'> <h5>Vineet Pandey</h5> <p class='designation'>Operations</p> </div> </div> <div class='testimonial'> <p> <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' class='inline-flex relative bottom-2 left-1'> <path d='M6.51953 16.2005V13.3605C6.51953 12.2672 6.69286 11.2538 7.03953 10.3205C7.41286 9.38722 8.03953 8.46722 8.91953 7.56055L10.4795 8.72055C9.89286 9.36055 9.4662 9.96055 9.19953 10.5205C8.93286 11.0538 8.77286 11.5872 8.71953 12.1205H10.5995V16.2005H6.51953ZM13.1595 16.2005V13.3605C13.1595 12.2672 13.3328 11.2538 13.6795 10.3205C14.0528 9.38722 14.6795 8.46722 15.5595 7.56055L17.1195 8.72055C16.5328 9.36055 16.1062 9.96055 15.8395 10.5205C15.5728 11.0538 15.4128 11.5872 15.3595 12.1205H17.2395V16.2005H13.1595Z' fill='#ED0331'></path> </svg> I have been working in Masai for almost two years now. The journey, till now, has been synonymous to metamorphosis of a butterfly, challenging in start yet colourful, bright and with wings in the end. Gratitude and empathy for humans in general forms the core of Masai, and hence students, employees, associates all are handled with similar ethos. Masai breeds open culture - No forced dress code, no red taping, no stereotypical boss or yes sir culture.<svg class='inline-flex relative bottom-1.5 -left-1' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M17.4805 7.79945L17.4805 10.6395C17.4805 11.7328 17.3071 12.7462 16.9605 13.6795C16.5871 14.6128 15.9605 15.5328 15.0805 16.4395L13.5205 15.2795C14.1071 14.6395 14.5338 14.0395 14.8005 13.4795C15.0671 12.9462 15.2271 12.4128 15.2805 11.8795L13.4005 11.8795L13.4005 7.79945L17.4805 7.79945ZM10.8405 7.79945L10.8405 10.6395C10.8405 11.7328 10.6672 12.7462 10.3205 13.6795C9.94717 14.6128 9.32047 15.5328 8.44047 16.4395L6.88047 15.2795C7.46717 14.6395 7.89377 14.0395 8.16047 13.4795C8.42717 12.9462 8.58717 12.4128 8.64047 11.8795L6.76047 11.8795L6.76047 7.79945L10.8405 7.79945Z' fill='#ED0331'></path> </svg> </p> </div>",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "leadership-cont",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leadership-card card-3 card",
													},
													content:
														"<div class='leader-grouped'> <div class='leader-img front'> <img src='./assets/testi-3.webp' alt='Sakshi Malhotra's DP' draggable='false'> </div> <div class='leader-grouped-desc'> <h5>Sakshi Malhotra</h5> <p class='designation'>Human Resources</p> </div> </div> <div class='testimonial'> <p> <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' class='inline-flex relative bottom-2 left-1'> <path d='M6.51953 16.2005V13.3605C6.51953 12.2672 6.69286 11.2538 7.03953 10.3205C7.41286 9.38722 8.03953 8.46722 8.91953 7.56055L10.4795 8.72055C9.89286 9.36055 9.4662 9.96055 9.19953 10.5205C8.93286 11.0538 8.77286 11.5872 8.71953 12.1205H10.5995V16.2005H6.51953ZM13.1595 16.2005V13.3605C13.1595 12.2672 13.3328 11.2538 13.6795 10.3205C14.0528 9.38722 14.6795 8.46722 15.5595 7.56055L17.1195 8.72055C16.5328 9.36055 16.1062 9.96055 15.8395 10.5205C15.5728 11.0538 15.4128 11.5872 15.3595 12.1205H17.2395V16.2005H13.1595Z' fill='#ED0331'></path> </svg> I joined Masai in 2022 May as Senior Manager - Human Resources. In my position, each day presents a new challenge and learning opportunity. Masai is a great place to work and strives for a friendly, team-oriented environment, are sensitive to balancing work and personal time, and are always ready to provide assistance or education to help you learn new skills. I feel the camaraderie in the office between all levels of employees, which creates an energetic work environment where one can easily create and share new ideas. Opportunities are limitless, if you are ambitious. <svg class='inline-flex relative bottom-1.5 -left-1' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M17.4805 7.79945L17.4805 10.6395C17.4805 11.7328 17.3071 12.7462 16.9605 13.6795C16.5871 14.6128 15.9605 15.5328 15.0805 16.4395L13.5205 15.2795C14.1071 14.6395 14.5338 14.0395 14.8005 13.4795C15.0671 12.9462 15.2271 12.4128 15.2805 11.8795L13.4005 11.8795L13.4005 7.79945L17.4805 7.79945ZM10.8405 7.79945L10.8405 10.6395C10.8405 11.7328 10.6672 12.7462 10.3205 13.6795C9.94717 14.6128 9.32047 15.5328 8.44047 16.4395L6.88047 15.2795C7.46717 14.6395 7.89377 14.0395 8.16047 13.4795C8.42717 12.9462 8.58717 12.4128 8.64047 11.8795L6.76047 11.8795L6.76047 7.79945L10.8405 7.79945Z' fill='#ED0331'></path> </svg> </p> </div>",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "leadership-cont",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leadership-card card-4 card",
													},
													content:
														"<div class='leader-grouped'> <div class='leader-img front'> <img src='./assets/testi-4.webp' alt='Pawan Pathak's DP' draggable='false'> </div> <div class='leader-grouped-desc'> <h5>Pawan Pathak</h5> <p class='designation'>Holistic Development</p> </div> </div> <div class='testimonial'> <p> <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' class='inline-flex relative bottom-2 left-1'> <path d='M6.51953 16.2005V13.3605C6.51953 12.2672 6.69286 11.2538 7.03953 10.3205C7.41286 9.38722 8.03953 8.46722 8.91953 7.56055L10.4795 8.72055C9.89286 9.36055 9.4662 9.96055 9.19953 10.5205C8.93286 11.0538 8.77286 11.5872 8.71953 12.1205H10.5995V16.2005H6.51953ZM13.1595 16.2005V13.3605C13.1595 12.2672 13.3328 11.2538 13.6795 10.3205C14.0528 9.38722 14.6795 8.46722 15.5595 7.56055L17.1195 8.72055C16.5328 9.36055 16.1062 9.96055 15.8395 10.5205C15.5728 11.0538 15.4128 11.5872 15.3595 12.1205H17.2395V16.2005H13.1595Z' fill='#ED0331'></path> </svg> Its been a great journey, learnt a lot under Yogesh's leadership and happy that I am contributing towards Bharat's Skill Development. <svg class='inline-flex relative bottom-1.5 -left-1' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M17.4805 7.79945L17.4805 10.6395C17.4805 11.7328 17.3071 12.7462 16.9605 13.6795C16.5871 14.6128 15.9605 15.5328 15.0805 16.4395L13.5205 15.2795C14.1071 14.6395 14.5338 14.0395 14.8005 13.4795C15.0671 12.9462 15.2271 12.4128 15.2805 11.8795L13.4005 11.8795L13.4005 7.79945L17.4805 7.79945ZM10.8405 7.79945L10.8405 10.6395C10.8405 11.7328 10.6672 12.7462 10.3205 13.6795C9.94717 14.6128 9.32047 15.5328 8.44047 16.4395L6.88047 15.2795C7.46717 14.6395 7.89377 14.0395 8.16047 13.4795C8.42717 12.9462 8.58717 12.4128 8.64047 11.8795L6.76047 11.8795L6.76047 7.79945L10.8405 7.79945Z' fill='#ED0331'></path> </svg> </p> </div>",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "leadership-cont",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leadership-card card-5 card",
													},
													content:
														"<div class='leader-grouped'> <div class='leader-img front'> <img src='./assets/testi-5.webp' alt='Sourav Gupta's DP' draggable='false'> </div> <div class='leader-grouped-desc'> <h5>Sourav Gupta</h5> <p class='designation'>Data Analytics</p> </div> </div> <div class='testimonial'> <p> <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' class='inline-flex relative bottom-2 left-1'> <path d='M6.51953 16.2005V13.3605C6.51953 12.2672 6.69286 11.2538 7.03953 10.3205C7.41286 9.38722 8.03953 8.46722 8.91953 7.56055L10.4795 8.72055C9.89286 9.36055 9.4662 9.96055 9.19953 10.5205C8.93286 11.0538 8.77286 11.5872 8.71953 12.1205H10.5995V16.2005H6.51953ZM13.1595 16.2005V13.3605C13.1595 12.2672 13.3328 11.2538 13.6795 10.3205C14.0528 9.38722 14.6795 8.46722 15.5595 7.56055L17.1195 8.72055C16.5328 9.36055 16.1062 9.96055 15.8395 10.5205C15.5728 11.0538 15.4128 11.5872 15.3595 12.1205H17.2395V16.2005H13.1595Z' fill='#ED0331'></path> </svg> I have had an incredibly positive experience working at Masai. From the moment I joined the team, I felt welcomed and supported by my colleagues. The company culture is one of collaboration, innovation, and continuous learning, which has made for a dynamic and rewarding work environment. The leadership at Masai is also top-notch. The management team is approachable, supportive, and always willing to listen to ideas and feedback. <svg class='inline-flex relative bottom-1.5 -left-1' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M17.4805 7.79945L17.4805 10.6395C17.4805 11.7328 17.3071 12.7462 16.9605 13.6795C16.5871 14.6128 15.9605 15.5328 15.0805 16.4395L13.5205 15.2795C14.1071 14.6395 14.5338 14.0395 14.8005 13.4795C15.0671 12.9462 15.2271 12.4128 15.2805 11.8795L13.4005 11.8795L13.4005 7.79945L17.4805 7.79945ZM10.8405 7.79945L10.8405 10.6395C10.8405 11.7328 10.6672 12.7462 10.3205 13.6795C9.94717 14.6128 9.32047 15.5328 8.44047 16.4395L6.88047 15.2795C7.46717 14.6395 7.89377 14.0395 8.16047 13.4795C8.42717 12.9462 8.58717 12.4128 8.64047 11.8795L6.76047 11.8795L6.76047 7.79945L10.8405 7.79945Z' fill='#ED0331'></path> </svg> </p> </div>",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "leadership-cont",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leadership-card card-6 card",
													},
													content:
														"<div class='leader-grouped'> <div class='leader-img front'> <img src='./assets/testi-6.webp' alt='Supriya Singh's DP' draggable='false'> </div> <div class='leader-grouped-desc'> <h5>Supriya Singh</h5> <p class='designation'>Operations</p> </div> </div> <div class='testimonial'> <p> <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' class='inline-flex relative bottom-2 left-1'> <path d='M6.51953 16.2005V13.3605C6.51953 12.2672 6.69286 11.2538 7.03953 10.3205C7.41286 9.38722 8.03953 8.46722 8.91953 7.56055L10.4795 8.72055C9.89286 9.36055 9.4662 9.96055 9.19953 10.5205C8.93286 11.0538 8.77286 11.5872 8.71953 12.1205H10.5995V16.2005H6.51953ZM13.1595 16.2005V13.3605C13.1595 12.2672 13.3328 11.2538 13.6795 10.3205C14.0528 9.38722 14.6795 8.46722 15.5595 7.56055L17.1195 8.72055C16.5328 9.36055 16.1062 9.96055 15.8395 10.5205C15.5728 11.0538 15.4128 11.5872 15.3595 12.1205H17.2395V16.2005H13.1595Z' fill='#ED0331'></path> </svg> Masai School, the first word that I can relate to is ‘transparency’, our processes and mission & vision stand on foundation of trust and transparency. We are a result driven company, with highly ambitious workforce. My work gives me an opportunity to bring a change and positively impact people’s life. Employee well-being is a top priority here, one of its kind, its like a second home wherein people care. On a light note, hardly any workplace will add fruit bowls to start your day and ensure well-being in truest sense! Happy to be a part of a great place to work! <svg class='inline-flex relative bottom-1.5 -left-1' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M17.4805 7.79945L17.4805 10.6395C17.4805 11.7328 17.3071 12.7462 16.9605 13.6795C16.5871 14.6128 15.9605 15.5328 15.0805 16.4395L13.5205 15.2795C14.1071 14.6395 14.5338 14.0395 14.8005 13.4795C15.0671 12.9462 15.2271 12.4128 15.2805 11.8795L13.4005 11.8795L13.4005 7.79945L17.4805 7.79945ZM10.8405 7.79945L10.8405 10.6395C10.8405 11.7328 10.6672 12.7462 10.3205 13.6795C9.94717 14.6128 9.32047 15.5328 8.44047 16.4395L6.88047 15.2795C7.46717 14.6395 7.89377 14.0395 8.16047 13.4795C8.42717 12.9462 8.58717 12.4128 8.64047 11.8795L6.76047 11.8795L6.76047 7.79945L10.8405 7.79945Z' fill='#ED0331'></path> </svg> </p> </div>",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "leadership-cont",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "leadership-card card-7 card",
													},
													content:
														"<div class='leader-grouped'> <div class='leader-img front'> <img src='./assets/testi-7.webp' alt='Kajal Koyyana's DP' draggable='false'> </div> <div class='leader-grouped-desc'> <h5>Kajal Koyyana</h5> <p class='designation'>Product</p> </div> </div> <div class='testimonial'> <p> <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' class='inline-flex relative bottom-2 left-1'> <path d='M6.51953 16.2005V13.3605C6.51953 12.2672 6.69286 11.2538 7.03953 10.3205C7.41286 9.38722 8.03953 8.46722 8.91953 7.56055L10.4795 8.72055C9.89286 9.36055 9.4662 9.96055 9.19953 10.5205C8.93286 11.0538 8.77286 11.5872 8.71953 12.1205H10.5995V16.2005H6.51953ZM13.1595 16.2005V13.3605C13.1595 12.2672 13.3328 11.2538 13.6795 10.3205C14.0528 9.38722 14.6795 8.46722 15.5595 7.56055L17.1195 8.72055C16.5328 9.36055 16.1062 9.96055 15.8395 10.5205C15.5728 11.0538 15.4128 11.5872 15.3595 12.1205H17.2395V16.2005H13.1595Z' fill='#ED0331'></path> </svg> Having spent a little over than 2 years at Masai, it would be evident that my experience has been an extremely satisfying and amazing one! While starting out in the Marketing team as a Brand Manager and later moving to the Product team now as an Associate Product Manager. I’d first highlight the giving and empathising attitude that every team member has; Secondly, the startup drive where the energy is always at a high. Lastly the space to experiment and make mistakes, to see things come to light has been a constant gratifying adventure! Once you’re a Masai-an, you’re always a Masai-an. <svg class='inline-flex relative bottom-1.5 -left-1' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M17.4805 7.79945L17.4805 10.6395C17.4805 11.7328 17.3071 12.7462 16.9605 13.6795C16.5871 14.6128 15.9605 15.5328 15.0805 16.4395L13.5205 15.2795C14.1071 14.6395 14.5338 14.0395 14.8005 13.4795C15.0671 12.9462 15.2271 12.4128 15.2805 11.8795L13.4005 11.8795L13.4005 7.79945L17.4805 7.79945ZM10.8405 7.79945L10.8405 10.6395C10.8405 11.7328 10.6672 12.7462 10.3205 13.6795C9.94717 14.6128 9.32047 15.5328 8.44047 16.4395L6.88047 15.2795C7.46717 14.6395 7.89377 14.0395 8.16047 13.4795C8.42717 12.9462 8.58717 12.4128 8.64047 11.8795L6.76047 11.8795L6.76047 7.79945L10.8405 7.79945Z' fill='#ED0331'></path> </svg> </p> </div>",
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "hear-from-arrows",
									},
									children: [
										{
											tag: "span",
											attributes: {
												class: "arr left-arr",
											},
											content: "<i class='fa-solid fa-chevron-left'></i>",
										},
										{
											tag: "span",
											attributes: {
												class: "arr right-arr",
											},
											content: "<i class='fa-solid fa-chevron-right'></i>",
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "join-our-masai",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "join-our-masai-container container is-fullhd",
					},
					children: [
						{
							tag: "section",
							attributes: {
								id: "join-our",
							},
							children: [
								{
									tag: "h4",
									content: "Join Or Masai Tribe",
								},
								{
									tag: "div",
									attributes: {
										class: "join-para",
									},
									content:
										'<p>"If you are passionate about working in tech and looking for roles at Masai."</p> <div class="btn-container"> <button class="primary-btn">see our openings</button> </div>',
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "footer",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "footer-cotnainer container is-fullhd",
					},
					children: [
						{
							tag: "footer",
							attributes: {
								id: "footer",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "footer-title",
									},
									content:
										"<div class='img-container'><img src='./assets/company_logo.svg' alt='Company logo'></div><div class='sm-logos-cont'><p>Follow Us:<span><i class='fa-brands fa-x-twitter'></i></span><span><i class='fa-brands fa-facebook'></i></span><span><i class='fa-brands fa-linkedin'></i></span><span><i class='fa-brands fa-instagram'></i></span><span><i class='fa-brands fa-github'></i></span><span><i class='fa-brands fa-youtube'></i></span></p></div>",
								},
								{
									tag: "div",
									attributes: {
										class: "footer-labels",
									},
									content:
										"<div class='footer-labels-left'><span>Full Stack Web Development - Full Time</span><span>Data Analytics - Full Time</span><span>Software Testing & Automation - Full Time</span><span>Micro Credit Program in Computer Science from IIT Guwahati</span></div><div class='footer-labels-right'></div>",
								},
								{
									tag: "div",
									attributes: {
										class: "footer-menus",
									},
									content:
										"<ul class='menus'><li>Success Stories</li><li>Out Team</li><li>Careers</li><li>Masai Blog</li><li>Talent Circle</li><li>Masai School Admissions Test (MSAT)</li></ul><ul class='menus'><li>Hire From Us</li><li>Our Investors</li><li>Newsroom</li><li>Contact Us</li><li>Become Coach</li><li>Micro-Credit Program in Computer Science from IIT Guwahati (Benchmarking Test)</li></ul><ul class='menus'><li>About Us</li><li>FAQ</li><li>Referral Program</li><li>Masai Learn</li><li>Industry Mentors</li></ul><ul class='connect-menus'><li>Connect with a growing community of learners</li><li><span><i class='fa-brands fa-telegram'></i></span> join our telegram</li></ul>",
								},
								{
									tag: "div",
									attributes: {
										class: "footer-foot",
									},
									content:
										"<p>Copyright &copy; nolan edutech private limited, All rights reserved</p><p><a href='#'>Privacy Policy</a> <a href='#'>Terms & Conditions</a></p>",
								},
							],
						},
					],
				},
			],
		},
	],
};

let temp = TemplateEngine.populate(docPageTemplate, docpageData);
console.log(temp);

let html = JsonToHtml.convert(temp);
console.log(html);
document.getElementById("app").innerHTML = html;

////////////////////////////////////////////////////////////////////////

// const inputContainer = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container"
// );
// const inputEl = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container input"
// );
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// inputContainer.addEventListener("click", () => {
//   modal.classList.add("active");
//   overlay.classList.add("active");
//   inputEl.blur();
// });

// document.addEventListener(
//   "click",
//   (e) => {
//     if (e.target.matches(".modal")) return;
//   },
//   { once: true }
// );

// overlay.addEventListener("click", (e) => {
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// });

// // Active toggle
// const firstToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .first-toggle .toggle-first"
// );
// const firstToggleContasiner = document.querySelector(
//   ".toggle-btn-container .first-toggle"
// );

// const secondToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .second-toggle .toggle-first"
// );
// const secondToggleContasiner = document.querySelector(
//   ".toggle-btn-container .second-toggle"
// );

// firstToggleBtnEls.forEach((firstToggleBtnEl) => {
//   firstToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(".toggle-btn-container .first-toggle .toggle-first.active")
//       ?.classList.remove("active");
//     firstToggleBtnEl.classList.add("active");
//   });
// });

// secondToggleBtnEls.forEach((secondToggleBtnEl) => {
//   secondToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(
//         ".toggle-btn-container .second-toggle .toggle-first.active"
//       )
//       ?.classList.remove("active");
//     secondToggleBtnEl.classList.add("active");
//   });
// });

// // Dropdown popup
// const dropdownBtn = document.querySelector(".dropdown-attribute");
// const dropdownContainer = document.querySelector(".toggle-dropdown-container");

// dropdownBtn.addEventListener("click", (e) => {
//   dropdownContainer.classList.toggle("active");
// });

// const dropDown1 = document.querySelector(".dropd-1");
// const dropDown2 = document.querySelector(".dropd-2");
// const darkModeDropDown = document.querySelector(".darkmode-droppdown-popup");
// const versionModeDropDown = document.querySelector(".version-droppdown-popup");

// dropDown1.addEventListener("click", () => {
//   versionModeDropDown.classList.toggle("active");
// });

// dropDown2.addEventListener("click", () => {
//   darkModeDropDown.classList.toggle("active");
// });
