<template>
  <div :class="cn(alertVariants({ variant }), props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
        success: 'border-green-500/50 text-green-700 bg-green-50 dark:border-green-500 dark:text-green-400 dark:bg-green-950/10',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface AlertProps {
  class?: string
  variant?: VariantProps<typeof alertVariants>['variant']
}

const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'default',
})
</script>