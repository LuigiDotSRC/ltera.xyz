---
title: ltera.xyz
layout: layout.njk
---
# Hello, I'm Luigi
#### Software developer, Computer Science @ TMU

### /posts
{% for post in collections.posts | reverse %}
- [{{ post.data.title }}]({{ post.url }}) <small>{{ post.date.toISOString().slice(0, 10) }}</small>
{% endfor %}