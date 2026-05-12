import { Reveal } from './MotionPrimitives';

export default function SectionHeader({ eyebrow, title, body, centered = false }) {
  return (
    <Reveal className={`section-header ${centered ? 'section-header--centered' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </Reveal>
  );
}
