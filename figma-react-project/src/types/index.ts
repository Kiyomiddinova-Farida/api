// Common component props
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Button component props
export interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

// Card component props
export interface CardProps extends BaseProps {
  title?: string;
  subtitle?: string;
  image?: string;
  footer?: React.ReactNode;
}

// Modal component props
export interface ModalProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
}

// Form field props
export interface FormFieldProps extends BaseProps {
  label?: string;
  error?: string;
  required?: boolean;
  helpText?: string;
}

// Input component props
export interface InputProps extends FormFieldProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  disabled?: boolean;
  readOnly?: boolean;
}

// Navigation item
export interface NavItem {
  id: string;
  label: string;
  href: string;
  active?: boolean;
  children?: NavItem[];
}

// Theme colors
export type ThemeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';

// Spacing sizes
export type SpacingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// Breakpoints
export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'large';