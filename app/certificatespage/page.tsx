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
