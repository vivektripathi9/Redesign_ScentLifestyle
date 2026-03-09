export default function StatementSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-12 text-center">
        <h2
          className="text-2xl sm:text-3xl font-light text-[#2A2A35] md:text-[42px] lg:text-5xl leading-tight tracking-[0.1em]"
          style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}
        >
          Our story, your statement
        </h2>
        <div className="decorative-flower-divider flex items-center justify-center gap-3 sm:gap-4 py-2">
          <span className="h-px w-12 sm:w-16 bg-black" />
          <span className="text-pink-400 text-xl sm:text-2xl">❀</span>
          <span className="h-px w-12 sm:w-16 bg-black" />
        </div>
        <p className="description-main max-w-3xl px-2 sm:px-4">
          We craft experiences where beauty meets intention. Every detail is designed to celebrate
          individuality, balance, and confidence — because true elegance is effortless.
        </p>
      </div>
    </section>
  );
}
