import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkMaker = ({ links, dClass, dType, aClass, fClass, fSize }) => {
  return (
    <div className={dClass}>
      {links.map(({ ico, link, label }, i) => (
        <a
          key={i}
          href={link}
          title={label}
          aria-label={label}
          target="_blank"
          className={aClass}
        >
          <FontAwesomeIcon icon={ico} className={fClass} size={fSize} />
        </a>
      ))}
    </div>
  );
};

export default LinkMaker;
