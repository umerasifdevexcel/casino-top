import Link from 'next/link'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Content Management</h2>
              <p className="text-gray-600 mb-4">
                Use the Sanity Studio to manage your casino brands, blog posts, and other content.
              </p>
              <Link 
                href="/studio" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Open Sanity Studio
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Add Casino Brand</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Create a new casino brand with logo, rating, pros, and cons.
                  </p>
                  <Link 
                    href="/studio/desk/casinoBrand;new" 
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Create New Brand →
                  </Link>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Manage Content</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Edit existing casino brands, blog posts, and categories.
                  </p>
                  <Link 
                    href="/studio/desk" 
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Browse Content →
                  </Link>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Go to the Sanity Studio using the button above</li>
                <li>Create your first casino brand with all the required fields</li>
                <li>Add a logo image, rating, pros, and cons</li>
                <li>Set the brand as active and save</li>
                <li>Return to your main page to see the updated content</li>
              </ol>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Environment Variables</h2>
              <p className="text-gray-600 mb-2">
                Make sure these environment variables are set in your <code className="bg-gray-100 px-1 rounded">.env.local</code> file:
              </p>
              <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                <div>NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id</div>
                <div>NEXT_PUBLIC_SANITY_DATASET=production</div>
                <div>SANITY_API_TOKEN=your-api-token</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
