
function Footer() {
  return (
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
          <a href="https://pizzahut.vn/" className="flex items-center">
              <img src="data:image/jpeg;base64,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" className="h-8 mr-3" alt="X Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                      <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                  </li>
                  <li>
                      <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                  </li>
              </ul>
          </div>
         
      </div>
  </div>
  <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
      </span>
      <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                </svg>
              <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                </svg>
              <span className="sr-only">Discord community</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
            </svg>
              <span className="sr-only">Twitter page</span>
          </a>
   
      </div>
  </div>
</div>
  )
}

export default Footer