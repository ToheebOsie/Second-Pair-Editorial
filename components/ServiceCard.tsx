import Link from 'next/link';
export function ServiceCard({service,index}:{service:any,index:number}){return <Link href={`/services/${service.slug}`} className="service-card"><span className="index">0{index+1}</span><span className="eyebrow">{service.group}</span><h3>{service.name}</h3><p>{service.intro}</p><span className="card-link">Explore service →</span></Link>}
