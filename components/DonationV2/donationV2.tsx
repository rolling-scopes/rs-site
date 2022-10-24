export default function DonationV2() {
  const imageUrl = 'https://source.unsplash.com/630x441/';
  return (
    <section>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-bold text-[#1A1A1A]">
          Поддержать сообщество
        </h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
        <picture className="w-full lg:mx-6 lg:w-1/2 h-72 lg:h-96">
          <source srcSet={imageUrl} type="image/webp" />
          <img
            className="object-cover w-full h-72 lg:h-96"
            src={imageUrl}
            alt=""
          />
        </picture>

          <div className="mt-6 lg:w-1/2 lg:mt-auto">
            <p className="mt-3 text-sm text-[#1A1A1A] md:text-sm">
              В связи с тем, что Тhe Rolling Scopes - это некоммерческое
              сообщество разработчиков, которые днём и ночью контрибьютят в него
              свои силы и знания бесплатно и в своё свободное время, мы завели
              «копилку» на разные нужды RS. Сказать «спасибо» можно здесь -
              https://opencollective.com/rsschool
            </p>

            <a
              target="_blank"
              href="https://opencollective.com/rsschool"
              className="inline-flex justify-center text-sm font-semibold py-2.5 px-4 bg-[#191B1D] text-white mt-6"
              rel="noreferrer"
            >
              Поддержать сообщество
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
