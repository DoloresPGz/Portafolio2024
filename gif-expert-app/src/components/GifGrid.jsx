/* eslint-disable react/prop-types */
const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QLX3T0CyNjWkAl9yubxnuGYZoWr2hc6u?q=${category}`
    const resp = await fetch(url)
    console.log(resp)
  }

  getGifs()

  return (
    <>
      <h3>{category}</h3>
    </>
  )
}
export default GifGrid
