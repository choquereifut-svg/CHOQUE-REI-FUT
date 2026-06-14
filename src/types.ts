/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface HeadlineOption {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  cta: string;
  explanation: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  objection: string;
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  category: 'mantos' | 'retro' | 'arquibancada' | 'acessorios';
  ctaText: string;
  colors: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  time: string;
  author: string;
  image: string;
  comments: number;
  likes: number;
  relatedProductIndex?: number; // Index of product to advertise inside the news box
}

export interface SpeedMetric {
  name: string;
  value: string;
  status: 'excellent' | 'warning' | 'critical';
  description: string;
}
