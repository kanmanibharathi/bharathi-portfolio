import { biotechTheme } from './biotech';
import { devTheme } from './dev';
import { designTheme } from './design';
import { aiTheme } from './ai';
import { storeroomTheme } from './storeroom';

export const themes = {
    biotech: biotechTheme,
    dev: devTheme,
    design: designTheme,
    ai: aiTheme,
    storeroom: storeroomTheme,
};

export const categoryOrder = ['biotech', 'dev', 'design', 'ai', 'storeroom'];

export function getTheme(categoryName) {
    return themes[categoryName] || biotechTheme;
}

export function applyThemeToCSS(theme, mode) {
    const root = document.documentElement;
    const modeColors = mode === 'dark' ? theme.colors.dark : theme.colors.light;

    const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
    };

    const primary = modeColors.primary || theme.colors.primary;
    root.style.setProperty('--color-primary', primary);
    root.style.setProperty('--color-primary-rgb', hexToRgb(primary));
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-accent', theme.colors.accent);
    root.style.setProperty('--color-surface', theme.colors.surface);
    root.style.setProperty('--color-bg', modeColors.background);
    root.style.setProperty('--color-surface-bg', modeColors.surface);

    // Attempt to get RGB for surface bg if it's hex, otherwise default to a known value
    if (modeColors.surface.startsWith('#')) {
        root.style.setProperty('--color-surface-bg-rgb', hexToRgb(modeColors.surface));
    } else {
        root.style.setProperty('--color-surface-bg-rgb', mode === 'dark' ? '15, 23, 42' : '255, 255, 255');
    }

    root.style.setProperty('--color-text', modeColors.text);
    root.style.setProperty('--color-text-secondary', modeColors.textSecondary);
    root.style.setProperty('--color-card-bg', modeColors.cardBg);
    root.style.setProperty('--color-border', modeColors.border);
    if (modeColors.border.startsWith('#')) {
        root.style.setProperty('--color-border-rgb', hexToRgb(modeColors.border));
    } else {
        root.style.setProperty('--color-border-rgb', mode === 'dark' ? '16, 185, 129' : '16, 185, 129'); // Fallback to primary-ish
    }
    root.style.setProperty('--font-heading', theme.typography.heading);
    root.style.setProperty('--font-body', theme.typography.body);

    root.setAttribute('data-theme', `${theme.name}-${mode}`);
}
