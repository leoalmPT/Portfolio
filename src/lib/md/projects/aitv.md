## Overview

[Repository](https://github.com/HaCaTeam/desafio1) - [Video Demo](https://youtube.com/shorts/V9ueXWC6tC0)

This project secured **1st place** at the [Aveiro Tech City Hackathon 2024](/recognition/hackathon2024). The challenge, "Media Dive" by Altice Labs, focused on exploring novel ways to interact with and consume television content, using Altice Labs' Media Dive metadata enrichment platform. Our solution aimed to transform the TV viewing experience through deep personalization and engaging, summarized content.

## Prototype Video

<iframe class="aspect-1/2 rounded-lg border-2 max-w-[400px]"src="https://www.youtube.com/embed/V9ueXWC6tC0" title="Hackathon AITV demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## About the Project

The core problem addressed was the static and often fragmented nature of current TV content consumption, particularly in shared household devices where individual user preferences are not adequately served. Existing TV offerings often lack the granularity and personalization needed to cater to diverse viewing habits.

Our solution tackled this in two main phases:

1.  **User Profile Identification and Personalized Recommendation:**
    *   We leveraged the EPG API to identify programs and the Media Dive API to map them to specific topics (e.g., 'Education', 'Politics', 'Sports').
    *   User personas were created based on consumption patterns, including viewing time per topic, number of skips, and recordings per topic. This allowed for the disaggregation of consumption profiles, even on a single device.
    *   A **PyTorch meta-model** was developed to combine these indicators and calculate the percentage of interest per topic for each user profile. This meta-model then determined the relevance of programs for the current user, ordering them accordingly.

2.  **Summarized and Engaging Content Presentation:**
    *   Using the transcripts provided by Media Dive, we employed **Generative Artificial Intelligence**, specifically open-source models like **Mistral AI** and **Llama 3.1**, to create concise summaries.
    *   These summaries were transformed into easily digestible "headlines" and short video clips, offering a quick and appealing way to discover content.
    *   The inclusion of shareable links for this rapid content was designed to foster community engagement around programs and enhance user retention.

The project's success lay in its innovative approach to understanding individual consumption within shared contexts and delivering highly relevant, bite-sized content, making TV viewing more intuitive and personalized.

## Final Thoughts

Our solution for the Media Dive challenge successfully reimagined TV content consumption by focusing on deep user personalization and AI-driven content summarization. This project not only met the hackathon's objectives but also demonstrated a practical and innovative application of AI in media, ultimately leading to our first-place victory. It showcases the potential for more engaging and tailored media experiences in the future.