import React from 'react';

export interface ColorSwatchProps {
  name: string;
  hex: string;
  tailwindClass: string;
  sub?: string;
  ring?: string;
  dark?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface IconItem {
  name: string;
  icon: React.ComponentType<any>;
}