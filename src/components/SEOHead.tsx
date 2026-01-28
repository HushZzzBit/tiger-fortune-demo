import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: object;
}

const DOMAIN = 'https://oamorcontagia.site';
const DEFAULT_IMAGE = 'https://storage.googleapis.com/gpt-engineer-file-uploads/n89c9YLilOQvSHfoPYseziuljZq2/social-images/social-1769594447975-homa-fortune.png';

const SEOHead = ({
  title,
  description,
  canonical,
  keywords,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  jsonLd
}: SEOHeadProps) => {
  const fullCanonical = canonical.startsWith('http') ? canonical : `${DOMAIN}${canonical}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Fortune Tiger Demo" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
