<template>
  <div>
    <UCard class="h-full bg-ivory-50 dark:bg-black shadow-xl">
      <template #header>
        <h1 class="text-2xl font-bold">Tasks</h1>
      </template>
      <div v-for="(singleTask, key) in taskArray" class="flex flex-row">
        <UIcon
          :name="
            singleTask.completed
              ? 'material-symbols-light:check-circle-rounded'
              : 'material-symbols-light:check-circle-outline-rounded'
          "
          class="text-2xl"
          @click="taskArray[key].completed = !taskArray[key].completed"
        />
        <h1>{{ singleTask.title }}</h1>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
type taskType = {
  completed: boolean;
  title: string;
};
const props = defineProps<{
  taskArray: taskType[];
}>();
</script>

<style scoped></style>
