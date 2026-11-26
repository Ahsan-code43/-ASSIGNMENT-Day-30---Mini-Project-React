const BASE_URL = 'https://dummyjson.com'

export async function getData(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`)

  if (!response.ok) {
    throw new Error('Gagal mengambil data dari API')
  }

  return response.json()
}