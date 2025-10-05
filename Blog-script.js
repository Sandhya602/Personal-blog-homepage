const posts = [
  {title: "Latest Tech Trends", category: "Tech", img: "https://via.placeholder.com/400x200", desc: "Discover the latest in technology...", date: "2025-10-01"},
  {title: "Traveling to Japan", category: "Travel", img: "https://via.placeholder.com/400x200", desc: "My adventures across Japan...", date: "2025-09-28"},
  {title: "Best Food Recipes", category: "Food", img: "https://via.placeholder.com/400x200", desc: "Delicious recipes to try at home...", date: "2025-09-25"},
  {title: "AI in Daily Life", category: "Tech", img: "https://via.placeholder.com/400x200", desc: "How AI is changing our routine...", date: "2025-09-20"},
  {title: "Backpacking Europe", category: "Travel", img: "https://via.placeholder.com/400x200", desc: "Tips for an unforgettable trip...", date: "2025-09-18"},
  {title: "Healthy Eating Tips", category: "Food", img: "https://via.placeholder.com/400x200", desc: "Simple habits for better health...", date: "2025-09-15"},
  {title: "Cloud Computing 101", category: "Tech", img: "https://via.placeholder.com/400x200", desc: "Basics of cloud technology...", date: "2025-09-10"},
  {title: "Exploring Italy", category: "Travel", img: "https://via.placeholder.com/400x200", desc: "Must-visit places in Italy...", date: "2025-09-05"},
  {title: "Quick Dinner Recipes", category: "Food", img: "https://via.placeholder.com/400x200", desc: "Tasty dinners in 30 mins...", date: "2025-09-01"},
];

// Pagination
const postsPerPage = 4;
let currentPage = 1;
let filteredPosts = posts;

const blogContainer = document.getElementById('blog-posts');
const pageInfo = document.getElementById('page-info');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function renderPosts() {
  blogContainer.innerHTML = "";
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const postsToShow = filteredPosts.slice(start, end);

  postsToShow.forEach(post => {
    const card = document.createElement('div');
    card.className = "blog-card";
    card.innerHTML = `
      <img src="${post.img}" alt="${post.title}">
      <div class="content">
        <h3>${post.title}</h3>
        <p>${post.desc}</p>
        <div class="date">${post.date}</div>
      </div>
    `;
    blogContainer.appendChild(card);
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) currentPage--;
  renderPosts();
});

nextBtn.addEventListener('click', () => {
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  if (currentPage < totalPages) currentPage++;
  renderPosts();
});

// Filter
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.category;
    filteredPosts = category === "all" ? posts : posts.filter(p => p.category === category);
    currentPage = 1;
    renderPosts();
  });
});

// Initial render
renderPosts();

