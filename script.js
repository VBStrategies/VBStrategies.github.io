// Accordion (About sections)
document.querySelectorAll('.acc-head').forEach(function (head) {
  head.addEventListener('click', function () {
    head.parentElement.classList.toggle('open');
  });
});

// Blog tag filter
var filters = document.querySelectorAll('.tag-filter');
var posts = document.querySelectorAll('.blog-card');

filters.forEach(function (btn) {
  btn.addEventListener('click', function () {
    filters.forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var tag = btn.getAttribute('data-tag');

    posts.forEach(function (post) {
      var tags = post.getAttribute('data-tags') || '';
      if (tag === 'all' || tags.split(' ').indexOf(tag) !== -1) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  });
});
