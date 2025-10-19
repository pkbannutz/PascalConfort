export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  alt: string;
}