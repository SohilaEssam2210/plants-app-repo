import React from "react";

export default function Login() {
  return (
    <form class="max-w-sm mx-auto m-10" dir="ltr">
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium ">
          Your email
        </label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium ">
          Your password
        </label>
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          for="remember"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Remember me
        </label>
      </div>
      <button type="submit" class="btn">
        <span>Submit</span>
      </button>
    </form>
  );
}
