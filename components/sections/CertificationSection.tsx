import { sanityFetch } from '@/sanity/lib/live';
import { defineQuery } from 'next-sanity';

const CERTIFICATION_QUERY =
  defineQuery(`*[_type == "certification"] | order(issueDate desc){
    name,
    issuer,
    issueDate,
    expiryDate,
    credentialId,
    credentialUrl,
    logo,
    description,
    }`);

async function CertificationSection() {
  const { data: certifications } = await sanityFetch({
    query: CERTIFICATION_QUERY,
  });

  if (!certifications || certifications.length === 0) {
    return null;
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  const isExpired = (expiryDate: string | null | undefined) => {
    if (!expiryDate) return false;
    return new Date(expiryDate) < new Date();
  };

  return <div>CertificationSection</div>;
}

export default CertificationSection;
