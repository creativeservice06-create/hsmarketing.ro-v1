import type {MetadataRoute} from 'next';
import {SERVICES,SITE} from '@/lib/site';
const routes=['','contact','politica-confidentialitate','politica-cookie-uri',...SERVICES.map(s=>s.slug)];
export default function sitemap():MetadataRoute.Sitemap{return routes.map(slug=>({url:`${SITE.url}/${slug?slug+'/':''}`,changeFrequency:slug?'monthly':'weekly',priority:slug?0.7:1}));}
