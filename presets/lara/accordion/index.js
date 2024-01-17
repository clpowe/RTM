export default {
	accordiontab: {
		root: {
			class: 'mb-1'
		},
		header: ({ props }) => ({
			class: [
				// State
				{
					'select-none pointer-events-none cursor-default opacity-60':
						props?.disabled
				}
			]
		}),
		headerAction: ({ context }) => ({
			class: [
				//Font
				'font-bold',
				'leading-none',

				// Alignments
				'flex items-center',
				'relative',

				// Sizing
				'p-5',

				// Shape
				'',
				{
					'': !context.active,
					'': context.active
				},

				// Color
				'border-b border-surface-900 dark:border-surface-700',
				'bg-white dark:bg-surface-800',
				'text-surface-600 dark:text-surface-0/80',
				{ 'text-surface-100': context.active },

				// Transition
				'transition duration-200 ease-in-out',
				'transition-shadow duration-200',

				// States

				'focus:outline-none focus:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 ring-inset dark:focus-visible:ring-primary-300/50', // Focus

				// Misc
				'cursor-pointer no-underline select-none'
			]
		}),
		headerIcon: {
			class: 'inline-block mr-6'
		},
		headerTitle: {
			class: 'leading-none text-4xl'
		},
		content: {
			class: [
				// Spacing
				'p-5',

				//Shape
				'rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg',
				'border-t-0',

				// Color
				'bg-surface-0 dark:bg-surface-800',

				'text-surface-700 dark:text-surface-0/80'
			]
		},
		transition: {
			enterFromClass: 'max-h-0',
			enterActiveClass:
				'overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]',
			enterToClass: 'max-h-[1000px]',
			leaveFromClass: 'max-h-[1000px]',
			leaveActiveClass:
				'overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]',
			leaveToClass: 'max-h-0'
		}
	}
}
