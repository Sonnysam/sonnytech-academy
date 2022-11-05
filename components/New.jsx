

const New = () => {
  return (
    <div className="mt-12 mx-w-48">
      <h1 className="flex justify-center items-center mb-5 text-white text-4xl font-bold">
        Latest Releases
      </h1>
      <section className="flex flex-wrap  justify-center items-center mx-2">
        <iframe
          width="288"
          height="187"
          src="https://www.youtube.com/embed/5UlvfxQvH2A"
          title="How to make phone call in React Native Expo (Open Phone Dialer)🚀"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="m-3 md:w-[6] h-[14]"
        ></iframe>

        <iframe
          width="288"
          height="187"
          src="https://www.youtube.com/embed/66iA7TenmwU"
          title="How To Integrate Paystack payment into  React Native (using expo) 🚀🚀"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="md:w-[6] h-[14]"
        ></iframe>
      </section>
    </div>
  );
}

export default New