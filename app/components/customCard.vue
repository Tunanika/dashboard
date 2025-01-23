<template>
  <div>
    <UCard class="h-full bg-ivory-50 dark:bg-black shadow-xl">
      <template #header>
        <slot name="header" />
      </template>
      <slot />
    </UCard>
  </div>
</template>
