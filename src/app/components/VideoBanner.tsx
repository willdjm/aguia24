
export function VideoBanner() {

return (
    <section className="relative w-auto h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video-banner.mp4"
        autoPlay
        muted
        loop
      ></video>
      {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Seu Banner Aqui
        </h1>
      </div> */}
    </section>
);
}