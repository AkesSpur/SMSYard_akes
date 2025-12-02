export const AGENCY_NAV_ITEMS = [
  { label: 'Logo', href: '#logo' },
  { label: 'Typography', href: '#typography' },
  { label: 'Colors', href: '#colors' },
  { label: 'Assets', href: '#assets' },
  { label: 'Patterns', href: '#illustrations' },
  { label: 'Icons', href: '#icons' },
];

export const AGENCY_COLORS = [
  // Brand
  { name: 'Violet 600', hex: '#7C3AED', tailwindClass: 'bg-agency-600', sub: '(Brand)' },
  { name: 'Violet 700', hex: '#6D28D9', tailwindClass: 'bg-agency-700', sub: '' },
  { name: 'Violet 500', hex: '#8B5CF6', tailwindClass: 'bg-agency-500', sub: '' },
  
  // Neutrals
  { name: 'Zinc 950', hex: '#09090B', tailwindClass: 'bg-primary-900', sub: '', ring: 'ring-white/10' },
  { name: 'White', hex: '#FFFFFF', tailwindClass: 'bg-white', sub: '', ring: 'ring-slate-200' },
  { name: 'Zinc 50', hex: '#FAFAFA', tailwindClass: 'bg-slate-50', sub: '', ring: 'ring-slate-200' },
  
  // Semantic
  { name: 'Teal 500', hex: '#14B8A6', tailwindClass: 'bg-teal-500', sub: '(Success)' },
  { name: 'Rose 500', hex: '#F43F5E', tailwindClass: 'bg-rose-500', sub: '(Error)' },
  { name: 'Amber 500', hex: '#F59E0B', tailwindClass: 'bg-amber-500', sub: '(Warning)' },
  { name: 'Cyan 500', hex: '#06B6D4', tailwindClass: 'bg-cyan-500', sub: '(Info)' },
];

export const AGENCY_THEME_TOKENS = [
  {
    token: 'App Background',
    description: 'Main application background',
    light: { hex: '#FAFAFA', label: 'Zinc 50' },
    dark: { hex: '#000000', label: 'Black' }
  },
  {
    token: 'Surface',
    description: 'Component containers',
    light: { hex: '#FFFFFF', label: 'White' },
    dark: { hex: '#09090B', label: 'Zinc 950' }
  },
  {
    token: 'Primary Accents',
    description: 'Key brand interactions',
    light: { hex: '#7C3AED', label: 'Violet 600' },
    dark: { hex: '#8B5CF6', label: 'Violet 500' }
  },
  {
    token: 'Primary Text',
    description: 'Headings and body text',
    light: { hex: '#18181B', label: 'Zinc 900' },
    dark: { hex: '#FAFAFA', label: 'Zinc 50' }
  },
  {
    token: 'Borders',
    description: 'Separators',
    light: { hex: '#E4E4E7', label: 'Zinc 200' },
    dark: { hex: '#27272A', label: 'Zinc 800' }
  }
];

export const AGENCY_BUTTON_TOKENS = [
  {
    token: 'Primary Bg',
    description: 'Main CTA background',
    light: { hex: '#7C3AED', label: 'Violet 600' },
    dark: { hex: '#7C3AED', label: 'Violet 600' }
  },
  {
    token: 'Primary Text',
    description: 'Main CTA text',
    light: { hex: '#FFFFFF', label: 'White' },
    dark: { hex: '#FFFFFF', label: 'White' }
  },
  {
    token: 'Secondary Bg',
    description: 'Alternative actions',
    light: { hex: '#FFFFFF', label: 'White' },
    dark: { hex: '#09090B', label: 'Zinc 950' }
  },
  {
    token: 'Secondary Border',
    description: 'Alternative borders',
    light: { hex: '#E4E4E7', label: 'Zinc 200' },
    dark: { hex: '#27272A', label: 'Zinc 800' }
  },
  {
    token: 'Link Color',
    description: 'Text hyperlinks',
    light: { hex: '#7C3AED', label: 'Violet 600' },
    dark: { hex: '#A78BFA', label: 'Violet 400' }
  }
];