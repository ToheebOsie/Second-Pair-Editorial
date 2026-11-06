import {site} from '../config/site';

type JsonLdProps = {data: Record<string, unknown>};

export function StructuredData({data}: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}} />;
}

export function OrganizationSchema() {
  return <StructuredData data={{
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    url: site.website,
    logo: `${site.website}/brand/second-pair-symbol.png`,
    description: site.description,
    email: site.email,
    founder: {'@type': 'Person', name: site.founder},
    areaServed: 'Worldwide',
    serviceType: 'Editorial services for authors',
  }} />;
}

export function BreadcrumbSchema({items}: {items: {name: string; url: string}[]}) {
  return <StructuredData data={{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem', position: index + 1, name: item.name, item: item.url,
    })),
  }} />;
}
