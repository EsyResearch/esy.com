import React from 'react';
import BeehiivEmbed from '../BeeHiivEmbed/slim';

export default function NewsletterSection({ newsletterTitle, descriptionStart, descriptionEnd }) {
    return (
        <section class=" border-gray-100 bg-primary dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl dark:text-white">
        Subscribe to <span className=" text-secondary">Esy </span> {newsletterTitle}
      </h2>
      {/* <p class="max-w-xl mx-auto mb-6 text-gray-500 md:text-lg dark:text-gray-400">
      Get expert tips on AI essay writing and prompt engineering. Delivered to your inbox, no spam.
      </p> */}

      <p class="max-w-xl mx-auto mb-6 text-gray-500 md:text-lg dark:text-gray-400">
      {descriptionStart}<br /> {descriptionEnd}
      </p>

      {/* <form action="#" class="max-w-lg mx-auto">
        <div class="items-center mb-3 space-y-4 sm:flex sm:space-y-0">
          <div class="relative w-full">
            <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email
              address</label>
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              class="block w-full p-3 pl-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter your email" type="email" id="email" required="" />
          </div>
          <div>
            <button type="submit"
              class="w-full px-5 py-3 text-sm font-medium text-center text-white border rounded-lg cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:focus:ring-primary-800">Subscribe</button>
          </div>
        </div>

        <div class="text-sm text-left text-gray-500 dark:text-gray-300">We care about the protection of
          your data. Read our <a href="#" class="text-white underline dark:text-white hover:no-underline">Privacy
            Policy</a>.
        </div>
      </form> */}
      {/* Switch back to the commented form above once we transition to SendGrid/BeeHiiv setup. Currently using BeeHiiv embed. */}
      <BeehiivEmbed />
    </div>
  </div>
</section>
    );
}
