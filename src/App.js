import Gallery from "./components/Gallery";

function App() {
  const galleryImages = [
    {
      img: "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_640.jpg",
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_640.jpg",
    },
    {
      img: "https://cdn.pixabay.com/photo/2020/09/19/19/37/landscape-5585247_640.jpg",
    },
    {
      img: "https://media.istockphoto.com/id/1330179038/photo/eagle-flies-at-high-altitude-with-its-wings-spread-out-on-a-sunny-day-in-the-mountains.jpg?s=612x612&w=0&k=20&c=44fm2j9YgUpZKMK6wrxzBJliYPnivgwSMqqWx8QvEFE=",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_640.jpg",
    },
    {
      img: "https://media.istockphoto.com/id/481089792/photo/eagle-flying-over-mist-mountains-in-the-morning.jpg?s=612x612&w=0&k=20&c=WKmFSmZd4evxGho_-YOdlAvgBt9gCD57qBQ3VP8ZYcY=",
    },
  ];

  return (
    <div className="App">
      <br />
      <div>
        <strong>Image Gallery</strong>
      </div>
      <br />
      <br />

      <Gallery galleryImages={galleryImages} />
    </div>
  );
}

export default App;
