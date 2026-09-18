import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { contactLinks } from '@/lib/data';
import SectionHeader from './SectionHeader';
import { Reveal } from './MotionPrimitives';

const icons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  WhatsApp: MessageCircle,
  Email: Mail
};

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="contact-panel glass-panel">
        <SectionHeader
          eyebrow="Contact"
          title="Need a backend engineer who owns the outcome?"
          body="Ahmed is open to software engineering opportunities, backend collaboration, and conversations about production systems."
        />
        <Reveal className="contact-links">
          {contactLinks.map((link) => {
            const Icon = icons[link.label];
            return (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <Icon size={20} />
                <span><strong>{link.label}</strong><small>{link.value}</small></span>
                <ArrowUpRight size={17} />
              </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
