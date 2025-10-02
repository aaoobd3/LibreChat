import { IThemeRGB } from '../types';

/**
 * Default light theme
 * RGB values extracted from the existing CSS variables
 */
export const defaultTheme: IThemeRGB = {
  // Text colors
  'rgb-text-primary': '33 33 33', // #212121 (gray-800)
  'rgb-text-secondary': '66 66 66', // #424242 (gray-600)
  'rgb-text-secondary-alt': '89 89 89', // #595959 (gray-500)
  'rgb-text-tertiary': '89 89 89', // #595959 (gray-500)
  'rgb-text-warning': '245 158 11', // #f59e0b (amber-500)

  // Ring colors
  'rgb-ring-primary': '89 89 89', // #595959 (gray-500)

  // Header colors
  'rgb-header-primary': '255 255 255', // #fff (white)
  'rgb-header-hover': '252 251 254', // Very light purple hover
  'rgb-header-button-hover': '243 232 255', // Light purple button hover

  // Surface colors
  'rgb-surface-active': '243 232 255', // Light purple tint
  'rgb-surface-active-alt': '237 223 254', // Slightly darker purple tint
  'rgb-surface-hover': '237 223 254', // Purple hover state
  'rgb-surface-hover-alt': '221 214 254', // Deeper purple hover
  'rgb-surface-primary': '255 255 255', // #fff (white)
  'rgb-surface-primary-alt': '252 251 254', // Very light purple tint
  'rgb-surface-primary-contrast': '243 232 255', // Light purple contrast
  'rgb-surface-secondary': '252 251 254', // Very light purple background
  'rgb-surface-secondary-alt': '243 232 255', // Light purple secondary
  'rgb-surface-tertiary': '237 223 254', // Purple tertiary
  'rgb-surface-tertiary-alt': '255 255 255', // #fff (white)
  'rgb-surface-dialog': '255 255 255', // #fff (white)
  'rgb-surface-submit': '139 92 246', // Purple-600 for submit buttons
  'rgb-surface-submit-hover': '124 58 237', // Purple-700 for submit hover
  'rgb-surface-destructive': '185 28 28', // #b91c1c (red-700)
  'rgb-surface-destructive-hover': '153 27 27', // #991b1b (red-800)
  'rgb-surface-chat': '255 255 255', // #fff (white)

  // Border colors
  'rgb-border-light': '237 223 254', // Light purple border
  'rgb-border-medium': '221 214 254', // Medium purple border
  'rgb-border-medium-alt': '221 214 254', // Medium purple border alt
  'rgb-border-heavy': '196 181 253', // Heavier purple border
  'rgb-border-xheavy': '167 139 250', // Strong purple border

  // Brand colors
  'rgb-brand-purple': '139 92 246', // Purple-600 - primary brand color

  // Presentation
  'rgb-presentation': '255 255 255', // #fff (white)

  // Utility colors (mapped to existing colors for backwards compatibility)
  'rgb-background': '255 255 255', // Same as surface-primary
  'rgb-foreground': '17 17 17', // Same as text-primary
  'rgb-primary': '139 92 246', // Purple-600 primary
  'rgb-primary-foreground': '255 255 255', // White text on purple
  'rgb-secondary': '252 251 254', // Very light purple secondary
  'rgb-secondary-foreground': '66 66 66', // Same as text-secondary
  'rgb-muted': '243 232 255', // Light purple muted
  'rgb-muted-foreground': '120 120 120', // Same as text-tertiary
  'rgb-accent': '237 223 254', // Purple accent
  'rgb-accent-foreground': '17 17 17', // Same as text-primary
  'rgb-destructive-foreground': '17 17 17', // Same as text-primary
  'rgb-border': '221 214 254', // Purple border
  'rgb-input': '237 223 254', // Purple input border
  'rgb-ring': '167 139 250', // Purple ring/focus
  'rgb-card': '252 251 254', // Very light purple card
  'rgb-card-foreground': '17 17 17', // Same as text-primary
};
