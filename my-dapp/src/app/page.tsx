import { client } from './utils/client'
import abi from './abi.json'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`

async function readMessage() {
  const data = await client.readContract({
    address: contractAddress,
    abi,
    functionName: 'getMessage',
  })
  return data
}

export default async function Home() {
  const msg = await readMessage()
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Contract says:</h1>
      <p className="mt-2 text-lg">{String(msg)}</p>
    </main>
  )
}
