// Enquiry form definitions for the Contact page (four routes) and the Engineering Café.
// Field spec: { name, label, type, required, options, placeholder, autocomplete, accept, rows, hint }

const industryOptions = [
  ['chemical-process', 'Chemical Process'],
  ['cement', 'Cement'],
  ['pharmaceuticals', 'Pharmaceuticals'],
  ['oil-gas', 'Oil & Gas'],
  ['other', 'Other / not sure'],
];

const name = { name: 'name', label: 'Full name', type: 'text', required: true, autocomplete: 'name' };
const email = { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' };
const organisation = { name: 'organisation', label: 'Company / organisation', type: 'text', autocomplete: 'organization' };

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
      { name: 'industry', label: 'Industry', type: 'select', options: industryOptions },
      { name: 'message', label: 'Your engineering challenge', type: 'textarea', required: true, rows: 5, placeholder: 'What are you trying to understand, improve or solve?' },
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
      { name: 'interest', label: 'Area of interest', type: 'select', options: [['software', 'Engineering software'], ['training', 'Technical training'], ['proof-of-concept', 'Proof-of-concept study'], ['integration', 'Integration / application support'], ['other', 'Other']] },
      { name: 'message', label: 'Your enquiry', type: 'textarea', required: true, rows: 5 },
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
      { name: 'role', label: 'Role or area of interest', type: 'text' },
      { name: 'resume', label: 'Resume', type: 'file', required: true, accept: '.pdf,.doc,.docx', hint: 'PDF, DOC or DOCX, up to 5 MB.' },
      { name: 'message', label: 'Cover note (optional)', type: 'textarea', rows: 4 },
    ],
  },
  {
    id: 'general-enquiries',
    type: 'general',
    tab: 'General',
    title: 'General enquiries',
    intro: 'Anything else you would like to ask or tell us.',
    submit: 'Send message',
    fields: [name, email, { name: 'message', label: 'Message', type: 'textarea', required: true, rows: 5 }],
  },
];

export const cafeForm = {
  id: 'cafe-conversation',
  type: 'cafe',
  title: 'Start a conversation',
  intro: 'No project brief needed. Share a question, a challenge or an idea. Add an email if you would like us to reply.',
  submit: 'Share with the Café',
  fields: [
    { name: 'message', label: 'Your question or idea', type: 'textarea', required: true, rows: 5, placeholder: 'For example: we see uneven gas distribution in a vessel and wonder how to approach it...' },
    { name: 'name', label: 'Name (optional)', type: 'text', autocomplete: 'name' },
    { name: 'email', label: 'Email (optional)', type: 'email', autocomplete: 'email' },
  ],
};
