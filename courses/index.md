---
title: Courses
nav:
  order: 5
  tooltip: Teaching and training
---

# {% include icon.html icon="fa-solid fa-graduation-cap" %} Courses

Here are some of the courses we teach and offer in our lab.

{% include search-box.html %}

{% for course in site.courses %}
  <div class="post-excerpt-container">
    <div class="post-excerpt">
      {% assign url = course.url %}
      {% assign title = course.title %}
      {% assign image = course.image %}

      {% if image %}
        <a href="{{ url }}" class="post-excerpt-image">
          <img src="{{ image | relative_url }}" alt="{{ title }}">
        </a>
      {% endif %}

      <div class="post-excerpt-text">
        <a href="{{ url }}">{{ title }}</a>
        <p>{{ course.description }}</p>
      </div>
    </div>
  </div>
{% endfor %}
