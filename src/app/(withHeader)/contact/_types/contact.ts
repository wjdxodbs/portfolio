export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string | null;
}

export interface SocialLink {
  name: string;
  icon: string;
  iconUrl?: string;
  href: string;
  description: string;
}
