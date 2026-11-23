// Edit the gradients here to update icon colors across the website.
export const iconGradients = {
  default: 'from-blue-500 to-sky-400',
  'capability.simulation': 'from-blue-500 to-sky-400',
  'capability.process': 'from-emerald-500 to-teal-400',
  'capability.design': 'from-sky-500 to-indigo-400',
  'capability.data': 'from-purple-500 to-violet-400',
  'capability.software': 'from-orange-500 to-accent',
  'capability.digital': 'from-teal-500 to-emerald-400',
  'social.linkedin': 'from-sky-600 to-blue-700',
  'social.twitter': 'from-cyan-500 to-sky-400',
  'social.youtube': 'from-red-500 to-rose-500',
};

export function getIconGradient(key) {
  return iconGradients[key] || iconGradients.default;
}
