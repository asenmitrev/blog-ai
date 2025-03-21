export type WebsiteConfig = {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  googleAdsenseVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
  /**
   * Shows all post tags in main index view and post view if true
   * Otherwise only shows first (primary) tag
   */
  showAllTags: boolean;
};

const config: WebsiteConfig = {
  title: 'Пътеводителят на Аврора',
  description:
    'Аз съм Аврора и това е моят блог. Тук правя записки за всички места, на които съм била, и това, което ми се е случило. Това е моят travel blog.',
  coverImage: 'img/cover.webp',
  logo: 'img/logo.png',
  lang: 'en',
  siteUrl: 'https://aurora.xn--90aexm.com/',
  // facebook: 'https://www.facebook.com/ghost',
  // twitter: 'https://twitter.com/tryghost',
  showSubscribe: false,
  // mailchimpAction:
  // 'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
  // mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
  // mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: '6bGR3o9w-if2JP0rFHHVTjimxnEyvwSPjmnMJTuW7is',
  googleAdsenseVerification: 'ca-pub-5631475815973885',
  footer: 'е блог за пътуване.',
  showAllTags: true,
};

export default config;
