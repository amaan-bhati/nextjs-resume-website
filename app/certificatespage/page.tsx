import React from 'react';

const CertificatesPage = () => {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-3">
      <section id="certificates">
        <div className="space-y-12 w-full py-12">
          <h2 className="text-3xl font-bold tracking-tighter text-center">
            My Certificates
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
            Here are some of the certificates I have earned throughout my journey.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {/* I'll map the certificates through certificates data here */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CertificatesPage;



{/* <section id="certificates">
  <div className="space-y-12 w-full py-12">
    <h2 className="text-3xl font-bold tracking-tighter text-center">Certificates</h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
      {DATA.certificates.map((certificate, id) => (
        <div key={id} className="border rounded-lg p-4 shadow-md">
          <img src={certificate.image} alt={certificate.title} className="w-full h-32 object-cover rounded-t-lg" />
          <h3 className="text-xl font-semibold mt-2">{certificate.title}</h3>
          <p className="text-muted-foreground mt-1">{certificate.description}</p>
          <a href={certificate.href} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            View Certificate
          </a>
        </div>
      ))}
    </div>
  </div>
</section> */}
