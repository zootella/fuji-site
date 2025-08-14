<script setup>//./pages/index.vue

useHead({
	title: 'Fuji'
})

</script>
<template>

<div class="min-h-[80vh] p-8 md:p-16 flex">
	<div class="flex flex-col md:flex-row gap-8 md:gap-16 flex-1 items-center">

		<!-- Left column: logotype + circle -->
		<div class="flex flex-col gap-4">
			<h1 class="font-helvetica font-bold text-8xl md:text-[12rem] text-white leading-none">
				Fuji
			</h1>
			<svg width="100%" viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" class="block aspect-square">
				<circle cx="180" cy="180" r="180" fill="white" />
			</svg>
		</div>
		
		<!-- Right column: informational text -->
		<div class="flex-1 font-mono">

<p>A multimedia file manager designed</p>
<p>with privacy and precision in mind</p>
<p class="mt-8">Coming in 2025</p>

		</div>
	</div>
</div>

</template>
<style>/* not scoped to be able to reach body */

body {
	background-color: #9fffe0;
}

</style>
