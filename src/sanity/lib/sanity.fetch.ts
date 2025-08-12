import { createClient, type QueryParams } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export async function sanityFetch<const QueryString extends string>({ 
  query,
  params = {}, 
  revalidate = 60, // default revalidation time in seconds
  tags = [],
  perspective = 'published',
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
  perspective?: 'published' | 'drafts' | 'raw'
}) {
  return client.fetch(query, params, {
    cache: 'force-cache', // on next v14 it's force-cache by default, in v15 it has to be set explicitly
    perspective,
    next: {
      revalidate: tags.length ? false : revalidate, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  })
}
