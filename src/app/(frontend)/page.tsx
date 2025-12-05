import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const users = await payload.find({
    collection: 'users',
    limit: 10,
  })
  return (
    <>
      <h1>Home</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </>
  )
}
