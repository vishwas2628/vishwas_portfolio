---
layout: default
title: "Home Redirect"
permalink: /home/
---

<script>
  window.location.replace("{{ '/' | relative_url }}");
</script>
<meta http-equiv="refresh" content="0; url={{ '/' | relative_url }}">

<div class="page-container" style="text-align: center; padding: 4rem 1rem;">
  <p>Redirecting to <a href="{{ '/' | relative_url }}">Home page</a>...</p>
</div>
