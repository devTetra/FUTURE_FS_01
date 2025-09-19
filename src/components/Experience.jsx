const Experience = ({ title, company, date, location, contributions }) => {
  return (
    <div
      data-aos="fade-left"
      className="bg-card-bg self-start rounded-2xl p-6 shadow-lg md:p-8"
    >
      {/* Date + Company */}
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <p className="text-primary text-sm tracking-wide uppercase">{date}</p>
        <p className="font-highlight text-base font-semibold">{company}</p>
      </div>

      {/* Title + Location */}
      <div className="mt-3 flex flex-col justify-between gap-1 md:mt-4 md:flex-row md:items-center">
        <p className="font-heading text-lg font-semibold md:text-xl">{title}</p>
        <p className="font-highlight text-sm italic md:text-base">{location}</p>
      </div>

      {/* Contributions */}
      <ul className="mt-4 list-none space-y-2 text-left text-sm leading-relaxed">
        {contributions.map((contribution, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-accent text-xl leading-none">•</span>
            <span className="text-foreground">{contribution}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
