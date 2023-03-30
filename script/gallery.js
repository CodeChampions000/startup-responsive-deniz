const images = [
  {
    src: "/Images/gallery1.png",
    alt: "gallery1",
  },
  {
    src: "/Images/gallery2.png",
    alt: "gallery2",
  },
  {
    src: "/Images/gallery3.png",
    alt: "gallery3",
  },
  {
    src: "/Images/gallery4.png",
    alt: "gallery4",
  },
  {
    src: "/Images/gallery5.png",
    alt: "gallery5",
  },
  {
    src: "/Images/gallery6.png",
    alt: "gallery6",
  },
  {
    src: "/Images/gallery7.png",
    alt: "gallery7",
  },
  {
    src: "/Images/gallery8.png",
    alt: "gallery8",
  },
];

document.querySelector(".gallery").innerHTML = images
  .map(
    (image, index) =>
      `
    <div>
    <img src="${image.src}" alt="${image.alt}">
    </div>
    `
  )
  .join(" ");
