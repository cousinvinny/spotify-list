"use client"

export default function Home() {
  const getSpotifyToken = async () => {
    try {
      const response = await fetch("/api/accessToken", {
        method: "POST",
      })

      if(!response.ok){
        throw new Error(await response.json())
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <div>Spotify List</div>
      <button onClick={getSpotifyToken}>Click here</button>
    </main>
  );
}
