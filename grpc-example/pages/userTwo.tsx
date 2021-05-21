import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function User() {
  const { data, error } = useSwr('/api/user-two', fetcher)

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return <div>{data.name}</div>
}