import { Link } from "react-router-dom"

function Header() {
    return (
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                <a href="https://pizzahut.vn/" className="flex items-center">
                <img src="data:image/jpeg;base64,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" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Xyz pizza</span>
                </a>
                <div className="flex items-center lg:order-3">
                        <Link
                    to="/login" 
                    className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        Log in
                        </Link>
                    <Link 
                    to='/register'
                    className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        Sign up
                        </Link>
                    <Link
                    to='/cart'
                    className="text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                        Cart
                        </Link>
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <Link 
                            to="/"
                            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                Home
                                </Link>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Menu</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Voucher</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Store locations</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header