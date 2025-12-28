// Slidebar
const openBtn = document.querySelector(".open-menu");
const closeBtn = document.querySelector(".close-menu");
const sidebar = document.querySelector(".sidebar");
// Blogs
const blogContainer = document.getElementById("blogContainer");
const blogs = document.querySelectorAll(".blog");

let blog = [
  {
    id: 1,
    cover: "blog-img-4.jpg",
    description: " Let’s bring your ideas to life! Contact me, and let’s",
  },
  {
    id: 2,
    cover: "blog-img-5.jpg",
    description: "Inspiring the World, One Project at a Time for the man",
  },
  {
    id: 3,
    cover: "blog-img-6.jpg",
    description: "Each one showcases my approach and dedication man",
  },
];

const createBlogs = () => {
  blogContainer.innerHTML = "";
  blog.forEach((result) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("rounded-3xl", "border", "border-zinc-700");

    blogCard.innerHTML = `
      <div>
        <a href="#">
          <img
            class="rounded-3xl w-full"
            src="/public/images/${result.cover}"
            alt="blog"
          />
        </a>
    </div>
    <div class="p-8">
      <h2 class="text-white font-bold text-2xl pb-3">
        ${result.description}
      </h2>
      <a class="text-zinc-400" href="#">Read More </a>
    </div>
    `;
    blogContainer.appendChild(blogCard);
  });
};
createBlogs();

// Slidebar
const openMenu = () => {
  openBtn.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
  });
};
openMenu();

const closeMenu = () => {
  closeBtn.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
  });
};
closeMenu();
