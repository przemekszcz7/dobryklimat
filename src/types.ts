/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  iconName: string; // lucide icon name
  items: MenuItem[];
}

export interface ReviewItem {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  avatarUrl?: string;
  isVerifiedFacebook: boolean;
}

export interface DailySpecial {
  dayName: string;
  soup: { name: string; price: string };
  mainCourse: { name: string; price: string };
  comboPrice: string;
  imageUrl?: string;
}

export interface PillarItem {
  title: string;
  text: string;
  badge?: string;
}
