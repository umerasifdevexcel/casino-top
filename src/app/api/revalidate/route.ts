import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { _type } = body

    if (!_type) {
      return NextResponse.json({ message: 'Missing _type' }, { status: 400 })
    }

    // Revalidate based on document type
    if (_type === 'casinoBrand') {
      revalidateTag('casinoBrand')
    } else if (_type === 'post') {
      revalidateTag('post')
    } else if (_type === 'author') {
      revalidateTag('author')
    } else if (_type === 'category') {
      revalidateTag('category')
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
