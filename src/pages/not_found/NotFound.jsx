import React from 'react'
import GeneralLayout from '../../layouts/GeneralLayout'

function NotFound() {
    return (
        <GeneralLayout>
            <div className="flex flex-col items-center bg-white p-4 rounded min-h-screen">
                <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="py-16">
                        <div className="text-center">
                            <p className="text-sm font-semibold text-blue-primary uppercase tracking-wide">404 error</p>
                            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1>
                            <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
                            <div className="mt-6">
                                <a href="/" className="text-base font-medium text-blue-primary hover:text-blue-primary">
                                    Go back home<span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </GeneralLayout>
    )
}

export default NotFound
