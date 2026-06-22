import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`liquid-toggle ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="liquid-blob" style={{ left: isDark ? '36px' : '4px' }} />
      <span className="liquid-knob">
        {isDark ? (
          <Moon size={14} className="toggle-icon" />
        ) : (
          <Sun size={14} className="toggle-icon" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
