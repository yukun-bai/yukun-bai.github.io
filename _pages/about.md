---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
  - /cv/
  - /resume
  - /publications/
---

{% include base_path %}

I am an M.Sc. student in Signal Processing and Machine Learning at the School of Electrical and Electronic Engineering, Nanyang Technological University (NTU), Singapore. I work on embodied AI for robot manipulation, and I have hands-on experience training and deploying policies on real robot arms. I received my B.Eng. in Software Engineering from Dalian University of Technology.

Research interests
======

* **Vision-language-action models and visual grounding.** Giving robot policies a precise sense of *where* to act, by grounding language and perception before generating actions.
* **Real-world online reinforcement learning.** Sample-efficient, human-in-the-loop learning on physical robots, with a focus on sparse rewards and contact-rich manipulation.
* **Embodied memory.** Short-term and long-term memory that lets a policy notice failures, use recent feedback and avoid repeating mistakes.
* **Robot agents.** Autonomous exploration and continual learning, where agents use perception and planning tools and turn successful experience into reusable skills.

Education
======

* M.Sc. in Signal Processing and Machine Learning, Nanyang Technological University, 2025 – 2027 (expected)
  * School of Electrical and Electronic Engineering; CGPA 4.50 / 5.00
* B.Eng. in Software Engineering, Dalian University of Technology, 2021 – 2025
  * GPA 3.64; University Academic Excellence Scholarship (second class); Science and Technology Innovation Scholarship

Experience
======

* Embodied AI Algorithm Intern, Noetix Robotics, Jun 2026 – Sep 2026
* Research Intern, A*STAR, Jan 2026 – May 2026
* Research, PINE Lab, Nanyang Technological University, Sep 2025 – Jan 2026
* SoC Software Development Intern, VOYAH, Wuhan, Oct 2024 – Apr 2025

Publications
======

<ul>{% for post in site.publications reversed %}{% if post.category == "manuscripts" %}
  {% include archive-single-cv.html %}
{% endif %}{% endfor %}</ul>

Patents
======

<ul>{% for post in site.publications reversed %}{% if post.category == "patents" %}
  {% include archive-single-cv.html %}
{% endif %}{% endfor %}</ul>

Skills
======

* Methods: imitation learning, diffusion and flow matching, reinforcement learning, vision-language-action models
* Engineering: PyTorch, JAX, LeRobot, openpi; distributed training; real-robot deployment

Honors
======

* MCM/ICM Finalist (F Award), 2023
* MathorCup Mathematical Modeling Challenge, National Third Prize, 2023
* Chinese Mathematics Competitions, National Third Prize, 2022
* Asia-Pacific Mathematical Contest in Modeling (APMCM), National Third Prize, 2022

Contact
======

Email: [baiyukun0827@163.com](mailto:baiyukun0827@163.com) · GitHub: [yukun-bai](https://github.com/yukun-bai)
