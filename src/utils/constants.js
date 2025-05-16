export const API_BASE_URL = 'http://localhost/eyecare-vision/api';

export const TIME_SLOTS = [
  { start: '18:00', end: '18:30' },
  { start: '18:30', end: '19:00' },
  { start: '19:00', end: '19:30' },
  { start: '19:30', end: '20:00' },
  { start: '20:00', end: '20:30' },
  { start: '20:30', end: '21:00' },
  { start: '21:00', end: '21:30' },
];

export const SERVICES = [
  {
    id: 1,
    title: 'Comprehensive Eye Exam',
    description: 'Detailed examination of your eye health and vision',
    icon: 'eye',
  },
  {
    id: 2,
    title: 'Contact Lens Fitting',
    description: 'Professional fitting for comfortable contact lenses',
    icon: 'contact',
  },
  {
    id: 3,
    title: 'Dry Eye Treatment',
    description: 'Specialized treatments for dry eye syndrome',
    icon: 'droplet',
  },
  {
    id: 4,
    title: 'Glaucoma Screening',
    description: 'Early detection and management of glaucoma',
    icon: 'glasses',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Software Engineer',
    content: 'Dr. Varun provided excellent care and explained everything clearly. My vision has improved significantly!',
    rating: 5,
  },
  // Add more testimonials as needed
];