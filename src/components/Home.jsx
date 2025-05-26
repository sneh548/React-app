import { Outlet, Link, useLocation } from 'react-router-dom'
export default function Component() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-gray-50 to-gray-100 py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Build Something
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                {' '}
                Amazing
              </span>
            </h2>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Create beautiful, responsive websites with modern design
              principles. Fast, reliable, and built for the future.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium'>
                Start Building
              </button>
              <button className='border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors text-lg font-medium'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Why Choose Us?
            </h3>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              We provide the tools and expertise you need to succeed in today's
              digital world.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center p-6 rounded-xl hover:shadow-lg transition-shadow'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-purple-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h4 className='text-xl font-semibold text-gray-900 mb-2'>
                Lightning Fast
              </h4>
              <p className='text-gray-600'>
                Optimized for speed and performance. Your users will love the
                experience.
              </p>
            </div>

            <div className='text-center p-6 rounded-xl hover:shadow-lg transition-shadow'>
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-green-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h4 className='text-xl font-semibold text-gray-900 mb-2'>
                Reliable
              </h4>
              <p className='text-gray-600'>
                Built with modern technologies and best practices for maximum
                reliability.
              </p>
            </div>

            <div className='text-center p-6 rounded-xl hover:shadow-lg transition-shadow'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </div>
              <h4 className='text-xl font-semibold text-gray-900 mb-2'>
                User Friendly
              </h4>
              <p className='text-gray-600'>
                Intuitive design that puts user experience first. Easy to use
                and navigate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gray-900 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h3 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Ready to Get Started?
          </h3>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Join thousands of satisfied customers who have transformed their
            business with our solutions.
          </p>
          <button className='bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium'>
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-50 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div>
              <h4 className='text-lg font-semibold text-gray-900 mb-4'>
                Brand
              </h4>
              <p className='text-gray-600'>
                Building the future, one project at a time.
              </p>
            </div>
            <div>
              <h5 className='text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider'>
                Product
              </h5>
              <ul className='space-y-2'>
                <li>
                  <Link
                    to=''
                    className='text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to=''
                    className='text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to=''
                    className='text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className='text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider'>
                Company
              </h5>
              <ul className='space-y-2'>
                <li>
                  <Link
                    to=''
                    className='text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to=''
                    className='text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to=''
                    className='text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className='text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider'>
                Support
              </h5>
              <ul className='space-y-2'>
                <li>
                  <Link
                    to=''
                    className='text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to=''
                    className='text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to=''
                    className='text-gray-600 hover:text-gray-900 transition-colors'
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-t border-gray-200 mt-8 pt-8 text-center'>
            <p className='text-gray-600'>© 2024 Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
