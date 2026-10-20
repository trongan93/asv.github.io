---
title: Courses
nav:
  order: 5
  tooltip: Teaching and training
---

# {% include icon.html icon="fa-solid fa-graduation-cap" %} Courses

Here are some of the courses we teach and offer in our lab.

{% comment %}
  courses that have a recorded lecture series get a player at the top of
  the page, so a reader can start watching without opening the course first
{% endcomment %}
{% assign recorded = site.courses | where_exp: "c", "c.playlist" %}
{% for course in recorded %}
<div class="course-video">
  <div class="course-video-player">
    <iframe
      src="https://www.youtube-nocookie.com/embed/videoseries?list={{ course.playlist }}"
      title="{{ course.title }}"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen></iframe>
  </div>
  <div class="course-video-text">
    <p class="course-video-kicker">{% include icon.html icon="fa-brands fa-youtube" %} 課程錄影 Lecture series · NTUT ON AIR</p>
    <p class="course-video-title"><a href="{{ course.url | relative_url }}">{{ course.title }}</a></p>
    <p>{{ course.description }}</p>
    <p>{{ course.videos }} 講完整錄影，由國立臺北科技大學 NTUT ON AIR 製作。<br>{{ course.videos }} full lectures, produced by NTUT ON AIR, National Taipei University of Technology.</p>
    {%
      include button.html
      link=course.url
      text="Course page & all lectures"
      icon="fa-solid fa-arrow-right"
      flip=true
      style="bare"
    %}
  </div>
</div>
{% endfor %}

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
        {% if course.playlist %}
          <a href="https://www.youtube.com/playlist?list={{ course.playlist }}" class="course-watch" target="_blank" rel="noopener">
            {% include icon.html icon="fa-brands fa-youtube" %} Watch the {{ course.videos }}-lecture series on YouTube
          </a>
        {% endif %}
      </div>
    </div>
  </div>
{% endfor %}
