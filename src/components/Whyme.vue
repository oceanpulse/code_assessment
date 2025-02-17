<template>
  <v-container
    class="pa-sm-6 pa-md-12"
    fluid
  >
    <v-responsive
      class="text-center mx-auto"
      max-width="800"
    >
      <p class="font-weight-medium text-amber">
        Clint Edward
      </p>

      <p class="mt-2 text-h5 font-weight-bold text-md-h4">
        Everything you need on why you should to hire me.
      </p>

      <p class="mt-4 text-body-1 text-medium-emphasis">
        Learn about my skills, experience, and passion for software development.
      </p>
    </v-responsive>

    <v-row class="mt-8">
      <v-col
        v-for="(item, i) in features"
        :key="i"
        class="d-flex"
        cols="12"
        md="4"
      >
        <v-responsive
          class="mx-auto"
          max-width="500"
          width="100%"
        >
          <v-list-item
            class="px-0"
            rounded="lg"
            :subtitle="item.subtitle"
          >
            <template #title>
              <p class="text-body-2 font-weight-bold pb-2">
                <v-icon
                  class="mr-2 text-amber"
                  :icon="item.icon"
                  size="small"
                />

                {{ item.title }}
              </p>
            </template>
          </v-list-item>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  const features = [
  {
    title: 'Creative Thinker',
    subtitle:
      'I love exploring innovative ways to solve problems and build engaging digital experiences. Creativity is at the heart of everything I do.',
    icon: 'mdi-lightbulb-on',
  },
  {
    title: 'Adaptable & Flexible',
    subtitle:
      'I thrive in dynamic environments and can quickly adjust to new challenges, technologies, and workflows with ease.',
    icon: 'mdi-sync',
  },
  {
    title: 'Inquisitive Mindset',
    subtitle:
      'Curiosity drives my learning. I constantly ask "why" and "how" to deepen my understanding and improve my skills.',
    icon: 'mdi-magnify',
  },
  {
    title: 'Passion for Web Development',
    subtitle:
      'I’m genuinely excited about coding and love turning ideas into functional, high-performing web applications.',
    icon: 'mdi-code-tags',
  },
  {
    title: 'Enjoy Building Complex Apps',
    subtitle:
      'The more challenging the project, the better! I love architecting and developing scalable, efficient applications.',
    icon: 'mdi-application',
  },
  {
    title: 'Collaborative Team Player',
    subtitle:
      'I believe great software is built through teamwork. I communicate effectively and contribute meaningfully to any team.',
    icon: 'mdi-account-group',
  },
  {
    title: 'Problem Solver',
    subtitle:
      'I enjoy tackling complex problems and finding efficient, scalable solutions with a logical and analytical approach.',
    icon: 'mdi-puzzle',
  },
  {
    title: 'Logical Thinker',
    subtitle:
      'I break down challenges methodically, ensuring well-structured, maintainable, and efficient solutions.',
    icon: 'mdi-brain',
  },
  {
    title: 'Hardworking & Dedicated',
    subtitle:
      'I put in the time and effort to ensure the best outcomes. I take ownership of my work and strive for excellence.',
    icon: 'mdi-run-fast',
  },
  {
    title: 'Fast Learner',
    subtitle:
      'I pick up new concepts, frameworks, and technologies quickly, always staying ahead of industry trends.',
    icon: 'mdi-speedometer',
  },
  {
    title: 'Teachable & Open-Minded',
    subtitle:
      'I welcome feedback, embrace new perspectives, and constantly refine my skills to grow as a developer.',
    icon: 'mdi-school',
  },
  {
    title: 'Educator & Mentor',
    subtitle:
      'I love sharing knowledge, guiding others, and making technical concepts easy to understand.',
    icon: 'mdi-human-male-board',
  },
  {
    title: 'Helping Others',
    subtitle:
      'I believe in uplifting those around me, whether through code, mentorship, or collaboration.',
    icon: 'mdi-handshake',
  },
  {
    title: 'Technical Communicator',
    subtitle:
      'I can break down complex technical ideas into simple, clear, and actionable insights for any audience.',
    icon: 'mdi-message-text',
  },
  {
    title: 'Willing to Learn',
    subtitle:
      'No matter the challenge, I am always eager to expand my knowledge and grow in my craft.',
    icon: 'mdi-book-open-variant',
  },
  {
    title: 'Patient & Persistent',
    subtitle:
      'I approach challenges with patience and determination, ensuring high-quality results without frustration.',
    icon: 'mdi-clock-outline',
  },
  {
    title: 'Technical Documentation',
    subtitle:
      'I write clear, concise, and well-structured documentation to ensure smooth onboarding and maintainability.',
    icon: 'mdi-file-document',
  },
];
</script>

<style>
  .text-amber {
    color: #FFD740
  }
</style>
