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
            <h1 class="text-2xl font-bold">Timer</h1>
          </template>
          <div class="flex flex-col items-center gap-4">
            <div class="text-6xl font-bold">
              <input
                type="number"
                v-model="minutes"
                @input="(e) => updateMinutes((e.target as HTMLInputElement).value)"
                :disabled="isRunning"
                class="w-24 bg-transparent text-center disabled:opacity-70"
                min="0"
              />:
              <input
                type="number"
                v-model="seconds"
                @input="(e) => updateSeconds((e.target as HTMLInputElement).value)"
                :disabled="isRunning"
                class="w-24 bg-transparent text-center disabled:opacity-70"
                min="0"
                max="59"
              />
            </div>

            <div class="flex gap-4">
              <UButton
                @click="toggleTimer"
                :disabled="minutes === 0 && seconds === 0"
                class="px-4 py-2 bg-cinnabar-500 text-white rounded hover:bg-cinnabar-700 disabled:opacity-50"
              >
                {{ isRunning ? "Pause" : "Start" }}
              </UButton>
              <button
                @click="resetTimer"
                class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Reset
              </button>
            </div>
            <div v-if="isCompleted" class="text-green-500 font-bold">
              Time's up!
            </div>
          </div>
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

//timer

interface TimerState {
  minutes: number;
  seconds: number;
  isRunning: boolean;
}

const minutes = ref<number>(0);
const seconds = ref<number>(0);
const isRunning = ref<boolean>(false);
const isCompleted = ref<boolean>(false);
let interval: ReturnType<typeof setInterval> | null = null;
const validateInput = (value: number, max: number = Infinity): number => {
  return Math.max(0, Math.min(Math.floor(value), max));
};

const updateMinutes = (value: string): void => {
  if (!isRunning.value) {
    minutes.value = validateInput(parseInt(value) || 0);
    isCompleted.value = false;
  }
};

const updateSeconds = (value: string): void => {
  if (!isRunning.value) {
    seconds.value = validateInput(parseInt(value) || 0, 59);
    isCompleted.value = false;
  }
};

const toggleTimer = (): void => {
  if (minutes.value === 0 && seconds.value === 0) return;

  isRunning.value = !isRunning.value;
  if (isRunning.value) {
    interval = setInterval((): void => {
      if (seconds.value === 0) {
        if (minutes.value === 0) {
          resetTimer();
          isCompleted.value = true;
          return;
        }
        minutes.value--;
        seconds.value = 59;
      } else {
        seconds.value--;
      }
    }, 1000);
  } else {
    if (interval) clearInterval(interval);
  }
};

const resetTimer = (): void => {
  if (interval) clearInterval(interval);
  isRunning.value = false;
  minutes.value = 25;
  seconds.value = 0;
  isCompleted.value = false;
};

onUnmounted((): void => {
  if (interval) clearInterval(interval);
});
</script>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
