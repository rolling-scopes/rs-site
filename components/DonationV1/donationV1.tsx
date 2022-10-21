export default function DonationV1() {
  return (
    <section className="flex flex-col justify-center h-80 text-center px-8 bg-[#191b1d] dark:text-white">
      <div className="flex flex-col justify-center items-center mx-auto md:max-w-[50%]">
        <h1 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
          Donation for RS School
        </h1>
        <span className="mt-6 text-base">
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliquat enim eiusmod tempor ad minim
        </span>
        <a
          target="_blank"
          href="https://opencollective.com/rsschool"
          className="inline-flex justify-center text-sm font-semibold py-2.5 px-4 bg-white text-[#191B1D] mt-6 ml-8"
          rel="noreferrer"
        >
          Make a donation
        </a>
      </div>
    </section>
  );
}
