// =============================================================================
// Legal copy & disclaimers — edit before launch; have counsel review
// =============================================================================

import { BRAND } from './brand'

/** Static date — update when policy content changes */
export const LEGAL_LAST_UPDATED = 'October 13, 2026' as const

export const DISCLAIMERS = {
  quote:
    'Quotes are preliminary and may change after project review, inspection, material pricing, site conditions, or customer-requested modifications.',
  serviceArea:
    'Service availability may vary based on location, project scope, and scheduling.',
  photo:
    'Project photography, promotional images, and design concepts are labeled in the gallery.',
} as const

export const PRIVACY_POLICY = {
  title: 'Privacy Policy',
  intro: `${BRAND.legalName} ("we," "us," or "our") operates ${BRAND.domain}. This Privacy Policy explains how we collect, use, and protect information when you visit our website or contact us about mobile welding and custom fabrication services. We are a Florida-based business located in Cape Coral, Florida.`,
  sections: [
    {
      title: 'Information We Collect',
      paragraphs: [
        'When you visit our website, we may collect standard technical information through typical browser and server logs, such as IP address, browser type, pages viewed, and referring URL.',
        'When you submit a quote request or contact us, we may collect your name, phone number, email address, project type, project description, and any photos or attachments you choose to share.',
      ],
    },
    {
      title: 'Contact Form Data Usage',
      paragraphs: [
        'Information submitted through our contact or quote request form is used to review your project, respond to your inquiry, prepare preliminary estimates, schedule follow-up communication, and plan fabrication work if you proceed with a project.',
        'We do not sell your personal information. Form data is used for business communication and project-related purposes connected to services offered by Tip Top Welding LLC.',
        'Netlify hosts our website and processes quote submissions and uploaded project photos. Submission notifications are delivered to our business email address.',
      ],
    },
    {
      title: 'Email Communications',
      paragraphs: [
        'If you contact us by email or submit a form that includes your email address, we may use that address to respond to your inquiry, send project updates, request additional information, or communicate about scheduling and scope.',
        'You may contact us to request that we stop sending non-essential project communications, subject to any records we are required to retain for business or legal purposes.',
      ],
    },
    {
      title: 'Analytics',
      paragraphs: [
        'The website currently has no third-party advertising or visitor analytics scripts. Our hosting provider may process technical logs to operate and secure the website.',
      ],
    },
    {
      title: 'Cookies',
      paragraphs: [
        'The website stores your light or dark display preference in your browser’s local storage. You can change that preference using the theme button or remove it by clearing site data in your browser.',
        'External services you visit through links on this website may use their own cookies or storage under their own privacy policies.',
      ],
    },
    {
      title: 'Third-Party Links',
      paragraphs: [
        'Our website may include links to third-party websites or services, such as social media profiles, review platforms, or map services. We are not responsible for the privacy practices or content of those third-party sites.',
        'We encourage you to review the privacy policies of any third-party websites you visit from links on our site.',
      ],
    },
    {
      title: 'Data Retention',
      paragraphs: [
        'We retain contact and project information for as long as reasonably necessary to respond to inquiries, provide services, maintain business records, and comply with applicable obligations.',
      ],
    },
    {
      title: 'Your Rights & Choices',
      paragraphs: [
        'Depending on applicable law, you may have the right to request access to, correction of, or deletion of certain personal information we hold about you, or to object to or restrict certain processing.',
        'To make a privacy-related request, contact us using the information below. We will respond in accordance with applicable law.',
      ],
    },
    {
      title: 'Florida Business Notice',
      paragraphs: [
        `${BRAND.legalName} is located in Cape Coral, Florida. This Privacy Policy is provided for users of our website and services in Florida and elsewhere.`,
        'If you have questions about how we handle your information, contact us using the details below.',
      ],
    },
    {
      title: 'Changes to This Policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page will reflect the most recent revision.',
      ],
    },
  ],
} as const

export const TERMS_OF_SERVICE = {
  title: 'Terms of Service',
  intro: `By accessing and using the ${BRAND.domain} website, you agree to these Terms of Service. If you do not agree, please do not use this site. These terms apply to your use of the website operated by ${BRAND.legalName}, a Florida business.`,
  sections: [
    {
      title: 'General Website Usage',
      paragraphs: [
        `This website provides information about mobile welding and custom fabrication services offered by ${BRAND.legalName}. You agree to use the site only for lawful purposes and in a way that does not interfere with the site or others' use of it.`,
        'We may update, suspend, or discontinue any part of the website at any time without notice.',
      ],
    },
    {
      title: 'No Warranty on Website Information',
      paragraphs: [
        'Website content is provided for general informational purposes only. While we strive to keep information current, we make no warranty or representation that website content is complete, accurate, or suitable for any particular purpose.',
        'Service descriptions, project examples, photos, and other materials on this site are illustrative and may not reflect every project type, material option, timeline, or outcome.',
      ],
    },
    {
      title: 'Estimates & Quotes Are Not Binding',
      paragraphs: [
        'Quote requests, preliminary estimates, phone discussions, text messages, emails, and website forms do not create a binding contract.',
        'Final pricing, scope, materials, timeline, and payment terms are confirmed only through a separate written agreement or accepted work order after project review.',
        DISCLAIMERS.quote,
      ],
    },
    {
      title: 'Project Scope Subject to Inspection',
      paragraphs: [
        'All project scope, pricing, and timelines are subject to on-site or in-person inspection, photo review, material availability, access conditions, and verification of existing structures or vessels.',
        'Hidden damage, corrosion, prior repairs, site constraints, or conditions not visible in submitted photos may affect final scope and cost.',
      ],
    },
    {
      title: 'Right to Refuse Service',
      paragraphs: [
        `${BRAND.legalName} reserves the right to decline, postpone, or discontinue any inquiry, quote, or project at our discretion, including for scheduling, safety, scope, access, payment, or other business reasons.`,
      ],
    },
    {
      title: 'Intellectual Property',
      paragraphs: [
        `Website content, including text, layout, logos, images, and design elements, is owned by or licensed to ${BRAND.legalName} and is protected by applicable intellectual property laws.`,
        'You may not copy, reproduce, distribute, or exploit website content for commercial purposes without our prior written permission, except for personal, non-commercial viewing of the site.',
      ],
    },
    {
      title: 'Limitation of Liability',
      paragraphs: [
        `To the fullest extent permitted by applicable law, ${BRAND.legalName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or reliance on website information.`,
        'Your use of this website is at your own risk. Nothing in these Terms limits liability that cannot be limited under applicable law.',
      ],
    },
    {
      title: 'Third-Party Links',
      paragraphs: [
        'The website may link to third-party sites or services. We do not control and are not responsible for third-party content, policies, or practices.',
      ],
    },
    {
      title: 'Governing Law',
      paragraphs: [
        'These Terms of Service are governed by the laws of the State of Florida, without regard to conflict-of-law principles. Any dispute relating to these terms or use of the website shall be brought in the courts located in the State of Florida, unless otherwise required by applicable law.',
      ],
    },
    {
      title: 'Changes to These Terms',
      paragraphs: [
        'We may revise these Terms of Service at any time by updating this page. Continued use of the website after changes are posted constitutes acceptance of the revised terms.',
      ],
    },
  ],
} as const
