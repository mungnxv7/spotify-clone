export async function getGenres() {
  try {
    const response = await fetch(`https://spotify-be.vercel.app/genres`,{
      next: { revalidate: 100 },
    });
    const data =await response.json();

    return data
    
    // return response.json();
  } catch (error) {
    console.error('Lỗi khi gọi API:', error);
  }
}
  export async function getGenresById(pid:string) {
    try {
      const response = await fetch(`https://spotify-be.vercel.app/genres/${pid}`,{
        next: { revalidate: 100 },
      });
      const data =await response.json();
      return data
      // return response.json();
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  }