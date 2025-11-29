
export const NAV_ITEMS = [
  { label: 'Logo', href: '#logo' },
  { label: 'Typography', href: '#typography' },
  { label: 'Colors', href: '#colors' },
  { label: 'Assets', href: '#assets' },
  { label: 'Illustrations', href: '#illustrations' },
  { label: 'Icons', href: '#icons' },
];

export const COLORS = [
  // Brand
  { name: 'Blue 600', hex: '#2563EB', tailwindClass: 'bg-accent-600', sub: '(Brand)' },
  { name: 'Blue 700', hex: '#1D4ED8', tailwindClass: 'bg-accent-700', sub: '' },
  { name: 'Blue 500', hex: '#3B82F6', tailwindClass: 'bg-accent-500', sub: '' },
  
  // Neutrals
  { name: 'Slate 950', hex: '#020617', tailwindClass: 'bg-primary-900', sub: '', ring: 'ring-white/10' },
  { name: 'White', hex: '#FFFFFF', tailwindClass: 'bg-white', sub: '', ring: 'ring-slate-200' },
  { name: 'Slate 50', hex: '#F8FAFC', tailwindClass: 'bg-slate-50', sub: '', ring: 'ring-slate-200' },
  
  // Semantic
  { name: 'Emerald 500', hex: '#10B981', tailwindClass: 'bg-emerald-500', sub: '(Success)' },
  { name: 'Rose 500', hex: '#F43F5E', tailwindClass: 'bg-rose-500', sub: '(Error)' },
  { name: 'Amber 500', hex: '#F59E0B', tailwindClass: 'bg-amber-500', sub: '(Warning)' },
  { name: 'Sky 500', hex: '#0EA5E9', tailwindClass: 'bg-sky-500', sub: '(Info)' },
];

export const THEME_TOKENS = [
  {
    token: 'App Background',
    description: 'Main application background',
    light: { hex: '#F8FAFC', label: 'Slate 50' },
    dark: { hex: '#000000', label: 'Black' }
  },
  {
    token: 'Card Surface',
    description: 'Container background for panels',
    light: { hex: '#FFFFFF', label: 'White' },
    dark: { hex: '#09090B', label: 'Zinc 950' }
  },
  {
    token: 'Borders',
    description: 'Separators and outlines',
    light: { hex: '#E2E8F0', label: 'Slate 200' },
    dark: { hex: '#27272A', label: 'Zinc 800' }
  },
  {
    token: 'Primary Text',
    description: 'Headings and body text',
    light: { hex: '#0F172A', label: 'Slate 900' },
    dark: { hex: '#FAFAFA', label: 'Zinc 50' }
  },
  {
    token: 'Muted Text',
    description: 'Secondary labels and captions',
    light: { hex: '#64748B', label: 'Slate 500' },
    dark: { hex: '#A1A1AA', label: 'Zinc 400' }
  }
];
