import { ArrowUpRight, Facebook, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { contactLinks } from '@/lib/data';
import SectionHeader from './SectionHeader';
import { Reveal } from './MotionPrimitives';

const icons = {
  LinkedIn: Linkedin,
  Facebook,
  WhatsApp: MessageCircle,
  Email: Mail
};

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="contact-panel glass-panel">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something reliable."
          body="Open to backend opportunities, technical collaboration, and conversations around scalable product engineering."
          centered
        />
        <Reveal className="contact-links">
          {contactLinks.map((link) => {
            const Icon = icons[link.label];
            return (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <Icon size={20} />
                <span>{link.label}</span>
                <ArrowUpRight size={17} />
              </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
