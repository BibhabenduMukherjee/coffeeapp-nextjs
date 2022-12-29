import React from 'react'

function Faq() {
  return (
    <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
	<div class="flex flex-col items-center">
		<h2 class="font-bold text-5xl mt-5 tracking-tight">
			FAQ
		</h2>
		<p class="text-neutral-500 text-xl mt-3">
			Frequenty asked questions
		</p>
	</div>
	<div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span>Types of Coffee</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					 There are 12 types of Coffee that are very popular world wide
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> What is an Americano?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                An americano is quite simply just hot water and espresso. It’ll either be served 1/2 and 1/2 or 1/3 espresso to 2/3 water, 
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Why eat coffee?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Coffee is a beloved beverage known for its ability to fine-tune your focus and boost your energy levels.

In fact, many people depend on their daily cup of joe right when they wake up to get their day started on the right foot. usefull for Boosts energy levels, May be linked to a lower risk of type 2 diabetes
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I cancel my order</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					To cancel your order you can log in to your account and navigate to the
					order management page. From there, you should be able to cancel your order with providing 
					a proper reason 
				</p>
			</details>
		</div>
		
		
	</div>
</div>

  )
}

export default Faq