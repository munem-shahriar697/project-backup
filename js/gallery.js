
								document.addEventListener("DOMContentLoaded", function () {
									const servicesContainer = document.querySelector(".service");

									// Initial images for filter 1
									const filter1Images = [
										"images\\gallery-1-1.jpg",
										"images\\gallery-1-2.jpg",
										"images\\gallery-1-3.jpg"
									];

									// Function to populate images based on the selected filter
									function populateImages(images) {
										servicesContainer.innerHTML = "";
										const imageWrapper = document.createElement("div");
										imageWrapper.classList.add("image-wrapper");
										images.forEach(image => {
											const imageElement = document.createElement("img");
											imageElement.src = image;
											imageWrapper.appendChild(imageElement);
										});
										servicesContainer.appendChild(imageWrapper);
									}

									// Initial population of images for filter 1
									populateImages(filter1Images);

									// Filters
									const filterButtons = document.querySelectorAll(".filter-button");

									filterButtons.forEach(button => {
										button.addEventListener("click", function () {
											// Clear active class from all buttons
											filterButtons.forEach(btn => btn.classList.remove("active"));
											// Add active class to the clicked button
											this.classList.add("active");

											// Filter images based on the filter
											switch (this.dataset.filter) {
												case "filter1":
													populateImages(filter1Images);
													break;
												case "filter2":
													populateImages([
													"images\\gallery-2-1.jpg",
													"images\\gallery-2-2.jpg",
													"images\\gallery-2-3.jpg"
													]);
													break;
												case "filter3":
													populateImages([
													"images\\gallery-3-1.jpg",
													"images\\gallery-3-2.jpg",
													"images\\gallery-3-3.jpg"
													]);
													break;
											}
										});
									});
								});

