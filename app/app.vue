<template>
  <div class="bg-ivory-50 dark:bg-black min-h-screen">
    <div class="ml-10 mr-10 h-screen flex flex-col">
      <h1 class="text-8xl mt-20 tracking-wider">
        {{ formattedTime }} <a class="text-3xl">{{ morning }}</a>
      </h1>
      <div class="grid grid-cols-3 gap-4 mt-10 h-full">
        <tasks class="mt-10 mb-10" :taskArray="tasksArr" />
        <CustomCard class="mt-10 mb-10">
          <template #header>
            <h1 class="text-2xl font-bold">CardTitle</h1>
          </template>
          <h1>THIS IS IN THE CARD</h1>
        </CustomCard>
        <ColorScheme>
          <USelect
            v-model="$colorMode.preference"
            :options="['system', 'light', 'dark']"
          />
        </ColorScheme>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CustomCard from "./components/customCard.vue";

const currentTime = ref("");
const morning = ref("");
let timer: NodeJS.Timeout | null = null;

const tasksArr = ref([
  { title: "Task 1", completed: false },
  { title: "Task 2", completed: true },
  { title: "Task 3", completed: false },
]);

const formattedTime = computed(() => {
  const time = currentTime.value;
  if (!time) return "";

  const [main, period] = time.split(" ");
  morning.value = period || "";
  return main;
});

const updateTime = () => {
  currentTime.value = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
