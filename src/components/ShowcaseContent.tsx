"use client";

type ShowcaseContentProps = {
  eyebrow: string;
  title: string;
  description: string;
  activeIndex: number;
};

export default function ShowcaseContent({
  eyebrow,
  title,
  description,
  activeIndex,
}: ShowcaseContentProps) {
  return (
    <div className="w-full max-w-[540px]">
      <div className="mb-4 h-[5px] w-12 rounded-full bg-violet-600" />

      <p className="mb-5 text-sm font-semibold tracking-wide text-violet-500">
        {eyebrow}
      </p>

      <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#242033] md:text-4xl lg:text-[46px]">
        {title}
      </h1>

      <p className="mt-9 max-w-[440px] text-base leading-relaxed text-[#777381] md:text-lg">
        {description}
      </p>

      <div className="mt-12 flex items-center gap-2">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className={`h-1.5 w-3 rounded-full transition-colors duration-500 ${
              activeIndex === index ? "bg-violet-600" : "bg-[#d6d2df]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
