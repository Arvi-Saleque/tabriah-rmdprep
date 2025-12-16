export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  event({
    action: 'button_click',
    category: 'Button',
    label: `${buttonName} - ${location}`,
  });
};

// Track navigation
export const trackNavigation = (destination: string, source: string) => {
  event({
    action: 'navigation',
    category: 'Navigation',
    label: `${source} → ${destination}`,
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string, step?: number) => {
  event({
    action: 'form_submit',
    category: 'Form',
    label: step ? `${formName} - Step ${step}` : formName,
    value: step,
  });
};

// Track form step progression
export const trackFormStep = (step: number, action: 'next' | 'back') => {
  event({
    action: `form_step_${action}`,
    category: 'Form',
    label: `Registration Step ${step}`,
    value: step,
  });
};

// Track video interactions
export const trackVideoClick = (classNumber: number, hasLink: boolean) => {
  event({
    action: hasLink ? 'video_click' : 'video_unavailable',
    category: 'Video',
    label: `Class ${classNumber}`,
    value: classNumber,
  });
};

// Track resource downloads
export const trackResourceClick = (classNumber: number, hasLink: boolean) => {
  event({
    action: hasLink ? 'resource_click' : 'resource_unavailable',
    category: 'Resource',
    label: `Class ${classNumber}`,
    value: classNumber,
  });
};

// Track social media clicks
export const trackSocialClick = (platform: string, location: string) => {
  event({
    action: 'social_click',
    category: 'Social Media',
    label: `${platform} - ${location}`,
  });
};

// Track external links
export const trackExternalLink = (url: string, linkText: string) => {
  event({
    action: 'external_link',
    category: 'Outbound Link',
    label: `${linkText} - ${url}`,
  });
};

// Track admin actions
export const trackAdminAction = (action: string, target?: string) => {
  event({
    action: 'admin_action',
    category: 'Admin',
    label: target ? `${action} - ${target}` : action,
  });
};

// Track registration verification
export const trackRegistrationVerify = (action: 'verify' | 'unverify', registrationId: string) => {
  event({
    action: 'registration_verify',
    category: 'Admin',
    label: `${action} - ${registrationId}`,
  });
};
