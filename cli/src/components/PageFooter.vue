<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <footer
        class="flex flex-col flex-shrink-0 w-full gap-2 px-6 py-4 lg:flex-row lg:justify-between"
    >
        <p
            class="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400"
        >
            <span>Made with</span>
            <span>
                <span class="sr-only">love</span>
                <Icon
                    icon="mdi:heart"
                    aria-hidden="true"
                    class="w-6 h-6 text-red-500"
                />
            </span>
            <span>by</span>
            <a
                href="https://github.com/hoanghn17"
                target="_blank"
                class="text-blue-600 hover:underline"
            >
                HoangIsMe
            </a>
        </p>
    </footer>
</template>
