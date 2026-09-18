type Props = {
  url: string;
  title: string;
  label: string;
  theme: "madar" | "ahd";
};

export function LiveProductPreview({ url, title, label, theme }: Props) {
  return (
    <div className={`live-preview live-preview--${theme}`}>
      <div className="live-preview__chrome">
        <span className="live-preview__dots"><i /><i /><i /></span>
        <span>{label}</span>
        <a href={url} target="_blank" rel="noreferrer" aria-label={title}>↗</a>
      </div>
      <div className="live-preview__viewport">
        <div className="live-preview__fallback"><strong>{title}</strong><span>{label}</span></div>
        <iframe src={url} title={title} loading="lazy" tabIndex={-1} aria-hidden="true" />
      </div>
    </div>
  );
}
