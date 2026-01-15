import InstagramHeader from "./InstagramHeader";
import InstagramGrid from "./InstagramGrid";

export default function InstagramWidget() {
  return (
    <section className="py-0 lg:py-20 bg-white relative overflow-visible">
      <div className="max-w-7xl mx-auto px-4">
        {/* MOBILE: Stacked layout */}
        <div className="md:hidden max-w-[420px] mx-auto shadow-xl overflow-x-visible rounded-3xl">
          <InstagramHeader />
          <InstagramGrid />
        </div>

        {/* DESKTOP: Header center + Grid below with slider */}
        <div className="hidden md:block">
          {/* Header - Centered */}
          <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
            <InstagramHeader />
          </div>

          {/* Grid with slider - Below */}
          <InstagramGrid />
        </div>
      </div>
    </section>
  );
}
