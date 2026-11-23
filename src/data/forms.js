// Enquiry form definitions for the Contact page (four routes) and the Engineering Cafe.
// Field spec: { name, label, type, required, options, placeholder, autocomplete, accept, rows, hint }

const industryOptions = [
  ['chemical-process', 'Chemical Process'],
  ['cement', 'Cement'],
  ['pharmaceuticals', 'Pharmaceuticals'],
  ['oil-gas', 'Oil & Gas'],
  ['other', 'Other / not sure'],
];

// Free form services (e.g. Web3Forms free plan) cannot take file attachments. Set PUBLIC_FORM_FILE_UPLOADS=true once
// the service/plan supports them; until then Careers asks for a resume link instead.
const fileUploads = import.meta.env.PUBLIC_FORM_FILE_UPLOADS === 'true';

const name = { name: 'name', label: 'Full name', type: 'text', required: true, autocomplete: 'name', group: 'Your details' };
const email = { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email', group: 'Your details' };
const organisation = { name: 'organisation', label: 'Company / organisation', type: 'text', autocomplete: 'organization', group: 'Your details' };

export const contactForms = [
  {
    id: 'business-enquiries',
    type: 'business',
    tab: 'Business & Engineering',
    title: 'Business and engineering enquiries',
    intro: 'Describe the process, equipment or engineering challenge you are facing. A brief outline is enough to start a conversation.',
    submit: 'Send enquiry',
    fields: [
      name, email, { ...organisation, required: true },
      { name: 'industry', label: 'Industry', type: 'select', options: industryOptions, group: 'Your enquiry' },
      { name: 'message', label: 'Your engineering challenge', type: 'textarea', required: true, rows: 5, group: 'Your enquiry', placeholder: 'What are you trying to understand, improve or solve?' },
    ],
  },
  {
    id: 'training-enquiries',
    type: 'training',
    tab: 'Software & Training',
    title: 'Software and technical training enquiries',
    intro: 'Ask about engineering software, training, proof-of-concept studies or application support.',
    submit: 'Send enquiry',
    fields: [
      name, email, organisation,
      { name: 'interest', group: 'Your enquiry', label: 'Area of interest', type: 'select', options: [['software', 'Engineering software'], ['training', 'Technical training'], ['proof-of-concept', 'Proof-of-concept study'], ['integration', 'Integration / application support'], ['other', 'Other']] },
      { name: 'message', label: 'Your enquiry', type: 'textarea', required: true, rows: 5, group: 'Your enquiry' },
    ],
  },
  {
    id: 'careers',
    type: 'careers',
    tab: 'Careers',
    title: 'Careers',
    intro: 'Interested in working with us? Send your details and resume.',
    submit: 'Submit application',
    fields: [
      name, email,
      { name: 'role', label: 'Role or area of interest', type: 'text', group: 'Your application' },
      fileUploads
        ? { name: 'resume', group: 'Your application', label: 'Resume', type: 'file', required: true, accept: '.pdf,.doc,.docx', hint: 'PDF, DOC or DOCX, up to 5 MB.' }
        : { name: 'resume_link', group: 'Your application', label: 'Link to your resume or profile', type: 'url', required: true, placeholder: 'https://...', hint: 'A shared Google Drive / Dropbox link or your LinkedIn profile.' },
      { name: 'message', label: 'Cover note (optional)', type: 'textarea', rows: 4, group: 'Your application' },
    ],
  },
  {
    id: 'general-enquiries',
    type: 'general',
    tab: 'General',
    title: 'General enquiries',
    intro: 'Anything else you would like to ask or tell us.',
    submit: 'Send message',
    fields: [name, email, { name: 'message', label: 'Message', type: 'textarea', required: true, rows: 5, group: 'Your message' }],
  },
];

export const cafeForm = {
  id: 'cafe-conversation',
  type: 'cafe',
  title: 'Start a conversation',
  intro: 'No project brief needed. Share a question, a challenge or an idea. Add an email if you would like us to reply.',
  submit: 'Share with the Cafe',
  fields: [
    { name: 'message', group: 'Your conversation', label: 'Your question or idea', type: 'textarea', required: true, rows: 5, placeholder: 'For example: we see uneven gas distribution in a vessel and wonder how to approach it...' },
    { name: 'name', group: 'About you (optional)', label: 'Name', type: 'text', autocomplete: 'name' },
    { name: 'email', group: 'About you (optional)', label: 'Email', type: 'email', autocomplete: 'email' },
  ],
};
