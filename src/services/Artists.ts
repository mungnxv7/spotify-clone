export async function getArtist() {
    try {
      const response = await fetch(`https://spotify-be.vercel.app/artist`,{
        next: { revalidate: 20 },
      });
      const data =await response.json();
      
      return data
      
      // return response.json();
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  }
    export async function getArtistId(pid:string) {
      try {
        const response = await fetch(`https://spotify-be.vercel.app/artist/${pid}`,{
          next: { revalidate: 20 },
        });
        const data =await response.json();
        return data
        // return response.json();
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
      }
    }