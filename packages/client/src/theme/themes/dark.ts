import { IThemeRGB } from '../types';

/**
 * Dark theme
 * RGB values extracted from the existing dark mode CSS variables
 */
export const darkTheme: IThemeRGB = {
  // Text colors
  'rgb-text-primary': '236 236 236', // #ececec (gray-100)
  'rgb-text-secondary': '205 205 205', // #cdcdcd (gray-300)
  'rgb-text-secondary-alt': '153 150 150', // #999696 (gray-400)
  'rgb-text-tertiary': '89 89 89', // #595959 (gray-500)
  'rgb-text-warning': '245 158 11', // #f59e0b (amber-500)

  // Ring colors (not defined in dark mode, using default)
  'rgb-ring-primary': '89 89 89', // #595959 (gray-500)

  // Header colors
  'rgb-header-primary': '24 22 35', // Dark purple header
  'rgb-header-hover': '30 27 44', // Dark purple header hover
  'rgb-header-button-hover': '42 36 58', // Dark purple button hover

  // Surface colors
  'rgb-surface-active': '88 71 139', // Dark purple active
  'rgb-surface-active-alt': '76 58 128', // Darker purple active
  'rgb-surface-hover': '76 58 128', // Dark purple hover
  'rgb-surface-hover-alt': '76 58 128', // Dark purple hover alt
  'rgb-surface-primary': '13 13 13', // #0d0d0d (gray-900)
  'rgb-surface-primary-alt': '30 27 44', // Very dark purple background
  'rgb-surface-primary-contrast': '42 36 58', // Dark purple contrast
  'rgb-surface-secondary': '24 22 35', // Dark purple secondary
  'rgb-surface-secondary-alt': '30 27 44', // Dark purple secondary alt
  'rgb-surface-tertiary': '42 36 58', // Purple tertiary dark
  'rgb-surface-tertiary-alt': '54 47 73', // Purple tertiary alt dark
  'rgb-surface-dialog': '23 23 23', // #171717 (gray-850)
  'rgb-surface-submit': '124 58 237', // Purple-700 for dark mode submit
  'rgb-surface-submit-hover': '109 40 217', // Purple-800 for submit hover
  'rgb-surface-destructive': '153 27 27', // #991b1b (red-800)
  'rgb-surface-destructive-hover': '127 29 29', // #7f1d1d (red-900)
  'rgb-surface-chat': '30 27 44', // Dark purple chat background

  // Border colors
  'rgb-border-light': '54 47 73', // Dark purple light border
  'rgb-border-medium': '76 58 128', // Dark purple medium border
  'rgb-border-medium-alt': '76 58 128', // Dark purple medium border alt
  'rgb-border-heavy': '88 71 139', // Dark purple heavy border
  'rgb-border-xheavy': '124 58 237', // Strong purple border

  // Brand colors
  'rgb-brand-purple': '147 102 255', // Brighter purple for dark mode

  // Presentation
  'rgb-presentation': '24 22 35', // Dark purple presentation

  // Utility colors (mapped to existing colors for backwards compatibility)
  'rgb-background': '24 22 35', // Dark purple background
  'rgb-foreground': '255 255 255', // Same as text-primary
  'rgb-primary': '124 58 237', // Purple-700 primary for dark
  'rgb-primary-foreground': '255 255 255', // White text on purple
  'rgb-secondary': '30 27 44', // Dark purple secondary
  'rgb-secondary-foreground': '193 193 193', // Same as text-secondary
  'rgb-muted': '42 36 58', // Dark purple muted
  'rgb-muted-foreground': '140 140 140', // Same as text-tertiary
  'rgb-accent': '76 58 128', // Dark purple accent
  'rgb-accent-foreground': '255 255 255', // Same as text-primary
  'rgb-destructive-foreground': '255 255 255', // Same as text-primary
  'rgb-border': '76 58 128', // Dark purple border
  'rgb-input': '54 47 73', // Dark purple input border
  'rgb-ring': '147 102 255', // Bright purple ring/focus
  'rgb-card': '30 27 44', // Dark purple card
  'rgb-card-foreground': '255 255 255', // Same as text-primary
};
